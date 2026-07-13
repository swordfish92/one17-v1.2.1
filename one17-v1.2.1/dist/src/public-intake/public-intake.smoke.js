"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const document_service_1 = require("../document/document.service");
const workflow_service_1 = require("../workflow/workflow.service");
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const investor_service_1 = require("../investor/investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const privacy_notice_service_1 = require("../data-protection/privacy-notice.service");
const public_intake_service_1 = require("./public-intake.service");
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
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); process.exitCode = 1; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const privacyNotice = new privacy_notice_service_1.PrivacyNoticeService(prisma, audit);
    const publicIntake = new public_intake_service_1.PublicIntakeService(prisma, audit, delegation, investors, counterparties, privacyNotice);
    const users = new Map();
    const makeUser = async (label, roleCode) => {
        const email = `pub-intake-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        users.set(label, user);
        return user;
    };
    const id = (label) => users.get(label).id;
    await makeUser('bd', 'BD');
    await makeUser('portmgr', 'PORT_MGR');
    await makeUser('outsider', 'SHARIAH_REV');
    const investorIds = [];
    const counterpartyIds = [];
    const submissionIds = [];
    const beforeInvestorCount = await prisma.investor.count();
    const submitted = await publicIntake.submitInvestorExpress({
        fullLegalName: `Public Applicant ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-PUB-${RUN}`, contactEmail: `pub-applicant-${RUN}@example.com`, contactPhone: '+2340000000099',
        privacyNoticeAcknowledged: true,
    }, '203.0.113.1');
    submissionIds.push(submitted.id);
    const afterInvestorCount = await prisma.investor.count();
    if (afterInvestorCount === beforeInvestorCount && submitted.status === 'PENDING') {
        ok('an unauthenticated submission creates ONLY a public_intake_submission row — zero Investor rows created (invariant 28d)');
    }
    else {
        fail('public submission unexpectedly touched Investor rows', { beforeInvestorCount, afterInvestorCount });
    }
    await expectReject('an outsider without INVESTOR_ONBOARDING/COUNTERPARTY_ONBOARDING VIEW cannot list the intake queue', () => publicIntake.listPending(id('outsider')));
    const pending = await publicIntake.listPending(id('bd'));
    if (pending.some((p) => p.id === submitted.id))
        ok('BD (holding INVESTOR_ONBOARDING VIEW) sees the pending submission in the queue');
    else
        fail('BD could not see the pending submission', pending);
    await expectReject('a PORT_MGR (no INVESTOR_ONBOARDING INITIATE) cannot promote an investor-express submission', () => publicIntake.promoteInvestorSubmission(submitted.id, id('portmgr'), 'CLEAR'));
    const promotedInvestor = await publicIntake.promoteInvestorSubmission(submitted.id, id('bd'), 'CLEAR');
    investorIds.push(promotedInvestor.investorId);
    if (promotedInvestor.onboardingStage === 'STAGE_1_EXPRESS' && promotedInvestor.stage1IssuedAt) {
        ok('promotion calls the REAL InvestorService.onboardExpress() — customer number issued exactly as Flow A would');
    }
    else {
        fail('promoted investor did not go through the real onboarding path as expected', promotedInvestor);
    }
    const submissionAfter = await prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submitted.id } });
    if (submissionAfter.status === 'PROMOTED' && submissionAfter.resultingInvestorId === promotedInvestor.investorId) {
        ok('submission row flips to PROMOTED with resultingInvestorId linked');
    }
    else {
        fail('submission row not correctly updated after promotion', submissionAfter);
    }
    await expectReject('promoting an already-PROMOTED submission a second time is refused', () => publicIntake.promoteInvestorSubmission(submitted.id, id('bd'), 'CLEAR'));
    const flaggedSubmission = await publicIntake.submitInvestorExpress({
        fullLegalName: `Public Applicant Flagged ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        bvn: `BVN-PUBFLAG-${RUN}`, contactEmail: `pub-applicant-flagged-${RUN}@example.com`, contactPhone: '+2340000000098',
        privacyNoticeAcknowledged: true,
    });
    submissionIds.push(flaggedSubmission.id);
    await expectReject('promoting with a FLAGGED sanctions result still blocks customer-number issuance (same rule as direct onboardExpress)', () => publicIntake.promoteInvestorSubmission(flaggedSubmission.id, id('bd'), 'FLAGGED'));
    const beforeCounterpartyCount = await prisma.counterparty.count();
    const cpSubmission = await publicIntake.submitCounterparty({
        legalName: `Public Investee ${RUN}`, counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
        amountSoughtKobo: '50000000', expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
        privacyNoticeAcknowledged: true,
    }, '203.0.113.2');
    submissionIds.push(cpSubmission.id);
    const afterCounterpartyCount = await prisma.counterparty.count();
    if (afterCounterpartyCount === beforeCounterpartyCount)
        ok('public counterparty submission also creates zero Counterparty rows until promoted');
    else
        fail('public counterparty submission unexpectedly created a Counterparty row', { beforeCounterpartyCount, afterCounterpartyCount });
    const promotedCounterparty = await publicIntake.promoteCounterpartySubmission(cpSubmission.id, id('portmgr'));
    counterpartyIds.push(promotedCounterparty.id);
    if (promotedCounterparty.onboardingStatus === 'DRAFT' && promotedCounterparty.creditBureauConsentAt) {
        ok('promotion calls the REAL CounterpartyService.onboard() — DRAFT status + credit-bureau consent captured exactly as Flow B would');
    }
    else {
        fail('promoted counterparty did not go through the real onboarding path as expected', promotedCounterparty);
    }
    const rejectSubmission = await publicIntake.submitInvestorExpress({
        fullLegalName: `Spam Applicant ${RUN}`, entityType: 'HNWI_INDIVIDUAL', nationality: 'NG',
        contactEmail: `spam-${RUN}@example.com`, contactPhone: '+2340000000097',
        privacyNoticeAcknowledged: true,
    });
    submissionIds.push(rejectSubmission.id);
    const rejected = await publicIntake.reject(rejectSubmission.id, id('bd'), 'Spam / duplicate submission.');
    if (rejected.status === 'REJECTED')
        ok('staff can reject a submission without ever creating an Investor/Counterparty row');
    else
        fail('reject did not flip status to REJECTED', rejected);
    await prisma.publicIntakeSubmission.deleteMany({ where: { id: { in: submissionIds } } });
    await prisma.investorOnboardingCase.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.investor.deleteMany({ where: { investorId: { in: investorIds } } });
    await prisma.counterpartyOnboardingCase.deleteMany({ where: { counterpartyId: { in: counterpartyIds } } });
    await prisma.counterparty.deleteMany({ where: { id: { in: counterpartyIds } } });
    const userIds = [...users.values()].map((u) => u.id);
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    console.log('\nSMOKE OK — Public self-registration intake staging (CHECK5 item 5d) against the real live DB.');
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=public-intake.smoke.js.map