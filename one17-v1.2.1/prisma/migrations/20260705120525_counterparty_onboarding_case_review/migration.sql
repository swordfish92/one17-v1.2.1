-- CreateEnum
CREATE TYPE "counterparty_onboarding_status" AS ENUM ('DRAFT', 'IN_REVIEW', 'COMPLETE_APPROVED', 'DECLINED');

-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "amount_sought_kobo" BIGINT,
ADD COLUMN     "credit_bureau_consent_at" TIMESTAMP(3),
ADD COLUMN     "expected_source_of_repayment" TEXT,
ADD COLUMN     "onboarded_by_user_id" UUID,
ADD COLUMN     "onboarding_status" "counterparty_onboarding_status" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "purpose_of_financing" TEXT;

-- CreateTable
CREATE TABLE "counterparty_onboarding_case" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
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

    CONSTRAINT "counterparty_onboarding_case_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_onboarding_case_counterparty_id_key" ON "counterparty_onboarding_case"("counterparty_id");

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_onboarding_case_workflow_instance_id_key" ON "counterparty_onboarding_case"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "counterparty" ADD CONSTRAINT "counterparty_onboarded_by_user_id_fkey" FOREIGN KEY ("onboarded_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_onboarding_case" ADD CONSTRAINT "counterparty_onboarding_case_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
