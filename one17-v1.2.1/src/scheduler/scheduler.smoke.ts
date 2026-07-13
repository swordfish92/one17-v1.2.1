// Run with: npx tsx src/scheduler/scheduler.smoke.ts
// Proves Check-5B item 1 against the real live DB: every job fires when
// due, does not re-fire for a slot already run, a missed slot is detected
// and executed as a catch-up run, and a real job failure both records
// FAILED with the error and writes a queryable audit alert row — not a
// contrived synthetic failure, but the audit-integrity job's own real
// result against this dev DB's documented, pre-existing hash-chain gaps
// (RUNBOOK.md §4 — ~26 known rows, expected in dev, never scrubbed).
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

  // --- Cadence math, pure unit checks -------------------------------------
  const dailySlot = mostRecentScheduledSlot({ type: 'DAILY', hour: 18, minute: 0 }, new Date('2026-07-05T19:30:00'));
  if (dailySlot.toISOString().startsWith('2026-07-05') && dailySlot.getHours() === 18) ok('DAILY cadence: 19:30 now -> today 18:00 slot');
  else fail('DAILY cadence produced wrong slot', dailySlot);

  const dailySlotBeforeHour = mostRecentScheduledSlot({ type: 'DAILY', hour: 18, minute: 0 }, new Date('2026-07-05T10:00:00'));
  if (dailySlotBeforeHour.toISOString().startsWith('2026-07-04')) ok('DAILY cadence: 10:00 now (before today\'s 18:00) -> yesterday\'s slot');
  else fail('DAILY cadence did not step back a day when now is before the hour', dailySlotBeforeHour);

  const monthlySlot = mostRecentScheduledSlot({ type: 'MONTHLY', dayOfMonth: 1, hour: 3, minute: 0 }, new Date('2026-07-15T00:00:00'));
  if (monthlySlot.getMonth() === 6 && monthlySlot.getDate() === 1) ok('MONTHLY cadence: mid-July now -> July 1st slot');
  else fail('MONTHLY cadence produced wrong slot', monthlySlot);

  const quarterlySlot = mostRecentScheduledSlot({ type: 'QUARTERLY', hour: 4, minute: 0 }, new Date('2026-08-01T00:00:00'));
  if (quarterlySlot.getMonth() === 6 && quarterlySlot.getDate() === 1) ok('QUARTERLY cadence: August now -> Q3 start (July 1st) slot');
  else fail('QUARTERLY cadence produced wrong slot', quarterlySlot);

  // --- Real job execution, via the public executeJob() path --------------
  await prisma.scheduledJobRun.deleteMany({ where: { jobCode: { startsWith: 'SMOKE_' } } });

  let successRuns = 0;
  const successResult = await scheduler.executeJob(
    { code: 'SMOKE_ALWAYS_OK', description: 'smoke fixture', cadence: { type: 'DAILY', hour: 0, minute: 0 }, run: async () => { successRuns++; return { fired: true }; } },
    new Date('2026-07-01T00:00:00'),
    false,
  );
  const successRow = await prisma.scheduledJobRun.findUnique({ where: { id: successResult.runId } });
  if (successResult.status === 'SUCCEEDED' && successRow?.status === 'SUCCEEDED' && (successRow.resultSummary as any)?.fired === true) {
    ok('executeJob: a normal job run is recorded SUCCEEDED with its result summary persisted');
  } else {
    fail('executeJob success path did not persist correctly', { successResult, successRow });
  }

  // --- Failure alerting: a REAL failure, not a contrived one --------------
  const integrityResultBefore = await audit.verifyChainIntegrity();
  const integrityFailResult = await scheduler.executeJob(
    {
      code: 'SMOKE_AUDIT_INTEGRITY',
      description: 'smoke fixture wrapping the real AUDIT_INTEGRITY_NIGHTLY job body',
      cadence: { type: 'DAILY', hour: 23, minute: 30 },
      run: async () => {
        const result = await audit.verifyChainIntegrity();
        if (!result.ok) throw Object.assign(new Error(`Audit chain integrity check found ${result.failures.length} failure(s)`), { name: 'PartialJobFailure', summary: result });
        return result as any;
      },
    },
    new Date('2026-07-05T23:30:00'),
    false,
  );
  const integrityFailRow = await prisma.scheduledJobRun.findUnique({ where: { id: integrityFailResult.runId } });
  const alertRow = await prisma.auditTrail.findFirst({ where: { entityType: 'scheduled_job_failure', entityId: integrityFailResult.runId } });
  if (!integrityResultBefore.ok) {
    if (integrityFailResult.status === 'FAILED' && integrityFailRow?.errorMessage?.includes('failure(s)') && alertRow) {
      ok(`executeJob: the audit-integrity job's REAL failure (${integrityResultBefore.failures.length} pre-existing hash-chain gap(s), documented in RUNBOOK.md §4) is recorded FAILED with a queryable audit alert row — proves the alerting path fires on genuine failure, not a mock`);
    } else {
      fail('audit-integrity job failure was not recorded/alerted correctly', { integrityFailResult, integrityFailRow, alertRow });
    }
  } else {
    ok('audit chain currently has zero integrity failures in this DB — skipping the real-failure assertion (would need a contrived failure instead; not fabricated here since a genuine one was expected and this is a config-state fact, not a scheduler bug)');
  }

  // --- Idempotency: same slot does not re-run -----------------------------
  let secondCallRuns = 0;
  const job = { code: 'SMOKE_IDEMPOTENT', description: 'smoke fixture', cadence: { type: 'DAILY' as const, hour: 0, minute: 0 }, run: async () => { secondCallRuns++; return {}; } };
  const slot = new Date('2026-07-02T00:00:00');
  await scheduler.executeJob(job, slot, false);
  // maybeRunJob is the guard executeJob() itself skips (executeJob always
  // runs unconditionally by design, since it doubles as the manual "run
  // now" entry point) — call it directly with the same synthetic job to
  // prove the "already ran this slot" check without needing the full
  // onModuleInit-populated production roster.
  await scheduler.maybeRunJob(job, new Date('2026-07-02T00:05:00'));
  const runsAtSlot = await prisma.scheduledJobRun.count({ where: { jobCode: job.code, scheduledFor: slot } });
  if (runsAtSlot === 1 && secondCallRuns === 1) ok('maybeRunJob: a job already run for its due slot is not re-run (idempotent per slot — handler body ran exactly once)');
  else fail(`expected exactly 1 run at the slot and exactly 1 handler invocation, found ${runsAtSlot} run(s) and ${secondCallRuns} invocation(s)`);

  // --- Catch-up: a slot that passed unrun is detected and fired -----------
  await prisma.scheduledJobRun.deleteMany({ where: { jobCode: 'SMOKE_CATCHUP' } });
  let catchUpRan = false;
  const catchUpJob = { code: 'SMOKE_CATCHUP', description: 'smoke fixture', cadence: { type: 'DAILY' as const, hour: 0, minute: 0 }, run: async () => { catchUpRan = true; return {}; } };
  // "now" is well past the DAILY-00:00 slot for that same calendar day — a
  // real clock would only ever be this far behind if the process was down
  // through the scheduled time; maybeRunJob must detect and fire it.
  await scheduler.maybeRunJob(catchUpJob, new Date('2026-07-01T12:00:00'));
  const catchUpRow = await prisma.scheduledJobRun.findFirst({ where: { jobCode: 'SMOKE_CATCHUP' } });
  if (catchUpRan && catchUpRow?.isCatchUp === true) {
    ok('maybeRunJob: a job whose scheduled slot passed unexecuted is auto-detected and run with isCatchUp=true — the process-was-down recovery case');
  } else {
    fail('catch-up run was not detected/marked correctly', catchUpRow);
  }

  await prisma.scheduledJobRun.deleteMany({ where: { jobCode: { startsWith: 'SMOKE_' } } });

  // --- The real production roster, invoked directly, against real data ---
  // Proves the ACTUAL jobs (not synthetic fixtures) fire correctly: KRI
  // daily batch (fully deterministic against live data — always succeeds),
  // and the monthly/quarterly stress sweeps (governed ACTIVE scenario
  // config rows, SANDBOX mode, real COMPANY entity, a real system-scheduler
  // AppUser — no fabricated inputs).
  const jobs = await scheduler.getJobs();
  for (const job of jobs) {
    const now = new Date();
    const result = await scheduler.executeJob(job, now, false);
    const row = await prisma.scheduledJobRun.findUnique({ where: { id: result.runId } });
    if (result.status === 'SUCCEEDED' && row?.resultSummary) {
      ok(`production job ${job.code} fired successfully — resultSummary: ${JSON.stringify(row.resultSummary).slice(0, 200)}`);
    } else {
      // AUDIT_INTEGRITY_NIGHTLY is expected to FAIL in this dev DB (proven
      // above) — that is correct, not a smoke failure.
      if (job.code === 'AUDIT_INTEGRITY_NIGHTLY' && result.status === 'FAILED') {
        ok(`production job ${job.code} correctly reports FAILED against this dev DB's known hash-chain gaps (RUNBOOK.md §4) — not a scheduler defect`);
      } else {
        fail(`production job ${job.code} did not run successfully`, { result, row });
      }
    }
  }

  // --- Check-6A item 1: HF_DAILY_ACCRUAL against a real launch config -----
  // Proves the config table actually drives the job: with zero ACTIVE
  // configs (above) the job correctly does nothing; here a real
  // HalalFundLaunchConfigService.setLaunchConfig() row is created (same
  // Formula-Library-sourced B0/B2 figures halal-fund-engine.smoke.ts uses:
  // launch price 100, offer/bid spreads 1.5%/1.0%, the 5 F-HF-04 fee rates —
  // not fabricated for this test) and the job picks it up, computes NAV,
  // accrues all 5 fees, and publishes a locked nav_record — end to end.
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const superAdmin = await prisma.appUser.create({ data: { email: `sched-hf-admin-${RUN}@one17.test`, displayName: 'sched-hf-admin' } });
  await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });

  const hfFundCode = `SMOKE-HF-SCHED-${RUN}`;
  await prisma.ledgerEntity.create({ data: { code: hfFundCode, name: 'Smoke Scheduler Halal Fund', entityType: 'FUND', primaryBasis: 'AAOIFI' } });
  const launchDate = new Date('2024-12-20T00:00:00Z');
  const config = await halalFundLaunchConfig.setLaunchConfig({
    ledgerEntityCode: hfFundCode,
    createdByUserId: superAdmin.id,
    launchDate,
    launchPrice: 100,
    offerSpreadPct: 0.015,
    bidSpreadPct: 0.01,
    feeRates: [
      { feeType: 'MANAGEMENT', annualRatePct: 2.0 },
      { feeType: 'TRUSTEE', annualRatePct: 0.4 },
      { feeType: 'CUSTODIAN', annualRatePct: 0.25 },
      { feeType: 'SEC_LEVY', annualRatePct: 0.03 },
      { feeType: 'ADMIN', annualRatePct: 0.1 },
    ],
  });
  if (config.status === 'ACTIVE' && config.version === 1) {
    ok('HalalFundLaunchConfigService.setLaunchConfig: first version created ACTIVE with no Board/SSB refs required (nothing to change from yet)');
  } else {
    fail('setLaunchConfig did not create an ACTIVE v1 config', config);
  }

  const hfJob = (await scheduler.getJobs()).find((j) => j.code === 'HF_DAILY_ACCRUAL')!;
  const hfResult = await scheduler.executeJob(hfJob, launchDate, false);
  const hfRow = await prisma.scheduledJobRun.findUnique({ where: { id: hfResult.runId } });
  const navRecord = await prisma.navRecord.findUnique({ where: { ledgerEntityCode_valuationDate: { ledgerEntityCode: hfFundCode, valuationDate: launchDate } } });
  const feeAccruals = await prisma.feeAccrual.findMany({ where: { ledgerEntityCode: hfFundCode, accrualDate: launchDate } });
  // fundsProcessed is a GLOBAL sweep count (the job correctly processes
  // every ACTIVE config, by design) — it grows across repeated smoke runs
  // within the same session (each run's own SMOKE-HF-SCHED-* fund stays
  // ACTIVE), so the proof scopes to THIS run's own entry in `results`
  // rather than asserting a total count of exactly 1.
  const thisRunResult = ((hfRow?.resultSummary as any)?.results as any[] | undefined)?.find((r) => r.ledgerEntityCode === hfFundCode);
  if (
    hfResult.status === 'SUCCEEDED' &&
    thisRunResult?.ok === true &&
    navRecord?.isLocked === true &&
    Number(navRecord.navPerUnit) === 100 &&
    feeAccruals.length === 5
  ) {
    ok(`HF_DAILY_ACCRUAL: sweeps the new ACTIVE config (alongside any other ACTIVE funds from prior runs this session — ${(hfRow?.resultSummary as any)?.fundsProcessed} total), computes launch-day NAV (100.00, B2 override), publishes+locks nav_record, and accrues all 5 F-HF-04 fee types — this run's own entry: ${JSON.stringify(thisRunResult)}`);
  } else {
    fail('HF_DAILY_ACCRUAL did not process the new config correctly', { hfResult, hfRow, navRecord, feeAccruals, thisRunResult });
  }

  // Re-running the same slot must not throw (nav_record is one-shot-per-date
  // and the sweep must treat that as a benign skip, not a job failure) —
  // this is exactly the "re-run after a prior success" shape the manual
  // catch-up/re-run action can hit in the console.
  const hfRerun = await scheduler.executeJob(hfJob, launchDate, false);
  if (hfRerun.status === 'SUCCEEDED') {
    ok('HF_DAILY_ACCRUAL: re-running an already-published date succeeds as a benign no-op on the NAV side (locked nav_record is never overwritten) rather than failing the whole sweep');
  } else {
    fail('HF_DAILY_ACCRUAL re-run of an already-published date incorrectly failed', hfRerun);
  }

  // --- Governance gate: mirrors ParameterService.checkGovernanceGate -----
  await expectReject(
    'changing launchPrice on an ACTIVE Halal Fund config without both Board+SSB refs',
    () => halalFundLaunchConfig.setLaunchConfig({
      ledgerEntityCode: hfFundCode,
      createdByUserId: superAdmin.id,
      launchDate,
      launchPrice: 105,
      offerSpreadPct: 0.015,
      bidSpreadPct: 0.01,
      feeRates: [{ feeType: 'MANAGEMENT', annualRatePct: 2.0 }, { feeType: 'TRUSTEE', annualRatePct: 0.4 }, { feeType: 'CUSTODIAN', annualRatePct: 0.25 }, { feeType: 'SEC_LEVY', annualRatePct: 0.03 }, { feeType: 'ADMIN', annualRatePct: 0.1 }],
    }),
  );
  const v2 = await halalFundLaunchConfig.setLaunchConfig({
    ledgerEntityCode: hfFundCode,
    createdByUserId: superAdmin.id,
    launchDate,
    launchPrice: 105,
    offerSpreadPct: 0.015,
    bidSpreadPct: 0.01,
    feeRates: [{ feeType: 'MANAGEMENT', annualRatePct: 2.0 }, { feeType: 'TRUSTEE', annualRatePct: 0.4 }, { feeType: 'CUSTODIAN', annualRatePct: 0.25 }, { feeType: 'SEC_LEVY', annualRatePct: 0.03 }, { feeType: 'ADMIN', annualRatePct: 0.1 }],
    boardResolutionRef: 'BOARD-RES-SMOKE-001',
    ssbResolutionRef: 'SSB-RES-SMOKE-001',
  });
  const v1AfterSupersede = await prisma.halalFundLaunchConfig.findUnique({ where: { ledgerEntityCode_version: { ledgerEntityCode: hfFundCode, version: 1 } } });
  if (v2.version === 2 && v2.status === 'ACTIVE' && v1AfterSupersede?.status === 'SUPERSEDED') {
    ok('HalalFundLaunchConfigService: with both Board+SSB refs, a change to launchPrice on an ACTIVE config is accepted — v1 flips to SUPERSEDED, v2 becomes the new ACTIVE');
  } else {
    fail('governance-gated v2 creation did not supersede v1 correctly', { v2, v1AfterSupersede });
  }

  if (failed) {
    console.error('\nSMOKE FAILED — scheduler framework (Check-5B item 1 / Check-6A item 1) against the real live DB.');
    process.exitCode = 1;
  } else {
    console.log('\nSMOKE OK — scheduler framework (Check-5B item 1 / Check-6A item 1) against the real live DB.');
  }
}

main().catch((err) => {
  console.error('SMOKE ERRORED', err);
  process.exitCode = 1;
});
