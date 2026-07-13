-- Bug fix: the original enforce_no_fee_accrual_on_pool() declared a
-- PL/pgSQL variable named entity_type, shadowing the ledger_entity column
-- of the same name and making `SELECT entity_type INTO entity_type ...`
-- ambiguous at runtime (error 42702, caught live while running the Halal
-- Fund engine smoke test's AMD-03 adversarial case). Renamed the variable;
-- behavior is otherwise unchanged.
CREATE OR REPLACE FUNCTION enforce_no_fee_accrual_on_pool() RETURNS TRIGGER AS $$
DECLARE
  v_entity_type TEXT;
BEGIN
  SELECT entity_type INTO v_entity_type FROM "ledger_entity" WHERE code = NEW.ledger_entity_code;
  IF v_entity_type = 'POOL' THEN
    RAISE EXCEPTION 'fee_accrual: ledger_entity % is a POOL — AMD-03 prohibits any fee accrual on a Mudarabah pool (the Mudarib''s entire benefit is the PSR profit share; third-party servicing costs post to COMPANY GL instead)', NEW.ledger_entity_code;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
