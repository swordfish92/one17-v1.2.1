"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE = exports.COA_TEMPLATE_BY_ENGINE_TYPE = exports.ProductFactoryError = void 0;
class ProductFactoryError extends Error {
}
exports.ProductFactoryError = ProductFactoryError;
const PENDING_REF = 'PENDING -- see invariant 44b product-factory CoA template (One17_Reporting_Standards_Spec_v1.md: no authoritative per-account FAS/IFRS citation supplied yet)';
const FUND_ACCOUNTS_BASE = [
    { accountCode: '1000', accountName: 'Cash', accountType: 'ASSET' },
    { accountCode: '1110', accountName: 'Investment Account', accountType: 'ASSET' },
    { accountCode: '1200', accountName: 'Accrued Income', accountType: 'ASSET' },
    { accountCode: '2000', accountName: 'Redemption Payable', accountType: 'LIABILITY' },
    { accountCode: '2020', accountName: 'Fee Payable', accountType: 'LIABILITY' },
    { accountCode: '2060', accountName: 'Distribution Payable', accountType: 'LIABILITY' },
    { accountCode: '2070', accountName: 'Charity Payable', accountType: 'LIABILITY' },
    { accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY' },
    { accountCode: '3020', accountName: 'Retained Earnings', accountType: 'EQUITY' },
    { accountCode: '4010', accountName: 'Income', accountType: 'INCOME' },
    { accountCode: '5030', accountName: 'Fee Expense', accountType: 'EXPENSE' },
    { accountCode: '6000', accountName: 'Impairment / Loss Expense', accountType: 'EXPENSE' },
];
function withPendingRefs(rows) {
    return rows.map((r) => ({ ...r, aaoifiRef: PENDING_REF, ifrsRef: PENDING_REF }));
}
exports.COA_TEMPLATE_BY_ENGINE_TYPE = {
    UNIT_NAV: withPendingRefs(FUND_ACCOUNTS_BASE),
    PSR_WATERFALL: withPendingRefs(FUND_ACCOUNTS_BASE.filter((a) => a.accountCode !== '1110')),
    MANDATE: withPendingRefs(FUND_ACCOUNTS_BASE.filter((a) => a.accountCode !== '1110')),
};
exports.LEDGER_ENTITY_TYPE_BY_ENGINE_TYPE = {
    UNIT_NAV: 'FUND',
    PSR_WATERFALL: 'POOL',
    MANDATE: 'MANDATE',
};
//# sourceMappingURL=product-factory.types.js.map