"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
const product_service_1 = require("../src/product/product.service");
const parameters_service_1 = require("../src/parameters/parameters.service");
const subscription_service_1 = require("../src/subscription/subscription.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const halal_fund_engine_service_1 = require("../src/engine-halal-fund/halal-fund-engine.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const nd_mandate_engine_service_1 = require("../src/engine-nd-mandate/nd-mandate-engine.service");
const psr_waterfall_engine_service_1 = require("../src/engine-psr-waterfall/psr-waterfall-engine.service");
const counterparty_service_1 = require("../src/counterparty/counterparty.service");
const document_service_1 = require("../src/document/document.service");
const budget_activation_service_1 = require("../src/budget/budget-activation.service");
const procurement_service_1 = require("../src/procurement/procurement.service");
const pms_service_1 = require("../src/pms/pms.service");
const notification_service_1 = require("../src/notification/notification.service");
const attendance_service_1 = require("../src/attendance/attendance.service");
const complaint_service_1 = require("../src/complaint/complaint.service");
const marketing_service_1 = require("../src/marketing/marketing.service");
const stakeholder_reporting_service_1 = require("../src/stakeholder-reporting/stakeholder-reporting.service");
const period_service_1 = require("../src/period/period.service");
const bank_reconciliation_service_1 = require("../src/period/bank-reconciliation.service");
const letterhead_service_1 = require("../src/letterhead/letterhead.service");
const certificate_service_1 = require("../src/certificate/certificate.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
function park(label, reason) { console.log(`PARKED: ${label} — ${reason}`); }
async function step(label, fn) {
    try {
        await fn();
    }
    catch (err) {
        park(label, err instanceof Error ? err.message : String(err));
    }
}
function requireStaffPassword() {
    const value = process.env.WALKTHROUGH_STAFF_PASSWORD;
    if (!value) {
        console.error('FATAL: WALKTHROUGH_STAFF_PASSWORD is not set. See .env.example.');
        process.exit(1);
    }
    return value;
}
const STAFF_PASSWORD = requireStaffPassword();
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const products = new product_service_1.ProductService(prisma, audit, delegation);
    const parameters = new parameters_service_1.ParameterService(prisma, audit, delegation);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const halalFund = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const subscriptions = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const psrWaterfall = new psr_waterfall_engine_service_1.PsrWaterfallEngineService(prisma, audit, workflow);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const budgetActivation = new budget_activation_service_1.BudgetActivationService(prisma, audit, delegation, workflow);
    const procurement = new procurement_service_1.ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);
    const notification = new notification_service_1.NotificationService(prisma);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const complaints = new complaint_service_1.ComplaintService(prisma, audit, delegation);
    const marketing = new marketing_service_1.MarketingService(prisma, audit, workflow, delegation);
    const stakeholderReporting = new stakeholder_reporting_service_1.StakeholderReportingService(prisma, audit, delegation, workflow);
    const bankReconciliation = new bank_reconciliation_service_1.BankReconciliationService(prisma, audit, delegation);
    const period = new period_service_1.PeriodService(prisma, audit, delegation, workflow, bankReconciliation);
    const users = new Map();
    const makeStaff = async (label, displayName, email, roleCode) => {
        let user = await prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            user = await prisma.appUser.create({ data: { email, displayName } });
            await rbac.assignRole({ userId: user.id, roleCode });
            await authService.setPassword(user.id, STAFF_PASSWORD);
            ok(`created staff user ${displayName} <${email}> — ${roleCode}`);
        }
        else {
            const hasRole = await prisma.userRole.findFirst({ where: { userId: user.id, roleCode } });
            if (!hasRole) {
                await rbac.assignRole({ userId: user.id, roleCode });
                ok(`re-attached role ${roleCode} to existing user ${email}`);
            }
        }
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeStaff('sharia', 'Dr. Aisha Mohammed', 'aisha.mohammed@one17capital.com', 'SHARIAH_REV');
    await makeStaff('cio', 'Emeka Nwosu', 'emeka.nwosu@one17capital.com', 'CIO');
    await makeStaff('hradmin', 'Halima Garba', 'halima.garba@one17capital.com', 'HR_ADMIN');
    await makeStaff('cfo', 'Olumide Fashola', 'olumide.fashola@one17capital.com', 'CFO');
    await makeStaff('headsau', 'Ibrahim Yusuf II', 'ibrahim.yusuf.ii@one17capital.com', 'HEAD_SAU');
    await makeStaff('invcommittee', 'Grace Adeleke', 'grace.adeleke@one17capital.com', 'INV_COMMITTEE');
    await makeStaff('mktoff', 'Yemi Alabi', 'yemi.alabi@one17capital.com', 'MKT_OFF');
    await makeStaff('reloff', 'Kemi Adewale', 'kemi.adewale@one17capital.com', 'REL_OFF');
    await makeStaff('deptchief', 'Musa Danjuma', 'musa.danjuma@one17capital.com', 'DEPT_CHIEF');
    await makeStaff('pmssupervisor', 'Blessing Okoro', 'blessing.okoro@one17capital.com', 'PMS_SUPERVISOR');
    await makeStaff('legal', 'Femi Ogunleye', 'femi.ogunleye@one17capital.com', 'LEGAL');
    await makeStaff('corpservices', 'Ronke Bello', 'ronke.bello@one17capital.com', 'CORP_SERVICES');
    ok('§1 staff roster gap-fill complete (12 new roles provisioned)');
    await makeStaff('bd', 'Ngozi Eze', 'ngozi.eze@one17capital.com', 'BD');
    await makeStaff('compliance', 'Tunde Bakare', 'tunde.bakare@one17capital.com', 'COMPLIANCE');
    await makeStaff('ic1', 'Ibrahim Yusuf', 'ibrahim.yusuf@one17capital.com', 'SAU_INTERNAL_CONTROL');
    await makeStaff('riskofficer', 'Fatima Sule', 'fatima.sule@one17capital.com', 'RISK_DEPT');
    await makeStaff('portoff', 'Chidi Okafor', 'chidi.okafor@one17capital.com', 'PORT_OFF');
    await makeStaff('portmgr', 'Amaka Obi', 'amaka.obi@one17capital.com', 'PORT_MGR');
    await makeStaff('md', 'Amara Chukwu', 'amara.chukwu@one17capital.com', 'MD_CEO');
    await makeStaff('finadmin', 'Bola Adeyemi', 'bola.adeyemi@one17capital.com', 'FIN_ADMIN');
    await makeStaff('admin', 'Segun Afolabi', 'segun.afolabi@one17capital.com', 'SUPER_ADMIN');
    ok('§1b pre-existing Session 1-3 staff re-attached to this run\'s user map');
    const PRODUCTS_TO_ACTIVATE = [
        { code: 'ONE17-HALAL-FUND', ssbRef: 'SSB-WALKTHROUGH-DEMO-01', isPsr: false },
        { code: 'ONE17-MUDARABAH-POOL-1', ssbRef: 'SSB-WALKTHROUGH-DEMO-02', isPsr: true },
        { code: 'ONE17-ND-MANDATE-1', ssbRef: 'SSB-WALKTHROUGH-DEMO-03', isPsr: false },
    ];
    for (const p of PRODUCTS_TO_ACTIVATE) {
        const product = await prisma.product.findUniqueOrThrow({ where: { code: p.code } });
        if (!product.shariahApprovedAt) {
            await products.approveProductShariah({ productCode: p.code, ssbResolutionRef: p.ssbRef, approvedByUserId: id('sharia') });
            ok(`Shariah approval recorded for ${p.code} (${p.ssbRef}, walkthrough SHARIAH_REV user)`);
        }
        else {
            ok(`${p.code} already has a Shariah approval on file (${product.shariahApprovalRef}) — not overwritten`);
        }
        const existingParams = await prisma.productParameters.findFirst({ where: { productCode: p.code } });
        if (!existingParams) {
            await parameters.setPoolParameters({
                productCode: p.code,
                createdByUserId: id('admin'),
                approvedByUserId: id('md'),
                ...(p.isPsr ? { psrPoolMudaribShare: 0.4, surplusInvestorShare: 0.4, surplusMudaribShare: 0.6 } : {}),
            });
            ok(`governed parameter version v1 created (SUPER_ADMIN) and approved (MD/CEO) for ${p.code}`);
        }
        else {
            ok(`${p.code} already has a parameter version on file (v${existingParams.version}) — not re-versioned`);
        }
        const refreshed = await prisma.product.findUniqueOrThrow({ where: { code: p.code } });
        if (refreshed.status !== 'ACTIVE') {
            await parameters.activateProduct(p.code, id('md'));
            ok(`${p.code} activated: DRAFT -> ACTIVE`);
        }
        else {
            ok(`${p.code} already ACTIVE`);
        }
    }
    ok('§2 product Shariah gate + activation complete (3/3 products ACTIVE, Shariah-approved)');
    for (const link of [
        { ledgerEntityCode: 'ONE17-HALAL-FUND-01', productCode: 'ONE17-HALAL-FUND' },
        { ledgerEntityCode: 'ONE17-MUDARABAH-POOL-01', productCode: 'ONE17-MUDARABAH-POOL-1' },
    ]) {
        const entity = await prisma.ledgerEntity.findUnique({ where: { code: link.ledgerEntityCode } });
        if (entity && entity.productCode !== link.productCode) {
            await prisma.ledgerEntity.update({ where: { code: link.ledgerEntityCode }, data: { productCode: link.productCode } });
            await audit.record({
                actorUserId: id('admin'),
                action: 'UPDATE',
                entityType: 'ledger_entity',
                entityId: link.ledgerEntityCode,
                before: { productCode: entity.productCode },
                after: { productCode: link.productCode },
            });
            ok(`ledger_entity ${link.ledgerEntityCode}.product_code backfilled: ${entity.productCode ?? 'NULL'} -> ${link.productCode} (CEO-authorized 8-Jul-2026, audited)`);
        }
        else if (entity) {
            ok(`ledger_entity ${link.ledgerEntityCode}.product_code already correct (${entity.productCode})`);
        }
        else {
            park(`ledger_entity ${link.ledgerEntityCode}`, 'no such ledger_entity on this database -- product linkage skipped');
        }
    }
    ok('§2b ledger_entity/product linkage backfill complete');
    const HF_LEDGER_CODE = 'ONE17-HALAL-FUND-01';
    const HF_PRODUCT_CODE = 'ONE17-HALAL-FUND';
    const POOL_PRODUCT_CODE = 'ONE17-MUDARABAH-POOL-1';
    const HF_LAUNCH_DATE = new Date('2025-01-06T00:00:00Z');
    const NAV_DATES = [
        new Date('2026-02-02T00:00:00Z'),
        new Date('2026-03-02T00:00:00Z'),
        new Date('2026-04-01T00:00:00Z'),
        new Date('2026-05-01T00:00:00Z'),
        new Date('2026-06-01T00:00:00Z'),
    ];
    for (const valuationDate of NAV_DATES) {
        const existing = await prisma.navRecord.findUnique({
            where: { ledgerEntityCode_valuationDate: { ledgerEntityCode: HF_LEDGER_CODE, valuationDate } },
        });
        if (!existing) {
            const nav = await halalFund.publishAndLockNav({
                ledgerEntityCode: HF_LEDGER_CODE, valuationDate, launchDate: HF_LAUNCH_DATE, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01,
            });
            ok(`Halal Fund NAV published for ${valuationDate.toISOString().slice(0, 10)}: NAV/unit ${nav.navPerUnit}`);
        }
        else {
            ok(`Halal Fund NAV for ${valuationDate.toISOString().slice(0, 10)} already on file — not republished`);
        }
    }
    ok('§3a NAV time-series depth complete (5 additional monthly points, Feb-Jun 2026)');
    const chief = await prisma.investor.findUniqueOrThrow({ where: { contactEmail: 'chief.adaeze.nwankwo@example.com' } });
    const ltv = await prisma.investor.findUniqueOrThrow({ where: { contactEmail: 'info@lagostradingventures.example.com' } });
    const findOrInitiateSubscription = async (investorId, productCode, amountKobo, effectiveDate) => {
        let request = await prisma.subscriptionRequest.findFirst({ where: { investorId, productCode, effectiveDate, requestType: 'SUBSCRIPTION' } });
        if (!request) {
            request = await subscriptions.initiateSubscription({ investorId, productCode, amountKobo, effectiveDate, initiatedByUserId: id('portoff') });
            ok(`subscription initiated: ${investorId} -> ${productCode} for ${effectiveDate.toISOString().slice(0, 10)}`);
        }
        return request;
    };
    const findOrInitiateRedemption = async (investorId, productCode, amountKobo, effectiveDate) => {
        let request = await prisma.subscriptionRequest.findFirst({ where: { investorId, productCode, effectiveDate, requestType: 'REDEMPTION' } });
        if (!request) {
            request = await subscriptions.initiateRedemption({ investorId, productCode, amountKobo, effectiveDate, initiatedByUserId: id('portoff') });
            ok(`redemption initiated: ${investorId} -> ${productCode} for ${effectiveDate.toISOString().slice(0, 10)}`);
        }
        return request;
    };
    const hfTopUp = await findOrInitiateSubscription(chief.investorId, HF_PRODUCT_CODE, 200000000n, NAV_DATES[4]);
    if (hfTopUp.status === 'PENDING') {
        await step(`approve subscription: chief -> ${HF_PRODUCT_CODE}`, async () => {
            await subscriptions.approveSubscription({ workflowInstanceId: hfTopUp.workflowInstanceId, approverUserId: id('portmgr'), journalInitiatorUserId: id('finadmin') });
            ok(`subscription APPROVED + journal posting requested: chief -> ${HF_PRODUCT_CODE}`);
        });
    }
    else {
        ok(`chief -> ${HF_PRODUCT_CODE} subscription already ${hfTopUp.status}`);
    }
    const poolFresh = await findOrInitiateSubscription(ltv.investorId, POOL_PRODUCT_CODE, 500000000n, new Date('2026-06-01T00:00:00Z'));
    if (poolFresh.status === 'PENDING') {
        await step(`approve subscription: ltv -> ${POOL_PRODUCT_CODE}`, async () => {
            await subscriptions.approveSubscription({ workflowInstanceId: poolFresh.workflowInstanceId, approverUserId: id('portmgr'), journalInitiatorUserId: id('finadmin') });
            ok(`subscription APPROVED + journal posting requested: ltv -> ${POOL_PRODUCT_CODE}`);
        });
    }
    else {
        ok(`ltv -> ${POOL_PRODUCT_CODE} subscription already ${poolFresh.status}`);
    }
    await findOrInitiateSubscription(ltv.investorId, HF_PRODUCT_CODE, 150000000n, NAV_DATES[4]);
    await findOrInitiateSubscription(chief.investorId, POOL_PRODUCT_CODE, 300000000n, new Date('2026-06-15T00:00:00Z'));
    ok('§3b subscriptions: 2 APPROVED through to POSTED-pending journal, 2 left PENDING for PORT_MGR review');
    const hfRedeem = await findOrInitiateRedemption(chief.investorId, HF_PRODUCT_CODE, 50000000n, new Date('2026-06-01T00:00:00Z'));
    if (hfRedeem.status === 'PENDING') {
        await step(`approve redemption: chief <- ${HF_PRODUCT_CODE}`, async () => {
            await subscriptions.approveRedemption({ workflowInstanceId: hfRedeem.workflowInstanceId, approverUserId: id('portmgr') });
            ok(`redemption APPROVED: chief <- ${HF_PRODUCT_CODE}`);
        });
    }
    else {
        ok(`chief <- ${HF_PRODUCT_CODE} redemption already ${hfRedeem.status}`);
    }
    await findOrInitiateRedemption(ltv.investorId, POOL_PRODUCT_CODE, 100000000n, new Date('2026-06-20T00:00:00Z'));
    ok('§3c redemptions: 1 APPROVED, 1 left PENDING for PORT_MGR review');
    const ND_PRODUCT_CODE = 'ONE17-ND-MANDATE-1';
    await step('ND mandate subscription (ltv)', async () => {
        let ndEntity = await prisma.ledgerEntity.findFirst({ where: { productCode: ND_PRODUCT_CODE } });
        if (!ndEntity) {
            const unlinkedMandate = await prisma.ledgerEntity.findFirst({ where: { entityType: 'MANDATE', productCode: null } });
            if (unlinkedMandate) {
                await prisma.ledgerEntity.update({ where: { code: unlinkedMandate.code }, data: { productCode: ND_PRODUCT_CODE } });
                await audit.record({
                    actorUserId: id('admin'), action: 'UPDATE', entityType: 'ledger_entity', entityId: unlinkedMandate.code,
                    before: { productCode: null }, after: { productCode: ND_PRODUCT_CODE },
                });
                ok(`ledger_entity ${unlinkedMandate.code}.product_code backfilled: NULL -> ${ND_PRODUCT_CODE} (CEO-authorized 8-Jul-2026, audited)`);
                ndEntity = await prisma.ledgerEntity.findUniqueOrThrow({ where: { code: unlinkedMandate.code } });
            }
            else {
                ndEntity = await ledger.createLedgerEntity({
                    code: 'ONE17-ND-MANDATE-01', name: 'One17 ND Mandate', entityType: 'MANDATE', primaryBasis: 'AAOIFI',
                    productCode: ND_PRODUCT_CODE, createdByUserId: id('admin'),
                });
                ok(`ledger_entity ${ndEntity.code} created via governed LedgerService.createLedgerEntity (SUPER_ADMIN), linked to ${ND_PRODUCT_CODE}`);
            }
        }
        const ndSub = await findOrInitiateSubscription(ltv.investorId, ND_PRODUCT_CODE, 400000000n, new Date('2026-06-10T00:00:00Z'));
        if (ndSub.status === 'PENDING') {
            const approved = await subscriptions.approveSubscription({ workflowInstanceId: ndSub.workflowInstanceId, approverUserId: id('portmgr'), journalInitiatorUserId: id('finadmin') });
            ok(`ND mandate subscription APPROVED for ltv (mandate ${approved.resultNdMandateAccountId})`);
            if (approved.resultNdMandateAccountId) {
                await step('ND mandate distribution', async () => {
                    const dist = await ndMandate.runNdMandateDistribution(approved.resultNdMandateAccountId, 'ND_MUDARABAH', 30000000n, id('portoff'));
                    await workflow.approveNextStep(dist.workflowInstanceId, id('portmgr'));
                    ok('ND mandate distribution APPROVED (PORT_OFF initiated, PORT_MGR approved)');
                });
            }
        }
        else {
            ok(`ltv -> ${ND_PRODUCT_CODE} subscription already ${ndSub.status}`);
        }
    });
    await step('second Halal Fund distribution (time-series depth)', async () => {
        const hfAccounts = await prisma.productAccount.findMany({ where: { investorId: chief.investorId, productCode: HF_PRODUCT_CODE, status: 'ACTIVE' } });
        const existingDist = await prisma.distribution.findFirst({ where: { productCode: HF_PRODUCT_CODE, periodEnd: NAV_DATES[4] } });
        if (!existingDist && hfAccounts.length > 0) {
            const dist2 = await halalFund.runDistribution({
                ledgerEntityCode: HF_LEDGER_CODE, productCode: HF_PRODUCT_CODE, periodStart: NAV_DATES[1], periodEnd: NAV_DATES[4], recordDate: NAV_DATES[4],
                method: 'INCOME', incomeBasisKobo: 600000000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
                navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n, exDivPricePerUnit: null,
                participants: hfAccounts.map((a) => ({ productAccountId: a.id, unitsAtRecord: Number(a.unitsHeld ?? 0), isDrip: false, cashPaidKobo: 0n })),
                createdByUserId: id('portoff'),
            });
            await halalFund.approveDistributionDeclaration(dist2.workflowInstanceId, id('md'));
            await halalFund.payDistribution(dist2.distributionId, id('md'));
            ok('second Halal Fund distribution declared + PAID (time-series depth)');
        }
        else {
            ok('second Halal Fund distribution already on file or no eligible account — not repeated');
        }
    });
    await step('second Mudarabah Pool waterfall distribution (time-series depth)', async () => {
        const poolAccounts = await prisma.productAccount.findMany({ where: { investorId: ltv.investorId, productCode: POOL_PRODUCT_CODE, status: 'ACTIVE' } });
        const existingRun = await prisma.distribution.findFirst({ where: { productCode: POOL_PRODUCT_CODE, periodEnd: new Date('2026-06-30') } });
        if (!existingRun && poolAccounts.length > 0) {
            const run2 = await psrWaterfall.runWaterfallDistribution({
                ledgerEntityCode: 'ONE17-MUDARABAH-POOL-01', productCode: POOL_PRODUCT_CODE,
                periodStart: new Date('2026-06-01'), periodEnd: new Date('2026-06-30'), recordDate: new Date('2026-06-30'),
                poolProfitKobo: 25000000n, betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
                participants: poolAccounts.map((a) => ({ productAccountId: a.id, capitalKobo: a.principalOrCommittedKobo, targetRatePct: 16, activeDays: 30, kycValid: true })),
                hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
            });
            await workflow.approveNextStep(run2.workflowInstanceId, id('portmgr'));
            ok('second Mudarabah Pool PSR-waterfall distribution computed + APPROVED (time-series depth)');
        }
        else {
            ok('second Mudarabah Pool distribution already on file or no eligible account — not repeated');
        }
    });
    ok('§4 ND mandates + distributions complete');
    await step('facility application + investment memo chain (Sahel)', async () => {
        const sahel = await prisma.counterparty.findUniqueOrThrow({ where: { contactEmail: 'treasury@sahelagroprocessing.example.com' } });
        let application = await prisma.counterpartyFacilityApplication.findFirst({ where: { counterpartyId: sahel.id } });
        if (!application) {
            application = await counterparties.submitFacilityApplication({ counterpartyId: sahel.id, requestedAmountKobo: 15000000000n, purpose: 'Q3-Q4 2026 grain aggregation working capital, second tranche' });
            ok(`facility application submitted for ${sahel.legalName} (DRAFT)`);
        }
        else {
            ok(`facility application already on file for ${sahel.legalName} (idempotent re-run)`);
        }
        let memo = await prisma.investmentMemo.findFirst({ where: { facilityApplicationId: application.id } });
        if (!memo) {
            memo = await counterparties.draftInvestmentMemo({
                facilityApplicationId: application.id, dealSummary: 'Second working-capital tranche for grain aggregation, off-take-backed repayment.',
                structureType: 'MURABAHA', amountKobo: 15000000000n, tenorMonths: 9, targetReturnPct: 14.5,
                riskNotes: 'Existing facility performing to schedule; exposure remains within Risk-approved limit.',
                shariahNotes: 'Murabaha structure, same certified template as the first facility (SSB-CERT-2026-014).',
                collateralNotes: 'Assignment of off-take proceeds, same as first tranche.',
            }, id('portoff'));
            await counterparties.submitInvestmentMemoForCioApproval(memo.id, id('portoff'));
            ok('investment memo drafted + submitted for CIO approval chain');
        }
        else {
            ok('investment memo already on file (idempotent re-run)');
        }
        const freshMemo = await prisma.investmentMemo.findUniqueOrThrow({ where: { id: memo.id } });
        if (freshMemo.workflowInstanceId && freshMemo.status !== 'CIO_APPROVED' && freshMemo.status !== 'CIO_REJECTED') {
            await step('  memo PM validation step', async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, id('portmgr')); ok('  memo PM (PORT_MGR) validation step APPROVED'); });
            await step('  memo CIO approval step', async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, id('cio')); ok('  memo CIO approval step APPROVED'); });
            await step('  memo IC approval step (4-step chain only)', async () => { await counterparties.approveInvestmentMemoAsCommittee(freshMemo.workflowInstanceId, id('invcommittee'), 'IC-RES-2026-018'); ok('  memo Investment Committee step APPROVED (IC-RES-2026-018)'); });
            await step('  memo MD approval step (4-step chain only)', async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, id('md')); ok('  memo MD/CEO step APPROVED'); });
        }
        else {
            ok(`memo already at terminal state (${freshMemo.status}) — approval steps not repeated`);
        }
        const checklist = await documents.getChecklistStatus('FACILITY_APPLICATION', 'counterparty_facility_application', application.id);
        for (const documentType of checklist.missing) {
            await documents.attach({ entityType: 'counterparty_facility_application', entityId: application.id, documentType, fileReference: `s3://walkthrough-demo/sahel-facility-2/${documentType.toLowerCase()}.pdf` }, id('finadmin'));
            ok(`document attached: ${documentType} (demo reference)`);
        }
        const refreshedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
        if (refreshedApp.status === 'DRAFT') {
            await counterparties.reviewAndSubmitFacilityApplication(application.id, id('portoff'));
            ok('facility application DRAFT -> SUBMITTED (memo CIO-approved, doc checklist clear)');
        }
        const submittedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
        if (submittedApp.workflowInstanceId && submittedApp.status === 'SUBMITTED') {
            await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, id('riskofficer'));
            await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, id('bd'));
            await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, id('finadmin'));
            await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, id('compliance'));
            ok('facility application 4-officer review chain APPROVED (Risk -> BD -> Finance -> Compliance)');
            await counterparties.markFacilityApplicationDisbursed(application.id, id('portoff'));
            await counterparties.recordFundAccountingTerms(application.id, 14.5, id('finadmin'));
            ok('facility application marked DISBURSED, Fund Accounting terms recorded (14.5% targeted return)');
        }
        else {
            ok(`facility application at ${submittedApp.status} — review chain not repeated`);
        }
    });
    ok('§5 counterparty facility application + investment memo chain complete');
    const COMPANY_CODE = 'COMPANY';
    await step('requisitions + procurement payment batch', async () => {
        const opexLine = await prisma.budgetLine.findFirstOrThrow({ where: { ledgerEntityCode: COMPANY_CODE, budgetLineGroup: 'Opex' } });
        let approvedReqEncumbrance = await prisma.encumbrance.findFirst({ where: { budgetLineId: opexLine.id, description: { startsWith: 'Q3 2026 office supplies' } } });
        if (!approvedReqEncumbrance) {
            const { workflowInstance } = await budgetActivation.requestEncumbrance(opexLine.id, 80000000n, 'Q3 2026 office supplies — walkthrough requisition', id('finadmin'));
            await workflow.approveNextStep(workflowInstance.id, id('ic1'));
            await workflow.approveNextStep(workflowInstance.id, id('md'));
            approvedReqEncumbrance = await prisma.encumbrance.findFirstOrThrow({ where: { budgetLineId: opexLine.id, description: { startsWith: 'Q3 2026 office supplies' } } });
            ok('requisition 1 APPROVED end-to-end (SAU Internal Control -> CEO)');
        }
        else {
            ok('requisition 1 already on file (idempotent re-run)');
        }
        const pendingReq = await prisma.encumbrance.findFirst({ where: { budgetLineId: opexLine.id, description: { startsWith: 'Q4 2026 IT equipment' } } });
        if (!pendingReq) {
            await budgetActivation.requestEncumbrance(opexLine.id, 120000000n, 'Q4 2026 IT equipment — walkthrough requisition', id('finadmin'));
            ok('requisition 2 initiated, left PENDING in SAU Internal Control\'s inbox (genuine intermediate state)');
        }
        else {
            ok('requisition 2 already on file (idempotent re-run)');
        }
        for (const acc of [
            { code: '5080', name: 'Opex Expense (Procurement)', type: 'EXPENSE' },
            { code: '2085', name: 'Accounts Payable', type: 'LIABILITY' },
            { code: '1170', name: 'Fixed Asset (CAPEX, Procurement)', type: 'ASSET' },
        ]) {
            await prisma.chartOfAccount.upsert({
                where: { ledgerEntityCode_accountCode: { ledgerEntityCode: COMPANY_CODE, accountCode: acc.code } },
                create: { ledgerEntityCode: COMPANY_CODE, accountCode: acc.code, accountName: acc.name, accountType: acc.type, aaoifiRef: 'N/A', ifrsRef: 'IAS 1' },
                update: {},
            });
        }
        let vendor = await prisma.vendor.findFirst({ where: { vendorCode: 'VEND-WT-001' } });
        if (!vendor) {
            vendor = await procurement.createVendor({ vendorCode: 'VEND-WT-001', legalName: 'Apex Office Supplies Ltd', rcNumber: 'RC3012456', tin: 'TIN-0398234567', bankName: 'Zenith Bank', bankAccountNumber: '1019284756', bankAccountName: 'Apex Office Supplies Ltd', createdByUserId: id('corpservices') });
            ok(`vendor registered: ${vendor.legalName}`);
        }
        let po = await prisma.purchaseOrder.findFirst({ where: { poNumber: 'PO-WT-2026-001' } });
        if (!po) {
            po = await procurement.createPurchaseOrder({
                poNumber: 'PO-WT-2026-001', vendorId: vendor.id, encumbranceId: approvedReqEncumbrance.id, ledgerEntityCode: COMPANY_CODE,
                description: 'Q3 2026 office supplies', lines: [{ description: 'Stationery + consumables', quantity: 1, unitPriceKobo: 80000000n }],
                createdByUserId: id('corpservices'),
            });
            await procurement.issuePurchaseOrder(po.id, id('corpservices'));
            await procurement.recordGoodsReceipt(po.id, 80000000n, 'Full delivery received', id('corpservices'));
            ok('purchase order created, issued, goods receipted');
        }
        let invoice = await prisma.vendorInvoice.findFirst({ where: { vendorId: vendor.id, invoiceNumber: 'INV-APEX-2026-014' } });
        if (!invoice) {
            invoice = await procurement.recordVendorInvoice(po.id, vendor.id, 'INV-APEX-2026-014', 80000000n, new Date('2026-06-25'), id('corpservices'));
            ok('vendor invoice recorded (PENDING_MATCH)');
        }
        if (invoice.status === 'PENDING_MATCH') {
            await procurement.matchInvoice({ invoiceId: invoice.id, actorUserId: id('corpservices') });
            ok('invoice 3-way matched');
            invoice = await prisma.vendorInvoice.findUniqueOrThrow({ where: { id: invoice.id } });
        }
        const existingBatch = await prisma.paymentBatch.findFirst({ where: { batchNumber: 'PB-WT-2026-001' } });
        if (!existingBatch && invoice.status === 'MATCHED') {
            const created = await procurement.createPaymentBatch('PB-WT-2026-001', COMPANY_CODE, [invoice.id], id('corpservices'));
            await procurement.approvePaymentBatch(created.workflowInstance.id, id('finadmin'));
            ok('payment batch APPROVED — invoice PAID, PROCUREMENT_PAYMENT_MADE journal posted');
        }
        else if (existingBatch) {
            ok(`payment batch already on file (status=${existingBatch.status})`);
        }
    });
    await step('three-hand payroll chain', async () => {
        await pms.seedReferenceData();
        let taxConfig = await prisma.taxRuleConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!taxConfig) {
            const draft = await prisma.taxRuleConfig.findFirstOrThrow({ where: { status: 'DRAFT' }, orderBy: { version: 'desc' } });
            taxConfig = await pms.validateTaxRuleConfig(draft.version, id('finadmin'));
            ok(`tax_rule_config v${taxConfig.version} validated ACTIVE (FIN_ADMIN)`);
        }
        const payrollAccounts = [
            { code: '2100', name: 'PAYE Payable', type: 'LIABILITY' },
            { code: '2110', name: 'Pension Payable', type: 'LIABILITY' },
            { code: '2120', name: 'NHF Payable', type: 'LIABILITY' },
            { code: '2200', name: 'Net Pay Payable', type: 'LIABILITY' },
            { code: '6050', name: 'Incentive Expense', type: 'EXPENSE' },
        ];
        for (const acc of payrollAccounts) {
            await prisma.chartOfAccount.upsert({
                where: { ledgerEntityCode_accountCode: { ledgerEntityCode: COMPANY_CODE, accountCode: acc.code } },
                create: { ledgerEntityCode: COMPANY_CODE, accountCode: acc.code, accountName: acc.name, accountType: acc.type, aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
                update: {},
            });
        }
        const walkthroughPos = await prisma.position.upsert({
            where: { title_orgUnitCode: { title: 'Walkthrough Demo Officer', orgUnitCode: 'FINCON' } },
            create: { title: 'Walkthrough Demo Officer', orgUnitCode: 'FINCON', cadre: 'Officer', notch: 1 },
            update: {},
        });
        const walkthroughMgrPos = await prisma.position.upsert({
            where: { title_orgUnitCode: { title: 'Walkthrough Demo Manager', orgUnitCode: 'FINCON' } },
            create: { title: 'Walkthrough Demo Manager', orgUnitCode: 'FINCON', cadre: 'Manager', notch: 1 },
            update: {},
        });
        let officerEmp = await prisma.employee.findFirst({ where: { surname: 'Nnamdi', firstName: 'Chukwuemeka' } });
        if (!officerEmp) {
            officerEmp = await prisma.employee.create({ data: { surname: 'Nnamdi', firstName: 'Chukwuemeka', positionId: walkthroughPos.id, orgUnitCode: 'FINCON', hireDate: new Date('2025-03-01'), appUserId: id('finadmin') } });
        }
        else if (officerEmp.appUserId !== id('finadmin')) {
            officerEmp = await prisma.employee.update({ where: { id: officerEmp.id }, data: { appUserId: id('finadmin') } });
            ok('officer employee appUserId corrected: REL_OFF -> FIN_ADMIN (PMS_SELF_SCORE holder)');
        }
        let managerEmp = await prisma.employee.findFirst({ where: { surname: 'Balogun', firstName: 'Folasade' } });
        if (!managerEmp) {
            managerEmp = await prisma.employee.create({ data: { surname: 'Balogun', firstName: 'Folasade', positionId: walkthroughMgrPos.id, orgUnitCode: 'FINCON', hireDate: new Date('2024-09-15'), appUserId: id('mktoff') } });
        }
        ok('2 demo employees on file (Officer + Manager cadre, FINCON)');
        const EMOLUMENT_ROWS = [
            { cadre: 'Officer', notch: 1, component: 'Basic Salary', componentType: 'SALARY', annualAmountKobo: 480000000n },
            { cadre: 'Officer', notch: 1, component: 'Housing Allowance', componentType: 'ALLOWANCE', annualAmountKobo: 120000000n },
            { cadre: 'Manager', notch: 1, component: 'Basic Salary', componentType: 'SALARY', annualAmountKobo: 840000000n },
            { cadre: 'Manager', notch: 1, component: 'Housing Allowance', componentType: 'ALLOWANCE', annualAmountKobo: 210000000n },
        ];
        for (const row of EMOLUMENT_ROWS) {
            const existing = await prisma.emolumentStructure.findFirst({ where: { cadre: row.cadre, notch: row.notch, component: row.component, status: 'ACTIVE' } });
            if (!existing) {
                const proposed = await pms.proposeEmolumentComponent({ ...row, taxable: true, effectiveFrom: new Date('2026-01-01'), proposedByUserId: id('finadmin') });
                await pms.approveEmolumentComponent(proposed.workflowInstance.id, id('cfo'));
            }
        }
        ok('4 emolument structure rows ACTIVE (FIN_ADMIN proposed, CFO approved — maker != checker)');
        let run = await prisma.payrollRun.findFirst({ where: { periodMonth: 8, periodYear: 2026, ledgerEntityCode: COMPANY_CODE } });
        if (!run) {
            run = await pms.runPayroll({
                periodMonth: 8, periodYear: 2026, ledgerEntityCode: COMPANY_CODE,
                drStaffCostAccountCode: '6000', drIncentiveExpenseAccountCode: '6050',
                crPayePayableAccountCode: '2100', crPensionPayableAccountCode: '2110', crNhfPayableAccountCode: '2120', crNetPayPayableAccountCode: '2200',
                actorUserId: id('hradmin'),
            });
            ok('August 2026 payroll run prepared (HR_ADMIN, maker)');
        }
        const freshRun = await prisma.payrollRun.findUniqueOrThrow({ where: { id: run.id } });
        if (freshRun.status !== 'POSTED' && freshRun.workflowInstanceId) {
            const financeStep = await ledger.approveJournalPosting({ workflowInstanceId: freshRun.workflowInstanceId, approverUserId: id('finadmin') });
            if (financeStep)
                ok('  unexpected: single-approval posting — check scenario wiring');
            else
                ok('  payroll finance review step APPROVED (FIN_ADMIN)');
            const ceoStep = await ledger.approveJournalPosting({ workflowInstanceId: freshRun.workflowInstanceId, approverUserId: id('md') });
            if (ceoStep) {
                await pms.markPayrollRunPosted(run.id, id('md'));
                ok('  payroll CEO approval step APPROVED (MD/CEO) — journal POSTED, payroll_run marked POSTED');
            }
        }
        else {
            ok(`August 2026 payroll run already ${freshRun.status}`);
        }
    });
    ok('§6 requisitions + payment batch + three-hand payroll complete');
    await step('PMS annual appraisal scoring chain', async () => {
        let cycle = await prisma.appraisalCycle.findFirst({ where: { cycleType: 'ANNUAL_APPRAISAL', orgUnitCode: 'FINCON', periodStart: new Date('2026-01-01') } });
        if (!cycle) {
            cycle = await pms.startCycle({ cycleType: 'ANNUAL_APPRAISAL', orgUnitCode: 'FINCON', periodStart: new Date('2026-01-01'), periodEnd: new Date('2026-12-31'), actorUserId: id('hradmin') });
            await pms.openForScoring(cycle.id, id('hradmin'));
            ok('FY2026 annual appraisal cycle opened for scoring (FINCON)');
        }
        const officer = await prisma.employee.findFirstOrThrow({ where: { surname: 'Nnamdi', firstName: 'Chukwuemeka' } });
        const kpis = await prisma.kpiDefinition.findMany({ take: 2, orderBy: { kraCode: 'asc' } });
        let submission = await prisma.employeeScoreSubmission.findFirst({ where: { appraisalCycleId: cycle.id, employeeId: officer.id } });
        if (!submission && kpis.length > 0) {
            submission = await pms.submitSelfScore({ cycleId: cycle.id, employeeId: officer.id, scores: kpis.map((k) => ({ kpiDefinitionId: k.id, selfScorePct: 82 })), actorUserId: id('finadmin') });
            ok('self-score submitted (Chukwuemeka Nnamdi, via FIN_ADMIN login)');
        }
        if (submission) {
            let freshSub = await prisma.employeeScoreSubmission.findUniqueOrThrow({ where: { id: submission.id } });
            if (freshSub.status === 'SELF_SCORED' && !freshSub.workflowInstanceId) {
                const resumedWf = await workflow.initiate({
                    workflowTypeCode: 'PMS_SCORE_VALIDATION', entityType: 'employee_score_submission', entityId: freshSub.id,
                    initiatedByUserId: id('finadmin'), scenario: 'STANDARD',
                });
                freshSub = await prisma.employeeScoreSubmission.update({ where: { id: freshSub.id }, data: { workflowInstanceId: resumedWf.id } });
                ok('dangling self-score submission resumed (CEO-authorized 8-Jul-2026): workflow initiated with corrected FIN_ADMIN actor');
            }
            if (freshSub.status !== 'VALIDATED' && freshSub.workflowInstanceId) {
                await step('  supervisor validation step', async () => { await pms.validateScoreStep(freshSub.workflowInstanceId, id('pmssupervisor')); ok('  PMS_SUPERVISOR_VALIDATION step APPROVED'); });
                await step('  SAU QA step', async () => { await pms.validateScoreStep(freshSub.workflowInstanceId, id('ic1')); ok('  PMS_SAU_QA step APPROVED'); });
                await step('  Chief signoff step', async () => { await pms.validateScoreStep(freshSub.workflowInstanceId, id('deptchief')); ok('  PMS_CHIEF_SIGNOFF step APPROVED — submission VALIDATED'); });
            }
        }
        const freshCycle = await prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycle.id } });
        if (freshCycle.status === 'SCORING') {
            await step('  cycle submitted for CEO approval', async () => {
                const cycleWf = await pms.submitCycleForApproval(cycle.id, id('hradmin'));
                await pms.approveCycle(cycleWf.id, id('md'));
                ok('  FY2026 appraisal cycle APPROVED (MD/CEO) — cycle status VALIDATION -> APPROVED');
            });
        }
        else {
            ok(`appraisal cycle already ${freshCycle.status}`);
        }
    });
    await step('portal enquiries + complaints', async () => {
        let complaint = await complaints.listForInvestor(chief.investorId);
        if (complaint.length === 0) {
            const raised = await complaints.raiseFromPortal({ investorId: chief.investorId, category: 'STATEMENT_QUERY', description: 'Requesting clarification on the June 2026 distribution calculation shown on my statement.' });
            await complaints.assignOwner({ complaintId: raised.id, ownerUserId: id('reloff'), actorUserId: id('compliance') });
            await complaints.resolve({ complaintId: raised.id, resolutionNotes: 'Distribution basis explained (INCOME method, 80% distributable pct per governed parameters); investor confirmed satisfied.', actorUserId: id('compliance') });
            await complaints.close(raised.id, id('compliance'));
            ok('investor complaint raised -> assigned -> RESOLVED -> CLOSED');
        }
        else {
            ok('investor complaint already on file (idempotent re-run)');
        }
        const sahel = await prisma.counterparty.findUniqueOrThrow({ where: { contactEmail: 'treasury@sahelagroprocessing.example.com' } });
        const cpComplaints = await complaints.listForCounterparty(sahel.id);
        if (cpComplaints.length === 0) {
            await complaints.raiseByStaff({ counterpartyId: sahel.id, category: 'DISBURSEMENT_TIMING', description: 'Counterparty queried disbursement timing for the second facility tranche.', loggedByUserId: id('reloff') });
            ok('counterparty complaint raised, left OPEN (genuine intermediate state)');
        }
        else {
            ok('counterparty complaint already on file (idempotent re-run)');
        }
        await counterparties.submitEnquiry({ counterpartyId: sahel.id, subject: 'Facility repayment schedule', message: 'Requesting a copy of the amortization schedule for the second tranche.' });
        ok('portal enquiry logged (Sahel AgroProcessing)');
    });
    await step('marketing sends', async () => {
        await marketing.subscribe({ email: 'newsletter1@example.com', fullName: 'Demo Subscriber One', segments: ['HNI_INVESTORS'] });
        await marketing.subscribe({ email: 'newsletter2@example.com', fullName: 'Demo Subscriber Two', segments: ['HNI_INVESTORS'] });
        let resource = await prisma.marketingResource.findFirst({ where: { title: 'Q2 2026 Fund Factsheet' } });
        if (!resource) {
            resource = await marketing.uploadResource({ title: 'Q2 2026 Fund Factsheet', resourceType: 'FACTSHEET', fileReference: 's3://walkthrough-demo/factsheets/q2-2026.pdf', proposedByUserId: id('mktoff') });
            const wf = await prisma.workflowInstance.findFirstOrThrow({ where: { entityType: 'marketing_resource', entityId: resource.id } });
            await marketing.approveResource(wf.id, id('compliance'));
            ok('marketing resource uploaded + APPROVED (COMPLIANCE)');
        }
        let send1 = await prisma.marketingSend.findFirst({ where: { subject: 'One17 Halal Fund — Q2 2026 Performance Update' } });
        if (!send1) {
            send1 = await marketing.initiateSend({ subject: 'One17 Halal Fund — Q2 2026 Performance Update', body: 'Dear investor, please find attached our Q2 2026 performance factsheet.', targetSegments: ['HNI_INVESTORS'], resourceId: resource.id, initiatedByUserId: id('mktoff') });
            const wf1 = await prisma.workflowInstance.findFirstOrThrow({ where: { entityType: 'marketing_send', entityId: send1.id } });
            await marketing.approveSend(wf1.id, id('compliance'));
            ok('marketing send #1 APPROVED + SENT (COMPLIANCE)');
        }
        let send2 = await prisma.marketingSend.findFirst({ where: { subject: 'One17 Mudarabah Pool — New Tranche Open' } });
        if (!send2) {
            send2 = await marketing.initiateSend({ subject: 'One17 Mudarabah Pool — New Tranche Open', body: 'A new subscription window is now open.', targetSegments: ['HNI_INVESTORS'], initiatedByUserId: id('mktoff') });
            ok('marketing send #2 initiated, left PENDING_APPROVAL for COMPLIANCE review (genuine intermediate state)');
        }
    });
    await step('stakeholder reports', async () => {
        let report1 = await prisma.stakeholderReportRun.findFirst({ where: { reportType: 'QUARTERLY_INVESTOR_UPDATE', periodStart: new Date('2026-04-01') } });
        if (!report1) {
            report1 = await stakeholderReporting.generateReport({
                department: 'PORTFOLIO', reportType: 'QUARTERLY_INVESTOR_UPDATE', periodStart: new Date('2026-04-01'), periodEnd: new Date('2026-06-30'),
                figures: { totalAumKobo: '27500000000', navPerUnit: '104.82', distributionsPaidKobo: '1050000000' }, audienceClass: 'INTERNAL', generatedByUserId: id('portmgr'),
            });
            const wf = await stakeholderReporting.submitForApproval(report1.id, id('portmgr'));
            await stakeholderReporting.approveReport(wf.id, id('md'));
            await stakeholderReporting.distribute({ stakeholderReportRunId: report1.id, audienceClass: 'INTERNAL', recipientDescription: 'Executive Committee', distributedByUserId: id('portmgr') });
            ok('Q2 2026 internal stakeholder report generated -> APPROVED -> DISTRIBUTED');
        }
        let report2 = await prisma.stakeholderReportRun.findFirst({ where: { reportType: 'CLIENT_PORTFOLIO_SUMMARY', periodStart: new Date('2026-04-01') } });
        if (!report2) {
            report2 = await stakeholderReporting.generateReport({
                department: 'BD', reportType: 'CLIENT_PORTFOLIO_SUMMARY', periodStart: new Date('2026-04-01'), periodEnd: new Date('2026-06-30'),
                figures: { topInvestorsByAum: ['Chief Adaeze Nwankwo', 'Lagos Trading Ventures Ltd'] }, audienceClass: 'CLIENT', generatedByUserId: id('bd'),
            });
            ok('Q2 2026 client-facing stakeholder report generated, left DRAFT (genuine intermediate state — not yet submitted for MD approval)');
        }
    });
    ok('§7 PMS scoring + enquiries/complaints + marketing + stakeholder reports complete');
    await step('second COMPANY accounting period (July 2026)', async () => {
        const julyStart = new Date('2026-07-01');
        const julyEnd = new Date('2026-07-31');
        let julyPeriod = await prisma.accountingPeriod.findFirst({ where: { ledgerEntityCode: COMPANY_CODE, periodStart: julyStart } });
        if (!julyPeriod) {
            julyPeriod = await period.openPeriod({ ledgerEntityCode: COMPANY_CODE, periodStart: julyStart, periodEnd: julyEnd, openedByUserId: id('finadmin') });
            const revenueJournal = await ledger.createJournalEntry({
                ledgerEntityCode: COMPANY_CODE, journalReference: 'JE-2026-07-001', entryDate: new Date('2026-07-15'),
                description: 'July 2026 advisory fee income', createdByUserId: id('finadmin'),
                lines: [{ accountCode: '1000', debitKobo: 920000000n, description: 'Cash received' }, { accountCode: '4000', creditKobo: 920000000n, description: 'Advisory fee income' }],
            });
            const revenuePosting = await ledger.requestJournalPosting({ journalEntryId: revenueJournal.id, initiatedByUserId: id('finadmin') });
            await ledger.approveJournalPosting({ workflowInstanceId: revenuePosting.id, approverUserId: id('md') });
            const officeJournal = await ledger.createJournalEntry({
                ledgerEntityCode: COMPANY_CODE, journalReference: 'JE-2026-07-002', entryDate: new Date('2026-07-20'),
                description: 'July 2026 office & admin expense', createdByUserId: id('finadmin'),
                lines: [{ accountCode: '6100', debitKobo: 80000000n, description: 'Office & admin expense' }, { accountCode: '1000', creditKobo: 80000000n, description: 'Cash paid' }],
            });
            const officePosting = await ledger.requestJournalPosting({ journalEntryId: officeJournal.id, initiatedByUserId: id('finadmin') });
            await ledger.approveJournalPosting({ workflowInstanceId: officePosting.id, approverUserId: id('md') });
            ok('July 2026 period opened, 2 journals POSTED (advisory fee income + office/admin expense)');
            const closeRequest = await period.requestPeriodClose({ periodId: julyPeriod.id, initiatedByUserId: id('finadmin') });
            await period.approvePeriodClose({ workflowInstanceId: closeRequest.id, approverUserId: id('md') });
            ok('July 2026 accounting period CLOSED — COMPANY entity now has 2 closed months for period-over-period charts');
        }
        else {
            ok('July 2026 accounting period already on file (idempotent re-run)');
        }
    });
    ok('§8 second accounting period complete — invariant 48(b) scope fully authored');
    await prisma.$disconnect();
    console.log('\nINVARIANT 48 WALKTHROUGH REFRESH COMPLETE — restart the API/scheduler (or let the next catch-up sweep run) so KRI/accrual jobs pick up this run\'s new activity going forward.');
}
main().catch((err) => { console.error(err); process.exitCode = 1; });
//# sourceMappingURL=invariant48-walkthrough-refresh.js.map