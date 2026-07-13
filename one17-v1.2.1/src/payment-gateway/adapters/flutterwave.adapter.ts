import * as crypto from 'crypto';
import { PaymentGatewayError } from '../payment-gateway.types';
import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification, firstHeader, timingSafeEqualString } from './types';

// Invariant 73(b) (CHECK27) -- FLUTTERWAVE, verified against Flutterwave's
// own current published docs (12-Jul-2026, fetched live):
// https://developer.flutterwave.com/docs/webhooks
//
//   Signature verification: header `flutterwave-signature`, value =
//   HMAC-SHA256(secret hash, raw request body), BASE64-encoded (NOT hex --
//   confirmed distinct from Paystack/Monnify below). The page's dedicated
//   "Verifying Webhook Signatures" section walks through this in full
//   (including a raw-body-capture middleware sample) and is treated as
//   authoritative here.
//
//   DOCUMENTED DISCREPANCY (flagged for a human to confirm against a live
//   sandbox before go-live -- see QUESTIONS_FOR_REVIEW.md): the SAME docs
//   page's later "Examples" section shows a DIFFERENT, simpler check --
//   `signature !== secretHash`, i.e. a plain string compare of the header
//   against the configured secret hash with NO hashing at all. That reads
//   like stale/legacy example code carried over from Flutterwave's older
//   `verif-hash` scheme and is inconsistent with the fully-explained HMAC
//   method documented immediately above it on the same page. This adapter
//   implements the fully-explained HMAC-SHA256/base64 method as the primary
//   contract, since it is the one Flutterwave dedicates a full section to
//   explaining rather than a bare snippet.
//
//   The "secret hash" (provider.webhookSecret here) is a SEPARATE,
//   arbitrary, dashboard-configured value used ONLY for webhook
//   verification -- it is NOT the same credential as Flutterwave's API
//   "Secret Key" (starts with FLWSECK-...) used for outbound Bearer auth,
//   which lives in apiConfig.secretKey instead. This is the CLAUDE.md-cited
//   "Flutterwave's separate secret hash vs secret key" case.
//
//   Settlement event: `charge.completed`, data.status === 'succeeded'.
//   Flutterwave amounts are in the MAJOR currency unit (naira), NOT kobo --
//   confirmed distinct from Paystack's subunit convention -- so this
//   adapter converts *100.
//
//   Verify-transaction API: GET
//   https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=<ref>,
//   Authorization: Bearer <API Secret Key>, response.data.{status,amount,tx_ref}.
export class FlutterwaveAdapter implements PaymentGatewayAdapter {
  readonly vendorCode = 'FLUTTERWAVE';
  readonly vendorLabel = 'Flutterwave';
  readonly docUrl = 'https://developer.flutterwave.com/docs/webhooks';

  verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets, rawBody?: Buffer): void {
    const signature = firstHeader(headers['flutterwave-signature']);
    if (!signature) throw new PaymentGatewayError('Flutterwave webhook missing the flutterwave-signature header.');
    if (!secrets.webhookSecret) throw new PaymentGatewayError('No Flutterwave secret hash is configured on this provider slot -- cannot verify.');
    // Invariant 75(d) (CHECK28, v1.2.1 audit remediation CF-audit finding):
    // HMAC the RAW bytes, never JSON.stringify(parsedBody) -- Flutterwave's
    // own docs sign the exact wire body, and a parse/re-serialize round-trip
    // is not guaranteed to byte-match it (see types.ts's rawBody doc).
    if (!rawBody) {
      throw new PaymentGatewayError('Flutterwave webhook verification requires the raw request body (main.ts rawBody:true); none was captured -- refusing to fall back to a re-serialized JSON.stringify(parsedBody) comparison.');
    }
    const expected = crypto.createHmac('sha256', secrets.webhookSecret).update(rawBody).digest('base64');
    if (!timingSafeEqualString(signature, expected)) {
      throw new PaymentGatewayError('Flutterwave webhook signature verification failed.');
    }
  }

  parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null {
    if (parsedBody?.type !== 'charge.completed') return null;
    const data = parsedBody.data ?? {};
    if (data.status !== 'succeeded') return null;
    if (!data.reference || data.amount == null) {
      throw new PaymentGatewayError('Flutterwave charge.completed payload is missing data.reference/data.amount -- cannot book a settlement from it.');
    }
    // Same architectural note as PaystackAdapter: a checkout/card/mobile-
    // money charge carries no per-deposit bank-custodian-account field.
    // `data.meta` is Flutterwave's own merchant-supplied metadata bag --
    // the forward-compatible seam for when a live checkout integration
    // stamps a custodianAccountNumber into it at charge-initiation time.
    const meta = data.meta && typeof data.meta === 'object' ? data.meta : {};
    return {
      gatewayEventRef: `flutterwave:${data.reference}`,
      amountKobo: BigInt(Math.round(Number(data.amount) * 100)),
      settledAt: new Date(typeof data.created_datetime === 'number' ? data.created_datetime * 1000 : Date.now()),
      custodianAccountNumber: (meta as any).custodianAccountNumber ?? null,
      narration: data.description ?? data.customer?.email ?? null,
      rawPayload: parsedBody,
    };
  }

  async verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification> {
    const secretKey = secrets.apiConfig?.secretKey as string | undefined;
    if (!secretKey) {
      throw new PaymentGatewayError(
        'Flutterwave apiConfig.secretKey (the API Secret Key, distinct from the webhook secret hash) is not configured -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.',
      );
    }
    const res = await fetch(`https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secretKey}` },
    });
    const body: any = await res.json().catch(() => null);
    if (!res.ok) {
      throw new PaymentGatewayError(`Flutterwave verify-transaction call failed: HTTP ${res.status}${body?.message ? ` -- ${body.message}` : ''}`);
    }
    const status = body?.data?.status;
    return {
      verified: status === 'successful' || status === 'succeeded',
      status: status ?? 'unknown',
      amountKobo: body?.data?.amount != null ? BigInt(Math.round(Number(body.data.amount) * 100)) : null,
      reference: body?.data?.tx_ref ?? reference,
      raw: body,
    };
  }
}
