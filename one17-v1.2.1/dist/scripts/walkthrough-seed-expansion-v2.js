"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const investor_service_1 = require("../src/investor/investor.service");
const portal_auth_service_1 = require("../src/portal-auth/portal-auth.service");
const nd_mandate_engine_service_1 = require("../src/engine-nd-mandate/nd-mandate-engine.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const letterhead_service_1 = require("../src/letterhead/letterhead.service");
const certificate_service_1 = require("../src/certificate/certificate.service");
const subscription_service_1 = require("../src/subscription/subscription.service");
const document_service_1 = require("../src/document/document.service");
const counterparty_service_1 = require("../src/counterparty/counterparty.service");
const notification_service_1 = require("../src/notification/notification.service");
const task_service_1 = require("../src/task/task.service");
const payment_reminder_service_1 = require("../src/counterparty/payment-reminder.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
function park(label, reason) { console.log(`PARKED: ${label} — ${reason}`); }
async function step(label, fn) {
    try {
        await fn();
    }
    catch (err) {
        park(label, err instanceof Error ? err.message : String(err));
    }
}
function monthsFromNow(offset) {
    const d = new Date();
    d.setUTCMonth(d.getUTCMonth() + offset);
    d.setUTCHours(9, 0, 0, 0);
    return d;
}
const HF_PRODUCT_CODE = 'ONE17-HALAL-FUND';
const POOL_PRODUCT_CODE = 'ONE17-MUDARABAH-POOL-1';
const ND_MANDATE_PRODUCT_CODE = 'ONE17-ND-MANDATE-1';
const HF_CODE = 'ONE17-HALAL-FUND-01';
const NINE_LOW_GRADES = [
    'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
    'TRANSACTION_COMPLEXITY', 'DELIVERY_CHANNEL', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Routine, well-documented profile.' }));
const EIGHT_LOW_GRADES = [
    'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
    'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Established operating history, well-documented.' }));
const INVESTOR_PEP_GRID = [
    { target: 'INVESTOR_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
];
const COUNTERPARTY_PEP_GRID = [
    { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
];
const COUNTERPARTIES = [
    {
        key: 'coastal', legalName: 'Coastal Foods & Logistics Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201456',
        contactEmail: 'finance@coastalfoodslogistics.example.com', purposeOfFinancing: 'Refrigerated fleet expansion for cold-chain distribution',
        amountSoughtKobo: 9000000000n, expectedSourceOfRepayment: 'Retail distribution contract receivables', shariahCertRef: 'SSB-CERT-2026-021',
        riskTier: 'LOW', approvedExposureLimitKobo: 15000000000n,
        facilityPurpose: 'Refrigerated truck fleet acquisition, phase 1', structureType: 'MURABAHA', amountKobo: 8000000000n, tenorMonths: 6, targetReturnPct: 13.0,
        installments: { count: 6, cadenceMonths: 1, firstDueOffsetMonths: -4, paidThrough: 3 },
    },
    {
        key: 'northbridge', legalName: 'Northbridge Construction Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201789',
        contactEmail: 'treasury@northbridgeconstruction.example.com', purposeOfFinancing: 'Equipment financing for a commercial-estate build contract',
        amountSoughtKobo: 25000000000n, expectedSourceOfRepayment: 'Milestone payments under the estate-development contract', shariahCertRef: 'SSB-CERT-2026-022',
        riskTier: 'HIGH', approvedExposureLimitKobo: 35000000000n,
        facilityPurpose: 'Heavy equipment lease-to-completion, estate contract phase 2', structureType: 'IJARAH', amountKobo: 22000000000n, tenorMonths: 24, targetReturnPct: 15.5,
        installments: { count: 8, cadenceMonths: 3, firstDueOffsetMonths: -9, paidThrough: 2 },
    },
    {
        key: 'zenith-textile', legalName: 'Zenith Textile Mills Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201933',
        contactEmail: 'accounts@zenithtextilemills.example.com', purposeOfFinancing: 'Raw-material procurement financing for a 12-month production cycle',
        amountSoughtKobo: 5000000000n, expectedSourceOfRepayment: 'Wholesale fabric sales receivables', shariahCertRef: 'SSB-CERT-2026-023',
        riskTier: 'LOW', approvedExposureLimitKobo: 8000000000n,
        facilityPurpose: 'Cotton and dye raw-material procurement, FY2026 cycle', structureType: 'MUSHARAKAH', amountKobo: 4500000000n, tenorMonths: 12, targetReturnPct: 12.0,
        installments: { count: 12, cadenceMonths: 1, firstDueOffsetMonths: -6, paidThrough: 6 },
    },
    {
        key: 'savanna-energy', legalName: 'Savanna Energy Solutions Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202104',
        contactEmail: 'cfo@savannaenergysolutions.example.com', purposeOfFinancing: 'Solar mini-grid installation for three rural distribution sites',
        amountSoughtKobo: 32000000000n, expectedSourceOfRepayment: 'Power-purchase agreement receipts from off-taker communities', shariahCertRef: 'SSB-CERT-2026-024',
        riskTier: 'HIGH', approvedExposureLimitKobo: 40000000000n,
        facilityPurpose: 'Mini-grid equipment + installation, sites 1-3', structureType: 'MURABAHA', amountKobo: 30000000000n, tenorMonths: 18, targetReturnPct: 16.0,
        installments: { count: 6, cadenceMonths: 3, firstDueOffsetMonths: -6, paidThrough: 1 },
    },
    {
        key: 'pinnacle-health', legalName: 'Pinnacle Healthcare Supplies Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202267',
        contactEmail: 'procurement@pinnaclehealthcaresupplies.example.com', purposeOfFinancing: 'Short-term bridge financing for a hospital-supply tender',
        amountSoughtKobo: 3000000000n, expectedSourceOfRepayment: 'Tender payment on delivery completion (government hospital contract)', shariahCertRef: 'SSB-CERT-2026-025',
        riskTier: 'LOW', approvedExposureLimitKobo: 5000000000n,
        facilityPurpose: 'Medical consumables tender fulfilment, single delivery cycle', structureType: 'IJARAH', amountKobo: 2500000000n, tenorMonths: 3, targetReturnPct: 11.5,
        installments: { count: 3, cadenceMonths: 1, firstDueOffsetMonths: -3, paidThrough: 3 },
    },
    {
        key: 'everline-commodities', legalName: 'Everline Commodities Trading Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202398',
        contactEmail: 'ops@everlinecommodities.example.com', purposeOfFinancing: 'Working capital for a cocoa export consolidation cycle',
        amountSoughtKobo: 13000000000n, expectedSourceOfRepayment: 'Export off-take proceeds (FOB Lagos)', shariahCertRef: 'SSB-CERT-2026-026',
        riskTier: 'LOW', approvedExposureLimitKobo: 18000000000n,
        facilityPurpose: 'Cocoa consolidation working capital, Q3 2026 export cycle', structureType: 'MURABAHA', amountKobo: 12000000000n, tenorMonths: 9, targetReturnPct: 14.0,
    },
];
const INVESTORS = [
    { key: 'kunle', fullLegalName: 'Barrister Kunle Adewusi', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'kunle.adewusi@example.com', contactPhone: '+2348041234501',
        bvn: '22015234501', tin: 'TIN-0398234501', address: '5 Alexander Avenue, Ikoyi, Lagos', sourceOfFunds: 'Legal practice partnership income',
        riskTier: 'LOW', productCode: HF_PRODUCT_CODE, principalKobo: 800000000n },
    { key: 'ifeoma', fullLegalName: 'Dr. Ifeoma Nnamdi', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'ifeoma.nnamdi@example.com', contactPhone: '+2348051234502',
        bvn: '22015234502', tin: 'TIN-0398234502', address: '19 Independence Layout, Enugu', sourceOfFunds: 'Medical consultancy income',
        riskTier: 'LOW', productCode: ND_MANDATE_PRODUCT_CODE, principalKobo: 1500000000n },
    { key: 'musa', fullLegalName: 'Alhaji Musa Danlami', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'musa.danlami@example.com', contactPhone: '+2348061234503',
        bvn: '22015234503', tin: 'TIN-0398234503', address: '11 Zaria Road, Kano', sourceOfFunds: 'Agricultural trading proceeds',
        riskTier: 'LOW', productCode: POOL_PRODUCT_CODE, principalKobo: 2200000000n },
    { key: 'highgate', fullLegalName: 'Highgate Real Estate Holdings Ltd', entityType: 'CORPORATE', contactEmail: 'invest@highgaterealestate.example.com', contactPhone: '+2348071234504',
        rcNumber: 'RC1901234', tin: 'TIN-0498234504', address: '31 Kofo Abayomi Street, Victoria Island, Lagos', sourceOfFunds: 'Commercial property leasing income',
        riskTier: 'HIGH', productCode: HF_PRODUCT_CODE, principalKobo: 9500000000n },
    { key: 'meridian', fullLegalName: 'Meridian Shipping & Freight Ltd', entityType: 'CORPORATE', contactEmail: 'treasury@meridianshipping.example.com', contactPhone: '+2348081234505',
        rcNumber: 'RC1901567', tin: 'TIN-0498234505', address: '2 Marina, Lagos Island, Lagos', sourceOfFunds: 'Freight-forwarding and shipping-agency revenue',
        riskTier: 'HIGH', productCode: POOL_PRODUCT_CODE, principalKobo: 14000000000n },
    { key: 'folake', fullLegalName: 'Mrs. Folake Ogundipe', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'folake.ogundipe@example.com', contactPhone: '+2348091234506',
        bvn: '22015234506', tin: 'TIN-0398234506', address: '7 Bode Thomas Street, Surulere, Lagos', sourceOfFunds: 'Retail business proceeds',
        riskTier: 'LOW', productCode: ND_MANDATE_PRODUCT_CODE, principalKobo: 600000000n },
];
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, portalAuth, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const subs = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const paymentReminder = new payment_reminder_service_1.PaymentReminderService(prisma, audit, delegation, notification, task);
    void rbac;
    const staffEmails = {
        bd: 'ngozi.eze@one17capital.com', compliance: 'tunde.bakare@one17capital.com',
        ic1: 'ibrahim.yusuf@one17capital.com', risk: 'fatima.sule@one17capital.com',
        portoff: 'chidi.okafor@one17capital.com', portmgr: 'amaka.obi@one17capital.com', md: 'amara.chukwu@one17capital.com',
        finadmin: 'bola.adeyemi@one17capital.com', cio: 'emeka.nwosu@one17capital.com', invcommittee: 'grace.adeleke@one17capital.com',
    };
    const staff = {};
    for (const [label, email] of Object.entries(staffEmails)) {
        const user = await prisma.appUser.findUnique({ where: { email } });
        if (!user)
            fail(`Staff user ${email} not found — run scripts/walkthrough-seed.ts and scripts/invariant48-walkthrough-refresh.ts first.`);
        staff[label] = user.id;
    }
    ok('staff roster resolved (reused, no new staff created)');
    for (const productCode of [HF_PRODUCT_CODE, POOL_PRODUCT_CODE, ND_MANDATE_PRODUCT_CODE]) {
        const product = await prisma.product.findUnique({ where: { code: productCode } });
        if (!product?.shariahApprovedAt)
            fail(`Product ${productCode} has no recorded Shariah approval — run scripts/invariant48-walkthrough-refresh.ts first (its §2 activates all three products).`);
    }
    const latestNav = await prisma.navRecord.findFirst({ where: { ledgerEntityCode: HF_CODE }, orderBy: { valuationDate: 'desc' } });
    if (!latestNav)
        fail(`No published NAV for ${HF_CODE} — run scripts/walkthrough-seed.ts first.`);
    const effectiveDate = latestNav.valuationDate;
    ok(`Reusing latest published Halal Fund NAV date (${effectiveDate.toISOString().slice(0, 10)}) as the subscription effective date`);
    for (const spec of COUNTERPARTIES) {
        await step(`counterparty ${spec.legalName}`, async () => {
            let cp = await prisma.counterparty.findUnique({ where: { contactEmail: spec.contactEmail } });
            if (!cp) {
                const onboarded = await counterparties.onboard({
                    legalName: spec.legalName, counterpartyType: spec.counterpartyType, rcNumber: spec.rcNumber,
                    purposeOfFinancing: spec.purposeOfFinancing, amountSoughtKobo: spec.amountSoughtKobo,
                    expectedSourceOfRepayment: spec.expectedSourceOfRepayment, creditBureauConsent: true,
                    shariahCertRef: spec.shariahCertRef, shariahCertExpiry: new Date('2027-12-31'),
                    contactEmail: spec.contactEmail, onboardedByUserId: staff.portoff,
                });
                const grades = spec.riskTier === 'HIGH'
                    ? [...EIGHT_LOW_GRADES.slice(0, 7), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH', rationale: 'New counterparty relationship, source-of-wealth documentation still being finalized.' }]
                    : EIGHT_LOW_GRADES;
                await counterparties.recordComplianceRiskAssessment({
                    counterpartyId: onboarded.id, riskMetricGrades: grades, pepSanctionsGrid: COUNTERPARTY_PEP_GRID,
                    assessedByUserId: staff.compliance,
                });
                const instance = await counterparties.submitOnboardingCaseForReview(onboarded.id, staff.portoff);
                await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: staff.ic1 });
                if (spec.riskTier === 'HIGH') {
                    await counterparties.recordRiskReview({
                        workflowInstanceId: instance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
                        eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for the first 12 months; quarterly exposure review.',
                        approvedExposureLimitKobo: spec.approvedExposureLimitKobo, approverUserId: staff.risk,
                    });
                    await counterparties.recordMdDecision({ workflowInstanceId: instance.id, decision: 'APPROVED', conditionsOrReason: 'Approved per Risk recommendation, enhanced monitoring in place.', approverUserId: staff.md });
                }
                else {
                    await counterparties.recordRiskReview({
                        workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY',
                        approvedExposureLimitKobo: spec.approvedExposureLimitKobo, approverUserId: staff.risk,
                    });
                }
                const final = await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: staff.ic1 });
                if (final.status === 'APPROVED')
                    await portalAuth.provisionForCounterparty(onboarded.id);
                cp = await prisma.counterparty.findUniqueOrThrow({ where: { id: onboarded.id } });
                ok(`counterparty onboarded: ${cp.legalName} -> ${cp.onboardingStatus} (${spec.riskTier} risk)`);
            }
            else {
                ok(`counterparty already on file: ${cp.legalName} (idempotent re-run)`);
            }
            let application = await prisma.counterpartyFacilityApplication.findFirst({ where: { counterpartyId: cp.id } });
            if (!application) {
                application = await counterparties.submitFacilityApplication({ counterpartyId: cp.id, requestedAmountKobo: spec.amountKobo, purpose: spec.facilityPurpose });
                ok(`facility application submitted for ${cp.legalName} (DRAFT, ₦${(spec.amountKobo / 100n).toLocaleString()})`);
            }
            let memo = await prisma.investmentMemo.findFirst({ where: { facilityApplicationId: application.id } });
            if (!memo) {
                memo = await counterparties.draftInvestmentMemo({
                    facilityApplicationId: application.id, dealSummary: `${spec.facilityPurpose} — ${spec.structureType.toLowerCase()} structure, ${spec.tenorMonths}-month tenor.`,
                    structureType: spec.structureType, amountKobo: spec.amountKobo, tenorMonths: spec.tenorMonths, targetReturnPct: spec.targetReturnPct,
                    riskNotes: `${spec.riskTier} risk tier per onboarding assessment; exposure within Risk-approved limit.`,
                    shariahNotes: `${spec.structureType} structure, certified under ${spec.shariahCertRef}.`,
                    collateralNotes: 'Assignment of receivables under the underlying commercial contract.',
                }, staff.portoff);
                await counterparties.submitInvestmentMemoForCioApproval(memo.id, staff.portoff);
                ok(`investment memo drafted + submitted (${spec.structureType}, ${spec.tenorMonths}mo, ${spec.targetReturnPct}% target)`);
            }
            const freshMemo = await prisma.investmentMemo.findUniqueOrThrow({ where: { id: memo.id } });
            if (freshMemo.workflowInstanceId && freshMemo.status !== 'CIO_APPROVED' && freshMemo.status !== 'MD_APPROVED' && freshMemo.status !== 'CIO_REJECTED') {
                await step(`  ${spec.key} memo PM step`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, staff.portmgr); ok(`  ${spec.key} memo PM (PORT_MGR) step APPROVED`); });
                await step(`  ${spec.key} memo CIO step`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, staff.cio); ok(`  ${spec.key} memo CIO step APPROVED`); });
                await step(`  ${spec.key} memo IC step (long chain only)`, async () => { await counterparties.approveInvestmentMemoAsCommittee(freshMemo.workflowInstanceId, staff.invcommittee, `IC-RES-2026-${100 + COUNTERPARTIES.indexOf(spec)}`); ok(`  ${spec.key} memo IC step APPROVED`); });
                await step(`  ${spec.key} memo MD step (long chain only)`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId, staff.md); ok(`  ${spec.key} memo MD step APPROVED`); });
            }
            const checklist = await documents.getChecklistStatus('FACILITY_APPLICATION', 'counterparty_facility_application', application.id);
            for (const documentType of checklist.missing) {
                await documents.attach({ entityType: 'counterparty_facility_application', entityId: application.id, documentType, fileReference: `s3://walkthrough-demo/${spec.key}-facility/${documentType.toLowerCase()}.pdf` }, staff.finadmin);
            }
            if (checklist.missing.length > 0)
                ok(`${checklist.missing.length} required document(s) attached (demo references)`);
            const refreshedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
            if (refreshedApp.status === 'DRAFT') {
                const latestMemo = await prisma.investmentMemo.findFirst({ where: { facilityApplicationId: application.id }, orderBy: { version: 'desc' } });
                if (latestMemo && (latestMemo.status === 'CIO_APPROVED' || latestMemo.status === 'MD_APPROVED')) {
                    await counterparties.reviewAndSubmitFacilityApplication(application.id, staff.portoff);
                    ok(`facility application DRAFT -> SUBMITTED for ${cp.legalName}`);
                }
            }
            if (!spec.installments) {
                ok(`${cp.legalName}'s facility deliberately left at SUBMITTED (awaiting review chain) — demonstrates a live item in the approval queue`);
                return;
            }
            const submittedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
            if (submittedApp.workflowInstanceId && submittedApp.status === 'SUBMITTED') {
                await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.risk);
                await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.bd);
                await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.finadmin);
                await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.compliance);
                ok(`facility application review chain APPROVED for ${cp.legalName}`);
                await counterparties.markFacilityApplicationDisbursed(application.id, staff.portoff);
                await counterparties.recordFundAccountingTerms(application.id, spec.targetReturnPct, staff.finadmin);
                ok(`facility DISBURSED for ${cp.legalName}, Fund Accounting terms recorded (${spec.targetReturnPct}%)`);
            }
            const existingObligations = await prisma.counterpartyRepaymentObligation.count({ where: { counterpartyId: cp.id, facilityApplicationId: application.id } });
            if (existingObligations === 0) {
                const plan = spec.installments;
                const amountEach = spec.amountKobo / BigInt(plan.count);
                const remainder = spec.amountKobo - amountEach * BigInt(plan.count);
                let paidCount = 0;
                for (let i = 0; i < plan.count; i++) {
                    const dueDate = monthsFromNow(plan.firstDueOffsetMonths + i * plan.cadenceMonths);
                    const installmentAmount = i === plan.count - 1 ? amountEach + remainder : amountEach;
                    const obligation = await paymentReminder.createObligation({
                        counterpartyId: cp.id, facilityApplicationId: application.id, dueDate, amountKobo: installmentAmount, createdByUserId: staff.portoff,
                    });
                    if (i < plan.paidThrough) {
                        await paymentReminder.markPaid(obligation.id, staff.portoff);
                        paidCount++;
                    }
                }
                const overdueCount = plan.firstDueOffsetMonths < 0 ? Math.max(0, Math.min(plan.count, Math.ceil(-plan.firstDueOffsetMonths / plan.cadenceMonths) + 1) - plan.paidThrough) : 0;
                ok(`repayment schedule created for ${cp.legalName}: ${plan.count} installments (${plan.cadenceMonths === 1 ? 'monthly' : 'quarterly'}), ${paidCount} PAID, ~${Math.max(0, overdueCount)} overdue-and-unpaid, remainder upcoming`);
            }
            else {
                ok(`repayment schedule already on file for ${cp.legalName} (${existingObligations} installments, idempotent re-run)`);
            }
        });
    }
    ok('Part A complete: 6 counterparties + facility applications + repayment schedules');
    for (const spec of INVESTORS) {
        await step(`investor ${spec.fullLegalName}`, async () => {
            let investor = await prisma.investor.findUnique({ where: { contactEmail: spec.contactEmail } });
            if (!investor) {
                const express = await investors.onboardExpress({
                    fullLegalName: spec.fullLegalName, entityType: spec.entityType, nationality: 'NG',
                    bvn: spec.bvn, rcNumber: spec.rcNumber, contactEmail: spec.contactEmail, contactPhone: spec.contactPhone,
                    onboardedByUserId: staff.bd, sanctionsScreenResult: 'CLEAR',
                });
                await investors.submitStage2Fields({
                    investorId: express.investorId, taxIdentificationNumber: spec.tin, registeredAddress: spec.address,
                    sourceOfFunds: spec.sourceOfFunds, actorUserId: staff.bd,
                });
                const grades = spec.riskTier === 'HIGH'
                    ? [...NINE_LOW_GRADES.slice(0, 8), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH', rationale: 'Corporate multi-party ownership pending further documentation.' }]
                    : NINE_LOW_GRADES;
                await investors.recordComplianceRiskAssessment({
                    investorId: express.investorId, riskMetricGrades: grades, pepSanctionsGrid: INVESTOR_PEP_GRID,
                    complianceObservations: spec.riskTier === 'HIGH' ? 'Corporate applicant — EDD recommended.' : 'Standard profile, well documented.',
                    assessedByUserId: staff.compliance,
                });
                const instance = await investors.submitOnboardingCaseForReview(express.investorId, staff.bd);
                await investors.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: staff.ic1 });
                if (spec.riskTier === 'HIGH') {
                    await investors.recordRiskReview({
                        workflowInstanceId: instance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
                        eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for 12 months; quarterly source-of-funds refresh.', approverUserId: staff.risk,
                    });
                    await investors.recordMdDecision({ workflowInstanceId: instance.id, decision: 'APPROVED', conditionsOrReason: 'Approved per Risk recommendation.', approverUserId: staff.md });
                }
                else {
                    await investors.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'ANNUAL', riskNotes: 'Standard monitoring.', approverUserId: staff.risk });
                }
                await investors.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: staff.ic1 });
                investor = await prisma.investor.findUniqueOrThrow({ where: { investorId: express.investorId } });
                ok(`investor onboarded: ${investor.fullLegalName} (${investor.investorId}) — ${spec.riskTier} risk`);
            }
            else {
                ok(`investor already on file: ${investor.fullLegalName} (idempotent re-run)`);
            }
            const existingSub = await prisma.subscriptionRequest.findFirst({ where: { investorId: investor.investorId, productCode: spec.productCode } });
            if (!existingSub) {
                const request = await subs.initiateSubscription({ investorId: investor.investorId, productCode: spec.productCode, amountKobo: spec.principalKobo, effectiveDate, initiatedByUserId: staff.portoff });
                const payerBankAccount = await prisma.investorBankAccount.create({ data: { investorId: investor.investorId, bankName: 'Walkthrough Demo Bank', accountNumber: `9${spec.key.padEnd(9, '0').slice(0, 9)}`.slice(0, 10), accountName: spec.fullLegalName } });
                await subs.approveSubscription({ workflowInstanceId: request.workflowInstanceId, approverUserId: staff.portmgr, journalInitiatorUserId: staff.finadmin, payerBankAccountId: payerBankAccount.id });
                ok(`subscription APPROVED: ${investor.fullLegalName} -> ${spec.productCode}, ₦${(spec.principalKobo / 100n).toLocaleString()}`);
            }
            else {
                ok(`subscription already on file for ${investor.fullLegalName} (idempotent re-run)`);
            }
        });
    }
    ok('Part B complete: 6 named investors onboarded + subscribed');
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=walkthrough-seed-expansion-v2.js.map