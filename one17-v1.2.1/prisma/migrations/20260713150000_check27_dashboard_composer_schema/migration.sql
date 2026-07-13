
-- CreateEnum
CREATE TYPE "dashboard_scope" AS ENUM ('PERSONAL', 'DEPARTMENT');

-- CreateEnum
CREATE TYPE "tile_presentation" AS ENUM ('KPI_TILE', 'TREND_LINE', 'PIE', 'BAR', 'TABLE');

-- AlterTable
ALTER TABLE "metric_definition" ADD COLUMN     "composer_resolver_key" TEXT,
ADD COLUMN     "required_function_code" TEXT;

-- CreateTable
CREATE TABLE "saved_dashboard" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "scope" "dashboard_scope" NOT NULL,
    "owner_user_id" UUID NOT NULL,
    "org_unit_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saved_dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dashboard_tile" (
    "id" UUID NOT NULL,
    "dashboard_id" UUID NOT NULL,
    "metric_code" TEXT NOT NULL,
    "presentation" "tile_presentation" NOT NULL,
    "position" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dashboard_tile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "saved_dashboard" ADD CONSTRAINT "saved_dashboard_owner_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dashboard_tile" ADD CONSTRAINT "dashboard_tile_dashboard_id_fkey" FOREIGN KEY ("dashboard_id") REFERENCES "saved_dashboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

