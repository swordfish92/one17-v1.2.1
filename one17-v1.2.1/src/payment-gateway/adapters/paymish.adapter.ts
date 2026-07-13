import { PaymentGatewayError } from '../payment-gateway.types';
import { CanonicalSettlementEvent, PaymentGatewayAdapter, VendorTransactionVerification } from './types';

// Invariant 75(d) (CHECK28, v1.2.1 audit remediation) -- PAYMISH: HARD-
// DISABLED.
//
// WebSearch + WebFetch (12-Jul-2026) found NO publicly published API or
// webhook specification for a Nigerian payment gateway named "Paymish" --
// see QUESTIONS_FOR_REVIEW.md. The prior CHECK27 version of this adapter
// implemented a GUESSED generic HMAC contract "clearly labelled as a
// placeholder" -- the independent v1.2.0 audit correctly flagged that a
// guessed financial-integrity contract is a risk the moment it is
// reachable at all, placeholder-labelled or not. Per the CEO's explicit
// remediation instruction, this is now an inert stub with ZERO executable
// path -- not merely an early throw guarding dead guessed logic underneath
// it (that guessed logic has been deleted outright, not just made
// unreachable). The class stays registered in registry.ts/ADAPTER_REGISTRY
// (invariant 73c extensibility doctrine) so re-enabling Paymish, once a
// real vendor contract is approved, is a one-file change here rather than
// re-registering a vendor from scratch.
export class PaymishAdapter implements PaymentGatewayAdapter {
  readonly vendorCode = 'PAYMISH';
  readonly vendorLabel = 'Paymish (HARD-DISABLED -- see QUESTIONS_FOR_REVIEW.md)';
  readonly docUrl = 'UNCONFIRMED -- no public Paymish developer documentation was found; see QUESTIONS_FOR_REVIEW.md';

  verifyWebhookSignature(): void {
    throw new PaymentGatewayError('Paymish is hard-disabled (invariant 75(d), CHECK28 v1.2.1 audit remediation): no real Paymish API contract has ever been confirmed, so this adapter has no executable webhook path at all. Re-enable only after a real vendor contract is approved.');
  }

  parseWebhookEvent(): CanonicalSettlementEvent | null {
    throw new PaymentGatewayError('Paymish is hard-disabled (invariant 75(d)) -- see verifyWebhookSignature.');
  }

  async verifyTransaction(): Promise<VendorTransactionVerification> {
    throw new PaymentGatewayError('Paymish has no confirmed verify-transaction API endpoint published anywhere -- hard-disabled per invariant 75(d) until a real Paymish integration contract exists.');
  }
}
