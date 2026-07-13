import { CanActivate, ExecutionContext } from '@nestjs/common';
import { PortalAuthService } from './portal-auth.service';
import { AuditService } from '../audit/audit.service';
export declare const PORTAL_SESSION_COOKIE_NAME = "one17_portal_session";
export declare class PortalSessionAuthGuard implements CanActivate {
    private readonly portalAuth;
    private readonly audit;
    constructor(portalAuth: PortalAuthService, audit: AuditService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
