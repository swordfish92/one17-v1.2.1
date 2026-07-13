import { AuditAction } from '../../generated/prisma/client';
export { AuditAction };
export interface RecordAuditEventInput {
    actorUserId?: string;
    actorRole?: string;
    action: AuditAction;
    entityType: string;
    entityId: string;
    workflowStep?: string;
    before?: Record<string, unknown> | null;
    after?: Record<string, unknown> | null;
    ipAddress?: string;
    sessionId?: string;
    requestId?: string;
}
