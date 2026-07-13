import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { NotificationService } from '../notification/notification.service';
import { BusyBlock, CreateMeetingInput, CreatePersonalEntryInput, UpdatePersonalEntryInput } from './calendar.types';
export declare class CalendarService {
    private readonly prisma;
    private readonly audit;
    private readonly notification;
    constructor(prisma: PrismaService, audit: AuditService, notification: NotificationService);
    getMyCalendar(userId: string, rangeStart?: Date, rangeEnd?: Date): Promise<({
        organizer: {
            id: string;
            displayName: string;
        } | null;
        attendees: ({
            attendee: {
                id: string;
                displayName: string;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").CalendarAttendeeStatus;
            createdAt: Date;
            calendarEntryId: string;
            attendeeUserId: string;
            respondedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
        ownerUserId: string;
        kind: import("../../generated/prisma/enums").CalendarEntryKind;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
    })[]>;
    getEntry(entryId: string, actorUserId: string): Promise<{
        organizer: {
            id: string;
            displayName: string;
        } | null;
        attendees: ({
            attendee: {
                id: string;
                displayName: string;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").CalendarAttendeeStatus;
            createdAt: Date;
            calendarEntryId: string;
            attendeeUserId: string;
            respondedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
        ownerUserId: string;
        kind: import("../../generated/prisma/enums").CalendarEntryKind;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
    }>;
    createPersonalEntry(userId: string, input: CreatePersonalEntryInput): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
        ownerUserId: string;
        kind: import("../../generated/prisma/enums").CalendarEntryKind;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
    }>;
    updatePersonalEntry(entryId: string, userId: string, patch: UpdatePersonalEntryInput): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
        ownerUserId: string;
        kind: import("../../generated/prisma/enums").CalendarEntryKind;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
    }>;
    deleteEntry(entryId: string, userId: string): Promise<{
        deleted: boolean;
    }>;
    createMeeting(organizerUserId: string, input: CreateMeetingInput): Promise<{
        organizer: {
            id: string;
            displayName: string;
        } | null;
        attendees: ({
            attendee: {
                id: string;
                displayName: string;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").CalendarAttendeeStatus;
            createdAt: Date;
            calendarEntryId: string;
            attendeeUserId: string;
            respondedAt: Date | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        title: string;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
        ownerUserId: string;
        kind: import("../../generated/prisma/enums").CalendarEntryKind;
        isAutoPlotted: boolean;
        sourceType: string | null;
        sourceId: string | null;
        organizerUserId: string | null;
        reminderLeadMinutes: number | null;
    }>;
    respondToMeeting(entryId: string, attendeeUserId: string, status: 'ACCEPTED' | 'DECLINED'): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CalendarAttendeeStatus;
        createdAt: Date;
        calendarEntryId: string;
        attendeeUserId: string;
        respondedAt: Date | null;
    }>;
    getBusyBlocks(userIds: string[], rangeStart: Date, rangeEnd: Date): Promise<Record<string, BusyBlock[]>>;
    getOrCreateFeedToken(userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        token: string;
    }>;
    revokeFeedToken(userId: string): Promise<{
        revoked: boolean;
    }>;
    getIcsFeedByToken(token: string): Promise<{
        ownerDisplayName: string;
        ics: string;
    }>;
    private buildIcs;
    private escapeIcs;
    runSyncSweep(now: Date): Promise<{
        synced: number;
    }>;
    private syncTaskDeadlines;
    private syncBoardEvents;
    private syncPmsCycles;
    private syncFilingDeadlines;
    private syncApprovedLeave;
    private listCapabilityHolders;
    runReminderSweep(now: Date): Promise<{
        checked: number;
        reminded: number;
    }>;
}
