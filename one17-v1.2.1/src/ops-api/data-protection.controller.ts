import { BadRequestException, Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { RetentionScheduleService } from '../data-protection/retention-schedule.service';
import { DataBreachRegisterService } from '../data-protection/data-breach-register.service';
import { DataProtectionError } from '../data-protection/data-protection.types';
import { ConfirmRetentionScheduleEntryDto, LogDataBreachDto, AssessDataBreachDto, CloseDataBreachDto } from './ops-api.types';

// Invariant 57(b)(iii)/(iv) (CHECK15, NDPA/GAID): staff-only retention
// schedule registry + breach register. DSR queue lives on
// complaints.controller.ts (GET /complaints/dsr-queue); privacy notice on
// privacy-notice.controller.ts.
@Controller('data-protection')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class DataProtectionController {
  constructor(
    private readonly retentionSchedule: RetentionScheduleService,
    private readonly breachRegister: DataBreachRegisterService,
  ) {}

  @Get('retention-schedule')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'VIEW')
  async listRetentionSchedule() {
    return this.retentionSchedule.listAll();
  }

  @Post('retention-schedule/:id/confirm')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'APPROVE')
  async confirmRetentionScheduleEntry(@Param('id') id: string, @Body() dto: ConfirmRetentionScheduleEntryDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.retentionSchedule.confirm({ entryId: id, ...dto, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('breach-register')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'VIEW')
  async listBreaches() {
    return this.breachRegister.listAll();
  }

  @Post('breach-register')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'INITIATE')
  async logBreach(@Body() dto: LogDataBreachDto, @CurrentUser() user: AuthenticatedUser) {
    return this.breachRegister.logBreach({ ...dto, discoveredAt: new Date(dto.discoveredAt), discoveredByUserId: user.userId });
  }

  @Post('breach-register/:id/assess')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'INITIATE')
  async assessBreach(@Param('id') id: string, @Body() dto: AssessDataBreachDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.breachRegister.assess({ breachId: id, ...dto, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('breach-register/:id/notify-ndpc')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'INITIATE')
  async recordNdpcNotification(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.breachRegister.recordNdpcNotification({ breachId: id, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('breach-register/:id/notify-data-subjects')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'INITIATE')
  async recordDataSubjectNotification(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.breachRegister.recordDataSubjectNotification({ breachId: id, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('breach-register/:id/close')
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'INITIATE')
  async closeBreach(@Param('id') id: string, @Body() dto: CloseDataBreachDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.breachRegister.close({ breachId: id, ...dto, actorUserId: user.userId });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
