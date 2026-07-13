import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { GeneratePackInput, VarianceViewResult } from './budget-review-pack.types';
export declare class BudgetReviewPackService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    computeVarianceView(input: GeneratePackInput): Promise<VarianceViewResult>;
    generatePack(input: GeneratePackInput): Promise<{
        reportRun: {
            id: string;
            ledgerEntityCode: string;
            generatedByUserId: string;
            periodStart: Date;
            periodEnd: Date;
            basis: import("../../generated/prisma/enums").AccountingBasis;
            statementTemplateId: string | null;
            frameworkMapId: string;
            figures: import("@prisma/client/runtime/client").JsonValue;
            generatedAt: Date;
        };
        variance: VarianceViewResult;
        workflowInstanceId: string;
    }>;
    approveForCirculation(workflowInstanceId: string, approverUserId: string): Promise<{
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
    listPacks(): Promise<{
        reportRunId: string;
        templateCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        generatedByName: string;
        generatedAt: Date;
        workflowInstanceId: string | null;
        circulationStatus: string;
    }[]>;
    private getOrCreateTemplate;
    private assertCapability;
}
