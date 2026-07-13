
-- CreateEnum
CREATE TYPE "repayment_obligation_status" AS ENUM ('PENDING', 'PAID', 'RESTRUCTURED', 'DEFAULTED');

-- AlterEnum
ALTER TYPE "task_status" ADD VALUE 'DEFAULTED';

-- AlterTable
ALTER TABLE "counterparty_restructure_request" ADD COLUMN     "obligation_id" UUID,
ADD COLUMN     "workflow_instance_id" UUID;

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "amber_notified_at" TIMESTAMP(3),
ADD COLUMN     "defaulted_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "task_escalation_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "amber_threshold_pct" INTEGER NOT NULL DEFAULT 70,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_escalation_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task_default_gate_policy" (
    "id" UUID NOT NULL,
    "min_default_count" INTEGER NOT NULL,
    "severity_code" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "task_default_gate_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counterparty_repayment_obligation" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "facility_application_id" UUID,
    "due_date" TIMESTAMP(3) NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "status" "repayment_obligation_status" NOT NULL DEFAULT 'PENDING',
    "paid_at" TIMESTAMP(3),
    "paid_by_user_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counterparty_repayment_obligation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_reminder_ladder_config" (
    "id" UUID NOT NULL,
    "day_offset" INTEGER NOT NULL,
    "channels" JSONB NOT NULL,
    "notify_management" BOOLEAN NOT NULL DEFAULT false,
    "creates_follow_up_call_task" BOOLEAN NOT NULL DEFAULT false,
    "is_post_grace_default" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_reminder_ladder_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_reminder_notice_log" (
    "id" UUID NOT NULL,
    "obligation_id" UUID NOT NULL,
    "day_offset" INTEGER NOT NULL,
    "client_communication_id" UUID,
    "sent_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_reminder_notice_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_default_gate_policy_min_default_count_key" ON "task_default_gate_policy"("min_default_count");

-- CreateIndex
CREATE UNIQUE INDEX "payment_reminder_ladder_config_day_offset_key" ON "payment_reminder_ladder_config"("day_offset");

-- CreateIndex
CREATE UNIQUE INDEX "payment_reminder_notice_log_obligation_id_day_offset_key" ON "payment_reminder_notice_log"("obligation_id", "day_offset");

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_restructure_request_workflow_instance_id_key" ON "counterparty_restructure_request"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "task_default_gate_policy" ADD CONSTRAINT "task_default_gate_policy_severity_code_fkey" FOREIGN KEY ("severity_code") REFERENCES "pms_gate_severity_config"("severity") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_restructure_request" ADD CONSTRAINT "counterparty_restructure_request_obligation_id_fkey" FOREIGN KEY ("obligation_id") REFERENCES "counterparty_repayment_obligation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_repayment_obligation" ADD CONSTRAINT "counterparty_repayment_obligation_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_repayment_obligation" ADD CONSTRAINT "counterparty_repayment_obligation_facility_application_id_fkey" FOREIGN KEY ("facility_application_id") REFERENCES "counterparty_facility_application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_reminder_notice_log" ADD CONSTRAINT "payment_reminder_notice_log_obligation_id_fkey" FOREIGN KEY ("obligation_id") REFERENCES "counterparty_repayment_obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Invariant 25(4) adversarial requirement: "restructure limit DB-ENFORCED"
-- (max 1 restructure per transaction, max 1-month extension). Neither was
-- actually enforced at the DB level before this migration despite
-- invariant 28(e)'s own comment claiming so (see counterparty.service.ts)
-- — this closes that real gap. A partial unique index (only when
-- obligation_id is set — the pre-existing counterparty-level-only
-- restructure flow from invariant 28(e) predates the obligation concept
-- and is left unconstrained) allows at most ONE APPROVED restructure per
-- obligation; exceeding it must go through the
-- COUNTERPARTY_RESTRUCTURE_EXCEPTION workflow instead (a second row with
-- workflow_instance_id set, never a second APPROVED row against the same
-- obligation).
CREATE UNIQUE INDEX "counterparty_restructure_request_one_approved_per_obligation"
  ON "counterparty_restructure_request" ("obligation_id")
  WHERE "obligation_id" IS NOT NULL AND "status" = 'APPROVED';

ALTER TABLE "counterparty_restructure_request"
  ADD CONSTRAINT "counterparty_restructure_request_extension_months_check"
  CHECK ("extension_months" IS NULL OR "extension_months" <= 1);

