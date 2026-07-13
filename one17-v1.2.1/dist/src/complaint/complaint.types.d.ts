import { DsrCategory } from '../../generated/prisma/client';
export { DsrCategory };
export interface RaiseComplaintFromPortalInput {
    investorId?: string;
    counterpartyId?: string;
    category: string;
    description: string;
    isDsr?: boolean;
    dsrCategory?: DsrCategory;
}
export interface RaiseComplaintByStaffInput extends RaiseComplaintFromPortalInput {
    loggedByUserId: string;
}
export interface AssignOwnerInput {
    complaintId: string;
    ownerUserId: string;
    actorUserId: string;
}
export interface EscalateComplaintInput {
    complaintId: string;
    escalatedToUserId: string;
    actorUserId: string;
}
export interface ResolveComplaintInput {
    complaintId: string;
    resolutionNotes: string;
    actorUserId: string;
    dsrLegalBasis?: string;
}
export type ComplaintSlaState = 'ON_TRACK' | 'AMBER' | 'BREACHED' | 'CLOSED';
export declare class ComplaintError extends Error {
    constructor(message: string);
}
