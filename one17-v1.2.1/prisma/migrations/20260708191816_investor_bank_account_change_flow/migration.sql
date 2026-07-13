-- CreateEnum
CREATE TYPE "investor_bank_account_status" AS ENUM ('ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "bank_account_change_status" AS ENUM ('PENDING', 'COOLING_OFF', 'COMPLETED', 'REJECTED');

-- AlterTable
ALTER TABLE "investor_bank_account" ADD COLUMN     "cooling_off_ends_at" TIMESTAMP(3),
ADD COLUMN     "status" "investor_bank_account_status" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "investor_bank_account_change_request" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "proposed_bank_name" TEXT NOT NULL,
    "proposed_account_number" TEXT NOT NULL,
    "proposed_account_name" TEXT NOT NULL,
    "proposed_account_type" TEXT,
    "proposed_currency" TEXT,
    "status" "bank_account_change_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "re_verified_by_user_id" UUID,
    "re_verified_at" TIMESTAMP(3),
    "re_verification_notes" TEXT,
    "cooling_off_ends_at" TIMESTAMP(3),
    "resulting_bank_account_id" UUID,
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_bank_account_change_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_bank_account_change_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "cooling_off_days" INTEGER NOT NULL,
    "board_resolution_ref" TEXT,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_bank_account_change_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investor_bank_account_change_request_workflow_instance_id_key" ON "investor_bank_account_change_request"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "investor_bank_account_change_request_resulting_bank_account_key" ON "investor_bank_account_change_request"("resulting_bank_account_id");

-- AddForeignKey
ALTER TABLE "investor_bank_account_change_request" ADD CONSTRAINT "investor_bank_account_change_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account_change_request" ADD CONSTRAINT "investor_bank_account_change_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account_change_request" ADD CONSTRAINT "investor_bank_account_change_request_re_verified_by_user_i_fkey" FOREIGN KEY ("re_verified_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account_change_request" ADD CONSTRAINT "investor_bank_account_change_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account_change_request" ADD CONSTRAINT "investor_bank_account_change_request_resulting_bank_accoun_fkey" FOREIGN KEY ("resulting_bank_account_id") REFERENCES "investor_bank_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
