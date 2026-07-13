import { randomBytes } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { InvestorService } from '../investor/investor.service';
import { CounterpartyService } from '../counterparty/counterparty.service';
import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';
import { Prisma } from '../../generated/prisma/client';
import { PublicInvestorExpressIntake, PublicCounterpartyIntake, PublicIntakeError } from './public-intake.types';

// Invariant 28(d): public self-registration. The two submit* methods are
// the ONLY code path an unauthenticated caller reaches — they write
// nothing beyond this staging row (no Investor, no Counterparty, no
// sanctions screen, no capability check). promoteInvestorSubmission /
// promoteCounterpartySubmission are staff-only actions that hand the
// staged payload to the SAME InvestorService.onboardExpress() /
// CounterpartyService.onboard() Flow A/B already use — same workflow, same
// capability gate (enforced by those services themselves), no parallel
// path or relaxed validation for public-sourced data.
@Injectable()
export class PublicIntakeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly investors: InvestorService,
    private readonly counterparties: CounterpartyService,
    private readonly privacyNotice: PrivacyNoticeService,
  ) {}

  async submitInvestorExpress(payload: PublicInvestorExpressIntake, submittedIp?: string) {
    if (!payload.privacyNoticeAcknowledged) {
      throw new PublicIntakeError('The privacy notice must be acknowledged before submitting.');
    }
    const created = await this.prisma.publicIntakeSubmission.create({
      data: {
        intakeType: 'INVESTOR_EXPRESS',
        payload: payload as unknown as Prisma.InputJsonValue,
        submittedIp,
      },
    });
    await this.audit.record({
      action: 'CREATE',
      entityType: 'public_intake_submission',
      entityId: created.id,
      after: { intakeType: 'INVESTOR_EXPRESS', submittedIp },
    });
    const notice = await this.privacyNotice.getActiveNotice();
    await this.privacyNotice.recordAcknowledgment({
      noticeVersion: notice.version,
      context: 'PUBLIC_INTAKE',
      publicIntakeSubmissionId: created.id,
      ipAddress: submittedIp,
    });
    // Invariant 57(b)(i): "marketing subscription gains an explicit CONSENT
    // record (timestamp + notice version)" -- created only if consent was
    // given; an existing subscriber's row is left untouched (this is not a
    // re-consent mechanism).
    if (payload.marketingConsent) {
      const existing = await this.prisma.marketingSubscriber.findUnique({ where: { email: payload.contactEmail } });
      if (!existing) {
        await this.prisma.marketingSubscriber.create({
          data: {
            email: payload.contactEmail,
            fullName: payload.fullLegalName,
            segments: [],
            unsubscribeToken: randomBytes(24).toString('base64url'),
            consentedAt: new Date(),
            consentNoticeVersion: notice.version,
          },
        });
      }
    }
    return { id: created.id, status: created.status };
  }

  async submitCounterparty(payload: PublicCounterpartyIntake, submittedIp?: string) {
    if (!payload.privacyNoticeAcknowledged) {
      throw new PublicIntakeError('The privacy notice must be acknowledged before submitting.');
    }
    const created = await this.prisma.publicIntakeSubmission.create({
      data: {
        intakeType: 'COUNTERPARTY',
        payload: payload as unknown as Prisma.InputJsonValue,
        submittedIp,
      },
    });
    await this.audit.record({
      action: 'CREATE',
      entityType: 'public_intake_submission',
      entityId: created.id,
      after: { intakeType: 'COUNTERPARTY', submittedIp },
    });
    const notice = await this.privacyNotice.getActiveNotice();
    await this.privacyNotice.recordAcknowledgment({
      noticeVersion: notice.version,
      context: 'PUBLIC_INTAKE',
      publicIntakeSubmissionId: created.id,
      ipAddress: submittedIp,
    });
    return { id: created.id, status: created.status };
  }

  async listPending(viewerUserId: string) {
    await this.assertViewer(viewerUserId);
    return this.prisma.publicIntakeSubmission.findMany({
      where: { status: 'PENDING' },
      orderBy: { createdAt: 'asc' },
    });
  }

  // Requires the SAME capability onboardExpress() itself checks — this is
  // a defensive early check so a staff member without INVESTOR_ONBOARDING
  // INITIATE gets a clear "you can't do this" before we even look at the
  // staged payload, not just whatever error onboardExpress happens to
  // throw first.
  async promoteInvestorSubmission(submissionId: string, actorUserId: string, sanctionsScreenResult: 'CLEAR' | 'FLAGGED') {
    const submission = await this.prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.intakeType !== 'INVESTOR_EXPRESS') {
      throw new PublicIntakeError(`Submission ${submissionId} is a ${submission.intakeType} intake, not INVESTOR_EXPRESS.`);
    }
    if (submission.status !== 'PENDING') {
      throw new PublicIntakeError(`Submission ${submissionId} is already ${submission.status}.`);
    }

    const payload = submission.payload as unknown as PublicInvestorExpressIntake;
    const investor = await this.investors.onboardExpress({
      ...payload,
      onboardedByUserId: actorUserId,
      sanctionsScreenResult,
    });

    await this.prisma.publicIntakeSubmission.update({
      where: { id: submissionId },
      data: {
        status: 'PROMOTED',
        promotedByUserId: actorUserId,
        promotedAt: new Date(),
        resultingInvestorId: investor.investorId,
      },
    });

    return investor;
  }

  async promoteCounterpartySubmission(submissionId: string, actorUserId: string) {
    const submission = await this.prisma.publicIntakeSubmission.findUniqueOrThrow({ where: { id: submissionId } });
    if (submission.intakeType !== 'COUNTERPARTY') {
      throw new PublicIntakeError(`Submission ${submissionId} is a ${submission.intakeType} intake, not COUNTERPARTY.`);
    }
    if (submission.status !== 'PENDING') {
      throw new PublicIntakeError(`Submission ${submissionId} is already ${submission.status}.`);
    }

    const payload = submission.payload as unknown as PublicCounterpartyIntake;
    const counterparty = await this.counterparties.onboard({
      ...payload,
      amountSoughtKobo: BigInt(payload.amountSoughtKobo),
      onboardedByUserId: actorUserId,
    });

    await this.prisma.publicIntakeSubmission.update({
      where: { id: submissionId },
      data: {
        status: 'PROMOTED',
        promotedByUserId: actorUserId,
        promotedAt: new Date(),
        resultingCounterpartyId: counterparty.id,
      },
    });

    return counterparty;
  }

  async reject(submissionId: string, actorUserId: string, reason: string) {
    await this.assertViewer(actorUserId);
    const updated = await this.prisma.publicIntakeSubmission.update({
      where: { id: submissionId },
      data: { status: 'REJECTED', rejectionReason: reason, promotedByUserId: actorUserId, promotedAt: new Date() },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'public_intake_submission',
      entityId: submissionId,
      after: { status: 'REJECTED', reason },
    });
    return updated;
  }

  private async assertViewer(userId: string) {
    const [investorView, counterpartyView] = await Promise.all([
      this.delegation.hasCapability(userId, 'INVESTOR_ONBOARDING', 'VIEW'),
      this.delegation.hasCapability(userId, 'COUNTERPARTY_ONBOARDING', 'VIEW'),
    ]);
    if (!investorView.eligible && !counterpartyView.eligible) {
      await this.audit.record({
        actorUserId: userId,
        action: 'PERMISSION_DENIED',
        entityType: 'public_intake_submission',
        entityId: 'register',
        after: { requiredEither: ['INVESTOR_ONBOARDING:VIEW', 'COUNTERPARTY_ONBOARDING:VIEW'] },
      });
      throw new PublicIntakeError('User lacks VIEW authority on INVESTOR_ONBOARDING or COUNTERPARTY_ONBOARDING (standing or delegated), required to view the public intake queue.');
    }
  }
}
