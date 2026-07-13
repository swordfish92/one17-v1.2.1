import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { One17AIService } from '../ai/one17-ai.service';
import { AiCapabilityCode, AiInvokeContext } from '../ai/ai.types';

// Check-6B item 2 (invariant 33). No @RequiresCapability decorator here —
// EVERY authorization decision (kill switch, flag, RBAC grant, context,
// budget) is data-dependent and lives inside One17AIService's own gate
// pipeline, exactly the same "the guard only answers may this user touch
// this endpoint at all" boundary CLAUDE.md's HTTP layer ruling draws for
// WorkflowInboxController. SessionAuthGuard (must be logged in) is the
// edge check; askingUserId is ALWAYS the session's own user — never
// accepted from the request body, so no caller can pose as another user's
// RBAC context.
@Controller('ai')
@UseGuards(SessionAuthGuard)
export class AiController {
  constructor(private readonly ai: One17AIService) {}

  @Post('invoke')
  async invoke(
    @Body() dto: { capabilityCode: AiCapabilityCode; promptText: string; requestedDataPointCodes?: string[]; context?: AiInvokeContext; orgUnitCode: string },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.ai.invoke({
      askingUserId: user.userId,
      capabilityCode: dto.capabilityCode,
      promptText: dto.promptText,
      requestedDataPointCodes: dto.requestedDataPointCodes ?? [],
      context: dto.context,
      orgUnitCode: dto.orgUnitCode,
    });
  }

  @Get('interaction-log')
  async listInteractionLog(@CurrentUser() user: AuthenticatedUser) {
    // Gate itself is inside AI_AUDITLOG_QUERY's own capability check (fixed
    // Check-6C tranche 3 — see One17AIService.listInteractionLog) — this
    // endpoint deliberately has no separate route guard beyond that.
    return this.ai.listInteractionLog(user.userId);
  }

  @Post('capability-flags/:code/request-toggle')
  async requestFlagToggle(@Param('code') code: string, @CurrentUser() user: AuthenticatedUser) {
    return this.ai.requestFlagToggle(code, user.userId);
  }

  @Get('capability-flags')
  async listCapabilityFlags() {
    return this.ai.listCapabilityFlags();
  }

  @Get('token-budgets')
  async listTokenBudgets() {
    return this.ai.listTokenBudgets();
  }

  @Get('kill-switch')
  async getKillSwitchStatus() {
    return this.ai.getKillSwitchStatus();
  }

  @Post('kill-switch/activate')
  async activateKillSwitch(@Body('reason') reason: string, @CurrentUser() user: AuthenticatedUser) {
    return this.ai.activateKillSwitch(user.userId, reason);
  }

  @Post('kill-switch/deactivate')
  async deactivateKillSwitch(@CurrentUser() user: AuthenticatedUser) {
    return this.ai.deactivateKillSwitch(user.userId);
  }
}
