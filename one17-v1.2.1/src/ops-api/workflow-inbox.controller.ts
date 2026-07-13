import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { WorkflowInboxService } from './workflow-inbox.service';
import { WorkflowDecisionDto } from './ops-api.types';

// No @RequiresCapability here deliberately: which capability an approval
// requires is DATA-dependent (the pending step's required_function_code
// varies per workflow_type_code/step, and amount-tiering applies too) —
// exactly the case CLAUDE.md's guard ruling carves out ("amount-tiered and
// maker!=checker decisions stay in WorkflowEngineService"). SessionAuthGuard
// (session-only) is the edge check; the real eligibility check happens
// inside WorkflowEngineService.resolveApproverEligibility, same as it
// always has for the smoke-tested services.
@Controller('workflow')
@UseGuards(SessionAuthGuard)
export class WorkflowInboxController {
  constructor(private readonly inboxService: WorkflowInboxService) {}

  @Get('inbox')
  async inbox(@CurrentUser() user: AuthenticatedUser) {
    const items = await this.inboxService.inbox(user.userId);
    return items.map(({ instance, pendingStep, viaDelegationId }) => ({
      workflowInstanceId: instance.id,
      workflowTypeCode: instance.workflowTypeCode,
      entityType: instance.entityType,
      entityId: instance.entityId,
      amountKobo: instance.amountKobo?.toString() ?? null,
      initiatedByUserId: instance.initiatedByUserId,
      createdAt: instance.createdAt,
      pendingStep: { stepOrder: pendingStep.stepOrder, requiredFunctionCode: pendingStep.requiredFunctionCode },
      viaDelegationId: viaDelegationId ?? null,
    }));
  }

  @Post(':workflowInstanceId/approve')
  async approve(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: WorkflowDecisionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.inboxService.approve(workflowInstanceId, user.userId, dto.notes);
  }

  @Post(':workflowInstanceId/reject')
  async reject(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: WorkflowDecisionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.inboxService.reject(workflowInstanceId, user.userId, dto.notes);
  }
}
