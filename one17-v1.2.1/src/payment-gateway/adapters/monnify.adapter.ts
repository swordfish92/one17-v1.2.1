import * as crypto from 'crypto';
import { PaymentGatewayError } from '../payment-gateway.types';
import { CanonicalSettlementEvent, PaymentGatewayAdapter, ProviderSecrets, VendorTransactionVerification, firstHeader, timingSafeEqualString } from './types';

// Invariant 73(b) (CHECK27) -- MONNIFY, verified against Monnify's own
// current published docs (12-Jul-2026, fetched live):
// https://developers.monnify.com/docs/webhooks
//
//   Signature verification: header `monnify-signature`, value =
//   HMAC-SHA512(client secret key, JSON.stringify(request body)),
//   hex-encoded. Quote: "validate the monnify-signature header by computing
//   an HMAC-SHA512 hash of the request body using your client secret and
//   comparing it to the value sent by Monnify." NOTE (Monnify's own
//   documented caveat): "the monnify-signature header is only included on
//   webhook notifications sent in production, it is not present on sandbox
//   notifications" -- a missing header is therefore refused here rather
//   than silently accepted, consistent with every other vendor's fail-
//   closed behaviour; a sandbox-mode toggle is a real-vendor-contracting
//   follow-up, not something to special-case here.
//
//   Monnify's "client secret" does DOUBLE DUTY for both the webhook hash
//   above AND the OAuth2 login Basic-auth password used by
//   verifyTransaction() below -- so `provider.webhookSecret` is reused for
//   both, exactly as Monnify's own docs use one "clientSecret" value
//   throughout. apiConfig only needs to carry the separate `apiKey`
//   (+ optional `baseUrl` override for a sandbox tenant).
//
//   Settlement event: `eventType === "SUCCESSFUL_TRANSACTION"`,
//   eventData.paymentStatus === "PAID". Monnify amounts (amountPaid) are in
//   the MAJOR currency unit (naira), confirmed from the docs' own sample
//   ("amount": 100.00 style, NOT kobo) -- same *100 conversion as
//   Flutterwave. eventData.destinationAccountInformation.accountNumber is
//   the reserved-account number the client transferred into -- this is the
//   vendor best-matched to this platform's existing "custodian account per
//   product, client transfers in directly" model (unlike the
//   checkout/card-first Paystack/Flutterwave flows above).
//
//   Verify-transaction API: OAuth2 login (POST /api/v1/auth/login, Basic
//   base64(apiKey:clientSecret) -> responseBody.accessToken), then GET
//   /api/v2/merchant/transactions/query?paymentReference=<ref>, Bearer
//   <accessToken>.
export class MonnifyAdapter implements PaymentGatewayAdapter {
  readonly vendorCode = 'MONNIFY';
  readonly vendorLabel = 'Monnify';
  readonly docUrl = 'https://developers.monnify.com/docs/webhooks';

  verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets): void {
    const signature = firstHeader(headers['monnify-signature']);
    if (!signature) throw new PaymentGatewayError('Monnify webhook missing the monnify-signature header (only sent in production per Monnify\'s own docs).');
    if (!secrets.webhookSecret) throw new PaymentGatewayError('No Monnify client secret is configured on this provider slot -- cannot verify.');
    const expected = crypto.createHmac('sha512', secrets.webhookSecret).update(JSON.stringify(parsedBody)).digest('hex');
    if (!timingSafeEqualString(signature, expected)) {
      throw new PaymentGatewayError('Monnify webhook signature verification failed.');
    }
  }

  parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null {
    if (parsedBody?.eventType !== 'SUCCESSFUL_TRANSACTION') return null;
    const data = parsedBody.eventData ?? {};
    if (data.paymentStatus !== 'PAID') return null;
    if (!data.paymentReference || data.amountPaid == null) {
      throw new PaymentGatewayError('Monnify SUCCESSFUL_TRANSACTION payload is missing eventData.paymentReference/amountPaid -- cannot book a settlement from it.');
    }
    return {
      gatewayEventRef: `monnify:${data.paymentReference}`,
      amountKobo: BigInt(Math.round(Number(data.amountPaid) * 100)),
      settledAt: parseMonnifyPaidOn(data.paidOn),
      custodianAccountNumber: data.destinationAccountInformation?.accountNumber ?? null,
      narration: data.paymentDescription ?? data.customer?.name ?? null,
      rawPayload: parsedBody,
    };
  }

  async verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification> {
    const apiKey = secrets.apiConfig?.apiKey as string | undefined;
    const clientSecret = secrets.webhookSecret;
    const baseUrl = (secrets.apiConfig?.baseUrl as string | undefined) ?? 'https://api.monnify.com';
    if (!apiKey || !clientSecret) {
      throw new PaymentGatewayError(
        'Monnify apiConfig.apiKey and the client secret (provider.webhookSecret, doubling as Monnify\'s clientSecret) must both be configured -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.',
      );
    }
    const loginRes = await fetch(`${baseUrl}/api/v1/auth/login`, {
      method: 'POST',
      headers: { Authorization: `Basic ${Buffer.from(`${apiKey}:${clientSecret}`).toString('base64')}` },
    });
    const loginBody: any = await loginRes.json().catch(() => null);
    const accessToken = loginBody?.responseBody?.accessToken;
    if (!loginRes.ok || !accessToken) {
      throw new PaymentGatewayError(`Monnify OAuth2 login failed: HTTP ${loginRes.status}${loginBody?.responseMessage ? ` -- ${loginBody.responseMessage}` : ''}`);
    }
    const res = await fetch(`${baseUrl}/api/v2/merchant/transactions/query?paymentReference=${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const body: any = await res.json().catch(() => null);
    if (!res.ok) {
      throw new PaymentGatewayError(`Monnify transaction query failed: HTTP ${res.status}${body?.responseMessage ? ` -- ${body.responseMessage}` : ''}`);
    }
    const data = body?.responseBody ?? {};
    return {
      verified: data?.paymentStatus === 'PAID',
      status: data?.paymentStatus ?? 'unknown',
      amountKobo: data?.amountPaid != null ? BigInt(Math.round(Number(data.amountPaid) * 100)) : null,
      reference: data?.paymentReference ?? reference,
      raw: body,
    };
  }
}

// Monnify's own sample payloads render paidOn as "17/11/2021 3:48:10 PM"
// (dd/mm/yyyy h:mm:ss AM/PM) -- not ISO-8601 and not parseable by a bare
// `new Date(string)` in Node. Falls back to "now" (never throws/blocks a
// real settlement on a date-format surprise) if the format doesn't match.
function parseMonnifyPaidOn(paidOn: unknown): Date {
  if (typeof paidOn !== 'string') return new Date();
  const m = paidOn.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) {
    const fallback = new Date(paidOn);
    return Number.isNaN(fallback.getTime()) ? new Date() : fallback;
  }
  const [, dd, mm, yyyy, hh, min, ss, ampm] = m;
  let hour = Number(hh) % 12;
  if (ampm.toUpperCase() === 'PM') hour += 12;
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd), hour, Number(min), Number(ss));
}
