export class DashboardError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DashboardError';
  }
}

// Invariant 43(b): the visible face of ReconciliationService.reconcile()
// on a dashboard metric — operational figure vs ledger figure, both in
// kobo as strings (BigInt-safe over JSON), and whether the variance
// breached the governed tolerance.
export interface ReconTile {
  operationalKobo: string;
  ledgerKobo: string;
  varianceKobo: string;
  toleranceKobo: string;
  breached: boolean;
}

export interface DashboardMetric {
  label: string;
  value: unknown;
  ragStatus?: string;
  note?: string;
  reconTile?: ReconTile;
}

export interface DashboardGroup {
  groupCode: string;
  title: string;
  metrics?: DashboardMetric[];
  tableColumns?: string[];
  tableRows?: Record<string, unknown>[];
  note?: string;
}
