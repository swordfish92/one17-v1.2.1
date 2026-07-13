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
exports.BankReconciliationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const period_types_1 = require("./period.types");
let BankReconciliationService = class BankReconciliationService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async assertCapability(userId, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, 'BANK_RECONCILIATION', level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'bank_statement_line', entityId: activity, after: { level } });
            throw new period_types_1.PeriodLifecycleError(`User lacks ${level} authority on BANK_RECONCILIATION (standing or delegated), required to ${activity}.`);
        }
    }
    async uploadStatementLines(lines, uploadedByUserId) {
        await this.assertCapability(uploadedByUserId, 'INITIATE', 'upload bank statement lines');
        if (lines.length === 0)
            throw new period_types_1.PeriodLifecycleError('At least one statement line is required.');
        const created = await this.prisma.$transaction(lines.map((line) => this.prisma.bankStatementLine.create({
            data: {
                ledgerEntityCode: line.ledgerEntityCode,
                glAccountCode: line.glAccountCode,
                statementDate: line.statementDate,
                description: line.description,
                amountKobo: line.amountKobo,
                externalRef: line.externalRef,
                uploadedByUserId,
            },
        })));
        await this.audit.record({ actorUserId: uploadedByUserId, action: 'CREATE', entityType: 'bank_statement_line', entityId: 'BULK', after: { count: created.length } });
        return created;
    }
    async matchLine(lineId, journalEntryLineId, actorUserId) {
        await this.assertCapability(actorUserId, 'INITIATE', 'match a bank statement line');
        const line = await this.prisma.bankStatementLine.findUniqueOrThrow({ where: { id: lineId } });
        if (line.status === 'MATCHED')
            throw new period_types_1.PeriodLifecycleError(`Bank statement line ${lineId} is already matched.`);
        const journalLine = await this.prisma.journalEntryLine.findUniqueOrThrow({ where: { id: journalEntryLineId }, include: { journalEntry: true } });
        if (journalLine.journalEntry.ledgerEntityCode !== line.ledgerEntityCode) {
            throw new period_types_1.PeriodLifecycleError(`Journal entry line ${journalEntryLineId} belongs to ledger entity ${journalLine.journalEntry.ledgerEntityCode}, not ${line.ledgerEntityCode} -- cannot match across entities.`);
        }
        const updated = await this.prisma.bankStatementLine.update({
            where: { id: lineId },
            data: { status: 'MATCHED', matchedJournalEntryLineId: journalEntryLineId, matchedByUserId: actorUserId, matchedAt: new Date() },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bank_statement_line', entityId: lineId, after: { status: 'MATCHED', journalEntryLineId } });
        return updated;
    }
    async unmatchLine(lineId, actorUserId) {
        await this.assertCapability(actorUserId, 'INITIATE', 'unmatch a bank statement line');
        const updated = await this.prisma.bankStatementLine.update({
            where: { id: lineId },
            data: { status: 'UNMATCHED', matchedJournalEntryLineId: null, matchedByUserId: null, matchedAt: null },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bank_statement_line', entityId: lineId, after: { status: 'UNMATCHED' } });
        return updated;
    }
    async listLines(ledgerEntityCode, status) {
        return this.prisma.bankStatementLine.findMany({ where: { ledgerEntityCode, status }, orderBy: { statementDate: 'desc' } });
    }
    async countUnmatchedInWindow(ledgerEntityCode, periodStart, periodEnd) {
        return this.prisma.bankStatementLine.count({
            where: { ledgerEntityCode, status: 'UNMATCHED', statementDate: { gte: periodStart, lte: periodEnd } },
        });
    }
    async getSummary(ledgerEntityCode, periodStart, periodEnd) {
        const [matched, unmatched] = await Promise.all([
            this.prisma.bankStatementLine.count({ where: { ledgerEntityCode, status: 'MATCHED', statementDate: { gte: periodStart, lte: periodEnd } } }),
            this.prisma.bankStatementLine.count({ where: { ledgerEntityCode, status: 'UNMATCHED', statementDate: { gte: periodStart, lte: periodEnd } } }),
        ]);
        return { matched, unmatched, canClose: unmatched === 0 };
    }
};
exports.BankReconciliationService = BankReconciliationService;
exports.BankReconciliationService = BankReconciliationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], BankReconciliationService);
//# sourceMappingURL=bank-reconciliation.service.js.map