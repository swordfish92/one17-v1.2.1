-- CreateTable
CREATE TABLE "screening_checklist_item" (
    "id" UUID NOT NULL,
    "item_code" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "screening_checklist_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "screening_checklist_item_item_code_key" ON "screening_checklist_item"("item_code");
