import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { ProposeOversightPolicyInput, StartOversightSessionInput } from './exec-oversight.types';
export declare class ExecOversightService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    private assertCapability;
    private getActivePolicy;
    startSession(input: StartOversightSessionInput): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    }>;
    endSession(sessionId: string, viewedByUserId: string): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    }>;
    assertSessionOwnedAndActive(sessionId: string, viewedByUserId: string): Promise<{
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    }>;
    listLog(): Promise<({
        investor: {
            fullLegalName: string;
        } | null;
        counterparty: {
            legalName: string;
        } | null;
        viewedByUser: {
            email: string;
            displayName: string;
        };
    } & {
        id: string;
        ipAddress: string | null;
        investorId: string | null;
        counterpartyId: string | null;
        startedAt: Date;
        principalType: import("../../generated/prisma/enums").OversightPrincipalType;
        viewedByUserId: string;
        endedAt: Date | null;
    })[]>;
    proposePolicy(input: ProposeOversightPolicyInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }>;
    approvePolicy(policyId: string, approvedByUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }>;
    listPolicies(): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").GovernedItemStatus;
        createdAt: Date;
        version: number;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        grantedRoleCodes: import("@prisma/client/runtime/client").JsonValue;
    }[]>;
}
