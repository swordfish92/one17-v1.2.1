import * as crypto from 'crypto';

// Invariant 73(b)/(c) (CHECK27): the PUBLISHED ADAPTER INTERFACE every
// PAYMENTS connector (Paystack/Flutterwave/Monnify/Paymish, and any future
// vendor One17 hasn't pre-built) satisfies. Adding a 5th vendor = one new
// class implementing PaymentGatewayAdapter + one entry in registry.ts --
// ZERO change to PaymentGatewayService, the controllers, or the ops-ui
// beyond what surfaces the new provider slot (invariant 73c's
// "extensibility doctrine", tenant-neutral per invariant 19).

/** The canonical shape every vendor adapter normalizes its settlement event
 *  into -- the ONLY handoff point into PaymentGatewayInflow creation
 *  (PaymentGatewayService.ingestSettlementEvent is the single place a row
 *  gets written, whichever adapter produced the event). */
export interface CanonicalSettlementEvent {
  gatewayEventRef: string;
  amountKobo: bigint;
  settledAt: Date;
  custodianAccountNumber: string | null;
  narration?: string | null;
  rawPayload: unknown;
}

/** Result of an outbound "verify transaction" / settlement-confirmation API
 *  call against the vendor's own API -- the second half of invariant 73(b)
 *  ("webhook signature verification + settlement-confirmation parse"),
 *  distinct from trusting the inbound webhook alone. */
export interface VendorTransactionVerification {
  verified: boolean;
  status: string;
  amountKobo: bigint | null;
  reference: string;
  raw: unknown;
}

/** provider.webhookSecret + provider.apiConfig, exactly as stored on
 *  PaymentGatewayProvider -- passed through undecoded so each adapter
 *  interprets its own vendor-specific shape (some vendors, e.g. Monnify and
 *  Paystack, use ONE secret for both webhook-signing and outbound API auth;
 *  others, e.g. Flutterwave, use genuinely separate credentials -- see each
 *  adapter's own header comment for which). */
export interface ProviderSecrets {
  webhookSecret: string;
  apiConfig: Record<string, unknown> | null;
}

export interface PaymentGatewayAdapter {
  readonly vendorCode: string;
  readonly vendorLabel: string;
  /** Doc URL(s) the signature scheme + payload shape were verified against
   *  (or an explicit UNCONFIRMED marker -- see PaymishAdapter). */
  readonly docUrl: string;

  /** Verify the inbound webhook's authenticity against the vendor's real,
   *  documented signature scheme. MUST throw PaymentGatewayError on a
   *  missing/invalid signature -- never return a boolean (fail loud, never
   *  a silently-ignored false that a caller might forget to check).
   *
   *  `rawBody` (invariant 75(d), CHECK28 v1.2.1 audit remediation): the
   *  exact bytes Nest received on the wire (main.ts's `rawBody: true`),
   *  before JSON parsing/re-serialization. A vendor whose signature scheme
   *  is documented as HMAC-over-the-raw-body (Flutterwave) MUST verify
   *  against this, never `JSON.stringify(parsedBody)` -- key order,
   *  whitespace, and number formatting are not guaranteed to survive a
   *  parse/re-serialize round-trip, so a re-stringified body can silently
   *  fail to match bytes the vendor actually signed. Optional because not
   *  every vendor's documented scheme needs it (Paystack/Monnify's own
   *  sample code computes over JSON.stringify(req.body) directly). */
  verifyWebhookSignature(headers: Record<string, string | string[] | undefined>, parsedBody: unknown, secrets: ProviderSecrets, rawBody?: Buffer): void;

  /** Parse an ALREADY-VERIFIED webhook body into the canonical settlement
   *  shape. Returns null when the event type is real but not a
   *  settlement/charge-success event worth booking (e.g. a transfer,
   *  dispute, or subscription webhook) -- the caller still acks 200 to the
   *  vendor without creating an inflow. Throws PaymentGatewayError if the
   *  event IS a settlement event but is missing fields this adapter
   *  requires to book it (never silently drops a real settlement). */
  parseWebhookEvent(parsedBody: any): CanonicalSettlementEvent | null;

  /** Outbound settlement-confirmation call against the vendor's own
   *  verify-transaction API -- ships CALLABLE (real request/response
   *  parsing against the vendor's documented shape) but every live call
   *  needs a real apiConfig/webhookSecret credential (invariant 73d:
   *  adapters ship INERT -- a tenant enters their own keys and approves to
   *  go live; One17 never ships a tenant's secrets). Throws
   *  PaymentGatewayError with a clear message when the needed credential
   *  isn't configured, exactly like BureauGatewayService's honest
   *  "NOT CONTRACTED" placeholder discipline. */
  verifyTransaction(reference: string, secrets: ProviderSecrets): Promise<VendorTransactionVerification>;
}

/** Nest's @Headers() decorator hands back lowercase keys, string | string[]
 *  (an array only if the header was repeated on the wire). */
export function firstHeader(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

/** Constant-time string compare for signature values, whatever encoding
 *  (hex or base64) the vendor uses -- avoids both a length-leak (fails
 *  closed, never throws, on a length mismatch) and a naive `===` timing
 *  side-channel. */
export function timingSafeEqualString(a: string | undefined, b: string): boolean {
  if (!a) return false;
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length || bufA.length === 0) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}
