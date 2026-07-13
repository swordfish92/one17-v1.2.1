export interface ConfigureGatewayProviderInput {
  providerSlot: number;
  name: string;
  webhookSecret?: string; // omit to leave the existing secret unchanged
  // Invariant 73(b) (CHECK27): vendor-specific OUTBOUND API credentials
  // beyond the webhook signing secret (e.g. Flutterwave's separate API
  // Secret Key, Monnify's apiKey) -- omit to leave the existing apiConfig
  // unchanged, same write-only-masked convention as webhookSecret.
  apiConfig?: Record<string, unknown>;
  isActive: boolean;
}

export interface ConfigureCustodianAccountInput {
  providerId: string;
  productCode: string;
  custodianBankName: string;
  custodianAccountNumber: string;
  referenceCodePrefix: string;
  isActive: boolean;
}

// What a real vendor's webhook body would carry, reduced to the fields this
// adapter actually needs -- no vendor is contracted (invariant 55a PARK),
// so this shape is the seam a real integration plugs into, not a copy of
// any specific vendor's documented payload.
export interface GatewayWebhookPayload {
  providerSlot: number;
  gatewayEventRef: string;
  amountKobo: string; // string on the wire, parsed to bigint
  settledAt: string; // ISO date
  custodianAccountNumber: string;
  narration?: string;
  signature: string; // HMAC-SHA256 of the rest of the payload, hex-encoded
}

export interface ManualMatchInput {
  inflowId: string;
  investorId: string;
  productCode: string;
  actorUserId: string;
}

export class PaymentGatewayError extends Error {}
