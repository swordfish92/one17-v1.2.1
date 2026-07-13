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
exports.DataBreachRegisterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const data_protection_types_1 = require("./data-protection.types");
const NDPC_NOTIFICATION_WINDOW_HOURS = 72;
let DataBreachRegisterService = class DataBreachRegisterService {
    prisma;
    audit;
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async logBreach(input) {
        const ndpcNotificationDeadline = new Date(input.discoveredAt.getTime() + NDPC_NOTIFICATION_WINDOW_HOURS * 60 * 60_000);
        const entry = await this.prisma.dataBreachRegisterEntry.create({
            data: {
                discoveredAt: input.discoveredAt,
                discoveredByUserId: input.discoveredByUserId,
                description: input.description,
                affectedDataClasses: input.affectedDataClasses,
                estimatedAffectedSubjects: input.estimatedAffectedSubjects,
                ndpcNotificationDeadline,
            },
        });
        await this.audit.record({
            actorUserId: input.discoveredByUserId,
            action: 'CREATE',
            entityType: 'data_breach_register_entry',
            entityId: entry.id,
            after: { description: input.description, affectedDataClasses: input.affectedDataClasses, ndpcNotificationDeadline },
        });
        return entry;
    }
    async assess(input) {
        const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
        if (entry.status !== 'OPEN') {
            throw new data_protection_types_1.DataProtectionError(`Breach ${input.breachId} is ${entry.status}, not OPEN -- already assessed.`);
        }
        const updated = await this.prisma.dataBreachRegisterEntry.update({
            where: { id: input.breachId },
            data: {
                severity: input.severity,
                likelyHighRisk: input.likelyHighRisk,
                assessmentNotes: input.assessmentNotes,
                dataSubjectsNotificationRequired: input.dataSubjectsNotificationRequired,
                assessedAt: new Date(),
                assessedByUserId: input.actorUserId,
                status: 'ASSESSED',
            },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'data_breach_register_entry',
            entityId: updated.id,
            after: { severity: input.severity, likelyHighRisk: input.likelyHighRisk, dataSubjectsNotificationRequired: input.dataSubjectsNotificationRequired },
        });
        return updated;
    }
    async recordNdpcNotification(input) {
        const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
        if (entry.status !== 'ASSESSED') {
            throw new data_protection_types_1.DataProtectionError(`Breach ${input.breachId} is ${entry.status}, not ASSESSED -- assess before notifying NDPC.`);
        }
        const notifiedAt = new Date();
        const updated = await this.prisma.dataBreachRegisterEntry.update({
            where: { id: input.breachId },
            data: { ndpcNotifiedAt: notifiedAt, ndpcNotifiedByUserId: input.actorUserId, status: 'NDPC_NOTIFIED' },
        });
        await this.audit.record({
            actorUserId: input.actorUserId,
            action: 'UPDATE',
            entityType: 'data_breach_register_entry',
            entityId: updated.id,
            after: { ndpcNotifiedAt: notifiedAt, withinDeadline: notifiedAt.getTime() <= entry.ndpcNotificationDeadline.getTime() },
        });
        return updated;
    }
    async recordDataSubjectNotification(input) {
        const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
        if (!entry.dataSubjectsNotificationRequired) {
            throw new data_protection_types_1.DataProtectionError(`Breach ${input.breachId} was assessed as not requiring data-subject notification.`);
        }
        const updated = await this.prisma.dataBreachRegisterEntry.update({
            where: { id: input.breachId },
            data: { dataSubjectsNotifiedAt: new Date(), status: 'DATA_SUBJECTS_NOTIFIED' },
        });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'data_breach_register_entry', entityId: updated.id, after: { dataSubjectsNotifiedAt: updated.dataSubjectsNotifiedAt } });
        return updated;
    }
    async close(input) {
        const entry = await this.prisma.dataBreachRegisterEntry.findUniqueOrThrow({ where: { id: input.breachId } });
        if (entry.status === 'OPEN' || entry.status === 'CLOSED') {
            throw new data_protection_types_1.DataProtectionError(`Breach ${input.breachId} is ${entry.status} -- cannot close before assessment, and it is already closed if CLOSED.`);
        }
        if (entry.ndpcNotifiedAt === null) {
            throw new data_protection_types_1.DataProtectionError('Cannot close a breach before recording NDPC notification.');
        }
        if (entry.dataSubjectsNotificationRequired && entry.dataSubjectsNotifiedAt === null) {
            throw new data_protection_types_1.DataProtectionError('Cannot close a breach that requires data-subject notification before recording it.');
        }
        const updated = await this.prisma.dataBreachRegisterEntry.update({
            where: { id: input.breachId },
            data: { postIncidentNotes: input.postIncidentNotes, status: 'CLOSED', closedAt: new Date(), closedByUserId: input.actorUserId },
        });
        await this.audit.record({ actorUserId: input.actorUserId, action: 'UPDATE', entityType: 'data_breach_register_entry', entityId: updated.id, after: { status: 'CLOSED' } });
        return updated;
    }
    async listAll() {
        return this.prisma.dataBreachRegisterEntry.findMany({ orderBy: { discoveredAt: 'desc' } });
    }
    async getOpenCount() {
        return this.prisma.dataBreachRegisterEntry.count({ where: { status: { not: 'CLOSED' } } });
    }
};
exports.DataBreachRegisterService = DataBreachRegisterService;
exports.DataBreachRegisterService = DataBreachRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], DataBreachRegisterService);
//# sourceMappingURL=data-breach-register.service.js.map