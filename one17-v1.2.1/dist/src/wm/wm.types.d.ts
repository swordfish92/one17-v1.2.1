export declare class WmError extends Error {
    constructor(message: string);
}
export declare const ASSET_CLASSES: {
    code: string;
    label: string;
    shariahScreeningRule?: string;
}[];
export type NwcsTier = 'BASE_MASS' | 'CORE_MASS' | 'UPPER_MASS' | 'MASS_AFFLUENT' | 'AFFLUENT' | 'HNI' | 'VHNI' | 'UHNI' | 'CENTIMILLIONAIRE' | 'BILLIONAIRE';
export declare const TIER_BANDS: {
    tier: NwcsTier;
    minTotalWealthUsd: number;
    sortOrder: number;
    serviceDescriptor: string;
}[];
export declare const DEFAULT_NAIRA_PER_USD = 1400;
export declare const STRESS_SCENARIOS: {
    scenarioCode: string;
    label: string;
    shockPctByAssetClass: Record<string, number>;
}[];
