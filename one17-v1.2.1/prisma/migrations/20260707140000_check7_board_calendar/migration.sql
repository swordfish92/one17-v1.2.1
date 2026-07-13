-- Invariant 37(c)(iii): Board Calendar (meetings, committee cycles) with
-- governed reminder-lead-time config.

-- CreateTable
CREATE TABLE "board_calendar_event" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "committee_tag" TEXT,
    "starts_at" TIMESTAMP(3) NOT NULL,
    "ends_at" TIMESTAMP(3),
    "created_by_user_id" UUID NOT NULL,
    "reminded_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "board_calendar_event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_calendar_reminder_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "days_before" INTEGER NOT NULL DEFAULT 3,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "board_calendar_reminder_config_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "board_calendar_event" ADD CONSTRAINT "board_calendar_event_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
