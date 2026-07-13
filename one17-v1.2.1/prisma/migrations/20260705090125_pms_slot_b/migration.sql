-- CreateEnum
CREATE TYPE "pms_cycle_type" AS ENUM ('INCENTIVE_CYCLE', 'ANNUAL_APPRAISAL');

-- CreateEnum
CREATE TYPE "pms_cycle_status" AS ENUM ('OPEN', 'SCORING', 'VALIDATION', 'APPROVED', 'INCENTIVE_COMPUTED', 'PAID', 'CLOSED');

-- CreateEnum
CREATE TYPE "score_submission_status" AS ENUM ('SELF_SCORED', 'VALIDATED', 'REJECTED');

-- CreateEnum
CREATE TYPE "gate_outcome" AS ENUM ('FULL_RELEASE', 'CAPPED', 'DEFERRED', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "payroll_run_status" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'POSTED');

-- CreateTable
CREATE TABLE "role_scorecard_override" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "kpi_definition_id" UUID NOT NULL,
    "override_weight_pct" DECIMAL(5,2) NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "role_scorecard_override_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_report" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "kpi_definition_id" UUID NOT NULL,
    "activity_text" TEXT NOT NULL,
    "workflow_instance_ref" UUID,
    "task_ref" TEXT,
    "logged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appraisal_cycle" (
    "id" UUID NOT NULL,
    "cycle_type" "pms_cycle_type" NOT NULL,
    "org_unit_code" TEXT,
    "period_start" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3) NOT NULL,
    "status" "pms_cycle_status" NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appraisal_cycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_score_submission" (
    "id" UUID NOT NULL,
    "appraisal_cycle_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "status" "score_submission_status" NOT NULL DEFAULT 'SELF_SCORED',
    "workflow_instance_id" UUID,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_score_submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_kpi_score" (
    "id" UUID NOT NULL,
    "employee_score_submission_id" UUID NOT NULL,
    "kpi_definition_id" UUID NOT NULL,
    "self_score_pct" DECIMAL(5,2) NOT NULL,
    "validated_score_pct" DECIMAL(5,2),
    "evidence_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_kpi_score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incentive_band_config" (
    "id" UUID NOT NULL,
    "min_score_pct" DECIMAL(5,2) NOT NULL,
    "payout_pct" DECIMAL(5,2) NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "incentive_band_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pms_gate_severity_config" (
    "id" UUID NOT NULL,
    "severity" TEXT NOT NULL,
    "outcome" "gate_outcome" NOT NULL,
    "capped_pct" DECIMAL(5,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pms_gate_severity_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "behavioural_gate_check" (
    "id" UUID NOT NULL,
    "appraisal_cycle_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "attendance_ok" BOOLEAN NOT NULL,
    "ethical_conduct_ok" BOOLEAN NOT NULL,
    "trends_violation" BOOLEAN NOT NULL DEFAULT false,
    "disciplinary_note" TEXT,
    "evidence_ref" TEXT,
    "outcome" "gate_outcome" NOT NULL,
    "capped_pct" DECIMAL(5,2),
    "assessed_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "behavioural_gate_check_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_incentive_result" (
    "id" UUID NOT NULL,
    "appraisal_cycle_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "total_emolument_kobo" BIGINT NOT NULL,
    "incentive_pool_kobo" BIGINT NOT NULL,
    "overall_score_pct" DECIMAL(5,2) NOT NULL,
    "band_payout_pct" DECIMAL(5,2) NOT NULL,
    "gate_outcome" "gate_outcome" NOT NULL,
    "pre_gate_incentive_kobo" BIGINT NOT NULL,
    "final_incentive_kobo" BIGINT NOT NULL,
    "class_allocation_kobo" JSONB NOT NULL,
    "computed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_incentive_result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_rule_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "consolidated_relief_flat_kobo" BIGINT NOT NULL,
    "consolidated_relief_pct_of_gross" DECIMAL(5,2) NOT NULL,
    "bands" JSONB NOT NULL,
    "pension_employee_pct" DECIMAL(5,2) NOT NULL,
    "nhf_pct" DECIMAL(5,2) NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "validated_by_user_id" UUID,
    "effective_from" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tax_rule_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_run" (
    "id" UUID NOT NULL,
    "period_month" INTEGER NOT NULL,
    "period_year" INTEGER NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "status" "payroll_run_status" NOT NULL DEFAULT 'DRAFT',
    "tax_rule_config_id" UUID NOT NULL,
    "journal_entry_id" UUID,
    "workflow_instance_id" UUID,
    "generated_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payroll_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payroll_run_line" (
    "id" UUID NOT NULL,
    "payroll_run_id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "gross_kobo" BIGINT NOT NULL,
    "paye_kobo" BIGINT NOT NULL,
    "pension_kobo" BIGINT NOT NULL,
    "nhf_kobo" BIGINT NOT NULL,
    "incentive_kobo" BIGINT NOT NULL DEFAULT 0,
    "net_pay_kobo" BIGINT NOT NULL,

    CONSTRAINT "payroll_run_line_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "role_scorecard_override_workflow_instance_id_key" ON "role_scorecard_override"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_score_submission_workflow_instance_id_key" ON "employee_score_submission"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_score_submission_appraisal_cycle_id_employee_id_key" ON "employee_score_submission"("appraisal_cycle_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_kpi_score_employee_score_submission_id_kpi_definit_key" ON "employee_kpi_score"("employee_score_submission_id", "kpi_definition_id");

-- CreateIndex
CREATE UNIQUE INDEX "pms_gate_severity_config_severity_key" ON "pms_gate_severity_config"("severity");

-- CreateIndex
CREATE UNIQUE INDEX "behavioural_gate_check_appraisal_cycle_id_employee_id_key" ON "behavioural_gate_check"("appraisal_cycle_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_incentive_result_appraisal_cycle_id_employee_id_key" ON "employee_incentive_result"("appraisal_cycle_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rule_config_version_key" ON "tax_rule_config"("version");

-- CreateIndex
CREATE UNIQUE INDEX "payroll_run_workflow_instance_id_key" ON "payroll_run"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "payroll_run_period_month_period_year_ledger_entity_code_key" ON "payroll_run"("period_month", "period_year", "ledger_entity_code");

-- CreateIndex
CREATE UNIQUE INDEX "payroll_run_line_payroll_run_id_employee_id_key" ON "payroll_run_line"("payroll_run_id", "employee_id");

-- AddForeignKey
ALTER TABLE "role_scorecard_override" ADD CONSTRAINT "role_scorecard_override_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_scorecard_override" ADD CONSTRAINT "role_scorecard_override_kpi_definition_id_fkey" FOREIGN KEY ("kpi_definition_id") REFERENCES "kpi_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_report" ADD CONSTRAINT "activity_report_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_report" ADD CONSTRAINT "activity_report_kpi_definition_id_fkey" FOREIGN KEY ("kpi_definition_id") REFERENCES "kpi_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_score_submission" ADD CONSTRAINT "employee_score_submission_appraisal_cycle_id_fkey" FOREIGN KEY ("appraisal_cycle_id") REFERENCES "appraisal_cycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_score_submission" ADD CONSTRAINT "employee_score_submission_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_kpi_score" ADD CONSTRAINT "employee_kpi_score_employee_score_submission_id_fkey" FOREIGN KEY ("employee_score_submission_id") REFERENCES "employee_score_submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_kpi_score" ADD CONSTRAINT "employee_kpi_score_kpi_definition_id_fkey" FOREIGN KEY ("kpi_definition_id") REFERENCES "kpi_definition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "behavioural_gate_check" ADD CONSTRAINT "behavioural_gate_check_appraisal_cycle_id_fkey" FOREIGN KEY ("appraisal_cycle_id") REFERENCES "appraisal_cycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "behavioural_gate_check" ADD CONSTRAINT "behavioural_gate_check_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_incentive_result" ADD CONSTRAINT "employee_incentive_result_appraisal_cycle_id_fkey" FOREIGN KEY ("appraisal_cycle_id") REFERENCES "appraisal_cycle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_incentive_result" ADD CONSTRAINT "employee_incentive_result_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_run" ADD CONSTRAINT "payroll_run_tax_rule_config_id_fkey" FOREIGN KEY ("tax_rule_config_id") REFERENCES "tax_rule_config"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_run_line" ADD CONSTRAINT "payroll_run_line_payroll_run_id_fkey" FOREIGN KEY ("payroll_run_id") REFERENCES "payroll_run"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payroll_run_line" ADD CONSTRAINT "payroll_run_line_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
