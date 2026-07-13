-- CreateEnum
CREATE TYPE "stress_model_type" AS ENUM ('LIQUIDITY', 'CAPITAL_ADEQUACY', 'REVENUE_SENSITIVITY', 'COUNTERPARTY_DEFAULT', 'PORTFOLIO_SHOCK', 'REVERSE_STRESS');

-- CreateEnum
CREATE TYPE "stress_config_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "stress_run_mode" AS ENUM ('SANDBOX', 'BASELINE_CANDIDATE', 'BASELINE');

-- DropIndex
DROP INDEX "kri_reading_code_date_idx";

-- DropIndex
DROP INDEX "kri_reading_entity_idx";

-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "forced_sale_value_kobo" BIGINT,
ADD COLUMN     "probability_of_default_pct" DECIMAL(6,4);

-- AlterTable
ALTER TABLE "product_account" ADD COLUMN     "liquidity_class" TEXT;

-- CreateTable
CREATE TABLE "stress_scenario_config" (
    "id" UUID NOT NULL,
    "model_type" "stress_model_type" NOT NULL,
    "scenario_code" TEXT NOT NULL,
    "scenario_label" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "stress_config_status" NOT NULL DEFAULT 'DRAFT',
    "parameters" JSONB NOT NULL,
    "board_resolution_ref" TEXT,
    "proposed_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "effective_from" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stress_scenario_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stress_test_run" (
    "id" UUID NOT NULL,
    "model_type" "stress_model_type" NOT NULL,
    "run_mode" "stress_run_mode" NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "scenario_config_id" UUID,
    "inputs" JSONB NOT NULL,
    "outputs" JSONB NOT NULL,
    "ran_by_user_id" UUID NOT NULL,
    "ran_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_approved_baseline" BOOLEAN NOT NULL DEFAULT false,
    "approval_workflow_instance_id" UUID,

    CONSTRAINT "stress_test_run_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stress_scenario_config_model_type_scenario_code_version_key" ON "stress_scenario_config"("model_type", "scenario_code", "version");

-- CreateIndex
CREATE UNIQUE INDEX "stress_test_run_approval_workflow_instance_id_key" ON "stress_test_run"("approval_workflow_instance_id");
