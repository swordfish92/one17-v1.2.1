import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationService } from './delegation.service';

@Module({
  imports: [AuditModule],
  providers: [DelegationService],
  exports: [DelegationService],
})
export class DelegationModule {}
