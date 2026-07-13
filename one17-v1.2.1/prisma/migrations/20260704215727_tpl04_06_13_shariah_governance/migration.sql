-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "shariah_cert_expiry" TIMESTAMP(3),
ADD COLUMN     "shariah_cert_ref" TEXT;

-- AlterTable
ALTER TABLE "product_account" ADD COLUMN     "drip_election" TEXT,
ADD COLUMN     "rollover_election" TEXT;

-- CreateTable
CREATE TABLE "ssb_member" (
    "id" UUID NOT NULL,
    "member_ref" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "credentials" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "effective_from" DATE,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ssb_member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ssb_resolution" (
    "id" UUID NOT NULL,
    "resolution_ref" TEXT NOT NULL,
    "resolution_date" DATE,
    "proposed_by_member_id" UUID,
    "summary" TEXT NOT NULL,
    "standard_applied" TEXT,
    "vote_result" TEXT,
    "effective_date" DATE,
    "status" TEXT NOT NULL DEFAULT 'APPROVED',
    "document_ref" TEXT,
    "notes" TEXT,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ssb_resolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purification_record" (
    "id" UUID NOT NULL,
    "purification_ref" TEXT NOT NULL,
    "identified_date" DATE,
    "source_description" TEXT NOT NULL,
    "amount_kobo" BIGINT NOT NULL,
    "charity_recipient" TEXT,
    "status" TEXT NOT NULL DEFAULT 'IDENTIFIED',
    "document_ref" TEXT,
    "notes" TEXT,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "purification_record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compliance_check" (
    "id" UUID NOT NULL,
    "check_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "standard_applied" TEXT,
    "result" TEXT,
    "frequency" TEXT,
    "reviewed_by_member_id" UUID,
    "document_ref" TEXT,
    "notes" TEXT,
    "migration_source_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compliance_check_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ssb_member_member_ref_key" ON "ssb_member"("member_ref");

-- CreateIndex
CREATE UNIQUE INDEX "ssb_member_migration_source_ref_key" ON "ssb_member"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "ssb_resolution_resolution_ref_key" ON "ssb_resolution"("resolution_ref");

-- CreateIndex
CREATE UNIQUE INDEX "ssb_resolution_migration_source_ref_key" ON "ssb_resolution"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "purification_record_purification_ref_key" ON "purification_record"("purification_ref");

-- CreateIndex
CREATE UNIQUE INDEX "purification_record_migration_source_ref_key" ON "purification_record"("migration_source_ref");

-- CreateIndex
CREATE UNIQUE INDEX "compliance_check_check_code_key" ON "compliance_check"("check_code");

-- CreateIndex
CREATE UNIQUE INDEX "compliance_check_migration_source_ref_key" ON "compliance_check"("migration_source_ref");

-- AddForeignKey
ALTER TABLE "ssb_resolution" ADD CONSTRAINT "ssb_resolution_proposed_by_member_id_fkey" FOREIGN KEY ("proposed_by_member_id") REFERENCES "ssb_member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compliance_check" ADD CONSTRAINT "compliance_check_reviewed_by_member_id_fkey" FOREIGN KEY ("reviewed_by_member_id") REFERENCES "ssb_member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
