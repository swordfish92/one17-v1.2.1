-- CreateTable
CREATE TABLE "portfolio_market_value_entry" (
    "id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "valuation_date" DATE NOT NULL,
    "version" INTEGER NOT NULL,
    "market_value_kobo" BIGINT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "approved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_market_value_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_market_value_entry_ledger_entity_code_valuation_d_key" ON "portfolio_market_value_entry"("ledger_entity_code", "valuation_date", "version");

-- AddForeignKey
ALTER TABLE "portfolio_market_value_entry" ADD CONSTRAINT "portfolio_market_value_entry_ledger_entity_code_fkey" FOREIGN KEY ("ledger_entity_code") REFERENCES "ledger_entity"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_market_value_entry" ADD CONSTRAINT "portfolio_market_value_entry_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_market_value_entry" ADD CONSTRAINT "portfolio_market_value_entry_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

