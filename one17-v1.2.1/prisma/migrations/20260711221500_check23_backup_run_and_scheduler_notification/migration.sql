-- AlterEnum
ALTER TYPE "notification_type" ADD VALUE 'SCHEDULER_JOB_FAILED';

-- CreateEnum
CREATE TYPE "backup_run_status" AS ENUM ('SUCCEEDED', 'FAILED');

-- CreateTable
CREATE TABLE "backup_run" (
    "id" UUID NOT NULL,
    "db_name" TEXT NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL,
    "completed_at" TIMESTAMP(3) NOT NULL,
    "status" "backup_run_status" NOT NULL,
    "dump_size_bytes" BIGINT,
    "off_machine_copy_ok" BOOLEAN,
    "error_message" TEXT,
    "reported_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "backup_run_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "backup_run_started_at_idx" ON "backup_run"("started_at");
