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
exports.ComplaintService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const complaint_types_1 = require("./complaint.types");
let ComplaintService = class ComplaintService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async getActiveSlaConfig() {
        const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!config) {
            throw new complaint_types_1.ComplaintError('No ACTIVE complaint_sla_config row — cannot raise a complaint until SLA policy is seeded/approved (invariant 12/16: never a silent default).');
        }
        return config;
    }
    async getActiveDsrResponseConfig() {
        const config = await this.prisma.dsrResponseConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!config) {
            throw new complaint_types_1.ComplaintError('No ACTIVE dsr_response_config row — cannot raise a DSR until the statutory response window is seeded/approved.');
        }
        return config;
    }
    async createComplaint(input) {
        if ((input.investorId ? 1 : 0) + (input.counterpartyId ? 1 : 0) !== 1) {
            throw new complaint_types_1.ComplaintError('A complaint must identify exactly one client (investorId XOR counterpartyId).');
        }
        if (input.isDsr && !input.dsrCategory) {
            throw new complaint_types_1.ComplaintError('A DSR must carry a dsrCategory (ACCESS/RECTIFICATION/ERASURE/OBJECTION/PORTABILITY).');
        }
        const receivedAt = new Date();
        const responseDays = input.isDsr ? (await this.getActiveDsrResponseConfig()).responseDays : (await this.getActiveSlaConfig()).slaDays;
        const slaDueAt = new Date(receivedAt.getTime() + responseDays * 24 * 60 * 60_000);
        const complaint = await this.prisma.complaint.create({
            data: {
                investorId: input.investorId,
                counterpartyId: input.counterpartyId,
                category: input.category,
                description: input.description,
                receivedAt,
                slaDueAt,
                loggedByUserId: input.loggedByUserId,
                isDsr: input.isDsr ?? false,
                dsrCategory: input.isDsr ? input.dsrCategory : undefined,
            },
        });
        await this.audit.record({
            actorUserId: input.loggedByUserId,
            action: 'CREATE',
            entityType: 'complaint',
            entityId: complaint.id,
            after: { category: input.category, investorId: input.investorId, counterpartyId: input.counterpartyId, isDsr: input.isDsr ?? false, dsrCategory: input.dsrCategory },
        });
        return complaint;
    }
    async raiseFromPortal(input) {
        return this.createComplaint(input);
    }
    async raiseByStaff(input) {
        await this.assertCapability(input.loggedByUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'log a complaint on a client\'s behalf');
        return this.createComplaint(input);
    }
    async assignOwner(input) {
        await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'assign a complaint owner');
        const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: input.complaintId } });
        const updated = await this.prisma.complaint.update({
            where: { id: input.complaintId },
            data: { ownerUserId: input.ownerUserId, status: complaint.status === 'OPEN' ? 'IN_PROGRESS' : complaint.status },
        });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: complaint.id, after: { ownerUserId: input.ownerUserId } });
        return updated;
    }
    async escalate(input) {
        await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'escalate a complaint');
        const updated = await this.prisma.complaint.update({
            where: { id: input.complaintId },
            data: { escalatedAt: new Date(), escalatedToUserId: input.escalatedToUserId },
        });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { escalatedToUserId: input.escalatedToUserId } });
        return updated;
    }
    async resolve(input) {
        await this.assertCapability(input.actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'resolve a complaint');
        const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: input.complaintId } });
        if (complaint.isDsr && !input.dsrLegalBasis) {
            throw new complaint_types_1.ComplaintError('A DSR must be resolved with a dsrLegalBasis (the statutory ground for the outcome, including refusals).');
        }
        const updated = await this.prisma.complaint.update({
            where: { id: input.complaintId },
            data: { status: 'RESOLVED', resolvedAt: new Date(), resolutionNotes: input.resolutionNotes, dsrLegalBasis: complaint.isDsr ? input.dsrLegalBasis : undefined },
        });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { status: 'RESOLVED', dsrLegalBasis: input.dsrLegalBasis } });
        return updated;
    }
    async close(complaintId, actorUserId) {
        await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'INITIATE', 'close a complaint');
        const complaint = await this.prisma.complaint.findUniqueOrThrow({ where: { id: complaintId } });
        if (complaint.status !== 'RESOLVED') {
            throw new complaint_types_1.ComplaintError(`Complaint ${complaintId} is ${complaint.status}, not RESOLVED — resolve it before closing.`);
        }
        const updated = await this.prisma.complaint.update({ where: { id: complaintId }, data: { status: 'CLOSED' } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'complaint', entityId: updated.id, after: { status: 'CLOSED' } });
        return updated;
    }
    slaState(complaint, amberThresholdPct, asOf = new Date()) {
        if (complaint.status === 'RESOLVED' || complaint.status === 'CLOSED')
            return 'CLOSED';
        const totalMs = complaint.slaDueAt.getTime() - complaint.receivedAt.getTime();
        const elapsedMs = asOf.getTime() - complaint.receivedAt.getTime();
        if (asOf.getTime() > complaint.slaDueAt.getTime())
            return 'BREACHED';
        if (totalMs > 0 && (elapsedMs / totalMs) * 100 >= amberThresholdPct)
            return 'AMBER';
        return 'ON_TRACK';
    }
    async listForInvestor(investorId) {
        return this.prisma.complaint.findMany({ where: { investorId }, orderBy: { createdAt: 'desc' } });
    }
    async listForCounterparty(counterpartyId) {
        return this.prisma.complaint.findMany({ where: { counterpartyId }, orderBy: { createdAt: 'desc' } });
    }
    async listAll(actorUserId) {
        await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'VIEW', 'view the complaint register');
        return this.prisma.complaint.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async listDsrQueue(actorUserId) {
        await this.assertCapability(actorUserId, 'COMPLAINT_MANAGEMENT', 'VIEW', 'view the DSR queue');
        const slaConfig = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        const amberThresholdPct = slaConfig?.amberThresholdPct ?? 100;
        const rows = await this.prisma.complaint.findMany({
            where: { isDsr: true },
            orderBy: { receivedAt: 'asc' },
            include: { investor: true, counterparty: true },
        });
        return rows.map((r) => ({
            ...r,
            clientName: r.investor?.fullLegalName ?? r.counterparty?.legalName ?? 'Unknown',
            responseClockState: this.slaState(r, amberThresholdPct),
        }));
    }
    async getAgingBreachCount(asOf = new Date()) {
        const config = await this.prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
        if (!config)
            return 0;
        const open = await this.prisma.complaint.findMany({ where: { status: { in: ['OPEN', 'IN_PROGRESS'] } } });
        return open.filter((c) => {
            const state = this.slaState(c, config.amberThresholdPct, asOf);
            return state === 'AMBER' || state === 'BREACHED';
        }).length;
    }
    async getRegisterRows(periodStart, periodEnd) {
        const complaints = await this.prisma.complaint.findMany({
            where: { receivedAt: { gte: periodStart, lte: periodEnd } },
            orderBy: { receivedAt: 'asc' },
            include: { investor: true, counterparty: true },
        });
        return complaints.map((c, i) => ({
            sn: i + 1,
            name: c.investor?.fullLegalName ?? c.counterparty?.legalName ?? 'Unknown',
            dateReceived: c.receivedAt.toISOString().slice(0, 10),
            nature: `${c.category}: ${c.description}`,
            status: c.status === 'RESOLVED' || c.status === 'CLOSED' ? 'RESOLVED' : 'UNRESOLVED',
            dateResolved: c.resolvedAt ? c.resolvedAt.toISOString().slice(0, 10) : '',
            remarks: c.resolutionNotes ?? '',
        }));
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'complaint_activity', entityId: activity, after: { functionCode, level } });
            throw new complaint_types_1.ComplaintError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ComplaintService = ComplaintService;
exports.ComplaintService = ComplaintService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], ComplaintService);
//# sourceMappingURL=complaint.service.js.map