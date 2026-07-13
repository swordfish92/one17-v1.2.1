
-- CreateEnum
CREATE TYPE "zakat_rate_basis" AS ENUM ('LUNAR', 'GREGORIAN');

-- CreateEnum
CREATE TYPE "zakat_assessment_status" AS ENUM ('DRAFT', 'CLIENT_AGREED', 'AWAITING_SHARIAH_CERTIFICATION', 'CERTIFIED');

-- CreateEnum
CREATE TYPE "zakat_schedule_type" AS ENUM ('CASH_BANK', 'GOLD_SILVER', 'INVESTMENT', 'FIXED_ASSET', 'RECEIVABLE', 'LIABILITY');

-- CreateEnum
CREATE TYPE "zakat_item_zakatability" AS ENUM ('ZAKATABLE', 'NON_ZAKATABLE', 'DOUBTFUL');

-- CreateTable
CREATE TABLE "zakat_nisab_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "nisab_gold_grams" DECIMAL(10,3),
    "gold_price_per_gram_kobo" BIGINT,
    "approved_by_user_id" UUID,
    "approved_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "zakat_nisab_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zakat_client_subscription" (
    "investor_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "rate_basis_election" "zakat_rate_basis",
    "zakat_anniversary_gregorian" TIMESTAMP(3),
    "zakat_anniversary_hijri" TEXT,
    "activated_by_user_id" UUID NOT NULL,
    "activated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deactivated_by_user_id" UUID,
    "deactivated_at" TIMESTAMP(3),

    CONSTRAINT "zakat_client_subscription_pkey" PRIMARY KEY ("investor_id")
);

-- CreateTable
CREATE TABLE "zakat_assessment_run" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "assessment_date_gregorian" TIMESTAMP(3) NOT NULL,
    "assessment_date_hijri" TEXT NOT NULL,
    "rate_basis" "zakat_rate_basis" NOT NULL,
    "status" "zakat_assessment_status" NOT NULL DEFAULT 'DRAFT',
    "one_seventeen_balances_snapshot" JSONB NOT NULL,
    "net_zakatable_kobo" BIGINT,
    "zakat_due_kobo" BIGINT,
    "workflow_instance_id" UUID,
    "certified_by_user_id" UUID,
    "certified_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "zakat_assessment_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zakat_declared_item" (
    "id" UUID NOT NULL,
    "zakat_assessment_run_id" UUID NOT NULL,
    "schedule_type" "zakat_schedule_type" NOT NULL,
    "description" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "zakatability" "zakat_item_zakatability" NOT NULL,
    "custody_flag" "wm_custody_flag" NOT NULL,
    "verification_tag" "wm_verification_tag" NOT NULL DEFAULT 'DECLARED',
    "declared_by_user_id" UUID,
    "verified_by_user_id" UUID,
    "verified_at" TIMESTAMP(3),
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "zakat_declared_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "zakat_assessment_run_workflow_instance_id_key" ON "zakat_assessment_run"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "zakat_declared_item_workflow_instance_id_key" ON "zakat_declared_item"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "zakat_client_subscription" ADD CONSTRAINT "zakat_client_subscription_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "zakat_assessment_run" ADD CONSTRAINT "zakat_assessment_run_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "zakat_client_subscription"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "zakat_declared_item" ADD CONSTRAINT "zakat_declared_item_zakat_assessment_run_id_fkey" FOREIGN KEY ("zakat_assessment_run_id") REFERENCES "zakat_assessment_run"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

