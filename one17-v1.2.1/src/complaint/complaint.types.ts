import { DsrCategory } from '../../generated/prisma/client';

export { DsrCategory };

// Invariant 28(f): complaint management. Exactly one of investorId/
// counterpartyId identifies the client (DB CHECK-enforced).
export interface RaiseComplaintFromPortalInput {
  investorId?: string;
  counterpartyId?: string;
  category: string;
  description: string;
  // Invariant 57(b)(ii) (CHECK15): a DSR is a tagged Complaint — isDsr
  // switches the response clock from ComplaintSlaConfig to
  // DsrResponseConfig (the NDP Act GAID Schedule 9 statutory window).
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
  // Invariant 57(b)(ii): required by ComplaintService.resolve() when the
  // complaint isDsr=true -- "erasure refusals citing SEC/AML retention are
  // lawful — the response, not silence, is the obligation."
  dsrLegalBasis?: string;
}

export type ComplaintSlaState = 'ON_TRACK' | 'AMBER' | 'BREACHED' | 'CLOSED';

export class ComplaintError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ComplaintError';
  }
}
