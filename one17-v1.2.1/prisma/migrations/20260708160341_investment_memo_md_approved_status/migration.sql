/*
  Warnings:

  - The `setup_workflow_instance_id` column on the `product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
ALTER TYPE "investment_memo_status" ADD VALUE 'MD_APPROVED';

-- DropForeignKey
ALTER TABLE "document_register_entry" DROP CONSTRAINT "document_register_entry_uploaded_by_counterparty_id_fkey";

-- DropForeignKey
ALTER TABLE "document_register_entry" DROP CONSTRAINT "document_register_entry_uploaded_by_user_id_fkey";

-- DropForeignKey
ALTER TABLE "investment_memo_threshold_config" DROP CONSTRAINT "investment_memo_threshold_config_approved_by_user_id_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "setup_workflow_instance_id",
ADD COLUMN     "setup_workflow_instance_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "product_setup_workflow_instance_id_key" ON "product"("setup_workflow_instance_id");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_setup_workflow_instance_id_fkey" FOREIGN KEY ("setup_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_register_entry" ADD CONSTRAINT "document_register_entry_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "document_register_entry" ADD CONSTRAINT "document_register_entry_uploaded_by_counterparty_id_fkey" FOREIGN KEY ("uploaded_by_counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_memo_threshold_config" ADD CONSTRAINT "investment_memo_threshold_config_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
