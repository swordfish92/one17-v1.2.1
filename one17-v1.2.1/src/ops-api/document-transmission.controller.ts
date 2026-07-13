import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { DocumentTransmissionService } from '../document-transmission/document-transmission.service';
import { TransmitDocumentDto } from './ops-api.types';

// Invariant 55(b) (CHECK12): MD Document Transmission -- transmit routes
// stay capability-gated (MD_CEO only); listing/acknowledging are open to
// any authenticated staff user since the service itself resolves the
// restricted-ACL/ownership scope (same shape as BoardMinutesController).
@Controller('document-transmission')
@UseGuards(SessionAuthGuard)
export class DocumentTransmissionController {
  constructor(private readonly documentTransmission: DocumentTransmissionService) {}

  @Post('documents')
  @UseGuards(CapabilityGuard)
  @RequiresCapability('MD_DOCUMENT_TRANSMISSION', 'INITIATE')
  async transmitDocument(@Body() dto: TransmitDocumentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.documentTransmission.transmitDocument(dto, user.userId);
  }

  @Get('documents')
  async listDocuments(@CurrentUser() user: AuthenticatedUser) {
    return this.documentTransmission.listDocumentsForViewer(user.userId);
  }

  @Post('documents/:id/acknowledge')
  async acknowledgeTransmission(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.documentTransmission.acknowledgeTransmission(id, user.userId);
  }
}
