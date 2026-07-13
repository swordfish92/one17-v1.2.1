export interface UploadResourceInput {
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    proposedByUserId: string;
}
export interface SubscribeInput {
    email: string;
    fullName?: string;
    segments: string[];
}
export interface UnsubscribeInput {
    email: string;
    token: string;
}
export interface InitiateSendInput {
    subject: string;
    body: string;
    targetSegments: string[];
    resourceId?: string;
    initiatedByUserId: string;
}
export declare class MarketingError extends Error {
    constructor(message: string);
}
