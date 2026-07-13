/*
  Warnings:

  - Added the required column `aaoifi_ref` to the `chart_of_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ifrs_ref` to the `chart_of_account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primary_basis` to the `ledger_entity` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "accounting_basis" AS ENUM ('IFRS', 'AAOIFI');

-- CreateEnum
CREATE TYPE "journal_class" AS ENUM ('BASE', 'BASIS_ADJUSTMENT');

-- CreateEnum
CREATE TYPE "framework_map_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "statement_template_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "statement_line_computation_type" AS ENUM ('SUM_OF_ACCOUNTS', 'SUM_OF_LINES', 'FORMULA');

-- CreateEnum
CREATE TYPE "regulator_template_status" AS ENUM ('DRAFT', 'ACTIVE', 'RETIRED');

-- AlterTable
ALTER TABLE "chart_of_account" ADD COLUMN     "aaoifi_ref" TEXT NOT NULL,
ADD COLUMN     "ifrs_ref" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "journal_entry" ADD COLUMN     "adjustment_for_basis" "accounting_basis",
ADD COLUMN     "divergence_type" TEXT,
ADD COLUMN     "journal_class" "journal_class" NOT NULL DEFAULT 'BASE';

-- AlterTable
ALTER TABLE "ledger_entity" ADD COLUMN     "primary_basis" "accounting_basis" NOT NULL;

-- CreateTable
CREATE TABLE "accounting_framework_map" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" "framework_map_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3) NOT NULL,
    "effective_to" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounting_framework_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statement_template" (
    "id" UUID NOT NULL,
    "basis" "accounting_basis" NOT NULL,
    "statement_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "statement_template_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "statement_template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statement_line" (
    "id" UUID NOT NULL,
    "statement_template_id" UUID NOT NULL,
    "line_code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "sign_convention" TEXT,
    "parent_line_id" UUID,
    "computation_type" "statement_line_computation_type" NOT NULL,
    "formula_expression" TEXT,

    CONSTRAINT "statement_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statement_line_mapping" (
    "id" UUID NOT NULL,
    "framework_map_id" UUID NOT NULL,
    "chart_of_account_id" UUID NOT NULL,
    "statement_line_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "statement_line_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "report_run" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "basis" "accounting_basis" NOT NULL,
    "period_start" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3) NOT NULL,
    "framework_map_id" UUID NOT NULL,
    "statement_template_id" UUID,
    "figures" JSONB NOT NULL,
    "generated_by_user_id" UUID NOT NULL,
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "report_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulator_template" (
    "id" UUID NOT NULL,
    "regulator_code" TEXT NOT NULL,
    "template_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "filing_frequency" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "regulator_template_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3),
    "effective_to" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regulator_template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulator_template_line" (
    "id" UUID NOT NULL,
    "regulator_template_id" UUID NOT NULL,
    "line_code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "maps_to_statement_line_id" UUID,
    "maps_to_chart_of_account_id" UUID,

    CONSTRAINT "regulator_template_line_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounting_framework_map_version_key" ON "accounting_framework_map"("version");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_framework_map_workflow_instance_id_key" ON "accounting_framework_map"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "statement_template_basis_statement_code_version_key" ON "statement_template"("basis", "statement_code", "version");

-- CreateIndex
CREATE UNIQUE INDEX "statement_line_statement_template_id_line_code_key" ON "statement_line"("statement_template_id", "line_code");

-- CreateIndex
CREATE UNIQUE INDEX "statement_line_mapping_framework_map_id_chart_of_account_id_key" ON "statement_line_mapping"("framework_map_id", "chart_of_account_id", "statement_line_id");

-- CreateIndex
CREATE UNIQUE INDEX "regulator_template_regulator_code_template_code_version_key" ON "regulator_template"("regulator_code", "template_code", "version");

-- CreateIndex
CREATE UNIQUE INDEX "regulator_template_line_regulator_template_id_line_code_key" ON "regulator_template_line"("regulator_template_id", "line_code");

-- AddForeignKey
ALTER TABLE "accounting_framework_map" ADD CONSTRAINT "accounting_framework_map_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting_framework_map" ADD CONSTRAINT "accounting_framework_map_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_template" ADD CONSTRAINT "statement_template_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_line" ADD CONSTRAINT "statement_line_statement_template_id_fkey" FOREIGN KEY ("statement_template_id") REFERENCES "statement_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_line" ADD CONSTRAINT "statement_line_parent_line_id_fkey" FOREIGN KEY ("parent_line_id") REFERENCES "statement_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_line_mapping" ADD CONSTRAINT "statement_line_mapping_framework_map_id_fkey" FOREIGN KEY ("framework_map_id") REFERENCES "accounting_framework_map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_line_mapping" ADD CONSTRAINT "statement_line_mapping_chart_of_account_id_fkey" FOREIGN KEY ("chart_of_account_id") REFERENCES "chart_of_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statement_line_mapping" ADD CONSTRAINT "statement_line_mapping_statement_line_id_fkey" FOREIGN KEY ("statement_line_id") REFERENCES "statement_line"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_run" ADD CONSTRAINT "report_run_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_run" ADD CONSTRAINT "report_run_framework_map_id_fkey" FOREIGN KEY ("framework_map_id") REFERENCES "accounting_framework_map"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_run" ADD CONSTRAINT "report_run_statement_template_id_fkey" FOREIGN KEY ("statement_template_id") REFERENCES "statement_template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "report_run" ADD CONSTRAINT "report_run_generated_by_user_id_fkey" FOREIGN KEY ("generated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulator_template" ADD CONSTRAINT "regulator_template_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulator_template_line" ADD CONSTRAINT "regulator_template_line_regulator_template_id_fkey" FOREIGN KEY ("regulator_template_id") REFERENCES "regulator_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulator_template_line" ADD CONSTRAINT "regulator_template_line_maps_to_statement_line_id_fkey" FOREIGN KEY ("maps_to_statement_line_id") REFERENCES "statement_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulator_template_line" ADD CONSTRAINT "regulator_template_line_maps_to_chart_of_account_id_fkey" FOREIGN KEY ("maps_to_chart_of_account_id") REFERENCES "chart_of_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
