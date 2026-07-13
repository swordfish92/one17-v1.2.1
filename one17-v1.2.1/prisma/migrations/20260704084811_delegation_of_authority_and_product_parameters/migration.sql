-- CreateEnum
CREATE TYPE "delegation_status" AS ENUM ('ACTIVE', 'REVOKED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "product_engine_type" AS ENUM ('UNIT_NAV', 'PSR_WATERFALL', 'MANDATE');

-- CreateEnum
CREATE TYPE "product_status" AS ENUM ('DRAFT', 'ACTIVE', 'SUSPENDED', 'RETIRED');

-- CreateEnum
CREATE TYPE "drip_default" AS ENUM ('AUTO', 'MANUAL', 'NONE');

-- CreateTable
CREATE TABLE "delegation_of_authority" (
    "id" UUID NOT NULL,
    "function_code" TEXT NOT NULL,
    "delegate_user_id" UUID NOT NULL,
    "delegated_by_user_id" UUID NOT NULL,
    "limit_kobo" BIGINT,
    "effective_from" TIMESTAMP(3) NOT NULL,
    "effective_to" TIMESTAMP(3),
    "status" "delegation_status" NOT NULL DEFAULT 'ACTIVE',
    "reason" TEXT,
    "revoked_at" TIMESTAMP(3),
    "revoked_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delegation_of_authority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "engine_type" "product_engine_type" NOT NULL,
    "status" "product_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "product_parameters" (
    "id" UUID NOT NULL,
    "product_code" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "psr_pool_mudarib_share" DECIMAL(6,4),
    "surplus_investor_share" DECIMAL(6,4),
    "surplus_mudarib_share" DECIMAL(6,4),
    "fees_allowed_on_pool" BOOLEAN NOT NULL DEFAULT false,
    "drip_default" "drip_default" NOT NULL DEFAULT 'NONE',
    "effective_from" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_parameters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "delegation_of_authority_delegate_user_id_function_code_stat_idx" ON "delegation_of_authority"("delegate_user_id", "function_code", "status");

-- CreateIndex
CREATE UNIQUE INDEX "product_parameters_product_code_version_key" ON "product_parameters"("product_code", "version");

-- AddForeignKey
ALTER TABLE "delegation_of_authority" ADD CONSTRAINT "delegation_of_authority_function_code_fkey" FOREIGN KEY ("function_code") REFERENCES "platform_function"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delegation_of_authority" ADD CONSTRAINT "delegation_of_authority_delegate_user_id_fkey" FOREIGN KEY ("delegate_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delegation_of_authority" ADD CONSTRAINT "delegation_of_authority_delegated_by_user_id_fkey" FOREIGN KEY ("delegated_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delegation_of_authority" ADD CONSTRAINT "delegation_of_authority_revoked_by_user_id_fkey" FOREIGN KEY ("revoked_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_parameters" ADD CONSTRAINT "product_parameters_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_parameters" ADD CONSTRAINT "product_parameters_created_by_user_id_fkey" FOREIGN KEY ("created_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_parameters" ADD CONSTRAINT "product_parameters_approved_by_user_id_fkey" FOREIGN KEY ("approved_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
