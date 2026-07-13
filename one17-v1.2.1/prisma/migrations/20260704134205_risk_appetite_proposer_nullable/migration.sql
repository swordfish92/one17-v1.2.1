-- DropForeignKey
ALTER TABLE "risk_appetite_matrix_version" DROP CONSTRAINT "risk_appetite_matrix_version_proposed_by_user_id_fkey";

-- AlterTable
ALTER TABLE "risk_appetite_matrix_version" ALTER COLUMN "proposed_by_user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "risk_appetite_matrix_version" ADD CONSTRAINT "risk_appetite_matrix_version_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
