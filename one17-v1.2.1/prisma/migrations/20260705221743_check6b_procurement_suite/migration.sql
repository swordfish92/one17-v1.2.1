-- CreateEnum
CREATE TYPE "vendor_status" AS ENUM ('ACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "purchase_order_status" AS ENUM ('DRAFT', 'ISSUED', 'RECEIVED', 'MATCHED', 'CLOSED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "vendor_invoice_status" AS ENUM ('PENDING_MATCH', 'MATCHED', 'DISPUTED', 'PAID');

-- CreateEnum
CREATE TYPE "payment_batch_status" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'PAID');

-- CreateEnum
CREATE TYPE "asset_status" AS ENUM ('ACTIVE', 'FULLY_DEPRECIATED', 'DISPOSED');

-- CreateTable
CREATE TABLE "vendor" (
    "id" UUID NOT NULL,
    "vendor_code" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "rc_number" TEXT,
    "tin" TEXT,
    "bank_name" TEXT,
    "bank_account_number" TEXT,
    "bank_account_name" TEXT,
    "status" "vendor_status" NOT NULL DEFAULT 'ACTIVE',
    "performance_rating" DECIMAL(4,2),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order" (
    "id" UUID NOT NULL,
    "po_number" TEXT NOT NULL,
    "vendor_id" UUID NOT NULL,
    "encumbrance_id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "total_amount_kobo" BIGINT NOT NULL,
    "status" "purchase_order_status" NOT NULL DEFAULT 'DRAFT',
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "issued_at" TIMESTAMP(3),

    CONSTRAINT "purchase_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase_order_line" (
    "id" UUID NOT NULL,
    "purchase_order_id" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(14,4) NOT NULL,
    "unit_price_kobo" BIGINT NOT NULL,
    "line_amount_kobo" BIGINT NOT NULL,

    CONSTRAINT "purchase_order_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goods_receipt" (
    "id" UUID NOT NULL,
    "purchase_order_id" UUID NOT NULL,
    "received_amount_kobo" BIGINT NOT NULL,
    "received_by_user_id" UUID NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "goods_receipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendor_invoice" (
    "id" UUID NOT NULL,
    "purchase_order_id" UUID NOT NULL,
    "vendor_id" UUID NOT NULL,
    "invoice_number" TEXT NOT NULL,
    "invoice_amount_kobo" BIGINT NOT NULL,
    "invoice_date" DATE NOT NULL,
    "status" "vendor_invoice_status" NOT NULL DEFAULT 'PENDING_MATCH',
    "match_variance_note" TEXT,
    "matched_at" TIMESTAMP(3),
    "journal_entry_id" UUID,
    "paid_journal_entry_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendor_invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_batch" (
    "id" UUID NOT NULL,
    "batch_number" TEXT NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "total_amount_kobo" BIGINT NOT NULL,
    "status" "payment_batch_status" NOT NULL DEFAULT 'DRAFT',
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paid_at" TIMESTAMP(3),
    "journal_entry_id" UUID,
    "workflow_instance_id" UUID,

    CONSTRAINT "payment_batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_batch_line" (
    "id" UUID NOT NULL,
    "payment_batch_id" UUID NOT NULL,
    "vendor_invoice_id" UUID NOT NULL,
    "amount_kobo" BIGINT NOT NULL,

    CONSTRAINT "payment_batch_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_register_entry" (
    "id" UUID NOT NULL,
    "asset_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purchase_order_id" UUID,
    "ledger_entity_code" TEXT NOT NULL,
    "cost_kobo" BIGINT NOT NULL,
    "acquisition_date" DATE NOT NULL,
    "useful_life_months" INTEGER NOT NULL,
    "accumulated_depreciation_kobo" BIGINT NOT NULL DEFAULT 0,
    "status" "asset_status" NOT NULL DEFAULT 'ACTIVE',
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "disposed_at" TIMESTAMP(3),

    CONSTRAINT "asset_register_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_depreciation_run" (
    "id" UUID NOT NULL,
    "asset_register_entry_id" UUID NOT NULL,
    "period_month" INTEGER NOT NULL,
    "period_year" INTEGER NOT NULL,
    "depreciation_amount_kobo" BIGINT NOT NULL,
    "journal_entry_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "asset_depreciation_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "procurement_match_tolerance_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "tolerance_pct" DECIMAL(5,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "procurement_match_tolerance_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vendor_vendor_code_key" ON "vendor"("vendor_code");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_po_number_key" ON "purchase_order"("po_number");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_order_encumbrance_id_key" ON "purchase_order"("encumbrance_id");

-- CreateIndex
CREATE UNIQUE INDEX "vendor_invoice_vendor_id_invoice_number_key" ON "vendor_invoice"("vendor_id", "invoice_number");

-- CreateIndex
CREATE UNIQUE INDEX "payment_batch_batch_number_key" ON "payment_batch"("batch_number");

-- CreateIndex
CREATE UNIQUE INDEX "payment_batch_workflow_instance_id_key" ON "payment_batch"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "asset_register_entry_asset_code_key" ON "asset_register_entry"("asset_code");

-- CreateIndex
CREATE UNIQUE INDEX "asset_depreciation_run_asset_register_entry_id_period_month_key" ON "asset_depreciation_run"("asset_register_entry_id", "period_month", "period_year");

-- AddForeignKey
ALTER TABLE "vendor" ADD CONSTRAINT "vendor_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_encumbrance_id_fkey" FOREIGN KEY ("encumbrance_id") REFERENCES "encumbrance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order" ADD CONSTRAINT "purchase_order_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchase_order_line" ADD CONSTRAINT "purchase_order_line_purchase_order_id_fkey" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goods_receipt" ADD CONSTRAINT "goods_receipt_purchase_order_id_fkey" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "goods_receipt" ADD CONSTRAINT "goods_receipt_received_by_user_id_fkey" FOREIGN KEY ("received_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendor_invoice" ADD CONSTRAINT "vendor_invoice_purchase_order_id_fkey" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendor_invoice" ADD CONSTRAINT "vendor_invoice_vendor_id_fkey" FOREIGN KEY ("vendor_id") REFERENCES "vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vendor_invoice" ADD CONSTRAINT "vendor_invoice_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_batch" ADD CONSTRAINT "payment_batch_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_batch" ADD CONSTRAINT "payment_batch_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_batch_line" ADD CONSTRAINT "payment_batch_line_payment_batch_id_fkey" FOREIGN KEY ("payment_batch_id") REFERENCES "payment_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_batch_line" ADD CONSTRAINT "payment_batch_line_vendor_invoice_id_fkey" FOREIGN KEY ("vendor_invoice_id") REFERENCES "vendor_invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_register_entry" ADD CONSTRAINT "asset_register_entry_purchase_order_id_fkey" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_register_entry" ADD CONSTRAINT "asset_register_entry_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_register_entry" ADD CONSTRAINT "asset_register_entry_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asset_depreciation_run" ADD CONSTRAINT "asset_depreciation_run_asset_register_entry_id_fkey" FOREIGN KEY ("asset_register_entry_id") REFERENCES "asset_register_entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
