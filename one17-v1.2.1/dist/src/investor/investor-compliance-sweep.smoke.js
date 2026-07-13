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
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const notification_service_1 = require("../notification/notification.service");
const task_service_1 = require("../task/task.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const investor_service_1 = require("./investor.service");
const investor_compliance_sweep_service_1 = require("./investor-compliance-sweep.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const investorService = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, portalAuth, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const sweep = new investor_compliance_sweep_service_1.InvestorComplianceSweepService(prisma, task);
    const systemUser = await prisma.appUser.create({ data: { email: `ics-system-${RUN}@one17.test`, displayName: 'ics-system' } });
    const complianceUser = await prisma.appUser.create({ data: { email: `ics-compliance-${RUN}@one17.test`, displayName: 'ics-compliance' } });
    await rbac.assignRole({ userId: complianceUser.id, roleCode: 'COMPLIANCE' });
    const orgUnitCode = `ICS_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'ICS Smoke Dept' } });
    const position = await prisma.position.create({ data: { title: `ICS Smoke Compliance ${RUN}`, orgUnitCode, cadre: 'Associate', notch: 1 } });
    const complianceEmployee = await prisma.employee.create({ data: { surname: 'Compliance', firstName: `Ics${RUN}`, positionId: position.id, orgUnitCode, appUserId: complianceUser.id, hireDate: new Date() } });
    const bd = await prisma.appUser.create({ data: { email: `ics-bd-${RUN}@one17.test`, displayName: 'ics-bd' } });
    await rbac.assignRole({ userId: bd.id, roleCode: 'BD' });
    const investor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-ICS-INV-${RUN}`, fullLegalName: 'Smoke ICS Investor', entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `ics-inv-${RUN}@one17.test`, contactPhone: '+2340000000070',
            onboardedByUserId: bd.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
        },
    });
    const longAgo = new Date('2020-01-01');
    await prisma.investorOnboardingCase.create({ data: { investorId: investor.investorId, periodicReviewFrequency: 'ANNUAL', lastPeriodicReviewAt: longAgo } });
    const now = new Date();
    const reviewSweep1 = await sweep.runKycPeriodicReviewSweep(now, systemUser.id);
    if (reviewSweep1.overdueCount >= 1 && reviewSweep1.tasksCreated >= 1)
        ok('KYC periodic review sweep detects the overdue case and raises a Task for the Compliance employee');
    else
        fail('KYC periodic review sweep did not detect/raise as expected', reviewSweep1);
    const tasksAfterFirstRun = await prisma.task.count({ where: { assigneeEmployeeId: complianceEmployee.id, deliverableUrl: '/compliance/queue', status: { in: ['OPEN', 'IN_PROGRESS'] } } });
    const reviewSweep2 = await sweep.runKycPeriodicReviewSweep(now, systemUser.id);
    const tasksAfterSecondRun = await prisma.task.count({ where: { assigneeEmployeeId: complianceEmployee.id, deliverableUrl: '/compliance/queue', status: { in: ['OPEN', 'IN_PROGRESS'] } } });
    if (reviewSweep2.tasksCreated === 0 && tasksAfterSecondRun === tasksAfterFirstRun)
        ok('re-running the sweep does not create a duplicate Task while the first is still OPEN (dedup on deliverableUrl)');
    else
        fail('sweep re-run created a duplicate Task', { tasksAfterFirstRun, tasksAfterSecondRun, reviewSweep2 });
    const queueBefore = await sweep.listComplianceQueue(now);
    if (queueBefore.overdueKycReviews.some((r) => r.kind === 'INVESTOR' && r.id === investor.investorId))
        ok('listComplianceQueue surfaces the same overdue investor the sweep detected');
    else
        fail('listComplianceQueue did not surface the overdue investor', queueBefore.overdueKycReviews);
    const reviewRecorded = await investorService.recordPeriodicReview(investor.investorId, complianceUser.id);
    if (reviewRecorded.lastPeriodicReviewAt && reviewRecorded.lastPeriodicReviewAt > longAgo)
        ok('recordPeriodicReview clears the due state (lastPeriodicReviewAt advances)');
    else
        fail('recordPeriodicReview did not advance lastPeriodicReviewAt', reviewRecorded);
    const queueAfter = await sweep.listComplianceQueue(now);
    if (!queueAfter.overdueKycReviews.some((r) => r.kind === 'INVESTOR' && r.id === investor.investorId))
        ok('after recordPeriodicReview, the investor no longer appears in the overdue queue');
    else
        fail('investor still appears overdue after recordPeriodicReview', queueAfter.overdueKycReviews);
    const sanctionsSweep1 = await sweep.runSanctionsRescreeningSweep(now, systemUser.id);
    if (sanctionsSweep1.dueCount >= 1 && sanctionsSweep1.tasksCreated >= 1)
        ok('sanctions re-screening sweep detects the never-screened investor and raises a Task (detection only, no invented result)');
    else
        fail('sanctions re-screening sweep did not detect/raise as expected', sanctionsSweep1);
    const screeningRecord = await investorService.recordScreening({
        investorId: investor.investorId,
        listsChecked: (await prisma.screeningChecklistItem.findMany({ where: { isActive: true } })).map((i) => ({ itemCode: i.itemCode, listVersionOrDate: '2026-07-09' })),
        searchTermsUsed: investor.fullLegalName,
        result: 'NO_MATCH',
        screenerUserId: complianceUser.id,
    });
    if (screeningRecord.result === 'NO_MATCH')
        ok('a real screening result is recorded via the existing InvestorService.recordScreening -- the sweep never fabricated this itself');
    else
        fail('recordScreening did not behave as expected', screeningRecord);
    const sanctionsSweep2 = await sweep.runSanctionsRescreeningSweep(now, systemUser.id);
    const stillDue = sanctionsSweep2.dueCount >= 1;
    const queueAfterScreening = await sweep.listComplianceQueue(now);
    if (!queueAfterScreening.sanctionsDue.some((r) => r.investorId === investor.investorId))
        ok('after recordScreening, the investor no longer appears in the sanctions-due queue');
    else
        fail('investor still appears sanctions-due after recordScreening', queueAfterScreening.sanctionsDue);
    void stillDue;
    const expiredDoc = await prisma.investorKycDocument.create({
        data: { investorId: investor.investorId, documentType: 'PASSPORT', fileReference: `smoke-${RUN}.pdf`, expiryDate: new Date('2020-01-01'), uploadedByUserId: bd.id },
    });
    const expirySweep = await sweep.runDocumentExpirySweep(now, systemUser.id);
    if (expirySweep.expiredCount >= 1 && expirySweep.tasksCreated >= 1)
        ok('document expiry sweep detects the already-expired KYC document and raises a Task');
    else
        fail('document expiry sweep did not detect the expired document as expected', expirySweep);
    const queueWithExpiry = await sweep.listComplianceQueue(now);
    if (queueWithExpiry.documentExpiry.some((d) => d.documentId === expiredDoc.id && d.isExpired))
        ok('listComplianceQueue surfaces the expired document, flagged isExpired');
    else
        fail('listComplianceQueue did not surface the expired document', queueWithExpiry.documentExpiry);
    const userIds = [systemUser.id, complianceUser.id, bd.id];
    await prisma.notification.deleteMany({ where: { recipientUserId: complianceUser.id } });
    await prisma.task.deleteMany({ where: { OR: [{ assigneeEmployeeId: complianceEmployee.id }, { assignedByUserId: { in: userIds } }] } });
    await prisma.investorKycDocument.deleteMany({ where: { investorId: investor.investorId } });
    await prisma.investorScreeningRecord.deleteMany({ where: { investorId: investor.investorId } });
    await prisma.investorOnboardingCase.deleteMany({ where: { investorId: investor.investorId } });
    await prisma.investor.delete({ where: { investorId: investor.investorId } });
    await prisma.employee.delete({ where: { id: complianceEmployee.id } });
    await prisma.position.delete({ where: { id: position.id } });
    await prisma.orgUnit.delete({ where: { code: orgUnitCode } });
    await prisma.userRole.deleteMany({ where: { userId: { in: userIds } } });
    await prisma.appUser.deleteMany({ where: { id: { in: userIds } } });
    await prisma.$disconnect();
    if (failed) {
        console.error('\nSMOKE FAILED — see FAIL lines above.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — investor compliance sweeps (invariant 51b-vii/51b-viii/51c) against the real live DB.');
    }
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=investor-compliance-sweep.smoke.js.map