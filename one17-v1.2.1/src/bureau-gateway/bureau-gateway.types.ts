export class BureauGatewayError extends Error {}

export interface ConfigureBureauProviderInput {
  providerSlot: number;
  name: string;
  apiConfig: Record<string, unknown>;
  costPerPullKobo: bigint;
  isActive: boolean;
}

export interface UpdateBureauPolicyInput {
  minIntervalDays: number;
}
