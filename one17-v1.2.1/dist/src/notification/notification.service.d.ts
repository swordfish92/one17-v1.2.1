import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationInput } from './notification.types';
export declare class NotificationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: CreateNotificationInput): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }>;
    listMine(userId: string, limit?: number): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }[]>;
    markRead(notificationId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }>;
    listMineForInvestor(investorId: string, limit?: number): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }[]>;
    markReadForInvestor(notificationId: string, investorId: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }>;
}
