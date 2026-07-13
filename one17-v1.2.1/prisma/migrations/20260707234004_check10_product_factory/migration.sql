-- AlterTable
ALTER TABLE "product" ADD COLUMN     "setup_workflow_instance_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "product_setup_workflow_instance_id_key" ON "product"("setup_workflow_instance_id");
