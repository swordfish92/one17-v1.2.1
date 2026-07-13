-- Invariant 36(f): investment memo template attached at the facility
-- application, PO's point of request, versioned, CIO-approval-gated
-- before the facility's Risk->BD->Finance->Compliance chain proceeds.

-- CreateEnum
CREATE TYPE "investment_memo_status" AS ENUM ('DRAFT', 'SUBMITTED', 'CIO_APPROVED', 'CIO_REJECTED');

-- CreateTable
CREATE TABLE "investment_memo" (
    "id" UUID NOT NULL,
    "facility_application_id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "deal_summary" TEXT NOT NULL,
    "structure_type" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "tenor_months" INTEGER NOT NULL,
    "target_return_pct" DECIMAL(6,2) NOT NULL,
    "risk_notes" TEXT NOT NULL,
    "shariah_notes" TEXT NOT NULL,
    "collateral_notes" TEXT NOT NULL,
    "status" "investment_memo_status" NOT NULL DEFAULT 'DRAFT',
    "workflow_instance_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investment_memo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investment_memo_workflow_instance_id_key" ON "investment_memo"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "investment_memo_facility_application_id_version_key" ON "investment_memo"("facility_application_id", "version");

-- AddForeignKey
ALTER TABLE "investment_memo" ADD CONSTRAINT "investment_memo_facility_application_id_fkey" FOREIGN KEY ("facility_application_id") REFERENCES "counterparty_facility_application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investment_memo" ADD CONSTRAINT "investment_memo_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
