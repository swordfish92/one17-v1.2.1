import { CanonicalSettlementEvent, PaymentGatewayAdapter, VendorTransactionVerification } from './types';
export declare class PaymishAdapter implements PaymentGatewayAdapter {
    readonly vendorCode = "PAYMISH";
    readonly vendorLabel = "Paymish (HARD-DISABLED -- see QUESTIONS_FOR_REVIEW.md)";
    readonly docUrl = "UNCONFIRMED -- no public Paymish developer documentation was found; see QUESTIONS_FOR_REVIEW.md";
    verifyWebhookSignature(): void;
    parseWebhookEvent(): CanonicalSettlementEvent | null;
    verifyTransaction(): Promise<VendorTransactionVerification>;
}
