import 'dotenv/config';
// Walkthrough portfolio-diversity expansion (post-CHECK23, CEO request):
// "more counterparties and investors with different investments and
// facilities issued at different maturities and repayments" so a reviewer
// can clearly assess UX. Same discipline as every other walkthrough script
// in this directory: every entity created through the REAL governed service
// layer (never raw prisma.create() for anything with a governed action),
// idempotent (safe to re-run against a partially-populated one17_walkthrough
// DB), zero cleanup (this data is meant to persist for the walkthrough).
//
// Reuses the staff roster from walkthrough-seed.ts / invariant48-walkthrough-
// refresh.ts (fails fast if those haven't run). Adds:
//   - 6 new counterparties spanning both onboarding risk tiers (LOW-risk
//     3-step chain, HIGH-risk EDD+MD 4-step chain), each with one facility
//     application carried through investment-memo approval, document
//     checklist, the 4-officer review chain, and disbursement -- varying
//     structureType/tenorMonths/targetReturnPct/amountKobo so both the
//     short (PM->CIO) and DoA-tiered long (+IC+MD) memo chains actually
//     fire depending on whatever InvestmentMemoThresholdConfig is active
//     (or absent) in this DB -- the step() wrapper below PARKs harmlessly
//     either way, same pattern invariant48-walkthrough-refresh.ts §5 uses.
//     5 of the 6 are carried to DISBURSED with a real repayment schedule
//     (PaymentReminderService.createObligation, looped per installment);
//     the 6th is deliberately left SUBMITTED (awaiting the review chain)
//     so the approval-queue UI has a live pending item, not just terminal
//     states.
//   - 6 new named investors (mix of individual/corporate, LOW/HIGH risk,
//     across all three product engines) subscribed via SubscriptionService.
//
// Repayment-schedule design: each disbursed facility gets its OWN
// installment plan (count, cadence, first-due-offset, how many are marked
// PAID) hand-specified below -- not algorithmically generated -- so the
// resulting mix is deliberate: one facility fully closed out (all PAID),
// one healthy mid-life facility (half PAID, rest upcoming, zero overdue),
// two facilities with genuinely OVERDUE installments (due date in the past,
// still PENDING -- exercises the reminder-ladder/obligations-dashboard UI
// for real), and one still in the review queue (no schedule at all yet).
import { PrismaService } from '../src/prisma/prisma.service';
import { AuditService } from '../src/audit/audit.service';
import { DelegationService } from '../src/delegation/delegation.service';
import { WorkflowEngineService } from '../src/workflow/workflow.service';
import { ScreeningGatewayService } from '../src/screening-gateway/screening-gateway.service';
import { AuthService } from '../src/auth/auth.service';
import { MfaService } from '../src/mfa/mfa.service';
import { RbacService } from '../src/rbac/rbac.service';
import { InvestorService } from '../src/investor/investor.service';
import { PortalAuthService } from '../src/portal-auth/portal-auth.service';
import { NdMandateEngineService } from '../src/engine-nd-mandate/nd-mandate-engine.service';
import { LedgerService } from '../src/ledger/ledger.service';
import { EventJournalService } from '../src/event-journal/event-journal.service';
import { LetterheadService } from '../src/letterhead/letterhead.service';
import { CertificateService } from '../src/certificate/certificate.service';
import { SubscriptionService } from '../src/subscription/subscription.service';
import { DocumentService } from '../src/document/document.service';
import { CounterpartyService } from '../src/counterparty/counterparty.service';
import { NotificationService } from '../src/notification/notification.service';
import { TaskService } from '../src/task/task.service';
import { PaymentReminderService } from '../src/counterparty/payment-reminder.service';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }
function park(label: string, reason: string) { console.log(`PARKED: ${label} — ${reason}`); }
async function step(label: string, fn: () => Promise<void>) {
  try { await fn(); } catch (err) { park(label, err instanceof Error ? err.message : String(err)); }
}

function monthsFromNow(offset: number): Date {
  const d = new Date();
  d.setUTCMonth(d.getUTCMonth() + offset);
  d.setUTCHours(9, 0, 0, 0);
  return d;
}

const HF_PRODUCT_CODE = 'ONE17-HALAL-FUND';
const POOL_PRODUCT_CODE = 'ONE17-MUDARABAH-POOL-1';
const ND_MANDATE_PRODUCT_CODE = 'ONE17-ND-MANDATE-1';
const HF_CODE = 'ONE17-HALAL-FUND-01';

const NINE_LOW_GRADES = [
  'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
  'TRANSACTION_COMPLEXITY', 'DELIVERY_CHANNEL', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Routine, well-documented profile.' }));
const EIGHT_LOW_GRADES = [
  'GEOGRAPHY', 'CLIENT_TYPE', 'SOURCE_OF_FUNDS', 'PEP_STATUS', 'SANCTIONS_STATUS',
  'TRANSACTION_COMPLEXITY', 'BENEFICIAL_OWNERSHIP', 'SOURCE_OF_WEALTH',
].map((metricCode) => ({ metricCode, grade: 'LOW' as const, rationale: 'Established operating history, well-documented.' }));
const INVESTOR_PEP_GRID = [
  { target: 'INVESTOR_OR_INSTITUTIONAL_NAME' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'DIRECTOR_OR_REP' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'BENEFICIAL_OWNER' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
];
const COUNTERPARTY_PEP_GRID = [
  { target: 'INVESTEE_OR_INSTITUTIONAL_NAME' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'DIRECTOR_OR_REP' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
  { target: 'BENEFICIAL_OWNER' as const, pepResult: 'CLEAR' as const, sanctionsResult: 'CLEAR' as const },
];

interface InstallmentPlan { count: number; cadenceMonths: number; firstDueOffsetMonths: number; paidThrough: number; }
interface FacilitySpec {
  key: string; legalName: string; counterpartyType: string; rcNumber: string; contactEmail: string;
  purposeOfFinancing: string; amountSoughtKobo: bigint; expectedSourceOfRepayment: string; shariahCertRef: string;
  riskTier: 'LOW' | 'HIGH'; approvedExposureLimitKobo: bigint;
  facilityPurpose: string; structureType: string; amountKobo: bigint; tenorMonths: number; targetReturnPct: number;
  installments?: InstallmentPlan; // absent = leave at SUBMITTED, don't disburse
}

const COUNTERPARTIES: FacilitySpec[] = [
  {
    key: 'coastal', legalName: 'Coastal Foods & Logistics Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201456',
    contactEmail: 'finance@coastalfoodslogistics.example.com', purposeOfFinancing: 'Refrigerated fleet expansion for cold-chain distribution',
    amountSoughtKobo: 90_000_000_00n, expectedSourceOfRepayment: 'Retail distribution contract receivables', shariahCertRef: 'SSB-CERT-2026-021',
    riskTier: 'LOW', approvedExposureLimitKobo: 150_000_000_00n,
    facilityPurpose: 'Refrigerated truck fleet acquisition, phase 1', structureType: 'MURABAHA', amountKobo: 80_000_000_00n, tenorMonths: 6, targetReturnPct: 13.0,
    installments: { count: 6, cadenceMonths: 1, firstDueOffsetMonths: -4, paidThrough: 3 },
  },
  {
    key: 'northbridge', legalName: 'Northbridge Construction Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201789',
    contactEmail: 'treasury@northbridgeconstruction.example.com', purposeOfFinancing: 'Equipment financing for a commercial-estate build contract',
    amountSoughtKobo: 250_000_000_00n, expectedSourceOfRepayment: 'Milestone payments under the estate-development contract', shariahCertRef: 'SSB-CERT-2026-022',
    riskTier: 'HIGH', approvedExposureLimitKobo: 350_000_000_00n,
    facilityPurpose: 'Heavy equipment lease-to-completion, estate contract phase 2', structureType: 'IJARAH', amountKobo: 220_000_000_00n, tenorMonths: 24, targetReturnPct: 15.5,
    installments: { count: 8, cadenceMonths: 3, firstDueOffsetMonths: -9, paidThrough: 2 },
  },
  {
    key: 'zenith-textile', legalName: 'Zenith Textile Mills Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2201933',
    contactEmail: 'accounts@zenithtextilemills.example.com', purposeOfFinancing: 'Raw-material procurement financing for a 12-month production cycle',
    amountSoughtKobo: 50_000_000_00n, expectedSourceOfRepayment: 'Wholesale fabric sales receivables', shariahCertRef: 'SSB-CERT-2026-023',
    riskTier: 'LOW', approvedExposureLimitKobo: 80_000_000_00n,
    facilityPurpose: 'Cotton and dye raw-material procurement, FY2026 cycle', structureType: 'MUSHARAKAH', amountKobo: 45_000_000_00n, tenorMonths: 12, targetReturnPct: 12.0,
    installments: { count: 12, cadenceMonths: 1, firstDueOffsetMonths: -6, paidThrough: 6 },
  },
  {
    key: 'savanna-energy', legalName: 'Savanna Energy Solutions Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202104',
    contactEmail: 'cfo@savannaenergysolutions.example.com', purposeOfFinancing: 'Solar mini-grid installation for three rural distribution sites',
    amountSoughtKobo: 320_000_000_00n, expectedSourceOfRepayment: 'Power-purchase agreement receipts from off-taker communities', shariahCertRef: 'SSB-CERT-2026-024',
    riskTier: 'HIGH', approvedExposureLimitKobo: 400_000_000_00n,
    facilityPurpose: 'Mini-grid equipment + installation, sites 1-3', structureType: 'MURABAHA', amountKobo: 300_000_000_00n, tenorMonths: 18, targetReturnPct: 16.0,
    installments: { count: 6, cadenceMonths: 3, firstDueOffsetMonths: -6, paidThrough: 1 },
  },
  {
    key: 'pinnacle-health', legalName: 'Pinnacle Healthcare Supplies Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202267',
    contactEmail: 'procurement@pinnaclehealthcaresupplies.example.com', purposeOfFinancing: 'Short-term bridge financing for a hospital-supply tender',
    amountSoughtKobo: 30_000_000_00n, expectedSourceOfRepayment: 'Tender payment on delivery completion (government hospital contract)', shariahCertRef: 'SSB-CERT-2026-025',
    riskTier: 'LOW', approvedExposureLimitKobo: 50_000_000_00n,
    facilityPurpose: 'Medical consumables tender fulfilment, single delivery cycle', structureType: 'IJARAH', amountKobo: 25_000_000_00n, tenorMonths: 3, targetReturnPct: 11.5,
    installments: { count: 3, cadenceMonths: 1, firstDueOffsetMonths: -3, paidThrough: 3 },
  },
  {
    key: 'everline-commodities', legalName: 'Everline Commodities Trading Ltd', counterpartyType: 'CORPORATE', rcNumber: 'RC2202398',
    contactEmail: 'ops@everlinecommodities.example.com', purposeOfFinancing: 'Working capital for a cocoa export consolidation cycle',
    amountSoughtKobo: 130_000_000_00n, expectedSourceOfRepayment: 'Export off-take proceeds (FOB Lagos)', shariahCertRef: 'SSB-CERT-2026-026',
    riskTier: 'LOW', approvedExposureLimitKobo: 180_000_000_00n,
    facilityPurpose: 'Cocoa consolidation working capital, Q3 2026 export cycle', structureType: 'MURABAHA', amountKobo: 120_000_000_00n, tenorMonths: 9, targetReturnPct: 14.0,
    // No `installments` -- deliberately left SUBMITTED, awaiting the
    // Risk->BD->Finance->Compliance chain, so the review queue has a live item.
  },
];

interface InvestorSpec {
  key: string; fullLegalName: string; entityType: 'HNWI_INDIVIDUAL' | 'CORPORATE'; contactEmail: string; contactPhone: string;
  bvn?: string; rcNumber?: string; tin: string; address: string; sourceOfFunds: string; riskTier: 'LOW' | 'HIGH';
  productCode: string; principalKobo: bigint;
}
const INVESTORS: InvestorSpec[] = [
  { key: 'kunle', fullLegalName: 'Barrister Kunle Adewusi', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'kunle.adewusi@example.com', contactPhone: '+2348041234501',
    bvn: '22015234501', tin: 'TIN-0398234501', address: '5 Alexander Avenue, Ikoyi, Lagos', sourceOfFunds: 'Legal practice partnership income',
    riskTier: 'LOW', productCode: HF_PRODUCT_CODE, principalKobo: 8_000_000_00n },
  { key: 'ifeoma', fullLegalName: 'Dr. Ifeoma Nnamdi', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'ifeoma.nnamdi@example.com', contactPhone: '+2348051234502',
    bvn: '22015234502', tin: 'TIN-0398234502', address: '19 Independence Layout, Enugu', sourceOfFunds: 'Medical consultancy income',
    riskTier: 'LOW', productCode: ND_MANDATE_PRODUCT_CODE, principalKobo: 15_000_000_00n },
  { key: 'musa', fullLegalName: 'Alhaji Musa Danlami', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'musa.danlami@example.com', contactPhone: '+2348061234503',
    bvn: '22015234503', tin: 'TIN-0398234503', address: '11 Zaria Road, Kano', sourceOfFunds: 'Agricultural trading proceeds',
    riskTier: 'LOW', productCode: POOL_PRODUCT_CODE, principalKobo: 22_000_000_00n },
  { key: 'highgate', fullLegalName: 'Highgate Real Estate Holdings Ltd', entityType: 'CORPORATE', contactEmail: 'invest@highgaterealestate.example.com', contactPhone: '+2348071234504',
    rcNumber: 'RC1901234', tin: 'TIN-0498234504', address: '31 Kofo Abayomi Street, Victoria Island, Lagos', sourceOfFunds: 'Commercial property leasing income',
    riskTier: 'HIGH', productCode: HF_PRODUCT_CODE, principalKobo: 95_000_000_00n },
  { key: 'meridian', fullLegalName: 'Meridian Shipping & Freight Ltd', entityType: 'CORPORATE', contactEmail: 'treasury@meridianshipping.example.com', contactPhone: '+2348081234505',
    rcNumber: 'RC1901567', tin: 'TIN-0498234505', address: '2 Marina, Lagos Island, Lagos', sourceOfFunds: 'Freight-forwarding and shipping-agency revenue',
    riskTier: 'HIGH', productCode: POOL_PRODUCT_CODE, principalKobo: 140_000_000_00n },
  { key: 'folake', fullLegalName: 'Mrs. Folake Ogundipe', entityType: 'HNWI_INDIVIDUAL', contactEmail: 'folake.ogundipe@example.com', contactPhone: '+2348091234506',
    bvn: '22015234506', tin: 'TIN-0398234506', address: '7 Bode Thomas Street, Surulere, Lagos', sourceOfFunds: 'Retail business proceeds',
    riskTier: 'LOW', productCode: ND_MANDATE_PRODUCT_CODE, principalKobo: 6_000_000_00n },
];

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const authService = new AuthService(prisma, audit, new MfaService(prisma, audit));
  const rbac = new RbacService(prisma, audit, workflow, authService);
  const portalAuth = new PortalAuthService(prisma, audit);
  const investors = new InvestorService(prisma, audit, workflow, delegation, portalAuth, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const ndMandate = new NdMandateEngineService(prisma, audit, workflow);
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const letterhead = new LetterheadService(prisma, audit, delegation, workflow);
  const certificate = new CertificateService(prisma, audit, delegation, workflow, letterhead);
  const subs = new SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
  const documents = new DocumentService(prisma, delegation, audit);
  const counterparties = new CounterpartyService(prisma, audit, workflow, delegation, documents, new ScreeningGatewayService(prisma, audit, delegation, workflow, new NotificationService(prisma), new DocumentService(prisma, delegation, audit)));
  const notification = new NotificationService(prisma);
  const task = new TaskService(prisma, notification);
  const paymentReminder = new PaymentReminderService(prisma, audit, delegation, notification, task);
  void rbac; // resolved for parity with other walkthrough scripts; no new roles created here

  const staffEmails = {
    bd: 'ngozi.eze@one17capital.com', compliance: 'tunde.bakare@one17capital.com',
    ic1: 'ibrahim.yusuf@one17capital.com', risk: 'fatima.sule@one17capital.com',
    portoff: 'chidi.okafor@one17capital.com', portmgr: 'amaka.obi@one17capital.com', md: 'amara.chukwu@one17capital.com',
    finadmin: 'bola.adeyemi@one17capital.com', cio: 'emeka.nwosu@one17capital.com', invcommittee: 'grace.adeleke@one17capital.com',
  };
  const staff: Record<string, string> = {};
  for (const [label, email] of Object.entries(staffEmails)) {
    const user = await prisma.appUser.findUnique({ where: { email } });
    if (!user) fail(`Staff user ${email} not found — run scripts/walkthrough-seed.ts and scripts/invariant48-walkthrough-refresh.ts first.`);
    staff[label] = user!.id;
  }
  ok('staff roster resolved (reused, no new staff created)');

  for (const productCode of [HF_PRODUCT_CODE, POOL_PRODUCT_CODE, ND_MANDATE_PRODUCT_CODE]) {
    const product = await prisma.product.findUnique({ where: { code: productCode } });
    if (!product?.shariahApprovedAt) fail(`Product ${productCode} has no recorded Shariah approval — run scripts/invariant48-walkthrough-refresh.ts first (its §2 activates all three products).`);
  }
  const latestNav = await prisma.navRecord.findFirst({ where: { ledgerEntityCode: HF_CODE }, orderBy: { valuationDate: 'desc' } });
  if (!latestNav) fail(`No published NAV for ${HF_CODE} — run scripts/walkthrough-seed.ts first.`);
  const effectiveDate = latestNav.valuationDate;
  ok(`Reusing latest published Halal Fund NAV date (${effectiveDate.toISOString().slice(0, 10)}) as the subscription effective date`);

  // ==========================================================================
  // Part A: 6 new counterparties + facility applications + repayment schedules
  // ==========================================================================
  for (const spec of COUNTERPARTIES) {
    await step(`counterparty ${spec.legalName}`, async () => {
      let cp = await prisma.counterparty.findUnique({ where: { contactEmail: spec.contactEmail } });
      if (!cp) {
        const onboarded = await counterparties.onboard({
          legalName: spec.legalName, counterpartyType: spec.counterpartyType, rcNumber: spec.rcNumber,
          purposeOfFinancing: spec.purposeOfFinancing, amountSoughtKobo: spec.amountSoughtKobo,
          expectedSourceOfRepayment: spec.expectedSourceOfRepayment, creditBureauConsent: true,
          shariahCertRef: spec.shariahCertRef, shariahCertExpiry: new Date('2027-12-31'),
          contactEmail: spec.contactEmail, onboardedByUserId: staff.portoff,
        });
        const grades = spec.riskTier === 'HIGH'
          ? [...EIGHT_LOW_GRADES.slice(0, 7), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH' as const, rationale: 'New counterparty relationship, source-of-wealth documentation still being finalized.' }]
          : EIGHT_LOW_GRADES;
        await counterparties.recordComplianceRiskAssessment({
          counterpartyId: onboarded.id, riskMetricGrades: grades, pepSanctionsGrid: COUNTERPARTY_PEP_GRID,
          assessedByUserId: staff.compliance,
        });
        const instance = await counterparties.submitOnboardingCaseForReview(onboarded.id, staff.portoff);
        await counterparties.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: staff.ic1 });
        if (spec.riskTier === 'HIGH') {
          await counterparties.recordRiskReview({
            workflowInstanceId: instance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
            eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for the first 12 months; quarterly exposure review.',
            approvedExposureLimitKobo: spec.approvedExposureLimitKobo, approverUserId: staff.risk,
          });
          await counterparties.recordMdDecision({ workflowInstanceId: instance.id, decision: 'APPROVED', conditionsOrReason: 'Approved per Risk recommendation, enhanced monitoring in place.', approverUserId: staff.md });
        } else {
          await counterparties.recordRiskReview({
            workflowInstanceId: instance.id, periodicReviewFrequency: 'QUARTERLY',
            approvedExposureLimitKobo: spec.approvedExposureLimitKobo, approverUserId: staff.risk,
          });
        }
        const final = await counterparties.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: staff.ic1 });
        if ((final as any).status === 'APPROVED') await portalAuth.provisionForCounterparty(onboarded.id);
        cp = await prisma.counterparty.findUniqueOrThrow({ where: { id: onboarded.id } });
        ok(`counterparty onboarded: ${cp.legalName} -> ${cp.onboardingStatus} (${spec.riskTier} risk)`);
      } else {
        ok(`counterparty already on file: ${cp.legalName} (idempotent re-run)`);
      }

      let application = await prisma.counterpartyFacilityApplication.findFirst({ where: { counterpartyId: cp.id } });
      if (!application) {
        application = await counterparties.submitFacilityApplication({ counterpartyId: cp.id, requestedAmountKobo: spec.amountKobo, purpose: spec.facilityPurpose });
        ok(`facility application submitted for ${cp.legalName} (DRAFT, ₦${(spec.amountKobo / 100n).toLocaleString()})`);
      }

      let memo = await prisma.investmentMemo.findFirst({ where: { facilityApplicationId: application.id } });
      if (!memo) {
        memo = await counterparties.draftInvestmentMemo({
          facilityApplicationId: application.id, dealSummary: `${spec.facilityPurpose} — ${spec.structureType.toLowerCase()} structure, ${spec.tenorMonths}-month tenor.`,
          structureType: spec.structureType, amountKobo: spec.amountKobo, tenorMonths: spec.tenorMonths, targetReturnPct: spec.targetReturnPct,
          riskNotes: `${spec.riskTier} risk tier per onboarding assessment; exposure within Risk-approved limit.`,
          shariahNotes: `${spec.structureType} structure, certified under ${spec.shariahCertRef}.`,
          collateralNotes: 'Assignment of receivables under the underlying commercial contract.',
        }, staff.portoff);
        await counterparties.submitInvestmentMemoForCioApproval(memo.id, staff.portoff);
        ok(`investment memo drafted + submitted (${spec.structureType}, ${spec.tenorMonths}mo, ${spec.targetReturnPct}% target)`);
      }

      const freshMemo = await prisma.investmentMemo.findUniqueOrThrow({ where: { id: memo.id } });
      if (freshMemo.workflowInstanceId && freshMemo.status !== 'CIO_APPROVED' && freshMemo.status !== 'MD_APPROVED' && freshMemo.status !== 'CIO_REJECTED') {
        await step(`  ${spec.key} memo PM step`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId!, staff.portmgr); ok(`  ${spec.key} memo PM (PORT_MGR) step APPROVED`); });
        await step(`  ${spec.key} memo CIO step`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId!, staff.cio); ok(`  ${spec.key} memo CIO step APPROVED`); });
        await step(`  ${spec.key} memo IC step (long chain only)`, async () => { await counterparties.approveInvestmentMemoAsCommittee(freshMemo.workflowInstanceId!, staff.invcommittee, `IC-RES-2026-${100 + COUNTERPARTIES.indexOf(spec)}`); ok(`  ${spec.key} memo IC step APPROVED`); });
        await step(`  ${spec.key} memo MD step (long chain only)`, async () => { await counterparties.approveInvestmentMemo(freshMemo.workflowInstanceId!, staff.md); ok(`  ${spec.key} memo MD step APPROVED`); });
      }

      const checklist = await documents.getChecklistStatus('FACILITY_APPLICATION', 'counterparty_facility_application', application.id);
      for (const documentType of checklist.missing) {
        await documents.attach({ entityType: 'counterparty_facility_application', entityId: application.id, documentType, fileReference: `s3://walkthrough-demo/${spec.key}-facility/${documentType.toLowerCase()}.pdf` }, staff.finadmin);
      }
      if (checklist.missing.length > 0) ok(`${checklist.missing.length} required document(s) attached (demo references)`);

      const refreshedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
      if (refreshedApp.status === 'DRAFT') {
        const latestMemo = await prisma.investmentMemo.findFirst({ where: { facilityApplicationId: application.id }, orderBy: { version: 'desc' } });
        if (latestMemo && (latestMemo.status === 'CIO_APPROVED' || latestMemo.status === 'MD_APPROVED')) {
          await counterparties.reviewAndSubmitFacilityApplication(application.id, staff.portoff);
          ok(`facility application DRAFT -> SUBMITTED for ${cp.legalName}`);
        }
      }

      if (!spec.installments) {
        ok(`${cp.legalName}'s facility deliberately left at SUBMITTED (awaiting review chain) — demonstrates a live item in the approval queue`);
        return;
      }

      const submittedApp = await prisma.counterpartyFacilityApplication.findUniqueOrThrow({ where: { id: application.id } });
      if (submittedApp.workflowInstanceId && submittedApp.status === 'SUBMITTED') {
        await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.risk);
        await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.bd);
        await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.finadmin);
        await counterparties.approveFacilityApplicationStep(submittedApp.workflowInstanceId, staff.compliance);
        ok(`facility application review chain APPROVED for ${cp.legalName}`);
        await counterparties.markFacilityApplicationDisbursed(application.id, staff.portoff);
        await counterparties.recordFundAccountingTerms(application.id, spec.targetReturnPct, staff.finadmin);
        ok(`facility DISBURSED for ${cp.legalName}, Fund Accounting terms recorded (${spec.targetReturnPct}%)`);
      }

      const existingObligations = await prisma.counterpartyRepaymentObligation.count({ where: { counterpartyId: cp.id, facilityApplicationId: application.id } });
      if (existingObligations === 0) {
        const plan = spec.installments;
        const amountEach = spec.amountKobo / BigInt(plan.count);
        const remainder = spec.amountKobo - amountEach * BigInt(plan.count);
        let paidCount = 0;
        for (let i = 0; i < plan.count; i++) {
          const dueDate = monthsFromNow(plan.firstDueOffsetMonths + i * plan.cadenceMonths);
          const installmentAmount = i === plan.count - 1 ? amountEach + remainder : amountEach; // fold rounding remainder into the last installment
          const obligation = await paymentReminder.createObligation({
            counterpartyId: cp.id, facilityApplicationId: application.id, dueDate, amountKobo: installmentAmount, createdByUserId: staff.portoff,
          });
          if (i < plan.paidThrough) {
            // markPaid gates on COUNTERPARTY_ONBOARDING/INITIATE (same as
            // createObligation above) -- portoff (PORT_OFF) holds it,
            // finadmin (FIN_ADMIN) does not.
            await paymentReminder.markPaid(obligation.id, staff.portoff);
            paidCount++;
          }
        }
        const overdueCount = plan.firstDueOffsetMonths < 0 ? Math.max(0, Math.min(plan.count, Math.ceil(-plan.firstDueOffsetMonths / plan.cadenceMonths) + 1) - plan.paidThrough) : 0;
        ok(`repayment schedule created for ${cp.legalName}: ${plan.count} installments (${plan.cadenceMonths === 1 ? 'monthly' : 'quarterly'}), ${paidCount} PAID, ~${Math.max(0, overdueCount)} overdue-and-unpaid, remainder upcoming`);
      } else {
        ok(`repayment schedule already on file for ${cp.legalName} (${existingObligations} installments, idempotent re-run)`);
      }
    });
  }
  ok('Part A complete: 6 counterparties + facility applications + repayment schedules');

  // ==========================================================================
  // Part B: 6 new named investors, subscribed across all three product engines
  // ==========================================================================
  for (const spec of INVESTORS) {
    await step(`investor ${spec.fullLegalName}`, async () => {
      let investor = await prisma.investor.findUnique({ where: { contactEmail: spec.contactEmail } });
      if (!investor) {
        const express = await investors.onboardExpress({
          fullLegalName: spec.fullLegalName, entityType: spec.entityType, nationality: 'NG',
          bvn: spec.bvn, rcNumber: spec.rcNumber, contactEmail: spec.contactEmail, contactPhone: spec.contactPhone,
          onboardedByUserId: staff.bd, sanctionsScreenResult: 'CLEAR',
        });
        await investors.submitStage2Fields({
          investorId: express.investorId, taxIdentificationNumber: spec.tin, registeredAddress: spec.address,
          sourceOfFunds: spec.sourceOfFunds, actorUserId: staff.bd,
        });
        const grades = spec.riskTier === 'HIGH'
          ? [...NINE_LOW_GRADES.slice(0, 8), { metricCode: 'SOURCE_OF_WEALTH', grade: 'HIGH' as const, rationale: 'Corporate multi-party ownership pending further documentation.' }]
          : NINE_LOW_GRADES;
        await investors.recordComplianceRiskAssessment({
          investorId: express.investorId, riskMetricGrades: grades, pepSanctionsGrid: INVESTOR_PEP_GRID,
          complianceObservations: spec.riskTier === 'HIGH' ? 'Corporate applicant — EDD recommended.' : 'Standard profile, well documented.',
          assessedByUserId: staff.compliance,
        });
        const instance = await investors.submitOnboardingCaseForReview(express.investorId, staff.bd);
        await investors.recordIc1Review({ workflowInstanceId: instance.id, checklist: { KYC_COMPLETE: 'PASS' }, pass: true, approverUserId: staff.ic1 });
        if (spec.riskTier === 'HIGH') {
          await investors.recordRiskReview({
            workflowInstanceId: instance.id, eddChecklist: { SENIOR_MGMT_NOTIFIED: 'DONE', SOW_VERIFIED: 'DONE' },
            eddRecommendation: 'APPROVE_WITH_CONDITIONS', eddConditionsOrBasis: 'Enhanced monitoring for 12 months; quarterly source-of-funds refresh.', approverUserId: staff.risk,
          });
          await investors.recordMdDecision({ workflowInstanceId: instance.id, decision: 'APPROVED', conditionsOrReason: 'Approved per Risk recommendation.', approverUserId: staff.md });
        } else {
          await investors.recordRiskReview({ workflowInstanceId: instance.id, periodicReviewFrequency: 'ANNUAL', riskNotes: 'Standard monitoring.', approverUserId: staff.risk });
        }
        await investors.recordIc2Review({ workflowInstanceId: instance.id, checklist: { ALL_STEPS_SIGNED: 'PASS' }, outcome: 'SATISFACTORY', approverUserId: staff.ic1 });
        investor = await prisma.investor.findUniqueOrThrow({ where: { investorId: express.investorId } });
        ok(`investor onboarded: ${investor.fullLegalName} (${investor.investorId}) — ${spec.riskTier} risk`);
      } else {
        ok(`investor already on file: ${investor.fullLegalName} (idempotent re-run)`);
      }

      const existingSub = await prisma.subscriptionRequest.findFirst({ where: { investorId: investor.investorId, productCode: spec.productCode } });
      if (!existingSub) {
        const request = await subs.initiateSubscription({ investorId: investor.investorId, productCode: spec.productCode, amountKobo: spec.principalKobo, effectiveDate, initiatedByUserId: staff.portoff });
        const payerBankAccount = await prisma.investorBankAccount.create({ data: { investorId: investor.investorId, bankName: 'Walkthrough Demo Bank', accountNumber: `9${spec.key.padEnd(9, '0').slice(0, 9)}`.slice(0, 10), accountName: spec.fullLegalName } });
        await subs.approveSubscription({ workflowInstanceId: request.workflowInstanceId!, approverUserId: staff.portmgr, journalInitiatorUserId: staff.finadmin, payerBankAccountId: payerBankAccount.id });
        ok(`subscription APPROVED: ${investor.fullLegalName} -> ${spec.productCode}, ₦${(spec.principalKobo / 100n).toLocaleString()}`);
      } else {
        ok(`subscription already on file for ${investor.fullLegalName} (idempotent re-run)`);
      }
    });
  }
  ok('Part B complete: 6 named investors onboarded + subscribed');

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
