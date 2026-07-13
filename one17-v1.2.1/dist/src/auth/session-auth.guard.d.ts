import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';
import { AuditService } from '../audit/audit.service';
export declare const SESSION_COOKIE_NAME = "one17_ops_session";
export declare class SessionAuthGuard implements CanActivate {
    private readonly authService;
    private readonly audit;
    private readonly reflector;
    constructor(authService: AuthService, audit: AuditService, reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
