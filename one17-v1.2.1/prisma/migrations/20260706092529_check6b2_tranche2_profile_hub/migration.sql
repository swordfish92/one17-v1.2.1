-- CreateEnum
CREATE TYPE "marital_status" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateEnum
CREATE TYPE "personal_record_change_status" AS ENUM ('PENDING', 'ACKNOWLEDGED', 'REJECTED');

-- CreateEnum
CREATE TYPE "task_status" AS ENUM ('OPEN', 'IN_PROGRESS', 'DONE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "notification_type" AS ENUM ('TASK_ASSIGNED', 'PERSONAL_RECORD_CHANGE_DECIDED', 'GENERIC');

-- AlterTable (invariant 29a: "employee names split SURNAME / FIRST_NAME /
-- MIDDLE_NAME, never a single full_name field"). Add nullable, BACKFILL
-- from the existing full_name (dev/smoke data only — no real employee
-- data has been migrated into this environment yet; TPL_08 v2 already
-- carries surname/first_name/middle_name natively for the real migration
-- path), THEN tighten to NOT NULL and drop the old column — preserves
-- every existing row rather than a blind drop-and-recreate.
ALTER TABLE "employee" ADD COLUMN "surname" TEXT;
ALTER TABLE "employee" ADD COLUMN "first_name" TEXT;
ALTER TABLE "employee" ADD COLUMN "middle_name" TEXT;

UPDATE "employee" SET
  "surname" = regexp_replace(trim("full_name"), '^.* ', ''),
  "first_name" = regexp_replace(trim("full_name"), ' [^ ]*$', '');

ALTER TABLE "employee" ALTER COLUMN "surname" SET NOT NULL;
ALTER TABLE "employee" ALTER COLUMN "first_name" SET NOT NULL;
ALTER TABLE "employee" DROP COLUMN "full_name";

-- CreateTable
CREATE TABLE "employee_personal_record" (
    "employee_id" UUID NOT NULL,
    "marital_status" "marital_status",
    "number_of_children" INTEGER,
    "residential_address" TEXT,
    "next_of_kin_name" TEXT,
    "next_of_kin_relationship" TEXT,
    "next_of_kin_phone" TEXT,
    "next_of_kin_address" TEXT,
    "hobbies_interests" TEXT,
    "emergency_contact_name" TEXT,
    "emergency_contact_phone" TEXT,
    "emergency_contact_relationship" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_personal_record_pkey" PRIMARY KEY ("employee_id")
);

-- CreateTable
CREATE TABLE "employee_personal_record_change_request" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "proposed_marital_status" "marital_status",
    "proposed_residential_address" TEXT,
    "proposed_next_of_kin_name" TEXT,
    "proposed_next_of_kin_relationship" TEXT,
    "proposed_next_of_kin_phone" TEXT,
    "proposed_next_of_kin_address" TEXT,
    "status" "personal_record_change_status" NOT NULL DEFAULT 'PENDING',
    "workflow_instance_id" TEXT,
    "requested_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employee_personal_record_change_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "assignee_employee_id" UUID NOT NULL,
    "assigned_by_user_id" UUID NOT NULL,
    "due_at" TIMESTAMP(3),
    "status" "task_status" NOT NULL DEFAULT 'OPEN',
    "started_at" TIMESTAMP(3),
    "completed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification" (
    "id" UUID NOT NULL,
    "recipient_user_id" UUID NOT NULL,
    "type" "notification_type" NOT NULL DEFAULT 'GENERIC',
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "link_path" TEXT,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_personal_record_change_request_workflow_instance_i_key" ON "employee_personal_record_change_request"("workflow_instance_id");

-- CreateIndex
CREATE INDEX "task_assignee_employee_id_status_idx" ON "task"("assignee_employee_id", "status");

-- CreateIndex
CREATE INDEX "notification_recipient_user_id_is_read_idx" ON "notification"("recipient_user_id", "is_read");

-- AddForeignKey
ALTER TABLE "employee_personal_record" ADD CONSTRAINT "employee_personal_record_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_personal_record_change_request" ADD CONSTRAINT "employee_personal_record_change_request_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_assignee_employee_id_fkey" FOREIGN KEY ("assignee_employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_assigned_by_user_id_fkey" FOREIGN KEY ("assigned_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
