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
exports.LedgerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ledger_types_1 = require("./ledger.types");
let LedgerService = class LedgerService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async createLedgerEntity(input) {
        await this.assertCapability(input.createdByUserId, 'LEDGER_ENTITY_SETUP', 'INITIATE', 'create a ledger entity');
        if (input.entityType === 'COMPANY' && input.primaryBasis !== 'IFRS') {
            throw new ledger_types_1.LedgerLifecycleError('COMPANY ledger entities must have primaryBasis IFRS (AMD-11.2).');
        }
        if ((input.entityType === 'FUND' || input.entityType === 'POOL') &&
            input.primaryBasis !== 'AAOIFI') {
            throw new ledger_types_1.LedgerLifecycleError('FUND/POOL ledger entities must have primaryBasis AAOIFI (AMD-11.2).');
        }
        if ((input.entityType === 'FUND' || input.entityType === 'POOL' || input.entityType === 'MANDATE') &&
            !input.productCode) {
            throw new ledger_types_1.LedgerLifecycleError(`${input.entityType} ledger entities must be created with a productCode (invariant 49b) -- a FUND/POOL/MANDATE ledger entity IS a product's book, never a placeholder to be re-pointed later.`);
        }
        const entity = await this.prisma.ledgerEntity.create({
            data: {
                code: input.code,
                name: input.name,
                entityType: input.entityType,
                primaryBasis: input.primaryBasis,
                productCode: input.productCode,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'ledger_entity',
            entityId: entity.code,
            after: {
                name: input.name,
                entityType: input.entityType,
                primaryBasis: input.primaryBasis,
                productCode: input.productCode,
            },
        });
        return entity;
    }
    async loadChartOfAccountsTemplate(input) {
        await this.assertCapability(input.createdByUserId, 'LEDGER_ENTITY_SETUP', 'INITIATE', 'load a chart-of-accounts template');
        const created = await this.prisma.$transaction(input.accounts.map((a) => this.prisma.chartOfAccount.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                accountCode: a.accountCode,
                accountName: a.accountName,
                accountType: a.accountType,
                aaoifiRef: a.aaoifiRef,
                ifrsRef: a.ifrsRef,
            },
        })));
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'chart_of_accounts_template',
            entityId: input.ledgerEntityCode,
            after: { accountCodes: input.accounts.map((a) => a.accountCode) },
        });
        return created;
    }
    async createJournalEntry(input) {
        await this.assertCapability(input.createdByUserId, 'JOURNAL_ENTRIES', 'INITIATE', 'create a journal entry');
        const journalClass = input.journalClass ?? 'BASE';
        if (journalClass === 'BASE') {
            if (input.divergenceType || input.adjustmentForBasis) {
                throw new ledger_types_1.LedgerLifecycleError('A BASE journal cannot carry divergenceType/adjustmentForBasis — those are BASIS_ADJUSTMENT-only fields (AMD-11.3).');
            }
        }
        else {
            if (!input.divergenceType || !input.adjustmentForBasis) {
                throw new ledger_types_1.LedgerLifecycleError('A BASIS_ADJUSTMENT journal requires both divergenceType and adjustmentForBasis (AMD-11.3).');
            }
        }
        const accounts = await this.prisma.chartOfAccount.findMany({
            where: {
                ledgerEntityCode: input.ledgerEntityCode,
                accountCode: { in: input.lines.map((l) => l.accountCode) },
            },
        });
        const accountByCode = new Map(accounts.map((a) => [a.accountCode, a]));
        for (const line of input.lines) {
            if (!accountByCode.has(line.accountCode)) {
                throw new ledger_types_1.LedgerLifecycleError(`Account ${line.accountCode} does not belong to ledger entity ${input.ledgerEntityCode} — no journal can span ledger entities (CLAUDE.md invariant #5).`);
            }
        }
        const created = await this.prisma.journalEntry.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                journalReference: input.journalReference,
                entryDate: input.entryDate,
                description: input.description,
                createdByUserId: input.createdByUserId,
                journalClass,
                divergenceType: input.divergenceType,
                adjustmentForBasis: input.adjustmentForBasis,
                lines: {
                    create: input.lines.map((l) => ({
                        accountId: accountByCode.get(l.accountCode).id,
                        debitKobo: l.debitKobo ?? 0n,
                        creditKobo: l.creditKobo ?? 0n,
                        description: l.description,
                    })),
                },
            },
            include: { lines: true },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'journal_entry',
            entityId: created.id,
            after: {
                journalReference: input.journalReference,
                ledgerEntityCode: input.ledgerEntityCode,
                lineCount: input.lines.length,
                journalClass,
                divergenceType: input.divergenceType,
                adjustmentForBasis: input.adjustmentForBasis,
            },
        });
        return created;
    }
    async requestJournalPosting(input) {
        await this.assertCapability(input.initiatedByUserId, 'JOURNAL_ENTRIES', 'INITIATE', 'request posting of a journal entry');
        const journal = await this.prisma.journalEntry.findUniqueOrThrow({
            where: { id: input.journalEntryId },
            include: { lines: true },
        });
        if (journal.status !== 'DRAFT') {
            throw new ledger_types_1.LedgerLifecycleError(`Cannot request posting for journal entry ${journal.id}: status is ${journal.status}, not DRAFT.`);
        }
        const totalDebit = journal.lines.reduce((s, l) => s + l.debitKobo, 0n);
        const totalCredit = journal.lines.reduce((s, l) => s + l.creditKobo, 0n);
        if (totalDebit !== totalCredit) {
            throw new ledger_types_1.LedgerLifecycleError(`Cannot request posting for journal entry ${journal.id}: debits (${totalDebit}) do not equal credits (${totalCredit}).`);
        }
        const instance = await this.workflow.initiate({
            workflowTypeCode: 'JOURNAL_POSTING',
            entityType: 'journal_entry',
            entityId: journal.id,
            initiatedByUserId: input.initiatedByUserId,
            scenario: input.scenario ?? 'STANDARD',
        });
        await this.prisma.journalEntry.update({
            where: { id: journal.id },
            data: { postingWorkflowInstanceId: instance.id },
        });
        await this.audit.record({
            actorUserId: input.initiatedByUserId,
            action: 'CREATE',
            entityType: 'journal_posting_request',
            entityId: journal.id,
            after: {
                totalDebitKobo: totalDebit.toString(),
                workflowInstanceId: instance.id,
            },
        });
        return instance;
    }
    async approveJournalPosting(input) {
        const journal = await this.prisma.journalEntry.findFirstOrThrow({
            where: { postingWorkflowInstanceId: input.workflowInstanceId },
        });
        const openPeriodViolation = await this.prisma.accountingPeriod.findFirst({
            where: {
                ledgerEntityCode: journal.ledgerEntityCode,
                status: 'CLOSED',
                periodStart: { lte: journal.entryDate },
                periodEnd: { gte: journal.entryDate },
            },
        });
        if (openPeriodViolation) {
            throw new ledger_types_1.LedgerLifecycleError(`Cannot post journal entry ${journal.id}: entry_date ${journal.entryDate.toISOString()} falls within a CLOSED accounting period for ${journal.ledgerEntityCode} — post-lock entries only in the next open period.`);
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED')
            return null;
        const posted = await this.prisma.journalEntry.update({
            where: { id: journal.id },
            data: { status: 'POSTED', postedAt: new Date() },
        });
        await this.audit.record({
            actorUserId: input.approverUserId,
            action: 'APPROVE',
            entityType: 'journal_entry',
            entityId: posted.id,
            after: { status: 'POSTED' },
        });
        return posted;
    }
    async createInterEntityMirroredJournals(input) {
        const legA = await this.createJournalEntry({
            ledgerEntityCode: input.legA.ledgerEntityCode,
            journalReference: input.legA.journalReference,
            entryDate: input.entryDate,
            description: input.description,
            createdByUserId: input.createdByUserId,
            lines: input.legA.lines,
        });
        await this.prisma.journalEntry.update({
            where: { id: legA.id },
            data: { interEntityRef: input.interEntityRef },
        });
        const legB = await this.createJournalEntry({
            ledgerEntityCode: input.legB.ledgerEntityCode,
            journalReference: input.legB.journalReference,
            entryDate: input.entryDate,
            description: input.description,
            createdByUserId: input.createdByUserId,
            lines: input.legB.lines,
        });
        await this.prisma.journalEntry.update({
            where: { id: legB.id },
            data: { interEntityRef: input.interEntityRef },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'inter_entity_mirrored_journal',
            entityId: input.interEntityRef,
            after: {
                legAJournalId: legA.id,
                legALedgerEntity: input.legA.ledgerEntityCode,
                legBJournalId: legB.id,
                legBLedgerEntity: input.legB.ledgerEntityCode,
            },
        });
        return { interEntityRef: input.interEntityRef, legA, legB };
    }
    async reconcileInterEntityRef(interEntityRef) {
        const legs = await this.prisma.journalEntry.findMany({
            where: { interEntityRef },
            include: { lines: true },
        });
        if (legs.length !== 2) {
            return {
                ok: false,
                legCount: legs.length,
                reason: `expected exactly 2 legs, found ${legs.length}`,
            };
        }
        const totals = legs.map((leg) => leg.lines.reduce((s, l) => s + l.debitKobo, 0n));
        if (totals[0] !== totals[1]) {
            return {
                ok: false,
                legCount: 2,
                reason: `leg amounts unequal: ${totals[0]} vs ${totals[1]}`,
            };
        }
        return { ok: true, legCount: 2 };
    }
    async listInterEntityReconciliations(ledgerEntityCode) {
        const journals = await this.prisma.journalEntry.findMany({
            where: { interEntityRef: { not: null }, ...(ledgerEntityCode ? { ledgerEntityCode } : {}) },
            include: { lines: true },
            orderBy: { entryDate: 'desc' },
        });
        const refs = [...new Set(journals.map((j) => j.interEntityRef))];
        const rows = await Promise.all(refs.map(async (ref) => {
            const legs = await this.prisma.journalEntry.findMany({ where: { interEntityRef: ref }, include: { lines: true } });
            const status = await this.reconcileInterEntityRef(ref);
            const amountKobo = legs[0]?.lines.reduce((s, l) => s + l.debitKobo, 0n) ?? 0n;
            return {
                interEntityRef: ref,
                description: legs[0]?.description ?? '',
                entryDate: legs[0]?.entryDate ?? null,
                legs: legs.map((l) => ({ ledgerEntityCode: l.ledgerEntityCode, journalReference: l.journalReference })),
                amountKobo: amountKobo.toString(),
                ...status,
            };
        }));
        return rows.sort((a, b) => (b.entryDate?.getTime() ?? 0) - (a.entryDate?.getTime() ?? 0));
    }
    async listFundEntities() {
        return this.prisma.ledgerEntity.findMany({
            where: { entityType: { in: ['FUND', 'POOL', 'MANDATE'] } },
            orderBy: { code: 'asc' },
        });
    }
    async listAllLedgerEntities() {
        return this.prisma.ledgerEntity.findMany({ orderBy: { code: 'asc' } });
    }
    async listChartOfAccounts(ledgerEntityCode) {
        return this.prisma.chartOfAccount.findMany({
            where: { ledgerEntityCode, isActive: true },
            orderBy: { accountCode: 'asc' },
        });
    }
    async listJournalEntries(filter = {}) {
        return this.prisma.journalEntry.findMany({
            where: filter.ledgerEntityCode ? { ledgerEntityCode: filter.ledgerEntityCode } : undefined,
            include: { lines: { include: { account: { select: { accountCode: true, accountName: true } } } } },
            orderBy: { entryDate: 'desc' },
            take: 200,
        });
    }
    async getTrialBalance(ledgerEntityCode, basis) {
        const entity = await this.prisma.ledgerEntity.findUniqueOrThrow({
            where: { code: ledgerEntityCode },
        });
        const journalWhere = basis === entity.primaryBasis
            ? { journalClass: 'BASE' }
            : {
                OR: [
                    { journalClass: 'BASE' },
                    {
                        journalClass: 'BASIS_ADJUSTMENT',
                        adjustmentForBasis: basis,
                    },
                ],
            };
        const lines = await this.prisma.journalEntryLine.findMany({
            where: {
                account: { ledgerEntityCode },
                journalEntry: { status: 'POSTED', ...journalWhere },
            },
            include: { account: true },
        });
        const byAccount = new Map();
        for (const line of lines) {
            const existing = byAccount.get(line.accountId);
            if (existing) {
                existing.debitKobo += line.debitKobo;
                existing.creditKobo += line.creditKobo;
            }
            else {
                byAccount.set(line.accountId, {
                    accountId: line.accountId,
                    accountCode: line.account.accountCode,
                    accountName: line.account.accountName,
                    debitKobo: line.debitKobo,
                    creditKobo: line.creditKobo,
                });
            }
        }
        return [...byAccount.values()].sort((a, b) => a.accountCode.localeCompare(b.accountCode));
    }
    async recordCashbookEntry(input) {
        await this.assertCapability(input.createdByUserId, 'JOURNAL_ENTRIES', 'INITIATE', 'record a cashbook entry');
        const created = await this.prisma.cashbookEntry.create({
            data: {
                ledgerEntityCode: input.ledgerEntityCode,
                entryDate: input.entryDate,
                description: input.description,
                amountKobo: input.amountKobo,
                bankReference: input.bankReference,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId,
            action: 'CREATE',
            entityType: 'cashbook_entry',
            entityId: created.id,
            after: {
                ledgerEntityCode: input.ledgerEntityCode,
                amountKobo: input.amountKobo.toString(),
            },
        });
        return created;
    }
    async listTxns(filter = {}) {
        return this.prisma.txn.findMany({
            where: {
                productAccountId: filter.productAccountId,
                productAccount: filter.investorId ? { investorId: filter.investorId } : undefined,
            },
            include: { productAccount: { select: { productCode: true, investorId: true } } },
            orderBy: { valueDate: 'desc' },
            take: 200,
        });
    }
    async createTxn(input) {
        await this.assertCapability(input.makerUserId, 'TXN_ENTRY', 'INITIATE', 'create a transaction');
        const productAccount = input.productAccountId
            ? await this.prisma.productAccount.findUnique({
                where: { id: input.productAccountId },
                include: { investor: true },
            })
            : null;
        const investor = productAccount?.investor;
        if (input.txnType === 'REDEMPTION' &&
            investor?.onboardingStage === 'STAGE_1_EXPRESS') {
            throw new ledger_types_1.LedgerLifecycleError(`Investor ${investor.investorId} is still STAGE_1_EXPRESS — no redemption/outward transfer is permitted until full KYC completes (invariant 27a).`);
        }
        let thirdPartyDeclaration = null;
        if (input.txnType === 'SUBSCRIPTION' && investor) {
            if (input.thirdPartyPayer) {
                thirdPartyDeclaration = input.thirdPartyPayer;
            }
            else if (input.payerBankAccountId) {
                const ownAccount = await this.prisma.investorBankAccount.findFirst({
                    where: { id: input.payerBankAccountId, investorId: investor.investorId },
                });
                if (!ownAccount) {
                    throw new ledger_types_1.LedgerLifecycleError(`payerBankAccountId ${input.payerBankAccountId} is not a registered bank account of investor ${investor.investorId} — third-party deposits require a declaration (payerName/declaredRelationship), invariant 28(a).`);
                }
            }
            else if (investor.onboardingStage === 'STAGE_1_EXPRESS') {
                throw new ledger_types_1.LedgerLifecycleError(`SUBSCRIPTION for STAGE_1_EXPRESS investor ${investor.investorId} must specify either payerBankAccountId (investor's own registered account) or thirdPartyPayer (mandatory declaration, invariant 28a).`);
            }
            if (investor.onboardingStage === 'STAGE_1_EXPRESS') {
                const config = await this.prisma.investorOnboardingConfig.findFirst({
                    where: { status: 'ACTIVE' },
                    orderBy: { version: 'desc' },
                });
                if (!config) {
                    throw new ledger_types_1.LedgerLifecycleError('No ACTIVE investor_onboarding_config — cannot evaluate the Stage-1 Express deposit cap (AMD-12: activation-gated, never a silent bypass).');
                }
                const priorDeposits = await this.prisma.txn.aggregate({
                    _sum: { amountKobo: true },
                    where: {
                        txnType: 'SUBSCRIPTION',
                        productAccount: { investorId: investor.investorId },
                    },
                });
                const priorTotal = priorDeposits._sum.amountKobo ?? 0n;
                if (priorTotal + input.amountKobo > config.expressDepositCapKobo) {
                    throw new ledger_types_1.LedgerLifecycleError(`Deposit would bring investor ${investor.investorId}'s cumulative Stage-1 Express deposits to ${(priorTotal + input.amountKobo).toString()} kobo, exceeding the ${config.expressDepositCapKobo.toString()} kobo cap (invariant 27a) — full KYC (Stage-2) is required before further deposits.`);
                }
            }
        }
        if (input.txnType === 'REDEMPTION' && investor) {
            await this.settleDueBankAccountChangeSwaps(investor.investorId);
            const targetId = input.payoutBankAccountId;
            const payoutAccount = targetId
                ? await this.prisma.investorBankAccount.findFirst({ where: { id: targetId, investorId: investor.investorId } })
                : await this.prisma.investorBankAccount.findFirst({ where: { investorId: investor.investorId, isPrimary: true, status: 'ACTIVE' } });
            if (!payoutAccount) {
                throw new ledger_types_1.LedgerLifecycleError(`No usable bank account found for investor ${investor.investorId}'s redemption payout${targetId ? ` (account ${targetId} not found or not theirs)` : ' -- none is registered'} (invariant 51a-i).`);
            }
            if (payoutAccount.status !== 'ACTIVE') {
                throw new ledger_types_1.LedgerLifecycleError(`Bank account ${payoutAccount.id} is ${payoutAccount.status}, not ACTIVE -- cannot pay a redemption to a superseded account (invariant 51a-i).`);
            }
            if (payoutAccount.coolingOffEndsAt && payoutAccount.coolingOffEndsAt > new Date()) {
                throw new ledger_types_1.LedgerLifecycleError(`Bank account ${payoutAccount.id} is still inside its post-change cooling-off window (until ${payoutAccount.coolingOffEndsAt.toISOString()}) -- invariant 51(a-i) blocks payout to a recently-changed account until the window elapses.`);
            }
        }
        const created = await this.prisma.txn.create({
            data: {
                txnType: input.txnType,
                ledgerEntityCode: input.ledgerEntityCode,
                productAccountId: input.productAccountId,
                valueDate: input.valueDate,
                amountKobo: input.amountKobo,
                makerUserId: input.makerUserId,
            },
        });
        if (thirdPartyDeclaration) {
            await this.prisma.paymentInflowLog.create({
                data: {
                    txnId: created.id,
                    payerName: thirdPartyDeclaration.payerName,
                    payerBankName: thirdPartyDeclaration.payerBankName,
                    payerAccountNumber: thirdPartyDeclaration.payerAccountNumber,
                    declaredRelationship: thirdPartyDeclaration.declaredRelationship,
                    beneficiaryInvestorId: investor?.investorId,
                    status: 'DECLARED_MATCHED',
                    complianceFlagged: true,
                    declaredByUserId: input.makerUserId,
                },
            });
        }
        await this.audit.record({
            actorUserId: input.makerUserId,
            action: 'CREATE',
            entityType: 'txn',
            entityId: created.id,
            after: {
                txnType: input.txnType,
                ledgerEntityCode: input.ledgerEntityCode,
                amountKobo: input.amountKobo.toString(),
                thirdPartyDeclared: !!thirdPartyDeclaration,
            },
        });
        return created;
    }
    async settleDueBankAccountChangeSwaps(investorId) {
        const due = await this.prisma.investorBankAccountChangeRequest.findMany({
            where: { investorId, status: 'COOLING_OFF', coolingOffEndsAt: { lte: new Date() } },
        });
        for (const req of due) {
            if (!req.resultingBankAccountId)
                continue;
            await this.prisma.$transaction([
                this.prisma.investorBankAccount.updateMany({ where: { investorId, isPrimary: true, status: 'ACTIVE' }, data: { isPrimary: false, status: 'SUPERSEDED' } }),
                this.prisma.investorBankAccount.update({ where: { id: req.resultingBankAccountId }, data: { isPrimary: true } }),
                this.prisma.investorBankAccountChangeRequest.update({ where: { id: req.id }, data: { status: 'COMPLETED' } }),
            ]);
            await this.audit.record({
                actorUserId: req.reVerifiedByUserId ?? req.requestedByUserId,
                action: 'UPDATE',
                entityType: 'investor_bank_account_change_request',
                entityId: req.id,
                after: { status: 'COMPLETED', supersededOldPrimary: true },
            });
        }
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'ledger_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new ledger_types_1.LedgerLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.LedgerService = LedgerService;
exports.LedgerService = LedgerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], LedgerService);
//# sourceMappingURL=ledger.service.js.map