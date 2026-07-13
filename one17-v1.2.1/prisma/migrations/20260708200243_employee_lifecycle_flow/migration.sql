-- CreateEnum
CREATE TYPE "employee_lifecycle_request_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "employee_onboarding_request" (
    "id" UUID NOT NULL,
    "surname" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT,
    "position_id" UUID NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "reports_to_id" UUID,
    "hire_date" TIMESTAMP(3) NOT NULL,
    "proposed_performance_incentive_pct" DECIMAL(5,2) NOT NULL DEFAULT 25.00,
    "linked_user_email" TEXT,
    "status" "employee_lifecycle_request_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "resulting_employee_id" UUID,
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_onboarding_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_offboarding_request" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "employee_lifecycle_request_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_offboarding_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_incentive_pct_change_request" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "proposed_pct" DECIMAL(5,2) NOT NULL,
    "status" "employee_lifecycle_request_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "applied_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_incentive_pct_change_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_onboarding_request_workflow_instance_id_key" ON "employee_onboarding_request"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_onboarding_request_resulting_employee_id_key" ON "employee_onboarding_request"("resulting_employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_offboarding_request_workflow_instance_id_key" ON "employee_offboarding_request"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_incentive_pct_change_request_workflow_instance_id_key" ON "employee_incentive_pct_change_request"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "employee_onboarding_request" ADD CONSTRAINT "employee_onboarding_request_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_onboarding_request" ADD CONSTRAINT "employee_onboarding_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_onboarding_request" ADD CONSTRAINT "employee_onboarding_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_onboarding_request" ADD CONSTRAINT "employee_onboarding_request_resulting_employee_id_fkey" FOREIGN KEY ("resulting_employee_id") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_offboarding_request" ADD CONSTRAINT "employee_offboarding_request_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_offboarding_request" ADD CONSTRAINT "employee_offboarding_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_offboarding_request" ADD CONSTRAINT "employee_offboarding_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_incentive_pct_change_request" ADD CONSTRAINT "employee_incentive_pct_change_request_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_incentive_pct_change_request" ADD CONSTRAINT "employee_incentive_pct_change_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_incentive_pct_change_request" ADD CONSTRAINT "employee_incentive_pct_change_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
