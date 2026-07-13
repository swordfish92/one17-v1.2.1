// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor-mandate-amendment.smoke.ts
// Invariant 51(c) Tier-3 (CHECK13, "verify then build only if absent" --
// confirmed absent): post-setup change to an investor mandate's
// targetReturnRate/rolloverDefault/earlyExitWaiver -- same truthy-patch/
// single-approval shape as InvestorContactAmendmentService, deliberately
// excluding mandateType and the two restricted-sector/-contract arrays.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorMandateAmendmentService } from './investor-mandate-amendment.service';

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
  const amendment = new InvestorMandateAmendmentService(prisma, audit, delegation, workflow);

  const bd = await prisma.appUser.create({ data: { email: `ima-bd-${RUN}@one17.test`, displayName: 'ima-bd' } });
  await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
  const portMgr = await prisma.appUser.create({ data: { email: `ima-portmgr-${RUN}@one17.test`, displayName: 'ima-portmgr' } });
  await rbac.assignRole({ userId: portMgr.id, roleCode: 'PORT_MGR' });
  const outsider = await prisma.appUser.create({ data: { email: `ima-outsider-${RUN}@one17.test`, displayName: 'ima-outsider' } });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-IMA-INV-${RUN}`, fullLegalName: 'Smoke IMA Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `ima-inv-${RUN}@one17.test`, contactPhone: '+2340000000080',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  await prisma.investorMandate.create({
    data: {
      investorId: investor.investorId, mandateType: 'UNRESTRICTED', targetReturnRate: 0.085,
      restrictedSectors: [], restrictedContracts: [], rolloverDefault: 'AUTO', earlyExitWaiver: false,
      effectiveDate: new Date('2026-01-01'), approvedByUserId: portMgr.id,
    },
  });

  // ---- 1. Outsider cannot propose a mandate amendment ----
  await expectReject('outsider cannot propose a mandate amendment', () =>
    amendment.requestAmendment({ investorId: investor.investorId, proposedTargetReturnRate: 0.09, requestedByUserId: outsider.id }));

  // ---- 2. Must propose at least one field ----
  await expectReject('empty proposal (no fields) is refused', () =>
    amendment.requestAmendment({ investorId: investor.investorId, requestedByUserId: bd.id }));

  // ---- 3. Proposing earlyExitWaiver=true with no ssbWaiverResolutionRef on file is refused (DB CHECK constraint's own doctrine, enforced pre-emptively) ----
  await expectReject('proposing earlyExitWaiver=true with no SSB waiver resolution on file is refused', () =>
    amendment.requestAmendment({ investorId: investor.investorId, proposedEarlyExitWaiver: true, requestedByUserId: bd.id }));

  // ---- 4. BD proposes a legitimate amendment (target return rate only, rollover/waiver unchanged) ----
  const request = await amendment.requestAmendment({
    investorId: investor.investorId, proposedTargetReturnRate: 0.0925, requestedByUserId: bd.id,
  });
  if (request.status === 'PENDING' && request.workflowInstanceId) ok('requestAmendment creates a PENDING request, workflow initiated');
  else fail('requestAmendment did not create the expected PENDING row', request);

  // ---- 5. BD cannot approve their own amendment (maker != checker) ----
  await expectReject('BD cannot approve their own mandate amendment', () =>
    amendment.decideAmendment(request.workflowInstanceId!, bd.id, 'APPROVE'));

  // ---- 6. Portfolio Management approves -> only the proposed field is applied (rolloverDefault/earlyExitWaiver untouched) ----
  const approved = await amendment.decideAmendment(request.workflowInstanceId!, portMgr.id, 'APPROVE');
  const mandateAfter = await prisma.investorMandate.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (approved.status === 'APPROVED' && Number(mandateAfter.targetReturnRate) === 0.0925 && mandateAfter.earlyExitWaiver === false && mandateAfter.rolloverDefault === 'AUTO') {
    ok('approved amendment applies ONLY the proposed field (targetReturnRate) -- rolloverDefault/earlyExitWaiver (not proposed) stay unchanged');
  } else {
    fail('amendment did not apply the truthy-patch as expected', { approved, mandateAfter });
  }
  if (mandateAfter.mandateType === 'UNRESTRICTED') ok('mandateType is untouched -- amendment never carries it (excluded by design)');
  else fail('mandateType was unexpectedly altered', mandateAfter);

  // ---- 6b. Once a real SSB waiver resolution IS on file, an earlyExitWaiver amendment succeeds ----
  await prisma.investorMandate.update({ where: { investorId: investor.investorId }, data: { ssbWaiverResolutionRef: `SSB-RES-${RUN}` } });
  const waiverRequest = await amendment.requestAmendment({ investorId: investor.investorId, proposedEarlyExitWaiver: true, requestedByUserId: bd.id });
  const waiverApproved = await amendment.decideAmendment(waiverRequest.workflowInstanceId!, portMgr.id, 'APPROVE');
  const mandateAfterWaiver = await prisma.investorMandate.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (waiverApproved.status === 'APPROVED' && mandateAfterWaiver.earlyExitWaiver === true) ok('earlyExitWaiver amendment succeeds once a real SSB waiver resolution is on file');
  else fail('earlyExitWaiver amendment did not succeed once an SSB resolution was on file', { waiverApproved, mandateAfterWaiver });

  // ---- 7. Reject path ----
  const request2 = await amendment.requestAmendment({ investorId: investor.investorId, proposedRolloverDefault: 'NONE', requestedByUserId: bd.id });
  const rejected = await amendment.decideAmendment(request2.workflowInstanceId!, portMgr.id, 'REJECT', 'Needs client re-confirmation first.');
  const mandateAfterReject = await prisma.investorMandate.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (rejected.status === 'REJECTED' && mandateAfterReject.rolloverDefault === 'AUTO') ok('rejected amendment never applies to the mandate record');
  else fail('reject path left unexpected state', { rejected, mandateAfterReject });

  // Cleanup.
  await prisma.investorMandateAmendmentRequest.deleteMany({ where: { investorId: investor.investorId } });
  const wfIds = [request.workflowInstanceId, waiverRequest.workflowInstanceId, request2.workflowInstanceId].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.investorMandate.delete({ where: { investorId: investor.investorId } });
  await prisma.investor.delete({ where: { investorId: investor.investorId } });
  const userIds = [bd.id, portMgr.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investor mandate amendment flow (invariant 51c Tier-3) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
