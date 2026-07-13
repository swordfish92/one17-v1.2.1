"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
const stress_engine_service_1 = require("../stress-engine/stress-engine.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const halal_fund_launch_config_service_1 = require("../engine-halal-fund/halal-fund-launch-config.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const ledger_service_1 = require("../ledger/ledger.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const procurement_service_1 = require("../procurement/procurement.service");
const wm_service_1 = require("../wm/wm.service");
const notification_service_1 = require("../notification/notification.service");
const attendance_service_1 = require("../attendance/attendance.service");
const zakat_service_1 = require("../zakat/zakat.service");
const task_service_1 = require("../task/task.service");
const payment_reminder_service_1 = require("../counterparty/payment-reminder.service");
const pms_service_1 = require("../pms/pms.service");
const board_calendar_service_1 = require("../board-calendar/board-calendar.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const certificate_service_1 = require("../certificate/certificate.service");
const nd_mandate_engine_service_1 = require("../engine-nd-mandate/nd-mandate-engine.service");
const subscription_service_1 = require("../subscription/subscription.service");
const payment_gateway_service_1 = require("../payment-gateway/payment-gateway.service");
const calendar_service_1 = require("../calendar/calendar.service");
const calendar_gateway_service_1 = require("../calendar/calendar-gateway.service");
const investor_exit_service_1 = require("../investor/investor-exit.service");
const investor_compliance_sweep_service_1 = require("../investor/investor-compliance-sweep.service");
const letter_service_1 = require("../letter/letter.service");
const tax_service_1 = require("../tax/tax.service");
const document_service_1 = require("../document/document.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const scheduler_service_1 = require("./scheduler.service");
const scheduler_cadence_1 = require("./scheduler-cadence");
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
    const ict = await prisma.appUser.create({ data: { email: `sched-ict-${RUN}@one17.test`, displayName: 'sched-ict' } });
    await rbac.assignRole({ userId: ict.id, roleCode: 'ICT' });
    const sau = await prisma.appUser.create({ data: { email: `sched-sau-${RUN}@one17.test`, displayName: 'sched-sau' } });
    await rbac.assignRole({ userId: sau.id, roleCode: 'SAU_INTERNAL_CONTROL' });
    const ceo = await prisma.appUser.create({ data: { email: `sched-ceo-${RUN}@one17.test`, displayName: 'sched-ceo' } });
    await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
    await prisma.scheduledJobPauseState.deleteMany({ where: { jobCode: { in: ['HF_DAILY_ACCRUAL', 'STRESS_MODELS_MONTHLY'] } } });
    await expectReject('ICT calling pauseDirect on the consequential HF_DAILY_ACCRUAL job', () => scheduler.pauseDirect('HF_DAILY_ACCRUAL', ict.id, 'trying to skip the approval'));
    const stressState = await scheduler.pauseDirect('STRESS_MODELS_MONTHLY', ict.id, 'planned maintenance window');
    if (stressState.isPaused && stressState.pausedByUserId === ict.id) {
        ok('ICT can pause a NON-consequential job (STRESS_MODELS_MONTHLY) directly — no approval workflow, per invariant 32');
    }
    else {
        fail('pauseDirect on a non-consequential job did not behave correctly', stressState);
    }
    await scheduler.resumeJob('STRESS_MODELS_MONTHLY', ict.id);
    const requested = await scheduler.requestPause('HF_DAILY_ACCRUAL', ict.id, 'suspected bad NAV data pending investigation');
    const stateAfterRequest = await prisma.scheduledJobPauseState.findUnique({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
    if (requested.status === 'PENDING_APPROVAL' && stateAfterRequest?.isPaused === false && stateAfterRequest.pauseWorkflowInstanceId === requested.id) {
        ok('requestPause: ICT initiates a SCHEDULER_JOB_PAUSE workflow instance — isPaused stays false until approved (the job keeps running while the request is pending)');
    }
    else {
        fail('requestPause did not create a pending, not-yet-effective pause request', { requested, stateAfterRequest });
    }
    await expectReject('ICT (the requester) attempting to approve their own pause request', () => scheduler.approvePauseRequest(requested.id, ict.id));
    const ict2 = await prisma.appUser.create({ data: { email: `sched-ict2-${RUN}@one17.test`, displayName: 'sched-ict2' } });
    await rbac.assignRole({ userId: ict2.id, roleCode: 'ICT' });
    await expectReject('a different ICT user (not the requester) attempting to approve the pause request', () => scheduler.approvePauseRequest(requested.id, ict2.id));
    const approved = await scheduler.approvePauseRequest(requested.id, ceo.id);
    const stateAfterApproval = await prisma.scheduledJobPauseState.findUnique({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
    if (approved?.isPaused === true && stateAfterApproval?.isPaused === true && stateAfterApproval.pausedByUserId === ceo.id) {
        ok('approvePauseRequest: MD_CEO approval is what actually flips isPaused=true — the DoA-gated control invariant 32 calls out by name');
    }
    else {
        fail('MD_CEO approval did not flip isPaused correctly', { approved, stateAfterApproval });
    }
    const sauView = await scheduler.listJobsForUser(sau.id);
    const hfOnSauView = sauView.find((j) => j.code === 'HF_DAILY_ACCRUAL');
    if (hfOnSauView?.pauseState?.isPaused === true) {
        ok('SAU/Internal Control (SCHEDULER_OVERSIGHT) sees HF_DAILY_ACCRUAL flagged isPaused=true on their console view — the "shows as an EXCEPTION" requirement');
    }
    else {
        fail('SAU view did not show the paused job as an exception', hfOnSauView);
    }
    const finAdmin = await prisma.appUser.create({ data: { email: `sched-fin-${RUN}@one17.test`, displayName: 'sched-fin' } });
    await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
    const finView = await scheduler.listJobsForUser(finAdmin.id);
    const hfOnFinView = finView.find((j) => j.code === 'HF_DAILY_ACCRUAL');
    const krisOnFinView = finView.find((j) => j.code === 'KRI_DAILY_BATCH');
    if (hfOnFinView?.pauseState?.isPaused === true && !krisOnFinView) {
        ok('FIN_ADMIN (owner of FINANCIAL_STATEMENTS) sees HF_DAILY_ACCRUAL (their own job, paused) but NOT KRI_DAILY_BATCH (Risk\'s job) — per-job business-owner scoping, not blanket visibility');
    }
    else {
        fail('business-owner scoped view did not behave correctly', { hfOnFinView, krisOnFinView, finViewCodes: finView.map((j) => j.code) });
    }
    const runsBeforeTick = await prisma.scheduledJobRun.count({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
    const hfJob = (await scheduler.getJobs()).find((j) => j.code === 'HF_DAILY_ACCRUAL');
    await scheduler.maybeRunJob(hfJob, new Date());
    const runsAfterTick = await prisma.scheduledJobRun.count({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
    if (runsAfterTick === runsBeforeTick) {
        ok('maybeRunJob: a paused consequential job is silently skipped by the automatic tick — no new run row created while paused');
    }
    else {
        fail('paused job was run by the automatic tick, which must never happen', { runsBeforeTick, runsAfterTick });
    }
    await expectReject('ICT attempting manualRerun on a paused job', () => scheduler.manualRerun('HF_DAILY_ACCRUAL', new Date(), ict.id));
    const resumed = await scheduler.resumeJob('HF_DAILY_ACCRUAL', ict.id);
    if (resumed.isPaused === false && resumed.resumedByUserId === ict.id) {
        ok('resumeJob: ICT resumes HF_DAILY_ACCRUAL unilaterally, no approval needed — "restoring normal service is the safe direction" (same precedent as DelegationOfAuthority revocation)');
    }
    else {
        fail('resumeJob did not behave correctly', resumed);
    }
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const missedNow = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 0);
    const integrityJob = (await scheduler.getJobs()).find((j) => j.code === 'AUDIT_INTEGRITY_NIGHTLY');
    const dueSlot = (0, scheduler_cadence_1.mostRecentScheduledSlot)(integrityJob.cadence, missedNow);
    await prisma.scheduledJobRun.deleteMany({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
    await scheduler.maybeRunJob(integrityJob, missedNow);
    const failedRun = await prisma.scheduledJobRun.findFirst({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
    if (failedRun?.status === 'FAILED' && failedRun.isCatchUp === true) {
        ok('a real failure on a missed slot is recorded FAILED with isCatchUp=true — the automatic recovery attempt genuinely failed against this dev DB\'s known hash-chain gaps');
    }
    else {
        fail('setup failure run did not record correctly', failedRun);
    }
    const independentCheck = await audit.verifyChainIntegrity();
    const rerun = await scheduler.manualRerun('AUDIT_INTEGRITY_NIGHTLY', dueSlot, ict.id);
    const rerunRow = await prisma.scheduledJobRun.findUnique({ where: { id: rerun.runId } });
    const totalRunsForSlot = await prisma.scheduledJobRun.count({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
    const rerunFailureCount = rerunRow?.resultSummary?.failures?.length;
    if (rerunRow?.isManualRerun === true &&
        rerunRow.triggeredByUserId === ict.id &&
        rerunRow.isCatchUp === true &&
        rerunFailureCount === independentCheck.failures.length &&
        totalRunsForSlot === 2) {
        ok(`manualRerun: ICT's re-run is stamped isManualRerun/triggeredByUserId and marked isCatchUp; its result (${rerunFailureCount} failures) reconciles exactly with an independently-run audit.verifyChainIntegrity() (${independentCheck.failures.length} failures) — not stale or fabricated data. Both the original FAILED run and this re-run are preserved (${totalRunsForSlot} rows for the slot), never overwritten.`);
    }
    else {
        fail('manualRerun after a real failure did not reconcile correctly', { rerun, rerunRow, totalRunsForSlot, independentCheck: independentCheck.failures.length });
    }
    await prisma.scheduledJobRegistration.deleteMany({ where: { jobCode: { in: ['REVERSE_STRESS_QUARTERLY', 'KRI_DAILY_BATCH'] } } });
    await expectReject('outsider (no SCHEDULER_OPERATIONS) cannot retire a non-consequential job', () => scheduler.retireJob('REVERSE_STRESS_QUARTERLY', sau.id, 'trying to retire without ops authority'));
    const retired = await scheduler.retireJob('REVERSE_STRESS_QUARTERLY', ict.id, 'model deprecated, replaced by an external vendor feed');
    const catalogAfterRetire = await scheduler.listJobCatalog();
    const reverseStressEntry = catalogAfterRetire.find((j) => j.code === 'REVERSE_STRESS_QUARTERLY');
    if (retired.isRetired && reverseStressEntry?.isRetired === true) {
        ok('ICT retires a NON-consequential job (REVERSE_STRESS_QUARTERLY) directly — no approval workflow, audit-logged, mirrors pauseDirect\'s shape');
    }
    else {
        fail('retireJob on a non-consequential job did not behave correctly', { retired, reverseStressEntry });
    }
    const reverseStressJob = (await scheduler.getJobs()).find((j) => j.code === 'REVERSE_STRESS_QUARTERLY');
    const runCountBefore = await prisma.scheduledJobRun.count({ where: { jobCode: 'REVERSE_STRESS_QUARTERLY' } });
    await scheduler.maybeRunJob(reverseStressJob, new Date());
    const runCountAfter = await prisma.scheduledJobRun.count({ where: { jobCode: 'REVERSE_STRESS_QUARTERLY' } });
    if (runCountAfter === runCountBefore) {
        ok('a RETIRED job never runs on tick, even when its slot is due — maybeRunJob\'s registration.isRetired check holds, same as the pause check');
    }
    else {
        fail('a retired job ran anyway — the registration check did not block it', { runCountBefore, runCountAfter });
    }
    const registered = await scheduler.registerJob('REVERSE_STRESS_QUARTERLY', ict.id);
    if (!registered.isRetired) {
        ok('ICT re-adds (registers) the retired job — a direct, audit-logged action, no approval needed per the CEO\'s "additions audit-logged" (not "approved") wording');
    }
    else {
        fail('registerJob did not reactivate the job', registered);
    }
    await expectReject('ICT cannot directly retire a CONSEQUENTIAL job (KRI_DAILY_BATCH) — must use requestRetirement()', () => scheduler.retireJob('KRI_DAILY_BATCH', ict.id, 'trying to skip the approval'));
    const retirementRequest = await scheduler.requestRetirement('KRI_DAILY_BATCH', ict.id, 'migrating to a governed replacement model, pending Board sign-off');
    const kriAfterRequest = await scheduler.listJobCatalog();
    const kriEntryPending = kriAfterRequest.find((j) => j.code === 'KRI_DAILY_BATCH');
    if (retirementRequest.status === 'PENDING_APPROVAL' && kriEntryPending?.isRetired === false) {
        ok('requestRetirement: ICT initiates a SCHEDULER_JOB_RETIREMENT workflow — the job keeps running while the request is pending, same "not yet effective" shape as requestPause');
    }
    else {
        fail('requestRetirement did not create a pending, not-yet-effective retirement request', { retirementRequest, kriEntryPending });
    }
    await expectReject('ICT (the requester) cannot approve their own retirement request', () => scheduler.approveRetirement(retirementRequest.id, ict.id));
    await expectReject('a different ICT user still cannot approve — SCHEDULER_PAUSE_APPROVAL is MD_CEO-only, reused unchanged for retirement', () => scheduler.approveRetirement(retirementRequest.id, ict2.id));
    const retirementApproved = await scheduler.approveRetirement(retirementRequest.id, ceo.id);
    const kriAfterApproval = await scheduler.listJobCatalog();
    const kriEntryRetired = kriAfterApproval.find((j) => j.code === 'KRI_DAILY_BATCH');
    if (retirementApproved?.isRetired === true && kriEntryRetired?.isRetired === true) {
        ok('approveRetirement: MD_CEO approval is what actually flips isRetired=true — the SAME DoA seat as pausing (SCHEDULER_PAUSE_APPROVAL), reused rather than duplicated');
    }
    else {
        fail('MD_CEO approval did not flip isRetired correctly', { retirementApproved, kriEntryRetired });
    }
    await scheduler.registerJob('KRI_DAILY_BATCH', ict.id);
    await scheduler.registerJob('REVERSE_STRESS_QUARTERLY', ict.id);
    if (failed) {
        console.error('\nSMOKE FAILED — scheduler console / invariant 32 write path (Check-6A item 2) against the real live DB.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — scheduler console / invariant 32 write path (Check-6A item 2) against the real live DB.');
    }
}
main().catch((err) => {
    console.error('SMOKE ERRORED', err);
    process.exitCode = 1;
});
//# sourceMappingURL=scheduler-console.smoke.js.map