-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_recipient_user_id_fkey";

-- AlterTable
ALTER TABLE "notification" ADD COLUMN     "recipient_investor_id" TEXT,
ALTER COLUMN "recipient_user_id" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "notification_recipient_investor_id_is_read_idx" ON "notification"("recipient_investor_id", "is_read");

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_recipient_investor_id_fkey" FOREIGN KEY ("recipient_investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;


-- CHECK16 62(b): exactly one of recipient_user_id/recipient_investor_id
-- must be set -- DB-enforced, not just application-level, same discipline
-- as the accounting-period-close trigger and KPI weight matrix Sigma=100%.
ALTER TABLE "notification" ADD CONSTRAINT "notification_exactly_one_recipient_check"
  CHECK (
    (recipient_user_id IS NOT NULL AND recipient_investor_id IS NULL)
    OR (recipient_user_id IS NULL AND recipient_investor_id IS NOT NULL)
  );
