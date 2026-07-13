import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification } from './types';
export declare class MonnifyAdapter implements PaymentGatewayAdapter {
    readonly vendorCode = "MONNIFY";
    readonly vendorLabel = "Monnify";
    readonly docUrl = "https://developers.monnify.com/docs/webhooks";
    verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets): void;
    parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null;
    verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification>;
}
