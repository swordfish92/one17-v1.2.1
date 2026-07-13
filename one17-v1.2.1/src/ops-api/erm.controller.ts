import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { RiskService } from '../risk/risk.service';
import { StressEngineService } from '../stress-engine/stress-engine.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import {
  ConfigureBureauProviderDto,
  UpdateBureauPolicyDto,
  ProposeRiskMatrixVersionDto,
  UpdateRiskCategoryThresholdsDto,
  ApproveRiskMatrixVersionDto,
  ApproveRiskRegisterEntryDto,
  RunStressTestDto,
} from './ops-api.types';

// CHECK5 item 5j: ERM ops-UI screen — "exposure vs limit, stress tests,
// KRIs" per CLAUDE.md's screen inventory. KRI readings/escalations and
// stress test runs have no LIST method anywhere (only runDailyBatch()/
// run*Stress() write paths existed before this pass, per the CEO/Board
// dashboard aggregates being the only consumer) — this controller reads
// them directly via PrismaService (thin adapter, no business logic; the
// RAG computation itself already happened when the reading was written).
// Risk matrix/register reuse RiskService's existing read methods.
@Controller('erm')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ErmController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly risk: RiskService,
    private readonly stressEngine: StressEngineService,
    private readonly bureauGateway: BureauGatewayService,
  ) {}

  @Get('kri-readings')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'VIEW')
  async listKriReadings(@Query('kriCode') kriCode?: string) {
    return this.prisma.kriReading.findMany({
      where: kriCode ? { kriCode } : undefined,
      orderBy: { readingDate: 'desc' },
      take: 200,
      include: { definition: { select: { name: true, category: true, direction: true, computeStatus: true } } },
    });
  }

  @Get('kri-escalations')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'VIEW')
  async listKriEscalations() {
    return this.prisma.kriEscalation.findMany({ orderBy: { escalatedAt: 'desc' }, take: 100 });
  }

  @Get('stress-runs')
  @RequiresCapability('STRESS_TESTING', 'VIEW')
  async listStressRuns(@Query('modelType') modelType?: string) {
    return this.prisma.stressTestRun.findMany({
      where: modelType ? { modelType: modelType as any } : undefined,
      orderBy: { ranAt: 'desc' },
      take: 100,
    });
  }

  @Get('risk-matrix')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'VIEW')
  async getRiskMatrix() {
    return this.risk.getActiveMatrix();
  }

  @Get('risk-register')
  @RequiresCapability('RISK_REGISTER', 'VIEW')
  async getRiskRegister(@Query('status') status?: 'DRAFT' | 'ACTIVE') {
    return this.risk.getRiskRegister(status);
  }

  // Invariant 37(g) completeness audit: RiskService.proposeMatrixVersion/
  // updateCategoryThresholds/approveMatrixVersion and approveRiskRegisterEntry
  // were fully built and capability-gated since AMD-12's own pass, but no
  // controller ever called any of them — a whole engine invisible end-to-
  // end despite being fully implemented in the service layer (defect
  // 15-19's own pattern). No LIST method exists for DRAFT/PENDING matrix
  // versions either — read directly via PrismaService, same "thin read,
  // no business logic" precedent already used above for kri-readings/
  // stress-runs in this same controller.
  @Get('risk-matrix/pending')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'VIEW')
  async listPendingRiskMatrixVersions() {
    return this.prisma.riskAppetiteMatrixVersion.findMany({
      where: { status: 'DRAFT' },
      include: { categories: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { version: 'desc' },
    });
  }

  @Post('risk-matrix/propose')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'INITIATE')
  async proposeRiskMatrixVersion(@Body() dto: ProposeRiskMatrixVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.risk.proposeMatrixVersion({ proposedByUserId: user.userId, cloneFromVersionId: dto.cloneFromVersionId });
  }

  @Post('risk-matrix/categories/:categoryId/thresholds')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'INITIATE')
  async updateRiskCategoryThresholds(@Param('categoryId') categoryId: string, @Body() dto: UpdateRiskCategoryThresholdsDto, @CurrentUser() user: AuthenticatedUser) {
    const category = await this.prisma.riskAppetiteCategory.findUniqueOrThrow({ where: { id: categoryId } });
    return this.risk.updateCategoryThresholds({
      matrixVersionId: category.matrixVersionId,
      sortOrder: category.sortOrder,
      greenThreshold: dto.greenThreshold,
      amberThreshold: dto.amberThreshold,
      redThreshold: dto.redThreshold,
      actorUserId: user.userId,
    });
  }

  // A dedicated route, NOT the generic Workflow Inbox: approveMatrixVersion
  // requires a mandatory boardResolutionRef (AMD-12 rule 3) the generic
  // approve(workflowInstanceId, approverUserId, notes?) shape can't carry —
  // same "structured data" reasoning as STRATEGY_LAYER_APPROVAL.
  @Post('risk-matrix/:workflowInstanceId/approve')
  @RequiresCapability('RISK_APPETITE_MATRIX', 'APPROVE')
  async approveRiskMatrixVersion(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: ApproveRiskMatrixVersionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.risk.approveMatrixVersion({ workflowInstanceId, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
  }

  // Direct capability-gated mutation — approveRiskRegisterEntry does NOT
  // go through WorkflowEngineService (confirmed: all 25 entries are
  // seed-only DRAFT rows; this is the sole runtime write path, flipping
  // DRAFT->ACTIVE), so no workflow dispatch entry is needed for it.
  @Post('risk-register/:id/approve')
  @RequiresCapability('RISK_REGISTER', 'APPROVE')
  async approveRiskRegisterEntry(@Param('id') id: string, @Body() dto: ApproveRiskRegisterEntryDto, @CurrentUser() user: AuthenticatedUser) {
    return this.risk.approveRiskRegisterEntry({ id, approverUserId: user.userId, boardResolutionRef: dto.boardResolutionRef });
  }

  @Get('stress-scenarios')
  @RequiresCapability('STRESS_TESTING', 'VIEW')
  async listStressScenarios(@Query('modelType') modelType?: string) {
    return this.prisma.stressScenarioConfig.findMany({
      where: { status: 'ACTIVE', modelType: modelType ? (modelType as any) : undefined },
      orderBy: [{ modelType: 'asc' }, { scenarioCode: 'asc' }],
    });
  }

  // One route dispatching to whichever of the six StressEngineService
  // run methods matches modelType — mirrors SchedulerService's own
  // STRESS_RUNNERS map (the same six models, the same "each model has its
  // own runner" shape), just reached from a live button instead of only
  // the monthly scheduled sweep.
  @Post('stress/run')
  @RequiresCapability('STRESS_TESTING', 'INITIATE')
  async runStressTest(@Body() dto: RunStressTestDto, @CurrentUser() user: AuthenticatedUser) {
    const input = { ledgerEntityCode: dto.ledgerEntityCode, runMode: dto.runMode, ranByUserId: user.userId };
    switch (dto.modelType) {
      case 'LIQUIDITY':
        return this.stressEngine.runLiquidityStress(dto.scenarioCode!, input);
      case 'CAPITAL_ADEQUACY':
        return this.stressEngine.runCapitalAdequacyStress(dto.scenarioCode!, input);
      case 'REVENUE_SENSITIVITY':
        return this.stressEngine.runRevenueSensitivityStress(dto.scenarioCode!, input);
      case 'COUNTERPARTY_DEFAULT':
        return this.stressEngine.runCounterpartyDefaultStress(input);
      case 'PORTFOLIO_SHOCK':
        return this.stressEngine.runPortfolioShockStress(input);
      case 'REVERSE_STRESS':
        return this.stressEngine.runReverseStress(input);
    }
  }

  @Post('stress/:runId/request-baseline')
  @RequiresCapability('STRESS_TESTING', 'INITIATE')
  async requestStressBaselinePublication(@Param('runId') runId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.stressEngine.requestBaselinePublication(runId, user.userId);
  }

  // Invariant 36(c): "bureau search FREQUENCY/INTERVAL limits + provider
  // settings live under the RISK MANAGEMENT tool (Risk owns bureau
  // policy)." BureauGatewayService's own capability check (RISK_DEPT
  // INITIATE on BUREAU_GATEWAY_POLICY) is the real gate; the guard here
  // only answers "may this user touch the ERM surface at all" — same
  // layering as every other controller in this codebase.
  @Get('bureau-providers')
  @RequiresCapability('BUREAU_GATEWAY_POLICY', 'VIEW')
  async listBureauProviders() {
    return this.bureauGateway.listProviders();
  }

  @Post('bureau-providers')
  @RequiresCapability('BUREAU_GATEWAY_POLICY', 'INITIATE')
  async configureBureauProvider(@Body() dto: ConfigureBureauProviderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.bureauGateway.configureProvider({ ...dto, costPerPullKobo: BigInt(dto.costPerPullKobo) }, user.userId);
  }

  @Get('bureau-policy')
  @RequiresCapability('BUREAU_GATEWAY_POLICY', 'VIEW')
  async getBureauPolicy() {
    return this.bureauGateway.getPolicy();
  }

  @Post('bureau-policy')
  @RequiresCapability('BUREAU_GATEWAY_POLICY', 'INITIATE')
  async updateBureauPolicy(@Body() dto: UpdateBureauPolicyDto, @CurrentUser() user: AuthenticatedUser) {
    return this.bureauGateway.updatePolicy(dto, user.userId);
  }

  // CHECK16 62(e): standalone register, platform-wide across every
  // counterparty — "who, whom, provider, when." The route-level guard here
  // only answers "may this user touch the ERM surface"; BureauGatewayService.
  // listAllPullHistory's own BUREAU_GATEWAY_POLICY VIEW check is the real
  // gate, same layering as every route on this controller.
  @Get('bureau-pull-register')
  @RequiresCapability('BUREAU_GATEWAY_POLICY', 'VIEW')
  async listBureauPullRegister(@CurrentUser() user: AuthenticatedUser) {
    return this.bureauGateway.listAllPullHistory(user.userId);
  }
}
