// Run with: npx tsx src/attendance/ttlock-oauth-adapter.smoke.ts
// Invariant 73(b) (CHECK27): TTLock Open Platform's real OAuth2 adapter --
// proves (a) the password-grant token-acquisition/refresh request shape and
// the token-persistence logic against a mocked HTTP layer (no real TTLock
// credentials exist to test against), (b) an unmapped device-user event
// queues visibly rather than creating a phantom attendance record, and
// (c) a TERMINATED employee's unlock raises the SECURITY_ALERT path, never
// an ordinary attendance mark -- invariant 63(b)'s single most important
// adversarial case. Mirrors check17-adversarial.smoke.ts's own conventions:
// direct service construction, RUN-suffixed fixtures, expectReject/ok/fail
// helpers, full self-cleanup, careful capture/restore of any pre-existing
// real AttendanceProvider slot config.
import 'dotenv/config';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { AttendanceService } from './attendance.service';
import { decryptJsonSecret, decryptSecretNullable } from '../common/gateway-secret-crypto';

const RUN = Date.now();
const PROVIDER_SLOT = 1; // same slot check17-adversarial.smoke.ts uses (and fully cleans up) -- captured/restored below regardless.
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

// ---- Mocked HTTP layer -- the seam AttendanceService's TTLock calls funnel
// through is the global `fetch` function itself (same as ScreeningGatewayService's
// own direct-fetch convention elsewhere in this codebase). No real network
// call, no real TTLock credentials -- this proves REQUEST SHAPE and
// TOKEN-PERSISTENCE, exactly what the task requires without a live vendor.
interface FetchCall { url: string; method: string; body?: string }
const fetchCalls: FetchCall[] = [];
let mockLocks: { lockId: number; lockAlias?: string }[] = [];
let mockRecords: { recordType: number; username?: string; keyboardPwd?: string; success: number; lockDate: number }[] = [];
const originalFetch = global.fetch;

function installFetchMock() {
  (global as any).fetch = async (url: string, init?: { method?: string; body?: string }) => {
    const method = init?.method ?? 'GET';
    const body = typeof init?.body === 'string' ? init.body : undefined;
    fetchCalls.push({ url, method, body });
    if (url.includes('/oauth2/token')) {
      const isRefresh = !!body?.includes('grant_type=refresh_token');
      const payload = isRefresh
        ? { access_token: `REFRESHED_ACCESS_${RUN}`, refresh_token: `REFRESHED_REFRESH_${RUN}`, expires_in: 7200 }
        : { access_token: `ACCESS_${RUN}`, refresh_token: `REFRESH_${RUN}`, expires_in: 7200 };
      return { ok: true, status: 200, json: async () => payload } as any;
    }
    if (url.includes('/v3/lock/list')) {
      return { ok: true, status: 200, json: async () => ({ list: mockLocks }) } as any;
    }
    if (url.includes('/v3/lockRecord/list')) {
      return { ok: true, status: 200, json: async () => ({ list: mockRecords }) } as any;
    }
    throw new Error(`Unexpected fetch URL in smoke test: ${url}`);
  };
}
function restoreFetch() {
  (global as any).fetch = originalFetch;
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const notification = new NotificationService(prisma);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);

  // ==========================================================================
  // Capture (never clobber) any pre-existing real AttendanceProvider row at
  // the slot this smoke test uses -- restored verbatim in cleanup below.
  // Distinguishes a REAL pre-existing config from debris an earlier,
  // abnormally-terminated run of THIS SAME smoke test left behind (this
  // codebase's DB is shared across concurrently-running work -- an earlier
  // run of this file that was killed mid-test, or lost a race against
  // another process touching the same slot, can leave an orphaned
  // "TTLock Smoke <run>" row; that must be discarded, never mistaken for
  // real config and lovingly restored back into place).
  // ==========================================================================
  const SMOKE_NAME_PREFIX = 'TTLock Smoke ';
  const preExistingRow = await prisma.attendanceProvider.findUnique({ where: { providerSlot: PROVIDER_SLOT } });
  let preExistingProvider: typeof preExistingRow = null;
  if (preExistingRow && preExistingRow.name.startsWith(SMOKE_NAME_PREFIX)) {
    ok(`found orphaned debris from an earlier, abnormally-terminated run of this smoke test ("${preExistingRow.name}") at slot ${PROVIDER_SLOT} -- discarding it (never restored; it is not real config)`);
    await prisma.attendanceProvider.delete({ where: { id: preExistingRow.id } });
  } else if (preExistingRow) {
    preExistingProvider = preExistingRow;
    ok(`captured pre-existing real AttendanceProvider at slot ${PROVIDER_SLOT} ("${preExistingRow.name}") -- will restore verbatim, not clobber`);
    await prisma.attendanceProvider.delete({ where: { id: preExistingRow.id } });
  }

  const orgUnitCode = `TTLOCK_SMOKE_${RUN}`;
  await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'TTLock Smoke Dept' } });
  const position = await prisma.position.create({ data: { title: `TTLock Smoke Role ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });

  const makeUser = async (label: string, roleCode: string) => {
    const email = `ttlock-smoke-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    return user;
  };
  const hrUser = await makeUser('hr', 'HR_ADMIN');
  const mdUser = await makeUser('md', 'MD_CEO');

  const terminatedEmployee = await prisma.employee.create({
    data: { surname: 'TTLockTerminated', firstName: `T${RUN}`, positionId: position.id, orgUnitCode, appUserId: null, hireDate: new Date(), status: 'TERMINATED' },
  });

  let providerId: string | undefined;
  const cleanup = async () => {
    restoreFetch();
    if (providerId) {
      await prisma.attendanceEvent.deleteMany({ where: { providerId } });
      await prisma.attendanceLockUserMapping.deleteMany({ where: { providerId } });
      await prisma.attendanceProvider.deleteMany({ where: { id: providerId } });
    }
    // Defensive sweep: proposeProviderConfig creates the provider row
    // BEFORE its first await that could throw (e.g. a transient conflict
    // from another process touching the same slot) -- if that happens
    // before `providerId` above was ever assigned, this catches the
    // orphan by its RUN-suffixed name so it never lingers to be mistaken
    // for real config by a later run's capture/restore logic.
    const strayAtSlot = await prisma.attendanceProvider.findUnique({ where: { providerSlot: PROVIDER_SLOT } });
    if (strayAtSlot && strayAtSlot.name.includes(String(RUN))) {
      await prisma.attendanceEvent.deleteMany({ where: { providerId: strayAtSlot.id } });
      await prisma.attendanceLockUserMapping.deleteMany({ where: { providerId: strayAtSlot.id } });
      await prisma.attendanceProvider.delete({ where: { id: strayAtSlot.id } });
    }
    await prisma.employee.deleteMany({ where: { orgUnitCode } });
    const userIds = [hrUser.id, mdUser.id];
    await prisma.workflowStepApproval.deleteMany({ where: { approverUserId: { in: userIds } } });
    await prisma.workflowInstance.deleteMany({ where: { initiatedByUserId: { in: userIds } } });
    await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.position.deleteMany({ where: { orgUnitCode } });
    await prisma.orgUnit.deleteMany({ where: { code: orgUnitCode } });
    if (preExistingProvider) {
      const { id: _oldId, ...rest } = preExistingProvider;
      await prisma.attendanceProvider.create({ data: rest as any });
      ok(`restored the captured pre-existing AttendanceProvider at slot ${PROVIDER_SLOT} verbatim`);
    }
  };

  try {
    installFetchMock();

    // ==========================================================================
    // Provider config, phase 1: propose+approve clientId/clientSecret ONLY
    // (no TTLock account credentials yet) -- proves the honest-placeholder
    // posture for a slot that isn't fully configured, and that connectTTLock
    // refuses without an approved credentialConfig. Everything stays on the
    // SAME slot 1 row throughout this test -- never touches slot 2/3, which
    // might hold real config in another environment.
    // ==========================================================================
    const phase1 = await attendance.proposeProviderConfig(
      { providerSlot: PROVIDER_SLOT, adapterType: 'TTLOCK', name: `TTLock Smoke ${RUN}`, clientId: `client-${RUN}`, clientSecret: `secret-${RUN}`, isActive: true },
      hrUser.id,
    );
    await attendance.approveProviderConfig(phase1.configWorkflowInstanceId!, mdUser.id);
    const afterPhase1 = await prisma.attendanceProvider.findUniqueOrThrow({ where: { providerSlot: PROVIDER_SLOT } });
    providerId = afterPhase1.id;

    const bareSync = await attendance.runTTLockSync(providerId);
    if (bareSync.synced === 0 && bareSync.note?.includes('no approved credentialConfig')) {
      ok('a TTLOCK slot with clientId/clientSecret but no approved credentialConfig (ttlockUsername/ttlockPassword) stays an honest placeholder — 0 events, disclosed reason, never fabricated');
    } else {
      fail('unconfigured TTLOCK slot did not report the expected honest placeholder', bareSync);
    }
    await expectReject('connectTTLock refuses without an approved credentialConfig', () => attendance.connectTTLock(providerId!, hrUser.id));

    // ==========================================================================
    // Provider config, phase 2: propose+approve the real password-grant
    // extra fields (invariant 73b) on the SAME slot 1 row. Plaintext
    // password never touches the DB -- only its MD5 hash does.
    // ==========================================================================
    // clientId is re-submitted (same value) same as the real ops-ui form
    // does every propose -- proposeProviderConfig requires it on every
    // TTLOCK proposal (pre-existing rule, unchanged by this build).
    // clientSecret is omitted -- proving the "omit to leave unchanged"
    // write-only-masked rotation discipline extends to this second
    // proposal too.
    const plaintextPassword = `Sm0ke-P@ss-${RUN}`;
    const phase2 = await attendance.proposeProviderConfig(
      {
        providerSlot: PROVIDER_SLOT,
        adapterType: 'TTLOCK',
        name: `TTLock Smoke ${RUN}`,
        clientId: `client-${RUN}`,
        isActive: true,
        ttlockUsername: `ttlock-user-${RUN}`,
        ttlockPassword: plaintextPassword,
        ttlockApiBaseUrl: 'https://smoke.ttlock.invalid',
      },
      hrUser.id,
    );
    await attendance.approveProviderConfig(phase2.configWorkflowInstanceId!, mdUser.id);
    const approvedRaw = await prisma.attendanceProvider.findUniqueOrThrow({ where: { providerSlot: PROVIDER_SLOT } });
    // Invariant 75(a) (CHECK28): clientSecret/credentialConfig are stored
    // as AES-256-GCM ciphertext now -- decrypt before asserting against the
    // expected plaintext values.
    const decryptedClientSecret = decryptSecretNullable(approvedRaw.clientSecret);
    if (approvedRaw.clientId !== `client-${RUN}` || decryptedClientSecret !== `secret-${RUN}`) {
      fail('phase 2 (credentialConfig-only) approval unexpectedly disturbed the phase 1 clientId/clientSecret', approvedRaw);
    } else {
      ok('proposing a credentialConfig-only change (no clientId/clientSecret in the diff) leaves the previously-approved clientId/clientSecret untouched -- shallow-merge, not replace');
    }
    if (/^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(approvedRaw.clientSecret ?? '')) {
      ok('invariant 75(a): the attendance_provider.client_secret column holds AES-256-GCM ciphertext at rest, not plaintext');
    } else {
      fail('clientSecret column does not look encrypted at rest', approvedRaw.clientSecret);
    }

    const expectedMd5 = crypto.createHash('md5').update(plaintextPassword).digest('hex');
    const cc = decryptJsonSecret(approvedRaw.credentialConfig) as { ttlockUsername?: string; ttlockPasswordMd5?: string; apiBaseUrl?: string } | null;
    const rawJson = JSON.stringify(approvedRaw.credentialConfig ?? {});
    if (cc?.ttlockPasswordMd5 === expectedMd5 && cc?.ttlockUsername === `ttlock-user-${RUN}` && !rawJson.includes(plaintextPassword) && !rawJson.includes(expectedMd5)) {
      ok('credentialConfig persists the MD5-hashed password (matching the exact hash TTLock\'s wire format requires), encrypted at rest -- neither the plaintext password nor even the hash is visible in the raw JSON column');
    } else {
      fail('credentialConfig did not persist the expected hashed username/password shape', { cc, expectedMd5 });
    }

    // ==========================================================================
    // (a) Token acquisition: proves the password-grant request shape
    // (client_id/client_secret/username/password, NO grant_type -- the
    // initial acquisition per euopen.ttlock.com/doc/oauth2) and that the
    // response is persisted onto the typed OAuth2 columns.
    // ==========================================================================
    fetchCalls.length = 0;
    const connected = await attendance.connectTTLock(providerId, hrUser.id);
    const tokenCall = fetchCalls.find((c) => c.url.includes('/oauth2/token'));
    const bodyHasNoGrantType = !!tokenCall && !tokenCall.body?.includes('grant_type');
    const bodyHasCorrectFields =
      !!tokenCall?.body?.includes(`client_id=client-${RUN}`) &&
      !!tokenCall?.body?.includes(`client_secret=secret-${RUN}`) &&
      !!tokenCall?.body?.includes(`username=ttlock-user-${RUN}`) &&
      !!tokenCall?.body?.includes(`password=${expectedMd5}`);
    if (tokenCall?.method === 'POST' && tokenCall.url === 'https://smoke.ttlock.invalid/oauth2/token' && bodyHasNoGrantType && bodyHasCorrectFields) {
      ok('token acquisition POSTs the exact password-grant shape (client_id/client_secret/username/MD5-hashed password, form-urlencoded, no grant_type) to <apiBaseUrl>/oauth2/token');
    } else {
      fail('token acquisition request did not match the expected password-grant shape', tokenCall);
    }
    const providerAfterConnect = await prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (
      decryptSecretNullable(providerAfterConnect.accessToken) === `ACCESS_${RUN}` &&
      decryptSecretNullable(providerAfterConnect.refreshToken) === `REFRESH_${RUN}` &&
      providerAfterConnect.tokenExpiresAt &&
      providerAfterConnect.tokenExpiresAt.getTime() > Date.now()
    ) {
      ok('connectTTLock persists access_token/refresh_token/tokenObtainedAt/tokenExpiresAt from the token response onto the typed OAuth2 columns');
    } else {
      fail('connectTTLock did not persist the token response as expected', providerAfterConnect);
    }
    if (/^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(providerAfterConnect.accessToken ?? '') && /^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(providerAfterConnect.refreshToken ?? '')) {
      ok('invariant 75(a): access_token/refresh_token are stored as AES-256-GCM ciphertext at rest, not plaintext');
    } else {
      fail('access_token/refresh_token columns do not look encrypted at rest', { accessToken: providerAfterConnect.accessToken, refreshToken: providerAfterConnect.refreshToken });
    }
    if (connected.tokenStatus === 'CONNECTED' && !('accessToken' in connected) && !('refreshToken' in connected)) {
      ok('serialized provider reports tokenStatus CONNECTED and never exposes the raw access/refresh token over the API');
    } else {
      fail('serialized provider leaked a raw token or reported the wrong tokenStatus', connected);
    }

    // Force the proactive-refresh path: back-date tokenExpiresAt to just
    // inside the refresh margin so the NEXT sync must refresh before use.
    await prisma.attendanceProvider.update({ where: { id: providerId }, data: { tokenExpiresAt: new Date(Date.now() + 60_000) } });

    // ==========================================================================
    // (b) Unmapped device-user event queues visibly, never a phantom
    // attendance record.
    // ==========================================================================
    const lockId = 500000 + (RUN % 100000);
    const unmappedUserRef = `unmapped.user.${RUN}`;
    mockLocks = [{ lockId, lockAlias: `Smoke Front Door ${RUN}` }];
    mockRecords = [{ recordType: 1, username: unmappedUserRef, success: 1, lockDate: Date.now() }];
    fetchCalls.length = 0;
    const syncB = await attendance.runTTLockSync(providerId);
    const refreshCall = fetchCalls.find((c) => c.url.includes('/oauth2/token') && c.body?.includes('grant_type=refresh_token') && c.body?.includes(`refresh_token=REFRESH_${RUN}`));
    if (refreshCall) {
      ok('runTTLockSync proactively refreshes a near-expiry token BEFORE syncing, POSTing grant_type=refresh_token + the stored refresh_token to the same /oauth2/token endpoint (euopen.ttlock.com/doc/oauth2/refreshToken)');
    } else {
      fail('runTTLockSync did not proactively refresh the near-expiry token', fetchCalls);
    }
    const providerAfterRefresh = await prisma.attendanceProvider.findUniqueOrThrow({ where: { id: providerId } });
    if (decryptSecretNullable(providerAfterRefresh.accessToken) === `REFRESHED_ACCESS_${RUN}`) {
      ok('the refreshed access_token is persisted, replacing the original');
    } else {
      fail('refreshed token was not persisted', providerAfterRefresh);
    }
    if (syncB.synced === 1 && syncB.unmappedQueued === 1 && syncB.securityAlertsRaised === 0) {
      ok('runTTLockSync returns real synced/unmappedQueued/securityAlertsRaised counts for an unmapped device-user record');
    } else {
      fail('runTTLockSync counts were wrong for the unmapped-user case', syncB);
    }
    const unmappedEvent = await prisma.attendanceEvent.findFirst({ where: { providerId, deviceUserRef: unmappedUserRef } });
    const queue = await attendance.listUnmappedEvents();
    if (unmappedEvent && unmappedEvent.employeeId === null && !unmappedEvent.isTerminatedAlert && queue.some((e) => e.id === unmappedEvent.id)) {
      ok('an unmapped TTLock device-user record queues visibly (employeeId null, appears in listUnmappedEvents) rather than creating a phantom attendance record attributed to nobody-in-particular');
    } else {
      fail('unmapped TTLock event did not queue as expected', { unmappedEvent, inQueue: queue.some((e) => e.id === unmappedEvent?.id) });
    }

    // A retried sync over the same window never double-books the same event.
    fetchCalls.length = 0;
    const syncBRetry = await attendance.runTTLockSync(providerId);
    if (syncBRetry.synced === 0) {
      ok('a retried sync over the same overlap window never double-books an already-ingested record (rawRef idempotency)');
    } else {
      fail('a retried sync double-booked an event', syncBRetry);
    }

    // Failed attempts and identity-less records are never ingested.
    mockRecords = [
      { recordType: 1, username: 'should-be-skipped', success: 0, lockDate: Date.now() + 60_000 }, // failed attempt
      { recordType: 44, success: 1, lockDate: Date.now() + 60_000 }, // no username/keyboardPwd at all
    ];
    const syncNoise = await attendance.runTTLockSync(providerId);
    if (syncNoise.synced === 0) {
      ok('a failed unlock attempt (success=0) and a record with no identity signal at all are never ingested as attendance marks');
    } else {
      fail('noise records were incorrectly ingested', syncNoise);
    }

    // keyboardPwd fallback identity.
    const keypadRef = `KEYPAD:${RUN % 10000}`;
    mockRecords = [{ recordType: 4, keyboardPwd: String(RUN % 10000), success: 1, lockDate: Date.now() + 120_000 }];
    const syncKeypad = await attendance.runTTLockSync(providerId);
    const keypadEvent = await prisma.attendanceEvent.findFirst({ where: { providerId, deviceUserRef: keypadRef } });
    if (syncKeypad.synced === 1 && keypadEvent) {
      ok('a record identified only by keyboardPwd (passcode/card/wristband, no username) falls back to a KEYPAD: device-user ref rather than being dropped');
    } else {
      fail('keyboardPwd fallback identity did not work as expected', { syncKeypad, keypadEvent });
    }

    // ==========================================================================
    // (c) Terminated-employee unlock raises the SECURITY ALERT path, never
    // an ordinary attendance mark -- invariant 63(b)'s own named adversarial
    // case.
    // ==========================================================================
    const terminatedUserRef = `ttlock-term-user-${RUN}`;
    await attendance.mapLockUser({ providerId, deviceUserRef: terminatedUserRef, employeeId: terminatedEmployee.id }, hrUser.id);
    mockRecords = [{ recordType: 1, username: terminatedUserRef, success: 1, lockDate: Date.now() + 180_000 }];
    const syncC = await attendance.runTTLockSync(providerId);
    const alertEvent = await prisma.attendanceEvent.findFirst({ where: { providerId, deviceUserRef: terminatedUserRef } });
    const securityAlertAudit = await prisma.auditTrail.findFirst({ where: { action: 'SECURITY_ALERT', entityType: 'attendance_event', entityId: alertEvent?.id } });
    if (syncC.securityAlertsRaised === 1 && alertEvent?.isTerminatedAlert && alertEvent.employeeId === terminatedEmployee.id && securityAlertAudit) {
      ok('a TTLock unlock event mapped to a TERMINATED employee raises a SECURITY_ALERT audit record and isTerminatedAlert=true — invariant 40(d)/63(b), never recorded as an ordinary attendance mark, via the SAME ingestEvent gate FileImportAdapter already uses (no second convention invented)');
    } else {
      fail('terminated-employee TTLock unlock did not raise the expected security alert', { syncC, alertEvent, securityAlertAudit });
    }
    // computeLateCounts excludes isTerminatedAlert rows -- confirms this is
    // structurally never treated as a normal attendance/punctuality signal.
    const lateCounts = await attendance.computeLateCounts(new Date(Date.now() - 86_400_000), new Date(Date.now() + 86_400_000));
    if (!lateCounts.some((l) => l.employeeId === terminatedEmployee.id)) {
      ok('the terminated-employee security-alert event is excluded from punctuality/attendance derivation entirely, not just flagged-and-counted');
    } else {
      fail('the security-alert event leaked into punctuality derivation', lateCounts);
    }

    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — CHECK27 TTLock OAuth2 adapter adversarial evidence (mocked HTTP layer, real DB/service code) against invariant 73(b)/63(b)/40(d).`);
    process.exitCode = failed ? 1 : 0;
  } finally {
    await cleanup();
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error(err);
  restoreFetch();
  process.exitCode = 1;
});
