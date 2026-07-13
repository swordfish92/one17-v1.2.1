import { PrismaService } from '../prisma/prisma.service';
export interface AuditEventFilter {
    actorUserId?: string;
    entityType?: string;
    entityId?: string;
    action?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
export declare class AuditTrailViewerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private buildWhere;
    listEvents(filter: AuditEventFilter, page: number, pageSize: number): Promise<{
        total: number;
        page: number;
        pageSize: number;
        events: {
            id: string;
            occurredAt: Date;
            actorUserId: string | null;
            actorName: string;
            actorRole: string | null;
            action: import("./audit.types").AuditAction;
            entityType: string;
            entityId: string;
            workflowStep: string | null;
            before: unknown;
            after: unknown;
        }[];
    }>;
    getEntityHistory(entityType: string, entityId: string): Promise<{
        id: string;
        occurredAt: Date;
        actorName: string;
        action: import("./audit.types").AuditAction;
        workflowStep: string | null;
        before: unknown;
        after: unknown;
    }[]>;
    getLatestIntegrityCheck(): Promise<{
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
    exportAsReportRun(filter: AuditEventFilter, actorUserId: string): Promise<{
        reportRunId: string;
        eventCount: number;
    }>;
}
