import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
export declare class DocumentService {
    private readonly prisma;
    private readonly delegation;
    private readonly audit;
    constructor(prisma: PrismaService, delegation: DelegationService, audit: AuditService);
    private assertCapability;
    attach(input: {
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
    }, actorUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    attachFromPortal(input: {
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
    }, counterpartyId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    listRequiredDocumentTypes(applicationType: string): Promise<string[]>;
    getChecklistStatus(applicationType: string, entityType: string, entityId: string): Promise<{
        required: string[];
        uploadedTypes: string[];
        missing: string[];
        complete: boolean;
    }>;
    addRequiredDocumentType(input: {
        applicationType: string;
        documentType: string;
    }, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }>;
    retireRequiredDocumentType(id: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }>;
    listRequiredDocumentConfig(applicationType?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        createdByUserId: string;
        documentType: string;
        applicationType: string;
    }[]>;
    listFor(entityType: string, entityId: string): Promise<({
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
    browse(filter: {
        entityType?: string;
        documentType?: string;
    }): Promise<({
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
}
