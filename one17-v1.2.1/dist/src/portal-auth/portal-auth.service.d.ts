import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { AuthenticatedPortalUser, PortalRequestContext } from './portal-auth.types';
export declare class PortalAuthService {
    private readonly prisma;
    private readonly audit;
    constructor(prisma: PrismaService, audit: AuditService);
    provisionForInvestor(investorId: string): Promise<{
        portalUserId: string;
        bootstrapPassword: string;
    }>;
    provisionForCounterparty(counterpartyId: string): Promise<{
        portalUserId: string;
        bootstrapPassword: string;
    }>;
    login(email: string, password: string, ctx: PortalRequestContext): Promise<{
        token: string;
        portalUserId: string;
        expiresAt: Date;
        requiresPrivacyNoticeAcknowledgment: boolean;
    }>;
    private completeLogin;
    recordFirstLoginAcknowledgment(portalUserId: string, principalType: 'INVESTOR' | 'COUNTERPARTY'): Promise<void>;
    logout(token: string): Promise<void>;
    validateSession(token: string | undefined): Promise<AuthenticatedPortalUser | null>;
    private hashToken;
}
