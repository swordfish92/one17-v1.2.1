import type { AuthenticatedUser } from '../auth/auth.types';
import { BoardCalendarService } from '../board-calendar/board-calendar.service';
import { CreateBoardCalendarEventDto, UpdateBoardCalendarReminderConfigDto, SubmitReportPackDto, MarkSubmissionReceivedDto } from './ops-api.types';
export declare class BoardCalendarController {
    private readonly boardCalendar;
    constructor(boardCalendar: BoardCalendarService);
    listEvents(user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        createdByUserId: string;
        title: string;
        committeeTag: string | null;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
    }[]>;
    createEvent(dto: CreateBoardCalendarEventDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        description: string | null;
        createdByUserId: string;
        title: string;
        committeeTag: string | null;
        startsAt: Date;
        endsAt: Date | null;
        remindedAt: Date | null;
    }>;
    getReminderConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        daysBefore: number;
    }>;
    updateReminderConfig(dto: UpdateBoardCalendarReminderConfigDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        daysBefore: number;
    }>;
    submitReportPack(dto: SubmitReportPackDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardCalendarSubmissionStatus;
        fileReference: string;
        title: string;
        calendarEventId: string;
        submittedByUserId: string;
        submittedAt: Date;
        receivedByUserId: string | null;
        receivedAt: Date | null;
        completenessNote: string | null;
    }>;
    markSubmissionReceived(id: string, dto: MarkSubmissionReceivedDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BoardCalendarSubmissionStatus;
        fileReference: string;
        title: string;
        calendarEventId: string;
        submittedByUserId: string;
        submittedAt: Date;
        receivedByUserId: string | null;
        receivedAt: Date | null;
        completenessNote: string | null;
    }>;
    listSubmissionsForEvent(id: string, user: AuthenticatedUser): Promise<({
        submittedBy: {
            displayName: string;
        };
        receivedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        status: import("../../generated/prisma/enums").BoardCalendarSubmissionStatus;
        fileReference: string;
        title: string;
        calendarEventId: string;
        submittedByUserId: string;
        submittedAt: Date;
        receivedByUserId: string | null;
        receivedAt: Date | null;
        completenessNote: string | null;
    })[]>;
}
