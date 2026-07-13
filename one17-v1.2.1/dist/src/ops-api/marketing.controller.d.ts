import type { AuthenticatedUser } from '../auth/auth.types';
import { MarketingService } from '../marketing/marketing.service';
import { UploadMarketingResourceDto, SubscribeMarketingDto, UnsubscribeMarketingDto, InitiateMarketingSendDto } from './ops-api.types';
export declare class MarketingController {
    private readonly marketing;
    constructor(marketing: MarketingService);
    uploadResource(dto: UploadMarketingResourceDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        fileReference: string;
        title: string;
        resourceType: string;
    }>;
    listResources(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        fileReference: string;
        title: string;
        resourceType: string;
    }[]>;
    subscribe(dto: SubscribeMarketingDto): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        segments: string[];
        subscribed: boolean;
        unsubscribeToken: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        consentedAt: Date | null;
        consentNoticeVersion: number | null;
    }>;
    unsubscribe(dto: UnsubscribeMarketingDto): Promise<{
        id: string;
        email: string;
        fullName: string | null;
        segments: string[];
        subscribed: boolean;
        unsubscribeToken: string;
        subscribedAt: Date;
        unsubscribedAt: Date | null;
        consentedAt: Date | null;
        consentNoticeVersion: number | null;
    }>;
    getSubscriberStats(): Promise<{
        total: number;
        subscribed: number;
        unsubscribed: number;
    }>;
    initiateSend(dto: InitiateMarketingSendDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MarketingSendStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        initiatedByUserId: string;
        body: string;
        subject: string;
        resourceId: string | null;
        targetSegments: string[];
        sentAt: Date | null;
        recipientCount: number | null;
    }>;
    listSends(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").MarketingSendStatus;
        createdAt: Date;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        initiatedByUserId: string;
        body: string;
        subject: string;
        resourceId: string | null;
        targetSegments: string[];
        sentAt: Date | null;
        recipientCount: number | null;
    }[]>;
}
