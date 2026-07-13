// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/regulatory-reporting/regulatory-reporting.smoke.ts
// CHECK5 item 2 (invariant 22, spec §4) adversarial set against the REAL
// live DB and the REAL supplied SEC template files: registry has all 9
// originals; AUTO cells match a live platform query to the kobo; uncertified
// export blocked; certified run immutable pre-export edits blocked;
// CO-prepares -> MD-certifies is maker!=checker (enforced by the standing
// WorkflowEngineService, not reimplemented here); unmapped template refuses
// export/prepare naming the gap; export byte-preserves an untouched cell;
// overdue filing flips KRI-CPL-01 and a fresh calendar entry restores it.
import 'dotenv/config';
import ExcelJS from 'exceljs';
import { PDFDocument } from 'pdf-lib';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { DocumentService } from '../document/document.service';
import { ScreeningGatewayService } from '../screening-gateway/screening-gateway.service';
import { KriEngineService } from '../kri-engine/kri-engine.service';
import { InvestorService } from '../investor/investor.service';
import { PortalAuthService } from '../portal-auth/portal-auth.service';
import { RegulatoryReportingService } from './regulatory-reporting.service';
import { WorkflowInboxService } from '../ops-api/workflow-inbox.service';
import { WmService } from '../wm/wm.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { LedgerService } from '../ledger/ledger.service';
import { PmsService } from '../pms/pms.service';
import { NotificationService } from '../notification/notification.service';
import { AttendanceService } from '../attendance/attendance.service';
import { MarketingService } from '../marketing/marketing.service';
import { ComplaintService } from '../complaint/complaint.service';
import { computeTotalAumKobo } from '../common/aum.util';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const complaints = new ComplaintService(prisma, audit, delegation);
  const svc = new RegulatoryReportingService(prisma, audit, delegation, workflow, complaints);
  const kriEngine = new KriEngineService(prisma, audit);
  const investorService = new InvestorService(prisma, audit, workflow, delegation, new PortalAuthService(prisma, audit), new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const wm = new WmService(prisma, audit, delegation, workflow, eventJournal);
  const notification = new NotificationService(prisma);
  const attendance = new AttendanceService(prisma, audit, delegation, workflow, notification);
  const pms = new PmsService(prisma, audit, delegation, workflow, ledger, attendance);
  const marketing = {} as unknown as MarketingService;
  const workflowInbox = new WorkflowInboxService(prisma, workflow, investorService, svc, wm, pms, marketing, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, ledger, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any, {} as any);

  const co = await prisma.appUser.create({ data: { email: `rr-co-${RUN}@one17.test`, displayName: 'rr-co' } });
  await rbac.assignRole({ userId: co.id, roleCode: 'COMPLIANCE' });
  const md = await prisma.appUser.create({ data: { email: `rr-md-${RUN}@one17.test`, displayName: 'rr-md' } });
  await rbac.assignRole({ userId: md.id, roleCode: 'MD_CEO' });
  const outsider = await prisma.appUser.create({ data: { email: `rr-outsider-${RUN}@one17.test`, displayName: 'rr-outsider' } });

  const company = await prisma.ledgerEntity.findFirstOrThrow({ where: { entityType: 'COMPANY' } });

  // ---- 1. Registry: all 9 SEC originals present ----
  const templates = await svc.listTemplates();
  if (templates.length === 9) ok('all 9 SEC-NG regulator_template originals registered');
  else fail(`expected 9 templates, got ${templates.length}`, templates.map((t) => t.templateCode));

  // ---- 1b. Invariant 52(e): governed XLSX calibration write path ----
  // (calibrateCell never existed before this task -- the FMAN/COMPLAINTS
  // cell maps used everywhere else in this file were hand-inserted by a
  // one-off script with direct DB access, not through this method. A
  // fresh template row reusing the SAME real FMAN workbook proves the
  // write path end-to-end: capability-gated create -> persisted correctly
  // -> readable back through the exact render path (exportXlsx) the
  // pre-seeded templates already exercise.)
  const fmanOriginal = templates.find((t) => t.templateCode === 'A-FMAN')!;
  const calibTemplate = await prisma.regulatorTemplate.create({
    data: { regulatorCode: 'SEC-NG', templateCode: `A-FMAN-CALIB-SMOKE-${RUN}`, name: fmanOriginal.name, filingFrequency: 'MONTHLY', version: 1, status: 'ACTIVE', effectiveFrom: new Date(), createdByUserId: co.id },
  });
  // try/finally: this ACTIVE calibration template row counts toward every
  // future run's "templates.length === 9" assertion above (step 1) if it
  // survives -- guarantee its cleanup even if an assertion in this block
  // throws, not just on the happy path.
  try {
  await expectReject('an outsider cannot calibrate an XLSX cell map', () =>
    svc.calibrateCell({ regulatorTemplateId: calibTemplate.id, sheetName: 'Sheet1', cellAddress: 'C9', label: 'Email', cellClass: 'AUTO', sourceKey: 'REPORTING_ENTITY_EMAIL', actorUserId: outsider.id }));

  const calibratedCell = await svc.calibrateCell({ regulatorTemplateId: calibTemplate.id, sheetName: 'Sheet1', cellAddress: 'C9', label: 'Email', cellClass: 'AUTO', sourceKey: 'REPORTING_ENTITY_EMAIL', actorUserId: co.id });
  if (calibratedCell.sheetName === 'Sheet1' && calibratedCell.cellAddress === 'C9' && calibratedCell.cellClass === 'AUTO' && calibratedCell.sourceKey === 'REPORTING_ENTITY_EMAIL') {
    ok('calibrateCell persists sheetName/cellAddress/cellClass/sourceKey exactly as submitted -- the write side TemplateCellMap has needed since exportXlsx could read it');
  } else {
    fail('calibrateCell did not persist the expected fields', calibratedCell);
  }
  const auditRow = await prisma.auditTrail.findFirst({ where: { entityType: 'template_cell_map', entityId: calibratedCell.id }, orderBy: { occurredAt: 'desc' } });
  if (auditRow) ok('calibrateCell writes an audit_trail row, same as every other governed write in this codebase');
  else fail('calibrateCell did not write an audit_trail row', {});

  // Round-trip: prepare a filing run against the NEWLY calibrated template,
  // certify it, and confirm exportXlsx reads the calibrated cell back
  // correctly -- proving the write path feeds the exact same render path
  // the pre-seeded templates use, not a parallel/divergent one.
  const calibRun = await svc.prepareFilingRun({ regulatorTemplateId: calibTemplate.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
  const { workflowInstance: calibWf } = await svc.submitForCertification(calibRun.id, co.id);
  await svc.certify(calibWf.id, md.id);
  const calibXlsx = await svc.exportXlsx(calibRun.id, co.id);
  const exportedCalibWb = new ExcelJS.Workbook();
  await exportedCalibWb.xlsx.load(calibXlsx as any);
  const calibFigures = calibRun.figures as Record<string, unknown>;
  const exportedCalibCell = exportedCalibWb.worksheets[0].getCell('C9').value;
  if (String(exportedCalibCell) === String(calibFigures[calibratedCell.id])) {
    ok(`round-trip: a cell map written through calibrateCell renders correctly on export (C9 = "${exportedCalibCell}") -- the governed write path feeds the same render path the pre-seeded templates use`);
  } else {
    fail('round-trip export did not reflect the newly calibrated cell', { exportedCalibCell, figureValue: calibFigures[calibratedCell.id] });
  }
  await prisma.regulatoryFilingRun.delete({ where: { id: calibRun.id } });
  await prisma.templateCellMap.delete({ where: { id: calibratedCell.id } });
  } finally {
    await prisma.templateCellMap.deleteMany({ where: { regulatorTemplateId: calibTemplate.id } });
    await prisma.regulatoryFilingRun.deleteMany({ where: { regulatorTemplateId: calibTemplate.id } });
    await prisma.regulatorTemplate.delete({ where: { id: calibTemplate.id } });
  }

  // ---- 2. Unmapped template refuses to prepare, naming the gap ----
  // (B-COMPLAINTS is mapped now, per invariant 28f — C-AML-CFT is still a
  // genuinely unmapped template, so it's the one proving this gate.)
  const unmapped = templates.find((t) => t.templateCode === 'C-AML-CFT')!;
  await expectReject('prepareFilingRun on an unmapped template names the gap', () =>
    svc.prepareFilingRun({ regulatorTemplateId: unmapped.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id }));

  // ---- 3. Capability gate: outsider cannot prepare a filing ----
  const fman = templates.find((t) => t.templateCode === 'A-FMAN')!;
  await expectReject('outsider (no REGULATORY_REPORTING capability) cannot prepare a filing', () =>
    svc.prepareFilingRun({ regulatorTemplateId: fman.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: outsider.id }));

  // ---- 4. Prepare a real filing run for A-FMAN (mapped, real XLSX) ----
  const run = await svc.prepareFilingRun({ regulatorTemplateId: fman.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 5, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
  if (run.status === 'ENTRY_IN_PROGRESS') ok('A-FMAN filing run prepared, status ENTRY_IN_PROGRESS');
  else fail(`expected ENTRY_IN_PROGRESS, got ${run.status}`);

  // ---- 5. AUTO cell matches a live platform query to the kobo ----
  const { cellMaps } = await svc.getFilingRun(run.id);
  const aumMap = cellMaps.find((m) => m.sourceKey === 'TOTAL_AUM_KOBO')!;
  const figures = run.figures as Record<string, unknown>;
  const liveAum = await computeTotalAumKobo(prisma);
  if (String(figures[aumMap.id]) === liveAum.toString()) {
    ok(`AUTO cell TOTAL_AUM_KOBO matches the live canonical AUM query to the kobo (${figures[aumMap.id]})`);
  } else {
    fail(`AUTO cell mismatch: run has ${figures[aumMap.id]}, live query gives ${liveAum}`);
  }

  // ---- 6. ENTRY value set while editable ----
  const monthMap = cellMaps.find((m) => m.cellAddress === 'C11')!;
  await svc.setEntryValue(run.id, monthMap.id, 'June 2026', co.id);
  ok('ENTRY cell (Reporting Month) set while ENTRY_IN_PROGRESS');

  // ---- 7. Uncertified export blocked ----
  await expectReject('export blocked before certification', () => svc.exportXlsx(run.id, co.id));

  // ---- 8. Submit for certification, then edits are blocked (immutable) ----
  const { workflowInstance } = await svc.submitForCertification(run.id, co.id);
  await expectReject('ENTRY edit blocked once SUBMITTED_FOR_CERTIFICATION', () => svc.setEntryValue(run.id, monthMap.id, 'July 2026', co.id));

  // ---- 9. Maker != checker: the preparer cannot certify their own filing ----
  await expectReject('preparer (CO) cannot certify their own filing (maker != checker)', () => svc.certify(workflowInstance.id, co.id));

  // ---- 10. MD certifies (the approval record IS the certification signature) ----
  const certified = await svc.certify(workflowInstance.id, md.id);
  const runAfterCertify = await prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: run.id } });
  if (certified.status === 'APPROVED' && runAfterCertify.status === 'CERTIFIED' && runAfterCertify.certifiedByUserId === md.id) {
    ok('MD certifies -> workflow APPROVED, filing run CERTIFIED, certifiedByUserId = MD');
  } else {
    fail('certification did not flip the filing run to CERTIFIED', { workflowStatus: certified.status, runStatus: runAfterCertify.status });
  }

  // ---- 11. Certified run: export succeeds and byte-preserves an untouched cell ----
  const xlsxBuffer = await svc.exportXlsx(run.id, co.id);
  const exported = new ExcelJS.Workbook();
  await exported.xlsx.load(xlsxBuffer as any);
  const sheet = exported.worksheets[0];
  const exportedAum = sheet.getCell('D17').value;
  const expectedNaira = Number(figures[aumMap.id] as string) / 100;
  if (Math.abs(Number(exportedAum) - expectedNaira) < 0.01) {
    ok(`exported XLSX D17 (AUM, kobo->Naira display) = ${exportedAum}, matches the frozen run figure`);
  } else {
    fail(`exported D17 mismatch: got ${exportedAum}, expected ${expectedNaira}`);
  }
  const untouchedOriginalWb = new ExcelJS.Workbook();
  await untouchedOriginalWb.xlsx.readFile(require('path').join(__dirname, '..', '..', '..', 'SEC Reporting Templates', 'A - FMAN [Date].xlsx'));
  const untouchedOriginalCell = untouchedOriginalWb.worksheets[0].getCell('A1').value;
  const untouchedExportedCell = sheet.getCell('A1').value;
  if (JSON.stringify(untouchedOriginalCell) === JSON.stringify(untouchedExportedCell)) {
    ok(`export byte-preserves an untouched cell (A1 unchanged: ${JSON.stringify(untouchedExportedCell)})`);
  } else {
    fail('export did not preserve an untouched cell', { original: untouchedOriginalCell, exported: untouchedExportedCell });
  }

  // ---- 12. Record SEC acknowledgement -> FILED ----
  const filed = await svc.recordSecAcknowledgement(run.id, `SEC-ACK-${RUN}`, co.id);
  if (filed.status === 'FILED' && filed.secPortalAckRef === `SEC-ACK-${RUN}`) ok('SEC acknowledgement recorded -> FILED');
  else fail('recordSecAcknowledgement did not flip to FILED', filed);

  // ---- 13. PDF overlay path (flat PDF, 0 AcroForm fields, E-HALF-YEARLY-CIS) ----
  const cis = templates.find((t) => t.templateCode === 'E-HALF-YEARLY-CIS')!;
  const cisRun = await svc.prepareFilingRun({ regulatorTemplateId: cis.id, ledgerEntityCode: company.code, periodStart: new Date(2026, 0, 1), periodEnd: new Date(2026, 5, 30), preparedByUserId: co.id });
  const { fieldMaps: cisFieldMaps } = await svc.getFilingRun(cisRun.id);
  const schemeNameMap = cisFieldMaps.find((m) => m.label === 'Name of Scheme')!;
  await svc.setEntryValue(cisRun.id, schemeNameMap.id, 'One17 Halal Fund', co.id);
  const { workflowInstance: cisWf } = await svc.submitForCertification(cisRun.id, co.id);
  // Certify through the GENERIC Workflow Inbox dispatch (WorkflowInboxService
  // .approve), not svc.certify() directly — this is the actual path an MD
  // uses from the ops-UI Inbox screen, and it must flip filing_run.status to
  // CERTIFIED (the REGULATORY_FILING_CERTIFICATION dispatch case), not just
  // leave the workflow instance APPROVED with the filing run stuck at
  // SUBMITTED_FOR_CERTIFICATION.
  await workflowInbox.approve(cisWf.id, md.id);
  const cisRunAfterCertify = await prisma.regulatoryFilingRun.findUniqueOrThrow({ where: { id: cisRun.id } });
  if (cisRunAfterCertify.status === 'CERTIFIED') {
    ok('generic Workflow Inbox approve() dispatches REGULATORY_FILING_CERTIFICATION to RegulatoryReportingService.certify() — filing run flips to CERTIFIED via the actual ops-UI Inbox path');
  } else {
    fail(`Workflow Inbox approve() did not flip the CIS filing run to CERTIFIED, status is ${cisRunAfterCertify.status}`);
  }
  const pdfBuffer = await svc.exportPdf(cisRun.id, co.id);
  const exportedPdf = await PDFDocument.load(pdfBuffer);
  if (exportedPdf.getPageCount() === 8) ok(`exported PDF overlay: 8 pages preserved (flat PDF, coordinate overlay, no AcroForm)`);
  else fail(`expected 8 pages, got ${exportedPdf.getPageCount()}`);

  // ---- 14. Overdue filing flips KRI-CPL-01, then restoring the calendar restores it ----
  const readingDate = new Date(); readingDate.setHours(0, 0, 0, 0);
  const syntheticCalendar = await prisma.regulatoryFilingCalendar.create({
    data: { regulatorTemplateId: unmapped.id, ledgerEntityCode: company.code, frequency: 'MONTHLY', deadlineDayOfMonth: 1, deadlineRule: 'SMOKE-ADVERSARIAL synthetic overdue row' },
  });
  await kriEngine.runDailyBatch(readingDate);
  const cpl01Overdue = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-01', isAggregate: true, readingDate } });
  const cpl01Before = Number(cpl01Overdue?.value ?? -1);
  if (cpl01Before >= 1) ok(`injecting an overdue, unfiled calendar entry flips KRI-CPL-01 to ${cpl01Before} (>= 1) — overdue -> KRI proven live, not just by absence`);
  else fail(`expected KRI-CPL-01 >= 1 after injecting an overdue filing, got ${cpl01Overdue?.value}`, cpl01Overdue);
  await prisma.regulatoryFilingCalendar.delete({ where: { id: syntheticCalendar.id } });
  await kriEngine.runDailyBatch(readingDate);
  const cpl01Restored = await prisma.kriReading.findFirst({ where: { kriCode: 'CPL-01', isAggregate: true, readingDate } });
  if (Number(cpl01Restored?.value ?? -1) === 0) ok('removing the synthetic overdue row restores KRI-CPL-01 to 0');
  else fail(`expected KRI-CPL-01 restored to 0, got ${cpl01Restored?.value}`);

  // ---- 15. Invariant 28(f): B-COMPLAINTS register AUTO-populates end-to-end,
  // spilling an array value across rows in the REAL supplied .xlsx ----
  const complaintInvestor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-RR-COMPLAINT-INV-${RUN}`, fullLegalName: `RR Smoke Complaint Investor ${RUN}`, entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', contactEmail: `rr-complaint-inv-${RUN}@one17.test`, contactPhone: '08000000000',
      onboardedByUserId: co.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE',
    },
  });
  const smokeComplaint = await complaints.raiseFromPortal({ investorId: complaintInvestor.investorId, category: 'SERVICE', description: 'Slow response to enquiry.' });
  const complaintsTemplate = templates.find((t) => t.templateCode === 'B-COMPLAINTS')!;
  const complaintsRun = await svc.prepareFilingRun({ regulatorTemplateId: complaintsTemplate.id, ledgerEntityCode: company.code, periodStart: new Date(Date.now() - 86_400_000), periodEnd: new Date(Date.now() + 86_400_000), preparedByUserId: co.id });
  const complaintsFigures = complaintsRun.figures as Record<string, unknown>;
  const registerMapId = Object.keys(complaintsFigures)[0];
  // Stored as tuples [sn, name, dateReceived, nature, status, dateResolved,
  // remarks] — jsonb doesn't preserve object key order, only array order.
  const registerValue = complaintsFigures[registerMapId] as unknown[][];
  if (Array.isArray(registerValue) && registerValue.some((r) => r[1] === complaintInvestor.fullLegalName)) {
    ok('prepareFilingRun resolves COMPLAINT_REGISTER_ROWS to an array of tuples including the fixture complaint (invariant 28f: config anchor, not a new code path per complaint)');
  } else {
    fail('B-COMPLAINTS filing run figures did not include the fixture complaint', registerValue);
  }
  await prisma.regulatoryFilingRun.update({ where: { id: complaintsRun.id }, data: { status: 'CERTIFIED', certifiedByUserId: md.id } });
  const complaintsXlsx = await svc.exportXlsx(complaintsRun.id, co.id);
  const exportedComplaintsWb = new ExcelJS.Workbook();
  await exportedComplaintsWb.xlsx.load(complaintsXlsx as any);
  const complaintsSheet = exportedComplaintsWb.getWorksheet('Sheet1')!;
  // Invariant 39(d) widened the platform's own complaint-raising surface to
  // every investor portal, not just this file's own fixture — the spill
  // block anchored at B7 can legitimately contain OTHER complaints raised
  // by other suites within the same ±24h period window now, at a row
  // offset that shifts depending on run order. Scan the block for the row
  // matching this fixture by name rather than assuming it lands at the
  // anchor itself.
  let exportedName: unknown;
  let exportedNature: unknown;
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
  } else {
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
