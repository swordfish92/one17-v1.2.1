export interface CanonicalSettlementEvent {
    gatewayEventRef: string;
    amountKobo: bigint;
    settledAt: Date;
    custodianAccountNumber: string | null;
    narration?: string | null;
    rawPayload: unknown;
}
export interface VendorTransactionVerification {
    verified: boolean;
    status: string;
    amountKobo: bigint | null;
    reference: string;
    raw: unknown;
}
export interface ProviderSecrets {
    webhookSecret: string;
    apiConfig: Record<string, unknown> | null;
}
export interface PaymentGatewayAdapter {
    readonly vendorCode: string;
    readonly vendorLabel: string;
    readonly docUrl: string;
    verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets, rawBody?: Buffer): void;
    parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null;
    verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification>;
}
export declare function firstHeader(v: string | string[] | undefined): string | undefined;
export declare function timingSafeEqualString(a: string | undefined, b: string): boolean;
