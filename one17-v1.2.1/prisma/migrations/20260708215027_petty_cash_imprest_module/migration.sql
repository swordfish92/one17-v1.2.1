-- Invariant 50(a) (CHECK12): petty cash imprest module.

-- CreateEnum
CREATE TYPE "petty_cash_float_status" AS ENUM ('ACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "petty_cash_voucher_status" AS ENUM ('OUTSTANDING', 'REIMBURSED');

-- CreateEnum
CREATE TYPE "petty_cash_claim_status" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'REJECTED', 'DISBURSED');

-- CreateTable
CREATE TABLE "petty_cash_float" (
    "id" UUID NOT NULL,
    "float_code" TEXT NOT NULL,
    "custodian_user_id" UUID NOT NULL,
    "office_label" TEXT NOT NULL,
    "ledger_entity_code" TEXT NOT NULL DEFAULT 'COMPANY',
    "float_ceiling_kobo" BIGINT NOT NULL,
    "single_voucher_cap_kobo" BIGINT NOT NULL,
    "status" "petty_cash_float_status" NOT NULL DEFAULT 'ACTIVE',
    "established_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petty_cash_float_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petty_cash_voucher" (
    "id" UUID NOT NULL,
    "float_id" UUID NOT NULL,
    "voucher_date" TIMESTAMP(3) NOT NULL,
    "payee" TEXT NOT NULL,
    "expense_account_code" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "status" "petty_cash_voucher_status" NOT NULL DEFAULT 'OUTSTANDING',
    "claim_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petty_cash_voucher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petty_cash_replenishment_claim" (
    "id" UUID NOT NULL,
    "float_id" UUID NOT NULL,
    "total_voucher_kobo" BIGINT NOT NULL,
    "status" "petty_cash_claim_status" NOT NULL DEFAULT 'DRAFT',
    "initiated_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "disbursed_by_user_id" UUID,
    "disbursed_at" TIMESTAMP(3),
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petty_cash_replenishment_claim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petty_cash_spot_check" (
    "id" UUID NOT NULL,
    "float_id" UUID NOT NULL,
    "counted_kobo" BIGINT NOT NULL,
    "expected_kobo" BIGINT NOT NULL,
    "variance_kobo" BIGINT NOT NULL,
    "notes" TEXT,
    "checked_by_user_id" UUID NOT NULL,
    "checked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petty_cash_spot_check_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "petty_cash_float_float_code_key" ON "petty_cash_float"("float_code");

-- CreateIndex
CREATE UNIQUE INDEX "petty_cash_replenishment_claim_workflow_instance_id_key" ON "petty_cash_replenishment_claim"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "petty_cash_float" ADD CONSTRAINT "petty_cash_float_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_voucher" ADD CONSTRAINT "petty_cash_voucher_float_id_fkey" FOREIGN KEY ("float_id") REFERENCES "petty_cash_float"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_voucher" ADD CONSTRAINT "petty_cash_voucher_claim_id_fkey" FOREIGN KEY ("claim_id") REFERENCES "petty_cash_replenishment_claim"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_replenishment_claim" ADD CONSTRAINT "petty_cash_replenishment_claim_float_id_fkey" FOREIGN KEY ("float_id") REFERENCES "petty_cash_float"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petty_cash_spot_check" ADD CONSTRAINT "petty_cash_spot_check_float_id_fkey" FOREIGN KEY ("float_id") REFERENCES "petty_cash_float"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
