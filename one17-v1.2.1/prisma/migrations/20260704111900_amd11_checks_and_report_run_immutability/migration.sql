-- AMD-11 hand-authored follow-up: CHECK constraints Prisma's DSL can't
-- express, plus report_run immutability (CLAUDE.md invariant #15(f) /
-- Reporting Spec Hard Rule #2: "same enforcement pattern as audit_trail").

-- AMD-11.2: "Primary basis per ledger entity: COMPANY = IFRS primary ...
-- FUND/POOL = AAOIFI primary." The spec is silent on MANDATE/CLIENT_MONEY
-- (see schema.prisma's LedgerEntity comment) so only the two ruled entity
-- types are constrained here — this is the exact boundary the spec draws,
-- not an oversight.
ALTER TABLE "ledger_entity" ADD CONSTRAINT "ledger_entity_primary_basis_by_type"
  CHECK (
    ("entity_type" <> 'COMPANY' OR "primary_basis" = 'IFRS')
    AND ("entity_type" NOT IN ('FUND', 'POOL') OR "primary_basis" = 'AAOIFI')
  );

-- AMD-11.3: a BASE journal never carries basis-adjustment tags; a
-- BASIS_ADJUSTMENT journal always carries both (which basis it reconciles
-- to, and which divergence it represents) — the DB-level backstop for the
-- same rule LedgerService validates before insert.
ALTER TABLE "journal_entry" ADD CONSTRAINT "journal_entry_basis_adjustment_tags"
  CHECK (
    ("journal_class" = 'BASE' AND "divergence_type" IS NULL AND "adjustment_for_basis" IS NULL)
    OR
    ("journal_class" = 'BASIS_ADJUSTMENT' AND "divergence_type" IS NOT NULL AND "adjustment_for_basis" IS NOT NULL)
  );

-- report_run immutability: identical pattern to audit_trail
-- (20260704000000_init_audit_trail) — a BEFORE UPDATE/DELETE trigger, since
-- REVOKE alone does not bind a table owner/superuser. "Regulators audit the
-- snapshot, not a re-computation" only holds if the snapshot cannot move
-- after the fact.
CREATE FUNCTION report_run_block_mutation() RETURNS TRIGGER AS $$
BEGIN
  RAISE EXCEPTION 'report_run is insert-only: % is not permitted on %', TG_OP, TG_TABLE_NAME;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER report_run_no_update
  BEFORE UPDATE ON "report_run"
  FOR EACH ROW EXECUTE FUNCTION report_run_block_mutation();

CREATE TRIGGER report_run_no_delete
  BEFORE DELETE ON "report_run"
  FOR EACH ROW EXECUTE FUNCTION report_run_block_mutation();
