// Run with: npx tsx src/procurement/procurement.smoke.ts
// Check-6B, Budget Spec §4 (Admin/Procurement, Corporate Services module).
// Proves the full chain live against the real DB: an encumbrance's
// EXPENDITURE_REQUISITION workflow must be APPROVED before a PO can be
// issued against it; vendor -> PO -> goods receipt -> invoice -> 3-way
// match (both a passing OPEX case and a failing/DISPUTED case); a
// passing match CONVERTS the encumbrance and drafts a GL journal; a CAPEX
// match creates an asset_register_entry; payment batch is maker!=checker
// and its approval IS the payment-journal trigger; the monthly
// depreciation sweep is idempotent per (asset, period).
import 'dotenv/config';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { BudgetActivationService } from '../budget/budget-activation.service';
import { ProcurementService } from './procurement.service';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    fail(`expected rejection: ${label}`);
  } catch (err) {
    ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`);
  }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const activation = new BudgetActivationService(prisma, audit, delegation, workflow);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const procurement = new ProcurementService(prisma, audit, delegation, workflow, eventJournal, ledger);

  const finAdmin = await prisma.appUser.create({ data: { email: `proc-finadmin-${RUN}@one17.test`, displayName: 'proc-finadmin' } });
  await rbac.assignRole({ userId: finAdmin.id, roleCode: 'FIN_ADMIN' });
  const ceo = await prisma.appUser.create({ data: { email: `proc-ceo-${RUN}@one17.test`, displayName: 'proc-ceo' } });
  await rbac.assignRole({ userId: ceo.id, roleCode: 'MD_CEO' });
  const sau = await prisma.appUser.create({ data: { email: `proc-sau-${RUN}@one17.test`, displayName: 'proc-sau' } });
  await rbac.assignRole({ userId: sau.id, roleCode: 'SAU_INTERNAL_CONTROL' });
  const corpServices = await prisma.appUser.create({ data: { email: `proc-corpsvc-${RUN}@one17.test`, displayName: 'proc-corpsvc' } });
  await rbac.assignRole({ userId: corpServices.id, roleCode: 'CORP_SERVICES' });
  const outsider = await prisma.appUser.create({ data: { email: `proc-outsider-${RUN}@one17.test`, displayName: 'proc-outsider' } });
  await rbac.assignRole({ userId: outsider.id, roleCode: 'INVESTOR' });

  // Real defect found during an unrelated tranche's full regression sweep:
  // a 900-bucket modulo (9000 + RUN % 900) collides with a PRIOR run's
  // never-cleaned-up ACTIVE budget_version (this test creates one per run
  // and never retires it — same permanent-residue doctrine as
  // reporting.smoke.ts, but budget_version has no SUPERSEDED/retired
  // status to flip to, unlike report_run) once enough runs accumulate in
  // a single long session — exactly what happened here. Widened to
  // 900,000 buckets so an accidental same-session collision is
  // vanishingly unlikely; the underlying "one ACTIVE version per fiscal
  // year" DB constraint itself is correct and untouched.
  const fiscalYear = 9_000_000 + (RUN % 900_000);
  // An isolated COMPANY fixture, own CoA — the "real" first-COMPANY row
  // other smoke tests share carries whichever ad-hoc CoA rows THEY created
  // for their own account codes, not ours; posting a journal against an
  // account code that doesn't exist on the ledger entity is correctly
  // refused (invariant 5: no journal spans/guesses across entities).
  const company = await prisma.ledgerEntity.create({ data: { code: `SMOKE-PROC-COMPANY-${RUN}`, name: 'Smoke Procurement Company', entityType: 'COMPANY', primaryBasis: 'IFRS' } });
  const COA: { accountCode: string; accountName: string; accountType: 'ASSET' | 'LIABILITY' | 'EXPENSE' }[] = [
    { accountCode: '1000', accountName: 'Cash', accountType: 'ASSET' },
    { accountCode: '1170', accountName: 'Fixed Assets', accountType: 'ASSET' },
    { accountCode: '1175', accountName: 'Accumulated Depreciation', accountType: 'ASSET' },
    { accountCode: '2085', accountName: 'Accounts Payable', accountType: 'LIABILITY' },
    { accountCode: '5080', accountName: 'Opex Expense', accountType: 'EXPENSE' },
    { accountCode: '6015', accountName: 'Depreciation Expense', accountType: 'EXPENSE' },
  ];
  for (const acc of COA) {
    await prisma.chartOfAccount.create({ data: { ledgerEntityCode: company.code, ...acc, aaoifiRef: 'SMOKE-AAOIFI', ifrsRef: 'SMOKE-IFRS' } });
  }
  const version = await prisma.budgetVersion.create({ data: { fiscalYear, scenarioLabel: `Procurement Smoke ${RUN}`, status: 'BOARD_APPROVED', proposedByUserId: finAdmin.id } });
  const opexWf = await activation.requestActivation(version.id, `BOARD-RES-PROC-${RUN}`, finAdmin.id);
  await activation.approveActivation(opexWf.id, ceo.id);

  const opexLine = await prisma.budgetLine.create({
    data: { budgetVersionId: version.id, ledgerEntityCode: company.code, budgetLineGroup: 'Opex', lineDescription: `Smoke Opex ${RUN}`, class: 'OPEX', phasingMethod: 'EVEN_12', sourceSheetRef: 'smoke-test', monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 1_000_000n })) } },
  });
  const capexLine = await prisma.budgetLine.create({
    data: { budgetVersionId: version.id, ledgerEntityCode: company.code, budgetLineGroup: 'CAPEX', lineDescription: `Smoke CAPEX ${RUN}`, class: 'CAPEX', phasingMethod: 'EVEN_12', sourceSheetRef: 'smoke-test', monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 5_000_000n })) } },
  });
  const disputeLine = await prisma.budgetLine.create({
    data: { budgetVersionId: version.id, ledgerEntityCode: company.code, budgetLineGroup: 'Opex', lineDescription: `Smoke Dispute Line ${RUN}`, class: 'OPEX', phasingMethod: 'EVEN_12', sourceSheetRef: 'smoke-test', monthlyAmounts: { create: Array.from({ length: 12 }, (_, i) => ({ month: i + 1, amountKobo: 1_000_000n })) } },
  });

  async function approveEncumbrance(lineId: string, amountKobo: bigint, description: string) {
    const { encumbrance, workflowInstance } = await activation.requestEncumbrance(lineId, amountKobo, description, finAdmin.id);
    await workflow.approveNextStep(workflowInstance.id, sau.id);
    await workflow.approveNextStep(workflowInstance.id, ceo.id);
    return encumbrance;
  }

  const vendor = await procurement.createVendor({ vendorCode: `VEND-${RUN}`, legalName: `Smoke Vendor Ltd ${RUN}`, rcNumber: `RC-${RUN}`, createdByUserId: corpServices.id });
  ok(`createVendor: vendor register entry created (${vendor.vendorCode})`);

  await expectReject(
    'an outsider without PROCUREMENT_OPERATIONS cannot create a vendor',
    () => procurement.createVendor({ vendorCode: `VEND-BAD-${RUN}`, legalName: 'x', createdByUserId: outsider.id }),
  );

  // --- PO blocked until the underlying encumbrance is APPROVED ---
  const { encumbrance: pendingEnc } = await activation.requestEncumbrance(opexLine.id, 3_000_000n, 'Pending requisition', finAdmin.id);
  await expectReject(
    'creating a PO against an encumbrance whose requisition workflow is not yet APPROVED',
    () => procurement.createPurchaseOrder({ poNumber: `PO-EARLY-${RUN}`, vendorId: vendor.id, encumbranceId: pendingEnc.id, ledgerEntityCode: company.code, description: 'test', lines: [{ description: 'x', quantity: 1, unitPriceKobo: 3_000_000n }], createdByUserId: corpServices.id }),
  );

  // --- OPEX happy path: PO -> receipt -> invoice -> match (within tolerance) ---
  const opexEnc = await approveEncumbrance(opexLine.id, 3_000_000n, 'Office supplies requisition');
  const opexPo = await procurement.createPurchaseOrder({
    poNumber: `PO-OPEX-${RUN}`, vendorId: vendor.id, encumbranceId: opexEnc.id, ledgerEntityCode: company.code, description: 'Office supplies',
    lines: [{ description: 'Stationery', quantity: 10, unitPriceKobo: 300_000n }], createdByUserId: corpServices.id,
  });
  if (opexPo.totalAmountKobo === 3_000_000n && opexPo.status === 'DRAFT') {
    ok(`createPurchaseOrder: PO issued against an APPROVED encumbrance, total ${opexPo.totalAmountKobo} kobo matches`);
  } else {
    fail('createPurchaseOrder did not compute total correctly', opexPo);
  }
  await procurement.issuePurchaseOrder(opexPo.id, corpServices.id);
  await procurement.recordGoodsReceipt(opexPo.id, 3_000_000n, 'Full delivery confirmed', corpServices.id);
  const opexInvoice = await procurement.recordVendorInvoice(opexPo.id, vendor.id, `INV-OPEX-${RUN}`, 3_000_000n, new Date(), corpServices.id);
  const opexMatch = await procurement.matchInvoice({ invoiceId: opexInvoice.id, actorUserId: corpServices.id });
  const opexEncAfter = await prisma.encumbrance.findUniqueOrThrow({ where: { id: opexEnc.id } });
  if (opexMatch.matched && opexMatch.journalEntryId && opexEncAfter.status === 'CONVERTED') {
    ok(`matchInvoice: exact 3-way match (PO=receipt=invoice=3,000,000 kobo) passes, encumbrance CONVERTED, GL journal ${opexMatch.journalEntryId} drafted`);
  } else {
    fail('OPEX 3-way match did not pass correctly', { opexMatch, opexEncAfter });
  }
  const journalRow = await prisma.journalEntry.findUniqueOrThrow({ where: { id: opexMatch.journalEntryId! }, include: { lines: true } });
  const journalPostingWf = await prisma.workflowInstance.findFirst({ where: { workflowTypeCode: 'JOURNAL_POSTING', entityType: 'journal_entry', entityId: opexMatch.journalEntryId! } });
  if (journalRow.status === 'DRAFT' && journalPostingWf?.status === 'PENDING_APPROVAL' && journalRow.lines.length === 2) {
    ok('the invoice-matched journal sits DRAFT with its JOURNAL_POSTING workflow PENDING_APPROVAL — the standard maker-drafts/checker-approves path, ProcurementService never posts directly');
  } else {
    fail('invoice-matched journal not in expected pre-posting state', { journalRow, journalPostingWf });
  }

  // --- Dispute path: invoice materially exceeds PO/receipt beyond tolerance ---
  const disputeEnc = await approveEncumbrance(disputeLine.id, 1_000_000n, 'Consulting requisition');
  const disputePo = await procurement.createPurchaseOrder({
    poNumber: `PO-DISP-${RUN}`, vendorId: vendor.id, encumbranceId: disputeEnc.id, ledgerEntityCode: company.code, description: 'Consulting',
    lines: [{ description: 'Consulting hours', quantity: 1, unitPriceKobo: 1_000_000n }], createdByUserId: corpServices.id,
  });
  await procurement.issuePurchaseOrder(disputePo.id, corpServices.id);
  await procurement.recordGoodsReceipt(disputePo.id, 1_000_000n, 'Confirmed', corpServices.id);
  const disputeInvoice = await procurement.recordVendorInvoice(disputePo.id, vendor.id, `INV-DISP-${RUN}`, 1_300_000n, new Date(), corpServices.id); // 30% over PO — well outside a 2% tolerance
  const disputeMatch = await procurement.matchInvoice({ invoiceId: disputeInvoice.id, actorUserId: corpServices.id });
  const disputeEncAfter = await prisma.encumbrance.findUniqueOrThrow({ where: { id: disputeEnc.id } });
  if (!disputeMatch.matched && disputeMatch.invoice.status === 'DISPUTED' && disputeEncAfter.status === 'OPEN') {
    ok(`matchInvoice: an invoice 30% over its PO is correctly DISPUTED, not silently accepted — encumbrance stays OPEN (never converted on a failed match): "${disputeMatch.note}"`);
  } else {
    fail('the outside-tolerance invoice was not disputed correctly', { disputeMatch, disputeEncAfter });
  }

  // --- CAPEX path: matched invoice creates an asset_register_entry ---
  const capexEnc = await approveEncumbrance(capexLine.id, 5_000_000n, 'New server requisition');
  const capexPo = await procurement.createPurchaseOrder({
    poNumber: `PO-CAPEX-${RUN}`, vendorId: vendor.id, encumbranceId: capexEnc.id, ledgerEntityCode: company.code, description: 'Server hardware',
    lines: [{ description: 'Server', quantity: 1, unitPriceKobo: 5_000_000n }], createdByUserId: corpServices.id,
  });
  await procurement.issuePurchaseOrder(capexPo.id, corpServices.id);
  await procurement.recordGoodsReceipt(capexPo.id, 5_000_000n, 'Delivered', corpServices.id);
  const capexInvoice = await procurement.recordVendorInvoice(capexPo.id, vendor.id, `INV-CAPEX-${RUN}`, 5_000_000n, new Date(), corpServices.id);

  await expectReject(
    'matching a CAPEX invoice without assetUsefulLifeMonths',
    () => procurement.matchInvoice({ invoiceId: capexInvoice.id, actorUserId: corpServices.id }),
  );
  const capexMatch = await procurement.matchInvoice({ invoiceId: capexInvoice.id, actorUserId: corpServices.id, assetUsefulLifeMonths: 36 });
  if (capexMatch.matched && capexMatch.assetRegisterEntry?.costKobo === 5_000_000n && capexMatch.assetRegisterEntry.usefulLifeMonths === 36) {
    ok(`matchInvoice: a CAPEX line's matched invoice auto-creates asset_register_entry ${capexMatch.assetRegisterEntry.assetCode} (cost 5,000,000 kobo, 36-month useful life)`);
  } else {
    fail('CAPEX match did not create the asset register entry correctly', capexMatch);
  }

  // --- Payment batch: maker != checker, approval IS the payment trigger ---
  await expectReject(
    'creating a payment batch with a non-MATCHED (DISPUTED) invoice',
    () => procurement.createPaymentBatch(`BATCH-BAD-${RUN}`, company.code, [disputeInvoice.id], corpServices.id),
  );
  const { batch, workflowInstance: batchWf } = await procurement.createPaymentBatch(`BATCH-${RUN}`, company.code, [opexInvoice.id, capexInvoice.id], corpServices.id);
  if (batch.status === 'PENDING_APPROVAL' && batch.totalAmountKobo === 8_000_000n) {
    ok(`createPaymentBatch: batch drafted PENDING_APPROVAL, total 8,000,000 kobo (3m OPEX + 5m CAPEX invoices)`);
  } else {
    fail('payment batch not created correctly', batch);
  }
  await expectReject(
    'Corporate Services (the batch initiator) approving their own payment batch',
    () => procurement.approvePaymentBatch(batchWf.id, corpServices.id),
  );
  const paidBatch = await procurement.approvePaymentBatch(batchWf.id, finAdmin.id);
  const paidInvoices = await prisma.vendorInvoice.findMany({ where: { id: { in: [opexInvoice.id, capexInvoice.id] } } });
  if (paidBatch?.status === 'PAID' && paidInvoices.every((i) => i.status === 'PAID')) {
    ok('approvePaymentBatch: FIN_ADMIN (a DIFFERENT authority) approves — batch and both invoices flip to PAID, payment journal drafted for posting');
  } else {
    fail('payment batch approval did not flip state correctly', { paidBatch, paidInvoices });
  }

  // --- Depreciation sweep: idempotent per (asset, period) ---
  const depreciationDate = new Date();
  const firstSweep = await procurement.runMonthlyDepreciationSweep(depreciationDate) as any;
  const asset = await prisma.assetRegisterEntry.findUniqueOrThrow({ where: { assetCode: `AST-PO-CAPEX-${RUN}` } });
  const expectedMonthly = 5_000_000n / 36n;
  if (firstSweep.assetsProcessed >= 1 && asset.accumulatedDepreciationKobo === expectedMonthly) {
    ok(`runMonthlyDepreciationSweep: straight-line depreciation posted (${expectedMonthly} kobo = 5,000,000/36) for the new CAPEX asset`);
  } else {
    fail('depreciation sweep did not post correctly', { firstSweep, asset });
  }
  const secondSweep = await procurement.runMonthlyDepreciationSweep(depreciationDate) as any;
  const assetAfterSecond = await prisma.assetRegisterEntry.findUniqueOrThrow({ where: { id: asset.id } });
  const secondResult = secondSweep.results.find((r: any) => r.assetCode === asset.assetCode);
  if (secondResult?.skipped === true && assetAfterSecond.accumulatedDepreciationKobo === expectedMonthly) {
    ok('runMonthlyDepreciationSweep: re-running the SAME period is idempotent — no double depreciation posted (unique constraint on asset+month+year)');
  } else {
    fail('depreciation sweep was not idempotent on re-run', { secondSweep, assetAfterSecond });
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — procurement suite (Check-6B, Budget Spec §4) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
