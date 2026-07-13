
-- CreateEnum
CREATE TYPE "oversight_principal_type" AS ENUM ('INVESTOR', 'COUNTERPARTY');

-- CreateTable
CREATE TABLE "exec_oversight_session" (
    "id" UUID NOT NULL,
    "principal_type" "oversight_principal_type" NOT NULL,
    "investor_id" TEXT,
    "counterparty_id" UUID,
    "viewed_by_user_id" UUID NOT NULL,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMP(3),
    "ip_address" TEXT,

    CONSTRAINT "exec_oversight_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exec_oversight_policy" (
    "id" UUID NOT NULL,
    "version" INTEGER NOT NULL,
    "status" "governed_item_status" NOT NULL DEFAULT 'DRAFT',
    "granted_role_codes" JSONB NOT NULL,
    "proposed_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "approved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "exec_oversight_policy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "exec_oversight_session_viewed_by_user_id_idx" ON "exec_oversight_session"("viewed_by_user_id");

-- CreateIndex
CREATE INDEX "exec_oversight_session_investor_id_idx" ON "exec_oversight_session"("investor_id");

-- CreateIndex
CREATE INDEX "exec_oversight_session_counterparty_id_idx" ON "exec_oversight_session"("counterparty_id");

-- CreateIndex
CREATE UNIQUE INDEX "exec_oversight_policy_version_key" ON "exec_oversight_policy"("version");

-- AddForeignKey
ALTER TABLE "exec_oversight_session" ADD CONSTRAINT "exec_oversight_session_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exec_oversight_session" ADD CONSTRAINT "exec_oversight_session_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exec_oversight_session" ADD CONSTRAINT "exec_oversight_session_viewed_by_user_id_fkey" FOREIGN KEY ("viewed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exec_oversight_policy" ADD CONSTRAINT "exec_oversight_policy_proposed_by_user_id_fkey" FOREIGN KEY ("proposed_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exec_oversight_policy" ADD CONSTRAINT "exec_oversight_policy_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

