-- PMS SDS v1 §1: "kpi_weight_matrix ... CHECK: Sigma per dept x tier = 100."
-- A per-row CHECK constraint cannot express a set-based sum, so this is a
-- DEFERRED CONSTRAINT TRIGGER (same defense-in-depth discipline as every
-- other structural invariant in this codebase — see the entity-separation
-- and closed-period-posting triggers). Constraint triggers in Postgres are
-- always FOR EACH ROW; INITIALLY DEFERRED means the check runs once per
-- affected row at COMMIT time, by which point every row a bulk "activate
-- all four kpi_class rows for one (org_unit, tier, version)" transaction
-- touched is already visible to a normal table query — so the natural
-- "activate all four rows of a version together" sequence never trips a
-- false failure mid-batch, with no transition-table trickery needed.
-- Only ACTIVE rows are summed; DRAFT/SUPERSEDED rows (including the current
-- Technology-profile DRAFT seed) are exempt until someone actually activates
-- them, matching AMD-12's "governed parameters are activation-gated, never
-- build-gated" doctrine.
CREATE FUNCTION enforce_kpi_weight_matrix_sums_to_100() RETURNS TRIGGER AS $$
DECLARE
  total NUMERIC;
BEGIN
  SELECT COALESCE(SUM(weight_pct), 0) INTO total
  FROM "kpi_weight_matrix"
  WHERE org_unit_code = NEW.org_unit_code
    AND tier = NEW.tier
    AND version = NEW.version
    AND status = 'ACTIVE';

  IF total < 99.99 OR total > 100.01 THEN
    RAISE EXCEPTION 'kpi_weight_matrix: ACTIVE rows for org_unit=%, tier=%, version=% sum to % (must be 100 +-0.01)',
      NEW.org_unit_code, NEW.tier, NEW.version, total;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE CONSTRAINT TRIGGER kpi_weight_matrix_sum_100
  AFTER INSERT OR UPDATE ON "kpi_weight_matrix"
  INITIALLY DEFERRED
  FOR EACH ROW
  WHEN (NEW.status = 'ACTIVE')
  EXECUTE FUNCTION enforce_kpi_weight_matrix_sums_to_100();
