import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { NotificationService } from '../notification/notification.service';
import { RequestGatedChangeInput, UpdateFreeEditFieldsInput } from './profile.types';
export declare class ProfileService {
    private readonly prisma;
    private readonly audit;
    private readonly delegation;
    private readonly workflow;
    private readonly notification;
    constructor(prisma: PrismaService, audit: AuditService, delegation: DelegationService, workflow: WorkflowEngineService, notification: NotificationService);
    getMyEmployee(appUserId: string): Promise<{
        position: {
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
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").EmployeeStatus;
        createdAt: Date;
        migrationSourceRef: string | null;
        appUserId: string | null;
        orgUnitCode: string;
        surname: string;
        firstName: string;
        middleName: string | null;
        positionId: string;
        reportsToId: string | null;
        hireDate: Date;
        performanceIncentivePct: import("@prisma/client-runtime-utils").Decimal;
    }>;
    getPersonalRecord(employeeId: string, requestingUserId: string): Promise<{
        updatedAt: Date;
        employeeId: string;
        maritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        numberOfChildren: number | null;
        residentialAddress: string | null;
        nextOfKinName: string | null;
        nextOfKinRelationship: string | null;
        nextOfKinPhone: string | null;
        nextOfKinAddress: string | null;
        hobbiesInterests: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        emergencyContactRelationship: string | null;
    } | null>;
    updateFreeEditFields(employeeId: string, actorUserId: string, input: UpdateFreeEditFieldsInput): Promise<{
        updatedAt: Date;
        employeeId: string;
        maritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        numberOfChildren: number | null;
        residentialAddress: string | null;
        nextOfKinName: string | null;
        nextOfKinRelationship: string | null;
        nextOfKinPhone: string | null;
        nextOfKinAddress: string | null;
        hobbiesInterests: string | null;
        emergencyContactName: string | null;
        emergencyContactPhone: string | null;
        emergencyContactRelationship: string | null;
    }>;
    requestGatedChange(employeeId: string, actorUserId: string, input: RequestGatedChangeInput): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PersonalRecordChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        employeeId: string;
        proposedMaritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        proposedResidentialAddress: string | null;
        proposedNextOfKinName: string | null;
        proposedNextOfKinRelationship: string | null;
        proposedNextOfKinPhone: string | null;
        proposedNextOfKinAddress: string | null;
    }>;
    listMyChangeRequests(employeeId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PersonalRecordChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        employeeId: string;
        proposedMaritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        proposedResidentialAddress: string | null;
        proposedNextOfKinName: string | null;
        proposedNextOfKinRelationship: string | null;
        proposedNextOfKinPhone: string | null;
        proposedNextOfKinAddress: string | null;
    }[]>;
    acknowledgeChange(workflowInstanceId: string, approverUserId: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PersonalRecordChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        employeeId: string;
        proposedMaritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        proposedResidentialAddress: string | null;
        proposedNextOfKinName: string | null;
        proposedNextOfKinRelationship: string | null;
        proposedNextOfKinPhone: string | null;
        proposedNextOfKinAddress: string | null;
    } | null>;
    rejectChange(workflowInstanceId: string, approverUserId: string, notes?: string): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").PersonalRecordChangeStatus;
        createdAt: Date;
        workflowInstanceId: string | null;
        requestedByUserId: string;
        employeeId: string;
        proposedMaritalStatus: import("../../generated/prisma/enums").MaritalStatus | null;
        proposedResidentialAddress: string | null;
        proposedNextOfKinName: string | null;
        proposedNextOfKinRelationship: string | null;
        proposedNextOfKinPhone: string | null;
        proposedNextOfKinAddress: string | null;
    }>;
    listSopLibrary(actorUserId: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }[]>;
    uploadSop(actorUserId: string, documentType: string, fileReference: string): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    private assertCapability;
}
