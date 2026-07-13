-- AMD-01: "investor_base_ratio / mudarib_base_ratio become nullable and
-- unused for POOL accounts; they remain valid ONLY for Non-Discretionary
-- Mandate accounts" (mandateType DIRECT_DEAL / RESTRICTED_PLUS_DIRECT).
-- Enforced at the database, not just InvestorService, for the same reason
-- as every other financial constraint in this codebase.

ALTER TABLE "investor_mandate"
  ADD CONSTRAINT "mandate_ratios_only_for_direct_deal"
  CHECK (
    "mandate_type" IN ('DIRECT_DEAL', 'RESTRICTED_PLUS_DIRECT')
    OR ("investor_base_ratio" IS NULL AND "mudarib_base_ratio" IS NULL)
  );
