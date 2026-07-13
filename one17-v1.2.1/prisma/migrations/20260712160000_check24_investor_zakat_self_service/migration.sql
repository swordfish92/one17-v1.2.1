
-- Invariant 70(h): Investor Zakat Self-Service. Composes over the existing
-- Zakat engine -- no new computation table, two additions only:
--   1. zakat_subscription_request -- the portal-request/staff-approve queue
--      in front of ZakatService.activateSubscription, mirroring
--      wm_holding_action_request's own shape exactly.
--   2. zakat_declared_item.declaration_source -- lets the audit/
--      verification trail show a CLIENT-declared item (via the new portal
--      declare path) apart from a STAFF-declared one, without a redundant
--      second FK column (see schema.prisma's comment on this column).

-- CreateEnum
CREATE TYPE "zakat_subscription_request_status" AS ENUM ('PENDING', 'APPROVED');

-- CreateTable
CREATE TABLE "zakat_subscription_request" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "status" "zakat_subscription_request_status" NOT NULL DEFAULT 'PENDING',
    "consent_acknowledged_at" TIMESTAMP(3) NOT NULL,
    "requested_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved_by_user_id" UUID,
    "approved_at" TIMESTAMP(3),

    CONSTRAINT "zakat_subscription_request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "zakat_subscription_request" ADD CONSTRAINT "zakat_subscription_request_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "zakat_declaration_source" AS ENUM ('STAFF', 'CLIENT');

-- AlterTable: every EXISTING zakat_declared_item row was staff-declared
-- (the client-declare portal path did not exist before this migration), so
-- DEFAULT 'STAFF' backfills correctly with no data anomaly.
ALTER TABLE "zakat_declared_item" ADD COLUMN "declaration_source" "zakat_declaration_source" NOT NULL DEFAULT 'STAFF';
