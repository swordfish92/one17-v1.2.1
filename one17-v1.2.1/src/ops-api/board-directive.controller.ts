import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardDirectiveService } from '../board-directive/board-directive.service';
import { IssueBoardDirectiveDto } from './ops-api.types';

// Invariant 37(c)(ii): Section F — Board Escalations & Directives. Thin
// adapter — every rule lives in BoardDirectiveService.
@Controller('board-directives')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class BoardDirectiveController {
  constructor(private readonly boardDirective: BoardDirectiveService) {}

  @Get()
  @RequiresCapability('BOARD_DIRECTIVE_MANAGEMENT', 'VIEW')
  async list(@CurrentUser() user: AuthenticatedUser) {
    return this.boardDirective.listDirectives(user.userId);
  }

  @Post()
  @RequiresCapability('BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE')
  async issue(@Body() dto: IssueBoardDirectiveDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardDirective.issueDirective(
      { title: dto.title, description: dto.description, committeeTag: dto.committeeTag, resolutionRef: dto.resolutionRef, dueAt: new Date(dto.dueAt) },
      user.userId,
    );
  }

  // Ownership-gated in the service (only the addressed MD), not a
  // capability guard — same as Task's own start/complete actions.
  @Post(':id/acknowledge')
  async acknowledge(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.boardDirective.acknowledgeDirective(id, user.userId);
  }

  @Post(':id/report-back')
  @RequiresCapability('BOARD_DIRECTIVE_MANAGEMENT', 'INITIATE')
  async reportBack(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.boardDirective.reportDirectiveBack(id, user.userId);
  }
}
