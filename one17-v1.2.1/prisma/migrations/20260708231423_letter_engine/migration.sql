-- Invariant 52(c) (CHECK12): governed letter/correspondence engine.

-- AlterTable: document_template gains bodyTemplate (LETTER-only) and the
-- CERTIFICATE-only disclaimer pair becomes nullable (type-specific
-- requirements enforced in each type's own service, not the schema).
ALTER TABLE "document_template" ALTER COLUMN "disclaimer_text" DROP NOT NULL;
ALTER TABLE "document_template" ALTER COLUMN "sec_rule_disclaimer" DROP NOT NULL;
ALTER TABLE "document_template" ADD COLUMN "body_template" TEXT;

-- CreateEnum
CREATE TYPE "letter_instance_status" AS ENUM ('PENDING_APPROVAL', 'REJECTED', 'ISSUED');

-- CreateTable
CREATE TABLE "letter_instance" (
    "id" UUID NOT NULL,
    "letter_type" TEXT NOT NULL,
    "template_id" UUID NOT NULL,
    "investor_id" TEXT,
    "counterparty_id" UUID,
    "product_account_id" UUID,
    "nd_mandate_account_id" UUID,
    "merged_body" TEXT NOT NULL,
    "status" "letter_instance_status" NOT NULL DEFAULT 'PENDING_APPROVAL',
    "generated_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "pdf_bytes" BYTEA,
    "document_register_entry_id" UUID,
    "rejection_notes" TEXT,
    "issued_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "letter_instance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "letter_instance_workflow_instance_id_key" ON "letter_instance"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "letter_instance" ADD CONSTRAINT "letter_instance_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letter_instance" ADD CONSTRAINT "letter_instance_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letter_instance" ADD CONSTRAINT "letter_instance_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letter_instance" ADD CONSTRAINT "letter_instance_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "letter_instance" ADD CONSTRAINT "letter_instance_nd_mandate_account_id_fkey" FOREIGN KEY ("nd_mandate_account_id") REFERENCES "nd_mandate_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
