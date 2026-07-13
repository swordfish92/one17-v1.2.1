import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditTrailViewerError } from './audit-trail-viewer.types';

// Invariant 59 (CHECK15, CEO finding: "the audit LOG is M1-grade; the
// VIEWER does not exist -- AUDIT_TRAIL_VIEW is held by 10 roles and
// reachable by none"). This service computes nothing the audit log
// doesn't already contain -- it's a read shell over AuditTrail plus the
// latest AUDIT_INTEGRITY_NIGHTLY scheduled_job_run, exactly the "the page
// computes nothing it doesn't have to" discipline every other CHECK13-15
// consolidated screen has followed. No write methods exist here at all,
// by design -- the audit trail is insert-only at the DB engine and this
// viewer must never even attempt otherwise.
const SENSITIVE_KEY_PATTERN = /password|secret|token|api[_-]?key|ssn|ban(k)?[_-]?account[_-]?number|pin\b|cvv|ssb[_-]?waiver/i;

function maskSensitive(value: unknown): unknown {
  if (value === null || value === undefined) return value;
  if (Array.isArray(value)) return value.map(maskSensitive);
  if (typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = SENSITIVE_KEY_PATTERN.test(k) ? '***MASKED***' : maskSensitive(v);
    }
    return out;
  }
  return value;
}

export interface AuditEventFilter {
  actorUserId?: string;
  entityType?: string;
  entityId?: string;
  action?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

@Injectable()
export class AuditTrailViewerService {
  constructor(private readonly prisma: PrismaService) {}

  private buildWhere(filter: AuditEventFilter) {
    return {
      ...(filter.actorUserId ? { actorUserId: filter.actorUserId } : {}),
      ...(filter.entityType ? { entityType: filter.entityType } : {}),
      ...(filter.entityId ? { entityId: filter.entityId } : {}),
      ...(filter.action ? { action: filter.action as any } : {}),
      ...(filter.dateFrom || filter.dateTo
        ? { occurredAt: { ...(filter.dateFrom ? { gte: filter.dateFrom } : {}), ...(filter.dateTo ? { lte: filter.dateTo } : {}) } }
        : {}),
    };
  }

  async listEvents(filter: AuditEventFilter, page: number, pageSize: number) {
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
    const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id): id is string => !!id))];
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

  // "The audit analogue of getTrail" -- every event for ONE record, in
  // sequence, linked from record screens where cheap (invariant 59's own
  // phrasing). No pagination: an entity's own history is bounded by that
  // entity's real lifecycle, not the whole platform's event volume.
  async getEntityHistory(entityType: string, entityId: string) {
    const rows = await this.prisma.auditTrail.findMany({
      where: { entityType, entityId },
      orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }],
    });
    const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id): id is string => !!id))];
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

  // The latest AUDIT_INTEGRITY_NIGHTLY run's own resultSummary (written by
  // SchedulerService, which stores whatever AuditService.
  // verifyChainIntegrity() returned) -- read directly, never recomputed
  // here. Honestly renders whatever the real chain state is: PASS, or the
  // real flagged-row count -- including the known historical Date-hashing
  // rows in this dev database (M1_EVIDENCE.md D10/D11), which per RUNBOOK.md
  // never migrate to a fresh production install and so never appear there.
  async getLatestIntegrityCheck() {
    const run = await this.prisma.scheduledJobRun.findFirst({
      where: { jobCode: 'AUDIT_INTEGRITY_NIGHTLY' },
      orderBy: { scheduledFor: 'desc' },
    });
    if (!run) return { status: 'NEVER_RUN' as const };
    const summary = run.resultSummary as { ok?: boolean; rowsChecked?: number; failures?: { id: string; occurredAt: string; reason: string }[] } | null;
    return {
      status: run.status,
      scheduledFor: run.scheduledFor,
      completedAt: run.completedAt,
      ok: summary?.ok ?? null,
      rowsChecked: summary?.rowsChecked ?? null,
      flaggedCount: summary?.failures?.length ?? null,
    };
  }

  // Invariant 59: "an export is itself a report_run so auditor extracts
  // are evidenced" -- reuses the same generic ReportRun-as-snapshot-
  // container pattern BudgetReviewPackService.generatePack established
  // (get-or-create a StatementTemplate, get-or-create a framework map,
  // store the filtered rows as `figures`). The export itself is subject
  // to the SAME insert-only/immutable report_run trigger every other
  // snapshot in this codebase gets -- an auditor's extract can never be
  // silently altered after the fact either.
  async exportAsReportRun(filter: AuditEventFilter, actorUserId: string) {
    const where = this.buildWhere(filter);
    const rows = await this.prisma.auditTrail.findMany({ where, orderBy: [{ occurredAt: 'asc' }, { id: 'asc' }], take: 10_000 });
    if (rows.length === 0) throw new AuditTrailViewerError('No audit events match the given filter — nothing to export.');

    const actorIds = [...new Set(rows.map((r) => r.actorUserId).filter((id): id is string => !!id))];
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
        figures: figures as unknown as object,
        generatedByUserId: actorUserId,
      },
    });

    return { reportRunId: reportRun.id, eventCount: rows.length };
  }
}
