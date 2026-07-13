import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
export declare class InvestorBankAccountChangeService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly documents;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, documents: DocumentService);
    private assertCapability;
    requestChange(input: {
        investorId: string;
        proposedBankName: string;
        proposedAccountNumber: string;
        proposedAccountName: string;
        proposedAccountType?: string;
        proposedCurrency?: string;
        requestedByUserId: string;
    }): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankAccountChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        coolingOffEndsAt: Date | null;
        proposedBankName: string;
        proposedAccountNumber: string;
        proposedAccountName: string;
        proposedAccountType: string | null;
        proposedCurrency: string | null;
        reVerifiedByUserId: string | null;
        reVerifiedAt: Date | null;
        reVerificationNotes: string | null;
        resultingBankAccountId: string | null;
    }>;
    attachEvidence(requestId: string, actorUserId: string, input: {
        documentType: string;
        fileReference: string;
    }): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    getEvidenceChecklist(requestId: string): Promise<{
        required: string[];
        uploadedTypes: string[];
        missing: string[];
        complete: boolean;
    }>;
    submitChange(requestId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankAccountChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        coolingOffEndsAt: Date | null;
        proposedBankName: string;
        proposedAccountNumber: string;
        proposedAccountName: string;
        proposedAccountType: string | null;
        proposedCurrency: string | null;
        reVerifiedByUserId: string | null;
        reVerifiedAt: Date | null;
        reVerificationNotes: string | null;
        resultingBankAccountId: string | null;
    }>;
    decideChangeRequest(requestId: string, actorUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankAccountChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        coolingOffEndsAt: Date | null;
        proposedBankName: string;
        proposedAccountNumber: string;
        proposedAccountName: string;
        proposedAccountType: string | null;
        proposedCurrency: string | null;
        reVerifiedByUserId: string | null;
        reVerifiedAt: Date | null;
        reVerificationNotes: string | null;
        resultingBankAccountId: string | null;
    }>;
    private activateChange;
    settleDueChanges(investorId: string): Promise<void>;
    listForInvestor(investorId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BankAccountChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        coolingOffEndsAt: Date | null;
        proposedBankName: string;
        proposedAccountNumber: string;
        proposedAccountName: string;
        proposedAccountType: string | null;
        proposedCurrency: string | null;
        reVerifiedByUserId: string | null;
        reVerifiedAt: Date | null;
        reVerificationNotes: string | null;
        resultingBankAccountId: string | null;
    }[]>;
    getTrail(requestId: string): Promise<{
        request: {
            id: string;
            status: import("../../generated/prisma/enums").BankAccountChangeStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            investorId: string;
            requestedByUserId: string;
            rejectionNotes: string | null;
            coolingOffEndsAt: Date | null;
            proposedBankName: string;
            proposedAccountNumber: string;
            proposedAccountName: string;
            proposedAccountType: string | null;
            proposedCurrency: string | null;
            reVerifiedByUserId: string | null;
            reVerifiedAt: Date | null;
            reVerificationNotes: string | null;
            resultingBankAccountId: string | null;
        };
        documents: ({
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
        })[];
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
