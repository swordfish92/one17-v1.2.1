export declare class ZakatError extends Error {
    constructor(message: string);
}
export declare const ZAKAT_RATE_THOUSANDTHS_OF_PERCENT: Record<'LUNAR' | 'GREGORIAN', number>;
export interface DeclareZakatItemInput {
    zakatAssessmentRunId: string;
    scheduleType: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
    description: string;
    amountKobo: bigint;
    zakatability: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
    declaredByUserId: string;
}
export type DeclareZakatItemClientInput = Omit<DeclareZakatItemInput, 'declaredByUserId'>;
