import type { AuthenticatedUser } from '../auth/auth.types';
import { ProfileService } from '../profile/profile.service';
import { TaskService } from '../task/task.service';
import { NotificationService } from '../notification/notification.service';
import { PmsService } from '../pms/pms.service';
import type { RequestGatedChangeInput, UpdateFreeEditFieldsInput } from '../profile/profile.types';
export declare class ProfileController {
    private readonly profile;
    private readonly task;
    private readonly notification;
    private readonly pms;
    constructor(profile: ProfileService, task: TaskService, notification: NotificationService, pms: PmsService);
    getMe(user: AuthenticatedUser): Promise<{
        employee: {
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
        };
        personalRecord: {
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
        } | null;
        myTasks: {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        }[];
        directReportsTasks: ({
            assigneeEmployee: {
                surname: string;
                firstName: string;
                middleName: string | null;
            };
        } & {
            id: string;
            status: import("../../generated/prisma/enums").TaskStatus;
            createdAt: Date;
            description: string | null;
            title: string;
            completedAt: Date | null;
            assigneeEmployeeId: string;
            assignedByUserId: string;
            dueAt: Date | null;
            startedAt: Date | null;
            amberNotifiedAt: Date | null;
            defaultedAt: Date | null;
            deliverableUrl: string | null;
            directiveId: string | null;
            kpiDefinitionId: string | null;
        })[];
        notifications: {
            id: string;
            createdAt: Date;
            title: string;
            recipientUserId: string | null;
            recipientInvestorId: string | null;
            type: import("../../generated/prisma/enums").NotificationType;
            body: string;
            linkPath: string | null;
            isRead: boolean;
        }[];
        performance: {
            employeeId: string;
            submissions: ({
                appraisalCycle: {
                    id: string;
                    status: import("../../generated/prisma/enums").PmsCycleStatus;
                    createdAt: Date;
                    orgUnitCode: string | null;
                    periodStart: Date;
                    periodEnd: Date;
                    cycleType: import("../../generated/prisma/enums").PmsCycleType;
                };
                kpiScores: ({
                    kpiDefinition: {
                        id: string;
                        status: import("../../generated/prisma/enums").GovernedItemStatus;
                        createdAt: Date;
                        proposedByUserId: string | null;
                        approvedByUserId: string | null;
                        workflowInstanceId: string | null;
                        kraCode: string;
                        tier: import("../../generated/prisma/enums").PmsTier;
                        kpiText: string;
                        kpiClass: import("../../generated/prisma/enums").KpiClass;
                        objectiveText: string | null;
                        exampleActivity: string | null;
                        measurementBasis: import("../../generated/prisma/enums").MeasurementBasis;
                        frequency: string | null;
                    };
                } & {
                    id: string;
                    createdAt: Date;
                    kpiDefinitionId: string;
                    employeeScoreSubmissionId: string;
                    selfScorePct: import("@prisma/client-runtime-utils").Decimal;
                    validatedScorePct: import("@prisma/client-runtime-utils").Decimal | null;
                    evidenceRef: string | null;
                })[];
            } & {
                id: string;
                status: import("../../generated/prisma/enums").ScoreSubmissionStatus;
                workflowInstanceId: string | null;
                employeeId: string;
                submittedAt: Date;
                appraisalCycleId: string;
            })[];
            incentiveResults: {
                totalEmolumentKobo: string;
                incentivePoolKobo: string;
                preGateIncentiveKobo: string;
                finalIncentiveKobo: string;
                id: string;
                employeeId: string;
                computedAt: Date;
                appraisalCycleId: string;
                overallScorePct: import("@prisma/client-runtime-utils").Decimal;
                bandPayoutPct: import("@prisma/client-runtime-utils").Decimal;
                gateOutcome: import("../../generated/prisma/enums").GateOutcome;
                classAllocationKobo: import("@prisma/client/runtime/client").JsonValue;
            }[];
        };
        sopLibrary: {
            id: string;
            entityType: string;
            entityId: string;
            documentType: string;
            fileReference: string;
            uploadedByUserId: string | null;
            uploadedByCounterpartyId: string | null;
            uploadedAt: Date;
        }[];
        changeRequests: {
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
        }[];
    }>;
    updateFreeFields(dto: UpdateFreeEditFieldsInput, user: AuthenticatedUser): Promise<{
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
    requestChange(dto: RequestGatedChangeInput, user: AuthenticatedUser): Promise<{
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
    assignTask(dto: {
        title: string;
        description?: string;
        assigneeEmployeeId: string;
        dueAt?: string;
    }, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    startTask(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    completeTask(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").TaskStatus;
        createdAt: Date;
        description: string | null;
        title: string;
        completedAt: Date | null;
        assigneeEmployeeId: string;
        assignedByUserId: string;
        dueAt: Date | null;
        startedAt: Date | null;
        amberNotifiedAt: Date | null;
        defaultedAt: Date | null;
        deliverableUrl: string | null;
        directiveId: string | null;
        kpiDefinitionId: string | null;
    }>;
    markNotificationRead(id: string, user: AuthenticatedUser): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        recipientUserId: string | null;
        recipientInvestorId: string | null;
        type: import("../../generated/prisma/enums").NotificationType;
        body: string;
        linkPath: string | null;
        isRead: boolean;
    }>;
    uploadSop(dto: {
        documentType: string;
        fileReference: string;
    }, user: AuthenticatedUser): Promise<{
        id: string;
        entityType: string;
        entityId: string;
        documentType: string;
        fileReference: string;
        uploadedByUserId: string | null;
        uploadedByCounterpartyId: string | null;
        uploadedAt: Date;
    }>;
    getEmployeePersonalRecord(employeeId: string, user: AuthenticatedUser): Promise<{
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
}
