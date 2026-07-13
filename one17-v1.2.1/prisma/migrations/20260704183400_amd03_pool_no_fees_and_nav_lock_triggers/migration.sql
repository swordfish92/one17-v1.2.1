-- AMD-03 hard constraint: "for ledger_entity of type POOL, no fee_accruals
-- rows exist at all" (CHECK ledger_entity_type <> POOL on fee_accruals) —
-- a plain column CHECK can't see another table's column, so this is a
-- hand-authored trigger, same defense-in-depth standard as every other
-- structural invariant in this codebase (entity-separation, closed-period
-- posting, journal-posting-requires-approval, ...).
CREATE FUNCTION enforce_no_fee_accrual_on_pool() RETURNS TRIGGER AS $$
DECLARE
  entity_type TEXT;
BEGIN
  SELECT entity_type INTO entity_type FROM "ledger_entity" WHERE code = NEW.ledger_entity_code;
  IF entity_type = 'POOL' THEN
    RAISE EXCEPTION 'fee_accrual: ledger_entity % is a POOL — AMD-03 prohibits any fee accrual on a Mudarabah pool (the Mudarib''s entire benefit is the PSR profit share; third-party servicing costs post to COMPANY GL instead)', NEW.ledger_entity_code;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER fee_accrual_no_pool
  BEFORE INSERT OR UPDATE ON "fee_accrual"
  FOR EACH ROW EXECUTE FUNCTION enforce_no_fee_accrual_on_pool();

-- Formula Library F-HF-01: "locked rows are hardcoded published values ...
-- published NAV never drifts." Once is_locked flips true, no further
-- mutation of that row is permitted — same immutability standard as
-- audit_trail/report_run (BEFORE UPDATE trigger; DELETE is blocked
-- unconditionally since a locked NAV record must never disappear either).
CREATE FUNCTION enforce_nav_record_locked_immutable() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'DELETE' THEN
    IF OLD.is_locked THEN
      RAISE EXCEPTION 'nav_record % is locked (published) — cannot delete a published NAV record', OLD.id;
    END IF;
    RETURN OLD;
  END IF;
  IF OLD.is_locked THEN
    RAISE EXCEPTION 'nav_record % is locked (published) — published NAV never drifts, no further update permitted', OLD.id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER nav_record_locked_immutable
  BEFORE UPDATE OR DELETE ON "nav_record"
  FOR EACH ROW EXECUTE FUNCTION enforce_nav_record_locked_immutable();
