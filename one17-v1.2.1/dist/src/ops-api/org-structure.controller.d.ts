import type { AuthenticatedUser } from '../auth/auth.types';
import { OrgStructureService } from '../org-structure/org-structure.service';
import { DepartmentHeadService } from '../org-structure/department-head.service';
import { CreateOrgUnitDto, CreatePositionDto, ProposeDepartmentHeadDto } from './ops-api.types';
export declare class OrgStructureController {
    private readonly orgStructure;
    private readonly departmentHead;
    constructor(orgStructure: OrgStructureService, departmentHead: DepartmentHeadService);
    listDepartmentHeads(orgUnitCode?: string): Promise<({
        orgUnit: {
            name: string;
        };
        employee: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    })[]>;
    proposeDepartmentHead(dto: ProposeDepartmentHeadDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    }>;
    approveDepartmentHead(workflowInstanceId: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").DepartmentHeadDesignationStatus;
        createdAt: Date;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        effectiveTo: Date | null;
        orgUnitCode: string;
        employeeId: string;
    }>;
    listOrgUnits(): Promise<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }[]>;
    createOrgUnit(dto: CreateOrgUnitDto, user: AuthenticatedUser): Promise<{
        code: string;
        name: string;
        secondaryReportingLine: string | null;
    }>;
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
    createPosition(dto: CreatePositionDto, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        orgUnitCode: string;
        cadre: string;
        title: string;
        notch: number;
    }>;
    listCadres(): Promise<{
        tier: import("../../generated/prisma/enums").PmsTier;
        cadre: string;
    }[]>;
}
