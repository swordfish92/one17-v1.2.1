-- CreateEnum
CREATE TYPE "strategy_statement_type" AS ENUM ('VISION', 'MISSION', 'CORE_VALUE', 'THREE_YEAR_OUTLOOK');

-- AlterTable
ALTER TABLE "budget_version" ADD COLUMN     "linked_objective_codes" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "strategic_objective" ADD COLUMN     "board_resolution_ref" TEXT,
ADD COLUMN     "explanation" TEXT;

-- AlterTable
ALTER TABLE "strategic_pillar" ADD COLUMN     "board_resolution_ref" TEXT,
ADD COLUMN     "explanation" TEXT;

-- CreateTable
CREATE TABLE "strategy_statement" (
    "id" UUID NOT NULL,
    "statement_type" "strategy_statement_type" NOT NULL,
    "content" TEXT NOT NULL,
    "explanation" TEXT,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "board_resolution_ref" TEXT,
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "effective_from" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategy_statement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strategy_publication" (
    "id" UUID NOT NULL,
    "summary" TEXT NOT NULL,
    "published_by_user_id" UUID NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategy_publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strategy_acknowledgment" (
    "id" UUID NOT NULL,
    "publication_id" UUID NOT NULL,
    "app_user_id" UUID NOT NULL,
    "acknowledged_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "strategy_acknowledgment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "strategy_statement_workflow_instance_id_key" ON "strategy_statement"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "strategy_acknowledgment_publication_id_app_user_id_key" ON "strategy_acknowledgment"("publication_id", "app_user_id");

-- AddForeignKey
ALTER TABLE "strategy_statement" ADD CONSTRAINT "strategy_statement_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "strategy_statement" ADD CONSTRAINT "strategy_statement_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "strategy_publication" ADD CONSTRAINT "strategy_publication_published_by_user_id_fkey" FOREIGN KEY ("published_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "strategy_acknowledgment" ADD CONSTRAINT "strategy_acknowledgment_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "strategy_publication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "strategy_acknowledgment" ADD CONSTRAINT "strategy_acknowledgment_app_user_id_fkey" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
