import type { AuthenticatedUser } from '../auth/auth.types';
import { ShariahGovernanceService } from '../shariah-governance/shariah-governance.service';
import { ProductService } from '../product/product.service';
import { PrismaService } from '../prisma/prisma.service';
import { ApproveProductShariahDto } from './ops-api.types';
export declare class ShariahGovernanceController {
    private readonly shariah;
    private readonly product;
    private readonly prisma;
    constructor(shariah: ShariahGovernanceService, product: ProductService, prisma: PrismaService);
    listMembers(): Promise<{
        id: string;
        status: string;
        createdAt: Date;
        name: string;
        effectiveFrom: Date | null;
        migrationSourceRef: string | null;
        memberRef: string;
        credentials: string | null;
    }[]>;
    listResolutions(): Promise<({
        proposedByMember: {
            name: string;
            memberRef: string;
        } | null;
    } & {
        id: string;
        status: string;
        createdAt: Date;
        notes: string | null;
        migrationSourceRef: string | null;
        effectiveDate: Date | null;
        summary: string;
        resolutionRef: string;
        resolutionDate: Date | null;
        proposedByMemberId: string | null;
        standardApplied: string | null;
        voteResult: string | null;
        documentRef: string | null;
    })[]>;
    listPurificationRecords(): Promise<{
        amountKobo: string;
        id: string;
        status: string;
        createdAt: Date;
        notes: string | null;
        migrationSourceRef: string | null;
        documentRef: string | null;
        purificationRef: string;
        identifiedDate: Date | null;
        sourceDescription: string;
        charityRecipient: string | null;
    }[]>;
    listComplianceChecks(): Promise<({
        reviewedByMember: {
            name: string;
            memberRef: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        description: string;
        notes: string | null;
        migrationSourceRef: string | null;
        result: string | null;
        frequency: string | null;
        standardApplied: string | null;
        documentRef: string | null;
        checkCode: string;
        reviewedByMemberId: string | null;
    })[]>;
    listProductsPendingShariah(): Promise<{
        status: import("../../generated/prisma/enums").ProductStatus;
        createdAt: Date;
        code: string;
        name: string;
        engineType: import("../../generated/prisma/enums").ProductEngineType;
        shariahApprovedAt: Date | null;
        shariahApprovalRef: string | null;
        setupWorkflowInstanceId: string | null;
    }[]>;
    approveProductShariah(code: string, dto: ApproveProductShariahDto, user: AuthenticatedUser): Promise<{
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
