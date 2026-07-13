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
exports.PortalZakatController = void 0;
const common_1 = require("@nestjs/common");
const portal_session_auth_guard_1 = require("../portal-auth/portal-session-auth.guard");
const current_portal_user_decorator_1 = require("../portal-auth/current-portal-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const zakat_service_1 = require("../zakat/zakat.service");
const portal_zakat_types_1 = require("./portal-zakat.types");
let PortalZakatController = class PortalZakatController {
    zakat;
    prisma;
    constructor(zakat, prisma) {
        this.zakat = zakat;
        this.prisma = prisma;
    }
    assertInvestor(user) {
        if (user.principalType !== 'INVESTOR' || !user.investorId) {
            throw new common_1.ForbiddenException('This route is for the investor portal persona only.');
        }
        return user.investorId;
    }
    async getSubscription(user) {
        const investorId = this.assertInvestor(user);
        return this.prisma.zakatClientSubscription.findUnique({ where: { investorId } });
    }
    async electRateBasis(dto, user) {
        return this.zakat.electRateBasis(this.assertInvestor(user), dto.rateBasis);
    }
    async listAssessments(user) {
        return this.zakat.listAssessmentsForInvestor(this.assertInvestor(user));
    }
    async getAssessmentDetail(runId, user) {
        return this.zakat.getAssessmentDetail(runId, this.assertInvestor(user));
    }
    async agreeToSandbox(runId, user) {
        return this.zakat.clientAgreeToSandbox(runId, this.assertInvestor(user));
    }
    async requestSubscription(dto, user) {
        return this.zakat.requestSubscription(this.assertInvestor(user), dto.consentAcknowledged);
    }
    async getPosition(user) {
        return this.zakat.getZakatPositionForClient(this.assertInvestor(user));
    }
    async declareScheduleItem(runId, dto, user) {
        return this.zakat.declareScheduleItemAsClient(this.assertInvestor(user), {
            zakatAssessmentRunId: runId,
            scheduleType: dto.scheduleType,
            description: dto.description,
            amountKobo: BigInt(dto.amountKobo),
            zakatability: dto.zakatability,
        });
    }
};
exports.PortalZakatController = PortalZakatController;
__decorate([
    (0, common_1.Get)('subscription'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "getSubscription", null);
__decorate([
    (0, common_1.Post)('rate-basis'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_zakat_types_1.ElectZakatRateBasisDto, Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "electRateBasis", null);
__decorate([
    (0, common_1.Get)('assessments'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "listAssessments", null);
__decorate([
    (0, common_1.Get)('assessments/:runId'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "getAssessmentDetail", null);
__decorate([
    (0, common_1.Post)('assessments/:runId/agree'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "agreeToSandbox", null);
__decorate([
    (0, common_1.Post)('subscription-request'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_zakat_types_1.RequestZakatSubscriptionDto, Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "requestSubscription", null);
__decorate([
    (0, common_1.Get)('position'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "getPosition", null);
__decorate([
    (0, common_1.Post)('assessments/:runId/items'),
    __param(0, (0, common_1.Param)('runId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_zakat_types_1.DeclareZakatScheduleItemClientDto, Object]),
    __metadata("design:returntype", Promise)
], PortalZakatController.prototype, "declareScheduleItem", null);
exports.PortalZakatController = PortalZakatController = __decorate([
    (0, common_1.Controller)('portal/zakat'),
    (0, common_1.UseGuards)(portal_session_auth_guard_1.PortalSessionAuthGuard),
    __metadata("design:paramtypes", [zakat_service_1.ZakatService,
        prisma_service_1.PrismaService])
], PortalZakatController);
//# sourceMappingURL=portal-zakat.controller.js.map