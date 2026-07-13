-- M1 condition (closes D8): a stable natural key on approval_rule so
-- seed.ts can upsert instead of delete-and-recreate. Nullable + UNIQUE
-- (Postgres permits multiple NULLs under a UNIQUE constraint) so existing
-- rows, seeded before this column existed, are left untouched rather than
-- force-matched — safe for any WorkflowInstance already referencing them.
ALTER TABLE "approval_rule" ADD COLUMN "rule_key" TEXT;
CREATE UNIQUE INDEX "approval_rule_rule_key_key" ON "approval_rule"("rule_key");
