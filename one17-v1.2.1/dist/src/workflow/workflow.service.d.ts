import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { InitiateWorkflowInput } from './workflow.types';
export declare class WorkflowEngineService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    initiate(input: InitiateWorkflowInput): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    approveNextStep(workflowInstanceId: string, approverUserId: string, notes?: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    reject(workflowInstanceId: string, approverUserId: string, notes?: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    execute(workflowInstanceId: string, executorUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        updatedAt: Date;
        status: import("../../generated/prisma/enums").WorkflowStatus;
        createdAt: Date;
        workflowTypeCode: string;
        scenario: string | null;
        approvalRuleId: string;
        amountKobo: bigint | null;
        initiatedByUserId: string;
    }>;
    getInboxForUser(userId: string): Promise<{
        instance: {
            approvalRule: {
                steps: {
                    id: string;
                    description: string | null;
                    approvalRuleId: string;
                    stepOrder: number;
                    requiredFunctionCode: string;
                    requiresAmountLimitCheck: boolean;
                    isLockedSeat: boolean;
                    lockedSeatRationale: string | null;
                }[];
            } & {
                id: string;
                description: string | null;
                workflowTypeCode: string;
                ruleKey: string | null;
                chainVersionId: string;
                scenario: string | null;
                minAmountKobo: bigint | null;
                maxAmountKobo: bigint | null;
                initiatorFunctionCode: string;
                requiredChecksNote: string | null;
            };
            stepApprovals: {
                id: string;
                workflowInstanceId: string;
                approvalRuleStepId: string;
                approverUserId: string;
                decision: import("../../generated/prisma/enums").ApprovalDecision;
                decidedAt: Date;
                notes: string | null;
            }[];
        } & {
            id: string;
            entityType: string;
            entityId: string;
            updatedAt: Date;
            status: import("../../generated/prisma/enums").WorkflowStatus;
            createdAt: Date;
            workflowTypeCode: string;
            scenario: string | null;
            approvalRuleId: string;
            amountKobo: bigint | null;
            initiatedByUserId: string;
        };
        pendingStep: {
            id: string;
            stepOrder: number;
            requiredFunctionCode: string;
        };
        viaDelegationId?: string;
    }[]>;
    private loadPendingInstances;
    private resolveApprovalRule;
    private loadLiveInstance;
    private currentPendingStep;
    private resolveApproverEligibility;
    private denyStep;
    getTrail(workflowInstanceId: string): Promise<{
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
    }>;
}
