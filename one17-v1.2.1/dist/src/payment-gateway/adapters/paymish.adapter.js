"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymishAdapter = void 0;
const payment_gateway_types_1 = require("../payment-gateway.types");
class PaymishAdapter {
    vendorCode = 'PAYMISH';
    vendorLabel = 'Paymish (HARD-DISABLED -- see QUESTIONS_FOR_REVIEW.md)';
    docUrl = 'UNCONFIRMED -- no public Paymish developer documentation was found; see QUESTIONS_FOR_REVIEW.md';
    verifyWebhookSignature() {
        throw new payment_gateway_types_1.PaymentGatewayError('Paymish is hard-disabled (invariant 75(d), CHECK28 v1.2.1 audit remediation): no real Paymish API contract has ever been confirmed, so this adapter has no executable webhook path at all. Re-enable only after a real vendor contract is approved.');
    }
    parseWebhookEvent() {
        throw new payment_gateway_types_1.PaymentGatewayError('Paymish is hard-disabled (invariant 75(d)) -- see verifyWebhookSignature.');
    }
    async verifyTransaction() {
        throw new payment_gateway_types_1.PaymentGatewayError('Paymish has no confirmed verify-transaction API endpoint published anywhere -- hard-disabled per invariant 75(d) until a real Paymish integration contract exists.');
    }
}
exports.PaymishAdapter = PaymishAdapter;
//# sourceMappingURL=paymish.adapter.js.map