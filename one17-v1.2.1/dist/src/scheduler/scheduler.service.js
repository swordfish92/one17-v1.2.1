"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SchedulerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
const stress_engine_service_1 = require("../stress-engine/stress-engine.service");
const halal_fund_engine_service_1 = require("../engine-halal-fund/halal-fund-engine.service");
const halal_fund_launch_config_service_1 = require("../engine-halal-fund/halal-fund-launch-config.service");
const halal_fund_engine_types_1 = require("../engine-halal-fund/halal-fund-engine.types");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const procurement_service_1 = require("../procurement/procurement.service");
const zakat_service_1 = require("../zakat/zakat.service");
const task_service_1 = require("../task/task.service");
const payment_reminder_service_1 = require("../counterparty/payment-reminder.service");
const pms_service_1 = require("../pms/pms.service");
const board_calendar_service_1 = require("../board-calendar/board-calendar.service");
const payment_gateway_service_1 = require("../payment-gateway/payment-gateway.service");
const calendar_service_1 = require("../calendar/calendar.service");
const calendar_gateway_service_1 = require("../calendar/calendar-gateway.service");
const investor_exit_service_1 = require("../investor/investor-exit.service");
const investor_compliance_sweep_service_1 = require("../investor/investor-compliance-sweep.service");
const attendance_service_1 = require("../attendance/attendance.service");
const tax_service_1 = require("../tax/tax.service");
const notification_service_1 = require("../notification/notification.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const scheduler_cadence_1 = require("./scheduler-cadence");
const scheduler_types_1 = require("./scheduler.types");
const SYSTEM_SCHEDULER_EMAIL = 'system-scheduler@one17.test';
const CATCH_UP_THRESHOLD_MS = 5 * 60_000;
const TICK_INTERVAL_MS = 60_000;
const CONSEQUENTIAL_JOBS = new Set(['HF_DAILY_ACCRUAL', 'KRI_DAILY_BATCH', 'AUDIT_INTEGRITY_NIGHTLY']);
const JOB_OWNER_FUNCTION_CODE = {
    HF_DAILY_ACCRUAL: 'FINANCIAL_STATEMENTS',
    KRI_DAILY_BATCH: 'RISK_APPETITE_MATRIX',
    AUDIT_INTEGRITY_NIGHTLY: 'AUDIT_TRAIL_VIEW',
    STRESS_MODELS_MONTHLY: 'STRESS_TESTING',
    REVERSE_STRESS_QUARTERLY: 'STRESS_TESTING',
    ASSET_DEPRECIATION_MONTHLY: 'PROCUREMENT_OPERATIONS',
    ZAKAT_NISAB_BREACH_MONITOR: 'ZAKAT_ADVISORY',
    ZAKAT_ANNUAL_REMINDER: 'ZAKAT_ADVISORY',
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
let SchedulerService = SchedulerService_1 = class SchedulerService {
    prisma;
    audit;
    kriEngine;
    stressEngine;
    halalFundEngine;
    halalFundLaunchConfig;
    delegation;
    workflow;
    procurement;
    zakat;
    task;
    paymentReminders;
    pms;
    boardCalendar;
    paymentGateway;
    calendar;
    calendarGateway;
    investorExit;
    complianceSweep;
    attendance;
    tax;
    notification;
    screeningGateway;
    logger = new common_1.Logger(SchedulerService_1.name);
    jobs = [];
    tickHandle = null;
    ticking = false;
    constructor(prisma, audit, kriEngine, stressEngine, halalFundEngine, halalFundLaunchConfig, delegation, workflow, procurement, zakat, task, paymentReminders, pms, boardCalendar, paymentGateway, calendar, calendarGateway, investorExit, complianceSweep, attendance, tax, notification, screeningGateway) {
        this.prisma = prisma;
        this.audit = audit;
        this.kriEngine = kriEngine;
        this.stressEngine = stressEngine;
        this.halalFundEngine = halalFundEngine;
        this.halalFundLaunchConfig = halalFundLaunchConfig;
        this.delegation = delegation;
        this.workflow = workflow;
        this.procurement = procurement;
        this.zakat = zakat;
        this.task = task;
        this.paymentReminders = paymentReminders;
        this.pms = pms;
        this.boardCalendar = boardCalendar;
        this.paymentGateway = paymentGateway;
        this.calendar = calendar;
        this.calendarGateway = calendarGateway;
        this.investorExit = investorExit;
        this.complianceSweep = complianceSweep;
        this.attendance = attendance;
        this.tax = tax;
        this.notification = notification;
        this.screeningGateway = screeningGateway;
    }
    async onModuleInit() {
        this.jobs = await this.buildJobs();
        await this.tick(new Date());
        this.tickHandle = setInterval(() => void this.tick(new Date()), TICK_INTERVAL_MS);
    }
    onModuleDestroy() {
        if (this.tickHandle)
            clearInterval(this.tickHandle);
    }
    async getJobs() {
        if (this.jobs.length === 0)
            this.jobs = await this.buildJobs();
        return this.jobs;
    }
    async tick(now) {
        if (this.ticking)
            return;
        this.ticking = true;
        try {
            for (const job of this.jobs) {
                await this.maybeRunJob(job, now);
            }
        }
        finally {
            this.ticking = false;
        }
    }
    async maybeRunJob(job, now) {
        const pauseState = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode: job.code } });
        if (pauseState?.isPaused)
            return;
        const registration = await this.prisma.scheduledJobRegistration.findUnique({ where: { jobCode: job.code } });
        if (registration?.isRetired)
            return;
        const dueSlot = (0, scheduler_cadence_1.mostRecentScheduledSlot)(job.cadence, now);
        const alreadyRun = await this.prisma.scheduledJobRun.findFirst({
            where: { jobCode: job.code, scheduledFor: dueSlot, status: { in: ['SUCCEEDED', 'FAILED'] } },
        });
        if (alreadyRun)
            return;
        const isCatchUp = now.getTime() - dueSlot.getTime() > CATCH_UP_THRESHOLD_MS;
        await this.executeJob(job, dueSlot, isCatchUp);
    }
    async executeJob(job, scheduledFor, isCatchUp = false, manual) {
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
                data: { status: 'SUCCEEDED', completedAt: new Date(), resultSummary: result },
            });
            this.logger.log(`${job.code}: SUCCEEDED${isCatchUp ? ' (catch-up)' : ''}`);
            return { status: 'SUCCEEDED', runId: run.id };
        }
        catch (err) {
            const isPartial = err instanceof scheduler_types_1.PartialJobFailure;
            const errorMessage = err.message;
            await this.prisma.scheduledJobRun.update({
                where: { id: run.id },
                data: {
                    status: 'FAILED',
                    completedAt: new Date(),
                    errorMessage,
                    resultSummary: isPartial ? err.summary : undefined,
                },
            });
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
    async alertJobFailure(job, scheduledFor, isCatchUp, errorMessage) {
        const roleHolders = await this.prisma.rolePermission.findMany({
            where: { functionCode: { in: ['SCHEDULER_OPERATIONS', 'SCHEDULER_OVERSIGHT'] }, level: 'VIEW' },
            select: { roleCode: true },
        });
        const recipientUserIds = new Set();
        for (const { roleCode } of roleHolders) {
            const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
            for (const h of holders)
                recipientUserIds.add(h.userId);
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
    async listRecentRuns(jobCode, limit = 50) {
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
    async listJobsForUser(userId) {
        const [opsEligible, oversightEligible] = await Promise.all([
            this.delegation.hasCapability(userId, 'SCHEDULER_OPERATIONS', 'VIEW'),
            this.delegation.hasCapability(userId, 'SCHEDULER_OVERSIGHT', 'VIEW'),
        ]);
        const seesEverything = opsEligible.eligible || oversightEligible.eligible;
        const jobs = await this.getJobs();
        const pauseStates = await this.prisma.scheduledJobPauseState.findMany();
        const pauseByCode = new Map(pauseStates.map((p) => [p.jobCode, p]));
        const visible = [];
        for (const job of jobs) {
            if (seesEverything) {
                visible.push(job);
                continue;
            }
            const ownerFn = JOB_OWNER_FUNCTION_CODE[job.code];
            if (ownerFn) {
                const { eligible } = await this.delegation.hasCapability(userId, ownerFn, 'VIEW');
                if (eligible)
                    visible.push(job);
            }
        }
        const results = [];
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
    async pauseDirect(jobCode, userId, reason) {
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
    async requestPause(jobCode, userId, reason) {
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
    async approvePauseRequest(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const state = await this.prisma.scheduledJobPauseState.findFirstOrThrow({ where: { pauseWorkflowInstanceId: workflowInstanceId } });
        const paused = await this.prisma.scheduledJobPauseState.update({
            where: { jobCode: state.jobCode },
            data: { isPaused: true, pausedAt: new Date(), pausedByUserId: approverUserId },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'scheduled_job_pause_state', entityId: state.jobCode, after: { isPaused: true, workflowInstanceId } });
        return paused;
    }
    async resumeJob(jobCode, userId) {
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
    async registerJob(jobCode, userId) {
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
    async retireJob(jobCode, userId, reason) {
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
    async requestRetirement(jobCode, userId, reason) {
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
    async approveRetirement(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const registration = await this.prisma.scheduledJobRegistration.findFirstOrThrow({ where: { retireWorkflowInstanceId: workflowInstanceId } });
        const retired = await this.prisma.scheduledJobRegistration.update({
            where: { jobCode: registration.jobCode },
            data: { isRetired: true, retiredAt: new Date(), retiredByUserId: approverUserId },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'scheduled_job_registration', entityId: registration.jobCode, after: { isRetired: true, workflowInstanceId } });
        return retired;
    }
    async manualRerun(jobCode, scheduledFor, userId) {
        await this.assertCapability(userId, 'SCHEDULER_OPERATIONS', 'INITIATE', `manually re-run ${jobCode}`);
        const pauseState = await this.prisma.scheduledJobPauseState.findUnique({ where: { jobCode } });
        if (pauseState?.isPaused) {
            throw new Error(`${jobCode} is paused — resume it before re-running.`);
        }
        const jobs = await this.getJobs();
        const job = jobs.find((j) => j.code === jobCode);
        if (!job)
            throw new Error(`No scheduled job with code ${jobCode}.`);
        const now = new Date();
        const isCatchUp = now.getTime() - scheduledFor.getTime() > CATCH_UP_THRESHOLD_MS;
        return this.executeJob(job, scheduledFor, isCatchUp, { triggeredByUserId: userId });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'scheduler_console_activity', entityId: activity, after: { functionCode, level } });
            throw new Error(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async systemSchedulerUserId() {
        let user = await this.prisma.appUser.findUnique({ where: { email: SYSTEM_SCHEDULER_EMAIL } });
        if (!user) {
            user = await this.prisma.appUser.create({ data: { email: SYSTEM_SCHEDULER_EMAIL, displayName: 'System Scheduler' } });
        }
        const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
        if (!hasRole) {
            await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_SCHEDULER' } });
        }
        return user.id;
    }
    async companyEntityCode() {
        const company = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
        return company.code;
    }
    STRESS_RUNNERS = {
        LIQUIDITY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runLiquidityStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
        CAPITAL_ADEQUACY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runCapitalAdequacyStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
        REVENUE_SENSITIVITY: (scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runRevenueSensitivityStress(scenarioCode, { ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
        COUNTERPARTY_DEFAULT: (_scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runCounterpartyDefaultStress({ ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
        PORTFOLIO_SHOCK: (_scenarioCode, ranByUserId, ledgerEntityCode) => this.stressEngine.runPortfolioShockStress({ ledgerEntityCode, runMode: 'SANDBOX', ranByUserId }),
    };
    async runStressSweep(modelTypes) {
        const systemUserId = await this.systemSchedulerUserId();
        const entityCode = await this.companyEntityCode();
        const scenarios = await this.prisma.stressScenarioConfig.findMany({
            where: { modelType: { in: modelTypes }, status: 'ACTIVE' },
            orderBy: [{ modelType: 'asc' }, { scenarioCode: 'asc' }],
            distinct: ['modelType', 'scenarioCode'],
        });
        const results = [];
        for (const scenario of scenarios) {
            const runner = this.STRESS_RUNNERS[scenario.modelType];
            if (!runner) {
                results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: false, error: `No runner wired for stress model type ${scenario.modelType}` });
                continue;
            }
            try {
                await runner(scenario.scenarioCode, systemUserId, entityCode);
                results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: true });
            }
            catch (err) {
                results.push({ modelType: scenario.modelType, scenarioCode: scenario.scenarioCode, ok: false, error: err.message });
            }
        }
        const failed = results.filter((r) => !r.ok);
        const summary = { totalScenarios: results.length, succeeded: results.length - failed.length, failed: failed.length, results };
        if (failed.length > 0) {
            throw new scheduler_types_1.PartialJobFailure(`${failed.length}/${results.length} scenario run(s) failed`, summary);
        }
        return summary;
    }
    async runReverseStressSweep() {
        const systemUserId = await this.systemSchedulerUserId();
        const entityCode = await this.companyEntityCode();
        const run = await this.stressEngine.runReverseStress({ ledgerEntityCode: entityCode, runMode: 'SANDBOX', ranByUserId: systemUserId });
        const outputs = run.outputs;
        return { runId: run.id, eventCount: outputs?.events?.length ?? 0 };
    }
    async runHfDailyAccrualSweep(scheduledFor) {
        const configs = await this.halalFundLaunchConfig.listActiveConfigs();
        if (configs.length === 0) {
            return { fundsProcessed: 0, note: 'No ACTIVE halal_fund_launch_config rows — the Halal Fund has not been launched in production yet.' };
        }
        const results = [];
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
                    feeRates: config.feeRates,
                });
                try {
                    await this.halalFundEngine.publishAndLockNav(navInput);
                }
                catch (err) {
                    if (!(err instanceof halal_fund_engine_types_1.HalalFundEngineError))
                        throw err;
                }
                results.push({ ledgerEntityCode: config.ledgerEntityCode, ok: true, navPerUnit: nav.navPerUnit });
            }
            catch (err) {
                results.push({ ledgerEntityCode: config.ledgerEntityCode, ok: false, error: err.message });
            }
        }
        const failed = results.filter((r) => !r.ok);
        const summary = { fundsProcessed: results.length, succeeded: results.length - failed.length, failed: failed.length, results };
        if (failed.length > 0) {
            throw new scheduler_types_1.PartialJobFailure(`${failed.length}/${results.length} Halal Fund accrual run(s) failed`, summary);
        }
        return summary;
    }
    async buildJobs() {
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
                        throw new scheduler_types_1.PartialJobFailure(`Audit chain integrity check found ${result.failures.length} failure(s)`, result);
                    }
                    return result;
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
                    return this.paymentReminders.runReminderSweep(scheduledFor, systemUserId);
                },
            },
            {
                code: 'CREDIT_BUREAU_MONTHLY_SYNC',
                description: 'Invariant 36(c): "monthly data-sync... tasks generate as officer tasks" (process doc §3-4) — one task per COMPLETE_APPROVED counterparty per calendar month, assigned to its file-managing officer. PaymentReminderService.runCreditBureauMonthlySync().',
                cadence: { type: 'MONTHLY', dayOfMonth: 1, hour: 6, minute: 45 },
                run: async (scheduledFor) => {
                    const systemUserId = await this.systemSchedulerUserId();
                    return this.paymentReminders.runCreditBureauMonthlySync(scheduledFor, systemUserId);
                },
            },
            {
                code: 'TASK_DEFAULT_PMS_FEED',
                description: 'Invariant 25(1): feeds each employee\'s current DEFAULTED task count through task_default_gate_policy into their behavioural_gate_check for every appraisal cycle they\'re part of that hasn\'t reached INCENTIVE_COMPUTED yet. Runs after TASK_ESCALATION_SWEEP so it sees the same tick\'s freshest defaults. PmsService.runTaskDefaultGateFeed().',
                cadence: { type: 'DAILY', hour: 7, minute: 30 },
                run: async () => {
                    const systemUserId = await this.systemSchedulerUserId();
                    const employeeIds = await this.task.listEmployeeIdsWithDefaultedTasks();
                    const employeeDefaultCounts = await Promise.all(employeeIds.map(async (employeeId) => ({ employeeId, count: await this.task.countDefaultedTasks(employeeId) })));
                    return this.pms.runTaskDefaultGateFeed(employeeDefaultCounts, systemUserId);
                },
            },
            {
                code: 'BOARD_CALENDAR_REMINDER_SWEEP',
                description: 'Invariant 37(c)(iii): Board Calendar reminder notifications — fires once per event (remindedAt dedup guard) to CS/MD_CEO/SAU/AUDITOR once an event falls within the governed board_calendar_reminder_config.daysBefore window. BoardCalendarService.runReminderSweep().',
                cadence: { type: 'DAILY', hour: 6, minute: 15 },
                run: async (scheduledFor) => this.boardCalendar.runReminderSweep(scheduledFor),
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
                run: async (scheduledFor) => this.calendarGateway.runExternalSyncSweep(scheduledFor),
            },
            {
                code: 'ATTENDANCE_TTLOCK_SYNC',
                description: 'Invariant 40(a)/63(b)/73(b) (CHECK27): real TTLock Open Platform OAuth2 sync sweep across every ACTIVE TTLOCK provider slot -- password-grant token acquisition/refresh, pulls real unlock/access records, resolves each through the lock-user mapping table (unmapped events queue visibly, terminated-employee unlocks raise a SECURITY ALERT). A slot with no approved clientId/clientSecret/credentialConfig yet stays an honest placeholder (0 events, disclosed reason), never fabricated. AttendanceService.runTTLockSync().',
                cadence: { type: 'INTERVAL_MINUTES', minutes: 15 },
                run: async () => {
                    const providers = await this.prisma.attendanceProvider.findMany({ where: { adapterType: 'TTLOCK', isActive: true } });
                    const results = await Promise.all(providers.map((p) => this.attendance.runTTLockSync(p.id)));
                    return { providersSynced: providers.length, results };
                },
            },
            {
                code: 'ATTENDANCE_LATENESS_PMS_FEED',
                description: 'Invariant 40(c): feeds each employee\'s attendance-lateness count (AttendanceService.computeLateCounts, first-qualifying-event-per-day against the governed AttendanceClockInPolicy, approved-leave-suppressed) through attendance_lateness_gate_policy into behavioural_gate_check for every open appraisal cycle -- tighten-only, mirrors TASK_DEFAULT_PMS_FEED\'s own shape. PmsService.runAttendanceLatenessGateFeed().',
                cadence: { type: 'DAILY', hour: 7, minute: 45 },
                run: async () => {
                    const systemUserId = await this.systemSchedulerUserId();
                    return this.pms.runAttendanceLatenessGateFeed(systemUserId);
                },
            },
            {
                code: 'INVESTOR_DORMANCY_SWEEP',
                description: 'Invariant 51(b-v): dormancy detection over the governed investor_dormancy_config.monthsInactiveThreshold -- ACTIVE investors with no transaction inside the window flip to DORMANT (and reverse, on renewed activity). InvestorExitService.runDormancySweep().',
                cadence: { type: 'DAILY', hour: 4, minute: 15 },
                run: async (scheduledFor) => this.investorExit.runDormancySweep(scheduledFor),
            },
            {
                code: 'KYC_PERIODIC_REVIEW_SWEEP',
                description: 'Invariant 51(b-vii): detects onboarding cases whose periodicReviewFrequency window has elapsed and routes a Compliance Task per case (the "periodicReviewFrequency that nothing consumes" gap named at CHECK13 open). InvestorComplianceSweepService.runKycPeriodicReviewSweep().',
                cadence: { type: 'DAILY', hour: 6, minute: 45 },
                run: async (scheduledFor) => {
                    const systemUserId = await this.systemSchedulerUserId();
                    return this.complianceSweep.runKycPeriodicReviewSweep(scheduledFor, systemUserId);
                },
            },
            {
                code: 'SCREENING_LIST_DOWNLOAD_SWEEP',
                description: 'Invariant 72(a): one download attempt per ACTIVE, non-parked ScreeningListSource -- failures alert but never abort the sweep. ScreeningGatewayService.runListDownloadSweep().',
                cadence: { type: 'DAILY', hour: 5, minute: 30 },
                run: async (scheduledFor) => this.screeningGateway.runListDownloadSweep(scheduledFor),
            },
            {
                code: 'SCREENING_RESCREENING_SWEEP',
                description: 'Invariant 72(d): re-screens the entire live book (investors + counterparties) against the current local lists and raises a Compliance alert only on a genuinely new candidate match -- activates the CHECK13 51(b-viii) Tier-2 item that was parked for lack of a real screening engine. ScreeningGatewayService.runRescreeningSweep().',
                cadence: { type: 'DAILY', hour: 7, minute: 0 },
                run: async (scheduledFor) => {
                    const systemUserId = await this.systemSchedulerUserId();
                    return this.screeningGateway.runRescreeningSweep(scheduledFor, systemUserId);
                },
            },
            {
                code: 'KYC_DOCUMENT_EXPIRY_SWEEP',
                description: 'Invariant 51(c): investor KYC document-expiry alerts (mirrors the counterparty Shariah-cert-expiry control in spirit) -- routes a Compliance Task for any InvestorKycDocument within 30 days of, or past, its expiryDate. InvestorComplianceSweepService.runDocumentExpirySweep().',
                cadence: { type: 'DAILY', hour: 7, minute: 15 },
                run: async (scheduledFor) => {
                    const systemUserId = await this.systemSchedulerUserId();
                    return this.complianceSweep.runDocumentExpirySweep(scheduledFor, systemUserId);
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
};
exports.SchedulerService = SchedulerService;
exports.SchedulerService = SchedulerService = SchedulerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        kri_engine_service_1.KriEngineService,
        stress_engine_service_1.StressEngineService,
        halal_fund_engine_service_1.HalalFundEngineService,
        halal_fund_launch_config_service_1.HalalFundLaunchConfigService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        procurement_service_1.ProcurementService,
        zakat_service_1.ZakatService,
        task_service_1.TaskService,
        payment_reminder_service_1.PaymentReminderService,
        pms_service_1.PmsService,
        board_calendar_service_1.BoardCalendarService,
        payment_gateway_service_1.PaymentGatewayService,
        calendar_service_1.CalendarService,
        calendar_gateway_service_1.CalendarGatewayService,
        investor_exit_service_1.InvestorExitService,
        investor_compliance_sweep_service_1.InvestorComplianceSweepService,
        attendance_service_1.AttendanceService,
        tax_service_1.TaxService,
        notification_service_1.NotificationService,
        screening_gateway_service_1.ScreeningGatewayService])
], SchedulerService);
//# sourceMappingURL=scheduler.service.js.map