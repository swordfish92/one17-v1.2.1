import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
export interface RequestContactAmendmentInput {
    investorId: string;
    proposedContactEmail?: string;
    proposedContactPhone?: string;
    proposedRegisteredAddress?: string;
    proposedTaxIdentificationNumber?: string;
    proposedSourceOfFunds?: string;
    proposedOccupationOrBusinessNature?: string;
    requestedByUserId: string;
}
export declare class InvestorContactAmendmentService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    private assertCapability;
    private assertEmailAvailable;
    requestAmendment(input: RequestContactAmendmentInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorContactAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        proposedContactEmail: string | null;
        proposedContactPhone: string | null;
        proposedRegisteredAddress: string | null;
        proposedTaxIdentificationNumber: string | null;
        proposedSourceOfFunds: string | null;
        proposedOccupationOrBusinessNature: string | null;
    }>;
    decideAmendment(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorContactAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        proposedContactEmail: string | null;
        proposedContactPhone: string | null;
        proposedRegisteredAddress: string | null;
        proposedTaxIdentificationNumber: string | null;
        proposedSourceOfFunds: string | null;
        proposedOccupationOrBusinessNature: string | null;
    }>;
    listForInvestor(investorId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorContactAmendmentStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        proposedContactEmail: string | null;
        proposedContactPhone: string | null;
        proposedRegisteredAddress: string | null;
        proposedTaxIdentificationNumber: string | null;
        proposedSourceOfFunds: string | null;
        proposedOccupationOrBusinessNature: string | null;
    }[]>;
    getTrail(requestId: string): Promise<{
        request: {
            id: string;
            status: import("../../generated/prisma/enums").InvestorContactAmendmentStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            investorId: string;
            requestedByUserId: string;
            rejectionNotes: string | null;
            proposedContactEmail: string | null;
            proposedContactPhone: string | null;
            proposedRegisteredAddress: string | null;
            proposedTaxIdentificationNumber: string | null;
            proposedSourceOfFunds: string | null;
            proposedOccupationOrBusinessNature: string | null;
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
