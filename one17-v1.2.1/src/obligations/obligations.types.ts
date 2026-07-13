export class ObligationsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ObligationsError';
  }
}

// Invariant 65(a): "PROJECTION ONLY, labelled 'indicative — benchmark
// only, not guaranteed'; NEVER an accrual, NEVER touches the ledger."
export interface ProjectedPayoutItem {
  kind: 'PROJECTED_PROFIT_PAYOUT';
  investorId: string;
  investorName: string;
  productAccountId: string | null;
  ndMandateAccountId: string | null;
  projectedDate: string;
  projectedAmountKobo: string;
  interval: string;
}

export interface MaturityItem {
  kind: 'PRINCIPAL_MATURITY';
  investorId: string;
  investorName: string;
  productAccountId: string | null;
  ndMandateAccountId: string | null;
  maturityDate: string;
  principalKobo: string;
}

export interface CounterpartyInflowItem {
  kind: 'COUNTERPARTY_INFLOW';
  counterpartyId: string;
  counterpartyName: string;
  dueDate: string;
  amountKobo: string;
}

export type ObligationsScheduleItem = ProjectedPayoutItem | MaturityItem | CounterpartyInflowItem;

export interface CompilePayoutBatchInput {
  periodLabel: string;
  periodStart: Date;
  periodEnd: Date;
  compiledByUserId: string;
}
