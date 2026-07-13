import type { AuthenticatedUser } from '../auth/auth.types';
import { AuditTrailViewerService } from '../audit/audit-trail-viewer.service';
export declare class AuditTrailViewerController {
    private readonly viewer;
    constructor(viewer: AuditTrailViewerService);
    listEvents(actorUserId?: string, entityType?: string, entityId?: string, action?: string, dateFrom?: string, dateTo?: string, page?: string, pageSize?: string): Promise<{
        total: number;
        page: number;
        pageSize: number;
        events: {
            id: string;
            occurredAt: Date;
            actorUserId: string | null;
            actorName: string;
            actorRole: string | null;
            action: import("../audit/audit.types").AuditAction;
            entityType: string;
            entityId: string;
            workflowStep: string | null;
            before: unknown;
            after: unknown;
        }[];
    }>;
    entityHistory(entityType: string, entityId: string): Promise<{
        id: string;
        occurredAt: Date;
        actorName: string;
        action: import("../audit/audit.types").AuditAction;
        workflowStep: string | null;
        before: unknown;
        after: unknown;
    }[]>;
    integrity(): Promise<{
        status: "NEVER_RUN";
        scheduledFor?: undefined;
        completedAt?: undefined;
        ok?: undefined;
        rowsChecked?: undefined;
        flaggedCount?: undefined;
    } | {
        status: import("../../generated/prisma/enums").ScheduledJobRunStatus;
        scheduledFor: Date;
        completedAt: Date | null;
        ok: boolean | null;
        rowsChecked: number | null;
        flaggedCount: number | null;
    }>;
    export(user: AuthenticatedUser, actorUserId?: string, entityType?: string, entityId?: string, action?: string, dateFrom?: string, dateTo?: string): Promise<{
        reportRunId: string;
        eventCount: number;
    }>;
}
