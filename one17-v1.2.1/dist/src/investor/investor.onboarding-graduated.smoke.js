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
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("./investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const ledger_service_1 = require("../ledger/ledger.service");
const RUN = Date.now().toString().slice(-8);
async function expectReject(label, fn) {
    try {
        await fn();
        console.error(`FAIL (expected rejection): ${label}`);
        process.exitCode = 1;
    }
    catch (err) {
        console.log(`OK: rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
function ok(label) {
    console.log(`OK: ${label}`);
}
function fail(label, detail) {
    console.error(`FAIL: ${label}`, detail ?? '');
    process.exitCode = 1;
}
const NINE_LOW_GRADES = [
    'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
    'TRANSACTION_COMPLEXITY', 'DELIVERY_CHANNEL', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Smoke test: routine profile.' }));
const PEP_SANCTIONS_GRID = [
    { target: 'INVESTOR_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
];
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `grad-onb-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('bd', 'BD');
    await makeUser('compliance', 'COMPLIANCE');
    await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
    await makeUser('risk', 'RISK_DEPT');
    await makeUser('md', 'MD_CEO');
    await makeUser('outsider', 'INVESTOR');
    await makeUser('finadmin', 'FIN_ADMIN');
    const investorIdsCreated = [];
    const workflowInstanceIds = [];
    const leadIds = [];
    const beforeCount = await prisma.investor.count();
    await expectReject('sanctions-hit at Stage-1 Express blocks customer-number issuance entirely', () => investors.onboardExpress({
        fullLegalName: 'Flagged Person', entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        contactEmail: `flagged-${RUN}@one17.test`, contactPhone: '+2340000000001',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'FLAGGED',
    }));
    const afterCount = await prisma.investor.count();
    if (afterCount === beforeCount)
        ok('no Investor row was created for the flagged attempt');
    else
        fail(`expected investor count unchanged (${beforeCount}), got ${afterCount}`);
    const lead = await prisma.lead.create({
        data: { fullNameOrCompany: 'Prospective Client Ltd', source: 'referral', createdByUserId: id('bd') },
    });
    leadIds.push(lead.id);
    const expressInvestor = await investors.onboardExpress({
        fullLegalName: 'Prospective Client Ltd', entityType: 'CORPORATE', nationality: 'NG',
        rcNumber: `RC-${RUN}`, contactEmail: `express-${RUN}@one17.test`, contactPhone: '+2340000000002',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR', leadId: lead.id,
    });
    investorIdsCreated.push(expressInvestor.investorId);
    if (expressInvestor.onboardingStage === 'STAGE_1_EXPRESS' && expressInvestor.stage1IssuedAt && expressInvestor.stage2DeadlineAt) {
        ok(`Stage-1 Express customer number issued: ${expressInvestor.investorId}, stage2 deadline set`);
    }
    else {
        fail('Stage-1 Express onboarding did not set expected fields', expressInvestor);
    }
    const convertedLead = await prisma.lead.findUniqueOrThrow({ where: { id: lead.id } });
    if (convertedLead.status === 'CONVERTED' && convertedLead.convertedInvestorId === expressInvestor.investorId) {
        ok('BD register funnel: lead flipped LEAD -> CONVERTED with convertedInvestorId set (invariant 27c)');
    }
    else {
        fail('lead conversion did not link to the new investor', convertedLead);
    }
    const ledgerEntityCode = `SMOKE-GRAD-ONB-${RUN}`;
    await prisma.ledgerEntity.create({ data: { code: ledgerEntityCode, name: 'Smoke Graduated Onboarding Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
    await prisma.product.upsert({ where: { code: 'ONE17-HALAL-FUND' }, create: { code: 'ONE17-HALAL-FUND', name: 'Halal Fund', engineType: 'UNIT_NAV' }, update: {} });
    const account = await prisma.productAccount.create({
        data: { investorId: expressInvestor.investorId, productCode: 'ONE17-HALAL-FUND', startDate: new Date(), principalOrCommittedKobo: 0n },
    });
    const ownBankAccount = await prisma.investorBankAccount.create({
        data: { investorId: expressInvestor.investorId, bankName: 'Test Bank', accountNumber: '0000011111', accountName: 'Prospective Client Ltd', isPrimary: true },
    });
    await ledger.createTxn({
        txnType: 'SUBSCRIPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 40000000n, makerUserId: id('finadmin'), payerBankAccountId: ownBankAccount.id,
    });
    ok('own-account deposit under the ₦1,000,000 Stage-1 cap succeeds');
    await expectReject('deposit with neither payerBankAccountId nor thirdPartyPayer is refused for a Stage-1 Express investor', () => ledger.createTxn({
        txnType: 'SUBSCRIPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 1000000n, makerUserId: id('finadmin'),
    }));
    await expectReject('a payerBankAccountId that is not the investor\'s own registered account is refused (third-party requires a declaration)', () => ledger.createTxn({
        txnType: 'SUBSCRIPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 1000000n, makerUserId: id('finadmin'), payerBankAccountId: 'not-a-real-id',
    }));
    const thirdPartyTxn = await ledger.createTxn({
        txnType: 'SUBSCRIPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 20000000n, makerUserId: id('finadmin'),
        thirdPartyPayer: { payerName: 'A Friend', payerBankName: 'Other Bank', payerAccountNumber: '0000022222', declaredRelationship: 'Friend' },
    });
    const inflowLog = await prisma.paymentInflowLog.findUnique({ where: { txnId: thirdPartyTxn.id } });
    if (inflowLog?.complianceFlagged && inflowLog.beneficiaryInvestorId === expressInvestor.investorId) {
        ok('declared third-party deposit succeeds and creates a Compliance-flagged payment_inflow_log row (invariant 28a)');
    }
    else {
        fail('third-party deposit did not create the expected payment_inflow_log row', inflowLog);
    }
    await expectReject('a deposit that would push cumulative Stage-1 deposits past the ₦1,000,000 cap is refused', () => ledger.createTxn({
        txnType: 'SUBSCRIPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 50000000n, makerUserId: id('finadmin'), payerBankAccountId: ownBankAccount.id,
    }));
    await expectReject('REDEMPTION is refused at the service layer for a Stage-1 Express investor', () => ledger.createTxn({
        txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 100000n, makerUserId: id('finadmin'),
    }));
    await expectReject('the DB trigger ALSO rejects a raw REDEMPTION insert bypassing LedgerService', () => prisma.txn.create({
        data: { txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(), amountKobo: 100000n, makerUserId: id('finadmin') },
    }));
    await investors.submitStage2Fields({
        investorId: expressInvestor.investorId, taxIdentificationNumber: `TIN-${RUN}`,
        registeredAddress: '1 Test Close, Lagos', sourceOfFunds: 'Business proceeds', actorUserId: id('bd'),
    });
    ok('Stage-2 fields submitted (TIN/address/source of funds)');
    const lowCase = await investors.recordComplianceRiskAssessment({
        investorId: expressInvestor.investorId, riskMetricGrades: NINE_LOW_GRADES,
        pepSanctionsGrid: PEP_SANCTIONS_GRID, complianceObservations: 'All routine.', assessedByUserId: id('compliance'),
    });
    if (lowCase.accumulativeRiskProfile === 'LOW' && lowCase.eddRequired === false) {
        ok('9-metric aggregation: all LOW -> accumulativeRiskProfile LOW, eddRequired false');
    }
    else {
        fail('LOW-path aggregation mismatch', lowCase);
    }
    const investorAfterAssessment = await prisma.investor.findUniqueOrThrow({ where: { investorId: expressInvestor.investorId } });
    if (investorAfterAssessment.amlRiskRating === 'LOW')
        ok('Investor.amlRiskRating mirrors the computed profile (LOW)');
    else
        fail(`expected amlRiskRating LOW, got ${investorAfterAssessment.amlRiskRating}`);
    const lowInstance = await investors.submitOnboardingCaseForReview(expressInvestor.investorId, id('bd'));
    workflowInstanceIds.push(lowInstance.id);
    await expectReject('an outsider without ONBOARDING_IC_REVIEW cannot approve IC1', () => investors.recordIc1Review({ workflowInstanceId: lowInstance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('outsider') }));
    await investors.recordIc1Review({ workflowInstanceId: lowInstance.id, checklist: { KYC_COMPLETE: 'PASS', SCREENING_ON_FILE: 'PASS' }, notes: 'Complete.', pass: true, approverUserId: id('ic1') });
    await investors.recordRiskReview({ workflowInstanceId: lowInstance.id, periodicReviewFrequency: 'ANNUAL', riskNotes: 'Standard monitoring.', approverUserId: id('risk') });
    const lowFinal = await investors.recordIc2Review({ workflowInstanceId: lowInstance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
    if (lowFinal.status === 'APPROVED')
        ok('LOW/MEDIUM_LOW chain (IC1 -> Risk -> IC2) reaches APPROVED with no MD step');
    else
        fail('LOW/MEDIUM_LOW chain did not reach APPROVED', lowFinal);
    const investorFinalized = await prisma.investor.findUniqueOrThrow({ where: { investorId: expressInvestor.investorId } });
    if (investorFinalized.kycStatus === 'KYC_COMPLETE' && investorFinalized.onboardingStage === 'STAGE_2_COMPLETE') {
        ok('IC2 SATISFACTORY finalizes KYC: kycStatus KYC_COMPLETE, onboardingStage STAGE_2_COMPLETE — full rights unlocked');
    }
    else {
        fail('IC2 completion did not finalize the investor', investorFinalized);
    }
    await ledger.createTxn({
        txnType: 'REDEMPTION', ledgerEntityCode, productAccountId: account.id, valueDate: new Date(),
        amountKobo: 100000n, makerUserId: id('finadmin'),
    });
    ok('REDEMPTION now succeeds once onboardingStage is STAGE_2_COMPLETE (the block was Stage-1-specific, not permanent)');
    const highInvestorDeclined = await investors.onboardExpress({
        fullLegalName: 'High Risk Prospect', entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-DECL-${RUN}`, contactEmail: `highrisk-decline-${RUN}@one17.test`, contactPhone: '+2340000000003',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
    });
    investorIdsCreated.push(highInvestorDeclined.investorId);
    await investors.submitStage2Fields({ investorId: highInvestorDeclined.investorId, taxIdentificationNumber: `TIN-H1-${RUN}`, registeredAddress: 'Addr', sourceOfFunds: 'Trading', actorUserId: id('bd') });
    const highGradesOneHigh = [...NINE_LOW_GRADES.slice(0, 8), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH', rationale: 'Unverifiable wealth source.' }];
    const highCaseDeclined = await investors.recordComplianceRiskAssessment({
        investorId: highInvestorDeclined.investorId, riskMetricGrades: highGradesOneHigh, pepSanctionsGrid: PEP_SANCTIONS_GRID,
        complianceObservations: 'One High metric.', assessedByUserId: id('compliance'),
    });
    if (highCaseDeclined.accumulativeRiskProfile === 'HIGH' && highCaseDeclined.eddRequired) {
        ok('a single HIGH metric forces accumulativeRiskProfile HIGH regardless of the other 8 (template rule)');
    }
    else {
        fail('single-HIGH-metric rule failed', highCaseDeclined);
    }
    const highInstanceDeclined = await investors.submitOnboardingCaseForReview(highInvestorDeclined.investorId, id('bd'));
    workflowInstanceIds.push(highInstanceDeclined.id);
    await investors.recordIc1Review({ workflowInstanceId: highInstanceDeclined.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
    await investors.recordRiskReview({ workflowInstanceId: highInstanceDeclined.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE' }, eddRecommendation: 'DECLINE', eddConditionsOrBasis: 'Unresolved source of wealth.', approverUserId: id('risk') });
    const mdDeclined = await investors.recordMdDecision({ workflowInstanceId: highInstanceDeclined.id, decision: 'DECLINED', conditionsOrReason: 'Insufficient evidence.', approverUserId: id('md') });
    if (mdDeclined.status === 'REJECTED')
        ok('MD DECLINED stops the HIGH_RISK chain before IC2 (workflow REJECTED)');
    else
        fail('MD DECLINED did not reject the workflow', mdDeclined);
    const declinedInvestorAfter = await prisma.investor.findUniqueOrThrow({ where: { investorId: highInvestorDeclined.investorId } });
    if (declinedInvestorAfter.kycStatus !== 'KYC_COMPLETE')
        ok('a DECLINED file never finalizes KYC');
    else
        fail('a DECLINED file incorrectly finalized KYC', declinedInvestorAfter);
    const highInvestorApproved = await investors.onboardExpress({
        fullLegalName: 'High Risk Prospect 2', entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-APPR-${RUN}`, contactEmail: `highrisk-approve-${RUN}@one17.test`, contactPhone: '+2340000000004',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
    });
    investorIdsCreated.push(highInvestorApproved.investorId);
    await investors.submitStage2Fields({ investorId: highInvestorApproved.investorId, taxIdentificationNumber: `TIN-H2-${RUN}`, registeredAddress: 'Addr', sourceOfFunds: 'Trading', actorUserId: id('bd') });
    await investors.recordComplianceRiskAssessment({
        investorId: highInvestorApproved.investorId, riskMetricGrades: highGradesOneHigh, pepSanctionsGrid: PEP_SANCTIONS_GRID,
        complianceObservations: 'One High metric, EDD to follow.', assessedByUserId: id('compliance'),
    });
    const highInstanceApproved = await investors.submitOnboardingCaseForReview(highInvestorApproved.investorId, id('bd'));
    workflowInstanceIds.push(highInstanceApproved.id);
    await investors.recordIc1Review({ workflowInstanceId: highInstanceApproved.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: id('ic1') });
    await investors.recordRiskReview({ workflowInstanceId: highInstanceApproved.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' }, eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for 12 months.', approverUserId: id('risk') });
    await expectReject('an outsider without ONBOARDING_MD_APPROVAL cannot record the MD decision', () => investors.recordMdDecision({ workflowInstanceId: highInstanceApproved.id, decision: 'APPROVED', approverUserId: id('outsider') }));
    await investors.recordMdDecision({ workflowInstanceId: highInstanceApproved.id, decision: 'APPROVED', conditionsOrReason: 'Approved with enhanced monitoring.', approverUserId: id('md') });
    const highFinal = await investors.recordIc2Review({ workflowInstanceId: highInstanceApproved.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: id('ic1') });
    if (highFinal.status === 'APPROVED')
        ok('HIGH_RISK full chain (IC1 -> Risk EDD -> MD APPROVED -> IC2) reaches APPROVED');
    else
        fail('HIGH_RISK chain did not reach APPROVED', highFinal);
    const highApprovedInvestor = await prisma.investor.findUniqueOrThrow({ where: { investorId: highInvestorApproved.investorId } });
    if (highApprovedInvestor.kycStatus === 'KYC_COMPLETE' && highApprovedInvestor.amlRiskRating === 'HIGH') {
        ok('HIGH_RISK finalization sets kycStatus KYC_COMPLETE with the HIGH tier (1-year expiry per existing tiering)');
    }
    else {
        fail('HIGH_RISK finalization mismatch', highApprovedInvestor);
    }
    const rejectCase = await investors.onboardExpress({
        fullLegalName: 'IC1 Fail Case', entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-IC1-${RUN}`, contactEmail: `ic1fail-${RUN}@one17.test`, contactPhone: '+2340000000005',
        onboardedByUserId: id('bd'), sanctionsScreenResult: 'CLEAR',
    });
    investorIdsCreated.push(rejectCase.investorId);
    await investors.submitStage2Fields({ investorId: rejectCase.investorId, taxIdentificationNumber: `TIN-IC1-${RUN}`, registeredAddress: 'Addr', sourceOfFunds: 'Salary', actorUserId: id('bd') });
    await investors.recordComplianceRiskAssessment({ investorId: rejectCase.investorId, riskMetricGrades: NINE_LOW_GRADES, pepSanctionsGrid: PEP_SANCTIONS_GRID, assessedByUserId: id('compliance') });
    const rejectInstance = await investors.submitOnboardingCaseForReview(rejectCase.investorId, id('bd'));
    workflowInstanceIds.push(rejectInstance.id);
    const ic1Rejected = await investors.recordIc1Review({ workflowInstanceId: rejectInstance.id, checklist: { KYC_COMPLETE: 'FAIL' }, notes: 'Missing documents.', pass: false, approverUserId: id('ic1') });
    if (ic1Rejected.status === 'REJECTED')
        ok('IC1 FAIL rejects the workflow immediately — Risk/IC2 never reached');
    else
        fail('IC1 FAIL did not reject the workflow', ic1Rejected);
    await prisma.paymentInflowLog.deleteMany({ where: { beneficiaryInvestorId: { in: investorIdsCreated } } });
    await prisma.workflowStepApproval.deleteMany({ where: { workflowInstanceId: { in: workflowInstanceIds } } });
    await prisma.workflowInstance.deleteMany({ where: { id: { in: workflowInstanceIds } } });
    await prisma.investorOnboardingCase.deleteMany({ where: { investorId: { in: investorIdsCreated } } });
    await prisma.txn.deleteMany({ where: { productAccountId: account.id } });
    await prisma.investorBankAccount.deleteMany({ where: { investorId: { in: investorIdsCreated } } });
    await prisma.productAccount.deleteMany({ where: { investorId: { in: investorIdsCreated } } });
    await prisma.lead.deleteMany({ where: { id: { in: leadIds } } });
    await prisma.portalClientSession.deleteMany({
        where: { portalUserId: { in: (await prisma.portalClientUser.findMany({ where: { investorId: { in: investorIdsCreated } }, select: { id: true } })).map((u) => u.id) } },
    });
    await prisma.portalClientUser.deleteMany({ where: { investorId: { in: investorIdsCreated } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: investorIdsCreated } } });
    await prisma.ledgerEntity.deleteMany({ where: { code: ledgerEntityCode } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — Graduated dual-path onboarding + third-party payments (CHECK5 item 5a) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor.onboarding-graduated.smoke.js.map