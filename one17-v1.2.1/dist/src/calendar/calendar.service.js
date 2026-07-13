"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const notification_service_1 = require("../notification/notification.service");
const calendar_types_1 = require("./calendar.types");
const ENTRY_INCLUDE = {
    attendees: { include: { attendee: { select: { id: true, displayName: true } } } },
    organizer: { select: { id: true, displayName: true } },
};
let CalendarService = class CalendarService {
    prisma;
    audit;
    notification;
    constructor(prisma, audit, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.notification = notification;
    }
    async getMyCalendar(userId, rangeStart, rangeEnd) {
        const invitedRows = await this.prisma.calendarMeetingAttendee.findMany({
            where: { attendeeUserId: userId },
            select: { calendarEntryId: true },
        });
        const invitedEntryIds = invitedRows.map((r) => r.calendarEntryId);
        const startsAtFilter = rangeStart || rangeEnd
            ? { startsAt: { ...(rangeStart ? { gte: rangeStart } : {}), ...(rangeEnd ? { lte: rangeEnd } : {}) } }
            : {};
        return this.prisma.calendarEntry.findMany({
            where: { OR: [{ ownerUserId: userId }, { id: { in: invitedEntryIds } }], ...startsAtFilter },
            include: ENTRY_INCLUDE,
            orderBy: { startsAt: 'asc' },
        });
    }
    async getEntry(entryId, actorUserId) {
        const entry = await this.prisma.calendarEntry.findUnique({ where: { id: entryId }, include: ENTRY_INCLUDE });
        if (!entry) {
            throw new calendar_types_1.CalendarError(`Calendar entry ${entryId} not found.`);
        }
        const isOwner = entry.ownerUserId === actorUserId;
        const isAttendee = entry.attendees.some((a) => a.attendeeUserId === actorUserId);
        if (!isOwner && !isAttendee) {
            throw new calendar_types_1.CalendarError(`Calendar entry ${entryId} does not belong to you.`);
        }
        return entry;
    }
    async createPersonalEntry(userId, input) {
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
    async updatePersonalEntry(entryId, userId, patch) {
        const entry = await this.prisma.calendarEntry.findUniqueOrThrow({ where: { id: entryId } });
        if (entry.kind !== 'PERSONAL' || entry.ownerUserId !== userId) {
            throw new calendar_types_1.CalendarError('Only your own personal calendar entries can be edited here.');
        }
        const updated = await this.prisma.calendarEntry.update({ where: { id: entryId }, data: { ...patch } });
        await this.audit.record({ actorUserId: userId, action: 'UPDATE', entityType: 'calendar_entry', entityId: entryId, after: patch });
        return updated;
    }
    async deleteEntry(entryId, userId) {
        const entry = await this.prisma.calendarEntry.findUniqueOrThrow({ where: { id: entryId } });
        if (entry.isAutoPlotted) {
            throw new calendar_types_1.CalendarError(`"${entry.title}" is auto-plotted from ${entry.sourceType} — it can only be changed at its source, never deleted from the calendar directly.`);
        }
        if (entry.ownerUserId !== userId) {
            throw new calendar_types_1.CalendarError('Only the owner/organizer can delete this calendar entry.');
        }
        await this.prisma.calendarMeetingAttendee.deleteMany({ where: { calendarEntryId: entryId } });
        await this.prisma.calendarEntry.delete({ where: { id: entryId } });
        await this.audit.record({ actorUserId: userId, action: 'DELETE', entityType: 'calendar_entry', entityId: entryId, after: { title: entry.title } });
        return { deleted: true };
    }
    async createMeeting(organizerUserId, input) {
        if (input.attendeeUserIds.length === 0) {
            throw new calendar_types_1.CalendarError('A meeting needs at least one attendee.');
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
    async respondToMeeting(entryId, attendeeUserId, status) {
        const attendeeRow = await this.prisma.calendarMeetingAttendee.findUnique({
            where: { calendarEntryId_attendeeUserId: { calendarEntryId: entryId, attendeeUserId } },
        });
        if (!attendeeRow) {
            throw new calendar_types_1.CalendarError('You are not an attendee of this meeting.');
        }
        const updated = await this.prisma.calendarMeetingAttendee.update({
            where: { id: attendeeRow.id },
            data: { status, respondedAt: new Date() },
        });
        await this.audit.record({ actorUserId: attendeeUserId, action: 'UPDATE', entityType: 'calendar_meeting_attendee', entityId: attendeeRow.id, after: { status } });
        return updated;
    }
    async getBusyBlocks(userIds, rangeStart, rangeEnd) {
        const invitedRows = await this.prisma.calendarMeetingAttendee.findMany({
            where: { attendeeUserId: { in: userIds }, status: { not: 'DECLINED' } },
            select: { attendeeUserId: true, calendarEntryId: true },
        });
        const attendeesByEntry = new Map();
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
        const result = Object.fromEntries(userIds.map((u) => [u, []]));
        for (const entry of entries) {
            if (!entry.endsAt || entry.endsAt < rangeStart)
                continue;
            const involved = new Set([entry.ownerUserId, ...(attendeesByEntry.get(entry.id) ?? [])]);
            for (const userId of involved) {
                if (result[userId])
                    result[userId].push({ startsAt: entry.startsAt, endsAt: entry.endsAt });
            }
        }
        return result;
    }
    async getOrCreateFeedToken(userId) {
        const existing = await this.prisma.calendarFeedToken.findUnique({ where: { userId } });
        if (existing)
            return existing;
        return this.prisma.calendarFeedToken.create({ data: { userId, token: (0, crypto_1.randomBytes)(24).toString('hex') } });
    }
    async revokeFeedToken(userId) {
        await this.prisma.calendarFeedToken.deleteMany({ where: { userId } });
        return { revoked: true };
    }
    async getIcsFeedByToken(token) {
        const feedToken = await this.prisma.calendarFeedToken.findUnique({ where: { token }, include: { user: { select: { displayName: true } } } });
        if (!feedToken) {
            throw new calendar_types_1.CalendarError('Invalid or revoked calendar feed link.');
        }
        const entries = await this.getMyCalendar(feedToken.userId);
        return { ownerDisplayName: feedToken.user.displayName, ics: this.buildIcs(entries) };
    }
    buildIcs(entries) {
        const fmt = (d) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
        const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//One17//Staff Calendar//EN', 'CALSCALE:GREGORIAN'];
        for (const entry of entries) {
            lines.push('BEGIN:VEVENT');
            lines.push(`UID:${entry.id}@one17.internal`);
            lines.push(`DTSTAMP:${fmt(entry.createdAt)}`);
            lines.push(`DTSTART:${fmt(entry.startsAt)}`);
            lines.push(`DTEND:${fmt(entry.endsAt ?? entry.startsAt)}`);
            lines.push(`SUMMARY:${this.escapeIcs(entry.title)}`);
            if (entry.description)
                lines.push(`DESCRIPTION:${this.escapeIcs(entry.description)}`);
            lines.push('END:VEVENT');
        }
        lines.push('END:VCALENDAR');
        return lines.join('\r\n');
    }
    escapeIcs(text) {
        return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
    }
    async runSyncSweep(now) {
        let synced = 0;
        synced += await this.syncTaskDeadlines();
        synced += await this.syncBoardEvents();
        synced += await this.syncPmsCycles();
        synced += await this.syncFilingDeadlines(now);
        synced += await this.syncApprovedLeave();
        return { synced };
    }
    async syncTaskDeadlines() {
        const tasks = await this.prisma.task.findMany({
            where: { dueAt: { not: null }, assigneeEmployee: { appUserId: { not: null } } },
            select: { id: true, title: true, status: true, dueAt: true, assigneeEmployee: { select: { appUserId: true } } },
        });
        let count = 0;
        for (const task of tasks) {
            const ownerUserId = task.assigneeEmployee.appUserId;
            if (!ownerUserId || !task.dueAt)
                continue;
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
    async syncBoardEvents() {
        const events = await this.prisma.boardCalendarEvent.findMany({ select: { id: true, title: true, startsAt: true, endsAt: true, createdByUserId: true } });
        const recipientUserIds = await this.listCapabilityHolders('BOARD_CALENDAR_MANAGEMENT', 'VIEW');
        let count = 0;
        for (const event of events) {
            const owners = new Set([event.createdByUserId, ...recipientUserIds]);
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
    async syncPmsCycles() {
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
    async syncFilingDeadlines(now) {
        const calendars = await this.prisma.regulatoryFilingCalendar.findMany({
            where: { isActive: true, deadlineDayOfMonth: { not: null } },
            select: { id: true, deadlineDayOfMonth: true, ledgerEntityCode: true, regulatorTemplate: { select: { name: true } } },
        });
        const recipientUserIds = await this.listCapabilityHolders('REGULATORY_REPORTING', 'INITIATE');
        let count = 0;
        for (const cal of calendars) {
            if (!cal.deadlineDayOfMonth)
                continue;
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
    async syncApprovedLeave() {
        const approved = await this.prisma.leaveApplication.findMany({
            where: { status: 'HR_ACKNOWLEDGED', employee: { appUserId: { not: null } } },
            select: { id: true, startDate: true, endDate: true, leaveTypeCode: true, employee: { select: { appUserId: true } } },
        });
        let count = 0;
        for (const leave of approved) {
            const ownerUserId = leave.employee.appUserId;
            if (!ownerUserId)
                continue;
            await this.prisma.calendarEntry.upsert({
                where: { ownerUserId_sourceType_sourceId: { ownerUserId, sourceType: 'LeaveApplication', sourceId: leave.id } },
                create: { ownerUserId, kind: 'LEAVE', title: `On leave: ${leave.leaveTypeCode}`, startsAt: leave.startDate, endsAt: leave.endDate, isAutoPlotted: true, sourceType: 'LeaveApplication', sourceId: leave.id },
                update: { title: `On leave: ${leave.leaveTypeCode}`, startsAt: leave.startDate, endsAt: leave.endDate },
            });
            count++;
        }
        return count;
    }
    async listCapabilityHolders(functionCode, level) {
        const roleHolders = await this.prisma.rolePermission.findMany({ where: { functionCode, level }, select: { roleCode: true } });
        const recipientUserIds = new Set();
        for (const { roleCode } of roleHolders) {
            const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
            for (const h of holders)
                recipientUserIds.add(h.userId);
        }
        return Array.from(recipientUserIds);
    }
    async runReminderSweep(now) {
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
            if (dueAt > now)
                continue;
            const recipients = new Set([entry.ownerUserId, ...entry.attendees.map((a) => a.attendeeUserId)]);
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
};
exports.CalendarService = CalendarService;
exports.CalendarService = CalendarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        notification_service_1.NotificationService])
], CalendarService);
//# sourceMappingURL=calendar.service.js.map