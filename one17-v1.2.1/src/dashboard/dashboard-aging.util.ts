// Invariant 58: neither an AR nor an AP aging engine existed anywhere in
// this codebase before CHECK14 (confirmed by search — the CEO dashboard's
// own RECEIVABLES_AGEING panel has sat NOT_YET_INSTRUMENTED since CHECK5).
// This is the one shared bucketing routine both new dashboards' aging
// tiles call, so there is exactly one 0-30/31-60/61-90/90+ definition in
// the platform, not three slightly-different ones.
export interface AgingBucketRow {
  bucket: '0-30' | '31-60' | '61-90' | '90+';
  amountKobo: string;
  count: number;
}

export function bucketByAge(items: { ageDays: number; amountKobo: bigint }[]): AgingBucketRow[] {
  const buckets: Record<AgingBucketRow['bucket'], { kobo: bigint; count: number }> = {
    '0-30': { kobo: 0n, count: 0 },
    '31-60': { kobo: 0n, count: 0 },
    '61-90': { kobo: 0n, count: 0 },
    '90+': { kobo: 0n, count: 0 },
  };
  for (const item of items) {
    if (item.ageDays < 0) continue; // not yet due -- excluded from an overdue-aging schedule, not bucketed as "current"
    const key: AgingBucketRow['bucket'] = item.ageDays <= 30 ? '0-30' : item.ageDays <= 60 ? '31-60' : item.ageDays <= 90 ? '61-90' : '90+';
    buckets[key].kobo += item.amountKobo;
    buckets[key].count += 1;
  }
  return (Object.keys(buckets) as AgingBucketRow['bucket'][]).map((bucket) => ({
    bucket,
    amountKobo: buckets[bucket].kobo.toString(),
    count: buckets[bucket].count,
  }));
}

export function daysBetween(from: Date, to: Date): number {
  return Math.floor((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
}
