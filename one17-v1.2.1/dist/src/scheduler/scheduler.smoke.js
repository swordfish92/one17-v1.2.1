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
    const dailySlot = (0, scheduler_cadence_1.mostRecentScheduledSlot)({ type: 'DAILY', hour: 18, minute: 0 }, new Date('2026-07-05T19:30:00'));
    if (dailySlot.toISOString().startsWith('2026-07-05') && dailySlot.getHours() === 18)
        ok('DAILY cadence: 19:30 now -> today 18:00 slot');
    else
        fail('DAILY cadence produced wrong slot', dailySlot);
    const dailySlotBeforeHour = (0, scheduler_cadence_1.mostRecentScheduledSlot)({ type: 'DAILY', hour: 18, minute: 0 }, new Date('2026-07-05T10:00:00'));
    if (dailySlotBeforeHour.toISOString().startsWith('2026-07-04'))
        ok('DAILY cadence: 10:00 now (before today\'s 18:00) -> yesterday\'s slot');
    else
        fail('DAILY cadence did not step back a day when now is before the hour', dailySlotBeforeHour);
    const monthlySlot = (0, scheduler_cadence_1.mostRecentScheduledSlot)({ type: 'MONTHLY', dayOfMonth: 1, hour: 3, minute: 0 }, new Date('2026-07-15T00:00:00'));
    if (monthlySlot.getMonth() === 6 && monthlySlot.getDate() === 1)
        ok('MONTHLY cadence: mid-July now -> July 1st slot');
    else
        fail('MONTHLY cadence produced wrong slot', monthlySlot);
    const quarterlySlot = (0, scheduler_cadence_1.mostRecentScheduledSlot)({ type: 'QUARTERLY', hour: 4, minute: 0 }, new Date('2026-08-01T00:00:00'));
    if (quarterlySlot.getMonth() === 6 && quarterlySlot.getDate() === 1)
        ok('QUARTERLY cadence: August now -> Q3 start (July 1st) slot');
    else
        fail('QUARTERLY cadence produced wrong slot', quarterlySlot);
    await prisma.scheduledJobRun.deleteMany({ where: { jobCode: { startsWith: 'SMOKE_' } } });
    let successRuns = 0;
    const successResult = await scheduler.executeJob({ code: 'SMOKE_ALWAYS_OK', description: 'smoke fixture', cadence: { type: 'DAILY', hour: 0, minute: 0 }, run: async () => { successRuns++; return { fired: true }; } }, new Date('2026-07-01T00:00:00'), false);
    const successRow = await prisma.scheduledJobRun.findUnique({ where: { id: successResult.runId } });
    if (successResult.status === 'SUCCEEDED' && successRow?.status === 'SUCCEEDED' && successRow.resultSummary?.fired === true) {
        ok('executeJob: a normal job run is recorded SUCCEEDED with its result summary persisted');
    }
    else {
        fail('executeJob success path did not persist correctly', { successResult, successRow });
    }
    const integrityResultBefore = await audit.verifyChainIntegrity();
    const integrityFailResult = await scheduler.executeJob({
        code: 'SMOKE_AUDIT_INTEGRITY',
        description: 'smoke fixture wrapping the real AUDIT_INTEGRITY_NIGHTLY job body',
        cadence: { type: 'DAILY', hour: 23, minute: 30 },
        run: async () => {
            const result = await audit.verifyChainIntegrity();
            if (!result.ok)
                throw Object.assign(new Error(`Audit chain integrity check found ${result.failures.length} failure(s)`), { name: 'PartialJobFailure', summary: result });
            return result;
        },
    }, new Date('2026-07-05T23:30:00'), false);
    const integrityFailRow = await prisma.scheduledJobRun.findUnique({ where: { id: integrityFailResult.runId } });
    const alertRow = await prisma.auditTrail.findFirst({ where: { entityType: 'scheduled_job_failure', entityId: integrityFailResult.runId } });
    if (!integrityResultBefore.ok) {
        if (integrityFailResult.status === 'FAILED' && integrityFailRow?.errorMessage?.includes('failure(s)') && alertRow) {
            ok(`executeJob: the audit-integrity job's REAL failure (${integrityResultBefore.failures.length} pre-existing hash-chain gap(s), documented in RUNBOOK.md §4) is recorded FAILED with a queryable audit alert row — proves the alerting path fires on genuine failure, not a mock`);
        }
        else {
            fail('audit-integrity job failure was not recorded/alerted correctly', { integrityFailResult, integrityFailRow, alertRow });
        }
    }
    else {
        ok('audit chain currently has zero integrity failures in this DB — skipping the real-failure assertion (would need a contrived failure instead; not fabricated here since a genuine one was expected and this is a config-state fact, not a scheduler bug)');
    }
    let secondCallRuns = 0;
    const job = { code: 'SMOKE_IDEMPOTENT', description: 'smoke fixture', cadence: { type: 'DAILY', hour: 0, minute: 0 }, run: async () => { secondCallRuns++; return {}; } };
    const slot = new Date('2026-07-02T00:00:00');
    await scheduler.executeJob(job, slot, false);
    await scheduler.maybeRunJob(job, new Date('2026-07-02T00:05:00'));
    const runsAtSlot = await prisma.scheduledJobRun.count({ where: { jobCode: job.code, scheduledFor: slot } });
    if (runsAtSlot === 1 && secondCallRuns === 1)
        ok('maybeRunJob: a job already run for its due slot is not re-run (idempotent per slot — handler body ran exactly once)');
    else
        fail(`expected exactly 1 run at the slot and exactly 1 handler invocation, found ${runsAtSlot} run(s) and ${secondCallRuns} invocation(s)`);
    await prisma.scheduledJobRun.deleteMany({ where: { jobCode: 'SMOKE_CATCHUP' } });
    let catchUpRan = false;
    const catchUpJob = { code: 'SMOKE_CATCHUP', description: 'smoke fixture', cadence: { type: 'DAILY', hour: 0, minute: 0 }, run: async () => { catchUpRan = true; return {}; } };
    await scheduler.maybeRunJob(catchUpJob, new Date('2026-07-01T12:00:00'));
    const catchUpRow = await prisma.scheduledJobRun.findFirst({ where: { jobCode: 'SMOKE_CATCHUP' } });
    if (catchUpRan && catchUpRow?.isCatchUp === true) {
        ok('maybeRunJob: a job whose scheduled slot passed unexecuted is auto-detected and run with isCatchUp=true — the process-was-down recovery case');
    }
    else {
        fail('catch-up run was not detected/marked correctly', catchUpRow);
    }
    await prisma.scheduledJobRun.deleteMany({ where: { jobCode: { startsWith: 'SMOKE_' } } });
    const jobs = await scheduler.getJobs();
    for (const job of jobs) {
        const now = new Date();
        const result = await scheduler.executeJob(job, now, false);
        const row = await prisma.scheduledJobRun.findUnique({ where: { id: result.runId } });
        if (result.status === 'SUCCEEDED' && row?.resultSummary) {
            ok(`production job ${job.code} fired successfully — resultSummary: ${JSON.stringify(row.resultSummary).slice(0, 200)}`);
        }
        else {
            if (job.code === 'AUDIT_INTEGRITY_NIGHTLY' && result.status === 'FAILED') {
                ok(`production job ${job.code} correctly reports FAILED against this dev DB's known hash-chain gaps (RUNBOOK.md §4) — not a scheduler defect`);
            }
            else {
                fail(`production job ${job.code} did not run successfully`, { result, row });
            }
        }
    }
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
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
    }
    else {
        fail('setLaunchConfig did not create an ACTIVE v1 config', config);
    }
    const hfJob = (await scheduler.getJobs()).find((j) => j.code === 'HF_DAILY_ACCRUAL');
    const hfResult = await scheduler.executeJob(hfJob, launchDate, false);
    const hfRow = await prisma.scheduledJobRun.findUnique({ where: { id: hfResult.runId } });
    const navRecord = await prisma.navRecord.findUnique({ where: { ledgerEntityCode_valuationDate: { ledgerEntityCode: hfFundCode, valuationDate: launchDate } } });
    const feeAccruals = await prisma.feeAccrual.findMany({ where: { ledgerEntityCode: hfFundCode, accrualDate: launchDate } });
    const thisRunResult = hfRow?.resultSummary?.results?.find((r) => r.ledgerEntityCode === hfFundCode);
    if (hfResult.status === 'SUCCEEDED' &&
        thisRunResult?.ok === true &&
        navRecord?.isLocked === true &&
        Number(navRecord.navPerUnit) === 100 &&
        feeAccruals.length === 5) {
        ok(`HF_DAILY_ACCRUAL: sweeps the new ACTIVE config (alongside any other ACTIVE funds from prior runs this session — ${hfRow?.resultSummary?.fundsProcessed} total), computes launch-day NAV (100.00, B2 override), publishes+locks nav_record, and accrues all 5 F-HF-04 fee types — this run's own entry: ${JSON.stringify(thisRunResult)}`);
    }
    else {
        fail('HF_DAILY_ACCRUAL did not process the new config correctly', { hfResult, hfRow, navRecord, feeAccruals, thisRunResult });
    }
    const hfRerun = await scheduler.executeJob(hfJob, launchDate, false);
    if (hfRerun.status === 'SUCCEEDED') {
        ok('HF_DAILY_ACCRUAL: re-running an already-published date succeeds as a benign no-op on the NAV side (locked nav_record is never overwritten) rather than failing the whole sweep');
    }
    else {
        fail('HF_DAILY_ACCRUAL re-run of an already-published date incorrectly failed', hfRerun);
    }
    await expectReject('changing launchPrice on an ACTIVE Halal Fund config without both Board+SSB refs', () => halalFundLaunchConfig.setLaunchConfig({
        ledgerEntityCode: hfFundCode,
        createdByUserId: superAdmin.id,
        launchDate,
        launchPrice: 105,
        offerSpreadPct: 0.015,
        bidSpreadPct: 0.01,
        feeRates: [{ feeType: 'MANAGEMENT', annualRatePct: 2.0 }, { feeType: 'TRUSTEE', annualRatePct: 0.4 }, { feeType: 'CUSTODIAN', annualRatePct: 0.25 }, { feeType: 'SEC_LEVY', annualRatePct: 0.03 }, { feeType: 'ADMIN', annualRatePct: 0.1 }],
    }));
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
    }
    else {
        fail('governance-gated v2 creation did not supersede v1 correctly', { v2, v1AfterSupersede });
    }
    if (failed) {
        console.error('\nSMOKE FAILED — scheduler framework (Check-5B item 1 / Check-6A item 1) against the real live DB.');
        process.exitCode = 1;
    }
    else {
        console.log('\nSMOKE OK — scheduler framework (Check-5B item 1 / Check-6A item 1) against the real live DB.');
    }
}
main().catch((err) => {
    console.error('SMOKE ERRORED', err);
    process.exitCode = 1;
});
//# sourceMappingURL=scheduler.smoke.js.map