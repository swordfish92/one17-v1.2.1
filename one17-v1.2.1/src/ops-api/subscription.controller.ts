import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { SubscriptionService } from '../subscription/subscription.service';
import { SubscriptionServiceError } from '../subscription/subscription.types';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ApproveSubscriptionRequestDto, ConfirmDepositAndSetTargetDto, InitiateSubscriptionRequestDto, WorkflowDecisionDto } from './ops-api.types';

// Invariant 49(g)(i) (CHECK11): the Subscription/Redemption Register.
// Originally read-only-only, with every state-changing action dispatched
// through the generic Workflow Inbox. CHECK16 62(m) adds the one exception
// that inbox can never safely handle: SUBSCRIPTION_APPROVAL needs
// journalInitiatorUserId (and, for a third-party payer, payerBankAccountId/
// thirdPartyPayer) that the inbox's generic {notes?} shape cannot capture --
// WorkflowInboxService.approve() refuses this workflow_type_code outright
// and points here. REDEMPTION_APPROVAL still needs no dedicated screen
// (approveRedemption has no required extra fields) and stays inbox-only.
@Controller('subscription-requests')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class SubscriptionController {
  constructor(
    private readonly subscriptions: SubscriptionService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  @Get()
  @RequiresCapability('CAPITAL_PLACEMENT', 'VIEW')
  async list(
    @Query('productCode') productCode?: string,
    @Query('investorId') investorId?: string,
    @Query('requestType') requestType?: 'SUBSCRIPTION' | 'REDEMPTION',
    @Query('status') status?: 'PENDING' | 'APPROVED' | 'REJECTED',
  ) {
    return this.subscriptions.listRequests({ productCode, investorId, requestType, status });
  }

  @Get(':id')
  @RequiresCapability('CAPITAL_PLACEMENT', 'VIEW')
  async get(@Param('id') id: string) {
    const request = await this.subscriptions.getRequest(id);
    const trail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
    return { request, trail };
  }

  // Invariant 70(c) (CHECK24): the "New Investment / Top Up" staff-side
  // twin of the portal's Invest/Top Up button (PortalWmController.
  // subscribeToOffer) -- same governed door (SubscriptionService.
  // initiateSubscription), just called with an EXPLICIT investorId (the
  // investor record the staff member is acting on) rather than "the
  // caller's own session." The staff actor's own CAPITAL_PLACEMENT
  // INITIATE capability (PORT_OFF/FIN_ADMIN, already seeded) is what
  // workflow.initiate() checks -- no new RBAC grant needed. This route
  // previously did not exist: SubscriptionController was read/approve/
  // reject/confirm-target only (see this controller's own header comment)
  // with subscription-request CREATION reachable exclusively via
  // PaymentGatewayService's webhook-triggered promoteInflow.
  @Post()
  @RequiresCapability('CAPITAL_PLACEMENT', 'INITIATE')
  async initiate(@Body() dto: InitiateSubscriptionRequestDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.subscriptions.initiateSubscription({
        investorId: dto.investorId,
        productCode: dto.productCode,
        amountKobo: BigInt(dto.amountKobo),
        effectiveDate: dto.effectiveDate ? new Date(dto.effectiveDate) : new Date(),
        initiatedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // CHECK16 62(h): the Fund Accountant's "confirm deposit + set target
  // return / maturity" step, POOL and MANDATE classes only.
  @Post(':id/confirm-target')
  @RequiresCapability('SUBSCRIPTION_TARGET_CONFIRMATION', 'INITIATE')
  async confirmTarget(@Param('id') id: string, @Body() dto: ConfirmDepositAndSetTargetDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.subscriptions.confirmDepositAndSetTarget({
        subscriptionRequestId: id,
        targetReturnPct: dto.targetReturnPct,
        maturityDate: new Date(dto.maturityDate),
        profitPaymentInterval: dto.profitPaymentInterval,
        confirmedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // CHECK16 62(m): the dedicated SUBSCRIPTION_APPROVAL approval screen --
  // approverUserId (this route's caller) is the CAPITAL_PLACEMENT checker;
  // journalInitiatorUserId is a SEPARATE actor who must independently hold
  // JOURNAL_ENTRIES INITIATE (invariant 42b) -- SubscriptionService.
  // approveSubscription enforces both via the capability each call actually
  // touches, not a same-user comparison, matching WmService.
  // chargeAdvisoryFee's established precedent. Scoped to requestType
  // SUBSCRIPTION only -- REDEMPTION_APPROVAL needs no dedicated screen and
  // stays exclusively on the generic Workflow Inbox (WorkflowInboxService).
  @Post(':id/approve')
  @RequiresCapability('CAPITAL_PLACEMENT', 'APPROVE')
  async approve(@Param('id') id: string, @Body() dto: ApproveSubscriptionRequestDto, @CurrentUser() user: AuthenticatedUser) {
    const request = await this.subscriptions.getRequest(id);
    if (request.requestType !== 'SUBSCRIPTION') {
      throw new BadRequestException(`subscription_request ${id} is a ${request.requestType} request -- this route only approves SUBSCRIPTION requests; REDEMPTION_APPROVAL is dispatched via the Workflow Inbox.`);
    }
    if (!request.workflowInstanceId) {
      throw new BadRequestException(`subscription_request ${id} has no workflow instance to approve.`);
    }
    try {
      return await this.subscriptions.approveSubscription({
        workflowInstanceId: request.workflowInstanceId,
        approverUserId: user.userId,
        journalInitiatorUserId: dto.journalInitiatorUserId,
        payerBankAccountId: dto.payerBankAccountId,
        thirdPartyPayer: dto.thirdPartyPayer,
      });
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post(':id/reject')
  @RequiresCapability('CAPITAL_PLACEMENT', 'APPROVE')
  async reject(@Param('id') id: string, @Body() dto: WorkflowDecisionDto, @CurrentUser() user: AuthenticatedUser) {
    const request = await this.subscriptions.getRequest(id);
    if (request.requestType !== 'SUBSCRIPTION') {
      throw new BadRequestException(`subscription_request ${id} is a ${request.requestType} request -- this route only rejects SUBSCRIPTION requests; REDEMPTION_APPROVAL is dispatched via the Workflow Inbox.`);
    }
    if (!request.workflowInstanceId) {
      throw new BadRequestException(`subscription_request ${id} has no workflow instance to reject.`);
    }
    try {
      return await this.subscriptions.rejectRequest(request.workflowInstanceId, user.userId, dto.notes);
    } catch (err) {
      if (err instanceof SubscriptionServiceError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
