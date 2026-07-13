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
exports.AuditTrailViewerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_trail_viewer_types_1 = require("./audit-trail-viewer.types");
const SENSITIVE_KEY_PATTERN = /password|secret|token|api[_-]?key|ssn|ban(k)?[_-]?account[_-]?number|pin\b|cvv|ssb[_-]?waiver/i;
function maskSensitive(value) {
    if (value === null || value === undefined)
        return value;
    if (Array.isArray(value))
        return value.map(maskSensitive);
    if (typeof value === 'object') {
        const out = {};
        for (const [k, v] of Object.entries(value)) {
            out[k] = SENSITIVE_KEY_PATTERN.test(k) ? '***MASKED***' : maskSensitive(v);
        }
        return out;
    }
    return value;
}
let AuditTrailViewerService = class AuditTrailViewerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    buildWhere(filter) {
        return {
            ...(filter.actorUserId ? { actorUserId: filter.actorUserId } : {}),
            ...(filter.entityType ? { entityType: filter.entityType } : {}),
            ...(filter.entityId ? { entityId: filter.entityId } : {}),
            ...(filter.action ? { action: filter.action } : {}),
            ...(filter.dateFrom || filter.dateTo
                ? { occurredAt: { ...(filter.dateFrom ? { gte: filter.dateFrom } : {}), ...(filter.dateTo ? { lte: filter.dateTo } : {}) } }
                : {}),
        };
    }
    async listEvents(filter, page, pageSize) {
        const where = this.buildWhere(filter);
        const [rows, total] = await Promise.all([
            this.prisma.auditTrail.findMany({
                where,
                orderBy: [{ occurredAt: 'desc' }, { id: 'desc' }],
                skip: (page - 1) * pageSize,
                take: pageSize,
            }),
            this.prisma.auditTrail.count({ where }),
        ]);
        const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id) => !!id))];
        const actors = actorIds.length ? await this.prisma.appUser.findMany({ where: { id: { in: actorIds } }, select: { id: true, displayName: true } }) : [];
        const actorNameById = new Map(actors.map((a) => [a.id, a.displayName]));
        return {
            total,
            page,
            pageSize,
            events: rows.map((r) => ({
                id: r.id.toString(),
                occurredAt: r.occurredAt,
                actorUserId: r.actorUserId,
                actorName: r.actorUserId ? (actorNameById.get(r.actorUserId) ?? 'Unknown') : 'System',
                actorRole: r.actorRole,
                action: r.action,
                entityType: r.entityType,
                entityId: r.entityId,
                workflowStep: r.workflowStep,
                before: maskSensitive(r.before),
                after: maskSensitive(r.after),
            })),
        };
    }
    async getEntityHistory(entityType, entityId) {
        const rows = await this.prisma.auditTrail.findMany({
            where: { entityType, entityId },
            orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }],
        });
        const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id) => !!id))];
        const actors = actorIds.length ? await this.prisma.appUser.findMany({ where: { id: { in: actorIds } }, select: { id: true, displayName: true } }) : [];
        const actorNameById = new Map(actors.map((a) => [a.id, a.displayName]));
        return rows.map((r) => ({
            id: r.id.toString(),
            occurredAt: r.occurredAt,
            actorName: r.actorUserId ? (actorNameById.get(r.actorUserId) ?? 'Unknown') : 'System',
            action: r.action,
            workflowStep: r.workflowStep,
            before: maskSensitive(r.before),
            after: maskSensitive(r.after),
        }));
    }
    async getLatestIntegrityCheck() {
        const run = await this.prisma.scheduledJobRun.findFirst({
            where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY' },
            orderBy: { scheduledFor: 'desc' },
        });
        if (!run)
            return { status: 'NEVER_RUN' };
        const summary = run.resultSummary;
        return {
            status: run.status,
            scheduledFor: run.scheduledFor,
            completedAt: run.completedAt,
            ok: summary?.ok ?? null,
            rowsChecked: summary?.rowsChecked ?? null,
            flaggedCount: summary?.failures?.length ?? null,
        };
    }
    async exportAsReportRun(filter, actorUserId) {
        const where = this.buildWhere(filter);
        const rows = await this.prisma.auditTrail.findMany({ where, orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }], take: 10_000 });
        if (rows.length === 0)
            throw new audit_trail_viewer_types_1.AuditTrailViewerError('No audit events match the given filter — nothing to export.');
        const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id) => !!id))];
        const actors = actorIds.length ? await this.prisma.appUser.findMany({ where: { id: { in: actorIds } }, select: { id: true, displayName: true } }) : [];
        const actorNameById = new Map(actors.map((a) => [a.id, a.displayName]));
        const figures = rows.map((r) => ({
            occurredAt: r.occurredAt.toISOString(),
            actorName: r.actorUserId ? (actorNameById.get(r.actorUserId) ?? 'Unknown') : 'System',
            actorRole: r.actorRole,
            action: r.action,
            entityType: r.entityType,
            entityId: r.entityId,
            before: maskSensitive(r.before),
            after: maskSensitive(r.after),
        }));
        const company = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
        const frameworkMap = await this.prisma.accountingFrameworkMap.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } })
            ?? await this.prisma.accountingFrameworkMap.create({ data: { version: 1, description: 'Audit export placeholder framework map', status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: actorUserId } });
        const template = await this.prisma.statementTemplate.findFirst({ where: { statementCode: 'AUDIT_TRAIL_EXPORT' } })
            ?? await this.prisma.statementTemplate.create({ data: { basis: 'IFRS', statementCode: 'AUDIT_TRAIL_EXPORT', name: 'Audit Trail Export', status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: actorUserId } });
        const oldestEvent = rows[0].occurredAt;
        const newestEvent = rows[rows.length - 1].occurredAt;
        const reportRun = await this.prisma.reportRun.create({
            data: {
                ledgerEntityCode: company.code,
                basis: 'IFRS',
                periodStart: oldestEvent,
                periodEnd: newestEvent,
                frameworkMapId: frameworkMap.id,
                statementTemplateId: template.id,
                figures: figures,
                generatedByUserId: actorUserId,
            },
        });
        return { reportRunId: reportRun.id, eventCount: rows.length };
    }
};
exports.AuditTrailViewerService = AuditTrailViewerService;
exports.AuditTrailViewerService = AuditTrailViewerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditTrailViewerService);
//# sourceMappingURL=audit-trail-viewer.service.js.map