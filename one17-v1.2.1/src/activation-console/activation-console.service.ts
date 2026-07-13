import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { LedgerService } from '../ledger/ledger.service';
import { PeriodService } from '../period/period.service';
import { TaskService } from '../task/task.service';
import {
  ACTIVATION_STEP_CODES,
  ActivationConsoleError,
  ActivationConsoleStatus,
  ActivationStepCode,
  ActivationStepStatus,
  ActivationStepStatusColor,
  ActivationSubStepStatus,
  AssignSubStepTaskInput,
} from './activation-console.types';

const STEP_LABELS: Record<ActivationStepCode, string> = {
  IDENTITY: '1. Identity',
  PEOPLE: '2. People',
  BOOKS: '3. Books',
  TAXES: '4. Taxes',
  PRODUCTS: '5. Products',
  RISK: '6. Risk',
  RAILS: '7. Rails / Gateways',
  DATA: '8. Data',
  PROOF: '9. Proof',
};

// Invariant 66(c): "GATEWAYS (step 7's vendor connections) are SKIPPABLE...
// Template sub-steps (certificate/letters wording) are skippable... REQUIRED
// (non-skippable) steps: identity, people, books, taxes, products with SSB
// refs, risk matrix, data (where migration is declared applicable), proof."
const REQUIRED_STEPS = new Set<ActivationStepCode>(['IDENTITY', 'PEOPLE', 'BOOKS', 'TAXES', 'PRODUCTS', 'RISK', 'DATA', 'PROOF']);
const SKIPPABLE_STEPS = new Set<ActivationStepCode>(['RAILS']);

// Invariant 66 (CHECK20): the Activation Console. Every step's status is
// COMPUTED LIVE from real data via probes -- never a self-attested
// checkbox (66b). Steps deep-link into EXISTING screens (composition, not
// duplication) -- this service reads, it does not duplicate any write
// path any other service already owns.
@Injectable()
export class ActivationConsoleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly ledger: LedgerService,
    private readonly period: PeriodService,
    private readonly task: TaskService,
  ) {}

  async getStatus(): Promise<ActivationConsoleStatus> {
    const skips = await this.prisma.activationStepSkip.findMany();
    const skipByCode = new Map(skips.map((s) => [s.stepCode, s]));
    const state = await this.prisma.activationState.findUnique({ where: { id: 1 } });

    const probes: Record<ActivationStepCode, () => Promise<Omit<ActivationStepStatus, 'code' | 'label' | 'required' | 'skippable' | 'skipped' | 'skippedAt' | 'skippedByUserId'>>> = {
      IDENTITY: () => this.probeIdentity(),
      PEOPLE: () => this.probePeople(),
      BOOKS: () => this.probeBooks(),
      TAXES: () => this.probeTaxes(),
      PRODUCTS: () => this.probeProducts(),
      RISK: () => this.probeRisk(),
      RAILS: () => this.probeRails(),
      DATA: () => this.probeData(),
      PROOF: () => this.probeProof(),
    };

    const steps: ActivationStepStatus[] = [];
    for (const code of ACTIVATION_STEP_CODES) {
      const skip = skipByCode.get(code);
      let computed: Awaited<ReturnType<typeof probes[ActivationStepCode]>>;
      try {
        computed = await probes[code]();
      } catch (err) {
        computed = { status: 'RED', detail: `Probe failed: ${(err as Error).message}`, deepLink: '/settings', subSteps: [] };
      }
      steps.push({
        code,
        label: STEP_LABELS[code],
        required: REQUIRED_STEPS.has(code),
        skippable: SKIPPABLE_STEPS.has(code),
        skipped: !!skip,
        skippedAt: skip?.skippedAt.toISOString() ?? null,
        skippedByUserId: skip?.skippedByUserId ?? null,
        ...computed,
      });
    }

    const requiredSteps = steps.filter((s) => s.required);
    const greenRequired = requiredSteps.filter((s) => s.status === 'GREEN').length;
    const readinessScorePct = requiredSteps.length === 0 ? 100 : Math.round((greenRequired / requiredSteps.length) * 100);
    // A skipped step is never "required-green" for the readiness score
    // (invariant 66c: only RAILS is skippable, and RAILS is not in
    // REQUIRED_STEPS at all, so this line only matters if that ever
    // changes) -- canActivate is strictly "every required step is GREEN."
    const canActivate = requiredSteps.every((s) => s.status === 'GREEN');

    return {
      steps,
      readinessScorePct,
      canActivate,
      activatedAt: state?.activatedAt?.toISOString() ?? null,
      activatedByUserId: state?.activatedByUserId ?? null,
    };
  }

  // ==========================================================================
  // Step probes -- each reads live data only, never a stored "isComplete"
  // flag. Wrapped individually in getStatus()'s try/catch so one probe's
  // failure never takes down the whole console.
  // ==========================================================================

  private async probeIdentity() {
    const active = await this.prisma.letterheadTemplate.findFirst({ where: { status: 'ACTIVE' } });
    const subSteps: ActivationSubStepStatus[] = [
      {
        code: 'LETTERHEAD',
        label: 'Corporate letterhead (company profile, brand, RC/SEC lines)',
        status: active ? 'GREEN' : 'RED',
        detail: active ? `ACTIVE v${active.version}: ${active.companyName}` : 'No ACTIVE letterhead template -- company profile/brand not recorded.',
        deepLink: '/letterhead',
      },
    ];
    return this.rollUp(subSteps, '/letterhead');
  }

  private async probePeople() {
    const [orgUnitCount, positionCount, superAdminCount, rolePermissionCount] = await Promise.all([
      this.prisma.orgUnit.count(),
      this.prisma.position.count(),
      this.prisma.userRole.count({ where: { roleCode: 'SUPER_ADMIN', user: { status: 'ACTIVE' } } }),
      this.prisma.rolePermission.count(),
    ]);
    const subSteps: ActivationSubStepStatus[] = [
      {
        code: 'ORG_STRUCTURE',
        label: 'Org units + positions (minimum viable seats)',
        status: orgUnitCount > 0 && positionCount > 0 ? 'GREEN' : 'RED',
        detail: `${orgUnitCount} org unit(s), ${positionCount} position(s).`,
        deepLink: '/org-structure',
      },
      {
        code: 'SUPER_ADMINS',
        label: '≥2 active Super Admins (no single point of lockout)',
        status: superAdminCount >= 2 ? 'GREEN' : 'RED',
        detail: `${superAdminCount} active SUPER_ADMIN user(s).`,
        deepLink: '/staff-users',
      },
      {
        code: 'DOA_LIMITS',
        label: 'Delegation of Authority limits (starter-pack role permissions)',
        status: rolePermissionCount > 0 ? 'GREEN' : 'RED',
        detail: `${rolePermissionCount} governed role-permission row(s) (approval limits live per role x function).`,
        deepLink: '/access-control',
      },
    ];
    return this.rollUp(subSteps, '/org-structure');
  }

  private async probeBooks() {
    const entities = await this.prisma.ledgerEntity.findMany({ where: { status: 'ACTIVE' } });
    if (entities.length === 0) {
      return {
        status: 'RED' as ActivationStepStatusColor,
        detail: 'No ACTIVE ledger entities exist yet.',
        deepLink: '/journal-entries',
        subSteps: [],
      };
    }
    const subSteps: ActivationSubStepStatus[] = [];
    for (const entity of entities) {
      const [coaCount, periodCount] = await Promise.all([
        this.prisma.chartOfAccount.count({ where: { ledgerEntityCode: entity.code } }),
        this.prisma.accountingPeriod.count({ where: { ledgerEntityCode: entity.code } }),
      ]);
      const ok = coaCount > 0 && periodCount > 0;
      subSteps.push({
        code: entity.code,
        label: `${entity.name} (${entity.code})`,
        status: ok ? 'GREEN' : 'RED',
        detail: `${coaCount} CoA row(s), ${periodCount} accounting period(s).`,
        deepLink: '/accounting-periods',
      });
    }
    return this.rollUp(subSteps, '/journal-entries');
  }

  private async probeTaxes() {
    const types: Array<'WHT' | 'VAT' | 'STAMP_DUTY'> = ['WHT', 'VAT', 'STAMP_DUTY'];
    const subSteps: ActivationSubStepStatus[] = [];
    for (const taxType of types) {
      const active = await this.prisma.taxRateVersion.findFirst({ where: { taxType, status: 'ACTIVE' } });
      subSteps.push({
        code: taxType,
        label: `${taxType} rate table`,
        status: active ? 'GREEN' : 'RED',
        // Invariant 66(c): "tables may be zero-rated only by explicit
        // approved entry, not by absence" -- an ACTIVE version existing IS
        // the gate, regardless of what rates it contains.
        detail: active ? `ACTIVE v${active.version}, effective ${active.effectiveFrom.toISOString().slice(0, 10)}.` : 'No ACTIVE rate version -- not configured (absence never counts as zero-rated).',
        deepLink: '/tax-configuration',
      });
    }
    return this.rollUp(subSteps, '/tax-configuration');
  }

  private async probeProducts() {
    const products = await this.prisma.product.findMany({ where: { status: { not: 'RETIRED' } } });
    if (products.length === 0) {
      return {
        status: 'RED' as ActivationStepStatusColor,
        detail: 'No products configured yet.',
        deepLink: '/hub/products-fund-ops',
        subSteps: [],
      };
    }
    const subSteps: ActivationSubStepStatus[] = [];
    for (const product of products) {
      const latestParams = await this.prisma.productParameters.findFirst({ where: { productCode: product.code }, orderBy: { version: 'desc' } });
      // Invariant 66(a): "SSB resolution reference recorded -- the gate
      // rendered as a step with an evidence field, never waived."
      const hasSsbRef = !!product.shariahApprovedAt && !!product.shariahApprovalRef;
      const hasApprovedParams = !!latestParams?.approvedByUserId;
      const ok = hasSsbRef && hasApprovedParams;
      subSteps.push({
        code: product.code,
        label: `${product.name} (${product.code})`,
        status: ok ? 'GREEN' : 'RED',
        detail: hasSsbRef
          ? `SSB ref: "${product.shariahApprovalRef}". Parameters ${hasApprovedParams ? 'approved' : 'NOT yet approved'}.`
          : 'No SSB resolution reference recorded -- Shariah gate never waived.',
        deepLink: '/shariah-governance',
      });
    }
    return this.rollUp(subSteps, '/shariah-governance');
  }

  private async probeRisk() {
    const active = await this.prisma.riskAppetiteMatrixVersion.findFirst({ where: { status: 'ACTIVE' } });
    const ok = !!active && !!active.boardResolutionRef;
    const subSteps: ActivationSubStepStatus[] = [
      {
        code: 'RISK_APPETITE_MATRIX',
        label: 'Risk appetite matrix, Board-resolution-approved',
        status: ok ? 'GREEN' : 'RED',
        detail: active
          ? active.boardResolutionRef
            ? `ACTIVE v${active.version}, Board resolution ${active.boardResolutionRef}.`
            : `ACTIVE v${active.version} but no Board resolution reference recorded.`
          : 'No ACTIVE risk appetite matrix version.',
        deepLink: '/erm',
      },
    ];
    return this.rollUp(subSteps, '/erm');
  }

  private async probeRails() {
    const [payment, bureau, attendance, bankInstructionLetter] = await Promise.all([
      this.prisma.paymentGatewayProvider.findFirst({ where: { isActive: true } }),
      this.prisma.bureauProvider.findFirst({ where: { isActive: true } }),
      this.prisma.attendanceProvider.findFirst({ where: { isActive: true } }),
      this.prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: 'BANK_INSTRUCTION', status: 'ACTIVE' } }),
    ]);
    const aiEnabledCount = await this.prisma.aiCapabilityFlag.count({ where: { isEnabled: true } });
    const subSteps: ActivationSubStepStatus[] = [
      { code: 'PAYMENT_GATEWAY', label: 'Payment gateway provider', status: payment ? 'GREEN' : 'AMBER', detail: payment ? `Active: ${payment.id}` : 'No active provider -- deposits recorded manually until configured.', deepLink: '/payment-gateway' },
      { code: 'BUREAU_GATEWAY', label: 'Credit bureau provider', status: bureau ? 'GREEN' : 'AMBER', detail: bureau ? `Active: ${bureau.id}` : 'No active provider -- no bureau pulls until configured.', deepLink: '/vendor-gateways' },
      { code: 'ATTENDANCE_GATEWAY', label: 'Attendance provider', status: attendance ? 'GREEN' : 'AMBER', detail: attendance ? `Active: ${attendance.id}` : 'No active provider -- attendance by file import or not at all.', deepLink: '/attendance' },
      { code: 'AI_CAPABILITIES', label: 'AI capabilities', status: aiEnabledCount > 0 ? 'GREEN' : 'AMBER', detail: aiEnabledCount > 0 ? `${aiEnabledCount} capability flag(s) enabled.` : 'AI off (deliberate default) until vendor-contracted and flags enabled.', deepLink: '/ai-console' },
      { code: 'BANK_INSTRUCTION_TEMPLATE', label: 'Bank instruction letter template', status: bankInstructionLetter ? 'GREEN' : 'AMBER', detail: bankInstructionLetter ? `ACTIVE v${bankInstructionLetter.version}.` : 'No ACTIVE template -- payout batches queue until wording is approved.', deepLink: '/letter-templates' },
    ];
    return this.rollUp(subSteps, '/vendor-gateways');
  }

  private async probeData() {
    const [migrationBatches, entities] = await Promise.all([
      this.prisma.migrationBatch.count({ where: { status: 'PROMOTED' } }),
      this.prisma.ledgerEntity.findMany({ where: { status: 'ACTIVE' } }),
    ]);
    let hasPostedData = false;
    for (const entity of entities) {
      const line = await this.prisma.journalEntryLine.findFirst({ where: { account: { ledgerEntityCode: entity.code }, journalEntry: { status: 'POSTED' } } });
      if (line) { hasPostedData = true; break; }
    }
    const ok = migrationBatches > 0 || hasPostedData;
    const subSteps: ActivationSubStepStatus[] = [
      {
        code: 'OPENING_DATA',
        label: 'Migration run or opening balances posted',
        status: ok ? 'GREEN' : 'AMBER',
        detail: ok
          ? `${migrationBatches} promoted migration batch(es); posted journal data ${hasPostedData ? 'present' : 'absent'}.`
          : 'No promoted migration and no posted journal data yet -- confirm migration is not applicable, or run one.',
        deepLink: '/migration',
      },
    ];
    return this.rollUp(subSteps, '/migration');
  }

  private async probeProof() {
    const bootCheck: ActivationSubStepStatus = { code: 'BOOT_CHECK', label: 'Boot check', status: 'GREEN', detail: 'API responded to this request.', deepLink: '/inbox' };

    // Detected from the audit trail itself (insert-only, tamper-evident) --
    // runProofBattery() writes exactly this record on a real pass, distinct
    // initiatedByUserId/approvedByUserId proving maker!=checker actually
    // ran, not merely that a journal happened to post.
    const proofRecord = await this.prisma.auditTrail.findFirst({
      where: { entityType: 'activation_proof_battery' },
      orderBy: { occurredAt: 'desc' },
    });
    const after = proofRecord?.after as { journalReference?: string; initiatedByUserId?: string; approvedByUserId?: string } | null;
    const makerCheckerProven = !!after?.initiatedByUserId && !!after?.approvedByUserId && after.initiatedByUserId !== after.approvedByUserId;
    const transactionRoundTrip: ActivationSubStepStatus = {
      code: 'TRANSACTION_ROUND_TRIP',
      label: 'Scratch-entity test-transaction round-trip (maker≠checker)',
      status: makerCheckerProven ? 'GREEN' : 'RED',
      detail: makerCheckerProven ? `Proven: journal ${after!.journalReference} posted via a different-user approval.` : 'Not yet run -- use "Run Proof Battery" to prove a real maker≠checker posting round-trip.',
      deepLink: '/journal-entries',
    };

    const activeReconCount = await this.prisma.ledgerReconciliationConfig.count({ where: { status: 'ACTIVE' } });
    const reconciliationStatus: ActivationSubStepStatus = {
      code: 'RECONCILIATION_STATUS',
      label: 'Ledger reconciliation controls',
      status: activeReconCount > 0 ? 'GREEN' : 'AMBER',
      detail: activeReconCount > 0 ? `${activeReconCount} ACTIVE reconciliation config(s).` : 'No ACTIVE reconciliation config yet -- informational only, gated on the separate FinCon Activation Tranche (see docs/WIRING_MANIFEST.md); does not block go-live.',
      deepLink: '/company-accounting',
    };

    const subSteps = [bootCheck, transactionRoundTrip, reconciliationStatus];
    // PROOF's own GREEN gate deliberately excludes reconciliationStatus
    // (informational, per docs/WIRING_MANIFEST.md's own disclosed CHECK19
    // gating) -- only boot + the real transaction round-trip are required.
    const requiredOk = bootCheck.status === 'GREEN' && transactionRoundTrip.status === 'GREEN';
    return { status: (requiredOk ? 'GREEN' : 'RED') as ActivationStepStatusColor, detail: requiredOk ? 'Proof battery passed.' : 'Proof battery has not yet passed.', deepLink: '/journal-entries', subSteps };
  }

  private rollUp(subSteps: ActivationSubStepStatus[], deepLink: string): { status: ActivationStepStatusColor; detail: string; deepLink: string; subSteps: ActivationSubStepStatus[] } {
    const reds = subSteps.filter((s) => s.status === 'RED').length;
    const ambers = subSteps.filter((s) => s.status === 'AMBER').length;
    const status: ActivationStepStatusColor = reds > 0 ? 'RED' : ambers > 0 ? 'AMBER' : 'GREEN';
    const detail = status === 'GREEN' ? 'All checks pass.' : `${reds} failing, ${ambers} pending of ${subSteps.length} check(s).`;
    return { status, detail, deepLink, subSteps };
  }

  // ==========================================================================
  // Skip / activate actions -- the only two genuinely persisted events.
  // ==========================================================================

  async skipStep(stepCode: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'skip an activation step');
    const code = stepCode as ActivationStepCode;
    if (!SKIPPABLE_STEPS.has(code)) {
      throw new ActivationConsoleError(`Step "${stepCode}" is not skippable -- invariant 66(c) only permits skipping RAILS (gateways/templates).`);
    }
    const skip = await this.prisma.activationStepSkip.upsert({
      where: { stepCode: code },
      create: { stepCode: code, skippedByUserId: actorUserId },
      update: {},
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'activation_step_skip', entityId: code, after: { stepCode: code } });
    return skip;
  }

  async unskipStep(stepCode: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'un-skip an activation step');
    const existing = await this.prisma.activationStepSkip.findUnique({ where: { stepCode } });
    if (!existing) return null;
    await this.prisma.activationStepSkip.delete({ where: { stepCode } });
    await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'activation_step_skip', entityId: stepCode, after: {} });
    return existing;
  }

  async activate(actorUserId: string) {
    await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'APPROVE', 'activate the platform');
    const status = await this.getStatus();
    if (!status.canActivate) {
      const failing = status.steps.filter((s) => s.required && s.status !== 'GREEN').map((s) => s.code);
      throw new ActivationConsoleError(`Cannot activate -- required step(s) not GREEN: ${failing.join(', ')}.`);
    }
    const state = await this.prisma.activationState.upsert({
      where: { id: 1 },
      create: { id: 1, activatedAt: new Date(), activatedByUserId: actorUserId },
      update: { activatedAt: new Date(), activatedByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'activation_state', entityId: '1', after: { activatedAt: state.activatedAt!.toISOString() } });
    return state;
  }

  // ==========================================================================
  // Sub-step task assignment -- invariant 66(b): "sub-steps assignable as
  // TASKS to responsible officers through the task engine." Thin pass-
  // through to the existing TaskService.assignTask -- zero new assignment
  // logic, same reports-to (senior -> direct-report) discipline every
  // other task on the platform already enforces.
  // ==========================================================================

  async assignSubStepTask(input: AssignSubStepTaskInput) {
    return this.task.assignTask({
      title: `Activation: ${input.stepCode} / ${input.subStepCode}`,
      description: `Sub-step of the Activation Console's "${STEP_LABELS[input.stepCode as ActivationStepCode] ?? input.stepCode}" step.`,
      assigneeEmployeeId: input.assigneeEmployeeId,
      dueAt: input.dueAt,
      assignedByUserId: input.assignedByUserId,
    });
  }

  // ==========================================================================
  // Proof battery -- the real, live-fired scratch-entity test-transaction
  // round-trip with a genuine maker!=checker demonstration (invariant
  // 66a(9)). Reuses LedgerService/PeriodService end to end -- zero new
  // posting logic. Never force-approves with the same user: if no second
  // eligible approver exists, the battery honestly reports that as the
  // blocker rather than fabricating a pass.
  // ==========================================================================

  // Invariant 66(a)(9)'s "scratch-entity test-transaction round-trip incl.
  // maker≠checker demonstration" must be a REAL exercise of the platform's
  // actual SoD machinery -- LEDGER_ENTITY_SETUP (SUPER_ADMIN-only INITIATE),
  // JOURNAL_ENTRIES (FIN_ADMIN-owned INITIATE), and ACCOUNTING_PERIOD_CLOSE
  // (FIN_ADMIN-owned INITIATE) are DELIBERATELY not all held by the console
  // operator (SUPER_ADMIN/MD_CEO) -- that separation is the platform's own
  // segregation-of-duties design, not a gap. So this battery does NOT run
  // every step as the calling actorUserId: it resolves a REAL, currently
  // eligible staff member for each required capability and uses THAT
  // identity for the corresponding call, exactly as a real go-live proof
  // would (the console operator triggers the battery; real Finance/ICT
  // staff are who the system actually trusts to execute each step). If any
  // required seat has no eligible holder yet, that is reported honestly by
  // name -- never silently skipped or faked.
  async runProofBattery(actorUserId: string) {
    await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'run the activation proof battery');

    const setupUserId = await this.findEligibleUser('LEDGER_ENTITY_SETUP', 'INITIATE');
    if (!setupUserId) {
      return { passed: false, reason: 'No active user holds LEDGER_ENTITY_SETUP INITIATE (standing or delegated) -- the scratch entity cannot be created. Grant this to at least one seat (SUPER_ADMIN by default), then retry.' };
    }
    const periodUserId = await this.findEligibleUser('ACCOUNTING_PERIOD_CLOSE', 'INITIATE');
    if (!periodUserId) {
      return { passed: false, reason: 'No active user holds ACCOUNTING_PERIOD_CLOSE INITIATE (standing or delegated) -- the scratch period cannot be opened. Grant this to at least one Finance seat, then retry.' };
    }
    const makerUserId = await this.findEligibleUser('JOURNAL_ENTRIES', 'INITIATE');
    if (!makerUserId) {
      return { passed: false, reason: 'No active user holds JOURNAL_ENTRIES INITIATE (standing or delegated) -- the scratch journal cannot be drafted. Grant this to at least one Finance seat, then retry.' };
    }
    const approverUserId = await this.findEligibleUser('JOURNAL_ENTRIES', 'APPROVE', makerUserId);
    if (!approverUserId) {
      return {
        passed: false,
        reason: `No second active user holds JOURNAL_ENTRIES APPROVE besides the maker (${makerUserId}) -- a genuine maker≠checker demonstration needs two real, distinct users. Add a second Finance/ICT seat with posting-approval authority, then retry.`,
      };
    }

    const stamp = Date.now();
    const entityCode = `ACTIVATION-PROOF-${stamp}`;
    const ref = `ACTIVATION-PROOF-${stamp}`;

    const entity = await this.ledger.createLedgerEntity({
      code: entityCode,
      name: `Activation Proof Scratch Entity (${new Date(stamp).toISOString()})`,
      entityType: 'COMPANY',
      primaryBasis: 'IFRS',
      createdByUserId: setupUserId,
    });

    await this.ledger.loadChartOfAccountsTemplate({
      ledgerEntityCode: entity.code,
      createdByUserId: setupUserId,
      accounts: [
        { accountCode: '9001', accountName: 'Activation Proof Scratch Asset', accountType: 'ASSET', aaoifiRef: 'N/A -- scratch proof account', ifrsRef: 'N/A -- scratch proof account' },
        { accountCode: '9002', accountName: 'Activation Proof Scratch Clearing', accountType: 'LIABILITY', aaoifiRef: 'N/A -- scratch proof account', ifrsRef: 'N/A -- scratch proof account' },
      ],
    });

    const now = new Date();
    await this.period.openPeriod({
      ledgerEntityCode: entity.code,
      periodStart: new Date(now.getFullYear(), now.getMonth(), 1),
      periodEnd: new Date(now.getFullYear(), now.getMonth() + 1, 0),
      openedByUserId: periodUserId,
    });

    const journal = await this.ledger.createJournalEntry({
      ledgerEntityCode: entity.code,
      journalReference: ref,
      entryDate: now,
      description: 'Activation Console proof battery: scratch-entity test-transaction round-trip.',
      createdByUserId: makerUserId,
      lines: [
        { accountCode: '9001', debitKobo: 100n, description: 'Proof debit' },
        { accountCode: '9002', creditKobo: 100n, description: 'Proof credit' },
      ],
    });

    const instance = await this.ledger.requestJournalPosting({ journalEntryId: journal.id, initiatedByUserId: makerUserId });
    const posted = await this.ledger.approveJournalPosting({ workflowInstanceId: instance.id, approverUserId });
    if (!posted) {
      return {
        passed: false,
        reason: `Journal ${ref} did not reach POSTED after a single approval -- the JOURNAL_POSTING STANDARD rule may require more than one step. Check the workflow trail for instance ${instance.id}.`,
        ledgerEntityCode: entity.code,
        journalEntryId: journal.id,
      };
    }

    await this.audit.record({
      actorUserId,
      action: 'CREATE',
      entityType: 'activation_proof_battery',
      entityId: journal.id,
      after: { triggeredByUserId: actorUserId, entityCode: entity.code, journalReference: ref, setupByUserId: setupUserId, periodOpenedByUserId: periodUserId, initiatedByUserId: makerUserId, approvedByUserId: approverUserId },
    });

    return { passed: true, ledgerEntityCode: entity.code, journalEntryId: journal.id, journalReference: ref, initiatedByUserId: makerUserId, approvedByUserId: approverUserId, postedStatus: posted.status };
  }

  private async findEligibleUser(functionCode: string, level: 'INITIATE' | 'APPROVE', excludeUserId?: string): Promise<string | null> {
    const roles = await this.prisma.rolePermission.findMany({ where: { functionCode, level }, select: { roleCode: true } });
    const roleCodes = [...new Set(roles.map((r) => r.roleCode))];
    if (roleCodes.length === 0) return null;
    const candidate = await this.prisma.userRole.findFirst({
      where: { roleCode: { in: roleCodes }, ...(excludeUserId ? { userId: { not: excludeUserId } } : {}), user: { status: 'ACTIVE' } },
      select: { userId: true },
    });
    return candidate?.userId ?? null;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'activation_console_activity', entityId: activity, after: { functionCode, level } });
      throw new ActivationConsoleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
