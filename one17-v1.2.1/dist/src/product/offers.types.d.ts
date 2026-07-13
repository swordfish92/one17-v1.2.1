export declare const BENCHMARK_ONLY_DISCLAIMER = "Target return \u2014 benchmark only, not guaranteed";
export interface OfferBenchmarkRate {
    valuePct: number;
    isBenchmarkOnly: true;
    disclaimer: typeof BENCHMARK_ONLY_DISCLAIMER;
}
export interface OfferNavPoint {
    valuationDate: string;
    navPerUnit: string;
    totalNavKobo: string;
}
export interface OfferCard {
    productCode: string;
    name: string;
    engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
    sheetVersion: number;
    narrative: {
        brief: string | null;
        opportunity: string | null;
        dynamics: string | null;
        riskSummary: string | null;
        modelDescription: string | null;
    };
    targetedReturn: OfferBenchmarkRate | null;
    navHistory: OfferNavPoint[] | null;
    minimumSubscriptionKobo: string | null;
    minimumInvestmentKobo: string | null;
    minimumParticipationKobo: string | null;
    poolTenorMonths: number | null;
    tenorLockInMonths: number | null;
    distributionFrequency: string | null;
    mandateRoleModel: string | null;
    fundingStructure: string | null;
}
export interface OfferPublication {
    id: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version: number;
}
