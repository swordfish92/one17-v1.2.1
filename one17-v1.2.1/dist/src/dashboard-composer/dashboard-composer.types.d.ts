export declare class DashboardComposerError extends Error {
    constructor(message: string);
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
export interface ResolvedTileValue {
    value: unknown;
    ragStatus?: 'GREEN' | 'AMBER' | 'RED' | 'AWAITING_MATRIX' | 'NOT_INSTRUMENTED' | 'INFORMATIONAL';
    note?: string;
}
