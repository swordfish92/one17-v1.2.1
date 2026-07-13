export declare class LoginDto {
    email: string;
    password: string;
}
export interface RequestContext {
    ipAddress?: string;
    requestId?: string;
}
export declare class AuthError extends Error {
    constructor(message: string);
}
export interface AuthenticatedUser {
    userId: string;
    sessionId: string;
    mfaPending: boolean;
}
