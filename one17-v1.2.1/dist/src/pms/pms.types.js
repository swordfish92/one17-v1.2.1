"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TAX_RULE_CONFIG_V1 = exports.GATE_SEVERITY_CONFIG = exports.INCENTIVE_BANDS = exports.PmsError = void 0;
class PmsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PmsError';
    }
}
exports.PmsError = PmsError;
exports.INCENTIVE_BANDS = [
    { minScorePct: 90, payoutPct: 100, sortOrder: 1 },
    { minScorePct: 80, payoutPct: 80, sortOrder: 2 },
    { minScorePct: 70, payoutPct: 60, sortOrder: 3 },
    { minScorePct: 60, payoutPct: 40, sortOrder: 4 },
    { minScorePct: 0, payoutPct: 0, sortOrder: 5 },
];
exports.GATE_SEVERITY_CONFIG = [
    { severity: 'NONE', outcome: 'FULL_RELEASE' },
    { severity: 'MINOR', outcome: 'CAPPED', cappedPct: 50 },
    { severity: 'MAJOR', outcome: 'DEFERRED' },
    { severity: 'SEVERE', outcome: 'SUSPENDED' },
];
exports.TAX_RULE_CONFIG_V1 = {
    version: 1,
    consolidatedReliefFlatKobo: 20000000n,
    consolidatedReliefPctOfGross: 21,
    bands: [
        { fromKobo: '0', toKobo: '30000000', ratePct: 7 },
        { fromKobo: '30000000', toKobo: '60000000', ratePct: 11 },
        { fromKobo: '60000000', toKobo: '110000000', ratePct: 15 },
        { fromKobo: '110000000', toKobo: '160000000', ratePct: 19 },
        { fromKobo: '160000000', toKobo: '320000000', ratePct: 21 },
        { fromKobo: '320000000', toKobo: null, ratePct: 24 },
    ],
    pensionEmployeePct: 8,
    nhfPct: 2.5,
};
//# sourceMappingURL=pms.types.js.map