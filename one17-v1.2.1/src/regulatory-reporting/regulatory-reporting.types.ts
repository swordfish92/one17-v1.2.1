export class RegulatoryReportingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RegulatoryReportingError';
  }
}

// The finite, documented, code-reviewed vocabulary of AUTO source keys —
// config carries the KEY, code carries the resolution (same split as
// event_journal_config's account-code mapping). Adding a new AUTO field to
// a template is a config row (a cell/field map with this key); adding a NEW
// key is a code change requiring review — exactly where the config-vs-code
// line should sit for financial figures (invariant 10/15).
export const AUTO_SOURCE_KEYS = [
  'TOTAL_AUM_KOBO',
  'MONTHLY_INCOME_KOBO',
  'MONTHLY_EXPENSE_KOBO',
  'EXPENSE_RATIO_PCT',
  'FUND_MANAGER_NAME',
  'REPORTING_ENTITY_EMAIL',
  // Invariant 28(f): resolves to an ARRAY of register rows (not a scalar)
  // for the period — the one key whose resolved value is a list rather than
  // a single figure. exportXlsx spills an array value across rows starting
  // at the mapped anchor cell instead of writing it into one cell.
  'COMPLAINT_REGISTER_ROWS',
] as const;
export type AutoSourceKey = (typeof AUTO_SOURCE_KEYS)[number];
