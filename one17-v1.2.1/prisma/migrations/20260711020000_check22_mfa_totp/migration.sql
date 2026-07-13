-- Invariant 68(c) H-02 (CHECK22 v1.0.1 remediation): staff-realm TOTP MFA.
-- Hand-authored (not `prisma migrate dev`) because this dev DB already has
-- untracked drift from earlier hand-tweaked migrations -- `migrate dev`
-- refuses to proceed without a full reset, which is not acceptable against
-- a database carrying real accumulated history. This file only adds new
-- columns/tables; it does not touch anything `migrate deploy` (the
-- drift-tolerant, additive-only command this repo's installer and CI both
-- use) would refuse.

-- AlterTable
ALTER TABLE "app_user" ADD COLUMN "totp_secret" TEXT;
ALTER TABLE "app_user" ADD COLUMN "mfa_enabled_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "user_session" ADD COLUMN "mfa_pending" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "mfa_backup_code" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "code_hash" TEXT NOT NULL,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mfa_backup_code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "mfa_backup_code_user_id_idx" ON "mfa_backup_code"("user_id");

-- AddForeignKey
ALTER TABLE "mfa_backup_code" ADD CONSTRAINT "mfa_backup_code_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "mfa_financial_capability" (
    "function_code" TEXT NOT NULL,
    "added_by_user_id" UUID NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mfa_financial_capability_pkey" PRIMARY KEY ("function_code")
);

-- CreateTable
CREATE TABLE "mfa_global_enforcement" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "all_staff_mandatory" BOOLEAN NOT NULL DEFAULT false,
    "updated_by_user_id" UUID,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mfa_global_enforcement_pkey" PRIMARY KEY ("id")
);
