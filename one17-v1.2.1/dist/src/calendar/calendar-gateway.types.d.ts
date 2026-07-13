export declare class CalendarGatewayError extends Error {
}
export interface ConfigureCalendarProviderInput {
    providerSlot: number;
    adapterType: 'MICROSOFT_GRAPH' | 'GOOGLE';
    name: string;
    clientId?: string;
    clientSecret?: string;
    tenantId?: string;
    isActive: boolean;
}
export interface AuthorizationUrlResult {
    url: string;
    scope: string;
    redirectUri: string;
}
export interface TokenExchangeResult {
    accessToken: string;
    refreshToken?: string;
    expiresInSeconds: number;
    scope: string;
}
export interface ExternalBusyBlock {
    externalId: string;
    startsAt: Date;
    endsAt: Date;
}
