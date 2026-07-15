import { Injectable, Logger, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { KriEngineService } from '../kri-engine/kri-engine.service';
import { StressEngineService } from '../stress-engine/stress-engine.service';
import { HalalFundEngineService } from '../engine-halal-fund/halal-fund-engine.service';
import { HalalFundLaunchConfigService } from '../engine-halal-fund/halal-fund-launch-config.service';
import { HalalFundEngineError } from '../engine-halal-fund/halal-fund-engine.types';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ProcurementService } from '../procurement/procurement.service';
import { ZakatService } from '../zakat/zakat.service';
import { TaskService } from '../task/task.service';
import { PaymentReminderService } from '../counterparty/payment-reminder.service';
import { PmsService } from '../pms/pms.service';
import { BoardCalendarService } from '../board-calendar/board-calendar.service';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { CalendarService } from '../calendar/calendar.service';
import { CalendarGatewayService } from '../calendar/calendar-gateway.service';
import { InvestorExitService } from '../investor/investor-exit.service';
import { InvestorComplianceSweepService } from '../investor/investor-compliance-sweep.service';
import { AttendanceService } from '../attendance/attendance.service';
import { TaxService } from '../tax/tax.service';
import { NotificationService } from '../notification/notification.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { mostRecentScheduledSlot } from './scheduler-cadence';
import { PartialJobFailure, ScheduledJobConfig } from './scheduler.types';

const SYSTEM_SCHEDULER_EMAIL = 'system-scheduler@one17.test';
// A batch tick every 60s is frequent enough that no job (daily/monthly/
// quarterly) is ever more than ~1 minute late under normal operation. A run
// this far behind its scheduled slot can only mean the process was down
// through the slot — the exact case catch-up semantics exist for.
const CATCH_UP_THRESHOLD_MS = 5 * 60_000;
const TICK_INTERVAL_MS = 60_000;

// Invariant 32: jobs whose pause/disable is a financially or regulatorily
// consequential act (accruals, KRI batch, integrity check) — pausing these
// requires the DoA-gated SCHEDULER_JOB_PAUSE workflow. Everything else
// (the two SANDBOX stress sweeps) pauses unilaterally, ICT-direct.
const CONSEQUENTIAL_JOBS = new Set(['HF_DAILY_ACCRUAL', 'KRI_DAILY_BATCH', 'AUDIT_INTEGRITY_NIGHTLY']);

// Invariant 32: "business owners consume per job (FinCon sees accrual jobs,
// Compliance sees filing jobs, Risk sees KRI jobs) — read-only on their own
// jobs' status." Reuses EXISTING capability functions already held by the
// relevant department rather than inventing a capability per job.
const JOB_OWNER_FUNCTION_CODE: Record<string, string> = {
  HF_DAILY_ACCRUAL: 'FINANCIAL_STATEMENTS',
  KRI_DAILY_BATCH: 'RISK_APPETITE_MATRIX',
  AUDIT_INTEGRITY_NIGHTLY: 'AUDIT_TRAIL_VIEW',
  STRESS_MODELS_MONTHLY: 'STRESS_TESTING',
  REVERSE_STRESS_QUARTERLY: 'STRESS_TESTING',
  ASSET_DEPRECIATION_MONTHLY: 'PROCUREMENT_OPERATIONS',
  ZAKAT_NISAB_BREACH_MONITOR: 'ZAKAT_ADVISORY',
  ZAKAT_ANNUAL_REMINDER: 'ZAKAT_ADVISORY',
  // TASK_ESCALATION_SWEEP has no existing owner mapping: no PlatformFunction
  // covers "task management" as a department capability (TaskService gates
  // assignment on the reports_to org hierarchy, not a capability function) —
  // left unmapped (ops-only visibility via SCHEDULER_OPERATIONS) rather than
  // inventing a function code this job would be the only consumer of.
  COUNTERPARTY_PAYMENT_REMINDER_SWEEP: 'COUNTERPARTY_ONBOARDING',
  CREDIT_BUREAU_MONTHLY_SYNC: 'COUNTERPARTY_ONBOARDING',
  TASK_DEFAULT_PMS_FEED: 'PMS_BEHAVIOURAL_GATE',
  ATTENDANCE_TTLOCK_SYNC: 'ATTENDANCE_GATEWAY_POLICY',
  ATTENDANCE_LATENESS_PMS_FEED: 'PMS_BEHAVIOURAL_GATE',
  BOARD_CALENDAR_REMINDER_SWEEP: 'BOARD_CALENDAR_MANAGEMENT',
  PAYMENT_GATEWAY_RECONCILIATION: 'PAYMENT_GATEWAY_SUSPENSE',
  CALENDAR_EXTERNAL_SYNC_SWEEP: 'CALENDAR_GATEWAY_POLICY',
  INVESTOR_DORMANCY_SWEEP: 'INVESTOR_EXIT_INITIATION',
  KYC_PERIODIC_REVIEW_SWEEP: 'SCREENING_PERFORM',
  KYC_DOCUMENT_EXPIRY_SWEEP: 'SCREENING_PERFORM',
  SCREENING_LIST_DOWNLOAD_SWEEP: 'SCREENING_GATEWAY_POLICY',
  SCREENING_RESCREENING_SWEEP: 'SCREENING_PERFORM',
};

// Check-5B item 1: the platform scheduler framework. ONE service owns every
// job's timing, run-log, catch-up, and failure alerting — replacing the
// "each engine's batch method exists but nothing ever calls it" gap CHECK5
// reported for both the Halal Fund daily accrual and the KRI daily batch
// (CHECK5_EVIDENCE.md §7). Job cadence lives in code (buildJobs(), a typed
// roster — same "config carries vocabulary" precedent as kri-roster.ts);
// EXECUTION HISTORY lives in the DB (ScheduledJobRun) because it's real
// operational fact, not governed config.
@Injectable()
export class SchedulerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(SchedulerService.name);
  private jobs: ScheduledJobConfig[] = [];
  private tickHandle: ReturnType<typeof setInterval> | null = null;
  private ticking = false;

  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly kriEngine: KriEngineService,
    private readonly stressEngine: StressEngineService,
    private readonly halalFundEngine: HalalFundEngineService,
    private readonly halalFundLaunchConfig: HalalFundLaunchConfigService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly procurement: ProcurementService,
    private readonly zakat: ZakatService,
    private readonly task: TaskService,
    private readonly paymentReminders: PaymentReminderService,
    private readonly pms: PmsService,
    private readonly boardCalendar: BoardCalendarService,
    private readonly paymentGateway: PaymentGatewayService,
    private readonly calendar: CalendarService,
    private readonly calendarGateway: CalendarGatewayService,
    private readonly investorExit: InvestorExitService,
    private readonly complianceSweep: InvestorComplianceSweepService,
    private readonly attendance: AttendanceService,
    private readonly tax: TaxService,
    private readonly notification: NotificationService,
    private readonly screeningGateway: ScreeningGatewayService,
  ) {}

 async onModuleInit() {
  this.jobs = await this.buildJobs();

  // await this.tick(new Date());

  this.tickHandle = setInterval(() => void this.tick(new Date()), TICK_INTERVAL_MS);
}

  onModuleDestroy() {
    if (this.tickHandle) clearInterval(this.tickHandle);
  }

  // Public so a smoke test (constructing this service directly, outside
  // Nest's DI lifecycle — onModuleInit never fires there) can obtain the
  // real production job roster and invoke each one directly via
  // executeJob(), proving the ACTUAL jobs run against real data — not just
  // the generic scheduling mechanics against synthetic fixtures.
  async getJobs(): Promise<ScheduledJobConfig[]> {
    if (this.jobs.length === 0) this.jobs = await this.buildJobs();
    return this.jobs;
  }

  // Exposed separately from the setInterval wiring so a smoke test can call
  // it directly with a manufactured `now` — proving catch-up and alerting
  // without waiting on a real clock.
  async tick(now: Date): Promise<void> {
    if (this.ticking) return; // a still-running previous tick (e.g. a slow monthly sweep) must not overlap itself
    this.ticking = true;
    try {
      for (const job of this.jobs) {
  this.logger.log(`Running job: ${job.code}`);

  try {
    await this.maybeRunJob(job, now);
    this.logger.log(`Finished job: ${job.code}`);
  } catch (error) {
    this.logger.error(`Job failed: ${job.code}`);
    this.logger.error(error instanceof Error ? error.stack : String(error));
    throw error;
  }
}
    } finally {
      this.ticking = false;
    }
  }

  // Public (not just called from tick()'s production roster loop) so a
  // smoke test can exercise the "already ran this slot -> skip" /
  // "slot passed unrun -> catch-up" guard logic directly, against a
  // synthetic job config, without needing the full Nest DI lifecycle
  // (onModuleInit, which populates the real roster) to have run first.
  async maybeRunJob(job: ScheduledJobConfig, now: Date): Promise<void> {
    // Invariant 32: "a paused job shows as an EXCEPTION on SAU's view until
    // resumed" — the automatic tick must not silently keep running a job
    // whose pause was approved. Manual re-run (invariant 32's own
    // ICT-operated recovery action) intentionally bypasses this check — see
    // manualRerun — since re-running a specific failed slot is a distinct,
    // separately-authorized action from the job's normal cadence resuming.
    const pauseState = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode: job.code } });
    if (pauseState?.isPaused) return;
    // Invariant 37(f): a retired job never runs — absence of a
    // scheduled_job_registration row means ACTIVE (today's behavior,
    // unchanged); a row only exists once a job has actually been retired.
    const registration = await this.prisma.scheduledJobRegistration.findUnique({ where: { jobCode: job.code } });
    if (registration?.isRetired) return;

    const dueSlot = mostRecentScheduledSlot(job.cadence, now);
    const alreadyRun = await this.prisma.scheduledJobRun.findFirst({
      where: { jobCode: job.code, scheduledFor: dueSlot, status: { in: ['SUCCEEDED', 'FAILED'] } },
    });
    if (alreadyRun) return;

    const isCatchUp = now.getTime() - dueSlot.getTime() > CATCH_UP_THRESHOLD_MS;
    await this.executeJob(job, dueSlot, isCatchUp);
  }

  // Public so a smoke test (or the ops-UI's "run now"/rerun action) can
  // invoke a job directly, bypassing cadence timing, while still going
  // through the exact same run-log + alerting path as a real scheduled
  // fire. `manual` is set only by manualRerun() below — it stamps the run
  // row so the console can show "this was a human-triggered catch-up, not
  // the automatic tick."
  async executeJob(
    job: ScheduledJobConfig,
    scheduledFor: Date,
    isCatchUp = false,
    manual?: { triggeredByUserId: string },
  ): Promise<{ status: 'SUCCEEDED' | 'FAILED'; runId: string }> {
    const run = await this.prisma.scheduledJobRun.create({
      data: {
        jobCode: job.code,
        scheduledFor,
        startedAt: new Date(),
        status: 'RUNNING',
        isCatchUp,
        isManualRerun: !!manual,
        triggeredByUserId: manual?.triggeredByUserId,
      },
    });

    try {
      const result = await job.run(scheduledFor);
      await this.prisma.scheduledJobRun.update({
        where: { id: run.id },
        data: { status: 'SUCCEEDED', completedAt: new Date(), resultSummary: result as any },
      });
      this.logger.log(`${job.code}: SUCCEEDED${isCatchUp ? ' (catch-up)' : ''}`);
      return { status: 'SUCCEEDED', runId: run.id };
    } catch (err) {
      const isPartial = err instanceof PartialJobFailure;
      const errorMessage = (err as Error).message;
      await this.prisma.scheduledJobRun.update({
        where: { id: run.id },
        data: {
          status: 'FAILED',
          completedAt: new Date(),
          errorMessage,
          resultSummary: isPartial ? (err.summary as any) : undefined,
        },
      });
      // The alert: a queryable, permanent audit_trail row, PLUS (RES-001 F-02,
      // CHECK23 v1.0.2) an active push through the notification engine — the
      // audit row alone required a human to know to go look; this closes
      // that "silent unless someone checks" gap the original comment here
      // named honestly at Check-5B.
      await this.audit.record({
        action: 'CREATE',
        entityType: 'scheduled_job_failure',
        entityId: run.id,
        after: { jobCode: job.code, scheduledFor: scheduledFor.toISOString(), isCatchUp, errorMessage },
      });
      await this.alertJobFailure(job, scheduledFor, isCatchUp, errorMessage);
      this.logger.error(`${job.code}: FAILED${isCatchUp ? ' (catch-up)' : ''} — ${errorMessage}`);
      return { status: 'FAILED', runId: run.id };
    }
  }

  // RES-001 F-02 (CHECK23, v1.0.2): notifies every SCHEDULER_OPERATIONS
  // (ICT) and SCHEDULER_OVERSIGHT (SAU/Internal Control, MD_CEO) VIEW-holder
  // — the same population invariant 32 already grants standing visibility
  // into scheduler operations, so a failure alert reaches exactly who
  // already has authority to act on it, no new capability invented. Mirrors
  // BoardCalendarService.runReminderSweep's own role-holder-resolution
  // shape (rolePermission -> userRole -> dedup Set).
  private async alertJobFailure(job: ScheduledJobConfig, scheduledFor: Date, isCatchUp: boolean, errorMessage: string): Promise<void> {
    const roleHolders = await this.prisma.rolePermission.findMany({
      where: { functionCode: { in: ['SCHEDULER_OPERATIONS', 'SCHEDULER_OVERSIGHT'] }, level: 'VIEW' },
      select: { roleCode: true },
    });
    const recipientUserIds = new Set<string>();
    for (const { roleCode } of roleHolders) {
      const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
      for (const h of holders) recipientUserIds.add(h.userId);
    }
    const label = `${job.code}${isCatchUp ? ' (catch-up)' : ''}`;
    for (const recipientUserId of recipientUserIds) {
      await this.notification.create({
        recipientUserId,
        type: 'SCHEDULER_JOB_FAILED',
        title: `Scheduled job failed: ${job.code}`,
        body: `${label} failed for its ${scheduledFor.toISOString()} slot: ${errorMessage}`,
        linkPath: '/administration/scheduler-console',
      });
    }
  }

  async listRecentRuns(jobCode?: string, limit = 50) {
    return this.prisma.scheduledJobRun.findMany({
      where: jobCode ? { jobCode } : undefined,
      orderBy: { scheduledFor: 'desc' },
      take: limit,
    });
  }

  async listUnresolvedFailures(limit = 50) {
    return this.prisma.scheduledJobRun.findMany({
      where: { status: 'FAILED' },
      orderBy: { scheduledFor: 'desc' },
      take: limit,
    });
  }

  // Invariant 32's access model in one query: ICT (SCHEDULER_OPERATIONS)
  // and SAU/CEO (SCHEDULER_OVERSIGHT) see every job; a business owner sees
  // only the job(s) their standing capability's VIEW level already covers
  // (ownerFunctionCode). This is a manual multi-capability OR-check — see
  // src/auth/capability.guard.ts's comment: @RequiresCapability's Reflector
  // metadata is a single function+level pair, not stackable/OR-able, so a
  // decorator alone cannot express "operations OR oversight OR owner".
  async listJobsForUser(userId: string) {
    const [opsEligible, oversightEligible] = await Promise.all([
      this.delegation.hasCapability(userId, 'SCHEDULER_OPERATIONS', 'VIEW'),
      this.delegation.hasCapability(userId, 'SCHEDULER_OVERSIGHT', 'VIEW'),
    ]);
    const seesEverything = opsEligible.eligible || oversightEligible.eligible;

    const jobs = await this.getJobs();
    const pauseStates = await this.prisma.scheduledJobPauseState.findMany();
    const pauseByCode = new Map(pauseStates.map((p) => [p.jobCode, p]));

    const visible: typeof jobs = [];
    for (const job of jobs) {
      if (seesEverything) {
        visible.push(job);
        continue;
      }
      const ownerFn = JOB_OWNER_FUNCTION_CODE[job.code];
      if (ownerFn) {
        const { eligible } = await this.delegation.hasCapability(userId, ownerFn, 'VIEW');
        if (eligible) visible.push(job);
      }
    }

    const results: {
      code: string;
      description: string;
      cadence: ScheduledJobConfig['cadence'];
      isConsequential: boolean;
      ownerFunctionCode: string | null;
      pauseState: Awaited<ReturnType<SchedulerService['prisma']['scheduledJobPauseState']['findFirst']>> | null;
      lastRun: Awaited<ReturnType<SchedulerService['prisma']['scheduledJobRun']['findFirst']>>;
    }[] = [];
    for (const job of visible) {
      const lastRun = await this.prisma.scheduledJobRun.findFirst({ where: { jobCode: job.code }, orderBy: { scheduledFor: 'desc' } });
      results.push({
        code: job.code,
        description: job.description,
        cadence: job.cadence,
        isConsequential: CONSEQUENTIAL_JOBS.has(job.code),
        ownerFunctionCode: JOB_OWNER_FUNCTION_CODE[job.code] ?? null,
        pauseState: pauseByCode.get(job.code) ?? null,
        lastRun,
      });
    }
    return results;
  }

  // ICT-direct pause for a non-consequential job — no workflow, matching
  // invariant 32's "ICT operates" KRA for anything that isn't financially/
  // regulatorily consequential.
  async pauseDirect(jobCode: string, userId: string, reason: string) {
    if (CONSEQUENTIAL_JOBS.has(jobCode)) {
      throw new Error(`${jobCode} is a consequential job — pausing it requires the SCHEDULER_JOB_PAUSE approval workflow (invariant 32), not a direct ICT action. Use requestPause().`);
    }
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `pause ${jobCode}`);
    const updated = await this.prisma.scheduledJobPauseState.upsert({
      where: { jobCode },
      create: { jobCode, isPaused: true, pausedAt: new Date(), pausedByUserId: userId, pauseReason: reason },
      update: { isPaused: true, pausedAt: new Date(), pausedByUserId: userId, pauseReason: reason, resumedAt: null, resumedByUserId: null },
    });
    await this.audit.record({ actorUserId: userId, action: 'UPDATE', entityType: 'scheduled_job_pause_state', entityId: jobCode, after: { isPaused: true, reason } });
    return updated;
  }

  // The control invariant 32 calls out by name: "PAUSING ... any
  // financially/regulatorily consequential job ... requires approval
  // workflow per DoA — never a unilateral ICT action." ICT can only
  // INITIATE this — isPaused is flipped exclusively by approvePauseRequest,
  // reached only when the workflow instance is APPROVED. There is
  // deliberately no direct "just pause it" path for a consequential job.
  async requestPause(jobCode: string, userId: string, reason: string) {
    if (!CONSEQUENTIAL_JOBS.has(jobCode)) {
      throw new Error(`${jobCode} is not a consequential job — pause it directly via pauseDirect(), no approval workflow needed.`);
    }
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `request pause of ${jobCode}`);

    const existingPending = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode } });
    if (existingPending?.pauseWorkflowInstanceId) {
      const pending = await this.prisma.workflowInstance.findUnique({ where: { id: existingPending.pauseWorkflowInstanceId } });
      if (pending?.status === 'PENDING_APPROVAL') {
        throw new Error(`A pause request for ${jobCode} is already pending approval (workflow ${pending.id}).`);
      }
    }

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'SCHEDULER_JOB_PAUSE',
      entityType: 'scheduled_job_pause_state',
      entityId: jobCode,
      scenario: 'STANDARD',
      initiatedByUserId: userId,
    });

    await this.prisma.scheduledJobPauseState.upsert({
      where: { jobCode },
      create: { jobCode, isPaused: false, pauseReason: reason, pauseWorkflowInstanceId: instance.id },
      update: { pauseReason: reason, pauseWorkflowInstanceId: instance.id },
    });
    await this.audit.record({ actorUserId: userId, action: 'CREATE', entityType: 'scheduled_job_pause_state', entityId: jobCode, after: { requestedPause: true, reason, workflowInstanceId: instance.id } });
    return instance;
  }

  // Dispatched from WorkflowInboxService's approve() dispatch table (the
  // same pattern every other approval-bearing workflow type already uses —
  // no bespoke approval screen). Only here does isPaused actually flip.
  async approvePauseRequest(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const state = await this.prisma.scheduledJobPauseState.findFirstOrThrow({ where: { pauseWorkflowInstanceId: workflowInstanceId } });
    const paused = await this.prisma.scheduledJobPauseState.update({
      where: { jobCode: state.jobCode },
      data: { isPaused: true, pausedAt: new Date(), pausedByUserId: approverUserId },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'scheduled_job_pause_state', entityId: state.jobCode, after: { isPaused: true, workflowInstanceId } });
    return paused;
  }

  // Resuming is ALWAYS unilateral by ICT, regardless of consequentiality —
  // "restoring normal service is the safe direction," the same reasoning
  // DelegationOfAuthority revocation is unilateral-by-design (gating an
  // emergency stop behind a second signature would leave a paused
  // accounting job frozen while awaiting approval — a governance
  // anti-pattern, not a control).
  async resumeJob(jobCode: string, userId: string) {
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `resume ${jobCode}`);
    const state = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode } });
    if (!state?.isPaused) {
      throw new Error(`${jobCode} is not currently paused.`);
    }
    const resumed = await this.prisma.scheduledJobPauseState.update({
      where: { jobCode },
      data: { isPaused: false, resumedAt: new Date(), resumedByUserId: userId, pauseWorkflowInstanceId: null },
    });
    await this.audit.record({ actorUserId: userId, action: 'UPDATE', entityType: 'scheduled_job_pause_state', entityId: jobCode, after: { isPaused: false } });
    return resumed;
  }

  // ==========================================================================
  // Invariant 37(f): job catalog — ADD (register), REMOVE (retire), within
  // the SAME governance already established for pause/resume: a
  // consequential job's retirement is as significant as pausing it (both
  // stop it from ever running again until reversed), so it reuses the
  // identical DoA gate; a non-consequential job's retirement is a direct
  // ICT action. Registering (reactivating a previously-retired job) is
  // deliberately NOT DoA-gated at all, per the CEO's own "additions
  // audit-logged" (not "additions approved") wording — only REMOVING
  // automation is consequential enough to need sign-off.
  // ==========================================================================
  // VIEW-gating is the controller's job (@RequiresCapability), same as
  // every other read method in this service (listRecentRuns,
  // listUnresolvedFailures) — listJobsForUser is the one exception that
  // self-gates because it computes PER-USER visibility, which a route
  // decorator can't express.
  async listJobCatalog() {
    const jobs = await this.getJobs();
    const registrations = await this.prisma.scheduledJobRegistration.findMany();
    const registrationByCode = new Map(registrations.map((r) => [r.jobCode, r]));
    return jobs.map((job) => ({
      code: job.code,
      description: job.description,
      cadence: job.cadence,
      isConsequential: CONSEQUENTIAL_JOBS.has(job.code),
      registration: registrationByCode.get(job.code) ?? null,
      isRetired: registrationByCode.get(job.code)?.isRetired ?? false,
    }));
  }

  async registerJob(jobCode: string, userId: string) {
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `register ${jobCode}`);
    const jobs = await this.getJobs();
    if (!jobs.some((j) => j.code === jobCode)) {
      throw new Error(`${jobCode} is not a registered job TYPE in the catalog — the job catalog is the fixed set of code-defined jobs, not an arbitrary registry.`);
    }
    const registered = await this.prisma.scheduledJobRegistration.upsert({
      where: { jobCode },
      create: { jobCode, isRetired: false, registeredAt: new Date(), registeredByUserId: userId },
      update: { isRetired: false, registeredAt: new Date(), registeredByUserId: userId, retiredAt: null, retiredByUserId: null, retireReason: null, retireWorkflowInstanceId: null },
    });
    await this.audit.record({ actorUserId: userId, action: 'CREATE', entityType: 'scheduled_job_registration', entityId: jobCode, after: { isRetired: false } });
    return registered;
  }

  // Direct retirement for a non-consequential job — same "ICT operates"
  // shape as pauseDirect.
  async retireJob(jobCode: string, userId: string, reason: string) {
    if (CONSEQUENTIAL_JOBS.has(jobCode)) {
      throw new Error(`${jobCode} is a consequential job — retiring it requires the SCHEDULER_JOB_RETIREMENT approval workflow (invariant 37f, same DoA gate as pausing), not a direct ICT action. Use requestRetirement().`);
    }
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `retire ${jobCode}`);
    const retired = await this.prisma.scheduledJobRegistration.upsert({
      where: { jobCode },
      create: { jobCode, isRetired: true, retiredAt: new Date(), retiredByUserId: userId, retireReason: reason },
      update: { isRetired: true, retiredAt: new Date(), retiredByUserId: userId, retireReason: reason },
    });
    await this.audit.record({ actorUserId: userId, action: 'UPDATE', entityType: 'scheduled_job_registration', entityId: jobCode, after: { isRetired: true, reason } });
    return retired;
  }

  // The DoA-gated path for a consequential job — mirrors requestPause
  // exactly. ICT can only INITIATE; isRetired flips exclusively in
  // approveRetirement.
  async requestRetirement(jobCode: string, userId: string, reason: string) {
    if (!CONSEQUENTIAL_JOBS.has(jobCode)) {
      throw new Error(`${jobCode} is not a consequential job — retire it directly via retireJob(), no approval workflow needed.`);
    }
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `request retirement of ${jobCode}`);

    const existing = await this.prisma.scheduledJobRegistration.findUnique({ where: { jobCode } });
    if (existing?.retireWorkflowInstanceId) {
      const pending = await this.prisma.workflowInstance.findUnique({ where: { id: existing.retireWorkflowInstanceId } });
      if (pending?.status === 'PENDING_APPROVAL') {
        throw new Error(`A retirement request for ${jobCode} is already pending approval (workflow ${pending.id}).`);
      }
    }

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'SCHEDULER_JOB_RETIREMENT',
      entityType: 'scheduled_job_registration',
      entityId: jobCode,
      scenario: 'STANDARD',
      initiatedByUserId: userId,
    });

    await this.prisma.scheduledJobRegistration.upsert({
      where: { jobCode },
      create: { jobCode, isRetired: false, retireReason: reason, retireWorkflowInstanceId: instance.id },
      update: { retireReason: reason, retireWorkflowInstanceId: instance.id },
    });
    await this.audit.record({ actorUserId: userId, action: 'CREATE', entityType: 'scheduled_job_registration', entityId: jobCode, after: { requestedRetirement: true, reason, workflowInstanceId: instance.id } });
    return instance;
  }

  // Dispatched from WorkflowInboxService's approve() dispatch table — same
  // pattern as approvePauseRequest.
  async approveRetirement(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const registration = await this.prisma.scheduledJobRegistration.findFirstOrThrow({ where: { retireWorkflowInstanceId: workflowInstanceId } });
    const retired = await this.prisma.scheduledJobRegistration.update({
      where: { jobCode: registration.jobCode },
      data: { isRetired: true, retiredAt: new Date(), retiredByUserId: approverUserId },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'scheduled_job_registration', entityId: registration.jobCode, after: { isRetired: true, workflowInstanceId } });
    return retired;
  }

  // ICT's manual re-run — the console's "RE-RUN/catch-up trigger" (invariant
  // 32). A paused job cannot be manually forced through this path either;
  // resumeJob is the one way to unblock it, keeping "paused means paused"
  // true regardless of which door you knock on.
  async manualRerun(jobCode: string, scheduledFor: Date, userId: string) {
    await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `manually re-run ${jobCode}`);
    const pauseState = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode } });
    if (pauseState?.isPaused) {
      throw new Error(`${jobCode} is paused — resume it before re-running.`);
    }
    const jobs = await this.getJobs();
    const job = jobs.find((j) => j.code === jobCode);
    if (!job) throw new Error(`No scheduled job with code ${jobCode}.`);

    const now = new Date();
    const isCatchUp = now.getTime() - scheduledFor.getTime() > CATCH_UP_THRESHOLD_MS;
    return this.executeJob(job, scheduledFor, isCatchUp, { triggeredByUserId: userId });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'scheduler_console_activity', entityId: activity, after: { functionCode, level } });
      throw new Error(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  private async systemSchedulerUserId(): Promise<string> {
    let user = await this.prisma.appUser.findUnique({ where: { email: SYSTEM_SCHEDULER_EMAIL } });
    if (!user) {
      user = await this.prisma.appUser.create({ data: { email: SYSTEM_SCHEDULER_EMAIL, displayName: 'System Scheduler' } });
    }
    // Idempotent role assignment — find-or-create the user AND its role
    // together, so a fresh production DB (seed.ts has run, but this system
    // account has never logged in — it never logs in) gets exactly the
    // SYSTEM_SCHEDULER role the first time a scheduled job actually needs
    // it, not as a separate manual provisioning step.
    const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
    if (!hasRole) {
      await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
    }
    return user.id;
  }

  private async companyEntityCode(): Promise<string> {
    const company = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
    return company.code;
  }

  private readonly STRESS_RUNNERS: Record<string, (scenarioCode: string, systemUserId: string, entityCode: string) => Promise<unknown>> = {
    LIQUIDITY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runLiquidityStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
    CAPITAL_ADEQUACY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runCapitalAdequacyStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
    REVENUE_SENSITIVITY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runRevenueSensitivityStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
    COUNTERPARTY_DEFAULT: (_scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runCounterpartyDefaultStress({ ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
    PORTFOLIO_SHOCK: (_scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runPortfolioShockStress({ ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
  };

  // The five per-scenario models (LIQUIDITY/CAPITAL_ADEQUACY/
  // REVENUE_SENSITIVITY/COUNTERPARTY_DEFAULT/PORTFOLIO_SHOCK): one
  // stress_test_run per ACTIVE scenario config row, since each scenario code
  // is a distinct governed magnitude (e.g. LIQ-01 mild vs LIQ-08 severe).
  private async runStressSweep(modelTypes: string[]): Promise<Record<string, unknown>> {
    const systemUserId = await this.systemSchedulerUserId();
    const entityCode = await this.companyEntityCode();
    const scenarios = await this.prisma.stressScenarioConfig.findMany({
      where: { modelType: { in: modelTypes as any }, status: 'ACTIVE' },
      orderBy: [{ modelType: 'asc' }, { scenarioCode: 'asc' }],
      distinct: ['modelType', 'scenarioCode'],
    });

    const results: { modelType: string; scenarioCode: string; ok: boolean; error?: string }[] = [];
    for (const scenario of scenarios) {
      const runner = this.STRESS_RUNNERS[scenario.modelType];
      if (!runner) {
        results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: false, error: `No runner wired for stress model type ${scenario.modelType}` });
        continue;
      }
      try {
        await runner(scenario.scenarioCode, systemUserId, entityCode);
        results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: true });
      } catch (err) {
        results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: false, error: (err as Error).message });
      }
    }

    const failed = results.filter((r) => !r.ok);
    const summary = { totalScenarios: results.length, succeeded: results.length - failed.length, failed: failed.length, results };
    if (failed.length > 0) {
      throw new PartialJobFailure(`${failed.length}/${results.length} scenario run(s) failed`, summary);
    }
    return summary;
  }

  // Reverse stress is shaped differently from the other five models:
  // StressEngineService.runReverseStress() processes ALL 8 REVERSE_STRESS
  // events (RSE-01..08) internally in a single call and writes one
  // stress_test_run row — it takes no scenarioCode. Looping per-scenario-row
  // here (the way runStressSweep does for the other five models) would
  // create 8 duplicate runs for what the engine itself treats as one report.
  private async runReverseStressSweep(): Promise<Record<string, unknown>> {
    const systemUserId = await this.systemSchedulerUserId();
    const entityCode = await this.companyEntityCode();
    const run = await this.stressEngine.runReverseStress({ ledgerEntityCode: entityCode, runMode: 'SANDBOX', ranByUserId: systemUserId });
    const outputs = (run as { outputs: unknown }).outputs as { events?: unknown[] } | null;
    return { runId: (run as { id: string }).id, eventCount: outputs?.events?.length ?? 0 };
  }

  // Check-6A item 1: closes CHECK5_EVIDENCE.md §7 / CHECK5B_EVIDENCE.md §1.1
  // honestly — the config table now exists (HalalFundLaunchConfigService),
  // so this sweeps every ACTIVE config and accrues/publishes NAV for it.
  // Data-driven, not entity-specific: a fund with no ACTIVE config (i.e. the
  // Halal Fund has not yet launched in production — no such row is seeded)
  // means zero funds processed, reported plainly rather than a fabricated
  // "N/A" fund code standing in for one that doesn't exist yet.
  private async runHfDailyAccrualSweep(scheduledFor: Date): Promise<Record<string, unknown>> {
    const configs = await this.halalFundLaunchConfig.listActiveConfigs();
    if (configs.length === 0) {
      return { fundsProcessed: 0, note: 'No ACTIVE halal_fund_launch_config rows — the Halal Fund has not been launched in production yet.' };
    }

    const results: { ledgerEntityCode: string; ok: boolean; skippedAlreadyPublished?: boolean; navPerUnit?: number; error?: string }[] = [];
    for (const config of configs) {
      const navInput = {
        ledgerEntityCode: config.ledgerEntityCode,
        valuationDate: scheduledFor,
        launchDate: config.launchDate,
        launchPrice: Number(config.launchPrice),
        offerSpreadPct: Number(config.offerSpreadPct),
        bidSpreadPct: Number(config.bidSpreadPct),
      };
      try {
        const nav = await this.halalFundEngine.computeDailyNav(navInput);
        await this.halalFundEngine.accrueFees({
          ledgerEntityCode: config.ledgerEntityCode,
          accrualDate: scheduledFor,
          navBaseKobo: nav.totalNavKobo,
          feeRates: config.feeRates as unknown as { feeType: string; annualRatePct: number }[],
        });
        try {
          await this.halalFundEngine.publishAndLockNav(navInput);
        } catch (err) {
          // publishAndLockNav is one-shot per date by design (nav_record is
          // locked-immutable) — a manual re-run of a slot that already
          // published (fees accrue idempotently via upsert above, so that
          // part is safe to repeat) is a benign no-op on the NAV side, not a
          // job failure.
          if (!(err instanceof HalalFundEngineError)) throw err;
        }
        results.push({ ledgerEntityCode: config.ledgerEntityCode, ok: true, navPerUnit: nav.navPerUnit });
      } catch (err) {
        results.push({ ledgerEntityCode: config.ledgerEntityCode, ok: false, error: (err as Error).message });
      }
    }

    const failed = results.filter((r) => !r.ok);
    const summary = { fundsProcessed: results.length, succeeded: results.length - failed.length, failed: failed.length, results };
    if (failed.length > 0) {
      throw new PartialJobFailure(`${failed.length}/${results.length} Halal Fund accrual run(s) failed`, summary);
    }
    return summary;
  }

  private async buildJobs(): Promise<ScheduledJobConfig[]> {
    return [
      {
        code: 'KRI_DAILY_BATCH',
        description: 'KRI engine daily batch — CLAUDE.md: "KRIs 18:00 WAT". KriEngineService.runDailyBatch().',
        cadence: { type: 'DAILY', hour: 18, minute: 0 },
        run: async (scheduledFor) => this.kriEngine.runDailyBatch(scheduledFor),
      },
      {
        code: 'AUDIT_INTEGRITY_NIGHTLY',
        description: 'Nightly audit-chain hash verification — CLAUDE.md invariant 3: "nightly integrity check". AuditService.verifyChainIntegrity().',
        cadence: { type: 'DAILY', hour: 23, minute: 30 },
        run: async () => {
          const result = await this.audit.verifyChainIntegrity();
          if (!result.ok) {
            throw new PartialJobFailure(`Audit chain integrity check found ${result.failures.length} failure(s)`, result as any);
          }
          return result as any;
        },
      },
      {
        code: 'STRESS_MODELS_MONTHLY',
        description: 'Six stress models, monthly sweep — Data Dictionary §4: "stress models monthly + on-demand + on-breach". SANDBOX runs only, never auto-published as BASELINE (amendment 27).',
        cadence: { type: 'MONTHLY', dayOfMonth: 1, hour: 3, minute: 0 },
        run: async () => this.runStressSweep(['LIQUIDITY', 'CAPITAL_ADEQUACY', 'REVENUE_SENSITIVITY', 'COUNTERPARTY_DEFAULT', 'PORTFOLIO_SHOCK']),
      },
      {
        code: 'REVERSE_STRESS_QUARTERLY',
        description: 'Reverse stress testing, quarterly — Data Dictionary §4: "reverse stress quarterly". SANDBOX runs only.',
        cadence: { type: 'QUARTERLY', hour: 4, minute: 0 },
        run: async () => this.runReverseStressSweep(),
      },
      {
        code: 'HF_DAILY_ACCRUAL',
        description: 'Halal Fund daily NAV + 5-fee accrual — CLAUDE.md: "daily accrual 23:00 WAT". Sweeps every ACTIVE halal_fund_launch_config row (Check-6A item 1).',
        cadence: { type: 'DAILY', hour: 23, minute: 0 },
        run: async (scheduledFor) => this.runHfDailyAccrualSweep(scheduledFor),
      },
      {
        code: 'ASSET_DEPRECIATION_MONTHLY',
        description: 'Straight-line monthly depreciation over every ACTIVE asset_register_entry — Budget Spec §4 (Check-6B). Rides in as its own engine lands, per the CEO\'s "remaining scheduled jobs ride in as their engines land" instruction.',
        cadence: { type: 'MONTHLY', dayOfMonth: 1, hour: 2, minute: 0 },
        run: async (scheduledFor) => this.procurement.runMonthlyDepreciationSweep(scheduledFor),
      },
      {
        code: 'ZAKAT_NISAB_BREACH_MONITOR',
        description: 'Invariant 26(c): "nisab-breach monitor prompts STAFF" — sweeps every ACTIVE zakat_client_subscription, notifying the advisor when total wealth crosses the governed nisab threshold (skips clients with an assessment already open).',
        cadence: { type: 'DAILY', hour: 6, minute: 0 },
        run: async () => this.zakat.runNisabBreachMonitor(),
      },
      {
        code: 'ZAKAT_ANNUAL_REMINDER',
        description: 'Invariant 26(c): "annual reminder notifications at the client\'s zakat anniversary" — dual-calendar aware, fires once the client\'s first CERTIFIED assessment has established the anniversary date.',
        cadence: { type: 'DAILY', hour: 6, minute: 30 },
        run: async (scheduledFor) => this.zakat.runAnnualReminderSweep(scheduledFor),
      },
      {
        code: 'TASK_ESCALATION_SWEEP',
        description: 'Invariant 25(1): task escalation — 70%-elapsed AMBER notice (once per task) then breach->DEFAULTED (immutable), per the governed task_escalation_config threshold. TaskService.runEscalationSweep().',
        cadence: { type: 'DAILY', hour: 7, minute: 0 },
        run: async (scheduledFor) => this.task.runEscalationSweep(scheduledFor),
      },
      {
        code: 'COUNTERPARTY_PAYMENT_REMINDER_SWEEP',
        description: 'Invariant 25(4)/36: the counterparty payment-reminder ladder (T-7..T+6, all rows payment_reminder_ladder_config) — client-facing message channels GENERATE into the officer-validation dispatch queue (invariant 36a) rather than sending immediately; call-tasks/internal notices/post-grace default fire immediately. PaymentReminderService.runReminderSweep().',
        cadence: { type: 'DAILY', hour: 7, minute: 15 },
        run: async (scheduledFor) => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.paymentReminders.runReminderSweep(scheduledFor, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'CREDIT_BUREAU_MONTHLY_SYNC',
        description: 'Invariant 36(c): "monthly data-sync... tasks generate as officer tasks" (process doc §3-4) — one task per COMPLETE_APPROVED counterparty per calendar month, assigned to its file-managing officer. PaymentReminderService.runCreditBureauMonthlySync().',
        cadence: { type: 'MONTHLY', dayOfMonth: 1, hour: 6, minute: 45 },
        run: async (scheduledFor) => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.paymentReminders.runCreditBureauMonthlySync(scheduledFor, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'TASK_DEFAULT_PMS_FEED',
        description: 'Invariant 25(1): feeds each employee\'s current DEFAULTED task count through task_default_gate_policy into their behavioural_gate_check for every appraisal cycle they\'re part of that hasn\'t reached INCENTIVE_COMPUTED yet. Runs after TASK_ESCALATION_SWEEP so it sees the same tick\'s freshest defaults. PmsService.runTaskDefaultGateFeed().',
        cadence: { type: 'DAILY', hour: 7, minute: 30 },
        run: async () => {
          const systemUserId = await this.systemSchedulerUserId();
          const employeeIds = await this.task.listEmployeeIdsWithDefaultedTasks();
          const employeeDefaultCounts = await Promise.all(
            employeeIds.map(async (employeeId) => ({ employeeId, count: await this.task.countDefaultedTasks(employeeId) })),
          );
          return this.pms.runTaskDefaultGateFeed(employeeDefaultCounts, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'BOARD_CALENDAR_REMINDER_SWEEP',
        description: 'Invariant 37(c)(iii): Board Calendar reminder notifications — fires once per event (remindedAt dedup guard) to CS/MD_CEO/SAU/AUDITOR once an event falls within the governed board_calendar_reminder_config.daysBefore window. BoardCalendarService.runReminderSweep().',
        cadence: { type: 'DAILY', hour: 6, minute: 15 },
        run: async (scheduledFor) => this.boardCalendar.runReminderSweep(scheduledFor) as unknown as Record<string, unknown>,
      },
      {
        code: 'PAYMENT_GATEWAY_RECONCILIATION',
        description: 'Invariant 55(a): daily reconciliation of the payment gateway inflow log -- surfaces suspense items unresolved past 24h and promoted inflows still awaiting checker approval past 48h. PaymentGatewayService.runDailyReconciliation().',
        cadence: { type: 'DAILY', hour: 5, minute: 30 },
        run: async () => this.paymentGateway.runDailyReconciliation(),
      },
      {
        code: 'CALENDAR_SYNC_SWEEP',
        description: 'Invariant 55(c2)(i): restates auto-plotted calendar entries (task deadlines, Board Calendar items, PMS cycle windows, filing deadlines) from their owning module -- upsert, never a delete, so a completed task keeps its historical deadline marker. CalendarService.runSyncSweep().',
        cadence: { type: 'INTERVAL_MINUTES', minutes: 15 },
        run: async (scheduledFor) => this.calendar.runSyncSweep(scheduledFor),
      },
      {
        code: 'CALENDAR_REMINDER_SWEEP',
        description: "Invariant 55(c2)(iii): per-entry reminder lead times (config default or per-entry override) -- fires once per entry (remindedAt dedup guard) once startsAt falls within the entry's own lead window. CalendarService.runReminderSweep().",
        cadence: { type: 'INTERVAL_MINUTES', minutes: 15 },
        run: async (scheduledFor) => this.calendar.runReminderSweep(scheduledFor),
      },
      {
        code: 'CALENDAR_EXTERNAL_SYNC_SWEEP',
        description: 'Invariant 73(b) (CHECK27): pulls busy/free blocks ONLY (never titles/bodies) from every ACTIVE, non-revoked ExternalCalendarConnection (Microsoft Graph/Google OAuth2) and upserts them onto the owner\'s own CalendarEntry via the same [ownerUserId, sourceType, sourceId] key -- proactively refreshes a near-expiry access token first. CalendarGatewayService.runExternalSyncSweep().',
        cadence: { type: 'INTERVAL_MINUTES', minutes: 15 },
        run: async (scheduledFor) => this.calendarGateway.runExternalSyncSweep(scheduledFor) as unknown as Record<string, unknown>,
      },
      {
        code: 'ATTENDANCE_TTLOCK_SYNC',
        description: 'Invariant 40(a)/63(b)/73(b) (CHECK27): real TTLock Open Platform OAuth2 sync sweep across every ACTIVE TTLOCK provider slot -- password-grant token acquisition/refresh, pulls real unlock/access records, resolves each through the lock-user mapping table (unmapped events queue visibly, terminated-employee unlocks raise a SECURITY ALERT). A slot with no approved clientId/clientSecret/credentialConfig yet stays an honest placeholder (0 events, disclosed reason), never fabricated. AttendanceService.runTTLockSync().',
        cadence: { type: 'INTERVAL_MINUTES', minutes: 15 },
        run: async () => {
          const providers = await this.prisma.attendanceProvider.findMany({ where: { adapterType: 'TTLOCK', isActive: true } });
          const results = await Promise.all(providers.map((p) => this.attendance.runTTLockSync(p.id)));
          return { providersSynced: providers.length, results } as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'ATTENDANCE_LATENESS_PMS_FEED',
        description: 'Invariant 40(c): feeds each employee\'s attendance-lateness count (AttendanceService.computeLateCounts, first-qualifying-event-per-day against the governed AttendanceClockInPolicy, approved-leave-suppressed) through attendance_lateness_gate_policy into behavioural_gate_check for every open appraisal cycle -- tighten-only, mirrors TASK_DEFAULT_PMS_FEED\'s own shape. PmsService.runAttendanceLatenessGateFeed().',
        cadence: { type: 'DAILY', hour: 7, minute: 45 },
        run: async () => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.pms.runAttendanceLatenessGateFeed(systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'INVESTOR_DORMANCY_SWEEP',
        description: 'Invariant 51(b-v): dormancy detection over the governed investor_dormancy_config.monthsInactiveThreshold -- ACTIVE investors with no transaction inside the window flip to DORMANT (and reverse, on renewed activity). InvestorExitService.runDormancySweep().',
        cadence: { type: 'DAILY', hour: 4, minute: 15 },
        run: async (scheduledFor) => this.investorExit.runDormancySweep(scheduledFor) as unknown as Record<string, unknown>,
      },
      {
        code: 'KYC_PERIODIC_REVIEW_SWEEP',
        description: 'Invariant 51(b-vii): detects onboarding cases whose periodicReviewFrequency window has elapsed and routes a Compliance Task per case (the "periodicReviewFrequency that nothing consumes" gap named at CHECK13 open). InvestorComplianceSweepService.runKycPeriodicReviewSweep().',
        cadence: { type: 'DAILY', hour: 6, minute: 45 },
        run: async (scheduledFor) => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.complianceSweep.runKycPeriodicReviewSweep(scheduledFor, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      // Invariant 72(d): supersedes the CHECK13 51(b-viii) placeholder above
      // (never scrubbed -- InvestorComplianceSweepService.
      // runSanctionsRescreeningSweep() and the Compliance Queue's
      // sanctionsDue list still exist and remain independently callable) --
      // "detection only, no screening provider exists" is no longer true
      // now that ScreeningGatewayService.runRescreeningSweep() performs a
      // REAL local-list fuzzy screen over the entire live book (investors
      // AND counterparties, closing the counterparty gap 51(b-viii) never
      // covered) and alerts Compliance only on a genuinely NEW candidate
      // match, rather than reminding an officer to go check manually every
      // cycle regardless of whether anything changed.
      {
        code: 'SCREENING_LIST_DOWNLOAD_SWEEP',
        description: 'Invariant 72(a): one download attempt per ACTIVE, non-parked ScreeningListSource -- failures alert but never abort the sweep. ScreeningGatewayService.runListDownloadSweep().',
        cadence: { type: 'DAILY', hour: 5, minute: 30 },
        run: async (scheduledFor) => this.screeningGateway.runListDownloadSweep(scheduledFor) as unknown as Record<string, unknown>,
      },
      {
        code: 'SCREENING_RESCREENING_SWEEP',
        description: 'Invariant 72(d): re-screens the entire live book (investors + counterparties) against the current local lists and raises a Compliance alert only on a genuinely new candidate match -- activates the CHECK13 51(b-viii) Tier-2 item that was parked for lack of a real screening engine. ScreeningGatewayService.runRescreeningSweep().',
        cadence: { type: 'DAILY', hour: 7, minute: 0 },
        run: async (scheduledFor) => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.screeningGateway.runRescreeningSweep(scheduledFor, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'KYC_DOCUMENT_EXPIRY_SWEEP',
        description: 'Invariant 51(c): investor KYC document-expiry alerts (mirrors the counterparty Shariah-cert-expiry control in spirit) -- routes a Compliance Task for any InvestorKycDocument within 30 days of, or past, its expiryDate. InvestorComplianceSweepService.runDocumentExpirySweep().',
        cadence: { type: 'DAILY', hour: 7, minute: 15 },
        run: async (scheduledFor) => {
          const systemUserId = await this.systemSchedulerUserId();
          return this.complianceSweep.runDocumentExpirySweep(scheduledFor, systemUserId) as unknown as Record<string, unknown>;
        },
      },
      {
        code: 'TAX_REMITTANCE_DUE_DATE_SWEEP',
        description: 'Invariant 65(c)(iii): "remittance automation per tax type and authority" -- sweeps every ACTIVE tax_remittance_due_date_config row and auto-creates a PENDING TaxRemittanceBatch for the prior period once its total is non-zero (an honest no-op where no due-date config exists yet -- park-don\'t-invent). TaxService.runRemittanceDueDateSweep().',
        cadence: { type: 'DAILY', hour: 5, minute: 30 },
        run: async (scheduledFor) => this.tax.runRemittanceDueDateSweep(scheduledFor),
      },
    ];
  }
}
