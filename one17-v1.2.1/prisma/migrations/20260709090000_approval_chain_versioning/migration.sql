-- Invariant 54(e)(v): versioning substrate for the future Approval Chain
-- Editor (Wave 1, not built here). Adds ApprovalChainVersion as a wrapper
-- row per workflow type (mirrors RiskAppetiteMatrixVersion's shape), backfills
-- one version-1 ACTIVE row per existing workflow_type_code, points every
-- existing approval_rule at it, then makes the FK mandatory. Also adds a
-- locked-seat flag + rationale to approval_rule_step (left unpopulated by
-- design -- see schema comment).

CREATE TYPE "approval_chain_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

CREATE TABLE "approval_chain_version" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "workflow_type_code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "approval_chain_status" NOT NULL DEFAULT 'ACTIVE',
    "proposed_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "effective_from" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "approval_chain_version_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "approval_chain_version_workflow_instance_id_key" ON "approval_chain_version"("workflow_instance_id");
CREATE UNIQUE INDEX "approval_chain_version_workflow_type_code_version_key" ON "approval_chain_version"("workflow_type_code", "version");

ALTER TABLE "approval_chain_version" ADD CONSTRAINT "approval_chain_version_workflow_type_code_fkey" FOREIGN KEY ("workflow_type_code") REFERENCES "workflow_type"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "approval_chain_version" ADD CONSTRAINT "approval_chain_version_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "approval_chain_version" ADD CONSTRAINT "approval_chain_version_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Data backfill: one version-1 ACTIVE chain per distinct workflow_type_code
-- currently carrying approval_rule rows.
INSERT INTO "approval_chain_version" ("id", "workflow_type_code", "version", "status", "effective_from", "created_at")
SELECT gen_random_uuid(), t."workflow_type_code", 1, 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
FROM (SELECT DISTINCT "workflow_type_code" FROM "approval_rule") t;

-- approval_rule.chain_version_id: add nullable, backfill, then enforce NOT NULL.
ALTER TABLE "approval_rule" ADD COLUMN "chain_version_id" UUID;

UPDATE "approval_rule" ar
SET "chain_version_id" = acv."id"
FROM "approval_chain_version" acv
WHERE acv."workflow_type_code" = ar."workflow_type_code" AND acv."version" = 1;

ALTER TABLE "approval_rule" ALTER COLUMN "chain_version_id" SET NOT NULL;
ALTER TABLE "approval_rule" ADD CONSTRAINT "approval_rule_chain_version_id_fkey" FOREIGN KEY ("chain_version_id") REFERENCES "approval_chain_version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Invariant 54(e)(ii): locked-seat flag substrate on approval_rule_step.
ALTER TABLE "approval_rule_step" ADD COLUMN "is_locked_seat" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "approval_rule_step" ADD COLUMN "locked_seat_rationale" TEXT;
