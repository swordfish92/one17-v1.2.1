-- Hand-authored: Prisma's schema DSL has no cross-column/range CHECK
-- attribute in this version, so these are added as raw SQL rather than
-- generated. AMD-01/02: pool-level PSR constants must be a valid share
-- (0 < share < 1) and the surplus split must sum to exactly 1.0 — enforced
-- at the database engine, not just in ParameterService, per the charter's
-- "enforced through database constraints ... not just documentation" ethos.
-- NULL is allowed through every check: these columns are nullable because
-- they only apply to PSR_WATERFALL products (UNIT_NAV products leave them
-- unset), and "column IS NULL" always makes a CHECK pass in Postgres.

ALTER TABLE "product_parameters"
  ADD CONSTRAINT "psr_pool_mudarib_share_range"
  CHECK ("psr_pool_mudarib_share" IS NULL OR ("psr_pool_mudarib_share" > 0 AND "psr_pool_mudarib_share" < 1));

ALTER TABLE "product_parameters"
  ADD CONSTRAINT "surplus_shares_sum_to_one"
  CHECK (
    "surplus_investor_share" IS NULL
    OR "surplus_mudarib_share" IS NULL
    OR ("surplus_investor_share" + "surplus_mudarib_share" = 1.0)
  );
