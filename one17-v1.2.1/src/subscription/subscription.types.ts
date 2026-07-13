export interface InitiateSubscriptionInput {
  investorId: string;
  productCode: string;
  amountKobo: bigint;
  effectiveDate: Date;
  initiatedByUserId: string;
}

export interface InitiateRedemptionInput {
  investorId: string;
  productCode: string;
  amountKobo: bigint;
  effectiveDate: Date;
  initiatedByUserId: string;
}

// Invariant 27(a)/28(a): the same own-account/third-party attribution
// LedgerService.createTxn already requires for a STAGE_1_EXPRESS investor's
// deposit -- collected here at approval time (the checker is the one
// actually processing the money, same as any other finance maker action),
// never at initiation (the initiator is placing a request, not confirming
// funds received).
// journalInitiatorUserId: invariant 42(b), following WmService.
// chargeAdvisoryFee's own established precedent verbatim -- "who may
// touch the ledger" (JOURNAL_ENTRIES) is a single, consistent gate,
// separate from "who may decide to place capital" (CAPITAL_PLACEMENT).
// PORT_OFF/PORT_MGR do not hold JOURNAL_ENTRIES; a FIN_ADMIN/CORP_
// SERVICES-capable actor must be named explicitly, same as WM's fee
// charge requires its own actorUserId distinct from WM_ADVISORY.
export interface ApproveSubscriptionInput {
  workflowInstanceId: string;
  approverUserId: string;
  journalInitiatorUserId: string;
  payerBankAccountId?: string;
  thirdPartyPayer?: {
    payerName: string;
    payerBankName: string;
    payerAccountNumber: string;
    declaredRelationship: string;
  };
}

export interface ApproveRedemptionInput {
  workflowInstanceId: string;
  approverUserId: string;
  // Invariant 51(a-i): omit to default to the investor's current ACTIVE
  // primary bank account; pass explicitly to target a specific account
  // (e.g. one still inside its post-change cooling-off window) -- see
  // LedgerService.createTxn's REDEMPTION branch, the actual gate.
  payoutBankAccountId?: string;
}

// CHECK16 62(h): the FA "confirm deposit + set target/maturity" step, POOL
// and MANDATE classes only. targetReturnPct is a plain percentage (e.g.
// 12.5), always rendered "benchmark only — not guaranteed" (invariant 44a)
// wherever it's shown.
// Invariant 65(a) (CHECK18): profitPaymentInterval is optional here --
// nullable on the account until FA sets it, same as targetReturnPct/
// maturityDate were before this same step confirmed them. Drives the
// Fund Obligations Schedule's projected-payout computation once set.
export interface ConfirmDepositAndSetTargetInput {
  subscriptionRequestId: string;
  targetReturnPct: number;
  maturityDate: Date;
  profitPaymentInterval?: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'AT_MATURITY';
  confirmedByUserId: string;
}

export class SubscriptionServiceError extends Error {}
