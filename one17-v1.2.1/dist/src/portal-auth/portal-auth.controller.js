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
exports.PortalAuthController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const portal_auth_service_1 = require("./portal-auth.service");
const portal_auth_types_1 = require("./portal-auth.types");
const portal_session_auth_guard_1 = require("./portal-session-auth.guard");
const current_portal_user_decorator_1 = require("./current-portal-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const privacy_notice_service_1 = require("../data-protection/privacy-notice.service");
let PortalAuthController = class PortalAuthController {
    portalAuth;
    prisma;
    privacyNotice;
    constructor(portalAuth, prisma, privacyNotice) {
        this.portalAuth = portalAuth;
        this.prisma = prisma;
        this.privacyNotice = privacyNotice;
    }
    async login(dto, req, res) {
        try {
            const { token, expiresAt, requiresPrivacyNoticeAcknowledgment } = await this.portalAuth.login(dto.email, dto.password, { ipAddress: req.ip });
            res.cookie(portal_session_auth_guard_1.PORTAL_SESSION_COOKIE_NAME, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                expires: expiresAt,
            });
            return { ok: true, requiresPrivacyNoticeAcknowledgment };
        }
        catch (err) {
            if (err instanceof portal_auth_types_1.PortalAuthError)
                throw new common_1.UnauthorizedException(err.message);
            throw err;
        }
    }
    async acknowledgePrivacyNotice(user, req) {
        const notice = await this.privacyNotice.getActiveNotice();
        const context = user.principalType === 'INVESTOR' ? 'INVESTOR_PORTAL_FIRST_LOGIN' : 'COUNTERPARTY_PORTAL_FIRST_LOGIN';
        await this.privacyNotice.recordAcknowledgment({
            noticeVersion: notice.version,
            context,
            investorId: user.principalType === 'INVESTOR' ? user.investorId : undefined,
            counterpartyId: user.principalType === 'COUNTERPARTY' ? user.counterpartyId : undefined,
            ipAddress: req.ip,
        });
        await this.portalAuth.recordFirstLoginAcknowledgment(user.portalUserId, user.principalType);
        return { ok: true };
    }
    async logout(req, res) {
        const token = req.cookies?.[portal_session_auth_guard_1.PORTAL_SESSION_COOKIE_NAME];
        if (token)
            await this.portalAuth.logout(token);
        res.clearCookie(portal_session_auth_guard_1.PORTAL_SESSION_COOKIE_NAME);
        return { ok: true };
    }
    async me(user) {
        if (user.principalType === 'COUNTERPARTY') {
            const [counterparty, portalUser] = await Promise.all([
                this.prisma.counterparty.findUniqueOrThrow({ where: { id: user.counterpartyId } }),
                this.prisma.portalCounterpartyUser.findUniqueOrThrow({ where: { id: user.portalUserId } }),
            ]);
            return {
                principalType: 'COUNTERPARTY',
                counterpartyId: counterparty.id,
                legalName: counterparty.legalName,
                contactEmail: counterparty.contactEmail,
                requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null,
            };
        }
        const [investor, portalUser] = await Promise.all([
            this.prisma.investor.findUniqueOrThrow({ where: { investorId: user.investorId } }),
            this.prisma.portalClientUser.findUniqueOrThrow({ where: { id: user.portalUserId } }),
        ]);
        return {
            principalType: 'INVESTOR',
            investorId: investor.investorId,
            fullLegalName: investor.fullLegalName,
            contactEmail: investor.contactEmail,
            requiresPrivacyNoticeAcknowledgment: portalUser.firstLoginAt === null,
        };
    }
};
exports.PortalAuthController = PortalAuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portal_auth_types_1.PortalLoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PortalAuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('acknowledge-privacy-notice'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseGuards)(portal_session_auth_guard_1.PortalSessionAuthGuard),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PortalAuthController.prototype, "acknowledgePrivacyNotice", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PortalAuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(portal_session_auth_guard_1.PortalSessionAuthGuard),
    __param(0, (0, current_portal_user_decorator_1.CurrentPortalUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PortalAuthController.prototype, "me", null);
exports.PortalAuthController = PortalAuthController = __decorate([
    (0, common_1.Controller)('portal/auth'),
    __metadata("design:paramtypes", [portal_auth_service_1.PortalAuthService,
        prisma_service_1.PrismaService,
        privacy_notice_service_1.PrivacyNoticeService])
], PortalAuthController);
//# sourceMappingURL=portal-auth.controller.js.map