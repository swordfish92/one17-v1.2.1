import type { AuthenticatedUser } from '../auth/auth.types';
import { BudgetExtractionService } from '../budget/budget-extraction.service';
import { BudgetActivationService } from '../budget/budget-activation.service';
import { CreateBudgetVersionDto, RequestEncumbranceDto } from './ops-api.types';
export declare class BudgetController {
    private readonly budget;
    private readonly activation;
    constructor(budget: BudgetExtractionService, activation: BudgetActivationService);
    listVersions(): Promise<({
        _count: {
            lines: number;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").BudgetVersionStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        fiscalYear: number;
        scenarioLabel: string;
        linkedObjectiveCodes: string[];
    })[]>;
    createVersion(dto: CreateBudgetVersionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").BudgetVersionStatus;
        createdAt: Date;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        boardResolutionRef: string | null;
        fiscalYear: number;
        scenarioLabel: string;
        linkedObjectiveCodes: string[];
    }>;
    listLines(id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean;
        ledgerEntityCode: string;
        budgetVersionId: string;
        budgetLineGroup: string;
        lineDescription: string;
        class: import("../../generated/prisma/enums").BudgetLineClass;
        phasingMethod: import("../../generated/prisma/enums").BudgetPhasingMethod;
        driverBasis: string | null;
        driverRateOrFactor: import("@prisma/client-runtime-utils").Decimal | null;
        escalatorFactorsJson: import("@prisma/client/runtime/client").JsonValue | null;
        sourceSheetRef: string;
        flaggedReason: string | null;
        valuesAsGiven: boolean;
    }[]>;
    listEncumbrances(user: AuthenticatedUser): Promise<{
        amountKobo: string;
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
        requestedByUserId: string;
        budgetLineId: string;
    }[]>;
    listActiveLinesForEncumbrance(user: AuthenticatedUser): Promise<{
        id: string;
        ledgerEntityCode: string;
        budgetLineGroup: string;
        lineDescription: string;
    }[]>;
    requestEncumbrance(dto: RequestEncumbranceDto, user: AuthenticatedUser): Promise<{
        encumbrance: {
            amountKobo: string;
            id: string;
            status: import("../../generated/prisma/enums").EncumbranceStatus;
            createdAt: Date;
            description: string;
            requestedByUserId: string;
            budgetLineId: string;
        };
        workflowInstanceId: any;
    }>;
    releaseEncumbrance(id: string, user: AuthenticatedUser): Promise<{
        amountKobo: string;
        id: string;
        status: import("../../generated/prisma/enums").EncumbranceStatus;
        createdAt: Date;
        description: string;
        requestedByUserId: string;
        budgetLineId: string;
    }>;
}
