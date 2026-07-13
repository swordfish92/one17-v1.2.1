import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationInput } from './notification.types';

// Invariant 29(a) "notifications inbox" — a plain in-app inbox (persisted
// rows), distinct from the future email/SMTP notification engine (inv 24/
// 25/28b) which does not exist yet. Called by other services (TaskService,
// ProfileService, SubscriptionService) as a side effect of their own domain
// events — this service owns no business rule beyond "create a row, list
// mine, mark read." CHECK16 62(b) widened it to a second recipient shape
// (portal investor) — every method below is now explicit about which
// realm it's serving rather than assuming AppUser.
@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateNotificationInput) {
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

  async listMine(userId: string, limit = 50) {
    return this.prisma.notification.findMany({
      where: { recipientUserId: userId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async markRead(notificationId: string, userId: string) {
    const notification = await this.prisma.notification.findUniqueOrThrow({ where: { id: notificationId } });
    if (notification.recipientUserId !== userId) {
      throw new Error(`Notification ${notificationId} does not belong to this user — cannot mark another user's notification read.`);
    }
    return this.prisma.notification.update({ where: { id: notificationId }, data: { isRead: true } });
  }

  async listMineForInvestor(investorId: string, limit = 50) {
    return this.prisma.notification.findMany({
      where: { recipientInvestorId: investorId },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  async markReadForInvestor(notificationId: string, investorId: string) {
    const notification = await this.prisma.notification.findUniqueOrThrow({ where: { id: notificationId } });
    if (notification.recipientInvestorId !== investorId) {
      throw new Error(`Notification ${notificationId} does not belong to this investor — cannot mark another investor's notification read.`);
    }
    return this.prisma.notification.update({ where: { id: notificationId }, data: { isRead: true } });
  }
}
