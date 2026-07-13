
-- CreateEnum
CREATE TYPE "department_head_designation_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED', 'REVOKED');

-- CreateTable
CREATE TABLE "department_head_designation" (
    "id" UUID NOT NULL,
    "org_unit_code" TEXT NOT NULL,
    "employee_id" UUID NOT NULL,
    "status" "department_head_designation_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3),
    "effective_to" TIMESTAMP(3),
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "department_head_designation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "department_head_designation_workflow_instance_id_key" ON "department_head_designation"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "department_head_designation" ADD CONSTRAINT "department_head_designation_org_unit_code_fkey" FOREIGN KEY ("org_unit_code") REFERENCES "org_unit"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department_head_designation" ADD CONSTRAINT "department_head_designation_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department_head_designation" ADD CONSTRAINT "department_head_designation_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department_head_designation" ADD CONSTRAINT "department_head_designation_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

