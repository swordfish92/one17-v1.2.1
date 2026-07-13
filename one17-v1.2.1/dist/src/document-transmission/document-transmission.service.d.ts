import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { NotificationService } from '../notification/notification.service';
import { TaskService } from '../task/task.service';
import { TransmitDocumentInput } from './document-transmission.types';
export declare class DocumentTransmissionService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly notification;
    private readonly task;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, notification: NotificationService, task: TaskService);
    transmitDocument(input: TransmitDocumentInput, actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        fileReference: string;
        title: string;
        docType: string | null;
        transmittedByUserId: string;
    }>;
    acknowledgeTransmission(documentId: string, actorUserId: string): Promise<{
        id: string;
        createdAt: Date;
        acknowledgedAt: Date | null;
        taskId: string | null;
        documentId: string;
        recipientUserId: string;
    }>;
    listDocumentsForViewer(actorUserId: string): Promise<({
        transmittedBy: {
            displayName: string;
        };
        recipients: {
            createdAt: Date;
            acknowledgedAt: Date | null;
            recipientUserId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        fileReference: string;
        title: string;
        docType: string | null;
        transmittedByUserId: string;
    })[]>;
    private assertCapability;
}
