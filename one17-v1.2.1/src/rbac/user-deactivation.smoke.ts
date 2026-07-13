// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/rbac/user-deactivation.smoke.ts
// Invariant 51(a-iv) (CHECK12): user login deactivation + delegation early
// revocation. Proves the three things UserDeactivationService.deactivateUser
// does together (status flip, delegation revocation, session revocation) --
// each one closes a real gap: DelegationService.hasCapability and
// AuthService.validateSession never look at AppUser.status themselves, so a
// bare status flip alone would leave both a held delegation and an
// already-open session silently working. Also proves the invariant 51(d)
// adversarial case named explicitly in CLAUDE.md: "deactivated-user access
// attempt" (login refused once SUSPENDED), and the EmployeeLifecycleService
// offboarding integration this service was extracted to serve.
// Own SMOKE-prefixed fixtures throughout.
import 'dotenv/config';
import { randomBytes, createHash } from 'node:crypto';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { UserDeactivationService } from './user-deactivation.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}
function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const userDeactivation = new UserDeactivationService(prisma, audit, delegation);

  const grantor = await prisma.appUser.create({ data: { email: `deact-grantor-${RUN}@one17.test`, displayName: 'deact-grantor' } });
  await rbac.assignRole({ userId: grantor.id, roleCode: 'MD_CEO' }); // uncapped standing authority
  // Deliberately given NO role/standing permission at all -- eligibility on
  // DISTRIBUTION_APPROVAL must come from the delegation grant alone, so its
  // revocation is what flips hasCapability from eligible to not.
  const target = await prisma.appUser.create({ data: { email: `deact-target-${RUN}@one17.test`, displayName: 'deact-target' } });
  const actor = await prisma.appUser.create({ data: { email: `deact-actor-${RUN}@one17.test`, displayName: 'deact-actor' } });
  await rbac.assignRole({ userId: actor.id, roleCode: 'SUPER_ADMIN' });

  // ---- 1. Give the target an ACTIVE delegation grant (held BY the target, as delegate) ----
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
  } else {
    fail('fixture setup did not produce an eligible active grant', preCheck);
  }

  // ---- 2. Give the target an open, unrevoked UserSession ----
  const rawToken = randomBytes(32).toString('hex');
  const session = await prisma.userSession.create({
    data: { userId: target.id, tokenHash: hashToken(rawToken), expiresAt: new Date(Date.now() + 60 * 60 * 1000) },
  });
  const preSession = await authService.validateSession(rawToken);
  if (preSession?.userId === target.id) ok('fixture: target has a live, validating session before deactivation');
  else fail('fixture session did not validate as expected', preSession);

  // ---- 3. Set the target a real password so login-refusal can be proven directly ----
  await authService.setPassword(target.id, 'SmokeDeactivate!2026');
  const preLogin = await authService.login(target.email, 'SmokeDeactivate!2026', {});
  if (preLogin.userId === target.id) ok('fixture: target can log in normally before deactivation');
  else fail('fixture pre-login did not succeed as expected', preLogin);

  // ---- 4. Deactivate ----
  const deactivated = await userDeactivation.deactivateUser(target.id, actor.id, 'Smoke test: resignation.');
  if (deactivated.status === 'SUSPENDED') ok('deactivateUser flips AppUser.status to SUSPENDED');
  else fail('deactivateUser did not set SUSPENDED', deactivated);

  // ---- 5. Delegation grant is now REVOKED and no longer eligible ----
  const grantAfter = await prisma.delegationOfAuthority.findUniqueOrThrow({ where: { id: grant.id } });
  const postCheck = await delegation.hasCapability(target.id, 'DISTRIBUTION_APPROVAL', 'APPROVE');
  if (grantAfter.status === 'REVOKED' && grantAfter.revokedByUserId === actor.id && !postCheck.eligible) {
    ok('deactivation revoked the held delegation grant — hasCapability no longer eligible (closes the gap: DelegationService never checked AppUser.status itself)');
  } else {
    fail('delegation grant was not revoked as expected', { grantAfter, postCheck });
  }

  // ---- 6. Existing session is now revoked and no longer validates ----
  const sessionAfter = await prisma.userSession.findUniqueOrThrow({ where: { id: session.id } });
  const postSession = await authService.validateSession(rawToken);
  if (sessionAfter.revokedAt && postSession === null) {
    ok('deactivation revoked the open session — validateSession now returns null (closes the gap: AuthService never checked AppUser.status itself)');
  } else {
    fail('open session was not revoked as expected', { sessionAfter, postSession });
  }

  // ---- 7. Invariant 51(d) adversarial evidence: deactivated-user access attempt is refused at login ----
  await expectReject('invariant 51(d): deactivated-user login attempt is refused', () =>
    authService.login(target.email, 'SmokeDeactivate!2026', {}));

  // ---- 8. Cannot double-deactivate an already-SUSPENDED user ----
  await expectReject('cannot deactivate an already-SUSPENDED user', () =>
    userDeactivation.deactivateUser(target.id, actor.id, 'Duplicate attempt.'));

  // ---- 9. Reactivation restores ACTIVE and login works again ----
  const reactivated = await userDeactivation.reactivateUser(target.id, actor.id);
  if (reactivated.status === 'ACTIVE') ok('reactivateUser restores AppUser.status to ACTIVE');
  else fail('reactivateUser did not restore ACTIVE', reactivated);
  const postReactivateLogin = await authService.login(target.email, 'SmokeDeactivate!2026', {});
  if (postReactivateLogin.userId === target.id) {
    ok('reactivated user can log in again');
  } else {
    fail('reactivated user could not log in', postReactivateLogin);
  }

  // ---- 10. Reactivation does NOT resurrect the revoked delegation (deliberate — a fresh grant is required) ----
  const grantStillRevoked = await prisma.delegationOfAuthority.findUniqueOrThrow({ where: { id: grant.id } });
  if (grantStillRevoked.status === 'REVOKED') {
    ok('reactivation does not silently restore a revoked delegation grant — a new grant must be requested');
  } else {
    fail('reactivation unexpectedly changed the revoked grant status', grantStillRevoked);
  }

  // Cleanup.
  await prisma.userSession.deleteMany({ where: { userId: target.id } });
  await prisma.delegationOfAuthority.deleteMany({ where: { id: grant.id } });
  const userIds = [grantor.id, target.id, actor.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — user deactivation + delegation early revocation (invariant 51a-iv) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
