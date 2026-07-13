import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { LetterheadService } from '../letterhead/letterhead.service';
import { ProposeLetterheadVersionDto, ApproveLetterheadVersionDto } from './ops-api.types';

// Invariant 52(a) (CHECK12): single governed letterhead asset. One
// capability throughout the chain (CS proposes, MD_CEO approves) so a
// dedicated route is used, not the generic Workflow Inbox -- same
// reasoning as StrategyLayerController's pillar/objective approve routes.
@Controller('letterhead')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class LetterheadController {
  constructor(private readonly letterhead: LetterheadService) {}

  @Get('active')
  @RequiresCapability('LETTERHEAD_TEMPLATE_MANAGEMENT', 'VIEW')
  async getActive() {
    return this.letterhead.getActiveContent();
  }

  @Get('versions')
  @RequiresCapability('LETTERHEAD_TEMPLATE_MANAGEMENT', 'VIEW')
  async listVersions() {
    return this.letterhead.listVersions();
  }

  @Get('versions/pending')
  @RequiresCapability('LETTERHEAD_TEMPLATE_MANAGEMENT', 'APPROVE')
  async listPending() {
    return this.letterhead.listPending();
  }

  @Post('versions')
  @RequiresCapability('LETTERHEAD_TEMPLATE_MANAGEMENT', 'INITIATE')
  async proposeVersion(@Body() dto: ProposeLetterheadVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letterhead.proposeVersion({ ...dto, proposedByUserId: user.userId });
  }

  @Post('versions/:workflowInstanceId/approve')
  @RequiresCapability('LETTERHEAD_TEMPLATE_MANAGEMENT', 'APPROVE')
  async approveVersion(@Param('workflowInstanceId') workflowInstanceId: string, @Body() _dto: ApproveLetterheadVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letterhead.approveVersion({ workflowInstanceId, approverUserId: user.userId });
  }
}
