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
Object.defineProperty(exports, "__esModule", { value: true });
exports.One17AIService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ai_types_1 = require("./ai.types");
const CACHE_TTL_MS = 15 * 60_000;
const CHARS_PER_TOKEN_APPROX = 4;
let One17AIService = class One17AIService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async invoke(input) {
        const now = new Date();
        const killSwitch = await this.prisma.aiKillSwitch.findUnique({ where: { id: 1 } });
        const killSwitchActive = killSwitch?.isActive ?? false;
        if (killSwitchActive) {
            return this.refuse(input, { killSwitchActive: true, gate1FlagEnabled: false, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, 'AI kill switch is active — all AI capabilities suspended.');
        }
        const flag = await this.prisma.aiCapabilityFlag.findUnique({ where: { capabilityCode: input.capabilityCode } });
        const gate1FlagEnabled = flag?.isEnabled ?? false;
        if (!gate1FlagEnabled) {
            return this.refuse(input, { killSwitchActive, gate1FlagEnabled: false, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, `AI capability ${input.capabilityCode} is currently disabled (global flag OFF).`);
        }
        const { eligible: gate2Granted } = await this.delegation.hasCapability(input.askingUserId, input.capabilityCode, 'VIEW');
        if (!gate2Granted) {
            return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, `User lacks ${input.capabilityCode} capability (standing or delegated).`);
        }
        const contextCheck = await this.checkContext(input);
        if (!contextCheck.ok) {
            return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted, gate3ContextOk: false, tokenBudgetOk: false }, contextCheck.reason);
        }
        const estimatedTokens = Math.max(1, Math.ceil(input.promptText.length / CHARS_PER_TOKEN_APPROX));
        const budget = await this.prisma.aiTokenBudget.findUnique({
            where: { orgUnitCode_periodYear_periodMonth: { orgUnitCode: input.orgUnitCode, periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1 } },
        });
        if (!budget) {
            return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted, gate3ContextOk: true, tokenBudgetOk: false }, `No ai_token_budget configured for org unit ${input.orgUnitCode} this period — never silently unmetered spend.`);
        }
        if (budget.tokensConsumed + estimatedTokens > budget.tokenLimit) {
            return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted, gate3ContextOk: true, tokenBudgetOk: false }, `Token budget exhausted for org unit ${input.orgUnitCode} this period (${budget.tokensConsumed}/${budget.tokenLimit} tokens; this request needs ~${estimatedTokens}).`);
        }
        const { included, excluded } = await this.resolveDataPoints(input.askingUserId, input.requestedDataPointCodes);
        const cacheKey = this.computeCacheKey(input, included);
        const cached = await this.prisma.aiResponseCache.findUnique({ where: { cacheKey } });
        const cacheHit = !!cached && cached.expiresAt > now;
        const responseText = cacheHit
            ? cached.responseText
            : this.buildResponse(input, included);
        if (!cacheHit) {
            await this.prisma.aiResponseCache.upsert({
                where: { cacheKey },
                create: { cacheKey, capabilityCode: input.capabilityCode, responseText, expiresAt: new Date(now.getTime() + CACHE_TTL_MS) },
                update: { responseText, expiresAt: new Date(now.getTime() + CACHE_TTL_MS) },
            });
        }
        await this.prisma.aiTokenBudget.update({
            where: { id: budget.id },
            data: { tokensConsumed: { increment: estimatedTokens } },
        });
        const log = await this.prisma.aiInteractionLog.create({
            data: {
                askingUserId: input.askingUserId,
                capabilityCode: input.capabilityCode,
                promptText: input.promptText,
                requestedDataPointCodes: input.requestedDataPointCodes,
                includedDataPointCodes: included.map((d) => d.code),
                excludedDataPointCodes: excluded,
                personalDataPointCodesIncluded: included.filter((d) => d.containsPersonalData).map((d) => d.code),
                contextJson: input.context ?? null,
                gate1FlagEnabled: true,
                gate2Granted: true,
                gate3ContextOk: true,
                killSwitchActive: false,
                tokenBudgetOk: true,
                outcome: 'ALLOWED',
                responseText,
                aiDrafted: true,
                cacheHit,
                tokensCharged: estimatedTokens,
            },
        });
        return {
            outcome: 'ALLOWED',
            responseText,
            includedDataPointCodes: included.map((d) => d.code),
            excludedDataPointCodes: excluded,
            cacheHit,
            interactionLogId: log.id,
        };
    }
    async requestFlagToggle(capabilityCode, actorUserId) {
        await this.assertCapability(actorUserId, 'AI_CAPABILITY_FLAG_MANAGEMENT', 'INITIATE', 'request an AI capability flag flip');
        const current = await this.prisma.aiCapabilityFlag.findUniqueOrThrow({ where: { capabilityCode } });
        const workflowInstance = await this.workflow.initiate({
            workflowTypeCode: 'AI_CAPABILITY_FLAG_TOGGLE',
            entityType: 'ai_capability_flag',
            entityId: capabilityCode,
            scenario: 'STANDARD',
            initiatedByUserId: actorUserId,
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'ai_capability_flag_request', entityId: capabilityCode, after: { requestedTargetEnabled: !current.isEnabled, workflowInstanceId: workflowInstance.id } });
        return workflowInstance;
    }
    async approveFlagToggle(workflowInstanceId, approverUserId) {
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const current = await this.prisma.aiCapabilityFlag.findUniqueOrThrow({ where: { capabilityCode: updated.entityId } });
        const flag = await this.prisma.aiCapabilityFlag.update({
            where: { capabilityCode: updated.entityId },
            data: { isEnabled: !current.isEnabled, updatedByUserId: approverUserId, workflowInstanceId },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'ai_capability_flag', entityId: flag.capabilityCode, after: { isEnabled: flag.isEnabled } });
        return flag;
    }
    async activateKillSwitch(actorUserId, reason) {
        await this.assertCapability(actorUserId, 'AI_KILL_SWITCH', 'INITIATE', 'activate the AI kill switch');
        const updated = await this.prisma.aiKillSwitch.upsert({
            where: { id: 1 },
            create: { id: 1, isActive: true, activatedByUserId: actorUserId, reason },
            update: { isActive: true, activatedByUserId: actorUserId, reason },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'ai_kill_switch', entityId: '1', after: { isActive: true, reason } });
        return updated;
    }
    async deactivateKillSwitch(actorUserId) {
        await this.assertCapability(actorUserId, 'AI_KILL_SWITCH', 'INITIATE', 'deactivate the AI kill switch');
        const updated = await this.prisma.aiKillSwitch.update({ where: { id: 1 }, data: { isActive: false, activatedByUserId: actorUserId, reason: null } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'ai_kill_switch', entityId: '1', after: { isActive: false } });
        return updated;
    }
    async listInteractionLog(actorUserId, limit = 100) {
        await this.assertCapability(actorUserId, 'AI_AUDITLOG_QUERY', 'VIEW', 'read the AI interaction log');
        return this.prisma.aiInteractionLog.findMany({ orderBy: { createdAt: 'desc' }, take: limit });
    }
    async listCapabilityFlags() {
        return this.prisma.aiCapabilityFlag.findMany({ orderBy: { capabilityCode: 'asc' } });
    }
    async listTokenBudgets() {
        return this.prisma.aiTokenBudget.findMany({ orderBy: [{ orgUnitCode: 'asc' }, { periodYear: 'desc' }, { periodMonth: 'desc' }] });
    }
    async getKillSwitchStatus() {
        return this.prisma.aiKillSwitch.findUnique({ where: { id: 1 } });
    }
    async checkContext(input) {
        const rule = await this.prisma.aiCapabilityContextRule.findUnique({ where: { capabilityCode: input.capabilityCode } });
        if (!rule || rule.contextType === 'NONE')
            return { ok: true };
        if (rule.contextType === 'WORKFLOW_STEP') {
            if (!input.context?.workflowInstanceId) {
                return { ok: false, reason: `${input.capabilityCode} requires an active ${rule.requiredWorkflowTypeCode} workflow-step context — none supplied.` };
            }
            const instance = await this.prisma.workflowInstance.findUnique({ where: { id: input.context.workflowInstanceId } });
            if (!instance || instance.workflowTypeCode !== rule.requiredWorkflowTypeCode || instance.status !== 'PENDING_APPROVAL') {
                return { ok: false, reason: `${input.capabilityCode} requires an active ${rule.requiredWorkflowTypeCode} workflow step — the supplied context is not a live step of that type.` };
            }
            return { ok: true };
        }
        if (rule.contextType === 'REPORT_WORKSPACE') {
            if (!input.context?.stakeholderReportRunId) {
                return { ok: false, reason: `${input.capabilityCode} requires a report-workspace context — none supplied.` };
            }
            const reportRun = await this.prisma.stakeholderReportRun.findUnique({ where: { id: input.context.stakeholderReportRunId } });
            if (!reportRun || reportRun.status !== 'DRAFT') {
                return { ok: false, reason: `${input.capabilityCode} requires an open (DRAFT) report workspace — the supplied report run is not in that state.` };
            }
            return { ok: true };
        }
        if (rule.contextType === 'ORG_UNIT_SCOPED') {
            if (!input.context?.orgUnitCode) {
                return { ok: false, reason: `${input.capabilityCode} is department-bound — an org_unit context is required and none was supplied.` };
            }
            const orgUnit = await this.prisma.orgUnit.findUnique({ where: { code: input.context.orgUnitCode } });
            if (!orgUnit) {
                return { ok: false, reason: `${input.capabilityCode}'s supplied org_unit context "${input.context.orgUnitCode}" does not exist.` };
            }
            return { ok: true };
        }
        return { ok: true };
    }
    LIVE_QUERY_RESOLVERS = {
        vendor_count: async () => String(await this.prisma.vendor.count()),
        scheduled_job_count: async () => {
            const distinctJobs = await this.prisma.scheduledJobRun.findMany({ distinct: ['jobCode'], select: { jobCode: true } });
            return String(distinctJobs.length);
        },
        open_encumbrance_count: async () => String(await this.prisma.encumbrance.count({ where: { status: 'OPEN' } })),
    };
    async resolveDataPoints(askingUserId, requestedCodes) {
        const included = [];
        const excluded = [];
        for (const code of requestedCodes) {
            const dataPoint = await this.prisma.dataPointCatalog.findUnique({ where: { code } });
            if (!dataPoint || dataPoint.status !== 'ACTIVE') {
                excluded.push(code);
                continue;
            }
            const { eligible } = await this.delegation.hasCapability(askingUserId, dataPoint.requiredFunctionCode, dataPoint.requiredLevel);
            if (!eligible) {
                excluded.push(code);
                continue;
            }
            let value;
            if (dataPoint.sourceType === 'LIVE_QUERY') {
                const resolver = this.LIVE_QUERY_RESOLVERS[dataPoint.sourceRef];
                value = resolver ? await resolver() : 'N/A — resolver not wired';
            }
            else {
                value = 'N/A — REPORT_RUN_FIELD resolution requires a reportRunId context (not supplied)';
            }
            included.push({ code: dataPoint.code, label: dataPoint.label, value, containsPersonalData: dataPoint.containsPersonalData });
        }
        return { included, excluded };
    }
    buildResponse(input, included) {
        const contextLines = included.map((d) => `${d.label}: ${d.value}`).join('; ');
        return `[AI PROVIDER NOT CONFIGURED — FinCon contracting pending, invariant 33e] Request authorized (capability ${input.capabilityCode}). Assembled context: ${contextLines || '(no data points included)'}`;
    }
    computeCacheKey(input, included) {
        const raw = JSON.stringify({ capability: input.capabilityCode, prompt: input.promptText, context: input.context ?? null, included: included.map((d) => d.code).sort() });
        return (0, crypto_1.createHash)('sha256').update(raw).digest('hex');
    }
    async refuse(input, gates, reason) {
        const log = await this.prisma.aiInteractionLog.create({
            data: {
                askingUserId: input.askingUserId,
                capabilityCode: input.capabilityCode,
                promptText: input.promptText,
                requestedDataPointCodes: input.requestedDataPointCodes,
                includedDataPointCodes: [],
                excludedDataPointCodes: input.requestedDataPointCodes,
                contextJson: input.context ?? null,
                gate1FlagEnabled: gates.gate1FlagEnabled,
                gate2Granted: gates.gate2Granted,
                gate3ContextOk: gates.gate3ContextOk,
                killSwitchActive: gates.killSwitchActive,
                tokenBudgetOk: gates.tokenBudgetOk,
                outcome: 'REFUSED',
                refusalReason: reason,
            },
        });
        return {
            outcome: 'REFUSED',
            refusalReason: reason,
            includedDataPointCodes: [],
            excludedDataPointCodes: input.requestedDataPointCodes,
            cacheHit: false,
            interactionLogId: log.id,
        };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'ai_gateway_activity', entityId: activity, after: { functionCode, level } });
            throw new ai_types_1.AiGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.One17AIService = One17AIService;
exports.One17AIService = One17AIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], One17AIService);
//# sourceMappingURL=one17-ai.service.js.map