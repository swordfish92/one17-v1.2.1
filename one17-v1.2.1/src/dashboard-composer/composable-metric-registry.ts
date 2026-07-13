import { PrismaService } from '../prisma/prisma.service';
import { ResolvedTileValue } from './dashboard-composer.types';

// Invariant 73(a) (CHECK27): the Composer's own resolver whitelist -- a
// small, explicit, hand-maintained map from metricCode to a real live
// query, never a free-form query the composing seat could steer. Same
// shape as One17AIService.LIVE_QUERY_RESOLVERS (src/ai/one17-ai.service.ts)
// and DataPointCatalog's sourceType/sourceRef precedent -- "config carries
// the vocabulary (MetricDefinition row), code resolves the value" is the
// standing pattern for every catalog on this platform (kri-roster.ts is
// the original precedent). Every resolver key here MUST have a matching
// MetricDefinition.composerResolverKey row (seed.ts) or it is simply never
// reachable by a composing seat -- there is no other way to invoke one.
//
// Deliberately spans SEVERAL different departments/capabilities (Company
// Finance, Procurement, HR/Payroll, Compliance x2, Screening, BD, Risk) so
// the RBAC-filtered picker has real, provable separation to demonstrate --
// invariant 73(a)'s own adversarial example is "a Compliance head never
// even sees payroll metrics," which requires actual payroll AND actual
// compliance metrics to exist side by side in this registry.
//
// Invariant 54(d)'s scope-resolution seam ("no new staff-facing list/read
// endpoint may assume VIEW = all rows implicitly") + the CEO's 73(a)
// clarification ("query time" scoping, keyed to the CURRENT VIEWER, never
// the composer's own scope): every resolver below takes viewerUserId as its
// second argument -- DashboardComposerService.getDashboard always passes
// the person actually looking at the tile, never dashboard.ownerUserId.
// Two of the eleven (Encumbrance.requestedByUserId, PurchaseOrder.
// createdByUserId) carry a real per-officer attribution FK and are noted as
// OWN-scope-ready; the seam still resolves to ENTERPRISE for every seat
// today because Layer 5 Wave 1 only covers client-facing WM/RM roles (54c)
// -- none of Procurement/HR/Compliance/BD/Risk are in that cohort yet, so
// this is honest scaffolding, not fabricated enforcement. The other nine
// have no owning-officer column on their underlying table at all (these are
// department-wide operational counts, not a "my own" concept), so
// viewerUserId is threaded through but genuinely unused by the query --
// each says so explicitly rather than silently ignoring the seam.
export const COMPOSABLE_METRIC_REGISTRY: Record<string, (prisma: PrismaService, viewerUserId: string) => Promise<ResolvedTileValue>> = {
  open_encumbrances_count: async (prisma, _viewerUserId) => {
    // OWN-scope-ready: Encumbrance.requestedByUserId is a real per-officer
    // FK. Enterprise-wide today (Procurement is not a Layer-5 Wave-1 role).
    const count = await prisma.encumbrance.count({ where: { status: 'OPEN' } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  issued_purchase_orders_count: async (prisma, _viewerUserId) => {
    // OWN-scope-ready: PurchaseOrder.createdByUserId is a real per-officer
    // FK. Enterprise-wide today (Procurement is not a Layer-5 Wave-1 role).
    const count = await prisma.purchaseOrder.count({ where: { status: 'ISSUED' } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  payroll_runs_ytd_count: async (prisma, _viewerUserId) => {
    // No owning-officer column on PayrollRun -- a department-wide count,
    // not an OWN-scope concept. Enterprise-wide by nature, not by omission.
    const count = await prisma.payrollRun.count({ where: { periodYear: new Date().getFullYear() } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  active_headcount: async (prisma, _viewerUserId) => {
    // No owning-officer column on Employee -- enterprise-wide by nature.
    const count = await prisma.employee.count({ where: { status: 'ACTIVE' } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  open_complaints_count: async (prisma, _viewerUserId) => {
    // No owning-officer column relevant here -- enterprise-wide by nature.
    const count = await prisma.complaint.count({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
    return { value: count, ragStatus: count > 0 ? 'AMBER' : 'GREEN' };
  },
  complaints_breached_sla_count: async (prisma, _viewerUserId) => {
    const count = await prisma.complaint.count({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] }, slaDueAt: { lt: new Date() } } });
    return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
  },
  open_screening_hits_count: async (prisma, _viewerUserId) => {
    // No owning-officer column on ScreeningHit -- enterprise-wide by nature.
    const count = await prisma.screeningHit.count({ where: { status: 'OPEN' } });
    return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
  },
  total_investor_count: async (prisma, _viewerUserId) => {
    // Same "no BD-attribution FK exists yet on Investor" gap BdDashboardService
    // already documents (src/dashboard/bd-dashboard.service.ts) -- enterprise-wide
    // for the identical reason, not a separate decision.
    const count = await prisma.investor.count();
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  public_intake_pending_count: async (prisma, _viewerUserId) => {
    // Same "no BD-attribution FK" gap as pendingIntake in BdDashboardService.
    const count = await prisma.publicIntakeSubmission.count({ where: { status: 'PENDING' } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  accounting_periods_open_count: async (prisma, _viewerUserId) => {
    // No owning-officer column on AccountingPeriod -- enterprise-wide by nature.
    const count = await prisma.accountingPeriod.count({ where: { status: 'OPEN' } });
    return { value: count, ragStatus: 'INFORMATIONAL' };
  },
  risk_appetite_red_count: async (prisma, _viewerUserId) => {
    // No owning-officer column on KriReading -- enterprise-wide by nature
    // (and CRAO/RISK_DEPT are 54(c) structural exemptions, always enterprise).
    const latestDate = await prisma.kriReading.findFirst({ where: { isAggregate: true }, orderBy: { readingDate: 'desc' }, select: { readingDate: true } });
    if (!latestDate) return { value: null, ragStatus: 'NOT_INSTRUMENTED', note: 'No KRI batch has run yet' };
    const count = await prisma.kriReading.count({ where: { readingDate: latestDate.readingDate, isAggregate: true, ragStatus: 'RED' } });
    return { value: count, ragStatus: count > 0 ? 'RED' : 'GREEN' };
  },
};
