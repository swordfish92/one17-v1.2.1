import 'dotenv/config';
import { PrismaService } from './prisma/prisma.service';
import { AuditService } from './audit/audit.service';
import { RbacService } from './rbac/rbac.service';
import { DelegationService } from './delegation/delegation.service';
import { WorkflowEngineService } from './workflow/workflow.service';
import { AuthService } from './auth/auth.service';
import { MfaService } from './mfa/mfa.service';
import { KriEngineService } from './kri-engine/kri-engine.service';
import { StressEngineService } from './stress-engine/stress-engine.service';
import { HalalFundEngineService } from './engine-halal-fund/halal-fund-engine.service';
import { HalalFundLaunchConfigService } from './engine-halal-fund/halal-fund-launch-config.service';
import { LedgerService } from './ledger/ledger.service';
import { EventJournalService } from './event-journal/event-journal.service';
import { ProcurementService } from './procurement/procurement.service';
import { WmService } from './wm/wm.service';
import { NotificationService } from './notification/notification.service';
import { AttendanceService } from './attendance/attendance.service';
import { ZakatService } from './zakat/zakat.service';
import { TaskService } from './task/task.service';
import { PaymentReminderService } from './counterparty/payment-reminder.service';
import { PmsService } from './pms/pms.service';
import { BoardCalendarService } from './board-calendar/board-calendar.service';
import { LetterheadService } from './letterhead/letterhead.service';
import { CertificateService } from './certificate/certificate.service';
import { NdMandateEngineService } from './engine-nd-mandate/nd-mandate-engine.service';
import { SubscriptionService } from './subscription/subscription.service';
import { PaymentGatewayService } from './payment-gateway/payment-gateway.service';
import { CalendarService } from './calendar/calendar.service';
import { CalendarGatewayService } from './calendar/calendar-gateway.service';
import { InvestorExitService } from './investor/investor-exit.service';
import { InvestorComplianceSweepService } from './investor/investor-compliance-sweep.service';
import { LetterService } from './letter/letter.service';
import { TaxService } from './tax/tax.service';
import { DocumentService } from './document/document.service';
import { ScreeningGatewayService } from './screening-gateway/screening-gateway.service';
import { SchedulerService } from './scheduler/scheduler.service';

const PASSWORD = 'CorrectHorseBattery1!';

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
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

  const ict = await prisma.appUser.create({ data: { email: 'browsertest-ict@one17.test', displayName: 'browsertest-ict' } });
  await rbac.assignRole({ userId: ict.id, roleCode: 'ICT' });
  await authService.setPassword(ict.id, PASSWORD);

  const sau = await prisma.appUser.create({ data: { email: 'browsertest-sau@one17.test', displayName: 'browsertest-sau' } });
  await rbac.assignRole({ userId: sau.id, roleCode: 'SAU_INTERNAL_CONTROL' });
  await authService.setPassword(sau.id, PASSWORD);

  const ceo = await prisma.appUser.create({ data: { email: 'browsertest-ceo@one17.test', displayName: 'browsertest-ceo' } });
  await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
  await authService.setPassword(ceo.id, PASSWORD);

  // Pre-seed a pending SCHEDULER_JOB_PAUSE request so the CEO's Workflow
  // Inbox has something real to approve, and STRESS_MODELS_MONTHLY is left
  // paused directly (non-consequential) so the console has both states to
  // show visually.
  await scheduler.requestPause('HF_DAILY_ACCRUAL', ict.id, 'browser verification — pending pause request');
  await scheduler.pauseDirect('STRESS_MODELS_MONTHLY', ict.id, 'browser verification — direct pause, non-consequential');

  console.log('ictEmail=browsertest-ict@one17.test');
  console.log('sauEmail=browsertest-sau@one17.test');
  console.log('ceoEmail=browsertest-ceo@one17.test');
  console.log('password=' + PASSWORD);
  await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exit(1); });
