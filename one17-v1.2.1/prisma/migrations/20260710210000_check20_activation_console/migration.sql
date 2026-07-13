-- CreateTable
CREATE TABLE "activation_state" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "activated_at" TIMESTAMP(3),
    "activated_by_user_id" UUID,

    CONSTRAINT "activation_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activation_step_skip" (
    "id" UUID NOT NULL,
    "step_code" TEXT NOT NULL,
    "skipped_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "skipped_by_user_id" UUID NOT NULL,

    CONSTRAINT "activation_step_skip_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "activation_step_skip_step_code_key" ON "activation_step_skip"("step_code");

-- AddForeignKey
ALTER TABLE "activation_state" ADD CONSTRAINT "activation_state_activated_by_user_id_fkey" FOREIGN KEY ("activated_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activation_step_skip" ADD CONSTRAINT "activation_step_skip_skipped_by_user_id_fkey" FOREIGN KEY ("skipped_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

