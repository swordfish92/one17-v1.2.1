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
exports.PeriodController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const period_service_1 = require("../period/period.service");
const bank_reconciliation_service_1 = require("../period/bank-reconciliation.service");
const ops_api_types_1 = require("./ops-api.types");
let PeriodController = class PeriodController {
    prisma;
    period;
    bankReconciliation;
    constructor(prisma, period, bankReconciliation) {
        this.prisma = prisma;
        this.period = period;
        this.bankReconciliation = bankReconciliation;
    }
    async list(ledgerEntityCode) {
        return this.prisma.accountingPeriod.findMany({
            where: ledgerEntityCode ? { ledgerEntityCode } : undefined,
            orderBy: { periodStart: 'desc' },
            take: 100,
        });
    }
    async open(dto, user) {
        return this.period.openPeriod({
            ledgerEntityCode: dto.ledgerEntityCode,
            periodStart: new Date(dto.periodStart),
            periodEnd: new Date(dto.periodEnd),
            openedByUserId: user.userId,
        });
    }
    async requestClose(id, user) {
        return this.period.requestPeriodClose({ periodId: id, initiatedByUserId: user.userId });
    }
    async listBankStatementLines(ledgerEntityCode, status) {
        return this.bankReconciliation.listLines(ledgerEntityCode, status);
    }
    async bankReconciliationSummary(ledgerEntityCode, periodStart, periodEnd) {
        return this.bankReconciliation.getSummary(ledgerEntityCode, new Date(periodStart), new Date(periodEnd));
    }
    async uploadBankStatementLines(dto, user) {
        return this.bankReconciliation.uploadStatementLines(dto.lines.map((line) => ({ ...line, statementDate: new Date(line.statementDate), amountKobo: BigInt(line.amountKobo) })), user.userId);
    }
    async matchBankStatementLine(lineId, dto, user) {
        return this.bankReconciliation.matchLine(lineId, dto.journalEntryLineId, user.userId);
    }
    async unmatchBankStatementLine(lineId, user) {
        return this.bankReconciliation.unmatchLine(lineId, user.userId);
    }
};
exports.PeriodController = PeriodController;
__decorate([
    (0, common_1.Get)(),
    (0, requires_capability_decorator_1.RequiresCapability)('ACCOUNTING_PERIOD_CLOSE', 'INITIATE'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    (0, requires_capability_decorator_1.RequiresCapability)('ACCOUNTING_PERIOD_CLOSE', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.OpenPeriodDto, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "open", null);
__decorate([
    (0, common_1.Post)(':id/request-close'),
    (0, requires_capability_decorator_1.RequiresCapability)('ACCOUNTING_PERIOD_CLOSE', 'INITIATE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "requestClose", null);
__decorate([
    (0, common_1.Get)('bank-reconciliation/lines'),
    (0, requires_capability_decorator_1.RequiresCapability)('BANK_RECONCILIATION', 'VIEW'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __param(1, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "listBankStatementLines", null);
__decorate([
    (0, common_1.Get)('bank-reconciliation/summary'),
    (0, requires_capability_decorator_1.RequiresCapability)('BANK_RECONCILIATION', 'VIEW'),
    __param(0, (0, common_1.Query)('ledgerEntityCode')),
    __param(1, (0, common_1.Query)('periodStart')),
    __param(2, (0, common_1.Query)('periodEnd')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "bankReconciliationSummary", null);
__decorate([
    (0, common_1.Post)('bank-reconciliation/upload'),
    (0, requires_capability_decorator_1.RequiresCapability)('BANK_RECONCILIATION', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.UploadBankStatementLinesDto, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "uploadBankStatementLines", null);
__decorate([
    (0, common_1.Post)('bank-reconciliation/lines/:lineId/match'),
    (0, requires_capability_decorator_1.RequiresCapability)('BANK_RECONCILIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('lineId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ops_api_types_1.MatchBankStatementLineDto, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "matchBankStatementLine", null);
__decorate([
    (0, common_1.Post)('bank-reconciliation/lines/:lineId/unmatch'),
    (0, requires_capability_decorator_1.RequiresCapability)('BANK_RECONCILIATION', 'INITIATE'),
    __param(0, (0, common_1.Param)('lineId')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PeriodController.prototype, "unmatchBankStatementLine", null);
exports.PeriodController = PeriodController = __decorate([
    (0, common_1.Controller)('periods'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        period_service_1.PeriodService,
        bank_reconciliation_service_1.BankReconciliationService])
], PeriodController);
//# sourceMappingURL=period.controller.js.map