-- CreateEnum
CREATE TYPE "screening_list_source_code" AS ENUM ('OFAC', 'UN_SC', 'UK_SANCTIONS', 'EU_FSF', 'NG_NFIU');

-- CreateEnum
CREATE TYPE "screening_list_file_format" AS ENUM ('CSV', 'XML');

-- CreateEnum
CREATE TYPE "screening_provider_mode" AS ENUM ('LOCAL_LISTS', 'COMMERCIAL', 'MANUAL');

-- CreateEnum
CREATE TYPE "screening_subject_type" AS ENUM ('INVESTOR', 'COUNTERPARTY');

-- CreateEnum
CREATE TYPE "screening_hit_adjudication_outcome" AS ENUM ('TRUE_MATCH', 'FALSE_POSITIVE');

-- CreateTable
CREATE TABLE "screening_list_source" (
    "id" UUID NOT NULL,
    "source_code" "screening_list_source_code" NOT NULL,
    "name" TEXT NOT NULL,
    "file_format" "screening_list_file_format" NOT NULL,
    "download_url" TEXT NOT NULL,
    "extra_config" JSONB,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "is_parked" BOOLEAN NOT NULL DEFAULT false,
    "parked_reason" TEXT,
    "last_successful_download_at" TIMESTAMP(3),
    "last_list_version" TEXT,
    "last_attempt_at" TIMESTAMP(3),
    "last_attempt_status" TEXT,
    "pending_download_url" TEXT,
    "pending_extra_config" JSONB,
    "pending_is_active" BOOLEAN,
    "pending_proposed_by_user_id" UUID,
    "config_workflow_instance_id" UUID,
    "configured_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "screening_list_source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screening_list_entry" (
    "id" UUID NOT NULL,
    "source_code" "screening_list_source_code" NOT NULL,
    "source_record_id" TEXT NOT NULL,
    "primary_name" TEXT NOT NULL,
    "aliases" JSONB NOT NULL,
    "date_of_birth" TEXT,
    "nationality" TEXT,
    "entity_type" TEXT,
    "programme" TEXT,
    "list_version" TEXT NOT NULL,
    "raw_detail" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "screening_list_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screening_list_download_log" (
    "id" UUID NOT NULL,
    "source_code" "screening_list_source_code" NOT NULL,
    "attempted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    "record_count" INTEGER,
    "list_version" TEXT,
    "error_message" TEXT,

    CONSTRAINT "screening_list_download_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screening_gateway_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "active_provider_mode" "screening_provider_mode" NOT NULL DEFAULT 'LOCAL_LISTS',
    "match_threshold_score" INTEGER NOT NULL DEFAULT 80,
    "red_threshold_score" INTEGER NOT NULL DEFAULT 95,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "screening_gateway_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commercial_screening_provider" (
    "id" UUID NOT NULL,
    "provider_slot" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "api_key" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "configured_by_user_id" UUID,
    "pending_name" TEXT,
    "pending_api_key" TEXT,
    "pending_is_active" BOOLEAN,
    "pending_proposed_by_user_id" UUID,
    "config_workflow_instance_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "commercial_screening_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screening_run" (
    "id" UUID NOT NULL,
    "subject_type" "screening_subject_type" NOT NULL,
    "subject_id" TEXT NOT NULL,
    "subject_name_screened" TEXT NOT NULL,
    "provider_mode" "screening_provider_mode" NOT NULL,
    "screened_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "threshold_used" INTEGER NOT NULL,
    "list_versions_screened" JSONB NOT NULL,
    "outcome" TEXT NOT NULL,
    "initiated_by_user_id" UUID,

    CONSTRAINT "screening_run_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "screening_hit" (
    "id" UUID NOT NULL,
    "screening_run_id" UUID NOT NULL,
    "list_entry_id" UUID,
    "matched_name" TEXT NOT NULL,
    "match_score" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "pending_outcome" "screening_hit_adjudication_outcome",
    "pending_rationale" TEXT,
    "decision_proposed_by_user_id" UUID,
    "decision_workflow_instance_id" UUID,
    "adjudicated_outcome" "screening_hit_adjudication_outcome",
    "adjudicated_rationale" TEXT,
    "adjudicated_by_user_id" UUID,
    "adjudicated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "screening_hit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "screening_list_source_source_code_key" ON "screening_list_source"("source_code");

-- CreateIndex
CREATE UNIQUE INDEX "screening_list_source_config_workflow_instance_id_key" ON "screening_list_source"("config_workflow_instance_id");

-- CreateIndex
CREATE INDEX "screening_list_entry_primary_name_idx" ON "screening_list_entry"("primary_name");

-- CreateIndex
CREATE UNIQUE INDEX "screening_list_entry_source_code_source_record_id_key" ON "screening_list_entry"("source_code", "source_record_id");

-- CreateIndex
CREATE UNIQUE INDEX "commercial_screening_provider_provider_slot_key" ON "commercial_screening_provider"("provider_slot");

-- CreateIndex
CREATE UNIQUE INDEX "commercial_screening_provider_config_workflow_instance_id_key" ON "commercial_screening_provider"("config_workflow_instance_id");

-- CreateIndex
CREATE INDEX "screening_run_subject_type_subject_id_idx" ON "screening_run"("subject_type", "subject_id");

-- CreateIndex
CREATE UNIQUE INDEX "screening_hit_decision_workflow_instance_id_key" ON "screening_hit"("decision_workflow_instance_id");

-- AddForeignKey
ALTER TABLE "screening_list_entry" ADD CONSTRAINT "screening_list_entry_source_code_fkey" FOREIGN KEY ("source_code") REFERENCES "screening_list_source"("source_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "screening_list_download_log" ADD CONSTRAINT "screening_list_download_log_source_code_fkey" FOREIGN KEY ("source_code") REFERENCES "screening_list_source"("source_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "screening_hit" ADD CONSTRAINT "screening_hit_screening_run_id_fkey" FOREIGN KEY ("screening_run_id") REFERENCES "screening_run"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "screening_hit" ADD CONSTRAINT "screening_hit_list_entry_id_fkey" FOREIGN KEY ("list_entry_id") REFERENCES "screening_list_entry"("id") ON DELETE SET NULL ON UPDATE CASCADE;

