export interface KriRosterEntry {
    code: string;
    name: string;
    category: string;
    direction: 'HIGHER_BETTER' | 'LOWER_BETTER';
    isZeroTolerance?: boolean;
    riskAppetiteCategoryRef?: string | null;
    computeStatus: 'INSTRUMENTED' | 'NOT_YET_INSTRUMENTED' | 'RESERVED';
    notes?: string;
}
export declare const KRI_ROSTER: KriRosterEntry[];
