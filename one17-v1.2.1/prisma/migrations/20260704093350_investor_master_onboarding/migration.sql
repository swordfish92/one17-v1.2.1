-- CreateEnum
CREATE TYPE "investor_entity_type" AS ENUM ('HNWI_INDIVIDUAL', 'CORPORATE', 'TRUST', 'COOPERATIVE', 'PENSION', 'FAMILY_OFFICE', 'OTHER');

-- CreateEnum
CREATE TYPE "investor_kyc_status" AS ENUM ('PENDING_KYC', 'KYC_COMPLETE', 'LAPSED', 'SUSPENDED', 'EXEMPT');

-- CreateEnum
CREATE TYPE "investor_aml_status" AS ENUM ('PENDING', 'CLEARED', 'UNDER_REVIEW', 'FLAGGED');

-- CreateEnum
CREATE TYPE "investor_fund_status" AS ENUM ('PENDING_KYC', 'ACTIVE', 'MATURED', 'EXITED', 'SUSPENDED', 'WATCH_LIST');

-- CreateEnum
CREATE TYPE "mandate_type" AS ENUM ('UNRESTRICTED', 'RESTRICTED', 'DIRECT_DEAL', 'RESTRICTED_PLUS_DIRECT');

-- CreateEnum
CREATE TYPE "rollover_default" AS ENUM ('AUTO', 'MANUAL', 'NONE');

-- CreateEnum
CREATE TYPE "document_verification_status" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "screening_result" AS ENUM ('NO_MATCH', 'POTENTIAL_MATCH', 'MATCH');

-- CreateTable
CREATE TABLE "investor" (
    "investor_id" TEXT NOT NULL,
    "full_legal_name" TEXT NOT NULL,
    "entity_type" "investor_entity_type" NOT NULL,
    "nationality" TEXT NOT NULL,
    "tax_identification_number" TEXT NOT NULL,
    "date_of_birth_or_incorporation" TIMESTAMP(3),
    "contact_email" TEXT NOT NULL,
    "contact_phone" TEXT NOT NULL,
    "registered_address" TEXT NOT NULL,
    "kyc_status" "investor_kyc_status" NOT NULL DEFAULT 'PENDING_KYC',
    "kyc_expiry_date" TIMESTAMP(3),
    "aml_status" "investor_aml_status" NOT NULL DEFAULT 'PENDING',
    "fund_status" "investor_fund_status" NOT NULL DEFAULT 'PENDING_KYC',
    "source_of_funds" TEXT NOT NULL,
    "authorised_signatories" JSONB,
    "onboarded_by_user_id" UUID NOT NULL,
    "compliance_approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "investor_pkey" PRIMARY KEY ("investor_id")
);

-- CreateTable
CREATE TABLE "investor_mandate" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "mandate_type" "mandate_type" NOT NULL,
    "target_return_rate" DECIMAL(6,4) NOT NULL,
    "investor_base_ratio" DECIMAL(6,4),
    "mudarib_base_ratio" DECIMAL(6,4),
    "restricted_sectors" TEXT[],
    "restricted_contracts" TEXT[],
    "direct_deal_investment_id" TEXT,
    "rollover_default" "rollover_default" NOT NULL DEFAULT 'AUTO',
    "early_exit_waiver" BOOLEAN NOT NULL DEFAULT false,
    "ssb_waiver_resolution_ref" TEXT,
    "effective_date" TIMESTAMP(3) NOT NULL,
    "approved_by_user_id" UUID NOT NULL,
    "shariah_reviewed_by_user_id" UUID,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_mandate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_kyc_document" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "issued_date" TIMESTAMP(3),
    "expiry_date" TIMESTAMP(3),
    "verification_status" "document_verification_status" NOT NULL DEFAULT 'PENDING',
    "uploaded_by_user_id" UUID NOT NULL,
    "verified_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_kyc_document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_screening_record" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "screened_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lists_checked" JSONB NOT NULL,
    "search_terms_used" TEXT NOT NULL,
    "result" "screening_result" NOT NULL,
    "screener_user_id" UUID NOT NULL,
    "countersigner_user_id" UUID,
    "notes" TEXT,

    CONSTRAINT "investor_screening_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investor_bank_account" (
    "id" UUID NOT NULL,
    "investor_id" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "verification_status" "document_verification_status" NOT NULL DEFAULT 'PENDING',
    "verified_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investor_bank_account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "investor_contact_email_key" ON "investor"("contact_email");

-- CreateIndex
CREATE UNIQUE INDEX "investor_mandate_investor_id_key" ON "investor_mandate"("investor_id");

-- AddForeignKey
ALTER TABLE "investor" ADD CONSTRAINT "investor_onboarded_by_user_id_fkey" FOREIGN KEY ("onboarded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor" ADD CONSTRAINT "investor_compliance_approved_by_user_id_fkey" FOREIGN KEY ("compliance_approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_mandate" ADD CONSTRAINT "investor_mandate_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_mandate" ADD CONSTRAINT "investor_mandate_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_mandate" ADD CONSTRAINT "investor_mandate_shariah_reviewed_by_user_id_fkey" FOREIGN KEY ("shariah_reviewed_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_kyc_document" ADD CONSTRAINT "investor_kyc_document_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_kyc_document" ADD CONSTRAINT "investor_kyc_document_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_kyc_document" ADD CONSTRAINT "investor_kyc_document_verified_by_user_id_fkey" FOREIGN KEY ("verified_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_screening_record" ADD CONSTRAINT "investor_screening_record_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_screening_record" ADD CONSTRAINT "investor_screening_record_screener_user_id_fkey" FOREIGN KEY ("screener_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_screening_record" ADD CONSTRAINT "investor_screening_record_countersigner_user_id_fkey" FOREIGN KEY ("countersigner_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account" ADD CONSTRAINT "investor_bank_account_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investor_bank_account" ADD CONSTRAINT "investor_bank_account_verified_by_user_id_fkey" FOREIGN KEY ("verified_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
