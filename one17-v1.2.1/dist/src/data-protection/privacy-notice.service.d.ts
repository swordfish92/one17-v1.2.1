import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RecordPrivacyNoticeAcknowledgmentInput } from './data-protection.types';
export declare class PrivacyNoticeService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    getActiveNotice(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        effectiveFrom: Date | null;
        createdByUserId: string;
        noticeText: string;
    }>;
    recordAcknowledgment(input: RecordPrivacyNoticeAcknowledgmentInput): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        acknowledgedAt: Date;
        noticeConfigId: string;
        context: import("./data-protection.types").PrivacyNoticeContext;
        publicIntakeSubmissionId: string | null;
    }>;
    listAcknowledgments(): Promise<({
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
        context: import("./data-protection.types").PrivacyNoticeContext;
        publicIntakeSubmissionId: string | null;
    })[]>;
}
