-- CreateEnum
CREATE TYPE "kri_compute_status" AS ENUM ('INSTRUMENTED', 'NOT_YET_INSTRUMENTED', 'RESERVED');

-- CreateEnum
CREATE TYPE "kri_rag_status" AS ENUM ('GREEN', 'AMBER', 'RED', 'AWAITING_MATRIX', 'NOT_INSTRUMENTED', 'INFORMATIONAL');

-- CreateTable
CREATE TABLE "kri_definition" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "direction" "risk_appetite_direction" NOT NULL,
    "is_zero_tolerance" BOOLEAN NOT NULL DEFAULT false,
    "risk_appetite_category_ref" TEXT,
    "compute_status" "kri_compute_status" NOT NULL DEFAULT 'NOT_YET_INSTRUMENTED',
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kri_definition_pkey" PRIMARY KEY ("code")
);

-- CreateTable
-- Hand-edited from the generated skeleton: partitioned by year on
-- reading_date, same pattern as audit_trail (see
-- 20260704000000_init_audit_trail). CLAUDE.md Stack Decisions: "yearly
-- partitions on audit_trail AND kri_readings."
CREATE TABLE "kri_reading" (
    "id" UUID NOT NULL,
    "kri_code" TEXT NOT NULL,
    "ledger_entity_code" TEXT,
    "is_aggregate" BOOLEAN NOT NULL DEFAULT false,
    "reading_date" DATE NOT NULL,
    "value" DECIMAL(24,6),
    "rag_status" "kri_rag_status" NOT NULL,
    "matrix_version_id" UUID,
    "detail" JSONB,
    "computed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kri_reading_pkey" PRIMARY KEY ("id","reading_date")
) PARTITION BY RANGE ("reading_date");

CREATE TABLE "kri_reading_2026" PARTITION OF "kri_reading"
  FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');
CREATE TABLE "kri_reading_2027" PARTITION OF "kri_reading"
  FOR VALUES FROM ('2027-01-01') TO ('2028-01-01');
CREATE TABLE "kri_reading_default" PARTITION OF "kri_reading" DEFAULT;

-- CreateTable
CREATE TABLE "kri_escalation" (
    "id" TEXT NOT NULL,
    "kri_reading_id" TEXT NOT NULL,
    "kri_code" TEXT NOT NULL,
    "ledger_entity_code" TEXT,
    "rag_status" "kri_rag_status" NOT NULL,
    "owner_label" TEXT,
    "escalated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notified_at" TIMESTAMP(3),

    CONSTRAINT "kri_escalation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kri_engine_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "provisional_accrual_aging_days" INTEGER NOT NULL DEFAULT 30,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kri_engine_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulatory_capital_requirement" (
    "id" TEXT NOT NULL,
    "requirement_kobo" BIGINT NOT NULL,
    "effective_from" DATE NOT NULL,
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regulatory_capital_requirement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "kri_reading" ADD CONSTRAINT "kri_reading_kri_code_fkey" FOREIGN KEY ("kri_code") REFERENCES "kri_definition"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Indexes propagate to all partitions (including ones created later), same
-- as audit_trail.
CREATE INDEX "kri_reading_code_date_idx" ON "kri_reading" ("kri_code", "reading_date");
CREATE INDEX "kri_reading_entity_idx" ON "kri_reading" ("ledger_entity_code");
CREATE UNIQUE INDEX "kri_reading_unique_row" ON "kri_reading" ("kri_code", COALESCE("ledger_entity_code", ''), "is_aggregate", "reading_date");
