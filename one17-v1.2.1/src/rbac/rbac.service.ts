import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AuthService } from '../auth/auth.service';
import { SodConflictError } from './rbac.types';

interface AssignRoleInput {
  userId: string;
  roleCode: string;
  assignedById?: string;
}

interface CreateStaffUserInput {
  email: string;
  displayName: string;
  initialPassword?: string;
  createdByUserId: string;
}

// Build Plan step 3: RBAC + segregation of duties. Enforces forbidden role
// *combinations* (a user holding two conflicting roles at once) via data on
// Role (isExclusive, excludesAnyApprover) and RoleConflict — never a
// hard-coded role-name string, per CLAUDE.md's reconciliation ruling. It
// does NOT enforce "no user initiates and approves the SAME transaction
// instance" (SRS §3.3) — that's WorkflowEngineService's job (Build Plan
// step 4), since it needs to know who initiated a specific instance, not
// just which roles someone holds.
@Injectable()
export class RbacService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly workflow: WorkflowEngineService,
    private readonly authService: AuthService,
  ) {}

  // Invariant 43(c) (CHECK10): "create staff user" was on the CEO's own
  // findability complaint, and the reason it couldn't be found is that it
  // didn't exist -- RbacController only ever listed existing AppUser rows
  // and proposed ROLE assignment for one. bootstrap-admin.ts's own comment
  // already promised "every subsequent staff account is meant to be added
  // through the live RBAC_CONFIG screen"; this closes that gap. No
  // maker-checker workflow here (unlike role assignment below) -- creating
  // a bare account with zero roles grants no capability by itself; the
  // actual power grant is the SEPARATE proposeAssignRole/approveAssignRole
  // step, which already has maker-checker. Layering it this way avoids a
  // redundant second approval gate on the same action.
  async createStaffUser({ email, displayName, initialPassword, createdByUserId }: CreateStaffUserInput) {
    const existing = await this.prisma.appUser.findUnique({ where: { email } });
    if (existing) {
      throw new Error(`A user with email ${email} already exists.`);
    }

    const created = await this.prisma.appUser.create({ data: { email, displayName } });
    if (initialPassword) {
      await this.authService.setPassword(created.id, initialPassword);
    }

    await this.audit.record({
      actorUserId: createdByUserId,
      action: 'CREATE',
      entityType: 'app_user',
      entityId: created.id,
      after: { email, displayName },
    });

    return { id: created.id, email: created.email, displayName: created.displayName, status: created.status };
  }

  // AMD-09 §4b: "RBAC changes ... are themselves maker-checker workflows
  // ... SUPER_ADMIN cannot approve its own RBAC change." Composed the same
  // three-step way as every other governed-workflow action in this codebase
  // (DelegationService.requestGrant, ReportingService.
  // proposeFrameworkMapVersion): create the WorkflowInstance, then
  // approveAssignRole actually performs the mutation (assignRole, with its
  // existing SoD checks) only once a second SUPER_ADMIN approves.
  async proposeAssignRole(input: AssignRoleInput & { assignedById: string }) {
    return this.workflow.initiate({
      workflowTypeCode: 'USER_ROLE_ASSIGNMENT',
      entityType: 'user_role_proposal',
      entityId: `${input.userId}:${input.roleCode}`,
      initiatedByUserId: input.assignedById,
      scenario: 'STANDARD',
    });
  }

  async approveAssignRole(
    workflowInstanceId: string,
    approverUserId: string,
    target: { userId: string; roleCode: string },
  ) {
    const updated = await this.workflow.approveNextStep(
      workflowInstanceId,
      approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;
    return this.assignRole({
      userId: target.userId,
      roleCode: target.roleCode,
      assignedById: approverUserId,
    });
  }

  async assignRole({ userId, roleCode, assignedById }: AssignRoleInput) {
    const existing = await this.prisma.userRole.findMany({
      where: { userId },
      select: { roleCode: true },
    });
    const existingCodes = existing.map((r) => r.roleCode);

    if (existingCodes.includes(roleCode)) {
      throw new Error(`User already holds role ${roleCode}`);
    }

    const conflictReason = await this.findConflictReason(
      roleCode,
      existingCodes,
    );
    if (conflictReason) {
      await this.audit.record({
        actorUserId: assignedById,
        action: 'PERMISSION_DENIED',
        entityType: 'user_role',
        entityId: userId,
        after: {
          attemptedRoleCode: roleCode,
          existingCodes,
          reason: conflictReason,
        },
      });
      throw new SodConflictError(conflictReason, userId, roleCode);
    }

    const created = await this.prisma.$transaction(async (tx) => {
      return tx.userRole.create({
        data: { userId, roleCode, assignedById },
      });
    });

    await this.audit.record({
      actorUserId: assignedById,
      action: 'CREATE',
      entityType: 'user_role',
      entityId: created.id,
      after: { userId, roleCode },
    });

    return created;
  }

  // Returns a human-readable reason if assigning roleCode to a user already
  // holding existingCodes would violate a segregation-of-duty rule, else
  // null. Every check queries Role/RolePermission/RoleConflict data — none
  // compares against a literal role-code string.
  private async findConflictReason(
    roleCode: string,
    existingCodes: string[],
  ): Promise<string | null> {
    if (existingCodes.length === 0) return null;

    const roles = await this.prisma.role.findMany({
      where: { code: { in: [roleCode, ...existingCodes] } },
    });
    const byCode = new Map(roles.map((r) => [r.code, r]));
    const incoming = byCode.get(roleCode);
    const existingRoles = existingCodes.map((c) => byCode.get(c)!);

    // Exclusive roles (e.g. SUPER_ADMIN — SRS §3.3: "Super Admin cannot
    // approve financial transactions ... separated at database level")
    // cannot be combined with anything, in either direction.
    if (incoming?.isExclusive || existingRoles.some((r) => r.isExclusive)) {
      const exclusiveRole = incoming?.isExclusive
        ? incoming
        : existingRoles.find((r) => r.isExclusive)!;
      return `${exclusiveRole.code} cannot be combined with any other role (exclusive role).`;
    }

    // Explicit named pairs (data — none seeded for the current SRS MVP set).
    const explicitConflict = await this.prisma.roleConflict.findFirst({
      where: {
        OR: [
          { roleACode: roleCode, roleBCode: { in: existingCodes } },
          { roleBCode: roleCode, roleACode: { in: existingCodes } },
        ],
      },
    });
    if (explicitConflict) return explicitConflict.reason;

    // Roles flagged excludesAnyApprover (unused by the SRS MVP seed, kept
    // for when OPS-style roles return — Roles & Workflows §3 rule 1)
    // cannot combine with any role holding an APPROVE permission anywhere.
    const incomingExcludesApprovers = incoming?.excludesAnyApprover ?? false;
    const existingHasExcluder = existingRoles.some(
      (r) => r.excludesAnyApprover,
    );
    if (incomingExcludesApprovers || existingHasExcluder) {
      const checkAgainst = incomingExcludesApprovers
        ? existingCodes
        : [roleCode];
      const approverAmong = await this.prisma.rolePermission.findFirst({
        where: { roleCode: { in: checkAgainst }, level: 'APPROVE' },
      });
      if (approverAmong) {
        const excluderRole = incomingExcludesApprovers
          ? incoming!
          : existingRoles.find((r) => r.excludesAnyApprover)!;
        return `${excluderRole.code} cannot combine with a role holding approval rights on transactions.`;
      }
    }

    return null;
  }
}
