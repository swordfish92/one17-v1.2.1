import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RecordPrivacyNoticeAcknowledgmentInput, DataProtectionError } from './data-protection.types';

// Invariant 57(b)(i) (CHECK15, NDPA/GAID): versioned governed notice text +
// a durable WHO/WHEN/WHICH-VERSION acknowledgment log. This service
// computes nothing -- it reads the ACTIVE PrivacyNoticeConfig row and
// inserts an acknowledgment row. noticeText is Compliance-owned config; the
// seed-time default is explicitly PLACEHOLDER-marked and never presented as
// final legal text.
@Injectable()
export class PrivacyNoticeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
  ) {}

  async getActiveNotice() {
    const notice = await this.prisma.privacyNoticeConfig.findFirst({ where: { status: 'ACTIVE' }, orderBy: { version: 'desc' } });
    if (!notice) {
      throw new DataProtectionError('No ACTIVE privacy_notice_config row — Compliance/DPO has not published a privacy notice yet.');
    }
    return notice;
  }

  async recordAcknowledgment(input: RecordPrivacyNoticeAcknowledgmentInput) {
    if ((input.investorId ? 1 : 0) + (input.counterpartyId ? 1 : 0) + (input.publicIntakeSubmissionId ? 1 : 0) === 0) {
      throw new DataProtectionError('A privacy-notice acknowledgment must identify an investor, counterparty, or public-intake submission.');
    }
    const notice = await this.prisma.privacyNoticeConfig.findFirst({ where: { version: input.noticeVersion } });
    if (!notice) {
      throw new DataProtectionError(`No privacy_notice_config row at version ${input.noticeVersion}.`);
    }
    const ack = await this.prisma.privacyNoticeAcknowledgment.create({
      data: {
        noticeConfigId: notice.id,
        context: input.context,
        investorId: input.investorId,
        counterpartyId: input.counterpartyId,
        publicIntakeSubmissionId: input.publicIntakeSubmissionId,
        ipAddress: input.ipAddress,
      },
    });
    await this.audit.record({
      action: 'CREATE',
      entityType: 'privacy_notice_acknowledgment',
      entityId: ack.id,
      after: { noticeVersion: input.noticeVersion, context: input.context, investorId: input.investorId, counterpartyId: input.counterpartyId },
    });
    return ack;
  }

  // VIEW-gated at the controller (DATA_PROTECTION_COMPLIANCE), same
  // pattern as AuditTrailViewerService -- a plain read, no capability
  // check duplicated here.
  async listAcknowledgments() {
    return this.prisma.privacyNoticeAcknowledgment.findMany({
      orderBy: { acknowledgedAt: 'desc' },
      take: 200,
      include: { noticeConfig: true, investor: { select: { fullLegalName: true } }, counterparty: { select: { legalName: true } } },
    });
  }
}
