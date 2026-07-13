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
const ledger_service_1 = require("../ledger/ledger.service");
const pms_service_1 = require("../pms/pms.service");
const notification_service_1 = require("../notification/notification.service");
const attendance_service_1 = require("../attendance/attendance.service");
const investor_service_1 = require("../investor/investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const wm_service_1 = require("../wm/wm.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const talent_service_1 = require("./talent.service");
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
    const notification = new notification_service_1.NotificationService(prisma);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const investors = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const regReporting = {};
    const marketing = {};
    const talent = new talent_service_1.TalentService(prisma, audit, delegation, workflow);
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, investors, regReporting, wm, pms, marketing, {}, {}, {}, {}, {}, {}, {}, ledger, talent, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
    const orgUnitCode = `TALENT_SMOKE_${RUN}`;
    await prisma.orgUnit.create({ data: { code: orgUnitCode, name: 'Talent Smoke Dept' } });
    const position = await prisma.position.create({ data: { title: `Talent Smoke Officer ${RUN}`, orgUnitCode, cadre: 'Snr Associate 1', notch: 1 } });
    const employee = await prisma.employee.create({ data: { surname: `Smoke${RUN}`, firstName: 'Talent', positionId: position.id, orgUnitCode, hireDate: new Date() } });
    const hrAdmin = await prisma.appUser.create({ data: { email: `talent-hr-${RUN}@one17.test`, displayName: 'x' } });
    await rbac.assignRole({ userId: hrAdmin.id, roleCode: 'HR_ADMIN' });
    const md = await prisma.appUser.create({ data: { email: `talent-md-${RUN}@one17.test`, displayName: 'x' } });
    await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
    const outsider = await prisma.appUser.create({ data: { email: `talent-outsider-${RUN}@one17.test`, displayName: 'x' } });
    await expectReject('outsider (no TALENT_MANAGEMENT) cannot create a welfare scheme', () => talent.createWelfareScheme({ name: `Bereavement Support ${RUN}`, createdByUserId: outsider.id }));
    const scheme = await talent.createWelfareScheme({ name: `Bereavement Support ${RUN}`, description: 'Financial support on employee bereavement', createdByUserId: hrAdmin.id });
    if (scheme.isActive)
        ok('HR creates a welfare scheme — governed config catalog row, ACTIVE by default');
    else
        fail('welfare scheme did not persist correctly', scheme);
    const rewardType = await talent.createRewardType({ name: `Spot Award ${RUN}`, createdByUserId: hrAdmin.id });
    ok(`HR creates a reward type: ${rewardType.name}`);
    await expectReject('a WELFARE recommendation without a welfareSchemeId is refused', () => talent.recommendTalent({ employeeId: employee.id, recommendationType: 'WELFARE', justification: 'x', recommendedByUserId: hrAdmin.id }));
    await expectReject('outsider (no TALENT_MANAGEMENT) cannot recommend', () => talent.recommendTalent({ employeeId: employee.id, recommendationType: 'WELFARE', welfareSchemeId: scheme.id, justification: 'x', recommendedByUserId: outsider.id }));
    const recommendation = await talent.recommendTalent({
        employeeId: employee.id, recommendationType: 'WELFARE', welfareSchemeId: scheme.id,
        justification: 'Recent bereavement in immediate family', recommendedByUserId: hrAdmin.id,
    });
    if (recommendation.recommendation.status === 'PENDING') {
        ok('HR recommends a welfare action for the employee -> talent_recommendation PENDING');
    }
    else {
        fail('recommendation did not persist correctly', recommendation.recommendation);
    }
    await expectReject('HR (initiator, holds only INITIATE) cannot also approve — HR_ADMIN has no TALENT_MANAGEMENT APPROVE grant at all', () => workflowInbox.approve(recommendation.workflowInstance.id, hrAdmin.id));
    const approved = await workflowInbox.approve(recommendation.workflowInstance.id, md.id);
    const recAfter = await prisma.talentRecommendation.findUniqueOrThrow({ where: { id: recommendation.recommendation.id } });
    if (approved.status === 'APPROVED' && recAfter.status === 'APPROVED' && recAfter.approvedByUserId === md.id) {
        ok('MD_CEO approves via the standing Workflow Inbox (TALENT_RECOMMENDATION_APPROVAL dispatch) -> talent_recommendation APPROVED');
    }
    else {
        fail('recommendation did not activate correctly via the Workflow Inbox dispatch', { approved, recAfter });
    }
    const recommendation2 = await talent.recommendTalent({
        employeeId: employee.id, recommendationType: 'REWARD', rewardTypeId: rewardType.id,
        justification: 'Exceptional Q2 contribution', recommendedByUserId: hrAdmin.id,
    });
    await workflowInbox.reject(recommendation2.workflowInstance.id, md.id, 'Not this cycle');
    const rec2After = await prisma.talentRecommendation.findUniqueOrThrow({ where: { id: recommendation2.recommendation.id } });
    if (rec2After.status === 'REJECTED') {
        ok('MD_CEO rejects a second recommendation via the standing Workflow Inbox -> talent_recommendation REJECTED');
    }
    else {
        fail('rejected recommendation did not flip to REJECTED', rec2After);
    }
    const list = await talent.listRecommendations();
    const ourRecs = list.filter((r) => r.employeeId === employee.id);
    if (ourRecs.length === 2 && ourRecs.some((r) => r.status === 'APPROVED') && ourRecs.some((r) => r.status === 'REJECTED')) {
        ok('listRecommendations returns both recommendations with correct joined employee/scheme/reward-type names');
    }
    else {
        fail('listRecommendations did not return the expected rows', ourRecs);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Talent Management + Reward/Welfare (invariant 37e, task #153) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=talent.smoke.js.map