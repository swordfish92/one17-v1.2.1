import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { DocumentService } from './document.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [DocumentService],
  exports: [DocumentService],
})
export class DocumentModule {}
