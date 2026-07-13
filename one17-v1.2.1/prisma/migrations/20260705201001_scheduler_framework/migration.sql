-- CreateEnum
CREATE TYPE "scheduled_job_run_status" AS ENUM ('RUNNING', 'SUCCEEDED', 'FAILED');

-- CreateTable
CREATE TABLE "scheduled_job_run" (
    "id" UUID NOT NULL,
    "job_code" TEXT NOT NULL,
    "scheduled_for" TIMESTAMP(3) NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL,
    "completed_at" TIMESTAMP(3),
    "status" "scheduled_job_run_status" NOT NULL,
    "is_catch_up" BOOLEAN NOT NULL DEFAULT false,
    "result_summary" JSONB,
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "scheduled_job_run_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "scheduled_job_run_job_code_scheduled_for_idx" ON "scheduled_job_run"("job_code", "scheduled_for");
