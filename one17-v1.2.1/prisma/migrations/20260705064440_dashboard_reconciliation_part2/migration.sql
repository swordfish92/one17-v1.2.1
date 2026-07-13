-- AlterTable
ALTER TABLE "dashboard_manual_status" ADD COLUMN     "growth_target_aum_kobo" BIGINT NOT NULL DEFAULT 50000000000,
ADD COLUMN     "reputational_rag_status" TEXT NOT NULL DEFAULT 'GREEN',
ADD COLUMN     "sec_inspection_readiness_status" TEXT NOT NULL DEFAULT 'GREEN';

-- CreateTable
CREATE TABLE "enterprise_risk_profile_entry" (
    "id" UUID NOT NULL,
    "riskCategory" TEXT NOT NULL,
    "inherentScore" INTEGER NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "enterprise_risk_profile_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "enterprise_risk_profile_entry_riskCategory_key" ON "enterprise_risk_profile_entry"("riskCategory");
