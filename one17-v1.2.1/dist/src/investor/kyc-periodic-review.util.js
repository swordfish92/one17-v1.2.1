"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPeriodicReviewOverdue = isPeriodicReviewOverdue;
const FREQUENCY_MONTHS = {
    MONTHLY: 1,
    QUARTERLY: 3,
    SEMI_ANNUAL: 6,
    ANNUAL: 12,
};
function isPeriodicReviewOverdue(lastPeriodicReviewAt, onboardingUpdatedAt, periodicReviewFrequency, asOf) {
    if (!periodicReviewFrequency)
        return false;
    const months = FREQUENCY_MONTHS[periodicReviewFrequency] ?? 12;
    const baseline = lastPeriodicReviewAt ?? onboardingUpdatedAt;
    const dueDate = new Date(baseline);
    dueDate.setMonth(dueDate.getMonth() + months);
    return asOf >= dueDate;
}
//# sourceMappingURL=kyc-periodic-review.util.js.map