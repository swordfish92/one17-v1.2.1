import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';

// Invariant 39(d)/35(a): two-way client<->RM portal messaging, reusing the
// EXISTING client_communication insert-only log rather than a new table —
// invariant 35(a)'s own text says "All messages in client_communication
// (immutable log)". channel is always 'PORTAL_MESSAGE'; direction INBOUND
// (client -> RM, loggedByUserId null — portal-originated, same convention
// CounterpartyService.submitEnquiry() already established) or OUTBOUND (RM
// -> client, loggedByUserId set). No thread/read-state concept exists on
// the table by design — listThread() is the whole thread, chronological.
@Injectable()
export class ClientMessagingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly delegation: DelegationService,
    private readonly audit: AuditService,
  ) {}

  // PUBLIC (portal-safe) — no capability gate; the sender is a portal
  // principal (their own investorId, from the session), not an AppUser.
  async sendFromClient(investorId: string, body: string, subject?: string) {
    return this.prisma.clientCommunication.create({
      data: {
        investorId,
        channel: 'PORTAL_MESSAGE',
        direction: 'INBOUND',
        subject,
        summary: body,
        occurredAt: new Date(),
      },
    });
  }

  async sendFromStaff(investorId: string, staffUserId: string, body: string, subject?: string) {
    const { eligible } = await this.delegation.hasCapability(staffUserId, 'CLIENT_MESSAGING', 'INITIATE');
    if (!eligible) {
      throw new Error('Lacks INITIATE authority on CLIENT_MESSAGING to message a client.');
    }
    const message = await this.prisma.clientCommunication.create({
      data: {
        investorId,
        channel: 'PORTAL_MESSAGE',
        direction: 'OUTBOUND',
        subject,
        summary: body,
        loggedByUserId: staffUserId,
        occurredAt: new Date(),
      },
    });
    await this.audit.record({
      actorUserId: staffUserId,
      action: 'CREATE',
      entityType: 'client_communication',
      entityId: message.id,
      after: { investorId, channel: 'PORTAL_MESSAGE', direction: 'OUTBOUND' },
    });
    return message;
  }

  // PUBLIC (portal-safe) — scope comes from the caller's OWN session
  // investorId (see PortalWmController), never a path parameter.
  async listThread(investorId: string) {
    return this.prisma.clientCommunication.findMany({
      where: { investorId, channel: 'PORTAL_MESSAGE' },
      orderBy: { occurredAt: 'asc' },
      include: { loggedBy: { select: { displayName: true } } },
    });
  }

  // Staff-side read — explicit CLIENT_MESSAGING VIEW gate, since the
  // investorId here comes from a path parameter (an arbitrary client), not
  // the caller's own session.
  async listThreadForStaff(investorId: string, staffUserId: string) {
    const { eligible } = await this.delegation.hasCapability(staffUserId, 'CLIENT_MESSAGING', 'VIEW');
    if (!eligible) {
      throw new Error('Lacks VIEW authority on CLIENT_MESSAGING to read a client message thread.');
    }
    return this.listThread(investorId);
  }
}
