-- CreateEnum
CREATE TYPE "ai_context_type" AS ENUM ('NONE', 'WORKFLOW_STEP', 'REPORT_WORKSPACE', 'ORG_UNIT_SCOPED');

-- CreateEnum
CREATE TYPE "ai_model_tier" AS ENUM ('MID_TIER', 'FRONTIER_TIER');

-- CreateEnum
CREATE TYPE "data_point_source_type" AS ENUM ('REPORT_RUN_FIELD', 'LIVE_QUERY');

-- CreateEnum
CREATE TYPE "ai_interaction_outcome" AS ENUM ('ALLOWED', 'REFUSED');

-- CreateEnum
CREATE TYPE "stakeholder_report_status" AS ENUM ('DRAFT', 'APPROVED', 'DISTRIBUTED');

-- CreateEnum
CREATE TYPE "stakeholder_audience_class" AS ENUM ('INTERNAL', 'CLIENT', 'REGULATOR');

-- CreateTable
CREATE TABLE "ai_capability_flag" (
    "capability_code" TEXT NOT NULL,
    "is_enabled" BOOLEAN NOT NULL DEFAULT false,
    "updated_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_capability_flag_pkey" PRIMARY KEY ("capability_code")
);

-- CreateTable
CREATE TABLE "ai_kill_switch" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "activated_by_user_id" UUID,
    "reason" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_kill_switch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_capability_context_rule" (
    "capability_code" TEXT NOT NULL,
    "context_type" "ai_context_type" NOT NULL,
    "required_workflow_type_code" TEXT,
    "required_org_unit_code" TEXT,

    CONSTRAINT "ai_capability_context_rule_pkey" PRIMARY KEY ("capability_code")
);

-- CreateTable
CREATE TABLE "ai_tiered_model_policy" (
    "capability_code" TEXT NOT NULL,
    "tier" "ai_model_tier" NOT NULL,
    "provider_name" TEXT,
    "model_name" TEXT,

    CONSTRAINT "ai_tiered_model_policy_pkey" PRIMARY KEY ("capability_code")
);

-- CreateTable
CREATE TABLE "ai_token_budget" (
    "id" UUID NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "period_year" INTEGER NOT NULL,
    "period_month" INTEGER NOT NULL,
    "token_limit" INTEGER NOT NULL,
    "tokens_consumed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ai_token_budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_point_catalog" (
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "required_function_code" TEXT NOT NULL,
    "required_level" TEXT NOT NULL,
    "source_type" "data_point_source_type" NOT NULL,
    "source_ref" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_point_catalog_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "ai_interaction_log" (
    "id" UUID NOT NULL,
    "asking_user_id" UUID NOT NULL,
    "capability_code" TEXT NOT NULL,
    "prompt_text" TEXT NOT NULL,
    "requested_data_point_codes" JSONB NOT NULL,
    "included_data_point_codes" JSONB NOT NULL,
    "excluded_data_point_codes" JSONB NOT NULL,
    "context_json" JSONB,
    "gate1_flag_enabled" BOOLEAN NOT NULL,
    "gate2_granted" BOOLEAN NOT NULL,
    "gate3_context_ok" BOOLEAN NOT NULL,
    "kill_switch_active" BOOLEAN NOT NULL,
    "token_budget_ok" BOOLEAN NOT NULL,
    "outcome" "ai_interaction_outcome" NOT NULL,
    "refusal_reason" TEXT,
    "response_text" TEXT,
    "ai_drafted" BOOLEAN NOT NULL DEFAULT false,
    "cache_hit" BOOLEAN NOT NULL DEFAULT false,
    "tokens_charged" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_interaction_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_response_cache" (
    "cache_key" TEXT NOT NULL,
    "capability_code" TEXT NOT NULL,
    "response_text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ai_response_cache_pkey" PRIMARY KEY ("cache_key")
);

-- CreateTable
CREATE TABLE "stakeholder_report_run" (
    "id" UUID NOT NULL,
    "department" TEXT NOT NULL,
    "report_type" TEXT NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "figures" JSONB NOT NULL,
    "ai_drafted_narrative" TEXT,
    "ai_interaction_log_id" UUID,
    "status" "stakeholder_report_status" NOT NULL DEFAULT 'DRAFT',
    "audience_class" "stakeholder_audience_class" NOT NULL,
    "generated_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stakeholder_report_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stakeholder_distribution_log" (
    "id" UUID NOT NULL,
    "stakeholder_report_run_id" UUID NOT NULL,
    "audience_class" "stakeholder_audience_class" NOT NULL,
    "distributed_by_user_id" UUID NOT NULL,
    "sign_off_by_user_id" UUID,
    "recipient_description" TEXT NOT NULL,
    "distributed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stakeholder_distribution_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ai_token_budget_org_unit_code_period_year_period_month_key" ON "ai_token_budget"("org_unit_code", "period_year", "period_month");

-- CreateIndex
CREATE UNIQUE INDEX "stakeholder_report_run_workflow_instance_id_key" ON "stakeholder_report_run"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "ai_capability_flag" ADD CONSTRAINT "ai_capability_flag_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_kill_switch" ADD CONSTRAINT "ai_kill_switch_activated_by_user_id_fkey" FOREIGN KEY ("activated_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_capability_context_rule" ADD CONSTRAINT "ai_capability_context_rule_required_org_unit_code_fkey" FOREIGN KEY ("required_org_unit_code") REFERENCES "org_unit"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_token_budget" ADD CONSTRAINT "ai_token_budget_org_unit_code_fkey" FOREIGN KEY ("org_unit_code") REFERENCES "org_unit"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_interaction_log" ADD CONSTRAINT "ai_interaction_log_asking_user_id_fkey" FOREIGN KEY ("asking_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder_report_run" ADD CONSTRAINT "stakeholder_report_run_generated_by_user_id_fkey" FOREIGN KEY ("generated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder_report_run" ADD CONSTRAINT "stakeholder_report_run_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder_distribution_log" ADD CONSTRAINT "stakeholder_distribution_log_stakeholder_report_run_id_fkey" FOREIGN KEY ("stakeholder_report_run_id") REFERENCES "stakeholder_report_run"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder_distribution_log" ADD CONSTRAINT "stakeholder_distribution_log_distributed_by_user_id_fkey" FOREIGN KEY ("distributed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stakeholder_distribution_log" ADD CONSTRAINT "stakeholder_distribution_log_sign_off_by_user_id_fkey" FOREIGN KEY ("sign_off_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
