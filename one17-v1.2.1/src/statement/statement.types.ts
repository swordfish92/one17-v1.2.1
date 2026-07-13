export class StatementError extends Error {}

export type StatementAccountKind = 'PRODUCT' | 'MANDATE';

// Invariant 44(d) (CHECK10): the one entry every investor's portal shows,
// listing EVERY holding (ProductAccount rows for FUND/POOL products, plus
// NdMandateAccount rows for ND participations) with enough to build a
// "Download Statement" button per row -- the id + kind is all the
// statement-fetch endpoint needs, ownership-checked server-side, never
// trusted from the client beyond routing.
export interface StatementAccountSummary {
  id: string;
  kind: StatementAccountKind;
  productCode: string;
  productName: string;
  engineType: 'UNIT_NAV' | 'PSR_WATERFALL' | 'MANDATE';
  status: string;
}

export interface StatementPeriod {
  periodStart: Date;
  periodEnd: Date;
}
