-- CreateEnum
CREATE TYPE "subscription_request_type" AS ENUM ('SUBSCRIPTION', 'REDEMPTION');

-- CreateEnum
CREATE TYPE "subscription_request_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "shariah_approval_ref" TEXT,
ADD COLUMN     "shariah_approved_at" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "subscription_request" (
    "id" UUID NOT NULL,
    "request_type" "subscription_request_type" NOT NULL,
    "investor_id" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "effective_date" TIMESTAMP(3) NOT NULL,
    "status" "subscription_request_status" NOT NULL DEFAULT 'PENDING',
    "computed_units" DECIMAL(18,4),
    "nav_per_unit_used" DECIMAL(18,4),
    "result_product_account_id" UUID,
    "result_nd_mandate_account_id" UUID,
    "rejection_reason" TEXT,
    "initiated_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decided_at" TIMESTAMP(3),

    CONSTRAINT "subscription_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscription_request_workflow_instance_id_key" ON "subscription_request"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "subscription_request" ADD CONSTRAINT "subscription_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_request" ADD CONSTRAINT "subscription_request_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_request" ADD CONSTRAINT "subscription_request_initiated_by_user_id_fkey" FOREIGN KEY ("initiated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_request" ADD CONSTRAINT "subscription_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
