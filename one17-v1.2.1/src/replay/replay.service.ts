import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { parseCsv } from '../migration/csv-parser';
import { IngestReplayCsvInput, ReconciliationCounts, ReplayError } from './replay.types';

// Phase 3 replay harness (item 2 of the post-Check-2 instruction): "completes
// BEFORE engine code — it is the acceptance mechanism, so it exists before
// the thing it accepts." Ingests the workbook CSV history — Halal Fund
// transactions (04_Transactions), Halal Fund NAV history (18_NAV_History),
// Mudarabah investor transactions/placements (06_Investor_Transactions) —
// into staging exactly as exported, with INGESTION AND RECONCILIATION COUNTS
// ONLY. Deliberately does NOT clean, reformat, or reject rows with obvious
// workbook defects (e.g. NAV history's own placeholder/instruction rows and
// at least one negative-NAV row near the end of the export) — those are
// left in place for the sealed engines (Phase 3, tasks 39/40/42) to
// recompute against and for CHECK3_EVIDENCE.md to document with root cause
// traced to the defect register. Cleaning them here would be exactly the
// "forced match to a defective source number" the CEO instruction calls a
// failure, not a pass.
@Injectable()
export class ReplayService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async ingestCsv(input: IngestReplayCsvInput) {
    await this.assertCapability(input.uploadedByUserId, 'REPLAY_HARNESS', 'INITIATE', 'ingest a replay-harness source file');

    const lines = input.csvContent.split('\n');
    const content = lines.slice(input.skipLeadingLines).join('\n');
    const records = parseCsv(content);

    const batch = await this.prisma.replayBatch.create({
      data: {
        sourceCode: input.sourceCode,
        fileName: input.fileName,
        totalRows: records.length,
        ingestedByUserId: input.uploadedByUserId,
      },
    });

    const CHUNK = 500;
    for (let i = 0; i < records.length; i += CHUNK) {
      await this.prisma.replaySourceRow.createMany({
        data: records.slice(i, i + CHUNK).map((rawData, j) => ({
          batchId: batch.id,
          rowNumber: i + j + 1,
          rawData,
        })),
      });
    }

    await this.audit.record({
      actorUserId: input.uploadedByUserId,
      action: 'CREATE',
      entityType: 'replay_batch',
      entityId: batch.id,
      after: { sourceCode: input.sourceCode, fileName: input.fileName, totalRows: records.length },
    });

    return batch;
  }

  // Invariant 39(c), Tier 3: REPLAY_HARNESS existed as a full service since
  // Phase 3 (task 37) but had only ever been driven by one-off scripts
  // (Check-3's NAV/Mudarabah verification) — no live screen for a future
  // re-run. VIEW-only, no capability check of its own.
  async listBatches() {
    return this.prisma.replayBatch.findMany({
      orderBy: { createdAt: 'desc' },
      select: { id: true, sourceCode: true, fileName: true, totalRows: true, createdAt: true },
    });
  }

  // "Reconciliation counts only" — no engine math. Reports total rows,
  // how many carry a plausibly-real calendar date vs. an obvious workbook
  // artifact (blank/instruction/#VALUE!/1900-01-00 placeholder), distinct
  // investor/counterparty references, and the parseable date range. This is
  // the acceptance-mechanism scaffolding the sealed engines will read from
  // and compare against — not a verdict on data quality itself.
  async reconciliationCounts(sourceCode: string): Promise<ReconciliationCounts> {
    const batch = await this.prisma.replayBatch.findFirst({
      where: { sourceCode },
      orderBy: { createdAt: 'desc' },
    });
    if (!batch) throw new ReplayError(`No replay_batch found for source_code ${sourceCode}`);

    const rows = await this.prisma.replaySourceRow.findMany({ where: { batchId: batch.id } });
    const dateKeyPrefixes = ['Date', 'Trade Date', 'Value Date', 'Valuation Date'];
    const idKeyPrefixes = ['Investor ID', 'Txn ID'];

    let plausibleDateRows = 0;
    let defectiveRows = 0;
    const distinctIds = new Set<string>();
    const validDates: Date[] = [];

    for (const row of rows) {
      const raw = row.rawData as Record<string, string>;
      const dateKey = Object.keys(raw).find((k) => dateKeyPrefixes.some((p) => k.startsWith(p)));
      const idKey = Object.keys(raw).find((k) => idKeyPrefixes.some((p) => k.startsWith(p)));
      const dateVal = dateKey ? raw[dateKey] : undefined;
      const parsed = dateVal ? parseLooseDate(dateVal) : null;
      if (parsed && !Number.isNaN(parsed.getTime()) && parsed.getFullYear() > 2000) {
        plausibleDateRows++;
        validDates.push(parsed);
      } else {
        defectiveRows++;
      }
      if (idKey && raw[idKey]) distinctIds.add(raw[idKey]);
    }

    const minDate = validDates.length ? new Date(Math.min(...validDates.map((d) => d.getTime()))) : null;
    const maxDate = validDates.length ? new Date(Math.max(...validDates.map((d) => d.getTime()))) : null;

    return {
      sourceCode,
      totalRows: rows.length,
      detail: `${plausibleDateRows} rows carry a plausible calendar date (range ${minDate?.toISOString().slice(0, 10) ?? 'n/a'} to ${maxDate?.toISOString().slice(0, 10) ?? 'n/a'}), ${defectiveRows} rows are workbook artifacts or otherwise undated (placeholder/instruction rows, #VALUE! errors, or a known bad row — not cleaned, staged as-is per instruction), ${distinctIds.size} distinct investor/txn references.`,
    };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'replay_activity',
        entityId: activity,
        after: { functionCode, level },
      });
      throw new ReplayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}

// Handles the workbook's mixed date formats: ISO (2025-01-29), DD-MMM-YY
// (20-Dec-24), DD-MMM-YYYY (28-Jan-2026) — and returns Invalid Date for
// anything else (instruction placeholders, "1900-01-00", blanks), which the
// caller counts as a defective/undated row rather than crashing on.
function parseLooseDate(value: string): Date | null {
  const v = value.trim();
  if (!v) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
    const d = new Date(v + 'T00:00:00Z');
    return Number.isNaN(d.getTime()) ? null : d;
  }
  const ddMmmYy = v.match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2,4})$/);
  if (ddMmmYy) {
    const [, day, mon, yearRaw] = ddMmmYy;
    const months: Record<string, number> = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    const monthIdx = months[mon.charAt(0).toUpperCase() + mon.slice(1).toLowerCase()];
    if (monthIdx === undefined) return null;
    const year = yearRaw.length === 2 ? 2000 + Number(yearRaw) : Number(yearRaw);
    const d = new Date(Date.UTC(year, monthIdx, Number(day)));
    return Number.isNaN(d.getTime()) ? null : d;
  }
  return null;
}
