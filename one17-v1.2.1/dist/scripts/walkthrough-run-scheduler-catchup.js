"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const audit_service_1 = require("../src/audit/audit.service");
const delegation_service_1 = require("../src/delegation/delegation.service");
const workflow_service_1 = require("../src/workflow/workflow.service");
const kri_engine_service_1 = require("../src/kri-engine/kri-engine.service");
const stress_engine_service_1 = require("../src/stress-engine/stress-engine.service");
const halal_fund_engine_service_1 = require("../src/engine-halal-fund/halal-fund-engine.service");
const halal_fund_launch_config_service_1 = require("../src/engine-halal-fund/halal-fund-launch-config.service");
const procurement_service_1 = require("../src/procurement/procurement.service");
const zakat_service_1 = require("../src/zakat/zakat.service");
const wm_service_1 = require("../src/wm/wm.service");
const notification_service_1 = require("../src/notification/notification.service");
const attendance_service_1 = require("../src/attendance/attendance.service");
const event_journal_service_1 = require("../src/event-journal/event-journal.service");
const ledger_service_1 = require("../src/ledger/ledger.service");
const task_service_1 = require("../src/task/task.service");
const payment_reminder_service_1 = require("../src/counterparty/payment-reminder.service");
const pms_service_1 = require("../src/pms/pms.service");
const board_calendar_service_1 = require("../src/board-calendar/board-calendar.service");
const letterhead_service_1 = require("../src/letterhead/letterhead.service");
const certificate_service_1 = require("../src/certificate/certificate.service");
const nd_mandate_engine_service_1 = require("../src/engine-nd-mandate/nd-mandate-engine.service");
const subscription_service_1 = require("../src/subscription/subscription.service");
const payment_gateway_service_1 = require("../src/payment-gateway/payment-gateway.service");
const calendar_service_1 = require("../src/calendar/calendar.service");
const calendar_gateway_service_1 = require("../src/calendar/calendar-gateway.service");
const investor_exit_service_1 = require("../src/investor/investor-exit.service");
const investor_compliance_sweep_service_1 = require("../src/investor/investor-compliance-sweep.service");
const letter_service_1 = require("../src/letter/letter.service");
const tax_service_1 = require("../src/tax/tax.service");
const document_service_1 = require("../src/document/document.service");
const screening_gateway_service_1 = require("../src/screening-gateway/screening-gateway.service");
const scheduler_service_1 = require("../src/scheduler/scheduler.service");
const rbac_service_1 = require("../src/rbac/rbac.service");
const auth_service_1 = require("../src/auth/auth.service");
const mfa_service_1 = require("../src/mfa/mfa.service");
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const kriEngine = new kri_engine_service_1.KriEngineService(prisma, audit);
    const stressEngine = new stress_engine_service_1.StressEngineService(prisma, audit, delegation, workflow);
    const halalFundEngine = new halal_fund_engine_service_1.HalalFundEngineService(prisma, audit, workflow, delegation);
    const halalFundLaunchConfig = new halal_fund_launch_config_service_1.HalalFundLaunchConfigService(prisma, audit, delegation);
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const procurement = new procurement_service_1.ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const notification = new notification_service_1.NotificationService(prisma);
    const zakat = new zakat_service_1.ZakatService(prisma, audit, delegation, workflow, wm, notification);
    const task = new task_service_1.TaskService(prisma, notification);
    const paymentReminders = new payment_reminder_service_1.PaymentReminderService(prisma, audit, delegation, notification, task);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const boardCalendar = new board_calendar_service_1.BoardCalendarService(prisma, audit, delegation, notification);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const subscription = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const paymentGateway = new payment_gateway_service_1.PaymentGatewayService(prisma, audit, delegation, workflow, subscription);
    const calendar = new calendar_service_1.CalendarService(prisma, audit, notification);
    const calendarGateway = new calendar_gateway_service_1.CalendarGatewayService(prisma, audit, delegation, workflow);
    const investorExit = new investor_exit_service_1.InvestorExitService(prisma, audit, delegation, workflow);
    const complianceSweep = new investor_compliance_sweep_service_1.InvestorComplianceSweepService(prisma, task);
    const letterForTax = new letter_service_1.LetterService(prisma, audit, delegation, workflow, letterhead);
    const tax = new tax_service_1.TaxService(prisma, audit, delegation, workflow, letterForTax);
    const documents = new document_service_1.DocumentService(prisma, delegation, audit);
    const screeningGateway = new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, notification, documents);
    const scheduler = new scheduler_service_1.SchedulerService(prisma, audit, kriEngine, stressEngine, halalFundEngine, halalFundLaunchConfig, delegation, workflow, procurement, zakat, task, paymentReminders, pms, boardCalendar, paymentGateway, calendar, calendarGateway, investorExit, complianceSweep, attendance, tax, notification, screeningGateway);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
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
                }
                catch (e) {
                    console.error(`${job.code} re-run failed:`, e.message);
                }
            }
        }
    }
    await prisma.$disconnect();
}
main().catch((e) => { console.error(e); process.exitCode = 1; });
//# sourceMappingURL=walkthrough-run-scheduler-catchup.js.map