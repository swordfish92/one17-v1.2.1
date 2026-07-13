export declare class DashboardError extends Error {
    constructor(message: string);
}
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
