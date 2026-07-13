export declare class PortalLoginDto {
    email: string;
    password: string;
}
export interface PortalRequestContext {
    ipAddress?: string;
}
export declare class PortalAuthError extends Error {
    constructor(message: string);
}
export interface AuthenticatedPortalUser {
    portalUserId: string;
    principalType: 'INVESTOR' | 'COUNTERPARTY';
    investorId?: string;
    counterpartyId?: string;
    sessionId: string;
}
