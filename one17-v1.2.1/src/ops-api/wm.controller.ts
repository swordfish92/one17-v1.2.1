import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { WmService } from '../wm/wm.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import {
  OnboardWmClientDto,
  DeclareClientAssetDto,
  SetShariahScreenDto,
  SetAllocationPolicyDto,
  SetRiskProfileDto,
  SetGrowthPlanDto,
  CreateAdvisoryRecordDto,
  RunSandboxRiskAssessmentDto,
  ChargeAdvisoryFeeDto,
  UpdateWmFxRateDto,
} from './ops-api.types';

// The advisor workspace (spec §7.5 STAFF surface). Thin adapter — every
// rule (claim-validation maker≠checker, prime boundary, tier config) lives
// in WmService; this controller composes ONE cross-cutting action (Flow-C
// onboard + auto-provision the portal login) that spec §6a requires happen
// together, and otherwise just maps HTTP <-> WmService.
@Controller('wm')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class WmController {
  constructor(
    private readonly wm: WmService,
    private readonly portalAuth: PortalAuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('asset-classes')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async listAssetClasses() {
    return this.prisma.assetClassRegistry.findMany({ where: { isActive: true }, orderBy: { code: 'asc' } });
  }

  @Get('stress-scenarios')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async listStressScenarios() {
    return this.prisma.wmStressScenarioConfig.findMany({ where: { status: 'ACTIVE' }, orderBy: { scenarioCode: 'asc' } });
  }

  @Get('clients')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async listClients() {
    return this.wm.listClients();
  }

  // Invariant 36(g): the prospecting list Flow-C admission draws from, plus
  // each prospect's truncated pre-WM pyramid position.
  @Get('prospects')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async listPreWmProspects() {
    return this.wm.listPreWmProspects();
  }

  @Get('prospects/:investorId/pyramid')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async preWmPyramid(@Param('investorId') investorId: string) {
    return this.wm.getPreWmPyramidData(investorId);
  }

  @Get('clients/:investorId/dashboard')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async clientDashboard(@Param('investorId') investorId: string) {
    return this.wm.getClientDashboard(investorId);
  }

  // Flow C completion auto-provisions the portal login in the SAME action
  // (spec §6a) — composed here since it's the one place an ops action must
  // reach into the separate portal-auth realm to CREATE an account, never
  // to validate a session.
  @Post('clients/:investorId/onboard')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async onboardClient(
    @Param('investorId') investorId: string,
    @Body() dto: OnboardWmClientDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const profile = await this.wm.onboardWmClient({ investorId, advisorUserId: dto.advisorUserId, onboardedByUserId: user.userId });
    const portal = await this.portalAuth.provisionForInvestor(profile.investorId);
    return { profile, portal };
  }

  @Post('clients/:investorId/recompute-tier')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async recomputeTier(@Param('investorId') investorId: string) {
    return this.wm.recomputeTier(investorId);
  }

  @Post('clients/:investorId/assets')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async declareAsset(
    @Param('investorId') investorId: string,
    @Body() dto: DeclareClientAssetDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.declareClientAsset({
      investorId,
      assetClassCode: dto.assetClassCode,
      description: dto.description,
      quantity: dto.quantity,
      declaredValueKobo: BigInt(dto.declaredValueKobo),
      valuationDate: new Date(dto.valuationDate),
      custodyFlag: dto.custodyFlag,
      evidenceDocumentId: dto.evidenceDocumentId,
      declaredByUserId: user.userId,
      maturityDate: dto.maturityDate ? new Date(dto.maturityDate) : undefined,
      tenorMonths: dto.tenorMonths,
      scheduledProfitTakingDates: dto.scheduledProfitTakingDates,
      targetReturnPct: dto.targetReturnPct,
    });
  }

  @Get('clients/:investorId/nwcs-pyramid')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async nwcsPyramid(@Param('investorId') investorId: string) {
    return this.wm.getNwcsPyramidData(investorId);
  }

  @Get('assets/:assetId/holding-detail/:investorId')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async holdingDetailStaff(@Param('assetId') assetId: string, @Param('investorId') investorId: string) {
    return this.wm.getHoldingDetail(assetId, investorId);
  }

  @Get('fx-config')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async getFxConfig() {
    return this.wm.getFxConfig();
  }

  @Post('fx-config')
  @RequiresCapability('WM_ADVISORY', 'APPROVE')
  async updateFxRate(@Body() dto: UpdateWmFxRateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.wm.updateFxRate(dto.nairaPerUsd, user.userId);
  }

  @Get('holding-action-requests/pending')
  @RequiresCapability('WM_ADVISORY', 'VIEW')
  async listPendingHoldingActionRequests(@CurrentUser() user: AuthenticatedUser) {
    return this.wm.listPendingHoldingActionRequests(user.userId);
  }

  @Post('holding-action-requests/:id/action')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async actionHoldingRequest(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.wm.actionHoldingRequest(id, user.userId);
  }

  @Post('assets/:assetId/shariah-screen')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async setShariahScreen(
    @Param('assetId') assetId: string,
    @Body() dto: SetShariahScreenDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.setShariahScreen(assetId, dto.tag, user.userId);
  }

  @Post('clients/:investorId/allocation-policy')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async setAllocationPolicy(
    @Param('investorId') investorId: string,
    @Body() dto: SetAllocationPolicyDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.setAllocationPolicy({ investorId, targetAllocations: dto.targetAllocations, riskBand: dto.riskBand, createdByUserId: user.userId });
  }

  @Post('clients/:investorId/risk-profile')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async setRiskProfile(
    @Param('investorId') investorId: string,
    @Body() dto: SetRiskProfileDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.setRiskProfile({ investorId, questionnaireResponses: dto.questionnaireResponses, riskBand: dto.riskBand, createdByUserId: user.userId });
  }

  @Post('clients/:investorId/growth-plan')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async setGrowthPlan(
    @Param('investorId') investorId: string,
    @Body() dto: SetGrowthPlanDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.setGrowthPlan({
      investorId,
      horizon: dto.horizon,
      milestones: dto.milestones,
      targetGlidePath: dto.targetGlidePath,
      reviewSchedule: dto.reviewSchedule,
      createdByUserId: user.userId,
    });
  }

  @Post('clients/:investorId/advisory-records')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async createAdvisoryRecord(
    @Param('investorId') investorId: string,
    @Body() dto: CreateAdvisoryRecordDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.createAdvisoryRecord({ investorId, recommendation: dto.recommendation, rationale: dto.rationale, riskNotes: dto.riskNotes, shariahNote: dto.shariahNote, advisorUserId: user.userId });
  }

  @Post('clients/:investorId/risk-assessments')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async runSandboxRiskAssessment(
    @Param('investorId') investorId: string,
    @Body() dto: RunSandboxRiskAssessmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.runSandboxRiskAssessment({ investorId, scenarioCode: dto.scenarioCode, ranByUserId: user.userId });
  }

  @Post('risk-assessments/:runId/publish')
  @RequiresCapability('WM_ADVISORY', 'INITIATE')
  async publishRiskAssessment(@Param('runId') runId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.wm.publishRiskAssessment(runId, user.userId);
  }

  @Post('clients/:investorId/advisory-fee')
  @RequiresCapability('JOURNAL_ENTRIES', 'INITIATE')
  async chargeAdvisoryFee(
    @Param('investorId') investorId: string,
    @Body() dto: ChargeAdvisoryFeeDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.wm.chargeAdvisoryFee({
      investorId,
      ledgerEntityCode: dto.ledgerEntityCode,
      amountKobo: BigInt(dto.amountKobo),
      drAccountCodeOverride: dto.drAccountCodeOverride,
      crAccountCodeOverride: dto.crAccountCodeOverride,
      entryDate: new Date(dto.entryDate),
      actorUserId: user.userId,
    });
  }
}
