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
exports.PortalWmController = void 0;
const common_1 = require("@nestjs/common");
const portal_session_auth_guard_1 = require("../portal-auth/portal-session-auth.guard");
const current_portal_user_decorator_1 = require("../portal-auth/current-portal-user.decorator");
const wm_service_1 = require("../wm/wm.service");
const complaint_service_1 = require("../complaint/complaint.service");
const statement_service_1 = require("../statement/statement.service");
const certificate_service_1 = require("../certificate/certificate.service");
const letter_service_1 = require("../letter/letter.service");
const payment_gateway_service_1 = require("../payment-gateway/payment-gateway.service");
const subscription_service_1 = require("../subscription/subscription.service");
const subscription_types_1 = require("../subscription/subscription.types");
const notification_service_1 = require("../notification/notification.service");
const offers_service_1 = require("../product/offers.service");
const marketing_service_1 = require("../marketing/marketing.service");
const portal_wm_types_1 = require("./portal-wm.types");
let PortalWmController = class PortalWmController {
    wm;
    complaints;
    statements;
    certificates;
    letters;
    paymentGateway;
    subscriptions;
    notifications;
    offers;
    marketing;
    constructor(wm, complaints, statements, certificates, letters, paymentGateway, subscriptions, notifications, offers, marketing) {
        this.wm = wm;
        this.complaints = complaints;
        this.statements = statements;
        this.certificates = certificates;
        this.letters = letters;
        this.paymentGateway = paymentGateway;
        this.subscriptions = subscriptions;
        this.notifications = notifications;
        this.offers = offers;
        this.marketing = marketing;
    }
    assertInvestor(user) {
        if (user.principalType !== 'INVESTOR' || !user.investorId) {
            throw new common_1.ForbiddenException('This route is for the investor portal persona only.');
        }
        return user.investorId;
    }
    async dashboard(user) {
        return this.wm.getPortalDashboard(this.assertInvestor(user));
    }
    async respondToAdvisory(id, dto, user) {
        return this.wm.respondToAdvisory(id, this.assertInvestor(user), dto.response);
    }
    async acknowledgeAllocationPolicy(id, user) {
        return this.wm.acknowledgeAllocationPolicy(id, this.assertInvestor(user));
    }
    async acknowledgeRiskProfile(id, user) {
        return this.wm.acknowledgeRiskProfile(id, this.assertInvestor(user));
    }
    async acknowledgeGrowthPlan(id, user) {
        return this.wm.acknowledgeGrowthPlan(id, this.assertInvestor(user));
    }
    async nwcsPyramid(user) {
        return this.wm.getNwcsPyramidData(this.assertInvestor(user));
    }
    async holdingDetail(assetId, user) {
        return this.wm.getHoldingDetail(assetId, this.assertInvestor(user));
    }
    async requestTopUp(assetId, dto, user) {
        return this.wm.requestTopUp(assetId, this.assertInvestor(user), BigInt(dto.requestedAmountKobo), dto.notes);
    }
    async requestRedemption(assetId, dto, user) {
        return this.wm.requestRedemption(assetId, this.assertInvestor(user), BigInt(dto.requestedAmountKobo), dto.notes);
    }
    async raiseComplaint(dto, user) {
        return this.complaints.raiseFromPortal({ investorId: this.assertInvestor(user), ...dto });
    }
    async listStatementAccounts(user) {
        return this.statements.listAccounts(this.assertInvestor(user));
    }
    async downloadStatement(kind, id, periodStart, periodEnd, user) {
        const end = periodEnd ? new Date(periodEnd) : new Date();
        const start = periodStart ? new Date(periodStart) : new Date(Date.UTC(end.getUTCFullYear(), 0, 1));
        const pdf = await this.statements.generateStatementPdf(kind, id, this.assertInvestor(user), start, end);
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="statement-${id}.pdf"` });
    }
    async listCertificates(user) {
        return this.certificates.listCertificates(this.assertInvestor(user));
    }
    async downloadCertificate(id, user) {
        const pdf = await this.certificates.getCertificatePdfForInvestor(id, this.assertInvestor(user));
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="certificate-${id}.pdf"` });
    }
    async listLetters(user) {
        return this.letters.listLetterInstances({ investorId: this.assertInvestor(user) });
    }
    async downloadLetter(id, user) {
        const pdf = await this.letters.getLetterInstancePdfForInvestor(id, this.assertInvestor(user));
        return new common_1.StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
    }
    async depositInstructions(productCode, user) {
        return this.paymentGateway.getDepositInstructions(this.assertInvestor(user), productCode);
    }
    async requestProductRedemption(productAccountId, dto, user) {
        try {
            return await this.subscriptions.initiatePortalRedemption(this.assertInvestor(user), productAccountId, BigInt(dto.amountKobo));
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async principalProfitBreakdown(user) {
        return this.wm.getPrincipalProfitBreakdown(this.assertInvestor(user));
    }
    async listNotifications(user) {
        return this.notifications.listMineForInvestor(this.assertInvestor(user));
    }
    async markNotificationRead(id, user) {
        return this.notifications.markReadForInvestor(id, this.assertInvestor(user));
    }
    async listOffers(user) {
        this.assertInvestor(user);
        return this.offers.listActiveOffers();
    }
    async getOfferDetail(productCode, user) {
        this.assertInvestor(user);
        try {
            return await this.offers.getOfferDetail(productCode);
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async listOfferPublications(user) {
        this.assertInvestor(user);
        return this.marketing.listActiveResources();
    }
    async subscribeToOffer(productCode, dto, user) {
        try {
            return await this.subscriptions.initiatePortalSubscription(this.assertInvestor(user), productCode, BigInt(dto.amountKobo));
        }
        catch (err) {
            if (err instanceof subscription_types_1.SubscriptionServiceError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.PortalWmController = PortalWmController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Post)('advisory-records/:id/respond'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_wm_types_1.RespondToAdvisoryDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "respondToAdvisory", null);
__decorate([
    (0, common_1.Post)('allocation-policy/:id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "acknowledgeAllocationPolicy", null);
__decorate([
    (0, common_1.Post)('risk-profile/:id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "acknowledgeRiskProfile", null);
__decorate([
    (0, common_1.Post)('growth-plan/:id/acknowledge'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "acknowledgeGrowthPlan", null);
__decorate([
    (0, common_1.Get)('nwcs-pyramid'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "nwcsPyramid", null);
__decorate([
    (0, common_1.Get)('assets/:assetId/detail'),
    __param(0, (0, common_1.Param)('assetId')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "holdingDetail", null);
__decorate([
    (0, common_1.Post)('assets/:assetId/top-up'),
    __param(0, (0, common_1.Param)('assetId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_wm_types_1.SubmitHoldingActionRequestDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "requestTopUp", null);
__decorate([
    (0, common_1.Post)('assets/:assetId/redemption'),
    __param(0, (0, common_1.Param)('assetId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_wm_types_1.SubmitHoldingActionRequestDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "requestRedemption", null);
__decorate([
    (0, common_1.Post)('complaints'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_wm_types_1.RaiseComplaintDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "raiseComplaint", null);
__decorate([
    (0, common_1.Get)('statement-accounts'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listStatementAccounts", null);
__decorate([
    (0, common_1.Get)('statement-accounts/:kind/:id/pdf'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('kind')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)('periodStart')),
    __param(3, (0, common_1.Query)('periodEnd')),
    __param(4, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "downloadStatement", null);
__decorate([
    (0, common_1.Get)('certificates'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listCertificates", null);
__decorate([
    (0, common_1.Get)('certificates/:id/pdf'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "downloadCertificate", null);
__decorate([
    (0, common_1.Get)('letters'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listLetters", null);
__decorate([
    (0, common_1.Get)('letters/:id/pdf'),
    (0, common_1.Header)('Content-Type', 'application/pdf'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "downloadLetter", null);
__decorate([
    (0, common_1.Get)('deposit-instructions'),
    __param(0, (0, common_1.Query)('productCode')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "depositInstructions", null);
__decorate([
    (0, common_1.Post)('product-accounts/:productAccountId/redemption'),
    __param(0, (0, common_1.Param)('productAccountId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_wm_types_1.RequestProductRedemptionDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "requestProductRedemption", null);
__decorate([
    (0, common_1.Get)('principal-profit-breakdown'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "principalProfitBreakdown", null);
__decorate([
    (0, common_1.Get)('notifications'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listNotifications", null);
__decorate([
    (0, common_1.Post)('notifications/:id/read'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "markNotificationRead", null);
__decorate([
    (0, common_1.Get)('offers'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listOffers", null);
__decorate([
    (0, common_1.Get)('offers/:productCode'),
    __param(0, (0, common_1.Param)('productCode')),
    __param(1, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "getOfferDetail", null);
__decorate([
    (0, common_1.Get)('offer-publications'),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "listOfferPublications", null);
__decorate([
    (0, common_1.Post)('offers/:productCode/subscribe'),
    __param(0, (0, common_1.Param)('productCode')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portal_wm_types_1.PortalSubscribeToOfferDto, Object]),
    __metadata("design:returntype", Promise)
], PortalWmController.prototype, "subscribeToOffer", null);
exports.PortalWmController = PortalWmController = __decorate([
    (0, common_1.Controller)('portal/wm'),
    (0, common_1.UseGuards)(portal_session_auth_guard_1.PortalSessionAuthGuard),
    __metadata("design:paramtypes", [wm_service_1.WmService,
        complaint_service_1.ComplaintService,
        statement_service_1.StatementService,
        certificate_service_1.CertificateService,
        letter_service_1.LetterService,
        payment_gateway_service_1.PaymentGatewayService,
        subscription_service_1.SubscriptionService,
        notification_service_1.NotificationService,
        offers_service_1.OffersService,
        marketing_service_1.MarketingService])
], PortalWmController);
//# sourceMappingURL=portal-wm.controller.js.map