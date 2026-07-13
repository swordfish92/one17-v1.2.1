export class DashboardComposerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DashboardComposerError';
  }
}

export type DashboardScopeInput = 'PERSONAL' | 'DEPARTMENT';
export type TilePresentationInput = 'KPI_TILE' | 'TREND_LINE' | 'PIE' | 'BAR' | 'TABLE';

export interface ComposeTileInput {
  metricCode: string;
  presentation: TilePresentationInput;
  position: number;
}

export interface SaveDashboardInput {
  name: string;
  scope: DashboardScopeInput;
  orgUnitCode?: string;
  tiles: ComposeTileInput[];
}

// The rendered value shape a resolver returns -- deliberately the same
// vocabulary as DashboardMetric (invariant 43b) so the ops-ui can reuse
// DashboardPanels.tsx's formatValue/RAG_BADGE/MetricRow verbatim rather
// than inventing a second honest-N/A convention.
export interface ResolvedTileValue {
  value: unknown;
  ragStatus?: 'GREEN' | 'AMBER' | 'RED' | 'AWAITING_MATRIX' | 'NOT_INSTRUMENTED' | 'INFORMATIONAL';
  note?: string;
}
