-- Corrects 20260706140000_check6f_reminder_ladder's own partial unique
-- index: "exceeding requires the exception workflow, not an override"
-- means the exception path must be ABLE to create a second APPROVED row
-- for the same obligation (that is the entire point of routing it through
-- COUNTERPARTY_RESTRUCTURE_EXCEPTION) — the original index blocked that
-- too. The fix: the DB-enforced 1-per-obligation cap now applies only to
-- the NORMAL decision path (workflow_instance_id IS NULL); an
-- exception-approved row always has workflow_instance_id set (see
-- CounterpartyService.initiateRestructureException()) and is exempt by
-- construction, never by a code-level bypass of the constraint.
DROP INDEX "counterparty_restructure_request_one_approved_per_obligation";

CREATE UNIQUE INDEX "counterparty_restructure_request_one_approved_per_obligation"
  ON "counterparty_restructure_request" ("obligation_id")
  WHERE "obligation_id" IS NOT NULL AND "status" = 'APPROVED' AND "workflow_instance_id" IS NULL;
