import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
export interface RequestMandateAmendmentInput {
    investorId: string;
    proposedTargetReturnRate?: number;
    proposedRolloverDefault?: 'AUTO' | 'MANUAL' | 'NONE';
    proposedEarlyExitWaiver?: boolean;
    requestedByUserId: string;
}
export declare class InvestorMandateAmendmentService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    private assertCapability;
    private assertEarlyExitWaiverAllowed;
    requestAmendment(input: RequestMandateAmendmentInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorMandateAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        proposedTargetReturnRate: import("@prisma/client-runtime-utils").Decimal | null;
        proposedRolloverDefault: import("../../generated/prisma/enums").RolloverDefault | null;
        proposedEarlyExitWaiver: boolean | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
    }>;
    decideAmendment(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorMandateAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        proposedTargetReturnRate: import("@prisma/client-runtime-utils").Decimal | null;
        proposedRolloverDefault: import("../../generated/prisma/enums").RolloverDefault | null;
        proposedEarlyExitWaiver: boolean | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
    }>;
    listForInvestor(investorId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorMandateAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        proposedTargetReturnRate: import("@prisma/client-runtime-utils").Decimal | null;
        proposedRolloverDefault: import("../../generated/prisma/enums").RolloverDefault | null;
        proposedEarlyExitWaiver: boolean | null;
        requestedByUserId: string;
        rejectionNotes: string | null;
    }[]>;
    getTrail(requestId: string): Promise<{
        request: {
            id: string;
            status: import("../../generated/prisma/enums").InvestorMandateAmendmentStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            investorId: string;
            proposedTargetReturnRate: import("@prisma/client-runtime-utils").Decimal | null;
            proposedRolloverDefault: import("../../generated/prisma/enums").RolloverDefault | null;
            proposedEarlyExitWaiver: boolean | null;
            requestedByUserId: string;
            rejectionNotes: string | null;
        };
        workflowTrail: {
            workflowInstanceId: string;
            workflowTypeCode: string;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            scenario: string | null;
            amountKobo: bigint | null;
            initiatedBy: {
                id: string;
                email: string;
                displayName: string;
            };
            createdAt: Date;
            updatedAt: Date;
            steps: {
                stepOrder: number;
                requiredFunctionCode: string;
                requiredFunctionDescription: string | null;
                description: string | null;
                decision: import("../../generated/prisma/enums").ApprovalDecision | null;
                approver: {
                    id: string;
                    displayName: string;
                    email: string;
                } | null;
                decidedAt: Date | null;
                notes: string | null;
            }[];
        } | null;
    }>;
}
