-- Invariant 52(b)/(c) (CHECK12): governed template registry (certificates
-- now, letters in 52c) + certificate issuance.

-- CreateEnum
CREATE TYPE "document_template_type" AS ENUM ('CERTIFICATE', 'LETTER');

-- CreateEnum
CREATE TYPE "certificate_product_class" AS ENUM ('HF_UNIT_NAV', 'POOL_ND_PSR', 'ND_WAKALAH');

-- CreateEnum
CREATE TYPE "certificate_status" AS ENUM ('QUEUED', 'ISSUED');

-- CreateTable
CREATE TABLE "document_template" (
    "id" UUID NOT NULL,
    "template_type" "document_template_type" NOT NULL,
    "template_key" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "disclaimer_text" TEXT NOT NULL,
    "sec_rule_disclaimer" TEXT NOT NULL,
    "proposed_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_template_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificate" (
    "id" UUID NOT NULL,
    "certificate_number" TEXT,
    "investor_id" TEXT NOT NULL,
    "product_account_id" UUID,
    "nd_mandate_account_id" UUID,
    "product_class" "certificate_product_class" NOT NULL,
    "status" "certificate_status" NOT NULL DEFAULT 'QUEUED',
    "data_snapshot" JSONB NOT NULL,
    "pdf_bytes" BYTEA,
    "document_register_entry_id" UUID,
    "template_id" UUID,
    "issued_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "document_template_workflow_instance_id_key" ON "document_template"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "document_template_template_type_template_key_version_key" ON "document_template"("template_type", "template_key", "version");

-- CreateIndex
CREATE UNIQUE INDEX "certificate_certificate_number_key" ON "certificate"("certificate_number");

-- AddForeignKey
ALTER TABLE "certificate" ADD CONSTRAINT "certificate_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate" ADD CONSTRAINT "certificate_product_account_id_fkey" FOREIGN KEY ("product_account_id") REFERENCES "product_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate" ADD CONSTRAINT "certificate_nd_mandate_account_id_fkey" FOREIGN KEY ("nd_mandate_account_id") REFERENCES "nd_mandate_account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate" ADD CONSTRAINT "certificate_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "document_template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Governed certificate-number sequence, same pattern as investor_id_seq
-- (M1 condition #26) -- atomic by construction, no TOCTOU race. Assigned
-- only at actual ISSUANCE (not at QUEUED creation), so a certificate that
-- sits queued a long time waiting on a template never reserves/wastes a
-- number.
CREATE SEQUENCE "certificate_number_seq" START WITH 1 INCREMENT BY 1;
