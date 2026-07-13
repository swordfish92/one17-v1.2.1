-- CreateEnum
CREATE TYPE "calendar_entry_kind" AS ENUM ('TASK_DEADLINE', 'BOARD_EVENT', 'PMS_CYCLE', 'FILING_DEADLINE', 'PERSONAL', 'MEETING');

-- CreateEnum
CREATE TYPE "calendar_attendee_status" AS ENUM ('PENDING', 'ACCEPTED', 'DECLINED');

-- CreateTable
CREATE TABLE "calendar_entry" (
    "id" UUID NOT NULL,
    "owner_user_id" UUID NOT NULL,
    "kind" "calendar_entry_kind" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "starts_at" TIMESTAMP(3) NOT NULL,
    "ends_at" TIMESTAMP(3),
    "is_auto_plotted" BOOLEAN NOT NULL DEFAULT false,
    "source_type" TEXT,
    "source_id" TEXT,
    "organizer_user_id" UUID,
    "reminder_lead_minutes" INTEGER,
    "reminded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "calendar_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendar_meeting_attendee" (
    "id" UUID NOT NULL,
    "calendar_entry_id" UUID NOT NULL,
    "attendee_user_id" UUID NOT NULL,
    "status" "calendar_attendee_status" NOT NULL DEFAULT 'PENDING',
    "responded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "calendar_meeting_attendee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendar_feed_token" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "calendar_feed_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendar_reminder_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "default_lead_minutes" INTEGER NOT NULL DEFAULT 30,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "calendar_reminder_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "calendar_entry_owner_user_id_starts_at_idx" ON "calendar_entry"("owner_user_id", "starts_at");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_entry_owner_user_id_source_type_source_id_key" ON "calendar_entry"("owner_user_id", "source_type", "source_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_meeting_attendee_calendar_entry_id_attendee_user_i_key" ON "calendar_meeting_attendee"("calendar_entry_id", "attendee_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_feed_token_user_id_key" ON "calendar_feed_token"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "calendar_feed_token_token_key" ON "calendar_feed_token"("token");

-- AddForeignKey
ALTER TABLE "calendar_entry" ADD CONSTRAINT "calendar_entry_owner_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_entry" ADD CONSTRAINT "calendar_entry_organizer_user_id_fkey" FOREIGN KEY ("organizer_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_meeting_attendee" ADD CONSTRAINT "calendar_meeting_attendee_calendar_entry_id_fkey" FOREIGN KEY ("calendar_entry_id") REFERENCES "calendar_entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_meeting_attendee" ADD CONSTRAINT "calendar_meeting_attendee_attendee_user_id_fkey" FOREIGN KEY ("attendee_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar_feed_token" ADD CONSTRAINT "calendar_feed_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "transmitted_document_recipient_document_id_recipient_user_id_ke" RENAME TO "transmitted_document_recipient_document_id_recipient_user_i_key";
