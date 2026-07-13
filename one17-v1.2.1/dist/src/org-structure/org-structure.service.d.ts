import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { CreateOrgUnitInput, CreatePositionInput } from './org-structure.types';
export declare class OrgStructureService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService);
    private assertCapability;
    createOrgUnit(input: CreateOrgUnitInput): Promise<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }>;
    createPosition(input: CreatePositionInput): Promise<{
        id: string;
        createdAt: Date;
        orgUnitCode: string;
        cadre: string;
        title: string;
        notch: number;
    }>;
    listOrgUnits(): Promise<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }[]>;
    listPositions(): Promise<({
        orgUnit: {
            code: string;
            name: string;
            secondaryReportingLine: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        orgUnitCode: string;
        cadre: string;
        title: string;
        notch: number;
    })[]>;
    listCadres(): Promise<{
        tier: import("../../generated/prisma/enums").PmsTier;
        cadre: string;
    }[]>;
}
