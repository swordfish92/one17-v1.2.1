"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const document_service_1 = require("../src/document/document.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const notification_service_1 = require("../src/notification/notification.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const investor_service_1 = require("../src/investor/investor.service");
const counterparty_service_1 = require("../src/counterparty/counterparty.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const halal_fund_engine_service_1 = require("../src/engine-halal-fund/halal-fund-engine.service");
const psr_waterfall_engine_service_1 = require("../src/engine-psr-waterfall/psr-waterfall-engine.service");
const period_service_1 = require("../src/period/period.service");
const bank_reconciliation_service_1 = require("../src/period/bank-reconciliation.service");
const budget_activation_service_1 = require("../src/budget/budget-activation.service");
const risk_service_1 = require("../src/risk/risk.service");
const portal_auth_service_1 = require("../src/portal-auth/portal-auth.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
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
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const halalFund = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const psrWaterfall = new psr_waterfall_engine_service_1.PsrWaterfallEngineService(prisma, audit, workflow);
    const bankReconciliation = new bank_reconciliation_service_1.BankReconciliationService(prisma, audit, delegation);
    const period = new period_service_1.PeriodService(prisma, audit, delegation, workflow, bankReconciliation);
    const budgetActivation = new budget_activation_service_1.BudgetActivationService(prisma, audit, delegation, workflow);
    const risk = new risk_service_1.RiskService(prisma, audit, delegation, workflow);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const users = new Map();
    const makeStaff = async (label, displayName, email, roleCode) => {
        let user = await prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            user = await prisma.appUser.create({ data: { email, displayName } });
            await rbac.assignRole({ userId: user.id, roleCode });
            await authService.setPassword(user.id, STAFF_PASSWORD);
        }
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeStaff('bd', 'Ngozi Eze', 'ngozi.eze@one17capital.com', 'BD');
    await makeStaff('compliance', 'Tunde Bakare', 'tunde.bakare@one17capital.com', 'COMPLIANCE');
    await makeStaff('ic1', 'Ibrahim Yusuf', 'ibrahim.yusuf@one17capital.com', 'SAU_INTERNAL_CONTROL');
    await makeStaff('riskofficer', 'Fatima Sule', 'fatima.sule@one17capital.com', 'RISK_DEPT');
    await makeStaff('portoff', 'Chidi Okafor', 'chidi.okafor@one17capital.com', 'PORT_OFF');
    await makeStaff('portmgr', 'Amaka Obi', 'amaka.obi@one17capital.com', 'PORT_MGR');
    await makeStaff('md', 'Amara Chukwu', 'amara.chukwu@one17capital.com', 'MD_CEO');
    await makeStaff('finadmin', 'Bola Adeyemi', 'bola.adeyemi@one17capital.com', 'FIN_ADMIN');
    await makeStaff('admin', 'Segun Afolabi', 'segun.afolabi@one17capital.com', 'SUPER_ADMIN');
    ok('staff roster provisioned (10 named users, shared walkthrough password)');
    const employeeIds = new Map();
    const findOrCreatePosition = (title, orgUnitCode, cadre, notch) => prisma.position.upsert({
        where: { title_orgUnitCode: { title, orgUnitCode } },
        create: { title, orgUnitCode, cadre, notch },
        update: {},
    });
    const findOrCreateEmployee = async (label, surname, firstName, positionTitle, orgUnitCode, reportsToLabel) => {
        const userId = id(label);
        const existing = await prisma.employee.findFirst({ where: { appUserId: userId } });
        if (existing) {
            employeeIds.set(label, existing.id);
            return;
        }
        const position = await findOrCreatePosition(positionTitle, orgUnitCode, 'Officer', 1);
        const emp = await prisma.employee.create({
            data: {
                surname,
                firstName,
                positionId: position.id,
                orgUnitCode,
                appUserId: userId,
                hireDate: new Date('2024-01-15'),
                reportsToId: reportsToLabel ? employeeIds.get(reportsToLabel) : undefined,
            },
        });
        employeeIds.set(label, emp.id);
    };
    await findOrCreateEmployee('md', 'Chukwu', 'Amara', 'Managing Director / CEO', 'EXEC_OFFICE', null);
    await findOrCreateEmployee('portmgr', 'Obi', 'Amaka', 'Portfolio Manager', 'PORTFOLIO', 'md');
    await findOrCreateEmployee('portoff', 'Okafor', 'Chidi', 'Portfolio Officer', 'PORTFOLIO', 'portmgr');
    await findOrCreateEmployee('bd', 'Eze', 'Ngozi', 'Business Development Officer', 'BD', 'md');
    await findOrCreateEmployee('compliance', 'Bakare', 'Tunde', 'Compliance Officer', 'SAU', 'md');
    await findOrCreateEmployee('ic1', 'Yusuf', 'Ibrahim', 'Internal Control Officer', 'SAU', 'md');
    await findOrCreateEmployee('riskofficer', 'Sule', 'Fatima', 'Risk Officer', 'RISK', 'md');
    await findOrCreateEmployee('finadmin', 'Adeyemi', 'Bola', 'Finance Officer', 'FINCON', 'md');
    await findOrCreateEmployee('admin', 'Afolabi', 'Segun', 'ICT Administrator', 'TECHNOLOGY', 'md');
    ok('staff roster linked to Employee records (reporting lines wired) — Tasks assignment now resolvable for every walkthrough login');
    const NINE_LOW_GRADES = [
        'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
        'TRANSACTION_COMPLEXITY', 'DELIVERY_CHANNEL', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
    ].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Routine, well-documented profile.' }));
    const PEP_SANCTIONS_GRID = [
        { target: 'INVESTOR_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    ];
    const chiefEmail = 'chief.adaeze.nwankwo@example.com';
    let chief = await prisma.investor.findUnique({ where: { contactEmail: chiefEmail } });
    if (!chief) {
        const expressChief = await investors.onboardExpress({
            fullLegalName: 'Chief Adaeze Nwankwo', entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
            bvn: '22011234567', contactEmail: chiefEmail, contactPhone: '+2348031234567',
            onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
        });
        await investors.submitStage2Fields({
            investorId: expressChief.investorId, taxIdentificationNumber: 'TIN-0198234561',
            registeredAddress: '14 Ozumba Mbadiwe Avenue, Victoria Island, Lagos', sourceOfFunds: 'Business proceeds (real estate development)', actorUserId: id('bd'),
        });
        await investors.recordComplianceRiskAssessment({
            investorId: expressChief.investorId, riskMetricGrades: NINE_LOW_GRADES, pepSanctionsGrid: PEP_SANCTIONS_GRID,
            complianceObservations: 'Long-standing HNI client, well-documented source of wealth.', assessedByUserId: id('compliance'),
        });
        const chiefInstance = await investors.submitOnboardingCaseForReview(expressChief.investorId, id('bd'));
        await investors.recordIc1Review({ workflowInstanceId: chiefInstance.id, checklist: { KYC_COMPLETE: 'PASS', SCREENING_ON_FILE: 'PASS' }, notes: 'Complete file.', pass: true, approverUserId: id('ic1') });
        await investors.recordRiskReview({ workflowInstanceId: chiefInstance.id, periodicReviewFrequency: 'ANNUAL', riskNotes: 'Standard monitoring.', approverUserId: id('riskofficer') });
        await investors.recordIc2Review({ workflowInstanceId: chiefInstance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
        chief = await prisma.investor.findUniqueOrThrow({ where: { investorId: expressChief.investorId } });
        ok(`Investor onboarded: ${chief.fullLegalName} (${chief.investorId}) -> ${chief.kycStatus}/${chief.onboardingStage}`);
    }
    else {
        ok(`Investor already on file: ${chief.fullLegalName} (idempotent re-run)`);
    }
    const ltvEmail = 'info@lagostradingventures.example.com';
    let ltv = await prisma.investor.findUnique({ where: { contactEmail: ltvEmail } });
    if (!ltv) {
        const expressLtv = await investors.onboardExpress({
            fullLegalName: 'Lagos Trading Ventures Ltd', entityType: 'CORPORATE', nationality: 'NG',
            rcNumber: 'RC1834562', contactEmail: ltvEmail, contactPhone: '+2349021234567',
            onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
        });
        await investors.submitStage2Fields({
            investorId: expressLtv.investorId, taxIdentificationNumber: 'TIN-0298345672',
            registeredAddress: '22 Broad Street, Lagos Island, Lagos', sourceOfFunds: 'Import/export trading revenue', actorUserId: id('bd'),
        });
        const highGrades = [...NINE_LOW_GRADES.slice(0, 8), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH', rationale: 'Cross-border trading income pending further documentation.' }];
        await investors.recordComplianceRiskAssessment({
            investorId: expressLtv.investorId, riskMetricGrades: highGrades, pepSanctionsGrid: PEP_SANCTIONS_GRID,
            complianceObservations: 'Corporate structure with cross-border trade flows — EDD recommended.', assessedByUserId: id('compliance'),
        });
        const ltvInstance = await investors.submitOnboardingCaseForReview(expressLtv.investorId, id('bd'));
        await investors.recordIc1Review({ workflowInstanceId: ltvInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
        await investors.recordRiskReview({
            workflowInstanceId: ltvInstance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
            eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for 12 months; quarterly source-of-funds refresh.', approverUserId: id('riskofficer'),
        });
        await investors.recordMdDecision({ workflowInstanceId: ltvInstance.id, decision: 'APPROVED', conditionsOrReason: 'Approved with enhanced monitoring per Risk recommendation.', approverUserId: id('md') });
        await investors.recordIc2Review({ workflowInstanceId: ltvInstance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
        ltv = await prisma.investor.findUniqueOrThrow({ where: { investorId: expressLtv.investorId } });
        ok(`Investor onboarded: ${ltv.fullLegalName} (${ltv.investorId}) -> ${ltv.kycStatus}/${ltv.onboardingStage}, HIGH risk with EDD`);
    }
    else {
        ok(`Investor already on file: ${ltv.fullLegalName} (idempotent re-run)`);
    }
    const sahelEmail = 'treasury@sahelagroprocessing.example.com';
    let sahel = await prisma.counterparty.findUnique({ where: { contactEmail: sahelEmail } });
    if (!sahel) {
        const onboarded = await counterparties.onboard({
            legalName: 'Sahel AgroProcessing Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2045781',
            purposeOfFinancing: 'Working capital for grain aggregation and processing (Q3-Q4 2026 season)',
            amountSoughtKobo: 35000000000n, expectedSourceOfRepayment: 'Off-take agreement proceeds (grain sales to milling partners)',
            creditBureauConsent: true, shariahCertRef: 'SSB-CERT-2026-014', shariahCertExpiry: new Date('2027-06-30'),
            contactEmail: sahelEmail, onboardedByUserId: id('portoff'),
        });
        const SAHEL_PEP_SANCTIONS_GRID = [
            { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        ];
        await counterparties.recordComplianceRiskAssessment({
            counterpartyId: onboarded.id,
            riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
                .map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Established agro-processor, 6-year trading history.' })),
            pepSanctionsGrid: SAHEL_PEP_SANCTIONS_GRID, assessedByUserId: id('compliance'),
        });
        const sahelInstance = await counterparties.submitOnboardingCaseForReview(onboarded.id, id('portoff'));
        await counterparties.recordIc1Review({ workflowInstanceId: sahelInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
        await counterparties.recordRiskReview({ workflowInstanceId: sahelInstance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 50000000000n, approverUserId: id('riskofficer') });
        const sahelFinal = await counterparties.recordIc2Review({ workflowInstanceId: sahelInstance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
        if (sahelFinal.status === 'APPROVED') {
            await portalAuth.provisionForCounterparty(onboarded.id);
        }
        sahel = await prisma.counterparty.findUniqueOrThrow({ where: { id: onboarded.id } });
        ok(`Counterparty onboarded: ${sahel.legalName} -> ${sahel.onboardingStatus}, portal provisioned`);
    }
    else {
        ok(`Counterparty already on file: ${sahel.legalName} (idempotent re-run)`);
    }
    const HF_CODE = 'ONE17-HALAL-FUND-01';
    let hfEntity = await prisma.ledgerEntity.findUnique({ where: { code: HF_CODE } });
    if (!hfEntity) {
        hfEntity = await prisma.ledgerEntity.create({ data: { code: HF_CODE, name: 'One17 Halal Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
        await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
        const launchDate = new Date('2025-01-06T00:00:00Z');
        const valuationDate = new Date('2026-07-03T00:00:00Z');
        await prisma.portfolioPosition.create({
            data: { ledgerEntityCode: HF_CODE, contractType: 'MURABAHA', isEquity: false, principalKobo: 500000000n, ratePct: 13.5, entryDate: launchDate, status: 'ACTIVE' },
        });
        await prisma.txn.create({
            data: { txnType: 'SUBSCRIPTION', ledgerEntityCode: HF_CODE, valueDate: launchDate, amountKobo: 500000000n, unitsQty: 50000, status: 'POSTED', makerUserId: id('portoff') },
        });
        await halalFund.publishAndLockNav({ ledgerEntityCode: HF_CODE, valuationDate: launchDate, launchDate, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01 });
        const nav = await halalFund.publishAndLockNav({ ledgerEntityCode: HF_CODE, valuationDate, launchDate, launchPrice: 100, offerSpreadPct: 0.015, bidSpreadPct: 0.01 });
        const hfAccount = await prisma.productAccount.create({
            data: { investorId: chief.investorId, productCode: 'ONE17-HALAL-FUND', startDate: launchDate, principalOrCommittedKobo: 500000000n, unitsHeld: 50000 },
        });
        const dist = await halalFund.runDistribution({
            ledgerEntityCode: HF_CODE, productCode: 'ONE17-HALAL-FUND', periodStart: launchDate, periodEnd: valuationDate, recordDate: valuationDate,
            method: 'INCOME', incomeBasisKobo: 1000000000n, closingNavKobo: 0n, openingNavKobo: 0n, netSubscriptionsKobo: 0n,
            navHistoryComplete: false, priorDeclaredKobo: 0n, distributablePct: 0.80, priorTotalDistributedKobo: 0n, exDivPricePerUnit: null,
            participants: [{ productAccountId: hfAccount.id, unitsAtRecord: 50000, isDrip: false, cashPaidKobo: 0n }],
            createdByUserId: id('portoff'),
        });
        await halalFund.approveDistributionDeclaration(dist.workflowInstanceId, id('md'));
        await halalFund.payDistribution(dist.distributionId, id('md'));
        ok(`Halal Fund: NAV/unit ${nav.navPerUnit} published for ${valuationDate.toISOString().slice(0, 10)}; distribution declared + PAID to ${chief.fullLegalName}`);
    }
    else {
        ok('Halal Fund demo data already on file (idempotent re-run)');
    }
    const POOL_CODE = 'ONE17-MUDARABAH-POOL-01';
    let poolEntity = await prisma.ledgerEntity.findUnique({ where: { code: POOL_CODE } });
    if (!poolEntity) {
        poolEntity = await prisma.ledgerEntity.create({ data: { code: POOL_CODE, name: 'One17 Mudarabah Pool I', entityType: 'POOL', primaryBasis: 'AAOIFI' } });
        await prisma.product.upsert({ where: { code: 'ONE17-MUDARABAH-POOL-1' }, create: { code: 'ONE17-MUDARABAH-POOL-1', name: 'Mudarabah Pool 1', engineType: 'PSR_WATERFALL' }, update: {} });
        const poolAccount = await prisma.productAccount.create({
            data: { investorId: ltv.investorId, productCode: 'ONE17-MUDARABAH-POOL-1', startDate: new Date('2025-06-01'), principalOrCommittedKobo: 2000000000n },
        });
        const run = await psrWaterfall.runWaterfallDistribution({
            ledgerEntityCode: POOL_CODE, productCode: 'ONE17-MUDARABAH-POOL-1',
            periodStart: new Date('2025-06-01'), periodEnd: new Date('2026-05-31'), recordDate: new Date('2026-05-31'),
            poolProfitKobo: 60000000n, betaPoolPct: 40, gammaPoolPct: 40, deltaPoolPct: 60, surplusSharingEnabled: true,
            participants: [{ productAccountId: poolAccount.id, capitalKobo: 2000000000n, targetRatePct: 16, activeDays: 365, kycValid: true }],
            hibahOfferedKobo: 0n, shariahFlagsClear: true, boardResolutionRef: null, createdByUserId: id('portoff'),
        });
        await workflow.approveNextStep(run.workflowInstanceId, id('md'));
        ok(`Mudarabah Pool I: PSR-waterfall distribution computed + approved for ${ltv.fullLegalName}`);
    }
    else {
        ok('Mudarabah Pool demo data already on file (idempotent re-run)');
    }
    const COMPANY_CODE = 'COMPANY';
    let company = await prisma.ledgerEntity.findUnique({ where: { code: COMPANY_CODE } });
    if (!company) {
        company = await prisma.ledgerEntity.create({ data: { code: COMPANY_CODE, name: 'One17 Capital Limited', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
        await prisma.chartOfAccount.createMany({
            data: [
                { ledgerEntityCode: COMPANY_CODE, accountCode: '1000', accountName: 'Cash and Bank', accountType: 'ASSET', aaoifiRef: 'N/A', ifrsRef: 'IAS 7' },
                { ledgerEntityCode: COMPANY_CODE, accountCode: '4000', accountName: 'Advisory Fee Income', accountType: 'INCOME', aaoifiRef: 'N/A', ifrsRef: 'IFRS 15' },
                { ledgerEntityCode: COMPANY_CODE, accountCode: '6000', accountName: 'Staff Cost', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 19' },
                { ledgerEntityCode: COMPANY_CODE, accountCode: '6100', accountName: 'Office & Admin Expense', accountType: 'EXPENSE', aaoifiRef: 'N/A', ifrsRef: 'IAS 1' },
            ],
        });
        ok('Company ledger entity + chart of accounts created (COMPANY, IFRS primary)');
    }
    else {
        ok('Company ledger entity already on file (idempotent re-run)');
    }
    const periodStart = new Date('2026-06-01');
    const periodEnd = new Date('2026-06-30');
    let openPeriod = await prisma.accountingPeriod.findFirst({ where: { ledgerEntityCode: COMPANY_CODE, periodStart } });
    if (!openPeriod) {
        openPeriod = await period.openPeriod({ ledgerEntityCode: COMPANY_CODE, periodStart, periodEnd, openedByUserId: id('finadmin') });
        ok(`Accounting period opened: ${COMPANY_CODE} ${periodStart.toISOString().slice(0, 10)} - ${periodEnd.toISOString().slice(0, 10)}`);
        const revenueJournal = await ledger.createJournalEntry({
            ledgerEntityCode: COMPANY_CODE, journalReference: 'JE-2026-06-001', entryDate: new Date('2026-06-15'),
            description: 'June 2026 advisory fee income', createdByUserId: id('finadmin'),
            lines: [
                { accountCode: '1000', debitKobo: 850000000n, description: 'Cash received' },
                { accountCode: '4000', creditKobo: 850000000n, description: 'Advisory fee income' },
            ],
        });
        const revenuePosting = await ledger.requestJournalPosting({ journalEntryId: revenueJournal.id, initiatedByUserId: id('finadmin') });
        await ledger.approveJournalPosting({ workflowInstanceId: revenuePosting.id, approverUserId: id('md') });
        const staffCostJournal = await ledger.createJournalEntry({
            ledgerEntityCode: COMPANY_CODE, journalReference: 'JE-2026-06-002', entryDate: new Date('2026-06-28'),
            description: 'June 2026 staff cost accrual', createdByUserId: id('finadmin'),
            lines: [
                { accountCode: '6000', debitKobo: 420000000n, description: 'Staff cost' },
                { accountCode: '1000', creditKobo: 420000000n, description: 'Cash paid' },
            ],
        });
        const staffCostPosting = await ledger.requestJournalPosting({ journalEntryId: staffCostJournal.id, initiatedByUserId: id('finadmin') });
        await ledger.approveJournalPosting({ workflowInstanceId: staffCostPosting.id, approverUserId: id('md') });
        ok('Two journals POSTED for June 2026 (advisory fee income + staff cost), maker != checker enforced');
        const closeRequest = await period.requestPeriodClose({ periodId: openPeriod.id, initiatedByUserId: id('finadmin') });
        await period.approvePeriodClose({ workflowInstanceId: closeRequest.id, approverUserId: id('md') });
        ok('June 2026 accounting period CLOSED via the standing maker != checker workflow');
    }
    else {
        ok('June 2026 accounting period already on file (idempotent re-run)');
    }
    const fiscalYear = 2026;
    let budgetVersion = await prisma.budgetVersion.findFirst({ where: { fiscalYear, scenarioLabel: 'FY2026 Board-Approved Budget' } });
    if (!budgetVersion) {
        budgetVersion = await prisma.budgetVersion.create({
            data: { fiscalYear, scenarioLabel: 'FY2026 Board-Approved Budget', status: 'BOARD_APPROVED', proposedByUserId: id('finadmin') },
        });
        const opexLine = await prisma.budgetLine.create({
            data: {
                budgetVersionId: budgetVersion.id, ledgerEntityCode: COMPANY_CODE, budgetLineGroup: 'Opex',
                lineDescription: 'Portfolio Management — Operating Expense', class: 'OPEX', phasingMethod: 'EVEN_12', sourceSheetRef: 'walkthrough-demo',
                monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 300000000n })) },
            },
        });
        const activationWf = await budgetActivation.requestActivation(budgetVersion.id, 'BOARD-RES-2026-041', id('finadmin'));
        await budgetActivation.approveActivation(activationWf.id, id('md'));
        const { workflowInstance: encWf } = await budgetActivation.requestEncumbrance(opexLine.id, 500000000n, 'Q3 portfolio management operating spend', id('finadmin'));
        await workflow.approveNextStep(encWf.id, id('ic1'));
        await workflow.approveNextStep(encWf.id, id('md'));
        ok('FY2026 budget version ACTIVATED (Board resolution BOARD-RES-2026-041); one encumbrance approved SAU -> CEO');
    }
    else {
        ok('FY2026 budget version already on file (idempotent re-run)');
    }
    const activeMatrix = await risk.getActiveMatrix();
    if (activeMatrix.status !== 'ACTIVE') {
        const seededV1 = await prisma.riskAppetiteMatrixVersion.findFirstOrThrow({ where: { status: 'DRAFT' }, orderBy: { version: 'asc' } });
        const proposal = await risk.proposeMatrixVersion({ proposedByUserId: id('admin'), cloneFromVersionId: seededV1.id });
        const categories = await prisma.riskAppetiteCategory.findMany({ where: { matrixVersionId: proposal.matrixVersion.id }, orderBy: { sortOrder: 'asc' } });
        for (const cat of categories) {
            if (cat.isZeroTolerance) {
                await risk.updateCategoryThresholds({ matrixVersionId: proposal.matrixVersion.id, sortOrder: cat.sortOrder, greenThreshold: 0, amberThreshold: 0, redThreshold: 1, actorUserId: id('admin') });
            }
            else if (cat.direction === 'HIGHER_BETTER') {
                await risk.updateCategoryThresholds({ matrixVersionId: proposal.matrixVersion.id, sortOrder: cat.sortOrder, greenThreshold: 80, amberThreshold: 60, redThreshold: 40, actorUserId: id('admin') });
            }
            else {
                await risk.updateCategoryThresholds({ matrixVersionId: proposal.matrixVersion.id, sortOrder: cat.sortOrder, greenThreshold: 20, amberThreshold: 40, redThreshold: 60, actorUserId: id('admin') });
            }
        }
        await risk.approveMatrixVersion({ workflowInstanceId: proposal.workflowInstance.id, approverUserId: id('md'), boardResolutionRef: 'BOARD-RES-2026-042' });
        ok(`Risk appetite matrix v${proposal.matrixVersion.version} ACTIVATED with thresholds for all ${categories.length} categories (Board resolution BOARD-RES-2026-042)`);
    }
    else {
        ok('Risk appetite matrix already ACTIVE (idempotent re-run)');
    }
    await prisma.$disconnect();
    console.log('\nWALKTHROUGH SEED COMPLETE — restart (or let the scheduler catch-up sweep run) so KRI/stress jobs pick up the now-real COMPANY entity + ACTIVE budget/risk matrix.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=walkthrough-seed.js.map