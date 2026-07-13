-- AlterTable
ALTER TABLE "investment_memo_threshold_config" ADD COLUMN     "approved_by_user_id" UUID;

-- AddForeignKey
ALTER TABLE "investment_memo_threshold_config" ADD CONSTRAINT "investment_memo_threshold_config_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
