"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const user_deactivation_service_1 = require("./user-deactivation.service");
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
function hashToken(token) {
    return (0, node_crypto_1.createHash)('sha256').update(token).digest('hex');
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const userDeactivation = new user_deactivation_service_1.UserDeactivationService(prisma, audit, delegation);
    const grantor = await prisma.appUser.create({ data: { email: `deact-grantor-${RUN}@one17.test`, displayName: 'deact-grantor' } });
    await rbac.assignRole({ userId: grantor.id, roleCode: 'MD_CEO' });
    const target = await prisma.appUser.create({ data: { email: `deact-target-${RUN}@one17.test`, displayName: 'deact-target' } });
    const actor = await prisma.appUser.create({ data: { email: `deact-actor-${RUN}@one17.test`, displayName: 'deact-actor' } });
    await rbac.assignRole({ userId: actor.id, roleCode: 'SUPER_ADMIN' });
    const grant = await delegation.requestGrant({
        functionCode: 'DISTRIBUTION_APPROVAL',
        delegateUserId: target.id,
        delegatedByUserId: grantor.id,
        reason: 'Smoke fixture — active grant to prove revocation on deactivation.',
    });
    await delegation.activate(grant.id, grantor.id);
    const preCheck = await delegation.hasCapability(target.id, 'DISTRIBUTION_APPROVAL', 'APPROVE');
    if (preCheck.eligible && preCheck.viaDelegationId === grant.id) {
        ok('fixture: target holds an ACTIVE delegation grant before deactivation');
    }
    else {
        fail('fixture setup did not produce an eligible active grant', preCheck);
    }
    const rawToken = (0, node_crypto_1.randomBytes)(32).toString('hex');
    const session = await prisma.userSession.create({
        data: { userId: target.id, tokenHash: hashToken(rawToken), expiresAt: new Date(Date.now() + 60 * 60 * 1000) },
    });
    const preSession = await authService.validateSession(rawToken);
    if (preSession?.userId === target.id)
        ok('fixture: target has a live, validating session before deactivation');
    else
        fail('fixture session did not validate as expected', preSession);
    await authService.setPassword(target.id, 'SmokeDeactivate!2026');
    const preLogin = await authService.login(target.email, 'SmokeDeactivate!2026', {});
    if (preLogin.userId === target.id)
        ok('fixture: target can log in normally before deactivation');
    else
        fail('fixture pre-login did not succeed as expected', preLogin);
    const deactivated = await userDeactivation.deactivateUser(target.id, actor.id, 'Smoke test: resignation.');
    if (deactivated.status === 'SUSPENDED')
        ok('deactivateUser flips AppUser.status to SUSPENDED');
    else
        fail('deactivateUser did not set SUSPENDED', deactivated);
    const grantAfter = await prisma.delegationOfAuthority.findUniqueOrThrow({ where: { id: grant.id } });
    const postCheck = await delegation.hasCapability(target.id, 'DISTRIBUTION_APPROVAL', 'APPROVE');
    if (grantAfter.status === 'REVOKED' && grantAfter.revokedByUserId === actor.id && !postCheck.eligible) {
        ok('deactivation revoked the held delegation grant — hasCapability no longer eligible (closes the gap: DelegationService never checked AppUser.status itself)');
    }
    else {
        fail('delegation grant was not revoked as expected', { grantAfter, postCheck });
    }
    const sessionAfter = await prisma.userSession.findUniqueOrThrow({ where: { id: session.id } });
    const postSession = await authService.validateSession(rawToken);
    if (sessionAfter.revokedAt && postSession === null) {
        ok('deactivation revoked the open session — validateSession now returns null (closes the gap: AuthService never checked AppUser.status itself)');
    }
    else {
        fail('open session was not revoked as expected', { sessionAfter, postSession });
    }
    await expectReject('invariant 51(d): deactivated-user login attempt is refused', () => authService.login(target.email, 'SmokeDeactivate!2026', {}));
    await expectReject('cannot deactivate an already-SUSPENDED user', () => userDeactivation.deactivateUser(target.id, actor.id, 'Duplicate attempt.'));
    const reactivated = await userDeactivation.reactivateUser(target.id, actor.id);
    if (reactivated.status === 'ACTIVE')
        ok('reactivateUser restores AppUser.status to ACTIVE');
    else
        fail('reactivateUser did not restore ACTIVE', reactivated);
    const postReactivateLogin = await authService.login(target.email, 'SmokeDeactivate!2026', {});
    if (postReactivateLogin.userId === target.id) {
        ok('reactivated user can log in again');
    }
    else {
        fail('reactivated user could not log in', postReactivateLogin);
    }
    const grantStillRevoked = await prisma.delegationOfAuthority.findUniqueOrThrow({ where: { id: grant.id } });
    if (grantStillRevoked.status === 'REVOKED') {
        ok('reactivation does not silently restore a revoked delegation grant — a new grant must be requested');
    }
    else {
        fail('reactivation unexpectedly changed the revoked grant status', grantStillRevoked);
    }
    await prisma.userSession.deleteMany({ where: { userId: target.id } });
    await prisma.delegationOfAuthority.deleteMany({ where: { id: grant.id } });
    const userIds = [grantor.id, target.id, actor.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — user deactivation + delegation early revocation (invariant 51a-iv) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=user-deactivation.smoke.js.map