import type { AuthenticatedUser } from '../auth/auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { RequestDelegationGrantDto, RevokeDelegationGrantDto } from './ops-api.types';
export declare class DelegationController {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService);
    list(): Promise<({
        delegate: {
            email: string;
            displayName: string;
        };
        delegatedBy: {
            email: string;
            displayName: string;
        };
    } & {
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
    })[]>;
    listFunctions(): Promise<{
        code: string;
        description: string | null;
    }[]>;
    listUsers(): Promise<{
        id: string;
        email: string;
        displayName: string;
    }[]>;
    requestGrant(dto: RequestDelegationGrantDto, user: AuthenticatedUser): Promise<{
        grant: {
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
        };
        workflowInstance: any;
    }>;
    revoke(id: string, dto: RevokeDelegationGrantDto, user: AuthenticatedUser): Promise<{
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
}
