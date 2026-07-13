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
exports.ExecOversightController = void 0;
const common_1 = require("@nestjs/common");
const session_auth_guard_1 = require("../auth/session-auth.guard");
const capability_guard_1 = require("../auth/capability.guard");
const requires_capability_decorator_1 = require("../auth/requires-capability.decorator");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const exec_oversight_service_1 = require("../exec-oversight/exec-oversight.service");
const exec_oversight_types_1 = require("../exec-oversight/exec-oversight.types");
const wm_service_1 = require("../wm/wm.service");
const counterparty_service_1 = require("../counterparty/counterparty.service");
const statement_service_1 = require("../statement/statement.service");
const certificate_service_1 = require("../certificate/certificate.service");
const letter_service_1 = require("../letter/letter.service");
const client_messaging_service_1 = require("../client-messaging/client-messaging.service");
const bureau_gateway_service_1 = require("../bureau-gateway/bureau-gateway.service");
const ops_api_types_1 = require("./ops-api.types");
let ExecOversightController = class ExecOversightController {
    execOversight;
    wm;
    counterparty;
    statements;
    certificates;
    letters;
    messaging;
    bureauGateway;
    constructor(execOversight, wm, counterparty, statements, certificates, letters, messaging, bureauGateway) {
        this.execOversight = execOversight;
        this.wm = wm;
        this.counterparty = counterparty;
        this.statements = statements;
        this.certificates = certificates;
        this.letters = letters;
        this.messaging = messaging;
        this.bureauGateway = bureauGateway;
    }
    async startSession(dto, user, ip) {
        try {
            return await this.execOversight.startSession({ ...dto, viewedByUserId: user.userId, ipAddress: ip });
        }
        catch (err) {
            if (err instanceof exec_oversight_types_1.ExecOversightError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async endSession(id, user) {
        try {
            return await this.execOversight.endSession(id, user.userId);
        }
        catch (err) {
            if (err instanceof exec_oversight_types_1.ExecOversightError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async listLog() {
        return this.execOversight.listLog();
    }
    async resolveSession(sessionId, userId) {
        try {
            return await this.execOversight.assertSessionOwnedAndActive(sessionId, userId);
        }
        catch (err) {
            if (err instanceof exec_oversight_types_1.ExecOversightError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async dashboard(id, user) {
        const session = await this.resolveSession(id, user.userId);
        return session.principalType === 'INVESTOR'
            ? this.wm.getPortalDashboard(session.investorId)
            : this.counterparty.getPortalDashboard(session.counterpartyId);
    }
    async statementAccounts(id, user) {
        const session = await this.resolveSession(id, user.userId);
        if (session.principalType !== 'INVESTOR')
            throw new common_1.BadRequestException('Statements are an investor-portal surface.');
        return this.statements.listAccounts(session.investorId);
    }
    async certificateList(id, user) {
        const session = await this.resolveSession(id, user.userId);
        if (session.principalType !== 'INVESTOR')
            throw new common_1.BadRequestException('Certificates are an investor-portal surface.');
        return this.certificates.listCertificates(session.investorId);
    }
    async letterList(id, user) {
        const session = await this.resolveSession(id, user.userId);
        return session.principalType === 'INVESTOR'
            ? this.letters.listLetterInstances({ investorId: session.investorId })
            : this.letters.listLetterInstances({ counterpartyId: session.counterpartyId });
    }
    async messages(id, user) {
        const session = await this.resolveSession(id, user.userId);
        if (session.principalType !== 'INVESTOR')
            throw new common_1.BadRequestException('Client messaging is an investor-portal surface.');
        return this.messaging.listThread(session.investorId);
    }
    async bureauPulls(id, user) {
        const session = await this.resolveSession(id, user.userId);
        if (session.principalType !== 'COUNTERPARTY')
            throw new common_1.BadRequestException('Bureau pull history is a counterparty-portal surface.');
        return this.bureauGateway.listPullHistory(session.counterpartyId);
    }
    async listPolicies() {
        return this.execOversight.listPolicies();
    }
    async proposePolicy(dto, user) {
        try {
            return await this.execOversight.proposePolicy({ ...dto, proposedByUserId: user.userId });
        }
        catch (err) {
            if (err instanceof exec_oversight_types_1.ExecOversightError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
    async approvePolicy(id, user) {
        try {
            return await this.execOversight.approvePolicy(id, user.userId);
        }
        catch (err) {
            if (err instanceof exec_oversight_types_1.ExecOversightError)
                throw new common_1.BadRequestException(err.message);
            throw err;
        }
    }
};
exports.ExecOversightController = ExecOversightController;
__decorate([
    (0, common_1.Post)('sessions'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.StartOversightSessionDto, Object, String]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "startSession", null);
__decorate([
    (0, common_1.Post)('sessions/:id/end'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "endSession", null);
__decorate([
    (0, common_1.Get)('log'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "listLog", null);
__decorate([
    (0, common_1.Get)('sessions/:id/dashboard'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "dashboard", null);
__decorate([
    (0, common_1.Get)('sessions/:id/statements'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "statementAccounts", null);
__decorate([
    (0, common_1.Get)('sessions/:id/certificates'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "certificateList", null);
__decorate([
    (0, common_1.Get)('sessions/:id/letters'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "letterList", null);
__decorate([
    (0, common_1.Get)('sessions/:id/messages'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "messages", null);
__decorate([
    (0, common_1.Get)('sessions/:id/bureau-pulls'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "bureauPulls", null);
__decorate([
    (0, common_1.Get)('policies'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'VIEW'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "listPolicies", null);
__decorate([
    (0, common_1.Post)('policies'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'INITIATE'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ops_api_types_1.ProposeOversightPolicyDto, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "proposePolicy", null);
__decorate([
    (0, common_1.Post)('policies/:id/approve'),
    (0, requires_capability_decorator_1.RequiresCapability)('EXEC_OVERSIGHT', 'APPROVE'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExecOversightController.prototype, "approvePolicy", null);
exports.ExecOversightController = ExecOversightController = __decorate([
    (0, common_1.Controller)('exec-oversight'),
    (0, common_1.UseGuards)(session_auth_guard_1.SessionAuthGuard, capability_guard_1.CapabilityGuard),
    __metadata("design:paramtypes", [exec_oversight_service_1.ExecOversightService,
        wm_service_1.WmService,
        counterparty_service_1.CounterpartyService,
        statement_service_1.StatementService,
        certificate_service_1.CertificateService,
        letter_service_1.LetterService,
        client_messaging_service_1.ClientMessagingService,
        bureau_gateway_service_1.BureauGatewayService])
], ExecOversightController);
//# sourceMappingURL=exec-oversight.controller.js.map