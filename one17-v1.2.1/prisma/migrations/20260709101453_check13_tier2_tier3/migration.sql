-- CreateEnum
CREATE TYPE "investor_mandate_amendment_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "investor_exit_type" AS ENUM ('MATURITY_TRANSITION', 'FINAL_EXIT');

-- CreateEnum
CREATE TYPE "investor_exit_request_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "bank_statement_line_status" AS ENUM ('UNMATCHED', 'MATCHED');

-- CreateEnum
CREATE TYPE "counterparty_account_status" AS ENUM ('OPEN', 'WRITTEN_OFF', 'CLOSED');

-- CreateEnum
CREATE TYPE "counterparty_write_off_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
ALTER TYPE "investor_fund_status" ADD VALUE 'DORMANT';

-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "account_status" "counterparty_account_status" NOT NULL DEFAULT 'OPEN';

-- AlterTable
ALTER TABLE "counterparty_onboarding_case" ADD COLUMN     "last_periodic_review_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "investor_onboarding_case" ADD COLUMN     "last_periodic_review_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "investor_mandate_amendment_request" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "proposed_target_return_rate" DECIMAL(6,4),
    "proposed_rollover_default" "rollover_default",
    "proposed_early_exit_waiver" BOOLEAN,
    "status" "investor_mandate_amendment_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_mandate_amendment_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_exit_request" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "exit_type" "investor_exit_type" NOT NULL,
    "status" "investor_exit_request_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_exit_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_dormancy_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "months_inactive_threshold" INTEGER NOT NULL DEFAULT 12,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investor_dormancy_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_sanctions_rescreening_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "frequency_months" INTEGER NOT NULL DEFAULT 12,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "investor_sanctions_rescreening_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_statement_line" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "gl_account_code" TEXT NOT NULL,
    "statement_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "external_ref" TEXT,
    "status" "bank_statement_line_status" NOT NULL DEFAULT 'UNMATCHED',
    "matched_journal_entry_line_id" UUID,
    "matched_by_user_id" UUID,
    "matched_at" TIMESTAMP(3),
    "uploaded_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bank_statement_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counterparty_write_off_request" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "write_off_amount_kobo" BIGINT NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "investment_account_code" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "counterparty_write_off_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "posted_journal_entry_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counterparty_write_off_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investor_mandate_amendment_request_workflow_instance_id_key" ON "investor_mandate_amendment_request"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "investor_exit_request_workflow_instance_id_key" ON "investor_exit_request"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "bank_statement_line_matched_journal_entry_line_id_key" ON "bank_statement_line"("matched_journal_entry_line_id");

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_write_off_request_workflow_instance_id_key" ON "counterparty_write_off_request"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "investor_mandate_amendment_request" ADD CONSTRAINT "investor_mandate_amendment_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_mandate_amendment_request" ADD CONSTRAINT "investor_mandate_amendment_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_mandate_amendment_request" ADD CONSTRAINT "investor_mandate_amendment_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_exit_request" ADD CONSTRAINT "investor_exit_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_exit_request" ADD CONSTRAINT "investor_exit_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_exit_request" ADD CONSTRAINT "investor_exit_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_statement_line" ADD CONSTRAINT "bank_statement_line_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_statement_line" ADD CONSTRAINT "bank_statement_line_matched_journal_entry_line_id_fkey" FOREIGN KEY ("matched_journal_entry_line_id") REFERENCES "journal_entry_line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_statement_line" ADD CONSTRAINT "bank_statement_line_matched_by_user_id_fkey" FOREIGN KEY ("matched_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bank_statement_line" ADD CONSTRAINT "bank_statement_line_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_write_off_request" ADD CONSTRAINT "counterparty_write_off_request_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_write_off_request" ADD CONSTRAINT "counterparty_write_off_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_write_off_request" ADD CONSTRAINT "counterparty_write_off_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

