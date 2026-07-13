import type { Request, Response } from 'express';
import { PortalAuthService } from './portal-auth.service';
import { PortalLoginDto } from './portal-auth.types';
import type { AuthenticatedPortalUser } from './portal-auth.types';
import { PrismaService } from '../prisma/prisma.service';
import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';
export declare class PortalAuthController {
    private readonly portalAuth;
    private readonly prisma;
    private readonly privacyNotice;
    constructor(portalAuth: PortalAuthService, prisma: PrismaService, privacyNotice: PrivacyNoticeService);
    login(dto: PortalLoginDto, req: Request, res: Response): Promise<{
        ok: boolean;
        requiresPrivacyNoticeAcknowledgment: boolean;
    }>;
    acknowledgePrivacyNotice(user: AuthenticatedPortalUser, req: Request): Promise<{
        ok: boolean;
    }>;
    logout(req: Request, res: Response): Promise<{
        ok: boolean;
    }>;
    me(user: AuthenticatedPortalUser): Promise<{
        principalType: "COUNTERPARTY";
        counterpartyId: string;
        legalName: string;
        contactEmail: string | null;
        requiresPrivacyNoticeAcknowledgment: boolean;
        investorId?: undefined;
        fullLegalName?: undefined;
    } | {
        principalType: "INVESTOR";
        investorId: string;
        fullLegalName: string;
        contactEmail: string;
        requiresPrivacyNoticeAcknowledgment: boolean;
        counterpartyId?: undefined;
        legalName?: undefined;
    }>;
}
