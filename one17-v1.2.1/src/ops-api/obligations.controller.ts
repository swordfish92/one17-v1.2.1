import { BadRequestException, Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ObligationsService } from '../obligations/obligations.service';
import { ObligationsError } from '../obligations/obligations.types';
import { CompilePayoutBatchDto } from './ops-api.types';

// Invariant 65(a)/(b) (CHECK18): the Fund Obligations Schedule (projection
// only -- NEVER touches the ledger) + payout compilation -> memo -> DoA ->
// bank instruction pipeline. VIEW is granted to Fund Accounting AND the
// Portfolio team (PORT_MGR/PORT_OFF/CIO) per the charter -- both hold
// FUND_OBLIGATIONS_SCHEDULE VIEW in the seed, same capability gate either
// way, ObligationsService itself does not distinguish caller role beyond
// that.
@Controller('obligations')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ObligationsController {
  constructor(private readonly obligations: ObligationsService) {}

  @Get('schedule')
  @RequiresCapability('FUND_OBLIGATIONS_SCHEDULE', 'VIEW')
  async getSchedule(@Query('periodStart') periodStart: string, @Query('periodEnd') periodEnd: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.obligations.getSchedule(user.userId, new Date(periodStart), new Date(periodEnd));
    } catch (err) {
      if (err instanceof ObligationsError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('variance')
  @RequiresCapability('FUND_OBLIGATIONS_SCHEDULE', 'VIEW')
  async getVariance(@Query('periodStart') periodStart: string, @Query('periodEnd') periodEnd: string, @CurrentUser() user: AuthenticatedUser) {
    return this.obligations.getPaidVsProjectedVariance(user.userId, new Date(periodStart), new Date(periodEnd));
  }

  @Get('payout-batches')
  @RequiresCapability('PAYOUT_COMPILATION', 'VIEW')
  async listPayoutBatches() {
    return this.obligations.listPayoutBatches();
  }

  @Get('payout-batches/:id')
  @RequiresCapability('PAYOUT_COMPILATION', 'VIEW')
  async getPayoutBatch(@Param('id') id: string) {
    return this.obligations.getPayoutBatch(id);
  }

  @Post('payout-batches')
  @RequiresCapability('PAYOUT_COMPILATION', 'INITIATE')
  async compilePayoutBatch(@Body() dto: CompilePayoutBatchDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.obligations.compilePayoutBatch({
        periodLabel: dto.periodLabel,
        periodStart: new Date(dto.periodStart),
        periodEnd: new Date(dto.periodEnd),
        compiledByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof ObligationsError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('payout-batches/:id/submit-for-approval')
  @RequiresCapability('PAYOUT_COMPILATION', 'INITIATE')
  async submitForApproval(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.obligations.submitForApproval(id, user.userId);
    } catch (err) {
      if (err instanceof ObligationsError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  // Approval routes through the generic Workflow Inbox (PAYOUT_BATCH_
  // APPROVAL dispatch entry in WorkflowInboxService) -- no duplicate
  // approve route here, matching the PROCUREMENT_PAYMENT_BATCH precedent.

  @Post('payout-batches/:id/retry-letter')
  @RequiresCapability('PAYOUT_COMPILATION', 'INITIATE')
  async retryBankInstructionLetter(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.obligations.retryBankInstructionLetter(id, user.userId);
    } catch (err) {
      if (err instanceof ObligationsError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('payout-batches/:id/mark-letter-issued')
  @RequiresCapability('PAYOUT_COMPILATION', 'INITIATE')
  async markLetterIssued(@Param('id') id: string) {
    return this.obligations.markLetterIssued(id);
  }

  @Post('payout-batches/:id/mark-paid')
  @RequiresCapability('PAYOUT_COMPILATION', 'INITIATE')
  async markPaid(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.obligations.markPaid(id, user.userId);
    } catch (err) {
      if (err instanceof ObligationsError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
