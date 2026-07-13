export type PhasingMethod = 'ACTUAL_PHASED' | 'EVEN_12' | 'DRIVER_PCT_OF_FUM' | 'DRIVER_PCT_OF_MOBILIZATION' | 'PRIOR_YEAR_UPLIFT' | 'ESCALATING_MONTHLY' | 'FIXED_MONTHLY';
export interface ParsedSheetLine {
    label: string;
    groupLabel: string;
    monthlyValues: number[];
    exportedTotal: number | null;
    sourceRowRef: string;
}
export interface ClassifiedBudgetLine extends ParsedSheetLine {
    phasingMethod: PhasingMethod;
    driverBasis: string | null;
    driverRateOrFactor: number | null;
    escalatorFactors: number[] | null;
    isActive: boolean;
    flaggedReason: string | null;
    valuesAsGiven: boolean;
}
export interface GateResult {
    gate: string;
    description: string;
    passed: boolean;
    detail: string;
}
export interface SheetExtractionSummary {
    sheetName: string;
    linesExtracted: number;
    rejectedLines: {
        label: string;
        reason: string;
    }[];
}
export declare class BudgetExtractionError extends Error {
    constructor(message: string);
}
