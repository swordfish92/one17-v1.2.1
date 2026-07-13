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
exports.ClientMessagingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
const audit_service_1 = require("../audit/audit.service");
let ClientMessagingService = class ClientMessagingService {
    prisma;
    delegation;
    audit;
    constructor(prisma, delegation, audit) {
        this.prisma = prisma;
        this.delegation = delegation;
        this.audit = audit;
    }
    async sendFromClient(investorId, body, subject) {
        return this.prisma.clientCommunication.create({
            data: {
                investorId,
                channel: 'PORTAL_MESSAGE',
                direction: 'INBOUND',
                subject,
                summary: body,
                occurredAt: new Date(),
            },
        });
    }
    async sendFromStaff(investorId, staffUserId, body, subject) {
        const { eligible } = await this.delegation.hasCapability(staffUserId, 'CLIENT_MESSAGING', 'INITIATE');
        if (!eligible) {
            throw new Error('Lacks INITIATE authority on CLIENT_MESSAGING to message a client.');
        }
        const message = await this.prisma.clientCommunication.create({
            data: {
                investorId,
                channel: 'PORTAL_MESSAGE',
                direction: 'OUTBOUND',
                subject,
                summary: body,
                loggedByUserId: staffUserId,
                occurredAt: new Date(),
            },
        });
        await this.audit.record({
            actorUserId: staffUserId,
            action: 'CREATE',
            entityType: 'client_communication',
            entityId: message.id,
            after: { investorId, channel: 'PORTAL_MESSAGE', direction: 'OUTBOUND' },
        });
        return message;
    }
    async listThread(investorId) {
        return this.prisma.clientCommunication.findMany({
            where: { investorId, channel: 'PORTAL_MESSAGE' },
            orderBy: { occurredAt: 'asc' },
            include: { loggedBy: { select: { displayName: true } } },
        });
    }
    async listThreadForStaff(investorId, staffUserId) {
        const { eligible } = await this.delegation.hasCapability(staffUserId, 'CLIENT_MESSAGING', 'VIEW');
        if (!eligible) {
            throw new Error('Lacks VIEW authority on CLIENT_MESSAGING to read a client message thread.');
        }
        return this.listThread(investorId);
    }
};
exports.ClientMessagingService = ClientMessagingService;
exports.ClientMessagingService = ClientMessagingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        delegation_service_1.DelegationService,
        audit_service_1.AuditService])
], ClientMessagingService);
//# sourceMappingURL=client-messaging.service.js.map