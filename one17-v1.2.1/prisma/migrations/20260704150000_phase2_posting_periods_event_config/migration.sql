-- Phase 2 core: posting rules and period close (CHECK2 pass, 2026-07-04).
-- CreateEnum
CREATE TYPE "accounting_period_status" AS ENUM ('OPEN', 'CLOSED');

-- AlterTable
ALTER TABLE "journal_entry" ADD COLUMN     "inter_entity_ref" TEXT,
ADD COLUMN     "posting_workflow_instance_id" UUID;

-- CreateTable
CREATE TABLE "accounting_period" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "status" "accounting_period_status" NOT NULL DEFAULT 'OPEN',
    "opened_by_user_id" UUID NOT NULL,
    "closed_by_user_id" UUID,
    "closed_at" TIMESTAMP(3),
    "close_workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounting_period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_journal_config" (
    "id" UUID NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "event_type" TEXT NOT NULL,
    "je_reference_pattern" TEXT NOT NULL,
    "dr_account_code" TEXT NOT NULL,
    "dr_account_name" TEXT NOT NULL,
    "cr_account_code" TEXT NOT NULL,
    "cr_account_name" TEXT NOT NULL,
    "trigger_description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_journal_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounting_period_close_workflow_instance_id_key" ON "accounting_period"("close_workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_period_ledger_entity_code_period_start_period_en_key" ON "accounting_period"("ledger_entity_code", "period_start", "period_end");

-- CreateIndex
CREATE UNIQUE INDEX "event_journal_config_event_type_key" ON "event_journal_config"("event_type");

-- CreateIndex
CREATE UNIQUE INDEX "journal_entry_posting_workflow_instance_id_key" ON "journal_entry"("posting_workflow_instance_id");

-- AddForeignKey
ALTER TABLE "accounting_period" ADD CONSTRAINT "accounting_period_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting_period" ADD CONSTRAINT "accounting_period_opened_by_user_id_fkey" FOREIGN KEY ("opened_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting_period" ADD CONSTRAINT "accounting_period_closed_by_user_id_fkey" FOREIGN KEY ("closed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

