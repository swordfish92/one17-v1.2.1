-- Invariant 55(a) (CHECK12, CEO directive 8-Jul-2026): Payment Gateway Adapter.

CREATE TYPE "payment_gateway_inflow_status" AS ENUM ('UNMATCHED', 'MATCHED', 'PROMOTED', 'REVERSED', 'REJECTED');

CREATE TABLE "payment_gateway_provider" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "webhook_secret" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "configured_by_user_id" UUID NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_gateway_provider_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "payment_gateway_provider_provider_slot_key" ON "payment_gateway_provider"("provider_slot");

CREATE TABLE "product_custodian_account" (
    "id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "product_code" TEXT NOT NULL,
    "custodian_bank_name" TEXT NOT NULL,
    "custodian_account_number" TEXT NOT NULL,
    "reference_code_prefix" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_custodian_account_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "product_custodian_account_provider_id_product_code_key" ON "product_custodian_account"("provider_id", "product_code");

CREATE TABLE "payment_gateway_inflow" (
    "id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "custodian_account_id" UUID,
    "gateway_event_ref" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "settled_at" TIMESTAMP(3) NOT NULL,
    "narration" TEXT,
    "raw_payload" JSONB NOT NULL,
    "status" "payment_gateway_inflow_status" NOT NULL DEFAULT 'UNMATCHED',
    "matched_investor_id" TEXT,
    "matched_by_user_id" UUID,
    "matched_at" TIMESTAMP(3),
    "subscription_request_id" UUID,
    "reversal_redemption_request_id" UUID,
    "rejection_reason" TEXT,
    "last_attempt_error" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_gateway_inflow_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "payment_gateway_inflow_gateway_event_ref_key" ON "payment_gateway_inflow"("gateway_event_ref");
CREATE UNIQUE INDEX "payment_gateway_inflow_subscription_request_id_key" ON "payment_gateway_inflow"("subscription_request_id");
CREATE UNIQUE INDEX "payment_gateway_inflow_reversal_redemption_request_id_key" ON "payment_gateway_inflow"("reversal_redemption_request_id");
CREATE INDEX "payment_gateway_inflow_status_idx" ON "payment_gateway_inflow"("status");

ALTER TABLE "payment_gateway_provider" ADD CONSTRAINT "payment_gateway_provider_configured_by_user_id_fkey" FOREIGN KEY ("configured_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "product_custodian_account" ADD CONSTRAINT "product_custodian_account_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "payment_gateway_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "product_custodian_account" ADD CONSTRAINT "product_custodian_account_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "product_custodian_account" ADD CONSTRAINT "product_custodian_account_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "payment_gateway_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_custodian_account_id_fkey" FOREIGN KEY ("custodian_account_id") REFERENCES "product_custodian_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_matched_investor_id_fkey" FOREIGN KEY ("matched_investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_matched_by_user_id_fkey" FOREIGN KEY ("matched_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_subscription_request_id_fkey" FOREIGN KEY ("subscription_request_id") REFERENCES "subscription_request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "payment_gateway_inflow" ADD CONSTRAINT "payment_gateway_inflow_reversal_redemption_request_id_fkey" FOREIGN KEY ("reversal_redemption_request_id") REFERENCES "subscription_request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
