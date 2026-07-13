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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const ledger_service_1 = require("../ledger/ledger.service");
const parameters_service_1 = require("../parameters/parameters.service");
const ops_api_types_1 = require("./ops-api.types");
let LedgerController = class LedgerController {
    ledger;
    parameters;
    constructor(ledger, parameters) {
        this.ledger = ledger;
        this.parameters = parameters;
    }
    async listEntities() {
        return this.ledger.listAllLedgerEntities();
    }
    async listProducts() {
        return this.parameters.listProducts();
    }
    async listChartOfAccounts(ledgerEntityCode) {
        return this.ledger.listChartOfAccounts(ledgerEntityCode);
    }
    async listJournalEntries(ledgerEntityCode) {
        return this.ledger.listJournalEntries({ ledgerEntityCode });
    }
    async createJournalEntry(dto, user) {
        return this.ledger.createJournalEntry({
            ledgerEntityCode: dto.ledgerEntityCode,
            journalReference: dto.journalReference,
            entryDate: new Date(dto.entryDate),
            description: dto.description,
            lines: dto.lines.map((l) => ({
                accountCode: l.accountCode,
                debitKobo: l.debitKobo !== undefined ? BigInt(l.debitKobo) : undefined,
                creditKobo: l.creditKobo !== undefined ? BigInt(l.creditKobo) : undefined,
                description: l.description,
            })),
            journalClass: dto.journalClass,
            divergenceType: dto.divergenceType,
            adjustmentForBasis: dto.adjustmentForBasis,
            createdByUserId: user.userId,
        });
    }
    async requestPosting(dto, user) {
        return this.ledger.requestJournalPosting({ journalEntryId: dto.journalEntryId, initiatedByUserId: user.userId });
    }
    async createEntity(dto, user) {
        return this.ledger.createLedgerEntity({
            code: dto.code,
            name: dto.name,
            entityType: dto.entityType,
            primaryBasis: dto.primaryBasis,
            productCode: dto.productCode,
            createdByUserId: user.userId,
        });
    }
    async loadChartOfAccounts(dto, user) {
        return this.ledger.loadChartOfAccountsTemplate({
            ledgerEntityCode: dto.ledgerEntityCode,
            accounts: dto.accounts,
            createdByUserId: user.userId,
        });
    }
    async listTxns(investorId, productAccountId) {
        return this.ledger.listTxns({ investorId, productAccountId });
    }
    async createTxn(dto, user) {
        return this.ledger.createTxn({
            txnType: dto.txnType,
            ledgerEntityCode: dto.ledgerEntityCode,
            productAccountId: dto.productAccountId,
            valueDate: new Date(dto.valueDate),
            amountKobo: BigInt(dto.amountKobo),
            payerBankAccountId: dto.payerBankAccountId,
            thirdPartyPayer: dto.thirdPartyPayer,
            makerUserId: user.userId,
        });
    }
};
exports.LedgerController = LedgerController;
__decorate([
    (0, common_1.Get)('entities'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "listEntities", null);
__decorate([
    (0, common_1.Get)('products'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "listProducts", null);
__decorate([
    (0, common_1.Get)('chart-of-accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "listChartOfAccounts", null);
__decorate([
    (0, common_1.Get)('journal-entries'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "listJournalEntries", null);
__decorate([
    (0, common_1.Post)('journal-entries'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateJournalEntryDto, Object]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "createJournalEntry", null);
__decorate([
    (0, common_1.Post)('journal-entries/request-posting'),
    (0, requires_capability_decorator_1.RequiresCapability)('JOURNAL_ENTRIES', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.RequestJournalPostingDto, Object]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "requestPosting", null);
__decorate([
    (0, common_1.Post)('entities'),
    (0, requires_capability_decorator_1.RequiresCapability)('LEDGER_ENTITY_SETUP', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateLedgerEntityDto, Object]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "createEntity", null);
__decorate([
    (0, common_1.Post)('chart-of-accounts'),
    (0, requires_capability_decorator_1.RequiresCapability)('LEDGER_ENTITY_SETUP', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.LoadChartOfAccountsDto, Object]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "loadChartOfAccounts", null);
__decorate([
    (0, common_1.Get)('txns'),
    (0, requires_capability_decorator_1.RequiresCapability)('TXN_ENTRY', 'INITIATE'),
    __param(0, (0, common_1.Query)('investorId')),
    __param(1, (0, common_1.Query)('productAccountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "listTxns", null);
__decorate([
    (0, common_1.Post)('txns'),
    (0, requires_capability_decorator_1.RequiresCapability)('TXN_ENTRY', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.CreateTxnDto, Object]),
    __metadata("design:returntype", Promise)
], LedgerController.prototype, "createTxn", null);
exports.LedgerController = LedgerController = __decorate([
    (0, common_1.Controller)('ledger'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [ledger_service_1.LedgerService,
        parameters_service_1.ParameterService])
], LedgerController);
//# sourceMappingURL=ledger.controller.js.map