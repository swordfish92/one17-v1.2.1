-- CreateTable
CREATE TABLE "budget_variance_rag_threshold" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "amber_pct" DECIMAL(6,4) NOT NULL,
    "red_pct" DECIMAL(6,4) NOT NULL,
    "effective_from" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budget_variance_rag_threshold_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "budget_variance_rag_threshold_version_key" ON "budget_variance_rag_threshold"("version");

