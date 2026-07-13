import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { CalendarService } from '../calendar/calendar.service';

// Invariant 55(c2): every route here is identity-scoped to the session's
// own user -- same "no @RequiresCapability on the hub itself" boundary as
// ProfileController, since everyone manages their own calendar. Privacy
// (PRIVATE entries owner-only, cross-user leak prevention) is enforced
// inside CalendarService, not at this guard layer.
@Controller('calendar')
@UseGuards(SessionAuthGuard)
export class CalendarController {
  constructor(private readonly calendar: CalendarService) {}

  @Get('mine')
  async getMine(@Query('rangeStart') rangeStart: string | undefined, @Query('rangeEnd') rangeEnd: string | undefined, @CurrentUser() user: AuthenticatedUser) {
    return this.calendar.getMyCalendar(user.userId, rangeStart ? new Date(rangeStart) : undefined, rangeEnd ? new Date(rangeEnd) : undefined);
  }

  @Get(':id')
  async getEntry(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.calendar.getEntry(id, user.userId);
  }

  @Post('personal')
  async createPersonal(
    @Body() dto: { title: string; description?: string; startsAt: string; endsAt?: string; reminderLeadMinutes?: number },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.calendar.createPersonalEntry(user.userId, {
      title: dto.title,
      description: dto.description,
      startsAt: new Date(dto.startsAt),
      endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
      reminderLeadMinutes: dto.reminderLeadMinutes,
    });
  }

  @Post('personal/:id')
  async updatePersonal(
    @Param('id') id: string,
    @Body() dto: { title?: string; description?: string; startsAt?: string; endsAt?: string; reminderLeadMinutes?: number },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.calendar.updatePersonalEntry(id, user.userId, {
      title: dto.title,
      description: dto.description,
      startsAt: dto.startsAt ? new Date(dto.startsAt) : undefined,
      endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
      reminderLeadMinutes: dto.reminderLeadMinutes,
    });
  }

  @Post(':id/delete')
  async deleteEntry(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.calendar.deleteEntry(id, user.userId);
  }

  @Post('meetings')
  async createMeeting(
    @Body() dto: { title: string; description?: string; startsAt: string; endsAt?: string; attendeeUserIds: string[]; reminderLeadMinutes?: number },
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.calendar.createMeeting(user.userId, {
      title: dto.title,
      description: dto.description,
      startsAt: new Date(dto.startsAt),
      endsAt: dto.endsAt ? new Date(dto.endsAt) : undefined,
      attendeeUserIds: dto.attendeeUserIds,
      reminderLeadMinutes: dto.reminderLeadMinutes,
    });
  }

  @Post('meetings/:id/respond')
  async respondToMeeting(@Param('id') id: string, @Body() dto: { status: 'ACCEPTED' | 'DECLINED' }, @CurrentUser() user: AuthenticatedUser) {
    return this.calendar.respondToMeeting(id, user.userId, dto.status);
  }

  @Post('busy')
  async getBusyBlocks(@Body() dto: { userIds: string[]; rangeStart: string; rangeEnd: string }) {
    return this.calendar.getBusyBlocks(dto.userIds, new Date(dto.rangeStart), new Date(dto.rangeEnd));
  }

  @Get('feed-token/mine')
  async getFeedToken(@CurrentUser() user: AuthenticatedUser) {
    return this.calendar.getOrCreateFeedToken(user.userId);
  }

  @Post('feed-token/revoke')
  async revokeFeedToken(@CurrentUser() user: AuthenticatedUser) {
    return this.calendar.revokeFeedToken(user.userId);
  }
}
