// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor-contact-amendment.smoke.ts
// Invariant 51(a-ii) (CHECK12): governed post-onboarding contact/KYC-data
// amendment -- BD proposes, Compliance acknowledges, same shape as
// EMPLOYEE_PERSONAL_RECORD_CHANGE (no evidence gate, no reverification, no
// cooling-off -- lighter than 51a-i's fraud-critical bank-account flow).
// Own SMOKE-prefixed fixtures throughout.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { InvestorContactAmendmentService } from './investor-contact-amendment.service';

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
  const amendment = new InvestorContactAmendmentService(prisma, audit, delegation, workflow);

  const bd = await prisma.appUser.create({ data: { email: `ica-bd-${RUN}@one17.test`, displayName: 'ica-bd' } });
  await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
  const compliance = await prisma.appUser.create({ data: { email: `ica-compliance-${RUN}@one17.test`, displayName: 'ica-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const outsider = await prisma.appUser.create({ data: { email: `ica-outsider-${RUN}@one17.test`, displayName: 'ica-outsider' } });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-ICA-INV-${RUN}`, fullLegalName: 'Smoke ICA Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-ICA-${RUN}`, contactEmail: `ica-inv-${RUN}@one17.test`,
      contactPhone: '+2340000000040', registeredAddress: 'Original address', sourceOfFunds: 'Business income',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  const otherInvestor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-ICA-OTHER-${RUN}`, fullLegalName: 'Smoke ICA Other', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `ica-other-${RUN}@one17.test`, contactPhone: '+2340000000041',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });

  // ---- 1. Outsider cannot propose an amendment ----
  await expectReject('outsider cannot propose a contact amendment', () =>
    amendment.requestAmendment({ investorId: investor.investorId, proposedContactPhone: '+2340000000099', requestedByUserId: outsider.id }));

  // ---- 2. Must propose at least one field ----
  await expectReject('empty proposal (no fields) is refused', () =>
    amendment.requestAmendment({ investorId: investor.investorId, requestedByUserId: bd.id }));

  // ---- 3. Proposing an email already in use by another investor is refused at request time ----
  await expectReject('proposing an email already in use by another investor is refused', () =>
    amendment.requestAmendment({ investorId: investor.investorId, proposedContactEmail: otherInvestor.contactEmail, requestedByUserId: bd.id }));

  // ---- 4. BD proposes a legitimate amendment (phone + address, email unchanged) ----
  const newPhone = '+2340000000050';
  const newAddress = 'New registered address, Lagos';
  const request = await amendment.requestAmendment({
    investorId: investor.investorId, proposedContactPhone: newPhone, proposedRegisteredAddress: newAddress, requestedByUserId: bd.id,
  });
  if (request.status === 'PENDING' && request.workflowInstanceId) ok('requestAmendment creates a PENDING request, workflow initiated');
  else fail('requestAmendment did not create the expected PENDING row', request);

  // ---- 5. BD cannot approve their own amendment (maker != checker) ----
  await expectReject('BD cannot approve their own contact amendment', () =>
    amendment.decideAmendment(request.workflowInstanceId!, bd.id, 'APPROVE'));

  // ---- 6. Compliance approves -> only the proposed fields are applied (contactEmail untouched) ----
  const originalEmail = investor.contactEmail;
  const approved = await amendment.decideAmendment(request.workflowInstanceId!, compliance.id, 'APPROVE');
  const investorAfter = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (approved.status === 'APPROVED' && investorAfter.contactPhone === newPhone && investorAfter.registeredAddress === newAddress && investorAfter.contactEmail === originalEmail) {
    ok('approved amendment applies ONLY the proposed fields (phone + address) -- contactEmail (not proposed) stays unchanged');
  } else {
    fail('amendment did not apply the truthy-patch as expected', { approved, investorAfter });
  }

  // ---- 7. Second amendment: email change, proposing an email already taken -- checked again at DECIDE time (TOCTOU close) ----
  const request2 = await amendment.requestAmendment({ investorId: investor.investorId, proposedContactEmail: `ica-newemail-${RUN}@one17.test`, requestedByUserId: bd.id });
  // Race: a third investor takes the proposed email between request and decide.
  await prisma.investor.update({ where: { investorId: otherInvestor.investorId }, data: { contactEmail: `ica-newemail-${RUN}@one17.test` } });
  await expectReject('decide-time re-check refuses an email that was taken after the request was submitted (TOCTOU close)', () =>
    amendment.decideAmendment(request2.workflowInstanceId!, compliance.id, 'APPROVE'));
  // Undo the race for cleanup correctness.
  await prisma.investor.update({ where: { investorId: otherInvestor.investorId }, data: { contactEmail: `ica-other-${RUN}@one17.test` } });

  // ---- 8. Reject path ----
  const request3 = await amendment.requestAmendment({ investorId: investor.investorId, proposedSourceOfFunds: 'Inheritance', requestedByUserId: bd.id });
  const rejected = await amendment.decideAmendment(request3.workflowInstanceId!, compliance.id, 'REJECT', 'Needs supporting documentation first.');
  const investorAfterReject = await prisma.investor.findUniqueOrThrow({ where: { investorId: investor.investorId } });
  if (rejected.status === 'REJECTED' && investorAfterReject.sourceOfFunds !== 'Inheritance') ok('rejected amendment never applies to the investor record');
  else fail('reject path left unexpected state', { rejected, investorAfterReject });

  // Cleanup.
  await prisma.investorContactAmendmentRequest.deleteMany({ where: { investorId: { in: [investor.investorId, otherInvestor.investorId] } } });
  const wfIds = [request.workflowInstanceId, request2.workflowInstanceId, request3.workflowInstanceId].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.investor.deleteMany({ where: { investorId: { in: [investor.investorId, otherInvestor.investorId] } } });
  const userIds = [bd.id, compliance.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investor contact/KYC-data amendment flow (invariant 51a-ii) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
