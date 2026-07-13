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
    fyReforecastKobo: bigint | null;
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
    actualsByLineIdKobo: Record<string, bigint>;
    actualDriverOverrides?: {
        FUM?: number;
        MOBILIZATION?: number;
    };
    generatedByUserId: string;
}
export declare class BudgetReviewPackError extends Error {
    constructor(message: string);
}
