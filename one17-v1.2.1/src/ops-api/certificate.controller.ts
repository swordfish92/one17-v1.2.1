import { Body, Controller, Get, Header, Param, Post, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { CertificateService } from '../certificate/certificate.service';
import type { CertificateProductClassKey } from '../certificate/certificate.types';
import { ProposeCertificateTemplateDto, ApproveCertificateTemplateDto } from './ops-api.types';

// Invariant 52(b) (CHECK12): investment certificate template registry +
// issuance register. Same dedicated-route reasoning as LetterheadController
// -- single capability throughout the template approval chain (Compliance
// proposes, MD_CEO approves), so no generic Workflow Inbox needed.
// Issuance itself has no staff-facing propose/approve route: it fires
// automatically from SubscriptionService.approveSubscription.
@Controller('certificates')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class CertificateController {
  constructor(private readonly certificates: CertificateService) {}

  @Get('templates')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW')
  async listTemplates(@Query('productClass') productClass?: CertificateProductClassKey) {
    return this.certificates.listTemplates(productClass);
  }

  @Get('templates/pending')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'APPROVE')
  async listPendingTemplates() {
    return this.certificates.listPendingTemplates();
  }

  @Post('templates')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE')
  async proposeTemplate(@Body() dto: ProposeCertificateTemplateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.certificates.proposeTemplate({ ...dto, proposedByUserId: user.userId });
  }

  @Post('templates/:workflowInstanceId/approve')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'APPROVE')
  async approveTemplate(@Param('workflowInstanceId') workflowInstanceId: string, @Body() _dto: ApproveCertificateTemplateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.certificates.approveTemplate({ workflowInstanceId, approverUserId: user.userId });
  }

  @Get()
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW')
  async listCertificates(@Query('investorId') investorId?: string) {
    return this.certificates.listCertificates(investorId);
  }

  @Get(':id')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW')
  async getCertificate(@Param('id') id: string) {
    return this.certificates.getCertificate(id);
  }

  @Get(':id/pdf')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'VIEW')
  @Header('Content-Type', 'application/pdf')
  async downloadCertificate(@Param('id') id: string) {
    const pdf = await this.certificates.getCertificatePdf(id);
    return new StreamableFile(pdf, { disposition: `attachment; filename="certificate-${id}.pdf"` });
  }

  @Post(':id/reissue')
  @RequiresCapability('CERTIFICATE_TEMPLATE_MANAGEMENT', 'INITIATE')
  async reissueCertificate(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.certificates.reissueCertificate(id, user.userId);
  }
}
