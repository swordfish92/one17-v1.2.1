import type { Request } from 'express';
import { MfaService } from './mfa.service';
import { MfaCodeDto, MfaFinancialCapabilityDto, MfaGlobalEnforcementDto } from './mfa.types';
import type { AuthenticatedUser } from '../auth/auth.types';
import { AuthService } from '../auth/auth.service';
export declare class MfaController {
    private readonly mfa;
    private readonly authService;
    constructor(mfa: MfaService, authService: AuthService);
    status(user: AuthenticatedUser): Promise<import("./mfa.types").MfaStatus>;
    beginEnrollment(user: AuthenticatedUser): Promise<import("./mfa.types").MfaEnrollmentStart>;
    confirmEnrollment(dto: MfaCodeDto, user: AuthenticatedUser, req: Request): Promise<{
        backupCodes: string[];
    }>;
    verify(dto: MfaCodeDto, user: AuthenticatedUser, req: Request): Promise<{
        ok: boolean;
    }>;
    resetUserMfa(targetUserId: string, user: AuthenticatedUser): Promise<{
        ok: boolean;
    }>;
    listFinancialCapabilities(): Promise<{
        functionCode: string;
        addedByUserId: string;
        addedAt: Date;
    }[]>;
    addFinancialCapability(dto: MfaFinancialCapabilityDto, user: AuthenticatedUser): Promise<{
        functionCode: string;
        addedByUserId: string;
        addedAt: Date;
    }>;
    removeFinancialCapability(functionCode: string, user: AuthenticatedUser): Promise<{
        ok: boolean;
    }>;
    setGlobalEnforcement(dto: MfaGlobalEnforcementDto, user: AuthenticatedUser): Promise<{
        id: number;
        updatedAt: Date;
        allStaffMandatory: boolean;
        updatedByUserId: string | null;
    }>;
}
