-- Invariant 36(c): BureauGateway (up to 3 vendor provider slots, Risk-owned
-- frequency/interval policy, per-pull audit log). The updated_at DROP
-- DEFAULT below is a stray but harmless diff artifact — Prisma's own
-- @updatedAt columns never carry a schema-level default; it only ever
-- existed on payment_reminder_ladder_config because an earlier hand-edited
-- migration added one to backfill 9 pre-existing rows. Dropping it is a
-- no-op for all Prisma-mediated writes going forward.
ALTER TABLE "payment_reminder_ladder_config" ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "bureau_provider" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "api_config" JSONB NOT NULL,
    "cost_per_pull_kobo" BIGINT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bureau_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bureau_policy_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "min_interval_days" INTEGER NOT NULL,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bureau_policy_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bureau_pull_log" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "pulled_by_user_id" UUID NOT NULL,
    "cost_kobo" BIGINT NOT NULL,
    "result_summary" TEXT NOT NULL,
    "pulled_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bureau_pull_log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bureau_provider_provider_slot_key" ON "bureau_provider"("provider_slot");

-- CreateIndex
CREATE INDEX "bureau_pull_log_counterparty_id_idx" ON "bureau_pull_log"("counterparty_id");

-- AddForeignKey
ALTER TABLE "bureau_provider" ADD CONSTRAINT "bureau_provider_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bureau_policy_config" ADD CONSTRAINT "bureau_policy_config_updated_by_user_id_fkey" FOREIGN KEY ("updated_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bureau_pull_log" ADD CONSTRAINT "bureau_pull_log_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bureau_pull_log" ADD CONSTRAINT "bureau_pull_log_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "bureau_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bureau_pull_log" ADD CONSTRAINT "bureau_pull_log_pulled_by_user_id_fkey" FOREIGN KEY ("pulled_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

