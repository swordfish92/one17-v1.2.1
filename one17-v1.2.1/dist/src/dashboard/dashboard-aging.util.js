"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketByAge = bucketByAge;
exports.daysBetween = daysBetween;
function bucketByAge(items) {
    const buckets = {
        '0-30': { kobo: 0n, count: 0 },
        '31-60': { kobo: 0n, count: 0 },
        '61-90': { kobo: 0n, count: 0 },
        '90+': { kobo: 0n, count: 0 },
    };
    for (const item of items) {
        if (item.ageDays < 0)
            continue;
        const key = item.ageDays <= 30 ? '0-30' : item.ageDays <= 60 ? '31-60' : item.ageDays <= 90 ? '61-90' : '90+';
        buckets[key].kobo += item.amountKobo;
        buckets[key].count += 1;
    }
    return Object.keys(buckets).map((bucket) => ({
        bucket,
        amountKobo: buckets[bucket].kobo.toString(),
        count: buckets[bucket].count,
    }));
}
function daysBetween(from, to) {
    return Math.floor((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
}
//# sourceMappingURL=dashboard-aging.util.js.map