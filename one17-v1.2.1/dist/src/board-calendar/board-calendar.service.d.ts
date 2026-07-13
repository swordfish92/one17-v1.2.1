import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { CreateBoardCalendarEventInput, SubmitReportPackInput } from './board-calendar.types';
export declare class BoardCalendarService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly notification;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, notification: NotificationService);
    createEvent(input: CreateBoardCalendarEventInput, actorUserId: string): Promise<{
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
    listEvents(actorUserId: string): Promise<{
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
    getReminderConfig(): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        daysBefore: number;
    }>;
    updateReminderConfig(daysBefore: number, actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        updatedByUserId: string | null;
        daysBefore: number;
    }>;
    runReminderSweep(now: Date): Promise<{
        checked: number;
        reminded: number;
    }>;
    submitReportPack(input: SubmitReportPackInput, actorUserId: string): Promise<{
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
    markSubmissionReceived(submissionId: string, status: 'RECEIVED' | 'INCOMPLETE', completenessNote: string | undefined, actorUserId: string): Promise<{
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
    listSubmissionsForEvent(calendarEventId: string, actorUserId: string): Promise<({
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
    private assertCapability;
}
