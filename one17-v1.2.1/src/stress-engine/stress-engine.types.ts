export class StressEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StressEngineError';
  }
}

export type RunModeInput = 'SANDBOX' | 'BASELINE_CANDIDATE';

export interface RunStressInput {
  ledgerEntityCode: string;
  runMode: RunModeInput;
  ranByUserId: string;
  // SANDBOX-only: caller may override specific parameters for a Board
  // "what-if" without touching the stored scenario config row (amendment 27
  // — "runnable in SANDBOX mode... without touching the approved baseline").
  parameterOverrides?: Record<string, unknown>;
}
