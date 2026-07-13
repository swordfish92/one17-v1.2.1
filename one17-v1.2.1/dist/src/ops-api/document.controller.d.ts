import type { AuthenticatedUser } from '../auth/auth.types';
import { DocumentService } from '../document/document.service';
import { AttachDocumentDto, RequiredDocumentConfigDto } from './ops-api.types';
export declare class DocumentController {
    private readonly documents;
    constructor(documents: DocumentService);
    listByEntity(entityType: string, entityId: string): Promise<({
        uploadedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    })[]>;
    attach(dto: AttachDocumentDto, user: AuthenticatedUser): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    browse(entityType?: string, documentType?: string): Promise<({
        uploadedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    })[]>;
    listRequiredDocumentConfig(applicationType?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }[]>;
    addRequiredDocumentConfig(dto: RequiredDocumentConfigDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }>;
    retireRequiredDocumentConfig(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }>;
}
