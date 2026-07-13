import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import {
  ProposeFrameworkMapVersionInput,
  AddStatementLineMappingInput,
  CreateStatementTemplateInput,
  AddStatementLineInput,
  RegisterRegulatorTemplateInput,
  AddRegulatorTemplateLineInput,
  GenerateReportRunInput,
  ReportingLifecycleError,
} from './reporting.types';

// AMD-11 / One17_Reporting_Standards_Spec_v1.md: the configuration layer
// that sits between the ledger (LedgerService) and statement generation
// (Phase 4, not built here). "Financial statements and regulatory returns
// are configuration, not code" (Reporting Spec §1) — every write here is a
// configuration row, never a hard-coded statement line or account number.
@Injectable()
export class ReportingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly ledger: LedgerService,
  ) {}

  // Reporting Spec §2: "Approval: FINCON proposes -> CEO/Board per DoA."
  // Composed the same three-step way as DelegationService.requestGrant /
  // WorkflowEngineService.initiate / attachWorkflowInstance — this service
  // does not special-case its own workflow type inside WorkflowEngineService
  // (unlike DELEGATION_GRANT's activation side effect), since "becomes
  // ACTIVE + supersedes the prior version" is reporting-specific business
  // logic, not a generic engine concern.
  async proposeFrameworkMapVersion(input: ProposeFrameworkMapVersionInput) {
    await this.assertCapability(
      input.createdByUserId,
      'ACCOUNTING_FRAMEWORK_MAP',
      'INITIATE',
      'propose a new accounting framework map version',
    );

    const latest = await this.prisma.accountingFrameworkMap.findFirst({
      orderBy: { version: 'desc' },
    });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.accountingFrameworkMap.create({
      data: {
        version,
        description: input.description,
        effectiveFrom: input.effectiveFrom,
        effectiveTo: input.effectiveTo,
        createdByUserId: input.createdByUserId,
        status: 'DRAFT',
      },
    });

    // Invariant 49(a) (CHECK11, atomicity sweep): compensating cleanup, not
    // a $transaction -- see PmsService.submitSelfScore's comment for why
    // one can't span into workflow.initiate() across service boundaries.
    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL',
        entityType: 'accounting_framework_map',
        entityId: created.id,
        initiatedByUserId: input.createdByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): see PmsService.
      // submitSelfScore's matching comment -- capability failures already
      // audit-log inside WorkflowEngineService itself; this covers every
      // other failure cause so the attempt+compensation isn't invisible.
      await this.audit.record({
        actorUserId: input.createdByUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'accounting_framework_map',
        entityId: created.id,
        after: { workflowTypeCode: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.accountingFrameworkMap.delete({ where: { id: created.id } });
      throw err;
    }

    await this.prisma.accountingFrameworkMap.update({
      where: { id: created.id },
      data: { workflowInstanceId: instance.id },
    });

    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'accounting_framework_map',
      entityId: created.id,
      after: { version, description: input.description },
    });

    return { frameworkMap: created, workflowInstance: instance };
  }

  // AMD-11.4: "an FRC harmonization pronouncement or a new SEC reporting
  // template is absorbed as new mapping versions — no migration, no code
  // change" once approved. Superseding the prior ACTIVE version (rather than
  // leaving two ACTIVE rows) is what makes "which version produced this
  // report_run" (Reporting Spec Hard Rule #4) unambiguous.
  async approveFrameworkMapVersion(
    workflowInstanceId: string,
    approverUserId: string,
  ) {
    const updated = await this.workflow.approveNextStep(
      workflowInstanceId,
      approverUserId,
    );
    if (updated.status !== 'APPROVED') return null;

    const map = await this.prisma.accountingFrameworkMap.findFirstOrThrow({
      where: { workflowInstanceId },
    });

    const [, activated] = await this.prisma.$transaction([
      this.prisma.accountingFrameworkMap.updateMany({
        where: { status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.accountingFrameworkMap.update({
        where: { id: map.id },
        data: { status: 'ACTIVE', approvedByUserId: approverUserId },
      }),
    ]);

    await this.audit.record({
      actorUserId: approverUserId,
      action: 'UPDATE',
      entityType: 'accounting_framework_map',
      entityId: map.id,
      after: { status: 'ACTIVE', version: map.version },
    });

    return activated;
  }

  async createStatementTemplate(input: CreateStatementTemplateInput) {
    await this.assertCapability(
      input.createdByUserId,
      'FINANCIAL_STATEMENTS',
      'INITIATE',
      'create a statement template',
    );
    const created = await this.prisma.statementTemplate.create({
      data: {
        basis: input.basis,
        statementCode: input.statementCode,
        name: input.name,
        createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'statement_template',
      entityId: created.id,
      after: { basis: input.basis, statementCode: input.statementCode },
    });
    return created;
  }

  async addStatementLine(input: AddStatementLineInput) {
    await this.assertCapability(
      input.createdByUserId,
      'FINANCIAL_STATEMENTS',
      'INITIATE',
      'add a statement line',
    );
    const created = await this.prisma.statementLine.create({
      data: {
        statementTemplateId: input.statementTemplateId,
        lineCode: input.lineCode,
        label: input.label,
        sortOrder: input.sortOrder,
        computationType: input.computationType,
        parentLineId: input.parentLineId,
        signConvention: input.signConvention,
        formulaExpression: input.formulaExpression,
      },
    });
    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'statement_line',
      entityId: created.id,
      after: {
        statementTemplateId: input.statementTemplateId,
        lineCode: input.lineCode,
      },
    });
    return created;
  }

  // "The only place accounts meet statements" (Reporting Spec §2). Purely
  // additive against a frameworkMapId — never updates an existing mapping
  // row or touches JournalEntry/JournalEntryLine, which is what makes
  // "remapping changes presentation without touching posted journals"
  // (UAT-AMD-11) true by construction.
  async addStatementLineMapping(input: AddStatementLineMappingInput) {
    await this.assertCapability(
      input.mappedByUserId,
      'ACCOUNTING_FRAMEWORK_MAP',
      'INITIATE',
      'map a chart-of-accounts line to a statement line',
    );

    const account = await this.prisma.chartOfAccount.findFirst({
      where: {
        ledgerEntityCode: input.ledgerEntityCode,
        accountCode: input.accountCode,
      },
    });
    if (!account) {
      throw new ReportingLifecycleError(
        `Account ${input.accountCode} does not exist on ledger entity ${input.ledgerEntityCode}.`,
      );
    }
    const line = await this.prisma.statementLine.findFirst({
      where: {
        statementTemplateId: input.statementTemplateId,
        lineCode: input.lineCode,
      },
    });
    if (!line) {
      throw new ReportingLifecycleError(
        `Statement line ${input.lineCode} does not exist on template ${input.statementTemplateId}.`,
      );
    }

    const created = await this.prisma.statementLineMapping.create({
      data: {
        frameworkMapId: input.frameworkMapId,
        chartOfAccountId: account.id,
        statementLineId: line.id,
      },
    });

    await this.audit.record({
      actorUserId: input.mappedByUserId,
      action: 'CREATE',
      entityType: 'statement_line_mapping',
      entityId: created.id,
      after: {
        frameworkMapId: input.frameworkMapId,
        accountCode: input.accountCode,
        lineCode: input.lineCode,
      },
    });

    return created;
  }

  // Reporting Spec §2/§6, "[SLOT NOW, FILL LATER]": ships empty; this method
  // is the proof that adding One17's first SEC return is a configuration
  // write, never a migration (Reporting Spec Hard Rule #6).
  async registerRegulatorTemplate(input: RegisterRegulatorTemplateInput) {
    await this.assertCapability(
      input.createdByUserId,
      'REGULATOR_TEMPLATE_REGISTRY',
      'INITIATE',
      'register a regulator template',
    );
    const created = await this.prisma.regulatorTemplate.create({
      data: {
        regulatorCode: input.regulatorCode,
        templateCode: input.templateCode,
        name: input.name,
        filingFrequency: input.filingFrequency,
        createdByUserId: input.createdByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.createdByUserId,
      action: 'CREATE',
      entityType: 'regulator_template',
      entityId: created.id,
      after: {
        regulatorCode: input.regulatorCode,
        templateCode: input.templateCode,
      },
    });
    return created;
  }

  async addRegulatorTemplateLine(
    input: AddRegulatorTemplateLineInput,
    actorUserId: string,
  ) {
    await this.assertCapability(
      actorUserId,
      'REGULATOR_TEMPLATE_REGISTRY',
      'INITIATE',
      'add a regulator template line',
    );
    const created = await this.prisma.regulatorTemplateLine.create({
      data: {
        regulatorTemplateId: input.regulatorTemplateId,
        lineCode: input.lineCode,
        label: input.label,
        sortOrder: input.sortOrder,
        mapsToStatementLineId: input.mapsToStatementLineId,
        mapsToChartOfAccountId: input.mapsToChartOfAccountId,
      },
    });
    await this.audit.record({
      actorUserId,
      action: 'CREATE',
      entityType: 'regulator_template_line',
      entityId: created.id,
      after: {
        regulatorTemplateId: input.regulatorTemplateId,
        lineCode: input.lineCode,
      },
    });
    return created;
  }

  // Reporting Spec §2: "Immutable snapshot per generated report ... record
  // the mapping + template versions that produced them." figures is the
  // account-level trial balance from LedgerService.getTrialBalance — the
  // ledger arithmetic; turning that into statement lines is Phase 4's job,
  // not modeled here.
  async generateReportRun(input: GenerateReportRunInput) {
    await this.assertCapability(
      input.generatedByUserId,
      'FINANCIAL_STATEMENTS',
      'INITIATE',
      'generate a report run',
    );

    const trialBalance = await this.ledger.getTrialBalance(
      input.ledgerEntityCode,
      input.basis,
    );
    const figures = trialBalance.map((l) => ({
      accountCode: l.accountCode,
      accountName: l.accountName,
      debitKobo: l.debitKobo.toString(),
      creditKobo: l.creditKobo.toString(),
    }));

    const created = await this.prisma.reportRun.create({
      data: {
        ledgerEntityCode: input.ledgerEntityCode,
        basis: input.basis,
        periodStart: input.periodStart,
        periodEnd: input.periodEnd,
        frameworkMapId: input.frameworkMapId,
        statementTemplateId: input.statementTemplateId,
        figures: figures,
        generatedByUserId: input.generatedByUserId,
      },
    });

    await this.audit.record({
      actorUserId: input.generatedByUserId,
      action: 'CREATE',
      entityType: 'report_run',
      entityId: created.id,
      after: {
        ledgerEntityCode: input.ledgerEntityCode,
        basis: input.basis,
        frameworkMapId: input.frameworkMapId,
        lineCount: figures.length,
      },
    });

    return created;
  }

  // ==========================================================================
  // CHECK5 item 5h (Fund Accounting screen): the presentation layer over
  // getTrialBalance() this service's own comments flagged as "Phase 4's
  // job, not modeled here" — that job is now. Grouping is by
  // ChartOfAccount.accountType, a DATA field set at CoA-load time, never a
  // hardcoded account code/line item in application code (invariant 15) —
  // this is deliberately NOT wired through StatementTemplate/
  // StatementLineMapping, since that config is unseeded (ships empty per
  // the Reporting Spec) and forcing a real screen through an empty mapping
  // table would either crash or fake data; a real BS/IS grouped by the
  // account's own type is the honest interim, not a bypass of invariant 15.
  // ==========================================================================
  async getBalanceSheet(ledgerEntityCode: string, basis: 'IFRS' | 'AAOIFI', actorUserId: string) {
    await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view a balance sheet');
    const trialBalance = await this.ledger.getTrialBalance(ledgerEntityCode, basis);
    const accounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode } });
    const typeByAccountId = new Map(accounts.map((a) => [a.id, a.accountType]));

    const bucket = { ASSET: [] as { accountCode: string; accountName: string; balanceKobo: string }[], LIABILITY: [] as any[], EQUITY: [] as any[] };
    for (const line of trialBalance) {
      const accountType = typeByAccountId.get(line.accountId);
      if (accountType === 'ASSET') {
        bucket.ASSET.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.debitKobo - line.creditKobo).toString() });
      } else if (accountType === 'LIABILITY') {
        bucket.LIABILITY.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.creditKobo - line.debitKobo).toString() });
      } else if (accountType === 'EQUITY') {
        bucket.EQUITY.push({ accountCode: line.accountCode, accountName: line.accountName, balanceKobo: (line.creditKobo - line.debitKobo).toString() });
      }
      // INCOME/EXPENSE lines belong to the Income Statement, not the Balance Sheet.
    }
    const sum = (rows: { balanceKobo: string }[]) => rows.reduce((s, r) => s + BigInt(r.balanceKobo), 0n).toString();
    return {
      ledgerEntityCode,
      basis,
      assets: bucket.ASSET,
      liabilities: bucket.LIABILITY,
      equity: bucket.EQUITY,
      totalAssetsKobo: sum(bucket.ASSET),
      totalLiabilitiesKobo: sum(bucket.LIABILITY),
      totalEquityKobo: sum(bucket.EQUITY),
    };
  }

  // Period-scoped (unlike the Balance Sheet's cumulative trial balance) —
  // an Income Statement reports activity WITHIN a period, so this queries
  // JournalEntryLine directly by entryDate rather than reusing
  // getTrialBalance's lifetime-cumulative aggregation. Still basis-aware
  // the SAME way getTrialBalance is (AMD-11.3/.d: "statements are
  // producible PER BASIS") — omitting this would silently blend a
  // BASIS_ADJUSTMENT journal tagged for one basis into every basis' income
  // statement, which is exactly the divergence AMD-11 exists to keep apart.
  async getIncomeStatement(ledgerEntityCode: string, periodStart: Date, periodEnd: Date, basis: 'IFRS' | 'AAOIFI', actorUserId: string) {
    await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view an income statement');
    const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({ where: { code: ledgerEntityCode } });
    const journalWhere =
      basis === entity.primaryBasis
        ? { journalClass: 'BASE' as const }
        : { OR: [{ journalClass: 'BASE' as const }, { journalClass: 'BASIS_ADJUSTMENT' as const, adjustmentForBasis: basis }] };

    const accounts = await this.prisma.chartOfAccount.findMany({
      where: { ledgerEntityCode, accountType: { in: ['INCOME', 'EXPENSE'] } },
    });
    const lines = accounts.length
      ? await this.prisma.journalEntryLine.findMany({
          where: { accountId: { in: accounts.map((a) => a.id) }, journalEntry: { status: 'POSTED', entryDate: { gte: periodStart, lte: periodEnd }, ...journalWhere } },
          include: { account: true },
        })
      : [];

    const byAccount = new Map<string, { accountCode: string; accountName: string; accountType: string; debitKobo: bigint; creditKobo: bigint }>();
    for (const line of lines) {
      const existing = byAccount.get(line.accountId);
      if (existing) {
        existing.debitKobo += line.debitKobo;
        existing.creditKobo += line.creditKobo;
      } else {
        byAccount.set(line.accountId, { accountCode: line.account.accountCode, accountName: line.account.accountName, accountType: line.account.accountType, debitKobo: line.debitKobo, creditKobo: line.creditKobo });
      }
    }

    const income: { accountCode: string; accountName: string; balanceKobo: string }[] = [];
    const expenses: { accountCode: string; accountName: string; balanceKobo: string }[] = [];
    let totalIncome = 0n;
    let totalExpense = 0n;
    for (const a of byAccount.values()) {
      if (a.accountType === 'INCOME') {
        const balance = a.creditKobo - a.debitKobo;
        income.push({ accountCode: a.accountCode, accountName: a.accountName, balanceKobo: balance.toString() });
        totalIncome += balance;
      } else {
        const balance = a.debitKobo - a.creditKobo;
        expenses.push({ accountCode: a.accountCode, accountName: a.accountName, balanceKobo: balance.toString() });
        totalExpense += balance;
      }
    }
    return {
      ledgerEntityCode,
      basis,
      periodStart,
      periodEnd,
      income,
      expenses,
      totalIncomeKobo: totalIncome.toString(),
      totalExpenseKobo: totalExpense.toString(),
      netIncomeKobo: (totalIncome - totalExpense).toString(),
    };
  }

  async getRecentJournals(ledgerEntityCode: string, actorUserId: string, limit = 20) {
    await this.assertCapability(actorUserId, 'FINANCIAL_STATEMENTS', 'VIEW', 'view the general ledger');
    const journals = await this.prisma.journalEntry.findMany({
      where: { ledgerEntityCode, status: 'POSTED' },
      orderBy: { entryDate: 'desc' },
      take: limit,
      include: { lines: { include: { account: true } } },
    });
    return journals.map((j) => ({
      id: j.id,
      journalReference: j.journalReference,
      entryDate: j.entryDate,
      description: j.description,
      lines: j.lines.map((l) => ({ accountCode: l.account.accountCode, accountName: l.account.accountName, debitKobo: l.debitKobo.toString(), creditKobo: l.creditKobo.toString(), description: l.description })),
    }));
  }

  private async assertCapability(
    userId: string,
    functionCode: string,
    level: 'INITIATE' | 'APPROVE' | 'VIEW',
    activity: string,
  ) {
    const { eligible } = await this.delegation.hasCapability(
      userId,
      functionCode,
      level,
    );
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'reporting_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new ReportingLifecycleError(
        `User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`,
      );
    }
  }
}
