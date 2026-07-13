-- CreateEnum
CREATE TYPE "ledger_entity_type" AS ENUM ('COMPANY', 'FUND', 'POOL', 'MANDATE', 'CLIENT_MONEY');

-- CreateEnum
CREATE TYPE "ledger_entity_status" AS ENUM ('ACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "account_type" AS ENUM ('ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "journal_entry_status" AS ENUM ('DRAFT', 'POSTED', 'REVERSED');

-- CreateEnum
CREATE TYPE "txn_type" AS ENUM ('SUBSCRIPTION', 'REDEMPTION', 'PLACEMENT', 'PROFIT_ALLOCATION', 'DISTRIBUTION', 'ROLLOVER', 'EARLY_EXIT', 'FEE', 'PURIFICATION', 'ADJUSTMENT');

-- CreateEnum
CREATE TYPE "txn_status" AS ENUM ('PENDING', 'POSTED', 'REVERSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "cashbook_reconciliation_status" AS ENUM ('UNRECONCILED', 'RECONCILED', 'DISPUTED');

-- CreateTable
CREATE TABLE "ledger_entity" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "entity_type" "ledger_entity_type" NOT NULL,
    "product_code" TEXT,
    "status" "ledger_entity_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ledger_entity_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "chart_of_account" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "account_code" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_type" "account_type" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "chart_of_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_entry" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "journal_reference" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "journal_entry_status" NOT NULL DEFAULT 'DRAFT',
    "posted_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "journal_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "journal_entry_line" (
    "id" UUID NOT NULL,
    "journal_entry_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "debit_kobo" BIGINT NOT NULL DEFAULT 0,
    "credit_kobo" BIGINT NOT NULL DEFAULT 0,
    "description" TEXT,

    CONSTRAINT "journal_entry_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "txn" (
    "id" UUID NOT NULL,
    "txn_type" "txn_type" NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "product_account_id" TEXT,
    "value_date" TIMESTAMP(3) NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "status" "txn_status" NOT NULL DEFAULT 'PENDING',
    "maker_user_id" UUID NOT NULL,
    "checker_user_id" UUID,
    "posted_journal_entry_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "txn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cashbook_entry" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "entry_date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "bank_reference" TEXT,
    "reconciliation_status" "cashbook_reconciliation_status" NOT NULL DEFAULT 'UNRECONCILED',
    "reconciled_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cashbook_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "document_register_entry" (
    "id" UUID NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "uploaded_by_user_id" UUID NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_register_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chart_of_account_ledger_entity_code_account_code_key" ON "chart_of_account"("ledger_entity_code", "account_code");

-- CreateIndex
CREATE INDEX "document_register_entry_entity_type_entity_id_idx" ON "document_register_entry"("entity_type", "entity_id");

-- AddForeignKey
ALTER TABLE "ledger_entity" ADD CONSTRAINT "ledger_entity_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chart_of_account" ADD CONSTRAINT "chart_of_account_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entry" ADD CONSTRAINT "journal_entry_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entry" ADD CONSTRAINT "journal_entry_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entry_line" ADD CONSTRAINT "journal_entry_line_journal_entry_id_fkey" FOREIGN KEY ("journal_entry_id") REFERENCES "journal_entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "journal_entry_line" ADD CONSTRAINT "journal_entry_line_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "chart_of_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_maker_user_id_fkey" FOREIGN KEY ("maker_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_checker_user_id_fkey" FOREIGN KEY ("checker_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "txn" ADD CONSTRAINT "txn_posted_journal_entry_id_fkey" FOREIGN KEY ("posted_journal_entry_id") REFERENCES "journal_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cashbook_entry" ADD CONSTRAINT "cashbook_entry_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_register_entry" ADD CONSTRAINT "document_register_entry_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
