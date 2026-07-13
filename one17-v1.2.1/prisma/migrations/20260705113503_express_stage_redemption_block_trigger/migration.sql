-- Invariant 27(a): "NO redemption/outward transfer (DB-enforced)" for any
-- investor still at STAGE_1_EXPRESS. LedgerService.createTxn() already
-- carries the same rule as a service-level check (adversarial requirement
-- is "refused at service AND DB") — this trigger is the second, structural
-- enforcement layer, same precedent as journal_entry_line_entity_match.

CREATE FUNCTION enforce_no_express_stage_redemption() RETURNS TRIGGER AS $$
DECLARE
  investor_stage TEXT;
BEGIN
  IF NEW.txn_type = 'REDEMPTION' AND NEW.product_account_id IS NOT NULL THEN
    SELECT i.onboarding_stage INTO investor_stage
    FROM product_account pa
    JOIN investor i ON i.investor_id = pa.investor_id
    WHERE pa.id = NEW.product_account_id;

    IF investor_stage = 'STAGE_1_EXPRESS' THEN
      RAISE EXCEPTION 'txn % is a REDEMPTION against product_account % whose investor is still STAGE_1_EXPRESS — no redemption/outward transfer is permitted until full KYC (invariant 27a)', NEW.id, NEW.product_account_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER txn_no_express_stage_redemption
  BEFORE INSERT OR UPDATE ON "txn"
  FOR EACH ROW EXECUTE FUNCTION enforce_no_express_stage_redemption();
