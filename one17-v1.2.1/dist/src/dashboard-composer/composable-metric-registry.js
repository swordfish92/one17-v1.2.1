"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPOSABLE_METRIC_REGISTRY = void 0;
exports.COMPOSABLE_METRIC_REGISTRY = {
    open_encumbrances_count: async (prisma, _viewerUserId) => {
        const count = await prisma.encumbrance.count({ where: { status: 'OPEN' } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    issued_purchase_orders_count: async (prisma, _viewerUserId) => {
        const count = await prisma.purchaseOrder.count({ where: { status: 'ISSUED' } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    payroll_runs_ytd_count: async (prisma, _viewerUserId) => {
        const count = await prisma.payrollRun.count({ where: { periodYear: new Date().getFullYear() } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    active_headcount: async (prisma, _viewerUserId) => {
        const count = await prisma.employee.count({ where: { status: 'ACTIVE' } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    open_complaints_count: async (prisma, _viewerUserId) => {
        const count = await prisma.complaint.count({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
        return { value: count, ragStatus: count > 0 ? 'AMBER' : 'GREEN' };
    },
    complaints_breached_sla_count: async (prisma, _viewerUserId) => {
        const count = await prisma.complaint.count({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] }, slaDueAt: { lt: new Date() } } });
        return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
    },
    open_screening_hits_count: async (prisma, _viewerUserId) => {
        const count = await prisma.screeningHit.count({ where: { status: 'OPEN' } });
        return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
    },
    total_investor_count: async (prisma, _viewerUserId) => {
        const count = await prisma.investor.count();
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    public_intake_pending_count: async (prisma, _viewerUserId) => {
        const count = await prisma.publicIntakeSubmission.count({ where: { status: 'PENDING' } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    accounting_periods_open_count: async (prisma, _viewerUserId) => {
        const count = await prisma.accountingPeriod.count({ where: { status: 'OPEN' } });
        return { value: count, ragStatus: 'INFORMATIONAL' };
    },
    risk_appetite_red_count: async (prisma, _viewerUserId) => {
        const latestDate = await prisma.kriReading.findFirst({ where: { isAggregate: true }, orderBy: { readingDate: 'desc' }, select: { readingDate: true } });
        if (!latestDate)
            return { value: null, ragStatus: 'NOT_INSTRUMENTED', note: 'No KRI batch has run yet' };
        const count = await prisma.kriReading.count({ where: { readingDate: latestDate.readingDate, isAggregate: true, ragStatus: 'RED' } });
        return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
    },
};
//# sourceMappingURL=composable-metric-registry.js.map