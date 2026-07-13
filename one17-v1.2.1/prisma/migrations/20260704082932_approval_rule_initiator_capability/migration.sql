/*
  Warnings:

  - Added the required column `initiator_function_code` to the `approval_rule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "approval_rule" ADD COLUMN     "initiator_function_code" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "approval_rule" ADD CONSTRAINT "approval_rule_initiator_function_code_fkey" FOREIGN KEY ("initiator_function_code") REFERENCES "platform_function"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
