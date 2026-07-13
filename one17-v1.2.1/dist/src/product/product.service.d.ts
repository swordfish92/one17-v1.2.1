import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
export declare class ProductServiceError extends Error {
}
export declare class ProductService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    approveProductShariah(input: {
        productCode: string;
        ssbResolutionRef: string;
        approvedByUserId: string;
    }): Promise<{
        status: import("../../generated/prisma/enums").ProductStatus;
        createdAt: Date;
        code: string;
        name: string;
        engineType: import("../../generated/prisma/enums").ProductEngineType;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
    }>;
}
