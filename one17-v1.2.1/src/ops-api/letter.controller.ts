import { Body, Controller, Get, Header, Param, Post, Query, StreamableFile, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { LetterService } from '../letter/letter.service';
import type { LetterType } from '../letter/letter.types';
import { ProposeLetterTemplateDto, ApproveLetterTemplateDto, GenerateLetterDto, RejectLetterInstanceDto } from './ops-api.types';

// Invariant 52(c) (CHECK12): letter template registry (dedicated route,
// same single-capability reasoning as LetterheadController/
// CertificateController) plus per-instance issuance -- routed through the
// standing generic Workflow Inbox is NOT used here either, since the sole
// approval step and its capability (LETTER_ISSUANCE) never varies.
@Controller('letters')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class LetterController {
  constructor(private readonly letters: LetterService) {}

  @Get('templates')
  @RequiresCapability('LETTER_TEMPLATE_MANAGEMENT', 'VIEW')
  async listTemplates(@Query('letterType') letterType?: LetterType) {
    return this.letters.listTemplates(letterType);
  }

  @Get('templates/pending')
  @RequiresCapability('LETTER_TEMPLATE_MANAGEMENT', 'APPROVE')
  async listPendingTemplates() {
    return this.letters.listPendingTemplates();
  }

  @Post('templates')
  @RequiresCapability('LETTER_TEMPLATE_MANAGEMENT', 'INITIATE')
  async proposeTemplate(@Body() dto: ProposeLetterTemplateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letters.proposeTemplate({ ...dto, proposedByUserId: user.userId });
  }

  @Post('templates/:workflowInstanceId/approve')
  @RequiresCapability('LETTER_TEMPLATE_MANAGEMENT', 'APPROVE')
  async approveTemplate(@Param('workflowInstanceId') workflowInstanceId: string, @Body() _dto: ApproveLetterTemplateDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letters.approveTemplate({ workflowInstanceId, approverUserId: user.userId });
  }

  @Get('instances')
  @RequiresCapability('LETTER_ISSUANCE', 'VIEW')
  async listInstances(@Query('investorId') investorId?: string, @Query('counterpartyId') counterpartyId?: string) {
    return this.letters.listLetterInstances({ investorId, counterpartyId });
  }

  @Get('instances/pending')
  @RequiresCapability('LETTER_ISSUANCE', 'APPROVE')
  async listPendingInstances() {
    return this.letters.listPendingLetterInstances();
  }

  @Get('instances/:id')
  @RequiresCapability('LETTER_ISSUANCE', 'VIEW')
  async getInstance(@Param('id') id: string) {
    return this.letters.getLetterInstance(id);
  }

  @Get('instances/:id/pdf')
  @RequiresCapability('LETTER_ISSUANCE', 'VIEW')
  @Header('Content-Type', 'application/pdf')
  async downloadInstance(@Param('id') id: string) {
    const pdf = await this.letters.getLetterInstancePdf(id);
    return new StreamableFile(pdf, { disposition: `attachment; filename="letter-${id}.pdf"` });
  }

  @Post('instances')
  @RequiresCapability('LETTER_ISSUANCE', 'INITIATE')
  async generateLetter(@Body() dto: GenerateLetterDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letters.generateLetter({ ...dto, generatedByUserId: user.userId });
  }

  @Post('instances/:workflowInstanceId/approve')
  @RequiresCapability('LETTER_ISSUANCE', 'APPROVE')
  async approveInstance(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.letters.approveLetterInstance({ workflowInstanceId, approverUserId: user.userId });
  }

  @Post('instances/:workflowInstanceId/reject')
  @RequiresCapability('LETTER_ISSUANCE', 'APPROVE')
  async rejectInstance(@Param('workflowInstanceId') workflowInstanceId: string, @Body() dto: RejectLetterInstanceDto, @CurrentUser() user: AuthenticatedUser) {
    return this.letters.rejectLetterInstance({ workflowInstanceId, actorUserId: user.userId, notes: dto.notes });
  }
}
