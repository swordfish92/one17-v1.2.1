-- CreateEnum
CREATE TYPE "task_submission_status" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED');

-- CreateEnum
CREATE TYPE "leave_application_status" AS ENUM ('PENDING', 'SUPERVISOR_APPROVED', 'HR_ACKNOWLEDGED', 'REJECTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "attendance_adapter_type" AS ENUM ('TTLOCK', 'FILE_IMPORT');

-- CreateEnum
CREATE TYPE "exception_request_status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- AlterEnum
ALTER TYPE "calendar_entry_kind" ADD VALUE 'LEAVE';

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "kpi_definition_id" UUID;

-- CreateTable
CREATE TABLE "task_submission" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "submitted_by_employee_id" UUID NOT NULL,
    "supervisor_employee_id" UUID NOT NULL,
    "deliverable_url" TEXT,
    "status" "task_submission_status" NOT NULL DEFAULT 'PENDING',
    "accepted_task_id" UUID,
    "decided_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "task_submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_type" (
    "id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "default_annual_days" DECIMAL(5,2) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_entitlement" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "leave_type_code" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "entitled_days" DECIMAL(5,2) NOT NULL,
    "used_days" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_entitlement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_application" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "leave_type_code" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "days_requested" DECIMAL(5,2) NOT NULL,
    "relief_officer_employee_id" UUID,
    "reason" TEXT,
    "status" "leave_application_status" NOT NULL DEFAULT 'PENDING',
    "supervisor_decided_by_user_id" UUID,
    "supervisor_decided_at" TIMESTAMP(3),
    "supervisor_notes" TEXT,
    "hr_acknowledged_by_user_id" UUID,
    "hr_acknowledged_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_provider" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "adapter_type" "attendance_adapter_type" NOT NULL,
    "name" TEXT NOT NULL,
    "client_id" TEXT,
    "client_secret" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "configured_by_user_id" UUID,
    "pending_name" TEXT,
    "pending_client_id" TEXT,
    "pending_client_secret" TEXT,
    "pending_is_active" BOOLEAN,
    "pending_proposed_by_user_id" UUID,
    "config_workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_event" (
    "id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "device_user_ref" TEXT NOT NULL,
    "employee_id" UUID,
    "location_ref" TEXT,
    "occurred_at" TIMESTAMP(3) NOT NULL,
    "method" TEXT NOT NULL,
    "raw_ref" TEXT NOT NULL,
    "is_terminated_alert" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_lock_user_mapping" (
    "id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "device_user_ref" TEXT NOT NULL,
    "employee_id" UUID NOT NULL,
    "mapped_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_lock_user_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_clock_in_policy" (
    "id" UUID NOT NULL,
    "org_unit_code" TEXT,
    "cadre" TEXT,
    "expected_start_time" TEXT NOT NULL,
    "grace_window_minutes" INTEGER NOT NULL,
    "expected_hours_per_day" DECIMAL(4,2) NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_clock_in_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_exception_request" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "attendance_event_id" UUID,
    "disputed_date" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "exception_request_status" NOT NULL DEFAULT 'PENDING',
    "decided_by_user_id" UUID,
    "decided_at" TIMESTAMP(3),
    "decision_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_exception_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attendance_lateness_gate_policy" (
    "id" UUID NOT NULL,
    "min_late_count" INTEGER NOT NULL,
    "severity_code" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_lateness_gate_policy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_submission_accepted_task_id_key" ON "task_submission"("accepted_task_id");

-- CreateIndex
CREATE INDEX "task_submission_supervisor_employee_id_status_idx" ON "task_submission"("supervisor_employee_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "leave_type_code_key" ON "leave_type"("code");

-- CreateIndex
CREATE UNIQUE INDEX "leave_entitlement_employee_id_leave_type_code_year_key" ON "leave_entitlement"("employee_id", "leave_type_code", "year");

-- CreateIndex
CREATE INDEX "leave_application_employee_id_status_idx" ON "leave_application"("employee_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_provider_provider_slot_key" ON "attendance_provider"("provider_slot");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_provider_config_workflow_instance_id_key" ON "attendance_provider"("config_workflow_instance_id");

-- CreateIndex
CREATE INDEX "attendance_event_employee_id_occurred_at_idx" ON "attendance_event"("employee_id", "occurred_at");

-- CreateIndex
CREATE INDEX "attendance_event_provider_id_device_user_ref_employee_id_idx" ON "attendance_event"("provider_id", "device_user_ref", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_event_provider_id_raw_ref_key" ON "attendance_event"("provider_id", "raw_ref");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_lock_user_mapping_provider_id_device_user_ref_key" ON "attendance_lock_user_mapping"("provider_id", "device_user_ref");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_clock_in_policy_org_unit_code_cadre_key" ON "attendance_clock_in_policy"("org_unit_code", "cadre");

-- CreateIndex
CREATE UNIQUE INDEX "attendance_lateness_gate_policy_min_late_count_key" ON "attendance_lateness_gate_policy"("min_late_count");

-- CreateIndex
CREATE INDEX "task_kpi_definition_id_idx" ON "task"("kpi_definition_id");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_kpi_definition_id_fkey" FOREIGN KEY ("kpi_definition_id") REFERENCES "kpi_definition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_submission" ADD CONSTRAINT "task_submission_submitted_by_employee_id_fkey" FOREIGN KEY ("submitted_by_employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_submission" ADD CONSTRAINT "task_submission_supervisor_employee_id_fkey" FOREIGN KEY ("supervisor_employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task_submission" ADD CONSTRAINT "task_submission_accepted_task_id_fkey" FOREIGN KEY ("accepted_task_id") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_entitlement" ADD CONSTRAINT "leave_entitlement_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_entitlement" ADD CONSTRAINT "leave_entitlement_leave_type_code_fkey" FOREIGN KEY ("leave_type_code") REFERENCES "leave_type"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_application" ADD CONSTRAINT "leave_application_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_application" ADD CONSTRAINT "leave_application_leave_type_code_fkey" FOREIGN KEY ("leave_type_code") REFERENCES "leave_type"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_application" ADD CONSTRAINT "leave_application_relief_officer_employee_id_fkey" FOREIGN KEY ("relief_officer_employee_id") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_event" ADD CONSTRAINT "attendance_event_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "attendance_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_event" ADD CONSTRAINT "attendance_event_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_lock_user_mapping" ADD CONSTRAINT "attendance_lock_user_mapping_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "attendance_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_lock_user_mapping" ADD CONSTRAINT "attendance_lock_user_mapping_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_exception_request" ADD CONSTRAINT "attendance_exception_request_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_exception_request" ADD CONSTRAINT "attendance_exception_request_attendance_event_id_fkey" FOREIGN KEY ("attendance_event_id") REFERENCES "attendance_event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance_lateness_gate_policy" ADD CONSTRAINT "attendance_lateness_gate_policy_severity_code_fkey" FOREIGN KEY ("severity_code") REFERENCES "pms_gate_severity_config"("severity") ON DELETE RESTRICT ON UPDATE CASCADE;

