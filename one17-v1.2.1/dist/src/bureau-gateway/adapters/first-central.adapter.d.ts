import { BureauPullRequest, BureauPullResult, CreditBureauAdapter } from './bureau-adapter.types';
export interface FirstCentralApiConfig {
    baseUrl: string;
    username: string;
    password: string;
    enquiryReason: string;
    productId: string;
    reportEndpoint: string;
}
export declare function readFirstCentralApiConfig(apiConfig: Record<string, unknown>): FirstCentralApiConfig | null;
export declare function parseLoginResponse(raw: unknown): string | null;
export interface CommercialMatchCandidate {
    matchingEngineId: string;
    subscriberEnquiryId: string;
    commercialId: string;
    businessName: string;
    tradingName?: string;
    registrationNo?: string;
    taxIdNo?: string;
    accountNo?: string;
}
export declare function parseCommercialMatchResponse(raw: unknown): CommercialMatchCandidate[];
export declare function summarizeCommercialReportResponse(raw: unknown): string;
export declare class FirstCentralAdapter implements CreditBureauAdapter {
    readonly automationLevel: "AUTOMATED";
    pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult>;
}
