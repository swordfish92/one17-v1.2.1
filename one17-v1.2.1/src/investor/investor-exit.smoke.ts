// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor-exit.smoke.ts
// Invariant 51(b-v) (CHECK13): investor exit/closure -- MATURITY_TRANSITION
// and FINAL_EXIT, the zero-open-holdings gate (both at request and decide
// time), and the dormancy sweep. Own SMOKE-prefixed fixtures throughout.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorExitService } from './investor-exit.service';

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
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const exitService = new InvestorExitService(prisma, audit, delegation, workflow);

  const bd = await prisma.appUser.create({ data: { email: `ie-bd-${RUN}@one17.test`, displayName: 'ie-bd' } });
  await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
  const compliance = await prisma.appUser.create({ data: { email: `ie-compliance-${RUN}@one17.test`, displayName: 'ie-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const outsider = await prisma.appUser.create({ data: { email: `ie-outsider-${RUN}@one17.test`, displayName: 'ie-outsider' } });

  const fundCode = `SMOKE-IE-FUND-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: fundCode, name: 'Smoke IE Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  const productCode = `SMOKE-IE-PROD-${RUN}`;
  await prisma.product.create({ data: { code: productCode, name: 'Smoke IE Product', engineType: 'UNIT_NAV' } });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-IE-INV-${RUN}`, fullLegalName: 'Smoke Exit Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `ie-inv-${RUN}@one17.test`, contactPhone: '+2340000000060',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  const account = await prisma.productAccount.create({
    data: { investorId: investor.investorId, productCode, startDate: new Date(), principalOrCommittedKobo: 1_000_000_00n, status: 'ACTIVE' },
  });

  // ---- 1. Outsider cannot propose an exit ----
  await expectReject('outsider cannot propose an investor exit', () =>
    exitService.requestExit({ investorId: investor.investorId, exitType: 'MATURITY_TRANSITION', requestedByUserId: outsider.id }));

  // ---- 2. FINAL_EXIT is refused at REQUEST time while a product account is still ACTIVE ----
  await expectReject('FINAL_EXIT refused while an open product account exists (request-time gate)', () =>
    exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id }));

  // ---- 3. MATURITY_TRANSITION carries no such gate -- BD proposes successfully ----
  const maturityRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'MATURITY_TRANSITION', requestedByUserId: bd.id });
  if (maturityRequest.status === 'PENDING' && maturityRequest.workflowInstanceId) ok('MATURITY_TRANSITION request created despite an open product account (no holdings gate on this exit type)');
  else fail('MATURITY_TRANSITION request not created as expected', maturityRequest);

  // ---- 4. BD cannot approve their own exit request (maker != checker) ----
  await expectReject('BD cannot approve their own exit request', () =>
    exitService.decideExit(maturityRequest.workflowInstanceId!, bd.id, 'APPROVE'));

  // ---- 5. Compliance approves -> Investor.fundStatus flips to MATURED ----
  const approvedMaturity = await exitService.decideExit(maturityRequest.workflowInstanceId!, compliance.id, 'APPROVE');
  const investorAfterMaturity = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (approvedMaturity.status === 'APPROVED' && investorAfterMaturity.fundStatus === 'MATURED') ok('approved MATURITY_TRANSITION flips Investor.fundStatus to MATURED');
  else fail('MATURITY_TRANSITION approval did not flip fundStatus as expected', { approvedMaturity, investorAfterMaturity });

  // ---- 6. FINAL_EXIT still refused (product account still ACTIVE) even though status is now MATURED ----
  await expectReject('FINAL_EXIT still refused with the open product account, even from MATURED', () =>
    exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id }));

  // ---- 7. Close the holding, then FINAL_EXIT succeeds through to APPROVED ----
  await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'MATURED' } });
  const finalExitRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id });
  const approvedFinal = await exitService.decideExit(finalExitRequest.workflowInstanceId!, compliance.id, 'APPROVE');
  const investorAfterFinal = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (approvedFinal.status === 'APPROVED' && investorAfterFinal.fundStatus === 'EXITED') ok('FINAL_EXIT succeeds once every holding is off ACTIVE, flips Investor.fundStatus to EXITED');
  else fail('FINAL_EXIT did not complete as expected', { approvedFinal, investorAfterFinal });

  // ---- 8. TOCTOU close: a decide-time re-check re-blocks FINAL_EXIT if a holding reopened between request and decide ----
  await prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'MATURED' } });
  const raceRequest = await exitService.requestExit({ investorId: investor.investorId, exitType: 'FINAL_EXIT', requestedByUserId: bd.id });
  await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'ACTIVE' } });
  await expectReject('decide-time re-check refuses FINAL_EXIT if a holding reopened after the request was submitted (TOCTOU close)', () =>
    exitService.decideExit(raceRequest.workflowInstanceId!, compliance.id, 'APPROVE'));
  await prisma.productAccount.update({ where: { id: account.id }, data: { status: 'MATURED' } });

  // ---- 9. Dormancy sweep: an ACTIVE investor with no Txn inside the configured window flips DORMANT, and reverses ----
  const dormantInvestor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-IE-DORM-${RUN}`, fullLegalName: 'Smoke Dormancy Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `ie-dorm-${RUN}@one17.test`, contactPhone: '+2340000000061',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  await prisma.productAccount.create({
    data: { investorId: dormantInvestor.investorId, productCode, startDate: new Date('2020-01-01'), principalOrCommittedKobo: 1_000_000_00n, status: 'ACTIVE' },
  });
  const sweepNow = new Date();
  const sweepResult = await exitService.runDormancySweep(sweepNow);
  const dormantAfterSweep = await prisma.investor.findUniqueOrThrow({ where: { investorId: dormantInvestor.investorId } });
  if (sweepResult.markedDormant >= 1 && dormantAfterSweep.fundStatus === 'DORMANT') ok('dormancy sweep flips an ACTIVE investor with no in-window transaction to DORMANT');
  else fail('dormancy sweep did not mark the stale investor DORMANT as expected', { sweepResult, dormantAfterSweep });

  // Cleanup.
  const investorIds = [investor.investorId, dormantInvestor.investorId];
  await prisma.investorExitRequest.deleteMany({ where: { investorId: { in: investorIds } } });
  const wfIds = [maturityRequest.workflowInstanceId, finalExitRequest.workflowInstanceId, raceRequest.workflowInstanceId].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.productAccount.deleteMany({ where: { investorId: { in: investorIds } } });
  await prisma.investor.deleteMany({ where: { investorId: { in: investorIds } } });
  await prisma.product.delete({ where: { code: productCode } });
  await prisma.ledgerEntity.delete({ where: { code: fundCode } });
  const userIds = [bd.id, compliance.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investor exit/closure flow (invariant 51b-v) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
