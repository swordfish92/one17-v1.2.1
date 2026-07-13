-- Invariant 75(c) (CHECK28, v1.2.1 audit remediation §8): "add a
-- PostgreSQL PARTIAL UNIQUE INDEX enforcing one ACTIVE designation per org
-- unit ... so two concurrent approvals cannot both activate -- the
-- invariant becomes structural, not service-logic-only." Same pattern as
-- CounterpartyRestructureRequest's own partial unique index
-- (20260706141500_check6f_restructure_exception_index_fix).
--
-- DepartmentHeadService.approveDesignation() already supersedes any prior
-- ACTIVE row for the same org unit inside the same transaction, but that
-- is a service-level guarantee only -- two genuinely concurrent
-- approveDesignation() calls for the SAME org unit (different
-- DepartmentHeadDesignation rows, both DRAFT) racing each other could, in
-- principle, both commit an UPDATE to ACTIVE before either transaction's
-- supersession UPDATE is visible to the other. This index makes that
-- structurally impossible: Postgres itself refuses the second commit.
CREATE UNIQUE INDEX "department_head_designation_one_active_per_org_unit"
  ON "department_head_designation" ("org_unit_code")
  WHERE "status" = 'ACTIVE';
