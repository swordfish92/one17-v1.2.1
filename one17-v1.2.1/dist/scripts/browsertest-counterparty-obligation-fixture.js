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
const portal_auth_service_1 = require("../src/portal-auth/portal-auth.service");
const RUN = Date.now().toString().slice(-8);
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const counterparties = new counterparty_service_1.CounterpartyService(prisma, audit, workflow, delegation, documents, new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const notification = new notification_service_1.NotificationService(prisma);
    const task = new task_service_1.TaskService(prisma, notification);
    const paymentReminders = new payment_reminder_service_1.PaymentReminderService(prisma, audit, delegation, notification, task);
    const portalAuth = new portal_auth_service_1.PortalAuthService(prisma, audit);
    const makeUser = async (label, roleCode) => {
        const email = `cp-fixture-${label}-${RUN}@one17.test`;
        const user = await prisma.appUser.create({ data: { email, displayName: email } });
        await rbac.assignRole({ userId: user.id, roleCode });
        return user;
    };
    const portmgr = await makeUser('portmgr', 'PORT_MGR');
    const compliance = await makeUser('compliance', 'COMPLIANCE');
    const ic1 = await makeUser('ic1', 'SAU_INTERNAL_CONTROL');
    const risk = await makeUser('risk', 'RISK_DEPT');
    const contactEmail = `cp-fixture-obligor-${RUN}@one17.test`;
    const cp = await counterparties.onboard({
        legalName: `Obligation Fixture Ltd ${RUN}`, counterpartyType: 'CORPORATE', purposeOfFinancing: 'Working capital',
        amountSoughtKobo: 500000000n, expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
        contactEmail, onboardedByUserId: portmgr.id,
    });
    await counterparties.recordComplianceRiskAssessment({
        counterpartyId: cp.id,
        riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
            .map((metricCode) => ({ metricCode, grade: 'LOW', rationale: 'Fixture.' })),
        pepSanctionsGrid: [
            { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
            { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
        ],
        assessedByUserId: compliance.id,
    });
    const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portmgr.id);
    await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
    await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 300000000n, approverUserId: risk.id });
    await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });
    const provisioned = await portalAuth.provisionForCounterparty(cp.id);
    const obligation = await paymentReminders.createObligation({
        counterpartyId: cp.id, dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), amountKobo: 75000000n, createdByUserId: portmgr.id,
    });
    console.log(JSON.stringify({ email: contactEmail, bootstrapPassword: provisioned.bootstrapPassword, counterpartyId: cp.id, obligationId: obligation.id }, null, 2));
    await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
//# sourceMappingURL=browsertest-counterparty-obligation-fixture.js.map