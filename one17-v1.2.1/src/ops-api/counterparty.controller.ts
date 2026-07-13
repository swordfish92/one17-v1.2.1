import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { PaymentReminderService } from '../counterparty/payment-reminder.service';
import { CounterpartyWriteOffService } from '../counterparty/counterparty-write-off.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { BureauGatewayService } from '../bureau-gateway/bureau-gateway.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  OnboardCounterpartyDto,
  RecordCounterpartyRiskAssessmentDto,
  RecordCounterpartyIc1ReviewDto,
  RecordCounterpartyRiskReviewDto,
  RecordCounterpartyMdDecisionDto,
  RecordCounterpartyIc2ReviewDto,
  DecideCounterpartyRestructureDto,
  ToggleRestructuringFeatureDto,
  CreateRepaymentObligationDto,
  AssignFileManagingOfficerDto,
  RejectDispatchDto,
  UpdateLadderRungDto,
  DraftInvestmentMemoDto,
  CommitteeApproveInvestmentMemoDto,
  ProposeInvestmentMemoThresholdDto,
  RequestCounterpartyWriteOffDto,
  DecideCounterpartyWriteOffDto,
} from './ops-api.types';

// Invariant 27(b): the staff-facing HTTP surface for the 7-step Investee
// Onboarding review chain — previously service+smoke-tested only, with no
// ops-UI path (discovered while building 28(e), which needs a real
// COMPLETE_APPROVED counterparty to demonstrate portal auto-provisioning).
// Also carries invariant 28(e)'s staff-side restructure-request decision +
// per-counterparty feature toggle. Portal auto-provisioning is triggered
// HERE (not inside CounterpartyService) — same layering as
// wm.controller.ts's provisionForInvestor() call, keeping PortalAuthModule a
// dependency of the ops-api layer, not of domain services.
@Controller('counterparties')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class CounterpartyController {
  constructor(
    private readonly counterparty: CounterpartyService,
    private readonly portalAuth: PortalAuthService,
    private readonly paymentReminders: PaymentReminderService,
    private readonly bureauGateway: BureauGatewayService,
    private readonly writeOff: CounterpartyWriteOffService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async list() {
    return this.counterparty.listCounterparties();
  }

  @Get(':id')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async get(@Param('id') id: string) {
    return this.counterparty.getCounterparty(id);
  }

  @Post()
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async onboard(@Body() dto: OnboardCounterpartyDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.onboard({
      ...dto,
      amountSoughtKobo: BigInt(dto.amountSoughtKobo),
      shariahCertExpiry: dto.shariahCertExpiry ? new Date(dto.shariahCertExpiry) : undefined,
      onboardedByUserId: user.userId,
    });
  }

  @Post(':id/risk-assessment')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async recordRiskAssessment(@Param('id') id: string, @Body() dto: RecordCounterpartyRiskAssessmentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordComplianceRiskAssessment({ counterpartyId: id, ...dto, assessedByUserId: user.userId });
  }

  @Post(':id/submit-for-review')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async submitForReview(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.submitOnboardingCaseForReview(id, user.userId);
  }

  // No @RequiresCapability on the 4 review-chain endpoints below: each
  // workflow STEP requires a DIFFERENT capability (ONBOARDING_IC_REVIEW /
  // ONBOARDING_RISK_REVIEW / ONBOARDING_MD_APPROVAL, see seed.ts's
  // COUNTERPARTY_ONBOARDING_CASE_REVIEW approval rules) — the real
  // eligibility + maker!=checker check happens INSIDE
  // workflow.approveNextStep(), called by these CounterpartyService
  // methods; a single controller-level capability gate here would be wrong
  // for at least 3 of the 4 steps. SessionAuthGuard (class-level) still
  // requires a valid staff session.
  @Post('review/:workflowInstanceId/ic1')
  async recordIc1(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: RecordCounterpartyIc1ReviewDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordIc1Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  @Post('review/:workflowInstanceId/risk')
  async recordRiskReview(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: RecordCounterpartyRiskReviewDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordRiskReview({
      workflowInstanceId,
      ...dto,
      approvedExposureLimitKobo: dto.approvedExposureLimitKobo !== undefined ? BigInt(dto.approvedExposureLimitKobo) : undefined,
      approverUserId: user.userId,
    });
  }

  @Post('review/:workflowInstanceId/md-decision')
  async recordMdDecision(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: RecordCounterpartyMdDecisionDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordMdDecision({ workflowInstanceId, ...dto, approverUserId: user.userId });
  }

  @Post('review/:workflowInstanceId/ic2')
  async recordIc2(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: RecordCounterpartyIc2ReviewDto, @CurrentUser() user: AuthenticatedUser) {
    const result = await this.counterparty.recordIc2Review({ workflowInstanceId, ...dto, approverUserId: user.userId });
    // Invariant 28(e): auto-provision the portal login the moment
    // onboarding reaches COMPLETE_APPROVED (mirrors Flow-C's
    // provisionForInvestor at KYC completion).
    if ((result as any).status === 'APPROVED') {
      const onboardingCase = await this.counterparty.getCounterpartyByWorkflowInstance(workflowInstanceId);
      if (onboardingCase) await this.portalAuth.provisionForCounterparty(onboardingCase.counterpartyId);
    }
    return result;
  }

  @Get('restructure-requests/pending')
  @RequiresCapability('COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE')
  async listPendingRestructureRequests() {
    return this.counterparty.listPendingRestructureRequests();
  }

  @Post('restructure-requests/:id/decide')
  @RequiresCapability('COUNTERPARTY_RESTRUCTURE_REQUEST', 'APPROVE')
  async decideRestructureRequest(@Param('id') id: string, @Body() dto: DecideCounterpartyRestructureDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.decideRestructureRequest({ requestId: id, ...dto, actorUserId: user.userId });
  }

  @Post(':id/restructuring-feature')
  @RequiresCapability('COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE')
  async toggleRestructuringFeature(@Param('id') id: string, @Body() dto: ToggleRestructuringFeatureDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.toggleRestructuringFeature(id, dto.enabled, user.userId);
  }

  // Invariant 25(4): "exceeding requires the exception workflow, not an
  // override" — opens the COUNTERPARTY_RESTRUCTURE_EXCEPTION workflow the
  // real approval then happens through the generic Workflow Inbox
  // (approveRestructureException is dispatched from WorkflowInboxService,
  // not a dedicated endpoint here).
  @Post('restructure-requests/:id/initiate-exception')
  @RequiresCapability('COUNTERPARTY_RESTRUCTURE_REQUEST', 'INITIATE')
  async initiateRestructureException(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.initiateRestructureException(id, user.userId);
  }

  // Invariant 25(4): the due-date-bearing installments the payment-
  // reminder ladder (Check-6) sweeps daily.
  @Get('repayment-obligations/pending')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async listPendingRepaymentObligations() {
    return this.paymentReminders.listPendingObligations();
  }

  @Get(':id/repayment-obligations')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async listRepaymentObligations(@Param('id') id: string) {
    return this.paymentReminders.listObligations(id);
  }

  @Post(':id/repayment-obligations')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async createRepaymentObligation(@Param('id') id: string, @Body() dto: CreateRepaymentObligationDto, @CurrentUser() user: AuthenticatedUser) {
    return this.paymentReminders.createObligation({
      counterpartyId: id,
      facilityApplicationId: dto.facilityApplicationId,
      dueDate: new Date(dto.dueDate),
      amountKobo: BigInt(dto.amountKobo),
      createdByUserId: user.userId,
    });
  }

  @Post('repayment-obligations/:id/mark-paid')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async markRepaymentObligationPaid(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.paymentReminders.markPaid(id, user.userId);
  }

  // Invariant 28(e)(ii)/(iii): staff side of the facility-application flow.
  @Get('facility-applications/pending')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async listPendingFacilityApplications() {
    return this.counterparty.listFacilityApplicationsForStaff();
  }

  // Invariant 27(b)/36(e): Legal's VIEW-only surface — every facility
  // application regardless of status.
  @Get('facility-applications/all')
  @RequiresCapability('FACILITY_APPLICATION_LEGAL_VIEW', 'VIEW')
  async listAllFacilityApplicationsForLegal(@CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.listFacilityApplicationsForLegalView(user.userId);
  }

  @Post('facility-applications/:id/review-and-submit')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async reviewAndSubmitFacilityApplication(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.reviewAndSubmitFacilityApplication(id, user.userId);
  }

  // Invariant 36(f): the PO's investment memo — drafted at the facility
  // application as the point of request, submitted for CIO approval, and
  // the gate reviewAndSubmitFacilityApplication (above) now enforces.
  @Post('facility-applications/:id/investment-memos')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async draftInvestmentMemo(@Param('id') id: string, @Body() dto: DraftInvestmentMemoDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.draftInvestmentMemo(
      { facilityApplicationId: id, ...dto, amountKobo: BigInt(dto.amountKobo) },
      user.userId,
    );
  }

  @Get('facility-applications/:id/investment-memos')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async listInvestmentMemos(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.listInvestmentMemos(id, user.userId);
  }

  // Invariant 44(e) (CHECK10): "visible to the reviewing officers" — staff
  // side of the required-document checklist (documents themselves are
  // already reachable via the generic GET /documents?entityType=
  // counterparty_facility_application&entityId=:id, per DocumentController's
  // own deliberately-open listByEntity).
  @Get('facility-applications/:id/checklist')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'VIEW')
  async getFacilityApplicationChecklist(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.getFacilityApplicationChecklistForStaff(id, user.userId);
  }

  @Post('investment-memos/:id/submit-for-cio-approval')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async submitInvestmentMemoForCioApproval(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.submitInvestmentMemoForCioApproval(id, user.userId);
  }

  // Invariant 46(c): Investment Committee's own approval action --
  // deliberately NOT reachable via the generic Workflow Inbox (see
  // CounterpartyService.approveInvestmentMemo's own guard); requires a
  // structured icResolutionRef, same pattern as strategy-layer's
  // boardResolutionRef.
  @Post('investment-memos/committee-approve/:workflowInstanceId')
  @RequiresCapability('INVESTMENT_COMMITTEE_APPROVAL', 'APPROVE')
  async approveInvestmentMemoAsCommittee(
    @Param('workflowInstanceId') workflowInstanceId: string,
    @Body() dto: CommitteeApproveInvestmentMemoDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.counterparty.approveInvestmentMemoAsCommittee(workflowInstanceId, user.userId, dto.icResolutionRef);
  }

  // Invariant 46(g)(i): the DoA threshold's own governance -- CIO proposes,
  // MD_CEO approves (via the generic Workflow Inbox, single-step, no
  // structured data beyond the amount itself).
  @Post('investment-memo-threshold')
  @RequiresCapability('INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'INITIATE')
  async proposeInvestmentMemoThreshold(@Body() dto: ProposeInvestmentMemoThresholdDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.proposeInvestmentMemoThreshold(BigInt(dto.thresholdKobo), user.userId);
  }

  @Get('investment-memo-threshold')
  @RequiresCapability('INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', 'VIEW')
  async getActiveInvestmentMemoThreshold(@CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.getActiveInvestmentMemoThreshold(user.userId);
  }

  @Post('facility-applications/:id/disburse')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async markFacilityApplicationDisbursed(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.markFacilityApplicationDisbursed(id, user.userId);
  }
  // Invariant 36(d): Fund Accounting's own targeted-return posting lives on
  // fund-accounting.controller.ts (POST /fund-accounting/facility-terms/:id)
  // — one canonical endpoint, not duplicated here.

  // Invariant 36(a): "file-ownership as data" — assigns the officer whose
  // profile hub system-generated call/bureau tasks route to. Nested under a
  // 2-segment path (not a bare 1-segment one) so it can never collide with
  // the earlier-declared @Get(':id') route.
  @Get('officers/file-managing')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async listPortfolioOfficers(@CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.listPortfolioOfficers(user.userId);
  }

  @Post(':id/file-managing-officer')
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async assignFileManagingOfficer(@Param('id') id: string, @Body() dto: AssignFileManagingOfficerDto, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.assignFileManagingOfficer(id, dto.officerUserId, user.userId);
  }

  // Invariant 36(a): the officer-validation dispatch queue — client-facing
  // reminder channels generate here and wait for an officer decision
  // before any ClientCommunication is ever written.
  @Get('payment-reminders/dispatch-queue')
  @RequiresCapability('PAYMENT_REMINDER_DISPATCH', 'APPROVE')
  async listPendingDispatchQueue() {
    return this.paymentReminders.listPendingDispatchQueue();
  }

  @Post('payment-reminders/dispatch-queue/:id/approve')
  @RequiresCapability('PAYMENT_REMINDER_DISPATCH', 'APPROVE')
  async approveDispatch(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.paymentReminders.approveDispatch(id, user.userId);
  }

  @Post('payment-reminders/dispatch-queue/:id/reject')
  @RequiresCapability('PAYMENT_REMINDER_DISPATCH', 'APPROVE')
  async rejectDispatch(@Param('id') id: string, @Body() dto: RejectDispatchDto, @CurrentUser() user: AuthenticatedUser) {
    return this.paymentReminders.rejectDispatch(id, user.userId, dto.reason);
  }

  // Invariant 36(b): the authorized-level ladder-settings screen. The
  // CURRENT row IS the effective version (updatedAt); audit_trail carries
  // the change history (see schema comment on
  // PaymentReminderLadderConfig.updatedAt).
  @Get('payment-reminders/ladder-config')
  @RequiresCapability('PAYMENT_REMINDER_LADDER_SETTINGS', 'INITIATE')
  async listLadderConfig() {
    return this.paymentReminders.listLadderConfig();
  }

  @Post('payment-reminders/ladder-config/:dayOffset')
  @RequiresCapability('PAYMENT_REMINDER_LADDER_SETTINGS', 'INITIATE')
  async updateLadderRung(@Param('dayOffset') dayOffset: string, @Body() dto: UpdateLadderRungDto, @CurrentUser() user: AuthenticatedUser) {
    return this.paymentReminders.updateLadderRung(Number(dayOffset), dto, user.userId);
  }

  // Invariant 36(c): "officer-triggered assessment via BUTTON only." Result
  // renders on BOTH the counterparty portal (portal-counterparty.controller.ts)
  // and this staff view.
  @Post(':id/bureau-pull')
  @RequiresCapability('BUREAU_GATEWAY_PULL', 'INITIATE')
  async triggerBureauPull(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.bureauGateway.triggerPull(id, user.userId);
  }

  @Get(':id/bureau-pulls')
  @RequiresCapability('BUREAU_GATEWAY_PULL', 'VIEW')
  async listBureauPulls(@Param('id') id: string) {
    return this.bureauGateway.listPullHistory(id);
  }

  // Invariant 51(b-vi) (CHECK13): counterparty write-off -- Portfolio
  // proposes, FIN_ADMIN approves and fires the IMPAIRMENT_CHARGE event
  // journal. No @RequiresCapability on decide -- COUNTERPARTY_WRITE_OFF_
  // APPROVAL is enforced inside WorkflowEngineService.approveNextStep.
  @Get(':id/write-off-requests')
  @RequiresCapability('COUNTERPARTY_WRITE_OFF_INITIATION', 'VIEW')
  async listWriteOffRequests(@Param('id') id: string) {
    return this.writeOff.listForCounterparty(id);
  }

  @Get(':id/write-off-requests/:requestId')
  @RequiresCapability('COUNTERPARTY_WRITE_OFF_INITIATION', 'VIEW')
  async getWriteOffRequestTrail(@Param('requestId') requestId: string) {
    return this.writeOff.getTrail(requestId);
  }

  @Post(':id/write-off-requests')
  @RequiresCapability('COUNTERPARTY_WRITE_OFF_INITIATION', 'INITIATE')
  async requestWriteOff(@Param('id') id: string, @Body() dto: RequestCounterpartyWriteOffDto, @CurrentUser() user: AuthenticatedUser) {
    return this.writeOff.requestWriteOff({
      counterpartyId: id,
      writeOffAmountKobo: BigInt(dto.writeOffAmountKobo),
      ledgerEntityCode: dto.ledgerEntityCode,
      investmentAccountCode: dto.investmentAccountCode,
      reason: dto.reason,
      requestedByUserId: user.userId,
    });
  }

  @Post(':id/write-off-requests/:requestId/decide')
  async decideWriteOff(@Param('requestId') requestId: string, @Body() dto: DecideCounterpartyWriteOffDto, @CurrentUser() user: AuthenticatedUser) {
    const request = await this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: requestId } });
    return this.writeOff.decideWriteOff(request.workflowInstanceId!, user.userId, dto.decision, dto.notes);
  }

  // Invariant 51(b-vii) (CHECK13): clears the periodic-review due state the
  // KYC_PERIODIC_REVIEW_SWEEP scheduled job raises Tasks against.
  @Post(':id/record-periodic-review')
  @RequiresCapability('SCREENING_PERFORM', 'INITIATE')
  async recordPeriodicReview(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.counterparty.recordPeriodicReview(id, user.userId);
  }
}
