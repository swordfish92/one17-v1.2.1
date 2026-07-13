-- Invariant 36 (counterparty module full elaboration, 6-Jul-2026):
-- (a) file-ownership as data (Counterparty.fileManagingOfficerUserId) so
--     system-generated deliverables (payment-reminder call tasks,
--     credit-bureau sync tasks) route to the real file owner;
-- (a)/(b) officer-validation dispatch queue for the payment-reminder
--     ladder's client-facing message channels, and a versioned+audit-
--     logged updatedAt on the ladder settings table.

-- CreateEnum
CREATE TYPE "payment_reminder_dispatch_status" AS ENUM ('PENDING_VALIDATION', 'DISPATCHED', 'REJECTED');

-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "file_managing_officer_user_id" UUID;

-- AlterTable: existing rows backfill to CURRENT_TIMESTAMP (hand-edited from
-- the raw diff, which left this NOT NULL with no default and would have
-- failed against the 9 already-seeded ladder rows).
ALTER TABLE "payment_reminder_ladder_config" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "payment_reminder_dispatch_queue" (
    "id" UUID NOT NULL,
    "obligation_id" UUID NOT NULL,
    "day_offset" INTEGER NOT NULL,
    "channels" JSONB NOT NULL,
    "status" "payment_reminder_dispatch_status" NOT NULL DEFAULT 'PENDING_VALIDATION',
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "decided_by_user_id" UUID,
    "decided_at" TIMESTAMP(3),

    CONSTRAINT "payment_reminder_dispatch_queue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payment_reminder_dispatch_queue_obligation_id_day_offset_key" ON "payment_reminder_dispatch_queue"("obligation_id", "day_offset");

-- AddForeignKey
ALTER TABLE "counterparty" ADD CONSTRAINT "counterparty_file_managing_officer_user_id_fkey" FOREIGN KEY ("file_managing_officer_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_reminder_dispatch_queue" ADD CONSTRAINT "payment_reminder_dispatch_queue_obligation_id_fkey" FOREIGN KEY ("obligation_id") REFERENCES "counterparty_repayment_obligation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_reminder_dispatch_queue" ADD CONSTRAINT "payment_reminder_dispatch_queue_decided_by_user_id_fkey" FOREIGN KEY ("decided_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
