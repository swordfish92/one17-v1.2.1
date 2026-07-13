import { BadRequestException, Body, Controller, Get, Ip, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { PrivacyNoticeService } from '../data-protection/privacy-notice.service';
import { DataProtectionError } from '../data-protection/data-protection.types';
import { AcknowledgePrivacyNoticeDto } from './ops-api.types';

// Invariant 57(b)(i) (CHECK15, NDPA/GAID): unauthenticated by design, same
// precedent as PublicIntakeController -- an investor/counterparty during
// onboarding, a portal user at first login, and a public-intake applicant
// are all pre-session or cross-realm at the moment they need to read/
// acknowledge the notice. The write here is append-only evidence (who/when/
// which version), never a state mutation elsewhere -- same low-risk-public-
// write reasoning PublicIntakeController's own comment documents. The staff
// GET /log route is the one VIEW-gated route on this controller.
@Controller('privacy-notice')
export class PrivacyNoticeController {
  constructor(private readonly privacyNotice: PrivacyNoticeService) {}

  @Get('active')
  async getActive() {
    try {
      const notice = await this.privacyNotice.getActiveNotice();
      return { id: notice.id, version: notice.version, noticeText: notice.noticeText, effectiveFrom: notice.effectiveFrom };
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Post('acknowledge')
  async acknowledge(@Body() dto: AcknowledgePrivacyNoticeDto, @Ip() ip: string) {
    try {
      return await this.privacyNotice.recordAcknowledgment({ ...dto, ipAddress: ip });
    } catch (err) {
      if (err instanceof DataProtectionError) throw new BadRequestException(err.message);
      throw err;
    }
  }

  @Get('log')
  @UseGuards(SessionAuthGuard, CapabilityGuard)
  @RequiresCapability('DATA_PROTECTION_COMPLIANCE', 'VIEW')
  async listLog() {
    return this.privacyNotice.listAcknowledgments();
  }
}
