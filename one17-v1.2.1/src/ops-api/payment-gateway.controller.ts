import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import {
  ConfigureGatewayProviderDto,
  ConfigureCustodianAccountDto,
  ManualMatchInflowDto,
  RejectInflowDto,
} from './ops-api.types';

// Invariant 55(a) (CHECK12): staff-facing Payment Gateway Adapter surface --
// provider/custodian-account config (Finance-owned, MD-approved) + the
// suspense queue (Finance triage, second-officer approved on reject/
// reverse). The actual money-in entry point is the UNAUTHENTICATED webhook
// controller (payment-gateway-webhook.controller.ts) -- deliberately a
// separate controller/route, mirroring how PublicIntakeController keeps
// its unauthenticated routes visually and structurally distinct rather
// than opting out of guards on a shared class.
@Controller('payment-gateway')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class PaymentGatewayController {
  constructor(private readonly gateway: PaymentGatewayService) {}

  @Get('providers')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'VIEW')
  async listProviders() {
    return this.gateway.listProviders();
  }

  @Post('providers')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'INITIATE')
  async proposeProviderConfig(@Body() dto: ConfigureGatewayProviderDto, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.proposeProviderConfig(dto, user.userId);
  }

  @Post('providers/:workflowInstanceId/approve')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'APPROVE')
  async approveProviderConfig(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.approveProviderConfig(workflowInstanceId, user.userId);
  }

  @Get('custodian-accounts')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'VIEW')
  async listCustodianAccounts() {
    return this.gateway.listCustodianAccounts();
  }

  @Post('custodian-accounts')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'INITIATE')
  async proposeCustodianAccount(@Body() dto: ConfigureCustodianAccountDto, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.proposeCustodianAccount(dto, user.userId);
  }

  @Post('custodian-accounts/:workflowInstanceId/approve')
  @RequiresCapability('PAYMENT_GATEWAY_POLICY', 'APPROVE')
  async approveCustodianAccount(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.approveCustodianAccount(workflowInstanceId, user.userId);
  }

  @Get('suspense-queue')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'VIEW')
  async listSuspenseQueue(@CurrentUser() user: AuthenticatedUser) {
    return this.gateway.listSuspenseQueue(user.userId);
  }

  @Get('inflows')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'VIEW')
  async listAllInflows(@CurrentUser() user: AuthenticatedUser) {
    return this.gateway.listAllInflows(user.userId);
  }

  @Post('inflows/:id/match')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE')
  async manualMatch(@Param('id') id: string, @Body() dto: ManualMatchInflowDto, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.manualMatch({ inflowId: id, investorId: dto.investorId, productCode: dto.productCode, actorUserId: user.userId });
  }

  @Post('inflows/:id/propose-reject')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE')
  async proposeRejectInflow(@Param('id') id: string, @Body() dto: RejectInflowDto, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.proposeRejectInflow(id, user.userId, dto.reason);
  }

  @Post('inflows/:id/propose-reverse')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE')
  async proposeReverseInflow(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.proposeReverseInflow(id, user.userId);
  }

  // Invariant 73(b) (CHECK27): officer-triggered outbound settlement-
  // confirmation call against the vendor's own verify-transaction API --
  // the second half of "webhook signature verification + settlement-
  // confirmation parse", independent of trusting the inbound webhook alone.
  @Post('inflows/:id/verify-with-vendor')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'INITIATE')
  async verifyInflowWithVendor(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.verifyInflowWithVendor(id, user.userId);
  }

  @Post('inflow-decisions/:workflowInstanceId/approve')
  @RequiresCapability('PAYMENT_GATEWAY_SUSPENSE', 'APPROVE')
  async approveInflowDecision(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.gateway.approveInflowDecision(workflowInstanceId, user.userId);
  }
}
