-- CreateTable
CREATE TABLE "metric_definition" (
    "id" UUID NOT NULL,
    "metric_code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "display_label" TEXT NOT NULL,
    "screen_code" TEXT NOT NULL,
    "business_meaning" TEXT NOT NULL,
    "source_tables_and_joins" TEXT NOT NULL,
    "inclusion_exclusion_rules" TEXT NOT NULL,
    "owner_role_code" TEXT NOT NULL,
    "ledger_reconcilable" BOOLEAN NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "superseded_by_metric_id" UUID,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "metric_definition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "metric_definition_metric_code_version_key" ON "metric_definition"("metric_code", "version");

-- AddForeignKey
ALTER TABLE "metric_definition" ADD CONSTRAINT "metric_definition_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
