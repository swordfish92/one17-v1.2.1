-- Invariant 52(a) (CHECK12): corporate letterhead template, single governed asset.

-- CreateTable
CREATE TABLE "letterhead_template" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "company_name" TEXT NOT NULL,
    "address_line1" TEXT NOT NULL,
    "address_line2" TEXT,
    "rc_number" TEXT NOT NULL,
    "sec_registration_line" TEXT NOT NULL,
    "brand_primary_color_hex" TEXT NOT NULL,
    "brand_accent_color_hex" TEXT NOT NULL,
    "brand_deep_color_hex" TEXT NOT NULL,
    "footer_disclaimer" TEXT NOT NULL,
    "proposed_by_user_id" UUID,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "letterhead_template_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "letterhead_template_version_key" ON "letterhead_template"("version");

-- CreateIndex
CREATE UNIQUE INDEX "letterhead_template_workflow_instance_id_key" ON "letterhead_template"("workflow_instance_id");
