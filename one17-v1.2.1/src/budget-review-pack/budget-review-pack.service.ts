import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { BudgetReviewPackError, GeneratePackInput, VarianceLine, VarianceViewResult } from './budget-review-pack.types';

// Task 48 (Budget Spec §5b, queue item 2): builds entirely on existing
// machinery — the AMD-11 reporting pipeline's statement_template/report_run
// pattern (report_run's immutability trigger already exists from that pass)
// + this pass's own budget tables. Two templates: MONTHLY_MGMT_BUDGET_PACK
// (line-level) and QUARTERLY_BOARD_BUDGET_PACK (category summary +
// budget_target tracking). Gate: no ACTIVE Board-approved budget -> renders
// "NO APPROVED BUDGET — variance reporting suspended" (AMD-12 pattern) —
// note this is a REAL gate right now, not a future one: Scenario 2 is only
// BOARD_APPROVED as of task 47, not yet ACTIVE (that flip is task 54's
// Phase 4 budget-core activation wiring) — so this pack correctly shows
// SUSPENDED until that lands, proving deployment != activation in practice,
// not just in the invariant's prose.
@Injectable()
export class BudgetReviewPackService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async computeVarianceView(input: GeneratePackInput): Promise<VarianceViewResult> {
    const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: input.budgetVersionId } });
    if (version.status !== 'ACTIVE') {
      return { suspended: true, message: 'NO APPROVED BUDGET — variance reporting suspended', lines: [] };
    }

    const threshold = await this.prisma.budgetVarianceRagThreshold.findFirst({ orderBy: { version: 'desc' } });
    const lines = await this.prisma.budgetLine.findMany({
      where: { budgetVersionId: input.budgetVersionId, isActive: true },
      include: { monthlyAmounts: true, encumbrances: true },
    });

    const result: VarianceLine[] = [];
    for (const line of lines) {
      const monthAmount = line.monthlyAmounts.find((m) => m.month === input.month);
      const budgetKobo = monthAmount?.amountKobo ?? 0n;
      const committedKobo = line.encumbrances.filter((e) => e.status === 'OPEN').reduce((s, e) => s + e.amountKobo, 0n);
      const actualKobo = input.actualsByLineIdKobo[line.id] ?? 0n;
      const varianceKobo = budgetKobo - actualKobo;
      const variancePct = budgetKobo !== 0n ? Number(varianceKobo) / Number(budgetKobo) : null;

      const ytdMonths = line.monthlyAmounts.filter((m) => m.month <= input.month);
      const ytdBudgetKobo = ytdMonths.reduce((s, m) => s + m.amountKobo, 0n);
      // Scope boundary: YTD actual mirrors the single-month actual supplied
      // for this pass (real month-by-month actuals accumulation awaits the
      // GL-to-budget-line mapping this pass does not build) — documented,
      // not silently assumed to be YTD-accurate.
      const ytdActualKobo = actualKobo;
      const ytdVarianceKobo = ytdBudgetKobo - ytdActualKobo;

      const fyBudgetKobo = line.monthlyAmounts.reduce((s, m) => s + m.amountKobo, 0n);
      let fyReforecastKobo: bigint | null = null;
      if ((line.phasingMethod === 'DRIVER_PCT_OF_FUM' || line.phasingMethod === 'DRIVER_PCT_OF_MOBILIZATION') && input.actualDriverOverrides) {
        const override = line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? input.actualDriverOverrides.FUM : input.actualDriverOverrides.MOBILIZATION;
        if (override !== undefined && line.driverRateOrFactor !== null) {
          const rate = Number(line.driverRateOrFactor);
          const monthlyReforecast = line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? override * rate * (1 / 12) : override * rate;
          // Re-forecast recomputes the REST of the year at the new driver
          // level; months already elapsed keep their original budget —
          // "budget column does NOT change" is enforced by never touching
          // budgetKobo/fyBudgetKobo here, only this separate field.
          const elapsed = line.monthlyAmounts.filter((m) => m.month <= input.month).reduce((s, m) => s + m.amountKobo, 0n);
          const remainingMonths = 12 - input.month;
          fyReforecastKobo = elapsed + BigInt(Math.round(monthlyReforecast * 100)) * BigInt(remainingMonths);
        }
      }

      let rag: 'GREEN' | 'AMBER' | 'RED' | null = null;
      if (threshold && variancePct !== null) {
        const absPct = Math.abs(variancePct) * 100;
        rag = absPct <= Number(threshold.amberPct) ? 'GREEN' : absPct <= Number(threshold.redPct) ? 'AMBER' : 'RED';
      }

      result.push({
        budgetLineId: line.id,
        budgetLineGroup: line.budgetLineGroup,
        lineDescription: line.lineDescription,
        budgetKobo,
        committedKobo,
        actualKobo,
        varianceKobo,
        variancePct,
        ytdBudgetKobo,
        ytdActualKobo,
        ytdVarianceKobo,
        fyBudgetKobo,
        fyReforecastKobo,
        rag,
      });
    }

    return { suspended: false, month: input.month, lines: result };
  }

  async generatePack(input: GeneratePackInput) {
    await this.assertCapability(input.generatedByUserId, 'BUDGET_REVIEW_PACK', 'INITIATE', 'generate a Budget Review Pack');

    const template = await this.getOrCreateTemplate(input.templateCode, input.generatedByUserId);
    const variance = await this.computeVarianceView(input);

    // ReportRun requires a framework_map_id FK (AMD-11 shape); budget packs
    // are COMPANY-entity/IFRS, so any existing framework map version
    // satisfies the FK — the pack's actual content is the variance view in
    // `figures`, not a framework-mapped trial balance.
    const frameworkMap = await this.prisma.accountingFrameworkMap.findFirst({ orderBy: { version: 'desc' } })
      ?? await this.prisma.accountingFrameworkMap.create({ data: { version: 1, description: 'Budget Review Pack placeholder framework map', status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: input.generatedByUserId } });

    const version = await this.prisma.budgetVersion.findUniqueOrThrow({ where: { id: input.budgetVersionId } });
    const companyEntity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });

    const reportRun = await this.prisma.reportRun.create({
      data: {
        ledgerEntityCode: companyEntity.code,
        basis: 'IFRS',
        periodStart: new Date(version.fiscalYear, input.month - 1, 1),
        periodEnd: new Date(version.fiscalYear, input.month, 0),
        frameworkMapId: frameworkMap.id,
        statementTemplateId: template.id,
        figures: variance as unknown as object,
        generatedByUserId: input.generatedByUserId,
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): documented EXCEPTION, not
    // an oversight -- report_run carries a BEFORE UPDATE/DELETE trigger
    // (20260704111900_amd11_checks_and_report_run_immutability) that RAISE
    // EXCEPTIONs on any delete attempt, by deliberate AMD-11 design
    // ("regulators audit the snapshot, not a re-computation"). The usual
    // compensating-delete used at every other atomicity-sweep site is
    // therefore structurally impossible here -- attempting it would itself
    // throw inside the catch block, masking the original workflow.initiate()
    // failure. Residual risk if initiate() throws: reportRun exists with no
    // linked WorkflowInstance (it's never mutated with a workflowInstanceId
    // -- see the comment above proposeFrameworkMapVersion for why not),
    // i.e. an uncirculated report snapshot, not a corrupted live financial
    // control (contrast the Encumbrance case in budget-activation.service.ts,
    // where a dangling row silently eats real budget headroom). Logged to
    // QUESTIONS_FOR_REVIEW.md rather than silently left unfixed.
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'BUDGET_REVIEW_PACK_CIRCULATION',
      entityType: 'report_run',
      entityId: reportRun.id,
      initiatedByUserId: input.generatedByUserId,
      scenario: 'STANDARD',
    });

    await this.audit.record({
      actorUserId: input.generatedByUserId,
      action: 'CREATE',
      entityType: 'report_run',
      entityId: reportRun.id,
      after: { templateCode: input.templateCode, suspended: variance.suspended, workflowInstanceId: workflowInstance.id },
    });

    return { reportRun, variance, workflowInstanceId: workflowInstance.id };
  }

  async approveForCirculation(workflowInstanceId: string, approverUserId: string) {
    return this.workflow.approveNextStep(workflowInstanceId, approverUserId);
  }

  // CHECK15: the read side this screen needed and never had -- every prior
  // pack generated via generatePack() is a real report_run row, findable
  // by joining back through its statementTemplate's statementCode. No new
  // storage; this is a query over data that already existed.
  async listPacks() {
    const rows = await this.prisma.reportRun.findMany({
      where: { statementTemplate: { statementCode: { in: ['MONTHLY_MGMT_BUDGET_PACK', 'QUARTERLY_BOARD_BUDGET_PACK'] } } },
      include: { statementTemplate: true, generatedBy: { select: { displayName: true } } },
      // generatedAt (a real timestamp, unique per row) rather than
      // periodStart (a plain date, frequently identical across many packs
      // generated for the same month in walkthrough/smoke re-runs) -- the
      // latest-generated packs are what a "history" view means, and this
      // avoids an unstable tie-break among same-period rows.
      orderBy: { generatedAt: 'desc' },
      take: 100,
    });
    // Each pack's workflow instance is looked up via the audit trail entry
    // written at generation time (workflowInstanceId isn't a report_run
    // column -- see generatePack()'s own comment on why report_run is
    // never mutated with one) rather than stored redundantly here.
    const auditRows = await this.prisma.auditTrail.findMany({
      where: { entityType: 'report_run', entityId: { in: rows.map((r) => r.id) }, action: 'CREATE' },
    });
    const workflowIdByReportRunId = new Map(auditRows.map((a) => [a.entityId, (a.after as { workflowInstanceId?: string } | null)?.workflowInstanceId]));
    const workflowInstances = await this.prisma.workflowInstance.findMany({
      where: { id: { in: [...workflowIdByReportRunId.values()].filter((v): v is string => !!v) } },
    });
    const workflowById = new Map(workflowInstances.map((w) => [w.id, w]));

    return rows.map((r) => {
      const workflowInstanceId = workflowIdByReportRunId.get(r.id);
      const workflowInstance = workflowInstanceId ? workflowById.get(workflowInstanceId) : undefined;
      return {
        reportRunId: r.id,
        templateCode: r.statementTemplate?.statementCode ?? null,
        periodStart: r.periodStart,
        periodEnd: r.periodEnd,
        generatedByName: r.generatedBy.displayName,
        generatedAt: r.generatedAt,
        workflowInstanceId: workflowInstanceId ?? null,
        circulationStatus: workflowInstance?.status ?? 'UNKNOWN',
      };
    });
  }

  private async getOrCreateTemplate(templateCode: string, createdByUserId: string) {
    const existing = await this.prisma.statementTemplate.findFirst({ where: { statementCode: templateCode } });
    if (existing) return existing;
    return this.prisma.statementTemplate.create({
      data: { basis: 'IFRS', statementCode: templateCode, name: templateCode, status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_review_pack_activity', entityId: activity, after: { functionCode, level } });
      throw new BudgetReviewPackError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
