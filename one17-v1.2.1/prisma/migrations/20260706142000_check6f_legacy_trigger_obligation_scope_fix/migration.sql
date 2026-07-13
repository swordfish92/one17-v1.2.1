-- Invariant 25(4) (Check-6 reminder-ladder tranche) supersedes the
-- COUNTERPARTY-wide scope of the original invariant 28(e) trigger
-- (enforce_counterparty_restructure_limit, from
-- 20260705140000_counterparty_portal_and_complaints) with a per-OBLIGATION
-- cap, DB-enforced instead via the partial unique index
-- counterparty_restructure_request_one_approved_per_obligation (which also
-- carries the workflow_instance_id IS NULL exception-workflow exemption —
-- see 20260706141500_check6f_restructure_exception_index_fix).
--
-- Left unmodified, the old trigger fires on ANY second APPROVED RESTRUCTURE
-- for a counterparty regardless of which obligation it's for, and has no
-- concept of the exception workflow at all — it would block both a
-- legitimate second obligation's first restructure AND the exception path
-- itself. Narrowing it to obligation_id IS NULL preserves its original
-- behaviour for the (now legacy) case invariant 28(e) still literally
-- describes — a restructure request not tied to a specific transaction —
-- while ceding all per-obligation enforcement to the new partial index.
CREATE OR REPLACE FUNCTION enforce_counterparty_restructure_limit() RETURNS TRIGGER AS $$
DECLARE
  approved_count INTEGER;
BEGIN
  IF NEW.request_type = 'RESTRUCTURE' AND NEW.status = 'APPROVED' AND NEW.obligation_id IS NULL THEN
    SELECT count(*) INTO approved_count FROM counterparty_restructure_request
      WHERE counterparty_id = NEW.counterparty_id AND request_type = 'RESTRUCTURE' AND status = 'APPROVED' AND obligation_id IS NULL AND id != NEW.id;
    IF approved_count >= 1 THEN
      RAISE EXCEPTION 'counterparty % already has an APPROVED restructure request not tied to a specific transaction — max 1 restructure (invariant 28e); beyond this cap requires a future exception-workflow process, not yet built', NEW.counterparty_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
