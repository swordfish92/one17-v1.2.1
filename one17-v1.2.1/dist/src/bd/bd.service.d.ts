import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';
import { BdRegisterRow } from './bd.types';
export declare class BdService {
    private readonly prisma;
    private readonly delegation;
    private readonly audit;
    constructor(prisma: PrismaService, delegation: DelegationService, audit: AuditService);
    getRegister(viewerUserId: string): Promise<BdRegisterRow[]>;
}
