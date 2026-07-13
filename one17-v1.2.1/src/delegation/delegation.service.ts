import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import {
  RequestGrantInput,
  DelegationAuthorizationError,
} from './delegation.types';

// CEO instruction 2026-07-04, formalized in CLAUDE.md 9a: approval limits
// are governed by Delegation of Authority. Granting one is itself a
// workflow instance (WorkflowType 'DELEGATION_GRANT') — the grantor
// initiates, a second authority approves, maker≠checker applies via the
// same WorkflowEngineService every other workflow uses. This service does
// NOT depend on WorkflowEngineService (avoiding a circular dependency,
// since WorkflowEngineService already depends on this service for
// findEligibleGrant) — the caller composes the three steps:
//   1. delegation.requestGrant(...)               — validates, creates PENDING row
//   2. workflow.initiate({ workflowTypeCode: 'DELEGATION_GRANT', entityType:
//      'delegation_of_authority', entityId: grant.id, scenario: 'STANDARD', ... })
//   3. delegation.attachWorkflowInstance(grant.id, instance.id)
// WorkflowEngineService calls delegation.activate() itself once that
// instance's approval completes — see its approveNextStep().
@Injectable()
export class DelegationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async requestGrant(input: RequestGrantInput) {
    if (input.delegateUserId === input.delegatedByUserId) {
      await this.audit.record({
        actorUserId: input.delegatedByUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'delegation_of_authority',
        entityId: input.delegateUserId,
        after: {
          reason: 'self-delegation attempted',
          functionCode: input.functionCode,
        },
      });
      throw new DelegationAuthorizationError(
        'A user cannot delegate authority to themselves.',
      );
    }

    if (!input.boardInstrumentRef) {
      const effective = await this.effectiveAuthority(
        input.delegatedByUserId,
        input.functionCode,
      );
      if (effective === 'NONE') {
        await this.denyRequest(
          input,
          'Grantor holds no standing or delegated APPROVE authority on this function.',
        );
        throw new DelegationAuthorizationError(
          `Grantor holds no standing or delegated APPROVE authority on ${input.functionCode}; attach a boardInstrumentRef to override.`,
        );
      }
      if (effective !== null) {
        // Grantor's own authority is capped at `effective`. An uncapped
        // (null) request, or one exceeding that cap, exceeds what the
        // grantor actually holds.
        if (
          input.limitKobo === undefined ||
          input.limitKobo === null ||
          input.limitKobo > effective
        ) {
          await this.denyRequest(
            input,
            `Requested limit exceeds grantor's effective authority (${effective}).`,
          );
          throw new DelegationAuthorizationError(
            `Grantor's effective authority on ${input.functionCode} is capped at ${effective}; the requested delegation exceeds it. Attach a boardInstrumentRef to override.`,
          );
        }
      }
      // effective === null: grantor is uncapped, any requested limitKobo is fine.
    }

    const effectiveFrom = input.effectiveFrom ?? new Date();
    const created = await this.prisma.delegationOfAuthority.create({
      data: {
        functionCode: input.functionCode,
        delegateUserId: input.delegateUserId,
        delegatedByUserId: input.delegatedByUserId,
        limitKobo: input.limitKobo,
        effectiveFrom,
        effectiveTo: input.effectiveTo,
        reason: input.reason,
        boardInstrumentRef: input.boardInstrumentRef,
        status: 'PENDING',
      },
    });

    await this.audit.record({
      actorUserId: input.delegatedByUserId,
      action: 'CREATE',
      entityType: 'delegation_of_authority',
      entityId: created.id,
      after: {
        status: 'PENDING',
        functionCode: input.functionCode,
        delegateUserId: input.delegateUserId,
        limitKobo: input.limitKobo?.toString(),
        boardInstrumentRef: input.boardInstrumentRef,
      },
    });

    return created;
  }

  async attachWorkflowInstance(
    delegationId: string,
    workflowInstanceId: string,
  ) {
    return this.prisma.delegationOfAuthority.update({
      where: { id: delegationId },
      data: { workflowInstanceId },
    });
  }

  // Invariant 49(a) (CHECK11, atomicity sweep): the compensating half of
  // the three-step composition documented at the top of this file --
  // DelegationController.requestGrant calls this if workflow.initiate()
  // throws after requestGrant() already created the PENDING row, so the
  // grant doesn't dangle with no linked (or linkable) approval. Status
  // guard mirrors activate()'s: only ever discards a row still in the
  // PENDING state this method's own caller just created it in.
  async discardPendingGrant(delegationId: string) {
    const current = await this.prisma.delegationOfAuthority.findUniqueOrThrow({
      where: { id: delegationId },
    });
    if (current.status !== 'PENDING') return;
    await this.prisma.delegationOfAuthority.delete({ where: { id: delegationId } });
  }

  // Called by WorkflowEngineService once the linked DELEGATION_GRANT
  // instance reaches APPROVED. Guards against activating anything not
  // currently PENDING (e.g. a revoked-before-approval grant).
  async activate(delegationId: string, activatedByUserId?: string) {
    const current = await this.prisma.delegationOfAuthority.findUniqueOrThrow({
      where: { id: delegationId },
    });
    if (current.status !== 'PENDING') {
      throw new DelegationAuthorizationError(
        `Cannot activate a delegation in status ${current.status}; must be PENDING.`,
      );
    }
    const updated = await this.prisma.delegationOfAuthority.update({
      where: { id: delegationId },
      data: { status: 'ACTIVE' },
    });
    await this.audit.record({
      actorUserId: activatedByUserId,
      action: 'UPDATE',
      entityType: 'delegation_of_authority',
      entityId: delegationId,
      before: { status: 'PENDING' },
      after: { status: 'ACTIVE' },
    });
    return updated;
  }

  // Deliberately immediate and unilateral — see CLAUDE.md 9a: gating an
  // emergency stop behind a second signature would leave a compromised or
  // mistaken delegate empowered while awaiting approval.
  async revoke(delegationId: string, revokedByUserId: string, reason?: string) {
    const updated = await this.prisma.delegationOfAuthority.update({
      where: { id: delegationId },
      data: {
        status: 'REVOKED',
        revokedAt: new Date(),
        revokedByUserId,
        reason,
      },
    });

    await this.audit.record({
      actorUserId: revokedByUserId,
      action: 'UPDATE',
      entityType: 'delegation_of_authority',
      entityId: delegationId,
      after: { status: 'REVOKED', reason },
    });

    return updated;
  }

  // Shared "does this user hold this capability, standing or delegated"
  // check — used by WorkflowEngineService for approval steps AND by any
  // other service (e.g. InvestorService's screening countersign gate) that
  // needs an authorization decision without re-deriving this logic or
  // hard-coding a role name. CEO instruction 2026-07-04: "structured in a
  // way that it can be delegated ... via access control parameters ...
  // flexibility is important" — this is the one place that flexibility
  // lives, so every caller gets it for free instead of re-implementing it.
  async hasCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    options: {
      requiresAmountLimitCheck?: boolean;
      amountKobo?: bigint | null;
    } = {},
  ): Promise<{ eligible: boolean; viaDelegationId?: string }> {
    const roleCodes = (
      await this.prisma.userRole.findMany({
        where: { userId },
        select: { roleCode: true },
      })
    ).map((r) => r.roleCode);
    const requiresAmountLimitCheck = options.requiresAmountLimitCheck ?? false;
    const amountKobo = options.amountKobo ?? null;

    const standing = await this.prisma.rolePermission.findFirst({
      where: {
        roleCode: { in: roleCodes },
        functionCode,
        level,
        ...(requiresAmountLimitCheck
          ? amountKobo !== null
            ? {
                OR: [
                  { approvalLimitKobo: null },
                  { approvalLimitKobo: { gte: amountKobo } },
                ],
              }
            : { approvalLimitKobo: null }
          : {}),
      },
    });
    if (standing) return { eligible: true };

    // Invariant 74(b) (CHECK27, v1.2): CONTROLS_DASHBOARD VIEW is ALSO
    // satisfied dynamically by an active Department Head designation --
    // "Enterprise Dashboard access follows department-headship, not a
    // static cadre grant." Queried directly via Prisma (not
    // DepartmentHeadService, which itself depends on this service for its
    // own capability checks -- importing it here would be a circular
    // module dependency) against the CURRENT userId, never a cached role,
    // so a revoked/superseded designation loses access immediately.
    if (functionCode === 'CONTROLS_DASHBOARD' && level === 'VIEW') {
      const employee = await this.prisma.employee.findFirst({ where: { appUserId: userId }, select: { id: true } });
      if (employee) {
        const activeHeadship = await this.prisma.departmentHeadDesignation.findFirst({ where: { employeeId: employee.id, status: 'ACTIVE' } });
        if (activeHeadship) return { eligible: true };
      }
    }

    // Delegation only models APPROVE-type authority (see
    // DelegationOfAuthority's schema comment) — INITIATE/VIEW capabilities
    // are standing-permission only.
    if (level !== 'APPROVE') return { eligible: false };

    const grant = await this.findEligibleGrant(
      userId,
      functionCode,
      requiresAmountLimitCheck,
      amountKobo,
    );
    if (grant) return { eligible: true, viaDelegationId: grant.id };

    return { eligible: false };
  }

  // Mirrors RolePermission's amount logic in WorkflowEngineService exactly:
  // if the step doesn't tier by amount, any active grant qualifies
  // regardless of its own limitKobo; if it does, a null instance amount
  // (e.g. Loss Scenario) requires an uncapped grant, same as a role would.
  // Only ACTIVE grants ever match — a PENDING one (awaiting its own
  // DELEGATION_GRANT approval) is inert by construction.
  async findEligibleGrant(
    delegateUserId: string,
    functionCode: string,
    requiresAmountLimitCheck: boolean,
    instanceAmountKobo: bigint | null,
    at: Date = new Date(),
  ) {
    return this.prisma.delegationOfAuthority.findFirst({
      where: {
        delegateUserId,
        functionCode,
        status: 'ACTIVE',
        effectiveFrom: { lte: at },
        AND: [
          { OR: [{ effectiveTo: null }, { effectiveTo: { gte: at } }] },
          ...(requiresAmountLimitCheck
            ? [
                instanceAmountKobo !== null
                  ? {
                      OR: [
                        { limitKobo: null },
                        { limitKobo: { gte: instanceAmountKobo } },
                      ],
                    }
                  : { limitKobo: null },
              ]
            : []),
        ],
      },
    });
  }

  // Grantor's own ceiling for functionCode: the highest standing
  // RolePermission.approvalLimitKobo across their roles, OR the highest
  // ACTIVE delegation they themselves hold for it — whichever is greater.
  // null = uncapped; 'NONE' = no authority at all.
  private async effectiveAuthority(
    userId: string,
    functionCode: string,
  ): Promise<bigint | null | 'NONE'> {
    const roleCodes = (
      await this.prisma.userRole.findMany({
        where: { userId },
        select: { roleCode: true },
      })
    ).map((r) => r.roleCode);

    const standing = await this.prisma.rolePermission.findMany({
      where: { roleCode: { in: roleCodes }, functionCode, level: 'APPROVE' },
    });
    const standingCeiling = this.maxLimit(
      standing.map((p) => p.approvalLimitKobo),
    );

    const now = new Date();
    const delegated = await this.prisma.delegationOfAuthority.findMany({
      where: {
        delegateUserId: userId,
        functionCode,
        status: 'ACTIVE',
        effectiveFrom: { lte: now },
        OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }],
      },
    });
    const delegatedCeiling = this.maxLimit(delegated.map((d) => d.limitKobo));

    if (standingCeiling === 'NONE' && delegatedCeiling === 'NONE')
      return 'NONE';
    if (standingCeiling === null || delegatedCeiling === null) return null; // either source is uncapped
    if (standingCeiling === 'NONE') return delegatedCeiling;
    if (delegatedCeiling === 'NONE') return standingCeiling;
    return standingCeiling > delegatedCeiling
      ? standingCeiling
      : delegatedCeiling;
  }

  // Highest ceiling across a set of (possibly null = uncapped) limits.
  // 'NONE' means the set was empty (no rows at all, i.e. no authority).
  private maxLimit(limits: (bigint | null)[]): bigint | null | 'NONE' {
    if (limits.length === 0) return 'NONE';
    if (limits.some((l) => l === null)) return null;
    const values = limits as bigint[];
    return values.reduce((max, l) => (l > max ? l : max), values[0]);
  }

  private async denyRequest(input: RequestGrantInput, reason: string) {
    await this.audit.record({
      actorUserId: input.delegatedByUserId,
      action: 'PERMISSION_DENIED',
      entityType: 'delegation_of_authority',
      entityId: input.delegateUserId,
      after: {
        reason,
        functionCode: input.functionCode,
        requestedLimitKobo: input.limitKobo?.toString(),
      },
    });
  }
}
