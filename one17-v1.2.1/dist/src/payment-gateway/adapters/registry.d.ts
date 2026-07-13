import { PaymentGatewayAdapter } from './types';
export type VendorCode = 'PAYSTACK' | 'FLUTTERWAVE' | 'MONNIFY' | 'PAYMISH';
export declare const ADAPTER_REGISTRY: Record<VendorCode, PaymentGatewayAdapter>;
export declare function detectVendorCode(providerName: string): VendorCode | null;
