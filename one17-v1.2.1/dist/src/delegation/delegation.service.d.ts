import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RequestGrantInput } from './delegation.types';
export declare class DelegationService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    requestGrant(input: RequestGrantInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DelegationStatus;
        createdAt: Date;
        revokedAt: Date | null;
        functionCode: string;
        reason: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveTo: Date | null;
        boardInstrumentRef: string | null;
        revokedByUserId: string | null;
    }>;
    attachWorkflowInstance(delegationId: string, workflowInstanceId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DelegationStatus;
        createdAt: Date;
        revokedAt: Date | null;
        functionCode: string;
        reason: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveTo: Date | null;
        boardInstrumentRef: string | null;
        revokedByUserId: string | null;
    }>;
    discardPendingGrant(delegationId: string): Promise<void>;
    activate(delegationId: string, activatedByUserId?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DelegationStatus;
        createdAt: Date;
        revokedAt: Date | null;
        functionCode: string;
        reason: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveTo: Date | null;
        boardInstrumentRef: string | null;
        revokedByUserId: string | null;
    }>;
    revoke(delegationId: string, revokedByUserId: string, reason?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DelegationStatus;
        createdAt: Date;
        revokedAt: Date | null;
        functionCode: string;
        reason: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveTo: Date | null;
        boardInstrumentRef: string | null;
        revokedByUserId: string | null;
    }>;
    hasCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', options?: {
        requiresAmountLimitCheck?: boolean;
        amountKobo?: bigint | null;
    }): Promise<{
        eligible: boolean;
        viaDelegationId?: string;
    }>;
    findEligibleGrant(delegateUserId: string, functionCode: string, requiresAmountLimitCheck: boolean, instanceAmountKobo: bigint | null, at?: Date): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DelegationStatus;
        createdAt: Date;
        revokedAt: Date | null;
        functionCode: string;
        reason: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveTo: Date | null;
        boardInstrumentRef: string | null;
        revokedByUserId: string | null;
    } | null>;
    private effectiveAuthority;
    private maxLimit;
    private denyRequest;
}
