export interface InitiateSubscriptionInput {
    investorId: string;
    productCode: string;
    amountKobo: bigint;
    effectiveDate: Date;
    initiatedByUserId: string;
}
export interface InitiateRedemptionInput {
    investorId: string;
    productCode: string;
    amountKobo: bigint;
    effectiveDate: Date;
    initiatedByUserId: string;
}
export interface ApproveSubscriptionInput {
    workflowInstanceId: string;
    approverUserId: string;
    journalInitiatorUserId: string;
    payerBankAccountId?: string;
    thirdPartyPayer?: {
        payerName: string;
        payerBankName: string;
        payerAccountNumber: string;
        declaredRelationship: string;
    };
}
export interface ApproveRedemptionInput {
    workflowInstanceId: string;
    approverUserId: string;
    payoutBankAccountId?: string;
}
export interface ConfirmDepositAndSetTargetInput {
    subscriptionRequestId: string;
    targetReturnPct: number;
    maturityDate: Date;
    profitPaymentInterval?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'AT_MATURITY';
    confirmedByUserId: string;
}
export declare class SubscriptionServiceError extends Error {
}
