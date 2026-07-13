"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostRecentScheduledSlot = mostRecentScheduledSlot;
function mostRecentScheduledSlot(cadence, now) {
    if (cadence.type === 'DAILY') {
        const candidate = new Date(now);
        candidate.setHours(cadence.hour, cadence.minute, 0, 0);
        if (candidate > now)
            candidate.setDate(candidate.getDate() - 1);
        return candidate;
    }
    if (cadence.type === 'MONTHLY') {
        const candidate = new Date(now.getFullYear(), now.getMonth(), cadence.dayOfMonth, cadence.hour, cadence.minute, 0, 0);
        if (candidate > now)
            candidate.setMonth(candidate.getMonth() - 1);
        return candidate;
    }
    if (cadence.type === 'INTERVAL_MINUTES') {
        const ms = cadence.minutes * 60_000;
        return new Date(Math.floor(now.getTime() / ms) * ms);
    }
    const quarterStartMonth = Math.floor(now.getMonth() / 3) * 3;
    const candidate = new Date(now.getFullYear(), quarterStartMonth, 1, cadence.hour, cadence.minute, 0, 0);
    if (candidate > now)
        candidate.setMonth(candidate.getMonth() - 3);
    return candidate;
}
//# sourceMappingURL=scheduler-cadence.js.map