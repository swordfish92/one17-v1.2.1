import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DelegationService } from '../delegation/delegation.service';
import { AuditService } from '../audit/audit.service';

// Invariant 39(a): DOCUMENT_REGISTER has been capability-seeded since Phase
// 2 ("Broad by design: many roles legitimately attach supporting documents
// in different contexts ... the caller's own activity-specific capability
// check already gates the surrounding action") but never had a controller
// or screen. This service is the thin, generic wrapper the comment always
// implied: attach() writes a DocumentRegisterEntry row; listFor() reads
// back every entry against one entityType/entityId pair. No lifecycle,
// version, or ACL concept exists on this table by design (see the
// BoardMinutes model's own comment on why THAT flow deliberately does not
// reuse this one) — fileReference is a reference string (path/URL), not a
// binary blob, matching every other "upload" in this codebase today.
@Injectable()
export class DocumentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly delegation: DelegationService,
    private readonly audit: AuditService,
  ) {}

  private async assertCapability(userId: string, action: string) {
    const { eligible } = await this.delegation.hasCapability(userId, 'DOCUMENT_REGISTER', 'INITIATE');
    if (!eligible) {
      throw new Error(`Lacks INITIATE authority on DOCUMENT_REGISTER to ${action}.`);
    }
  }

  async attach(input: { entityType: string; entityId: string; documentType: string; fileReference: string }, actorUserId: string) {
    await this.assertCapability(actorUserId, 'attach a document to the register');

    const created = await this.prisma.documentRegisterEntry.create({
      data: {
        entityType: input.entityType,
        entityId: input.entityId,
        documentType: input.documentType,
        fileReference: input.fileReference,
        uploadedByUserId: actorUserId,
      },
    });

    await this.audit.record({
      actorUserId,
      action: 'CREATE',
      entityType: 'document_register_entry',
      entityId: created.id,
      after: { entityType: input.entityType, entityId: input.entityId, documentType: input.documentType },
    });

    return created;
  }

  // Invariant 44(e) (CHECK10): portal-originated uploads (counterparty
  // facility-application documents) — no AppUser capability to check, same
  // "portal-safe, no capability row" reasoning as
  // CounterpartyService.submitFacilityApplication. Ownership of `entityId`
  // (does this facility application belong to THIS counterparty) is the
  // caller's job -- same layering as every other portal-scoped write in
  // this codebase (assertInvestor/assertCounterparty check first, then the
  // service call itself trusts the already-verified id).
  async attachFromPortal(input: { entityType: string; entityId: string; documentType: string; fileReference: string }, counterpartyId: string) {
    const created = await this.prisma.documentRegisterEntry.create({
      data: {
        entityType: input.entityType,
        entityId: input.entityId,
        documentType: input.documentType,
        fileReference: input.fileReference,
        uploadedByCounterpartyId: counterpartyId,
      },
    });

    // No AppUser actor exists for a portal-originated write (see the
    // method comment above) -- actorUserId stays null, matching how every
    // other actorless audit event in this codebase (system jobs) records
    // itself; the counterparty attribution lives on the row itself
    // (uploadedByCounterpartyId) and is echoed into `after` here so it's
    // still visible on the audit trail without inventing a new actor
    // column on the shared, tamper-hash-chained audit_trail table.
    await this.audit.record({
      action: 'CREATE',
      entityType: 'document_register_entry',
      entityId: created.id,
      after: { entityType: input.entityType, entityId: input.entityId, documentType: input.documentType, uploadedByCounterpartyId: counterpartyId },
    });

    return created;
  }

  // ==========================================================================
  // Invariant 44(e) (CHECK10): "checklist-gated (config-defined
  // required-document list per application type; incomplete = cannot
  // submit for review)."
  // ==========================================================================
  async listRequiredDocumentTypes(applicationType: string): Promise<string[]> {
    const rows = await this.prisma.requiredDocumentConfig.findMany({
      where: { applicationType, status: 'ACTIVE' },
      orderBy: { documentType: 'asc' },
    });
    return rows.map((r) => r.documentType);
  }

  async getChecklistStatus(applicationType: string, entityType: string, entityId: string) {
    const [required, uploaded] = await Promise.all([
      this.listRequiredDocumentTypes(applicationType),
      this.prisma.documentRegisterEntry.findMany({ where: { entityType, entityId }, select: { documentType: true } }),
    ]);
    const uploadedTypes = new Set(uploaded.map((u) => u.documentType));
    const missing = required.filter((t) => !uploadedTypes.has(t));
    return { required, uploadedTypes: [...uploadedTypes], missing, complete: missing.length === 0 };
  }

  async addRequiredDocumentType(input: { applicationType: string; documentType: string }, actorUserId: string) {
    await this.assertCapability(actorUserId, 'define a required-document checklist entry');
    const existing = await this.prisma.requiredDocumentConfig.findUnique({
      where: { applicationType_documentType: { applicationType: input.applicationType, documentType: input.documentType } },
    });
    if (existing) {
      if (existing.status === 'ACTIVE') return existing;
      return this.prisma.requiredDocumentConfig.update({ where: { id: existing.id }, data: { status: 'ACTIVE' } });
    }
    const created = await this.prisma.requiredDocumentConfig.create({
      data: { applicationType: input.applicationType, documentType: input.documentType, status: 'ACTIVE', createdByUserId: actorUserId },
    });
    await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'required_document_config', entityId: created.id, after: input });
    return created;
  }

  async retireRequiredDocumentType(id: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'retire a required-document checklist entry');
    const updated = await this.prisma.requiredDocumentConfig.update({ where: { id }, data: { status: 'SUPERSEDED' } });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'required_document_config', entityId: id, after: { status: 'SUPERSEDED' } });
    return updated;
  }

  async listRequiredDocumentConfig(applicationType?: string) {
    return this.prisma.requiredDocumentConfig.findMany({
      where: { applicationType, status: 'ACTIVE' },
      orderBy: [{ applicationType: 'asc' }, { documentType: 'asc' }],
    });
  }

  async listFor(entityType: string, entityId: string) {
    return this.prisma.documentRegisterEntry.findMany({
      where: { entityType, entityId },
      include: { uploadedBy: { select: { displayName: true } } },
      orderBy: { uploadedAt: 'desc' },
    });
  }

  // Cross-entity browse for the standalone register screen (AUDITOR/
  // Compliance) — invariant 37(h): "the document register remains the
  // AUTHORITATIVE store ... versioned, ACL'd" (ACL/versioning is future
  // scope per that same invariant's own text; this is the browse surface
  // for what the table holds today).
  async browse(filter: { entityType?: string; documentType?: string }) {
    return this.prisma.documentRegisterEntry.findMany({
      where: {
        entityType: filter.entityType || undefined,
        documentType: filter.documentType ? { contains: filter.documentType, mode: 'insensitive' } : undefined,
      },
      include: { uploadedBy: { select: { displayName: true } } },
      orderBy: { uploadedAt: 'desc' },
      take: 500,
    });
  }
}
