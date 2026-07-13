
-- CreateTable
CREATE TABLE "ai_provider_credential" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "provider_name" TEXT NOT NULL,
    "api_key" TEXT,
    "base_url" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "configured_by_user_id" UUID,
    "pending_provider_name" TEXT,
    "pending_api_key" TEXT,
    "pending_base_url" TEXT,
    "pending_is_active" BOOLEAN,
    "pending_proposed_by_user_id" UUID,
    "config_workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_provider_credential_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ai_provider_credential_provider_slot_key" ON "ai_provider_credential"("provider_slot");

-- CreateIndex
CREATE UNIQUE INDEX "ai_provider_credential_config_workflow_instance_id_key" ON "ai_provider_credential"("config_workflow_instance_id");

