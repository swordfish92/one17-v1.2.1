-- CreateTable
CREATE TABLE "dashboard_manual_status" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "regulatory_filings_status" TEXT NOT NULL DEFAULT 'GREEN',
    "shariah_ssb_compliance_status" TEXT NOT NULL DEFAULT 'GREEN',
    "operational_risk_status" TEXT NOT NULL DEFAULT 'GREEN',
    "kyc_compliance_status" TEXT NOT NULL DEFAULT 'GREEN',
    "aml_status" TEXT NOT NULL DEFAULT 'GREEN',
    "reputational_risk_score" INTEGER NOT NULL DEFAULT 1,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by_user_id" UUID,

    CONSTRAINT "dashboard_manual_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dashboard_action_item" (
    "id" UUID NOT NULL,
    "audience" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "due_label" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dashboard_action_item_pkey" PRIMARY KEY ("id")
);
