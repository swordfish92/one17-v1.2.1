"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CalendarGatewayService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarGatewayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const calendar_token_crypto_1 = require("./calendar-token-crypto");
const gateway_secret_masking_1 = require("../common/gateway-secret-masking");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
const calendar_gateway_types_1 = require("./calendar-gateway.types");
let CalendarGatewayService = class CalendarGatewayService {
    static { CalendarGatewayService_1 = this; }
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async listProviders() {
        const rows = await this.prisma.calendarGatewayProvider.findMany({ orderBy: { providerSlot: 'asc' } });
        return rows.map((p) => this.serializeProvider(p));
    }
    async proposeProviderConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'CALENDAR_GATEWAY_POLICY', 'INITIATE', 'propose a calendar gateway provider config change');
        if (input.providerSlot < 1 || input.providerSlot > 2) {
            throw new calendar_gateway_types_1.CalendarGatewayError('CalendarGateway supports exactly 2 provider slots (1=Microsoft Graph, 2=Google), per invariant 73(b).');
        }
        if (!input.clientId) {
            throw new calendar_gateway_types_1.CalendarGatewayError('clientId is required when proposing a CalendarGateway provider slot.');
        }
        if (input.adapterType === 'MICROSOFT_GRAPH' && !input.tenantId) {
            throw new calendar_gateway_types_1.CalendarGatewayError('tenantId (the Azure AD tenant the app registration lives in) is required when proposing a MICROSOFT_GRAPH slot.');
        }
        let provider = await this.prisma.calendarGatewayProvider.findUnique({ where: { providerSlot: input.providerSlot } });
        if (provider?.configWorkflowInstanceId) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
        }
        if (!provider) {
            provider = await this.prisma.calendarGatewayProvider.create({
                data: { providerSlot: input.providerSlot, adapterType: input.adapterType, name: input.name, isActive: false, configuredByUserId: actorUserId },
            });
        }
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'CALENDAR_GATEWAY_CONFIG',
            entityType: 'calendar_gateway_provider',
            entityId: provider.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        const updated = await this.prisma.calendarGatewayProvider.update({
            where: { id: provider.id },
            data: {
                pendingName: input.name,
                pendingClientId: input.clientId,
                ...(input.clientSecret ? { pendingClientSecret: (0, gateway_secret_crypto_1.encryptSecret)(input.clientSecret) } : {}),
                pendingTenantId: input.adapterType === 'MICROSOFT_GRAPH' ? input.tenantId : null,
                pendingIsActive: input.isActive,
                pendingProposedByUserId: actorUserId,
                configWorkflowInstanceId: workflowInstance.id,
            },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'calendar_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.clientSecret } });
        return this.serializeProvider(updated);
    }
    async approveProviderConfig(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const provider = await this.prisma.calendarGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeProvider(provider);
        const updated = await this.prisma.calendarGatewayProvider.update({
            where: { id: provider.id },
            data: {
                name: provider.pendingName ?? provider.name,
                clientId: provider.pendingClientId ?? provider.clientId,
                ...(provider.pendingClientSecret ? { clientSecret: provider.pendingClientSecret } : {}),
                tenantId: provider.pendingTenantId ?? provider.tenantId,
                isActive: provider.pendingIsActive ?? provider.isActive,
                configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
                pendingName: null,
                pendingClientId: null,
                pendingClientSecret: null,
                pendingTenantId: null,
                pendingIsActive: null,
                pendingProposedByUserId: null,
                configWorkflowInstanceId: null,
            },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'calendar_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, name: updated.name, isActive: updated.isActive } });
        return this.serializeProvider(updated);
    }
    async listMyConnections(userId) {
        const rows = await this.prisma.externalCalendarConnection.findMany({
            where: { userId },
            include: { provider: { select: { id: true, adapterType: true, name: true, isActive: true } } },
            orderBy: { connectedAt: 'desc' },
        });
        return rows.map((c) => ({
            id: c.id,
            providerId: c.providerId,
            provider: c.provider,
            scope: c.scope,
            expiresAt: c.expiresAt,
            connectedAt: c.connectedAt,
            revokedAt: c.revokedAt,
            lastSyncedAt: c.lastSyncedAt,
        }));
    }
    oauthScopeFor(adapterType) {
        return adapterType === 'MICROSOFT_GRAPH'
            ? 'offline_access https://graph.microsoft.com/Calendars.ReadBasic'
            : 'https://www.googleapis.com/auth/calendar.freebusy';
    }
    async getAuthorizationUrl(providerId, actorUserId, redirectUri) {
        const provider = await this.prisma.calendarGatewayProvider.findUniqueOrThrow({ where: { id: providerId } });
        if (!provider.isActive || !provider.clientId) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`CalendarGateway provider "${provider.name || provider.providerSlot}" is not ACTIVE/configured yet -- a tenant's ICT must configure and get MD_CEO approval on this slot before staff can connect.`);
        }
        const state = (0, calendar_token_crypto_1.signOAuthState)({ providerId, userId: actorUserId });
        const scope = this.oauthScopeFor(provider.adapterType);
        let url;
        if (provider.adapterType === 'MICROSOFT_GRAPH') {
            const params = new URLSearchParams({
                client_id: provider.clientId,
                response_type: 'code',
                redirect_uri: redirectUri,
                response_mode: 'query',
                scope,
                state,
            });
            url = `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/authorize?${params.toString()}`;
        }
        else {
            const params = new URLSearchParams({
                client_id: provider.clientId,
                response_type: 'code',
                redirect_uri: redirectUri,
                scope,
                access_type: 'offline',
                prompt: 'consent',
                state,
            });
            url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
        }
        return { url, scope, redirectUri };
    }
    async handleCallback(providerId, code, state, redirectUri, actorUserId) {
        const statePayload = (0, calendar_token_crypto_1.verifyOAuthState)(state);
        if (statePayload.providerId !== providerId || statePayload.userId !== actorUserId) {
            throw new calendar_gateway_types_1.CalendarGatewayError('OAuth state does not match this callback (provider/user mismatch) -- possible CSRF or a stale link. Restart the connect flow.');
        }
        const provider = await this.prisma.calendarGatewayProvider.findUniqueOrThrow({ where: { id: providerId } });
        if (!provider.isActive || !provider.clientId) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`CalendarGateway provider "${provider.name || provider.providerSlot}" is not ACTIVE -- cannot complete a connect flow against it.`);
        }
        const tokens = await this.exchangeCodeForTokens(provider, code, redirectUri);
        const connection = await this.prisma.externalCalendarConnection.upsert({
            where: { userId_providerId: { userId: actorUserId, providerId } },
            create: {
                userId: actorUserId,
                providerId,
                accessTokenEncrypted: (0, calendar_token_crypto_1.encryptToken)(tokens.accessToken),
                refreshTokenEncrypted: tokens.refreshToken ? (0, calendar_token_crypto_1.encryptToken)(tokens.refreshToken) : null,
                scope: tokens.scope,
                expiresAt: new Date(Date.now() + tokens.expiresInSeconds * 1000),
            },
            update: {
                accessTokenEncrypted: (0, calendar_token_crypto_1.encryptToken)(tokens.accessToken),
                ...(tokens.refreshToken ? { refreshTokenEncrypted: (0, calendar_token_crypto_1.encryptToken)(tokens.refreshToken) } : {}),
                scope: tokens.scope,
                expiresAt: new Date(Date.now() + tokens.expiresInSeconds * 1000),
                revokedAt: null,
            },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'external_calendar_connection', entityId: connection.id, after: { providerId, adapterType: provider.adapterType, scope: tokens.scope } });
        return { id: connection.id, providerId, scope: connection.scope, expiresAt: connection.expiresAt, connectedAt: connection.connectedAt };
    }
    async exchangeCodeForTokens(provider, code, redirectUri) {
        const tokenUrl = provider.adapterType === 'MICROSOFT_GRAPH'
            ? `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/token`
            : 'https://oauth2.googleapis.com/token';
        const body = new URLSearchParams({
            client_id: provider.clientId ?? '',
            client_secret: (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.clientSecret) ?? '',
            code,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
        });
        const res = await fetch(tokenUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
        if (!res.ok) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`${provider.adapterType} token exchange failed (HTTP ${res.status}): ${await res.text()}`);
        }
        const json = (await res.json());
        return { accessToken: json.access_token, refreshToken: json.refresh_token, expiresInSeconds: json.expires_in, scope: json.scope ?? '' };
    }
    async refreshAccessToken(provider, refreshToken) {
        const tokenUrl = provider.adapterType === 'MICROSOFT_GRAPH' ? `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/token` : 'https://oauth2.googleapis.com/token';
        const body = new URLSearchParams({
            client_id: provider.clientId ?? '',
            client_secret: (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.clientSecret) ?? '',
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
        });
        const res = await fetch(tokenUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
        if (!res.ok) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`${provider.adapterType} token refresh failed (HTTP ${res.status}): ${await res.text()}`);
        }
        const json = (await res.json());
        return { accessToken: json.access_token, refreshToken: json.refresh_token, expiresInSeconds: json.expires_in, scope: json.scope ?? '' };
    }
    async revokeConnection(connectionId, actorUserId) {
        const connection = await this.prisma.externalCalendarConnection.findUniqueOrThrow({ where: { id: connectionId }, include: { provider: true } });
        if (connection.userId !== actorUserId) {
            throw new calendar_gateway_types_1.CalendarGatewayError('You can only revoke your own calendar connection.');
        }
        if (connection.revokedAt) {
            return connection;
        }
        await this.bestEffortRevokeAtVendor(connection);
        const updated = await this.prisma.externalCalendarConnection.update({ where: { id: connectionId }, data: { revokedAt: new Date() } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'external_calendar_connection', entityId: connectionId, after: { revoked: true } });
        return updated;
    }
    async bestEffortRevokeAtVendor(connection) {
        if (connection.provider.adapterType !== 'GOOGLE')
            return;
        try {
            const token = (0, calendar_token_crypto_1.decryptToken)(connection.refreshTokenEncrypted ?? connection.accessTokenEncrypted);
            await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(token)}`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        }
        catch {
        }
    }
    static SYNC_HORIZON_DAYS = 30;
    static EXTERNAL_BUSY_TITLE = 'Busy (external)';
    async runExternalSyncSweep(now) {
        const connections = await this.prisma.externalCalendarConnection.findMany({
            where: { revokedAt: null },
            include: { provider: true },
        });
        let synced = 0;
        let errors = 0;
        let processed = 0;
        for (const connection of connections) {
            if (!connection.provider.isActive)
                continue;
            processed++;
            try {
                const accessToken = await this.ensureFreshAccessToken(connection);
                const rangeStart = now;
                const rangeEnd = new Date(now.getTime() + CalendarGatewayService_1.SYNC_HORIZON_DAYS * 86_400_000);
                const blocks = await this.fetchExternalBusyBlocks(connection.provider.adapterType, accessToken, rangeStart, rangeEnd);
                for (const block of blocks) {
                    await this.upsertBusyBlock(connection.userId, block);
                    synced++;
                }
                await this.prisma.externalCalendarConnection.update({ where: { id: connection.id }, data: { lastSyncedAt: now } });
            }
            catch (err) {
                errors++;
                await this.audit.record({ action: 'CREATE', entityType: 'external_calendar_sync_error', entityId: connection.id, after: { message: err.message } });
            }
        }
        return { connectionsProcessed: processed, synced, errors };
    }
    async upsertBusyBlock(ownerUserId, block) {
        await this.prisma.calendarEntry.upsert({
            where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'ExternalCalendar', sourceId: block.externalId } },
            create: {
                ownerUserId,
                kind: 'PERSONAL',
                title: CalendarGatewayService_1.EXTERNAL_BUSY_TITLE,
                startsAt: block.startsAt,
                endsAt: block.endsAt,
                isAutoPlotted: true,
                sourceType: 'ExternalCalendar',
                sourceId: block.externalId,
            },
            update: {
                title: CalendarGatewayService_1.EXTERNAL_BUSY_TITLE,
                startsAt: block.startsAt,
                endsAt: block.endsAt,
            },
        });
    }
    async ensureFreshAccessToken(connection) {
        const REFRESH_LEAD_MS = 5 * 60_000;
        const needsRefresh = connection.expiresAt !== null && connection.expiresAt.getTime() - Date.now() < REFRESH_LEAD_MS;
        if (!needsRefresh || !connection.refreshTokenEncrypted) {
            return (0, calendar_token_crypto_1.decryptToken)(connection.accessTokenEncrypted);
        }
        const refreshToken = (0, calendar_token_crypto_1.decryptToken)(connection.refreshTokenEncrypted);
        const refreshed = await this.refreshAccessToken(connection.provider, refreshToken);
        await this.prisma.externalCalendarConnection.update({
            where: { id: connection.id },
            data: {
                accessTokenEncrypted: (0, calendar_token_crypto_1.encryptToken)(refreshed.accessToken),
                ...(refreshed.refreshToken ? { refreshTokenEncrypted: (0, calendar_token_crypto_1.encryptToken)(refreshed.refreshToken) } : {}),
                expiresAt: new Date(Date.now() + refreshed.expiresInSeconds * 1000),
            },
        });
        return refreshed.accessToken;
    }
    async fetchExternalBusyBlocks(adapterType, accessToken, rangeStart, rangeEnd) {
        return adapterType === 'MICROSOFT_GRAPH'
            ? this.fetchMicrosoftGraphBusyBlocks(accessToken, rangeStart, rangeEnd)
            : this.fetchGoogleBusyBlocks(accessToken, rangeStart, rangeEnd);
    }
    async fetchMicrosoftGraphBusyBlocks(accessToken, rangeStart, rangeEnd) {
        const params = new URLSearchParams({ startDateTime: rangeStart.toISOString(), endDateTime: rangeEnd.toISOString() });
        const res = await fetch(`https://graph.microsoft.com/v1.0/me/calendarView?${params.toString()}`, {
            headers: { Authorization: `Bearer ${accessToken}`, Prefer: 'outlook.timezone="UTC"' },
        });
        if (!res.ok) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`Microsoft Graph calendarView call failed (HTTP ${res.status}).`);
        }
        const json = (await res.json());
        return (json.value ?? [])
            .filter((e) => !e.isCancelled)
            .map((e) => ({ externalId: e.id, startsAt: new Date(`${e.start.dateTime}Z`), endsAt: new Date(`${e.end.dateTime}Z`) }));
    }
    async fetchGoogleBusyBlocks(accessToken, rangeStart, rangeEnd) {
        const res = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
            method: 'POST',
            headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ timeMin: rangeStart.toISOString(), timeMax: rangeEnd.toISOString(), items: [{ id: 'primary' }] }),
        });
        if (!res.ok) {
            throw new calendar_gateway_types_1.CalendarGatewayError(`Google Calendar freeBusy.query call failed (HTTP ${res.status}).`);
        }
        const json = (await res.json());
        const busy = json.calendars?.primary?.busy ?? [];
        return busy.map((b, i) => ({ externalId: `freebusy:${b.start}:${i}`, startsAt: new Date(b.start), endsAt: new Date(b.end) }));
    }
    serializeProvider(p) {
        const { clientSecret, pendingClientSecret, ...rest } = p;
        return { ...rest, ...(0, gateway_secret_masking_1.maskSecret)((0, gateway_secret_crypto_1.decryptSecretNullable)(clientSecret)), hasPendingSecretRotation: (0, gateway_secret_masking_1.hasPendingSecret)(pendingClientSecret) };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'calendar_gateway_activity', entityId: activity, after: { functionCode, level } });
            throw new calendar_gateway_types_1.CalendarGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.CalendarGatewayService = CalendarGatewayService;
exports.CalendarGatewayService = CalendarGatewayService = CalendarGatewayService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], CalendarGatewayService);
//# sourceMappingURL=calendar-gateway.service.js.map