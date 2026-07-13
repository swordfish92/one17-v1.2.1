-- CreateTable
CREATE TABLE "replay_batch" (
    "id" UUID NOT NULL,
    "source_code" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "total_rows" INTEGER NOT NULL,
    "ingested_by_user_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "replay_batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "replay_source_row" (
    "id" UUID NOT NULL,
    "batch_id" UUID NOT NULL,
    "row_number" INTEGER NOT NULL,
    "raw_data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "replay_source_row_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "replay_source_row_batch_id_row_number_key" ON "replay_source_row"("batch_id", "row_number");

-- AddForeignKey
ALTER TABLE "replay_batch" ADD CONSTRAINT "replay_batch_ingested_by_user_id_fkey" FOREIGN KEY ("ingested_by_user_id") REFERENCES "app_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "replay_source_row" ADD CONSTRAINT "replay_source_row_batch_id_fkey" FOREIGN KEY ("batch_id") REFERENCES "replay_batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

