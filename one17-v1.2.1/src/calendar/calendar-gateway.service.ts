import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { decryptToken, encryptToken, signOAuthState, verifyOAuthState } from './calendar-token-crypto';
import { hasPendingSecret, maskSecret } from '../common/gateway-secret-masking';
import { decryptSecretNullable, encryptSecret } from '../common/gateway-secret-crypto';
import {
  AuthorizationUrlResult,
  CalendarGatewayError,
  ConfigureCalendarProviderInput,
  ExternalBusyBlock,
  TokenExchangeResult,
} from './calendar-gateway.types';

// Invariant 73(b) (CHECK27), 55(c2)(iv) Phase B: CalendarGateway -- the 5th
// gateway on the standing adapter pattern (schema.prisma's own doc comment
// on CalendarGatewayProvider). Provider config mirrors AttendanceService's
// masked-secret + MD-approved maker!=checker shape exactly (real OAuth2
// client credentials, same class of sensitive config); the per-user
// consent/sync/revoke surface below it is new shape this gateway alone
// needs, since Payment/Bureau/AI/Attendance never had a PER-USER credential
// layered under the platform-wide one.
//
// Vendor doc sources cited inline at each URL/scope/endpoint below --
// confirmed against Microsoft Learn and Google's own developer docs at
// build time (13-Jul-2026):
//  - Microsoft identity platform v2.0 auth code flow:
//    https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow
//  - Microsoft Graph Calendars permissions reference:
//    https://learn.microsoft.com/en-us/graph/permissions-reference
//  - Microsoft Graph calendarView:
//    https://learn.microsoft.com/en-us/graph/api/calendar-list-calendarview
//  - Google OAuth2 web server flow:
//    https://developers.google.com/identity/protocols/oauth2/web-server
//  - Google Calendar API scopes:
//    https://developers.google.com/calendar/api/auth
//  - Google Calendar freeBusy.query:
//    https://developers.google.com/calendar/api/v3/reference/freebusy/query
@Injectable()
export class CalendarGatewayService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  // ==========================================================================
  // Platform-wide provider config -- 2 slots (MICROSOFT_GRAPH, GOOGLE),
  // propose/approve, write-only-masked secret. Same shape as
  // AttendanceService.proposeProviderConfig/approveProviderConfig.
  // ==========================================================================
  async listProviders() {
    const rows = await this.prisma.calendarGatewayProvider.findMany({ orderBy: { providerSlot: 'asc' } });
    return rows.map((p) => this.serializeProvider(p));
  }

  async proposeProviderConfig(input: ConfigureCalendarProviderInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'CALENDAR_GATEWAY_POLICY', 'INITIATE', 'propose a calendar gateway provider config change');
    if (input.providerSlot < 1 || input.providerSlot > 2) {
      throw new CalendarGatewayError('CalendarGateway supports exactly 2 provider slots (1=Microsoft Graph, 2=Google), per invariant 73(b).');
    }
    if (!input.clientId) {
      throw new CalendarGatewayError('clientId is required when proposing a CalendarGateway provider slot.');
    }
    if (input.adapterType === 'MICROSOFT_GRAPH' && !input.tenantId) {
      throw new CalendarGatewayError('tenantId (the Azure AD tenant the app registration lives in) is required when proposing a MICROSOFT_GRAPH slot.');
    }
    let provider = await this.prisma.calendarGatewayProvider.findUnique({ where: { providerSlot: input.providerSlot } });
    if (provider?.configWorkflowInstanceId) {
      throw new CalendarGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
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
        // Omitting clientSecret leaves the pending value unset -- same
        // write-only-masked guarantee as AttendanceProvider. Invariant
        // 75(a) (CHECK28): encrypted at rest the moment it's staged pending.
        ...(input.clientSecret ? { pendingClientSecret: encryptSecret(input.clientSecret) } : {}),
        pendingTenantId: input.adapterType === 'MICROSOFT_GRAPH' ? input.tenantId : null,
        pendingIsActive: input.isActive,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'calendar_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.clientSecret } });
    return this.serializeProvider(updated);
  }

  async approveProviderConfig(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const provider = await this.prisma.calendarGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serializeProvider(provider);
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

  // ==========================================================================
  // Per-user OAuth2 consent -- identity-scoped, no capability grant needed
  // (same "everyone manages their own" boundary as CalendarController
  // itself): any signed-in user may connect/view/revoke THEIR OWN
  // ExternalCalendarConnection against whichever provider slot is ACTIVE.
  // ==========================================================================
  async listMyConnections(userId: string) {
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

  // Scope choice, cited: the invariant's own privacy rule -- "INBOUND
  // external events stored as busy/free blocks only... titles/bodies stay
  // out" -- so this requests the narrowest scope each vendor actually
  // publishes for that purpose:
  //  - Google genuinely ships a free/busy-only scope
  //    (https://www.googleapis.com/auth/calendar.freebusy --
  //    developers.google.com/calendar/api/auth: "View your availability in
  //    your calendars"), so that's what's requested -- Google's freeBusy
  //    API response never contains a title/summary field at all.
  //  - Microsoft Graph has NO delegated free/busy-only scope for a work/
  //    school account (confirmed against learn.microsoft.com/en-us/graph/
  //    permissions-reference: Calendars.Read / Calendars.ReadBasic /
  //    Calendars.Read.Shared / Calendars.ReadWrite are the only Calendars.*
  //    delegated scopes that exist). Calendars.ReadBasic is the narrowest
  //    available -- it excludes body/attachments/extensions but the vendor
  //    payload can still carry a subject -- so the privacy boundary for
  //    Graph is additionally enforced IN CODE (fetchMicrosoftGraphBusyBlocks
  //    below never reads .subject/.location into the mapped result), not by
  //    vendor scope semantics alone. offline_access is added so a refresh
  //    token comes back (Microsoft's docs: only returned when requested).
  private oauthScopeFor(adapterType: 'MICROSOFT_GRAPH' | 'GOOGLE'): string {
    return adapterType === 'MICROSOFT_GRAPH'
      ? 'offline_access https://graph.microsoft.com/Calendars.ReadBasic'
      : 'https://www.googleapis.com/auth/calendar.freebusy';
  }

  async getAuthorizationUrl(providerId: string, actorUserId: string, redirectUri: string): Promise<AuthorizationUrlResult> {
    const provider = await this.prisma.calendarGatewayProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (!provider.isActive || !provider.clientId) {
      throw new CalendarGatewayError(`CalendarGateway provider "${provider.name || provider.providerSlot}" is not ACTIVE/configured yet -- a tenant's ICT must configure and get MD_CEO approval on this slot before staff can connect.`);
    }
    const state = signOAuthState({ providerId, userId: actorUserId });
    const scope = this.oauthScopeFor(provider.adapterType);
    let url: string;
    if (provider.adapterType === 'MICROSOFT_GRAPH') {
      // https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow#request-an-authorization-code
      const params = new URLSearchParams({
        client_id: provider.clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        response_mode: 'query',
        scope,
        state,
      });
      url = `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/authorize?${params.toString()}`;
    } else {
      // https://developers.google.com/identity/protocols/oauth2/web-server#creatingclient
      const params = new URLSearchParams({
        client_id: provider.clientId,
        response_type: 'code',
        redirect_uri: redirectUri,
        scope,
        access_type: 'offline', // required to receive a refresh_token
        prompt: 'consent', // ensures a refresh_token is (re-)issued even on a repeat consent
        state,
      });
      url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    }
    return { url, scope, redirectUri };
  }

  async handleCallback(providerId: string, code: string, state: string, redirectUri: string, actorUserId: string) {
    const statePayload = verifyOAuthState(state);
    if (statePayload.providerId !== providerId || statePayload.userId !== actorUserId) {
      throw new CalendarGatewayError('OAuth state does not match this callback (provider/user mismatch) -- possible CSRF or a stale link. Restart the connect flow.');
    }
    const provider = await this.prisma.calendarGatewayProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (!provider.isActive || !provider.clientId) {
      throw new CalendarGatewayError(`CalendarGateway provider "${provider.name || provider.providerSlot}" is not ACTIVE -- cannot complete a connect flow against it.`);
    }
    const tokens = await this.exchangeCodeForTokens(provider, code, redirectUri);
    const connection = await this.prisma.externalCalendarConnection.upsert({
      where: { userId_providerId: { userId: actorUserId, providerId } },
      create: {
        userId: actorUserId,
        providerId,
        accessTokenEncrypted: encryptToken(tokens.accessToken),
        refreshTokenEncrypted: tokens.refreshToken ? encryptToken(tokens.refreshToken) : null,
        scope: tokens.scope,
        expiresAt: new Date(Date.now() + tokens.expiresInSeconds * 1000),
      },
      update: {
        accessTokenEncrypted: encryptToken(tokens.accessToken),
        // A re-consent may not return a fresh refresh_token (vendor-
        // dependent) -- never overwrite a good refresh token with a blank
        // one.
        ...(tokens.refreshToken ? { refreshTokenEncrypted: encryptToken(tokens.refreshToken) } : {}),
        scope: tokens.scope,
        expiresAt: new Date(Date.now() + tokens.expiresInSeconds * 1000),
        revokedAt: null, // re-connecting after a revoke reactivates the same audit row
      },
    });
    // Never audit the token values themselves -- only the fact/shape of the
    // connection event.
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'external_calendar_connection', entityId: connection.id, after: { providerId, adapterType: provider.adapterType, scope: tokens.scope } });
    return { id: connection.id, providerId, scope: connection.scope, expiresAt: connection.expiresAt, connectedAt: connection.connectedAt };
  }

  // Isolated as its own method (rather than inlined into handleCallback) so
  // a smoke test can stub the vendor HTTP call directly -- no real OAuth2
  // authorization code exists to redeem without a contracted tenant
  // account (same "the adapter ships inert" posture as
  // AttendanceService.runTTLockSync's own honest placeholder), but the real
  // documented request shape below is exactly what fires once a tenant's
  // staff member completes a real consent screen.
  private async exchangeCodeForTokens(
    provider: { adapterType: string; clientId: string | null; clientSecret: string | null; tenantId: string | null },
    code: string,
    redirectUri: string,
  ): Promise<TokenExchangeResult> {
    const tokenUrl =
      provider.adapterType === 'MICROSOFT_GRAPH'
        ? `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/token` // learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow#redeem-a-code-for-an-access-token
        : 'https://oauth2.googleapis.com/token'; // developers.google.com/identity/protocols/oauth2/web-server#exchange-authorization-code
    const body = new URLSearchParams({
      client_id: provider.clientId ?? '',
      // Invariant 75(a) (CHECK28): provider.clientSecret is ciphertext at
      // rest -- decrypted here, the single chokepoint both token calls
      // (exchange + refresh) funnel through.
      client_secret: decryptSecretNullable(provider.clientSecret) ?? '',
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    });
    const res = await fetch(tokenUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
    if (!res.ok) {
      throw new CalendarGatewayError(`${provider.adapterType} token exchange failed (HTTP ${res.status}): ${await res.text()}`);
    }
    const json = (await res.json()) as { access_token: string; refresh_token?: string; expires_in: number; scope?: string };
    return { accessToken: json.access_token, refreshToken: json.refresh_token, expiresInSeconds: json.expires_in, scope: json.scope ?? '' };
  }

  private async refreshAccessToken(
    provider: { adapterType: string; clientId: string | null; clientSecret: string | null; tenantId: string | null },
    refreshToken: string,
  ): Promise<TokenExchangeResult> {
    const tokenUrl = provider.adapterType === 'MICROSOFT_GRAPH' ? `https://login.microsoftonline.com/${provider.tenantId ?? 'common'}/oauth2/v2.0/token` : 'https://oauth2.googleapis.com/token';
    const body = new URLSearchParams({
      client_id: provider.clientId ?? '',
      client_secret: decryptSecretNullable(provider.clientSecret) ?? '',
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });
    const res = await fetch(tokenUrl, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
    if (!res.ok) {
      throw new CalendarGatewayError(`${provider.adapterType} token refresh failed (HTTP ${res.status}): ${await res.text()}`);
    }
    const json = (await res.json()) as { access_token: string; refresh_token?: string; expires_in: number; scope?: string };
    return { accessToken: json.access_token, refreshToken: json.refresh_token, expiresInSeconds: json.expires_in, scope: json.scope ?? '' };
  }

  // ==========================================================================
  // Revocation -- own connection only, never deletes the row (schema doc
  // comment: "revoking sets revokedAt rather than deleting, preserving the
  // consent/revocation audit trail").
  // ==========================================================================
  async revokeConnection(connectionId: string, actorUserId: string) {
    const connection = await this.prisma.externalCalendarConnection.findUniqueOrThrow({ where: { id: connectionId }, include: { provider: true } });
    if (connection.userId !== actorUserId) {
      throw new CalendarGatewayError('You can only revoke your own calendar connection.');
    }
    if (connection.revokedAt) {
      return connection; // already revoked -- idempotent no-op
    }
    await this.bestEffortRevokeAtVendor(connection);
    const updated = await this.prisma.externalCalendarConnection.update({ where: { id: connectionId }, data: { revokedAt: new Date() } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'external_calendar_connection', entityId: connectionId, after: { revoked: true } });
    return updated;
  }

  // Best-effort vendor-side revocation, isolated so it can never block the
  // OUR-OWN-RECORD revocation above (a vendor outage must not trap a user
  // who wants to disconnect). Google publishes a real revoke endpoint;
  // Microsoft Graph/Entra ID does not expose an equivalent token-revocation
  // API for this flow (revocation there is a user/admin consent-removal
  // action inside Entra itself, out of this platform's reach) -- so for
  // MICROSOFT_GRAPH this is a documented no-op, not a silent gap.
  private async bestEffortRevokeAtVendor(connection: { accessTokenEncrypted: string; refreshTokenEncrypted: string | null; provider: { adapterType: string } }): Promise<void> {
    if (connection.provider.adapterType !== 'GOOGLE') return;
    try {
      const token = decryptToken(connection.refreshTokenEncrypted ?? connection.accessTokenEncrypted);
      // developers.google.com/identity/protocols/oauth2/web-server#tokenrevoke
      await fetch(`https://oauth2.googleapis.com/revoke?token=${encodeURIComponent(token)}`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    } catch {
      // Best-effort only -- our own revokedAt stamp above is the control
      // that actually matters (it's what stops runExternalSyncSweep from
      // touching this connection again); a failed vendor-side call never
      // blocks that.
    }
  }

  // ==========================================================================
  // Inbound sync -- CALENDAR_EXTERNAL_SYNC_SWEEP scheduled job. Every
  // active, non-revoked connection: refresh the token if it's near expiry,
  // pull busy/free blocks ONLY (never titles/bodies -- invariant 73(b)'s
  // own privacy rule, restated from 55(c2)(iv)), upsert onto CalendarEntry
  // via the SAME [ownerUserId, sourceType, sourceId] key every other
  // auto-plotted sync uses (CalendarService's own sync methods), so a
  // re-sync updates rather than duplicates.
  // ==========================================================================
  private static readonly SYNC_HORIZON_DAYS = 30;
  // The literal, hardcoded label every synced block gets -- this constant,
  // not a vendor field, is what CalendarEntry.title is ALWAYS set to for
  // sourceType='ExternalCalendar' rows. The single most important line in
  // this file for the privacy rule: no code path below ever assigns a
  // vendor-supplied subject/summary/body into a persisted CalendarEntry.
  static readonly EXTERNAL_BUSY_TITLE = 'Busy (external)';

  async runExternalSyncSweep(now: Date): Promise<{ connectionsProcessed: number; synced: number; errors: number }> {
    const connections = await this.prisma.externalCalendarConnection.findMany({
      where: { revokedAt: null },
      include: { provider: true },
    });
    let synced = 0;
    let errors = 0;
    let processed = 0;
    for (const connection of connections) {
      if (!connection.provider.isActive) continue;
      processed++;
      try {
        const accessToken = await this.ensureFreshAccessToken(connection);
        const rangeStart = now;
        const rangeEnd = new Date(now.getTime() + CalendarGatewayService.SYNC_HORIZON_DAYS * 86_400_000);
        const blocks = await this.fetchExternalBusyBlocks(connection.provider.adapterType, accessToken, rangeStart, rangeEnd);
        for (const block of blocks) {
          await this.upsertBusyBlock(connection.userId, block);
          synced++;
        }
        await this.prisma.externalCalendarConnection.update({ where: { id: connection.id }, data: { lastSyncedAt: now } });
      } catch (err) {
        errors++;
        await this.audit.record({ action: 'CREATE', entityType: 'external_calendar_sync_error', entityId: connection.id, after: { message: (err as Error).message } });
      }
    }
    return { connectionsProcessed: processed, synced, errors };
  }

  // Kind choice: CalendarEntryKind (a frozen enum for this task -- schema.
  // prisma is not touched) has no dedicated "external busy block" member;
  // the closest fit is PERSONAL (a busy period on the OWNER's own calendar,
  // visible to owner only -- exactly the shape of a synced external busy
  // block), combined with isAutoPlotted=true and sourceType='ExternalCalendar'
  // so deleteEntry's existing auto-plotted guard still refuses a direct
  // delete (a user disconnects via revokeConnection, not by deleting rows).
  private async upsertBusyBlock(ownerUserId: string, block: ExternalBusyBlock): Promise<void> {
    await this.prisma.calendarEntry.upsert({
      where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'ExternalCalendar', sourceId: block.externalId } },
      create: {
        ownerUserId,
        kind: 'PERSONAL',
        title: CalendarGatewayService.EXTERNAL_BUSY_TITLE,
        startsAt: block.startsAt,
        endsAt: block.endsAt,
        isAutoPlotted: true,
        sourceType: 'ExternalCalendar',
        sourceId: block.externalId,
      },
      update: {
        title: CalendarGatewayService.EXTERNAL_BUSY_TITLE,
        startsAt: block.startsAt,
        endsAt: block.endsAt,
      },
    });
  }

  private async ensureFreshAccessToken(connection: { id: string; accessTokenEncrypted: string; refreshTokenEncrypted: string | null; expiresAt: Date | null; provider: { adapterType: string; clientId: string | null; clientSecret: string | null; tenantId: string | null } }): Promise<string> {
    const REFRESH_LEAD_MS = 5 * 60_000; // refresh proactively 5 minutes before expiry
    const needsRefresh = connection.expiresAt !== null && connection.expiresAt.getTime() - Date.now() < REFRESH_LEAD_MS;
    if (!needsRefresh || !connection.refreshTokenEncrypted) {
      return decryptToken(connection.accessTokenEncrypted);
    }
    const refreshToken = decryptToken(connection.refreshTokenEncrypted);
    const refreshed = await this.refreshAccessToken(connection.provider, refreshToken);
    await this.prisma.externalCalendarConnection.update({
      where: { id: connection.id },
      data: {
        accessTokenEncrypted: encryptToken(refreshed.accessToken),
        ...(refreshed.refreshToken ? { refreshTokenEncrypted: encryptToken(refreshed.refreshToken) } : {}),
        expiresAt: new Date(Date.now() + refreshed.expiresInSeconds * 1000),
      },
    });
    return refreshed.accessToken;
  }

  // Isolated (like exchangeCodeForTokens) so a smoke test can stub the raw
  // vendor HTTP response and prove the mapping below never carries a title
  // through, even when the stubbed response deliberately includes one.
  private async fetchExternalBusyBlocks(adapterType: string, accessToken: string, rangeStart: Date, rangeEnd: Date): Promise<ExternalBusyBlock[]> {
    return adapterType === 'MICROSOFT_GRAPH'
      ? this.fetchMicrosoftGraphBusyBlocks(accessToken, rangeStart, rangeEnd)
      : this.fetchGoogleBusyBlocks(accessToken, rangeStart, rangeEnd);
  }

  // learn.microsoft.com/en-us/graph/api/calendar-list-calendarview -- self-
  // scoped (/me/calendarView), so no separate SMTP-address lookup is needed
  // the way the true free/busy API (getSchedule) would require. The
  // response DOES carry a `subject`/`location`/`bodyPreview` per Graph's
  // own documented shape -- this method reads ONLY `.id`/`.start`/`.end`/
  // `.isCancelled` off each entry and discards everything else; that
  // discard is what actually enforces the privacy rule for this vendor
  // (Calendars.ReadBasic's own scope description only promises to exclude
  // body/attachments, not subject).
  private async fetchMicrosoftGraphBusyBlocks(accessToken: string, rangeStart: Date, rangeEnd: Date): Promise<ExternalBusyBlock[]> {
    const params = new URLSearchParams({ startDateTime: rangeStart.toISOString(), endDateTime: rangeEnd.toISOString() });
    const res = await fetch(`https://graph.microsoft.com/v1.0/me/calendarView?${params.toString()}`, {
      headers: { Authorization: `Bearer ${accessToken}`, Prefer: 'outlook.timezone="UTC"' },
    });
    if (!res.ok) {
      throw new CalendarGatewayError(`Microsoft Graph calendarView call failed (HTTP ${res.status}).`);
    }
    const json = (await res.json()) as { value?: Array<{ id: string; start: { dateTime: string }; end: { dateTime: string }; isCancelled?: boolean }> };
    return (json.value ?? [])
      .filter((e) => !e.isCancelled)
      .map((e) => ({ externalId: e.id, startsAt: new Date(`${e.start.dateTime}Z`), endsAt: new Date(`${e.end.dateTime}Z`) }));
  }

  // developers.google.com/calendar/api/v3/reference/freebusy/query -- the
  // genuinely title-free vendor API of the two: the response's `busy[]`
  // array carries only start/end, no summary/description field exists to
  // even accidentally read.
  private async fetchGoogleBusyBlocks(accessToken: string, rangeStart: Date, rangeEnd: Date): Promise<ExternalBusyBlock[]> {
    const res = await fetch('https://www.googleapis.com/calendar/v3/freeBusy', {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ timeMin: rangeStart.toISOString(), timeMax: rangeEnd.toISOString(), items: [{ id: 'primary' }] }),
    });
    if (!res.ok) {
      throw new CalendarGatewayError(`Google Calendar freeBusy.query call failed (HTTP ${res.status}).`);
    }
    const json = (await res.json()) as { calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }> };
    const busy = json.calendars?.primary?.busy ?? [];
    return busy.map((b, i) => ({ externalId: `freebusy:${b.start}:${i}`, startsAt: new Date(b.start), endsAt: new Date(b.end) }));
  }

  private serializeProvider<T extends { clientSecret: string | null; pendingClientSecret: string | null }>(p: T) {
    const { clientSecret, pendingClientSecret, ...rest } = p;
    // Invariant 75(a) (CHECK28): decrypt JUST for this in-memory preview
    // computation (never returned raw).
    return { ...rest, ...maskSecret(decryptSecretNullable(clientSecret)), hasPendingSecretRotation: hasPendingSecret(pendingClientSecret) };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'calendar_gateway_activity', entityId: activity, after: { functionCode, level } });
      throw new CalendarGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
