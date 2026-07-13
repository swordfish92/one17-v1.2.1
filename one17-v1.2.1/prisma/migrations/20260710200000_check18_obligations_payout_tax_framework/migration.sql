-- CreateEnum
CREATE TYPE "profit_payment_interval" AS ENUM ('MONTHLY', 'QUARTERLY', 'SEMI_ANNUAL', 'ANNUAL', 'AT_MATURITY');

-- CreateEnum
CREATE TYPE "payout_batch_status" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'APPROVED', 'INSTRUCTION_ISSUED', 'PAID');

-- CreateEnum
CREATE TYPE "tax_type" AS ENUM ('WHT', 'VAT', 'STAMP_DUTY');

-- CreateEnum
CREATE TYPE "tax_remittance_status" AS ENUM ('PENDING', 'PENDING_APPROVAL', 'APPROVED', 'INSTRUCTION_ISSUED', 'REMITTED');

-- AlterTable
ALTER TABLE "nd_mandate_account" ADD COLUMN     "profit_payment_interval" "profit_payment_interval";

-- AlterTable
ALTER TABLE "product_account" ADD COLUMN     "profit_payment_interval" "profit_payment_interval";

-- AlterTable
ALTER TABLE "vendor_invoice" ADD COLUMN     "recognized_vat_rate_version_id" UUID,
ADD COLUMN     "vat_kobo" BIGINT NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "payout_compilation_batch" (
    "id" UUID NOT NULL,
    "batch_number" TEXT NOT NULL,
    "period_label" TEXT NOT NULL,
    "status" "payout_batch_status" NOT NULL DEFAULT 'DRAFT',
    "total_gross_kobo" BIGINT NOT NULL,
    "total_wht_kobo" BIGINT NOT NULL DEFAULT 0,
    "total_net_kobo" BIGINT NOT NULL,
    "compiled_by_user_id" UUID NOT NULL,
    "workflow_instance_id" UUID,
    "bank_instruction_letter_instance_id" UUID,
    "paid_at" TIMESTAMP(3),
    "paid_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payout_compilation_batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payout_compilation_line" (
    "id" UUID NOT NULL,
    "batch_id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "product_account_id" UUID,
    "nd_mandate_account_id" UUID,
    "gross_kobo" BIGINT NOT NULL,
    "wht_kobo" BIGINT NOT NULL DEFAULT 0,
    "net_kobo" BIGINT NOT NULL,
    "wht_exempt" BOOLEAN NOT NULL DEFAULT false,
    "wht_rate_version_id" UUID,

    CONSTRAINT "payout_compilation_line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_rate_version" (
    "id" UUID NOT NULL,
    "tax_type" "tax_type" NOT NULL,
    "version" INTEGER NOT NULL,
    "rates" JSONB NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "effective_from" TIMESTAMP(3) NOT NULL,
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tax_rate_version_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_tax_exemption" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "tax_type" "tax_type" NOT NULL,
    "reason" TEXT NOT NULL,
    "granted_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_tax_exemption_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fee_invoice" (
    "id" UUID NOT NULL,
    "invoice_number" TEXT NOT NULL,
    "counterparty_id" UUID,
    "investor_id" TEXT,
    "description" TEXT NOT NULL,
    "fee_amount_kobo" BIGINT NOT NULL,
    "vat_kobo" BIGINT NOT NULL DEFAULT 0,
    "vat_rate_version_id" UUID,
    "total_kobo" BIGINT NOT NULL,
    "invoice_date" DATE NOT NULL,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fee_invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stamp_duty_assessment" (
    "id" UUID NOT NULL,
    "instrument_type" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" TEXT NOT NULL,
    "duty_kobo" BIGINT NOT NULL,
    "tax_rate_version_id" UUID NOT NULL,
    "assessed_by_user_id" UUID NOT NULL,
    "assessed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stamp_duty_assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_gl_mapping" (
    "id" UUID NOT NULL,
    "tax_type" "tax_type" NOT NULL,
    "payable_account_code" TEXT,
    "configured_by_user_id" UUID,
    "configured_at" TIMESTAMP(3),

    CONSTRAINT "tax_gl_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_remittance_due_date_config" (
    "id" UUID NOT NULL,
    "tax_type" "tax_type" NOT NULL,
    "authority" TEXT NOT NULL,
    "day_of_month_due" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tax_remittance_due_date_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tax_remittance_batch" (
    "id" UUID NOT NULL,
    "tax_type" "tax_type" NOT NULL,
    "authority" TEXT NOT NULL,
    "period_label" TEXT NOT NULL,
    "total_kobo" BIGINT NOT NULL,
    "status" "tax_remittance_status" NOT NULL DEFAULT 'PENDING',
    "due_date" TIMESTAMP(3) NOT NULL,
    "workflow_instance_id" UUID,
    "letter_instance_id" UUID,
    "remitted_at" TIMESTAMP(3),
    "remitted_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tax_remittance_batch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payout_compilation_batch_batch_number_key" ON "payout_compilation_batch"("batch_number");

-- CreateIndex
CREATE UNIQUE INDEX "payout_compilation_batch_workflow_instance_id_key" ON "payout_compilation_batch"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "payout_compilation_batch_bank_instruction_letter_instance_i_key" ON "payout_compilation_batch"("bank_instruction_letter_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rate_version_workflow_instance_id_key" ON "tax_rate_version"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "tax_rate_version_tax_type_version_key" ON "tax_rate_version"("tax_type", "version");

-- CreateIndex
CREATE UNIQUE INDEX "investor_tax_exemption_investor_id_tax_type_key" ON "investor_tax_exemption"("investor_id", "tax_type");

-- CreateIndex
CREATE UNIQUE INDEX "fee_invoice_invoice_number_key" ON "fee_invoice"("invoice_number");

-- CreateIndex
CREATE UNIQUE INDEX "tax_gl_mapping_tax_type_key" ON "tax_gl_mapping"("tax_type");

-- CreateIndex
CREATE UNIQUE INDEX "tax_remittance_due_date_config_tax_type_authority_key" ON "tax_remittance_due_date_config"("tax_type", "authority");

-- CreateIndex
CREATE UNIQUE INDEX "tax_remittance_batch_workflow_instance_id_key" ON "tax_remittance_batch"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "tax_remittance_batch_letter_instance_id_key" ON "tax_remittance_batch"("letter_instance_id");

-- AddForeignKey
ALTER TABLE "vendor_invoice" ADD CONSTRAINT "vendor_invoice_recognized_vat_rate_version_id_fkey" FOREIGN KEY ("recognized_vat_rate_version_id") REFERENCES "tax_rate_version"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_batch" ADD CONSTRAINT "payout_compilation_batch_compiled_by_user_id_fkey" FOREIGN KEY ("compiled_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_batch" ADD CONSTRAINT "payout_compilation_batch_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_batch" ADD CONSTRAINT "payout_compilation_batch_bank_instruction_letter_instance__fkey" FOREIGN KEY ("bank_instruction_letter_instance_id") REFERENCES "letter_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_line" ADD CONSTRAINT "payout_compilation_line_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "payout_compilation_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_line" ADD CONSTRAINT "payout_compilation_line_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_line" ADD CONSTRAINT "payout_compilation_line_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_line" ADD CONSTRAINT "payout_compilation_line_nd_mandate_account_id_fkey" FOREIGN KEY ("nd_mandate_account_id") REFERENCES "nd_mandate_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payout_compilation_line" ADD CONSTRAINT "payout_compilation_line_wht_rate_version_id_fkey" FOREIGN KEY ("wht_rate_version_id") REFERENCES "tax_rate_version"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_rate_version" ADD CONSTRAINT "tax_rate_version_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_rate_version" ADD CONSTRAINT "tax_rate_version_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_tax_exemption" ADD CONSTRAINT "investor_tax_exemption_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_tax_exemption" ADD CONSTRAINT "investor_tax_exemption_granted_by_user_id_fkey" FOREIGN KEY ("granted_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fee_invoice" ADD CONSTRAINT "fee_invoice_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fee_invoice" ADD CONSTRAINT "fee_invoice_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fee_invoice" ADD CONSTRAINT "fee_invoice_vat_rate_version_id_fkey" FOREIGN KEY ("vat_rate_version_id") REFERENCES "tax_rate_version"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fee_invoice" ADD CONSTRAINT "fee_invoice_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stamp_duty_assessment" ADD CONSTRAINT "stamp_duty_assessment_tax_rate_version_id_fkey" FOREIGN KEY ("tax_rate_version_id") REFERENCES "tax_rate_version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stamp_duty_assessment" ADD CONSTRAINT "stamp_duty_assessment_assessed_by_user_id_fkey" FOREIGN KEY ("assessed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_gl_mapping" ADD CONSTRAINT "tax_gl_mapping_configured_by_user_id_fkey" FOREIGN KEY ("configured_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_remittance_batch" ADD CONSTRAINT "tax_remittance_batch_workflow_instance_id_fkey" FOREIGN KEY ("workflow_instance_id") REFERENCES "workflow_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tax_remittance_batch" ADD CONSTRAINT "tax_remittance_batch_letter_instance_id_fkey" FOREIGN KEY ("letter_instance_id") REFERENCES "letter_instance"("id") ON DELETE SET NULL ON UPDATE CASCADE;

