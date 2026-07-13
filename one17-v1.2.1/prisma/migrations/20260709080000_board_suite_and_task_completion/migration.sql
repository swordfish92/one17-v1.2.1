-- Invariant 55(b)/(c) (CHECK12, CEO directive 8-Jul-2026): Board Escalation
-- & Directives suite completion + dedicated Tasks page.

ALTER TABLE "task" ADD COLUMN "deliverable_url" TEXT;

CREATE TYPE "board_calendar_submission_status" AS ENUM ('SUBMITTED', 'RECEIVED', 'INCOMPLETE');

CREATE TABLE "board_calendar_submission" (
    "id" UUID NOT NULL,
    "calendar_event_id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "submitted_by_user_id" UUID NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "board_calendar_submission_status" NOT NULL DEFAULT 'SUBMITTED',
    "received_by_user_id" UUID,
    "received_at" TIMESTAMP(3),
    "completeness_note" TEXT,

    CONSTRAINT "board_calendar_submission_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "board_calendar_submission_calendar_event_id_idx" ON "board_calendar_submission"("calendar_event_id");

ALTER TABLE "board_calendar_submission" ADD CONSTRAINT "board_calendar_submission_calendar_event_id_fkey" FOREIGN KEY ("calendar_event_id") REFERENCES "board_calendar_event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "board_calendar_submission" ADD CONSTRAINT "board_calendar_submission_submitted_by_user_id_fkey" FOREIGN KEY ("submitted_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "board_calendar_submission" ADD CONSTRAINT "board_calendar_submission_received_by_user_id_fkey" FOREIGN KEY ("received_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE TABLE "transmitted_document" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "doc_type" TEXT,
    "transmitted_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transmitted_document_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "transmitted_document" ADD CONSTRAINT "transmitted_document_transmitted_by_user_id_fkey" FOREIGN KEY ("transmitted_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE "transmitted_document_recipient" (
    "id" UUID NOT NULL,
    "document_id" UUID NOT NULL,
    "recipient_user_id" UUID NOT NULL,
    "task_id" UUID,
    "acknowledged_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transmitted_document_recipient_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "transmitted_document_recipient_document_id_recipient_user_id_key" ON "transmitted_document_recipient"("document_id", "recipient_user_id");

ALTER TABLE "transmitted_document_recipient" ADD CONSTRAINT "transmitted_document_recipient_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "transmitted_document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "transmitted_document_recipient" ADD CONSTRAINT "transmitted_document_recipient_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "transmitted_document_recipient" ADD CONSTRAINT "transmitted_document_recipient_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
