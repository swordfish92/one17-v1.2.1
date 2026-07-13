export class KriEngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'KriEngineError';
  }
}

export interface ComputedReading {
  ledgerEntityCode: string | null;
  isAggregate: boolean;
  value: number | null;
  detail?: Record<string, unknown>;
}
