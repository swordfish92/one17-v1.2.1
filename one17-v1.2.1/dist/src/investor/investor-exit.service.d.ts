import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
export interface RequestExitInput {
    investorId: string;
    exitType: 'MATURITY_TRANSITION' | 'FINAL_EXIT';
    requestedByUserId: string;
}
export declare class InvestorExitService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    private assertCapability;
    private assertNoOpenHoldings;
    requestExit(input: RequestExitInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorExitRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        exitType: import("../../generated/prisma/enums").InvestorExitType;
    }>;
    decideExit(workflowInstanceId: string, approverUserId: string, decision: 'APPROVE' | 'REJECT', notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorExitRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        exitType: import("../../generated/prisma/enums").InvestorExitType;
    }>;
    listForInvestor(investorId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").InvestorExitRequestStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        investorId: string;
        requestedByUserId: string;
        rejectionNotes: string | null;
        exitType: import("../../generated/prisma/enums").InvestorExitType;
    }[]>;
    getTrail(requestId: string): Promise<{
        request: {
            id: string;
            status: import("../../generated/prisma/enums").InvestorExitRequestStatus;
            createdAt: Date;
            workflowInstanceId: string | null;
            investorId: string;
            requestedByUserId: string;
            rejectionNotes: string | null;
            exitType: import("../../generated/prisma/enums").InvestorExitType;
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
    runDormancySweep(now: Date): Promise<{
        checked: number;
        markedDormant: number;
        reactivated: number;
    }>;
}
