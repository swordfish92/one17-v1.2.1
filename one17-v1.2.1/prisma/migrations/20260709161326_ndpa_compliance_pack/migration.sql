-- CreateEnum
CREATE TYPE "privacy_notice_context" AS ENUM ('INVESTOR_ONBOARDING_STAGE_1', 'INVESTOR_ONBOARDING_STAGE_2', 'COUNTERPARTY_ONBOARDING', 'INVESTOR_PORTAL_FIRST_LOGIN', 'COUNTERPARTY_PORTAL_FIRST_LOGIN', 'PUBLIC_INTAKE');

-- CreateEnum
CREATE TYPE "dsr_category" AS ENUM ('ACCESS', 'RECTIFICATION', 'ERASURE', 'OBJECTION', 'PORTABILITY');

-- CreateEnum
CREATE TYPE "breach_severity" AS ENUM ('UNASSESSED', 'LOW', 'MODERATE', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "breach_register_status" AS ENUM ('OPEN', 'ASSESSED', 'NDPC_NOTIFIED', 'DATA_SUBJECTS_NOTIFIED', 'CLOSED');

-- AlterTable
ALTER TABLE "ai_interaction_log" ADD COLUMN     "personal_data_point_codes_included" JSONB NOT NULL DEFAULT '[]';

-- AlterTable
ALTER TABLE "complaint" ADD COLUMN     "dsr_category" "dsr_category",
ADD COLUMN     "dsr_legal_basis" TEXT,
ADD COLUMN     "is_dsr" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "data_point_catalog" ADD COLUMN     "contains_personal_data" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "marketing_subscriber" ADD COLUMN     "consent_notice_version" INTEGER,
ADD COLUMN     "consented_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "portal_client_user" ADD COLUMN     "first_login_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "portal_counterparty_user" ADD COLUMN     "first_login_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "privacy_notice_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "notice_text" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "privacy_notice_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "privacy_notice_acknowledgment" (
    "id" UUID NOT NULL,
    "notice_config_id" UUID NOT NULL,
    "context" "privacy_notice_context" NOT NULL,
    "investor_id" TEXT,
    "counterparty_id" UUID,
    "public_intake_submission_id" UUID,
    "acknowledged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_address" TEXT,

    CONSTRAINT "privacy_notice_acknowledgment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dsr_response_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "response_days" INTEGER NOT NULL DEFAULT 30,
    "board_resolution_ref" TEXT,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dsr_response_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "retention_schedule_entry" (
    "id" UUID NOT NULL,
    "data_class" TEXT NOT NULL,
    "description" TEXT,
    "retention_period_months" INTEGER,
    "statutory_basis" TEXT,
    "disposal_treatment" TEXT,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "confirmed_by_user_id" UUID,
    "confirmed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "retention_schedule_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_breach_register_entry" (
    "id" UUID NOT NULL,
    "discovered_at" TIMESTAMP(3) NOT NULL,
    "discovered_by_user_id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "affected_data_classes" TEXT[],
    "estimated_affected_subjects" INTEGER,
    "severity" "breach_severity" NOT NULL DEFAULT 'UNASSESSED',
    "likely_high_risk" BOOLEAN,
    "assessment_notes" TEXT,
    "assessed_at" TIMESTAMP(3),
    "assessed_by_user_id" UUID,
    "ndpc_notification_deadline" TIMESTAMP(3) NOT NULL,
    "ndpc_notified_at" TIMESTAMP(3),
    "ndpc_notified_by_user_id" UUID,
    "data_subjects_notification_required" BOOLEAN,
    "data_subjects_notified_at" TIMESTAMP(3),
    "status" "breach_register_status" NOT NULL DEFAULT 'OPEN',
    "post_incident_notes" TEXT,
    "closed_at" TIMESTAMP(3),
    "closed_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_breach_register_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "privacy_notice_config_version_key" ON "privacy_notice_config"("version");

-- AddForeignKey
ALTER TABLE "privacy_notice_config" ADD CONSTRAINT "privacy_notice_config_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "privacy_notice_acknowledgment" ADD CONSTRAINT "privacy_notice_acknowledgment_notice_config_id_fkey" FOREIGN KEY ("notice_config_id") REFERENCES "privacy_notice_config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "privacy_notice_acknowledgment" ADD CONSTRAINT "privacy_notice_acknowledgment_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "privacy_notice_acknowledgment" ADD CONSTRAINT "privacy_notice_acknowledgment_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "privacy_notice_acknowledgment" ADD CONSTRAINT "privacy_notice_acknowledgment_public_intake_submission_id_fkey" FOREIGN KEY ("public_intake_submission_id") REFERENCES "public_intake_submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "retention_schedule_entry" ADD CONSTRAINT "retention_schedule_entry_confirmed_by_user_id_fkey" FOREIGN KEY ("confirmed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_breach_register_entry" ADD CONSTRAINT "data_breach_register_entry_discovered_by_user_id_fkey" FOREIGN KEY ("discovered_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_breach_register_entry" ADD CONSTRAINT "data_breach_register_entry_assessed_by_user_id_fkey" FOREIGN KEY ("assessed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_breach_register_entry" ADD CONSTRAINT "data_breach_register_entry_ndpc_notified_by_user_id_fkey" FOREIGN KEY ("ndpc_notified_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_breach_register_entry" ADD CONSTRAINT "data_breach_register_entry_closed_by_user_id_fkey" FOREIGN KEY ("closed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

