-- CreateEnum
CREATE TYPE "workflow_status" AS ENUM ('INITIATED', 'PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'EXECUTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "approval_decision" AS ENUM ('APPROVE', 'REJECT');

-- AlterTable
ALTER TABLE "role" ADD COLUMN     "excludes_any_approver" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_exclusive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "role_permission" ADD COLUMN     "approval_limit_kobo" BIGINT;

-- CreateTable
CREATE TABLE "workflow_type" (
    "code" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "workflow_type_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "approval_rule" (
    "id" UUID NOT NULL,
    "workflow_type_code" TEXT NOT NULL,
    "scenario" TEXT,
    "min_amount_kobo" BIGINT,
    "max_amount_kobo" BIGINT,
    "required_checks_note" TEXT,
    "description" TEXT,

    CONSTRAINT "approval_rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "approval_rule_step" (
    "id" UUID NOT NULL,
    "approval_rule_id" UUID NOT NULL,
    "step_order" INTEGER NOT NULL,
    "required_function_code" TEXT NOT NULL,
    "requires_amount_limit_check" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,

    CONSTRAINT "approval_rule_step_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_instance" (
    "id" UUID NOT NULL,
    "workflow_type_code" TEXT NOT NULL,
    "approval_rule_id" UUID NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "amount_kobo" BIGINT,
    "scenario" TEXT,
    "status" "workflow_status" NOT NULL DEFAULT 'INITIATED',
    "initiated_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workflow_instance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workflow_step_approval" (
    "id" UUID NOT NULL,
    "workflow_instance_id" UUID NOT NULL,
    "approval_rule_step_id" UUID NOT NULL,
    "approver_user_id" UUID NOT NULL,
    "decision" "approval_decision" NOT NULL,
    "decided_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "workflow_step_approval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "approval_rule_step_approval_rule_id_step_order_key" ON "approval_rule_step"("approval_rule_id", "step_order");

-- CreateIndex
CREATE INDEX "workflow_instance_workflow_type_code_entity_type_entity_id_idx" ON "workflow_instance"("workflow_type_code", "entity_type", "entity_id");

-- CreateIndex
CREATE UNIQUE INDEX "workflow_step_approval_workflow_instance_id_approval_rule_s_key" ON "workflow_step_approval"("workflow_instance_id", "approval_rule_step_id");

-- AddForeignKey
ALTER TABLE "approval_rule" ADD CONSTRAINT "approval_rule_workflow_type_code_fkey" FOREIGN KEY ("workflow_type_code") REFERENCES "workflow_type"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_rule_step" ADD CONSTRAINT "approval_rule_step_approval_rule_id_fkey" FOREIGN KEY ("approval_rule_id") REFERENCES "approval_rule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "approval_rule_step" ADD CONSTRAINT "approval_rule_step_required_function_code_fkey" FOREIGN KEY ("required_function_code") REFERENCES "platform_function"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_instance" ADD CONSTRAINT "workflow_instance_workflow_type_code_fkey" FOREIGN KEY ("workflow_type_code") REFERENCES "workflow_type"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_instance" ADD CONSTRAINT "workflow_instance_approval_rule_id_fkey" FOREIGN KEY ("approval_rule_id") REFERENCES "approval_rule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_instance" ADD CONSTRAINT "workflow_instance_initiated_by_user_id_fkey" FOREIGN KEY ("initiated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_step_approval" ADD CONSTRAINT "workflow_step_approval_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_step_approval" ADD CONSTRAINT "workflow_step_approval_approval_rule_step_id_fkey" FOREIGN KEY ("approval_rule_step_id") REFERENCES "approval_rule_step"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workflow_step_approval" ADD CONSTRAINT "workflow_step_approval_approver_user_id_fkey" FOREIGN KEY ("approver_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
