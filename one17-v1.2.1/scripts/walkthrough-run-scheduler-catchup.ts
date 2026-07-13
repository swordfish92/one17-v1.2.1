import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { KriEngineService } from '../src/kri-engine/kri-engine.service';
import { StressEngineService } from '../src/stress-engine/stress-engine.service';
import { HalalFundEngineService } from '../src/engine-halal-fund/halal-fund-engine.service';
import { HalalFundLaunchConfigService } from '../src/engine-halal-fund/halal-fund-launch-config.service';
import { ProcurementService } from '../src/procurement/procurement.service';
import { ZakatService } from '../src/zakat/zakat.service';
import { WmService } from '../src/wm/wm.service';
import { NotificationService } from '../src/notification/notification.service';
import { AttendanceService } from '../src/attendance/attendance.service';
import { EventJournalService } from '../src/event-journal/event-journal.service';
import { LedgerService } from '../src/ledger/ledger.service';
import { TaskService } from '../src/task/task.service';
import { PaymentReminderService } from '../src/counterparty/payment-reminder.service';
import { PmsService } from '../src/pms/pms.service';
import { BoardCalendarService } from '../src/board-calendar/board-calendar.service';
import { LetterheadService } from '../src/letterhead/letterhead.service';
import { CertificateService } from '../src/certificate/certificate.service';
import { NdMandateEngineService } from '../src/engine-nd-mandate/nd-mandate-engine.service';
import { SubscriptionService } from '../src/subscription/subscription.service';
import { PaymentGatewayService } from '../src/payment-gateway/payment-gateway.service';
import { CalendarService } from '../src/calendar/calendar.service';
import { CalendarGatewayService } from '../src/calendar/calendar-gateway.service';
import { InvestorExitService } from '../src/investor/investor-exit.service';
import { InvestorComplianceSweepService } from '../src/investor/investor-compliance-sweep.service';
import { LetterService } from '../src/letter/letter.service';
import { TaxService } from '../src/tax/tax.service';
import { DocumentService } from '../src/document/document.service';
import { ScreeningGatewayService } from '../src/screening-gateway/screening-gateway.service';
import { SchedulerService } from '../src/scheduler/scheduler.service';
import { RbacService } from '../src/rbac/rbac.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';

// Re-runs the scheduler's own real job roster (not a synthetic stand-in) now
// that ONE17-COMPANY exists, so KRI/stress readings + run-log history are
// genuine for the walkthrough's Session 3 (risk/dashboards/scheduler console).
async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const kriEngine = new KriEngineService(prisma, audit);
  const stressEngine = new StressEngineService(prisma, audit, delegation, workflow);
  const halalFundEngine = new HalalFundEngineService(prisma, audit, workflow, delegation);
  const halalFundLaunchConfig = new HalalFundLaunchConfigService(prisma, audit, delegation);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const procurement = new ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const notification = new NotificationService(prisma);
  const zakat = new ZakatService(prisma, audit, delegation, workflow, wm, notification);
  const task = new TaskService(prisma, notification);
  const paymentReminders = new PaymentReminderService(prisma, audit, delegation, notification, task);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const boardCalendar = new BoardCalendarService(prisma, audit, delegation, notification);
  const letterhead = new LetterheadService(prisma, audit, delegation, workflow);
  const certificate = new CertificateService(prisma, audit, delegation, workflow, letterhead);
  const ndMandate = new NdMandateEngineService(prisma, audit, workflow);
  const subscription = new SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
  const paymentGateway = new PaymentGatewayService(prisma, audit, delegation, workflow, subscription);
  const calendar = new CalendarService(prisma, audit, notification);
  const calendarGateway = new CalendarGatewayService(prisma, audit, delegation, workflow);
  const investorExit = new InvestorExitService(prisma, audit, delegation, workflow);
  const complianceSweep = new InvestorComplianceSweepService(prisma, task);
  const letterForTax = new LetterService(prisma, audit, delegation, workflow, letterhead);
  const tax = new TaxService(prisma, audit, delegation, workflow, letterForTax);
  const documents = new DocumentService(prisma, delegation, audit);
  const screeningGateway = new ScreeningGatewayService(prisma, audit, delegation, workflow, notification, documents);
  const scheduler = new SchedulerService(prisma, audit, kriEngine, stressEngine, halalFundEngine, halalFundLaunchConfig, delegation, workflow, procurement, zakat, task, paymentReminders, pms, boardCalendar, paymentGateway, calendar, calendarGateway, investorExit, complianceSweep, attendance, tax, notification, screeningGateway);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));

  let ictUser = await prisma.appUser.findUnique({ where: { email: 'walkthrough-ict@one17capital.com' } });
  if (!ictUser) {
    ictUser = await prisma.appUser.create({ data: { email: 'walkthrough-ict@one17capital.com', displayName: 'Walkthrough ICT (scheduler catch-up)' } });
    await rbac.assignRole({ userId: ictUser.id, roleCode: 'ICT' });
  }

  await scheduler.tick(new Date());
  const jobs = await scheduler.getJobs();
  for (const job of jobs) {
    if (['KRI_DAILY_BATCH', 'STRESS_MODELS_MONTHLY', 'REVERSE_STRESS_QUARTERLY'].includes(job.code)) {
      const lastRun = await prisma.scheduledJobRun.findFirst({ where: { jobCode: job.code }, orderBy: { startedAt: 'desc' } });
      if (lastRun?.status !== 'SUCCEEDED') {
        console.log(`Manually re-running ${job.code}...`);
        try {
          await scheduler.manualRerun(job.code, new Date(), ictUser.id);
          console.log(`${job.code} re-run OK`);
        } catch (e) {
          console.error(`${job.code} re-run failed:`, (e as Error).message);
        }
      }
    }
  }
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
