"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const calendar_gateway_service_1 = require("./calendar-gateway.service");
const calendar_token_crypto_1 = require("./calendar-token-crypto");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const gateway = new calendar_gateway_service_1.CalendarGatewayService(prisma, audit, delegation, workflow);
    const makeUser = async (label, roleCode) => {
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
    await expectReject('a user with no CALENDAR_GATEWAY_POLICY INITIATE cannot propose a provider config', () => gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'x', clientId: 'x', tenantId: 'x', isActive: true }, outsider.id));
    await expectReject('a MICROSOFT_GRAPH slot requires a tenantId', () => gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'No Tenant', clientId: 'client-x', isActive: true }, ictUser.id));
    await expectReject('provider slot must be 1 or 2', () => gateway.proposeProviderConfig({ providerSlot: 3, adapterType: 'GOOGLE', name: 'Bad Slot', clientId: 'x', isActive: true }, ictUser.id));
    const msftProposed = await gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: `CALGW MSFT ${RUN}`, clientId: `msft-client-${RUN}`, clientSecret: `msft-secret-${RUN}`, tenantId: `tenant-${RUN}`, isActive: true }, ictUser.id);
    if (msftProposed.hasPendingSecretRotation && msftProposed.secretPreview === null) {
        ok('proposing a provider config stages pending* fields and never exposes the plaintext secret (write-only-masked)');
    }
    else {
        fail('proposed provider did not mask the secret correctly', msftProposed);
    }
    await expectReject('the initiator cannot also approve their own provider config (maker!=checker)', () => gateway.approveProviderConfig(msftProposed.configWorkflowInstanceId, ictUser.id));
    const msftApproved = await gateway.approveProviderConfig(msftProposed.configWorkflowInstanceId, mdUser.id);
    if (msftApproved.isActive && msftApproved.hasSecret && msftApproved.secretPreview === `••••${`msft-secret-${RUN}`.slice(-4)}`) {
        ok('MD_CEO approval applies the pending* staged values onto the live CalendarGatewayProvider row, secret still masked');
    }
    else {
        fail('approved provider did not apply staged values as expected', msftApproved);
    }
    const googleProposed = await gateway.proposeProviderConfig({ providerSlot: 2, adapterType: 'GOOGLE', name: `CALGW Google ${RUN}`, clientId: `google-client-${RUN}`, clientSecret: `google-secret-${RUN}`, isActive: true }, ictUser.id);
    const googleApproved = await gateway.approveProviderConfig(googleProposed.configWorkflowInstanceId, mdUser.id);
    ok(`Google provider slot approved: isActive=${googleApproved.isActive}`);
    const redirectUri = `https://api.one17.smoke-test/calendar-gateway/connect/${msftApproved.id}/callback`;
    const msftAuthUrl = await gateway.getAuthorizationUrl(msftApproved.id, staffA.id, redirectUri);
    const msftUrlObj = new URL(msftAuthUrl.url);
    if (msftUrlObj.origin === 'https://login.microsoftonline.com' &&
        msftUrlObj.pathname === `/tenant-${RUN}/oauth2/v2.0/authorize` &&
        msftUrlObj.searchParams.get('client_id') === `msft-client-${RUN}` &&
        msftUrlObj.searchParams.get('response_type') === 'code' &&
        msftUrlObj.searchParams.get('redirect_uri') === redirectUri &&
        msftAuthUrl.scope.includes('https://graph.microsoft.com/Calendars.ReadBasic') &&
        msftAuthUrl.scope.includes('offline_access')) {
        ok('Microsoft Graph authorization URL uses the tenant-scoped /oauth2/v2.0/authorize endpoint, correct client_id/response_type/redirect_uri, and the narrowest available Calendars scope + offline_access for a refresh token');
    }
    else {
        fail('Microsoft Graph authorization URL shape was wrong', msftAuthUrl);
    }
    const googleAuthUrl = await gateway.getAuthorizationUrl(googleApproved.id, staffA.id, redirectUri);
    const googleUrlObj = new URL(googleAuthUrl.url);
    if (googleUrlObj.origin === 'https://accounts.google.com' &&
        googleUrlObj.pathname === '/o/oauth2/v2/auth' &&
        googleUrlObj.searchParams.get('client_id') === `google-client-${RUN}` &&
        googleUrlObj.searchParams.get('access_type') === 'offline' &&
        googleAuthUrl.scope === 'https://www.googleapis.com/auth/calendar.freebusy') {
        ok('Google authorization URL uses the documented /o/oauth2/v2/auth endpoint, access_type=offline for a refresh token, and the dedicated calendar.freebusy scope (never the broader calendar.readonly)');
    }
    else {
        fail('Google authorization URL shape was wrong', googleAuthUrl);
    }
    const inactiveProposed = await gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: 'Reconfig', clientId: `msft-client2-${RUN}`, tenantId: `tenant-${RUN}`, isActive: false }, ictUser.id);
    await gateway.approveProviderConfig(inactiveProposed.configWorkflowInstanceId, mdUser.id);
    await expectReject('an INACTIVE provider refuses to hand out an authorization URL', () => gateway.getAuthorizationUrl(msftApproved.id, staffA.id, redirectUri));
    const reactivate = await gateway.proposeProviderConfig({ providerSlot: 1, adapterType: 'MICROSOFT_GRAPH', name: `CALGW MSFT ${RUN}`, clientId: `msft-client-${RUN}`, tenantId: `tenant-${RUN}`, isActive: true }, ictUser.id);
    await gateway.approveProviderConfig(reactivate.configWorkflowInstanceId, mdUser.id);
    const roundTrip = (0, calendar_token_crypto_1.decryptToken)((0, calendar_token_crypto_1.encryptToken)(`plain-value-${RUN}-${'x'.repeat(40)}`));
    if (roundTrip === `plain-value-${RUN}-${'x'.repeat(40)}`) {
        ok('encryptToken/decryptToken AES-256-GCM round-trips an arbitrary string exactly');
    }
    else {
        fail('encryption round-trip did not return the original plaintext', roundTrip);
    }
    const twoEncryptions = [(0, calendar_token_crypto_1.encryptToken)('same-input'), (0, calendar_token_crypto_1.encryptToken)('same-input')];
    if (twoEncryptions[0] !== twoEncryptions[1] && (0, calendar_token_crypto_1.decryptToken)(twoEncryptions[0]) === 'same-input' && (0, calendar_token_crypto_1.decryptToken)(twoEncryptions[1]) === 'same-input') {
        ok('encrypting the same plaintext twice yields different ciphertext (fresh IV per call) but both decrypt back correctly');
    }
    else {
        fail('encryption is not properly randomized per call', twoEncryptions);
    }
    gateway.exchangeCodeForTokens = async () => ({
        accessToken: `stub-access-token-${RUN}`,
        refreshToken: `stub-refresh-token-${RUN}`,
        expiresInSeconds: 3600,
        scope: 'https://www.googleapis.com/auth/calendar.freebusy',
    });
    const validState = (0, calendar_token_crypto_1.signOAuthState)({ providerId: googleApproved.id, userId: staffA.id });
    await expectReject('a tampered/mismatched OAuth state is refused (CSRF guard)', () => gateway.handleCallback(googleApproved.id, 'fake-code', (0, calendar_token_crypto_1.signOAuthState)({ providerId: googleApproved.id, userId: staffB.id }), redirectUri, staffA.id));
    const connectionA = await gateway.handleCallback(googleApproved.id, 'fake-code', validState, redirectUri, staffA.id);
    const rawConnectionA = await prisma.externalCalendarConnection.findUniqueOrThrow({ where: { id: connectionA.id } });
    if (rawConnectionA.accessTokenEncrypted !== `stub-access-token-${RUN}` &&
        (0, calendar_token_crypto_1.decryptToken)(rawConnectionA.accessTokenEncrypted) === `stub-access-token-${RUN}` &&
        (0, calendar_token_crypto_1.decryptToken)(rawConnectionA.refreshTokenEncrypted) === `stub-refresh-token-${RUN}`) {
        ok('handleCallback persists the access/refresh tokens ENCRYPTED at rest (never plaintext in the DB column), and decrypting them recovers the exact stub tokens the vendor "returned"');
    }
    else {
        fail('handleCallback did not encrypt tokens correctly', rawConnectionA);
    }
    const myConnections = await gateway.listMyConnections(staffA.id);
    if (myConnections.some((c) => c.id === connectionA.id) && !('accessTokenEncrypted' in myConnections[0])) {
        ok("listMyConnections returns the caller's own connections without ever exposing the encrypted token columns");
    }
    else {
        fail('listMyConnections shape was wrong', myConnections);
    }
    const validStateB = (0, calendar_token_crypto_1.signOAuthState)({ providerId: googleApproved.id, userId: staffB.id });
    const connectionB = await gateway.handleCallback(googleApproved.id, 'fake-code-b', validStateB, redirectUri, staffB.id);
    await expectReject("a user cannot revoke another user's calendar connection", () => gateway.revokeConnection(connectionA.id, staffB.id));
    const revokedB = await gateway.revokeConnection(connectionB.id, staffB.id);
    if (revokedB.revokedAt) {
        ok('the owner can revoke their own connection, stamping revokedAt');
    }
    else {
        fail('revocation did not stamp revokedAt', revokedB);
    }
    const revokedAgain = await gateway.revokeConnection(connectionB.id, staffB.id);
    if (revokedB.revokedAt && revokedAgain.revokedAt?.getTime() === revokedB.revokedAt.getTime()) {
        ok('revoking an already-revoked connection is an idempotent no-op (same revokedAt, no error)');
    }
    else {
        fail('re-revoking changed revokedAt unexpectedly', { revokedB, revokedAgain });
    }
    const validStateMsftA = (0, calendar_token_crypto_1.signOAuthState)({ providerId: msftApproved.id, userId: staffA.id });
    const connectionMsftA = await gateway.handleCallback(msftApproved.id, 'fake-code-msft', validStateMsftA, redirectUri, staffA.id);
    await prisma.externalCalendarConnection.update({ where: { id: connectionMsftA.id }, data: { expiresAt: new Date(Date.now() + 3600_000) } });
    const REAL_LEAKED_SUBJECT = `CONFIDENTIAL — board pay committee ${RUN}`;
    const originalFetch = globalThis.fetch;
    globalThis.fetch = (async (url, _init) => {
        const href = url.toString();
        if (href.includes('graph.microsoft.com/v1.0/me/calendarView')) {
            return new Response(JSON.stringify({
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
            }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
        if (href.includes('googleapis.com/calendar/v3/freeBusy')) {
            return new Response(JSON.stringify({ calendars: { primary: { busy: [] } } }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
        return new Response('not found', { status: 404 });
    });
    let sweepResult;
    try {
        sweepResult = await gateway.runExternalSyncSweep(new Date());
    }
    finally {
        globalThis.fetch = originalFetch;
    }
    const syncedEntry = await prisma.calendarEntry.findUnique({
        where: { ownerUserId_sourceType_sourceId: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } },
    });
    if (syncedEntry && syncedEntry.title === 'Busy (external)' && !syncedEntry.title.includes('CONFIDENTIAL') && !syncedEntry.title.includes('board pay committee')) {
        ok('runExternalSyncSweep persists a synced busy block with the generic "Busy (external)" title even though the raw vendor payload carried a real, sensitive event subject — the privacy rule holds at the actual HTTP-to-DB boundary, not just by type shape (invariant 73(b) adversarial case)');
    }
    else {
        fail('a vendor-supplied event subject leaked into a persisted CalendarEntry.title, or the entry was never created', syncedEntry);
    }
    if (syncedEntry?.isAutoPlotted && syncedEntry.startsAt.toISOString().startsWith('2026-08-01T10:00')) {
        ok('the synced entry is correctly flagged isAutoPlotted with the vendor-supplied start time preserved');
    }
    else {
        fail('synced entry isAutoPlotted/startsAt was wrong', syncedEntry);
    }
    const revokedEntryCount = await prisma.calendarEntry.count({ where: { ownerUserId: staffB.id, sourceType: 'ExternalCalendar' } });
    if (sweepResult.connectionsProcessed === 2 && revokedEntryCount === 0) {
        ok("runExternalSyncSweep skips a revoked connection entirely -- only staffA's 2 still-active connections were processed, staffB's revoked connection produced zero synced entries");
    }
    else {
        fail('sync sweep did not correctly exclude the revoked connection', { sweepResult, revokedEntryCount });
    }
    globalThis.fetch = (async (url) => {
        const href = url.toString();
        if (href.includes('graph.microsoft.com/v1.0/me/calendarView')) {
            return new Response(JSON.stringify({ value: [{ id: `msft-evt-${RUN}`, subject: 'a different title this time', start: { dateTime: '2026-08-01T10:30:00.0000000' }, end: { dateTime: '2026-08-01T11:30:00.0000000' }, isCancelled: false }] }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }
        return new Response('not found', { status: 404 });
    });
    try {
        await gateway.runExternalSyncSweep(new Date());
    }
    finally {
        globalThis.fetch = originalFetch;
    }
    const countAfterResync = await prisma.calendarEntry.count({ where: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } });
    const entryAfterResync = await prisma.calendarEntry.findUniqueOrThrow({ where: { ownerUserId_sourceType_sourceId: { ownerUserId: staffA.id, sourceType: 'ExternalCalendar', sourceId: `msft-evt-${RUN}` } } });
    if (countAfterResync === 1 && entryAfterResync.title === 'Busy (external)' && entryAfterResync.startsAt.toISOString().startsWith('2026-08-01T10:30')) {
        ok('re-running the sync sweep upserts the SAME row (idempotent, updated start time), never duplicates it, and the title stays the generic placeholder even on resync');
    }
    else {
        fail('resync did not upsert idempotently as expected', { countAfterResync, entryAfterResync });
    }
    await prisma.calendarEntry.deleteMany({ where: { ownerUserId: { in: [staffA.id, staffB.id] }, sourceType: 'ExternalCalendar' } });
    await prisma.externalCalendarConnection.deleteMany({ where: { userId: { in: [staffA.id, staffB.id] } } });
    await prisma.calendarGatewayProvider.deleteMany({ where: { id: { in: [msftApproved.id, googleApproved.id] } } });
    const userIds = [ictUser.id, mdUser.id, staffA.id, staffB.id, outsider.id];
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
//# sourceMappingURL=calendar-gateway.smoke.js.map