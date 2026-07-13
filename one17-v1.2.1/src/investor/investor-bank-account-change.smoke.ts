// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/investor/investor-bank-account-change.smoke.ts
// Invariant 51(a-i) (CHECK12, advisor BA lifecycle-gap register, Tier 1 --
// "THE fraud-critical item"): governed investor bank-account change flow.
// Adversarial set required by the CEO: self-approval, unverified change,
// payment during cooling-off. Own SMOKE-prefixed fixtures throughout --
// never touches the walkthrough DB or its real products/investors.
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { LedgerService } from '../ledger/ledger.service';
import { InvestorBankAccountChangeService } from './investor-bank-account-change.service';

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
  const documents = new DocumentService(prisma, delegation, audit);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const bankChange = new InvestorBankAccountChangeService(prisma, audit, delegation, workflow, documents);

  const bd = await prisma.appUser.create({ data: { email: `bac-bd-${RUN}@one17.test`, displayName: 'bac-bd' } });
  await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
  const finAdmin = await prisma.appUser.create({ data: { email: `bac-finadmin-${RUN}@one17.test`, displayName: 'bac-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const compliance = await prisma.appUser.create({ data: { email: `bac-compliance-${RUN}@one17.test`, displayName: 'bac-compliance' } });
  await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
  const outsider = await prisma.appUser.create({ data: { email: `bac-outsider-${RUN}@one17.test`, displayName: 'bac-outsider' } });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-BAC-INV-${RUN}`, fullLegalName: 'Smoke BAC Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-BAC-${RUN}`, contactEmail: `bac-inv-${RUN}@one17.test`,
      contactPhone: '+2340000000030', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  // The investor's original, already-trusted account -- stays payable
  // throughout the whole change flow below (design: a change to WHERE
  // money goes must not itself interrupt an investor's ability to be paid
  // to the account already on file).
  const originalAccount = await prisma.investorBankAccount.create({
    data: { investorId: investor.investorId, bankName: 'Original Bank', accountNumber: '1000000001', accountName: 'Smoke BAC Investor', isPrimary: true, status: 'ACTIVE' },
  });

  // Ledger fixtures for the "payment during cooling-off" adversarial test.
  const ledgerEntityCode = `SMOKE-BAC-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke BAC Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
  const productAccount = await prisma.productAccount.create({
    data: { investorId: investor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: new Date(), principalOrCommittedKobo: 10_000_000_00n },
  });

  // === 1. Outsider (no INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION) cannot draft a request ===
  await expectReject('outsider cannot draft a bank-account change request', () =>
    bankChange.requestChange({ investorId: investor.investorId, proposedBankName: 'New Bank', proposedAccountNumber: '2000000002', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: outsider.id }));

  // === 2. BD drafts the request ===
  const request = await bankChange.requestChange({
    investorId: investor.investorId, proposedBankName: 'New Bank', proposedAccountNumber: '2000000002', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: bd.id,
  });
  if (request.status === 'PENDING' && !request.workflowInstanceId) ok('requestChange creates a PENDING row with no workflow instance yet');
  else fail('requestChange did not create the expected PENDING/un-submitted row', request);

  // === 3. "Unverified change" -- submitting without evidence is refused ===
  await expectReject('submitChange refused -- missing required document evidence (invariant 51a-i)', () => bankChange.submitChange(request.id, bd.id));

  // === 4. BD attaches the client's signed instruction ===
  await bankChange.attachEvidence(request.id, bd.id, { documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION', fileReference: 'smoke://bac/signed-instruction.pdf' });
  const checklist = await bankChange.getEvidenceChecklist(request.id);
  if (checklist.complete) ok('evidence checklist complete after attaching CLIENT_SIGNED_CHANGE_INSTRUCTION');
  else fail('checklist not complete after attaching required evidence', checklist);

  // === 5. Only the original requester may submit ===
  await expectReject('a different user cannot submit someone else\'s change request', () => bankChange.submitChange(request.id, finAdmin.id));

  const submitted = await bankChange.submitChange(request.id, bd.id);
  if (submitted.workflowInstanceId) ok('submitChange initiates the governed workflow (2-step: APPROVAL then REVERIFICATION)');
  else fail('submitChange did not attach a workflowInstanceId', submitted);

  // === 6. Self-approval refused (generic engine: maker != checker) ===
  await expectReject('the original requester (BD) cannot approve their own change request', () => bankChange.decideChangeRequest(request.id, bd.id, 'APPROVE'));

  // === 7. Step 1: FIN_ADMIN approves the paperwork ===
  const step1 = await bankChange.decideChangeRequest(request.id, finAdmin.id, 'APPROVE', 'Documents look consistent with the file.');
  const trailAfterStep1 = await workflow.getTrail(submitted.workflowInstanceId!);
  if (trailAfterStep1.status === 'PENDING_APPROVAL' && trailAfterStep1.steps[0].decision === 'APPROVE' && trailAfterStep1.steps[1].decision === null) {
    ok('step 1 (BANK_ACCOUNT_CHANGE_APPROVAL) decided -- step 2 (REVERIFICATION) still pending, no resulting account yet');
  } else {
    fail('workflow trail after step 1 looks wrong', trailAfterStep1);
  }
  void step1;

  // === 8. Invariant 51(a-i) hardening: the SAME approver cannot also decide step 2, even lacking the capability aside ===
  await expectReject('the same user (FIN_ADMIN) cannot also decide the reverification step -- genuine 3-way separation, not just maker!=checker', () =>
    bankChange.decideChangeRequest(request.id, finAdmin.id, 'APPROVE', 'Trying to also reverify.'));

  // === 9. Reverification without notes is refused (must describe HOW the client was independently confirmed) ===
  await expectReject('reverification without notes is refused', () => bankChange.decideChangeRequest(request.id, compliance.id, 'APPROVE'));

  // === 10. COMPLIANCE independently reverifies with notes -- workflow reaches APPROVED, resulting account created COOLING_OFF ===
  const decided = await bankChange.decideChangeRequest(request.id, compliance.id, 'APPROVE', 'Outbound call placed to +2340000000030 (number on file, not the number supplied with the request) -- client confirmed the change verbally.');
  if (decided.status === 'COOLING_OFF' && decided.resultingBankAccountId && decided.coolingOffEndsAt && decided.coolingOffEndsAt > new Date()) {
    ok(`reverification APPROVED -- resulting account ${decided.resultingBankAccountId} created, cooling-off until ${decided.coolingOffEndsAt.toISOString()}`);
  } else {
    fail('decideChangeRequest did not activate the change as expected', decided);
  }
  const newAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: decided.resultingBankAccountId! } });
  if (newAccount.status === 'ACTIVE' && !newAccount.isPrimary && newAccount.verificationStatus === 'VERIFIED') {
    ok('resulting account is ACTIVE + VERIFIED but NOT yet primary -- old account keeps paying during cooling-off');
  } else {
    fail('resulting account has unexpected state', newAccount);
  }

  // === 11. "Payment during cooling-off" -- explicit redemption to the new account is refused ===
  await expectReject('redemption explicitly targeting the new (still cooling-off) account is refused', () =>
    ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 100_000_00n, makerUserId: finAdmin.id, payoutBankAccountId: newAccount.id }));

  // === 12. Meanwhile, redemption to the ORIGINAL (still-primary) account still succeeds -- a bank-account change in flight does not freeze the investor's existing payout rail ===
  await ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 100_000_00n, makerUserId: finAdmin.id });
  const redemptionToOriginal = await prisma.txn.findFirst({ where: { productAccountId: productAccount.id, txnType: 'REDEMPTION' } });
  if (redemptionToOriginal) ok('redemption to the original, still-primary account succeeds throughout the cooling-off window');
  else fail('expected a REDEMPTION txn against the original account', redemptionToOriginal);

  // === 13. "Unverified change" -- an unrelated/nonexistent account id is refused outright ===
  await expectReject('redemption targeting an account that is not this investor\'s own is refused', () =>
    ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 1_000_00n, makerUserId: finAdmin.id, payoutBankAccountId: '00000000-0000-0000-0000-000000000000' }));

  // === 14. Once the cooling-off window elapses, settlement swaps primacy -- new account becomes payable, old one SUPERSEDED ===
  await prisma.investorBankAccountChangeRequest.update({ where: { id: request.id }, data: { coolingOffEndsAt: new Date(Date.now() - 1000) } });
  await prisma.investorBankAccount.update({ where: { id: newAccount.id }, data: { coolingOffEndsAt: new Date(Date.now() - 1000) } });
  await ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 50_000_00n, makerUserId: finAdmin.id });
  const settledRequest = await prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: request.id } });
  const settledNewAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: newAccount.id } });
  const settledOldAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: originalAccount.id } });
  if (settledRequest.status === 'COMPLETED' && settledNewAccount.isPrimary && settledOldAccount.status === 'SUPERSEDED' && !settledOldAccount.isPrimary) {
    ok('once the cooling-off window elapses, settleDueBankAccountChangeSwaps (invoked lazily from createTxn) swaps primacy -- new account primary, old SUPERSEDED, change request COMPLETED');
  } else {
    fail('post-window settlement did not swap primacy as expected', { settledRequest, settledNewAccount, settledOldAccount });
  }

  // === 15. Reject path: a rejected step never activates anything ===
  await bankChange.attachEvidence(
    (await bankChange.requestChange({ investorId: investor.investorId, proposedBankName: 'Rejected Bank', proposedAccountNumber: '3000000003', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: bd.id })).id,
    bd.id, { documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION', fileReference: 'smoke://bac/signed-instruction-2.pdf' },
  );
  const rejectRequest = await prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { investorId: investor.investorId, proposedBankName: 'Rejected Bank' } });
  const rejectSubmitted = await bankChange.submitChange(rejectRequest.id, bd.id);
  const rejected = await bankChange.decideChangeRequest(rejectRequest.id, finAdmin.id, 'REJECT', 'Signature does not match specimen on file.');
  void rejectSubmitted;
  if (rejected.status === 'REJECTED' && !rejected.resultingBankAccountId) ok('rejectRequest path: no bank account ever created for a REJECTED change');
  else fail('reject path left unexpected state', rejected);

  // Cleanup.
  await prisma.txn.deleteMany({ where: { productAccountId: productAccount.id } });
  await prisma.productAccount.delete({ where: { id: productAccount.id } });
  await prisma.investorBankAccountChangeRequest.deleteMany({ where: { investorId: investor.investorId } });
  await prisma.documentRegisterEntry.deleteMany({ where: { entityType: 'investor_bank_account_change_request' } });
  const wfIds = [submitted.workflowInstanceId, rejectSubmitted.workflowInstanceId].filter((id): id is string => !!id);
  await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: wfIds } } });
  await prisma.workflowInstance.deleteMany({ where: { id: { in: wfIds } } });
  await prisma.investorBankAccount.deleteMany({ where: { investorId: investor.investorId } });
  await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode } });
  await prisma.ledgerEntity.delete({ where: { code: ledgerEntityCode } });
  await prisma.investor.delete({ where: { investorId: investor.investorId } });
  const userIds = [bd.id, finAdmin.id, compliance.id, outsider.id];
  await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
  await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });

  await prisma.$disconnect();

  if (failed) {
    console.error('\nSMOKE FAILED — see FAIL lines above.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — investor bank-account change flow (invariant 51a-i) against the real live DB.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
