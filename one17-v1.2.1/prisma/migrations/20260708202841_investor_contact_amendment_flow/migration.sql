-- CreateEnum
CREATE TYPE "investor_contact_amendment_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "investor_contact_amendment_request" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "proposed_contact_email" TEXT,
    "proposed_contact_phone" TEXT,
    "proposed_registered_address" TEXT,
    "proposed_tax_identification_number" TEXT,
    "proposed_source_of_funds" TEXT,
    "proposed_occupation_or_business_nature" TEXT,
    "status" "investor_contact_amendment_status" NOT NULL DEFAULT 'PENDING',
    "requested_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "rejection_notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_contact_amendment_request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investor_contact_amendment_request_workflow_instance_id_key" ON "investor_contact_amendment_request"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "investor_contact_amendment_request" ADD CONSTRAINT "investor_contact_amendment_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_contact_amendment_request" ADD CONSTRAINT "investor_contact_amendment_request_requested_by_user_id_fkey" FOREIGN KEY ("requested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_contact_amendment_request" ADD CONSTRAINT "investor_contact_amendment_request_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
