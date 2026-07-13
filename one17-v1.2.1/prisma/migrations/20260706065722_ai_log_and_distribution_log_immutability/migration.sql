-- Check-6B item 2: ai_interaction_log (invariant 33d, "immutable") and
-- stakeholder_distribution_log (invariant 24, "immutable distribution_log")
-- get the SAME insert-only enforcement as audit_trail/report_run
-- (20260704000000_init_audit_trail / 20260704111900_amd11_checks_and_report_run_immutability):
-- a BEFORE UPDATE/DELETE trigger, since REVOKE alone does not bind a table
-- owner/superuser.

CREATE FUNCTION ai_interaction_log_block_mutation() RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'ai_interaction_log is insert-only: % is not permitted on %', TG_OP, TG_TABLE_NAME;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER ai_interaction_log_no_update
  BEFORE UPDATE ON "ai_interaction_log"
  FOR EACH ROW EXECUTE FUNCTION ai_interaction_log_block_mutation();

CREATE TRIGGER ai_interaction_log_no_delete
  BEFORE DELETE ON "ai_interaction_log"
  FOR EACH ROW EXECUTE FUNCTION ai_interaction_log_block_mutation();

CREATE FUNCTION stakeholder_distribution_log_block_mutation() RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'stakeholder_distribution_log is insert-only: % is not permitted on %', TG_OP, TG_TABLE_NAME;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER stakeholder_distribution_log_no_update
  BEFORE UPDATE ON "stakeholder_distribution_log"
  FOR EACH ROW EXECUTE FUNCTION stakeholder_distribution_log_block_mutation();

CREATE TRIGGER stakeholder_distribution_log_no_delete
  BEFORE DELETE ON "stakeholder_distribution_log"
  FOR EACH ROW EXECUTE FUNCTION stakeholder_distribution_log_block_mutation();
