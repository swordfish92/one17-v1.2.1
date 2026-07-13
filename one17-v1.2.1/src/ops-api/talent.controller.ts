import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { TalentService } from '../talent/talent.service';
import { CreateWelfareSchemeDto, CreateRewardTypeDto, RecommendTalentDto } from './ops-api.types';

// Invariant 37(e), task #153: Talent Management + Reward & Welfare
// spec-lite. Thin adapter — recommendation approval is NOT a dedicated
// route here; it has no side effect beyond what TalentService.
// approveRecommendation already owns via the workflowInstanceId unique
// constraint, so it goes through the standing Workflow Inbox
// (TALENT_RECOMMENDATION_APPROVAL dispatch), same precedent as PMS's
// scoring-chain/scorecard-override approvals.
@Controller('talent')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class TalentController {
  constructor(private readonly talent: TalentService) {}

  @Get('welfare-schemes')
  @RequiresCapability('TALENT_MANAGEMENT', 'VIEW')
  async listWelfareSchemes() {
    return this.talent.listWelfareSchemes();
  }

  @Post('welfare-schemes')
  @RequiresCapability('TALENT_MANAGEMENT', 'INITIATE')
  async createWelfareScheme(@Body() dto: CreateWelfareSchemeDto, @CurrentUser() user: AuthenticatedUser) {
    return this.talent.createWelfareScheme({ ...dto, createdByUserId: user.userId });
  }

  @Get('reward-types')
  @RequiresCapability('TALENT_MANAGEMENT', 'VIEW')
  async listRewardTypes() {
    return this.talent.listRewardTypes();
  }

  @Post('reward-types')
  @RequiresCapability('TALENT_MANAGEMENT', 'INITIATE')
  async createRewardType(@Body() dto: CreateRewardTypeDto, @CurrentUser() user: AuthenticatedUser) {
    return this.talent.createRewardType({ ...dto, createdByUserId: user.userId });
  }

  @Get('recommendations')
  @RequiresCapability('TALENT_MANAGEMENT', 'VIEW')
  async listRecommendations() {
    return this.talent.listRecommendations();
  }

  @Post('recommendations')
  @RequiresCapability('TALENT_MANAGEMENT', 'INITIATE')
  async recommendTalent(@Body() dto: RecommendTalentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.talent.recommendTalent({ ...dto, recommendedByUserId: user.userId });
  }
}
