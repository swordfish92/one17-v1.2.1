import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { ComplaintService } from './complaint.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [ComplaintService],
  exports: [ComplaintService],
})
export class ComplaintModule {}
