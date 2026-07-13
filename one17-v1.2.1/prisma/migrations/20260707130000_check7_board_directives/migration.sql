-- Invariant 37(c)(ii): Board Escalations & Directives — CS issues a
-- directive, which auto-creates a Task to the MD (task.directive_id links
-- any task in the delegation chain back to one board_directive).

-- CreateEnum
CREATE TYPE "board_directive_status" AS ENUM ('ISSUED', 'ACKNOWLEDGED', 'IN_PROGRESS', 'COMPLETED', 'REPORTED_BACK');

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "directive_id" UUID;

-- CreateTable
CREATE TABLE "board_directive" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "committee_tag" TEXT,
    "resolution_ref" TEXT,
    "due_at" TIMESTAMP(3) NOT NULL,
    "issued_by_user_id" UUID NOT NULL,
    "task_id" UUID,
    "status" "board_directive_status" NOT NULL DEFAULT 'ISSUED',
    "acknowledged_at" TIMESTAMP(3),
    "acknowledged_by_user_id" UUID,
    "reported_back_at" TIMESTAMP(3),
    "reported_back_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "board_directive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_directive_task_id_key" ON "board_directive"("task_id");

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_directive_id_fkey" FOREIGN KEY ("directive_id") REFERENCES "board_directive"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_directive" ADD CONSTRAINT "board_directive_issued_by_user_id_fkey" FOREIGN KEY ("issued_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_directive" ADD CONSTRAINT "board_directive_acknowledged_by_user_id_fkey" FOREIGN KEY ("acknowledged_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_directive" ADD CONSTRAINT "board_directive_reported_back_by_user_id_fkey" FOREIGN KEY ("reported_back_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_directive" ADD CONSTRAINT "board_directive_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
