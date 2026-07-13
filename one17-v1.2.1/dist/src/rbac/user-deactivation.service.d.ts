import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
export declare class UserDeactivationService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    deactivateUser(userId: string, actorUserId: string, reason?: string): Promise<{
        id: string;
        updatedAt: Date;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        totpSecret: string | null;
        mfaEnabledAt: Date | null;
        createdAt: Date;
    }>;
    reactivateUser(userId: string, actorUserId: string): Promise<{
        id: string;
        updatedAt: Date;
        email: string;
        displayName: string;
        status: import("../../generated/prisma/enums").UserStatus;
        passwordHash: string | null;
        failedLoginAttempts: number;
        lockedUntil: Date | null;
        totpSecret: string | null;
        mfaEnabledAt: Date | null;
        createdAt: Date;
    }>;
}
