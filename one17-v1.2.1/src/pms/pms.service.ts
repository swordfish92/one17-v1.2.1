import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { AttendanceService } from '../attendance/attendance.service';
import {
  INCENTIVE_BANDS,
  GATE_SEVERITY_CONFIG,
  TAX_RULE_CONFIG_V1,
  PmsError,
  ProposeEmolumentComponentInput,
  ProposeKpiDefinitionInput,
  ApproveKpiDefinitionInput,
  ProposeWeightMatrixVersionInput,
  ApproveWeightMatrixVersionInput,
} from './pms.types';
import { formatEmployeeName } from '../common/employee-name.util';

// CHECK5 item 4 (invariant 18, SDS §3/§4/§7). Hard rules enforced here:
// zero KPI/weight/band/gate-rule/tax-rate/emolument literal (config rows
// only, invariant 10); incentive computation is insert-only (a cycle's
// EmployeeIncentiveResult is written exactly once — "corrections = reversal
// + recompute" per §7.2, never an UPDATE); the behavioural gate can only
// apply a <=100% factor (GATE_SEVERITY_CONFIG's outcomes are all <=
// FULL_RELEASE); payroll journals hit the COMPANY entity the caller
// supplies, via the standing maker-drafts/checker-approves ledger machinery
// (never posted directly).
@Injectable()
export class PmsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly ledger: LedgerService,
    private readonly attendance: AttendanceService,
  ) {}

  // ==========================================================================
  // Read models — the PMS entry screens.
  // ==========================================================================
  async listEmployees() {
    return this.prisma.employee.findMany({ include: { position: { include: { orgUnit: true } } }, orderBy: [{ surname: 'asc' }, { firstName: 'asc' }] });
  }

  async listCycles() {
    return this.prisma.appraisalCycle.findMany({ orderBy: { periodStart: 'desc' } });
  }

  async getCycleDetail(cycleId: string) {
    const [cycle, submissions, gateChecks, incentiveResults] = await Promise.all([
      this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } }),
      this.prisma.employeeScoreSubmission.findMany({ where: { appraisalCycleId: cycleId }, include: { employee: true, kpiScores: { include: { kpiDefinition: true } } } }),
      this.prisma.behaviouralGateCheck.findMany({ where: { appraisalCycleId: cycleId } }),
      this.prisma.employeeIncentiveResult.findMany({ where: { appraisalCycleId: cycleId } }),
    ]);
    return {
      cycle,
      submissions,
      gateChecks,
      incentiveResults: incentiveResults.map((r) => ({
        ...r,
        totalEmolumentKobo: r.totalEmolumentKobo.toString(),
        incentivePoolKobo: r.incentivePoolKobo.toString(),
        preGateIncentiveKobo: r.preGateIncentiveKobo.toString(),
        finalIncentiveKobo: r.finalIncentiveKobo.toString(),
      })),
    };
  }

  async listPayrollRuns() {
    const runs = await this.prisma.payrollRun.findMany({
      include: { lines: { include: { employee: true } } },
      orderBy: { generatedAt: 'desc' },
    });
    // PayrollRun.workflowInstanceId is a plain column, not a Prisma relation
    // (no back-FK on WorkflowInstance) — a second lookup, not an N+1, since
    // it's one batched findMany keyed on the ids already in hand. Surfaced
    // so the page can show REJECTED (the workflow's own terminal state)
    // even though PayrollRunStatus itself has no REJECTED value — there is
    // no dedicated "reject a payroll run" side effect to run, so rejection
    // stays a generic WorkflowEngineService.reject(), same as every
    // JOURNAL_POSTING instance with no owning side-effect.
    const instanceIds = runs.map((r) => r.workflowInstanceId).filter((id): id is string => !!id);
    const instances = instanceIds.length
      ? await this.prisma.workflowInstance.findMany({ where: { id: { in: instanceIds } } })
      : [];
    const instanceById = new Map(instances.map((i) => [i.id, i]));
    return runs.map((r) => ({
      ...r,
      workflowStatus: r.workflowInstanceId ? (instanceById.get(r.workflowInstanceId)?.status ?? null) : null,
      lines: r.lines.map((l) => ({
        ...l,
        employee: { surname: l.employee.surname, firstName: l.employee.firstName },
        grossKobo: l.grossKobo.toString(), payeKobo: l.payeKobo.toString(), pensionKobo: l.pensionKobo.toString(),
        nhfKobo: l.nhfKobo.toString(), incentiveKobo: l.incentiveKobo.toString(), netPayKobo: l.netPayKobo.toString(),
      })),
    }));
  }

  // ==========================================================================
  // Reference config (incentive bands, gate severity map, tax rules).
  // ==========================================================================
  async seedReferenceData(): Promise<{ bands: number; gateSeverities: number; taxRuleVersion: number }> {
    for (const b of INCENTIVE_BANDS) {
      const existing = await this.prisma.incentiveBandConfig.findFirst({ where: { minScorePct: b.minScorePct, isActive: true } });
      if (!existing) await this.prisma.incentiveBandConfig.create({ data: b });
    }
    for (const g of GATE_SEVERITY_CONFIG) {
      await this.prisma.pmsGateSeverityConfig.upsert({
        where: { severity: g.severity },
        create: { severity: g.severity, outcome: g.outcome, cappedPct: g.cappedPct },
        update: { outcome: g.outcome, cappedPct: g.cappedPct },
      });
    }
    const existingTax = await this.prisma.taxRuleConfig.findUnique({ where: { version: TAX_RULE_CONFIG_V1.version } });
    if (!existingTax) {
      await this.prisma.taxRuleConfig.create({
        data: {
          version: TAX_RULE_CONFIG_V1.version,
          consolidatedReliefFlatKobo: TAX_RULE_CONFIG_V1.consolidatedReliefFlatKobo,
          consolidatedReliefPctOfGross: TAX_RULE_CONFIG_V1.consolidatedReliefPctOfGross,
          bands: TAX_RULE_CONFIG_V1.bands as any,
          pensionEmployeePct: TAX_RULE_CONFIG_V1.pensionEmployeePct,
          nhfPct: TAX_RULE_CONFIG_V1.nhfPct,
          status: 'DRAFT',
          effectiveFrom: new Date(),
        },
      });
    }
    return { bands: INCENTIVE_BANDS.length, gateSeverities: GATE_SEVERITY_CONFIG.length, taxRuleVersion: TAX_RULE_CONFIG_V1.version };
  }

  async validateTaxRuleConfig(version: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PMS_PAYROLL', 'APPROVE', 'validate (FINCON) a tax_rule_config version');
    return this.prisma.taxRuleConfig.update({ where: { version }, data: { status: 'ACTIVE', validatedByUserId: actorUserId } });
  }

  // ==========================================================================
  // Salary/Emolument structure (invariant 37e) — cadre x notch x component,
  // versioned + governed. "ACTIVE" is scoped to the exact (cadre, notch,
  // component) tuple, same "supersede via a new row" pattern as
  // RiskService.approveMatrixVersion, just scoped narrower.
  // ==========================================================================
  async listEmolumentStructure() {
    const rows = await this.prisma.emolumentStructure.findMany({
      orderBy: [{ cadre: 'asc' }, { notch: 'asc' }, { component: 'asc' }, { version: 'desc' }],
    });
    const instanceIds = rows.map((r) => r.workflowInstanceId).filter((id): id is string => !!id);
    const instances = instanceIds.length
      ? await this.prisma.workflowInstance.findMany({ where: { id: { in: instanceIds } } })
      : [];
    const instanceById = new Map(instances.map((i) => [i.id, i]));
    return rows.map((r) => ({
      ...r,
      annualAmountKobo: r.annualAmountKobo.toString(),
      workflowStatus: r.workflowInstanceId ? (instanceById.get(r.workflowInstanceId)?.status ?? null) : null,
    }));
  }

  async proposeEmolumentComponent(input: ProposeEmolumentComponentInput) {
    await this.assertCapability(input.proposedByUserId, 'EMOLUMENT_STRUCTURE_MANAGEMENT', 'INITIATE', 'propose an emolument structure component');

    const latest = await this.prisma.emolumentStructure.findFirst({
      where: { cadre: input.cadre, notch: input.notch, component: input.component },
      orderBy: { version: 'desc' },
    });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.emolumentStructure.create({
      data: {
        cadre: input.cadre, notch: input.notch, component: input.component, componentType: input.componentType,
        annualAmountKobo: input.annualAmountKobo, taxable: input.taxable, effectiveFrom: input.effectiveFrom,
        version, status: 'DRAFT', createdByUserId: input.proposedByUserId,
      },
    });

    const instance = await this.workflow.initiate({
      workflowTypeCode: 'EMOLUMENT_STRUCTURE_APPROVAL',
      entityType: 'emolument_structure',
      entityId: created.id,
      initiatedByUserId: input.proposedByUserId,
      scenario: 'STANDARD',
    });
    await this.prisma.emolumentStructure.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });

    await this.audit.record({
      actorUserId: input.proposedByUserId, action: 'CREATE', entityType: 'emolument_structure', entityId: created.id,
      after: { cadre: input.cadre, notch: input.notch, component: input.component, version, annualAmountKobo: input.annualAmountKobo.toString() },
    });
    return { component: created, workflowInstance: instance };
  }

  async approveEmolumentComponent(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const proposed = await this.prisma.emolumentStructure.findFirstOrThrow({ where: { workflowInstanceId } });
    const [, activated] = await this.prisma.$transaction([
      this.prisma.emolumentStructure.updateMany({
        where: { cadre: proposed.cadre, notch: proposed.notch, component: proposed.component, status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.emolumentStructure.update({
        where: { id: proposed.id },
        data: { status: 'ACTIVE', approvedByUserId: approverUserId },
      }),
    ]);

    await this.audit.record({
      actorUserId: approverUserId, action: 'UPDATE', entityType: 'emolument_structure', entityId: proposed.id,
      after: { status: 'ACTIVE', cadre: proposed.cadre, notch: proposed.notch, component: proposed.component, version: proposed.version },
    });
    return activated;
  }

  // ==========================================================================
  // PMS strategy-spine: KPI definitions + class-weighting matrix (invariant
  // 51c2, CHECK12). Both were seed-only before this build — DRAFT rows with
  // no propose/approve service, which is WHY getRoleScorecard below has
  // always returned an empty scorecard in every real environment (it only
  // ever reads status: 'ACTIVE'). This section is what makes scoring
  // actually work end to end, not just adds screens.
  // ==========================================================================
  async listEnterpriseKras() {
    return this.prisma.enterpriseKra.findMany({ include: { orgUnit: true }, orderBy: { code: 'asc' } });
  }

  async listKpiDefinitions() {
    return this.prisma.kpiDefinition.findMany({ include: { kra: true }, orderBy: [{ kraCode: 'asc' }, { tier: 'asc' }] });
  }

  // @@unique([kraCode, tier]) means this only ever creates a row — there is
  // no pre-existing (kraCode, tier) row to amend. An ACTIVE or still-DRAFT
  // row for the same pair is refused outright (amendment of an established
  // KPI definition is parked, not built here — same "never invent scope"
  // discipline as petty cash's journal wiring).
  async proposeKpiDefinition(input: ProposeKpiDefinitionInput) {
    await this.assertCapability(input.proposedByUserId, 'KPI_DEFINITION_MANAGEMENT', 'INITIATE', 'propose a new KPI definition');

    const kra = await this.prisma.enterpriseKra.findUnique({ where: { code: input.kraCode } });
    if (!kra) throw new PmsError(`KRA ${input.kraCode} does not exist.`);

    const existing = await this.prisma.kpiDefinition.findUnique({ where: { kraCode_tier: { kraCode: input.kraCode, tier: input.tier } } });
    if (existing) {
      throw new PmsError(
        `A KPI definition already exists for KRA ${input.kraCode} / tier ${input.tier} (status ${existing.status}) — amending an established definition is not in this build's scope; park the change.`,
      );
    }

    const created = await this.prisma.kpiDefinition.create({
      data: {
        kraCode: input.kraCode, tier: input.tier, kpiText: input.kpiText, kpiClass: input.kpiClass,
        objectiveText: input.objectiveText, exampleActivity: input.exampleActivity,
        measurementBasis: input.measurementBasis ?? 'MANUAL', frequency: input.frequency,
        status: 'DRAFT', proposedByUserId: input.proposedByUserId,
      },
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'KPI_DEFINITION_APPROVAL',
        entityType: 'kpi_definition',
        entityId: created.id,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'kpi_definition', entityId: created.id,
        after: { workflowTypeCode: 'KPI_DEFINITION_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.kpiDefinition.delete({ where: { id: created.id } });
      throw err;
    }

    return this.prisma.kpiDefinition.update({ where: { id: created.id }, data: { workflowInstanceId: instance.id } });
  }

  async approveKpiDefinition(input: ApproveKpiDefinitionInput) {
    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const def = await this.prisma.kpiDefinition.findFirstOrThrow({ where: { workflowInstanceId: input.workflowInstanceId } });
    const activated = await this.prisma.kpiDefinition.update({
      where: { id: def.id },
      data: { status: 'ACTIVE', approvedByUserId: input.approverUserId },
    });

    await this.audit.record({
      actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'kpi_definition', entityId: def.id,
      after: { status: 'ACTIVE', kraCode: def.kraCode, tier: def.tier, kpiClass: def.kpiClass },
    });
    return activated;
  }

  async listPendingKpiDefinitions() {
    return this.prisma.kpiDefinition.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, include: { kra: true }, orderBy: { createdAt: 'asc' } });
  }

  async listWeightMatrix() {
    return this.prisma.kpiWeightMatrix.findMany({ orderBy: [{ orgUnitCode: 'asc' }, { tier: 'asc' }, { kpiClass: 'asc' }, { version: 'desc' }] });
  }

  // KPI class-weighting matrix (CEO ruling 8-Jul-2026): versioned exactly
  // like RiskAppetiteMatrixVersion, scoped to (orgUnitCode, tier) rather
  // than global — all 4 KpiClass rows of one proposal share the same
  // version number AND workflowInstanceId (set together after
  // workflow.initiate returns), since KpiWeightMatrix is flat rows, not a
  // header+detail pair. Σ=100% is enforced here as a fail-fast check on top
  // of the DB CHECK constraint that already guards ACTIVE rows.
  async proposeWeightMatrixVersion(input: ProposeWeightMatrixVersionInput) {
    await this.assertCapability(input.proposedByUserId, 'KPI_WEIGHT_MATRIX', 'INITIATE', 'propose a new KPI class-weighting matrix version');

    const classes: ('CORE' | 'STRATEGIC' | 'SECONDARY' | 'PROCESS_INTEGRITY')[] = ['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY'];
    const seenClasses = new Set(input.weights.map((w) => w.kpiClass));
    if (seenClasses.size !== 4 || !classes.every((c) => seenClasses.has(c))) {
      throw new PmsError(`A weight matrix proposal must supply exactly one weightPct for each of ${classes.join(', ')}.`);
    }
    const sum = input.weights.reduce((total, w) => total + w.weightPct, 0);
    if (Math.abs(sum - 100) > 0.01) {
      throw new PmsError(`Weight percentages for ${input.orgUnitCode} / ${input.tier} must sum to 100% — got ${sum}%.`);
    }

    const latest = await this.prisma.kpiWeightMatrix.findFirst({
      where: { orgUnitCode: input.orgUnitCode, tier: input.tier },
      orderBy: { version: 'desc' },
    });
    const version = (latest?.version ?? 0) + 1;

    const created = await this.prisma.kpiWeightMatrix.createManyAndReturn({
      data: input.weights.map((w) => ({
        orgUnitCode: input.orgUnitCode, tier: input.tier, kpiClass: w.kpiClass, weightPct: w.weightPct,
        version, status: 'DRAFT', createdByUserId: input.proposedByUserId,
      })),
    });

    let instance;
    try {
      instance = await this.workflow.initiate({
        workflowTypeCode: 'KPI_WEIGHT_MATRIX_APPROVAL',
        entityType: 'kpi_weight_matrix',
        entityId: `${input.orgUnitCode}:${input.tier}:${version}`,
        initiatedByUserId: input.proposedByUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      await this.audit.record({
        actorUserId: input.proposedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'kpi_weight_matrix',
        entityId: `${input.orgUnitCode}:${input.tier}:${version}`,
        after: { workflowTypeCode: 'KPI_WEIGHT_MATRIX_APPROVAL', reason: (err as Error).message },
      });
      await this.prisma.kpiWeightMatrix.deleteMany({ where: { orgUnitCode: input.orgUnitCode, tier: input.tier, version } });
      throw err;
    }

    await this.prisma.kpiWeightMatrix.updateMany({
      where: { orgUnitCode: input.orgUnitCode, tier: input.tier, version },
      data: { workflowInstanceId: instance.id },
    });

    return { rows: created, workflowInstance: instance };
  }

  // Invariant 51(c2) KPI class-weighting addendum: "never retroactive on an
  // open or scored cycle" — the same guard shape as EmployeeLifecycleService.
  // decideIncentivePctChange, checked BEFORE consuming the approval step so
  // a blocked activation leaves the workflow instance untouched (still
  // PENDING_APPROVAL) for the approver to retry once every affected cycle
  // reaches INCENTIVE_COMPUTED/PAID/CLOSED. Scoped to employees whose
  // position sits in the proposal's org unit AND tier (via cadre_tier_map),
  // mirroring getRoleScorecard's own (orgUnitCode, tier) scoping exactly.
  async approveWeightMatrixVersion(input: ApproveWeightMatrixVersionInput) {
    const rows = await this.prisma.kpiWeightMatrix.findMany({ where: { workflowInstanceId: input.workflowInstanceId } });
    if (rows.length === 0) throw new PmsError(`No kpi_weight_matrix rows found for workflow instance ${input.workflowInstanceId}.`);
    const { orgUnitCode, tier, version } = rows[0];

    const affectedTierCadres = await this.prisma.cadreTierMap.findMany({ where: { tier }, select: { cadre: true } });
    const affectedCadres = affectedTierCadres.map((c) => c.cadre);
    const inFlightSubmission = await this.prisma.employeeScoreSubmission.findFirst({
      where: {
        employee: { position: { orgUnitCode, cadre: { in: affectedCadres } } },
        appraisalCycle: { status: { notIn: ['INCENTIVE_COMPUTED', 'PAID', 'CLOSED'] } },
      },
      include: { appraisalCycle: true },
    });
    if (inFlightSubmission) {
      throw new PmsError(
        `Org unit ${orgUnitCode} / tier ${tier} has an in-flight PMS cycle (${inFlightSubmission.appraisalCycle.id}, status ${inFlightSubmission.appraisalCycle.status}) — a weight-matrix version cannot be approved until that cycle reaches INCENTIVE_COMPUTED (invariant 51c2: never retroactive). Retry once the cycle closes.`,
      );
    }

    const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
    if (updated.status !== 'APPROVED') return null;

    const [, activated] = await this.prisma.$transaction([
      this.prisma.kpiWeightMatrix.updateMany({
        where: { orgUnitCode, tier, status: 'ACTIVE' },
        data: { status: 'SUPERSEDED' },
      }),
      this.prisma.kpiWeightMatrix.updateMany({
        where: { orgUnitCode, tier, version },
        data: { status: 'ACTIVE', approvedByUserId: input.approverUserId },
      }),
    ]);

    await this.audit.record({
      actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'kpi_weight_matrix', entityId: `${orgUnitCode}:${tier}:${version}`,
      after: { status: 'ACTIVE', orgUnitCode, tier, version },
    });
    return activated;
  }

  async listPendingWeightMatrixProposals() {
    return this.prisma.kpiWeightMatrix.findMany({ where: { status: 'DRAFT', workflowInstanceId: { not: null } }, orderBy: { createdAt: 'asc' } });
  }

  // ==========================================================================
  // Role scorecard (SDS §1) — the base case is a pure derivation, never
  // stored; only the exception (individual override) is a governed row.
  // ==========================================================================
  async getEmployeeScorecard(employeeId: string) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: employeeId } });
    return this.getRoleScorecard(employee.positionId, employeeId);
  }

  // Self-service, gated on PMS_SELF_SCORE only — deliberately NOT the same
  // endpoint as getCycleDetail (which requires PMS_CYCLE_MANAGEMENT VIEW):
  // a plain employee submitting their own score has no business seeing
  // everyone else's scores, and shouldn't need management-level visibility
  // just to reach their own self-score form.
  async getMyStatus(appUserId: string, cycleId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId } });
    if (!employee) throw new PmsError(`No employee record is linked to this login — self-scoring requires an employee.app_user_id link.`);
    const [cycle, scorecard, existingSubmission] = await Promise.all([
      this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } }),
      this.getRoleScorecard(employee.positionId, employee.id),
      this.prisma.employeeScoreSubmission.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: employee.id } } }),
    ]);
    return { employeeId: employee.id, employeeName: formatEmployeeName(employee), cycle, scorecard, existingSubmission };
  }

  // Invariant 29(a) "MY PERFORMANCE summary": read-only over PMS data the
  // employee already owns (their own submissions/incentive results) — no
  // new table, a different shaped read over the same rows getMyStatus/
  // getCycleDetail already query.
  async getMyPerformanceSummary(appUserId: string) {
    const employee = await this.prisma.employee.findFirst({ where: { appUserId } });
    if (!employee) throw new PmsError(`No employee record is linked to this login — a performance summary requires an employee.app_user_id link.`);
    const [submissions, incentiveResults] = await Promise.all([
      this.prisma.employeeScoreSubmission.findMany({
        where: { employeeId: employee.id },
        include: { appraisalCycle: true, kpiScores: { include: { kpiDefinition: true } } },
        orderBy: { submittedAt: 'desc' },
      }),
      this.prisma.employeeIncentiveResult.findMany({ where: { employeeId: employee.id }, orderBy: { computedAt: 'desc' } }),
    ]);
    return {
      employeeId: employee.id,
      submissions,
      incentiveResults: incentiveResults.map((r) => ({
        ...r,
        totalEmolumentKobo: r.totalEmolumentKobo.toString(),
        incentivePoolKobo: r.incentivePoolKobo.toString(),
        preGateIncentiveKobo: r.preGateIncentiveKobo.toString(),
        finalIncentiveKobo: r.finalIncentiveKobo.toString(),
      })),
    };
  }

  async getRoleScorecard(positionId: string, employeeId?: string) {
    const position = await this.prisma.position.findUniqueOrThrow({ where: { id: positionId } });
    const tierMap = await this.prisma.cadreTierMap.findUnique({ where: { cadre: position.cadre } });
    if (!tierMap) throw new PmsError(`No cadre_tier_map row for cadre "${position.cadre}" — cannot derive a scorecard without a governed tier mapping.`);

    const [kpiDefs, weightRows] = await Promise.all([
      this.prisma.kpiDefinition.findMany({ where: { tier: tierMap.tier, status: 'ACTIVE', kra: { orgUnitCode: position.orgUnitCode } } }),
      this.prisma.kpiWeightMatrix.findMany({ where: { orgUnitCode: position.orgUnitCode, tier: tierMap.tier, status: 'ACTIVE' } }),
    ]);
    const weightByClass = new Map(weightRows.map((w) => [w.kpiClass, Number(w.weightPct)]));
    // kpi_weight_matrix's weight is per CLASS as a whole (memo's weight
    // tables), not per individual KPI — when more than one KRA's tiered KPI
    // shares a class (the common case), the class weight is split evenly
    // across them so the scorecard's weights still sum to the class total
    // (and the whole scorecard to 100%), never double-counted per KPI.
    const kpiCountByClass = new Map<string, number>();
    for (const k of kpiDefs) kpiCountByClass.set(k.kpiClass, (kpiCountByClass.get(k.kpiClass) ?? 0) + 1);

    const overrides = employeeId
      ? await this.prisma.roleScorecardOverride.findMany({ where: { employeeId, status: 'ACTIVE' } })
      : [];
    const overrideByKpi = new Map(overrides.map((o) => [o.kpiDefinitionId, Number(o.overrideWeightPct)]));

    return kpiDefs.map((k) => {
      const classWeight = weightByClass.get(k.kpiClass) ?? 0;
      const kpiCount = kpiCountByClass.get(k.kpiClass) ?? 1;
      return {
        kpiDefinitionId: k.id,
        kpiText: k.kpiText,
        kpiClass: k.kpiClass,
        weightPct: overrideByKpi.get(k.id) ?? classWeight / kpiCount,
        overridden: overrideByKpi.has(k.id),
      };
    });
  }

  async proposeScorecardOverride(input: { employeeId: string; kpiDefinitionId: string; overrideWeightPct: number; reason: string; createdByUserId: string }) {
    await this.assertCapability(input.createdByUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'propose a role scorecard override');
    const override = await this.prisma.roleScorecardOverride.create({
      data: { employeeId: input.employeeId, kpiDefinitionId: input.kpiDefinitionId, overrideWeightPct: input.overrideWeightPct, reason: input.reason, createdByUserId: input.createdByUserId },
    });
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PMS_SCORECARD_OVERRIDE',
      entityType: 'role_scorecard_override',
      entityId: override.id,
      initiatedByUserId: input.createdByUserId,
      scenario: 'STANDARD',
    });
    return this.prisma.roleScorecardOverride.update({ where: { id: override.id }, data: { workflowInstanceId: workflowInstance.id } });
  }

  async approveScorecardOverride(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      await this.prisma.roleScorecardOverride.update({ where: { workflowInstanceId }, data: { status: 'ACTIVE' } });
    }
    return updated;
  }

  // ==========================================================================
  // Activity reporting (SDS §1 Level 6) — evidence-gathering, not a
  // governance-gated action.
  // ==========================================================================
  async logActivity(input: { employeeId: string; kpiDefinitionId: string; activityText: string; workflowInstanceRef?: string; taskRef?: string }) {
    return this.prisma.activityReport.create({ data: input });
  }

  // ==========================================================================
  // Appraisal / incentive cycle lifecycle (SDS §3.1).
  // ==========================================================================
  async startCycle(input: { cycleType: 'INCENTIVE_CYCLE' | 'ANNUAL_APPRAISAL'; orgUnitCode?: string; periodStart: Date; periodEnd: Date; actorUserId: string }) {
    await this.assertCapability(input.actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'start an appraisal/incentive cycle');
    return this.prisma.appraisalCycle.create({
      data: { cycleType: input.cycleType, orgUnitCode: input.orgUnitCode, periodStart: input.periodStart, periodEnd: input.periodEnd, status: 'OPEN' },
    });
  }

  async openForScoring(cycleId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'open a cycle for scoring');
    const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
    if (cycle.status !== 'OPEN') throw new PmsError(`Cannot open cycle ${cycleId} for scoring: status is ${cycle.status}, not OPEN.`);
    return this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'SCORING' } });
  }

  // Self-only: the calling AppUser must be the employee's own linked login
  // (SDS §3.2 "staff self-score" — this is the FIRST link, not a staff
  // proxy for someone else).
  async submitSelfScore(input: { cycleId: string; employeeId: string; scores: { kpiDefinitionId: string; selfScorePct: number }[]; actorUserId: string }) {
    const employee = await this.prisma.employee.findUniqueOrThrow({ where: { id: input.employeeId } });
    if (employee.appUserId !== input.actorUserId) {
      throw new PmsError(`User ${input.actorUserId} cannot submit a self-score on behalf of employee ${input.employeeId} — self-scoring is restricted to the employee's own linked login.`);
    }
    const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: input.cycleId } });
    if (cycle.status !== 'SCORING') throw new PmsError(`Cannot submit a score for cycle ${input.cycleId}: status is ${cycle.status}, not SCORING.`);

    const submission = await this.prisma.employeeScoreSubmission.create({
      data: { appraisalCycleId: input.cycleId, employeeId: input.employeeId, status: 'SELF_SCORED' },
    });
    await this.prisma.employeeKpiScore.createMany({
      data: input.scores.map((s) => ({ employeeScoreSubmissionId: submission.id, kpiDefinitionId: s.kpiDefinitionId, selfScorePct: s.selfScorePct })),
    });
    // Invariant 49(a) (CHECK11, atomicity sweep): workflow.initiate() is
    // itself safe in isolation (its capability check runs BEFORE any write,
    // so it either writes cleanly or throws before writing anything) --
    // the risk here is entirely the two rows just created above. A real
    // DB transaction can't span into workflow.initiate() (it runs on a
    // separately-injected WorkflowEngineService instance against the base
    // PrismaService, not a `tx` client, so wrapping this call in
    // prisma.$transaction would not actually make initiate()'s write
    // participate). Compensating cleanup achieves the same observable
    // guarantee -- no dangling submission survives a failed initiate() --
    // without threading a transaction client through every one of
    // WorkflowEngineService's ~30 other call sites codebase-wide.
    let workflowInstance;
    try {
      workflowInstance = await this.workflow.initiate({
        workflowTypeCode: 'PMS_SCORE_VALIDATION',
        entityType: 'employee_score_submission',
        entityId: submission.id,
        initiatedByUserId: input.actorUserId,
        scenario: 'STANDARD',
      });
    } catch (err) {
      // Invariant 49(b2) (CHECK11 advisor ruling): a capability-ineligible
      // initiate() failure already audit-logs via PERMISSION_DENIED inside
      // WorkflowEngineService itself -- this covers every OTHER failure
      // cause (missing/misconfigured ApprovalRule, a raw DB error), which
      // would otherwise vanish along with the row being compensated away.
      await this.audit.record({
        actorUserId: input.actorUserId,
        action: 'INITIATE_FAILED_COMPENSATED',
        entityType: 'employee_score_submission',
        entityId: submission.id,
        after: { workflowTypeCode: 'PMS_SCORE_VALIDATION', reason: (err as Error).message },
      });
      await this.prisma.employeeKpiScore.deleteMany({ where: { employeeScoreSubmissionId: submission.id } });
      await this.prisma.employeeScoreSubmission.delete({ where: { id: submission.id } });
      throw err;
    }
    return this.prisma.employeeScoreSubmission.update({ where: { id: submission.id }, data: { workflowInstanceId: workflowInstance.id } });
  }

  // Supervisor / SAU QA / Chief steps all flow through here (each step
  // requires a DIFFERENT PlatformFunction, per the ApprovalRule — see
  // seed.ts's PMS_SCORE_VALIDATION_STANDARD rule). Any step may adjust a
  // score before approving; the self score is never silently overwritten —
  // validatedScorePct starts null and is explicitly set.
  async adjustValidatedScore(submissionId: string, kpiDefinitionId: string, validatedScorePct: number, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PMS_SUPERVISOR_VALIDATION', 'INITIATE', 'adjust a validated KPI score');
    const submission = await this.prisma.employeeScoreSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.status === 'VALIDATED' || submission.status === 'REJECTED') {
      throw new PmsError(`Cannot adjust scores on submission ${submissionId}: status is ${submission.status}, already finalized.`);
    }
    return this.prisma.employeeKpiScore.update({
      where: { employeeScoreSubmissionId_kpiDefinitionId: { employeeScoreSubmissionId: submissionId, kpiDefinitionId } },
      data: { validatedScorePct },
    });
  }

  async validateScoreStep(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      await this.prisma.employeeScoreSubmission.update({ where: { workflowInstanceId }, data: { status: 'VALIDATED' } });
    }
    return updated;
  }

  // ==========================================================================
  // Behavioural gate (SDS §3.4) — can only protect or reduce, never
  // increase: every GateOutcome maps to a factor <= 1.
  // ==========================================================================
  async recordBehaviouralGate(input: {
    cycleId: string; employeeId: string; attendanceOk: boolean; ethicalConductOk: boolean; trendsViolation?: boolean;
    disciplinaryNote?: string; evidenceRef?: string; severity: string; assessedByUserId: string;
  }) {
    await this.assertCapability(input.assessedByUserId, 'PMS_BEHAVIOURAL_GATE', 'INITIATE', 'record a behavioural gate check');
    const severityConfig = await this.prisma.pmsGateSeverityConfig.findUnique({ where: { severity: input.severity } });
    if (!severityConfig) throw new PmsError(`No pms_gate_severity_config row for severity "${input.severity}" — cannot determine gate outcome without governed config.`);
    return this.prisma.behaviouralGateCheck.upsert({
      where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
      create: {
        appraisalCycleId: input.cycleId, employeeId: input.employeeId, attendanceOk: input.attendanceOk, ethicalConductOk: input.ethicalConductOk,
        trendsViolation: input.trendsViolation ?? false, disciplinaryNote: input.disciplinaryNote, evidenceRef: input.evidenceRef,
        outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct, assessedByUserId: input.assessedByUserId,
      },
      update: {
        attendanceOk: input.attendanceOk, ethicalConductOk: input.ethicalConductOk, trendsViolation: input.trendsViolation ?? false,
        disciplinaryNote: input.disciplinaryNote, evidenceRef: input.evidenceRef, outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
      },
    });
  }

  // ==========================================================================
  // Invariant 25(1) (Check-6 reminder-ladder tranche): task-default -> PMS
  // behavioural-gate feed. This is a SEVERITY INPUT into the very same gate
  // recordBehaviouralGate() above writes — never a second, competing gate —
  // so "can only protect or reduce, never increase" governs this feed too:
  // it may only TIGHTEN an existing outcome, never relax one HR already
  // recorded (or a harsher outcome an earlier sweep already applied). HR's
  // own attendanceOk/ethicalConductOk findings are left untouched; this
  // path only ever moves `outcome`/`cappedPct`. No assertCapability here —
  // this is a scheduled system feed with no human actor, same pattern as
  // ZakatService.runNisabBreachMonitor()/TaskService.runEscalationSweep().
  // ==========================================================================
  private static readonly GATE_OUTCOME_RANK: Record<string, number> = { FULL_RELEASE: 0, CAPPED: 1, DEFERRED: 2, SUSPENDED: 3 };

  async applyTaskDefaultGate(input: { cycleId: string; employeeId: string; defaultedTaskCount: number; systemUserId: string }) {
    const policy = await this.prisma.taskDefaultGatePolicy.findMany({
      where: { isActive: true, minDefaultCount: { lte: input.defaultedTaskCount } },
      orderBy: { minDefaultCount: 'desc' },
      take: 1,
    });
    if (policy.length === 0) return null; // below the lowest configured threshold - task defaults trigger no gate yet
    const severityConfig = await this.prisma.pmsGateSeverityConfig.findUniqueOrThrow({ where: { severity: policy[0].severityCode } });
    const note = `Automatic task-default gate: ${input.defaultedTaskCount} DEFAULTED task(s) -> severity ${policy[0].severityCode}.`;

    const existing = await this.prisma.behaviouralGateCheck.findUnique({
      where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
    });
    if (existing) {
      const newRank = PmsService.GATE_OUTCOME_RANK[severityConfig.outcome];
      const existingRank = PmsService.GATE_OUTCOME_RANK[existing.outcome];
      if (newRank <= existingRank) return existing;
      return this.prisma.behaviouralGateCheck.update({
        where: { id: existing.id },
        data: {
          outcome: severityConfig.outcome,
          cappedPct: severityConfig.cappedPct,
          disciplinaryNote: existing.disciplinaryNote ? `${existing.disciplinaryNote}\n${note}` : note,
        },
      });
    }
    return this.prisma.behaviouralGateCheck.create({
      data: {
        appraisalCycleId: input.cycleId, employeeId: input.employeeId,
        attendanceOk: true, ethicalConductOk: true, trendsViolation: false,
        disciplinaryNote: note, evidenceRef: `TASK_DEFAULT_COUNT:${input.defaultedTaskCount}`,
        outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
        assessedByUserId: input.systemUserId,
      },
    });
  }

  // Orchestrates the feed across every employee currently carrying a
  // DEFAULTED task and every appraisal cycle they're actually part of (an
  // EmployeeScoreSubmission row) that hasn't reached INCENTIVE_COMPUTED yet
  // — the same cutoff recordBehaviouralGate's own callers use (the smoke
  // test records a gate even on an already-APPROVED cycle, right before
  // computeIncentive runs). Feeding a cycle whose incentive is already
  // computed/paid would be a correction, not a gate.
  async runTaskDefaultGateFeed(employeeDefaultCounts: { employeeId: string; count: number }[], systemUserId: string): Promise<{ employeesChecked: number; gatesApplied: number }> {
    let gatesApplied = 0;
    for (const { employeeId, count } of employeeDefaultCounts) {
      const openSubmissions = await this.prisma.employeeScoreSubmission.findMany({
        where: { employeeId, appraisalCycle: { status: { in: ['OPEN', 'SCORING', 'VALIDATION', 'APPROVED'] } } },
        select: { appraisalCycleId: true },
      });
      for (const { appraisalCycleId } of openSubmissions) {
        const result = await this.applyTaskDefaultGate({ cycleId: appraisalCycleId, employeeId, defaultedTaskCount: count, systemUserId });
        if (result) gatesApplied++;
      }
    }
    return { employeesChecked: employeeDefaultCounts.length, gatesApplied };
  }

  // ==========================================================================
  // Invariant 40(c) (CHECK17): attendance lateness -> the SAME behavioural
  // gate feed above, punctuality element only (never a KPI score). Identical
  // tighten-only shape as applyTaskDefaultGate/runTaskDefaultGateFeed --
  // this is a SEVERITY INPUT into recordBehaviouralGate()'s own gate, never
  // a second competing one, and only ever moves outcome/cappedPct toward
  // MORE severe, never relaxes an existing HR finding or an earlier sweep's
  // harsher result.
  // ==========================================================================
  async applyAttendanceLatenessGate(input: { cycleId: string; employeeId: string; lateCount: number; systemUserId: string }) {
    const policy = await this.prisma.attendanceLatenessGatePolicy.findMany({
      where: { isActive: true, minLateCount: { lte: input.lateCount } },
      orderBy: { minLateCount: 'desc' },
      take: 1,
    });
    if (policy.length === 0) return null; // below the lowest configured threshold - lateness triggers no gate yet
    const severityConfig = await this.prisma.pmsGateSeverityConfig.findUniqueOrThrow({ where: { severity: policy[0].severityCode } });
    const note = `Automatic attendance-lateness gate: ${input.lateCount} late clock-in(s) -> severity ${policy[0].severityCode}.`;

    const existing = await this.prisma.behaviouralGateCheck.findUnique({
      where: { appraisalCycleId_employeeId: { appraisalCycleId: input.cycleId, employeeId: input.employeeId } },
    });
    if (existing) {
      const newRank = PmsService.GATE_OUTCOME_RANK[severityConfig.outcome];
      const existingRank = PmsService.GATE_OUTCOME_RANK[existing.outcome];
      if (newRank <= existingRank) return existing;
      return this.prisma.behaviouralGateCheck.update({
        where: { id: existing.id },
        data: {
          outcome: severityConfig.outcome,
          cappedPct: severityConfig.cappedPct,
          disciplinaryNote: existing.disciplinaryNote ? `${existing.disciplinaryNote}\n${note}` : note,
        },
      });
    }
    return this.prisma.behaviouralGateCheck.create({
      data: {
        appraisalCycleId: input.cycleId, employeeId: input.employeeId,
        attendanceOk: false, ethicalConductOk: true, trendsViolation: false,
        disciplinaryNote: note, evidenceRef: `ATTENDANCE_LATE_COUNT:${input.lateCount}`,
        outcome: severityConfig.outcome, cappedPct: severityConfig.cappedPct,
        assessedByUserId: input.systemUserId,
      },
    });
  }

  // Orchestrates the feed across every currently-open appraisal cycle,
  // computing lateness counts from real AttendanceEvent data for the
  // cycle's own period window -- never a fabricated or assumed count.
  async runAttendanceLatenessGateFeed(systemUserId: string): Promise<{ cyclesChecked: number; gatesApplied: number }> {
    const openCycles = await this.prisma.appraisalCycle.findMany({
      where: { status: { in: ['OPEN', 'SCORING', 'VALIDATION', 'APPROVED'] } },
    });
    let gatesApplied = 0;
    for (const cycle of openCycles) {
      const lateCounts = await this.attendance.computeLateCounts(cycle.periodStart, cycle.periodEnd);
      for (const { employeeId, count } of lateCounts) {
        const hasSubmission = await this.prisma.employeeScoreSubmission.findFirst({ where: { employeeId, appraisalCycleId: cycle.id } });
        if (!hasSubmission) continue; // the employee isn't part of this cycle -- no gate to feed
        const result = await this.applyAttendanceLatenessGate({ cycleId: cycle.id, employeeId, lateCount: count, systemUserId });
        if (result) gatesApplied++;
      }
    }
    return { cyclesChecked: openCycles.length, gatesApplied };
  }

  // ==========================================================================
  // Cycle-level CEO approval, then incentive computation (SDS §3.3, §7.2 —
  // pure math, zero discretion, insert-only once written).
  // ==========================================================================
  async submitCycleForApproval(cycleId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'submit a cycle for CEO approval');
    const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
    if (cycle.status !== 'SCORING') throw new PmsError(`Cannot submit cycle ${cycleId} for approval: status is ${cycle.status}, not SCORING.`);
    const submissions = await this.prisma.employeeScoreSubmission.findMany({ where: { appraisalCycleId: cycleId } });
    const unvalidated = submissions.filter((s) => s.status === 'SELF_SCORED');
    if (unvalidated.length > 0) {
      throw new PmsError(`Cannot submit cycle ${cycleId} for approval: ${unvalidated.length} score submission(s) are not yet VALIDATED.`);
    }
    await this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'VALIDATION' } });
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PMS_CYCLE_APPROVAL',
      entityType: 'appraisal_cycle',
      entityId: cycleId,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    return workflowInstance;
  }

  async approveCycle(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      await this.prisma.appraisalCycle.update({ where: { id: updated.entityId }, data: { status: 'APPROVED' } });
    }
    return updated;
  }

  // Insert-only per employee — refuses if a result already exists (SDS
  // §7.2: "corrections = reversal + recompute," never an in-place update).
  async computeIncentive(cycleId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PMS_CYCLE_MANAGEMENT', 'INITIATE', 'compute incentive results for a cycle');
    const cycle = await this.prisma.appraisalCycle.findUniqueOrThrow({ where: { id: cycleId } });
    if (cycle.cycleType !== 'INCENTIVE_CYCLE') throw new PmsError(`Cycle ${cycleId} is an ${cycle.cycleType}, not an INCENTIVE_CYCLE — no payout to compute.`);
    if (cycle.status !== 'APPROVED') throw new PmsError(`Cannot compute incentive for cycle ${cycleId}: status is ${cycle.status}, not APPROVED.`);

    const bands = await this.prisma.incentiveBandConfig.findMany({ where: { isActive: true }, orderBy: { minScorePct: 'desc' } });
    if (bands.length === 0) throw new PmsError('No ACTIVE incentive_band_config rows — cannot compute a payout without governed bands (invariant 10).');

    const submissions = await this.prisma.employeeScoreSubmission.findMany({
      where: { appraisalCycleId: cycleId, status: 'VALIDATED' },
      include: { kpiScores: { include: { kpiDefinition: true } }, employee: { include: { position: true } } },
    });

    const periodMonths = Math.max(1, Math.round((cycle.periodEnd.getTime() - cycle.periodStart.getTime()) / (30.44 * 24 * 3600 * 1000)));
    const periodsPerYear = Math.max(1, Math.round(12 / periodMonths));

    const results: Awaited<ReturnType<typeof this.prisma.employeeIncentiveResult.create>>[] = [];
    for (const sub of submissions) {
      const gate = await this.prisma.behaviouralGateCheck.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: sub.employeeId } } });
      if (!gate) {
        // Honest gap (invariant 16): never assume a pass. Skip, don't guess.
        continue;
      }
      const scorecard = await this.getRoleScorecard(sub.employee.positionId, sub.employeeId);
      const weightByKpi = new Map(scorecard.map((s) => [s.kpiDefinitionId, s.weightPct]));
      let overallScorePct = 0;
      const classAllocation: Record<string, number> = {};
      for (const ks of sub.kpiScores) {
        const scorePct = Number(ks.validatedScorePct ?? ks.selfScorePct);
        const weightPct = weightByKpi.get(ks.kpiDefinitionId) ?? 0;
        overallScorePct += (scorePct * weightPct) / 100;
        classAllocation[ks.kpiDefinition.kpiClass] = (classAllocation[ks.kpiDefinition.kpiClass] ?? 0) + weightPct;
      }

      const totalEmolument = await this.prisma.emolumentStructure.findMany({
        where: { cadre: sub.employee.position.cadre, notch: sub.employee.position.notch, status: 'ACTIVE' },
      });
      const totalEmolumentKobo = totalEmolument.reduce((s, e) => s + e.annualAmountKobo, 0n);
      const performanceIncentivePct = Number((await this.prisma.employee.findUniqueOrThrow({ where: { id: sub.employeeId } })).performanceIncentivePct);
      const incentivePoolKobo = (totalEmolumentKobo * BigInt(Math.round(performanceIncentivePct * 100))) / 10_000n / BigInt(periodsPerYear);

      const band = bands.find((b) => overallScorePct >= Number(b.minScorePct));
      const bandPayoutPct = band ? Number(band.payoutPct) : 0;
      const preGateIncentiveKobo = (incentivePoolKobo * BigInt(Math.round(bandPayoutPct * 100))) / 10_000n;

      const gateFactor = gate.outcome === 'FULL_RELEASE' ? 100 : gate.outcome === 'CAPPED' ? Number(gate.cappedPct ?? 0) : 0;
      const finalIncentiveKobo = (preGateIncentiveKobo * BigInt(Math.round(gateFactor * 100))) / 10_000n;

      const existing = await this.prisma.employeeIncentiveResult.findUnique({ where: { appraisalCycleId_employeeId: { appraisalCycleId: cycleId, employeeId: sub.employeeId } } });
      if (existing) continue; // insert-only — never overwrite a computed result

      const result = await this.prisma.employeeIncentiveResult.create({
        data: {
          appraisalCycleId: cycleId,
          employeeId: sub.employeeId,
          totalEmolumentKobo,
          incentivePoolKobo,
          overallScorePct,
          bandPayoutPct,
          gateOutcome: gate.outcome,
          preGateIncentiveKobo,
          finalIncentiveKobo,
          classAllocationKobo: classAllocation as any,
        },
      });
      results.push(result);
    }
    await this.prisma.appraisalCycle.update({ where: { id: cycleId }, data: { status: 'INCENTIVE_COMPUTED' } });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'employee_incentive_result', entityId: cycleId, after: { count: results.length } });
    return results;
  }

  // ==========================================================================
  // Payroll run P-A (SDS §4) — COMPANY entity only, kobo BIGINT, immutable
  // snapshot. Gated on JOURNAL_ENTRIES (the ledger-touching gate) for the
  // actual posting, same split as chargeAdvisoryFee in wm.service.ts.
  // ==========================================================================
  async computePaye(grossAnnualKobo: bigint, taxRuleVersion?: number): Promise<bigint> {
    const config = taxRuleVersion
      ? await this.prisma.taxRuleConfig.findUniqueOrThrow({ where: { version: taxRuleVersion } })
      : await this.prisma.taxRuleConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!config) throw new PmsError('No ACTIVE tax_rule_config — cannot compute PAYE without a FINCON-validated governed version (invariant 10).');

    const flatRelief = config.consolidatedReliefFlatKobo;
    const pctRelief = (grossAnnualKobo * BigInt(Math.round(Number(config.consolidatedReliefPctOfGross) * 100))) / 10_000n;
    const taxableIncome = grossAnnualKobo - flatRelief - pctRelief;
    if (taxableIncome <= 0n) return 0n;

    const bands = config.bands as { fromKobo: string; toKobo: string | null; ratePct: number }[];
    let paye = 0n;
    for (const band of bands) {
      const from = BigInt(band.fromKobo);
      const to = band.toKobo == null ? null : BigInt(band.toKobo);
      if (taxableIncome <= from) break;
      const upper = to == null ? taxableIncome : (taxableIncome < to ? taxableIncome : to);
      const amountInBand = upper - from;
      if (amountInBand <= 0n) continue;
      paye += (amountInBand * BigInt(Math.round(band.ratePct * 100))) / 10_000n;
      if (to != null && taxableIncome <= to) break;
    }
    return paye;
  }

  async runPayroll(input: { periodMonth: number; periodYear: number; ledgerEntityCode: string; drStaffCostAccountCode: string; drIncentiveExpenseAccountCode: string; crPayePayableAccountCode: string; crPensionPayableAccountCode: string; crNhfPayableAccountCode: string; crNetPayPayableAccountCode: string; actorUserId: string }) {
    // Invariant 46(f): HR_ADMIN prepares (the maker step of the three-hand
    // chain) — FIN_ADMIN no longer runs payroll unilaterally.
    await this.assertCapability(input.actorUserId, 'PAYROLL_PREPARATION', 'INITIATE', 'prepare (run) monthly payroll');
    const existing = await this.prisma.payrollRun.findUnique({ where: { periodMonth_periodYear_ledgerEntityCode: { periodMonth: input.periodMonth, periodYear: input.periodYear, ledgerEntityCode: input.ledgerEntityCode } } });
    if (existing) throw new PmsError(`A payroll_run already exists for ${input.periodMonth}/${input.periodYear} at ${input.ledgerEntityCode}.`);

    const taxConfig = await this.prisma.taxRuleConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!taxConfig) throw new PmsError('No ACTIVE tax_rule_config — cannot run payroll without a FINCON-validated governed version.');

    const employees = await this.prisma.employee.findMany({ where: { status: 'ACTIVE' }, include: { position: true } });
    const periodStart = new Date(input.periodYear, input.periodMonth - 1, 1);
    const periodEnd = new Date(input.periodYear, input.periodMonth, 0);

    const lines: { employeeId: string; grossKobo: bigint; payeKobo: bigint; pensionKobo: bigint; nhfKobo: bigint; incentiveKobo: bigint; netPayKobo: bigint }[] = [];
    for (const emp of employees) {
      const components = await this.prisma.emolumentStructure.findMany({ where: { cadre: emp.position.cadre, notch: emp.position.notch, status: 'ACTIVE' } });
      const annualGrossKobo = components.reduce((s, c) => s + c.annualAmountKobo, 0n);
      const monthlyGrossKobo = annualGrossKobo / 12n;
      const annualPayeKobo = await this.computePaye(annualGrossKobo, taxConfig.version);
      const monthlyPayeKobo = annualPayeKobo / 12n;
      const pensionKobo = (monthlyGrossKobo * BigInt(Math.round(Number(taxConfig.pensionEmployeePct) * 100))) / 10_000n;
      const nhfKobo = (monthlyGrossKobo * BigInt(Math.round(Number(taxConfig.nhfPct) * 100))) / 10_000n;

      const incentiveResult = await this.prisma.employeeIncentiveResult.findFirst({
        where: { employeeId: emp.id, appraisalCycle: { cycleType: 'INCENTIVE_CYCLE', periodStart: { lte: periodEnd }, periodEnd: { gte: periodStart } } },
        orderBy: { computedAt: 'desc' },
      });
      const incentiveKobo = incentiveResult?.finalIncentiveKobo ?? 0n;

      const netPayKobo = monthlyGrossKobo - monthlyPayeKobo - pensionKobo - nhfKobo + incentiveKobo;
      lines.push({ employeeId: emp.id, grossKobo: monthlyGrossKobo, payeKobo: monthlyPayeKobo, pensionKobo, nhfKobo, incentiveKobo, netPayKobo });
    }

    const totals = lines.reduce((acc, l) => ({
      gross: acc.gross + l.grossKobo, paye: acc.paye + l.payeKobo, pension: acc.pension + l.pensionKobo,
      nhf: acc.nhf + l.nhfKobo, incentive: acc.incentive + l.incentiveKobo, netPay: acc.netPay + l.netPayKobo,
    }), { gross: 0n, paye: 0n, pension: 0n, nhf: 0n, incentive: 0n, netPay: 0n });

    const run = await this.prisma.payrollRun.create({
      data: {
        periodMonth: input.periodMonth, periodYear: input.periodYear, ledgerEntityCode: input.ledgerEntityCode,
        status: 'DRAFT', taxRuleConfigId: taxConfig.id, generatedByUserId: input.actorUserId,
      },
    });
    await this.prisma.payrollRunLine.createMany({ data: lines.map((l) => ({ payrollRunId: run.id, ...l })) });

    const journalLines = [
      { accountCode: input.drStaffCostAccountCode, debitKobo: totals.gross, description: 'Staff cost — gross emoluments' },
      { accountCode: input.crPayePayableAccountCode, creditKobo: totals.paye, description: 'PAYE payable' },
      { accountCode: input.crPensionPayableAccountCode, creditKobo: totals.pension, description: 'Pension payable' },
      { accountCode: input.crNhfPayableAccountCode, creditKobo: totals.nhf, description: 'NHF payable' },
      { accountCode: input.crNetPayPayableAccountCode, creditKobo: totals.netPay, description: 'Net pay payable' },
    ];
    if (totals.incentive > 0n) {
      journalLines.push({ accountCode: input.drIncentiveExpenseAccountCode, debitKobo: totals.incentive, description: 'Incentive expense (net of behavioural gate)' } as any);
    }
    const journal = await this.ledger.createJournalEntry({
      ledgerEntityCode: input.ledgerEntityCode,
      journalReference: `JE-PAY-${input.periodYear}-${String(input.periodMonth).padStart(2, '0')}`,
      entryDate: periodEnd,
      description: `Payroll run ${input.periodMonth}/${input.periodYear}`,
      lines: journalLines as any,
      createdByUserId: input.actorUserId,
    });
    // Invariant 46(f): PAYROLL_THREE_HAND — a payroll-specific SCENARIO
    // under the same JOURNAL_POSTING workflow type (Finance review -> MD/
    // CEO approval), not the plain STANDARD single-step maker-checker —
    // that generic path would let ANY JOURNAL_ENTRIES-APPROVE holder (e.g.
    // any FIN_ADMIN) post payroll single-handed, exactly the gap this task
    // exists to close. Reuses requestJournalPosting (not a bespoke
    // workflow.initiate call) so journal_entry.posting_workflow_instance_id
    // is set correctly for the DB-trigger posting gate.
    const { id: workflowInstanceId } = await this.ledger.requestJournalPosting({
      journalEntryId: journal.id,
      initiatedByUserId: input.actorUserId,
      scenario: 'PAYROLL_THREE_HAND',
    });

    return this.prisma.payrollRun.update({ where: { id: run.id }, data: { status: 'PENDING_APPROVAL', journalEntryId: journal.id, workflowInstanceId } });
  }

  // Invariant 46(f): the payroll_run side effect a plain
  // LedgerService.approveJournalPosting() call doesn't know about — called
  // from WorkflowInboxService's JOURNAL_POSTING dispatch only once
  // approveJournalPosting itself has already flipped the journal to
  // POSTED (i.e. only after MD/CEO's step, the chain's last, completes;
  // Finance's review step alone returns null from approveJournalPosting
  // and this is never reached).
  async markPayrollRunPosted(payrollRunId: string, approverUserId: string) {
    return this.prisma.payrollRun.update({ where: { id: payrollRunId }, data: { status: 'POSTED', approvedByUserId: approverUserId } });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'pms_activity', entityId: activity, after: { functionCode, level } });
      throw new PmsError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
