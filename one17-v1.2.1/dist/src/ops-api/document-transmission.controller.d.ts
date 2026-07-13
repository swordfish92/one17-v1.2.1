import type { AuthenticatedUser } from '../auth/auth.types';
import { DocumentTransmissionService } from '../document-transmission/document-transmission.service';
import { TransmitDocumentDto } from './ops-api.types';
export declare class DocumentTransmissionController {
    private readonly documentTransmission;
    constructor(documentTransmission: DocumentTransmissionService);
    transmitDocument(dto: TransmitDocumentDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        fileReference: string;
        title: string;
        docType: string | null;
        transmittedByUserId: string;
    }>;
    listDocuments(user: AuthenticatedUser): Promise<({
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
    acknowledgeTransmission(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        acknowledgedAt: Date | null;
        taskId: string | null;
        documentId: string;
        recipientUserId: string;
    }>;
}
