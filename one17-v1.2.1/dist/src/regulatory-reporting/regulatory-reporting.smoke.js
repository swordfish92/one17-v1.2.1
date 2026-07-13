"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const exceljs_1 = __importDefault(require("exceljs"));
const pdf_lib_1 = require("pdf-lib");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const document_service_1 = require("../document/document.service");
const screening_gateway_service_1 = require("../screening-gateway/screening-gateway.service");
const kri_engine_service_1 = require("../kri-engine/kri-engine.service");
const investor_service_1 = require("../investor/investor.service");
const portal_auth_service_1 = require("../portal-auth/portal-auth.service");
const regulatory_reporting_service_1 = require("./regulatory-reporting.service");
const workflow_inbox_service_1 = require("../ops-api/workflow-inbox.service");
const wm_service_1 = require("../wm/wm.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const ledger_service_1 = require("../ledger/ledger.service");
const pms_service_1 = require("../pms/pms.service");
const notification_service_1 = require("../notification/notification.service");
const attendance_service_1 = require("../attendance/attendance.service");
const complaint_service_1 = require("../complaint/complaint.service");
const aum_util_1 = require("../common/aum.util");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const complaints = new complaint_service_1.ComplaintService(prisma, audit, delegation);
    const svc = new regulatory_reporting_service_1.RegulatoryReportingService(prisma, audit, delegation, workflow, complaints);
    const kriEngine = new kri_engine_service_1.KriEngineService(prisma, audit);
    const investorService = new investor_service_1.InvestorService(prisma, audit, workflow, delegation, new portal_auth_service_1.PortalAuthService(prisma, audit), new screening_gateway_service_1.ScreeningGatewayService(prisma, audit, delegation, workflow, new notification_service_1.NotificationService(prisma), new document_service_1.DocumentService(prisma, delegation, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const wm = new wm_service_1.WmService(prisma, audit, delegation, workflow, eventJournal);
    const notification = new notification_service_1.NotificationService(prisma);
    const attendance = new attendance_service_1.AttendanceService(prisma, audit, delegation, workflow, notification);
    const pms = new pms_service_1.PmsService(prisma, audit, delegation, workflow, ledger, attendance);
    const marketing = {};
    const workflowInbox = new workflow_inbox_service_1.WorkflowInboxService(prisma, workflow, investorService, svc, wm, pms, marketing, {}, {}, {}, {}, {}, {}, {}, ledger, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {});
    const co = await prisma.appUser.create({ data: { email: `rr-co-${RUN}@one17.test`, displayName: 'rr-co' } });
    await rbac.assignRole({ userId: co.id, roleCode: 'COMPLIANCE' });
    const md = await prisma.appUser.create({ data: { email: `rr-md-${RUN}@one17.test`, displayName: 'rr-md' } });
    await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
    const outsider = await prisma.appUser.create({ data: { email: `rr-outsider-${RUN}@one17.test`, displayName: 'rr-outsider' } });
    const company = await prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });
    const templates = await svc.listTemplates();
    if (templates.length === 9)
        ok('all 9 SEC-NG regulator_template originals registered');
    else
        fail(`expected 9 templates, got ${templates.length}`, templates.map((t) => t.templateCode));
    const fmanOriginal = templates.find((t) => t.templateCode === 'A-FMAN');
    const calibTemplate = await prisma.regulatorTemplate.create({
        data: { regulatorCode: 'SEC-NG', templateCode: `A-FMAN-CALIB-SMOKE-${RUN}`, name: fmanOriginal.name, filingFrequency: 'MONTHLY', version: 1, status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: co.id },
    });
    try {
        await expectReject('an outsider cannot calibrate an XLSX cell map', () => svc.calibrateCell({ regulatorTemplateId: calibTemplate.id, sheetName: 'Sheet1', cellAddress: 'C9', label: 'Email', cellClass: 'AUTO', sourceKey: 'REPORTING_ENTITY_EMAIL', actorUserId: outsider.id }));
        const calibratedCell = await svc.calibrateCell({ regulatorTemplateId: calibTemplate.id, sheetName: 'Sheet1', cellAddress: 'C9', label: 'Email', cellClass: 'AUTO', sourceKey: 'REPORTING_ENTITY_EMAIL', actorUserId: co.id });
        if (calibratedCell.sheetName === 'Sheet1' && calibratedCell.cellAddress === 'C9' && calibratedCell.cellClass === 'AUTO' && calibratedCell.sourceKey === 'REPORTING_ENTITY_EMAIL') {
            ok('calibrateCell persists sheetName/cellAddress/cellClass/sourceKey exactly as submitted -- the write side TemplateCellMap has needed since exportXlsx could read it');
        }
        else {
            fail('calibrateCell did not persist the expected fields', calibratedCell);
        }
        const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'template_cell_map', entityId: calibratedCell.id }, orderBy: { occurredAt: 'desc' } });
        if (auditRow)
            ok('calibrateCell writes an audit_trail row, same as every other governed write in this codebase');
        else
            fail('calibrateCell did not write an audit_trail row', {});
        const calibRun = await svc.prepareFilingRun({ regulatorTemplateId: calibTemplate.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
        const { workflowInstance: calibWf } = await svc.submitForCertification(calibRun.id, co.id);
        await svc.certify(calibWf.id, md.id);
        const calibXlsx = await svc.exportXlsx(calibRun.id, co.id);
        const exportedCalibWb = new exceljs_1.default.Workbook();
        await exportedCalibWb.xlsx.load(calibXlsx);
        const calibFigures = calibRun.figures;
        const exportedCalibCell = exportedCalibWb.worksheets[0].getCell('C9').value;
        if (String(exportedCalibCell) === String(calibFigures[calibratedCell.id])) {
            ok(`round-trip: a cell map written through calibrateCell renders correctly on export (C9 = "${exportedCalibCell}") -- the governed write path feeds the same render path the pre-seeded templates use`);
        }
        else {
            fail('round-trip export did not reflect the newly calibrated cell', { exportedCalibCell, figureValue: calibFigures[calibratedCell.id] });
        }
        await prisma.regulatoryFilingRun.delete({ where: { id: calibRun.id } });
        await prisma.templateCellMap.delete({ where: { id: calibratedCell.id } });
    }
    finally {
        await prisma.templateCellMap.deleteMany({ where: { regulatorTemplateId: calibTemplate.id } });
        await prisma.regulatoryFilingRun.deleteMany({ where: { regulatorTemplateId: calibTemplate.id } });
        await prisma.regulatorTemplate.delete({ where: { id: calibTemplate.id } });
    }
    const unmapped = templates.find((t) => t.templateCode === 'C-AML-CFT');
    await expectReject('prepareFilingRun on an unmapped template names the gap', () => svc.prepareFilingRun({ regulatorTemplateId: unmapped.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id }));
    const fman = templates.find((t) => t.templateCode === 'A-FMAN');
    await expectReject('outsider (no REGULATORY_REPORTING capability) cannot prepare a filing', () => svc.prepareFilingRun({ regulatorTemplateId: fman.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: outsider.id }));
    const run = await svc.prepareFilingRun({ regulatorTemplateId: fman.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
    if (run.status === 'ENTRY_IN_PROGRESS')
        ok('A-FMAN filing run prepared, status ENTRY_IN_PROGRESS');
    else
        fail(`expected ENTRY_IN_PROGRESS, got ${run.status}`);
    const { cellMaps } = await svc.getFilingRun(run.id);
    const aumMap = cellMaps.find((m) => m.sourceKey === 'TOTAL_AUM_KOBO');
    const figures = run.figures;
    const liveAum = await (0, aum_util_1.computeTotalAumKobo)(prisma);
    if (String(figures[aumMap.id]) === liveAum.toString()) {
        ok(`AUTO cell TOTAL_AUM_KOBO matches the live canonical AUM query to the kobo (${figures[aumMap.id]})`);
    }
    else {
        fail(`AUTO cell mismatch: run has ${figures[aumMap.id]}, live query gives ${liveAum}`);
    }
    const monthMap = cellMaps.find((m) => m.cellAddress === 'C11');
    await svc.setEntryValue(run.id, monthMap.id, 'June 2026', co.id);
    ok('ENTRY cell (Reporting Month) set while ENTRY_IN_PROGRESS');
    await expectReject('export blocked before certification', () => svc.exportXlsx(run.id, co.id));
    const { workflowInstance } = await svc.submitForCertification(run.id, co.id);
    await expectReject('ENTRY edit blocked once SUBMITTED_FOR_CERTIFICATION', () => svc.setEntryValue(run.id, monthMap.id, 'July 2026', co.id));
    await expectReject('preparer (CO) cannot certify their own filing (maker != checker)', () => svc.certify(workflowInstance.id, co.id));
    const certified = await svc.certify(workflowInstance.id, md.id);
    const runAfterCertify = await prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: run.id } });
    if (certified.status === 'APPROVED' && runAfterCertify.status === 'CERTIFIED' && runAfterCertify.certifiedByUserId === md.id) {
        ok('MD certifies -> workflow APPROVED, filing run CERTIFIED, certifiedByUserId = MD');
    }
    else {
        fail('certification did not flip the filing run to CERTIFIED', { workflowStatus: certified.status, runStatus: runAfterCertify.status });
    }
    const xlsxBuffer = await svc.exportXlsx(run.id, co.id);
    const exported = new exceljs_1.default.Workbook();
    await exported.xlsx.load(xlsxBuffer);
    const sheet = exported.worksheets[0];
    const exportedAum = sheet.getCell('D17').value;
    const expectedNaira = Number(figures[aumMap.id]) / 100;
    if (Math.abs(Number(exportedAum) - expectedNaira) < 0.01) {
        ok(`exported XLSX D17 (AUM, kobo->Naira display) = ${exportedAum}, matches the frozen run figure`);
    }
    else {
        fail(`exported D17 mismatch: got ${exportedAum}, expected ${expectedNaira}`);
    }
    const untouchedOriginalWb = new exceljs_1.default.Workbook();
    await untouchedOriginalWb.xlsx.readFile(require('path').join(__dirname, '..', '..', '..', 'SEC Reporting Templates', 'A - FMAN [Date].xlsx'));
    const untouchedOriginalCell = untouchedOriginalWb.worksheets[0].getCell('A1').value;
    const untouchedExportedCell = sheet.getCell('A1').value;
    if (JSON.stringify(untouchedOriginalCell) === JSON.stringify(untouchedExportedCell)) {
        ok(`export byte-preserves an untouched cell (A1 unchanged: ${JSON.stringify(untouchedExportedCell)})`);
    }
    else {
        fail('export did not preserve an untouched cell', { original: untouchedOriginalCell, exported: untouchedExportedCell });
    }
    const filed = await svc.recordSecAcknowledgement(run.id, `SEC-ACK-${RUN}`, co.id);
    if (filed.status === 'FILED' && filed.secPortalAckRef === `SEC-ACK-${RUN}`)
        ok('SEC acknowledgement recorded -> FILED');
    else
        fail('recordSecAcknowledgement did not flip to FILED', filed);
    const cis = templates.find((t) => t.templateCode === 'E-HALF-YEARLY-CIS');
    const cisRun = await svc.prepareFilingRun({ regulatorTemplateId: cis.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 0, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
    const { fieldMaps: cisFieldMaps } = await svc.getFilingRun(cisRun.id);
    const schemeNameMap = cisFieldMaps.find((m) => m.label === 'Name of Scheme');
    await svc.setEntryValue(cisRun.id, schemeNameMap.id, 'One17 Halal Fund', co.id);
    const { workflowInstance: cisWf } = await svc.submitForCertification(cisRun.id, co.id);
    await workflowInbox.approve(cisWf.id, md.id);
    const cisRunAfterCertify = await prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: cisRun.id } });
    if (cisRunAfterCertify.status === 'CERTIFIED') {
        ok('generic Workflow Inbox approve() dispatches REGULATORY_FILING_CERTIFICATION to RegulatoryReportingService.certify() — filing run flips to CERTIFIED via the actual ops-UI Inbox path');
    }
    else {
        fail(`Workflow Inbox approve() did not flip the CIS filing run to CERTIFIED, status is ${cisRunAfterCertify.status}`);
    }
    const pdfBuffer = await svc.exportPdf(cisRun.id, co.id);
    const exportedPdf = await pdf_lib_1.PDFDocument.load(pdfBuffer);
    if (exportedPdf.getPageCount() === 8)
        ok(`exported PDF overlay: 8 pages preserved (flat PDF, coordinate overlay, no AcroForm)`);
    else
        fail(`expected 8 pages, got ${exportedPdf.getPageCount()}`);
    const readingDate = new Date();
    readingDate.setHours(0, 0, 0, 0);
    const syntheticCalendar = await prisma.regulatoryFilingCalendar.create({
        data: { regulatorTemplateId: unmapped.id, ledgerEntityCode: company.code, frequency: 'MONTHLY', deadlineDayOfMonth: 1, deadlineRule: 'SMOKE-ADVERSARIAL synthetic overdue row' },
    });
    await kriEngine.runDailyBatch(readingDate);
    const cpl01Overdue = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-01', isAggregate: true, readingDate } });
    const cpl01Before = Number(cpl01Overdue?.value ?? -1);
    if (cpl01Before >= 1)
        ok(`injecting an overdue, unfiled calendar entry flips KRI-CPL-01 to ${cpl01Before} (>= 1) — overdue -> KRI proven live, not just by absence`);
    else
        fail(`expected KRI-CPL-01 >= 1 after injecting an overdue filing, got ${cpl01Overdue?.value}`, cpl01Overdue);
    await prisma.regulatoryFilingCalendar.delete({ where: { id: syntheticCalendar.id } });
    await kriEngine.runDailyBatch(readingDate);
    const cpl01Restored = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-01', isAggregate: true, readingDate } });
    if (Number(cpl01Restored?.value ?? -1) === 0)
        ok('removing the synthetic overdue row restores KRI-CPL-01 to 0');
    else
        fail(`expected KRI-CPL-01 restored to 0, got ${cpl01Restored?.value}`);
    const complaintInvestor = await prisma.investor.create({
        data: {
            investorId: `SMOKE-RR-COMPLAINT-INV-${RUN}`, fullLegalName: `RR Smoke Complaint Investor ${RUN}`, entityType: 'HNWI_INDIVIDUAL',
            nationality: 'NG', contactEmail: `rr-complaint-inv-${RUN}@one17.test`, contactPhone: '08000000000',
            onboardedByUserId: co.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
        },
    });
    const smokeComplaint = await complaints.raiseFromPortal({ investorId: complaintInvestor.investorId, category: 'SERVICE', description: 'Slow response to enquiry.' });
    const complaintsTemplate = templates.find((t) => t.templateCode === 'B-COMPLAINTS');
    const complaintsRun = await svc.prepareFilingRun({ regulatorTemplateId: complaintsTemplate.id, ledgerEntityCode: company.code, periodStart: new Date(Date.now() - 86_400_000), periodEnd: new Date(Date.now() + 86_400_000), preparedByUserId: co.id });
    const complaintsFigures = complaintsRun.figures;
    const registerMapId = Object.keys(complaintsFigures)[0];
    const registerValue = complaintsFigures[registerMapId];
    if (Array.isArray(registerValue) && registerValue.some((r) => r[1] === complaintInvestor.fullLegalName)) {
        ok('prepareFilingRun resolves COMPLAINT_REGISTER_ROWS to an array of tuples including the fixture complaint (invariant 28f: config anchor, not a new code path per complaint)');
    }
    else {
        fail('B-COMPLAINTS filing run figures did not include the fixture complaint', registerValue);
    }
    await prisma.regulatoryFilingRun.update({ where: { id: complaintsRun.id }, data: { status: 'CERTIFIED', certifiedByUserId: md.id } });
    const complaintsXlsx = await svc.exportXlsx(complaintsRun.id, co.id);
    const exportedComplaintsWb = new exceljs_1.default.Workbook();
    await exportedComplaintsWb.xlsx.load(complaintsXlsx);
    const complaintsSheet = exportedComplaintsWb.getWorksheet('Sheet1');
    let exportedName;
    let exportedNature;
    for (let row = 7; row < 7 + 50; row++) {
        const nameCell = complaintsSheet.getCell(`B${row}`).value;
        if (nameCell === complaintInvestor.fullLegalName) {
            exportedName = nameCell;
            exportedNature = complaintsSheet.getCell(`D${row}`).value;
            break;
        }
    }
    if (exportedName === complaintInvestor.fullLegalName && String(exportedNature).includes('SERVICE')) {
        ok(`exported XLSX spills the complaint register row into the REAL B-COMPLAINTS.xlsx starting at A7 (found at B/D, name="${exportedName}", nature="${exportedNature}") — the array-valued AUTO key, not a single-cell write`);
    }
    else {
        fail('exported B-COMPLAINTS XLSX did not contain the expected spilled row', { exportedName, exportedNature });
    }
    await prisma.complaint.delete({ where: { id: smokeComplaint.id } });
    await prisma.regulatoryFilingRun.delete({ where: { id: complaintsRun.id } });
    await prisma.investor.delete({ where: { investorId: complaintInvestor.investorId } });
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Regulatory Reporting module (CHECK5 item 2) against the real live DB and the real SEC template files.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=regulatory-reporting.smoke.js.map