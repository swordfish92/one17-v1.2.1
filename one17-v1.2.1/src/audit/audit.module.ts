import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { AuditTrailViewerService } from './audit-trail-viewer.service';

@Module({
  providers: [AuditService, AuditTrailViewerService],
  exports: [AuditService, AuditTrailViewerService],
})
export class AuditModule {}
