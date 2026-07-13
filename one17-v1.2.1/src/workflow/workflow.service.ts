import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import {
  InitiateWorkflowInput,
  WorkflowAuthorizationError,
} from './workflow.types';

// Build Plan step 4 / SOW D4: the single initiate→verify→approve→execute→
// record machine. "verify" (SRS's DC-01..08 style automated control checks)
// and the real business effect of "execute" (posting a journal, releasing a
// payment) belong to product/ledger modules that don't exist yet — this
// engine owns sequencing, capability-based authorization (never a role-name
// check — see ApprovalRuleStep.requiredFunctionCode), maker≠checker, and
// the audit trail. "record" is the AuditService call at every step; there
// is no separate record-stage method.
@Injectable()
export class WorkflowEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async initiate(input: InitiateWorkflowInput) {
    const rule = await this.resolveApprovalRule(input);

    const { eligible: canInitiate } = await this.delegation.hasCapability(
      input.initiatedByUserId,
      rule.initiatorFunctionCode,
      'INITIATE',
    );
    if (!canInitiate) {
      await this.audit.record({
        actorUserId: input.initiatedByUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'workflow_instance',
        entityId: `${input.entityType}:${input.entityId}`,
        after: {
          workflowTypeCode: input.workflowTypeCode,
          requiredFunctionCode: rule.initiatorFunctionCode,
        },
      });
      throw new WorkflowAuthorizationError(
        `User lacks INITIATE permission on ${rule.initiatorFunctionCode}, required to initiate ${input.workflowTypeCode}`,
        `${input.entityType}:${input.entityId}`,
      );
    }

    const instance = await this.prisma.workflowInstance.create({
      data: {
        workflowTypeCode: input.workflowTypeCode,
        approvalRuleId: rule.id,
        entityType: input.entityType,
        entityId: input.entityId,
        amountKobo: input.amountKobo,
        scenario: input.scenario,
        initiatedByUserId: input.initiatedByUserId,
        status: 'PENDING_APPROVAL',
      },
    });

    await this.audit.record({
      actorUserId: input.initiatedByUserId,
      action: 'CREATE',
      entityType: 'workflow_instance',
      entityId: instance.id,
      after: {
        workflowTypeCode: input.workflowTypeCode,
        entityType: input.entityType,
        entityId: input.entityId,
        amountKobo: input.amountKobo?.toString(),
        scenario: input.scenario,
        approvalRuleId: rule.id,
      },
    });

    return instance;
  }

  async approveNextStep(
    workflowInstanceId: string,
    approverUserId: string,
    notes?: string,
  ) {
    const instance = await this.loadLiveInstance(workflowInstanceId);

    // SRS §3.3: "No user may initiate AND approve the same distribution."
    // Checked against this instance's actual initiator, not a standing role
    // combination — that's exactly what RbacService can't do and why this
    // check lives here, not there.
    if (approverUserId === instance.initiatedByUserId) {
      await this.denyStep(
        instance.id,
        approverUserId,
        'Approver is the same user who initiated this workflow instance (SRS §3.3 maker≠checker).',
      );
      throw new WorkflowAuthorizationError(
        'Approver cannot be the same user who initiated this workflow instance.',
        instance.id,
      );
    }

    const step = this.currentPendingStep(instance);
    if (!step) {
      throw new WorkflowAuthorizationError(
        'No pending approval step — instance may already be fully approved.',
        instance.id,
      );
    }

    const eligibility = await this.resolveApproverEligibility(
      approverUserId,
      step,
      instance,
    );
    if (!eligibility.eligible) {
      await this.denyStep(
        instance.id,
        approverUserId,
        `Approver lacks ${step.requiredFunctionCode} APPROVE capability (standing or delegated), or sufficient limit, for this step.`,
      );
      throw new WorkflowAuthorizationError(
        `Approver lacks required capability/approval limit for step ${step.stepOrder} (${step.requiredFunctionCode}).`,
        instance.id,
      );
    }

    await this.prisma.workflowStepApproval.create({
      data: {
        workflowInstanceId: instance.id,
        approvalRuleStepId: step.id,
        approverUserId,
        decision: 'APPROVE',
        notes,
      },
    });

    const isLastStep =
      step.stepOrder ===
      Math.max(...instance.approvalRule.steps.map((s) => s.stepOrder));
    const updated = await this.prisma.workflowInstance.update({
      where: { id: instance.id },
      data: isLastStep ? { status: 'APPROVED' } : {},
    });

    // CLAUDE.md 9a: a DELEGATION_GRANT instance reaching APPROVED is what
    // actually activates the linked (until now PENDING, inert) delegation —
    // this is the one workflow type with a domain-specific side effect
    // wired into the generic engine, since delegation activation can't
    // reasonably live anywhere else without creating a circular dependency
    // (see DelegationService's module comment).
    if (
      updated.status === 'APPROVED' &&
      updated.workflowTypeCode === 'DELEGATION_GRANT'
    ) {
      await this.delegation.activate(updated.entityId, approverUserId);
    }

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'APPROVE',
      entityType: 'workflow_instance',
      entityId: instance.id,
      workflowStep: `step ${step.stepOrder}: ${step.requiredFunctionCode}`,
      // Roles & Workflows §6: "the audit log records the approval as
      // delegated" — viaDelegationId is present only when standing
      // RolePermission authority was insufficient and a Delegation of
      // Authority grant is what actually authorized this approval.
      after: {
        decision: 'APPROVE',
        resultingStatus: updated.status,
        viaDelegationId: eligibility.viaDelegationId,
      },
    });

    return updated;
  }

  async reject(
    workflowInstanceId: string,
    approverUserId: string,
    notes?: string,
  ) {
    const instance = await this.loadLiveInstance(workflowInstanceId);
    const step = this.currentPendingStep(instance);

    if (step) {
      await this.prisma.workflowStepApproval.create({
        data: {
          workflowInstanceId: instance.id,
          approvalRuleStepId: step.id,
          approverUserId,
          decision: 'REJECT',
          notes,
        },
      });
    }

    const updated = await this.prisma.workflowInstance.update({
      where: { id: instance.id },
      data: { status: 'REJECTED' },
    });

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'REJECT',
      entityType: 'workflow_instance',
      entityId: instance.id,
      after: { notes },
    });

    return updated;
  }

  // Phase 1 scope ends here: there is no ledger/product engine yet for
  // "execute" to actually post to (SOW §7 explicitly excludes product
  // engines and journal posting from Phase 1). This records the terminal
  // state transition so later phases have a state to hook business effect
  // into, without inventing that business effect now.
  async execute(workflowInstanceId: string, executorUserId: string) {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
    });
    if (instance.status !== 'APPROVED') {
      throw new WorkflowAuthorizationError(
        `Cannot execute a workflow instance in status ${instance.status}; must be APPROVED.`,
        instance.id,
      );
    }
    const updated = await this.prisma.workflowInstance.update({
      where: { id: instance.id },
      data: { status: 'EXECUTED' },
    });
    await this.audit.record({
      actorUserId: executorUserId,
      action: 'EXECUTE',
      entityType: 'workflow_instance',
      entityId: instance.id,
    });
    return updated;
  }

  // Item 4a/4: backs the ops UI's workflow-inbox screen. Reuses the exact
  // same currentPendingStep/resolveApproverEligibility private helpers
  // approveNextStep already relies on — the eligibility rule (standing OR
  // delegated capability, maker!=checker, amount-limit check) is defined
  // ONCE and this method only filters by it, it does not re-derive it.
  async getInboxForUser(userId: string) {
    const pending = await this.loadPendingInstances();
    const inbox: {
      instance: (typeof pending)[number];
      pendingStep: { id: string; stepOrder: number; requiredFunctionCode: string };
      viaDelegationId?: string;
    }[] = [];

    for (const instance of pending) {
      if (instance.initiatedByUserId === userId) continue; // maker != checker
      const step = this.currentPendingStep(instance);
      if (!step) continue;
      const eligibility = await this.resolveApproverEligibility(userId, step, instance);
      if (eligibility.eligible) {
        inbox.push({ instance, pendingStep: step, viaDelegationId: eligibility.viaDelegationId });
      }
    }
    return inbox;
  }

  private async loadPendingInstances() {
    return this.prisma.workflowInstance.findMany({
      where: { status: 'PENDING_APPROVAL' },
      include: {
        approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } },
        stepApprovals: true,
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  // Invariant 54(e)(v): only ever resolve against the ACTIVE chain version.
  // Today every workflow type has exactly one (seed-authored, version 1) so
  // this filter is a no-op in practice — but it's what makes the substrate
  // load-bearing rather than decorative: once a future Approval Chain
  // Editor exists and stages a DRAFT v2 chain for a workflow type,
  // initiate() must keep resolving against the current ACTIVE version until
  // that DRAFT is itself approved, never leak an unapproved chain into live
  // workflow initiation.
  private async resolveApprovalRule(input: InitiateWorkflowInput) {
    if (input.scenario) {
      const rule = await this.prisma.approvalRule.findFirst({
        where: {
          workflowTypeCode: input.workflowTypeCode,
          scenario: input.scenario,
          chainVersion: { status: 'ACTIVE' },
        },
        include: { steps: { orderBy: { stepOrder: 'asc' } } },
      });
      if (!rule)
        throw new Error(
          `No approval rule configured for ${input.workflowTypeCode} scenario ${input.scenario}`,
        );
      return rule;
    }

    if (input.amountKobo === undefined) {
      throw new Error(
        `amountKobo or scenario is required to resolve an approval rule for ${input.workflowTypeCode}`,
      );
    }
    const rule = await this.prisma.approvalRule.findFirst({
      where: {
        workflowTypeCode: input.workflowTypeCode,
        scenario: null,
        chainVersion: { status: 'ACTIVE' },
        AND: [
          {
            OR: [
              { minAmountKobo: null },
              { minAmountKobo: { lte: input.amountKobo } },
            ],
          },
          {
            OR: [
              { maxAmountKobo: null },
              { maxAmountKobo: { gt: input.amountKobo } },
            ],
          },
        ],
      },
      include: { steps: { orderBy: { stepOrder: 'asc' } } },
    });
    if (!rule)
      throw new Error(
        `No approval rule configured for ${input.workflowTypeCode} at amount ${input.amountKobo}`,
      );
    return rule;
  }

  private async loadLiveInstance(workflowInstanceId: string) {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
      include: {
        approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' } } } },
        stepApprovals: true,
      },
    });
    if (instance.status !== 'PENDING_APPROVAL') {
      throw new WorkflowAuthorizationError(
        `Workflow instance is ${instance.status}, not PENDING_APPROVAL.`,
        instance.id,
      );
    }
    return instance;
  }

  private currentPendingStep(
    instance: Awaited<ReturnType<WorkflowEngineService['loadLiveInstance']>>,
  ) {
    const approvedStepIds = new Set(
      instance.stepApprovals
        .filter((a) => a.decision === 'APPROVE')
        .map((a) => a.approvalRuleStepId),
    );
    return instance.approvalRule.steps.find((s) => !approvedStepIds.has(s.id));
  }

  // Delegates to DelegationService.hasCapability — the one shared place
  // this "standing OR delegated" logic lives, so InvestorService's
  // screening-countersign gate (and anything else needing an authorization
  // decision) gets the same flexibility for free instead of a second
  // hand-rolled copy that could drift out of sync.
  private async resolveApproverEligibility(
    approverUserId: string,
    step: { requiredFunctionCode: string; requiresAmountLimitCheck: boolean },
    instance: { amountKobo: bigint | null },
  ): Promise<{ eligible: boolean; viaDelegationId?: string }> {
    return this.delegation.hasCapability(
      approverUserId,
      step.requiredFunctionCode,
      'APPROVE',
      {
        requiresAmountLimitCheck: step.requiresAmountLimitCheck,
        amountKobo: instance.amountKobo,
      },
    );
  }

  private async denyStep(
    workflowInstanceId: string,
    actorUserId: string,
    reason: string,
  ) {
    await this.audit.record({
      actorUserId,
      action: 'PERMISSION_DENIED',
      entityType: 'workflow_instance',
      entityId: workflowInstanceId,
      after: { reason },
    });
  }

  // Invariant 49(g)(i)/(iii) (CHECK11): the generic "what happened to this
  // workflow instance" read that nothing in this codebase exposed before
  // now (WorkflowInboxService only ever surfaces PENDING items; once a
  // step decides, the instance disappears from every existing screen).
  // Unlike loadLiveInstance (private, requires PENDING_APPROVAL), this
  // works for an instance in ANY status -- that's the whole point of a
  // trail view. Read-only, no capability gate here -- callers (controllers)
  // are responsible for gating access to the underlying entity.
  async getTrail(workflowInstanceId: string) {
    const instance = await this.prisma.workflowInstance.findUniqueOrThrow({
      where: { id: workflowInstanceId },
      include: {
        initiatedBy: { select: { id: true, displayName: true, email: true } },
        approvalRule: { include: { steps: { orderBy: { stepOrder: 'asc' }, include: { requiredFunction: true } } } },
        stepApprovals: { include: { approver: { select: { id: true, displayName: true, email: true } } } },
      },
    });
    const approvalByStepId = new Map(instance.stepApprovals.map((a) => [a.approvalRuleStepId, a]));
    const steps = instance.approvalRule.steps.map((step) => {
      const approval = approvalByStepId.get(step.id);
      return {
        stepOrder: step.stepOrder,
        requiredFunctionCode: step.requiredFunctionCode,
        requiredFunctionDescription: step.requiredFunction.description,
        description: step.description,
        decision: approval?.decision ?? null,
        approver: approval ? { id: approval.approver.id, displayName: approval.approver.displayName, email: approval.approver.email } : null,
        decidedAt: approval?.decidedAt ?? null,
        notes: approval?.notes ?? null,
      };
    });
    return {
      workflowInstanceId: instance.id,
      workflowTypeCode: instance.workflowTypeCode,
      status: instance.status,
      scenario: instance.scenario,
      amountKobo: instance.amountKobo,
      initiatedBy: instance.initiatedBy,
      createdAt: instance.createdAt,
      updatedAt: instance.updatedAt,
      steps,
    };
  }
}
