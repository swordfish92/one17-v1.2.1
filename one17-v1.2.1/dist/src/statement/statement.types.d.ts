export declare class StatementError extends Error {
}
export type StatementAccountKind = 'PRODUCT' | 'MANDATE';
export interface StatementAccountSummary {
    id: string;
    kind: StatementAccountKind;
    productCode: string;
    productName: string;
    engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
    status: string;
}
export interface StatementPeriod {
    periodStart: Date;
    periodEnd: Date;
}
