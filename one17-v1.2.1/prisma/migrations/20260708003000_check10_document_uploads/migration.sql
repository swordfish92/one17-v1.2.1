-- AlterTable
ALTER TABLE "document_register_entry" ALTER COLUMN "uploaded_by_user_id" DROP NOT NULL;
ALTER TABLE "document_register_entry" ADD COLUMN     "uploaded_by_counterparty_id" UUID;

-- CreateTable
CREATE TABLE "required_document_config" (
    "id" UUID NOT NULL,
    "application_type" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "required_document_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "required_document_config_application_type_document_type_key" ON "required_document_config"("application_type", "document_type");

-- AddForeignKey
ALTER TABLE "document_register_entry" ADD CONSTRAINT "document_register_entry_uploaded_by_counterparty_id_fkey" FOREIGN KEY ("uploaded_by_counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "required_document_config" ADD CONSTRAINT "required_document_config_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
