"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("crypto"));
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const scheduler_types_1 = require("../scheduler/scheduler.types");
const attendance_types_1 = require("./attendance.types");
const gateway_secret_masking_1 = require("../common/gateway-secret-masking");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
const TTLOCK_DEFAULT_API_BASE_URL = 'https://euapi.ttlock.com';
const TTLOCK_TOKEN_REFRESH_MARGIN_MS = 5 * 60_000;
const TTLOCK_FIRST_SYNC_LOOKBACK_MS = 24 * 60 * 60_000;
const TTLOCK_SYNC_OVERLAP_MS = 5 * 60_000;
const TTLOCK_PAGE_SIZE = 100;
const TTLOCK_RECORD_TYPE_LABELS = {
    1: 'TTLOCK_APP_UNLOCK',
    8: 'TTLOCK_FINGERPRINT_UNLOCK',
    44: 'TTLOCK_TAMPER_ALERT',
};
let AttendanceService = class AttendanceService {
    prisma;
    audit;
    delegation;
    workflow;
    notification;
    constructor(prisma, audit, delegation, workflow, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.notification = notification;
    }
    async listProviders() {
        const rows = await this.prisma.attendanceProvider.findMany({ orderBy: { providerSlot: 'asc' } });
        return rows.map((p) => this.serializeProvider(p));
    }
    async proposeProviderConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'propose an attendance gateway provider config change');
        if (input.providerSlot < 1 || input.providerSlot > 3) {
            throw new attendance_types_1.AttendanceError('AttendanceGateway supports at most 3 provider slots (1-3), per invariant 64(c).');
        }
        if (input.adapterType === 'TTLOCK' && !input.clientId) {
            throw new attendance_types_1.AttendanceError('clientId is required when proposing a TTLOCK adapter slot.');
        }
        let provider = await this.prisma.attendanceProvider.findUnique({ where: { providerSlot: input.providerSlot } });
        if (provider?.configWorkflowInstanceId) {
            throw new attendance_types_1.AttendanceError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
        }
        if (!provider) {
            provider = await this.prisma.attendanceProvider.create({
                data: { providerSlot: input.providerSlot, adapterType: input.adapterType, name: input.name, isActive: false, configuredByUserId: actorUserId },
            });
        }
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'ATTENDANCE_GATEWAY_CONFIG',
            entityType: 'attendance_provider',
            entityId: provider.id,
            initiatedByUserId: actorUserId,
            scenario: 'STANDARD',
        });
        let pendingCredentialConfig;
        if (input.adapterType === 'TTLOCK' && (input.ttlockUsername || input.ttlockPassword || input.ttlockApiBaseUrl)) {
            pendingCredentialConfig = {
                ...(input.ttlockUsername ? { ttlockUsername: input.ttlockUsername } : {}),
                ...(input.ttlockPassword ? { ttlockPasswordMd5: crypto.createHash('md5').update(input.ttlockPassword).digest('hex') } : {}),
                ...(input.ttlockApiBaseUrl ? { apiBaseUrl: input.ttlockApiBaseUrl } : {}),
            };
        }
        const updated = await this.prisma.attendanceProvider.update({
            where: { id: provider.id },
            data: {
                pendingName: input.name,
                pendingClientId: input.clientId,
                ...(input.clientSecret ? { pendingClientSecret: (0, gateway_secret_crypto_1.encryptSecret)(input.clientSecret) } : {}),
                ...(pendingCredentialConfig ? { pendingCredentialConfig: (0, gateway_secret_crypto_1.encryptJsonSecret)(pendingCredentialConfig) } : {}),
                pendingIsActive: input.isActive,
                pendingProposedByUserId: actorUserId,
                configWorkflowInstanceId: workflowInstance.id,
            },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'attendance_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.clientSecret, credentialConfigProposed: !!pendingCredentialConfig } });
        return this.serializeProvider(updated);
    }
    async approveProviderConfig(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const provider = await this.prisma.attendanceProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeProvider(provider);
        const currentCredentialConfig = (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.credentialConfig);
        const pendingCredentialConfig = (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.pendingCredentialConfig);
        const mergedCredentialConfig = pendingCredentialConfig
            ? { ...(currentCredentialConfig ?? {}), ...pendingCredentialConfig }
            : undefined;
        const updated = await this.prisma.attendanceProvider.update({
            where: { id: provider.id },
            data: {
                name: provider.pendingName ?? provider.name,
                clientId: provider.pendingClientId ?? provider.clientId,
                ...(provider.pendingClientSecret ? { clientSecret: provider.pendingClientSecret } : {}),
                ...(mergedCredentialConfig ? { credentialConfig: (0, gateway_secret_crypto_1.encryptJsonSecret)(mergedCredentialConfig) } : {}),
                isActive: provider.pendingIsActive ?? provider.isActive,
                configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
                pendingName: null,
                pendingClientId: null,
                pendingClientSecret: null,
                pendingCredentialConfig: client_1.Prisma.DbNull,
                pendingIsActive: null,
                pendingProposedByUserId: null,
                configWorkflowInstanceId: null,
            },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'attendance_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, name: updated.name, isActive: updated.isActive } });
        return this.serializeProvider(updated);
    }
    async connectTTLock(providerId, actorUserId) {
        await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'connect a TTLock Open Platform OAuth2 session');
        const provider = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
        if (provider.adapterType !== 'TTLOCK') {
            throw new attendance_types_1.AttendanceError(`Provider ${providerId} is ${provider.adapterType}, not TTLOCK.`);
        }
        const clientSecretPlain = (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.clientSecret);
        if (!provider.clientId || !clientSecretPlain) {
            throw new attendance_types_1.AttendanceError('clientId/clientSecret must be configured and MD_CEO-approved before connecting.');
        }
        const cc = (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.credentialConfig);
        if (!cc?.ttlockUsername || !cc?.ttlockPasswordMd5) {
            throw new attendance_types_1.AttendanceError('credentialConfig must include an approved ttlockUsername/ttlockPassword before connecting -- propose+approve a config change first.');
        }
        const token = await this.acquireTTLockToken(provider.clientId, clientSecretPlain, cc);
        const updated = await this.persistTTLockToken(provider.id, token);
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'attendance_provider', entityId: provider.id, after: { ttlockConnected: true, tokenExpiresAt: updated.tokenExpiresAt } });
        return this.serializeProvider(updated);
    }
    async runTTLockSync(providerId) {
        const provider0 = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
        if (provider0.adapterType !== 'TTLOCK') {
            throw new attendance_types_1.AttendanceError(`Provider ${providerId} is ${provider0.adapterType}, not TTLOCK -- runTTLockSync only applies to TTLock slots.`);
        }
        if (!provider0.isActive || !provider0.clientId || !provider0.clientSecret) {
            return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider0.name || provider0.providerSlot} NOT CONTRACTED — placeholder sync, 0 events]` };
        }
        const cc0 = (0, gateway_secret_crypto_1.decryptJsonSecret)(provider0.credentialConfig);
        if (!cc0?.ttlockUsername || !cc0?.ttlockPasswordMd5) {
            return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider0.name} has clientId/clientSecret but no approved credentialConfig (ttlockUsername/ttlockPassword) yet — cannot obtain an OAuth2 token, 0 events, never fabricated]` };
        }
        const provider = await this.ensureFreshTTLockToken(provider0);
        const baseUrl = this.ttlockApiBaseUrl(cc0);
        const accessTokenPlain = (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.accessToken);
        const locks = await this.listTTLockLocks(baseUrl, provider.clientId, accessTokenPlain);
        if (locks.length === 0) {
            return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider.name}: connected, but the TTLock account has no locks registered — 0 events, never fabricated]` };
        }
        const lastEvent = await this.prisma.attendanceEvent.findFirst({ where: { providerId }, orderBy: { occurredAt: 'desc' } });
        const sinceMs = lastEvent ? lastEvent.occurredAt.getTime() - TTLOCK_SYNC_OVERLAP_MS : Date.now() - TTLOCK_FIRST_SYNC_LOOKBACK_MS;
        let synced = 0;
        let unmappedQueued = 0;
        let securityAlertsRaised = 0;
        for (const lock of locks) {
            const records = await this.listTTLockRecords(baseUrl, provider.clientId, accessTokenPlain, lock.lockId, sinceMs);
            for (const rec of records) {
                if (rec.success !== 1)
                    continue;
                const rawUsername = typeof rec.username === 'string' ? rec.username.trim() : '';
                const rawKeypad = typeof rec.keyboardPwd === 'string' ? rec.keyboardPwd.trim() : '';
                const deviceUserRef = rawUsername || (rawKeypad ? `KEYPAD:${rawKeypad}` : null);
                if (!deviceUserRef)
                    continue;
                const rawRef = crypto.createHash('sha256').update(`ttlock|${lock.lockId}|${rec.recordType}|${deviceUserRef}|${rec.lockDate}`).digest('hex');
                const existing = await this.prisma.attendanceEvent.findUnique({ where: { providerId_rawRef: { providerId, rawRef } } });
                if (existing)
                    continue;
                const created = await this.ingestEvent({
                    providerId,
                    deviceUserRef,
                    occurredAt: new Date(Number(rec.lockDate)),
                    method: TTLOCK_RECORD_TYPE_LABELS[rec.recordType] ?? `TTLOCK_RECORD_TYPE_${rec.recordType}`,
                    locationRef: lock.lockAlias || lock.lockName || String(lock.lockId),
                    rawRef,
                });
                synced++;
                if (!created.employeeId)
                    unmappedQueued++;
                if (created.isTerminatedAlert)
                    securityAlertsRaised++;
            }
        }
        return { synced, unmappedQueued, securityAlertsRaised };
    }
    ttlockApiBaseUrl(cc) {
        return (cc?.apiBaseUrl ? cc.apiBaseUrl.replace(/\/+$/, '') : TTLOCK_DEFAULT_API_BASE_URL);
    }
    async ensureFreshTTLockToken(provider) {
        if (provider.accessToken && provider.tokenExpiresAt && provider.tokenExpiresAt.getTime() - TTLOCK_TOKEN_REFRESH_MARGIN_MS > Date.now()) {
            return provider;
        }
        const clientSecretPlain = (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.clientSecret);
        const refreshTokenPlain = (0, gateway_secret_crypto_1.decryptSecretNullable)(provider.refreshToken);
        const cc = (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.credentialConfig);
        if (refreshTokenPlain && provider.clientId && clientSecretPlain) {
            try {
                const refreshed = await this.refreshTTLockToken(this.ttlockApiBaseUrl(cc), provider.clientId, clientSecretPlain, refreshTokenPlain);
                return this.persistTTLockToken(provider.id, refreshed);
            }
            catch {
            }
        }
        if (!cc?.ttlockUsername || !cc?.ttlockPasswordMd5 || !provider.clientId || !clientSecretPlain) {
            throw new attendance_types_1.AttendanceError('Provider has no usable TTLock OAuth2 credentials (clientId/clientSecret/ttlockUsername/ttlockPassword) -- cannot obtain a token.');
        }
        const token = await this.acquireTTLockToken(provider.clientId, clientSecretPlain, cc);
        return this.persistTTLockToken(provider.id, token);
    }
    async persistTTLockToken(providerId, token) {
        const now = new Date();
        return this.prisma.attendanceProvider.update({
            where: { id: providerId },
            data: {
                accessToken: (0, gateway_secret_crypto_1.encryptSecret)(token.access_token),
                refreshToken: (0, gateway_secret_crypto_1.encryptSecret)(token.refresh_token),
                tokenObtainedAt: now,
                tokenExpiresAt: new Date(now.getTime() + token.expires_in * 1000),
            },
        });
    }
    async acquireTTLockToken(clientId, clientSecret, cc) {
        const body = new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            username: cc.ttlockUsername,
            password: cc.ttlockPasswordMd5,
        });
        return this.ttlockTokenRequest(`${this.ttlockApiBaseUrl(cc)}/oauth2/token`, body);
    }
    async refreshTTLockToken(baseUrl, clientId, clientSecret, refreshToken) {
        const body = new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        });
        return this.ttlockTokenRequest(`${baseUrl}/oauth2/token`, body);
    }
    async ttlockTokenRequest(url, body) {
        const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || !json.access_token) {
            const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
            throw new attendance_types_1.AttendanceError(`TTLock Open Platform OAuth2 token request failed: ${errMsg}`);
        }
        return json;
    }
    async listTTLockLocks(baseUrl, clientId, accessToken) {
        const all = [];
        for (let pageNo = 1;; pageNo++) {
            const params = new URLSearchParams({ clientId, accessToken, pageNo: String(pageNo), pageSize: String(TTLOCK_PAGE_SIZE), date: String(Date.now()) });
            const res = await fetch(`${baseUrl}/v3/lock/list?${params.toString()}`, { method: 'GET' });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || json.errcode) {
                const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
                throw new attendance_types_1.AttendanceError(`TTLock lock/list failed: ${errMsg}`);
            }
            const page = Array.isArray(json.list) ? json.list : [];
            all.push(...page);
            if (page.length < TTLOCK_PAGE_SIZE)
                break;
        }
        return all;
    }
    async listTTLockRecords(baseUrl, clientId, accessToken, lockId, sinceMs) {
        const all = [];
        for (let pageNo = 1;; pageNo++) {
            const body = new URLSearchParams({
                clientId,
                accessToken,
                lockId: String(lockId),
                startDate: String(Math.max(sinceMs, 0)),
                endDate: '0',
                pageNo: String(pageNo),
                pageSize: String(TTLOCK_PAGE_SIZE),
                date: String(Date.now()),
            });
            const res = await fetch(`${baseUrl}/v3/lockRecord/list`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || json.errcode) {
                const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
                throw new attendance_types_1.AttendanceError(`TTLock lockRecord/list failed for lock ${lockId}: ${errMsg}`);
            }
            const page = Array.isArray(json.list) ? json.list : [];
            all.push(...page);
            if (page.length < TTLOCK_PAGE_SIZE)
                break;
        }
        return all;
    }
    async importFileEvents(providerId, rows, actorUserId) {
        await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'upload a FileImport attendance batch');
        const provider = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
        if (provider.adapterType !== 'FILE_IMPORT') {
            throw new attendance_types_1.AttendanceError(`Provider ${providerId} is ${provider.adapterType}, not FILE_IMPORT.`);
        }
        const result = { imported: 0, duplicates: 0, rejected: [] };
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            if (!row.deviceUserRef || !row.occurredAt || !row.method) {
                result.rejected.push({ row: i + 1, reason: 'Missing required field (deviceUserRef/occurredAt/method).' });
                continue;
            }
            const occurredAt = new Date(row.occurredAt);
            if (Number.isNaN(occurredAt.getTime())) {
                result.rejected.push({ row: i + 1, reason: `Unparseable occurredAt "${row.occurredAt}".` });
                continue;
            }
            const rawRef = crypto.createHash('sha256').update(`${row.deviceUserRef}|${row.occurredAt}|${row.method}|${row.locationRef ?? ''}`).digest('hex');
            const existing = await this.prisma.attendanceEvent.findUnique({ where: { providerId_rawRef: { providerId, rawRef } } });
            if (existing) {
                result.duplicates++;
                continue;
            }
            await this.ingestEvent({ providerId, deviceUserRef: row.deviceUserRef, occurredAt, method: row.method, locationRef: row.locationRef, rawRef });
            result.imported++;
        }
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'attendance_event_batch', entityId: providerId, after: { imported: result.imported, duplicates: result.duplicates, rejected: result.rejected.length } });
        return result;
    }
    async ingestEvent(input) {
        const mapping = await this.prisma.attendanceLockUserMapping.findUnique({
            where: { providerId_deviceUserRef: { providerId: input.providerId, deviceUserRef: input.deviceUserRef } },
        });
        const employee = mapping ? await this.prisma.employee.findUnique({ where: { id: mapping.employeeId } }) : null;
        const isTerminatedAlert = employee?.status === 'TERMINATED';
        const created = await this.prisma.attendanceEvent.create({
            data: {
                providerId: input.providerId,
                deviceUserRef: input.deviceUserRef,
                employeeId: employee ? employee.id : null,
                locationRef: input.locationRef,
                occurredAt: input.occurredAt,
                method: input.method,
                rawRef: input.rawRef,
                isTerminatedAlert,
            },
        });
        if (isTerminatedAlert && employee) {
            await this.raiseTerminatedUnlockAlert(employee.id, created.id);
        }
        return created;
    }
    async raiseTerminatedUnlockAlert(employeeId, eventId) {
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
        await this.audit.record({ action: 'SECURITY_ALERT', entityType: 'attendance_event', entityId: eventId, after: { employeeId, reason: 'Unlock event for a TERMINATED employee — invariant 40(d) security alert, never recorded as an ordinary attendance mark.' } });
        const hrHolders = await this.prisma.userRole.findMany({ where: { roleCode: 'HR_ADMIN' }, select: { userId: true } });
        for (const h of hrHolders) {
            await this.notification.create({
                recipientUserId: h.userId,
                type: 'GENERIC',
                title: 'SECURITY ALERT: terminated-employee door unlock',
                body: `An unlock event was recorded for ${employee.surname} ${employee.firstName}, who is TERMINATED. This is a security alert, not an attendance record — investigate immediately.`,
                linkPath: '/attendance/exceptions',
            });
        }
    }
    async mapLockUser(input, actorUserId) {
        await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'map a device lock-user to an employee');
        await this.prisma.employee.findUniqueOrThrow({ where: { id: input.employeeId } });
        const mapping = await this.prisma.attendanceLockUserMapping.upsert({
            where: { providerId_deviceUserRef: { providerId: input.providerId, deviceUserRef: input.deviceUserRef } },
            create: { providerId: input.providerId, deviceUserRef: input.deviceUserRef, employeeId: input.employeeId, mappedByUserId: actorUserId },
            update: { employeeId: input.employeeId, mappedByUserId: actorUserId },
        });
        const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.employeeId } });
        const unresolvedEvents = await this.prisma.attendanceEvent.findMany({
            where: { providerId: input.providerId, deviceUserRef: input.deviceUserRef, employeeId: null },
        });
        for (const ev of unresolvedEvents) {
            const isTerminatedAlert = employee.status === 'TERMINATED';
            await this.prisma.attendanceEvent.update({ where: { id: ev.id }, data: { employeeId: input.employeeId, isTerminatedAlert } });
            if (isTerminatedAlert)
                await this.raiseTerminatedUnlockAlert(input.employeeId, ev.id);
        }
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'attendance_lock_user_mapping', entityId: mapping.id, after: { providerId: input.providerId, deviceUserRef: input.deviceUserRef, employeeId: input.employeeId, resolvedEventCount: unresolvedEvents.length } });
        return { mapping, resolvedEventCount: unresolvedEvents.length };
    }
    async listUnmappedEvents() {
        return this.prisma.attendanceEvent.findMany({
            where: { employeeId: null },
            include: { provider: { select: { name: true, providerSlot: true } } },
            orderBy: { occurredAt: 'desc' },
        });
    }
    async requestException(actorUserId, input) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            throw new attendance_types_1.AttendanceError('Exception requests require the caller to be a real Employee.');
        return this.prisma.attendanceExceptionRequest.create({
            data: {
                employeeId: employee.id,
                attendanceEventId: input.attendanceEventId,
                disputedDate: new Date(input.disputedDate),
                reason: input.reason,
            },
        });
    }
    async listMyExceptionRequests(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!employee)
            return [];
        return this.prisma.attendanceExceptionRequest.findMany({ where: { employeeId: employee.id }, orderBy: { createdAt: 'desc' } });
    }
    async listSubordinateExceptionRequests(actorUserId) {
        const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
        if (!supervisor)
            return [];
        const reports = await this.prisma.employee.findMany({ where: { reportsToId: supervisor.id }, select: { id: true } });
        if (reports.length === 0)
            return [];
        return this.prisma.attendanceExceptionRequest.findMany({
            where: { employeeId: { in: reports.map((r) => r.id) } },
            include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async decideExceptionRequest(requestId, decision, decidedByUserId, notes) {
        const request = await this.prisma.attendanceExceptionRequest.findUniqueOrThrow({ where: { id: requestId } });
        if (request.status !== 'PENDING') {
            throw new attendance_types_1.AttendanceError(`Exception request ${requestId} is ${request.status}, not PENDING.`);
        }
        const requester = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
        const decider = await this.prisma.employee.findFirst({ where: { appUserId: decidedByUserId } });
        if (!decider) {
            throw new attendance_types_1.AttendanceError('Exception adjudication requires the decider to be a real Employee (org reports_to check).');
        }
        if (decider.id === requester.id) {
            throw new attendance_types_1.AttendanceError('A supervisor cannot adjudicate their own exception request (invariant 63c adversarial case).');
        }
        if (requester.reportsToId !== decider.id) {
            throw new attendance_types_1.AttendanceError(`Exception adjudication requires the decider to be requester ${requester.id}'s direct supervisor (org reports_to) — invariant 40(b).`);
        }
        const updated = await this.prisma.attendanceExceptionRequest.update({
            where: { id: requestId },
            data: { status: decision, decidedByUserId, decidedAt: new Date(), decisionNotes: notes },
        });
        await this.audit.record({ actorUserId: decidedByUserId, action: decision === 'ACCEPTED' ? 'APPROVE' : 'REJECT', entityType: 'attendance_exception_request', entityId: requestId, after: { status: decision } });
        return updated;
    }
    async computeLateCounts(periodStart, periodEnd) {
        const events = await this.prisma.attendanceEvent.findMany({
            where: { occurredAt: { gte: periodStart, lte: periodEnd }, employeeId: { not: null }, isTerminatedAlert: false },
            include: { employee: { include: { position: true } } },
            orderBy: { occurredAt: 'asc' },
        });
        const firstEventPerDay = new Map();
        for (const ev of events) {
            if (!ev.employeeId)
                continue;
            const dayKey = `${ev.employeeId}|${ev.occurredAt.toISOString().slice(0, 10)}`;
            const existing = firstEventPerDay.get(dayKey);
            if (!existing || ev.occurredAt < existing)
                firstEventPerDay.set(dayKey, ev.occurredAt);
        }
        const policies = await this.prisma.attendanceClockInPolicy.findMany({ where: { status: 'ACTIVE' } });
        const approvedLeave = await this.prisma.leaveApplication.findMany({
            where: { status: 'HR_ACKNOWLEDGED', startDate: { lte: periodEnd }, endDate: { gte: periodStart } },
            select: { employeeId: true, startDate: true, endDate: true },
        });
        const isOnApprovedLeave = (employeeId, at) => approvedLeave.some((l) => l.employeeId === employeeId && at >= l.startDate && at <= l.endDate);
        const lateCountByEmployee = new Map();
        for (const ev of events) {
            if (!ev.employeeId)
                continue;
            if (isOnApprovedLeave(ev.employeeId, ev.occurredAt))
                continue;
            const dayKey = `${ev.employeeId}|${ev.occurredAt.toISOString().slice(0, 10)}`;
            if (firstEventPerDay.get(dayKey)?.getTime() !== ev.occurredAt.getTime())
                continue;
            const orgUnitCode = ev.employee?.orgUnitCode ?? null;
            const cadre = ev.employee?.position?.cadre ?? null;
            const policy = policies.find((p) => p.orgUnitCode === orgUnitCode && p.cadre === cadre) ??
                policies.find((p) => p.orgUnitCode === orgUnitCode && p.cadre === null) ??
                policies.find((p) => p.orgUnitCode === null && p.cadre === null);
            if (!policy)
                continue;
            const [expH, expM] = policy.expectedStartTime.split(':').map(Number);
            const expected = new Date(ev.occurredAt);
            expected.setHours(expH, expM + policy.graceWindowMinutes, 0, 0);
            if (ev.occurredAt > expected) {
                lateCountByEmployee.set(ev.employeeId, (lateCountByEmployee.get(ev.employeeId) ?? 0) + 1);
            }
        }
        return Array.from(lateCountByEmployee.entries()).map(([employeeId, count]) => ({ employeeId, count }));
    }
    async runDailyReconciliation() {
        const unmapped = await this.prisma.attendanceEvent.count({ where: { employeeId: null } });
        const pendingExceptions = await this.prisma.attendanceExceptionRequest.count({ where: { status: 'PENDING' } });
        const summary = { unmappedEventCount: unmapped, pendingExceptionCount: pendingExceptions };
        if (unmapped > 0) {
            throw new scheduler_types_1.PartialJobFailure(`${unmapped} unmapped attendance event(s) awaiting lock-user mapping, ${pendingExceptions} exception request(s) pending adjudication.`, summary);
        }
        return summary;
    }
    serializeProvider(p) {
        const { clientSecret, pendingClientSecret, credentialConfig, pendingCredentialConfig, accessToken, refreshToken, ...rest } = p;
        let tokenStatus = 'NEVER_CONNECTED';
        if (accessToken && p.tokenExpiresAt) {
            tokenStatus = p.tokenExpiresAt.getTime() > Date.now() ? 'CONNECTED' : 'EXPIRED';
        }
        const decryptedCredentialConfig = (0, gateway_secret_crypto_1.decryptJsonSecret)(credentialConfig);
        return {
            ...rest,
            ...(0, gateway_secret_masking_1.maskSecret)((0, gateway_secret_crypto_1.decryptSecretNullable)(clientSecret)),
            hasPendingSecretRotation: (0, gateway_secret_masking_1.hasPendingSecret)(pendingClientSecret),
            hasCredentialConfig: !!credentialConfig,
            hasPendingCredentialConfig: !!pendingCredentialConfig,
            credentialConfigPreview: decryptedCredentialConfig ? (0, gateway_secret_masking_1.maskJsonConfigAllowlist)(decryptedCredentialConfig, ['ttlockUsername', 'apiBaseUrl']) : null,
            tokenStatus,
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'attendance_activity', entityId: activity, after: { functionCode, level } });
            throw new attendance_types_1.AttendanceError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.AttendanceService = AttendanceService;
exports.AttendanceService = AttendanceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        notification_service_1.NotificationService])
], AttendanceService);
//# sourceMappingURL=attendance.service.js.map