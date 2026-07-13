-- CLAUDE.md 9a / invariant 7 governance gate (CEO instruction 2026-07-04):
-- delegation grants become PENDING until approved via a DELEGATION_GRANT
-- workflow instance, and ProductParameters carries Board/SSB resolution
-- references for governed changes. Generated via `prisma migrate diff`
-- (schema-only change, no exotic SQL needed) rather than `migrate dev`,
-- since this shell is non-interactive and migrate dev requires confirming
-- the (here, moot — table is empty) unique-constraint warning.

-- AlterEnum
ALTER TYPE "delegation_status" ADD VALUE 'PENDING';

-- AlterTable
ALTER TABLE "delegation_of_authority" ADD COLUMN     "board_instrument_ref" TEXT,
ADD COLUMN     "workflow_instance_id" UUID,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "product_parameters" ADD COLUMN     "board_resolution_ref" TEXT,
ADD COLUMN     "ssb_resolution_ref" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "delegation_of_authority_workflow_instance_id_key" ON "delegation_of_authority"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "delegation_of_authority" ADD CONSTRAINT "delegation_of_authority_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;
