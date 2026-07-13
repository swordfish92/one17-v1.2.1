export class TaxError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'TaxError';
  }
}

export type TaxTypeCode = 'WHT' | 'VAT' | 'STAMP_DUTY';

// Invariant 65(c)(i): shape depends on taxType -- the calculator reads
// this Json, never a literal rate in code.
export type WhtRateRow = { category: 'INDIVIDUAL' | 'CORPORATE'; incomeType: string; ratePct: number };
export type VatRateRow = { serviceOrFeeType: string; ratePct: number };
export type StampDutyRateRow = { instrumentType: string; mode: 'RATE' | 'FLAT'; ratePct?: number; flatKobo?: string };

export interface ProposeTaxRateVersionInput {
  taxType: TaxTypeCode;
  rates: WhtRateRow[] | VatRateRow[] | StampDutyRateRow[];
  effectiveFrom: Date;
  proposedByUserId: string;
}

export interface ApproveTaxRateVersionInput {
  workflowInstanceId: string;
  approverUserId: string;
}

export interface GrantExemptionInput {
  investorId: string;
  taxType: TaxTypeCode;
  reason: string;
  grantedByUserId: string;
}

export interface ComputeWhtInput {
  investorId: string;
  incomeType: string;
  grossKobo: bigint;
  transactionDate: Date;
}

export interface ComputeWhtResult {
  whtKobo: bigint;
  netKobo: bigint;
  exempt: boolean;
  configured: boolean;
  rateVersionId: string | null;
}

export interface ComputeVatInput {
  serviceOrFeeType: string;
  amountKobo: bigint;
  transactionDate: Date;
}

export interface ComputeVatResult {
  vatKobo: bigint;
  configured: boolean;
  rateVersionId: string | null;
}

export interface CreateFeeInvoiceInput {
  counterpartyId?: string;
  investorId?: string;
  description: string;
  feeAmountKobo: bigint;
  serviceOrFeeType: string;
  invoiceDate: Date;
  createdByUserId: string;
}

export interface RecognizeVendorInvoiceVatInput {
  vendorInvoiceId: string;
  serviceOrFeeType: string;
  actorUserId: string;
}

export interface AssessStampDutyInput {
  instrumentType: string;
  entityType: string;
  entityId: string;
  baseAmountKobo?: bigint;
  transactionDate: Date;
  assessedByUserId: string;
}

export interface ConfigureTaxGlMappingInput {
  taxType: TaxTypeCode;
  payableAccountCode: string;
  configuredByUserId: string;
}

export interface ConfigureRemittanceDueDateInput {
  taxType: TaxTypeCode;
  authority: string;
  dayOfMonthDue: number;
}
