// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/exec-oversight/exec-oversight.smoke.ts
// Invariant 61(b)-(d) (CHECK15): Executive Oversight Mode. Proves the full
// session lifecycle, the governed policy ("the dial"), and the structural
// (not flag-checked) read-only guarantee.
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ExecOversightService } from './exec-oversight.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const execOversight = new ExecOversightService(prisma, audit, delegation);

  const mdCeo = await prisma.appUser.create({ data: { email: `eo-mdceo-${RUN}@one17.test`, displayName: 'eo-mdceo' } });
  await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
  const compliance = await prisma.appUser.create({ data: { email: `eo-compliance-${RUN}@one17.test`, displayName: 'eo-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const portMgr = await prisma.appUser.create({ data: { email: `eo-portmgr-${RUN}@one17.test`, displayName: 'eo-portmgr' } });
  await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-EO-INV-${RUN}`, fullLegalName: 'Smoke Oversight Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `eo-investor-${RUN}@one17.test`, contactPhone: '+2340000000001',
      onboardedByUserId: portMgr.id,
    },
  });

  // ---- 1. PORT_MGR (no EXEC_OVERSIGHT) cannot start a session ----
  await expectReject('PORT_MGR (no EXEC_OVERSIGHT APPROVE) cannot start an oversight session', () =>
    execOversight.startSession({ principalType: 'INVESTOR', investorId: investor.investorId, viewedByUserId: portMgr.id }));

  // ---- 2. MD_CEO starts a session against the seeded v1 ACTIVE policy (grantedRoleCodes: ['MD_CEO']) ----
  const session = await execOversight.startSession({ principalType: 'INVESTOR', investorId: investor.investorId, viewedByUserId: mdCeo.id, ipAddress: '203.0.113.9' });
  if (session.investorId === investor.investorId && session.viewedByUserId === mdCeo.id && !session.endedAt) {
    ok('MD_CEO starts an oversight session against the ACTIVE policy -- session row created, endedAt null');
  } else {
    fail('startSession did not create the expected row', session);
  }

  // ---- 3. A different user cannot end someone else's session ----
  await expectReject('a different user cannot end another user\'s oversight session', () =>
    execOversight.endSession(session.id, compliance.id));

  // ---- 4. assertSessionOwnedAndActive succeeds for the real owner while active ----
  const reloaded = await execOversight.assertSessionOwnedAndActive(session.id, mdCeo.id);
  if (reloaded.id === session.id) ok('assertSessionOwnedAndActive succeeds for the session\'s own owner while still active');
  else fail('assertSessionOwnedAndActive returned an unexpected row', reloaded);

  // ---- 5. MD_CEO ends the session -- endedAt set, duration derivable ----
  const ended = await execOversight.endSession(session.id, mdCeo.id);
  if (ended.endedAt) ok(`session ended -- duration ${ended.endedAt.getTime() - ended.startedAt.getTime()}ms recorded (who viewed whom, when, duration -- invariant 61b)`);
  else fail('endSession did not set endedAt', ended);

  // ---- 6. Ending an already-ended session is idempotent, not an error ----
  const endedAgain = await execOversight.endSession(session.id, mdCeo.id);
  if (endedAgain.endedAt?.getTime() === ended.endedAt!.getTime()) ok('ending an already-ended session is idempotent (same endedAt, no error)');
  else fail('re-ending an ended session changed its endedAt unexpectedly', endedAgain);

  // ---- 7. A closed session can no longer be used to view data (assertSessionOwnedAndActive refuses) ----
  await expectReject('assertSessionOwnedAndActive refuses an already-ended session', () =>
    execOversight.assertSessionOwnedAndActive(session.id, mdCeo.id));

  // ---- 8. "The session log cannot be suppressed" -- listLog() surfaces the full row, including the ended one ----
  const log = await execOversight.listLog();
  const loggedRow = log.find((r) => r.id === session.id);
  if (loggedRow && loggedRow.endedAt && loggedRow.investor?.fullLegalName === 'Smoke Oversight Investor') {
    ok('listLog() surfaces the full session row (who/whom/when/duration) -- invariant 61(b) standing register');
  } else {
    fail('listLog() did not surface the expected row', loggedRow);
  }

  // ---- 9. Invariant 61(c) "the dial": COMPLIANCE proposes a policy version widening the grant ----
  const proposed = await execOversight.proposePolicy({ grantedRoleCodes: ['MD_CEO', 'CRAO'], proposedByUserId: compliance.id });
  if (proposed.status === 'DRAFT' && proposed.version > 1) {
    ok(`COMPLIANCE proposes policy v${proposed.version} (DRAFT) widening grantedRoleCodes to include CRAO`);
  } else {
    fail('proposePolicy did not create the expected DRAFT row', proposed);
  }

  // ---- 10. Maker != checker: the SAME user (COMPLIANCE) cannot approve their own proposal ----
  await expectReject('COMPLIANCE cannot approve the policy version they themselves proposed (maker≠checker)', () =>
    execOversight.approvePolicy(proposed.id, compliance.id));

  // ---- 11. MD_CEO approves -- takes effect immediately, no redeploy, prior ACTIVE row superseded ----
  const activated = await execOversight.approvePolicy(proposed.id, mdCeo.id);
  if (activated.status === 'ACTIVE') {
    ok(`MD_CEO approves policy v${activated.version} -> ACTIVE (governed config change, no code deploy)`);
  } else {
    fail('approvePolicy did not activate the proposed version', activated);
  }
  const supersededV1 = await prisma.execOversightPolicy.findFirst({ where: { version: 1 } });
  if (supersededV1?.status === 'SUPERSEDED') ok('the prior ACTIVE policy version (v1) is correctly SUPERSEDED, versioned history preserved');
  else fail('prior ACTIVE policy version was not superseded', supersededV1);

  // ---- 12. Structural read-only guarantee: the oversight controller defines ZERO mutating routes over client data ----
  const controllerSrc = fs.readFileSync(path.join(__dirname, '..', 'ops-api', 'exec-oversight.controller.ts'), 'utf8');
  const mutatingClientDataDecorators = [...controllerSrc.matchAll(/@(Patch|Put|Delete)\(/g)];
  const postRoutes = [...controllerSrc.matchAll(/@Post\('([^']*)'\)/g)].map((m) => m[1]);
  const postRoutesOverClientData = postRoutes.filter((r) => r.startsWith('sessions/') && (r.includes('dashboard') || r.includes('statements') || r.includes('certificates') || r.includes('letters') || r.includes('messages') || r.includes('bureau-pulls')));
  if (mutatingClientDataDecorators.length === 0 && postRoutesOverClientData.length === 0) {
    ok('exec-oversight.controller.ts defines ZERO @Patch/@Put/@Delete routes and ZERO @Post routes over client data (dashboard/statements/certificates/letters/messages/bureau-pulls are all @Get) -- read-only by construction, not by a checked flag');
  } else {
    fail('exec-oversight.controller.ts unexpectedly defines a mutating route over client data', { mutatingClientDataDecorators: mutatingClientDataDecorators.length, postRoutesOverClientData });
  }

  // ---- 13. Invariant 61(d): a non-grantee cannot even start a session to REACH the read-only data (already proven in step 1) ----
  ok('adversarial: a non-grantee (PORT_MGR, step 1) cannot reach any read-only oversight data at all -- no session, no data route reachable');

  // Cleanup. This test exercises the REAL governed exec_oversight_policy
  // table (not a SMOKE-prefixed scratch row), so it must restore the
  // pre-test governed state -- delete the version this run proposed/
  // approved and flip the real v1 row back to ACTIVE, exactly as it was
  // before this run, rather than leaving the platform with a permanently
  // widened (or entirely absent) ACTIVE oversight policy.
  await prisma.execOversightSession.deleteMany({ where: { id: session.id } });
  await prisma.execOversightPolicy.deleteMany({ where: { id: proposed.id } });
  await prisma.execOversightPolicy.updateMany({ where: { version: 1 }, data: { status: 'ACTIVE' } });
  await prisma.investor.delete({ where: { investorId: investor.investorId } });
  const userIds = [mdCeo.id, compliance.id, portMgr.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — Executive Oversight Mode (invariant 61b/c/d) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
