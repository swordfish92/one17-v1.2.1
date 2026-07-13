import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';
import { MfaService } from './mfa.service';
import { MfaCodeDto, MfaError, MfaFinancialCapabilityDto, MfaGlobalEnforcementDto } from './mfa.types';
import { SessionAuthGuard, SESSION_COOKIE_NAME } from '../auth/session-auth.guard';
import { AllowMfaPending } from '../auth/allow-mfa-pending.decorator';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CapabilityGuard } from '../auth/capability.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { AuthService } from '../auth/auth.service';

// Invariant 68(c) H-02 (CHECK22): thin adapter only — every rule
// (mandatory tiers, code verification, backup codes) lives in MfaService,
// matching this codebase's own "controllers read/write HTTP, services own
// the rule" convention (see AuthController's own header comment).
@Controller('mfa')
@UseGuards(SessionAuthGuard)
export class MfaController {
  constructor(
    private readonly mfa: MfaService,
    private readonly authService: AuthService,
  ) {}

  @Get('status')
  @AllowMfaPending()
  async status(@CurrentUser() user: AuthenticatedUser) {
    return this.mfa.getStatus(user.userId);
  }

  @Post('enroll/begin')
  @HttpCode(200)
  @AllowMfaPending()
  async beginEnrollment(@CurrentUser() user: AuthenticatedUser) {
    return this.mfa.beginEnrollment(user.userId);
  }

  @Post('enroll/confirm')
  @HttpCode(200)
  @AllowMfaPending()
  async confirmEnrollment(@Body() dto: MfaCodeDto, @CurrentUser() user: AuthenticatedUser, @Req() req: Request) {
    try {
      const backupCodes = await this.mfa.confirmEnrollment(user.userId, dto.code);
      // Confirming enrollment IS proof of the second factor — a session
      // that was pending because it was never enrolled is now past MFA,
      // same as a normal verify() would do. A voluntary (non-pending) re-
      // enrollment from an already-fully-authenticated user is a no-op
      // here since there's nothing to promote.
      const token = (req as any).cookies?.[SESSION_COOKIE_NAME];
      if (token) await this.authService.promoteSessionPastMfa(token);
      return { backupCodes };
    } catch (err) {
      if (err instanceof MfaError) throw new UnauthorizedException(err.message);
      throw err;
    }
  }

  @Post('verify')
  @HttpCode(200)
  @AllowMfaPending()
  async verify(@Body() dto: MfaCodeDto, @CurrentUser() user: AuthenticatedUser, @Req() req: Request) {
    const ok = await this.mfa.verifyCode(user.userId, dto.code);
    if (!ok) throw new UnauthorizedException('Invalid or already-used code.');
    const token = (req as any).cookies?.[SESSION_COOKIE_NAME];
    if (token) await this.authService.promoteSessionPastMfa(token);
    return { ok: true };
  }

  // --- Admin: enforcement-tier config (invariant 68c "governed config") ---

  @Post('admin/reset/:userId')
  @HttpCode(200)
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MFA_ENFORCEMENT_CONFIG', 'INITIATE')
  async resetUserMfa(@Param('userId') targetUserId: string, @CurrentUser() user: AuthenticatedUser) {
    await this.mfa.resetMfa(targetUserId, user.userId);
    return { ok: true };
  }

  @Get('admin/financial-capabilities')
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MFA_ENFORCEMENT_CONFIG', 'VIEW')
  async listFinancialCapabilities() {
    return this.mfa.listFinancialCapabilities();
  }

  @Post('admin/financial-capabilities')
  @HttpCode(200)
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MFA_ENFORCEMENT_CONFIG', 'INITIATE')
  async addFinancialCapability(@Body() dto: MfaFinancialCapabilityDto, @CurrentUser() user: AuthenticatedUser) {
    return this.mfa.addFinancialCapability(dto.functionCode, user.userId);
  }

  @Delete('admin/financial-capabilities/:functionCode')
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MFA_ENFORCEMENT_CONFIG', 'INITIATE')
  async removeFinancialCapability(@Param('functionCode') functionCode: string, @CurrentUser() user: AuthenticatedUser) {
    await this.mfa.removeFinancialCapability(functionCode, user.userId);
    return { ok: true };
  }

  @Post('admin/global-enforcement')
  @HttpCode(200)
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MFA_ENFORCEMENT_CONFIG', 'INITIATE')
  async setGlobalEnforcement(@Body() dto: MfaGlobalEnforcementDto, @CurrentUser() user: AuthenticatedUser) {
    return this.mfa.setGlobalEnforcement(dto.allStaffMandatory, user.userId);
  }
}
