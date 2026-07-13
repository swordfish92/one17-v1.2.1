-- Invariant 55(a) CEO ruling (9-Jul-2026): provider/custodian config
-- becomes MD-approved (pending-config staging), and reject/reversal
-- suspense-desk decisions require a second officer's approval.

CREATE TYPE "payment_gateway_inflow_decision_type" AS ENUM ('REJECT', 'REVERSAL');

ALTER TABLE "payment_gateway_provider"
  ADD COLUMN "pending_name" TEXT,
  ADD COLUMN "pending_webhook_secret" TEXT,
  ADD COLUMN "pending_is_active" BOOLEAN,
  ADD COLUMN "pending_proposed_by_user_id" UUID,
  ADD COLUMN "config_workflow_instance_id" UUID;

ALTER TABLE "payment_gateway_provider" ALTER COLUMN "is_active" SET DEFAULT false;

CREATE UNIQUE INDEX "payment_gateway_provider_config_workflow_instance_id_key" ON "payment_gateway_provider"("config_workflow_instance_id");
ALTER TABLE "payment_gateway_provider" ADD CONSTRAINT "payment_gateway_provider_pending_proposed_by_user_id_fkey" FOREIGN KEY ("pending_proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_provider" ADD CONSTRAINT "payment_gateway_provider_config_workflow_instance_id_fkey" FOREIGN KEY ("config_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "product_custodian_account"
  ADD COLUMN "pending_custodian_bank_name" TEXT,
  ADD COLUMN "pending_custodian_account_number" TEXT,
  ADD COLUMN "pending_reference_code_prefix" TEXT,
  ADD COLUMN "pending_is_active" BOOLEAN,
  ADD COLUMN "pending_proposed_by_user_id" UUID,
  ADD COLUMN "config_workflow_instance_id" UUID;

ALTER TABLE "product_custodian_account" ALTER COLUMN "is_active" SET DEFAULT false;

CREATE UNIQUE INDEX "product_custodian_account_config_workflow_instance_id_key" ON "product_custodian_account"("config_workflow_instance_id");
ALTER TABLE "product_custodian_account" ADD CONSTRAINT "product_custodian_account_pending_proposed_by_user_id_fkey" FOREIGN KEY ("pending_proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "product_custodian_account" ADD CONSTRAINT "product_custodian_account_config_workflow_instance_id_fkey" FOREIGN KEY ("config_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "payment_gateway_inflow"
  ADD COLUMN "pending_decision_type" "payment_gateway_inflow_decision_type",
  ADD COLUMN "pending_rejection_reason" TEXT,
  ADD COLUMN "decision_proposed_by_user_id" UUID,
  ADD COLUMN "decision_workflow_instance_id" UUID;

CREATE UNIQUE INDEX "payment_gateway_inflow_decision_workflow_instance_id_key" ON "payment_gateway_inflow"("decision_workflow_instance_id");
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_decision_proposed_by_user_id_fkey" FOREIGN KEY ("decision_proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_decision_workflow_instance_id_fkey" FOREIGN KEY ("decision_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
