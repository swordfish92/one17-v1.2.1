export declare class KriEngineError extends Error {
    constructor(message: string);
}
export interface ComputedReading {
    ledgerEntityCode: string | null;
    isAggregate: boolean;
    value: number | null;
    detail?: Record<string, unknown>;
}
