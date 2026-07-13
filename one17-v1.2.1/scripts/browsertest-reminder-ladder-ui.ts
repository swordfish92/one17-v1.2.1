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

const PASSWORD = 'CorrectHorseBattery1!';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const documents = new DocumentService(prisma, delegation, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const notification = new NotificationService(prisma);
  const task = new TaskService(prisma, notification);
  const paymentReminders = new PaymentReminderService(prisma, audit, delegation, notification, task);

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
    amountSoughtKobo: 200_000_000n, expectedSourceOfRepayment: 'Sales receipts', creditBureauConsent: true,
    contactEmail: 'browsertest-ladder-obligor@one17.test', onboardedByUserId: portmgr.id,
  });
  await counterparties.recordComplianceRiskAssessment({
    counterpartyId: cp.id,
    riskMetricGrades: ['GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS', 'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH']
      .map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Fixture for ops-ui visual check.' })),
    pepSanctionsGrid: [
      { target: 'INVESTEE_OR_INSTITUTIONAL_NAME', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
      { target: 'DIRECTOR_OR_REP', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
      { target: 'BENEFICIAL_OWNER', pepResult: 'CLEAR', sanctionsResult: 'CLEAR' },
    ],
    assessedByUserId: compliance.id,
  });
  const instance = await counterparties.submitOnboardingCaseForReview(cp.id, portmgr.id);
  await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: ic1.id });
  await counterparties.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY', approvedExposureLimitKobo: 150_000_000n, approverUserId: risk.id });
  await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: ic1.id });

  await counterparties.assignFileManagingOfficer(cp.id, officerUser.id, portmgr.id);

  const obligation = await paymentReminders.createObligation({
    counterpartyId: cp.id, dueDate: new Date('2026-07-09'), amountKobo: 55_000_000n, createdByUserId: portmgr.id,
  });
  await paymentReminders.runReminderSweep(new Date('2026-07-06'), portmgr.id); // T-3 relative to 2026-07-09

  console.log(JSON.stringify({ portmgrEmail: portmgr.id ? 'browsertest-ladder-portmgr@one17.test' : '', password: PASSWORD, counterpartyId: cp.id, obligationId: obligation.id }, null, 2));
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
