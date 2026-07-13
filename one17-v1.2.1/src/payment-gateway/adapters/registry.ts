import { PaymentGatewayAdapter } from './types';
import { PaystackAdapter } from './paystack.adapter';
import { FlutterwaveAdapter } from './flutterwave.adapter';
import { MonnifyAdapter } from './monnify.adapter';
import { PaymishAdapter } from './paymish.adapter';

export type VendorCode = 'PAYSTACK' | 'FLUTTERWAVE' | 'MONNIFY' | 'PAYMISH';

// Invariant 73(b)/(e) (CHECK27): the four CEO-named PAYMENTS connectors.
// Adding a 5th vendor is ONE new file implementing PaymentGatewayAdapter +
// ONE new entry here -- nothing else in PaymentGatewayService, the
// controllers, or ops-ui changes (invariant 73c extensibility doctrine).
export const ADAPTER_REGISTRY: Record<VendorCode, PaymentGatewayAdapter> = {
  PAYSTACK: new PaystackAdapter(),
  FLUTTERWAVE: new FlutterwaveAdapter(),
  MONNIFY: new MonnifyAdapter(),
  PAYMISH: new PaymishAdapter(),
};

// Invariant 73(b) (CHECK27): rather than adding a new schema column to
// PaymentGatewayProvider to identify which adapter a slot uses (a genuine
// schema touch this task is deliberately scoped to avoid -- see the task
// brief's "strongly prefer the no-schema-change route"), the vendor is
// detected from the provider's own free-text `name` field. Finance/ICT
// names a slot "Paystack", "Flutterwave (Main)", "Monnify - HalalFund", etc
// at propose time (ops-ui labels the field accordingly) and this case-
// insensitive substring match resolves it back to a VendorCode. Returns
// null (never throws) when a provider's name doesn't match any known
// vendor -- callers treat that as "no adapter available for this slot yet"
// rather than a hard error, since a slot can exist for a future/unnamed
// vendor too.
export function detectVendorCode(providerName: string): VendorCode | null {
  const upper = providerName.toUpperCase();
  const codes = Object.keys(ADAPTER_REGISTRY) as VendorCode[];
  return codes.find((code) => upper.includes(code)) ?? null;
}
