import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { RbacService } from '../src/rbac/rbac.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { DocumentService } from '../src/document/document.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { ScreeningGatewayService } from '../src/screening-gateway/screening-gateway.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';
import { CounterpartyService } from '../src/counterparty/counterparty.service';
import { PaymentReminderService } from '../src/counterparty/payment-reminder.service';
import { NotificationService } from '../src/notification/notification.service';
import { TaskService } from '../src/task/task.service';
import { PortalAuthService } from '../src/portal-auth/portal-auth.service';

const RUN = Date.now().toString().slice(-8);

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const documents = new DocumentService(prisma, delegation, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const notification = new NotificationService(prisma);
  const task = new TaskService(prisma, notification);
  const paymentReminders = new PaymentReminderService(prisma, audit, delegation, notification, task);
  const portalAuth = new PortalAuthService(prisma, audit);

  const makeUser = async (label: string, roleCode: string) => {
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
    amountSoughtKobo: 500_000_000n, expectedSourceOfRepayment: 'Trade receivables', creditBureauConsent: true,
    contactEmail, onboardedByUserId: portmgr.id,
  });
  await counterparties.recordComplianceRiskAssessment({
    counterpartyId: cp.id,
    riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
      .map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Fixture.' })),
    pepSanctionsGrid: [
      { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
      { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
      { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    ],
    assessedByUserId: compliance.id,
  });
  const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portmgr.id);
  await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
  await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 300_000_000n, approverUserId: risk.id });
  await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });

  const provisioned = await portalAuth.provisionForCounterparty(cp.id);

  const obligation = await paymentReminders.createObligation({
    counterpartyId: cp.id, dueDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), amountKobo: 750_000_00n, createdByUserId: portmgr.id,
  });

  console.log(JSON.stringify({ email: contactEmail, bootstrapPassword: provisioned.bootstrapPassword, counterpartyId: cp.id, obligationId: obligation.id }, null, 2));
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
