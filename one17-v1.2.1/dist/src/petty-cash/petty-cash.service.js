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
exports.PettyCashService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const petty_cash_types_1 = require("./petty-cash.types");
let PettyCashService = class PettyCashService {
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
    async establishFloat(input) {
        await this.assertCapability(input.establishedByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'establish a petty cash float');
        if (input.floatCeilingKobo <= 0n)
            throw new petty_cash_types_1.PettyCashError('floatCeilingKobo must be positive.');
        if (input.singleVoucherCapKobo <= 0n || input.singleVoucherCapKobo > input.floatCeilingKobo) {
            throw new petty_cash_types_1.PettyCashError('singleVoucherCapKobo must be positive and cannot exceed floatCeilingKobo.');
        }
        const created = await this.prisma.pettyCashFloat.create({
            data: {
                floatCode: input.floatCode,
                custodianUserId: input.custodianUserId,
                officeLabel: input.officeLabel,
                ledgerEntityCode: input.ledgerEntityCode ?? 'COMPANY',
                floatCeilingKobo: input.floatCeilingKobo,
                singleVoucherCapKobo: input.singleVoucherCapKobo,
                establishedByUserId: input.establishedByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.establishedByUserId, action: 'CREATE', entityType: 'petty_cash_float', entityId: created.id,
            after: { floatCode: created.floatCode, floatCeilingKobo: created.floatCeilingKobo.toString(), singleVoucherCapKobo: created.singleVoucherCapKobo.toString() },
        });
        return created;
    }
    async adjustFloatCaps(input) {
        await this.assertCapability(input.actorUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'adjust a petty cash float cap');
        const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: input.floatId } });
        const floatCeilingKobo = input.floatCeilingKobo ?? float.floatCeilingKobo;
        const singleVoucherCapKobo = input.singleVoucherCapKobo ?? float.singleVoucherCapKobo;
        if (singleVoucherCapKobo > floatCeilingKobo) {
            throw new petty_cash_types_1.PettyCashError('singleVoucherCapKobo cannot exceed floatCeilingKobo.');
        }
        const updated = await this.prisma.pettyCashFloat.update({ where: { id: input.floatId }, data: { floatCeilingKobo, singleVoucherCapKobo } });
        await this.audit.record({
            actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'petty_cash_float', entityId: input.floatId,
            after: { floatCeilingKobo: floatCeilingKobo.toString(), singleVoucherCapKobo: singleVoucherCapKobo.toString() },
        });
        return updated;
    }
    async closeFloat(floatId, actorUserId) {
        await this.assertCapability(actorUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'close a petty cash float');
        const balance = await this.getFloatBalance(floatId);
        if (balance.outstandingKobo > 0n) {
            throw new petty_cash_types_1.PettyCashError(`Cannot close float ${floatId}: ${balance.outstandingKobo} kobo of vouchers are still outstanding (unreimbursed).`);
        }
        const updated = await this.prisma.pettyCashFloat.update({ where: { id: floatId }, data: { status: 'CLOSED' } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'petty_cash_float', entityId: floatId, after: { status: 'CLOSED' } });
        return updated;
    }
    async listFloats() {
        return this.prisma.pettyCashFloat.findMany({ orderBy: { floatCode: 'asc' } });
    }
    async getFloatBalance(floatId) {
        const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: floatId } });
        const outstanding = await this.prisma.pettyCashVoucher.aggregate({
            where: { floatId, status: 'OUTSTANDING' },
            _sum: { amountKobo: true },
        });
        const outstandingKobo = outstanding._sum.amountKobo ?? 0n;
        return { floatCeilingKobo: float.floatCeilingKobo, outstandingKobo, availableKobo: float.floatCeilingKobo - outstandingKobo };
    }
    async captureVoucher(input) {
        await this.assertCapability(input.createdByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'capture a petty cash voucher');
        const float = await this.prisma.pettyCashFloat.findUniqueOrThrow({ where: { id: input.floatId } });
        if (float.status !== 'ACTIVE')
            throw new petty_cash_types_1.PettyCashError(`Float ${input.floatId} is ${float.status}, not ACTIVE -- cannot capture a voucher against it.`);
        if (input.amountKobo <= 0n)
            throw new petty_cash_types_1.PettyCashError('amountKobo must be positive.');
        if (input.amountKobo > float.singleVoucherCapKobo) {
            throw new petty_cash_types_1.PettyCashError(`Voucher amount ${input.amountKobo} kobo exceeds the single-voucher cap of ${float.singleVoucherCapKobo} kobo for float ${float.floatCode}.`);
        }
        const account = await this.prisma.chartOfAccount.findFirst({ where: { ledgerEntityCode: float.ledgerEntityCode, accountCode: input.expenseAccountCode, accountType: 'EXPENSE' } });
        if (!account) {
            throw new petty_cash_types_1.PettyCashError(`"${input.expenseAccountCode}" is not an EXPENSE account on the ${float.ledgerEntityCode} chart of accounts.`);
        }
        const created = await this.prisma.pettyCashVoucher.create({
            data: {
                floatId: input.floatId, voucherDate: input.voucherDate, payee: input.payee,
                expenseAccountCode: input.expenseAccountCode, amountKobo: input.amountKobo, createdByUserId: input.createdByUserId,
            },
        });
        await this.audit.record({
            actorUserId: input.createdByUserId, action: 'CREATE', entityType: 'petty_cash_voucher', entityId: created.id,
            after: { floatId: input.floatId, payee: input.payee, expenseAccountCode: input.expenseAccountCode, amountKobo: input.amountKobo.toString() },
        });
        return created;
    }
    async listVouchers(floatId) {
        return this.prisma.pettyCashVoucher.findMany({ where: floatId ? { floatId } : undefined, orderBy: { voucherDate: 'desc' } });
    }
    async initiateReplenishmentClaim(input) {
        await this.assertCapability(input.initiatedByUserId, 'PETTY_CASH_MANAGEMENT', 'INITIATE', 'initiate a petty cash replenishment claim');
        if (input.voucherIds.length === 0)
            throw new petty_cash_types_1.PettyCashError('A replenishment claim requires at least one voucher.');
        const vouchers = await this.prisma.pettyCashVoucher.findMany({ where: { id: { in: input.voucherIds } } });
        if (vouchers.length !== input.voucherIds.length)
            throw new petty_cash_types_1.PettyCashError('One or more voucherIds do not exist.');
        if (vouchers.some((v) => v.floatId !== input.floatId))
            throw new petty_cash_types_1.PettyCashError('All vouchers in a claim must belong to the same float.');
        if (vouchers.some((v) => v.status !== 'OUTSTANDING' || v.claimId !== null)) {
            throw new petty_cash_types_1.PettyCashError('One or more vouchers are not OUTSTANDING or are already attached to a pending claim.');
        }
        const totalVoucherKobo = vouchers.reduce((sum, v) => sum + v.amountKobo, 0n);
        const created = await this.prisma.pettyCashReplenishmentClaim.create({
            data: { floatId: input.floatId, totalVoucherKobo, status: 'DRAFT', initiatedByUserId: input.initiatedByUserId },
        });
        await this.prisma.pettyCashVoucher.updateMany({ where: { id: { in: input.voucherIds } }, data: { claimId: created.id } });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'PETTY_CASH_REPLENISHMENT_APPROVAL',
                entityType: 'petty_cash_replenishment_claim',
                entityId: created.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
                amountKobo: totalVoucherKobo,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId, action: 'INITIATE_FAILED_COMPENSATED', entityType: 'petty_cash_replenishment_claim', entityId: created.id,
                after: { workflowTypeCode: 'PETTY_CASH_REPLENISHMENT_APPROVAL', reason: err.message },
            });
            await this.prisma.pettyCashVoucher.updateMany({ where: { id: { in: input.voucherIds } }, data: { claimId: null } });
            await this.prisma.pettyCashReplenishmentClaim.delete({ where: { id: created.id } });
            throw err;
        }
        const updated = await this.prisma.pettyCashReplenishmentClaim.update({
            where: { id: created.id },
            data: { status: 'PENDING_APPROVAL', workflowInstanceId: instance.id },
        });
        await this.audit.record({
            actorUserId: input.initiatedByUserId, action: 'CREATE', entityType: 'petty_cash_replenishment_claim', entityId: created.id,
            after: { floatId: input.floatId, totalVoucherKobo: totalVoucherKobo.toString(), voucherCount: vouchers.length },
        });
        return { claim: updated, workflowInstance: instance };
    }
    async decideReplenishmentClaim(workflowInstanceId, actorUserId, decision, notes) {
        const claim = await this.prisma.pettyCashReplenishmentClaim.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, actorUserId, notes);
            await this.prisma.pettyCashVoucher.updateMany({ where: { claimId: claim.id }, data: { claimId: null } });
            return this.prisma.pettyCashReplenishmentClaim.update({ where: { id: claim.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, actorUserId, notes);
        if (updated.status !== 'APPROVED')
            return null;
        const [, activatedClaim] = await this.prisma.$transaction([
            this.prisma.pettyCashVoucher.updateMany({ where: { claimId: claim.id }, data: { status: 'REIMBURSED' } }),
            this.prisma.pettyCashReplenishmentClaim.update({
                where: { id: claim.id },
                data: { status: 'DISBURSED', disbursedByUserId: actorUserId, disbursedAt: new Date() },
            }),
        ]);
        await this.audit.record({
            actorUserId, action: 'UPDATE', entityType: 'petty_cash_replenishment_claim', entityId: claim.id,
            after: { status: 'DISBURSED', totalVoucherKobo: claim.totalVoucherKobo.toString(), journalWiring: 'PARKED pending FinCon PETTY_CASH_REPLENISHMENT mapping (invariant 50a)' },
        });
        return activatedClaim;
    }
    async listClaims(floatId) {
        return this.prisma.pettyCashReplenishmentClaim.findMany({ where: floatId ? { floatId } : undefined, include: { vouchers: true }, orderBy: { createdAt: 'desc' } });
    }
    async recordSpotCheck(input) {
        await this.assertCapability(input.checkedByUserId, 'BUDGET_CONTROL_REVIEW', 'APPROVE', 'record a petty cash spot check');
        const balance = await this.getFloatBalance(input.floatId);
        const expectedKobo = balance.availableKobo;
        const varianceKobo = input.countedKobo - expectedKobo;
        const created = await this.prisma.pettyCashSpotCheck.create({
            data: { floatId: input.floatId, countedKobo: input.countedKobo, expectedKobo, varianceKobo, notes: input.notes, checkedByUserId: input.checkedByUserId },
        });
        await this.audit.record({
            actorUserId: input.checkedByUserId, action: 'CREATE', entityType: 'petty_cash_spot_check', entityId: created.id,
            after: { floatId: input.floatId, countedKobo: input.countedKobo.toString(), expectedKobo: expectedKobo.toString(), varianceKobo: varianceKobo.toString() },
        });
        return created;
    }
    async listSpotChecks(floatId) {
        return this.prisma.pettyCashSpotCheck.findMany({ where: floatId ? { floatId } : undefined, orderBy: { checkedAt: 'desc' } });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'petty_cash_activity', entityId: activity, after: { functionCode, level } });
            throw new petty_cash_types_1.PettyCashError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.PettyCashService = PettyCashService;
exports.PettyCashService = PettyCashService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], PettyCashService);
//# sourceMappingURL=petty-cash.service.js.map