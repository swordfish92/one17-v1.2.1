// Run with: npx tsx src/calendar/calendar-gateway.smoke.ts
// Invariant 73(b) (CHECK27), 55(c2)(iv) Phase B: CalendarGateway. Proves
// against the real live DB: the authorization-URL builder's exact URL/
// scope/redirect shape for both Microsoft Graph and Google, the propose/
// approve maker!=checker gate on provider config, the token-exchange +
// AES-256-GCM encryption round-trip (the vendor token endpoint itself is
// stubbed -- no real OAuth2 authorization code exists to redeem without a
// contracted tenant account, same honest posture as
// AttendanceService.runTTLockSync), OAuth state CSRF verification,
// revocation (own-connection-only, idempotent, excluded from the next sync
// run), and -- the single most important adversarial case per the
// invariant's own privacy rule -- that a vendor payload carrying a REAL
// event subject never ends up in a persisted CalendarEntry.title.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { CalendarGatewayService } from './calendar-gateway.service';
import { decryptToken, encryptToken, signOAuthState } from './calendar-token-crypto';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const gateway = new CalendarGatewayService(prisma, audit, delegation, workflow);

  const makeUser = async (label: string, roleCode: string) => {
    const email = `calgw-smoke-${label}-${RUN}@one17.test`;
    const user = await prisma.appUser.create({ data: { email, displayName: email } });
    await rbac.assignRole({ userId: user.id, roleCode });
    return user;
  };
  const ictUser = await makeUser('ict', 'ICT');
  const mdUser = await makeUser('md', 'MD_CEO');
  const staffA = await prisma.appUser.create({ data: { email: `calgw-smoke-staffa-${RUN}@one17.test`, displayName: 'Staff A' } });
  const staffB = await prisma.appUser.create({ data: { email: `calgw-smoke-staffb-${RUN}@one17.test`, displayName: 'Staff B' } });
  const outsider = await prisma.appUser.create({ data: { email: `calgw-smoke-outsider-${RUN}@one17.test`, displayName: 'Outsider' } });

  // ==========================================================================
  // Provider config: propose/approve maker!=checker gate, slot validation.
  // ==========================================================================
  await expectReject('a user with no CALENDAR_GATEWAY_POLICY INITIATE cannot propose a provider config', () =>
    gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'x', clientId: 'x', tenantId: 'x', isActive: true }, outsider.id),
  );
  await expectReject('a MICROSOFT_GRAPH slot requires a tenantId', () =>
    gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'No Tenant', clientId: 'client-x', isActive: true }, ictUser.id),
  );
  await expectReject('provider slot must be 1 or 2', () =>
    gateway.proposeProviderConfig({ providerSlot: 3, adapterType: 'GOOGLE', name: 'Bad Slot', clientId: 'x', isActive: true }, ictUser.id),
  );

  const msftProposed = await gateway.proposeProviderConfig(
    { providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: `CALGW MSFT ${RUN}`, clientId: `msft-client-${RUN}`, clientSecret: `msft-secret-${RUN}`, tenantId: `tenant-${RUN}`, isActive: true },
    ictUser.id,
  );
  if (msftProposed.hasPendingSecretRotation && msftProposed.secretPreview === null) {
    ok('proposing a provider config stages pending* fields and never exposes the plaintext secret (write-only-masked)');
  } else {
    fail('proposed provider did not mask the secret correctly', msftProposed);
  }
  await expectReject('the initiator cannot also approve their own provider config (maker!=checker)', () =>
    gateway.approveProviderConfig(msftProposed.configWorkflowInstanceId!, ictUser.id),
  );
  const msftApproved = await gateway.approveProviderConfig(msftProposed.configWorkflowInstanceId!, mdUser.id);
  if (msftApproved.isActive && msftApproved.hasSecret && msftApproved.secretPreview === `••••${`msft-secret-${RUN}`.slice(-4)}`) {
    ok('MD_CEO approval applies the pending* staged values onto the live CalendarGatewayProvider row, secret still masked');
  } else {
    fail('approved provider did not apply staged values as expected', msftApproved);
  }

  const googleProposed = await gateway.proposeProviderConfig(
    { providerSlot: 2, adapterType: 'GOOGLE', name: `CALGW Google ${RUN}`, clientId: `google-client-${RUN}`, clientSecret: `google-secret-${RUN}`, isActive: true },
    ictUser.id,
  );
  const googleApproved = await gateway.approveProviderConfig(googleProposed.configWorkflowInstanceId!, mdUser.id);
  ok(`Google provider slot approved: isActive=${googleApproved.isActive}`);

  // ==========================================================================
  // (a) Authorization-URL builder -- exact URL/scope/redirect shape.
  // Cited against Microsoft Learn / Google's own OAuth2 docs (see this
  // file's header + calendar-gateway.service.ts's own doc comments for the
  // exact URLs consulted).
  // ==========================================================================
  const redirectUri = `https://api.one17.smoke-test/calendar-gateway/connect/${msftApproved.id}/callback`;
  const msftAuthUrl = await gateway.getAuthorizationUrl(msftApproved.id, staffA.id, redirectUri);
  const msftUrlObj = new URL(msftAuthUrl.url);
  if (
    msftUrlObj.origin === 'https://login.microsoftonline.com' &&
    msftUrlObj.pathname === `/tenant-${RUN}/oauth2/v2.0/authorize` &&
    msftUrlObj.searchParams.get('client_id') === `msft-client-${RUN}` &&
    msftUrlObj.searchParams.get('response_type') === 'code' &&
    msftUrlObj.searchParams.get('redirect_uri') === redirectUri &&
    msftAuthUrl.scope.includes('https://graph.microsoft.com/Calendars.ReadBasic') &&
    msftAuthUrl.scope.includes('offline_access')
  ) {
    ok('Microsoft Graph authorization URL uses the tenant-scoped /oauth2/v2.0/authorize endpoint, correct client_id/response_type/redirect_uri, and the narrowest available Calendars scope + offline_access for a refresh token');
  } else {
    fail('Microsoft Graph authorization URL shape was wrong', msftAuthUrl);
  }

  const googleAuthUrl = await gateway.getAuthorizationUrl(googleApproved.id, staffA.id, redirectUri);
  const googleUrlObj = new URL(googleAuthUrl.url);
  if (
    googleUrlObj.origin === 'https://accounts.google.com' &&
    googleUrlObj.pathname === '/o/oauth2/v2/auth' &&
    googleUrlObj.searchParams.get('client_id') === `google-client-${RUN}` &&
    googleUrlObj.searchParams.get('access_type') === 'offline' &&
    googleAuthUrl.scope === 'https://www.googleapis.com/auth/calendar.freebusy'
  ) {
    ok('Google authorization URL uses the documented /o/oauth2/v2/auth endpoint, access_type=offline for a refresh token, and the dedicated calendar.freebusy scope (never the broader calendar.readonly)');
  } else {
    fail('Google authorization URL shape was wrong', googleAuthUrl);
  }

  const inactiveProposed = await gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'Reconfig', clientId: `msft-client2-${RUN}`, tenantId: `tenant-${RUN}`, isActive: false }, ictUser.id);
  await gateway.approveProviderConfig(inactiveProposed.configWorkflowInstanceId!, mdUser.id);
  await expectReject('an INACTIVE provider refuses to hand out an authorization URL', () => gateway.getAuthorizationUrl(msftApproved.id, staffA.id, redirectUri));
  // Reactivate for the rest of the test.
  const reactivate = await gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: `CALGW MSFT ${RUN}`, clientId: `msft-client-${RUN}`, tenantId: `tenant-${RUN}`, isActive: true }, ictUser.id);
  await gateway.approveProviderConfig(reactivate.configWorkflowInstanceId!, mdUser.id);

  // ==========================================================================
  // (b) Token-exchange + AES-256-GCM encryption round-trip. The vendor
  // token endpoint is stubbed (no real OAuth2 code exists) -- but the
  // encryption/persistence logic below it is exercised for real.
  // ==========================================================================
  const roundTrip = decryptToken(encryptToken(`plain-value-${RUN}-${'x'.repeat(40)}`));
  if (roundTrip === `plain-value-${RUN}-${'x'.repeat(40)}`) {
    ok('encryptToken/decryptToken AES-256-GCM round-trips an arbitrary string exactly');
  } else {
    fail('encryption round-trip did not return the original plaintext', roundTrip);
  }
  const twoEncryptions = [encryptToken('same-input'), encryptToken('same-input')];
  if (twoEncryptions[0] !== twoEncryptions[1] && decryptToken(twoEncryptions[0]) === 'same-input' && decryptToken(twoEncryptions[1]) === 'same-input') {
    ok('encrypting the same plaintext twice yields different ciphertext (fresh IV per call) but both decrypt back correctly');
  } else {
    fail('encryption is not properly randomized per call', twoEncryptions);
  }

  (gateway as any).exchangeCodeForTokens = async () => ({
    accessToken: `stub-access-token-${RUN}`,
    refreshToken: `stub-refresh-token-${RUN}`,
    expiresInSeconds: 3600,
    scope: 'https://www.googleapis.com/auth/calendar.freebusy',
  });

  const validState = signOAuthState({ providerId: googleApproved.id, userId: staffA.id });
  await expectReject('a tampered/mismatched OAuth state is refused (CSRF guard)', () =>
    gateway.handleCallback(googleApproved.id, 'fake-code', signOAuthState({ providerId: googleApproved.id, userId: staffB.id }), redirectUri, staffA.id),
  );
  const connectionA = await gateway.handleCallback(googleApproved.id, 'fake-code', validState, redirectUri, staffA.id);
  const rawConnectionA = await prisma.externalCalendarConnection.findUniqueOrThrow({ where: { id: connectionA.id } });
  if (
    rawConnectionA.accessTokenEncrypted !== `stub-access-token-${RUN}` &&
    decryptToken(rawConnectionA.accessTokenEncrypted) === `stub-access-token-${RUN}` &&
    decryptToken(rawConnectionA.refreshTokenEncrypted!) === `stub-refresh-token-${RUN}`
  ) {
    ok('handleCallback persists the access/refresh tokens ENCRYPTED at rest (never plaintext in the DB column), and decrypting them recovers the exact stub tokens the vendor "returned"');
  } else {
    fail('handleCallback did not encrypt tokens correctly', rawConnectionA);
  }

  const myConnections = await gateway.listMyConnections(staffA.id);
  if (myConnections.some((c) => c.id === connectionA.id) && !('accessTokenEncrypted' in (myConnections[0] as any))) {
    ok("listMyConnections returns the caller's own connections without ever exposing the encrypted token columns");
  } else {
    fail('listMyConnections shape was wrong', myConnections);
  }

  // Second connection, for staffB, against the SAME Google provider --
  // proves the per-user isolation the [userId, providerId] unique
  // constraint is meant to guarantee.
  const validStateB = signOAuthState({ providerId: googleApproved.id, userId: staffB.id });
  const connectionB = await gateway.handleCallback(googleApproved.id, 'fake-code-b', validStateB, redirectUri, staffB.id);

  // ==========================================================================
  // (c) Revocation -- own-connection-only, idempotent, excluded from sync.
  // ==========================================================================
  await expectReject("a user cannot revoke another user's calendar connection", () => gateway.revokeConnection(connectionA.id, staffB.id));
  const revokedB = await gateway.revokeConnection(connectionB.id, staffB.id);
  if (revokedB.revokedAt) {
    ok('the owner can revoke their own connection, stamping revokedAt');
  } else {
    fail('revocation did not stamp revokedAt', revokedB);
  }
  const revokedAgain = await gateway.revokeConnection(connectionB.id, staffB.id);
  if (revokedB.revokedAt && revokedAgain.revokedAt?.getTime() === revokedB.revokedAt.getTime()) {
    ok('revoking an already-revoked connection is an idempotent no-op (same revokedAt, no error)');
  } else {
    fail('re-revoking changed revokedAt unexpectedly', { revokedB, revokedAgain });
  }

  // ==========================================================================
  // (d) THE key adversarial case: a vendor payload carrying a REAL event
  // subject must never end up in a persisted CalendarEntry.title. Stubs
  // the raw HTTP layer (global fetch) with a realistic Microsoft Graph
  // calendarView response for staffA's connection... but staffA's
  // connection here is Google, so first wire a Microsoft connection for
  // staffA too.
  // ==========================================================================
  const validStateMsftA = signOAuthState({ providerId: msftApproved.id, userId: staffA.id });
  const connectionMsftA = await gateway.handleCallback(msftApproved.id, 'fake-code-msft', validStateMsftA, redirectUri, staffA.id);
  // Make sure this connection is not near-expiry (avoid an unwanted
  // refresh-token HTTP call inside the sweep during this stub window).
  await prisma.externalCalendarConnection.update({ where: { id: connectionMsftA.id }, data: { expiresAt: new Date(Date.now() + 3600_000) } });

  const REAL_LEAKED_SUBJECT = `CONFIDENTIAL — board pay committee ${RUN}`;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = (async (url: string | URL, _init?: unknown) => {
    const href = url.toString();
    if (href.includes('graph.microsoft.com/v1.0/me/calendarView')) {
      return new Response(
        JSON.stringify({
          value: [
            {
              id: `msft-evt-${RUN}`,
              subject: REAL_LEAKED_SUBJECT,
              location: { displayName: 'Board Room 1' },
              start: { dateTime: '2026-08-01T10:00:00.0000000' },
              end: { dateTime: '2026-08-01T11:00:00.0000000' },
              isCancelled: false,
            },
          ],
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }
    if (href.includes('googleapis.com/calendar/v3/freeBusy')) {
      return new Response(JSON.stringify({ calendars: { primary: { busy: [] } } }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response('not found', { status: 404 });
  }) as typeof fetch;

  let sweepResult: Awaited<ReturnType<typeof gateway.runExternalSyncSweep>>;
  try {
    sweepResult = await gateway.runExternalSyncSweep(new Date());
  } finally {
    globalThis.fetch = originalFetch;
  }

  const syncedEntry = await prisma.calendarEntry.findUnique({
    where: { ownerUserId_sourceType_sourceId: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } },
  });
  if (syncedEntry && syncedEntry.title === 'Busy (external)' && !syncedEntry.title.includes('CONFIDENTIAL') && !syncedEntry.title.includes('board pay committee')) {
    ok('runExternalSyncSweep persists a synced busy block with the generic "Busy (external)" title even though the raw vendor payload carried a real, sensitive event subject — the privacy rule holds at the actual HTTP-to-DB boundary, not just by type shape (invariant 73(b) adversarial case)');
  } else {
    fail('a vendor-supplied event subject leaked into a persisted CalendarEntry.title, or the entry was never created', syncedEntry);
  }
  if (syncedEntry?.isAutoPlotted && syncedEntry.startsAt.toISOString().startsWith('2026-08-01T10:00')) {
    ok('the synced entry is correctly flagged isAutoPlotted with the vendor-supplied start time preserved');
  } else {
    fail('synced entry isAutoPlotted/startsAt was wrong', syncedEntry);
  }

  // 2 non-revoked connections exist at this point (staffA holds both a
  // Google and a Microsoft connection); staffB's Google connection was
  // revoked above and must be entirely excluded.
  const revokedEntryCount = await prisma.calendarEntry.count({ where: { ownerUserId: staffB.id, sourceType: 'ExternalCalendar' } });
  if (sweepResult.connectionsProcessed === 2 && revokedEntryCount === 0) {
    ok("runExternalSyncSweep skips a revoked connection entirely -- only staffA's 2 still-active connections were processed, staffB's revoked connection produced zero synced entries");
  } else {
    fail('sync sweep did not correctly exclude the revoked connection', { sweepResult, revokedEntryCount });
  }

  // Re-running the sweep must UPSERT the same row, never duplicate it.
  globalThis.fetch = (async (url: string | URL) => {
    const href = url.toString();
    if (href.includes('graph.microsoft.com/v1.0/me/calendarView')) {
      return new Response(
        JSON.stringify({ value: [{ id: `msft-evt-${RUN}`, subject: 'a different title this time', start: { dateTime: '2026-08-01T10:30:00.0000000' }, end: { dateTime: '2026-08-01T11:30:00.0000000' }, isCancelled: false }] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }
    return new Response('not found', { status: 404 });
  }) as typeof fetch;
  try {
    await gateway.runExternalSyncSweep(new Date());
  } finally {
    globalThis.fetch = originalFetch;
  }
  const countAfterResync = await prisma.calendarEntry.count({ where: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } });
  const entryAfterResync = await prisma.calendarEntry.findUniqueOrThrow({ where: { ownerUserId_sourceType_sourceId: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } } });
  if (countAfterResync === 1 && entryAfterResync.title === 'Busy (external)' && entryAfterResync.startsAt.toISOString().startsWith('2026-08-01T10:30')) {
    ok('re-running the sync sweep upserts the SAME row (idempotent, updated start time), never duplicates it, and the title stays the generic placeholder even on resync');
  } else {
    fail('resync did not upsert idempotently as expected', { countAfterResync, entryAfterResync });
  }

  // --- Cleanup (dependency order) -----------------------------------------
  await prisma.calendarEntry.deleteMany({ where: { ownerUserId: { in: [staffA.id, staffB.id] }, sourceType: 'ExternalCalendar' } });
  await prisma.externalCalendarConnection.deleteMany({ where: { userId: { in: [staffA.id, staffB.id] } } });
  await prisma.calendarGatewayProvider.deleteMany({ where: { id: { in: [msftApproved.id, googleApproved.id] } } });
  const userIds = [ictUser.id, mdUser.id, staffA.id, staffB.id, outsider.id];
  // audit_trail is insert-only (DB trigger blocks DELETE) — smoke-generated
  // audit rows are left in place, same as every other smoke test.
  await prisma.workflowStepApproval.deleteMany({ where: { approverUserId: { in: userIds } } });
  await prisma.workflowInstance.deleteMany({ where: { initiatedByUserId: { in: userIds } } });
  await prisma.notification.deleteMany({ where: { recipientUserId: { in: userIds } } });
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — CalendarGateway (invariant 73b/55c2iv Phase B) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
