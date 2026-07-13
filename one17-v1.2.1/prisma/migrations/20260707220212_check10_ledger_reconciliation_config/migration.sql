-- CreateTable
CREATE TABLE "ledger_reconciliation_config" (
    "id" UUID NOT NULL,
    "metric_code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "ledger_entity_code" TEXT,
    "gl_account_codes" TEXT[],
    "tolerance_kobo" BIGINT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ledger_reconciliation_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ledger_reconciliation_config_metric_code_version_key" ON "ledger_reconciliation_config"("metric_code", "version");

-- AddForeignKey
ALTER TABLE "ledger_reconciliation_config" ADD CONSTRAINT "ledger_reconciliation_config_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ledger_reconciliation_config" ADD CONSTRAINT "ledger_reconciliation_config_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE SET NULL ON UPDATE CASCADE;
