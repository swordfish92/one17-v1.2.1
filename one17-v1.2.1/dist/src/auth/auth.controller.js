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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const auth_service_1 = require("./auth.service");
const auth_types_1 = require("./auth.types");
const session_auth_guard_1 = require("./session-auth.guard");
const current_user_decorator_1 = require("./current-user.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
let AuthController = class AuthController {
    authService;
    prisma;
    delegation;
    constructor(authService, prisma, delegation) {
        this.authService = authService;
        this.prisma = prisma;
        this.delegation = delegation;
    }
    async login(dto, req, res) {
        try {
            const { token, userId, expiresAt, mfaRequired, mfaEnrolled } = await this.authService.login(dto.email, dto.password, {
                ipAddress: req.ip,
                requestId: req.requestId,
            });
            res.cookie(session_auth_guard_1.SESSION_COOKIE_NAME, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                expires: expiresAt,
            });
            return { userId, mfaRequired, mfaEnrolled };
        }
        catch (err) {
            if (err instanceof auth_types_1.AuthError)
                throw new common_1.UnauthorizedException(err.message);
            throw err;
        }
    }
    async logout(req, res) {
        const token = req.cookies?.[session_auth_guard_1.SESSION_COOKIE_NAME];
        if (token)
            await this.authService.logout(token);
        res.clearCookie(session_auth_guard_1.SESSION_COOKIE_NAME);
        return { ok: true };
    }
    async me(user) {
        const appUser = await this.prisma.appUser.findUniqueOrThrow({ where: { id: user.userId } });
        const functions = await this.prisma.platformFunction.findMany({ select: { code: true } });
        const capabilities = {};
        for (const fn of functions) {
            const levels = [];
            for (const level of ['INITIATE', 'APPROVE', 'VIEW']) {
                const { eligible } = await this.delegation.hasCapability(user.userId, fn.code, level);
                if (eligible)
                    levels.push(level);
            }
            if (levels.length > 0)
                capabilities[fn.code] = levels;
        }
        return {
            userId: appUser.id,
            email: appUser.email,
            displayName: appUser.displayName,
            capabilities,
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60_000 } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_types_1.LoginDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        prisma_service_1.PrismaService,
        delegation_service_1.DelegationService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map