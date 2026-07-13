-- AlterTable
ALTER TABLE "investment_memo" ADD COLUMN     "ic_resolution_ref" TEXT;

-- CreateTable
CREATE TABLE "investment_memo_threshold_config" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "threshold_kobo" BIGINT NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "workflow_instance_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investment_memo_threshold_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investment_memo_threshold_config_workflow_instance_id_key" ON "investment_memo_threshold_config"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "investment_memo_threshold_config_version_key" ON "investment_memo_threshold_config"("version");

-- AddForeignKey
ALTER TABLE "investment_memo_threshold_config" ADD CONSTRAINT "investment_memo_threshold_config_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
