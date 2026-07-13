import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { STRESS_SCENARIO_ROSTER } from './stress-scenario-roster';
import { RunStressInput, StressEngineError } from './stress-engine.types';
import { computeTotalAumKobo } from '../common/aum.util';

// Phase4 Directive §2. Every runXxx() reads its scenario's magnitudes from
// stress_scenario_config.parameters (seeded from stress-scenario-roster.ts)
// — NEVER an inline literal (DQ-11/13, invariant 10; CHECK4 adversarial:
// grep this file for scenario numbers = zero findings; date-arithmetic
// constants like "30" for days-in-a-month are structural, not scenario
// magnitudes, and are the only bare numbers this file contains). SANDBOX
// runs never touch stress_test_run.isApprovedBaseline; only the
// STRESS_BASELINE_PUBLICATION workflow can flip it.
@Injectable()
export class StressEngineService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async seedScenarios(): Promise<number> {
    let count = 0;
    for (const s of STRESS_SCENARIO_ROSTER) {
      await this.prisma.stressScenarioConfig.upsert({
        where: { modelType_scenarioCode_version: { modelType: s.modelType, scenarioCode: s.scenarioCode, version: 1 } },
        create: { modelType: s.modelType, scenarioCode: s.scenarioCode, scenarioLabel: s.scenarioLabel, version: 1, status: 'ACTIVE', parameters: s.parameters as any, effectiveFrom: new Date() },
        update: { scenarioLabel: s.scenarioLabel, parameters: s.parameters as any },
      });
      count++;
    }
    return count;
  }

  private async activeScenario(modelType: string, scenarioCode: string) {
    const row = await this.prisma.stressScenarioConfig.findFirst({
      where: { modelType: modelType as any, scenarioCode, status: 'ACTIVE' },
      orderBy: { version: 'desc' },
    });
    if (!row) throw new StressEngineError(`No ACTIVE scenario config for ${modelType}/${scenarioCode} — cannot run without governed parameters (invariant 10).`);
    return row;
  }

  private params(row: { parameters: unknown }, overrides?: Record<string, unknown>): Record<string, any> {
    return { ...(row.parameters as Record<string, unknown>), ...(overrides ?? {}) };
  }

  private async persistRun(modelType: string, scenarioConfigId: string | null, input: RunStressInput, inputsSnapshot: Record<string, unknown>, outputs: Record<string, unknown>) {
    await this.assertCapability(input.ranByUserId, 'STRESS_TESTING', 'INITIATE', `run a ${modelType} stress test`);
    const run = await this.prisma.stressTestRun.create({
      data: {
        modelType: modelType as any,
        runMode: input.runMode as any,
        ledgerEntityCode: input.ledgerEntityCode,
        scenarioConfigId,
        inputs: inputsSnapshot as any,
        outputs: outputs as any,
        ranByUserId: input.ranByUserId,
      },
    });
    await this.audit.record({
      actorUserId: input.ranByUserId,
      action: 'CREATE',
      entityType: 'stress_test_run',
      entityId: run.id,
      after: { modelType, runMode: input.runMode, ledgerEntityCode: input.ledgerEntityCode },
    });
    return run;
  }

  // ==========================================================================
  // Shared live-data helpers (same pattern as KriEngineService).
  // ==========================================================================
  private async glBalance(ledgerEntityCode: string, accountType: 'INCOME' | 'EXPENSE' | 'ASSET' | 'EQUITY', asOfOrRange: { from?: Date; to: Date }, accountNameFilter?: RegExp): Promise<bigint> {
    const accounts = await this.prisma.chartOfAccount.findMany({ where: { ledgerEntityCode, accountType } });
    const filtered = accountNameFilter ? accounts.filter((a) => accountNameFilter.test(a.accountName)) : accounts;
    if (filtered.length === 0) return 0n;
    const lines = await this.prisma.journalEntryLine.findMany({
      where: {
        accountId: { in: filtered.map((a) => a.id) },
        journalEntry: { entryDate: asOfOrRange.from ? { gte: asOfOrRange.from, lte: asOfOrRange.to } : { lte: asOfOrRange.to } },
      },
    });
    const natural = accountType === 'INCOME' || accountType === 'EQUITY' ? 1 : -1; // credit-natured vs debit-natured
    return lines.reduce((s, l) => s + BigInt(natural) * (l.creditKobo - l.debitKobo), 0n);
  }

  private async totalAumKobo(): Promise<bigint> {
    return computeTotalAumKobo(this.prisma);
  }

  // ==========================================================================
  // 1. LIQUIDITY (8 scenarios)
  // ==========================================================================
  async runLiquidityStress(scenarioCode: string, input: RunStressInput) {
    const scenario = await this.activeScenario('LIQUIDITY', scenarioCode);
    const p = this.params(scenario, input.parameterOverrides);
    const asOf = new Date();

    const cashKobo = await this.glBalance(input.ledgerEntityCode, 'ASSET', { to: asOf }, /cash/i);
    const monthStart = new Date(asOf.getFullYear(), asOf.getMonth(), 1);
    const monthlyExpenseKobo = await this.glBalance(input.ledgerEntityCode, 'EXPENSE', { from: monthStart, to: asOf });
    const aumKobo = await this.totalAumKobo();

    const redemptionPct = typeof p.redemptionPct === 'number' ? p.redemptionPct : 0;
    const surgeFactor = typeof p.expenseSurgeFactor === 'number' ? p.expenseSurgeFactor : 1;
    const combinedInflowFactor = typeof p.combinedInflowFactor === 'number' ? p.combinedInflowFactor : 1;

    const redemptionOutflowKobo = BigInt(Math.round(Number(aumKobo) * redemptionPct));
    const stressedMonthlyExpenseKobo = BigInt(Math.round(Number(monthlyExpenseKobo) * surgeFactor));
    const stressed30dOutflowKobo = redemptionOutflowKobo + stressedMonthlyExpenseKobo;
    // combinedInflowFactor (LIQ-08 only) models residual receivable inflows
    // still collectable under the combined-severe scenario; every other
    // scenario has no inflow assumption (factor defaults to 1, i.e. no
    // inflow credit applied below).
    const inflowKobo = combinedInflowFactor < 1 ? BigInt(Math.round(Number(cashKobo) * combinedInflowFactor)) : 0n;

    const survivalDays = stressed30dOutflowKobo > 0n ? Number(cashKobo) / Math.max(1, Number(stressed30dOutflowKobo) / 30) : null;
    const lcr = stressed30dOutflowKobo > 0n ? Number(cashKobo + inflowKobo) / Number(stressed30dOutflowKobo) : null;
    const fundingGapKobo = Math.max(0, Number(stressed30dOutflowKobo) - Number(cashKobo));

    const outputs = {
      cashKobo: cashKobo.toString(),
      aumKobo: aumKobo.toString(),
      redemptionOutflowKobo: redemptionOutflowKobo.toString(),
      stressed30dOutflowKobo: stressed30dOutflowKobo.toString(),
      survivalDays,
      lcr,
      fundingGapKobo,
    };
    return this.persistRun('LIQUIDITY', scenario.id, input, { scenarioCode, parameters: p }, outputs);
  }

  // ==========================================================================
  // 2. CAPITAL_ADEQUACY
  // ==========================================================================
  async runCapitalAdequacyStress(scenarioCode: string, input: RunStressInput) {
    const scenario = await this.activeScenario('CAPITAL_ADEQUACY', scenarioCode);
    const p = this.params(scenario, input.parameterOverrides);
    const asOf = new Date();

    const equityKobo = await this.glBalance(input.ledgerEntityCode, 'EQUITY', { to: asOf });
    const requirement = await this.prisma.regulatoryCapitalRequirement.findFirst({ where: { effectiveFrom: { lte: asOf } }, orderBy: { effectiveFrom: 'desc' } });
    const requirementKobo = requirement?.requirementKobo ?? null;

    const creditLossesKobo = BigInt(p.creditLossesKobo ?? 0);
    const writeDownsKobo = BigInt(p.writeDownsKobo ?? 0);
    const impairmentKobo = BigInt(p.impairmentKobo ?? 0);
    const portfolioLossKobo = BigInt(p.portfolioLossKobo ?? 0);
    const recapBufferFactor = typeof p.recapBufferFactor === 'number' ? p.recapBufferFactor : 1;

    const postStressCapitalKobo = equityKobo - creditLossesKobo - writeDownsKobo - impairmentKobo - portfolioLossKobo;
    // DQ-1: CAR = capital / requirement x100 — the corrected formula, never
    // the workbook's further-multiplied display defect.
    const carPreStress = requirementKobo && requirementKobo > 0n ? (Number(equityKobo) / Number(requirementKobo)) * 100 : null;
    const carPostStress = requirementKobo && requirementKobo > 0n ? (Number(postStressCapitalKobo) / Number(requirementKobo)) * 100 : null;
    const deficitKobo = requirementKobo !== null ? Math.max(0, Number(requirementKobo) - Number(postStressCapitalKobo)) : null;
    const recapNeedKobo = deficitKobo !== null ? deficitKobo * recapBufferFactor : null;

    const outputs = {
      equityKobo: equityKobo.toString(),
      requirementKobo: requirementKobo?.toString() ?? null,
      postStressCapitalKobo: postStressCapitalKobo.toString(),
      carPreStress,
      carPostStress,
      recapNeedKobo,
    };
    return this.persistRun('CAPITAL_ADEQUACY', scenario.id, input, { scenarioCode, parameters: p }, outputs);
  }

  // ==========================================================================
  // 3. REVENUE_SENSITIVITY (10 scenarios)
  // ==========================================================================
  async runRevenueSensitivityStress(scenarioCode: string, input: RunStressInput) {
    const scenario = await this.activeScenario('REVENUE_SENSITIVITY', scenarioCode);
    const p = this.params(scenario, input.parameterOverrides);
    const asOf = new Date();
    const yearStart = new Date(asOf.getFullYear(), 0, 1);

    const actualRevenueKobo = await this.glBalance(input.ledgerEntityCode, 'INCOME', { from: yearStart, to: asOf });
    const actualOpexKobo = await this.glBalance(input.ledgerEntityCode, 'EXPENSE', { from: yearStart, to: asOf });
    const aumKobo = await this.totalAumKobo();
    // Effective fee rate computed from live data (invariant 10 — never a
    // hardcoded blended rate).
    const feeRate = aumKobo > 0n ? Number(actualRevenueKobo) / Number(aumKobo) : 0;

    const aumDeclinePct = typeof p.aumDeclinePct === 'number' ? p.aumDeclinePct : 0;
    const feeCompressionPct = typeof p.feeCompressionPct === 'number' ? p.feeCompressionPct : 0;
    const clientLossFactor = typeof p.clientLossFactor === 'number' ? p.clientLossFactor : 1;
    const opexSurgeFactor = typeof p.opexSurgeFactor === 'number' ? p.opexSurgeFactor : 1;

    const stressedAumKobo = Number(aumKobo) * (1 - aumDeclinePct);
    const stressedMgmtFeeKobo = stressedAumKobo * feeRate * clientLossFactor * (1 - feeCompressionPct);
    const stressedOpexKobo = Number(actualOpexKobo) * opexSurgeFactor;
    const pbtKobo = stressedMgmtFeeKobo - stressedOpexKobo;
    const revVsBudgetPct = Number(actualRevenueKobo) > 0 ? stressedMgmtFeeKobo / Number(actualRevenueKobo) : null;
    const costCoveragePct = stressedOpexKobo > 0 ? stressedMgmtFeeKobo / stressedOpexKobo : null;
    const breakevenAumKobo = feeRate * (1 - feeCompressionPct) > 0 ? Number(actualOpexKobo) / (feeRate * (1 - feeCompressionPct)) : null;

    const outputs = {
      actualRevenueKobo: actualRevenueKobo.toString(),
      actualOpexKobo: actualOpexKobo.toString(),
      impliedFeeRate: feeRate,
      stressedAumKobo,
      stressedMgmtFeeKobo,
      stressedOpexKobo,
      pbtKobo,
      revVsBudgetPct,
      costCoveragePct,
      breakevenAumKobo,
    };
    return this.persistRun('REVENUE_SENSITIVITY', scenario.id, input, { scenarioCode, parameters: p }, outputs);
  }

  // ==========================================================================
  // 4. COUNTERPARTY_DEFAULT (EL/LGD/DPD ladder)
  // ==========================================================================
  async runCounterpartyDefaultStress(input: RunStressInput) {
    const scenario = await this.activeScenario('COUNTERPARTY_DEFAULT', 'CPD-LADDER');
    const p = this.params(scenario, input.parameterOverrides);

    const counterparties = await this.prisma.counterparty.findMany({
      where: { probabilityOfDefaultPct: { not: null } },
      include: { transactions: { where: { txnType: 'PLACEMENT', status: 'POSTED' } } },
    });
    const aumKobo = await this.totalAumKobo();

    const perCounterparty = counterparties.map((c) => {
      const eadKobo = c.transactions.reduce((s, t) => s + (t.amountKobo < 0n ? -t.amountKobo : t.amountKobo), 0n);
      const forcedSaleKobo = c.forcedSaleValueKobo ?? 0n;
      const lgd = eadKobo > 0n ? Math.max(0, (Number(eadKobo) - Number(forcedSaleKobo)) / Number(eadKobo)) : 0;
      const pd = Number(c.probabilityOfDefaultPct ?? 0) / 100;
      const elKobo = Number(eadKobo) * pd * lgd;
      const recoveryKobo = Math.min(Number(forcedSaleKobo), Number(eadKobo));
      return { counterpartyId: c.id, legalName: c.legalName, eadKobo: eadKobo.toString(), lgd, pd, elKobo, recoveryKobo };
    }).filter((c) => Number(c.eadKobo) > 0);

    const totalExposureKobo = perCounterparty.reduce((s, c) => s + Number(c.eadKobo), 0);
    const totalElKobo = perCounterparty.reduce((s, c) => s + c.elKobo, 0);
    const largestEadKobo = perCounterparty.reduce((m, c) => Math.max(m, Number(c.eadKobo)), 0);
    const requirement = await this.prisma.regulatoryCapitalRequirement.findFirst({ orderBy: { effectiveFrom: 'desc' } });

    const outputs = {
      perCounterparty,
      totalExposureKobo,
      totalElKobo,
      elPctOfExposure: totalExposureKobo > 0 ? totalElKobo / totalExposureKobo : null,
      elPctOfCapital: requirement ? totalElKobo / Number(requirement.requirementKobo) : null,
      largestConcentrationPct: Number(aumKobo) > 0 ? largestEadKobo / Number(aumKobo) : null,
      dpdEscalationLadder: p,
    };
    return this.persistRun('COUNTERPARTY_DEFAULT', scenario.id, input, { parameters: p }, outputs);
  }

  // ==========================================================================
  // 5. PORTFOLIO_SHOCK (4-level, per asset class incl. DQ-14 Level-3 ratio)
  // ==========================================================================
  async runPortfolioShockStress(input: RunStressInput) {
    const scenario = await this.activeScenario('PORTFOLIO_SHOCK', 'PS-SHOCKS');
    const p = this.params(scenario, input.parameterOverrides);

    const accounts = await this.prisma.productAccount.findMany({ where: { status: 'ACTIVE' }, select: { liquidityClass: true, principalOrCommittedKobo: true } });
    const byClass = new Map<string, bigint>();
    for (const a of accounts) {
      const key = a.liquidityClass ?? 'Unclassified';
      byClass.set(key, (byClass.get(key) ?? 0n) + a.principalOrCommittedKobo);
    }
    const totalKobo = [...byClass.values()].reduce((s, v) => s + v, 0n);
    const classSummary = [...byClass.entries()].map(([liquidityClass, exposureKobo]) => ({
      liquidityClass,
      exposureKobo: exposureKobo.toString(),
      mildLossKobo: (Number(exposureKobo) * p.mildPct).toString(),
      moderateLossKobo: (Number(exposureKobo) * p.moderatePct).toString(),
      severeLossKobo: (Number(exposureKobo) * p.severePct).toString(),
      extremeLossKobo: (Number(exposureKobo) * p.extremePct).toString(),
    }));
    const largestClassKobo = [...byClass.values()].reduce((m, v) => (v > m ? v : m), 0n);
    const concentrationBreach = totalKobo > 0n ? Number(largestClassKobo) / Number(totalKobo) : null;
    // DQ-14 correction: Σ(exposure WHERE liquidity_class='Level 3') / total —
    // never the workbook's wrong severe+extreme-LOSS cells.
    const level3Kobo = byClass.get('Level 3') ?? 0n;
    const level3RatioPct = totalKobo > 0n ? Number(level3Kobo) / Number(totalKobo) : null;

    const outputs = { classSummary, totalKobo: totalKobo.toString(), concentrationBreach, level3RatioPct, dq14Note: 'Level-3 ratio computed from live liquidity_class field, per Dev Notes — not the workbook cells (J9+K9)/C17.' };
    return this.persistRun('PORTFOLIO_SHOCK', scenario.id, input, { parameters: p }, outputs);
  }

  // ==========================================================================
  // 6. REVERSE_STRESS (8 events, computed distance-to-failure pulling live
  // from the other 4 models' most recent runs for the same entity)
  // ==========================================================================
  async runReverseStress(input: RunStressInput) {
    const events = STRESS_SCENARIO_ROSTER.filter((s) => s.modelType === 'REVERSE_STRESS');
    const latestOf = (modelType: string) =>
      this.prisma.stressTestRun.findFirst({ where: { modelType: modelType as any, ledgerEntityCode: input.ledgerEntityCode }, orderBy: { ranAt: 'desc' } });

    const [liq, cap, rev, cpd] = await Promise.all([
      latestOf('LIQUIDITY'),
      latestOf('CAPITAL_ADEQUACY'),
      latestOf('REVENUE_SENSITIVITY'),
      latestOf('COUNTERPARTY_DEFAULT'),
    ]);

    const results = events.map((e) => {
      const p = e.parameters as Record<string, unknown>;
      let currentValue: unknown = null;
      let source = 'no prior run available';
      switch (p.indicator) {
        case 'liquiditySurvivalDays':
          currentValue = (liq?.outputs as any)?.survivalDays ?? null;
          source = liq ? `LIQUIDITY run ${liq.id}` : source;
          break;
        case 'carSurplusMargin':
          currentValue = cap ? ((cap.outputs as any)?.carPostStress ?? null) : null;
          source = cap ? `CAPITAL_ADEQUACY run ${cap.id}` : source;
          break;
        case 'largestEad':
          currentValue = cpd ? ((cpd.outputs as any)?.largestConcentrationPct ?? null) : null;
          source = cpd ? `COUNTERPARTY_DEFAULT run ${cpd.id}` : source;
          break;
        case 'revenuePctOfBase':
          currentValue = rev ? ((rev.outputs as any)?.revVsBudgetPct ?? null) : null;
          source = rev ? `REVENUE_SENSITIVITY run ${rev.id}` : source;
          break;
        case 'fundingDaysAt40PctRedemption':
          currentValue = (liq?.outputs as any)?.survivalDays ?? null;
          source = liq ? `LIQUIDITY run ${liq.id}` : source;
          break;
        default:
          // shariahRagPassthrough / itDowntimeHours / aumSharePct: no live
          // source wired yet (Shariah compliance-flag stream, ops-downtime
          // input screen, and portfolio-share model are outside this pass's
          // instrumented set) — honestly reported as unavailable, not
          // guessed.
          source = 'no live source instrumented this pass';
      }
      const distanceToFailure = currentValue !== null && typeof p.thresholdPct === 'number' ? Number(currentValue) - p.thresholdPct : null;
      return { event: e.scenarioCode, label: e.scenarioLabel, indicator: p.indicator, currentValue, distanceToFailure, source };
    });

    const outputs = { events: results };
    return this.persistRun('REVERSE_STRESS', null, input, { note: 'pulls live from the 4 other models\' most recent runs for this entity' }, outputs);
  }

  // ==========================================================================
  // Baseline publication — the ONLY thing amendment 27 actually gates.
  // ==========================================================================
  async requestBaselinePublication(stressTestRunId: string, requestedByUserId: string) {
    const run = await this.prisma.stressTestRun.findUniqueOrThrow({ where: { id: stressTestRunId } });
    if (run.runMode === 'SANDBOX') {
      throw new StressEngineError('A SANDBOX run can never be published as BASELINE — re-run in BASELINE_CANDIDATE mode first (amendment 27).');
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'STRESS_BASELINE_PUBLICATION',
      entityType: 'stress_test_run',
      entityId: stressTestRunId,
      initiatedByUserId: requestedByUserId,
      scenario: 'STANDARD',
    });
    await this.prisma.stressTestRun.update({ where: { id: stressTestRunId }, data: { approvalWorkflowInstanceId: workflowInstance.id } });
    return workflowInstance;
  }

  async approveBaselinePublication(workflowInstanceId: string, approverUserId: string) {
    const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updated.status === 'APPROVED') {
      await this.prisma.stressTestRun.update({ where: { id: updated.entityId }, data: { isApprovedBaseline: true, runMode: 'BASELINE' } });
    }
    return updated;
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'stress_engine_activity', entityId: activity, after: { functionCode, level } });
      throw new StressEngineError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
