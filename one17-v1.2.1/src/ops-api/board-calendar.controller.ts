import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardCalendarService } from '../board-calendar/board-calendar.service';
import { CreateBoardCalendarEventDto, UpdateBoardCalendarReminderConfigDto, SubmitReportPackDto, MarkSubmissionReceivedDto } from './ops-api.types';

// Invariant 37(c)(iii): Section F — Board Calendar. Thin adapter.
@Controller('board-calendar')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class BoardCalendarController {
  constructor(private readonly boardCalendar: BoardCalendarService) {}

  @Get('events')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'VIEW')
  async listEvents(@CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.listEvents(user.userId);
  }

  @Post('events')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'INITIATE')
  async createEvent(@Body() dto: CreateBoardCalendarEventDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.createEvent(
      { title: dto.title, description: dto.description, committeeTag: dto.committeeTag, startsAt: new Date(dto.startsAt), endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined },
      user.userId,
    );
  }

  @Get('reminder-config')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'VIEW')
  async getReminderConfig() {
    return this.boardCalendar.getReminderConfig();
  }

  @Post('reminder-config')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'INITIATE')
  async updateReminderConfig(@Body() dto: UpdateBoardCalendarReminderConfigDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.updateReminderConfig(dto.daysBefore, user.userId);
  }

  // Invariant 55(b): "REPORT/PRESENTATION SUBMISSION workflow (CEO/MD
  // submits packs against calendar items; CS tracks receipt/completeness)."
  @Post('submissions')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'INITIATE')
  async submitReportPack(@Body() dto: SubmitReportPackDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.submitReportPack(dto, user.userId);
  }

  @Post('submissions/:id/receive')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'INITIATE')
  async markSubmissionReceived(@Param('id') id: string, @Body() dto: MarkSubmissionReceivedDto, @CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.markSubmissionReceived(id, dto.status, dto.completenessNote, user.userId);
  }

  @Get('events/:id/submissions')
  @RequiresCapability('BOARD_CALENDAR_MANAGEMENT', 'VIEW')
  async listSubmissionsForEvent(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.boardCalendar.listSubmissionsForEvent(id, user.userId);
  }
}
