
-- CreateTable
CREATE TABLE "scheduled_job_registration" (
    "job_code" TEXT NOT NULL,
    "is_retired" BOOLEAN NOT NULL DEFAULT false,
    "registered_at" TIMESTAMP(3),
    "registered_by_user_id" UUID,
    "retired_at" TIMESTAMP(3),
    "retired_by_user_id" UUID,
    "retire_reason" TEXT,
    "retire_workflow_instance_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scheduled_job_registration_pkey" PRIMARY KEY ("job_code")
);

-- AddForeignKey
ALTER TABLE "scheduled_job_registration" ADD CONSTRAINT "scheduled_job_registration_registered_by_user_id_fkey" FOREIGN KEY ("registered_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_job_registration" ADD CONSTRAINT "scheduled_job_registration_retired_by_user_id_fkey" FOREIGN KEY ("retired_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

