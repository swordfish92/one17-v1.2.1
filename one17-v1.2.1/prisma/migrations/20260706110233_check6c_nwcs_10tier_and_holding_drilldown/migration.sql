-- CreateEnum
CREATE TYPE "wm_holding_action_type" AS ENUM ('TOP_UP', 'REDEMPTION');

-- CreateEnum
CREATE TYPE "wm_holding_action_status" AS ENUM ('PENDING', 'ACTIONED');

-- Invariant (Visualization Standard item 2): the 10-tier NWCS SUPERSEDES
-- the 4-tier MASS_MARKET/AFFLUENT/HNI/VHNI model. wm_client_tier_config
-- only ever held governed CONFIG rows (no real Board-approved bands exist
-- yet — confirmed by inspection before writing this migration), so it is
-- cleared here and re-seeded from the new 10-tier TIER_BANDS on next
-- `npx tsx prisma/seed.ts` run, rather than attempting to backfill a
-- min_total_wealth_usd value for bands that no longer correspond to the
-- new tier structure.
DELETE FROM "wm_client_tier_config";

-- AlterEnum: recreate wm_client_tier with the 10 NWCS values. Real
-- wm_client_profile/wm_tier_migration_log rows exist (smoke-test fixtures,
-- confirmed 41 rows, values MASS_MARKET/HNI only) — MASS_MARKET (the old
-- lowest bucket) maps to BASE_MASS (the new lowest bucket), a genuine 1:1
-- correspondence, not an arbitrary guess; every other value is unchanged.
BEGIN;
CREATE TYPE "wm_client_tier_new" AS ENUM ('BASE_MASS', 'CORE_MASS', 'UPPER_MASS', 'MASS_AFFLUENT', 'AFFLUENT', 'HNI', 'VHNI', 'UHNI', 'CENTIMILLIONAIRE', 'BILLIONAIRE');

ALTER TABLE "wm_client_tier_config" ALTER COLUMN "tier" TYPE "wm_client_tier_new" USING ("tier"::text::"wm_client_tier_new");

ALTER TABLE "wm_client_profile" ALTER COLUMN "current_tier" TYPE "wm_client_tier_new" USING (
  CASE "current_tier"::text WHEN 'MASS_MARKET' THEN 'BASE_MASS' ELSE "current_tier"::text END::"wm_client_tier_new"
);

ALTER TABLE "wm_tier_migration_log" ALTER COLUMN "from_tier" TYPE "wm_client_tier_new" USING (
  CASE "from_tier"::text WHEN 'MASS_MARKET' THEN 'BASE_MASS' ELSE "from_tier"::text END::"wm_client_tier_new"
);
ALTER TABLE "wm_tier_migration_log" ALTER COLUMN "to_tier" TYPE "wm_client_tier_new" USING (
  CASE "to_tier"::text WHEN 'MASS_MARKET' THEN 'BASE_MASS' ELSE "to_tier"::text END::"wm_client_tier_new"
);

ALTER TYPE "wm_client_tier" RENAME TO "wm_client_tier_old";
ALTER TYPE "wm_client_tier_new" RENAME TO "wm_client_tier";
DROP TYPE "public"."wm_client_tier_old";
COMMIT;

-- AlterTable: invariant 29(b) holding drill-down fields.
ALTER TABLE "wm_client_asset" ADD COLUMN     "maturity_date" TIMESTAMP(3),
ADD COLUMN     "scheduled_profit_taking_dates" JSONB,
ADD COLUMN     "target_return_pct" DECIMAL(6,2),
ADD COLUMN     "tenor_months" INTEGER;

-- AlterTable: min_total_wealth_usd (table is empty after the DELETE above).
ALTER TABLE "wm_client_tier_config" DROP COLUMN "min_total_wealth_kobo",
ADD COLUMN     "min_total_wealth_usd" DECIMAL(18,2) NOT NULL;

-- CreateTable
CREATE TABLE "wm_fx_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "naira_per_usd" DECIMAL(10,2) NOT NULL,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wm_fx_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_client_asset_valuation" (
    "id" UUID NOT NULL,
    "wm_client_asset_id" UUID NOT NULL,
    "valuation_date" TIMESTAMP(3) NOT NULL,
    "value_kobo" BIGINT NOT NULL,
    "recorded_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_client_asset_valuation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wm_holding_action_request" (
    "id" UUID NOT NULL,
    "wm_client_asset_id" UUID NOT NULL,
    "request_type" "wm_holding_action_type" NOT NULL,
    "requested_amount_kobo" BIGINT NOT NULL,
    "notes" TEXT,
    "status" "wm_holding_action_status" NOT NULL DEFAULT 'PENDING',
    "actioned_by_user_id" UUID,
    "actioned_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wm_holding_action_request_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wm_client_asset_valuation" ADD CONSTRAINT "wm_client_asset_valuation_wm_client_asset_id_fkey" FOREIGN KEY ("wm_client_asset_id") REFERENCES "wm_client_asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wm_holding_action_request" ADD CONSTRAINT "wm_holding_action_request_wm_client_asset_id_fkey" FOREIGN KEY ("wm_client_asset_id") REFERENCES "wm_client_asset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
