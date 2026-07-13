import type { AuthenticatedUser } from '../auth/auth.types';
import { AttendanceService } from '../attendance/attendance.service';
import { ConfigureAttendanceProviderDto, DecideExceptionDto, ImportFileEventsDto, MapLockUserDto, RequestExceptionDto } from './ops-api.types';
export declare class AttendanceController {
    private readonly attendance;
    constructor(attendance: AttendanceService);
    listProviders(): Promise<(Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").AttendanceAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        credentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        accessToken: string | null;
        refreshToken: string | null;
        tokenObtainedAt: Date | null;
        tokenExpiresAt: Date | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingCredentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
    }, "clientSecret" | "credentialConfig" | "accessToken" | "refreshToken" | "pendingClientSecret" | "pendingCredentialConfig"> & {
        hasPendingSecretRotation: boolean;
        hasCredentialConfig: boolean;
        hasPendingCredentialConfig: boolean;
        credentialConfigPreview: Record<string, unknown> | null;
        tokenStatus: "EXPIRED" | "NEVER_CONNECTED" | "CONNECTED";
        hasSecret: boolean;
        secretPreview: string | null;
    })[]>;
    proposeProviderConfig(dto: ConfigureAttendanceProviderDto, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").AttendanceAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        credentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        accessToken: string | null;
        refreshToken: string | null;
        tokenObtainedAt: Date | null;
        tokenExpiresAt: Date | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingCredentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
    }, "clientSecret" | "credentialConfig" | "accessToken" | "refreshToken" | "pendingClientSecret" | "pendingCredentialConfig"> & {
        hasPendingSecretRotation: boolean;
        hasCredentialConfig: boolean;
        hasPendingCredentialConfig: boolean;
        credentialConfigPreview: Record<string, unknown> | null;
        tokenStatus: "EXPIRED" | "NEVER_CONNECTED" | "CONNECTED";
        hasSecret: boolean;
        secretPreview: string | null;
    }>;
    approveProviderConfig(workflowInstanceId: string, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").AttendanceAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        credentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        accessToken: string | null;
        refreshToken: string | null;
        tokenObtainedAt: Date | null;
        tokenExpiresAt: Date | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingCredentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
    }, "clientSecret" | "credentialConfig" | "accessToken" | "refreshToken" | "pendingClientSecret" | "pendingCredentialConfig"> & {
        hasPendingSecretRotation: boolean;
        hasCredentialConfig: boolean;
        hasPendingCredentialConfig: boolean;
        credentialConfigPreview: Record<string, unknown> | null;
        tokenStatus: "EXPIRED" | "NEVER_CONNECTED" | "CONNECTED";
        hasSecret: boolean;
        secretPreview: string | null;
    }>;
    connectTTLock(id: string, user: AuthenticatedUser): Promise<Omit<{
        id: string;
        createdAt: Date;
        name: string;
        isActive: boolean;
        providerSlot: number;
        adapterType: import("../../generated/prisma/enums").AttendanceAdapterType;
        clientId: string | null;
        clientSecret: string | null;
        credentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        accessToken: string | null;
        refreshToken: string | null;
        tokenObtainedAt: Date | null;
        tokenExpiresAt: Date | null;
        configuredByUserId: string | null;
        pendingName: string | null;
        pendingClientId: string | null;
        pendingClientSecret: string | null;
        pendingCredentialConfig: import("@prisma/client/runtime/client").JsonValue | null;
        pendingIsActive: boolean | null;
        pendingProposedByUserId: string | null;
        configWorkflowInstanceId: string | null;
    }, "clientSecret" | "credentialConfig" | "accessToken" | "refreshToken" | "pendingClientSecret" | "pendingCredentialConfig"> & {
        hasPendingSecretRotation: boolean;
        hasCredentialConfig: boolean;
        hasPendingCredentialConfig: boolean;
        credentialConfigPreview: Record<string, unknown> | null;
        tokenStatus: "EXPIRED" | "NEVER_CONNECTED" | "CONNECTED";
        hasSecret: boolean;
        secretPreview: string | null;
    }>;
    importFileEvents(id: string, dto: ImportFileEventsDto, user: AuthenticatedUser): Promise<import("../attendance/attendance.types").FileImportResult>;
    listUnmappedEvents(): Promise<({
        provider: {
            name: string;
            providerSlot: number;
        };
    } & {
        id: string;
        occurredAt: Date;
        createdAt: Date;
        employeeId: string | null;
        providerId: string;
        deviceUserRef: string;
        locationRef: string | null;
        method: string;
        rawRef: string;
        isTerminatedAlert: boolean;
    })[]>;
    mapLockUser(dto: MapLockUserDto, user: AuthenticatedUser): Promise<{
        mapping: {
            id: string;
            createdAt: Date;
            employeeId: string;
            providerId: string;
            deviceUserRef: string;
            mappedByUserId: string;
        };
        resolvedEventCount: number;
    }>;
    requestException(dto: RequestExceptionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ExceptionRequestStatus;
        createdAt: Date;
        reason: string;
        decidedAt: Date | null;
        employeeId: string;
        attendanceEventId: string | null;
        disputedDate: Date;
        decidedByUserId: string | null;
        decisionNotes: string | null;
    }>;
    listMyExceptionRequests(user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ExceptionRequestStatus;
        createdAt: Date;
        reason: string;
        decidedAt: Date | null;
        employeeId: string;
        attendanceEventId: string | null;
        disputedDate: Date;
        decidedByUserId: string | null;
        decisionNotes: string | null;
    }[]>;
    listSubordinateExceptionRequests(user: AuthenticatedUser): Promise<({
        employee: {
            surname: string;
            firstName: string;
            middleName: string | null;
        };
    } & {
        id: string;
        status: import("../../generated/prisma/enums").ExceptionRequestStatus;
        createdAt: Date;
        reason: string;
        decidedAt: Date | null;
        employeeId: string;
        attendanceEventId: string | null;
        disputedDate: Date;
        decidedByUserId: string | null;
        decisionNotes: string | null;
    })[]>;
    decideExceptionRequest(id: string, dto: DecideExceptionDto, user: AuthenticatedUser): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").ExceptionRequestStatus;
        createdAt: Date;
        reason: string;
        decidedAt: Date | null;
        employeeId: string;
        attendanceEventId: string | null;
        disputedDate: Date;
        decidedByUserId: string | null;
        decisionNotes: string | null;
    }>;
}
