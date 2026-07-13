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
exports.BoardCalendarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const notification_service_1 = require("../notification/notification.service");
const board_calendar_types_1 = require("./board-calendar.types");
let BoardCalendarService = class BoardCalendarService {
    prisma;
    audit;
    delegation;
    notification;
    constructor(prisma, audit, delegation, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.notification = notification;
    }
    async createEvent(input, actorUserId) {
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
    async listEvents(actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'VIEW', 'view the Board Calendar');
        return this.prisma.boardCalendarEvent.findMany({ orderBy: { startsAt: 'asc' } });
    }
    async getReminderConfig() {
        return this.prisma.boardCalendarReminderConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    }
    async updateReminderConfig(daysBefore, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', "update the Board Calendar's governed reminder lead time");
        if (daysBefore < 0) {
            throw new board_calendar_types_1.BoardCalendarError('daysBefore cannot be negative.');
        }
        const updated = await this.prisma.boardCalendarReminderConfig.upsert({
            where: { id: 1 },
            create: { id: 1, daysBefore, updatedByUserId: actorUserId },
            update: { daysBefore, updatedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_calendar_reminder_config', entityId: '1', after: { daysBefore } });
        return updated;
    }
    async runReminderSweep(now) {
        const config = await this.getReminderConfig();
        const windowEnd = new Date(now.getTime() + config.daysBefore * 24 * 60 * 60 * 1000);
        const dueEvents = await this.prisma.boardCalendarEvent.findMany({
            where: { remindedAt: null, startsAt: { gte: now, lte: windowEnd } },
        });
        if (dueEvents.length === 0)
            return { checked: 0, reminded: 0 };
        const roleHolders = await this.prisma.rolePermission.findMany({
            where: { functionCode: 'BOARD_CALENDAR_MANAGEMENT', level: 'VIEW' },
            select: { roleCode: true },
        });
        const recipientUserIds = new Set();
        for (const { roleCode } of roleHolders) {
            const holders = await this.prisma.userRole.findMany({ where: { roleCode }, select: { userId: true } });
            for (const h of holders)
                recipientUserIds.add(h.userId);
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
    async submitReportPack(input, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', 'submit a report/presentation pack against a Board Calendar item');
        await this.prisma.boardCalendarEvent.findUniqueOrThrow({ where: { id: input.calendarEventId } });
        const submission = await this.prisma.boardCalendarSubmission.create({
            data: { calendarEventId: input.calendarEventId, title: input.title, fileReference: input.fileReference, submittedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_calendar_submission', entityId: submission.id, after: { calendarEventId: input.calendarEventId, title: input.title } });
        return submission;
    }
    async markSubmissionReceived(submissionId, status, completenessNote, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'INITIATE', 'mark a report/presentation pack received');
        const submission = await this.prisma.boardCalendarSubmission.findUniqueOrThrow({ where: { id: submissionId } });
        if (submission.status !== 'SUBMITTED') {
            throw new board_calendar_types_1.BoardCalendarError(`Submission ${submissionId} is ${submission.status}, not SUBMITTED — already tracked.`);
        }
        const updated = await this.prisma.boardCalendarSubmission.update({
            where: { id: submissionId },
            data: { status, receivedByUserId: actorUserId, receivedAt: new Date(), completenessNote },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_calendar_submission', entityId: submissionId, after: { status } });
        return updated;
    }
    async listSubmissionsForEvent(calendarEventId, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_CALENDAR_MANAGEMENT', 'VIEW', 'view report/presentation submissions');
        return this.prisma.boardCalendarSubmission.findMany({
            where: { calendarEventId },
            orderBy: { submittedAt: 'desc' },
            include: { submittedBy: { select: { displayName: true } }, receivedBy: { select: { displayName: true } } },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_calendar_activity', entityId: activity, after: { functionCode, level } });
            throw new board_calendar_types_1.BoardCalendarError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BoardCalendarService = BoardCalendarService;
exports.BoardCalendarService = BoardCalendarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        notification_service_1.NotificationService])
], BoardCalendarService);
//# sourceMappingURL=board-calendar.service.js.map