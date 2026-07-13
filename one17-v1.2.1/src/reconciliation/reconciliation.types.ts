export type ReconciliationResult =
  | { configured: false }
  | {
      configured: true;
      operationalKobo: bigint;
      ledgerKobo: bigint;
      varianceKobo: bigint;
      toleranceKobo: bigint;
      breached: boolean;
    };
