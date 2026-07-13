import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { PeriodLifecycleError } from './period.types';

export interface UploadStatementLineInput {
  ledgerEntityCode: string;
  glAccountCode: string;
  statementDate: Date;
  description: string;
  amountKobo: bigint;
  externalRef?: string;
}

// Invariant 51(b-ix) (CHECK13, CEO ruling: "now needed for the first monthly
// close, parallel run or not"): bank reconciliation upload/match/unmatch, and
// the hard gate PeriodService.requestPeriodClose calls before allowing a
// period to close -- every BankStatementLine dated inside the period must be
// MATCHED, or the close request itself is refused (not merely flagged). No
// automated bank-feed integration exists (or was asked for) -- upload is a
// manual entry of the statement lines Finance is reconciling against, same
// "detection/recording, never invented determination" doctrine as the
// Compliance sweeps: matching a line to a JournalEntryLine is always a real
// human decision, this service never auto-matches by amount/date heuristics.
@Injectable()
export class BankReconciliationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  private async assertCapability(userId: string, level: 'INITIATE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'BANK_RECONCILIATION', level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'bank_statement_line', entityId: activity, after: { level } });
      throw new PeriodLifecycleError(`User lacks ${level} authority on BANK_RECONCILIATION (standing or delegated), required to ${activity}.`);
    }
  }

  async uploadStatementLines(lines: UploadStatementLineInput[], uploadedByUserId: string) {
    await this.assertCapability(uploadedByUserId, 'INITIATE', 'upload bank statement lines');
    if (lines.length === 0) throw new PeriodLifecycleError('At least one statement line is required.');

    const created = await this.prisma.$transaction(
      lines.map((line) =>
        this.prisma.bankStatementLine.create({
          data: {
            ledgerEntityCode: line.ledgerEntityCode,
            glAccountCode: line.glAccountCode,
            statementDate: line.statementDate,
            description: line.description,
            amountKobo: line.amountKobo,
            externalRef: line.externalRef,
            uploadedByUserId,
          },
        }),
      ),
    );
    await this.audit.record({ actorUserId: uploadedByUserId, action: 'CREATE', entityType: 'bank_statement_line', entityId: 'BULK', after: { count: created.length } });
    return created;
  }

  async matchLine(lineId: string, journalEntryLineId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'INITIATE', 'match a bank statement line');
    const line = await this.prisma.bankStatementLine.findUniqueOrThrow({ where: { id: lineId } });
    if (line.status === 'MATCHED') throw new PeriodLifecycleError(`Bank statement line ${lineId} is already matched.`);

    const journalLine = await this.prisma.journalEntryLine.findUniqueOrThrow({ where: { id: journalEntryLineId }, include: { journalEntry: true } });
    if (journalLine.journalEntry.ledgerEntityCode !== line.ledgerEntityCode) {
      throw new PeriodLifecycleError(`Journal entry line ${journalEntryLineId} belongs to ledger entity ${journalLine.journalEntry.ledgerEntityCode}, not ${line.ledgerEntityCode} -- cannot match across entities.`);
    }

    const updated = await this.prisma.bankStatementLine.update({
      where: { id: lineId },
      data: { status: 'MATCHED', matchedJournalEntryLineId: journalEntryLineId, matchedByUserId: actorUserId, matchedAt: new Date() },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bank_statement_line', entityId: lineId, after: { status: 'MATCHED', journalEntryLineId } });
    return updated;
  }

  async unmatchLine(lineId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'INITIATE', 'unmatch a bank statement line');
    const updated = await this.prisma.bankStatementLine.update({
      where: { id: lineId },
      data: { status: 'UNMATCHED', matchedJournalEntryLineId: null, matchedByUserId: null, matchedAt: null },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bank_statement_line', entityId: lineId, after: { status: 'UNMATCHED' } });
    return updated;
  }

  async listLines(ledgerEntityCode: string, status?: 'UNMATCHED' | 'MATCHED') {
    return this.prisma.bankStatementLine.findMany({ where: { ledgerEntityCode, status }, orderBy: { statementDate: 'desc' } });
  }

  // Invariant 51(b-ix)'s hard gate: PeriodService.requestPeriodClose calls
  // this before initiating the close workflow. Returns the unmatched count
  // for the period's date window -- zero means the period may close.
  async countUnmatchedInWindow(ledgerEntityCode: string, periodStart: Date, periodEnd: Date): Promise<number> {
    return this.prisma.bankStatementLine.count({
      where: { ledgerEntityCode, status: 'UNMATCHED', statementDate: { gte: periodStart, lte: periodEnd } },
    });
  }

  async getSummary(ledgerEntityCode: string, periodStart: Date, periodEnd: Date) {
    const [matched, unmatched] = await Promise.all([
      this.prisma.bankStatementLine.count({ where: { ledgerEntityCode, status: 'MATCHED', statementDate: { gte: periodStart, lte: periodEnd } } }),
      this.prisma.bankStatementLine.count({ where: { ledgerEntityCode, status: 'UNMATCHED', statementDate: { gte: periodStart, lte: periodEnd } } }),
    ]);
    return { matched, unmatched, canClose: unmatched === 0 };
  }
}
