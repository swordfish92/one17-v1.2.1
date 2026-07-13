-- CreateEnum
CREATE TYPE "risk_matrix_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUPERSEDED');

-- CreateEnum
CREATE TYPE "risk_appetite_direction" AS ENUM ('HIGHER_BETTER', 'LOWER_BETTER');

-- CreateEnum
CREATE TYPE "risk_register_status" AS ENUM ('DRAFT', 'ACTIVE');

-- CreateTable
CREATE TABLE "risk_appetite_matrix_version" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "risk_matrix_status" NOT NULL DEFAULT 'DRAFT',
    "board_resolution_ref" TEXT,
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "effective_from" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "risk_appetite_matrix_version_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_appetite_category" (
    "id" UUID NOT NULL,
    "matrix_version_id" UUID NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "risk_category" TEXT NOT NULL,
    "appetite_statement" TEXT NOT NULL,
    "appetite_level" TEXT,
    "direction" "risk_appetite_direction" NOT NULL,
    "is_zero_tolerance" BOOLEAN NOT NULL DEFAULT false,
    "escalation_owner" TEXT,
    "green_threshold" DECIMAL(12,4),
    "amber_threshold" DECIMAL(12,4),
    "red_threshold" DECIMAL(12,4),

    CONSTRAINT "risk_appetite_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "risk_register_entry" (
    "id" UUID NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "risk_category" TEXT NOT NULL,
    "sub_category" TEXT,
    "description" TEXT,
    "inherent_risk_rating" TEXT,
    "residual_risk_rating" TEXT,
    "risk_appetite_statement" TEXT,
    "status" "risk_register_status" NOT NULL DEFAULT 'DRAFT',
    "approved_by_user_id" UUID,
    "board_resolution_ref" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "risk_register_entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "risk_appetite_matrix_version_version_key" ON "risk_appetite_matrix_version"("version");

-- CreateIndex
CREATE UNIQUE INDEX "risk_appetite_matrix_version_workflow_instance_id_key" ON "risk_appetite_matrix_version"("workflow_instance_id");

-- CreateIndex
CREATE UNIQUE INDEX "risk_appetite_category_matrix_version_id_sort_order_key" ON "risk_appetite_category"("matrix_version_id", "sort_order");

-- AddForeignKey
ALTER TABLE "risk_appetite_matrix_version" ADD CONSTRAINT "risk_appetite_matrix_version_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_appetite_matrix_version" ADD CONSTRAINT "risk_appetite_matrix_version_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_appetite_category" ADD CONSTRAINT "risk_appetite_category_matrix_version_id_fkey" FOREIGN KEY ("matrix_version_id") REFERENCES "risk_appetite_matrix_version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "risk_register_entry" ADD CONSTRAINT "risk_register_entry_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
