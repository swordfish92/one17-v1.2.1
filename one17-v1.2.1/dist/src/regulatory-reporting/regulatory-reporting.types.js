"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTO_SOURCE_KEYS = exports.RegulatoryReportingError = void 0;
class RegulatoryReportingError extends Error {
    constructor(message) {
        super(message);
        this.name = 'RegulatoryReportingError';
    }
}
exports.RegulatoryReportingError = RegulatoryReportingError;
exports.AUTO_SOURCE_KEYS = [
    'TOTAL_AUM_KOBO',
    'MONTHLY_INCOME_KOBO',
    'MONTHLY_EXPENSE_KOBO',
    'EXPENSE_RATIO_PCT',
    'FUND_MANAGER_NAME',
    'REPORTING_ENTITY_EMAIL',
    'COMPLAINT_REGISTER_ROWS',
];
//# sourceMappingURL=regulatory-reporting.types.js.map