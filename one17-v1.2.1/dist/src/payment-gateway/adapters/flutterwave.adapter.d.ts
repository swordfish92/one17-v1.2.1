import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification } from './types';
export declare class FlutterwaveAdapter implements PaymentGatewayAdapter {
    readonly vendorCode = "FLUTTERWAVE";
    readonly vendorLabel = "Flutterwave";
    readonly docUrl = "https://developer.flutterwave.com/docs/webhooks";
    verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets, rawBody?: Buffer): void;
    parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null;
    verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification>;
}
