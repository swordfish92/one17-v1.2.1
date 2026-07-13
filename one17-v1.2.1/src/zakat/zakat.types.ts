export class ZakatError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZakatError';
  }
}

// Invariant 26(c): "RATE FOLLOWS CALENDAR — 2.5% lunar-year basis, 2.577%
// Gregorian-year basis (the workbook's own solar adjustment)." Governed
// constants (invariant 10: never a hardcoded magnitude buried in calc
// logic — kept in one named place the compute path and its smoke
// assertions both read from). Expressed in thousandths of a percent
// (2.577% -> 2577) so the due-amount computation stays pure BigInt integer
// arithmetic (invariant 2: never float for money): dueKobo = netKobo *
// rateThousandthsOfPercent / 100_000n.
export const ZAKAT_RATE_THOUSANDTHS_OF_PERCENT: Record<'LUNAR' | 'GREGORIAN', number> = {
  LUNAR: 2500, // 2.500%
  GREGORIAN: 2577, // 2.577%
};

export interface DeclareZakatItemInput {
  zakatAssessmentRunId: string;
  scheduleType: 'CASH_BANK' | 'GOLD_SILVER' | 'INVESTMENT' | 'FIXED_ASSET' | 'RECEIVABLE' | 'LIABILITY';
  description: string;
  amountKobo: bigint;
  zakatability: 'ZAKATABLE' | 'NON_ZAKATABLE' | 'DOUBTFUL';
  declaredByUserId: string;
}

// Invariant 70(h)(ii): the portal-direct declare path's own input shape —
// same fields as DeclareZakatItemInput minus declaredByUserId (a
// PortalClientUser/investorId is not an AppUser and can never be that
// column's value; ZakatService.declareScheduleItemAsClient supplies the
// SYSTEM_PORTAL_CLIENT technical actor as the workflow initiator instead,
// same precedent as SubscriptionService.initiatePortalRedemption).
export type DeclareZakatItemClientInput = Omit<DeclareZakatItemInput, 'declaredByUserId'>;
