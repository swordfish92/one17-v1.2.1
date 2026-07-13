import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { RbacService } from '../rbac/rbac.service';
import { UserDeactivationService } from '../rbac/user-deactivation.service';
import { ProposeAssignRoleDto, CreateStaffUserDto, DeactivateUserDto } from './ops-api.types';

// Invariant 39(a), Tier 1: RBAC_CONFIG governed assignment screen —
// RbacService.proposeAssignRole/approveAssignRole have existed since the
// AMD-09 §4b build-out with zero controller wiring; role assignment has
// only ever happened via seed/direct DB. Approval is NOT a route here —
// USER_ROLE_ASSIGNMENT dispatches through the standing Workflow Inbox
// (WorkflowInboxService parses the target userId:roleCode back out of
// entityId, since approveAssignRole needs that structured target).
@Controller('rbac')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class RbacController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly rbac: RbacService,
    private readonly userDeactivation: UserDeactivationService,
  ) {}

  @Get('roles')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async listRoles() {
    return this.prisma.role.findMany({ orderBy: { code: 'asc' } });
  }

  // Invariant 51(a-iv) (CHECK12): shows ALL users (not just ACTIVE) now
  // that the screen also needs to display/toggle status -- was
  // ACTIVE-only when this endpoint existed only to populate the "assign a
  // role" picker.
  @Get('users')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async listUsers() {
    return this.prisma.appUser.findMany({
      select: { id: true, displayName: true, email: true, status: true },
      orderBy: { displayName: 'asc' },
    });
  }

  // Invariant 51(a-iv): "user login deactivation (immediate, capability-
  // gated, audited) + delegation early revocation -- same-day kill
  // switches for resignation/dismissal/compromise." Reuses RBAC_CONFIG
  // (already the admin-user-management capability, see createStaffUser
  // above) rather than inventing a new one -- CLAUDE.md names no specific
  // capability for this item, only "capability-gated."
  @Post('users/:id/deactivate')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async deactivateUser(@Param('id') id: string, @Body() dto: DeactivateUserDto, @CurrentUser() user: AuthenticatedUser) {
    return this.userDeactivation.deactivateUser(id, user.userId, dto.reason);
  }

  @Post('users/:id/reactivate')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async reactivateUser(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.userDeactivation.reactivateUser(id, user.userId);
  }

  @Get('user-roles')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async listUserRoles(@Query('userId') userId: string) {
    return this.prisma.userRole.findMany({ where: { userId }, orderBy: { roleCode: 'asc' } });
  }

  @Get('proposals')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async listProposals() {
    return this.prisma.workflowInstance.findMany({
      where: { workflowTypeCode: 'USER_ROLE_ASSIGNMENT' },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  @Post('propose-assignment')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async proposeAssignment(@Body() dto: ProposeAssignRoleDto, @CurrentUser() user: AuthenticatedUser) {
    return this.rbac.proposeAssignRole({ userId: dto.userId, roleCode: dto.roleCode, assignedById: user.userId });
  }

  // Invariant 43(c): "Staff & Users" create-account action — see
  // RbacService.createStaffUser for why this has no separate approval step.
  @Post('users')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async createStaffUser(@Body() dto: CreateStaffUserDto, @CurrentUser() user: AuthenticatedUser) {
    return this.rbac.createStaffUser({
      email: dto.email,
      displayName: dto.displayName,
      initialPassword: dto.initialPassword,
      createdByUserId: user.userId,
    });
  }

  // Invariant 43(c): "Approvals Setup" — the "approval-workflow admin"
  // findability gap. READ-only by design: ApprovalRule/ApprovalRuleStep
  // CRUD stays seed/migration-authored, same standing MVP ruling as
  // Role/PlatformFunction/RolePermission above (approval chains are
  // structural governance config, not a live-editable setting) — this
  // screen exists so a first-time admin can SEE the chain, not change it.
  @Get('approval-rules')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async listApprovalRules() {
    // Invariant 54(e)(v): ACTIVE chain versions only — once a future
    // Approval Chain Editor exists, this read-only viewer must never show a
    // DRAFT-in-progress or SUPERSEDED chain as if it were the live one.
    return this.prisma.workflowType.findMany({
      orderBy: { code: 'asc' },
      include: {
        approvalRules: {
          where: { chainVersion: { status: 'ACTIVE' } },
          orderBy: { workflowTypeCode: 'asc' },
          include: { steps: { orderBy: { stepOrder: 'asc' } } },
        },
      },
    });
  }

  // Invariant 54(b): the consolidated Access Control page's RBAC section
  // needs a "capability matrix viewer" — no live DB-backed endpoint existed
  // before this (the generated Controls Register is a static docs/ file).
  // Minimal read-only shape: every RolePermission row with its role +
  // function names resolved, so the ops-UI can pivot it into a matrix
  // client-side without a bespoke aggregation query per view.
  @Get('capability-matrix')
  @RequiresCapability('RBAC_CONFIG', 'INITIATE')
  async getCapabilityMatrix() {
    const [grants, roles, functions] = await Promise.all([
      this.prisma.rolePermission.findMany({
        select: { roleCode: true, functionCode: true, level: true, approvalLimitKobo: true },
      }),
      this.prisma.role.findMany({ orderBy: { code: 'asc' }, select: { code: true, name: true, isReadOnly: true } }),
      this.prisma.platformFunction.findMany({ orderBy: { code: 'asc' }, select: { code: true, description: true } }),
    ]);
    return { roles, functions, grants };
  }
}
