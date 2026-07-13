-- Line-level data sanity, not a posting rule (that's Phase 2's cross-line
-- balance validation): a single line is a debit OR a credit, never both,
-- and never negative. CLAUDE.md invariant #2 (BIGINT kobo) already covers
-- the type; this covers the sign/shape.

ALTER TABLE "journal_entry_line"
  ADD CONSTRAINT "journal_line_debit_credit_shape"
  CHECK (
    "debit_kobo" >= 0
    AND "credit_kobo" >= 0
    AND NOT ("debit_kobo" > 0 AND "credit_kobo" > 0)
  );
