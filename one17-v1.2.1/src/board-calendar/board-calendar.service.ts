import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { CreateBoardCalendarEventInput, SubmitReportPackInput, BoardCalendarError } from './board-calendar.types';

// Invariant 37(c)(iii): "Board Calendar (meetings, committee cycles) w/
// reminder notifications." committeeTag mirrors BoardDirective's own
// free-text convention (no Committee registry exists anywhere yet).
@Injectable()
export class BoardCalendarService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly notification: NotificationService,
  ) {}

  async createEvent(input: CreateBoardCalendarEventInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', 'create a Board Calendar event');
    const event = await this.prisma.boardCalendarEvent.create({
      data: {
        title: input.title,
        description: input.description,
        committeeTag: input.committeeTag,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        createdByUserId: actorUserId,
      },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_calendar_event', entityId: event.id, after: { title: input.title, startsAt: input.startsAt } });
    return event;
  }

  async listEvents(actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'VIEW', 'view the Board Calendar');
    return this.prisma.boardCalendarEvent.findMany({ orderBy: { startsAt: 'asc' } });
  }

  async getReminderConfig() {
    return this.prisma.boardCalendarReminderConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
  }

  async updateReminderConfig(daysBefore: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', "update the Board Calendar's governed reminder lead time");
    if (daysBefore < 0) {
      throw new BoardCalendarError('daysBefore cannot be negative.');
    }
    const updated = await this.prisma.boardCalendarReminderConfig.upsert({
      where: { id: 1 },
      create: { id: 1, daysBefore, updatedByUserId: actorUserId },
      update: { daysBefore, updatedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_calendar_reminder_config', entityId: '1', after: { daysBefore } });
    return updated;
  }

  // Invariant 37(c)(iii): "reminder notifications" — fires exactly once per
  // event (remindedAt dedup guard, same pattern as Task's own
  // amberNotifiedAt), to every role holding BOARD_CALENDAR_MANAGEMENT VIEW
  // (CS/MD_CEO/SAU/AUDITOR — the same governance-visibility roster
  // directives use), once the event falls within the governed lead time.
  async runReminderSweep(now: Date): Promise<{ checked: number; reminded: number }> {
    const config = await this.getReminderConfig();
    const windowEnd = new Date(now.getTime() + config.daysBefore * 24 * 60 * 60 * 1000);
    const dueEvents = await this.prisma.boardCalendarEvent.findMany({
      where: { remindedAt: null, startsAt: { gte: now, lte: windowEnd } },
    });
    if (dueEvents.length === 0) return { checked: 0, reminded: 0 };

    const roleHolders = await this.prisma.rolePermission.findMany({
      where: { functionCode: 'BOARD_CALENDAR_MANAGEMENT', level: 'VIEW' },
      select: { roleCode: true },
    });
    const recipientUserIds = new Set<string>();
    for (const { roleCode } of roleHolders) {
      const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
      for (const h of holders) recipientUserIds.add(h.userId);
    }

    let reminded = 0;
    for (const event of dueEvents) {
      for (const recipientUserId of recipientUserIds) {
        await this.notification.create({
          recipientUserId,
          type: 'GENERIC',
          title: 'Upcoming Board Calendar event',
          body: `"${event.title}" is scheduled for ${event.startsAt.toISOString().slice(0, 10)} (within the governed ${config.daysBefore}-day reminder window).`,
          linkPath: '/governance/board-calendar',
        });
      }
      await this.prisma.boardCalendarEvent.update({ where: { id: event.id }, data: { remindedAt: now } });
      reminded++;
    }
    return { checked: dueEvents.length, reminded };
  }

  // Invariant 55(b) (CEO directive, 8-Jul-2026): "REPORT/PRESENTATION
  // SUBMISSION workflow (CEO/MD submits packs against calendar items; CS
  // tracks receipt/completeness)." Same BOARD_CALENDAR_MANAGEMENT
  // capability governs both halves -- CS and MD_CEO both hold INITIATE on
  // it (CS creates/administers events per invariant 37c-iii; MD_CEO now
  // also submits packs against them), so no new capability code was
  // needed, just a new grant (see seed.ts).
  async submitReportPack(input: SubmitReportPackInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', 'submit a report/presentation pack against a Board Calendar item');
    await this.prisma.boardCalendarEvent.findUniqueOrThrow({ where: { id: input.calendarEventId } });
    const submission = await this.prisma.boardCalendarSubmission.create({
      data: { calendarEventId: input.calendarEventId, title: input.title, fileReference: input.fileReference, submittedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_calendar_submission', entityId: submission.id, after: { calendarEventId: input.calendarEventId, title: input.title } });
    return submission;
  }

  // "CS tracks receipt/completeness" -- a distinct actor+timestamp from
  // submission itself, same doctrine as every other transmission/
  // acknowledgment pair in this schema (never inferred, always a real
  // second action by a real second person).
  async markSubmissionReceived(submissionId: string, status: 'RECEIVED' | 'INCOMPLETE', completenessNote: string | undefined, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', 'mark a report/presentation pack received');
    const submission = await this.prisma.boardCalendarSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.status !== 'SUBMITTED') {
      throw new BoardCalendarError(`Submission ${submissionId} is ${submission.status}, not SUBMITTED — already tracked.`);
    }
    const updated = await this.prisma.boardCalendarSubmission.update({
      where: { id: submissionId },
      data: { status, receivedByUserId: actorUserId, receivedAt: new Date(), completenessNote },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_calendar_submission', entityId: submissionId, after: { status } });
    return updated;
  }

  async listSubmissionsForEvent(calendarEventId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'VIEW', 'view report/presentation submissions');
    return this.prisma.boardCalendarSubmission.findMany({
      where: { calendarEventId },
      orderBy: { submittedAt: 'desc' },
      include: { submittedBy: { select: { displayName: true } }, receivedBy: { select: { displayName: true } } },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_calendar_activity', entityId: activity, after: { functionCode, level } });
      throw new BoardCalendarError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
