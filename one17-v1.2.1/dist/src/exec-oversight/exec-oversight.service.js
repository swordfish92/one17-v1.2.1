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
exports.ExecOversightService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const exec_oversight_types_1 = require("./exec-oversight.types");
let ExecOversightService = class ExecOversightService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async assertCapability(userId, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, 'EXEC_OVERSIGHT', level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'exec_oversight',
                entityId: activity,
                after: { functionCode: 'EXEC_OVERSIGHT', level },
            });
            throw new exec_oversight_types_1.ExecOversightError(`User lacks ${level} authority on EXEC_OVERSIGHT (standing or delegated), required to ${activity}.`);
        }
    }
    async getActivePolicy() {
        return this.prisma.execOversightPolicy.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    }
    async startSession(input) {
        await this.assertCapability(input.viewedByUserId, 'APPROVE', 'start an Executive Oversight session');
        const policy = await this.getActivePolicy();
        if (!policy) {
            throw new exec_oversight_types_1.ExecOversightError('No ACTIVE ExecOversightPolicy on file -- Executive Oversight Mode is suspended until Compliance/MD_CEO approve one (never defaults to "everyone allowed").');
        }
        const grantedRoles = policy.grantedRoleCodes;
        const callerRoles = await this.prisma.userRole.findMany({ where: { userId: input.viewedByUserId }, select: { roleCode: true } });
        const callerRoleCodes = new Set(callerRoles.map((r) => r.roleCode));
        const isGranted = [...callerRoleCodes].some((r) => grantedRoles.includes(r));
        if (!isGranted) {
            throw new exec_oversight_types_1.ExecOversightError(`Executive Oversight policy v${policy.version} does not grant any of this user's roles (${[...callerRoleCodes].join(', ') || 'none'}) -- granted roles are: ${grantedRoles.join(', ')}.`);
        }
        if (input.principalType === 'INVESTOR') {
            if (!input.investorId)
                throw new exec_oversight_types_1.ExecOversightError('investorId is required for an INVESTOR oversight session.');
            await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
        }
        else {
            if (!input.counterpartyId)
                throw new exec_oversight_types_1.ExecOversightError('counterpartyId is required for a COUNTERPARTY oversight session.');
            await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
        }
        const session = await this.prisma.execOversightSession.create({
            data: {
                principalType: input.principalType,
                investorId: input.principalType === 'INVESTOR' ? input.investorId : null,
                counterpartyId: input.principalType === 'COUNTERPARTY' ? input.counterpartyId : null,
                viewedByUserId: input.viewedByUserId,
                ipAddress: input.ipAddress,
            },
        });
        await this.audit.record({
            actorUserId: input.viewedByUserId,
            action: 'CREATE',
            entityType: 'exec_oversight_session',
            entityId: session.id,
            after: { principalType: input.principalType, investorId: input.investorId, counterpartyId: input.counterpartyId },
        });
        return session;
    }
    async endSession(sessionId, viewedByUserId) {
        const session = await this.prisma.execOversightSession.findUniqueOrThrow({ where: { id: sessionId } });
        if (session.viewedByUserId !== viewedByUserId) {
            throw new exec_oversight_types_1.ExecOversightError('Only the user who started an oversight session may end it.');
        }
        if (session.endedAt)
            return session;
        const updated = await this.prisma.execOversightSession.update({ where: { id: sessionId }, data: { endedAt: new Date() } });
        await this.audit.record({
            actorUserId: viewedByUserId,
            action: 'UPDATE',
            entityType: 'exec_oversight_session',
            entityId: sessionId,
            before: { endedAt: null },
            after: { endedAt: updated.endedAt },
        });
        return updated;
    }
    async assertSessionOwnedAndActive(sessionId, viewedByUserId) {
        const session = await this.prisma.execOversightSession.findUniqueOrThrow({ where: { id: sessionId } });
        if (session.viewedByUserId !== viewedByUserId) {
            throw new exec_oversight_types_1.ExecOversightError('This oversight session belongs to a different user.');
        }
        if (session.endedAt) {
            throw new exec_oversight_types_1.ExecOversightError('This oversight session has already ended.');
        }
        return session;
    }
    async listLog() {
        return this.prisma.execOversightSession.findMany({
            orderBy: { startedAt: 'desc' },
            include: {
                investor: { select: { fullLegalName: true } },
                counterparty: { select: { legalName: true } },
                viewedByUser: { select: { displayName: true, email: true } },
            },
        });
    }
    async proposePolicy(input) {
        await this.assertCapability(input.proposedByUserId, 'INITIATE', 'propose an Executive Oversight policy version');
        const current = await this.prisma.execOversightPolicy.findFirst({ orderBy: { version: 'desc' } });
        const nextVersion = (current?.version ?? 0) + 1;
        const policy = await this.prisma.execOversightPolicy.create({
            data: {
                version: nextVersion,
                status: 'DRAFT',
                grantedRoleCodes: input.grantedRoleCodes,
                proposedByUserId: input.proposedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.proposedByUserId,
            action: 'CREATE',
            entityType: 'exec_oversight_policy',
            entityId: policy.id,
            after: { version: nextVersion, grantedRoleCodes: input.grantedRoleCodes },
        });
        return policy;
    }
    async approvePolicy(policyId, approvedByUserId) {
        await this.assertCapability(approvedByUserId, 'APPROVE', 'approve an Executive Oversight policy version');
        const policy = await this.prisma.execOversightPolicy.findUniqueOrThrow({ where: { id: policyId } });
        if (policy.status !== 'DRAFT') {
            throw new exec_oversight_types_1.ExecOversightError(`Policy version ${policy.version} is ${policy.status}, not DRAFT -- nothing to approve.`);
        }
        if (policy.proposedByUserId === approvedByUserId) {
            throw new exec_oversight_types_1.ExecOversightError('Approver cannot be the same user who proposed this policy version (maker≠checker).');
        }
        const [, activated] = await this.prisma.$transaction([
            this.prisma.execOversightPolicy.updateMany({ where: { status: 'ACTIVE' }, data: { status: 'SUPERSEDED' } }),
            this.prisma.execOversightPolicy.update({
                where: { id: policyId },
                data: { status: 'ACTIVE', approvedByUserId, approvedAt: new Date() },
            }),
        ]);
        await this.audit.record({
            actorUserId: approvedByUserId,
            action: 'APPROVE',
            entityType: 'exec_oversight_policy',
            entityId: policyId,
            after: { version: activated.version, grantedRoleCodes: activated.grantedRoleCodes },
        });
        return activated;
    }
    async listPolicies() {
        return this.prisma.execOversightPolicy.findMany({ orderBy: { version: 'desc' } });
    }
};
exports.ExecOversightService = ExecOversightService;
exports.ExecOversightService = ExecOversightService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], ExecOversightService);
//# sourceMappingURL=exec-oversight.service.js.map