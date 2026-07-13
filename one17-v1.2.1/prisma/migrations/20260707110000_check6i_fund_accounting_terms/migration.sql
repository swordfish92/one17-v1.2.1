-- Invariant 36(d): "facility amount, targeted return, profit/principal
-- repayment dates flow FROM fund-accounting postings (single source) ->
-- counterparty dashboard AND the associated fund-account receivables
-- dashboards -- no dual entry, no drift." targetedReturnPct is captured
-- ONCE by Fund Accounting (recordFundAccountingTerms); repayment
-- obligations already FK to this row and are the SAME data both
-- dashboards read.
ALTER TABLE "counterparty_facility_application" ADD COLUMN     "targeted_return_pct" DECIMAL(6,2),
ADD COLUMN     "terms_recorded_at" TIMESTAMP(3),
ADD COLUMN     "terms_recorded_by_user_id" UUID;

-- AddForeignKey
ALTER TABLE "counterparty_facility_application" ADD CONSTRAINT "counterparty_facility_application_terms_recorded_by_user_i_fkey" FOREIGN KEY ("terms_recorded_by_user_id") REFERENCES "app_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
