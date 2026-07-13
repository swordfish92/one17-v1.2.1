import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
export declare class ClientMessagingService {
    private readonly prisma;
    private readonly delegation;
    private readonly audit;
    constructor(prisma: PrismaService, delegation: DelegationService, audit: AuditService);
    sendFromClient(investorId: string, body: string, subject?: string): Promise<{
        id: string;
        occurredAt: Date;
        createdAt: Date;
        investorId: string | null;
        counterpartyId: string | null;
        summary: string;
        direction: import("../../generated/prisma/enums").CommunicationDirection;
        leadId: string | null;
        channel: string;
        subject: string | null;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
    }>;
    sendFromStaff(investorId: string, staffUserId: string, body: string, subject?: string): Promise<{
        id: string;
        occurredAt: Date;
        createdAt: Date;
        investorId: string | null;
        counterpartyId: string | null;
        summary: string;
        direction: import("../../generated/prisma/enums").CommunicationDirection;
        leadId: string | null;
        channel: string;
        subject: string | null;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
    }>;
    listThread(investorId: string): Promise<({
        loggedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        occurredAt: Date;
        createdAt: Date;
        investorId: string | null;
        counterpartyId: string | null;
        summary: string;
        direction: import("../../generated/prisma/enums").CommunicationDirection;
        leadId: string | null;
        channel: string;
        subject: string | null;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
    })[]>;
    listThreadForStaff(investorId: string, staffUserId: string): Promise<({
        loggedBy: {
            displayName: string;
        } | null;
    } & {
        id: string;
        occurredAt: Date;
        createdAt: Date;
        investorId: string | null;
        counterpartyId: string | null;
        summary: string;
        direction: import("../../generated/prisma/enums").CommunicationDirection;
        leadId: string | null;
        channel: string;
        subject: string | null;
        routedToFunctionCode: string | null;
        loggedByUserId: string | null;
    })[]>;
}
