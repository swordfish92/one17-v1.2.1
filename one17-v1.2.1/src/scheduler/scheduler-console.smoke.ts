// Run with: npx tsx src/scheduler/scheduler-console.smoke.ts
// Check-6A item 2 / invariant 32: the scheduler console's write path
// (job inventory access model + governed pause/resume/re-run), proven
// adversarially against the real live DB per the CEO's go-ahead:
//   1. an ICT-role user attempting to pause a consequential job without
//      approval -> refused (no direct path exists at all).
//   2. a paused consequential job is visibly flagged (an EXCEPTION) on
//      SAU/Internal Control's view.
//   3. a re-run after a real failure produces a catch-up run-log entry
//      that reconciles (the SECOND, successful attempt's data, not the
//      first failed one).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { KriEngineService } from '../kri-engine/kri-engine.service';
import { StressEngineService } from '../stress-engine/stress-engine.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { HalalFundLaunchConfigService } from '../engine-halal-fund/halal-fund-launch-config.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { ProcurementService } from '../procurement/procurement.service';
import { WmService } from '../wm/wm.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { ZakatService } from '../zakat/zakat.service';
import { TaskService } from '../task/task.service';
import { PaymentReminderService } from '../counterparty/payment-reminder.service';
import { PmsService } from '../pms/pms.service';
import { BoardCalendarService } from '../board-calendar/board-calendar.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { CertificateService } from '../certificate/certificate.service';
import { NdMandateEngineService } from '../engine-nd-mandate/nd-mandate-engine.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { CalendarService } from '../calendar/calendar.service';
import { CalendarGatewayService } from '../calendar/calendar-gateway.service';
import { InvestorExitService } from '../investor/investor-exit.service';
import { InvestorComplianceSweepService } from '../investor/investor-compliance-sweep.service';
import { LetterService } from '../letter/letter.service';
import { TaxService } from '../tax/tax.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { SchedulerService } from './scheduler.service';
import { mostRecentScheduledSlot } from './scheduler-cadence';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    fail(`expected rejection: ${label}`);
  } catch (err) {
    ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}

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

  const ict = await prisma.appUser.create({ data: { email: `sched-ict-${RUN}@one17.test`, displayName: 'sched-ict' } });
  await rbac.assignRole({ userId: ict.id, roleCode: 'ICT' });
  const sau = await prisma.appUser.create({ data: { email: `sched-sau-${RUN}@one17.test`, displayName: 'sched-sau' } });
  await rbac.assignRole({ userId: sau.id, roleCode: 'SAU_INTERNAL_CONTROL' });
  const ceo = await prisma.appUser.create({ data: { email: `sched-ceo-${RUN}@one17.test`, displayName: 'sched-ceo' } });
  await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });

  await prisma.scheduledJobPauseState.deleteMany({ where: { jobCode: { in: ['HF_DAILY_ACCRUAL', 'STRESS_MODELS_MONTHLY'] } } });

  // --- Proof 1: ICT cannot pause a consequential job unilaterally --------
  await expectReject(
    'ICT calling pauseDirect on the consequential HF_DAILY_ACCRUAL job',
    () => scheduler.pauseDirect('HF_DAILY_ACCRUAL', ict.id, 'trying to skip the approval'),
  );

  // --- Non-consequential job: ICT CAN pause directly, no workflow --------
  const stressState = await scheduler.pauseDirect('STRESS_MODELS_MONTHLY', ict.id, 'planned maintenance window');
  if (stressState.isPaused && stressState.pausedByUserId === ict.id) {
    ok('ICT can pause a NON-consequential job (STRESS_MODELS_MONTHLY) directly — no approval workflow, per invariant 32');
  } else {
    fail('pauseDirect on a non-consequential job did not behave correctly', stressState);
  }
  await scheduler.resumeJob('STRESS_MODELS_MONTHLY', ict.id); // clean up for the rest of this run

  // --- ICT can only INITIATE a pause request on a consequential job ------
  const requested = await scheduler.requestPause('HF_DAILY_ACCRUAL', ict.id, 'suspected bad NAV data pending investigation');
  const stateAfterRequest = await prisma.scheduledJobPauseState.findUnique({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
  if (requested.status === 'PENDING_APPROVAL' && stateAfterRequest?.isPaused === false && stateAfterRequest.pauseWorkflowInstanceId === requested.id) {
    ok('requestPause: ICT initiates a SCHEDULER_JOB_PAUSE workflow instance — isPaused stays false until approved (the job keeps running while the request is pending)');
  } else {
    fail('requestPause did not create a pending, not-yet-effective pause request', { requested, stateAfterRequest });
  }

  // Maker != checker: ICT (the initiator) cannot also approve their own request.
  await expectReject(
    'ICT (the requester) attempting to approve their own pause request',
    () => scheduler.approvePauseRequest(requested.id, ict.id),
  );

  // A second ICT user (not the requester, but same role) still cannot
  // approve — SCHEDULER_PAUSE_APPROVAL is granted only to MD_CEO, not ICT
  // at any standing level. This is the "never a unilateral ICT action" half
  // of invariant 32 proven against a DIFFERENT ICT user, ruling out
  // "maker!=checker was the only thing stopping this."
  const ict2 = await prisma.appUser.create({ data: { email: `sched-ict2-${RUN}@one17.test`, displayName: 'sched-ict2' } });
  await rbac.assignRole({ userId: ict2.id, roleCode: 'ICT' });
  await expectReject(
    'a different ICT user (not the requester) attempting to approve the pause request',
    () => scheduler.approvePauseRequest(requested.id, ict2.id),
  );

  // --- MD_CEO approves -> isPaused actually flips -------------------------
  const approved = await scheduler.approvePauseRequest(requested.id, ceo.id);
  const stateAfterApproval = await prisma.scheduledJobPauseState.findUnique({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
  if (approved?.isPaused === true && stateAfterApproval?.isPaused === true && stateAfterApproval.pausedByUserId === ceo.id) {
    ok('approvePauseRequest: MD_CEO approval is what actually flips isPaused=true — the DoA-gated control invariant 32 calls out by name');
  } else {
    fail('MD_CEO approval did not flip isPaused correctly', { approved, stateAfterApproval });
  }

  // --- Proof 2: the paused job shows as an EXCEPTION on SAU's view -------
  const sauView = await scheduler.listJobsForUser(sau.id);
  const hfOnSauView = sauView.find((j) => j.code === 'HF_DAILY_ACCRUAL');
  if (hfOnSauView?.pauseState?.isPaused === true) {
    ok('SAU/Internal Control (SCHEDULER_OVERSIGHT) sees HF_DAILY_ACCRUAL flagged isPaused=true on their console view — the "shows as an EXCEPTION" requirement');
  } else {
    fail('SAU view did not show the paused job as an exception', hfOnSauView);
  }
  // A pure business owner (FinCon, via FINANCIAL_STATEMENTS VIEW) also sees
  // it — read-only on their own job's status, per invariant 32's worked
  // example ("FinCon sees accrual jobs").
  const finAdmin = await prisma.appUser.create({ data: { email: `sched-fin-${RUN}@one17.test`, displayName: 'sched-fin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const finView = await scheduler.listJobsForUser(finAdmin.id);
  const hfOnFinView = finView.find((j) => j.code === 'HF_DAILY_ACCRUAL');
  const krisOnFinView = finView.find((j) => j.code === 'KRI_DAILY_BATCH');
  if (hfOnFinView?.pauseState?.isPaused === true && !krisOnFinView) {
    ok('FIN_ADMIN (owner of FINANCIAL_STATEMENTS) sees HF_DAILY_ACCRUAL (their own job, paused) but NOT KRI_DAILY_BATCH (Risk\'s job) — per-job business-owner scoping, not blanket visibility');
  } else {
    fail('business-owner scoped view did not behave correctly', { hfOnFinView, krisOnFinView, finViewCodes: finView.map((j) => j.code) });
  }

  // --- The automatic tick must not run a paused consequential job --------
  const runsBeforeTick = await prisma.scheduledJobRun.count({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
  const hfJob = (await scheduler.getJobs()).find((j) => j.code === 'HF_DAILY_ACCRUAL')!;
  await scheduler.maybeRunJob(hfJob, new Date());
  const runsAfterTick = await prisma.scheduledJobRun.count({ where: { jobCode: 'HF_DAILY_ACCRUAL' } });
  if (runsAfterTick === runsBeforeTick) {
    ok('maybeRunJob: a paused consequential job is silently skipped by the automatic tick — no new run row created while paused');
  } else {
    fail('paused job was run by the automatic tick, which must never happen', { runsBeforeTick, runsAfterTick });
  }

  // Manual rerun is also refused while paused — resumeJob is the only door.
  await expectReject(
    'ICT attempting manualRerun on a paused job',
    () => scheduler.manualRerun('HF_DAILY_ACCRUAL', new Date(), ict.id),
  );

  // --- Resume is ALWAYS unilateral by ICT, even for a consequential job --
  const resumed = await scheduler.resumeJob('HF_DAILY_ACCRUAL', ict.id);
  if (resumed.isPaused === false && resumed.resumedByUserId === ict.id) {
    ok('resumeJob: ICT resumes HF_DAILY_ACCRUAL unilaterally, no approval needed — "restoring normal service is the safe direction" (same precedent as DelegationOfAuthority revocation)');
  } else {
    fail('resumeJob did not behave correctly', resumed);
  }

  // --- Proof 3: manual re-run after a REAL failure produces a catch-up ---
  // run-log entry whose data reconciles against independently-computed
  // truth. Uses AUDIT_INTEGRITY_NIGHTLY's own real, reproducible failure
  // (this dev DB's ~32 documented pre-existing hash-chain gaps, RUNBOOK.md
  // §4) rather than a synthetic pass/fail flag — manualRerun looks jobs up
  // from the real production roster (getJobs()), so the proof has to use a
  // real job, not an ad-hoc fixture outside it.
  // Fixed at "yesterday, 23:59" rather than "now minus 24h": mostRecent
  // ScheduledSlot resolves relative to the reference's OWN time-of-day, so
  // "now minus 24h" lands at today's real wall-clock time-of-day minus a
  // day — which, whenever the real clock happens to sit just past the
  // 23:30 cadence hour (as it does here), resolves right back to a slot
  // only minutes behind "now", never triggering isCatchUp. Pinning the
  // reference to 23:59 guarantees the 23:30 slot is unambiguously >5min
  // behind it, regardless of what real wall-clock time this smoke test
  // happens to run at.
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const missedNow = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 0);
  const integrityJob = (await scheduler.getJobs()).find((j) => j.code === 'AUDIT_INTEGRITY_NIGHTLY')!;
  const dueSlot = mostRecentScheduledSlot(integrityJob.cadence, missedNow);
  await prisma.scheduledJobRun.deleteMany({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
  await scheduler.maybeRunJob(integrityJob, missedNow);
  const failedRun = await prisma.scheduledJobRun.findFirst({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
  if (failedRun?.status === 'FAILED' && failedRun.isCatchUp === true) {
    ok('a real failure on a missed slot is recorded FAILED with isCatchUp=true — the automatic recovery attempt genuinely failed against this dev DB\'s known hash-chain gaps');
  } else {
    fail('setup failure run did not record correctly', failedRun);
  }

  const independentCheck = await audit.verifyChainIntegrity();
  const rerun = await scheduler.manualRerun('AUDIT_INTEGRITY_NIGHTLY', dueSlot, ict.id);
  const rerunRow = await prisma.scheduledJobRun.findUnique({ where: { id: rerun.runId } });
  const totalRunsForSlot = await prisma.scheduledJobRun.count({ where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY', scheduledFor: dueSlot } });
  const rerunFailureCount = (rerunRow?.resultSummary as any)?.failures?.length;
  if (
    rerunRow?.isManualRerun === true &&
    rerunRow.triggeredByUserId === ict.id &&
    rerunRow.isCatchUp === true &&
    rerunFailureCount === independentCheck.failures.length &&
    totalRunsForSlot === 2
  ) {
    ok(`manualRerun: ICT's re-run is stamped isManualRerun/triggeredByUserId and marked isCatchUp; its result (${rerunFailureCount} failures) reconciles exactly with an independently-run audit.verifyChainIntegrity() (${independentCheck.failures.length} failures) — not stale or fabricated data. Both the original FAILED run and this re-run are preserved (${totalRunsForSlot} rows for the slot), never overwritten.`);
  } else {
    fail('manualRerun after a real failure did not reconcile correctly', { rerun, rerunRow, totalRunsForSlot, independentCheck: independentCheck.failures.length });
  }

  // --- Invariant 37(f): job catalog — add/remove/toggle -------------------
  // Reset any residue from prior smoke runs so these assertions start from
  // a clean, known state (this dev DB accumulates smoke residue the same
  // way every other suite in this codebase does).
  await prisma.scheduledJobRegistration.deleteMany({ where: { jobCode: { in: ['REVERSE_STRESS_QUARTERLY', 'KRI_DAILY_BATCH'] } } });

  await expectReject(
    'outsider (no SCHEDULER_OPERATIONS) cannot retire a non-consequential job',
    () => scheduler.retireJob('REVERSE_STRESS_QUARTERLY', sau.id, 'trying to retire without ops authority'),
  );

  const retired = await scheduler.retireJob('REVERSE_STRESS_QUARTERLY', ict.id, 'model deprecated, replaced by an external vendor feed');
  const catalogAfterRetire = await scheduler.listJobCatalog();
  const reverseStressEntry = catalogAfterRetire.find((j) => j.code === 'REVERSE_STRESS_QUARTERLY');
  if (retired.isRetired && reverseStressEntry?.isRetired === true) {
    ok('ICT retires a NON-consequential job (REVERSE_STRESS_QUARTERLY) directly — no approval workflow, audit-logged, mirrors pauseDirect\'s shape');
  } else {
    fail('retireJob on a non-consequential job did not behave correctly', { retired, reverseStressEntry });
  }

  // A retired job never runs, even on a due slot — maybeRunJob's registration check.
  const reverseStressJob = (await scheduler.getJobs()).find((j) => j.code === 'REVERSE_STRESS_QUARTERLY')!;
  const runCountBefore = await prisma.scheduledJobRun.count({ where: { jobCode: 'REVERSE_STRESS_QUARTERLY' } });
  await scheduler.maybeRunJob(reverseStressJob, new Date());
  const runCountAfter = await prisma.scheduledJobRun.count({ where: { jobCode: 'REVERSE_STRESS_QUARTERLY' } });
  if (runCountAfter === runCountBefore) {
    ok('a RETIRED job never runs on tick, even when its slot is due — maybeRunJob\'s registration.isRetired check holds, same as the pause check');
  } else {
    fail('a retired job ran anyway — the registration check did not block it', { runCountBefore, runCountAfter });
  }

  const registered = await scheduler.registerJob('REVERSE_STRESS_QUARTERLY', ict.id);
  if (!registered.isRetired) {
    ok('ICT re-adds (registers) the retired job — a direct, audit-logged action, no approval needed per the CEO\'s "additions audit-logged" (not "approved") wording');
  } else {
    fail('registerJob did not reactivate the job', registered);
  }

  await expectReject(
    'ICT cannot directly retire a CONSEQUENTIAL job (KRI_DAILY_BATCH) — must use requestRetirement()',
    () => scheduler.retireJob('KRI_DAILY_BATCH', ict.id, 'trying to skip the approval'),
  );

  const retirementRequest = await scheduler.requestRetirement('KRI_DAILY_BATCH', ict.id, 'migrating to a governed replacement model, pending Board sign-off');
  const kriAfterRequest = await scheduler.listJobCatalog();
  const kriEntryPending = kriAfterRequest.find((j) => j.code === 'KRI_DAILY_BATCH');
  if (retirementRequest.status === 'PENDING_APPROVAL' && kriEntryPending?.isRetired === false) {
    ok('requestRetirement: ICT initiates a SCHEDULER_JOB_RETIREMENT workflow — the job keeps running while the request is pending, same "not yet effective" shape as requestPause');
  } else {
    fail('requestRetirement did not create a pending, not-yet-effective retirement request', { retirementRequest, kriEntryPending });
  }

  await expectReject(
    'ICT (the requester) cannot approve their own retirement request',
    () => scheduler.approveRetirement(retirementRequest.id, ict.id),
  );
  await expectReject(
    'a different ICT user still cannot approve — SCHEDULER_PAUSE_APPROVAL is MD_CEO-only, reused unchanged for retirement',
    () => scheduler.approveRetirement(retirementRequest.id, ict2.id),
  );

  const retirementApproved = await scheduler.approveRetirement(retirementRequest.id, ceo.id);
  const kriAfterApproval = await scheduler.listJobCatalog();
  const kriEntryRetired = kriAfterApproval.find((j) => j.code === 'KRI_DAILY_BATCH');
  if (retirementApproved?.isRetired === true && kriEntryRetired?.isRetired === true) {
    ok('approveRetirement: MD_CEO approval is what actually flips isRetired=true — the SAME DoA seat as pausing (SCHEDULER_PAUSE_APPROVAL), reused rather than duplicated');
  } else {
    fail('MD_CEO approval did not flip isRetired correctly', { retirementApproved, kriEntryRetired });
  }

  // Cleanup: leave the real production roster exactly as this smoke test
  // found it (both jobs re-registered), since this is the shared live dev
  // DB, not an isolated fixture — a permanently-retired KRI_DAILY_BATCH
  // would silently break the real scheduler process if one is running
  // against this same database.
  await scheduler.registerJob('KRI_DAILY_BATCH', ict.id);
  await scheduler.registerJob('REVERSE_STRESS_QUARTERLY', ict.id);

  if (failed) {
    console.error('\nSMOKE FAILED — scheduler console / invariant 32 write path (Check-6A item 2) against the real live DB.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — scheduler console / invariant 32 write path (Check-6A item 2) against the real live DB.');
  }
}

main().catch((err) => {
  console.error('SMOKE ERRORED', err);
  process.exitCode = 1;
});
