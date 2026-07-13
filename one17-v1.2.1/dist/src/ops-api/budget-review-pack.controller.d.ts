import type { AuthenticatedUser } from '../auth/auth.types';
import { BudgetReviewPackService } from '../budget-review-pack/budget-review-pack.service';
import { GenerateBudgetReviewPackDto } from './ops-api.types';
export declare class BudgetReviewPackController {
    private readonly pack;
    constructor(pack: BudgetReviewPackService);
    variancePreview(budgetVersionId: string, month: string): Promise<import("../budget-review-pack/budget-review-pack.types").VarianceViewResult>;
    generate(dto: GenerateBudgetReviewPackDto, user: AuthenticatedUser): Promise<{
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
        variance: import("../budget-review-pack/budget-review-pack.types").VarianceViewResult;
        workflowInstanceId: string;
    }>;
    approve(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
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
    history(): Promise<{
        reportRunId: string;
        templateCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        generatedByName: string;
        generatedAt: Date;
        workflowInstanceId: string | null;
        circulationStatus: string;
    }[]>;
}
