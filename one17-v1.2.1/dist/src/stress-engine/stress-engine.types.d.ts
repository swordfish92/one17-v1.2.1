export declare class StressEngineError extends Error {
    constructor(message: string);
}
export type RunModeInput = 'SANDBOX' | 'BASELINE_CANDIDATE';
export interface RunStressInput {
    ledgerEntityCode: string;
    runMode: RunModeInput;
    ranByUserId: string;
    parameterOverrides?: Record<string, unknown>;
}
