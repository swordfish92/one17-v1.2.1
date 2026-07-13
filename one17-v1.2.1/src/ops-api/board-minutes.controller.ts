import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardMinutesService } from '../board-minutes/board-minutes.service';
import { UploadBoardMinutesDto, TransmitBoardMinutesDto } from './ops-api.types';

// Invariant 37(c)(v): Section F — Board Minutes. Thin adapter. NO
// @RequiresCapability/CapabilityGuard at the route level (unlike every
// other Section F controller) — the restricted ACL tier is genuinely
// PER-RECORD (a viewer may be authorized for THIS minutes record via a
// transmission, but not the capability itself), so the access decision
// can only be made inside BoardMinutesService against the specific
// minutesId, never at the generic route-level gate.
@Controller('board-minutes')
@UseGuards(SessionAuthGuard)
export class BoardMinutesController {
  constructor(private readonly boardMinutes: BoardMinutesService) {}

  @Get()
  async list(@CurrentUser() user: AuthenticatedUser) {
    return this.boardMinutes.listMinutesForViewer(user.userId);
  }

  @Get(':id')
  async get(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.boardMinutes.getMinutes(id, user.userId);
  }

  @Post()
  async upload(@Body() dto: UploadBoardMinutesDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardMinutes.uploadMinutes({ title: dto.title, fileReference: dto.fileReference, committeeTag: dto.committeeTag }, user.userId);
  }

  @Post(':id/transmit')
  async transmit(@Param('id') id: string, @Body() dto: TransmitBoardMinutesDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardMinutes.transmitMinutes(id, dto.recipientUserId, user.userId);
  }

  @Post(':id/acknowledge')
  async acknowledge(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.boardMinutes.acknowledgeTransmission(id, user.userId);
  }
}
