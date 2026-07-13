import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';
import ExcelJS from 'exceljs';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { ComplaintService } from '../complaint/complaint.service';
import { RegulatoryReportingError } from './regulatory-reporting.types';
import { computeTotalAumKobo } from '../common/aum.util';

// Resolved from process.cwd(), not __dirname: __dirname's depth relative to
// the "One17 Enterprise Resource Platform" root varies with how this file is
// run (tsx against source vs nest's compiled dist/ output, which mirrors an
// extra src/ nesting level) — every entry point (npm scripts, tsx scripts)
// is always launched with cwd = platform-app/, so that's the only stable
// anchor.
const TEMPLATE_SOURCE_DIR = path.join(process.cwd(), '..', 'SEC Reporting Templates');

// CHECK5 item 2 (invariant 22, spec §2). Controllers stay thin — every rule
// here (immutability post-certification, unmapped-template refusal,
// AUTO-value resolution) lives in this service, matching the codebase's
// standing discipline.
@Injectable()
export class RegulatoryReportingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly complaints: ComplaintService,
  ) {}

  // ==========================================================================
  // AUTO value resolution — the finite, code-reviewed key vocabulary.
  // periodStart/periodEnd are only used by keys whose value is genuinely
  // period-scoped (currently just COMPLAINT_REGISTER_ROWS); every other key
  // keeps its existing "current month" behavior unchanged.
  // ==========================================================================
  private async resolveAutoValue(
    sourceKey: string | null,
    ledgerEntityCode: string,
    periodStart?: Date,
    periodEnd?: Date,
  ): Promise<string | number | unknown[][] | null> {
    switch (sourceKey) {
      case 'COMPLAINT_REGISTER_ROWS': {
        if (!periodStart || !periodEnd) return [];
        // Stored as an array of TUPLES, not objects: Postgres jsonb does
        // NOT preserve object key order (it reorders by length then
        // alphabetically) but always preserves array element order —
        // storing objects here silently scrambled the column mapping on
        // export. Column order matches the template's own header row
        // exactly (S/N, NAME, DATE RECEIVED, NATURE, STATUS, DATE
        // RESOLVED, REMARKS).
        const rows = await this.complaints.getRegisterRows(periodStart, periodEnd);
        return rows.map((r) => [r.sn, r.name, r.dateReceived, r.nature, r.status, r.dateResolved, r.remarks]);
      }
      case 'TOTAL_AUM_KOBO': {
        // Invariant 43(a): canonical AUM (product_account + ND Mandate),
        // same fix as CEO/Board dashboard -- a regulator-facing figure must
        // not undercount either.
        return (await computeTotalAumKobo(this.prisma)).toString();
      }
      case 'MONTHLY_INCOME_KOBO':
      case 'MONTHLY_EXPENSE_KOBO': {
        const accountType = sourceKey === 'MONTHLY_INCOME_KOBO' ? 'INCOME' : 'EXPENSE';
        const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        const accounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode, accountType } });
        if (accounts.length === 0) return '0';
        const lines = await this.prisma.journalEntryLine.findMany({
          where: { accountId: { in: accounts.map((a) => a.id) }, journalEntry: { entryDate: { gte: monthStart } } },
        });
        const natural = accountType === 'INCOME' ? 1 : -1;
        return lines.reduce((s, l) => s + BigInt(natural) * (l.creditKobo - l.debitKobo), 0n).toString();
      }
      case 'EXPENSE_RATIO_PCT': {
        const aum = await this.resolveAutoValue('TOTAL_AUM_KOBO', ledgerEntityCode);
        const expense = await this.resolveAutoValue('MONTHLY_EXPENSE_KOBO', ledgerEntityCode);
        const aumN = Number(aum ?? 0);
        return aumN > 0 ? (Number(expense ?? 0) / aumN) * 100 : 0;
      }
      case 'FUND_MANAGER_NAME':
        return 'One17 Capital Limited';
      case 'REPORTING_ENTITY_EMAIL':
        return 'info@one17capital.com';
      default:
        return null;
    }
  }

  // ==========================================================================
  // Registry / filing lifecycle
  // ==========================================================================
  async listTemplates() {
    return this.prisma.regulatorTemplate.findMany({
      where: { regulatorCode: 'SEC-NG' },
      orderBy: { templateCode: 'asc' },
      include: { _count: { select: { cellMaps: true, fieldMaps: true, filingRuns: true } } },
    });
  }

  async getFilingRun(filingRunId: string) {
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    const [cellMaps, fieldMaps] = await Promise.all([
      this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: run.regulatorTemplateId } }),
      this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: run.regulatorTemplateId } }),
    ]);
    return { run, cellMaps, fieldMaps };
  }

  async listFilingRuns(regulatorTemplateId?: string) {
    return this.prisma.regulatoryFilingRun.findMany({
      where: regulatorTemplateId ? { regulatorTemplateId } : undefined,
      orderBy: { generatedAt: 'desc' },
    });
  }

  // Feeds the Compliance dashboard's filing-calendar queue view (spec item
  // 2's "wired to ... the Compliance dashboard") — same overdue logic as
  // overdueFilingCount()/KRI-CPL-01, but returns the per-template detail
  // rather than a bare count.
  async filingCalendarStatus(asOf: Date) {
    const calendars = await this.prisma.regulatoryFilingCalendar.findMany({
      where: { isActive: true },
      include: { regulatorTemplate: true },
    });
    const rows: {
      templateCode: string; templateName: string; ledgerEntityCode: string; frequency: string;
      deadline: Date | null; status: 'ON_TRACK' | 'OVERDUE' | 'NO_FIXED_DEADLINE'; latestRunStatus: string | null;
    }[] = [];
    for (const cal of calendars) {
      const deadline = this.currentPeriodDeadline(cal.deadlineDayOfMonth, asOf);
      let status: 'ON_TRACK' | 'OVERDUE' | 'NO_FIXED_DEADLINE' = 'NO_FIXED_DEADLINE';
      let latestRun: Awaited<ReturnType<typeof this.prisma.regulatoryFilingRun.findFirst>> = null;
      if (deadline) {
        const periodStart = new Date(deadline.getFullYear(), deadline.getMonth() - 1, 1);
        latestRun = await this.prisma.regulatoryFilingRun.findFirst({
          where: { regulatorTemplateId: cal.regulatorTemplateId, ledgerEntityCode: cal.ledgerEntityCode, periodStart: { gte: periodStart } },
          orderBy: { generatedAt: 'desc' },
        });
        const filed = !!latestRun && (latestRun.status === 'CERTIFIED' || latestRun.status === 'FILED');
        status = filed ? 'ON_TRACK' : asOf > deadline ? 'OVERDUE' : 'ON_TRACK';
      }
      rows.push({
        templateCode: cal.regulatorTemplate.templateCode,
        templateName: cal.regulatorTemplate.name,
        ledgerEntityCode: cal.ledgerEntityCode,
        frequency: cal.frequency,
        deadline,
        status,
        latestRunStatus: latestRun?.status ?? null,
      });
    }
    return rows;
  }

  async prepareFilingRun(input: { regulatorTemplateId: string; ledgerEntityCode: string; periodStart: Date; periodEnd: Date; preparedByUserId: string }) {
    await this.assertCapability(input.preparedByUserId, 'REGULATORY_REPORTING', 'INITIATE', 'prepare a regulatory filing');

    const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: input.regulatorTemplateId } });
    const [cellMaps, fieldMaps] = await Promise.all([
      this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: template.id } }),
      this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: template.id } }),
    ]);
    if (cellMaps.length === 0 && fieldMaps.length === 0) {
      throw new RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" (${template.templateCode}) has no cell/field map yet — cannot prepare a filing run until it is mapped (invariant 22 AMD-12 rule).`);
    }

    const figures: Record<string, unknown> = {};
    for (const m of cellMaps) {
      figures[m.id] = m.cellClass === 'AUTO' ? await this.resolveAutoValue(m.sourceKey, input.ledgerEntityCode, input.periodStart, input.periodEnd) : m.cellClass === 'STATIC' ? m.staticValue : null;
    }
    for (const m of fieldMaps) {
      figures[m.id] = m.cellClass === 'AUTO' ? await this.resolveAutoValue(m.sourceKey, input.ledgerEntityCode, input.periodStart, input.periodEnd) : m.cellClass === 'STATIC' ? m.staticValue : null;
    }

    const run = await this.prisma.regulatoryFilingRun.create({
      data: {
        regulatorTemplateId: template.id,
        ledgerEntityCode: input.ledgerEntityCode,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        status: 'ENTRY_IN_PROGRESS',
        figures: figures as any,
        preparedByUserId: input.preparedByUserId,
      },
    });
    await this.audit.record({ actorUserId: input.preparedByUserId, action: 'CREATE', entityType: 'regulatory_filing_run', entityId: run.id, after: { templateCode: template.templateCode } });
    return run;
  }

  async setEntryValue(filingRunId: string, mapId: string, value: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'enter a regulatory filing value');
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    if (run.status !== 'ENTRY_IN_PROGRESS' && run.status !== 'DRAFT') {
      throw new RegulatoryReportingError(`Cannot edit filing run ${filingRunId}: status is ${run.status}, not editable (immutable once submitted for certification).`);
    }
    const figures = { ...(run.figures as Record<string, unknown>), [mapId]: value };
    const updated = await this.prisma.regulatoryFilingRun.update({ where: { id: filingRunId }, data: { figures: figures as any } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'regulatory_filing_run', entityId: filingRunId, after: { mapId, value } });
    return updated;
  }

  async submitForCertification(filingRunId: string, actorUserId: string) {
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    if (run.status !== 'ENTRY_IN_PROGRESS' && run.status !== 'DRAFT') {
      throw new RegulatoryReportingError(`Cannot submit filing run ${filingRunId} for certification: status is ${run.status}.`);
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'REGULATORY_FILING_CERTIFICATION',
      entityType: 'regulatory_filing_run',
      entityId: filingRunId,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.regulatoryFilingRun.update({
      where: { id: filingRunId },
      data: { status: 'SUBMITTED_FOR_CERTIFICATION', workflowInstanceId: workflowInstance.id },
    });
    return { run: updated, workflowInstance };
  }

  // "MD certifies (signature blocks = workflow approvals; names/dates
  // auto-filled from approval records)" — the approval IS the certification
  // signature; this method is the one place that flips CERTIFIED.
  async certify(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      const run = await this.prisma.regulatoryFilingRun.update({
        where: { id: updated.entityId },
        data: { status: 'CERTIFIED', certifiedByUserId: approverUserId },
      });
      await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'regulatory_filing_run', entityId: run.id, after: { status: 'CERTIFIED' } });
    }
    return updated;
  }

  async recordSecAcknowledgement(filingRunId: string, ackRef: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'record a SEC portal acknowledgement');
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    if (run.status !== 'CERTIFIED') {
      throw new RegulatoryReportingError(`Cannot record a SEC acknowledgement for filing run ${filingRunId}: status is ${run.status}, not CERTIFIED.`);
    }
    const updated = await this.prisma.regulatoryFilingRun.update({
      where: { id: filingRunId },
      data: { status: 'FILED', secPortalAckRef: ackRef, submittedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'regulatory_filing_run', entityId: filingRunId, after: { status: 'FILED', secPortalAckRef: ackRef } });
    return updated;
  }

  // ==========================================================================
  // Renderers — XLSX fill-in-place (exceljs) and PDF overlay (pdf-lib).
  // Adversarial: "uncertified export blocked" — only CERTIFIED/FILED runs
  // may export the final styled file.
  // ==========================================================================
  async exportXlsx(filingRunId: string, actorUserId: string): Promise<Buffer> {
    await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'VIEW', 'export a regulatory filing');
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    if (run.status !== 'CERTIFIED' && run.status !== 'FILED') {
      throw new RegulatoryReportingError(`Cannot export filing run ${filingRunId}: status is ${run.status} — export is blocked until the run is CERTIFIED (adversarial gate).`);
    }
    const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: run.regulatorTemplateId } });
    const cellMaps = await this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: template.id } });
    if (cellMaps.length === 0) {
      throw new RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" has no XLSX cell map — refusing to export a blank file.`);
    }
    const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(sourcePath);
    const figures = run.figures as Record<string, unknown>;
    for (const m of cellMaps) {
      const sheet = workbook.getWorksheet(m.sheetName) ?? workbook.worksheets[0];
      const value = figures[m.id];
      // Invariant 28(f): a register-shaped AUTO key (COMPLAINT_REGISTER_ROWS)
      // resolves to an array of TUPLES (never objects — jsonb doesn't
      // preserve object key order, only array order) — spill it as a block
      // of rows starting at the mapped cell (the anchor), one tuple per
      // row, one tuple element per column, rather than writing one value.
      if (Array.isArray(value)) {
        const anchor = sheet.getCell(m.cellAddress);
        value.forEach((row: unknown[], idx: number) => {
          row.forEach((v, colOffset) => {
            sheet.getCell(anchor.row + idx, anchor.col + colOffset).value = v as any;
          });
        });
        continue;
      }
      const cell = sheet.getCell(m.cellAddress);
      // Kobo-denominated AUTO values render in Naira on the exported form —
      // display-only conversion, never used in calculations upstream.
      cell.value = typeof value === 'string' && /^-?\d+$/.test(value) && m.sourceKey?.endsWith('_KOBO') ? Number(value) / 100 : (value as any);
    }
    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }

  async exportPdf(filingRunId: string, actorUserId: string): Promise<Buffer> {
    await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'VIEW', 'export a regulatory filing');
    const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
    if (run.status !== 'CERTIFIED' && run.status !== 'FILED') {
      throw new RegulatoryReportingError(`Cannot export filing run ${filingRunId}: status is ${run.status} — export is blocked until the run is CERTIFIED (adversarial gate).`);
    }
    const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: run.regulatorTemplateId } });
    const fieldMaps = await this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: template.id } });
    if (fieldMaps.length === 0) {
      throw new RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" has no PDF field map — refusing to export a blank file.`);
    }
    const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
    const bytes = fs.readFileSync(sourcePath);
    const doc = await PDFDocument.load(bytes);
    const form = doc.getForm();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const figures = run.figures as Record<string, unknown>;

    for (const m of fieldMaps) {
      const raw = figures[m.id];
      const value = typeof raw === 'string' && /^-?\d+$/.test(raw) && m.sourceKey?.endsWith('_KOBO') ? (Number(raw) / 100).toLocaleString() : String(raw ?? '');
      if (m.fieldName) {
        try {
          const field = form.getTextField(m.fieldName);
          field.setText(value);
        } catch {
          // Field named in config doesn't exist on this PDF version — fall
          // through to coordinate overlay rather than silently dropping it.
          this.drawOverlay(doc, font, m, value);
        }
      } else {
        this.drawOverlay(doc, font, m, value);
      }
    }
    form.flatten();
    const outBytes = await doc.save();
    return Buffer.from(outBytes);
  }

  private drawOverlay(doc: PDFDocument, font: any, m: { page: number; xPt: number | null; yPt: number | null; fontSizePt: number | null }, value: string) {
    if (m.xPt == null || m.yPt == null) return;
    const page = doc.getPage(m.page - 1);
    page.drawText(value, { x: m.xPt, y: m.yPt, size: m.fontSizePt ?? 9, font, color: rgb(0, 0, 0) });
  }

  // ==========================================================================
  // Filing calendar — feeds KRI-CPL-01 (see kri-engine.service.ts).
  // ==========================================================================
  async overdueFilingCount(asOf: Date): Promise<number> {
    const calendars = await this.prisma.regulatoryFilingCalendar.findMany({ where: { isActive: true } });
    let overdue = 0;
    for (const cal of calendars) {
      const deadline = this.currentPeriodDeadline(cal.deadlineDayOfMonth, asOf);
      if (!deadline || asOf <= deadline) continue;
      const periodStart = new Date(deadline.getFullYear(), deadline.getMonth() - 1, 1);
      const filed = await this.prisma.regulatoryFilingRun.findFirst({
        where: { regulatorTemplateId: cal.regulatorTemplateId, ledgerEntityCode: cal.ledgerEntityCode, periodStart: { gte: periodStart }, status: { in: ['CERTIFIED', 'FILED'] } },
      });
      if (!filed) overdue++;
    }
    return overdue;
  }

  private currentPeriodDeadline(dayOfMonth: number | null, asOf: Date): Date | null {
    if (dayOfMonth == null) return null;
    return new Date(asOf.getFullYear(), asOf.getMonth(), dayOfMonth);
  }

  // ==========================================================================
  // Click-to-place calibration (spec §2.1) — the ops UI renders the raw PDF
  // natively in the browser and posts back the x/y the user clicked; this
  // just persists it as a new TemplateFieldMap row. Coordinate math (page
  // pixel -> PDF point space) happens client-side where the render scale is
  // known; the server only ever stores PDF point coordinates.
  // ==========================================================================
  async getTemplateFileBytes(regulatorTemplateId: string): Promise<{ bytes: Buffer; fileName: string }> {
    const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: regulatorTemplateId } });
    const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
    return { bytes: fs.readFileSync(sourcePath), fileName: template.name };
  }

  async calibrateField(input: { regulatorTemplateId: string; page: number; xPt: number; yPt: number; label: string; cellClass: 'AUTO' | 'ENTRY' | 'STATIC'; sourceKey?: string; staticValue?: string; actorUserId: string }) {
    await this.assertCapability(input.actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'calibrate a PDF field map');
    const created = await this.prisma.templateFieldMap.create({
      data: {
        regulatorTemplateId: input.regulatorTemplateId,
        page: input.page,
        xPt: input.xPt,
        yPt: input.yPt,
        label: input.label,
        cellClass: input.cellClass,
        sourceKey: input.sourceKey ?? null,
        staticValue: input.staticValue ?? null,
      },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'CREATE', entityType: 'template_field_map', entityId: created.id, after: { regulatorTemplateId: input.regulatorTemplateId, page: input.page, xPt: input.xPt, yPt: input.yPt } });
    return created;
  }

  // Invariant 52(e) (CHECK12): "the template registry + calibrator extends
  // beyond PDF to XLSX ... map fields by sheet+cell reference ... same
  // AUTO/ENTRY/STATIC classes and source-key catalog." exportXlsx has
  // always been able to READ cell maps and fill a workbook from them --
  // the two templates regulatory-reporting-seed.run.ts demo-calibrated
  // prove the render path works. What never existed is a GOVERNED write
  // path: those two templates' TemplateCellMap rows were hand-inserted by
  // a developer running that one-off script with direct Prisma access
  // (grep confirms it's the only place this table was ever written to
  // before this method), not through any capability-gated, audited,
  // ops-UI-reachable action -- exactly calibrateField's PDF counterpart,
  // which this method now gives XLSX templates too.
  async calibrateCell(input: { regulatorTemplateId: string; sheetName: string; cellAddress: string; label: string; cellClass: 'AUTO' | 'ENTRY' | 'STATIC'; sourceKey?: string; staticValue?: string; actorUserId: string }) {
    await this.assertCapability(input.actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'calibrate an XLSX cell map');
    const created = await this.prisma.templateCellMap.create({
      data: {
        regulatorTemplateId: input.regulatorTemplateId,
        sheetName: input.sheetName,
        cellAddress: input.cellAddress,
        label: input.label,
        cellClass: input.cellClass,
        sourceKey: input.sourceKey ?? null,
        staticValue: input.staticValue ?? null,
      },
    });
    await this.audit.record({ actorUserId: input.actorUserId, action: 'CREATE', entityType: 'template_cell_map', entityId: created.id, after: { regulatorTemplateId: input.regulatorTemplateId, sheetName: input.sheetName, cellAddress: input.cellAddress } });
    return created;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'regulatory_reporting_activity', entityId: activity, after: { functionCode, level } });
      throw new RegulatoryReportingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
