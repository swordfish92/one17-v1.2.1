-- CreateEnum
CREATE TYPE "mandate_role_model" AS ENUM ('MUDARABAH_PSR', 'WAKALAH');

-- CreateEnum
CREATE TYPE "funding_structure" AS ENUM ('LUMP_SUM', 'PERIODIC_CALL');

-- AlterTable: invariant 70(a) Unified Prospectus Parameter Sheet fields,
-- extending the existing product_parameters table (see schema.prisma
-- comment above ProductParameters for why this is an extension, not a new
-- table). Every added column is nullable -- a given version only fills in
-- the field group(s) relevant to its Product.engineType.
ALTER TABLE "product_parameters" ADD COLUMN     "sheet_workflow_instance_id" UUID;
ALTER TABLE "product_parameters" ADD COLUMN     "prospectus_ref" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "authorized_units" DECIMAL(20,6);
ALTER TABLE "product_parameters" ADD COLUMN     "fund_size_cap_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "offer_spread_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "bid_spread_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "valuation_frequency" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_subscription_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_additional_investment_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_redemption_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_holding_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "management_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "admin_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "custodian_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "sec_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "audit_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "distribution_method" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "distribution_frequency" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "distributable_income_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_participation_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "pool_tenor_months" INTEGER;
ALTER TABLE "product_parameters" ADD COLUMN     "surplus_sharing_enabled" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "product_parameters" ADD COLUMN     "mandate_role_model" "mandate_role_model";
ALTER TABLE "product_parameters" ADD COLUMN     "mandate_fee_rate_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "targeted_return_benchmark_pct" DECIMAL(6,4);
ALTER TABLE "product_parameters" ADD COLUMN     "investment_type" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "tenor_lock_in_months" INTEGER;
ALTER TABLE "product_parameters" ADD COLUMN     "minimum_investment_kobo" BIGINT;
ALTER TABLE "product_parameters" ADD COLUMN     "funding_structure" "funding_structure";
ALTER TABLE "product_parameters" ADD COLUMN     "offer_narrative_brief" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "offer_narrative_opportunity" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "offer_narrative_dynamics" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "offer_narrative_risk_summary" TEXT;
ALTER TABLE "product_parameters" ADD COLUMN     "offer_narrative_model_description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "product_parameters_sheet_workflow_instance_id_key" ON "product_parameters"("sheet_workflow_instance_id");

-- AddForeignKey
ALTER TABLE "product_parameters" ADD CONSTRAINT "product_parameters_sheet_workflow_instance_id_fkey" FOREIGN KEY ("sheet_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
