import * as crypto from 'crypto';
import { PaymentGatewayError } from '../payment-gateway.types';
import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification, firstHeader, timingSafeEqualString } from './types';

// Invariant 73(b) (CHECK27) -- PAYSTACK, verified against Paystack's own
// current published docs (12-Jul-2026):
//
//   Signature verification: https://paystack.com/docs/payments/webhooks/
//   -- header `x-paystack-signature`, value = HMAC-SHA512(secret key,
//   JSON.stringify(request body)), hex-encoded. Paystack's own sample code
//   computes over `JSON.stringify(req.body)` (the PARSED-then-restringified
//   body), not guaranteed-identical wire bytes -- this adapter mirrors that
//   exactly (same honest limitation this codebase already disclosed for the
//   synthetic payload in PaymentGatewayService.receiveWebhook: no raw-body
//   -capture middleware is wired, since no vendor is contracted yet to
//   dictate hardening the exact bytes matter for; a real integration can
//   tighten this to a captured raw buffer later with zero interface change).
//   ONE secret key does double duty for both webhook signing AND API Bearer
//   auth (Paystack has no separate "secret hash" the way Flutterwave does),
//   so `provider.webhookSecret` is also what verifyTransaction() uses below.
//
//   Settlement event: `charge.success` ("A successful charge was made"),
//   data.status === 'success'. Paystack amounts are already in the SUBUNIT
//   of the currency (kobo for NGN) per the Initialize Transaction docs --
//   no *100 conversion, unlike Flutterwave/Monnify below.
//
//   Verify-transaction API: https://paystack.com/docs/api/transaction/
//   GET https://api.paystack.co/transaction/verify/:reference,
//   Authorization: Bearer <secret key>, response.data.{status,amount,
//   reference,paid_at}.
export class PaystackAdapter implements PaymentGatewayAdapter {
  readonly vendorCode = 'PAYSTACK';
  readonly vendorLabel = 'Paystack';
  readonly docUrl = 'https://paystack.com/docs/payments/webhooks/';

  verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets): void {
    const signature = firstHeader(headers['x-paystack-signature']);
    if (!signature) throw new PaymentGatewayError('Paystack webhook missing the x-paystack-signature header.');
    if (!secrets.webhookSecret) throw new PaymentGatewayError('No Paystack secret key is configured on this provider slot -- cannot verify.');
    const expected = crypto.createHmac('sha512', secrets.webhookSecret).update(JSON.stringify(parsedBody)).digest('hex');
    if (!timingSafeEqualString(signature, expected)) {
      throw new PaymentGatewayError('Paystack webhook signature verification failed.');
    }
  }

  parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null {
    if (parsedBody?.event !== 'charge.success') return null;
    const data = parsedBody.data ?? {};
    if (data.status !== 'success') return null;
    if (!data.reference || data.amount == null) {
      throw new PaymentGatewayError('Paystack charge.success payload is missing data.reference/data.amount -- cannot book a settlement from it.');
    }
    // Paystack collects through its own checkout infrastructure and settles
    // to the merchant's single settlement account -- unlike a direct
    // reserved-bank-account transfer (Monnify below), a card/USSD/mobile-
    // money charge.success payload carries no per-deposit "custodian bank
    // account number" field. The forward-compatible seam is `data.metadata`
    // (an arbitrary key/value bag the merchant sets at
    // transaction/initialize time) -- a future live checkout integration
    // that stamps `custodianAccountNumber` into metadata will auto-match;
    // until then this honestly falls through to the suspense queue exactly
    // like an unparseable narration does today, never a fabricated match.
    const meta = data.metadata && typeof data.metadata === 'object' ? data.metadata : {};
    return {
      gatewayEventRef: `paystack:${data.reference}`,
      amountKobo: BigInt(Math.round(Number(data.amount))),
      settledAt: new Date(data.paid_at ?? data.created_at ?? Date.now()),
      custodianAccountNumber: (meta as any).custodianAccountNumber ?? null,
      narration: (meta as any).narration ?? data.customer?.email ?? null,
      rawPayload: parsedBody,
    };
  }

  async verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification> {
    if (!secrets.webhookSecret) {
      throw new PaymentGatewayError(
        'Paystack secret key is not configured (provider.webhookSecret doubles as the API Bearer key per Paystack convention) -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.',
      );
    }
    const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secrets.webhookSecret}` },
    });
    const body: any = await res.json().catch(() => null);
    if (!res.ok || !body?.status) {
      throw new PaymentGatewayError(`Paystack verify-transaction call failed: HTTP ${res.status}${body?.message ? ` -- ${body.message}` : ''}`);
    }
    return {
      verified: body.data?.status === 'success',
      status: body.data?.status ?? 'unknown',
      amountKobo: body.data?.amount != null ? BigInt(Math.round(Number(body.data.amount))) : null,
      reference: body.data?.reference ?? reference,
      raw: body,
    };
  }
}
