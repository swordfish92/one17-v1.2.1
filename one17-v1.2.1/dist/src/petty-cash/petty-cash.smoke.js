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
const ledger_service_1 = require("../ledger/ledger.service");
const petty_cash_service_1 = require("./petty-cash.service");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
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
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const pettyCash = new petty_cash_service_1.PettyCashService(prisma, audit, delegation, workflow);
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, ledger, {}, {}, {}, {}, {}, {}, {}, {}, pettyCash, {}, {}, {}, {});
    const corpServices = await prisma.appUser.create({ data: { email: `pc-corpsvcs-${RUN}@one17.test`, displayName: 'pc-corpsvcs' } });
    await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
    const sauIc = await prisma.appUser.create({ data: { email: `pc-sauic-${RUN}@one17.test`, displayName: 'pc-sauic' } });
    await rbac.assignRole({ userId: sauIc.id, roleCode: 'SAU_INTERNAL_CONTROL' });
    const mdCeo = await prisma.appUser.create({ data: { email: `pc-mdceo-${RUN}@one17.test`, displayName: 'pc-mdceo' } });
    await rbac.assignRole({ userId: mdCeo.id, roleCode: 'MD_CEO' });
    const finAdmin = await prisma.appUser.create({ data: { email: `pc-finadmin-${RUN}@one17.test`, displayName: 'pc-finadmin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const outsider = await prisma.appUser.create({ data: { email: `pc-outsider-${RUN}@one17.test`, displayName: 'pc-outsider' } });
    const ledgerAdmin = await prisma.appUser.create({ data: { email: `pc-ledgeradmin-${RUN}@one17.test`, displayName: 'pc-ledgeradmin' } });
    await rbac.assignRole({ userId: ledgerAdmin.id, roleCode: 'SUPER_ADMIN' });
    const ledgerEntityCode = `SMOKE-PC-${RUN}`;
    await ledger.createLedgerEntity({ code: ledgerEntityCode, name: 'Smoke Petty Cash Entity', entityType: 'COMPANY', primaryBasis: 'IFRS', createdByUserId: ledgerAdmin.id });
    await ledger.loadChartOfAccountsTemplate({
        ledgerEntityCode,
        accounts: [
            { accountCode: '1010', accountName: 'Petty Cash Float', accountType: 'ASSET', aaoifiRef: 'N/A', ifrsRef: 'IAS 7' },
            { accountCode: '6200', accountName: 'Office Supplies', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 1' },
            { accountCode: '6300', accountName: 'Travel & Transport', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 1' },
        ],
        createdByUserId: ledgerAdmin.id,
    });
    await expectReject('an outsider cannot establish a petty cash float', () => pettyCash.establishFloat({ floatCode: `SMOKE-FLOAT-${RUN}`, custodianUserId: corpServices.id, officeLabel: 'HQ', ledgerEntityCode, floatCeilingKobo: 5000000n, singleVoucherCapKobo: 1000000n, establishedByUserId: outsider.id }));
    const float = await pettyCash.establishFloat({
        floatCode: `SMOKE-FLOAT-${RUN}`, custodianUserId: corpServices.id, officeLabel: 'HQ', ledgerEntityCode,
        floatCeilingKobo: 5000000n, singleVoucherCapKobo: 1000000n, establishedByUserId: corpServices.id,
    });
    if (float.status === 'ACTIVE' && float.floatCeilingKobo === 5000000n)
        ok('establishFloat creates an ACTIVE register row with the governed caps');
    else
        fail('establishFloat did not create the expected row', float);
    await expectReject('a voucher exceeding the single-voucher cap is refused', () => pettyCash.captureVoucher({ floatId: float.id, voucherDate: new Date(), payee: 'Big Vendor', expenseAccountCode: '6200', amountKobo: 1500000n, createdByUserId: corpServices.id }));
    await expectReject('a voucher against a non-EXPENSE / nonexistent account code is refused', () => pettyCash.captureVoucher({ floatId: float.id, voucherDate: new Date(), payee: 'Vendor', expenseAccountCode: '1010', amountKobo: 100000n, createdByUserId: corpServices.id }));
    const voucher1 = await pettyCash.captureVoucher({ floatId: float.id, voucherDate: new Date(), payee: 'Stationery Shop', expenseAccountCode: '6200', amountKobo: 300000n, createdByUserId: corpServices.id });
    const voucher2 = await pettyCash.captureVoucher({ floatId: float.id, voucherDate: new Date(), payee: 'Taxi Co', expenseAccountCode: '6300', amountKobo: 200000n, createdByUserId: corpServices.id });
    if (voucher1.status === 'OUTSTANDING' && voucher2.status === 'OUTSTANDING')
        ok('captureVoucher creates OUTSTANDING vouchers within the cap');
    else
        fail('captureVoucher did not create the expected rows', { voucher1, voucher2 });
    const balanceAfterCapture = await pettyCash.getFloatBalance(float.id);
    if (balanceAfterCapture.outstandingKobo === 500000n && balanceAfterCapture.availableKobo === 4500000n) {
        ok('float balance = ceiling - Σ(OUTSTANDING vouchers), before any claim is even initiated');
    }
    else {
        fail('float balance did not compute as expected', balanceAfterCapture);
    }
    await expectReject('an outsider cannot initiate a replenishment claim', () => pettyCash.initiateReplenishmentClaim({ floatId: float.id, voucherIds: [voucher1.id, voucher2.id], initiatedByUserId: outsider.id }));
    const claimResult = await pettyCash.initiateReplenishmentClaim({ floatId: float.id, voucherIds: [voucher1.id, voucher2.id], initiatedByUserId: corpServices.id });
    if (claimResult.claim.status === 'PENDING_APPROVAL' && claimResult.claim.totalVoucherKobo === 500000n) {
        ok('initiateReplenishmentClaim bundles the vouchers, sums the total, opens the 3-step workflow');
    }
    else {
        fail('initiateReplenishmentClaim did not create the expected claim', claimResult.claim);
    }
    await expectReject('a voucher already attached to a pending claim cannot be reused in a second claim', () => pettyCash.initiateReplenishmentClaim({ floatId: float.id, voucherIds: [voucher1.id], initiatedByUserId: corpServices.id }));
    const workflowInstanceId = claimResult.workflowInstance.id;
    await expectReject('an outsider cannot perform the SAU IC review step', () => workflowInbox.approve(workflowInstanceId, outsider.id));
    const afterStep1 = await workflowInbox.approve(workflowInstanceId, sauIc.id);
    const claimAfterStep1 = await prisma.pettyCashReplenishmentClaim.findUniqueOrThrow({ where: { id: claimResult.claim.id } });
    if (afterStep1 === null && claimAfterStep1.status === 'PENDING_APPROVAL') {
        ok('SAU IC review (step 1) advances the chain but does NOT disburse — claim stays PENDING_APPROVAL, decideReplenishmentClaim correctly no-ops mid-chain');
    }
    else {
        fail('step 1 approval had an unexpected effect', { afterStep1, claimAfterStep1 });
    }
    await expectReject('SAU IC cannot also perform the DoA approval step (different capability required)', () => workflowInbox.approve(workflowInstanceId, sauIc.id));
    const afterStep2 = await workflowInbox.approve(workflowInstanceId, mdCeo.id);
    const vouchersAfterStep2 = await prisma.pettyCashVoucher.findMany({ where: { id: { in: [voucher1.id, voucher2.id] } } });
    if (afterStep2 === null && vouchersAfterStep2.every((v) => v.status === 'OUTSTANDING')) {
        ok('DoA approval (step 2) advances the chain — vouchers still OUTSTANDING, no journal yet ("no journal at claim approval")');
    }
    else {
        fail('step 2 approval had an unexpected effect', { afterStep2, vouchersAfterStep2 });
    }
    await expectReject('MD_CEO cannot also perform the Finance disbursement step (different capability required)', () => workflowInbox.approve(workflowInstanceId, mdCeo.id));
    const disbursed = await workflowInbox.approve(workflowInstanceId, finAdmin.id);
    const claimAfterDisbursement = await prisma.pettyCashReplenishmentClaim.findUniqueOrThrow({ where: { id: claimResult.claim.id } });
    const vouchersAfterDisbursement = await prisma.pettyCashVoucher.findMany({ where: { id: { in: [voucher1.id, voucher2.id] } } });
    if (disbursed?.status === 'DISBURSED' && claimAfterDisbursement.disbursedByUserId === finAdmin.id && vouchersAfterDisbursement.every((v) => v.status === 'REIMBURSED')) {
        ok('Finance disbursement (step 3, final) flips the claim to DISBURSED and every bundled voucher to REIMBURSED — the actual money-moving event');
    }
    else {
        fail('step 3 disbursement did not activate as expected', { disbursed, claimAfterDisbursement, vouchersAfterDisbursement });
    }
    const balanceAfterDisbursement = await pettyCash.getFloatBalance(float.id);
    if (balanceAfterDisbursement.availableKobo === 5000000n) {
        ok('float balance returns to the full ceiling once the replenishment claim disburses (vouchers no longer OUTSTANDING)');
    }
    else {
        fail('float balance did not restore as expected after disbursement', balanceAfterDisbursement);
    }
    const journalConfig = await prisma.eventJournalConfig.findUnique({ where: { eventType: 'PETTY_CASH_REPLENISHMENT' } });
    if (!journalConfig)
        ok('no event_journal_config row exists for PETTY_CASH_REPLENISHMENT — the journal wiring is genuinely parked pending FinCon (Mapping 6), not silently invented');
    else
        fail('an unexpected event_journal_config row exists for PETTY_CASH_REPLENISHMENT — journal wiring should still be parked', journalConfig);
    const voucher3 = await pettyCash.captureVoucher({ floatId: float.id, voucherDate: new Date(), payee: 'Courier', expenseAccountCode: '6300', amountKobo: 100000n, createdByUserId: corpServices.id });
    const claim2 = await pettyCash.initiateReplenishmentClaim({ floatId: float.id, voucherIds: [voucher3.id], initiatedByUserId: corpServices.id });
    await workflowInbox.reject(claim2.workflowInstance.id, sauIc.id, 'Missing receipt.');
    const claim2After = await prisma.pettyCashReplenishmentClaim.findUniqueOrThrow({ where: { id: claim2.claim.id } });
    const voucher3After = await prisma.pettyCashVoucher.findUniqueOrThrow({ where: { id: voucher3.id } });
    if (claim2After.status === 'REJECTED' && voucher3After.claimId === null && voucher3After.status === 'OUTSTANDING') {
        ok('a claim rejected at the IC step releases its vouchers (claimId cleared, still OUTSTANDING) — re-claimable in a future replenishment');
    }
    else {
        fail('reject path did not release the voucher as expected', { claim2After, voucher3After });
    }
    await expectReject('an outsider cannot record a spot check', () => pettyCash.recordSpotCheck({ floatId: float.id, countedKobo: 4900000n, checkedByUserId: outsider.id }));
    const spotCheck = await pettyCash.recordSpotCheck({ floatId: float.id, countedKobo: 4900000n, notes: 'Short by 1,000.', checkedByUserId: sauIc.id });
    if (spotCheck.expectedKobo === 4900000n && spotCheck.varianceKobo === 0n) {
        ok('recordSpotCheck computes expectedKobo from the live balance (ceiling minus the still-OUTSTANDING voucher3) and the variance correctly');
    }
    else {
        fail('recordSpotCheck did not compute as expected', spotCheck);
    }
    await expectReject('a float with outstanding vouchers cannot be closed', () => pettyCash.closeFloat(float.id, corpServices.id));
    const workflowInstanceIds = [claimResult.workflowInstance.id, claim2.workflowInstance.id];
    await prisma.pettyCashSpotCheck.deleteMany({ where: { floatId: float.id } });
    await prisma.pettyCashVoucher.deleteMany({ where: { floatId: float.id } });
    await prisma.pettyCashReplenishmentClaim.deleteMany({ where: { floatId: float.id } });
    await prisma.pettyCashFloat.delete({ where: { id: float.id } });
    await prisma.chartOfAccount.deleteMany({ where: { ledgerEntityCode } });
    await prisma.ledgerEntity.delete({ where: { code: ledgerEntityCode } });
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
    const userIds = [corpServices.id, sauIc.id, mdCeo.id, finAdmin.id, outsider.id, ledgerAdmin.id];
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — petty cash imprest module (invariant 50a) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=petty-cash.smoke.js.map