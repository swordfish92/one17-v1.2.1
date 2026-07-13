"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const document_service_1 = require("../src/document/document.service");
const notification_service_1 = require("../src/notification/notification.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const investor_service_1 = require("../src/investor/investor.service");
const portal_auth_service_1 = require("../src/portal-auth/portal-auth.service");
const nd_mandate_engine_service_1 = require("../src/engine-nd-mandate/nd-mandate-engine.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const letterhead_service_1 = require("../src/letterhead/letterhead.service");
const certificate_service_1 = require("../src/certificate/certificate.service");
const subscription_service_1 = require("../src/subscription/subscription.service");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
const CLIENT_COUNT = Number(process.env.CLIENT_COUNT ?? 500);
const HF_CODE = 'ONE17-HALAL-FUND-01';
const HF_PRODUCT_CODE = 'ONE17-HALAL-FUND';
const POOL_CODE = 'ONE17-MUDARABAH-POOL-01';
const POOL_PRODUCT_CODE = 'ONE17-MUDARABAH-POOL-1';
const ND_MANDATE_CODE = 'ONE17-ND-MANDATE-01';
const ND_MANDATE_PRODUCT_CODE = 'ONE17-ND-MANDATE-1';
const FIRST_NAMES = ['Adeola', 'Chidinma', 'Emeka', 'Fatimah', 'Gbenga', 'Halima', 'Ikechukwu', 'Jumoke',
    'Kelechi', 'Lawal', 'Modupe', 'Ngozi', 'Oluwaseun', 'Precious', 'Quadri', 'Rukayat', 'Sunday', 'Temitope',
    'Uche', 'Victoria', 'Wasiu', 'Yetunde', 'Zainab', 'Abiodun', 'Blessing', 'Chukwuemeka', 'Damilola', 'Efe'];
const LAST_NAMES = ['Adebayo', 'Balogun', 'Chukwu', 'Dauda', 'Eze', 'Folarin', 'Gambo', 'Hassan', 'Ibrahim',
    'Jibril', 'Kalu', 'Lawal', 'Mohammed', 'Nwosu', 'Okafor', 'Peters', 'Quadri', 'Rabiu', 'Suleiman', 'Tanko',
    'Udoh', 'Vincent', 'Wale', 'Yakubu', 'Zubair', 'Abubakar', 'Bello', 'Chinedu', 'Danjuma', 'Etim'];
const CORP_WORDS = ['Sahara', 'Delta', 'Savanna', 'Horizon', 'Baobab', 'Coastal', 'Sterling', 'Meridian',
    'Emerald', 'Pinnacle', 'Crescent', 'Everline', 'Vanguard', 'Zenith', 'Highgate', 'Northbridge'];
const CORP_SECTORS = ['Trading', 'Logistics', 'AgroExports', 'Textiles', 'Construction', 'Energy', 'Foods',
    'Ventures', 'Industries', 'Commodities'];
const CITIES_ADDR = ['12 Awolowo Road, Ikoyi, Lagos', '45 Adeola Odeku Street, Victoria Island, Lagos',
    '8 Ahmadu Bello Way, Wuse 2, Abuja', '23 Ademola Adetokunbo Crescent, Wuse 2, Abuja',
    '3 Aba Road, Port Harcourt', '17 Airport Road, Kano', '9 Ring Road, Ibadan'];
function synthInvestor(i) {
    const isCorporate = i % 5 === 0;
    const email = `client${String(i).padStart(4, '0')}@walkthrough.example.com`;
    const address = CITIES_ADDR[i % CITIES_ADDR.length];
    const phone = `+2348${String(100000000 + i).padStart(9, '0')}`;
    if (isCorporate) {
        const name = `${CORP_WORDS[i % CORP_WORDS.length]} ${CORP_SECTORS[(i * 3) % CORP_SECTORS.length]} Ltd`;
        return {
            isCorporate, email, address, phone,
            fullLegalName: name, entityType: 'CORPORATE',
            rcNumber: `RC${2100000 + i}`, bvn: undefined,
            tin: `TIN-${String(2000000000 + i).padStart(10, '0')}`,
            sourceOfFunds: 'Trading and distribution revenue (multi-year operating history)',
        };
    }
    const first = FIRST_NAMES[i % FIRST_NAMES.length];
    const last = LAST_NAMES[(i * 7) % LAST_NAMES.length];
    return {
        isCorporate, email, address, phone,
        fullLegalName: `${first} ${last}`, entityType: 'HNWI_INDIVIDUAL',
        rcNumber: undefined, bvn: `220${String(10000000 + i).padStart(8, '0')}`,
        tin: `TIN-${String(1000000000 + i).padStart(10, '0')}`,
        sourceOfFunds: 'Salary and personal investment income',
    };
}
function principalKobo(i) {
    const naira = 1_000_000 + ((i * 37_919) % 49_000_000);
    return BigInt(naira) * 100n;
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, portalAuth, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const subs = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const staffEmails = {
        bd: 'ngozi.eze@one17capital.com', compliance: 'tunde.bakare@one17capital.com',
        ic1: 'ibrahim.yusuf@one17capital.com', risk: 'fatima.sule@one17capital.com',
        portoff: 'chidi.okafor@one17capital.com', portmgr: 'amaka.obi@one17capital.com', md: 'amara.chukwu@one17capital.com',
        finadmin: 'bola.adeyemi@one17capital.com',
    };
    const staff = {};
    for (const [label, email] of Object.entries(staffEmails)) {
        const user = await prisma.appUser.findUnique({ where: { email } });
        if (!user)
            fail(`Staff user ${email} not found -- run scripts/walkthrough-seed.ts first.`);
        staff[label] = user.id;
    }
    ok('staff roster resolved (reused from walkthrough-seed.ts, no new users created)');
    let mandateEntity = await prisma.ledgerEntity.findUnique({ where: { code: ND_MANDATE_CODE } });
    if (!mandateEntity) {
        mandateEntity = await prisma.ledgerEntity.create({
            data: { code: ND_MANDATE_CODE, name: 'One17 ND Mandate Book', entityType: 'MANDATE', primaryBasis: 'AAOIFI' },
        });
        await prisma.product.upsert({
            where: { code: ND_MANDATE_PRODUCT_CODE },
            create: { code: ND_MANDATE_PRODUCT_CODE, name: 'ND Mandate', engineType: 'MANDATE' },
            update: {},
        });
        ok('ND Mandate ledger entity + product created');
    }
    const hfEntity = await prisma.ledgerEntity.findUnique({ where: { code: HF_CODE } });
    if (!hfEntity)
        fail(`${HF_CODE} not found -- run scripts/walkthrough-seed.ts first (Halal Fund NAV must be published).`);
    const poolEntity = await prisma.ledgerEntity.findUnique({ where: { code: POOL_CODE } });
    if (!poolEntity)
        fail(`${POOL_CODE} not found -- run scripts/walkthrough-seed.ts first.`);
    const latestNav = await prisma.navRecord.findFirst({ where: { ledgerEntityCode: HF_CODE }, orderBy: { valuationDate: 'desc' } });
    if (!latestNav)
        fail(`No published NAV for ${HF_CODE} -- run scripts/walkthrough-seed.ts first.`);
    const effectiveDate = latestNav.valuationDate;
    ok(`Reusing latest published Halal Fund NAV: ${Number(latestNav.navPerUnit)}/unit (${effectiveDate.toISOString().slice(0, 10)})`);
    for (const productCode of [HF_PRODUCT_CODE, POOL_PRODUCT_CODE, ND_MANDATE_PRODUCT_CODE]) {
        const product = await prisma.product.findUnique({ where: { code: productCode } });
        if (!product?.shariahApprovedAt) {
            fail(`Product ${productCode} has no recorded Shariah approval -- SubscriptionService will refuse every subscription against it (invariant 42a/44b). Run ProductService.approveProductShariah({ productCode: '${productCode}', ssbResolutionRef: '<real ref>', approvedByUserId: <a SHARIAH_REV user id> }) first. See CHECK9_EVIDENCE.md for why this was left as a parked decision rather than auto-approved here.`);
        }
    }
    ok('all three target products carry a recorded Shariah approval -- safe to proceed');
    const NINE_LOW_GRADES = [
        'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
        'TRANSACTION_COMPLEXITY', 'DELIVERY_CHANNEL', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
    ].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Routine, well-documented profile.' }));
    const PEP_SANCTIONS_GRID = [
        { target: 'INVESTOR_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    ];
    let created = 0, skipped = 0, failed = 0;
    const startTime = Date.now();
    for (let i = 1; i <= CLIENT_COUNT; i++) {
        const spec = synthInvestor(i);
        try {
            const already = await prisma.investor.findUnique({ where: { contactEmail: spec.email } });
            if (already) {
                skipped++;
                continue;
            }
            const express = await investors.onboardExpress({
                fullLegalName: spec.fullLegalName, entityType: spec.entityType, nationality: 'NG',
                bvn: spec.bvn, rcNumber: spec.rcNumber, contactEmail: spec.email, contactPhone: spec.phone,
                onboardedByUserId: staff.bd, sanctionsScreenResult: 'CLEAR',
            });
            await investors.submitStage2Fields({
                investorId: express.investorId, taxIdentificationNumber: spec.tin,
                registeredAddress: spec.address, sourceOfFunds: spec.sourceOfFunds, actorUserId: staff.bd,
            });
            const grades = spec.isCorporate
                ? [...NINE_LOW_GRADES.slice(0, 8), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH', rationale: 'Corporate multi-party ownership pending further documentation.' }]
                : NINE_LOW_GRADES;
            await investors.recordComplianceRiskAssessment({
                investorId: express.investorId, riskMetricGrades: grades, pepSanctionsGrid: PEP_SANCTIONS_GRID,
                complianceObservations: spec.isCorporate ? 'Corporate applicant -- EDD recommended.' : 'Standard individual profile.',
                assessedByUserId: staff.compliance,
            });
            const instance = await investors.submitOnboardingCaseForReview(express.investorId, staff.bd);
            await investors.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: staff.ic1 });
            if (spec.isCorporate) {
                await investors.recordRiskReview({
                    workflowInstanceId: instance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
                    eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for 12 months.',
                    approverUserId: staff.risk,
                });
                await investors.recordMdDecision({ workflowInstanceId: instance.id, decision: 'APPROVED', conditionsOrReason: 'Approved per Risk recommendation.', approverUserId: staff.md });
            }
            else {
                await investors.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'ANNUAL', riskNotes: 'Standard monitoring.', approverUserId: staff.risk });
            }
            await investors.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: staff.ic1 });
            const bucket = i % 3;
            const productCode = bucket === 0 ? HF_PRODUCT_CODE : bucket === 1 ? POOL_PRODUCT_CODE : ND_MANDATE_PRODUCT_CODE;
            const principal = principalKobo(i);
            const request = await subs.initiateSubscription({
                investorId: express.investorId, productCode, amountKobo: principal, effectiveDate, initiatedByUserId: staff.portoff,
            });
            const payerBankAccount = await prisma.investorBankAccount.create({
                data: { investorId: express.investorId, bankName: 'Walkthrough Demo Bank', accountNumber: `9${String(i).padStart(9, '0')}`, accountName: spec.fullLegalName },
            });
            await subs.approveSubscription({
                workflowInstanceId: request.workflowInstanceId, approverUserId: staff.portmgr,
                journalInitiatorUserId: staff.finadmin, payerBankAccountId: payerBankAccount.id,
            });
            created++;
            if (created % 25 === 0) {
                const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
                console.log(`... ${created} created, ${skipped} skipped, ${failed} failed (${elapsedSec}s elapsed)`);
            }
        }
        catch (err) {
            failed++;
            console.error(`FAILED at index ${i} (${spec.email}):`, err instanceof Error ? err.message : err);
        }
    }
    ok(`Bulk client generation complete: ${created} created, ${skipped} skipped (already existed), ${failed} failed. Total elapsed: ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=walkthrough-seed-bulk-clients.js.map