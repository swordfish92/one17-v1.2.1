import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';
import { AcknowledgePrivacyNoticeDto } from './ops-api.types';
export declare class PrivacyNoticeController {
    private readonly privacyNotice;
    constructor(privacyNotice: PrivacyNoticeService);
    getActive(): Promise<{
        id: string;
        version: number;
        noticeText: string;
        effectiveFrom: Date | null;
    }>;
    acknowledge(dto: AcknowledgePrivacyNoticeDto, ip: string): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        acknowledgedAt: Date;
        noticeConfigId: string;
        context: import("../data-protection/data-protection.types").PrivacyNoticeContext;
        publicIntakeSubmissionId: string | null;
    }>;
    listLog(): Promise<({
        investor: {
            fullLegalName: string;
        } | null;
        counterparty: {
            legalName: string;
        } | null;
        noticeConfig: {
            id: string;
            status: import("../../generated/prisma/enums").GovernedItemStatus;
            createdAt: Date;
            version: number;
            effectiveFrom: Date | null;
            createdByUserId: string;
            noticeText: string;
        };
    } & {
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        acknowledgedAt: Date;
        noticeConfigId: string;
        context: import("../data-protection/data-protection.types").PrivacyNoticeContext;
        publicIntakeSubmissionId: string | null;
    })[]>;
}
