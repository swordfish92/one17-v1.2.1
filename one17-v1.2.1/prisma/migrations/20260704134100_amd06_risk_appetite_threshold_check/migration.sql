-- AMD-06: "tbl_risk_appetite_matrix enforces per category: three DISTINCT
-- thresholds with monotonic ordering per Direction (Higher=Better: green >
-- amber > red; Lower=Better: green < amber < red) via CHECK constraint;
-- zero-tolerance categories (Shariah, Regulatory) are the sanctioned
-- exception (G=0, R>=1)." All three columns live on one row, so — unlike
-- the cross-table invariants elsewhere in this schema — a plain CHECK
-- (no trigger) can express this directly. NULLs (the DRAFT, unpopulated
-- state AMD-12 mandates at build time) are explicitly permitted: the rule
-- only bites once the Board actually populates all three at activation.
ALTER TABLE "risk_appetite_category" ADD CONSTRAINT "risk_appetite_category_threshold_monotonic"
  CHECK (
    "green_threshold" IS NULL OR "amber_threshold" IS NULL OR "red_threshold" IS NULL
    OR "is_zero_tolerance"
    OR ("direction" = 'HIGHER_BETTER' AND "green_threshold" > "amber_threshold" AND "amber_threshold" > "red_threshold")
    OR ("direction" = 'LOWER_BETTER' AND "green_threshold" < "amber_threshold" AND "amber_threshold" < "red_threshold")
  );
