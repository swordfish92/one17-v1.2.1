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
exports.BoardMinutesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const notification_service_1 = require("../notification/notification.service");
const board_minutes_types_1 = require("./board-minutes.types");
let BoardMinutesService = class BoardMinutesService {
    prisma;
    audit;
    delegation;
    notification;
    constructor(prisma, audit, delegation, notification) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.notification = notification;
    }
    async uploadMinutes(input, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'INITIATE', 'upload Board Minutes');
        const minutes = await this.prisma.boardMinutes.create({
            data: { title: input.title, fileReference: input.fileReference, committeeTag: input.committeeTag, uploadedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_minutes', entityId: minutes.id, after: { title: input.title, committeeTag: input.committeeTag } });
        return minutes;
    }
    async transmitMinutes(minutesId, recipientUserId, actorUserId) {
        await this.assertCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'INITIATE', 'transmit Board Minutes');
        await this.prisma.boardMinutes.findUniqueOrThrow({ where: { id: minutesId } });
        const transmission = await this.prisma.boardMinutesTransmission.upsert({
            where: { minutesId_recipientUserId: { minutesId, recipientUserId } },
            create: { minutesId, recipientUserId, transmittedByUserId: actorUserId },
            update: {},
        });
        await this.notification.create({
            recipientUserId,
            type: 'GENERIC',
            title: 'Board Minutes transmitted to you',
            body: 'Board Minutes have been transmitted to you for acknowledgment.',
            linkPath: '/governance/board-minutes',
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'board_minutes_transmission', entityId: transmission.id, after: { minutesId, recipientUserId } });
        return transmission;
    }
    async acknowledgeTransmission(minutesId, actorUserId) {
        const transmission = await this.prisma.boardMinutesTransmission.findUnique({
            where: { minutesId_recipientUserId: { minutesId, recipientUserId: actorUserId } },
        });
        if (!transmission) {
            throw new board_minutes_types_1.BoardMinutesError(`Board Minutes ${minutesId} were never transmitted to this user — nothing to acknowledge.`);
        }
        if (transmission.acknowledgedAt) {
            throw new board_minutes_types_1.BoardMinutesError(`This transmission was already acknowledged at ${transmission.acknowledgedAt.toISOString()}.`);
        }
        const updated = await this.prisma.boardMinutesTransmission.update({ where: { id: transmission.id }, data: { acknowledgedAt: new Date() } });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'board_minutes_transmission', entityId: transmission.id, after: { acknowledgedAt: updated.acknowledgedAt } });
        return updated;
    }
    async listMinutesForViewer(actorUserId) {
        const { eligible } = await this.delegation.hasCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'VIEW');
        if (eligible) {
            return this.prisma.boardMinutes.findMany({
                orderBy: { createdAt: 'desc' },
                include: { uploadedBy: { select: { displayName: true } }, transmissions: { select: { recipientUserId: true, transmittedAt: true, acknowledgedAt: true } } },
            });
        }
        return this.prisma.boardMinutes.findMany({
            where: { transmissions: { some: { recipientUserId: actorUserId } } },
            orderBy: { createdAt: 'desc' },
            include: { uploadedBy: { select: { displayName: true } }, transmissions: { where: { recipientUserId: actorUserId } } },
        });
    }
    async getMinutes(minutesId, actorUserId) {
        const { eligible } = await this.delegation.hasCapability(actorUserId, 'BOARD_MINUTES_MANAGEMENT', 'VIEW');
        if (!eligible) {
            const transmission = await this.prisma.boardMinutesTransmission.findUnique({
                where: { minutesId_recipientUserId: { minutesId, recipientUserId: actorUserId } },
            });
            if (!transmission) {
                await this.audit.record({ actorUserId, action: 'PERMISSION_DENIED', entityType: 'board_minutes', entityId: minutesId, after: {} });
                throw new board_minutes_types_1.BoardMinutesError(`User lacks access to Board Minutes ${minutesId} — restricted ACL tier (Board/CS/MD only unless widened, invariant 37c-v).`);
            }
        }
        return this.prisma.boardMinutes.findUniqueOrThrow({
            where: { id: minutesId },
            include: { uploadedBy: { select: { displayName: true } }, transmissions: true },
        });
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'board_minutes_activity', entityId: activity, after: { functionCode, level } });
            throw new board_minutes_types_1.BoardMinutesError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BoardMinutesService = BoardMinutesService;
exports.BoardMinutesService = BoardMinutesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        notification_service_1.NotificationService])
], BoardMinutesService);
//# sourceMappingURL=board-minutes.service.js.map