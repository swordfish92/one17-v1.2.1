-- CreateEnum
CREATE TYPE "nd_mandate_participant_type" AS ENUM ('INVESTOR', 'FUND', 'POOL');

-- CreateEnum
CREATE TYPE "nd_mandate_sharing_mode" AS ENUM ('MUDARABAH_PSR', 'WAKALAH');

-- CreateEnum
CREATE TYPE "nd_mandate_surplus_treatment" AS ENUM ('CLIENT_ALL', 'AGENT_RETAINS', 'SHARED');

-- CreateEnum
CREATE TYPE "nd_mandate_status" AS ENUM ('DRAFT', 'ACTIVE', 'MATURED', 'CLOSED');

-- CreateEnum
CREATE TYPE "nd_mandate_provisional_status" AS ENUM ('PROVISIONAL', 'REVERSED', 'TRUED_UP');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "distribution_method" ADD VALUE 'ND_MUDARABAH';
ALTER TYPE "distribution_method" ADD VALUE 'ND_WAKALAH';

-- DropForeignKey
ALTER TABLE "distribution_line_item" DROP CONSTRAINT "distribution_line_item_product_account_id_fkey";

-- DropIndex
DROP INDEX "distribution_line_item_distribution_id_product_account_id_key";

-- AlterTable
ALTER TABLE "distribution_line_item" ADD COLUMN     "nd_mandate_account_id" UUID,
ALTER COLUMN "product_account_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "nd_mandate_account" (
    "id" UUID NOT NULL,
    "mandate_ref" TEXT NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "participant_type" "nd_mandate_participant_type" NOT NULL,
    "investor_id" TEXT,
    "participant_ledger_entity_code" TEXT,
    "sharing_mode" "nd_mandate_sharing_mode" NOT NULL,
    "investor_ratio" DECIMAL(6,4),
    "mudarib_ratio" DECIMAL(6,4),
    "wakalah_fee_rate_pa" DECIMAL(6,4),
    "surplus_treatment" "nd_mandate_surplus_treatment",
    "shared_ratio" DECIMAL(6,4),
    "target_return_pct" DECIMAL(6,4),
    "status" "nd_mandate_status" NOT NULL DEFAULT 'DRAFT',
    "start_date" TIMESTAMP(3) NOT NULL,
    "maturity_date" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nd_mandate_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nd_mandate_provisional_accrual" (
    "id" UUID NOT NULL,
    "nd_mandate_account_id" UUID NOT NULL,
    "accrual_date" DATE NOT NULL,
    "capital_kobo" BIGINT NOT NULL,
    "expected_rate_pct" DECIMAL(6,4) NOT NULL,
    "provisional_amount_kobo" BIGINT NOT NULL,
    "status" "nd_mandate_provisional_status" NOT NULL DEFAULT 'PROVISIONAL',
    "true_up_journal_ref" TEXT,
    "reversed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "nd_mandate_provisional_accrual_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "nd_mandate_account_mandate_ref_key" ON "nd_mandate_account"("mandate_ref");

-- CreateIndex
CREATE UNIQUE INDEX "nd_mandate_provisional_accrual_nd_mandate_account_id_accrua_key" ON "nd_mandate_provisional_accrual"("nd_mandate_account_id", "accrual_date");

-- AddForeignKey
ALTER TABLE "distribution_line_item" ADD CONSTRAINT "distribution_line_item_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "distribution_line_item" ADD CONSTRAINT "distribution_line_item_nd_mandate_account_id_fkey" FOREIGN KEY ("nd_mandate_account_id") REFERENCES "nd_mandate_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nd_mandate_account" ADD CONSTRAINT "nd_mandate_account_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nd_mandate_account" ADD CONSTRAINT "nd_mandate_account_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nd_mandate_account" ADD CONSTRAINT "nd_mandate_account_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "nd_mandate_provisional_accrual" ADD CONSTRAINT "nd_mandate_provisional_accrual_nd_mandate_account_id_fkey" FOREIGN KEY ("nd_mandate_account_id") REFERENCES "nd_mandate_account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

