import { randomBytes } from 'crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { NotificationService } from '../notification/notification.service';
import { BusyBlock, CalendarError, CreateMeetingInput, CreatePersonalEntryInput, UpdatePersonalEntryInput } from './calendar.types';

const ENTRY_INCLUDE = {
  attendees: { include: { attendee: { select: { id: true, displayName: true } } } },
  organizer: { select: { id: true, displayName: true } },
} as const;

// Invariant 55(c2): the per-staff calendar. Auto-plotted entries
// (TASK_DEADLINE/BOARD_EVENT/PMS_CYCLE/FILING_DEADLINE) are synced in by
// runSyncSweep() from their owning module and are never written to
// directly by a user -- createPersonalEntry/createMeeting are the only
// user-facing write paths, and deleteEntry refuses anything isAutoPlotted.
@Injectable()
export class CalendarService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly notification: NotificationService,
  ) {}

  // "My calendar" = entries I own (auto-plotted, personal, meetings I
  // organize) UNION MEETING entries I hold an attendee row on -- a single
  // query, no denormalized per-attendee copies (see CalendarMeetingAttendee
  // doc comment in schema.prisma).
  async getMyCalendar(userId: string, rangeStart?: Date, rangeEnd?: Date) {
    const invitedRows = await this.prisma.calendarMeetingAttendee.findMany({
      where: { attendeeUserId: userId },
      select: { calendarEntryId: true },
    });
    const invitedEntryIds = invitedRows.map((r) => r.calendarEntryId);
    const startsAtFilter =
      rangeStart || rangeEnd
        ? { startsAt: { ...(rangeStart ? { gte: rangeStart } : {}), ...(rangeEnd ? { lte: rangeEnd } : {}) } }
        : {};
    return this.prisma.calendarEntry.findMany({
      where: { OR: [{ ownerUserId: userId }, { id: { in: invitedEntryIds } }], ...startsAtFilter },
      include: ENTRY_INCLUDE,
      orderBy: { startsAt: 'asc' },
    });
  }

  // Owner OR attendee only -- the seam the smoke test's cross-user leak
  // check exercises directly.
  async getEntry(entryId: string, actorUserId: string) {
    const entry = await this.prisma.calendarEntry.findUnique({ where: { id: entryId }, include: ENTRY_INCLUDE });
    if (!entry) {
      throw new CalendarError(`Calendar entry ${entryId} not found.`);
    }
    const isOwner = entry.ownerUserId === actorUserId;
    const isAttendee = entry.attendees.some((a) => a.attendeeUserId === actorUserId);
    if (!isOwner && !isAttendee) {
      throw new CalendarError(`Calendar entry ${entryId} does not belong to you.`);
    }
    return entry;
  }

  async createPersonalEntry(userId: string, input: CreatePersonalEntryInput) {
    const entry = await this.prisma.calendarEntry.create({
      data: {
        ownerUserId: userId,
        kind: 'PERSONAL',
        title: input.title,
        description: input.description,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        reminderLeadMinutes: input.reminderLeadMinutes,
      },
    });
    await this.audit.record({ actorUserId: userId, action: 'CREATE', entityType: 'calendar_entry', entityId: entry.id, after: { kind: 'PERSONAL', title: input.title, startsAt: input.startsAt } });
    return entry;
  }

  async updatePersonalEntry(entryId: string, userId: string, patch: UpdatePersonalEntryInput) {
    const entry = await this.prisma.calendarEntry.findUniqueOrThrow({ where: { id: entryId } });
    if (entry.kind !== 'PERSONAL' || entry.ownerUserId !== userId) {
      throw new CalendarError('Only your own personal calendar entries can be edited here.');
    }
    const updated = await this.prisma.calendarEntry.update({ where: { id: entryId }, data: { ...patch } });
    await this.audit.record({ actorUserId: userId, action: 'UPDATE', entityType: 'calendar_entry', entityId: entryId, after: patch as Record<string, unknown> });
    return updated;
  }

  // 55(c2)(i): "no deleting a task deadline from the calendar" -- refused
  // for every isAutoPlotted row regardless of who's asking.
  async deleteEntry(entryId: string, userId: string) {
    const entry = await this.prisma.calendarEntry.findUniqueOrThrow({ where: { id: entryId } });
    if (entry.isAutoPlotted) {
      throw new CalendarError(`"${entry.title}" is auto-plotted from ${entry.sourceType} — it can only be changed at its source, never deleted from the calendar directly.`);
    }
    if (entry.ownerUserId !== userId) {
      throw new CalendarError('Only the owner/organizer can delete this calendar entry.');
    }
    await this.prisma.calendarMeetingAttendee.deleteMany({ where: { calendarEntryId: entryId } });
    await this.prisma.calendarEntry.delete({ where: { id: entryId } });
    await this.audit.record({ actorUserId: userId, action: 'DELETE', entityType: 'calendar_entry', entityId: entryId, after: { title: entry.title } });
    return { deleted: true };
  }

  async createMeeting(organizerUserId: string, input: CreateMeetingInput) {
    if (input.attendeeUserIds.length === 0) {
      throw new CalendarError('A meeting needs at least one attendee.');
    }
    const entry = await this.prisma.calendarEntry.create({
      data: {
        ownerUserId: organizerUserId,
        organizerUserId,
        kind: 'MEETING',
        title: input.title,
        description: input.description,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        reminderLeadMinutes: input.reminderLeadMinutes,
        attendees: { create: input.attendeeUserIds.map((attendeeUserId) => ({ attendeeUserId })) },
      },
      include: ENTRY_INCLUDE,
    });
    for (const attendeeUserId of input.attendeeUserIds) {
      await this.notification.create({
        recipientUserId: attendeeUserId,
        type: 'GENERIC',
        title: 'Meeting invitation',
        body: `You've been invited to "${input.title}" on ${input.startsAt.toISOString().slice(0, 16).replace('T', ' ')}.`,
        linkPath: '/calendar',
      });
    }
    await this.audit.record({ actorUserId: organizerUserId, action: 'CREATE', entityType: 'calendar_entry', entityId: entry.id, after: { kind: 'MEETING', title: input.title, attendeeCount: input.attendeeUserIds.length } });
    return entry;
  }

  async respondToMeeting(entryId: string, attendeeUserId: string, status: 'ACCEPTED' | 'DECLINED') {
    const attendeeRow = await this.prisma.calendarMeetingAttendee.findUnique({
      where: { calendarEntryId_attendeeUserId: { calendarEntryId: entryId, attendeeUserId } },
    });
    if (!attendeeRow) {
      throw new CalendarError('You are not an attendee of this meeting.');
    }
    const updated = await this.prisma.calendarMeetingAttendee.update({
      where: { id: attendeeRow.id },
      data: { status, respondedAt: new Date() },
    });
    await this.audit.record({ actorUserId: attendeeUserId, action: 'UPDATE', entityType: 'calendar_meeting_attendee', entityId: attendeeRow.id, after: { status } });
    return updated;
  }

  // 55(c2)(ii): "at most a busy block where meeting scheduling needs free/
  // busy" -- times only, never titles, so PRIVATE entries stay private even
  // through this endpoint. DECLINED meeting invites don't count as busy.
  async getBusyBlocks(userIds: string[], rangeStart: Date, rangeEnd: Date): Promise<Record<string, BusyBlock[]>> {
    const invitedRows = await this.prisma.calendarMeetingAttendee.findMany({
      where: { attendeeUserId: { in: userIds }, status: { not: 'DECLINED' } },
      select: { attendeeUserId: true, calendarEntryId: true },
    });
    const attendeesByEntry = new Map<string, string[]>();
    for (const row of invitedRows) {
      const list = attendeesByEntry.get(row.calendarEntryId) ?? [];
      list.push(row.attendeeUserId);
      attendeesByEntry.set(row.calendarEntryId, list);
    }
    const entries = await this.prisma.calendarEntry.findMany({
      where: {
        startsAt: { lte: rangeEnd },
        OR: [{ ownerUserId: { in: userIds } }, { id: { in: Array.from(attendeesByEntry.keys()) } }],
      },
      select: { id: true, ownerUserId: true, startsAt: true, endsAt: true },
    });
    const result: Record<string, BusyBlock[]> = Object.fromEntries(userIds.map((u) => [u, [] as BusyBlock[]]));
    for (const entry of entries) {
      if (!entry.endsAt || entry.endsAt < rangeStart) continue;
      const involved = new Set<string>([entry.ownerUserId, ...(attendeesByEntry.get(entry.id) ?? [])]);
      for (const userId of involved) {
        if (result[userId]) result[userId].push({ startsAt: entry.startsAt, endsAt: entry.endsAt });
      }
    }
    return result;
  }

  // 55(c2)(iv) Phase A: same bare-token convention as
  // MarketingSubscriber.unsubscribeToken -- see schema.prisma's
  // CalendarFeedToken doc comment for why that precedent applies here.
  async getOrCreateFeedToken(userId: string) {
    const existing = await this.prisma.calendarFeedToken.findUnique({ where: { userId } });
    if (existing) return existing;
    return this.prisma.calendarFeedToken.create({ data: { userId, token: randomBytes(24).toString('hex') } });
  }

  async revokeFeedToken(userId: string) {
    await this.prisma.calendarFeedToken.deleteMany({ where: { userId } });
    return { revoked: true };
  }

  async getIcsFeedByToken(token: string): Promise<{ ownerDisplayName: string; ics: string }> {
    const feedToken = await this.prisma.calendarFeedToken.findUnique({ where: { token }, include: { user: { select: { displayName: true } } } });
    if (!feedToken) {
      throw new CalendarError('Invalid or revoked calendar feed link.');
    }
    const entries = await this.getMyCalendar(feedToken.userId);
    return { ownerDisplayName: feedToken.user.displayName, ics: this.buildIcs(entries) };
  }

  private buildIcs(entries: Array<{ id: string; title: string; description: string | null; startsAt: Date; endsAt: Date | null; createdAt: Date }>): string {
    const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//One17//Staff Calendar//EN', 'CALSCALE:GREGORIAN'];
    for (const entry of entries) {
      lines.push('BEGIN:VEVENT');
      lines.push(`UID:${entry.id}@one17.internal`);
      lines.push(`DTSTAMP:${fmt(entry.createdAt)}`);
      lines.push(`DTSTART:${fmt(entry.startsAt)}`);
      lines.push(`DTEND:${fmt(entry.endsAt ?? entry.startsAt)}`);
      lines.push(`SUMMARY:${this.escapeIcs(entry.title)}`);
      if (entry.description) lines.push(`DESCRIPTION:${this.escapeIcs(entry.description)}`);
      lines.push('END:VEVENT');
    }
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }

  private escapeIcs(text: string): string {
    return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }

  // 55(c2)(i): "restated automatically when a task changes" -- a periodic
  // upsert sweep rather than each module pushing into the calendar on every
  // write, so the calendar never needs a bespoke hook into four unrelated
  // services. Keyed on [ownerUserId, sourceType, sourceId] (the unique
  // constraint on CalendarEntry), so re-running is always idempotent.
  async runSyncSweep(now: Date): Promise<{ synced: number }> {
    let synced = 0;
    synced += await this.syncTaskDeadlines();
    synced += await this.syncBoardEvents();
    synced += await this.syncPmsCycles();
    synced += await this.syncFilingDeadlines(now);
    synced += await this.syncApprovedLeave();
    return { synced };
  }

  private async syncTaskDeadlines(): Promise<number> {
    const tasks = await this.prisma.task.findMany({
      where: { dueAt: { not: null }, assigneeEmployee: { appUserId: { not: null } } },
      select: { id: true, title: true, status: true, dueAt: true, assigneeEmployee: { select: { appUserId: true } } },
    });
    let count = 0;
    for (const task of tasks) {
      const ownerUserId = task.assigneeEmployee.appUserId;
      if (!ownerUserId || !task.dueAt) continue;
      const title = task.status === 'DONE' ? `Task (done): ${task.title}` : task.status === 'DEFAULTED' ? `Task (defaulted): ${task.title}` : `Task due: ${task.title}`;
      await this.prisma.calendarEntry.upsert({
        where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'Task', sourceId: task.id } },
        create: { ownerUserId, kind: 'TASK_DEADLINE', title, startsAt: task.dueAt, isAutoPlotted: true, sourceType: 'Task', sourceId: task.id },
        update: { title, startsAt: task.dueAt },
      });
      count++;
    }
    return count;
  }

  // Board Calendar events have no per-invitee model (see
  // BoardCalendarService.runReminderSweep) -- so, matching that exact same
  // "notify every capability holder" reach, this plots each event on the
  // calendar of the creator plus every current BOARD_CALENDAR_MANAGEMENT
  // VIEW holder.
  private async syncBoardEvents(): Promise<number> {
    const events = await this.prisma.boardCalendarEvent.findMany({ select: { id: true, title: true, startsAt: true, endsAt: true, createdByUserId: true } });
    const recipientUserIds = await this.listCapabilityHolders('BOARD_CALENDAR_MANAGEMENT', 'VIEW');
    let count = 0;
    for (const event of events) {
      const owners = new Set<string>([event.createdByUserId, ...recipientUserIds]);
      for (const ownerUserId of owners) {
        await this.prisma.calendarEntry.upsert({
          where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'BoardCalendarEvent', sourceId: event.id } },
          create: { ownerUserId, kind: 'BOARD_EVENT', title: `Board: ${event.title}`, startsAt: event.startsAt, endsAt: event.endsAt, isAutoPlotted: true, sourceType: 'BoardCalendarEvent', sourceId: event.id },
          update: { title: `Board: ${event.title}`, startsAt: event.startsAt, endsAt: event.endsAt },
        });
        count++;
      }
    }
    return count;
  }

  private async syncPmsCycles(): Promise<number> {
    const cycles = await this.prisma.appraisalCycle.findMany({ select: { id: true, cycleType: true, periodStart: true, periodEnd: true } });
    const recipientUserIds = await this.listCapabilityHolders('PMS_CYCLE_MANAGEMENT', 'VIEW');
    let count = 0;
    for (const cycle of cycles) {
      const label = cycle.cycleType === 'ANNUAL_APPRAISAL' ? 'Annual appraisal cycle' : 'Incentive cycle';
      for (const ownerUserId of recipientUserIds) {
        await this.prisma.calendarEntry.upsert({
          where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'AppraisalCycle', sourceId: cycle.id } },
          create: { ownerUserId, kind: 'PMS_CYCLE', title: `${label} window`, startsAt: cycle.periodStart, endsAt: cycle.periodEnd, isAutoPlotted: true, sourceType: 'AppraisalCycle', sourceId: cycle.id },
          update: { title: `${label} window`, startsAt: cycle.periodStart, endsAt: cycle.periodEnd },
        });
        count++;
      }
    }
    return count;
  }

  // RegulatoryFilingCalendar is a RECURRING rule (deadlineDayOfMonth), not a
  // list of concrete dates -- computes the current + next occurrence so the
  // calendar always shows an upcoming, not-yet-past deadline. sourceId is a
  // composite (calendarId:YYYY-MM) so each period's occurrence gets its own
  // row rather than one row being overwritten as months roll forward.
  private async syncFilingDeadlines(now: Date): Promise<number> {
    const calendars = await this.prisma.regulatoryFilingCalendar.findMany({
      where: { isActive: true, deadlineDayOfMonth: { not: null } },
      select: { id: true, deadlineDayOfMonth: true, ledgerEntityCode: true, regulatorTemplate: { select: { name: true } } },
    });
    const recipientUserIds = await this.listCapabilityHolders('REGULATORY_REPORTING', 'INITIATE');
    let count = 0;
    for (const cal of calendars) {
      if (!cal.deadlineDayOfMonth) continue;
      for (const monthOffset of [0, 1]) {
        const periodDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, cal.deadlineDayOfMonth);
        const periodKey = `${periodDate.getFullYear()}-${String(periodDate.getMonth() + 1).padStart(2, '0')}`;
        const sourceId = `${cal.id}:${periodKey}`;
        const title = `Filing due: ${cal.regulatorTemplate.name} (${cal.ledgerEntityCode})`;
        for (const ownerUserId of recipientUserIds) {
          await this.prisma.calendarEntry.upsert({
            where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'RegulatoryFilingCalendar', sourceId } },
            create: { ownerUserId, kind: 'FILING_DEADLINE', title, startsAt: periodDate, isAutoPlotted: true, sourceType: 'RegulatoryFilingCalendar', sourceId },
            update: { title, startsAt: periodDate },
          });
          count++;
        }
      }
    }
    return count;
  }

  // Invariant 64(e) (CHECK17): "approved leave auto-plots on the calendar
  // as busy." HR_ACKNOWLEDGED is the terminal approved state (supervisor
  // approval + HR acknowledgment both cleared) -- only that status plots;
  // a still-PENDING or REJECTED application never touches the calendar.
  // endsAt is set (unlike PERSONAL entries) so getBusyBlocks() treats the
  // whole window as busy, not just the start instant.
  private async syncApprovedLeave(): Promise<number> {
    const approved = await this.prisma.leaveApplication.findMany({
      where: { status: 'HR_ACKNOWLEDGED', employee: { appUserId: { not: null } } },
      select: { id: true, startDate: true, endDate: true, leaveTypeCode: true, employee: { select: { appUserId: true } } },
    });
    let count = 0;
    for (const leave of approved) {
      const ownerUserId = leave.employee.appUserId;
      if (!ownerUserId) continue;
      await this.prisma.calendarEntry.upsert({
        where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'LeaveApplication', sourceId: leave.id } },
        create: { ownerUserId, kind: 'LEAVE', title: `On leave: ${leave.leaveTypeCode}`, startsAt: leave.startDate, endsAt: leave.endDate, isAutoPlotted: true, sourceType: 'LeaveApplication', sourceId: leave.id },
        update: { title: `On leave: ${leave.leaveTypeCode}`, startsAt: leave.startDate, endsAt: leave.endDate },
      });
      count++;
    }
    return count;
  }

  // Same "every current holder of a capability" lookup BoardCalendarService
  // uses in runReminderSweep -- copied rather than imported since it's a
  // three-line query, not worth a cross-module dependency for.
  private async listCapabilityHolders(functionCode: string, level: 'VIEW' | 'INITIATE' | 'APPROVE'): Promise<string[]> {
    const roleHolders = await this.prisma.rolePermission.findMany({ where: { functionCode, level }, select: { roleCode: true } });
    const recipientUserIds = new Set<string>();
    for (const { roleCode } of roleHolders) {
      const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
      for (const h of holders) recipientUserIds.add(h.userId);
    }
    return Array.from(recipientUserIds);
  }

  // 55(c2)(iii): per-entry lead time (or the governed default) before
  // startsAt. remindedAt dedup guard, same "fires exactly once" pattern as
  // Task.amberNotifiedAt / BoardCalendarEvent.remindedAt. MEETING entries
  // notify the organizer AND every attendee; everything else notifies just
  // its owner.
  async runReminderSweep(now: Date): Promise<{ checked: number; reminded: number }> {
    const config = await this.prisma.calendarReminderConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const outerWindowEnd = new Date(now.getTime() + 7 * 24 * 60 * 60_000);
    const candidates = await this.prisma.calendarEntry.findMany({
      where: { remindedAt: null, startsAt: { gte: now, lte: outerWindowEnd } },
      include: { attendees: { select: { attendeeUserId: true } } },
    });
    let reminded = 0;
    for (const entry of candidates) {
      const leadMinutes = entry.reminderLeadMinutes ?? config.defaultLeadMinutes;
      const dueAt = new Date(entry.startsAt.getTime() - leadMinutes * 60_000);
      if (dueAt > now) continue;
      const recipients = new Set<string>([entry.ownerUserId, ...entry.attendees.map((a) => a.attendeeUserId)]);
      for (const recipientUserId of recipients) {
        await this.notification.create({
          recipientUserId,
          type: 'GENERIC',
          title: 'Upcoming calendar entry',
          body: `"${entry.title}" starts at ${entry.startsAt.toISOString().slice(0, 16).replace('T', ' ')} (within your ${leadMinutes}-minute reminder window).`,
          linkPath: '/calendar',
        });
      }
      await this.prisma.calendarEntry.update({ where: { id: entry.id }, data: { remindedAt: now } });
      reminded++;
    }
    return { checked: candidates.length, reminded };
  }
}
