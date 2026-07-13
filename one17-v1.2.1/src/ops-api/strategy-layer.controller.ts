import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { StrategyLayerService } from '../strategy-layer/strategy-layer.service';
import {
  ProposeStrategyStatementDto,
  ApproveStrategyStatementDto,
  UpdatePillarGovernanceDto,
  UpdateObjectiveGovernanceDto,
  PublishStrategyDto,
  AddStatementTypeConfigDto,
  ProposePillarDto,
  ApprovePillarDto,
  ProposeObjectiveDto,
  ApproveObjectiveDto,
  MapKraToObjectiveDto,
} from './ops-api.types';

// Invariant 28(c). The approve endpoint is deliberately NOT dispatched
// through the generic Workflow Inbox — it needs a structured
// boardResolutionRef the inbox's approve(notes?) shape doesn't carry, same
// reasoning as the investor/counterparty onboarding case-review steps.
@Controller('strategy')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class StrategyLayerController {
  constructor(private readonly strategyLayer: StrategyLayerService) {}

  @Get('active')
  async getActive() {
    return this.strategyLayer.getActiveStrategy();
  }

  // Invariant 19: every screen/form drives its statement-type choices from
  // this live config read, never a hardcoded list.
  @Get('statement-types')
  async listStatementTypeConfigs() {
    return this.strategyLayer.listStatementTypeConfigs();
  }

  @Post('statement-types')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async addStatementTypeConfig(@Body() dto: AddStatementTypeConfigDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.addStatementTypeConfig({ ...dto, actorUserId: user.userId });
  }

  @Post('statements')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async proposeStatement(@Body() dto: ProposeStrategyStatementDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.proposeStatement({ ...dto, proposedByUserId: user.userId });
  }

  @Get('statements/pending')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async listPendingStatements() {
    return this.strategyLayer.listPendingStatements();
  }

  @Post('statements/:workflowInstanceId/approve')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async approveStatement(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: ApproveStrategyStatementDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.strategyLayer.approveStatement({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
  }

  @Post('pillars/:code/governance')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async updatePillarGovernance(@Param('code') code: string, @Body() dto: UpdatePillarGovernanceDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.updatePillarGovernance({ pillarCode: code, ...dto, actorUserId: user.userId });
  }

  @Post('objectives/:code/governance')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async updateObjectiveGovernance(@Param('code') code: string, @Body() dto: UpdateObjectiveGovernanceDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.updateObjectiveGovernance({ objectiveCode: code, ...dto, actorUserId: user.userId });
  }

  // Invariant 51(c2) (CHECK12): governed pillar/objective CREATION -- the
  // gap the two governance-text endpoints above never closed. Same
  // "dedicated route, not the generic Workflow Inbox" reasoning as
  // approveStatement, for the same mandatory boardResolutionRef.
  @Post('pillars')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async proposePillar(@Body() dto: ProposePillarDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.proposePillar({ ...dto, proposedByUserId: user.userId });
  }

  @Get('pillars/pending')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async listPendingPillars() {
    return this.strategyLayer.listPendingPillars();
  }

  @Post('pillars/:workflowInstanceId/approve')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async approvePillar(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: ApprovePillarDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.approvePillar({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
  }

  @Post('objectives')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async proposeObjective(@Body() dto: ProposeObjectiveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.proposeObjective({ ...dto, proposedByUserId: user.userId });
  }

  @Get('objectives/pending')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async listPendingObjectives() {
    return this.strategyLayer.listPendingObjectives();
  }

  @Post('objectives/:workflowInstanceId/approve')
  @RequiresCapability('STRATEGY_LAYER', 'APPROVE')
  async approveObjective(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: ApproveObjectiveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.approveObjective({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
  }

  // Invariant 51(c2): KRA<->objective mapping -- direct capability-gated
  // write, no workflow (pure config linkage, see the service method's
  // comment for why).
  @Get('kra-objective-map')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async listKraObjectiveMap() {
    return this.strategyLayer.listKraObjectiveMap();
  }

  @Post('kra-objective-map')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async mapKraToObjective(@Body() dto: MapKraToObjectiveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.mapKraToObjective({ ...dto, actorUserId: user.userId });
  }

  @Post('kra-objective-map/:kraCode/:objectiveCode/remove')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async unmapKraFromObjective(@Param('kraCode') kraCode: string, @Param('objectiveCode') objectiveCode: string, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.unmapKraFromObjective(kraCode, objectiveCode, user.userId);
  }

  @Post('publish')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async publish(@Body() dto: PublishStrategyDto, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.publish({ summary: dto.summary, publishedByUserId: user.userId });
  }

  @Post('acknowledge/:publicationId')
  async acknowledge(@Param('publicationId') publicationId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.strategyLayer.acknowledge(publicationId, user.userId);
  }

  @Get('acknowledgment-status')
  @RequiresCapability('STRATEGY_LAYER', 'INITIATE')
  async getAcknowledgmentStatus() {
    return this.strategyLayer.getAcknowledgmentStatus();
  }
}
