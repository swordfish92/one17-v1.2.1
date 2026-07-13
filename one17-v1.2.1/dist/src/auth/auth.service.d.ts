import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { MfaService } from '../mfa/mfa.service';
import { AuthenticatedUser, RequestContext } from './auth.types';
export declare class AuthService {
    private readonly prisma;
    private readonly audit;
    private readonly mfa;
    constructor(prisma: PrismaService, audit: AuditService, mfa: MfaService);
    login(email: string, password: string, ctx: RequestContext): Promise<{
        token: string;
        userId: string;
        expiresAt: Date;
        mfaRequired: boolean;
        mfaEnrolled: boolean;
    }>;
    promoteSessionPastMfa(token: string): Promise<void>;
    logout(token: string): Promise<void>;
    validateSession(token: string | undefined): Promise<AuthenticatedUser | null>;
    setPassword(userId: string, plainPassword: string): Promise<void>;
    private getPolicy;
    private hashToken;
}
