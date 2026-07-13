-- Phase 2 core: defense-in-depth backstop, same standard as every other
-- structural invariant in this codebase. LedgerService.approveJournalPosting
-- is the only service-layer path to POSTED, but nothing stopped a caller
-- bypassing the service entirely with a direct
-- `UPDATE journal_entry SET status = 'POSTED'` — this trigger closes that
-- gap: POSTED requires a non-null posting_workflow_instance_id whose linked
-- workflow_instance is itself APPROVED.
CREATE FUNCTION enforce_journal_posting_requires_approved_workflow() RETURNS TRIGGER AS $$
DECLARE
  wf_status TEXT;
BEGIN
  IF NEW.status = 'POSTED' THEN
    IF NEW.posting_workflow_instance_id IS NULL THEN
      RAISE EXCEPTION 'journal_entry % cannot post: no posting_workflow_instance_id set — posting requires an APPROVED JOURNAL_POSTING workflow instance', NEW.id;
    END IF;

    SELECT status INTO wf_status FROM "workflow_instance" WHERE id = NEW.posting_workflow_instance_id;

    IF wf_status IS DISTINCT FROM 'APPROVED' THEN
      RAISE EXCEPTION 'journal_entry % cannot post: linked workflow_instance % has status %, not APPROVED', NEW.id, NEW.posting_workflow_instance_id, wf_status;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER journal_entry_posting_requires_approval
  BEFORE INSERT OR UPDATE ON "journal_entry"
  FOR EACH ROW EXECUTE FUNCTION enforce_journal_posting_requires_approved_workflow();
