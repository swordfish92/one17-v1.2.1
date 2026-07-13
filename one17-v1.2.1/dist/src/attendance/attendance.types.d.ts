export declare class AttendanceError extends Error {
}
export interface ConfigureAttendanceProviderInput {
    providerSlot: number;
    adapterType: 'TTLOCK' | 'FILE_IMPORT';
    name: string;
    clientId?: string;
    clientSecret?: string;
    isActive: boolean;
    ttlockUsername?: string;
    ttlockPassword?: string;
    ttlockApiBaseUrl?: string;
}
export interface TTLockCredentialConfig {
    ttlockUsername?: string;
    ttlockPasswordMd5?: string;
    apiBaseUrl?: string;
}
export interface MapLockUserInput {
    providerId: string;
    deviceUserRef: string;
    employeeId: string;
}
export interface FileImportRow {
    deviceUserRef: string;
    occurredAt: string;
    method: string;
    locationRef?: string;
}
export interface FileImportResult {
    imported: number;
    duplicates: number;
    rejected: {
        row: number;
        reason: string;
    }[];
}
export interface RequestExceptionInput {
    employeeId: string;
    attendanceEventId?: string;
    disputedDate: string;
    reason: string;
}
