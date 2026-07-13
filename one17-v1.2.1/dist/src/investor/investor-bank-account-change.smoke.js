"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const document_service_1 = require("../document/document.service");
const ledger_service_1 = require("../ledger/ledger.service");
const investor_bank_account_change_service_1 = require("./investor-bank-account-change.service");
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
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const bankChange = new investor_bank_account_change_service_1.InvestorBankAccountChangeService(prisma, audit, delegation, workflow, documents);
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
    const originalAccount = await prisma.investorBankAccount.create({
        data: { investorId: investor.investorId, bankName: 'Original Bank', accountNumber: '1000000001', accountName: 'Smoke BAC Investor', isPrimary: true, status: 'ACTIVE' },
    });
    const ledgerEntityCode = `SMOKE-BAC-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke BAC Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
    const productAccount = await prisma.productAccount.create({
        data: { investorId: investor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: new Date(), principalOrCommittedKobo: 1000000000n },
    });
    await expectReject('outsider cannot draft a bank-account change request', () => bankChange.requestChange({ investorId: investor.investorId, proposedBankName: 'New Bank', proposedAccountNumber: '2000000002', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: outsider.id }));
    const request = await bankChange.requestChange({
        investorId: investor.investorId, proposedBankName: 'New Bank', proposedAccountNumber: '2000000002', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: bd.id,
    });
    if (request.status === 'PENDING' && !request.workflowInstanceId)
        ok('requestChange creates a PENDING row with no workflow instance yet');
    else
        fail('requestChange did not create the expected PENDING/un-submitted row', request);
    await expectReject('submitChange refused -- missing required document evidence (invariant 51a-i)', () => bankChange.submitChange(request.id, bd.id));
    await bankChange.attachEvidence(request.id, bd.id, { documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION', fileReference: 'smoke://bac/signed-instruction.pdf' });
    const checklist = await bankChange.getEvidenceChecklist(request.id);
    if (checklist.complete)
        ok('evidence checklist complete after attaching CLIENT_SIGNED_CHANGE_INSTRUCTION');
    else
        fail('checklist not complete after attaching required evidence', checklist);
    await expectReject('a different user cannot submit someone else\'s change request', () => bankChange.submitChange(request.id, finAdmin.id));
    const submitted = await bankChange.submitChange(request.id, bd.id);
    if (submitted.workflowInstanceId)
        ok('submitChange initiates the governed workflow (2-step: APPROVAL then REVERIFICATION)');
    else
        fail('submitChange did not attach a workflowInstanceId', submitted);
    await expectReject('the original requester (BD) cannot approve their own change request', () => bankChange.decideChangeRequest(request.id, bd.id, 'APPROVE'));
    const step1 = await bankChange.decideChangeRequest(request.id, finAdmin.id, 'APPROVE', 'Documents look consistent with the file.');
    const trailAfterStep1 = await workflow.getTrail(submitted.workflowInstanceId);
    if (trailAfterStep1.status === 'PENDING_APPROVAL' && trailAfterStep1.steps[0].decision === 'APPROVE' && trailAfterStep1.steps[1].decision === null) {
        ok('step 1 (BANK_ACCOUNT_CHANGE_APPROVAL) decided -- step 2 (REVERIFICATION) still pending, no resulting account yet');
    }
    else {
        fail('workflow trail after step 1 looks wrong', trailAfterStep1);
    }
    void step1;
    await expectReject('the same user (FIN_ADMIN) cannot also decide the reverification step -- genuine 3-way separation, not just maker!=checker', () => bankChange.decideChangeRequest(request.id, finAdmin.id, 'APPROVE', 'Trying to also reverify.'));
    await expectReject('reverification without notes is refused', () => bankChange.decideChangeRequest(request.id, compliance.id, 'APPROVE'));
    const decided = await bankChange.decideChangeRequest(request.id, compliance.id, 'APPROVE', 'Outbound call placed to +2340000000030 (number on file, not the number supplied with the request) -- client confirmed the change verbally.');
    if (decided.status === 'COOLING_OFF' && decided.resultingBankAccountId && decided.coolingOffEndsAt && decided.coolingOffEndsAt > new Date()) {
        ok(`reverification APPROVED -- resulting account ${decided.resultingBankAccountId} created, cooling-off until ${decided.coolingOffEndsAt.toISOString()}`);
    }
    else {
        fail('decideChangeRequest did not activate the change as expected', decided);
    }
    const newAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: decided.resultingBankAccountId } });
    if (newAccount.status === 'ACTIVE' && !newAccount.isPrimary && newAccount.verificationStatus === 'VERIFIED') {
        ok('resulting account is ACTIVE + VERIFIED but NOT yet primary -- old account keeps paying during cooling-off');
    }
    else {
        fail('resulting account has unexpected state', newAccount);
    }
    await expectReject('redemption explicitly targeting the new (still cooling-off) account is refused', () => ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 10000000n, makerUserId: finAdmin.id, payoutBankAccountId: newAccount.id }));
    await ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 10000000n, makerUserId: finAdmin.id });
    const redemptionToOriginal = await prisma.txn.findFirst({ where: { productAccountId: productAccount.id, txnType: 'REDEMPTION' } });
    if (redemptionToOriginal)
        ok('redemption to the original, still-primary account succeeds throughout the cooling-off window');
    else
        fail('expected a REDEMPTION txn against the original account', redemptionToOriginal);
    await expectReject('redemption targeting an account that is not this investor\'s own is refused', () => ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 100000n, makerUserId: finAdmin.id, payoutBankAccountId: '00000000-0000-0000-0000-000000000000' }));
    await prisma.investorBankAccountChangeRequest.update({ where: { id: request.id }, data: { coolingOffEndsAt: new Date(Date.now() - 1000) } });
    await prisma.investorBankAccount.update({ where: { id: newAccount.id }, data: { coolingOffEndsAt: new Date(Date.now() - 1000) } });
    await ledger.createTxn({ txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: productAccount.id, valueDate: new Date(), amountKobo: 5000000n, makerUserId: finAdmin.id });
    const settledRequest = await prisma.investorBankAccountChangeRequest.findUniqueOrThrow({ where: { id: request.id } });
    const settledNewAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: newAccount.id } });
    const settledOldAccount = await prisma.investorBankAccount.findUniqueOrThrow({ where: { id: originalAccount.id } });
    if (settledRequest.status === 'COMPLETED' && settledNewAccount.isPrimary && settledOldAccount.status === 'SUPERSEDED' && !settledOldAccount.isPrimary) {
        ok('once the cooling-off window elapses, settleDueBankAccountChangeSwaps (invoked lazily from createTxn) swaps primacy -- new account primary, old SUPERSEDED, change request COMPLETED');
    }
    else {
        fail('post-window settlement did not swap primacy as expected', { settledRequest, settledNewAccount, settledOldAccount });
    }
    await bankChange.attachEvidence((await bankChange.requestChange({ investorId: investor.investorId, proposedBankName: 'Rejected Bank', proposedAccountNumber: '3000000003', proposedAccountName: 'Smoke BAC Investor', requestedByUserId: bd.id })).id, bd.id, { documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION', fileReference: 'smoke://bac/signed-instruction-2.pdf' });
    const rejectRequest = await prisma.investorBankAccountChangeRequest.findFirstOrThrow({ where: { investorId: investor.investorId, proposedBankName: 'Rejected Bank' } });
    const rejectSubmitted = await bankChange.submitChange(rejectRequest.id, bd.id);
    const rejected = await bankChange.decideChangeRequest(rejectRequest.id, finAdmin.id, 'REJECT', 'Signature does not match specimen on file.');
    void rejectSubmitted;
    if (rejected.status === 'REJECTED' && !rejected.resultingBankAccountId)
        ok('rejectRequest path: no bank account ever created for a REJECTED change');
    else
        fail('reject path left unexpected state', rejected);
    await prisma.txn.deleteMany({ where: { productAccountId: productAccount.id } });
    await prisma.productAccount.delete({ where: { id: productAccount.id } });
    await prisma.investorBankAccountChangeRequest.deleteMany({ where: { investorId: investor.investorId } });
    await prisma.documentRegisterEntry.deleteMany({ where: { entityType: 'investor_bank_account_change_request' } });
    const wfIds = [submitted.workflowInstanceId, rejectSubmitted.workflowInstanceId].filter((id) => !!id);
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
    }
    else {
        console.log('\nSMOKE OK — investor bank-account change flow (invariant 51a-i) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor-bank-account-change.smoke.js.map