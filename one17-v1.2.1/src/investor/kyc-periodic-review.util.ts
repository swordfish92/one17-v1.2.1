// Invariant 51(b-vii) (CHECK13): shared date logic between the KRI-05
// compute function and the compliance sweep that actually assigns Tasks --
// one function, not two copies that could drift. periodicReviewFrequency is
// a free string ('MONTHLY'|'QUARTERLY'|'SEMI_ANNUAL'|'ANNUAL', enforced
// client-side only, not a DB enum), so this resolves it defensively:
// anything unrecognized falls back to ANNUAL rather than throwing, since a
// KRI/sweep must never crash on a stale or hand-typed value.
const FREQUENCY_MONTHS: Record<string, number> = {
  MONTHLY: 1,
  QUARTERLY: 3,
  SEMI_ANNUAL: 6,
  ANNUAL: 12,
};

export function isPeriodicReviewOverdue(
  lastPeriodicReviewAt: Date | null,
  onboardingUpdatedAt: Date,
  periodicReviewFrequency: string | null,
  asOf: Date,
): boolean {
  if (!periodicReviewFrequency) return false;
  const months = FREQUENCY_MONTHS[periodicReviewFrequency] ?? 12;
  // Approximation, documented: onboarding_case.updated_at is the closest
  // proxy this schema has for "when the case was last substantively
  // touched" -- there is no dedicated onboardingCompletedAt timestamp. A
  // genuinely never-reviewed case's due date is measured from here.
  const baseline = lastPeriodicReviewAt ?? onboardingUpdatedAt;
  const dueDate = new Date(baseline);
  dueDate.setMonth(dueDate.getMonth() + months);
  return asOf >= dueDate;
}
