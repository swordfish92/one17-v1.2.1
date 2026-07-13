"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardComposerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const composable_metric_registry_1 = require("./composable-metric-registry");
const dashboard_composer_types_1 = require("./dashboard-composer.types");
let DashboardComposerService = class DashboardComposerService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async listComposableMetrics(actorUserId) {
        const candidates = await this.prisma.metricDefinition.findMany({
            where: { status: 'ACTIVE', requiredFunctionCode: { not: null }, composerResolverKey: { not: null } },
            orderBy: [{ metricCode: 'asc' }, { version: 'desc' }],
            distinct: ['metricCode'],
        });
        const eligible = [];
        for (const c of candidates) {
            const { eligible: can } = await this.delegation.hasCapability(actorUserId, c.requiredFunctionCode, 'VIEW');
            if (can)
                eligible.push(c);
        }
        return eligible;
    }
    async actorOrgUnitCode(actorUserId) {
        const employee = await this.prisma.employee.findFirst({ where: { appUserId: actorUserId }, select: { orgUnitCode: true } });
        return employee?.orgUnitCode ?? null;
    }
    async saveDashboard(input, actorUserId) {
        if (input.tiles.length === 0)
            throw new dashboard_composer_types_1.DashboardComposerError('A dashboard must have at least one tile.');
        const eligible = await this.listComposableMetrics(actorUserId);
        const eligibleCodes = new Set(eligible.map((m) => m.metricCode));
        for (const tile of input.tiles) {
            if (!eligibleCodes.has(tile.metricCode)) {
                await this.audit.record({ actorUserId, action: 'PERMISSION_DENIED', entityType: 'dashboard_composer_tile', entityId: tile.metricCode, after: { reason: 'metric not composer-eligible for this actor' } });
                throw new dashboard_composer_types_1.DashboardComposerError(`You do not hold VIEW authority on the capability that gates metric "${tile.metricCode}" -- it cannot be composed onto a dashboard.`);
            }
        }
        if (input.scope === 'DEPARTMENT') {
            const { eligible: canPublish } = await this.delegation.hasCapability(actorUserId, 'DASHBOARD_COMPOSER_PUBLISH', 'INITIATE');
            if (!canPublish)
                throw new dashboard_composer_types_1.DashboardComposerError('DEPARTMENT publish requires DASHBOARD_COMPOSER_PUBLISH (HoD/chief seats only).');
            const ownOrgUnit = await this.actorOrgUnitCode(actorUserId);
            if (!ownOrgUnit)
                throw new dashboard_composer_types_1.DashboardComposerError('No Employee record with an org unit is linked to your account -- cannot determine which department to publish to.');
            if (input.orgUnitCode && input.orgUnitCode !== ownOrgUnit) {
                throw new dashboard_composer_types_1.DashboardComposerError(`You may only publish a DEPARTMENT dashboard to your own org unit (${ownOrgUnit}), not ${input.orgUnitCode}.`);
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
    async listMyDashboards(actorUserId) {
        const ownOrgUnit = await this.actorOrgUnitCode(actorUserId);
        return this.prisma.savedDashboard.findMany({
            where: { OR: [{ ownerUserId: actorUserId }, ...(ownOrgUnit ? [{ scope: 'DEPARTMENT', orgUnitCode: ownOrgUnit }] : [])] },
            orderBy: { updatedAt: 'desc' },
            include: { tiles: { orderBy: { position: 'asc' } } },
        });
    }
    async getDashboard(dashboardId, viewerUserId) {
        const dashboard = await this.prisma.savedDashboard.findUniqueOrThrow({
            where: { id: dashboardId },
            include: { tiles: { orderBy: { position: 'asc' } } },
        });
        if (dashboard.scope === 'PERSONAL' && dashboard.ownerUserId !== viewerUserId) {
            throw new dashboard_composer_types_1.DashboardComposerError('This is a PERSONAL dashboard belonging to another user -- you may not view it.');
        }
        if (dashboard.scope === 'DEPARTMENT') {
            const viewerOrgUnit = await this.actorOrgUnitCode(viewerUserId);
            if (viewerOrgUnit !== dashboard.orgUnitCode) {
                throw new dashboard_composer_types_1.DashboardComposerError(`This DEPARTMENT dashboard is published to ${dashboard.orgUnitCode} -- you belong to ${viewerOrgUnit ?? 'no linked org unit'} and may not view it.`);
            }
        }
        const metricDefs = new Map();
        for (const tile of dashboard.tiles) {
            if (metricDefs.has(tile.metricCode))
                continue;
            const def = await this.prisma.metricDefinition.findFirst({ where: { metricCode: tile.metricCode, status: 'ACTIVE' }, orderBy: { version: 'desc' } });
            metricDefs.set(tile.metricCode, def ?? { requiredFunctionCode: null, composerResolverKey: null, displayLabel: tile.metricCode });
        }
        const renderedTiles = [];
        for (const tile of dashboard.tiles) {
            const def = metricDefs.get(tile.metricCode);
            const canView = def.requiredFunctionCode ? (await this.delegation.hasCapability(viewerUserId, def.requiredFunctionCode, 'VIEW')).eligible : false;
            if (!canView || !def.composerResolverKey) {
                renderedTiles.push({ ...tile, label: def.displayLabel, value: null, ragStatus: 'NOT_INSTRUMENTED', note: 'REDACTED -- you do not hold the capability this tile requires', redacted: true });
                continue;
            }
            const resolver = composable_metric_registry_1.COMPOSABLE_METRIC_REGISTRY[def.composerResolverKey];
            const resolved = resolver ? await resolver(this.prisma, viewerUserId) : { value: null, ragStatus: 'NOT_INSTRUMENTED', note: 'resolver not wired' };
            renderedTiles.push({ ...tile, label: def.displayLabel, ...resolved, redacted: false });
        }
        return { ...dashboard, tiles: renderedTiles };
    }
    async deleteDashboard(dashboardId, actorUserId) {
        const dashboard = await this.prisma.savedDashboard.findUniqueOrThrow({ where: { id: dashboardId } });
        if (dashboard.ownerUserId !== actorUserId) {
            throw new dashboard_composer_types_1.DashboardComposerError('Only the dashboard\'s own owner may delete it.');
        }
        await this.prisma.savedDashboard.delete({ where: { id: dashboardId } });
        await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'saved_dashboard', entityId: dashboardId, after: {} });
    }
};
exports.DashboardComposerService = DashboardComposerService;
exports.DashboardComposerService = DashboardComposerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], DashboardComposerService);
//# sourceMappingURL=dashboard-composer.service.js.map