-- CreateEnum
CREATE TYPE "counterparty_restructure_request_type" AS ENUM ('EXTENSION', 'RESTRUCTURE');

-- CreateEnum
CREATE TYPE "counterparty_restructure_request_status" AS ENUM ('PENDING', 'APPROVED', 'DECLINED');

-- CreateEnum
CREATE TYPE "complaint_status" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- DropForeignKey
ALTER TABLE "client_communication" DROP CONSTRAINT "client_communication_logged_by_user_id_fkey";

-- AlterTable
ALTER TABLE "client_communication" ADD COLUMN     "routed_to_function_code" TEXT,
ALTER COLUMN "logged_by_user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "counterparty" ADD COLUMN     "contact_email" TEXT,
ADD COLUMN     "portal_provisioned_at" TIMESTAMP(3),
ADD COLUMN     "restructuring_requests_enabled" BOOLEAN NOT NULL DEFAULT true;

-- CreateTable
CREATE TABLE "portal_counterparty_user" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "password_hash" TEXT,
    "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
    "locked_until" TIMESTAMP(3),
    "status" "user_status" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portal_counterparty_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portal_counterparty_session" (
    "id" UUID NOT NULL,
    "portal_user_id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "revoked_at" TIMESTAMP(3),
    "ip_address" TEXT,

    CONSTRAINT "portal_counterparty_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "counterparty_restructure_request" (
    "id" UUID NOT NULL,
    "counterparty_id" UUID NOT NULL,
    "request_type" "counterparty_restructure_request_type" NOT NULL,
    "extension_months" INTEGER,
    "reason" TEXT NOT NULL,
    "status" "counterparty_restructure_request_status" NOT NULL DEFAULT 'PENDING',
    "decided_by_user_id" UUID,
    "decision_notes" TEXT,
    "decided_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "counterparty_restructure_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint" (
    "id" UUID NOT NULL,
    "investor_id" TEXT,
    "counterparty_id" UUID,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "complaint_status" NOT NULL DEFAULT 'OPEN',
    "received_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sla_due_at" TIMESTAMP(3) NOT NULL,
    "owner_user_id" UUID,
    "escalated_at" TIMESTAMP(3),
    "escalated_to_user_id" UUID,
    "resolved_at" TIMESTAMP(3),
    "resolution_notes" TEXT,
    "logged_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complaint_sla_config" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "version" INTEGER NOT NULL DEFAULT 1,
    "status" "governed_item_status" NOT NULL DEFAULT 'ACTIVE',
    "sla_days" INTEGER NOT NULL,
    "amber_threshold_pct" INTEGER NOT NULL,
    "board_resolution_ref" TEXT,
    "approved_by_user_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "complaint_sla_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "portal_counterparty_user_counterparty_id_key" ON "portal_counterparty_user"("counterparty_id");

-- CreateIndex
CREATE UNIQUE INDEX "portal_counterparty_session_token_hash_key" ON "portal_counterparty_session"("token_hash");

-- CreateIndex
CREATE INDEX "portal_counterparty_session_portal_user_id_idx" ON "portal_counterparty_session"("portal_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "counterparty_contact_email_key" ON "counterparty"("contact_email");

-- AddForeignKey
ALTER TABLE "client_communication" ADD CONSTRAINT "client_communication_logged_by_user_id_fkey" FOREIGN KEY ("logged_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal_counterparty_user" ADD CONSTRAINT "portal_counterparty_user_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portal_counterparty_session" ADD CONSTRAINT "portal_counterparty_session_portal_user_id_fkey" FOREIGN KEY ("portal_user_id") REFERENCES "portal_counterparty_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_restructure_request" ADD CONSTRAINT "counterparty_restructure_request_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "counterparty_restructure_request" ADD CONSTRAINT "counterparty_restructure_request_decided_by_user_id_fkey" FOREIGN KEY ("decided_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_investor_id_fkey" FOREIGN KEY ("investor_id") REFERENCES "investor"("investor_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_counterparty_id_fkey" FOREIGN KEY ("counterparty_id") REFERENCES "counterparty"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_owner_user_id_fkey" FOREIGN KEY ("owner_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_escalated_to_user_id_fkey" FOREIGN KEY ("escalated_to_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_logged_by_user_id_fkey" FOREIGN KEY ("logged_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;


-- Invariant 28(f): a complaint belongs to EXACTLY ONE client (never both,
-- never neither) — own-data-only clarity depends on this at the portal
-- query layer.
ALTER TABLE "complaint" ADD CONSTRAINT "complaint_exactly_one_subject" CHECK (
  (("investor_id" IS NOT NULL)::int + ("counterparty_id" IS NOT NULL)::int) = 1
);

-- Invariant 28(e): "max 1-month extension" — a hard cap on the magnitude of
-- any single EXTENSION request, DB-enforced regardless of which service
-- layer calls in.
ALTER TABLE "counterparty_restructure_request" ADD CONSTRAINT "extension_max_one_month" CHECK (
  "request_type" != 'EXTENSION' OR ("extension_months" IS NOT NULL AND "extension_months" <= 1)
);

-- Invariant 28(e): "max 1 restructure" — a counterparty may never have more
-- than one APPROVED RESTRUCTURE request (lifetime). Scoped narrower than
-- invariant 25(4)'s full payment-reminder-ladder engine (Check-6) — this is
-- just the two literal caps invariant 28(e) names; no "exception workflow"
-- escalation path exists yet (a request beyond the cap is refused outright,
-- an honest gap rather than a fabricated escalation route).
CREATE FUNCTION enforce_counterparty_restructure_limit() RETURNS TRIGGER AS $$
DECLARE
  approved_count INTEGER;
BEGIN
  IF NEW.request_type = 'RESTRUCTURE' AND NEW.status = 'APPROVED' THEN
    SELECT count(*) INTO approved_count FROM counterparty_restructure_request
      WHERE counterparty_id = NEW.counterparty_id AND request_type = 'RESTRUCTURE' AND status = 'APPROVED' AND id != NEW.id;
    IF approved_count >= 1 THEN
      RAISE EXCEPTION 'counterparty % already has an APPROVED restructure request — max 1 restructure (invariant 28e); beyond this cap requires a future exception-workflow process, not yet built', NEW.counterparty_id;
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER counterparty_restructure_request_limit
  BEFORE INSERT OR UPDATE ON "counterparty_restructure_request"
  FOR EACH ROW EXECUTE FUNCTION enforce_counterparty_restructure_limit();
