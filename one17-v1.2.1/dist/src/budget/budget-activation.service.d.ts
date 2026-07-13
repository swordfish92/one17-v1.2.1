import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
export declare class BudgetActivationService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    requestActivation(budgetVersionId: string, boardResolutionRef: string, requestedByUserId: string): Promise<{
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
    approveActivation(workflowInstanceId: string, approverUserId: string): Promise<{
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
    requestEncumbrance(budgetLineId: string, amountKobo: bigint, description: string, requestedByUserId: string): Promise<{
        encumbrance: {
            id: string;
            status: import("../../generated/prisma/enums").EncumbranceStatus;
            createdAt: Date;
            description: string;
            amountKobo: bigint;
            requestedByUserId: string;
            budgetLineId: string;
        };
        workflowInstance: any;
    }>;
    releaseEncumbrance(encumbranceId: string, actorUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").EncumbranceStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        requestedByUserId: string;
        budgetLineId: string;
    }>;
    listEncumbrances(actorUserId: string, filter?: {
        budgetLineId?: string;
        status?: 'OPEN' | 'RELEASED' | 'CONVERTED';
    }): Promise<{
        workflowInstance: {
            id: string;
            entityId: string;
            status: import("../../generated/prisma/enums").WorkflowStatus;
        } | null;
        budgetLine: {
            ledgerEntityCode: string;
            budgetLineGroup: string;
            lineDescription: string;
        };
        requestedBy: {
            email: string;
            displayName: string;
        };
        id: string;
        status: import("../../generated/prisma/enums").EncumbranceStatus;
        createdAt: Date;
        description: string;
        amountKobo: bigint;
        requestedByUserId: string;
        budgetLineId: string;
    }[]>;
    listActiveBudgetLinesForEncumbrance(actorUserId: string): Promise<{
        id: string;
        ledgerEntityCode: string;
        budgetLineGroup: string;
        lineDescription: string;
    }[]>;
    private assertCapability;
}
