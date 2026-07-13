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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationService = class NotificationService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        return this.prisma.notification.create({
            data: {
                recipientUserId: input.recipientUserId,
                recipientInvestorId: input.recipientInvestorId,
                type: input.type,
                title: input.title,
                body: input.body,
                linkPath: input.linkPath,
            },
        });
    }
    async listMine(userId, limit = 50) {
        return this.prisma.notification.findMany({
            where: { recipientUserId: userId },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }
    async markRead(notificationId, userId) {
        const notification = await this.prisma.notification.findUniqueOrThrow({ where: { id: notificationId } });
        if (notification.recipientUserId !== userId) {
            throw new Error(`Notification ${notificationId} does not belong to this user — cannot mark another user's notification read.`);
        }
        return this.prisma.notification.update({ where: { id: notificationId }, data: { isRead: true } });
    }
    async listMineForInvestor(investorId, limit = 50) {
        return this.prisma.notification.findMany({
            where: { recipientInvestorId: investorId },
            orderBy: { createdAt: 'desc' },
            take: limit,
        });
    }
    async markReadForInvestor(notificationId, investorId) {
        const notification = await this.prisma.notification.findUniqueOrThrow({ where: { id: notificationId } });
        if (notification.recipientInvestorId !== investorId) {
            throw new Error(`Notification ${notificationId} does not belong to this investor — cannot mark another investor's notification read.`);
        }
        return this.prisma.notification.update({ where: { id: notificationId }, data: { isRead: true } });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map