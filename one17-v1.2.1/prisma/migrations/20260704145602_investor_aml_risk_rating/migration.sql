-- CreateEnum
CREATE TYPE "investor_aml_risk_rating" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "investor" ADD COLUMN     "aml_risk_rating" "investor_aml_risk_rating";
