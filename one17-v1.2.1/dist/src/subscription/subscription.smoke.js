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
const nd_mandate_engine_service_1 = require("../engine-nd-mandate/nd-mandate-engine.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const certificate_service_1 = require("../certificate/certificate.service");
const subscription_service_1 = require("./subscription.service");
const subscription_types_1 = require("./subscription.types");
const prospectus_sheet_service_1 = require("../parameters/prospectus-sheet.service");
const notification_service_1 = require("../notification/notification.service");
const wm_service_1 = require("../wm/wm.service");
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
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const halalFund = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const subs = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const prospectusSheets = new prospectus_sheet_service_1.ProspectusSheetService(prisma, audit, delegation, workflow);
    const notification = new notification_service_1.NotificationService(prisma);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, ledger, {}, {}, {}, {}, {}, {}, {}, {}, {}, subs, notification, {}, {});
    const portoff = await prisma.appUser.create({ data: { email: `sub-portoff-${RUN}@one17.test`, displayName: 'sub-portoff' } });
    await rbac.assignRole({ userId: portoff.id, roleCode: 'PORT_OFF' });
    const portmgr = await prisma.appUser.create({ data: { email: `sub-portmgr-${RUN}@one17.test`, displayName: 'sub-portmgr' } });
    await rbac.assignRole({ userId: portmgr.id, roleCode: 'PORT_MGR' });
    const finadmin = await prisma.appUser.create({ data: { email: `sub-finadmin-${RUN}@one17.test`, displayName: 'sub-finadmin' } });
    await rbac.assignRole({ userId: finadmin.id, roleCode: 'FIN_ADMIN' });
    const mdceo = await prisma.appUser.create({ data: { email: `sub-mdceo-${RUN}@one17.test`, displayName: 'sub-mdceo' } });
    await rbac.assignRole({ userId: mdceo.id, roleCode: 'MD_CEO' });
    const fundacct = await prisma.appUser.create({ data: { email: `sub-fundacct-${RUN}@one17.test`, displayName: 'sub-fundacct' } });
    await rbac.assignRole({ userId: fundacct.id, roleCode: 'FUND_ACCT' });
    const hfCode = `SMOKE-SUB-HF-${RUN}`;
    const hfProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-HF-PROD-${RUN}`, name: 'Smoke HF Product', engineType: 'UNIT_NAV', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: hfCode, name: 'Smoke Sub HF', entityType: 'FUND', primaryBasis: 'AAOIFI', productCode: hfProduct.code } });
    await prisma.chartOfAccount.createMany({ data: [
            { ledgerEntityCode: hfCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 7' },
            { ledgerEntityCode: hfCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 1' },
        ] });
    const effectiveDate = new Date('2026-07-08T00:00:00Z');
    await halalFund.publishAndLockNav({ ledgerEntityCode: hfCode, valuationDate: effectiveDate, launchDate: effectiveDate, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01 });
    const poolCode = `SMOKE-SUB-POOL-${RUN}`;
    const poolProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-POOL-PROD-${RUN}`, name: 'Smoke Pool Product', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: poolCode, name: 'Smoke Sub Pool', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode: poolProduct.code } });
    await prisma.chartOfAccount.createMany({ data: [
            { ledgerEntityCode: poolCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 7' },
            { ledgerEntityCode: poolCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 1' },
        ] });
    const mandateCode = `SMOKE-SUB-ND-${RUN}`;
    const ndProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-ND-PROD-${RUN}`, name: 'Smoke ND Product', engineType: 'MANDATE', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: mandateCode, name: 'Smoke Sub ND', entityType: 'MANDATE', primaryBasis: 'AAOIFI', productCode: ndProduct.code } });
    const unapprovedProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-NOSHARIAH-${RUN}`, name: 'Smoke Unapproved Product', engineType: 'UNIT_NAV', status: 'ACTIVE' },
    });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-SUB-INV-${RUN}`, fullLegalName: 'Smoke Sub Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', taxIdentificationNumber: `TIN-SUB-${RUN}`, contactEmail: `sub-inv-${RUN}@one17.test`,
            contactPhone: '+2340000000020', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
            onboardedByUserId: portoff.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    const bankAccount = await prisma.investorBankAccount.create({ data: { investorId: investor.investorId, bankName: 'Test Bank', accountNumber: '1112223334', accountName: 'Smoke Sub Investor', isPrimary: true } });
    await expectReject('initiateSubscription refused for a product with no shariahApprovedAt', () => subs.initiateSubscription({ investorId: investor.investorId, productCode: unapprovedProduct.code, amountKobo: 100000000n, effectiveDate, initiatedByUserId: portoff.id }));
    const hfReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 500000000n, effectiveDate, initiatedByUserId: portoff.id });
    await expectReject('self-approval refused (maker cannot approve their own subscription)', () => subs.approveSubscription({ workflowInstanceId: hfReq.workflowInstanceId, approverUserId: portoff.id, journalInitiatorUserId: finadmin.id, payerBankAccountId: bankAccount.id }));
    const hfApproved = await subs.approveSubscription({ workflowInstanceId: hfReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id, payerBankAccountId: bankAccount.id });
    if (hfApproved.status === 'APPROVED' && hfApproved.resultProductAccountId && hfApproved.computedUnits) {
        const units = Number(hfApproved.computedUnits);
        if (Math.abs(units - 50000) < 0.01)
            ok(`HF subscription: NGN 5,000,000 at NAV 100/unit -> ${units} units (computed inside the service, not caller-supplied)`);
        else
            fail('HF unit computation looks wrong', hfApproved);
    }
    else {
        fail('HF subscription did not approve as expected', hfApproved);
    }
    const hfAccount = await prisma.productAccount.findUniqueOrThrow({ where: { id: hfApproved.resultProductAccountId } });
    const hfTxn = await prisma.txn.findFirst({ where: { productAccountId: hfAccount.id, txnType: 'SUBSCRIPTION' } });
    if (hfTxn)
        ok('HF subscription: cash-leg Txn created (only at approval, never at initiation)');
    else
        fail('no Txn found for the approved HF subscription', hfAccount);
    const hfJournal = await prisma.journalEntry.findFirst({ where: { ledgerEntityCode: hfCode, description: { contains: 'CAPITAL_PLACEMENT_RECEIVED' } }, include: { lines: { include: { account: true } } } });
    if (hfJournal && hfJournal.status === 'DRAFT' && hfJournal.postingWorkflowInstanceId && hfJournal.lines.length === 2) {
        const dr = hfJournal.lines.find((l) => l.account.accountCode === '1000');
        const cr = hfJournal.lines.find((l) => l.account.accountCode === '3010');
        if (dr?.debitKobo === 500000000n && cr?.creditKobo === 500000000n) {
            ok('invariant 42(b): CAPITAL_PLACEMENT_RECEIVED journal auto-generated at approval (Dr 1000 Cash / Cr 3010 Investor Capital, balanced), posting requested (still DRAFT until a checker posts it) -- never auto-posted');
        }
        else {
            fail('HF journal lines have wrong amounts/accounts', hfJournal.lines);
        }
    }
    else {
        fail('no auto-generated CAPITAL_PLACEMENT_RECEIVED journal found for the HF subscription', hfJournal);
    }
    await expectReject('the maker cannot also post the journal they triggered (maker!=checker holds all the way to posting)', () => ledger.approveJournalPosting({ workflowInstanceId: hfJournal.postingWorkflowInstanceId, approverUserId: portoff.id }));
    const hfJournalPosted = await ledger.approveJournalPosting({ workflowInstanceId: hfJournal.postingWorkflowInstanceId, approverUserId: mdceo.id });
    if (hfJournalPosted?.status === 'POSTED')
        ok('invariant 42(d): posting approved by a different checker (MD_CEO, JOURNAL_ENTRIES APPROVE, distinct from the FIN_ADMIN maker) -- journal reaches POSTED, full chain proven end-to-end (onboard -> subscribe -> approve -> journal auto-generated -> posting approved)');
    else
        fail('journal did not reach POSTED', hfJournalPosted);
    const noNavDate = new Date('2026-08-15T00:00:00Z');
    const hfReq2 = await subs.initiateSubscription({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 100000000n, effectiveDate: noNavDate, initiatedByUserId: portoff.id });
    await expectReject('approveSubscription refused when no NAV is published for the exact effectiveDate', () => subs.approveSubscription({ workflowInstanceId: hfReq2.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id, payerBankAccountId: bankAccount.id }));
    const poolReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: poolProduct.code, amountKobo: 2000000000n, effectiveDate, initiatedByUserId: portoff.id });
    const poolApproved = await subs.approveSubscription({ workflowInstanceId: poolReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id, payerBankAccountId: bankAccount.id });
    if (poolApproved.status === 'APPROVED' && poolApproved.computedUnits == null) {
        ok('POOL subscription: capital admission with NO unit computation whatsoever (AMD-01) — computedUnits stayed null');
    }
    else {
        fail('POOL subscription unexpectedly carries a unit computation', poolApproved);
    }
    await expectReject('confirmDepositAndSetTarget refused for UNIT_NAV (HF) — never applies to a unit fund', () => subs.confirmDepositAndSetTarget({ subscriptionRequestId: hfReq.id, targetReturnPct: 10, maturityDate: new Date('2027-07-08'), confirmedByUserId: fundacct.id }));
    await expectReject('confirmDepositAndSetTarget refused: same actor as the request initiator (maker≠checker)', () => subs.confirmDepositAndSetTarget({ subscriptionRequestId: poolReq.id, targetReturnPct: 12, maturityDate: new Date('2027-07-08'), confirmedByUserId: portoff.id }));
    await expectReject('confirmDepositAndSetTarget refused: actor lacks SUBSCRIPTION_TARGET_CONFIRMATION (PORT_MGR is not FUND_ACCT)', () => subs.confirmDepositAndSetTarget({ subscriptionRequestId: poolReq.id, targetReturnPct: 12, maturityDate: new Date('2027-07-08'), confirmedByUserId: portmgr.id }));
    const poolTarget = await subs.confirmDepositAndSetTarget({ subscriptionRequestId: poolReq.id, targetReturnPct: 12.5, maturityDate: new Date('2027-07-08'), confirmedByUserId: fundacct.id });
    if ('targetReturnPctBenchmark' in poolTarget && Number(poolTarget.targetReturnPctBenchmark) === 12.5) {
        ok('POOL: FA confirmed deposit + set targetReturnPctBenchmark=12.5%/maturityDate — a different actor (FUND_ACCT) than the PORT_OFF initiator');
    }
    else {
        fail('POOL target confirmation did not persist as expected', poolTarget);
    }
    await expectReject('confirmDepositAndSetTarget refused: already confirmed once (one-time, not an amendment)', () => subs.confirmDepositAndSetTarget({ subscriptionRequestId: poolReq.id, targetReturnPct: 15, maturityDate: new Date('2027-07-08'), confirmedByUserId: fundacct.id }));
    const poolCertAfterTarget = await prisma.certificate.findFirst({ where: { productAccountId: poolApproved.resultProductAccountId }, orderBy: { createdAt: 'desc' } });
    if (poolCertAfterTarget && poolCertAfterTarget.dataSnapshot?.targetReturnPct === 12.5) {
        ok('POOL: a fresh certificate was (re)issued carrying the confirmed targetReturnPct — invariant 62(h)\'s "flows to certificate automatically"');
    }
    else {
        fail('POOL certificate does not reflect the confirmed target return', poolCertAfterTarget);
    }
    const ndReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: ndProduct.code, amountKobo: 1000000000n, effectiveDate, initiatedByUserId: portoff.id });
    const ndApproved = await subs.approveSubscription({ workflowInstanceId: ndReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id });
    if (ndApproved.status === 'APPROVED' && ndApproved.resultNdMandateAccountId) {
        const mandate = await prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: ndApproved.resultNdMandateAccountId } });
        if (mandate.status === 'ACTIVE')
            ok('MANDATE subscription: NdMandateAccount created AND activated in one approval (creator=initiator, activator=approver, maker!=checker holds)');
        else
            fail('ND mandate did not reach ACTIVE', mandate);
    }
    else {
        fail('MANDATE subscription did not produce a resultNdMandateAccountId', ndApproved);
    }
    const ndTarget = await subs.confirmDepositAndSetTarget({ subscriptionRequestId: ndReq.id, targetReturnPct: 9.75, maturityDate: new Date('2027-07-08'), confirmedByUserId: fundacct.id });
    if ('targetReturnPct' in ndTarget && Number(ndTarget.targetReturnPct) === 9.75) {
        ok('MANDATE: FA confirmed deposit + set targetReturnPct=9.75%/maturityDate on the NdMandateAccount');
    }
    else {
        fail('MANDATE target confirmation did not persist as expected', ndTarget);
    }
    const redReq = await subs.initiateRedemption({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 100000000n, effectiveDate, initiatedByUserId: portoff.id });
    const redApproved = await subs.approveRedemption({ workflowInstanceId: redReq.workflowInstanceId, approverUserId: portmgr.id });
    const redTxn = await prisma.txn.findFirst({ where: { productAccountId: hfAccount.id, txnType: 'REDEMPTION' } });
    if (redApproved.status === 'APPROVED' && redTxn)
        ok('redemption: mirrors subscription, cash-leg Txn created only at approval');
    else
        fail('redemption did not complete as expected', { redApproved, redTxn });
    const stage1Investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-SUB-S1-${RUN}`, fullLegalName: 'Smoke Stage1 Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `sub-s1-${RUN}@one17.test`, contactPhone: '+2340000000021',
            onboardedByUserId: portoff.id, kycStatus: 'PENDING_KYC', amlStatus: 'PENDING', fundStatus: 'PENDING_KYC', onboardingStage: 'STAGE_1_EXPRESS',
        },
    });
    const stage1Account = await prisma.productAccount.create({ data: { investorId: stage1Investor.investorId, productCode: hfProduct.code, startDate: effectiveDate, principalOrCommittedKobo: 0n } });
    void stage1Account;
    const stage1RedReq = await subs.initiateRedemption({ investorId: stage1Investor.investorId, productCode: hfProduct.code, amountKobo: 1000000n, effectiveDate, initiatedByUserId: portoff.id });
    await expectReject('Stage-1 Express investor redemption refused (invariant 27a, enforced in LedgerService.createTxn)', () => subs.approveRedemption({ workflowInstanceId: stage1RedReq.workflowInstanceId, approverUserId: portmgr.id }));
    const rejectReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 100000000n, effectiveDate, initiatedByUserId: portoff.id });
    const rejected = await subs.rejectRequest(rejectReq.workflowInstanceId, portmgr.id, 'Smoke test rejection.');
    if (rejected.status === 'REJECTED' && !rejected.resultProductAccountId)
        ok('rejectRequest: no ProductAccount ever created for a rejected request');
    else
        fail('reject path left unexpected state', rejected);
    const portalReq = await subs.initiatePortalRedemption(investor.investorId, hfAccount.id, 50000000n);
    if (portalReq.requestType === 'REDEMPTION' && portalReq.status === 'PENDING') {
        ok('initiatePortalRedemption: creates a REDEMPTION request via the synthetic SYSTEM_PORTAL_CLIENT identity, same REDEMPTION_APPROVAL chain');
    }
    else {
        fail('initiatePortalRedemption did not produce the expected request', portalReq);
    }
    const systemPortalClientUser = await prisma.appUser.findUniqueOrThrow({ where: { email: 'system-portal-client@one17.test' } });
    if (portalReq.initiatedByUserId === systemPortalClientUser.id) {
        ok('initiatePortalRedemption: initiatedByUserId is the SYSTEM_PORTAL_CLIENT technical actor, never the investor (who has no AppUser row)');
    }
    else {
        fail('initiatePortalRedemption used the wrong initiator', portalReq);
    }
    const otherInvestor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-SUB-OTHER-${RUN}`, fullLegalName: 'Smoke Other Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `sub-other-${RUN}@one17.test`, contactPhone: '+2340000000022',
            onboardedByUserId: portoff.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    await expectReject('initiatePortalRedemption refused when the ProductAccount belongs to a DIFFERENT investor (cross-client-leak structurally blocked)', () => subs.initiatePortalRedemption(otherInvestor.investorId, hfAccount.id, 10000000n));
    const portalSubReq = await subs.initiatePortalSubscription(investor.investorId, hfProduct.code, 25000000n);
    if (portalSubReq.requestType === 'SUBSCRIPTION' && portalSubReq.status === 'PENDING') {
        ok('initiatePortalSubscription: creates a SUBSCRIPTION request via the reused SYSTEM_PAYMENT_GATEWAY identity, same SUBSCRIPTION_APPROVAL chain');
    }
    else {
        fail('initiatePortalSubscription did not produce the expected request', portalSubReq);
    }
    const systemPaymentGatewayUser = await prisma.appUser.findUniqueOrThrow({ where: { email: 'system-payment-gateway@one17.test' } });
    if (portalSubReq.initiatedByUserId === systemPaymentGatewayUser.id) {
        ok('initiatePortalSubscription: initiatedByUserId is the SYSTEM_PAYMENT_GATEWAY technical actor, never the investor (who has no AppUser row) and never SYSTEM_PORTAL_CLIENT (which lacks CAPITAL_PLACEMENT)');
    }
    else {
        fail('initiatePortalSubscription used the wrong initiator', portalSubReq);
    }
    await expectReject('initiatePortalSubscription refused for a product with no shariahApprovedAt, same gate as staff-initiated initiateSubscription', () => subs.initiatePortalSubscription(investor.investorId, unapprovedProduct.code, 10000000n));
    const viaInbox = await workflowInbox.approve(portalReq.workflowInstanceId, portmgr.id);
    const portalRedTxn = await prisma.txn.findFirst({ where: { productAccountId: hfAccount.id, txnType: 'REDEMPTION', amountKobo: 50000000n } });
    if (viaInbox?.status === 'APPROVED' && portalRedTxn) {
        ok("WorkflowInboxService.approve() dispatches 'REDEMPTION_APPROVAL' to SubscriptionService.approveRedemption -> payout Txn booked, not just a workflow-instance status flip");
    }
    else {
        fail('REDEMPTION_APPROVAL dispatch via the generic Workflow Inbox did not book the Txn', { viaInbox, portalRedTxn });
    }
    const investorNotification = await prisma.notification.findFirst({ where: { recipientInvestorId: investor.investorId, type: 'GENERIC' }, orderBy: { createdAt: 'desc' } });
    if (investorNotification?.title === 'Redemption approved') {
        ok('CHECK16 62(b): investor notification created on redemption approval — the portal notification centre has a real trigger, not an empty inbox');
    }
    else {
        fail('No investor notification was created for the approved redemption', investorNotification);
    }
    const portalReq2 = await subs.initiatePortalRedemption(investor.investorId, hfAccount.id, 20000000n);
    await workflowInbox.reject(portalReq2.workflowInstanceId, portmgr.id, 'Smoke reject via inbox.');
    const portalReq2After = await prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: portalReq2.id } });
    const declineNotification = await prisma.notification.findFirst({ where: { recipientInvestorId: investor.investorId, title: 'Redemption declined' } });
    if (portalReq2After.status === 'REJECTED' && declineNotification) {
        ok("WorkflowInboxService.reject() dispatches 'REDEMPTION_APPROVAL' to SubscriptionService.rejectRequest -> subscription_request.status REJECTED + investor notified");
    }
    else {
        fail('REDEMPTION_APPROVAL reject dispatch did not complete as expected', { portalReq2After, declineNotification });
    }
    const blockedSubReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 100000000n, effectiveDate, initiatedByUserId: portoff.id });
    await expectReject("WorkflowInboxService.approve() refuses 'SUBSCRIPTION_APPROVAL' with an honest error and points at the dedicated screen instead of silently skipping ProductAccount creation", () => workflowInbox.approve(blockedSubReq.workflowInstanceId, portmgr.id));
    const dedicatedApproved = await subs.approveSubscription({
        workflowInstanceId: blockedSubReq.workflowInstanceId,
        approverUserId: portmgr.id,
        journalInitiatorUserId: finadmin.id,
        thirdPartyPayer: { payerName: 'Third Party Payer Co', payerBankName: 'Test Bank', payerAccountNumber: '9998887776', declaredRelationship: 'Corporate sponsor' },
    });
    if (dedicatedApproved.status === 'APPROVED' && dedicatedApproved.resultProductAccountId) {
        const dedicatedTxn = await prisma.txn.findFirst({ where: { productAccountId: dedicatedApproved.resultProductAccountId, txnType: 'SUBSCRIPTION' } });
        const inflowLog = dedicatedTxn ? await prisma.paymentInflowLog.findFirst({ where: { txnId: dedicatedTxn.id } }) : null;
        if (inflowLog?.payerName === 'Third Party Payer Co' && inflowLog.complianceFlagged) {
            ok("CHECK16 62(m): the dedicated screen's approve path (journalInitiatorUserId + thirdPartyPayer) reaches SubscriptionService.approveSubscription and the third-party declaration is recorded on a compliance-flagged PaymentInflowLog (invariant 28a)");
        }
        else {
            fail('thirdPartyPayer declaration did not persist to PaymentInflowLog', { dedicatedTxn, inflowLog });
        }
    }
    else {
        fail('dedicated SUBSCRIPTION_APPROVAL approve path did not approve as expected', dedicatedApproved);
    }
    const dedicatedRejectReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: hfProduct.code, amountKobo: 50000000n, effectiveDate, initiatedByUserId: portoff.id });
    const dedicatedRejected = await subs.rejectRequest(dedicatedRejectReq.workflowInstanceId, portmgr.id, 'Dedicated screen smoke reject.');
    if (dedicatedRejected.status === 'REJECTED') {
        ok("CHECK16 62(m): the dedicated screen's reject path (SubscriptionService.rejectRequest) works for a SUBSCRIPTION request the same as it already does for REDEMPTION");
    }
    else {
        fail('dedicated SUBSCRIPTION_APPROVAL reject path did not reject as expected', dedicatedRejected);
    }
    const breakdown = await wm.getPrincipalProfitBreakdown(investor.investorId);
    const hfBreakdown = breakdown.accounts.find((a) => a.productAccountId === hfAccount.id);
    if (hfBreakdown && hfBreakdown.profitKobo !== null) {
        ok(`getPrincipalProfitBreakdown: UNIT_NAV holding computed a real profitKobo (${hfBreakdown.profitKobo}) from the published NAV, not left null`);
    }
    else {
        fail('getPrincipalProfitBreakdown did not compute a UNIT_NAV profit figure', breakdown);
    }
    const cio = await prisma.appUser.create({ data: { email: `sub-cio-${RUN}@one17.test`, displayName: 'sub-cio' } });
    await rbac.assignRole({ userId: cio.id, roleCode: 'CIO' });
    const sheetHfCode = `SMOKE-SUB-SHEET-HF-${RUN}`;
    const sheetHfProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-SHEET-HF-PROD-${RUN}`, name: 'Smoke Sheet HF Product', engineType: 'UNIT_NAV', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: sheetHfCode, name: 'Smoke Sheet HF', entityType: 'FUND', primaryBasis: 'AAOIFI', productCode: sheetHfProduct.code } });
    await prisma.chartOfAccount.createMany({ data: [
            { ledgerEntityCode: sheetHfCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 7' },
            { ledgerEntityCode: sheetHfCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 1' },
        ] });
    const { workflowInstance: sheetWf } = await prospectusSheets.proposeSheet({
        productCode: sheetHfProduct.code, initiatedByUserId: portmgr.id,
        minimumSubscriptionKobo: 5000000n, authorizedUnits: 10_000,
    });
    await prospectusSheets.approveSheetStep(sheetWf.id, cio.id);
    const { sheet: lockedSheet } = await prospectusSheets.approveSheetStep(sheetWf.id, mdceo.id);
    if (lockedSheet?.approvedByUserId)
        ok(`invariant 70(b): prospectus sheet v${lockedSheet.version} LOCKED for ${sheetHfProduct.code} (minSub=${lockedSheet.minimumSubscriptionKobo}, authorizedUnits=${lockedSheet.authorizedUnits})`);
    else
        fail('prospectus sheet failed to lock', lockedSheet);
    const sheetPoolCode = `SMOKE-SUB-SHEET-POOL-${RUN}`;
    const sheetPoolProduct = await prisma.product.create({
        data: { code: `SMOKE-SUB-SHEET-POOL-PROD-${RUN}`, name: 'Smoke Sheet Pool Product', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
    });
    await prisma.ledgerEntity.create({ data: { code: sheetPoolCode, name: 'Smoke Sheet Pool', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode: sheetPoolProduct.code } });
    await prisma.chartOfAccount.createMany({ data: [
            { ledgerEntityCode: sheetPoolCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 7' },
            { ledgerEntityCode: sheetPoolCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 1' },
        ] });
    const { workflowInstance: poolSheetWf } = await prospectusSheets.proposeSheet({
        productCode: sheetPoolProduct.code, initiatedByUserId: portmgr.id,
        minimumRedemptionKobo: 50000000n, poolTenorMonths: 12,
    });
    await prospectusSheets.approveSheetStep(poolSheetWf.id, cio.id);
    await prospectusSheets.approveSheetStep(poolSheetWf.id, mdceo.id);
    const sheetTestDate = new Date();
    await halalFund.publishAndLockNav({ ledgerEntityCode: sheetHfCode, valuationDate: sheetTestDate, launchDate: sheetTestDate, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01 });
    await expectReject('minimum subscription refused below the locked sheet threshold', () => subs.initiateSubscription({ investorId: investor.investorId, productCode: sheetHfProduct.code, amountKobo: 3000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id }));
    const withinCapReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: sheetHfProduct.code, amountKobo: 90000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id });
    const withinCapApproved = await subs.approveSubscription({ workflowInstanceId: withinCapReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id });
    if (withinCapApproved.status === 'APPROVED')
        ok('invariant 70(b): a subscription within the authorized-units cap (9,000 of 10,000) is approved normally');
    else
        fail('within-cap subscription unexpectedly refused', withinCapApproved);
    const overCapReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: sheetHfProduct.code, amountKobo: 20000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id });
    await expectReject('issuance beyond the authorized-units cap refused at approval', () => subs.approveSubscription({ workflowInstanceId: overCapReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id }));
    const sheetPoolReq = await subs.initiateSubscription({ investorId: investor.investorId, productCode: sheetPoolProduct.code, amountKobo: 2000000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id });
    await subs.approveSubscription({ workflowInstanceId: sheetPoolReq.workflowInstanceId, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id });
    await expectReject('minimum redemption refused below the locked sheet threshold', () => subs.initiateRedemption({ investorId: investor.investorId, productCode: sheetPoolProduct.code, amountKobo: 10000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id }));
    await expectReject('redemption refused within the pool lock-in window (early exit routes through the parked penalty-to-charity process, never a silent bypass)', () => subs.initiateRedemption({ investorId: investor.investorId, productCode: sheetPoolProduct.code, amountKobo: 60000000n, effectiveDate: sheetTestDate, initiatedByUserId: portoff.id }));
    const postLockInDate = new Date(sheetTestDate.getTime() + 396 * 24 * 60 * 60 * 1000);
    const postLockInReq = await subs.initiateRedemption({ investorId: investor.investorId, productCode: sheetPoolProduct.code, amountKobo: 60000000n, effectiveDate: postLockInDate, initiatedByUserId: portoff.id });
    if (postLockInReq.workflowInstanceId)
        ok('invariant 70(b): the SAME redemption succeeds once the pool lock-in window has genuinely elapsed (13 months later) -- the gate is time-bound, not a blanket refusal');
    else
        fail('post-lock-in redemption unexpectedly refused', postLockInReq);
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — SubscriptionService proven end-to-end across HF/POOL/MANDATE + redemption + adversarial cases (invariant 42a/c).`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    if (err instanceof subscription_types_1.SubscriptionServiceError)
        console.error('Unhandled service error:', err.message);
    else
        console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=subscription.smoke.js.map