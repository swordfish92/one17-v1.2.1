import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ProposeRiskAppetiteMatrixVersionInput, UpdateCategoryThresholdsInput, ApproveRiskAppetiteMatrixVersionInput, ActiveRiskAppetiteMatrixResult, ApproveRiskRegisterEntryInput } from './risk.types';
export declare class RiskService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    proposeMatrixVersion(input: ProposeRiskAppetiteMatrixVersionInput): Promise<{
        matrixVersion: {
            id: string;
            status: import("../../generated/prisma/enums").RiskMatrixStatus;
            createdAt: Date;
            version: number;
            proposedByUserId: string | null;
            approvedByUserId: string | null;
            workflowInstanceId: string | null;
            effectiveFrom: Date | null;
            boardResolutionRef: string | null;
        };
        workflowInstance: any;
    }>;
    updateCategoryThresholds(input: UpdateCategoryThresholdsInput): Promise<{
        id: string;
        sortOrder: number;
        matrixVersionId: string;
        riskCategory: string;
        appetiteStatement: string | null;
        appetiteLevel: string | null;
        direction: import("../../generated/prisma/enums").RiskAppetiteDirection;
        isZeroTolerance: boolean;
        escalationOwner: string | null;
        greenThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        amberThreshold: import("@prisma/client-runtime-utils").Decimal | null;
        redThreshold: import("@prisma/client-runtime-utils").Decimal | null;
    }>;
    approveMatrixVersion(input: ApproveRiskAppetiteMatrixVersionInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskMatrixStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        boardResolutionRef: string | null;
    } | null>;
    getActiveMatrix(): Promise<ActiveRiskAppetiteMatrixResult>;
    getRiskRegister(status?: 'DRAFT' | 'ACTIVE'): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskRegisterStatus;
        createdAt: Date;
        description: string | null;
        approvedByUserId: string | null;
        boardResolutionRef: string | null;
        sortOrder: number;
        riskCategory: string;
        subCategory: string | null;
        inherentRiskRating: string | null;
        residualRiskRating: string | null;
        riskAppetiteStatement: string | null;
    }[]>;
    approveRiskRegisterEntry(input: ApproveRiskRegisterEntryInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").RiskRegisterStatus;
        createdAt: Date;
        description: string | null;
        approvedByUserId: string | null;
        boardResolutionRef: string | null;
        sortOrder: number;
        riskCategory: string;
        subCategory: string | null;
        inherentRiskRating: string | null;
        residualRiskRating: string | null;
        riskAppetiteStatement: string | null;
    }>;
    private assertCapability;
}
