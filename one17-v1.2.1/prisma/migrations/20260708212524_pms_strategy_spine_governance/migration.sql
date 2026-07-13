-- Invariant 51(c2) (CHECK12): governed propose/approve tracking columns for
-- the PMS strategy-spine, previously seed-only. Mirrors strategy_statement's
-- proposed_by_user_id/approved_by_user_id/workflow_instance_id shape.

-- AlterTable
ALTER TABLE "strategic_pillar" ADD COLUMN "proposed_by_user_id" UUID,
ADD COLUMN "approved_by_user_id" UUID,
ADD COLUMN "workflow_instance_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "strategic_pillar_workflow_instance_id_key" ON "strategic_pillar"("workflow_instance_id");

-- AlterTable
ALTER TABLE "strategic_objective" ADD COLUMN "proposed_by_user_id" UUID,
ADD COLUMN "approved_by_user_id" UUID,
ADD COLUMN "workflow_instance_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "strategic_objective_workflow_instance_id_key" ON "strategic_objective"("workflow_instance_id");

-- AlterTable
ALTER TABLE "kpi_definition" ADD COLUMN "proposed_by_user_id" UUID,
ADD COLUMN "approved_by_user_id" UUID,
ADD COLUMN "workflow_instance_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "kpi_definition_workflow_instance_id_key" ON "kpi_definition"("workflow_instance_id");
