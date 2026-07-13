import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification } from './types';
export declare class PaystackAdapter implements PaymentGatewayAdapter {
    readonly vendorCode = "PAYSTACK";
    readonly vendorLabel = "Paystack";
    readonly docUrl = "https://paystack.com/docs/payments/webhooks/";
    verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets): void;
    parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null;
    verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification>;
}
