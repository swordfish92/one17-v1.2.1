import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ClassifiedBudgetLine, GateResult, ParsedSheetLine } from './budget.types';
export declare class BudgetExtractionService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    parseGroupedSheet(csvContent: string, opts: {
        startRow: number;
        labelCol: number;
        firstMonthCol: number;
        totalCol: number | null;
        endRow?: number;
    }): ParsedSheetLine[];
    buildFormulaLookup(csvContent: string, opts: {
        startRow: number;
        labelCol: number;
        firstMonthCol: number;
    }): Map<string, string[]>;
    classifyLine(line: ParsedSheetLine, formulas: string[] | undefined): ClassifiedBudgetLine;
    gateMonthlyEqualsFy(line: ClassifiedBudgetLine): GateResult;
    gateDetailEqualsControlTotal(groupLabel: string, month: number, detailSum: number, controlTotal: number | null): GateResult;
    gateDriverRecomputation(line: ClassifiedBudgetLine, driverSeries: number[]): GateResult[];
    createBudgetVersion(fiscalYear: number, scenarioLabel: string, status: 'DRAFT' | 'BOARD_APPROVED', proposedByUserId: string): Promise<{
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
    listBudgetVersions(): Promise<({
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
    listBudgetLines(budgetVersionId: string): Promise<{
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
    saveBudgetLine(budgetVersionId: string, ledgerEntityCode: string, line: ClassifiedBudgetLine, cls: 'OPEX' | 'CAPEX' | 'REVENUE' | 'STAFF', sourceSheet: string): Promise<{
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
    }>;
    saveBudgetTarget(budgetVersionId: string, targetType: string, month: number | null, value: number, unit: string, sourceSheetRef: string): Promise<{
        id: string;
        createdAt: Date;
        budgetVersionId: string;
        sourceSheetRef: string;
        month: number | null;
        targetType: string;
        value: import("@prisma/client-runtime-utils").Decimal;
        unit: string;
    }>;
    private assertCapability;
}
export declare function parseWorkbookNumber(value: string | undefined): number | null;
