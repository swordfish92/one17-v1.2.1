
-- CreateEnum
CREATE TYPE "talent_recommendation_type" AS ENUM ('WELFARE', 'REWARD');

-- CreateEnum
CREATE TYPE "talent_recommendation_status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "welfare_scheme" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "welfare_scheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reward_type" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reward_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talent_recommendation" (
    "id" UUID NOT NULL,
    "employee_id" UUID NOT NULL,
    "recommendation_type" "talent_recommendation_type" NOT NULL,
    "welfare_scheme_id" UUID,
    "reward_type_id" UUID,
    "appraisal_cycle_id" UUID,
    "justification" TEXT NOT NULL,
    "status" "talent_recommendation_status" NOT NULL DEFAULT 'PENDING',
    "recommended_by_user_id" UUID NOT NULL,
    "approved_by_user_id" UUID,
    "workflow_instance_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "talent_recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "welfare_scheme_name_key" ON "welfare_scheme"("name");

-- CreateIndex
CREATE UNIQUE INDEX "reward_type_name_key" ON "reward_type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "talent_recommendation_workflow_instance_id_key" ON "talent_recommendation"("workflow_instance_id");

-- AddForeignKey
ALTER TABLE "talent_recommendation" ADD CONSTRAINT "talent_recommendation_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talent_recommendation" ADD CONSTRAINT "talent_recommendation_welfare_scheme_id_fkey" FOREIGN KEY ("welfare_scheme_id") REFERENCES "welfare_scheme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talent_recommendation" ADD CONSTRAINT "talent_recommendation_reward_type_id_fkey" FOREIGN KEY ("reward_type_id") REFERENCES "reward_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "talent_recommendation" ADD CONSTRAINT "talent_recommendation_appraisal_cycle_id_fkey" FOREIGN KEY ("appraisal_cycle_id") REFERENCES "appraisal_cycle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

