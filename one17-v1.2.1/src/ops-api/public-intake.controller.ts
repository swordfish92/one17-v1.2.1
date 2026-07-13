import { Body, Controller, Get, Ip, Param, Post, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { PublicIntakeService } from '../public-intake/public-intake.service';
import {
  PublicInvestorExpressIntakeDto,
  PublicCounterpartyIntakeDto,
  PromoteInvestorIntakeDto,
  RejectIntakeDto,
} from './ops-api.types';

// Invariant 28(d): the ONLY unauthenticated controller in this codebase.
// The two POST /public/intake/* routes carry NO SessionAuthGuard/
// CapabilityGuard by design — they write nothing beyond a staging row (see
// PublicIntakeService's module comment). Every other route on this
// controller (list/promote/reject) is staff-only and guarded exactly like
// every other ops-API controller. A stricter per-route @Throttle
// tightens the global 120/60s default (app.module.ts) for an anonymous
// write surface; real bot protection (CAPTCHA) is a flagged gap — no
// provider is integrated in this codebase.
@Controller('public/intake')
export class PublicIntakeController {
  constructor(private readonly publicIntake: PublicIntakeService) {}

  @Post('investor-express')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async submitInvestorExpress(@Body() dto: PublicInvestorExpressIntakeDto, @Ip() ip: string) {
    return this.publicIntake.submitInvestorExpress(dto, ip);
  }

  @Post('counterparty')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  async submitCounterparty(@Body() dto: PublicCounterpartyIntakeDto, @Ip() ip: string) {
    return this.publicIntake.submitCounterparty(dto, ip);
  }

  @Get('pending')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  async listPending(@CurrentUser() user: AuthenticatedUser) {
    return this.publicIntake.listPending(user.userId);
  }

  @Post(':id/promote-investor')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('INVESTOR_ONBOARDING', 'INITIATE')
  async promoteInvestor(
    @Param('id') id: string,
    @Body() dto: PromoteInvestorIntakeDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.publicIntake.promoteInvestorSubmission(id, user.userId, dto.sanctionsScreenResult);
  }

  @Post(':id/promote-counterparty')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('COUNTERPARTY_ONBOARDING', 'INITIATE')
  async promoteCounterparty(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.publicIntake.promoteCounterpartySubmission(id, user.userId);
  }

  @Post(':id/reject')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  async reject(@Param('id') id: string, @Body() dto: RejectIntakeDto, @CurrentUser() user: AuthenticatedUser) {
    return this.publicIntake.reject(id, user.userId, dto.reason);
  }
}
