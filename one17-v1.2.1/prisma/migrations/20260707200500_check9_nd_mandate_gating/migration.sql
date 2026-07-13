-- AlterTable
ALTER TABLE "nd_mandate_account" ADD COLUMN "activation_workflow_instance_id" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "nd_mandate_account_activation_workflow_instance_id_key" ON "nd_mandate_account"("activation_workflow_instance_id");

-- AddForeignKey
ALTER TABLE "nd_mandate_account" ADD CONSTRAINT "nd_mandate_account_activation_workflow_instance_id_fkey" FOREIGN KEY ("activation_workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
