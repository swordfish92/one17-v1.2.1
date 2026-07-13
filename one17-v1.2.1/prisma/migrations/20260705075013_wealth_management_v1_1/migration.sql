-- CreateEnum
CREATE TYPE "wm_custody_flag" AS ENUM ('ONE17', 'EXTERNAL');

-- CreateEnum
CREATE TYPE "wm_verification_tag" AS ENUM ('DECLARED', 'VERIFIED');

-- CreateEnum
CREATE TYPE "wm_shariah_screen_tag" AS ENUM ('SCREENED_COMPLIANT', 'SCREENED_NON_COMPLIANT', 'UNSCREENED');

-- CreateEnum
CREATE TYPE "wm_client_tier" AS ENUM ('MASS_MARKET', 'AFFLUENT', 'HNI', 'VHNI');

-- CreateEnum
CREATE TYPE "wm_risk_band" AS ENUM ('CONSERVATIVE', 'MODERATE', 'BALANCED', 'GROWTH', 'AGGRESSIVE');

-- CreateEnum
CREATE TYPE "wm_advisory_response" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED', 'DEFERRED');

-- CreateEnum
CREATE TYPE "wm_risk_assessment_status" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "asset_class_registry" (
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "custody_default" "wm_custody_flag" NOT NULL,
    "shariah_screening_rule" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "asset_class_registry_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "wm_client_tier_config" (
    "id" UUID NOT NULL,
    "tier" "wm_client_tier" NOT NULL,
    "min_total_wealth_kobo" BIGINT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_client_tier_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_client_profile" (
    "investor_id" TEXT NOT NULL,
    "current_tier" "wm_client_tier" NOT NULL,
    "tier_updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "advisor_user_id" UUID,
    "onboarded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "onboarded_by_user_id" UUID NOT NULL,
    "portal_provisioned_at" TIMESTAMP(3),

    CONSTRAINT "wm_client_profile_pkey" PRIMARY KEY ("investor_id")
);

-- CreateTable
CREATE TABLE "wm_tier_migration_log" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "from_tier" "wm_client_tier",
    "to_tier" "wm_client_tier" NOT NULL,
    "total_wealth_kobo" BIGINT NOT NULL,
    "migrated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_tier_migration_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_client_asset" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "asset_class_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(24,6),
    "declared_value_kobo" BIGINT NOT NULL,
    "valuation_date" TIMESTAMP(3) NOT NULL,
    "custody_flag" "wm_custody_flag" NOT NULL,
    "evidence_document_id" UUID,
    "verification_tag" "wm_verification_tag" NOT NULL DEFAULT 'DECLARED',
    "verified_by_user_id" UUID,
    "verified_at" TIMESTAMP(3),
    "shariah_screen_tag" "wm_shariah_screen_tag" NOT NULL DEFAULT 'UNSCREENED',
    "declared_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_client_asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_allocation_policy" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "target_allocations" JSONB NOT NULL,
    "risk_band" "wm_risk_band" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "client_acknowledged_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_allocation_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_risk_profile" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "questionnaire_responses" JSONB NOT NULL,
    "risk_band" "wm_risk_band" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "client_acknowledged_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_risk_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_growth_plan" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "horizon" TEXT NOT NULL,
    "milestones" JSONB NOT NULL,
    "target_glide_path" JSONB NOT NULL,
    "review_schedule" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "client_acknowledged_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_growth_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_advisory_record" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "rationale" TEXT NOT NULL,
    "risk_notes" TEXT,
    "shariah_note" TEXT,
    "advisor_user_id" UUID NOT NULL,
    "client_response" "wm_advisory_response" NOT NULL DEFAULT 'PENDING',
    "responded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_advisory_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_stress_scenario_config" (
    "id" UUID NOT NULL,
    "scenarioCode" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "shock_pct_by_asset_class" JSONB NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_stress_scenario_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_risk_assessment_run" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "scenario_config_id" UUID NOT NULL,
    "combined_book_snapshot" JSONB NOT NULL,
    "pre_shock_value_kobo" BIGINT NOT NULL,
    "post_shock_value_kobo" BIGINT NOT NULL,
    "status" "wm_risk_assessment_status" NOT NULL DEFAULT 'DRAFT',
    "ran_by_user_id" UUID NOT NULL,
    "reviewed_by_user_id" UUID,
    "published_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_risk_assessment_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal_client_user" (
    "id" UUID NOT NULL,
    "wm_client_profile_id" TEXT NOT NULL,
    "password_hash" TEXT,
    "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
    "locked_until" TIMESTAMP(3),
    "status" "user_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portal_client_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal_client_session" (
    "id" UUID NOT NULL,
    "portal_user_id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "revoked_at" TIMESTAMP(3),
    "ip_address" TEXT,

    CONSTRAINT "portal_client_session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wm_client_asset_workflow_instance_id_key" ON "wm_client_asset"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "wm_allocation_policy_wm_client_profile_id_version_key" ON "wm_allocation_policy"("wm_client_profile_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "wm_risk_profile_wm_client_profile_id_version_key" ON "wm_risk_profile"("wm_client_profile_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "wm_growth_plan_wm_client_profile_id_version_key" ON "wm_growth_plan"("wm_client_profile_id", "version");

-- CreateIndex
CREATE UNIQUE INDEX "wm_stress_scenario_config_scenarioCode_version_key" ON "wm_stress_scenario_config"("scenarioCode", "version");

-- CreateIndex
CREATE UNIQUE INDEX "portal_client_user_wm_client_profile_id_key" ON "portal_client_user"("wm_client_profile_id");

-- CreateIndex
CREATE UNIQUE INDEX "portal_client_session_token_hash_key" ON "portal_client_session"("token_hash");

-- CreateIndex
CREATE INDEX "portal_client_session_portal_user_id_idx" ON "portal_client_session"("portal_user_id");

-- AddForeignKey
ALTER TABLE "wm_client_profile" ADD CONSTRAINT "wm_client_profile_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_tier_migration_log" ADD CONSTRAINT "wm_tier_migration_log_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_client_asset" ADD CONSTRAINT "wm_client_asset_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_client_asset" ADD CONSTRAINT "wm_client_asset_asset_class_code_fkey" FOREIGN KEY ("asset_class_code") REFERENCES "asset_class_registry"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_allocation_policy" ADD CONSTRAINT "wm_allocation_policy_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_risk_profile" ADD CONSTRAINT "wm_risk_profile_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_growth_plan" ADD CONSTRAINT "wm_growth_plan_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_advisory_record" ADD CONSTRAINT "wm_advisory_record_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_risk_assessment_run" ADD CONSTRAINT "wm_risk_assessment_run_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_risk_assessment_run" ADD CONSTRAINT "wm_risk_assessment_run_scenario_config_id_fkey" FOREIGN KEY ("scenario_config_id") REFERENCES "wm_stress_scenario_config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal_client_user" ADD CONSTRAINT "portal_client_user_wm_client_profile_id_fkey" FOREIGN KEY ("wm_client_profile_id") REFERENCES "wm_client_profile"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal_client_session" ADD CONSTRAINT "portal_client_session_portal_user_id_fkey" FOREIGN KEY ("portal_user_id") REFERENCES "portal_client_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
