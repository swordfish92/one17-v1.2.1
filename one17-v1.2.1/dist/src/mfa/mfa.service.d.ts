import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { MfaEnrollmentStart, MfaStatus } from './mfa.types';
export declare class MfaService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    isMfaMandatory(userId: string): Promise<boolean>;
    getStatus(userId: string): Promise<MfaStatus>;
    beginEnrollment(userId: string): Promise<MfaEnrollmentStart>;
    confirmEnrollment(userId: string, code: string): Promise<string[]>;
    verifyCode(userId: string, code: string): Promise<boolean>;
    resetMfa(targetUserId: string, actorUserId: string): Promise<void>;
    listFinancialCapabilities(): Promise<{
        functionCode: string;
        addedByUserId: string;
        addedAt: Date;
    }[]>;
    addFinancialCapability(functionCode: string, actorUserId: string): Promise<{
        functionCode: string;
        addedByUserId: string;
        addedAt: Date;
    }>;
    removeFinancialCapability(functionCode: string, actorUserId: string): Promise<void>;
    setGlobalEnforcement(allStaffMandatory: boolean, actorUserId: string): Promise<{
        id: number;
        updatedAt: Date;
        allStaffMandatory: boolean;
        updatedByUserId: string | null;
    }>;
}
