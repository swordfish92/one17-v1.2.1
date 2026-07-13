-- CreateEnum
CREATE TYPE "lead_status" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'LOST');

-- CreateEnum
CREATE TYPE "communication_direction" AS ENUM ('INBOUND', 'OUTBOUND');

-- CreateEnum
CREATE TYPE "investor_onboarding_stage" AS ENUM ('STAGE_1_EXPRESS', 'STAGE_2_COMPLETE');

-- CreateEnum
CREATE TYPE "sanctions_screen_result" AS ENUM ('CLEAR', 'FLAGGED');

-- CreateEnum
CREATE TYPE "risk_profile_grade" AS ENUM ('LOW', 'MEDIUM_LOW', 'HIGH');

-- CreateEnum
CREATE TYPE "edd_recommendation" AS ENUM ('APPROVE_WITH_CONDITIONS', 'DECLINE');

-- CreateEnum
CREATE TYPE "md_onboarding_decision" AS ENUM ('APPROVED', 'DECLINED');

-- CreateEnum
CREATE TYPE "ic2_outcome" AS ENUM ('SATISFACTORY', 'UNSATISFACTORY');

-- CreateEnum
CREATE TYPE "payment_inflow_status" AS ENUM ('DECLARED_MATCHED', 'SUSPENSE', 'COMPLIANCE_FLAGGED');

-- AlterTable
ALTER TABLE "investor" ADD COLUMN     "onboarding_stage" "investor_onboarding_stage" NOT NULL DEFAULT 'STAGE_1_EXPRESS',
ADD COLUMN     "stage1_issued_at" TIMESTAMP(3),
ADD COLUMN     "stage2_deadline_at" TIMESTAMP(3),
ALTER COLUMN "tax_identification_number" DROP NOT NULL,
ALTER COLUMN "registered_address" DROP NOT NULL,
ALTER COLUMN "source_of_funds" DROP NOT NULL;

-- CreateTable
CREATE TABLE "lead" (
    "id" UUID NOT NULL,
    "full_name_or_company" TEXT NOT NULL,
    "contact_email" TEXT,
    "contact_phone" TEXT,
    "source" TEXT,
    "status" "lead_status" NOT NULL DEFAULT 'NEW',
    "converted_investor_id" TEXT,
    "notes" TEXT,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_communication" (
    "id" UUID NOT NULL,
    "lead_id" UUID,
    "investor_id" TEXT,
    "counterparty_id" UUID,
    "channel" TEXT NOT NULL,
    "direction" "communication_direction" NOT NULL,
    "subject" TEXT,
    "summary" TEXT NOT NULL,
    "logged_by_user_id" UUID NOT NULL,
    "occurred_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "client_communication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_onboarding_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "express_deposit_cap_kobo" BIGINT NOT NULL,
    "stage2_completion_deadline_days" INTEGER NOT NULL,
    "board_resolution_ref" TEXT,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_onboarding_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_onboarding_case" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "sanctions_screen_result" "sanctions_screen_result",
    "sanctions_screened_at" TIMESTAMP(3),
    "pep_sanctions_grid" JSONB,
    "risk_metric_grades" JSONB,
    "accumulative_risk_profile" "risk_profile_grade",
    "edd_required" BOOLEAN,
    "compliance_observations" TEXT,
    "compliance_assessed_by_user_id" UUID,
    "compliance_assessed_at" TIMESTAMP(3),
    "ic1_checklist" JSONB,
    "ic1_notes" TEXT,
    "edd_checklist" JSONB,
    "edd_recommendation" "edd_recommendation",
    "edd_conditions_or_basis" TEXT,
    "periodic_review_frequency" TEXT,
    "risk_notes" TEXT,
    "md_decision" "md_onboarding_decision",
    "md_conditions_or_reason" TEXT,
    "ic2_checklist" JSONB,
    "ic2_outcome" "ic2_outcome",
    "ic2_notes" TEXT,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investor_onboarding_case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_inflow_log" (
    "id" UUID NOT NULL,
    "txn_id" UUID,
    "payer_name" TEXT NOT NULL,
    "payer_bank_name" TEXT,
    "payer_account_number" TEXT,
    "declared_relationship" TEXT NOT NULL,
    "beneficiary_investor_id" TEXT,
    "status" "payment_inflow_status" NOT NULL DEFAULT 'DECLARED_MATCHED',
    "compliance_flagged" BOOLEAN NOT NULL DEFAULT true,
    "declared_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_inflow_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lead_converted_investor_id_key" ON "lead"("converted_investor_id");

-- CreateIndex
CREATE UNIQUE INDEX "investor_onboarding_case_investor_id_key" ON "investor_onboarding_case"("investor_id");

-- CreateIndex
CREATE UNIQUE INDEX "investor_onboarding_case_workflow_instance_id_key" ON "investor_onboarding_case"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_inflow_log_txn_id_key" ON "payment_inflow_log"("txn_id");

-- AddForeignKey
ALTER TABLE "lead" ADD CONSTRAINT "lead_converted_investor_id_fkey" FOREIGN KEY ("converted_investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead" ADD CONSTRAINT "lead_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_communication" ADD CONSTRAINT "client_communication_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "lead"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_communication" ADD CONSTRAINT "client_communication_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_communication" ADD CONSTRAINT "client_communication_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_communication" ADD CONSTRAINT "client_communication_logged_by_user_id_fkey" FOREIGN KEY ("logged_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_onboarding_case" ADD CONSTRAINT "investor_onboarding_case_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_inflow_log" ADD CONSTRAINT "payment_inflow_log_txn_id_fkey" FOREIGN KEY ("txn_id") REFERENCES "txn"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_inflow_log" ADD CONSTRAINT "payment_inflow_log_beneficiary_investor_id_fkey" FOREIGN KEY ("beneficiary_investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;
