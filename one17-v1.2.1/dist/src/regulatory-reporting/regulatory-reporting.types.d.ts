export declare class RegulatoryReportingError extends Error {
    constructor(message: string);
}
export declare const AUTO_SOURCE_KEYS: readonly ["TOTAL_AUM_KOBO", "MONTHLY_INCOME_KOBO", "MONTHLY_EXPENSE_KOBO", "EXPENSE_RATIO_PCT", "FUND_MANAGER_NAME", "REPORTING_ENTITY_EMAIL", "COMPLAINT_REGISTER_ROWS"];
export type AutoSourceKey = (typeof AUTO_SOURCE_KEYS)[number];
