export class CalendarGatewayError extends Error {}

export interface ConfigureCalendarProviderInput {
  providerSlot: number;
  adapterType: 'MICROSOFT_GRAPH' | 'GOOGLE';
  name: string;
  clientId?: string;
  clientSecret?: string;
  // Microsoft Graph only (the Azure AD tenant the app registration lives
  // in); ignored/never set for GOOGLE.
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
  // The vendor's own event id -- used as CalendarEntry.sourceId so a
  // repeat sync upserts the SAME row (invariant 55c2i's own upsert-on-
  // resync key), never a real title/subject/body from the vendor.
  externalId: string;
  startsAt: Date;
  endsAt: Date;
}
