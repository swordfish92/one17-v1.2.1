// Check-5B item 1: structured cadences, not raw cron strings — every
// cadence this platform's specs actually call for (CLAUDE.md's "daily
// accrual 23:00 WAT, KRIs 18:00", the Data Dictionary's "stress models
// monthly ... reverse stress quarterly") reduces to one of these three
// shapes. Plain Date arithmetic over a closed set of shapes is fully
// testable without a cron-parsing dependency; SchedulerService computes
// "most recent scheduled slot at or before now" directly from this, which
// is exactly what catch-up detection needs.
export type Cadence =
  | { type: 'DAILY'; hour: number; minute: number }
  | { type: 'MONTHLY'; dayOfMonth: number; hour: number; minute: number }
  | { type: 'QUARTERLY'; hour: number; minute: number } // 1st of Jan/Apr/Jul/Oct
  // Invariant 55(c2)(iii): per-entry calendar reminder lead times can be as
  // fine as 15 minutes (a meeting starting soon) -- DAILY's fixed-hour slot
  // cannot serve that, so this is the one addition to the closed set since
  // Check-5B, added for the Staff Calendar's sync + reminder sweeps.
  | { type: 'INTERVAL_MINUTES'; minutes: number };

// Thrown by a job's run() to report a batch of independent sub-runs where
// some succeeded and some failed (e.g. the monthly stress sweep) — carries
// the full breakdown so it survives into ScheduledJobRun.resultSummary even
// though the overall run is recorded FAILED (any sub-failure alerts).
export class PartialJobFailure extends Error {
  constructor(
    message: string,
    public readonly summary: Record<string, unknown>,
  ) {
    super(message);
    this.name = 'PartialJobFailure';
  }
}

export interface ScheduledJobConfig {
  code: string;
  description: string;
  cadence: Cadence;
  run: (scheduledFor: Date) => Promise<Record<string, unknown>>;
}
