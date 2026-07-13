import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { DocumentService } from '../document/document.service';
import { AttachDocumentDto, RequiredDocumentConfigDto } from './ops-api.types';

// Invariant 39(a), Tier 1: the DOCUMENT_REGISTER upload/attach screen —
// the highest-value gap the 37(g) completeness audit found (AMD-12 rule 3
// and other invariants reference "attached evidence documents" by name
// with no screen anywhere to produce one). `listByEntity` has NO
// @RequiresCapability of its own — same precedent as GET /auth/me — since
// the seed's own comment on DOCUMENT_REGISTER says the surrounding action
// (whatever screen embeds this widget) already gates who reaches a given
// entityType/entityId in the first place; session auth alone is the floor.
// `browse` (cross-entity search) IS gated, since it has no surrounding
// screen to inherit a gate from.
@Controller('documents')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class DocumentController {
  constructor(private readonly documents: DocumentService) {}

  @Get()
  async listByEntity(@Query('entityType') entityType: string, @Query('entityId') entityId: string) {
    return this.documents.listFor(entityType, entityId);
  }

  @Post()
  @RequiresCapability('DOCUMENT_REGISTER', 'INITIATE')
  async attach(@Body() dto: AttachDocumentDto, @CurrentUser() user: AuthenticatedUser) {
    return this.documents.attach(dto, user.userId);
  }

  @Get('browse')
  @RequiresCapability('DOCUMENT_REGISTER', 'VIEW')
  async browse(@Query('entityType') entityType?: string, @Query('documentType') documentType?: string) {
    return this.documents.browse({ entityType, documentType });
  }

  // Invariant 44(e) (CHECK10): the "config-defined required-document list
  // per application type" admin surface — reuses DOCUMENT_REGISTER
  // (the register's own admin capability governs what it requires, not a
  // new capability for what is, structurally, a checklist over the same
  // register).
  @Get('required-document-config')
  @RequiresCapability('DOCUMENT_REGISTER', 'VIEW')
  async listRequiredDocumentConfig(@Query('applicationType') applicationType?: string) {
    return this.documents.listRequiredDocumentConfig(applicationType);
  }

  @Post('required-document-config')
  @RequiresCapability('DOCUMENT_REGISTER', 'INITIATE')
  async addRequiredDocumentConfig(@Body() dto: RequiredDocumentConfigDto, @CurrentUser() user: AuthenticatedUser) {
    return this.documents.addRequiredDocumentType(dto, user.userId);
  }

  @Post('required-document-config/:id/retire')
  @RequiresCapability('DOCUMENT_REGISTER', 'INITIATE')
  async retireRequiredDocumentConfig(@Param('id') id: string, @CurrentUser() user: AuthenticatedUser) {
    return this.documents.retireRequiredDocumentType(id, user.userId);
  }
}
