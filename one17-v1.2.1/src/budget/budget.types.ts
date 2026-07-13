export type PhasingMethod =
  | 'ACTUAL_PHASED'
  | 'EVEN_12'
  | 'DRIVER_PCT_OF_FUM'
  | 'DRIVER_PCT_OF_MOBILIZATION'
  | 'PRIOR_YEAR_UPLIFT'
  | 'ESCALATING_MONTHLY'
  | 'FIXED_MONTHLY';

export interface ParsedSheetLine {
  label: string;
  groupLabel: string;
  monthlyValues: number[]; // naira, 12 entries, Jan..Dec
  exportedTotal: number | null; // naira, the sheet's own Total/Cummulative/FY column
  sourceRowRef: string; // e.g. "07:132"
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
  rejectedLines: { label: string; reason: string }[];
}

export class BudgetExtractionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BudgetExtractionError';
  }
}
