export interface OpenPeriodInput {
  ledgerEntityCode: string;
  periodStart: Date;
  periodEnd: Date;
  openedByUserId: string;
}

export interface RequestPeriodCloseInput {
  periodId: string;
  initiatedByUserId: string;
}

export interface ApprovePeriodCloseInput {
  workflowInstanceId: string;
  approverUserId: string;
}

// Thrown for accounting-period lifecycle business rules that fail before
// hitting the database — same role as LedgerLifecycleError elsewhere.
export class PeriodLifecycleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PeriodLifecycleError';
  }
}
