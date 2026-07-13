import { BadRequestException, Body, Controller, Param, Post, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { ActivationConsoleService } from '../activation-console/activation-console.service';
import { ActivationConsoleError } from '../activation-console/activation-console.types';
import { AssignActivationSubStepTaskDto } from './ops-api.types';

// Invariant 66 (CHECK20): the Activation Console -- the productized go-live
// journey. Every GET reflects live-computed status (never a self-attested
// flag); every POST here is one of the two genuinely persisted actions
// (skip, activate) or a thin pass-through into an existing engine (the
// proof battery reuses LedgerService/PeriodService verbatim; sub-step task
// assignment reuses TaskService verbatim).
@Controller('activation-console')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class ActivationConsoleController {
  constructor(private readonly activation: ActivationConsoleService) {}

  @Get('status')
  @RequiresCapability('ACTIVATION_CONSOLE', 'VIEW')
  async getStatus() {
    return this.activation.getStatus();
  }

  @Post('steps/:stepCode/skip')
  @RequiresCapability('ACTIVATION_CONSOLE', 'INITIATE')
  async skipStep(@Param('stepCode') stepCode: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.activation.skipStep(stepCode, user.userId);
    } catch (err) {
      if (err instanceof ActivationConsoleError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('steps/:stepCode/unskip')
  @RequiresCapability('ACTIVATION_CONSOLE', 'INITIATE')
  async unskipStep(@Param('stepCode') stepCode: string, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.activation.unskipStep(stepCode, user.userId);
    } catch (err) {
      if (err instanceof ActivationConsoleError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('activate')
  @RequiresCapability('ACTIVATION_CONSOLE', 'APPROVE')
  async activate(@CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.activation.activate(user.userId);
    } catch (err) {
      if (err instanceof ActivationConsoleError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('proof-battery/run')
  @RequiresCapability('ACTIVATION_CONSOLE', 'INITIATE')
  async runProofBattery(@CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.activation.runProofBattery(user.userId);
    } catch (err) {
      // The battery chains real capability-gated calls into LedgerService/
      // PeriodService (createLedgerEntity, openPeriod, etc.) -- a missing
      // capability or business-rule violation there is an honest,
      // caller-facing 400 ("you can't run this yet"), not a server bug.
      // Broader than ActivationConsoleError deliberately, since the errors
      // this specific action can throw span multiple services' own error
      // classes.
      if (err instanceof Error) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('tasks')
  @RequiresCapability('ACTIVATION_CONSOLE', 'INITIATE')
  async assignSubStepTask(@Body() dto: AssignActivationSubStepTaskDto, @CurrentUser() user: AuthenticatedUser) {
    try {
      return await this.activation.assignSubStepTask({
        stepCode: dto.stepCode,
        subStepCode: dto.subStepCode,
        assigneeEmployeeId: dto.assigneeEmployeeId,
        dueAt: dto.dueAt ? new Date(dto.dueAt) : undefined,
        assignedByUserId: user.userId,
      });
    } catch (err) {
      if (err instanceof Error) throw new BadRequestException(err.message);
      throw err;
    }
  }
}
