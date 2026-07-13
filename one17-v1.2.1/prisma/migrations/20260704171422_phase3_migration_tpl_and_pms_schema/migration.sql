-- CreateEnum
CREATE TYPE "product_account_status" AS ENUM ('ACTIVE', 'MATURED', 'CLOSED');

-- CreateEnum
CREATE TYPE "migration_batch_status" AS ENUM ('STAGED', 'VALIDATED', 'PROMOTED');

-- CreateEnum
CREATE TYPE "staging_row_status" AS ENUM ('PENDING', 'VALID', 'REJECTED', 'PROMOTED');

-- CreateEnum
CREATE TYPE "pms_tier" AS ENUM ('JUNIOR', 'SENIOR', 'CHIEF');

-- CreateEnum
CREATE TYPE "kpi_class" AS ENUM ('CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY');

-- CreateEnum
CREATE TYPE "measurement_basis" AS ENUM ('AUTO', 'MANUAL', 'HYBRID');

-- CreateEnum
CREATE TYPE "governed_item_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "employee_status" AS ENUM ('ACTIVE', 'SUSPENDED', 'TERMINATED');

-- CreateEnum
CREATE TYPE "emolument_component_type" AS ENUM ('SALARY', 'ALLOWANCE', 'COST_REFUND');

-- AlterEnum
ALTER TYPE "txn_type" ADD VALUE 'MATURITY_PAYOUT';

-- AlterTable
ALTER TABLE "investor" ADD COLUMN     "bvn" TEXT,
ADD COLUMN     "migration_source_ref" TEXT,
ADD COLUMN     "nin" TEXT,
ADD COLUMN     "occupation_or_business_nature" TEXT,
ADD COLUMN     "pep_status" BOOLEAN,
ADD COLUMN     "rc_number" TEXT,
ADD COLUMN     "relationship_officer" TEXT;

-- AlterTable
ALTER TABLE "investor_bank_account" ADD COLUMN     "account_type" TEXT,
ADD COLUMN     "currency" TEXT DEFAULT 'NGN',
ADD COLUMN     "is_primary" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "investor_kyc_document" ADD COLUMN     "document_number" TEXT;

-- AlterTable
ALTER TABLE "txn" ADD COLUMN     "counterparty_id" UUID,
ADD COLUMN     "migration_source_document_ref" TEXT,
ADD COLUMN     "migration_source_system" TEXT,
ADD COLUMN     "unit_price_kobo" BIGINT,
ADD COLUMN     "units_qty" DECIMAL(18,4),
DROP COLUMN "product_account_id",
ADD COLUMN     "product_account_id" UUID;

-- CreateTable
CREATE TABLE "counterparty" (
    "id" UUID NOT NULL,
    "legal_name" TEXT NOT NULL,
    "counterparty_type" TEXT NOT NULL,
    "rc_number" TEXT,
    "country" TEXT,
    "internal_rating" TEXT,
    "enterprise_limit_kobo" BIGINT,
    "limit_currency" TEXT,
    "notes" TEXT,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counterparty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_account" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "maturity_date" TIMESTAMP(3),
    "principal_or_committed_kobo" BIGINT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'NGN',
    "target_return_pct_benchmark" DECIMAL(6,4),
    "psr_investor_pct" DECIMAL(6,4),
    "psr_mudarib_pct" DECIMAL(6,4),
    "units_held" DECIMAL(18,4),
    "mandate_terms_ref" TEXT,
    "status" "product_account_status" NOT NULL DEFAULT 'ACTIVE',
    "notes" TEXT,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migration_batch" (
    "id" UUID NOT NULL,
    "tpl_code" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "uploaded_by_user_id" UUID NOT NULL,
    "status" "migration_batch_status" NOT NULL DEFAULT 'STAGED',
    "total_rows" INTEGER NOT NULL,
    "valid_rows" INTEGER,
    "rejected_rows" INTEGER,
    "promoted_rows" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" TIMESTAMP(3),
    "promoted_at" TIMESTAMP(3),

    CONSTRAINT "migration_batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migration_staging_row" (
    "id" UUID NOT NULL,
    "batch_id" UUID NOT NULL,
    "row_number" INTEGER NOT NULL,
    "raw_data" JSONB NOT NULL,
    "is_demo_row" BOOLEAN NOT NULL DEFAULT false,
    "status" "staging_row_status" NOT NULL DEFAULT 'PENDING',
    "rejection_reasons" JSONB NOT NULL DEFAULT '[]',
    "promoted_entity_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "migration_staging_row_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strategic_pillar" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategic_pillar_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "strategic_objective" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategic_objective_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "pillar_objective_map" (
    "pillar_code" TEXT NOT NULL,
    "objective_code" TEXT NOT NULL,

    CONSTRAINT "pillar_objective_map_pkey" PRIMARY KEY ("pillar_code","objective_code")
);

-- CreateTable
CREATE TABLE "org_unit" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "org_unit_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "enterprise_kra" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enterprise_kra_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "kra_objective_map" (
    "kra_code" TEXT NOT NULL,
    "objective_code" TEXT NOT NULL,

    CONSTRAINT "kra_objective_map_pkey" PRIMARY KEY ("kra_code","objective_code")
);

-- CreateTable
CREATE TABLE "kpi_definition" (
    "id" UUID NOT NULL,
    "kra_code" TEXT NOT NULL,
    "tier" "pms_tier" NOT NULL,
    "kpi_text" TEXT NOT NULL,
    "kpi_class" "kpi_class" NOT NULL,
    "objective_text" TEXT,
    "example_activity" TEXT,
    "measurement_basis" "measurement_basis" NOT NULL DEFAULT 'MANUAL',
    "frequency" TEXT,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kpi_definition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kpi_weight_matrix" (
    "id" UUID NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "tier" "pms_tier" NOT NULL,
    "kpi_class" "kpi_class" NOT NULL,
    "weight_pct" DECIMAL(5,2) NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kpi_weight_matrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cadre_tier_map" (
    "cadre" TEXT NOT NULL,
    "tier" "pms_tier" NOT NULL,

    CONSTRAINT "cadre_tier_map_pkey" PRIMARY KEY ("cadre")
);

-- CreateTable
CREATE TABLE "position" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "cadre" TEXT NOT NULL,
    "notch" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" UUID NOT NULL,
    "full_name" TEXT NOT NULL,
    "position_id" UUID NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "reports_to_id" UUID,
    "app_user_id" UUID,
    "hire_date" TIMESTAMP(3) NOT NULL,
    "status" "employee_status" NOT NULL DEFAULT 'ACTIVE',
    "performance_incentive_pct" DECIMAL(5,2) NOT NULL DEFAULT 25.00,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emolument_structure" (
    "id" UUID NOT NULL,
    "cadre" TEXT NOT NULL,
    "notch" INTEGER NOT NULL,
    "component" TEXT NOT NULL,
    "annual_amount_kobo" BIGINT NOT NULL,
    "component_type" "emolument_component_type" NOT NULL,
    "taxable" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3) NOT NULL,
    "created_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emolument_structure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_migration_source_ref_key" ON "counterparty"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "product_account_migration_source_ref_key" ON "product_account"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "migration_staging_row_batch_id_row_number_key" ON "migration_staging_row"("batch_id", "row_number");

-- CreateIndex
CREATE UNIQUE INDEX "kpi_definition_kra_code_tier_key" ON "kpi_definition"("kra_code", "tier");

-- CreateIndex
CREATE UNIQUE INDEX "kpi_weight_matrix_org_unit_code_tier_kpi_class_version_key" ON "kpi_weight_matrix"("org_unit_code", "tier", "kpi_class", "version");

-- CreateIndex
CREATE UNIQUE INDEX "position_title_org_unit_code_key" ON "position"("title", "org_unit_code");

-- CreateIndex
CREATE UNIQUE INDEX "employee_app_user_id_key" ON "employee"("app_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_migration_source_ref_key" ON "employee"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "emolument_structure_cadre_notch_component_version_key" ON "emolument_structure"("cadre", "notch", "component", "version");

-- CreateIndex
CREATE UNIQUE INDEX "investor_bvn_key" ON "investor"("bvn");

-- CreateIndex
CREATE UNIQUE INDEX "investor_rc_number_key" ON "investor"("rc_number");

-- CreateIndex
CREATE UNIQUE INDEX "investor_migration_source_ref_key" ON "investor"("migration_source_ref");

-- AddForeignKey
ALTER TABLE "product_account" ADD CONSTRAINT "product_account_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_account" ADD CONSTRAINT "product_account_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "migration_batch" ADD CONSTRAINT "migration_batch_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "migration_staging_row" ADD CONSTRAINT "migration_staging_row_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "migration_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pillar_objective_map" ADD CONSTRAINT "pillar_objective_map_pillar_code_fkey" FOREIGN KEY ("pillar_code") REFERENCES "strategic_pillar"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pillar_objective_map" ADD CONSTRAINT "pillar_objective_map_objective_code_fkey" FOREIGN KEY ("objective_code") REFERENCES "strategic_objective"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enterprise_kra" ADD CONSTRAINT "enterprise_kra_org_unit_code_fkey" FOREIGN KEY ("org_unit_code") REFERENCES "org_unit"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kra_objective_map" ADD CONSTRAINT "kra_objective_map_kra_code_fkey" FOREIGN KEY ("kra_code") REFERENCES "enterprise_kra"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kra_objective_map" ADD CONSTRAINT "kra_objective_map_objective_code_fkey" FOREIGN KEY ("objective_code") REFERENCES "strategic_objective"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kpi_definition" ADD CONSTRAINT "kpi_definition_kra_code_fkey" FOREIGN KEY ("kra_code") REFERENCES "enterprise_kra"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kpi_weight_matrix" ADD CONSTRAINT "kpi_weight_matrix_org_unit_code_fkey" FOREIGN KEY ("org_unit_code") REFERENCES "org_unit"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position" ADD CONSTRAINT "position_org_unit_code_fkey" FOREIGN KEY ("org_unit_code") REFERENCES "org_unit"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_reports_to_id_fkey" FOREIGN KEY ("reports_to_id") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_app_user_id_fkey" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

