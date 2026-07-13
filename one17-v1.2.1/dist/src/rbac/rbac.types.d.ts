export declare class SodConflictError extends Error {
    readonly userId: string;
    readonly attemptedRoleCode: string;
    constructor(message: string, userId: string, attemptedRoleCode: string);
}
