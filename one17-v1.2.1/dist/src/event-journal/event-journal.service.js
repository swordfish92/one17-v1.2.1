"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventJournalService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const ledger_service_1 = require("../ledger/ledger.service");
const event_journal_types_1 = require("./event-journal.types");
let EventJournalService = class EventJournalService {
    prisma;
    ledger;
    constructor(prisma, ledger) {
        this.prisma = prisma;
        this.ledger = ledger;
    }
    async generateAndRequestPosting(input) {
        const config = await this.prisma.eventJournalConfig.findUnique({ where: { eventType: input.eventType } });
        if (!config) {
            throw new event_journal_types_1.EventJournalError(`No event_journal_config row for event_type ${input.eventType} — the event->journal map is governed configuration; add a row rather than hard-coding this event's accounts.`);
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
    resolveAccountCode(configCode, override, side) {
        const isRange = configCode.includes('-') && configCode.split('-').every((part) => /^\d+$/.test(part));
        if (isRange) {
            if (!override) {
                throw new event_journal_types_1.EventJournalError(`event_journal_config ${side}_account_code "${configCode}" is a range, not a literal account — supply ${side}AccountCodeOverride with the specific account this event actually hits.`);
            }
            return override;
        }
        return override ?? configCode;
    }
};
exports.EventJournalService = EventJournalService;
exports.EventJournalService = EventJournalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ledger_service_1.LedgerService])
], EventJournalService);
function substituteTokens(pattern, tokens) {
    return pattern.replace(/\{([a-z_]+)\}/g, (match, key) => tokens[key] ?? match);
}
//# sourceMappingURL=event-journal.service.js.map