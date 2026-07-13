export interface SetHalalFundLaunchConfigInput {
  ledgerEntityCode: string;
  createdByUserId: string;
  approvedByUserId?: string;
  launchDate: Date;
  launchPrice: number;
  offerSpreadPct: number;
  bidSpreadPct: number;
  // Formula Library B0/F-HF-04: 5 fee types, annual rate on NAV. Kept as a
  // JSON array (invariant 10: fee types are config vocabulary, not a fixed
  // struct) rather than 5 hardcoded columns.
  feeRates: { feeType: string; annualRatePct: number }[];
  boardResolutionRef?: string;
  ssbResolutionRef?: string;
}

export class HalalFundLaunchConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HalalFundLaunchConfigError';
  }
}
