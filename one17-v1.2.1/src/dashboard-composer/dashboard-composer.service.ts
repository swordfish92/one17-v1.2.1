import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { COMPOSABLE_METRIC_REGISTRY } from './composable-metric-registry';
import { DashboardComposerError, SaveDashboardInput } from './dashboard-composer.types';

// Invariant 73(a) (CHECK27): self-service departmental dashboards. The
// core discipline this service exists to enforce: a metric's RBAC gate is
// checked at BOTH compose time (the picker only shows what the composer
// may compose) AND render time (a saved/shared tile is re-checked against
// the VIEWER's own capability every time it's rendered -- never trusted
// from what was true when it was saved). No approval workflow (a view
// moves no money, per the CEO's own wording) -- every create/publish is
// audit-logged instead.
@Injectable()
export class DashboardComposerService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  // Compose-time picker filter -- only ACTIVE, composer-eligible
  // (requiredFunctionCode + composerResolverKey both set) MetricDefinition
  // rows the actor holds VIEW on. This is the exact same filter
  // saveDashboard() below re-applies server-side to every tile -- the
  // picker being RBAC-filtered is a UX convenience, never the actual gate.
  async listComposableMetrics(actorUserId: string) {
    const candidates = await this.prisma.metricDefinition.findMany({
      where: { status: 'ACTIVE', requiredFunctionCode: { not: null }, composerResolverKey: { not: null } },
      orderBy: [{ metricCode: 'asc' }, { version: 'desc' }],
      distinct: ['metricCode'],
    });
    const eligible: typeof candidates = [];
    for (const c of candidates) {
      const { eligible: can } = await this.delegation.hasCapability(actorUserId, c.requiredFunctionCode!, 'VIEW');
      if (can) eligible.push(c);
    }
    return eligible;
  }

  private async actorOrgUnitCode(actorUserId: string): Promise<string | null> {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId }, select: { orgUnitCode: true } });
    return employee?.orgUnitCode ?? null;
  }

  async saveDashboard(input: SaveDashboardInput, actorUserId: string) {
    if (input.tiles.length === 0) throw new DashboardComposerError('A dashboard must have at least one tile.');

    // Never trust the client's own picker filtering -- re-validate every
    // tile against the actor's REAL, current capability set. A tampered
    // request naming a metric the actor cannot view is refused outright,
    // not silently dropped (invariant 73(e)'s own adversarial case:
    // "cannot compose a tile for an unheld capability").
    const eligible = await this.listComposableMetrics(actorUserId);
    const eligibleCodes = new Set(eligible.map((m) => m.metricCode));
    for (const tile of input.tiles) {
      if (!eligibleCodes.has(tile.metricCode)) {
        await this.audit.record({ actorUserId, action: 'PERMISSION_DENIED', entityType: 'dashboard_composer_tile', entityId: tile.metricCode, after: { reason: 'metric not composer-eligible for this actor' } });
        throw new DashboardComposerError(`You do not hold VIEW authority on the capability that gates metric "${tile.metricCode}" -- it cannot be composed onto a dashboard.`);
      }
    }

    if (input.scope === 'DEPARTMENT') {
      const { eligible: canPublish } = await this.delegation.hasCapability(actorUserId, 'DASHBOARD_COMPOSER_PUBLISH', 'INITIATE');
      if (!canPublish) throw new DashboardComposerError('DEPARTMENT publish requires DASHBOARD_COMPOSER_PUBLISH (HoD/chief seats only).');
      const ownOrgUnit = await this.actorOrgUnitCode(actorUserId);
      if (!ownOrgUnit) throw new DashboardComposerError('No Employee record with an org unit is linked to your account -- cannot determine which department to publish to.');
      if (input.orgUnitCode && input.orgUnitCode !== ownOrgUnit) {
        throw new DashboardComposerError(`You may only publish a DEPARTMENT dashboard to your own org unit (${ownOrgUnit}), not ${input.orgUnitCode}.`);
      }
      input.orgUnitCode = ownOrgUnit;
    }

    const dashboard = await this.prisma.savedDashboard.create({
      data: {
        name: input.name,
        scope: input.scope,
        ownerUserId: actorUserId,
        orgUnitCode: input.scope === 'DEPARTMENT' ? input.orgUnitCode : null,
        tiles: { create: input.tiles.map((t) => ({ metricCode: t.metricCode, presentation: t.presentation, position: t.position })) },
      },
      include: { tiles: true },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'saved_dashboard', entityId: dashboard.id, after: { name: dashboard.name, scope: dashboard.scope, orgUnitCode: dashboard.orgUnitCode, tileCount: dashboard.tiles.length } });
    return dashboard;
  }

  // My Workspace + hub findability: every PERSONAL dashboard the actor
  // owns, plus every DEPARTMENT dashboard published to the actor's own
  // org unit (never another department's).
  async listMyDashboards(actorUserId: string) {
    const ownOrgUnit = await this.actorOrgUnitCode(actorUserId);
    return this.prisma.savedDashboard.findMany({
      where: { OR: [{ ownerUserId: actorUserId }, ...(ownOrgUnit ? [{ scope: 'DEPARTMENT' as const, orgUnitCode: ownOrgUnit }] : [])] },
      orderBy: { updatedAt: 'desc' },
      include: { tiles: { orderBy: { position: 'asc' } } },
    });
  }

  // The render-time gate (invariant 73(e)'s own adversarial case: "a
  // shared dashboard viewer sees only own-scope rows" / "render-time
  // re-check defeats a tampered saved config"). A DEPARTMENT dashboard
  // from a DIFFERENT org unit is refused outright; a PERSONAL dashboard
  // belonging to someone else is refused outright. Within a dashboard the
  // viewer IS entitled to open, each tile is re-checked individually --
  // a tile whose gating capability the viewer no longer holds (or never
  // held, if the saved config were somehow tampered with) renders as a
  // redacted placeholder, never the real figure, and the dashboard as a
  // whole still renders (a shared dashboard is not all-or-nothing).
  async getDashboard(dashboardId: string, viewerUserId: string) {
    const dashboard = await this.prisma.savedDashboard.findUniqueOrThrow({
      where: { id: dashboardId },
      include: { tiles: { orderBy: { position: 'asc' } } },
    });
    if (dashboard.scope === 'PERSONAL' && dashboard.ownerUserId !== viewerUserId) {
      throw new DashboardComposerError('This is a PERSONAL dashboard belonging to another user -- you may not view it.');
    }
    if (dashboard.scope === 'DEPARTMENT') {
      const viewerOrgUnit = await this.actorOrgUnitCode(viewerUserId);
      if (viewerOrgUnit !== dashboard.orgUnitCode) {
        throw new DashboardComposerError(`This DEPARTMENT dashboard is published to ${dashboard.orgUnitCode} -- you belong to ${viewerOrgUnit ?? 'no linked org unit'} and may not view it.`);
      }
    }

    const metricDefs = new Map<string, { requiredFunctionCode: string | null; composerResolverKey: string | null; displayLabel: string }>();
    for (const tile of dashboard.tiles) {
      if (metricDefs.has(tile.metricCode)) continue;
      const def = await this.prisma.metricDefinition.findFirst({ where: { metricCode: tile.metricCode, status: 'ACTIVE' }, orderBy: { version: 'desc' } });
      metricDefs.set(tile.metricCode, def ?? { requiredFunctionCode: null, composerResolverKey: null, displayLabel: tile.metricCode });
    }

    const renderedTiles: Array<(typeof dashboard.tiles)[number] & { label: string; value: unknown; ragStatus?: string; note?: string; redacted: boolean }> = [];
    for (const tile of dashboard.tiles) {
      const def = metricDefs.get(tile.metricCode)!;
      const canView = def.requiredFunctionCode ? (await this.delegation.hasCapability(viewerUserId, def.requiredFunctionCode, 'VIEW')).eligible : false;
      if (!canView || !def.composerResolverKey) {
        renderedTiles.push({ ...tile, label: def.displayLabel, value: null, ragStatus: 'NOT_INSTRUMENTED' as const, note: 'REDACTED -- you do not hold the capability this tile requires', redacted: true });
        continue;
      }
      // Invariant 54(d) scope-resolution seam + 73(a)'s "query time, keyed
      // to the CURRENT VIEWER, never the composer's scope": viewerUserId is
      // the person actually rendering this tile right now, never
      // dashboard.ownerUserId -- see composable-metric-registry.ts's own
      // header comment for what each resolver does with it today.
      const resolver = COMPOSABLE_METRIC_REGISTRY[def.composerResolverKey];
      const resolved = resolver ? await resolver(this.prisma, viewerUserId) : { value: null, ragStatus: 'NOT_INSTRUMENTED' as const, note: 'resolver not wired' };
      renderedTiles.push({ ...tile, label: def.displayLabel, ...resolved, redacted: false });
    }
    return { ...dashboard, tiles: renderedTiles };
  }

  async deleteDashboard(dashboardId: string, actorUserId: string) {
    const dashboard = await this.prisma.savedDashboard.findUniqueOrThrow({ where: { id: dashboardId } });
    if (dashboard.ownerUserId !== actorUserId) {
      throw new DashboardComposerError('Only the dashboard\'s own owner may delete it.');
    }
    await this.prisma.savedDashboard.delete({ where: { id: dashboardId } });
    await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'saved_dashboard', entityId: dashboardId, after: {} });
  }
}
