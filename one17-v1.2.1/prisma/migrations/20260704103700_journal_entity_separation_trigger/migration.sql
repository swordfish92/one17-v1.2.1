-- CLAUDE.md invariant #5 ("Ledger-entity separation ... structural, not
-- procedural") + Core Schema Skeleton §3.5: "a CHECK/constraint forbids
-- lines referencing accounts of another entity." Hand-authored (Prisma's
-- DSL can't express a cross-table trigger) — this is the ONE thing this
-- step enforces beyond raw schema shape; balance validation and posting
-- approval are explicitly deferred to Phase 2 (Build Plan step 8: "posting
-- rules deferred to Phase 2").

CREATE FUNCTION enforce_journal_line_entity_match() RETURNS TRIGGER AS $$
DECLARE
  journal_entity_code TEXT;
  account_entity_code TEXT;
BEGIN
  SELECT ledger_entity_code INTO journal_entity_code FROM journal_entry WHERE id = NEW.journal_entry_id;
  SELECT ledger_entity_code INTO account_entity_code FROM chart_of_account WHERE id = NEW.account_id;
  IF journal_entity_code IS DISTINCT FROM account_entity_code THEN
    RAISE EXCEPTION 'journal_entry_line % references an account in ledger entity % but its journal_entry belongs to ledger entity % — no journal can span ledger entities', NEW.id, account_entity_code, journal_entity_code;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER journal_entry_line_entity_match
  BEFORE INSERT OR UPDATE ON "journal_entry_line"
  FOR EACH ROW EXECUTE FUNCTION enforce_journal_line_entity_match();
