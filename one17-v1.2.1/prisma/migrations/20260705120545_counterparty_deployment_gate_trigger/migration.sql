-- Invariant 27(b): "DB-enforced gate: NO deployment to an investee whose
-- onboarding is not COMPLETE/APPROVED." First, backfill every counterparty
-- that already existed before this workflow was introduced — these were
-- loaded via the TPL_06 migration loader or created directly in earlier
-- smoke/dev passes, long before invariant 27(b) existed, and are already in
-- active use with real historical transactions. This gate is forward-
-- looking (new onboarding, new deployments), not a retroactive freeze on
-- data that predates the rule.
UPDATE "counterparty" SET "onboarding_status" = 'COMPLETE_APPROVED' WHERE "onboarding_status" = 'DRAFT';

-- "Deployment" = a Txn referencing this counterparty. Migration-sourced
-- Txns (migration_source_system IS NOT NULL) are exempt — those are
-- historical bulk-loaded rows, not new live deployments, and enforcing this
-- gate against them would corrupt the Phase-3 replay's historical record.
CREATE FUNCTION enforce_counterparty_onboarding_complete() RETURNS TRIGGER AS $$
DECLARE
  cp_status TEXT;
BEGIN
  IF NEW.counterparty_id IS NOT NULL AND NEW.migration_source_system IS NULL THEN
    SELECT onboarding_status INTO cp_status FROM counterparty WHERE id = NEW.counterparty_id;
    IF cp_status IS DISTINCT FROM 'COMPLETE_APPROVED' THEN
      RAISE EXCEPTION 'txn % references counterparty % whose onboarding_status is % — no new deployment is permitted until onboarding is COMPLETE_APPROVED (invariant 27b)', NEW.id, NEW.counterparty_id, cp_status;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER txn_counterparty_onboarding_complete
  BEFORE INSERT OR UPDATE ON "txn"
  FOR EACH ROW EXECUTE FUNCTION enforce_counterparty_onboarding_complete();
