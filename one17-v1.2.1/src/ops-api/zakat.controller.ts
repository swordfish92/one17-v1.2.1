import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ZakatService } from '../zakat/zakat.service';
import {
  UpdateZakatNisabConfigDto,
  CreateZakatAssessmentDto,
  DeclareZakatScheduleItemDto,
} from './ops-api.types';

// The advisor workspace's Zakat surface (invariant 26). Thin adapter — every
// rule (nisab governance, claim-validation, dual-calendar compute,
// certification gating) lives in ZakatService.
@Controller('zakat')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ZakatController {
  constructor(private readonly zakat: ZakatService) {}

  @Get('nisab-config')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async getNisabConfig() {
    return this.zakat.getNisabConfig();
  }

  @Post('nisab-config')
  @RequiresCapability('ZAKAT_ADVISORY', 'APPROVE')
  async updateNisabConfig(@Body() dto: UpdateZakatNisabConfigDto, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.updateNisabConfig(dto.nisabGoldGrams, BigInt(dto.goldPricePerGramKobo), user.userId);
  }

  @Get('subscriptions')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async listActiveSubscriptions() {
    return this.zakat.listActiveSubscriptions();
  }

  @Post('clients/:investorId/activate')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async activateSubscription(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.activateSubscription(investorId, user.userId);
  }

  @Post('clients/:investorId/deactivate')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async deactivateSubscription(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.deactivateSubscription(investorId, user.userId);
  }

  @Get('clients/:investorId/nisab-status')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async getNisabStatus(@Param('investorId') investorId: string) {
    return this.zakat.isNisabBreached(investorId);
  }

  @Post('clients/:investorId/assessments')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async createAssessment(
    @Param('investorId') investorId: string,
    @Body() dto: CreateZakatAssessmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.zakat.createAssessmentSandbox({
      investorId,
      assessmentDateGregorian: new Date(dto.assessmentDateGregorian),
      assessmentDateHijri: dto.assessmentDateHijri,
      createdByUserId: user.userId,
    });
  }

  @Get('clients/:investorId/assessments')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async listAssessmentsForClient(@Param('investorId') investorId: string) {
    return this.zakat.listAssessmentsForInvestor(investorId);
  }

  @Get('assessments/:runId')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async getAssessmentDetail(@Param('runId') runId: string) {
    return this.zakat.getAssessmentDetailStaff(runId);
  }

  @Post('assessments/:runId/items')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async declareScheduleItem(
    @Param('runId') runId: string,
    @Body() dto: DeclareZakatScheduleItemDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.zakat.declareScheduleItem({
      zakatAssessmentRunId: runId,
      scheduleType: dto.scheduleType,
      description: dto.description,
      amountKobo: BigInt(dto.amountKobo),
      zakatability: dto.zakatability,
      declaredByUserId: user.userId,
    });
  }

  @Post('assessments/:runId/compute')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async computeAssessment(@Param('runId') runId: string) {
    return this.zakat.computeAssessment(runId);
  }

  @Post('assessments/:runId/submit-for-certification')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async submitForCertification(@Param('runId') runId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.submitForCertification(runId, user.userId);
  }

  @Get('certifications/pending')
  @RequiresCapability('ZAKAT_CERTIFICATION', 'VIEW')
  async listPendingCertifications(@CurrentUser() user: AuthenticatedUser) {
    return this.zakat.listPendingCertifications(user.userId);
  }

  // Invariant 70(h)(i): the subscription-REQUEST queue — BD/Wealth
  // Officer/REL_OFF (the same ZAKAT_ADVISORY holders as every other route
  // in this controller) approve a client's portal-submitted request, which
  // activates the subscription and opens the Zakat Computation tab.
  @Get('subscription-requests/pending')
  @RequiresCapability('ZAKAT_ADVISORY', 'VIEW')
  async listPendingSubscriptionRequests(@CurrentUser() user: AuthenticatedUser) {
    return this.zakat.listPendingSubscriptionRequests(user.userId);
  }

  @Post('subscription-requests/:requestId/approve')
  @RequiresCapability('ZAKAT_ADVISORY', 'INITIATE')
  async approveSubscriptionRequest(@Param('requestId') requestId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.approveSubscriptionRequest(requestId, user.userId);
  }

  // Invariant 70(h)(iv): the ONE route in this file gated on
  // ZAKAT_PORTFOLIO_ADVISORY_FEED rather than ZAKAT_ADVISORY — Portfolio
  // seats (CIO/PORT_MGR/PORT_OFF) hold VIEW here and nowhere else in this
  // controller.
  @Get('clients/:investorId/portfolio-advisory-feed')
  @RequiresCapability('ZAKAT_PORTFOLIO_ADVISORY_FEED', 'VIEW')
  async getPortfolioAdvisoryFeed(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.zakat.getPortfolioAdvisoryFeed(investorId, user.userId);
  }
}
