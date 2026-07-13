
-- CreateEnum
CREATE TYPE "calendar_adapter_type" AS ENUM ('MICROSOFT_GRAPH', 'GOOGLE');

-- AlterTable
ALTER TABLE "attendance_provider" ADD COLUMN     "access_token" TEXT,
ADD COLUMN     "credential_config" JSONB,
ADD COLUMN     "pending_credential_config" JSONB,
ADD COLUMN     "refresh_token" TEXT,
ADD COLUMN     "token_expires_at" TIMESTAMP(3),
ADD COLUMN     "token_obtained_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "payment_gateway_provider" ADD COLUMN     "api_config" JSONB,
ADD COLUMN     "pending_api_config" JSONB;

-- CreateTable
CREATE TABLE "calendar_gateway_provider" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "adapter_type" "calendar_adapter_type" NOT NULL,
    "name" TEXT NOT NULL,
    "client_id" TEXT,
    "client_secret" TEXT,
    "tenant_id" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "configured_by_user_id" UUID,
    "pending_name" TEXT,
    "pending_client_id" TEXT,
    "pending_client_secret" TEXT,
    "pending_tenant_id" TEXT,
    "pending_is_active" BOOLEAN,
    "pending_proposed_by_user_id" UUID,
    "config_workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "calendar_gateway_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "external_calendar_connection" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "provider_id" UUID NOT NULL,
    "access_token_encrypted" TEXT NOT NULL,
    "refresh_token_encrypted" TEXT,
    "scope" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3),
    "connected_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revoked_at" TIMESTAMP(3),
    "last_synced_at" TIMESTAMP(3),

    CONSTRAINT "external_calendar_connection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "calendar_gateway_provider_provider_slot_key" ON "calendar_gateway_provider"("provider_slot");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_gateway_provider_config_workflow_instance_id_key" ON "calendar_gateway_provider"("config_workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "external_calendar_connection_user_id_provider_id_key" ON "external_calendar_connection"("user_id", "provider_id");

-- AddForeignKey
ALTER TABLE "external_calendar_connection" ADD CONSTRAINT "external_calendar_connection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "external_calendar_connection" ADD CONSTRAINT "external_calendar_connection_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "calendar_gateway_provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

