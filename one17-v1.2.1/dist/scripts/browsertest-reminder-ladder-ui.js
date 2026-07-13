"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const document_service_1 = require("../src/document/document.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
const counterparty_service_1 = require("../src/counterparty/counterparty.service");
const payment_reminder_service_1 = require("../src/counterparty/payment-reminder.service");
const notification_service_1 = require("../src/notification/notification.service");
const task_service_1 = require("../src/task/task.service");
const PASSWORD = 'CorrectHorseBattery1!';
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const authService = new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit));
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, authService);
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const paymentReminders = new payment_reminder_service_1.PaymentReminderService(prisma, audit, delegation, notification, task);
    const portmgr = await prisma.appUser.create({ data: { email: 'browsertest-ladder-portmgr@one17.test', displayName: 'browsertest-ladder-portmgr' } });
    await rbac.assignRole({ userId: portmgr.id, roleCode: 'PORT_MGR' });
    await authService.setPassword(portmgr.id, PASSWORD);
    const compliance = await prisma.appUser.create({ data: { email: 'browsertest-ladder-compliance@one17.test', displayName: 'browsertest-ladder-compliance' } });
    await rbac.assignRole({ userId: compliance.id, roleCode: 'COMPLIANCE' });
    const ic1 = await prisma.appUser.create({ data: { email: 'browsertest-ladder-ic1@one17.test', displayName: 'browsertest-ladder-ic1' } });
    await rbac.assignRole({ userId: ic1.id, roleCode: 'SAU_INTERNAL_CONTROL' });
    const risk = await prisma.appUser.create({ data: { email: 'browsertest-ladder-risk@one17.test', displayName: 'browsertest-ladder-risk' } });
    await rbac.assignRole({ userId: risk.id, roleCode: 'RISK_DEPT' });
    const officerUser = await prisma.appUser.create({ data: { email: 'browsertest-ladder-officer@one17.test', displayName: 'Ladder Officer' } });
    await rbac.assignRole({ userId: officerUser.id, roleCode: 'PORT_OFF' });
    const position = await prisma.position.create({ data: { title: 'Ladder UI Test Officer', orgUnitCode: 'PORTFOLIO', cadre: 'Officer', notch: 1 } });
    await prisma.employee.create({ data: { surname: 'LadderOfficer', firstName: 'UI', positionId: position.id, orgUnitCode: 'PORTFOLIO', appUserId: officerUser.id, hireDate: new Date() } });
    const cp = await counterparties.onboard({
        legalName: 'Browsertest Ladder UI Ltd', counterpartyType: 'SME', purposeOfFinancing: 'Inventory financing',
        amountSoughtKobo: 200000000n, expectedSourceOfRepayment: 'Sales receipts', creditBureauConsent: true,
        contactEmail: 'browsertest-ladder-obligor@one17.test', onboardedByUserId: portmgr.id,
    });
    await counterparties.recordComplianceRiskAssessment({
        counterpartyId: cp.id,
        riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
            .map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Fixture for ops-ui visual check.' })),
        pepSanctionsGrid: [
            { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        ],
        assessedByUserId: compliance.id,
    });
    const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portmgr.id);
    await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
    await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 150000000n, approverUserId: risk.id });
    await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });
    await counterparties.assignFileManagingOfficer(cp.id, officerUser.id, portmgr.id);
    const obligation = await paymentReminders.createObligation({
        counterpartyId: cp.id, dueDate: new Date('2026-07-09'), amountKobo: 55000000n, createdByUserId: portmgr.id,
    });
    await paymentReminders.runReminderSweep(new Date('2026-07-06'), portmgr.id);
    console.log(JSON.stringify({ portmgrEmail: portmgr.id ? 'browsertest-ladder-portmgr@one17.test' : '', password: PASSWORD, counterpartyId: cp.id, obligationId: obligation.id }, null, 2));
    await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
//# sourceMappingURL=browsertest-reminder-ladder-ui.js.map