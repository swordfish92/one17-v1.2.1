-- CreateEnum
CREATE TYPE "portfolio_position_status" AS ENUM ('ACTIVE', 'MATURED', 'EXITED');

-- CreateEnum
CREATE TYPE "distribution_method" AS ENUM ('INCOME', 'NAV');

-- CreateEnum
CREATE TYPE "distribution_status" AS ENUM ('DRAFT', 'DECLARED', 'PAID');

-- AlterEnum
ALTER TYPE "txn_type" ADD VALUE 'HIBAH';

-- CreateTable
CREATE TABLE "portfolio_position" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "contract_type" TEXT NOT NULL,
    "is_equity" BOOLEAN NOT NULL DEFAULT false,
    "principal_kobo" BIGINT NOT NULL,
    "rate_pct" DECIMAL(6,4),
    "entry_date" DATE NOT NULL,
    "maturity_date" DATE,
    "repaid_kobo" BIGINT NOT NULL DEFAULT 0,
    "mark_price_kobo" BIGINT,
    "mark_qty" DECIMAL(18,4),
    "status" "portfolio_position_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fee_accrual" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "fee_type" TEXT NOT NULL,
    "accrual_date" DATE NOT NULL,
    "daily_amount_kobo" BIGINT NOT NULL,
    "cumulative_amount_kobo" BIGINT NOT NULL,
    "paid_amount_kobo" BIGINT NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fee_accrual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nav_record" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "valuation_date" DATE NOT NULL,
    "portfolio_mkt_val_kobo" BIGINT NOT NULL,
    "uninvested_cash_kobo" BIGINT NOT NULL,
    "accrued_unpaid_fees_kobo" BIGINT NOT NULL,
    "total_nav_kobo" BIGINT NOT NULL,
    "units_outstanding" DECIMAL(18,4) NOT NULL,
    "nav_per_unit" DECIMAL(14,4) NOT NULL,
    "offer_price" DECIMAL(14,4) NOT NULL,
    "bid_price" DECIMAL(14,4) NOT NULL,
    "is_locked" BOOLEAN NOT NULL DEFAULT false,
    "locked_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nav_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pool_income_record" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "income_received_kobo" BIGINT NOT NULL,
    "accrued_income_kobo" BIGINT NOT NULL,
    "confirmed_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pool_income_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribution" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "method" "distribution_method",
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "record_date" DATE NOT NULL,
    "net_available_kobo" BIGINT NOT NULL,
    "to_participants_kobo" BIGINT NOT NULL,
    "retained_or_mudarib_base_kobo" BIGINT NOT NULL,
    "status" "distribution_status" NOT NULL DEFAULT 'DRAFT',
    "board_resolution_ref" TEXT,
    "ssb_resolution_ref" TEXT,
    "workflow_instance_id" UUID,
    "declared_at" TIMESTAMP(3),
    "paid_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "distribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribution_line_item" (
    "id" UUID NOT NULL,
    "distribution_id" UUID NOT NULL,
    "product_account_id" UUID NOT NULL,
    "capital_kobo" BIGINT NOT NULL,
    "target_rate_pct" DECIMAL(6,4),
    "active_days" INTEGER,
    "entitlement_kobo" BIGINT,
    "twe" DECIMAL(10,8),
    "priority_payout_kobo" BIGINT,
    "surplus_payout_kobo" BIGINT,
    "hibah_kobo" BIGINT NOT NULL DEFAULT 0,
    "units_at_record" DECIMAL(18,4),
    "dps_amount" DECIMAL(14,4),
    "drip_units" DECIMAL(18,4),
    "drip_amount_kobo" BIGINT,
    "total_payout_kobo" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "distribution_line_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hibah_record" (
    "id" UUID NOT NULL,
    "distribution_id" UUID,
    "product_account_id" TEXT,
    "ledger_entity_code" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "is_loss_period" BOOLEAN NOT NULL DEFAULT false,
    "reason" TEXT NOT NULL,
    "approved_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hibah_record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fee_accrual_ledger_entity_code_fee_type_accrual_date_key" ON "fee_accrual"("ledger_entity_code", "fee_type", "accrual_date");

-- CreateIndex
CREATE UNIQUE INDEX "nav_record_ledger_entity_code_valuation_date_key" ON "nav_record"("ledger_entity_code", "valuation_date");

-- CreateIndex
CREATE UNIQUE INDEX "distribution_workflow_instance_id_key" ON "distribution"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "distribution_line_item_distribution_id_product_account_id_key" ON "distribution_line_item"("distribution_id", "product_account_id");

-- AddForeignKey
ALTER TABLE "portfolio_position" ADD CONSTRAINT "portfolio_position_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fee_accrual" ADD CONSTRAINT "fee_accrual_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nav_record" ADD CONSTRAINT "nav_record_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pool_income_record" ADD CONSTRAINT "pool_income_record_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pool_income_record" ADD CONSTRAINT "pool_income_record_confirmed_by_user_id_fkey" FOREIGN KEY ("confirmed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution" ADD CONSTRAINT "distribution_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution" ADD CONSTRAINT "distribution_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_line_item" ADD CONSTRAINT "distribution_line_item_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "distribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_line_item" ADD CONSTRAINT "distribution_line_item_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hibah_record" ADD CONSTRAINT "hibah_record_distribution_id_fkey" FOREIGN KEY ("distribution_id") REFERENCES "distribution"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hibah_record" ADD CONSTRAINT "hibah_record_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hibah_record" ADD CONSTRAINT "hibah_record_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

