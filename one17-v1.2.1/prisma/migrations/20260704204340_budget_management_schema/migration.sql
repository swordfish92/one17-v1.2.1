-- CreateEnum
CREATE TYPE "budget_version_status" AS ENUM ('DRAFT', 'PROPOSED', 'BOARD_APPROVED', 'ACTIVE');

-- CreateEnum
CREATE TYPE "budget_line_class" AS ENUM ('OPEX', 'CAPEX', 'REVENUE', 'STAFF');

-- CreateEnum
CREATE TYPE "budget_phasing_method" AS ENUM ('ACTUAL_PHASED', 'EVEN_12', 'DRIVER_PCT_OF_FUM', 'DRIVER_PCT_OF_MOBILIZATION', 'PRIOR_YEAR_UPLIFT', 'ESCALATING_MONTHLY', 'FIXED_MONTHLY');

-- CreateEnum
CREATE TYPE "encumbrance_status" AS ENUM ('OPEN', 'RELEASED', 'CONVERTED');

-- AlterTable
ALTER TABLE "org_unit" ADD COLUMN     "secondary_reporting_line" TEXT;

-- CreateTable
CREATE TABLE "budget_version" (
    "id" UUID NOT NULL,
    "fiscal_year" INTEGER NOT NULL,
    "scenario_label" TEXT NOT NULL,
    "status" "budget_version_status" NOT NULL DEFAULT 'DRAFT',
    "board_resolution_ref" TEXT,
    "proposed_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_version_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_line" (
    "id" UUID NOT NULL,
    "budget_version_id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "budget_line_group" TEXT NOT NULL,
    "line_description" TEXT NOT NULL,
    "class" "budget_line_class" NOT NULL,
    "phasing_method" "budget_phasing_method" NOT NULL,
    "driver_basis" TEXT,
    "driver_rate_or_factor" DECIMAL(10,6),
    "escalator_factors_json" JSONB,
    "source_sheet_ref" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "flagged_reason" TEXT,
    "values_as_given" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_line_monthly_amount" (
    "id" UUID NOT NULL,
    "budget_line_id" UUID NOT NULL,
    "month" INTEGER NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "recomputed_amount_kobo" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_line_monthly_amount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budget_target" (
    "id" UUID NOT NULL,
    "budget_version_id" UUID NOT NULL,
    "target_type" TEXT NOT NULL,
    "month" INTEGER,
    "value" DECIMAL(20,6) NOT NULL,
    "unit" TEXT NOT NULL,
    "source_sheet_ref" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encumbrance" (
    "id" UUID NOT NULL,
    "budget_line_id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "status" "encumbrance_status" NOT NULL DEFAULT 'OPEN',
    "requested_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encumbrance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "budget_version_workflow_instance_id_key" ON "budget_version"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "budget_version_fiscal_year_scenario_label_key" ON "budget_version"("fiscal_year", "scenario_label");

-- CreateIndex
CREATE UNIQUE INDEX "budget_line_monthly_amount_budget_line_id_month_key" ON "budget_line_monthly_amount"("budget_line_id", "month");

-- AddForeignKey
ALTER TABLE "budget_version" ADD CONSTRAINT "budget_version_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_version" ADD CONSTRAINT "budget_version_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_line" ADD CONSTRAINT "budget_line_budget_version_id_fkey" FOREIGN KEY ("budget_version_id") REFERENCES "budget_version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_line" ADD CONSTRAINT "budget_line_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_line_monthly_amount" ADD CONSTRAINT "budget_line_monthly_amount_budget_line_id_fkey" FOREIGN KEY ("budget_line_id") REFERENCES "budget_line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "budget_target" ADD CONSTRAINT "budget_target_budget_version_id_fkey" FOREIGN KEY ("budget_version_id") REFERENCES "budget_version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encumbrance" ADD CONSTRAINT "encumbrance_budget_line_id_fkey" FOREIGN KEY ("budget_line_id") REFERENCES "budget_line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encumbrance" ADD CONSTRAINT "encumbrance_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

