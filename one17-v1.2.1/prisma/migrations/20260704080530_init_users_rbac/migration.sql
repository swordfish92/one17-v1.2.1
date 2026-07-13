-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('ACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "permission_level" AS ENUM ('INITIATE', 'APPROVE', 'VIEW');

-- AlterTable
ALTER TABLE "audit_chain_state" ALTER COLUMN "updated_at" DROP DEFAULT,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(3);

-- CreateTable
CREATE TABLE "app_user" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "status" "user_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "app_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "role_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "user_role" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "role_code" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by_id" UUID,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_function" (
    "code" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "platform_function_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "role_permission" (
    "role_code" TEXT NOT NULL,
    "function_code" TEXT NOT NULL,
    "level" "permission_level" NOT NULL,
    "condition" TEXT,

    CONSTRAINT "role_permission_pkey" PRIMARY KEY ("role_code","function_code","level")
);

-- CreateTable
CREATE TABLE "role_conflict" (
    "role_a_code" TEXT NOT NULL,
    "role_b_code" TEXT NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "role_conflict_pkey" PRIMARY KEY ("role_a_code","role_b_code")
);

-- CreateIndex
CREATE UNIQUE INDEX "app_user_email_key" ON "app_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_id_role_code_key" ON "user_role"("user_id", "role_code");

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_role_code_fkey" FOREIGN KEY ("role_code") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_assigned_by_id_fkey" FOREIGN KEY ("assigned_by_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_role_code_fkey" FOREIGN KEY ("role_code") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_function_code_fkey" FOREIGN KEY ("function_code") REFERENCES "platform_function"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_conflict" ADD CONSTRAINT "role_conflict_role_a_code_fkey" FOREIGN KEY ("role_a_code") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_conflict" ADD CONSTRAINT "role_conflict_role_b_code_fkey" FOREIGN KEY ("role_b_code") REFERENCES "role"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "audit_trail_actor_idx" RENAME TO "audit_trail_actor_user_id_idx";

-- RenameIndex
ALTER INDEX "audit_trail_entity_idx" RENAME TO "audit_trail_entity_type_entity_id_idx";
