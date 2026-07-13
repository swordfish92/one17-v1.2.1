-- CreateEnum
CREATE TYPE "cell_class" AS ENUM ('AUTO', 'ENTRY', 'STATIC');

-- CreateEnum
CREATE TYPE "regulatory_filing_status" AS ENUM ('DRAFT', 'ENTRY_IN_PROGRESS', 'SUBMITTED_FOR_CERTIFICATION', 'CERTIFIED', 'FILED');

-- CreateTable
CREATE TABLE "template_cell_map" (
    "id" UUID NOT NULL,
    "regulator_template_id" UUID NOT NULL,
    "sheet_name" TEXT NOT NULL,
    "cell_address" TEXT NOT NULL,
    "label" TEXT,
    "cell_class" "cell_class" NOT NULL,
    "source_key" TEXT,
    "static_value" TEXT,
    "map_version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "template_cell_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_field_map" (
    "id" UUID NOT NULL,
    "regulator_template_id" UUID NOT NULL,
    "page" INTEGER NOT NULL,
    "field_name" TEXT,
    "x_pt" DOUBLE PRECISION,
    "y_pt" DOUBLE PRECISION,
    "font_size_pt" DOUBLE PRECISION DEFAULT 9,
    "label" TEXT,
    "cell_class" "cell_class" NOT NULL,
    "source_key" TEXT,
    "static_value" TEXT,
    "map_version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "template_field_map_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulatory_filing_calendar" (
    "id" UUID NOT NULL,
    "regulator_template_id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "deadline_day_of_month" INTEGER,
    "deadline_rule" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regulatory_filing_calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulatory_filing_run" (
    "id" UUID NOT NULL,
    "regulator_template_id" UUID NOT NULL,
    "ledger_entity_code" TEXT NOT NULL,
    "period_start" TIMESTAMP(3) NOT NULL,
    "period_end" TIMESTAMP(3) NOT NULL,
    "status" "regulatory_filing_status" NOT NULL DEFAULT 'DRAFT',
    "figures" JSONB NOT NULL,
    "prepared_by_user_id" UUID NOT NULL,
    "certified_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "sec_portal_ack_ref" TEXT,
    "submitted_at" TIMESTAMP(3),
    "generated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regulatory_filing_run_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "template_cell_map_regulator_template_id_sheet_name_cell_add_key" ON "template_cell_map"("regulator_template_id", "sheet_name", "cell_address", "map_version");

-- CreateIndex
CREATE UNIQUE INDEX "template_field_map_regulator_template_id_page_field_name_ma_key" ON "template_field_map"("regulator_template_id", "page", "field_name", "map_version");

-- CreateIndex
CREATE UNIQUE INDEX "regulatory_filing_run_workflow_instance_id_key" ON "regulatory_filing_run"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "template_cell_map" ADD CONSTRAINT "template_cell_map_regulator_template_id_fkey" FOREIGN KEY ("regulator_template_id") REFERENCES "regulator_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "template_field_map" ADD CONSTRAINT "template_field_map_regulator_template_id_fkey" FOREIGN KEY ("regulator_template_id") REFERENCES "regulator_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulatory_filing_calendar" ADD CONSTRAINT "regulatory_filing_calendar_regulator_template_id_fkey" FOREIGN KEY ("regulator_template_id") REFERENCES "regulator_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulatory_filing_run" ADD CONSTRAINT "regulatory_filing_run_regulator_template_id_fkey" FOREIGN KEY ("regulator_template_id") REFERENCES "regulator_template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
