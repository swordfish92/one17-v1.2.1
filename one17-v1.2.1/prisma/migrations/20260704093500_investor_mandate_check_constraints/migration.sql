-- Hand-authored, same reason as product_parameters' constraints migration:
-- Prisma's schema DSL has no cross-column/range CHECK attribute here.
-- SRS §5.3: target_return_rate 0.01–0.50; investor_base_ratio + mudarib_
-- base_ratio = 1.0 when both are set (AMD-01 retires them to NULL for
-- POOL participation — NULL passes every check below). SRS mandate table:
-- ssb_waiver_resolution_ref "Required if early_exit_waiver = TRUE."

ALTER TABLE "investor_mandate"
  ADD CONSTRAINT "target_return_rate_range"
  CHECK ("target_return_rate" >= 0.01 AND "target_return_rate" <= 0.50);

ALTER TABLE "investor_mandate"
  ADD CONSTRAINT "mandate_ratios_sum_to_one"
  CHECK (
    "investor_base_ratio" IS NULL
    OR "mudarib_base_ratio" IS NULL
    OR ("investor_base_ratio" + "mudarib_base_ratio" = 1.0)
  );

ALTER TABLE "investor_mandate"
  ADD CONSTRAINT "early_exit_waiver_requires_ssb_ref"
  CHECK ("early_exit_waiver" = FALSE OR "ssb_waiver_resolution_ref" IS NOT NULL);
