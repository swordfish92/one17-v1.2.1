-- Invariant 37(c)(v): Board Minutes -- CS uploads/delivers; onward
-- transmission IS the acknowledgment/access trail AND the "unless
-- widened" ACL grant (one table serves both).

-- CreateTable
CREATE TABLE "board_minutes" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "committee_tag" TEXT,
    "uploaded_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "board_minutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "board_minutes_transmission" (
    "id" UUID NOT NULL,
    "minutes_id" UUID NOT NULL,
    "recipient_user_id" UUID NOT NULL,
    "transmitted_by_user_id" UUID NOT NULL,
    "transmitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acknowledged_at" TIMESTAMP(3),

    CONSTRAINT "board_minutes_transmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "board_minutes_transmission_minutes_id_recipient_user_id_key" ON "board_minutes_transmission"("minutes_id", "recipient_user_id");

-- AddForeignKey
ALTER TABLE "board_minutes" ADD CONSTRAINT "board_minutes_uploaded_by_user_id_fkey" FOREIGN KEY ("uploaded_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_minutes_transmission" ADD CONSTRAINT "board_minutes_transmission_minutes_id_fkey" FOREIGN KEY ("minutes_id") REFERENCES "board_minutes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_minutes_transmission" ADD CONSTRAINT "board_minutes_transmission_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "board_minutes_transmission" ADD CONSTRAINT "board_minutes_transmission_transmitted_by_user_id_fkey" FOREIGN KEY ("transmitted_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
