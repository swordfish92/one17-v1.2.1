import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { parseCsvRows } from '../migration/csv-parser';
import {
  BudgetExtractionError,
  ClassifiedBudgetLine,
  GateResult,
  ParsedSheetLine,
  PhasingMethod,
  SheetExtractionSummary,
} from './budget.types';

const MONTHS = 12;
const TOLERANCE_NAIRA = 1.0;

// Task 47 (Budget Spec §5a, TPL_11 v2): extracts the DRIVER MODEL, not just
// values, from the Budget/ workbook's VALUES + FORMULAS exports. Sheet 05 is
// an AGGREGATOR loaded as CONTROL TOTALS for validation only; line detail
// comes from 07 (opex to row 138), 02 (income drivers), 08 (CAPEX). Staff
// cost detail is sourced from sheet 07's own Staff Cost group (rows
// 21-31) — sheet 06 is the underlying per-employee workpaper those
// aggregate figures come from, not a second, independent source of monthly
// phased lines; parsing 938 employee rows would duplicate what sheet 07
// already carries pre-aggregated, so it is read only for the BQ-6
// cross-check (Sigma employee TCOE / 12 = sheet 07's Staff Cost line),
// documented as a scope decision, not an oversight.
@Injectable()
export class BudgetExtractionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  // ==========================================================================
  // Sheet parsing — sheet07-style (grouped: section header -> data rows ->
  // redundant ", Total" row) and flat (sheet08 CAPEX, sheet02 income drivers).
  // ==========================================================================

  parseGroupedSheet(csvContent: string, opts: { startRow: number; labelCol: number; firstMonthCol: number; totalCol: number | null; endRow?: number }): ParsedSheetLine[] {
    const rows = parseCsvRows(csvContent);
    const lines: ParsedSheetLine[] = [];
    let currentGroup: string | null = null;
    const endRow = opts.endRow ?? rows.length;

    for (let i = opts.startRow; i < endRow && i < rows.length; i++) {
      const row = rows[i];
      const label = (row[opts.labelCol] ?? '').trim();
      if (!label) continue;

      // Redundant Total row — either "{Group}, Total" (sheet 07's pattern,
      // where BQ-7's mislabel lives — never used since we skip it outright)
      // or a bare "Total" (sheet 08's pattern).
      if (/,\s*Total$/i.test(label) || /^total$/i.test(label)) continue;

      const monthly: (number | null)[] = [];
      for (let m = 0; m < MONTHS; m++) monthly.push(parseWorkbookNumber(row[opts.firstMonthCol + m]));
      const allBlank = monthly.every((v) => v === null);

      if (allBlank) {
        currentGroup = label;
        continue;
      }

      const total = opts.totalCol !== null ? parseWorkbookNumber(row[opts.totalCol]) : null;
      lines.push({
        label,
        groupLabel: currentGroup ?? label,
        monthlyValues: monthly.map((v) => v ?? 0),
        exportedTotal: total,
        sourceRowRef: `row${i + 1}`,
      });
    }
    return lines;
  }

  // Builds a label -> [12 raw formula strings] lookup from a FORMULAS export
  // using the SAME row layout as the matching VALUES sheet — used only to
  // CLASSIFY phasing (driver detection); the actual recomputed amounts
  // always come from VALUES data, never re-derived from formula text.
  buildFormulaLookup(csvContent: string, opts: { startRow: number; labelCol: number; firstMonthCol: number }): Map<string, string[]> {
    const rows = parseCsvRows(csvContent);
    const map = new Map<string, string[]>();
    for (let i = opts.startRow; i < rows.length; i++) {
      const row = rows[i];
      const label = (row[opts.labelCol] ?? '').trim();
      if (!label) continue;
      const formulas: string[] = [];
      for (let m = 0; m < MONTHS; m++) formulas.push(row[opts.firstMonthCol + m] ?? '');
      map.set(label, formulas);
    }
    return map;
  }

  // ==========================================================================
  // Classification — TPL_11 v2's phasing_method vocabulary.
  // ==========================================================================

  classifyLine(line: ParsedSheetLine, formulas: string[] | undefined): ClassifiedBudgetLine {
    let phasingMethod: PhasingMethod = 'ACTUAL_PHASED';
    let driverBasis: string | null = null;
    let driverRateOrFactor: number | null = null;
    let escalatorFactors: number[] | null = null;
    let isActive = true;
    let flaggedReason: string | null = null;
    let valuesAsGiven = false;

    const formulaText = (formulas ?? []).join(' | ');

    // BQ-9: any reference to the unexported 'Existing Investors 2025' sheet.
    if (/Existing Investors 2025/i.test(formulaText)) {
      valuesAsGiven = true;
      flaggedReason = "BQ-9: driver formula references the unexported 'Existing Investors 2025' sheet — values resolve from the VALUES export, but the driver source itself is unverifiable.";
    }

    // Driver detection: row 25 (Total Funds available, i.e. monthly FUM) or
    // row 23 (Total Funds Mobilization) referenced with a % literal.
    const fumMatch = formulaText.match(/Private Portfolio[^|]*!\s*[A-Z]+25[^|]*?(\d+(?:\.\d+)?)\s*%/i);
    const mobMatch = formulaText.match(/Private Portfolio[^|]*!\s*[A-Z]+23[^|]*?(\d+(?:\.\d+)?)\s*%/i);
    if (fumMatch) {
      phasingMethod = 'DRIVER_PCT_OF_FUM';
      driverBasis = 'FUM_MONTHLY (sheet 02 row 25 — Total Funds available)';
      driverRateOrFactor = Number(fumMatch[1]) / 100;
    } else if (mobMatch) {
      phasingMethod = 'DRIVER_PCT_OF_MOBILIZATION';
      driverBasis = 'MOBILIZATION_MONTHLY (sheet 02 row 23 — Total Funds Mobilization)';
      driverRateOrFactor = Number(mobMatch[1]) / 100;
    } else if (/2025 Data Actual/i.test(formulaText)) {
      phasingMethod = 'PRIOR_YEAR_UPLIFT';
      driverBasis = "PRIOR_YEAR_ACTUAL ('13_2025 Data Actual')";
    } else {
      // No driver-formula evidence (or none supplied) — classify from the
      // VALUES shape itself.
      const vals = line.monthlyValues;
      const allEqual = vals.every((v) => Math.abs(v - vals[0]) < 0.01);
      if (allEqual && vals[0] !== 0) {
        phasingMethod = 'EVEN_12';
      } else if (allEqual && vals[0] === 0) {
        phasingMethod = 'FIXED_MONTHLY';
      } else {
        const ratios: number[] = [];
        let escalating = true;
        for (let m = 1; m < MONTHS; m++) {
          if (vals[m - 1] === 0) { escalating = false; break; }
          ratios.push(round4(vals[m] / vals[m - 1]));
        }
        const ratioSpread = escalating ? Math.max(...ratios) - Math.min(...ratios) : Infinity;
        if (escalating && ratioSpread < 0.02 && Math.abs(ratios[0] - 1) > 0.0005) {
          phasingMethod = 'ESCALATING_MONTHLY';
          escalatorFactors = ratios;
        } else {
          phasingMethod = 'ACTUAL_PHASED';
        }
      }
    }

    // BQ-8: the Commission line — stage flagged, cannot activate until
    // FinCon resolves the narrative-vs-formula discrepancy.
    if (/^commission$/i.test(line.label.trim())) {
      isActive = false;
      flaggedReason = 'BQ-8: sheet-01 narrative states "45% of new funds mobilization" vs the actual formula (0.2% of monthly mobilization) — a 225x discrepancy. FinCon must state which governs before this line activates.';
    }

    return { ...line, phasingMethod, driverBasis, driverRateOrFactor, escalatorFactors, isActive, flaggedReason, valuesAsGiven };
  }

  // ==========================================================================
  // Validation gates
  // ==========================================================================

  gateMonthlyEqualsFy(line: ClassifiedBudgetLine): GateResult {
    if (line.exportedTotal === null) {
      return { gate: 'monthly-sum-equals-fy', description: 'Sigma monthly = FY total +-N1', passed: true, detail: `${line.label}: no FY total column exported to check against` };
    }
    const sum = line.monthlyValues.reduce((s, v) => s + v, 0);
    const diff = Math.abs(sum - line.exportedTotal);
    return {
      gate: 'monthly-sum-equals-fy',
      description: 'Sigma monthly = FY total +-N1',
      passed: diff <= TOLERANCE_NAIRA,
      detail: `${line.label}: Sigma monthly=${sum.toFixed(2)} vs FY total=${line.exportedTotal.toFixed(2)}, diff=${diff.toFixed(2)}`,
    };
  }

  gateDetailEqualsControlTotal(groupLabel: string, month: number, detailSum: number, controlTotal: number | null): GateResult {
    if (controlTotal === null) {
      return { gate: 'detail-equals-control-total', description: 'Sigma detail = sheet-05 control total per category +-N1', passed: true, detail: `${groupLabel} month ${month}: no sheet-05 control row matched (see extraction report notes)` };
    }
    const diff = Math.abs(detailSum - controlTotal);
    return {
      gate: 'detail-equals-control-total',
      description: 'Sigma detail = sheet-05 control total per category +-N1',
      passed: diff <= TOLERANCE_NAIRA,
      detail: `${groupLabel} month ${month}: detail Sigma=${detailSum.toFixed(2)} vs sheet-05 control=${controlTotal.toFixed(2)}, diff=${diff.toFixed(2)}`,
    };
  }

  // Recomputes a driver-based line's monthly amount from the driver basis
  // series (sheet 02's own VALUES, e.g. monthly FUM) and compares to the
  // exported VALUES — "proves the drivers were captured correctly, same
  // discipline as the NAV replay."
  gateDriverRecomputation(line: ClassifiedBudgetLine, driverSeries: number[]): GateResult[] {
    if (line.phasingMethod !== 'DRIVER_PCT_OF_FUM' && line.phasingMethod !== 'DRIVER_PCT_OF_MOBILIZATION') {
      return [{ gate: 'driver-recomputation', description: 'Driver recomputation reproduces exported VALUES +-N1', passed: true, detail: `${line.label}: not a driver-phased line, n/a` }];
    }
    const results: GateResult[] = [];
    for (let m = 0; m < MONTHS; m++) {
      const recomputed = driverSeries[m] * (line.driverRateOrFactor ?? 0) * (line.phasingMethod === 'DRIVER_PCT_OF_FUM' ? 1 / 12 : 1);
      const exported = line.monthlyValues[m];
      const diff = Math.abs(recomputed - exported);
      results.push({
        gate: 'driver-recomputation',
        description: 'Driver recomputation reproduces exported VALUES +-N1',
        passed: diff <= TOLERANCE_NAIRA,
        detail: `${line.label} month ${m + 1}: recomputed=${recomputed.toFixed(2)} vs exported=${exported.toFixed(2)}, diff=${diff.toFixed(2)}`,
      });
    }
    return results;
  }

  // ==========================================================================
  // Persistence
  // ==========================================================================

  async createBudgetVersion(fiscalYear: number, scenarioLabel: string, status: 'DRAFT' | 'BOARD_APPROVED', proposedByUserId: string) {
    await this.assertCapability(proposedByUserId, 'BUDGET_MANAGEMENT', 'INITIATE', 'create a budget version');
    const version = await this.prisma.budgetVersion.upsert({
      where: { fiscalYear_scenarioLabel: { fiscalYear, scenarioLabel } },
      create: { fiscalYear, scenarioLabel, status, proposedByUserId },
      update: { status },
    });
    await this.audit.record({
      actorUserId: proposedByUserId,
      action: 'CREATE',
      entityType: 'budget_version',
      entityId: version.id,
      after: { fiscalYear, scenarioLabel, status },
    });
    return version;
  }

  // Invariant 39(b), Tier 2: BUDGET_MANAGEMENT's own "propose/load a
  // budget_version" step had a full service implementation (task 47) but
  // had only ever been exercised via the one-time TPL_11 CLI loader script
  // — no live, capability-gated screen. VIEW-only, no capability check of
  // its own (matches DocumentController's listByEntity precedent: the
  // surrounding screen/nav entry already gates who reaches this).
  async listBudgetVersions() {
    return this.prisma.budgetVersion.findMany({
      orderBy: [{ fiscalYear: 'desc' }, { scenarioLabel: 'asc' }],
      include: { _count: { select: { lines: true } } },
    });
  }

  async listBudgetLines(budgetVersionId: string) {
    return this.prisma.budgetLine.findMany({
      where: { budgetVersionId },
      orderBy: [{ budgetLineGroup: 'asc' }, { lineDescription: 'asc' }],
    });
  }

  async saveBudgetLine(budgetVersionId: string, ledgerEntityCode: string, line: ClassifiedBudgetLine, cls: 'OPEX' | 'CAPEX' | 'REVENUE' | 'STAFF', sourceSheet: string) {
    const existing = await this.prisma.budgetLine.findFirst({
      where: { budgetVersionId, lineDescription: line.label, sourceSheetRef: `${sourceSheet}:${line.sourceRowRef}` },
    });
    const budgetLine = existing
      ? await this.prisma.budgetLine.update({
          where: { id: existing.id },
          data: {
            budgetLineGroup: normalizeGroupLabel(line.groupLabel),
            class: cls,
            phasingMethod: line.phasingMethod,
            driverBasis: line.driverBasis,
            driverRateOrFactor: line.driverRateOrFactor,
            escalatorFactorsJson: line.escalatorFactors ?? undefined,
            isActive: line.isActive,
            flaggedReason: line.flaggedReason,
            valuesAsGiven: line.valuesAsGiven,
          },
        })
      : await this.prisma.budgetLine.create({
          data: {
            budgetVersionId,
            ledgerEntityCode,
            budgetLineGroup: normalizeGroupLabel(line.groupLabel),
            lineDescription: line.label,
            class: cls,
            phasingMethod: line.phasingMethod,
            driverBasis: line.driverBasis,
            driverRateOrFactor: line.driverRateOrFactor,
            escalatorFactorsJson: line.escalatorFactors ?? undefined,
            sourceSheetRef: `${sourceSheet}:${line.sourceRowRef}`,
            isActive: line.isActive,
            flaggedReason: line.flaggedReason,
            valuesAsGiven: line.valuesAsGiven,
          },
        });

    for (let m = 0; m < MONTHS; m++) {
      const amountKobo = BigInt(Math.round(line.monthlyValues[m] * 100));
      await this.prisma.budgetLineMonthlyAmount.upsert({
        where: { budgetLineId_month: { budgetLineId: budgetLine.id, month: m + 1 } },
        create: { budgetLineId: budgetLine.id, month: m + 1, amountKobo },
        update: { amountKobo },
      });
    }
    return budgetLine;
  }

  async saveBudgetTarget(budgetVersionId: string, targetType: string, month: number | null, value: number, unit: string, sourceSheetRef: string) {
    return this.prisma.budgetTarget.create({
      data: { budgetVersionId, targetType, month, value, unit, sourceSheetRef },
    });
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'budget_activity', entityId: activity, after: { functionCode, level } });
      throw new BudgetExtractionError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}

// BQ-2: unify NPT/NPF naming into one canonical group.
function normalizeGroupLabel(label: string): string {
  if (/\bNPF\b|\bNPT\b/i.test(label)) return 'NPT_NPF_INCOME';
  return label.trim();
}

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

// Parses workbook-formatted numbers: strips Naira sign, commas, and
// surrounding whitespace/quotes; returns null for blank/"-"/non-numeric
// cells (section headers, decorative blanks).
export function parseWorkbookNumber(value: string | undefined): number | null {
  if (!value) return null;
  const cleaned = value.replace(/₦/g, '').replace(/,/g, '').replace(/^"|"$/g, '').trim();
  if (cleaned === '' || cleaned === '-') return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}
