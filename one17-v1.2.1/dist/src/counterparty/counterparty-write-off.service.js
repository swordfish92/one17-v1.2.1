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
exports.CounterpartyWriteOffService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const counterparty_types_1 = require("./counterparty.types");
const ENTITY_TYPE = 'counterparty_write_off_request';
let CounterpartyWriteOffService = class CounterpartyWriteOffService {
    prisma;
    audit;
    delegation;
    workflow;
    eventJournal;
    constructor(prisma, audit, delegation, workflow, eventJournal) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.eventJournal = eventJournal;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: ENTITY_TYPE, entityId: activity, after: { functionCode, level } });
            throw new counterparty_types_1.CounterpartyLifecycleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async requestWriteOff(input) {
        await this.assertCapability(input.requestedByUserId, 'COUNTERPARTY_WRITE_OFF_INITIATION', 'INITIATE', 'propose a counterparty write-off');
        if (input.writeOffAmountKobo <= 0n) {
            throw new counterparty_types_1.CounterpartyLifecycleError('writeOffAmountKobo must be positive.');
        }
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: input.counterpartyId } });
        if (counterparty.accountStatus !== 'OPEN') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Counterparty ${input.counterpartyId} is already ${counterparty.accountStatus} -- a write-off can only be proposed against an OPEN account.`);
        }
        const request = await this.prisma.counterpartyWriteOffRequest.create({
            data: {
                counterpartyId: input.counterpartyId,
                writeOffAmountKobo: input.writeOffAmountKobo,
                ledgerEntityCode: input.ledgerEntityCode,
                investmentAccountCode: input.investmentAccountCode,
                reason: input.reason,
                requestedByUserId: input.requestedByUserId,
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'COUNTERPARTY_WRITE_OFF',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                initiatedByUserId: input.requestedByUserId,
                amountKobo: input.writeOffAmountKobo,
                scenario: 'STANDARD',
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.requestedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: ENTITY_TYPE,
                entityId: request.id,
                after: { workflowTypeCode: 'COUNTERPARTY_WRITE_OFF', reason: err.message },
            });
            await this.prisma.counterpartyWriteOffRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.counterpartyWriteOffRequest.update({ where: { id: request.id }, data: { workflowInstanceId: instance.id } });
    }
    async decideWriteOff(workflowInstanceId, approverUserId, decision, notes) {
        const request = await this.prisma.counterpartyWriteOffRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        if (decision === 'REJECT') {
            await this.workflow.reject(workflowInstanceId, approverUserId, notes);
            return this.prisma.counterpartyWriteOffRequest.update({ where: { id: request.id }, data: { status: 'REJECTED', rejectionNotes: notes } });
        }
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: request.counterpartyId } });
        if (counterparty.accountStatus !== 'OPEN') {
            throw new counterparty_types_1.CounterpartyLifecycleError(`Cannot approve: counterparty ${request.counterpartyId} is no longer OPEN (currently ${counterparty.accountStatus}).`);
        }
        const updated = await this.workflow.approveNextStep(workflowInstanceId, approverUserId, notes);
        if (updated.status !== 'APPROVED')
            return this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: request.id } });
        const { journal } = await this.eventJournal.generateAndRequestPosting({
            eventType: 'IMPAIRMENT_CHARGE',
            ledgerEntityCode: request.ledgerEntityCode,
            amountKobo: request.writeOffAmountKobo,
            crAccountCodeOverride: request.investmentAccountCode,
            entryDate: new Date(),
            referenceTokens: { counterparty_id: request.counterpartyId, date: new Date().toISOString().slice(0, 10) },
            createdByUserId: approverUserId,
        });
        await this.prisma.counterparty.update({ where: { id: request.counterpartyId }, data: { accountStatus: 'WRITTEN_OFF' } });
        const finalRequest = await this.prisma.counterpartyWriteOffRequest.update({
            where: { id: request.id },
            data: { status: 'APPROVED', postedJournalEntryId: journal.id },
        });
        await this.audit.record({ actorUserId: approverUserId, action: 'UPDATE', entityType: 'counterparty', entityId: request.counterpartyId, after: { accountStatus: 'WRITTEN_OFF', writeOffAmountKobo: request.writeOffAmountKobo.toString() } });
        return finalRequest;
    }
    async listForCounterparty(counterpartyId) {
        return this.prisma.counterpartyWriteOffRequest.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
    }
    async getTrail(requestId) {
        const request = await this.prisma.counterpartyWriteOffRequest.findUniqueOrThrow({ where: { id: requestId } });
        const workflowTrail = request.workflowInstanceId ? await this.workflow.getTrail(request.workflowInstanceId) : null;
        return { request, workflowTrail };
    }
};
exports.CounterpartyWriteOffService = CounterpartyWriteOffService;
exports.CounterpartyWriteOffService = CounterpartyWriteOffService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        event_journal_service_1.EventJournalService])
], CounterpartyWriteOffService);
//# sourceMappingURL=counterparty-write-off.service.js.map