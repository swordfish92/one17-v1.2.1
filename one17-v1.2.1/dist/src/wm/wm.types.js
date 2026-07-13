"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRESS_SCENARIOS = exports.DEFAULT_NAIRA_PER_USD = exports.TIER_BANDS = exports.ASSET_CLASSES = exports.WmError = void 0;
class WmError extends Error {
    constructor(message) {
        super(message);
        this.name = 'WmError';
    }
}
exports.WmError = WmError;
exports.ASSET_CLASSES = [
    { code: 'EQUITIES_EXTERNAL', label: 'Equities (external)', shariahScreeningRule: 'AAOIFI screen: debt/market-cap < 33%, non-compliant income < 5%' },
    { code: 'REAL_ESTATE', label: 'Real estate' },
    { code: 'FIXED_DEPOSITS', label: 'Fixed deposits (other banks)', shariahScreeningRule: 'Conventional interest-bearing — non-compliant by default' },
    { code: 'BUSINESS_INTERESTS', label: 'Business interests' },
    { code: 'COMMODITIES', label: 'Commodities' },
    { code: 'FOREIGN_HOLDINGS', label: 'Foreign holdings' },
    { code: 'CASH_AT_OTHER_BANKS', label: 'Cash at other banks' },
    { code: 'SUKUK_EXTERNAL', label: 'Sukuk (external)' },
    { code: 'OTHER', label: 'Other' },
];
exports.TIER_BANDS = [
    { tier: 'BASE_MASS', minTotalWealthUsd: 0, sortOrder: 1, serviceDescriptor: 'Financial Inclusion' },
    { tier: 'CORE_MASS', minTotalWealthUsd: 5_000, sortOrder: 2, serviceDescriptor: 'Financial Stability' },
    { tier: 'UPPER_MASS', minTotalWealthUsd: 25_000, sortOrder: 3, serviceDescriptor: 'Asset Accumulation' },
    { tier: 'MASS_AFFLUENT', minTotalWealthUsd: 100_000, sortOrder: 4, serviceDescriptor: 'Structured Planning' },
    { tier: 'AFFLUENT', minTotalWealthUsd: 250_000, sortOrder: 5, serviceDescriptor: 'Preservation & Expansion' },
    { tier: 'HNI', minTotalWealthUsd: 1_000_000, sortOrder: 6, serviceDescriptor: 'Private Banking' },
    { tier: 'VHNI', minTotalWealthUsd: 5_000_000, sortOrder: 7, serviceDescriptor: 'Family Office' },
    { tier: 'UHNI', minTotalWealthUsd: 30_000_000, sortOrder: 8, serviceDescriptor: 'Institutional Structuring' },
    { tier: 'CENTIMILLIONAIRE', minTotalWealthUsd: 100_000_000, sortOrder: 9, serviceDescriptor: 'Strategic Ownership' },
    { tier: 'BILLIONAIRE', minTotalWealthUsd: 1_000_000_000, sortOrder: 10, serviceDescriptor: 'Global Capital' },
];
exports.DEFAULT_NAIRA_PER_USD = 1_400;
exports.STRESS_SCENARIOS = [
    {
        scenarioCode: 'MODERATE_MARKET_CORRECTION',
        label: 'Moderate market correction',
        shockPctByAssetClass: {
            ONE17_CUSTODY: -8,
            EQUITIES_EXTERNAL: -20,
            REAL_ESTATE: -5,
            FIXED_DEPOSITS: 0,
            BUSINESS_INTERESTS: -15,
            COMMODITIES: -15,
            FOREIGN_HOLDINGS: -10,
            CASH_AT_OTHER_BANKS: 0,
            SUKUK_EXTERNAL: -3,
            OTHER: -10,
        },
    },
    {
        scenarioCode: 'SEVERE_DOWNTURN',
        label: 'Severe downturn',
        shockPctByAssetClass: {
            ONE17_CUSTODY: -20,
            EQUITIES_EXTERNAL: -45,
            REAL_ESTATE: -15,
            FIXED_DEPOSITS: 0,
            BUSINESS_INTERESTS: -35,
            COMMODITIES: -30,
            FOREIGN_HOLDINGS: -25,
            CASH_AT_OTHER_BANKS: 0,
            SUKUK_EXTERNAL: -8,
            OTHER: -25,
        },
    },
];
//# sourceMappingURL=wm.types.js.map