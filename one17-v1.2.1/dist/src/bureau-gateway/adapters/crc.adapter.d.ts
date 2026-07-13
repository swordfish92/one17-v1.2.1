import { BureauPullRequest, BureauPullResult, CreditBureauAdapter } from './bureau-adapter.types';
export declare class CrcAdapter implements CreditBureauAdapter {
    readonly automationLevel: "MANUAL_PENDING_API";
    pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult>;
}
