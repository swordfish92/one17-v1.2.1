-- CreateEnum
CREATE TYPE "marketing_send_status" AS ENUM ('DRAFT', 'PENDING_APPROVAL', 'SENT', 'REJECTED');

-- CreateTable
CREATE TABLE "marketing_resource" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "resource_type" TEXT NOT NULL,
    "file_reference" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "marketing_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_subscriber" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT,
    "segments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "subscribed" BOOLEAN NOT NULL DEFAULT true,
    "unsubscribe_token" TEXT NOT NULL,
    "subscribed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unsubscribed_at" TIMESTAMP(3),

    CONSTRAINT "marketing_subscriber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_send" (
    "id" UUID NOT NULL,
    "resource_id" UUID,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "target_segments" TEXT[],
    "status" "marketing_send_status" NOT NULL DEFAULT 'DRAFT',
    "initiated_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "sent_at" TIMESTAMP(3),
    "recipient_count" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "marketing_send_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "marketing_resource_workflow_instance_id_key" ON "marketing_resource"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "marketing_subscriber_email_key" ON "marketing_subscriber"("email");

-- CreateIndex
CREATE UNIQUE INDEX "marketing_subscriber_unsubscribe_token_key" ON "marketing_subscriber"("unsubscribe_token");

-- CreateIndex
CREATE UNIQUE INDEX "marketing_send_workflow_instance_id_key" ON "marketing_send"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "marketing_resource" ADD CONSTRAINT "marketing_resource_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing_resource" ADD CONSTRAINT "marketing_resource_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing_send" ADD CONSTRAINT "marketing_send_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "marketing_resource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing_send" ADD CONSTRAINT "marketing_send_initiated_by_user_id_fkey" FOREIGN KEY ("initiated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marketing_send" ADD CONSTRAINT "marketing_send_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
