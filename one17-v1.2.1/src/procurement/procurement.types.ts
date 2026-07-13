export interface CreateVendorInput {
  vendorCode: string;
  legalName: string;
  rcNumber?: string;
  tin?: string;
  bankName?: string;
  bankAccountNumber?: string;
  bankAccountName?: string;
  createdByUserId: string;
}

export interface CreatePurchaseOrderLineInput {
  description: string;
  quantity: number;
  unitPriceKobo: bigint;
}

export interface CreatePurchaseOrderInput {
  poNumber: string;
  vendorId: string;
  encumbranceId: string;
  ledgerEntityCode: string;
  description: string;
  lines: CreatePurchaseOrderLineInput[];
  createdByUserId: string;
}

export interface MatchInvoiceInput {
  invoiceId: string;
  actorUserId: string;
  // Required only when the PO's budget_line.class is CAPEX (Budget Spec
  // §4: "Asset register (CAPEX lines -> company assets)") — an operational
  // fact Corporate Services supplies per asset, not a governed magnitude
  // (invariant 10 governs scenario/threshold config, not "this laptop's
  // useful life"), so there is deliberately no default.
  assetUsefulLifeMonths?: number;
}

// Invariant 51(b-x) (CHECK13): fixed-asset disposal/derecognition.
export interface DisposeAssetInput {
  assetRegisterEntryId: string;
  disposalDate: Date;
  proceedsKobo: bigint;
  gainLossAccountCode: string;
  disposedByUserId: string;
}

export class ProcurementError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProcurementError';
  }
}
