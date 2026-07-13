import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
export declare class CapabilityGuard implements CanActivate {
    private readonly reflector;
    private readonly delegation;
    private readonly audit;
    constructor(reflector: Reflector, delegation: DelegationService, audit: AuditService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
