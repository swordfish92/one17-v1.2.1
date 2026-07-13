export interface BureauPullRequest {
    counterpartyId: string;
    legalName: string;
    rcNumber: string | null;
    providerName: string;
}
export type BureauPullStatus = 'MATCHED' | 'NO_MATCH' | 'ERROR' | 'PARKED' | 'NOT_CONFIGURED';
export interface BureauPullResult {
    status: BureauPullStatus;
    summary: string;
}
export type BureauAutomationLevel = 'AUTOMATED' | 'MANUAL_PENDING_API';
export interface CreditBureauAdapter {
    readonly automationLevel: BureauAutomationLevel;
    pull(request: BureauPullRequest, apiConfig: Record<string, unknown>): Promise<BureauPullResult>;
}
