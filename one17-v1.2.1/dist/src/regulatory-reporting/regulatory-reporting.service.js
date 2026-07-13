"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegulatoryReportingService = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const exceljs_1 = __importDefault(require("exceljs"));
const pdf_lib_1 = require("pdf-lib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const complaint_service_1 = require("../complaint/complaint.service");
const regulatory_reporting_types_1 = require("./regulatory-reporting.types");
const aum_util_1 = require("../common/aum.util");
const TEMPLATE_SOURCE_DIR = path.join(process.cwd(), '..', 'SEC Reporting Templates');
let RegulatoryReportingService = class RegulatoryReportingService {
    prisma;
    audit;
    delegation;
    workflow;
    complaints;
    constructor(prisma, audit, delegation, workflow, complaints) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.complaints = complaints;
    }
    async resolveAutoValue(sourceKey, ledgerEntityCode, periodStart, periodEnd) {
        switch (sourceKey) {
            case 'COMPLAINT_REGISTER_ROWS': {
                if (!periodStart || !periodEnd)
                    return [];
                const rows = await this.complaints.getRegisterRows(periodStart, periodEnd);
                return rows.map((r) => [r.sn, r.name, r.dateReceived, r.nature, r.status, r.dateResolved, r.remarks]);
            }
            case 'TOTAL_AUM_KOBO': {
                return (await (0, aum_util_1.computeTotalAumKobo)(this.prisma)).toString();
            }
            case 'MONTHLY_INCOME_KOBO':
            case 'MONTHLY_EXPENSE_KOBO': {
                const accountType = sourceKey === 'MONTHLY_INCOME_KOBO' ? 'INCOME' : 'EXPENSE';
                const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
                const accounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode, accountType } });
                if (accounts.length === 0)
                    return '0';
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
    async listTemplates() {
        return this.prisma.regulatorTemplate.findMany({
            where: { regulatorCode: 'SEC-NG' },
            orderBy: { templateCode: 'asc' },
            include: { _count: { select: { cellMaps: true, fieldMaps: true, filingRuns: true } } },
        });
    }
    async getFilingRun(filingRunId) {
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        const [cellMaps, fieldMaps] = await Promise.all([
            this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: run.regulatorTemplateId } }),
            this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: run.regulatorTemplateId } }),
        ]);
        return { run, cellMaps, fieldMaps };
    }
    async listFilingRuns(regulatorTemplateId) {
        return this.prisma.regulatoryFilingRun.findMany({
            where: regulatorTemplateId ? { regulatorTemplateId } : undefined,
            orderBy: { generatedAt: 'desc' },
        });
    }
    async filingCalendarStatus(asOf) {
        const calendars = await this.prisma.regulatoryFilingCalendar.findMany({
            where: { isActive: true },
            include: { regulatorTemplate: true },
        });
        const rows = [];
        for (const cal of calendars) {
            const deadline = this.currentPeriodDeadline(cal.deadlineDayOfMonth, asOf);
            let status = 'NO_FIXED_DEADLINE';
            let latestRun = null;
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
    async prepareFilingRun(input) {
        await this.assertCapability(input.preparedByUserId, 'REGULATORY_REPORTING', 'INITIATE', 'prepare a regulatory filing');
        const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: input.regulatorTemplateId } });
        const [cellMaps, fieldMaps] = await Promise.all([
            this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: template.id } }),
            this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: template.id } }),
        ]);
        if (cellMaps.length === 0 && fieldMaps.length === 0) {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" (${template.templateCode}) has no cell/field map yet — cannot prepare a filing run until it is mapped (invariant 22 AMD-12 rule).`);
        }
        const figures = {};
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
                figures: figures,
                preparedByUserId: input.preparedByUserId,
            },
        });
        await this.audit.record({ actorUserId: input.preparedByUserId, action: 'CREATE', entityType: 'regulatory_filing_run', entityId: run.id, after: { templateCode: template.templateCode } });
        return run;
    }
    async setEntryValue(filingRunId, mapId, value, actorUserId) {
        await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'enter a regulatory filing value');
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        if (run.status !== 'ENTRY_IN_PROGRESS' && run.status !== 'DRAFT') {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`Cannot edit filing run ${filingRunId}: status is ${run.status}, not editable (immutable once submitted for certification).`);
        }
        const figures = { ...run.figures, [mapId]: value };
        const updated = await this.prisma.regulatoryFilingRun.update({ where: { id: filingRunId }, data: { figures: figures } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'regulatory_filing_run', entityId: filingRunId, after: { mapId, value } });
        return updated;
    }
    async submitForCertification(filingRunId, actorUserId) {
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        if (run.status !== 'ENTRY_IN_PROGRESS' && run.status !== 'DRAFT') {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`Cannot submit filing run ${filingRunId} for certification: status is ${run.status}.`);
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
    async certify(workflowInstanceId, approverUserId) {
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
    async recordSecAcknowledgement(filingRunId, ackRef, actorUserId) {
        await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'INITIATE', 'record a SEC portal acknowledgement');
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        if (run.status !== 'CERTIFIED') {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`Cannot record a SEC acknowledgement for filing run ${filingRunId}: status is ${run.status}, not CERTIFIED.`);
        }
        const updated = await this.prisma.regulatoryFilingRun.update({
            where: { id: filingRunId },
            data: { status: 'FILED', secPortalAckRef: ackRef, submittedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'regulatory_filing_run', entityId: filingRunId, after: { status: 'FILED', secPortalAckRef: ackRef } });
        return updated;
    }
    async exportXlsx(filingRunId, actorUserId) {
        await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'VIEW', 'export a regulatory filing');
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        if (run.status !== 'CERTIFIED' && run.status !== 'FILED') {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`Cannot export filing run ${filingRunId}: status is ${run.status} — export is blocked until the run is CERTIFIED (adversarial gate).`);
        }
        const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: run.regulatorTemplateId } });
        const cellMaps = await this.prisma.templateCellMap.findMany({ where: { regulatorTemplateId: template.id } });
        if (cellMaps.length === 0) {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" has no XLSX cell map — refusing to export a blank file.`);
        }
        const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
        const workbook = new exceljs_1.default.Workbook();
        await workbook.xlsx.readFile(sourcePath);
        const figures = run.figures;
        for (const m of cellMaps) {
            const sheet = workbook.getWorksheet(m.sheetName) ?? workbook.worksheets[0];
            const value = figures[m.id];
            if (Array.isArray(value)) {
                const anchor = sheet.getCell(m.cellAddress);
                value.forEach((row, idx) => {
                    row.forEach((v, colOffset) => {
                        sheet.getCell(anchor.row + idx, anchor.col + colOffset).value = v;
                    });
                });
                continue;
            }
            const cell = sheet.getCell(m.cellAddress);
            cell.value = typeof value === 'string' && /^-?\d+$/.test(value) && m.sourceKey?.endsWith('_KOBO') ? Number(value) / 100 : value;
        }
        const buffer = await workbook.xlsx.writeBuffer();
        return Buffer.from(buffer);
    }
    async exportPdf(filingRunId, actorUserId) {
        await this.assertCapability(actorUserId, 'REGULATORY_REPORTING', 'VIEW', 'export a regulatory filing');
        const run = await this.prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: filingRunId } });
        if (run.status !== 'CERTIFIED' && run.status !== 'FILED') {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`Cannot export filing run ${filingRunId}: status is ${run.status} — export is blocked until the run is CERTIFIED (adversarial gate).`);
        }
        const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: run.regulatorTemplateId } });
        const fieldMaps = await this.prisma.templateFieldMap.findMany({ where: { regulatorTemplateId: template.id } });
        if (fieldMaps.length === 0) {
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`NOT CONFIGURED: template "${template.name}" has no PDF field map — refusing to export a blank file.`);
        }
        const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
        const bytes = fs.readFileSync(sourcePath);
        const doc = await pdf_lib_1.PDFDocument.load(bytes);
        const form = doc.getForm();
        const font = await doc.embedFont(pdf_lib_1.StandardFonts.Helvetica);
        const figures = run.figures;
        for (const m of fieldMaps) {
            const raw = figures[m.id];
            const value = typeof raw === 'string' && /^-?\d+$/.test(raw) && m.sourceKey?.endsWith('_KOBO') ? (Number(raw) / 100).toLocaleString() : String(raw ?? '');
            if (m.fieldName) {
                try {
                    const field = form.getTextField(m.fieldName);
                    field.setText(value);
                }
                catch {
                    this.drawOverlay(doc, font, m, value);
                }
            }
            else {
                this.drawOverlay(doc, font, m, value);
            }
        }
        form.flatten();
        const outBytes = await doc.save();
        return Buffer.from(outBytes);
    }
    drawOverlay(doc, font, m, value) {
        if (m.xPt == null || m.yPt == null)
            return;
        const page = doc.getPage(m.page - 1);
        page.drawText(value, { x: m.xPt, y: m.yPt, size: m.fontSizePt ?? 9, font, color: (0, pdf_lib_1.rgb)(0, 0, 0) });
    }
    async overdueFilingCount(asOf) {
        const calendars = await this.prisma.regulatoryFilingCalendar.findMany({ where: { isActive: true } });
        let overdue = 0;
        for (const cal of calendars) {
            const deadline = this.currentPeriodDeadline(cal.deadlineDayOfMonth, asOf);
            if (!deadline || asOf <= deadline)
                continue;
            const periodStart = new Date(deadline.getFullYear(), deadline.getMonth() - 1, 1);
            const filed = await this.prisma.regulatoryFilingRun.findFirst({
                where: { regulatorTemplateId: cal.regulatorTemplateId, ledgerEntityCode: cal.ledgerEntityCode, periodStart: { gte: periodStart }, status: { in: ['CERTIFIED', 'FILED'] } },
            });
            if (!filed)
                overdue++;
        }
        return overdue;
    }
    currentPeriodDeadline(dayOfMonth, asOf) {
        if (dayOfMonth == null)
            return null;
        return new Date(asOf.getFullYear(), asOf.getMonth(), dayOfMonth);
    }
    async getTemplateFileBytes(regulatorTemplateId) {
        const template = await this.prisma.regulatorTemplate.findUniqueOrThrow({ where: { id: regulatorTemplateId } });
        const sourcePath = path.join(TEMPLATE_SOURCE_DIR, template.name);
        return { bytes: fs.readFileSync(sourcePath), fileName: template.name };
    }
    async calibrateField(input) {
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
    async calibrateCell(input) {
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
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'regulatory_reporting_activity', entityId: activity, after: { functionCode, level } });
            throw new regulatory_reporting_types_1.RegulatoryReportingError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.RegulatoryReportingService = RegulatoryReportingService;
exports.RegulatoryReportingService = RegulatoryReportingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        complaint_service_1.ComplaintService])
], RegulatoryReportingService);
//# sourceMappingURL=regulatory-reporting.service.js.map