-- CreateEnum
CREATE TYPE "facility_application_status" AS ENUM ('DRAFT', 'SUBMITTED', 'APPROVED', 'DECLINED', 'DISBURSED');

-- CreateTable
CREATE TABLE "counterparty_facility_application" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "requested_amount_kobo" BIGINT NOT NULL,
    "purpose" TEXT NOT NULL,
    "status" "facility_application_status" NOT NULL DEFAULT 'DRAFT',
    "workflow_instance_id" UUID,
    "disbursed_by_user_id" UUID,
    "disbursed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counterparty_facility_application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_facility_application_workflow_instance_id_key" ON "counterparty_facility_application"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "counterparty_facility_application" ADD CONSTRAINT "counterparty_facility_application_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_facility_application" ADD CONSTRAINT "counterparty_facility_application_disbursed_by_user_id_fkey" FOREIGN KEY ("disbursed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

