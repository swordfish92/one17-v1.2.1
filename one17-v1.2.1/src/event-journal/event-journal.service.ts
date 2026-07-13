import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerService } from '../ledger/ledger.service';
import { GenerateEventJournalInput, EventJournalError } from './event-journal.types';

// Task 41 (Check-3 pass): activates event_journal_config (D20 from
// CHECK2_EVIDENCE.md — "ships as pure reference data ... automatic journal
// generation from real events is Phase 3 product-engine work"). This
// service is that Phase 3 wiring: given an engine event, it reads the
// governed event->journal map, drafts the journal, and REQUESTS posting
// through the existing maker-drafts/checker-approves machinery
// (LedgerService.requestJournalPosting -> approveJournalPosting) verified
// at Check-2. No engine ever posts directly — this service itself doesn't
// either; it only gets a DRAFT journal to PENDING_APPROVAL. A human checker
// still has to approve it, exactly like every other journal in this
// codebase.
@Injectable()
export class EventJournalService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ledger: LedgerService,
  ) {}

  async generateAndRequestPosting(input: GenerateEventJournalInput) {
    const config = await this.prisma.eventJournalConfig.findUnique({ where: { eventType: input.eventType } });
    if (!config) {
      throw new EventJournalError(`No event_journal_config row for event_type ${input.eventType} — the event->journal map is governed configuration; add a row rather than hard-coding this event's accounts.`);
    }

    const drAccountCode = this.resolveAccountCode(config.drAccountCode, input.drAccountCodeOverride, 'dr');
    const crAccountCode = this.resolveAccountCode(config.crAccountCode, input.crAccountCodeOverride, 'cr');

    const journalReference = substituteTokens(config.jeReferencePattern, input.referenceTokens);

    const journal = await this.ledger.createJournalEntry({
      ledgerEntityCode: input.ledgerEntityCode,
      journalReference,
      entryDate: input.entryDate,
      description: `${config.eventType}: ${config.triggerDescription}`,
      lines: [
        { accountCode: drAccountCode, debitKobo: input.amountKobo, description: config.drAccountName },
        { accountCode: crAccountCode, creditKobo: input.amountKobo, description: config.crAccountName },
      ],
      createdByUserId: input.createdByUserId,
    });

    const workflowInstance = await this.ledger.requestJournalPosting({
      journalEntryId: journal.id,
      initiatedByUserId: input.createdByUserId,
    });

    return { journal, workflowInstance };
  }

  private resolveAccountCode(configCode: string, override: string | undefined, side: 'dr' | 'cr'): string {
    // Heuristic, not a general account-code parser: the seeded event->
    // journal map only ever uses a dash for genuine ranges ("1100-1150",
    // "4000-4030"), never for a dashed sub-account style code (e.g. a CoA
    // row like "1010-01"). If a future config row legitimately needs a
    // dashed literal code, this heuristic would misfire — flagged here
    // rather than silently assumed correct forever.
    const isRange = configCode.includes('-') && configCode.split('-').every((part) => /^\d+$/.test(part));
    if (isRange) {
      if (!override) {
        throw new EventJournalError(`event_journal_config ${side}_account_code "${configCode}" is a range, not a literal account — supply ${side}AccountCodeOverride with the specific account this event actually hits.`);
      }
      return override;
    }
    return override ?? configCode;
  }
}

function substituteTokens(pattern: string, tokens: Record<string, string>): string {
  return pattern.replace(/\{([a-z_]+)\}/g, (match, key) => tokens[key] ?? match);
}
