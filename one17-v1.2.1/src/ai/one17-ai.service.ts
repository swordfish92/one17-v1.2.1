import { createHash } from 'crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AiGatewayError, AiInvokeInput, AiInvokeResult } from './ai.types';

const CACHE_TTL_MS = 15 * 60_000; // 15 minutes — long enough to dedupe a burst of identical asks, short enough to never serve genuinely stale answers once a real provider exists.
// Standard prompt-length -> token approximation (~4 chars/token) — a unit
// conversion, not a governed scenario magnitude (invariant 10 concerns
// business thresholds; this is the same class of constant as kobo/100).
const CHARS_PER_TOKEN_APPROX = 4;

// Check-6B item 2 (invariant 33, amended (e) + new (f)). One17AIService is
// the SOLE door to any AI capability — the ERP talks ONLY to this, never
// to a provider directly. Every request runs the four-gate pipeline, in
// order, cheapest/most-decisive check first: kill switch -> gate 1 (flag)
// -> gate 2 (RBAC grant) -> gate 3 (task/context) -> token budget -> gate 4
// (data scope, assembling context) -> cache -> the (currently unconfigured)
// provider call. EVERY outcome — including every refusal — is written to
// the immutable ai_interaction_log before returning.
@Injectable()
export class One17AIService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async invoke(input: AiInvokeInput): Promise<AiInvokeResult> {
    const now = new Date();

    // Kill switch: checked FIRST, overrides every flag instantly.
    const killSwitch = await this.prisma.aiKillSwitch.findUnique({ where: { id: 1 } });
    const killSwitchActive = killSwitch?.isActive ?? false;
    if (killSwitchActive) {
      return this.refuse(input, { killSwitchActive: true, gate1FlagEnabled: false, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, 'AI kill switch is active — all AI capabilities suspended.');
    }

    // Gate 1: global per-capability flag. Checked with NO role special-
    // case whatsoever — a disabled flag is inert for every user including
    // SUPER_ADMIN, by construction (there is no branch here that reads the
    // caller's role at all).
    const flag = await this.prisma.aiCapabilityFlag.findUnique({ where: { capabilityCode: input.capabilityCode } });
    const gate1FlagEnabled = flag?.isEnabled ?? false;
    if (!gate1FlagEnabled) {
      return this.refuse(input, { killSwitchActive, gate1FlagEnabled: false, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, `AI capability ${input.capabilityCode} is currently disabled (global flag OFF).`);
    }

    // Gate 2: role/user grant. AI invocation is a use/read action (VIEW),
    // never a workflow-initiating one.
    const { eligible: gate2Granted } = await this.delegation.hasCapability(input.askingUserId, input.capabilityCode, 'VIEW');
    if (!gate2Granted) {
      return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted: false, gate3ContextOk: false, tokenBudgetOk: false }, `User lacks ${input.capabilityCode} capability (standing or delegated).`);
    }

    // Gate 3: task/context rule.
    const contextCheck = await this.checkContext(input);
    if (!contextCheck.ok) {
      return this.refuse(input, { killSwitchActive, gate1FlagEnabled, gate2Granted, gate3ContextOk: false, tokenBudgetOk: false }, contextCheck.reason!);
    }

    // Token budget: the economic limiter (invariant 33e), metered per
    // org_unit through the budget module's own cost-centre anchor.
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

    // Gate 4: data scope. Assembled BEFORE any cache/provider step, and
    // independent of whether the request is a cache hit — this is the
    // structural RAG-leak precaution (invariant 33a): the gateway NEVER
    // reads a raw table, only catalog-registered, capability-gated points,
    // filtered against the ASKING USER's own capabilities, not a
    // privileged service account.
    const { included, excluded } = await this.resolveDataPoints(input.askingUserId, input.requestedDataPointCodes);

    // Response cache (invariant 33e). Keyed on capability + prompt +
    // resolved context + the INCLUDED data point set (two users with
    // different included sets must never share a cache entry).
    const cacheKey = this.computeCacheKey(input, included);
    const cached = await this.prisma.aiResponseCache.findUnique({ where: { cacheKey } });
    const cacheHit = !!cached && cached.expiresAt > now;

    const responseText = cacheHit
      ? cached!.responseText
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
        contextJson: (input.context as any) ?? null,
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

  // Gate 1 management: ICT initiates, MD_CEO approves (DoA-governed).
  // requestFlagToggle always requests the OPPOSITE of the flag's current
  // state — a TOGGLE, not an arbitrary set — so the eventual approval
  // (which, per WorkflowInboxService's generic dispatch signature, carries
  // no extra parameter beyond the instance id) has an unambiguous action
  // to perform: flip whatever the flag's value is when approval lands.
  async requestFlagToggle(capabilityCode: string, actorUserId: string) {
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

  async approveFlagToggle(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;
    const current = await this.prisma.aiCapabilityFlag.findUniqueOrThrow({ where: { capabilityCode: updated.entityId } });
    const flag = await this.prisma.aiCapabilityFlag.update({
      where: { capabilityCode: updated.entityId },
      data: { isEnabled: !current.isEnabled, updatedByUserId: approverUserId, workflowInstanceId },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'ai_capability_flag', entityId: flag.capabilityCode, after: { isEnabled: flag.isEnabled } });
    return flag;
  }

  // The kill switch: unilateral, ICT-executable — never gated behind a
  // second signature, same "emergency stop must never wait" reasoning as
  // DelegationOfAuthority revocation / scheduler resume.
  async activateKillSwitch(actorUserId: string, reason: string) {
    await this.assertCapability(actorUserId, 'AI_KILL_SWITCH', 'INITIATE', 'activate the AI kill switch');
    const updated = await this.prisma.aiKillSwitch.upsert({
      where: { id: 1 },
      create: { id: 1, isActive: true, activatedByUserId: actorUserId, reason },
      update: { isActive: true, activatedByUserId: actorUserId, reason },
    });
    // No notification engine exists yet (same honest mechanism as the
    // scheduler's failure alerting) — a permanent, queryable audit_trail
    // row is "CEO-notified" today's actual, non-fabricated form.
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'ai_kill_switch', entityId: '1', after: { isActive: true, reason } });
    return updated;
  }

  async deactivateKillSwitch(actorUserId: string) {
    await this.assertCapability(actorUserId, 'AI_KILL_SWITCH', 'INITIATE', 'deactivate the AI kill switch');
    const updated = await this.prisma.aiKillSwitch.update({ where: { id: 1 }, data: { isActive: false, activatedByUserId: actorUserId, reason: null } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'ai_kill_switch', entityId: '1', after: { isActive: false } });
    return updated;
  }

  // Defect found this pass (Check-6C tranche 3): the controller's own
  // comment claimed this endpoint was gated on AI_AUDITLOG_QUERY, but the
  // service method took no actor and applied no check at all — any
  // authenticated user could read every user's prompts/responses. Fixed by
  // requiring the real capability check here (VIEW — a read/audit action,
  // same level convention as every other AI capability, invariant 33f-2).
  async listInteractionLog(actorUserId: string, limit = 100) {
    await this.assertCapability(actorUserId, 'AI_AUDITLOG_QUERY', 'VIEW', 'read the AI interaction log');
    return this.prisma.aiInteractionLog.findMany({ orderBy: { createdAt: 'desc' }, take: limit });
  }

  // Check-6C tranche 3: the AI admin console (scheduler-console style) —
  // read-only surfaces over gate 1 (flags), the token budget, and the kill
  // switch. The console SHOWS the dark machinery; it never flips a flag
  // itself outside the real DoA workflow below.
  async listCapabilityFlags() {
    return this.prisma.aiCapabilityFlag.findMany({ orderBy: { capabilityCode: 'asc' } });
  }

  async listTokenBudgets() {
    return this.prisma.aiTokenBudget.findMany({ orderBy: [{ orgUnitCode: 'asc' }, { periodYear: 'desc' }, { periodMonth: 'desc' }] });
  }

  async getKillSwitchStatus() {
    return this.prisma.aiKillSwitch.findUnique({ where: { id: 1 } });
  }

  private async checkContext(input: AiInvokeInput): Promise<{ ok: boolean; reason?: string }> {
    const rule = await this.prisma.aiCapabilityContextRule.findUnique({ where: { capabilityCode: input.capabilityCode } });
    if (!rule || rule.contextType === 'NONE') return { ok: true };

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

  // The LIVE_QUERY resolver whitelist — a small, explicit, hand-maintained
  // set (never a free-form query string the model could steer), matching
  // the STRESS_RUNNERS dispatch-table pattern already used elsewhere in
  // this codebase.
  private readonly LIVE_QUERY_RESOLVERS: Record<string, () => Promise<string>> = {
    vendor_count: async () => String(await this.prisma.vendor.count()),
    scheduled_job_count: async () => {
      const distinctJobs = await this.prisma.scheduledJobRun.findMany({ distinct: ['jobCode'], select: { jobCode: true } });
      return String(distinctJobs.length);
    },
    open_encumbrance_count: async () => String(await this.prisma.encumbrance.count({ where: { status: 'OPEN' } })),
  };

  // Invariant 57(b)(v) (CHECK15, NDPA/GAID): data-minimization guard.
  // Inclusion is already fully gated by explicit request + capability
  // (nothing is ever added the caller didn't ask for and can't see) --
  // this guard adds the auditable RECORD of which included points carry
  // personal data, so every AI invocation's exposure is checkable per-call
  // without a join against data_point_catalog after the fact.
  private async resolveDataPoints(askingUserId: string, requestedCodes: string[]): Promise<{ included: { code: string; label: string; value: string; containsPersonalData: boolean }[]; excluded: string[] }> {
    const included: { code: string; label: string; value: string; containsPersonalData: boolean }[] = [];
    const excluded: string[] = [];
    for (const code of requestedCodes) {
      const dataPoint = await this.prisma.dataPointCatalog.findUnique({ where: { code } });
      if (!dataPoint || dataPoint.status !== 'ACTIVE') {
        excluded.push(code);
        continue;
      }
      const { eligible } = await this.delegation.hasCapability(askingUserId, dataPoint.requiredFunctionCode, dataPoint.requiredLevel as 'INITIATE' | 'APPROVE' | 'VIEW');
      if (!eligible) {
        excluded.push(code);
        continue;
      }
      let value: string;
      if (dataPoint.sourceType === 'LIVE_QUERY') {
        const resolver = this.LIVE_QUERY_RESOLVERS[dataPoint.sourceRef];
        value = resolver ? await resolver() : 'N/A — resolver not wired';
      } else {
        value = 'N/A — REPORT_RUN_FIELD resolution requires a reportRunId context (not supplied)';
      }
      included.push({ code: dataPoint.code, label: dataPoint.label, value, containsPersonalData: dataPoint.containsPersonalData });
    }
    return { included, excluded };
  }

  // Invariant 33(e): provider slot ships EMPTY (FinCon contracting
  // pending) — every request that reaches this point has been fully
  // AUTHORIZED (all four gates + budget passed); the placeholder response
  // makes that distinction legible rather than conflating "not allowed"
  // with "no vendor plugged in yet". The included data points ARE real,
  // capability-filtered content — only the narrative generation itself is
  // stubbed.
  private buildResponse(input: AiInvokeInput, included: { code: string; label: string; value: string }[]): string {
    const contextLines = included.map((d) => `${d.label}: ${d.value}`).join('; ');
    return `[AI PROVIDER NOT CONFIGURED — FinCon contracting pending, invariant 33e] Request authorized (capability ${input.capabilityCode}). Assembled context: ${contextLines || '(no data points included)'}`;
  }

  private computeCacheKey(input: AiInvokeInput, included: { code: string }[]): string {
    const raw = JSON.stringify({ capability: input.capabilityCode, prompt: input.promptText, context: input.context ?? null, included: included.map((d) => d.code).sort() });
    return createHash('sha256').update(raw).digest('hex');
  }

  private async refuse(
    input: AiInvokeInput,
    gates: { killSwitchActive: boolean; gate1FlagEnabled: boolean; gate2Granted: boolean; gate3ContextOk: boolean; tokenBudgetOk: boolean },
    reason: string,
  ): Promise<AiInvokeResult> {
    const log = await this.prisma.aiInteractionLog.create({
      data: {
        askingUserId: input.askingUserId,
        capabilityCode: input.capabilityCode,
        promptText: input.promptText,
        requestedDataPointCodes: input.requestedDataPointCodes,
        includedDataPointCodes: [],
        excludedDataPointCodes: input.requestedDataPointCodes,
        contextJson: (input.context as any) ?? null,
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

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'ai_gateway_activity', entityId: activity, after: { functionCode, level } });
      throw new AiGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
