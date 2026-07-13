import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { InvestorService } from '../investor/investor.service';
import { InvestorBankAccountChangeService } from '../investor/investor-bank-account-change.service';
import { InvestorContactAmendmentService } from '../investor/investor-contact-amendment.service';
import { InvestorExitService } from '../investor/investor-exit.service';
import { InvestorMandateAmendmentService } from '../investor/investor-mandate-amendment.service';
import { ClientMessagingService } from '../client-messaging/client-messaging.service';
import {
  OnboardInvestorDto,
  RecordScreeningDto,
  SetAmlRiskRatingDto,
  RecordInvestorRiskAssessmentDto,
  RecordInvestorIc1ReviewDto,
  RecordInvestorRiskReviewDto,
  RecordInvestorMdDecisionDto,
  RecordInvestorIc2ReviewDto,
  SetupMandateDto,
  AssignRelationshipManagerDto,
  SendClientMessageDto,
  RequestBankAccountChangeDto,
  AttachBankAccountChangeEvidenceDto,
  DecideBankAccountChangeDto,
  RequestContactAmendmentDto,
  DecideContactAmendmentDto,
  RequestInvestorExitDto,
  DecideInvestorExitDto,
  RequestMandateAmendmentDto,
  DecideMandateAmendmentDto,
} from './ops-api.types';

// Thin adapter (CLAUDE.md Stack Decisions item 1): every rule this screen
// touches — capability check, screening-before-submission gate, MATCH
// blocking — already lives in InvestorService; this controller only maps
// HTTP <-> that service and the plain read-only lookups the screen needs.
@Controller('investors')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class InvestorsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly investorService: InvestorService,
    private readonly bankAccountChange: InvestorBankAccountChangeService,
    private readonly contactAmendment: InvestorContactAmendmentService,
    private readonly investorExit: InvestorExitService,
    private readonly mandateAmendment: InvestorMandateAmendmentService,
    private readonly messaging: ClientMessagingService,
  ) {}

  @Get()
  @RequiresCapability('INVESTOR_ONBOARDING', 'VIEW')
  async list(@Query('kycStatus') kycStatus?: string) {
    return this.prisma.investor.findMany({
      where: kycStatus ? { kycStatus: kycStatus as any } : undefined,
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: {
        investorId: true,
        fullLegalName: true,
        entityType: true,
        kycStatus: true,
        amlStatus: true,
        fundStatus: true,
        amlRiskRating: true,
        createdAt: true,
      },
    });
  }

  // CHECK5 item 5g-addendum: declared BEFORE the :investorId route below —
  // Nest/Express match GET /investors/case-review against whichever route
  // registers first when both are single-segment paths, so the literal
  // 'case-review' segment must come first or it would be swallowed by
  // :investorId (same reasoning as counterparty.controller.ts's
  // restructure-requests/pending, which avoids the collision instead via an
  // extra path segment). Returns EVERY investor (not just ones with a case
  // already started) — mirrors counterparty's listCounterparties(), which
  // is how a DRAFT-equivalent (no onboardingCase yet) investor becomes
  // visible for Step 2b to begin.
  @Get('case-review')
  @RequiresCapability('INVESTOR_ONBOARDING', 'VIEW')
  async listCaseReview() {
    const investors = await this.prisma.investor.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      include: { onboardingCase: true },
    });
    const workflowIds = investors
      .map((i) => i.onboardingCase?.workflowInstanceId)
      .filter((id): id is string => !!id);
    const instances = workflowIds.length
      ? await this.prisma.workflowInstance.findMany({ where: { id: { in: workflowIds } } })
      : [];
    const statusByInstanceId = new Map(instances.map((i) => [i.id, i.status]));
    return investors.map((i) => ({
      investorId: i.investorId,
      fullLegalName: i.fullLegalName,
      entityType: i.entityType,
      kycStatus: i.kycStatus,
      amlRiskRating: i.amlRiskRating,
      onboardingCase: i.onboardingCase,
      workflowStatus: i.onboardingCase?.workflowInstanceId
        ? (statusByInstanceId.get(i.onboardingCase.workflowInstanceId) ?? null)
        : null,
    }));
  }

  @Get(':investorId')
  @RequiresCapability('INVESTOR_ONBOARDING', 'VIEW')
  async detail(@Param('investorId') investorId: string) {
    return this.prisma.investor.findUniqueOrThrow({
      where: { investorId },
      include: {
        screeningRecords: { orderBy: { screenedAt: 'desc' } },
        kycDocuments: true,
        bankAccounts: true,
      },
    });
  }

  @Post()
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async onboard(@Body() dto: OnboardInvestorDto, @CurrentUser() user: AuthenticatedUser) {
    return this.investorService.onboard({
      ...dto,
      dateOfBirthOrIncorporation: dto.dateOfBirthOrIncorporation
        ? new Date(dto.dateOfBirthOrIncorporation)
        : undefined,
      onboardedByUserId: user.userId,
    });
  }

  @Post(':investorId/screening')
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async recordScreening(
    @Param('investorId') investorId: string,
    @Body() dto: RecordScreeningDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordScreening({
      investorId,
      listsChecked: dto.listsChecked,
      searchTermsUsed: dto.searchTermsUsed,
      result: dto.result,
      screenerUserId: user.userId,
      countersignerUserId: dto.countersignerUserId,
      notes: dto.notes,
    });
  }

  @Post(':investorId/aml-risk-rating')
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async setAmlRiskRating(
    @Param('investorId') investorId: string,
    @Body() dto: SetAmlRiskRatingDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.setAmlRiskRating(investorId, dto.amlRiskRating, user.userId);
  }

  @Post(':investorId/submit-for-kyc-approval')
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async submitForKycApproval(
    @Param('investorId') investorId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.submitForKycApproval(investorId, user.userId);
  }

  // CHECK5 item 5g-addendum: the graduated-onboarding case-review chain
  // (Investor Onboarding Template §2b/3/5/6/7) — mirrors
  // counterparty.controller.ts's review chain exactly. As there, no
  // @RequiresCapability on the 4 review-chain endpoints below: each step
  // requires a DIFFERENT capability (per the INVESTOR_ONBOARDING_CASE_REVIEW
  // ApprovalRule in seed.ts), enforced inside workflow.approveNextStep() —
  // SessionAuthGuard (class-level) still requires a valid staff session.
  @Post(':investorId/risk-assessment')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async recordRiskAssessment(
    @Param('investorId') investorId: string,
    @Body() dto: RecordInvestorRiskAssessmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordComplianceRiskAssessment({ investorId, ...dto, assessedByUserId: user.userId });
  }

  @Post(':investorId/submit-for-review')
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async submitForReview(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.investorService.submitOnboardingCaseForReview(investorId, user.userId);
  }

  @Post('review/:workflowInstanceId/ic1')
  async recordIc1(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: RecordInvestorIc1ReviewDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordIc1Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  @Post('review/:workflowInstanceId/risk')
  async recordRiskReview(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: RecordInvestorRiskReviewDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordRiskReview({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  @Post('review/:workflowInstanceId/md-decision')
  async recordMdDecision(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: RecordInvestorMdDecisionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordMdDecision({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  @Post('review/:workflowInstanceId/ic2')
  async recordIc2(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: RecordInvestorIc2ReviewDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.recordIc2Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  // Invariant 39(a), Tier 1: MANDATE_SETUP admin/approval screen —
  // InvestorService.setupMandate/requestMandateShariahReview/
  // approveMandateShariahReview have existed since SRS §6.1/AMD-01's build
  // -out with zero controller wiring at all.
  @Get(':investorId/mandate')
  @RequiresCapability('MANDATE_SETUP', 'APPROVE')
  async getMandate(@Param('investorId') investorId: string) {
    return this.prisma.investorMandate.findUnique({ where: { investorId } });
  }

  @Post(':investorId/mandate')
  @RequiresCapability('MANDATE_SETUP', 'APPROVE')
  async setupMandate(@Param('investorId') investorId: string, @Body() dto: SetupMandateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.investorService.setupMandate({
      investorId,
      mandateType: dto.mandateType,
      targetReturnRate: dto.targetReturnRate,
      investorBaseRatio: dto.investorBaseRatio,
      mudaribBaseRatio: dto.mudaribBaseRatio,
      restrictedSectors: dto.restrictedSectors,
      restrictedContracts: dto.restrictedContracts,
      directDealInvestmentId: dto.directDealInvestmentId,
      rolloverDefault: dto.rolloverDefault,
      earlyExitWaiver: dto.earlyExitWaiver,
      ssbWaiverResolutionRef: dto.ssbWaiverResolutionRef,
      effectiveDate: new Date(dto.effectiveDate),
      approvedByUserId: user.userId,
    });
  }

  // SRS §6.1 step 6: only RESTRICTED/RESTRICTED_PLUS_DIRECT mandates need
  // this — InvestorService itself decides whether to allow the request.
  // Approval is NOT a route here — it dispatches through the standing
  // Workflow Inbox (INVESTOR_MANDATE_SHARIAH_REVIEW, single SHARIAH_RECORDS
  // step, no structured data needed).
  @Post(':investorId/mandate/request-shariah-review')
  @RequiresCapability('SHARIAH_RECORDS', 'INITIATE')
  async requestMandateShariahReview(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.investorService.requestMandateShariahReview(investorId, user.userId);
  }

  // Invariant 39(d)/35(a): the RM-assignment mechanism for non-WM investors
  // (WM investors already have wm_client_profile.advisorUserId, set at Flow-C
  // admission) — needed to route two-way client<->RM portal messaging.
  @Post(':investorId/relationship-manager')
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async assignRelationshipManager(
    @Param('investorId') investorId: string,
    @Body() dto: AssignRelationshipManagerDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorService.assignRelationshipManager(investorId, dto.relationshipManagerUserId, user.userId);
  }

  // Invariant 39(d)/35(a): staff side of the two-way client<->RM portal
  // message thread — the portal side lives on PortalWmController.
  @Get(':investorId/messages')
  @RequiresCapability('CLIENT_MESSAGING', 'VIEW')
  async listMessages(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.messaging.listThreadForStaff(investorId, user.userId);
  }

  @Post(':investorId/messages')
  @RequiresCapability('CLIENT_MESSAGING', 'INITIATE')
  async sendMessage(@Param('investorId') investorId: string, @Body() dto: SendClientMessageDto, @CurrentUser() user: AuthenticatedUser) {
    return this.messaging.sendFromStaff(investorId, user.userId, dto.body, dto.subject);
  }

  // Invariant 51(a-i) (CHECK12): the fraud-critical bank-account change
  // flow. No @RequiresCapability on submit/decide -- submitChange checks
  // "only the original requester" itself, and decideChangeRequest's two
  // steps each require a DIFFERENT capability enforced inside
  // WorkflowEngineService (same no-class-level-decorator reasoning as the
  // graduated onboarding review chain above).
  @Get(':investorId/bank-account-changes')
  @RequiresCapability('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW')
  async listBankAccountChanges(@Param('investorId') investorId: string) {
    return this.bankAccountChange.listForInvestor(investorId);
  }

  @Get(':investorId/bank-account-changes/:requestId')
  @RequiresCapability('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW')
  async getBankAccountChangeTrail(@Param('requestId') requestId: string) {
    return this.bankAccountChange.getTrail(requestId);
  }

  @Post(':investorId/bank-account-changes')
  @RequiresCapability('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE')
  async requestBankAccountChange(
    @Param('investorId') investorId: string,
    @Body() dto: RequestBankAccountChangeDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.bankAccountChange.requestChange({
      investorId,
      proposedBankName: dto.proposedBankName,
      proposedAccountNumber: dto.proposedAccountNumber,
      proposedAccountName: dto.proposedAccountName,
      proposedAccountType: dto.proposedAccountType,
      proposedCurrency: dto.proposedCurrency,
      requestedByUserId: user.userId,
    });
  }

  @Post(':investorId/bank-account-changes/:requestId/evidence')
  @RequiresCapability('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'INITIATE')
  async attachBankAccountChangeEvidence(
    @Param('requestId') requestId: string,
    @Body() dto: AttachBankAccountChangeEvidenceDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.bankAccountChange.attachEvidence(requestId, user.userId, dto);
  }

  @Get(':investorId/bank-account-changes/:requestId/checklist')
  @RequiresCapability('INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', 'VIEW')
  async getBankAccountChangeChecklist(@Param('requestId') requestId: string) {
    return this.bankAccountChange.getEvidenceChecklist(requestId);
  }

  @Post(':investorId/bank-account-changes/:requestId/submit')
  async submitBankAccountChange(@Param('requestId') requestId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.bankAccountChange.submitChange(requestId, user.userId);
  }

  @Post(':investorId/bank-account-changes/:requestId/decide')
  async decideBankAccountChange(
    @Param('requestId') requestId: string,
    @Body() dto: DecideBankAccountChangeDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.bankAccountChange.decideChangeRequest(requestId, user.userId, dto.decision, dto.notes);
  }

  // Invariant 51(a-ii) (CHECK12): "governed post-onboarding updates
  // (address, phone, email), Compliance acknowledgment, same shape as
  // EMPLOYEE_PERSONAL_RECORD_CHANGE." No @RequiresCapability on decide --
  // INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL is enforced inside
  // WorkflowEngineService.approveNextStep itself.
  @Get(':investorId/contact-amendments')
  @RequiresCapability('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'VIEW')
  async listContactAmendments(@Param('investorId') investorId: string) {
    return this.contactAmendment.listForInvestor(investorId);
  }

  @Get(':investorId/contact-amendments/:requestId')
  @RequiresCapability('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'VIEW')
  async getContactAmendmentTrail(@Param('requestId') requestId: string) {
    return this.contactAmendment.getTrail(requestId);
  }

  @Post(':investorId/contact-amendments')
  @RequiresCapability('INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', 'INITIATE')
  async requestContactAmendment(
    @Param('investorId') investorId: string,
    @Body() dto: RequestContactAmendmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.contactAmendment.requestAmendment({
      investorId,
      proposedContactEmail: dto.proposedContactEmail,
      proposedContactPhone: dto.proposedContactPhone,
      proposedRegisteredAddress: dto.proposedRegisteredAddress,
      proposedTaxIdentificationNumber: dto.proposedTaxIdentificationNumber,
      proposedSourceOfFunds: dto.proposedSourceOfFunds,
      proposedOccupationOrBusinessNature: dto.proposedOccupationOrBusinessNature,
      requestedByUserId: user.userId,
    });
  }

  @Post(':investorId/contact-amendments/:requestId/decide')
  async decideContactAmendment(
    @Param('requestId') requestId: string,
    @Body() dto: DecideContactAmendmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const request = await this.prisma.investorContactAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
    return this.contactAmendment.decideAmendment(request.workflowInstanceId!, user.userId, dto.decision, dto.notes);
  }

  // Invariant 51(b-v) (CHECK13): investor exit/closure -- MATURITY_TRANSITION
  // or FINAL_EXIT, gated on zero open holdings for the latter. No
  // @RequiresCapability on decide -- INVESTOR_EXIT_APPROVAL is enforced
  // inside WorkflowEngineService.approveNextStep itself, same shape as
  // contact-amendment decide above.
  @Get(':investorId/exit-requests')
  @RequiresCapability('INVESTOR_EXIT_INITIATION', 'VIEW')
  async listExitRequests(@Param('investorId') investorId: string) {
    return this.investorExit.listForInvestor(investorId);
  }

  @Get(':investorId/exit-requests/:requestId')
  @RequiresCapability('INVESTOR_EXIT_INITIATION', 'VIEW')
  async getExitRequestTrail(@Param('requestId') requestId: string) {
    return this.investorExit.getTrail(requestId);
  }

  @Post(':investorId/exit-requests')
  @RequiresCapability('INVESTOR_EXIT_INITIATION', 'INITIATE')
  async requestExit(
    @Param('investorId') investorId: string,
    @Body() dto: RequestInvestorExitDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.investorExit.requestExit({ investorId, exitType: dto.exitType, requestedByUserId: user.userId });
  }

  @Post(':investorId/exit-requests/:requestId/decide')
  async decideExit(
    @Param('requestId') requestId: string,
    @Body() dto: DecideInvestorExitDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const request = await this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: requestId } });
    return this.investorExit.decideExit(request.workflowInstanceId!, user.userId, dto.decision, dto.notes);
  }

  // Invariant 51(b-vii) (CHECK13): clears the periodic-review due state the
  // KYC_PERIODIC_REVIEW_SWEEP scheduled job raises Tasks against.
  @Post(':investorId/record-periodic-review')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async recordPeriodicReview(@Param('investorId') investorId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.investorService.recordPeriodicReview(investorId, user.userId);
  }

  // Invariant 51(c) Tier-3 (CHECK13): investor mandate amendment -- BD
  // proposes, Portfolio Management approves. No @RequiresCapability on
  // decide -- INVESTOR_MANDATE_AMENDMENT_APPROVAL is enforced inside
  // WorkflowEngineService.approveNextStep itself.
  @Get(':investorId/mandate-amendments')
  @RequiresCapability('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'VIEW')
  async listMandateAmendments(@Param('investorId') investorId: string) {
    return this.mandateAmendment.listForInvestor(investorId);
  }

  @Get(':investorId/mandate-amendments/:requestId')
  @RequiresCapability('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'VIEW')
  async getMandateAmendmentTrail(@Param('requestId') requestId: string) {
    return this.mandateAmendment.getTrail(requestId);
  }

  @Post(':investorId/mandate-amendments')
  @RequiresCapability('INVESTOR_MANDATE_AMENDMENT_INITIATION', 'INITIATE')
  async requestMandateAmendment(
    @Param('investorId') investorId: string,
    @Body() dto: RequestMandateAmendmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.mandateAmendment.requestAmendment({
      investorId,
      proposedTargetReturnRate: dto.proposedTargetReturnRate,
      proposedRolloverDefault: dto.proposedRolloverDefault,
      proposedEarlyExitWaiver: dto.proposedEarlyExitWaiver,
      requestedByUserId: user.userId,
    });
  }

  @Post(':investorId/mandate-amendments/:requestId/decide')
  async decideMandateAmendment(
    @Param('requestId') requestId: string,
    @Body() dto: DecideMandateAmendmentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    const request = await this.prisma.investorMandateAmendmentRequest.findUniqueOrThrow({ where: { id: requestId } });
    return this.mandateAmendment.decideAmendment(request.workflowInstanceId!, user.userId, dto.decision, dto.notes);
  }
}
