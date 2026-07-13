export declare class MfaCodeDto {
    code: string;
}
export declare class MfaFinancialCapabilityDto {
    functionCode: string;
}
export declare class MfaGlobalEnforcementDto {
    allStaffMandatory: boolean;
}
export declare class MfaError extends Error {
    constructor(message: string);
}
export interface MfaEnrollmentStart {
    secret: string;
    otpauthUrl: string;
}
export interface MfaStatus {
    mandatory: boolean;
    enrolled: boolean;
    enabledAt: Date | null;
}
