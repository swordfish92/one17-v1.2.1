export interface GenerateEventJournalInput {
  eventType: string; // must match an event_journal_config.event_type row
  ledgerEntityCode: string;
  entryDate: Date;
  amountKobo: bigint;
  // Substituted into the config's je_reference_pattern placeholders, e.g.
  // {investor_id}, {date}, {dist_id}, {inv_id}, {fee_type}, {placement_id},
  // {period} — whatever the pattern names (SRS §4.7.1 verbatim patterns).
  referenceTokens: Record<string, string>;
  // event_journal_config's dr/cr account codes are sometimes a literal code
  // (e.g. "1000") and sometimes a RANGE description (e.g. "1100-1150",
  // "4000-4030") standing in for "pick the specific account this event
  // actually hits" — a range can never be posted to literally, so the
  // caller MUST supply the concrete code whenever the config value contains
  // a dash. Omitted when the config already names a single literal code.
  drAccountCodeOverride?: string;
  crAccountCodeOverride?: string;
  createdByUserId: string;
}

export class EventJournalError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EventJournalError';
  }
}
