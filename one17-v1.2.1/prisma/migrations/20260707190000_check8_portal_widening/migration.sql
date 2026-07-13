-- Invariant 39(d): re-scope PortalClientUser from WmClientProfile.investorId
-- to Investor.investorId directly. Since WmClientProfile.investorId already
-- WAS Investor.investorId (1:1 PK==FK), the existing column's VALUES are
-- already correct Investor.investorId values -- this is a rename + FK
-- retarget, never a drop/recreate, so every existing WM client's portal row
-- survives with zero data loss.

-- DropForeignKey
ALTER TABLE "portal_client_user" DROP CONSTRAINT "portal_client_user_wm_client_profile_id_fkey";

-- DropIndex
DROP INDEX "portal_client_user_wm_client_profile_id_key";

-- RenameColumn (preserves data, unlike drop+add)
ALTER TABLE "portal_client_user" RENAME COLUMN "wm_client_profile_id" TO "investor_id";

-- CreateIndex
CREATE UNIQUE INDEX "portal_client_user_investor_id_key" ON "portal_client_user"("investor_id");

-- AddForeignKey (retargeted to investor, not wm_client_profile)
ALTER TABLE "portal_client_user" ADD CONSTRAINT "portal_client_user_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Invariant 39(d): a real, org-linked, reassignable RM assignment for ALL
-- investors (WM clients already have WmClientProfile.advisorUserId) --
-- needed to route two-way client<->RM portal messaging (invariant 35a).
-- AlterTable
ALTER TABLE "investor" ADD COLUMN "relationship_manager_user_id" UUID;

-- AddForeignKey
ALTER TABLE "investor" ADD CONSTRAINT "investor_relationship_manager_user_id_fkey" FOREIGN KEY ("relationship_manager_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
