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
exports.InvestorExitService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const investor_types_1 = require("./investor.types");
const ENTITY_TYPE = 'investor_exit_request';
let InvestorExitService = class InvestorExitService {
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
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
            throw new investor_types_1.InvestorLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async assertNoOpenHoldings(investorId) {
        const [openProductAccounts, openMandateAccounts] = await Promise.all([
            this.prisma.productAccount.count({ where: { investorId, status: 'ACTIVE' } }),
            this.prisma.ndMandateAccount.count({ where: { investorId, participantType: 'INVESTOR', status: 'ACTIVE' } }),
        ]);
        if (openProductAccounts > 0 || openMandateAccounts > 0) {
            throw new investor_types_1.InvestorLifecycleError(`Investor ${investorId} still has ${openProductAccounts} open product account(s) and ${openMandateAccounts} open mandate account(s) — a FINAL_EXIT cannot proceed until every holding is MATURED/CLOSED.`);
        }
    }
    async requestExit(input) {
        await this.assertCapability(input.requestedByUserId, 'INVESTOR_EXIT_INITIATION', 'INITIATE', 'propose an investor exit/maturity transition');
        const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
        if (input.exitType === 'MATURITY_TRANSITION' && investor.fundStatus !== 'ACTIVE') {
            throw new investor_types_1.InvestorLifecycleError(`A MATURITY_TRANSITION request requires the investor to be ACTIVE (currently ${investor.fundStatus}).`);
        }
        if (input.exitType === 'FINAL_EXIT') {
            if (investor.fundStatus !== 'ACTIVE' && investor.fundStatus !== 'MATURED' && investor.fundStatus !== 'DORMANT') {
                throw new investor_types_1.InvestorLifecycleError(`A FINAL_EXIT request requires the investor to be ACTIVE, MATURED, or DORMANT (currently ${investor.fundStatus}).`);
            }
            await this.assertNoOpenHoldings(input.investorId);
        }
        const request = await this.prisma.investorExitRequest.create({
            data: { investorId: input.investorId, exitType: input.exitType, requestedByUserId: input.requestedByUserId },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'INVESTOR_EXIT',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                initiatedByUserId: input.requestedByUserId,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.requestedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                after: { workflowTypeCode: 'INVESTOR_EXIT', reason: err.message },
            });
            await this.prisma.investorExitRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideExit(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.investorExitRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId: request.investorId } });
        if (request.exitType === 'MATURITY_TRANSITION' && investor.fundStatus !== 'ACTIVE') {
            throw new investor_types_1.InvestorLifecycleError(`Cannot approve: investor ${request.investorId} is no longer ACTIVE (currently ${investor.fundStatus}).`);
        }
        if (request.exitType === 'FINAL_EXIT') {
            if (investor.fundStatus !== 'ACTIVE' && investor.fundStatus !== 'MATURED' && investor.fundStatus !== 'DORMANT') {
                throw new investor_types_1.InvestorLifecycleError(`Cannot approve: investor ${request.investorId} is no longer eligible for FINAL_EXIT (currently ${investor.fundStatus}).`);
            }
            await this.assertNoOpenHoldings(request.investorId);
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: request.id } });
        const newFundStatus = request.exitType === 'MATURITY_TRANSITION' ? 'MATURED' : 'EXITED';
        await this.prisma.investor.update({ where: { investorId: request.investorId }, data: { fundStatus: newFundStatus } });
        const finalRequest = await this.prisma.investorExitRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'investor', entityId: request.investorId, after: { fundStatus: newFundStatus } });
        return finalRequest;
    }
    async listForInvestor(investorId) {
        return this.prisma.investorExitRequest.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async getTrail(requestId) {
        const request = await this.prisma.investorExitRequest.findUniqueOrThrow({ where: { id: requestId } });
        const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, workflowTrail };
    }
    async runDormancySweep(now) {
        const config = await this.prisma.investorDormancyConfig.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
        const cutoff = new Date(now);
        cutoff.setMonth(cutoff.getMonth() - config.monthsInactiveThreshold);
        const candidates = await this.prisma.investor.findMany({
            where: { fundStatus: { in: ['ACTIVE', 'DORMANT'] }, productAccounts: { some: {} } },
            select: { investorId: true, fundStatus: true },
        });
        let markedDormant = 0;
        let reactivated = 0;
        for (const investor of candidates) {
            const lastTxn = await this.prisma.txn.findFirst({
                where: { productAccount: { investorId: investor.investorId } },
                orderBy: { valueDate: 'desc' },
                select: { valueDate: true },
            });
            const isStale = !lastTxn || lastTxn.valueDate < cutoff;
            if (isStale && investor.fundStatus === 'ACTIVE') {
                await this.prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'DORMANT' } });
                markedDormant++;
            }
            else if (!isStale && investor.fundStatus === 'DORMANT') {
                await this.prisma.investor.update({ where: { investorId: investor.investorId }, data: { fundStatus: 'ACTIVE' } });
                reactivated++;
            }
        }
        return { checked: candidates.length, markedDormant, reactivated };
    }
};
exports.InvestorExitService = InvestorExitService;
exports.InvestorExitService = InvestorExitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], InvestorExitService);
//# sourceMappingURL=investor-exit.service.js.map