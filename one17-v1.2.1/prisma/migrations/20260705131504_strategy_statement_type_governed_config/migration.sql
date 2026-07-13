/*
  Warnings:

  - You are about to drop the column `statement_type` on the `strategy_statement` table. All the data in the column will be lost.
  - Added the required column `statement_type_code` to the `strategy_statement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "strategy_statement" DROP COLUMN "statement_type",
ADD COLUMN     "statement_type_code" TEXT NOT NULL;

-- DropEnum
DROP TYPE "strategy_statement_type";

-- CreateTable
CREATE TABLE "strategy_statement_type_config" (
    "code" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "allows_multiple_active" BOOLEAN NOT NULL DEFAULT false,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategy_statement_type_config_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "strategy_statement" ADD CONSTRAINT "strategy_statement_statement_type_code_fkey" FOREIGN KEY ("statement_type_code") REFERENCES "strategy_statement_type_config"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
