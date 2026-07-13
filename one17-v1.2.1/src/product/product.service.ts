import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';

export class ProductServiceError extends Error {}

// Invariant 42(a)/44(b) (CHECK9): SubscriptionService refuses to
// originate a holding against a product with no recorded Shariah
// approval. The FULL governed create->approve->Shariah-gate->ACTIVE
// product-factory workflow (capability-gated, initiator!=approver,
// mandatory CoA/ledger-entity auto-provisioning) is invariant 44(b),
// Tranche 2 scope -- NOT built here. This is the minimal, real,
// single-step recording action a SHARIAH_REV holder needs to close the
// gap for a product that already exists, reusing the pre-seeded
// SHARIAH_RECORDS APPROVE grant rather than inventing a new capability.
// Deliberately requires a genuine ssbResolutionRef -- this service NEVER
// invents or defaults one; see CHECK9_EVIDENCE.md for which existing
// products still lack a real one and why they were left that way.
@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  async approveProductShariah(input: { productCode: string; ssbResolutionRef: string; approvedByUserId: string }) {
    if (!input.ssbResolutionRef || input.ssbResolutionRef.trim().length === 0) {
      throw new ProductServiceError('ssbResolutionRef is required -- this action records an existing SSB decision, it does not create one.');
    }
    const { eligible } = await this.delegation.hasCapability(input.approvedByUserId, 'SHARIAH_RECORDS', 'APPROVE');
    if (!eligible) {
      await this.audit.record({
        actorUserId: input.approvedByUserId,
        action: 'PERMISSION_DENIED',
        entityType: 'product',
        entityId: input.productCode,
        after: { functionCode: 'SHARIAH_RECORDS', level: 'APPROVE' },
      });
      throw new ProductServiceError('User lacks APPROVE authority on SHARIAH_RECORDS (standing or delegated), required to record a product Shariah approval.');
    }
    const product = await this.prisma.product.update({
      where: { code: input.productCode },
      data: { shariahApprovedAt: new Date(), shariahApprovalRef: input.ssbResolutionRef },
    });
    await this.audit.record({
      actorUserId: input.approvedByUserId,
      action: 'UPDATE',
      entityType: 'product',
      entityId: input.productCode,
      after: { shariahApprovedAt: product.shariahApprovedAt, shariahApprovalRef: product.shariahApprovalRef },
    });
    return product;
  }
}
