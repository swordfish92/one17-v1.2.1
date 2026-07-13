import type { AuthenticatedUser } from '../auth/auth.types';
import { CalendarService } from '../calendar/calendar.service';
export declare class CalendarController {
    private readonly calendar;
    constructor(calendar: CalendarService);
    getMine(rangeStart: string | undefined, rangeEnd: string | undefined, user: AuthenticatedUser): Promise<({
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
    getEntry(id: string, user: AuthenticatedUser): Promise<{
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
    createPersonal(dto: {
        title: string;
        description?: string;
        startsAt: string;
        endsAt?: string;
        reminderLeadMinutes?: number;
    }, user: AuthenticatedUser): Promise<{
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
    updatePersonal(id: string, dto: {
        title?: string;
        description?: string;
        startsAt?: string;
        endsAt?: string;
        reminderLeadMinutes?: number;
    }, user: AuthenticatedUser): Promise<{
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
    deleteEntry(id: string, user: AuthenticatedUser): Promise<{
        deleted: boolean;
    }>;
    createMeeting(dto: {
        title: string;
        description?: string;
        startsAt: string;
        endsAt?: string;
        attendeeUserIds: string[];
        reminderLeadMinutes?: number;
    }, user: AuthenticatedUser): Promise<{
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
    respondToMeeting(id: string, dto: {
        status: 'ACCEPTED' | 'DECLINED';
    }, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").CalendarAttendeeStatus;
        createdAt: Date;
        calendarEntryId: string;
        attendeeUserId: string;
        respondedAt: Date | null;
    }>;
    getBusyBlocks(dto: {
        userIds: string[];
        rangeStart: string;
        rangeEnd: string;
    }): Promise<Record<string, import("../calendar/calendar.types").BusyBlock[]>>;
    getFeedToken(user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        token: string;
    }>;
    revokeFeedToken(user: AuthenticatedUser): Promise<{
        revoked: boolean;
    }>;
}
