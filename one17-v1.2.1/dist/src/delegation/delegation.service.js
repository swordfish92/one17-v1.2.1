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
exports.DelegationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_types_1 = require("./delegation.types");
let DelegationService = class DelegationService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async requestGrant(input) {
        if (input.delegateUserId === input.delegatedByUserId) {
            await this.audit.record({
                actorUserId: input.delegatedByUserId,
                action: 'PERMISSION_DENIED',
                entityType: 'delegation_of_authority',
                entityId: input.delegateUserId,
                after: {
                    reason: 'self-delegation attempted',
                    functionCode: input.functionCode,
                },
            });
            throw new delegation_types_1.DelegationAuthorizationError('A user cannot delegate authority to themselves.');
        }
        if (!input.boardInstrumentRef) {
            const effective = await this.effectiveAuthority(input.delegatedByUserId, input.functionCode);
            if (effective === 'NONE') {
                await this.denyRequest(input, 'Grantor holds no standing or delegated APPROVE authority on this function.');
                throw new delegation_types_1.DelegationAuthorizationError(`Grantor holds no standing or delegated APPROVE authority on ${input.functionCode}; attach a boardInstrumentRef to override.`);
            }
            if (effective !== null) {
                if (input.limitKobo === undefined ||
                    input.limitKobo === null ||
                    input.limitKobo > effective) {
                    await this.denyRequest(input, `Requested limit exceeds grantor's effective authority (${effective}).`);
                    throw new delegation_types_1.DelegationAuthorizationError(`Grantor's effective authority on ${input.functionCode} is capped at ${effective}; the requested delegation exceeds it. Attach a boardInstrumentRef to override.`);
                }
            }
        }
        const effectiveFrom = input.effectiveFrom ?? new Date();
        const created = await this.prisma.delegationOfAuthority.create({
            data: {
                functionCode: input.functionCode,
                delegateUserId: input.delegateUserId,
                delegatedByUserId: input.delegatedByUserId,
                limitKobo: input.limitKobo,
                effectiveFrom,
                effectiveTo: input.effectiveTo,
                reason: input.reason,
                boardInstrumentRef: input.boardInstrumentRef,
                status: 'PENDING',
            },
        });
        await this.audit.record({
            actorUserId: input.delegatedByUserId,
            action: 'CREATE',
            entityType: 'delegation_of_authority',
            entityId: created.id,
            after: {
                status: 'PENDING',
                functionCode: input.functionCode,
                delegateUserId: input.delegateUserId,
                limitKobo: input.limitKobo?.toString(),
                boardInstrumentRef: input.boardInstrumentRef,
            },
        });
        return created;
    }
    async attachWorkflowInstance(delegationId, workflowInstanceId) {
        return this.prisma.delegationOfAuthority.update({
            where: { id: delegationId },
            data: { workflowInstanceId },
        });
    }
    async discardPendingGrant(delegationId) {
        const current = await this.prisma.delegationOfAuthority.findUniqueOrThrow({
            where: { id: delegationId },
        });
        if (current.status !== 'PENDING')
            return;
        await this.prisma.delegationOfAuthority.delete({ where: { id: delegationId } });
    }
    async activate(delegationId, activatedByUserId) {
        const current = await this.prisma.delegationOfAuthority.findUniqueOrThrow({
            where: { id: delegationId },
        });
        if (current.status !== 'PENDING') {
            throw new delegation_types_1.DelegationAuthorizationError(`Cannot activate a delegation in status ${current.status}; must be PENDING.`);
        }
        const updated = await this.prisma.delegationOfAuthority.update({
            where: { id: delegationId },
            data: { status: 'ACTIVE' },
        });
        await this.audit.record({
            actorUserId: activatedByUserId,
            action: 'UPDATE',
            entityType: 'delegation_of_authority',
            entityId: delegationId,
            before: { status: 'PENDING' },
            after: { status: 'ACTIVE' },
        });
        return updated;
    }
    async revoke(delegationId, revokedByUserId, reason) {
        const updated = await this.prisma.delegationOfAuthority.update({
            where: { id: delegationId },
            data: {
                status: 'REVOKED',
                revokedAt: new Date(),
                revokedByUserId,
                reason,
            },
        });
        await this.audit.record({
            actorUserId: revokedByUserId,
            action: 'UPDATE',
            entityType: 'delegation_of_authority',
            entityId: delegationId,
            after: { status: 'REVOKED', reason },
        });
        return updated;
    }
    async hasCapability(userId, functionCode, level, options = {}) {
        const roleCodes = (await this.prisma.userRole.findMany({
            where: { userId },
            select: { roleCode: true },
        })).map((r) => r.roleCode);
        const requiresAmountLimitCheck = options.requiresAmountLimitCheck ?? false;
        const amountKobo = options.amountKobo ?? null;
        const standing = await this.prisma.rolePermission.findFirst({
            where: {
                roleCode: { in: roleCodes },
                functionCode,
                level,
                ...(requiresAmountLimitCheck
                    ? amountKobo !== null
                        ? {
                            OR: [
                                { approvalLimitKobo: null },
                                { approvalLimitKobo: { gte: amountKobo } },
                            ],
                        }
                        : { approvalLimitKobo: null }
                    : {}),
            },
        });
        if (standing)
            return { eligible: true };
        if (functionCode === 'CONTROLS_DASHBOARD' && level === 'VIEW') {
            const employee = await this.prisma.employee.findFirst({ where: { appUserId: userId }, select: { id: true } });
            if (employee) {
                const activeHeadship = await this.prisma.departmentHeadDesignation.findFirst({ where: { employeeId: employee.id, status: 'ACTIVE' } });
                if (activeHeadship)
                    return { eligible: true };
            }
        }
        if (level !== 'APPROVE')
            return { eligible: false };
        const grant = await this.findEligibleGrant(userId, functionCode, requiresAmountLimitCheck, amountKobo);
        if (grant)
            return { eligible: true, viaDelegationId: grant.id };
        return { eligible: false };
    }
    async findEligibleGrant(delegateUserId, functionCode, requiresAmountLimitCheck, instanceAmountKobo, at = new Date()) {
        return this.prisma.delegationOfAuthority.findFirst({
            where: {
                delegateUserId,
                functionCode,
                status: 'ACTIVE',
                effectiveFrom: { lte: at },
                AND: [
                    { OR: [{ effectiveTo: null }, { effectiveTo: { gte: at } }] },
                    ...(requiresAmountLimitCheck
                        ? [
                            instanceAmountKobo !== null
                                ? {
                                    OR: [
                                        { limitKobo: null },
                                        { limitKobo: { gte: instanceAmountKobo } },
                                    ],
                                }
                                : { limitKobo: null },
                        ]
                        : []),
                ],
            },
        });
    }
    async effectiveAuthority(userId, functionCode) {
        const roleCodes = (await this.prisma.userRole.findMany({
            where: { userId },
            select: { roleCode: true },
        })).map((r) => r.roleCode);
        const standing = await this.prisma.rolePermission.findMany({
            where: { roleCode: { in: roleCodes }, functionCode, level: 'APPROVE' },
        });
        const standingCeiling = this.maxLimit(standing.map((p) => p.approvalLimitKobo));
        const now = new Date();
        const delegated = await this.prisma.delegationOfAuthority.findMany({
            where: {
                delegateUserId: userId,
                functionCode,
                status: 'ACTIVE',
                effectiveFrom: { lte: now },
                OR: [{ effectiveTo: null }, { effectiveTo: { gte: now } }],
            },
        });
        const delegatedCeiling = this.maxLimit(delegated.map((d) => d.limitKobo));
        if (standingCeiling === 'NONE' && delegatedCeiling === 'NONE')
            return 'NONE';
        if (standingCeiling === null || delegatedCeiling === null)
            return null;
        if (standingCeiling === 'NONE')
            return delegatedCeiling;
        if (delegatedCeiling === 'NONE')
            return standingCeiling;
        return standingCeiling > delegatedCeiling
            ? standingCeiling
            : delegatedCeiling;
    }
    maxLimit(limits) {
        if (limits.length === 0)
            return 'NONE';
        if (limits.some((l) => l === null))
            return null;
        const values = limits;
        return values.reduce((max, l) => (l > max ? l : max), values[0]);
    }
    async denyRequest(input, reason) {
        await this.audit.record({
            actorUserId: input.delegatedByUserId,
            action: 'PERMISSION_DENIED',
            entityType: 'delegation_of_authority',
            entityId: input.delegateUserId,
            after: {
                reason,
                functionCode: input.functionCode,
                requestedLimitKobo: input.limitKobo?.toString(),
            },
        });
    }
};
exports.DelegationService = DelegationService;
exports.DelegationService = DelegationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], DelegationService);
//# sourceMappingURL=delegation.service.js.map