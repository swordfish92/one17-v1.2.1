export interface SetHalalFundLaunchConfigInput {
    ledgerEntityCode: string;
    createdByUserId: string;
    approvedByUserId?: string;
    launchDate: Date;
    launchPrice: number;
    offerSpreadPct: number;
    bidSpreadPct: number;
    feeRates: {
        feeType: string;
        annualRatePct: number;
    }[];
    boardResolutionRef?: string;
    ssbResolutionRef?: string;
}
export declare class HalalFundLaunchConfigError extends Error {
    constructor(message: string);
}
