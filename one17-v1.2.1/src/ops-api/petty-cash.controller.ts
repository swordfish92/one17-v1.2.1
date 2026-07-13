import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PettyCashService } from '../petty-cash/petty-cash.service';
import {
  EstablishFloatDto,
  AdjustFloatCapsDto,
  CaptureVoucherDto,
  InitiateReplenishmentClaimDto,
  RecordSpotCheckDto,
} from './ops-api.types';

// Invariant 50(a) (CHECK12): petty cash imprest module. The replenishment-
// claim's 3-step chain (SAU IC -> DoA -> Finance) has a DIFFERENT capability
// required per step, so approval goes through the standing generic Workflow
// Inbox (POST /workflow/:id/approve, dispatched to PettyCashService.
// decideReplenishmentClaim by WorkflowInboxService) rather than a route
// here fixed to one capability -- same reasoning as EXPENDITURE_
// REQUISITION's own multi-step chain.
@Controller('petty-cash')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class PettyCashController {
  constructor(private readonly pettyCash: PettyCashService) {}

  @Get('floats')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'VIEW')
  async listFloats() {
    return this.pettyCash.listFloats();
  }

  @Get('floats/:id/balance')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'VIEW')
  async getFloatBalance(@Param('id') id: string) {
    return this.pettyCash.getFloatBalance(id);
  }

  @Post('floats')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'INITIATE')
  async establishFloat(@Body() dto: EstablishFloatDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.establishFloat({
      floatCode: dto.floatCode, custodianUserId: dto.custodianUserId, officeLabel: dto.officeLabel,
      ledgerEntityCode: dto.ledgerEntityCode, floatCeilingKobo: BigInt(dto.floatCeilingKobo),
      singleVoucherCapKobo: BigInt(dto.singleVoucherCapKobo), establishedByUserId: user.userId,
    });
  }

  @Post('floats/:id/adjust-caps')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'INITIATE')
  async adjustFloatCaps(@Param('id') id: string, @Body() dto: AdjustFloatCapsDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.adjustFloatCaps({
      floatId: id, floatCeilingKobo: dto.floatCeilingKobo ? BigInt(dto.floatCeilingKobo) : undefined,
      singleVoucherCapKobo: dto.singleVoucherCapKobo ? BigInt(dto.singleVoucherCapKobo) : undefined, actorUserId: user.userId,
    });
  }

  @Post('floats/:id/close')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'INITIATE')
  async closeFloat(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.closeFloat(id, user.userId);
  }

  @Get('vouchers')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'VIEW')
  async listVouchers(@Query('floatId') floatId?: string) {
    return this.pettyCash.listVouchers(floatId);
  }

  @Post('vouchers')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'INITIATE')
  async captureVoucher(@Body() dto: CaptureVoucherDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.captureVoucher({
      floatId: dto.floatId, voucherDate: new Date(dto.voucherDate), payee: dto.payee,
      expenseAccountCode: dto.expenseAccountCode, amountKobo: BigInt(dto.amountKobo), createdByUserId: user.userId,
    });
  }

  @Get('claims')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'VIEW')
  async listClaims(@Query('floatId') floatId?: string) {
    return this.pettyCash.listClaims(floatId);
  }

  @Post('claims')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'INITIATE')
  async initiateReplenishmentClaim(@Body() dto: InitiateReplenishmentClaimDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.initiateReplenishmentClaim({ floatId: dto.floatId, voucherIds: dto.voucherIds, initiatedByUserId: user.userId });
  }

  // Invariant 50(a): gated on PETTY_CASH_MANAGEMENT VIEW, not BUDGET_
  // CONTROL_REVIEW -- SAU_INTERNAL_CONTROL's only grant on that function is
  // APPROVE (its seat in the requisition review chain), and custodians/
  // Admin also have a legitimate reason to see spot-check history.
  @Get('spot-checks')
  @RequiresCapability('PETTY_CASH_MANAGEMENT', 'VIEW')
  async listSpotChecks(@Query('floatId') floatId?: string) {
    return this.pettyCash.listSpotChecks(floatId);
  }

  @Post('spot-checks')
  @RequiresCapability('BUDGET_CONTROL_REVIEW', 'APPROVE')
  async recordSpotCheck(@Body() dto: RecordSpotCheckDto, @CurrentUser() user: AuthenticatedUser) {
    return this.pettyCash.recordSpotCheck({ floatId: dto.floatId, countedKobo: BigInt(dto.countedKobo), notes: dto.notes, checkedByUserId: user.userId });
  }
}
