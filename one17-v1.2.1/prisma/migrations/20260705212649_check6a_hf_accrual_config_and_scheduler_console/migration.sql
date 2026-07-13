-- AlterTable
ALTER TABLE "scheduled_job_run" ADD COLUMN     "is_manual_rerun" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "triggered_by_user_id" UUID;

-- CreateTable
CREATE TABLE "halal_fund_launch_config" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "launch_date" DATE NOT NULL,
    "launch_price" DECIMAL(14,4) NOT NULL,
    "offer_spread_pct" DECIMAL(6,4) NOT NULL,
    "bid_spread_pct" DECIMAL(6,4) NOT NULL,
    "fee_rates" JSONB NOT NULL,
    "board_resolution_ref" TEXT,
    "ssb_resolution_ref" TEXT,
    "created_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "halal_fund_launch_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_job_pause_state" (
    "job_code" TEXT NOT NULL,
    "is_paused" BOOLEAN NOT NULL DEFAULT false,
    "paused_at" TIMESTAMP(3),
    "paused_by_user_id" UUID,
    "pause_reason" TEXT,
    "pause_workflow_instance_id" UUID,
    "resumed_at" TIMESTAMP(3),
    "resumed_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scheduled_job_pause_state_pkey" PRIMARY KEY ("job_code")
);

-- CreateIndex
CREATE UNIQUE INDEX "halal_fund_launch_config_ledger_entity_code_version_key" ON "halal_fund_launch_config"("ledger_entity_code", "version");

-- AddForeignKey
ALTER TABLE "halal_fund_launch_config" ADD CONSTRAINT "halal_fund_launch_config_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "halal_fund_launch_config" ADD CONSTRAINT "halal_fund_launch_config_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "halal_fund_launch_config" ADD CONSTRAINT "halal_fund_launch_config_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_job_run" ADD CONSTRAINT "scheduled_job_run_triggered_by_user_id_fkey" FOREIGN KEY ("triggered_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_job_pause_state" ADD CONSTRAINT "scheduled_job_pause_state_paused_by_user_id_fkey" FOREIGN KEY ("paused_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_job_pause_state" ADD CONSTRAINT "scheduled_job_pause_state_resumed_by_user_id_fkey" FOREIGN KEY ("resumed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
