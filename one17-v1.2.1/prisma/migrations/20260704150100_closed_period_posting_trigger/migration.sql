-- Phase 2 core: "no posting into a closed period, enforced by DB trigger,
-- not service code" (explicit instruction) — Company Accounting Design §4
-- item 8: "Finance sign-off (checker role) locks the period; post-lock
-- entries only in the next open period." LedgerService also checks this at
-- the service layer for a fast, clear error (defense in depth, same
-- standard as every other structural invariant here), but THIS trigger is
-- the actual authority — it fires regardless of which code path attempts
-- the transition to POSTED.
CREATE FUNCTION enforce_no_posting_into_closed_period() RETURNS TRIGGER AS $$
DECLARE
  closed_period_id UUID;
BEGIN
  IF NEW.status = 'POSTED' THEN
    SELECT id INTO closed_period_id
    FROM "accounting_period"
    WHERE ledger_entity_code = NEW.ledger_entity_code
      AND status = 'CLOSED'
      AND NEW.entry_date::date BETWEEN period_start AND period_end
    LIMIT 1;

    IF closed_period_id IS NOT NULL THEN
      RAISE EXCEPTION 'journal_entry % cannot post: entry_date % falls within a CLOSED accounting period (%) for ledger entity % — post-lock entries only in the next open period', NEW.id, NEW.entry_date, closed_period_id, NEW.ledger_entity_code;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER journal_entry_no_posting_into_closed_period
  BEFORE INSERT OR UPDATE ON "journal_entry"
  FOR EACH ROW EXECUTE FUNCTION enforce_no_posting_into_closed_period();
