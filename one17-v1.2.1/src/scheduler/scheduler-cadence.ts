import { Cadence } from './scheduler.types';

// Pure function, no DB/clock side effects — the most recent slot a cadence
// was due at or before `now`. DAILY/MONTHLY/QUARTERLY all reduce to "find
// the candidate slot in the current period, step back one period if that
// candidate is still in the future relative to now."
export function mostRecentScheduledSlot(cadence: Cadence, now: Date): Date {
  if (cadence.type === 'DAILY') {
    const candidate = new Date(now);
    candidate.setHours(cadence.hour, cadence.minute, 0, 0);
    if (candidate > now) candidate.setDate(candidate.getDate() - 1);
    return candidate;
  }

  if (cadence.type === 'MONTHLY') {
    const candidate = new Date(now.getFullYear(), now.getMonth(), cadence.dayOfMonth, cadence.hour, cadence.minute, 0, 0);
    if (candidate > now) candidate.setMonth(candidate.getMonth() - 1);
    return candidate;
  }

  if (cadence.type === 'INTERVAL_MINUTES') {
    const ms = cadence.minutes * 60_000;
    return new Date(Math.floor(now.getTime() / ms) * ms);
  }

  // QUARTERLY: 1st of Jan/Apr/Jul/Oct.
  const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
  const candidate = new Date(now.getFullYear(), quarterStartMonth, 1, cadence.hour, cadence.minute, 0, 0);
  if (candidate > now) candidate.setMonth(candidate.getMonth() - 3);
  return candidate;
}
