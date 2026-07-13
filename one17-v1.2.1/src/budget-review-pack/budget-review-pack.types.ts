export interface VarianceLine {
  budgetLineId: string;
  budgetLineGroup: string;
  lineDescription: string;
  budgetKobo: bigint;
  committedKobo: bigint;
  actualKobo: bigint;
  varianceKobo: bigint;
  variancePct: number | null;
  ytdBudgetKobo: bigint;
  ytdActualKobo: bigint;
  ytdVarianceKobo: bigint;
  fyBudgetKobo: bigint;
  fyReforecastKobo: bigint | null; // only differs from fyBudgetKobo for driver-phased lines with an actual-driver override
  rag: 'GREEN' | 'AMBER' | 'RED' | null;
}

export interface VarianceViewResult {
  suspended: boolean;
  message?: string;
  month?: number;
  lines: VarianceLine[];
}

export interface GeneratePackInput {
  templateCode: 'MONTHLY_MGMT_BUDGET_PACK' | 'QUARTERLY_BOARD_BUDGET_PACK';
  budgetVersionId: string;
  month: number;
  // Scope boundary (documented): real GL-to-budget-line actual matching is
  // not yet built (no cost-centre FK from JournalEntryLine to BudgetLine
  // exists) — actuals are supplied explicitly here for this pass, keyed by
  // budgetLineId. Encumbrances are read for real (empty per invariant 20's
  // "schema only, ships empty" scope).
  actualsByLineIdKobo: Record<string, bigint>;
  // Driver re-forecast input: when an actual FUM/mobilization figure for a
  // month diverges from the original driver series, the re-forecast column
  // recomputes — the budget column never does. Keyed by driver basis name.
  actualDriverOverrides?: { FUM?: number; MOBILIZATION?: number };
  generatedByUserId: string;
}

export class BudgetReviewPackError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BudgetReviewPackError';
  }
}
