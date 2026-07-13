export interface ConfigureGatewayProviderInput {
    providerSlot: number;
    name: string;
    webhookSecret?: string;
    apiConfig?: Record<string, unknown>;
    isActive: boolean;
}
export interface ConfigureCustodianAccountInput {
    providerId: string;
    productCode: string;
    custodianBankName: string;
    custodianAccountNumber: string;
    referenceCodePrefix: string;
    isActive: boolean;
}
export interface GatewayWebhookPayload {
    providerSlot: number;
    gatewayEventRef: string;
    amountKobo: string;
    settledAt: string;
    custodianAccountNumber: string;
    narration?: string;
    signature: string;
}
export interface ManualMatchInput {
    inflowId: string;
    investorId: string;
    productCode: string;
    actorUserId: string;
}
export declare class PaymentGatewayError extends Error {
}
