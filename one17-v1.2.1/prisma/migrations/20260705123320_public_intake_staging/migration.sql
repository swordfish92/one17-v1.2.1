-- CreateEnum
CREATE TYPE "public_intake_type" AS ENUM ('INVESTOR_EXPRESS', 'COUNTERPARTY');

-- CreateEnum
CREATE TYPE "public_intake_status" AS ENUM ('PENDING', 'PROMOTED', 'REJECTED');

-- CreateTable
CREATE TABLE "public_intake_submission" (
    "id" UUID NOT NULL,
    "intake_type" "public_intake_type" NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "public_intake_status" NOT NULL DEFAULT 'PENDING',
    "submitted_ip" TEXT,
    "rejection_reason" TEXT,
    "promoted_by_user_id" UUID,
    "promoted_at" TIMESTAMP(3),
    "resulting_investor_id" TEXT,
    "resulting_counterparty_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "public_intake_submission_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public_intake_submission" ADD CONSTRAINT "public_intake_submission_promoted_by_user_id_fkey" FOREIGN KEY ("promoted_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
