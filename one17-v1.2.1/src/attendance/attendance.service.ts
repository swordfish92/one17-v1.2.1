import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { Prisma, type AttendanceProvider } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { PartialJobFailure } from '../scheduler/scheduler.types';
import {
  AttendanceError,
  ConfigureAttendanceProviderInput,
  FileImportResult,
  FileImportRow,
  MapLockUserInput,
  RequestExceptionInput,
  TTLockCredentialConfig,
} from './attendance.types';
import { hasPendingSecret, maskJsonConfigAllowlist, maskSecret } from '../common/gateway-secret-masking';
import { decryptJsonSecret, decryptSecretNullable, encryptJsonSecret, encryptSecret } from '../common/gateway-secret-crypto';

// Invariant 73(b) (CHECK27): confirmed live against euopen.ttlock.com/doc/
// oauth2 and euopen.ttlock.com/doc/oauth2/refreshToken. TTLock Open
// Platform's REAL grant is a "resource owner password" flow: clientId +
// clientSecret + the integrator's TTLock cloud account username + an
// MD5-hashed (lowercase hex) password, POSTed form-encoded to /oauth2/token
// -- NOT the redirect-based authorization-code flow this build originally
// assumed before checking the real docs (see the CHECK27 task's own "adapt
// to what you actually confirmed" instruction). Refresh reuses the same
// endpoint with grant_type=refresh_token.
const TTLOCK_DEFAULT_API_BASE_URL = 'https://euapi.ttlock.com';
// A token is refreshed proactively once it's within this margin of expiry,
// rather than waiting for a sync to hit an expired token mid-run.
const TTLOCK_TOKEN_REFRESH_MARGIN_MS = 5 * 60_000;
// No persisted "last synced at" cursor exists on AttendanceProvider (the
// schema for this build deliberately carries no new typed columns beyond
// the OAuth2 token lifecycle ones) -- the natural, already-existing
// high-water mark is the latest AttendanceEvent this provider has already
// ingested. A fresh provider with no prior events falls back to a 24h
// lookback (a deliberate, disclosed judgment call, not a vendor spec); a
// 5-minute overlap on every subsequent sync absorbs clock skew between
// TTLock's servers and this platform's, relying on the existing
// (providerId, rawRef) uniqueness -- the same "a retried sync never
// double-books an event" guarantee the schema already documents -- to make
// the overlap idempotent rather than double-booking.
const TTLOCK_FIRST_SYNC_LOOKBACK_MS = 24 * 60 * 60_000;
const TTLOCK_SYNC_OVERLAP_MS = 5 * 60_000;
const TTLOCK_PAGE_SIZE = 100;
// Confirmed record-type codes from the live docs (euopen.ttlock.com/doc/api/
// v3/lockRecord/list's own worked example); the full 1-48 enum is not
// published anywhere this build could confirm, so every other code falls
// back to an honest TTLOCK_RECORD_TYPE_<n> label rather than a guessed name.
const TTLOCK_RECORD_TYPE_LABELS: Record<number, string> = {
  1: 'TTLOCK_APP_UNLOCK',
  8: 'TTLOCK_FINGERPRINT_UNLOCK',
  44: 'TTLOCK_TAMPER_ALERT',
};

// Invariant 40/63(b)/64(c) (CHECK17): AttendanceGateway -- vendor-neutral
// attendance -> PMS behavioural gate. Provider config mirrors
// PaymentGatewayService's masked-secret + MD-approved maker!=checker shape
// exactly (invariant 63a's own ruling: this gateway carries real OAuth2
// client credentials, the same class of sensitive config). Ingestion is
// adapter-agnostic downstream of AttendanceEvent -- TTLockAdapter and
// FileImportAdapter both just write rows into the same canonical model
// (invariant 40a: "ALL downstream logic consumes ONLY this").
@Injectable()
export class AttendanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly notification: NotificationService,
  ) {}

  // ==========================================================================
  // Provider slots -- same <=3 vendor-slot, masked-secret, MD-approved shape
  // as PaymentGatewayProvider. HR_ADMIN or ICT (invariant 63a's grant
  // change) proposes, MD_CEO approves.
  // ==========================================================================
  async listProviders() {
    const rows = await this.prisma.attendanceProvider.findMany({ orderBy: { providerSlot: 'asc' } });
    return rows.map((p) => this.serializeProvider(p));
  }

  async proposeProviderConfig(input: ConfigureAttendanceProviderInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'propose an attendance gateway provider config change');
    if (input.providerSlot < 1 || input.providerSlot > 3) {
      throw new AttendanceError('AttendanceGateway supports at most 3 provider slots (1-3), per invariant 64(c).');
    }
    if (input.adapterType === 'TTLOCK' && !input.clientId) {
      throw new AttendanceError('clientId is required when proposing a TTLOCK adapter slot.');
    }
    let provider = await this.prisma.attendanceProvider.findUnique({ where: { providerSlot: input.providerSlot } });
    if (provider?.configWorkflowInstanceId) {
      throw new AttendanceError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
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
    // Invariant 73(b): the TTLock password-grant's extra fields (username +
    // MD5-hashed password, plus the tenant's chosen regional API base URL)
    // ride the SAME staged pending*/configWorkflowInstanceId shape as
    // clientId/clientSecret -- MD_CEO approves the whole connection, not
    // just the client credential half of it. ttlockPassword arrives
    // plaintext (same wire posture as clientSecret) and is hashed here,
    // immediately, before it is ever written to pendingCredentialConfig --
    // the raw password is never persisted anywhere.
    let pendingCredentialConfig: TTLockCredentialConfig | undefined;
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
        // Omitting clientSecret leaves the pending value unset -- same
        // write-only-masked guarantee as PaymentGatewayProvider. Invariant
        // 75(a) (CHECK28): encrypted at rest the moment it's staged pending.
        ...(input.clientSecret ? { pendingClientSecret: encryptSecret(input.clientSecret) } : {}),
        ...(pendingCredentialConfig ? { pendingCredentialConfig: encryptJsonSecret(pendingCredentialConfig as unknown as Record<string, unknown>) as unknown as Prisma.InputJsonValue } : {}),
        pendingIsActive: input.isActive,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'attendance_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.clientSecret, credentialConfigProposed: !!pendingCredentialConfig } });
    return this.serializeProvider(updated);
  }

  async approveProviderConfig(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const provider = await this.prisma.attendanceProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serializeProvider(provider);
    // Shallow-merged, not replaced -- proposing only a password rotation
    // (leaving username/apiBaseUrl unset in the pending diff) must not wipe
    // out the previously-approved username, same as clientSecret's own
    // "omit to leave unchanged" discipline above. Invariant 75(a) (CHECK28):
    // both columns hold encrypted envelopes now, so the merge itself must
    // happen on the DECRYPTED plaintext objects (merging two ciphertext
    // envelopes field-by-field would just overwrite one opaque blob with
    // another, silently losing whichever field wasn't in the pending diff)
    // -- the merged result is re-encrypted before it's written back.
    const currentCredentialConfig = decryptJsonSecret(provider.credentialConfig);
    const pendingCredentialConfig = decryptJsonSecret(provider.pendingCredentialConfig);
    const mergedCredentialConfig = pendingCredentialConfig
      ? { ...(currentCredentialConfig ?? {}), ...pendingCredentialConfig }
      : undefined;
    const updated = await this.prisma.attendanceProvider.update({
      where: { id: provider.id },
      data: {
        name: provider.pendingName ?? provider.name,
        clientId: provider.pendingClientId ?? provider.clientId,
        // pendingClientSecret is already an encrypted envelope (staged that
        // way at propose time) -- copied through as-is, never decrypted/
        // re-encrypted in transit.
        ...(provider.pendingClientSecret ? { clientSecret: provider.pendingClientSecret } : {}),
        ...(mergedCredentialConfig ? { credentialConfig: encryptJsonSecret(mergedCredentialConfig) as unknown as Prisma.InputJsonValue } : {}),
        isActive: provider.pendingIsActive ?? provider.isActive,
        configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
        pendingName: null,
        pendingClientId: null,
        pendingClientSecret: null,
        pendingCredentialConfig: Prisma.DbNull,
        pendingIsActive: null,
        pendingProposedByUserId: null,
        configWorkflowInstanceId: null,
      },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'attendance_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, name: updated.name, isActive: updated.isActive } });
    return this.serializeProvider(updated);
  }

  // ==========================================================================
  // Invariant 73(b) (CHECK27): the TTLock OAuth2 "connect" action. Since the
  // real TTLock grant is a password grant (confirmed live -- see the module
  // header comment), there is no redirect/consent screen to send the user
  // through; "connecting" is simply exchanging the already-approved
  // clientId/clientSecret/credentialConfig for a first access_token +
  // refresh_token. Requires the SAME capability as proposing config
  // (ATTENDANCE_GATEWAY_POLICY INITIATE) rather than a new one -- this is
  // an operational action on an already-approved connection, not a new
  // governance decision.
  // ==========================================================================
  async connectTTLock(providerId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'connect a TTLock Open Platform OAuth2 session');
    const provider = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (provider.adapterType !== 'TTLOCK') {
      throw new AttendanceError(`Provider ${providerId} is ${provider.adapterType}, not TTLOCK.`);
    }
    const clientSecretPlain = decryptSecretNullable(provider.clientSecret);
    if (!provider.clientId || !clientSecretPlain) {
      throw new AttendanceError('clientId/clientSecret must be configured and MD_CEO-approved before connecting.');
    }
    const cc = decryptJsonSecret(provider.credentialConfig) as TTLockCredentialConfig | null;
    if (!cc?.ttlockUsername || !cc?.ttlockPasswordMd5) {
      throw new AttendanceError('credentialConfig must include an approved ttlockUsername/ttlockPassword before connecting -- propose+approve a config change first.');
    }
    const token = await this.acquireTTLockToken(provider.clientId, clientSecretPlain, cc);
    const updated = await this.persistTTLockToken(provider.id, token);
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'attendance_provider', entityId: provider.id, after: { ttlockConnected: true, tokenExpiresAt: updated.tokenExpiresAt } });
    return this.serializeProvider(updated);
  }

  // ==========================================================================
  // TTLockAdapter -- OAuth2 scheduled sync (invariant 40a/63b, made real at
  // CHECK27/invariant 73b). Still an honest-placeholder for a slot that
  // isn't fully configured (same posture as BureauGatewayService's own
  // triggerPull for an unconfigured provider) -- never fabricates event
  // data. Once a TTLOCK slot has an approved clientId/clientSecret AND
  // credentialConfig (ttlockUsername/ttlockPassword), this performs the
  // real OAuth2 token acquisition/refresh and pulls real unlock/access
  // records from TTLock's API, resolving each through the SAME identity
  // gate (ingestEvent) FileImportAdapter already uses -- one canonical
  // ingestion rule, not a second convention.
  // ==========================================================================
  async runTTLockSync(providerId: string): Promise<{ synced: number; unmappedQueued: number; securityAlertsRaised: number; note?: string }> {
    const provider0 = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (provider0.adapterType !== 'TTLOCK') {
      throw new AttendanceError(`Provider ${providerId} is ${provider0.adapterType}, not TTLOCK -- runTTLockSync only applies to TTLock slots.`);
    }
    if (!provider0.isActive || !provider0.clientId || !provider0.clientSecret) {
      return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider0.name || provider0.providerSlot} NOT CONTRACTED — placeholder sync, 0 events]` };
    }
    const cc0 = decryptJsonSecret(provider0.credentialConfig) as TTLockCredentialConfig | null;
    if (!cc0?.ttlockUsername || !cc0?.ttlockPasswordMd5) {
      return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider0.name} has clientId/clientSecret but no approved credentialConfig (ttlockUsername/ttlockPassword) yet — cannot obtain an OAuth2 token, 0 events, never fabricated]` };
    }

    const provider = await this.ensureFreshTTLockToken(provider0);
    const baseUrl = this.ttlockApiBaseUrl(cc0);
    const accessTokenPlain = decryptSecretNullable(provider.accessToken)!;

    const locks = await this.listTTLockLocks(baseUrl, provider.clientId!, accessTokenPlain);
    if (locks.length === 0) {
      return { synced: 0, unmappedQueued: 0, securityAlertsRaised: 0, note: `[ATTENDANCE PROVIDER ${provider.name}: connected, but the TTLock account has no locks registered — 0 events, never fabricated]` };
    }

    // The natural high-water mark -- see the module header comment for why
    // this reads AttendanceEvent itself rather than a persisted cursor
    // column.
    const lastEvent = await this.prisma.attendanceEvent.findFirst({ where: { providerId }, orderBy: { occurredAt: 'desc' } });
    const sinceMs = lastEvent ? lastEvent.occurredAt.getTime() - TTLOCK_SYNC_OVERLAP_MS : Date.now() - TTLOCK_FIRST_SYNC_LOOKBACK_MS;

    let synced = 0;
    let unmappedQueued = 0;
    let securityAlertsRaised = 0;
    for (const lock of locks) {
      const records = await this.listTTLockRecords(baseUrl, provider.clientId!, accessTokenPlain, lock.lockId, sinceMs);
      for (const rec of records) {
        // A failed unlock attempt (wrong code, denied eKey, etc.) is not a
        // presence signal -- never recorded as an attendance mark.
        if (rec.success !== 1) continue;
        const rawUsername = typeof rec.username === 'string' ? rec.username.trim() : '';
        const rawKeypad = typeof rec.keyboardPwd === 'string' ? rec.keyboardPwd.trim() : '';
        // Preference order: the account username TTLock attributes the
        // action to, else the passcode/card/wristband identifier used. A
        // record with NEITHER (e.g. a firmware/diagnostic record type) has
        // no identity signal at all -- it is never queued as "unmapped"
        // (there is nothing to eventually map) and never guessed at.
        const deviceUserRef = rawUsername || (rawKeypad ? `KEYPAD:${rawKeypad}` : null);
        if (!deviceUserRef) continue;
        const rawRef = crypto.createHash('sha256').update(`ttlock|${lock.lockId}|${rec.recordType}|${deviceUserRef}|${rec.lockDate}`).digest('hex');
        const existing = await this.prisma.attendanceEvent.findUnique({ where: { providerId_rawRef: { providerId, rawRef } } });
        if (existing) continue;
        const created = await this.ingestEvent({
          providerId,
          deviceUserRef,
          occurredAt: new Date(Number(rec.lockDate)),
          method: TTLOCK_RECORD_TYPE_LABELS[rec.recordType] ?? `TTLOCK_RECORD_TYPE_${rec.recordType}`,
          locationRef: lock.lockAlias || lock.lockName || String(lock.lockId),
          rawRef,
        });
        synced++;
        if (!created.employeeId) unmappedQueued++;
        if (created.isTerminatedAlert) securityAlertsRaised++;
      }
    }
    return { synced, unmappedQueued, securityAlertsRaised };
  }

  private ttlockApiBaseUrl(cc: TTLockCredentialConfig | null): string {
    return (cc?.apiBaseUrl ? cc.apiBaseUrl.replace(/\/+$/, '') : TTLOCK_DEFAULT_API_BASE_URL);
  }

  // Proactive refresh -- a sync never hits an expired token mid-run. Falls
  // back to a full password-grant re-acquire if there's no refresh token
  // yet, or if the refresh token itself has been revoked/expired
  // server-side (a refresh_token grant can fail independently of an
  // access_token's own expiry).
  private async ensureFreshTTLockToken(provider: AttendanceProvider): Promise<AttendanceProvider> {
    if (provider.accessToken && provider.tokenExpiresAt && provider.tokenExpiresAt.getTime() - TTLOCK_TOKEN_REFRESH_MARGIN_MS > Date.now()) {
      return provider; // still fresh -- returned as-is (encrypted); the caller decrypts at the point it actually uses accessToken.
    }
    const clientSecretPlain = decryptSecretNullable(provider.clientSecret);
    const refreshTokenPlain = decryptSecretNullable(provider.refreshToken);
    const cc = decryptJsonSecret(provider.credentialConfig) as TTLockCredentialConfig | null;
    if (refreshTokenPlain && provider.clientId && clientSecretPlain) {
      try {
        const refreshed = await this.refreshTTLockToken(this.ttlockApiBaseUrl(cc), provider.clientId, clientSecretPlain, refreshTokenPlain);
        return this.persistTTLockToken(provider.id, refreshed);
      } catch {
        // Fall through to a full re-acquire below -- the refresh token
        // itself may no longer be valid.
      }
    }
    if (!cc?.ttlockUsername || !cc?.ttlockPasswordMd5 || !provider.clientId || !clientSecretPlain) {
      throw new AttendanceError('Provider has no usable TTLock OAuth2 credentials (clientId/clientSecret/ttlockUsername/ttlockPassword) -- cannot obtain a token.');
    }
    const token = await this.acquireTTLockToken(provider.clientId, clientSecretPlain, cc);
    return this.persistTTLockToken(provider.id, token);
  }

  private async persistTTLockToken(providerId: string, token: { access_token: string; refresh_token: string; expires_in: number }) {
    const now = new Date();
    // Invariant 75(a) (CHECK28): "attendance client-secret/tokens" -- the
    // access/refresh token are just as live-credential-sensitive as
    // clientSecret, encrypted the same way.
    return this.prisma.attendanceProvider.update({
      where: { id: providerId },
      data: {
        accessToken: encryptSecret(token.access_token),
        refreshToken: encryptSecret(token.refresh_token),
        tokenObtainedAt: now,
        tokenExpiresAt: new Date(now.getTime() + token.expires_in * 1000),
      },
    });
  }

  // Invariant 73(b): the initial password-grant token request. Confirmed
  // live against euopen.ttlock.com/doc/oauth2 -- clientId/clientSecret +
  // username + MD5-hashed password, form-urlencoded POST.
  private async acquireTTLockToken(clientId: string, clientSecret: string, cc: TTLockCredentialConfig): Promise<{ access_token: string; refresh_token: string; expires_in: number }> {
    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      username: cc.ttlockUsername!,
      password: cc.ttlockPasswordMd5!,
    });
    return this.ttlockTokenRequest(`${this.ttlockApiBaseUrl(cc)}/oauth2/token`, body);
  }

  // Invariant 73(b): confirmed live against
  // euopen.ttlock.com/doc/oauth2/refreshToken -- same endpoint,
  // grant_type=refresh_token.
  private async refreshTTLockToken(baseUrl: string, clientId: string, clientSecret: string, refreshToken: string): Promise<{ access_token: string; refresh_token: string; expires_in: number }> {
    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
    return this.ttlockTokenRequest(`${baseUrl}/oauth2/token`, body);
  }

  // The one seam this adapter's HTTP calls funnel through -- a smoke test
  // can monkey-patch global fetch to prove the request shape and the
  // token-persistence logic without a real network call or real TTLock
  // credentials.
  private async ttlockTokenRequest(url: string, body: URLSearchParams): Promise<{ access_token: string; refresh_token: string; expires_in: number }> {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() });
    const json = await res.json().catch(() => ({}) as Record<string, unknown>);
    if (!res.ok || !json.access_token) {
      const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
      throw new AttendanceError(`TTLock Open Platform OAuth2 token request failed: ${errMsg}`);
    }
    return json as { access_token: string; refresh_token: string; expires_in: number };
  }

  // Invariant 73(b): confirmed live against euopen.ttlock.com/doc/api/v3/
  // lock/list.
  private async listTTLockLocks(baseUrl: string, clientId: string, accessToken: string): Promise<{ lockId: number; lockAlias?: string; lockName?: string }[]> {
    const all: { lockId: number; lockAlias?: string; lockName?: string }[] = [];
    for (let pageNo = 1; ; pageNo++) {
      const params = new URLSearchParams({ clientId, accessToken, pageNo: String(pageNo), pageSize: String(TTLOCK_PAGE_SIZE), date: String(Date.now()) });
      const res = await fetch(`${baseUrl}/v3/lock/list?${params.toString()}`, { method: 'GET' });
      const json = await res.json().catch(() => ({}) as Record<string, unknown>);
      if (!res.ok || json.errcode) {
        const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
        throw new AttendanceError(`TTLock lock/list failed: ${errMsg}`);
      }
      const page = Array.isArray(json.list) ? (json.list as { lockId: number; lockAlias?: string; lockName?: string }[]) : [];
      all.push(...page);
      if (page.length < TTLOCK_PAGE_SIZE) break;
    }
    return all;
  }

  // Invariant 73(b): confirmed live against euopen.ttlock.com/doc/api/v3/
  // lockRecord/list -- the "who unlocked what, when" endpoint.
  private async listTTLockRecords(baseUrl: string, clientId: string, accessToken: string, lockId: number, sinceMs: number): Promise<{ recordType: number; username?: string; keyboardPwd?: string; success: number; lockDate: number }[]> {
    const all: { recordType: number; username?: string; keyboardPwd?: string; success: number; lockDate: number }[] = [];
    for (let pageNo = 1; ; pageNo++) {
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
      const json = await res.json().catch(() => ({}) as Record<string, unknown>);
      if (!res.ok || json.errcode) {
        const errMsg = typeof json.errmsg === 'string' ? json.errmsg : `HTTP ${res.status}`;
        throw new AttendanceError(`TTLock lockRecord/list failed for lock ${lockId}: ${errMsg}`);
      }
      const page = Array.isArray(json.list) ? (json.list as { recordType: number; username?: string; keyboardPwd?: string; success: number; lockDate: number }[]) : [];
      all.push(...page);
      if (page.length < TTLOCK_PAGE_SIZE) break;
    }
    return all;
  }

  // ==========================================================================
  // FileImportAdapter -- the universal any-brand path (invariant 64c).
  // Malformed rows are rejected to a visible error list, never silently
  // dropped or ingested as garbage (invariant 63c adversarial case).
  // ==========================================================================
  async importFileEvents(providerId: string, rows: FileImportRow[], actorUserId: string): Promise<FileImportResult> {
    await this.assertCapability(actorUserId, 'ATTENDANCE_GATEWAY_POLICY', 'INITIATE', 'upload a FileImport attendance batch');
    const provider = await this.prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (provider.adapterType !== 'FILE_IMPORT') {
      throw new AttendanceError(`Provider ${providerId} is ${provider.adapterType}, not FILE_IMPORT.`);
    }
    const result: FileImportResult = { imported: 0, duplicates: 0, rejected: [] };
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

  // Invariant 40(a)/(d): the identity resolution + terminated-employee
  // security-alert gate every ingestion path (TTLock, FileImport) shares.
  private async ingestEvent(input: { providerId: string; deviceUserRef: string; occurredAt: Date; method: string; locationRef?: string; rawRef: string }) {
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

  private async raiseTerminatedUnlockAlert(employeeId: string, eventId: string) {
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

  // Invariant 40(a): "LOCK-USER<->EMPLOYEE MAPPING TABLE + UI." Creating a
  // mapping retroactively resolves any already-ingested unmapped events for
  // the same (providerId, deviceUserRef) pair -- an unmapped event queues
  // visibly rather than being silently dropped, and mapping it later must
  // not leave history stranded.
  async mapLockUser(input: MapLockUserInput, actorUserId: string) {
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
      if (isTerminatedAlert) await this.raiseTerminatedUnlockAlert(input.employeeId, ev.id);
    }
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'attendance_lock_user_mapping', entityId: mapping.id, after: { providerId: input.providerId, deviceUserRef: input.deviceUserRef, employeeId: input.employeeId, resolvedEventCount: unresolvedEvents.length } });
    return { mapping, resolvedEventCount: unresolvedEvents.length };
  }

  // The mapping queue -- unmapped events, never guessed at, never silently
  // dropped.
  async listUnmappedEvents() {
    return this.prisma.attendanceEvent.findMany({
      where: { employeeId: null },
      include: { provider: { select: { name: true, providerSlot: true } } },
      orderBy: { occurredAt: 'desc' },
    });
  }

  // ==========================================================================
  // Exception requests -- invariant 40(b): "dispute a mark ... -> supervisor
  // adjudicates -> audit-trailed." Application is self-service (identity-
  // gated, no capability grant, same posture as TaskService.assignTask's
  // own self-assignment path); adjudication is a reports-to check, not a
  // capability grant -- ANY supervisor may adjudicate THEIR OWN reports'
  // exceptions, never a role-wide grant.
  // ==========================================================================
  // actorUserId-resolved, never a caller-supplied employeeId -- the same
  // self-service identity discipline as LeaveService.applyForLeave /
  // TaskService.assignTask's own self-assignment path (no employee may
  // dispute another employee's attendance mark).
  async requestException(actorUserId: string, input: Omit<RequestExceptionInput, 'employeeId'>) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) throw new AttendanceError('Exception requests require the caller to be a real Employee.');
    return this.prisma.attendanceExceptionRequest.create({
      data: {
        employeeId: employee.id,
        attendanceEventId: input.attendanceEventId,
        disputedDate: new Date(input.disputedDate),
        reason: input.reason,
      },
    });
  }

  async listMyExceptionRequests(actorUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!employee) return [];
    return this.prisma.attendanceExceptionRequest.findMany({ where: { employeeId: employee.id }, orderBy: { createdAt: 'desc' } });
  }

  async listSubordinateExceptionRequests(actorUserId: string) {
    const supervisor = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId } });
    if (!supervisor) return [];
    const reports = await this.prisma.employee.findMany({ where: { reportsToId: supervisor.id }, select: { id: true } });
    if (reports.length === 0) return [];
    return this.prisma.attendanceExceptionRequest.findMany({
      where: { employeeId: { in: reports.map((r) => r.id) } },
      include: { employee: { select: { surname: true, firstName: true, middleName: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async decideExceptionRequest(requestId: string, decision: 'ACCEPTED' | 'REJECTED', decidedByUserId: string, notes?: string) {
    const request = await this.prisma.attendanceExceptionRequest.findUniqueOrThrow({ where: { id: requestId } });
    if (request.status !== 'PENDING') {
      throw new AttendanceError(`Exception request ${requestId} is ${request.status}, not PENDING.`);
    }
    const requester = await this.prisma.employee.findUniqueOrThrow({ where: { id: request.employeeId } });
    const decider = await this.prisma.employee.findFirst({ where: { appUserId: decidedByUserId } });
    if (!decider) {
      throw new AttendanceError('Exception adjudication requires the decider to be a real Employee (org reports_to check).');
    }
    if (decider.id === requester.id) {
      throw new AttendanceError('A supervisor cannot adjudicate their own exception request (invariant 63c adversarial case).');
    }
    if (requester.reportsToId !== decider.id) {
      throw new AttendanceError(`Exception adjudication requires the decider to be requester ${requester.id}'s direct supervisor (org reports_to) — invariant 40(b).`);
    }
    const updated = await this.prisma.attendanceExceptionRequest.update({
      where: { id: requestId },
      data: { status: decision, decidedByUserId, decidedAt: new Date(), decisionNotes: notes },
    });
    await this.audit.record({ actorUserId: decidedByUserId, action: decision === 'ACCEPTED' ? 'APPROVE' : 'REJECT', entityType: 'attendance_exception_request', entityId: requestId, after: { status: decision } });
    return updated;
  }

  // ==========================================================================
  // Punctuality derivation -- invariant 40(b)/(c). "first qualifying event,
  // grace windows, expected hours per org/cadre" against the governed
  // AttendanceClockInPolicy; feeds PmsService.applyAttendanceLatenessGate
  // (mirrors TaskService.countDefaultedTasks -> PmsService.
  // applyTaskDefaultGate exactly) -- this service only counts, PmsService
  // owns the gate itself.
  // ==========================================================================
  async computeLateCounts(periodStart: Date, periodEnd: Date): Promise<{ employeeId: string; count: number }[]> {
    const events = await this.prisma.attendanceEvent.findMany({
      where: { occurredAt: { gte: periodStart, lte: periodEnd }, employeeId: { not: null }, isTerminatedAlert: false },
      include: { employee: { include: { position: true } } },
      orderBy: { occurredAt: 'asc' },
    });
    const firstEventPerDay = new Map<string, Date>(); // key = employeeId|yyyy-mm-dd
    for (const ev of events) {
      if (!ev.employeeId) continue;
      const dayKey = `${ev.employeeId}|${ev.occurredAt.toISOString().slice(0, 10)}`;
      const existing = firstEventPerDay.get(dayKey);
      if (!existing || ev.occurredAt < existing) firstEventPerDay.set(dayKey, ev.occurredAt);
    }
    const policies = await this.prisma.attendanceClockInPolicy.findMany({ where: { status: 'ACTIVE' } });
    // Invariant 64(e): "once attendance is live, suppresses absence marks
    // for the [approved leave] window" -- a clock-in inside an approved
    // leave window (unusual, e.g. a brief office visit) never counts
    // against punctuality; no adverse inference from an approved absence.
    const approvedLeave = await this.prisma.leaveApplication.findMany({
      where: { status: 'HR_ACKNOWLEDGED', startDate: { lte: periodEnd }, endDate: { gte: periodStart } },
      select: { employeeId: true, startDate: true, endDate: true },
    });
    const isOnApprovedLeave = (employeeId: string, at: Date) =>
      approvedLeave.some((l) => l.employeeId === employeeId && at >= l.startDate && at <= l.endDate);
    const lateCountByEmployee = new Map<string, number>();
    for (const ev of events) {
      if (!ev.employeeId) continue;
      if (isOnApprovedLeave(ev.employeeId, ev.occurredAt)) continue;
      const dayKey = `${ev.employeeId}|${ev.occurredAt.toISOString().slice(0, 10)}`;
      if (firstEventPerDay.get(dayKey)?.getTime() !== ev.occurredAt.getTime()) continue; // only the first qualifying event/day
      const orgUnitCode = ev.employee?.orgUnitCode ?? null;
      const cadre = ev.employee?.position?.cadre ?? null;
      const policy =
        policies.find((p) => p.orgUnitCode === orgUnitCode && p.cadre === cadre) ??
        policies.find((p) => p.orgUnitCode === orgUnitCode && p.cadre === null) ??
        policies.find((p) => p.orgUnitCode === null && p.cadre === null);
      if (!policy) continue; // no governed policy -> no adverse inference (invariant 40b)
      const [expH, expM] = policy.expectedStartTime.split(':').map(Number);
      const expected = new Date(ev.occurredAt);
      expected.setHours(expH, expM + policy.graceWindowMinutes, 0, 0);
      if (ev.occurredAt > expected) {
        lateCountByEmployee.set(ev.employeeId, (lateCountByEmployee.get(ev.employeeId) ?? 0) + 1);
      }
    }
    return Array.from(lateCountByEmployee.entries()).map(([employeeId, count]) => ({ employeeId, count }));
  }

  async runDailyReconciliation(): Promise<Record<string, unknown>> {
    const unmapped = await this.prisma.attendanceEvent.count({ where: { employeeId: null } });
    const pendingExceptions = await this.prisma.attendanceExceptionRequest.count({ where: { status: 'PENDING' } });
    const summary = { unmappedEventCount: unmapped, pendingExceptionCount: pendingExceptions };
    if (unmapped > 0) {
      throw new PartialJobFailure(`${unmapped} unmapped attendance event(s) awaiting lock-user mapping, ${pendingExceptions} exception request(s) pending adjudication.`, summary);
    }
    return summary;
  }

  private serializeProvider<
    T extends {
      clientSecret: string | null;
      pendingClientSecret: string | null;
      credentialConfig: unknown;
      pendingCredentialConfig: unknown;
      accessToken: string | null;
      refreshToken: string | null;
      tokenExpiresAt: Date | null;
    },
  >(p: T) {
    const { clientSecret, pendingClientSecret, credentialConfig, pendingCredentialConfig, accessToken, refreshToken, ...rest } = p;
    // Invariant 73(b): never expose the raw access/refresh token or the
    // MD5-hashed password over the API -- same masking doctrine as
    // clientSecret. tokenStatus is the honest, never-fabricated
    // connect/expired signal invariant 73(b)'s UI requirement calls for.
    let tokenStatus: 'NEVER_CONNECTED' | 'CONNECTED' | 'EXPIRED' = 'NEVER_CONNECTED';
    if (accessToken && p.tokenExpiresAt) {
      tokenStatus = p.tokenExpiresAt.getTime() > Date.now() ? 'CONNECTED' : 'EXPIRED';
    }
    // Invariant 75(a) (CHECK28): decrypt JUST for this in-memory preview
    // computation (never returned raw) -- accessToken/refreshToken aren't
    // previewed at all (only tokenStatus, a boolean/expiry derivation that
    // works identically on ciphertext), so they're left undecrypted.
    const decryptedCredentialConfig = decryptJsonSecret(credentialConfig);
    return {
      ...rest,
      ...maskSecret(decryptSecretNullable(clientSecret)),
      hasPendingSecretRotation: hasPendingSecret(pendingClientSecret),
      hasCredentialConfig: !!credentialConfig,
      hasPendingCredentialConfig: !!pendingCredentialConfig,
      credentialConfigPreview: decryptedCredentialConfig ? maskJsonConfigAllowlist(decryptedCredentialConfig, ['ttlockUsername', 'apiBaseUrl']) : null,
      tokenStatus,
    };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'attendance_activity', entityId: activity, after: { functionCode, level } });
      throw new AttendanceError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
