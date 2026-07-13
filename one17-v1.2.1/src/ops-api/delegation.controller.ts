import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { RequestDelegationGrantDto, RevokeDelegationGrantDto } from './ops-api.types';

// Invariant 39(a), Tier 1: DELEGATION_GRANT_INITIATION/APPROVAL admin
// screens. DelegationService.requestGrant/activate/revoke have existed
// since the 9a build-out (self-delegation rejection, board-instrument
// override, immediate unilateral revocation) with zero controller wiring
// — this is the admin screen for CREATING a grant, distinct from the
// hasCapability() runtime check every other service already calls.
// Approval is NOT a route here — WorkflowEngineService.approveNextStep()
// already special-cases DELEGATION_GRANT internally (calls
// delegation.activate() itself on APPROVED), so the standing Workflow
// Inbox needs no dispatch entry at all; a plain approveNextStep() call
// already does the right thing.
@Controller('delegations')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class DelegationController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  @Get()
  async list() {
    return this.prisma.delegationOfAuthority.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      include: {
        delegate: { select: { displayName: true, email: true } },
        delegatedBy: { select: { displayName: true, email: true } },
      },
    });
  }

  @Get('functions')
  @RequiresCapability('DELEGATION_GRANT_INITIATION', 'INITIATE')
  async listFunctions() {
    return this.prisma.platformFunction.findMany({ orderBy: { code: 'asc' } });
  }

  @Get('users')
  @RequiresCapability('DELEGATION_GRANT_INITIATION', 'INITIATE')
  async listUsers() {
    return this.prisma.appUser.findMany({
      where: { status: 'ACTIVE' },
      select: { id: true, displayName: true, email: true },
      orderBy: { displayName: 'asc' },
    });
  }

  @Post()
  @RequiresCapability('DELEGATION_GRANT_INITIATION', 'INITIATE')
  async requestGrant(@Body() dto: RequestDelegationGrantDto, @CurrentUser() user: AuthenticatedUser) {
    const grant = await this.delegation.requestGrant({
      functionCode: dto.functionCode,
      delegateUserId: dto.delegateUserId,
      delegatedByUserId: user.userId,
      limitKobo: dto.limitKobo !== undefined ? BigInt(dto.limitKobo) : undefined,
      effectiveFrom: dto.effectiveFrom ? new Date(dto.effectiveFrom) : undefined,
      effectiveTo: dto.effectiveTo ? new Date(dto.effectiveTo) : undefined,
      reason: dto.reason,
      boardInstrumentRef: dto.boardInstrumentRef,
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'DELEGATION_GRANT',
        entityType: 'delegation_of_authority',
        entityId: grant.id,
        initiatedByUserId: user.userId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: user.userId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'delegation_of_authority',
        entityId: grant.id,
        after: { workflowTypeCode: 'DELEGATION_GRANT', reason: (err as Error).message },
      });
      await this.delegation.discardPendingGrant(grant.id);
      throw err;
    }
    await this.delegation.attachWorkflowInstance(grant.id, instance.id);
    return { grant, workflowInstance: instance };
  }

  @Post(':id/revoke')
  @RequiresCapability('DELEGATION_GRANT_INITIATION', 'INITIATE')
  async revoke(@Param('id') id: string, @Body() dto: RevokeDelegationGrantDto, @CurrentUser() user: AuthenticatedUser) {
    return this.delegation.revoke(id, user.userId, dto.reason);
  }
}
