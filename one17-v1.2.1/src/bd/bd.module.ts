import { Module } from '@nestjs/common';
import { DelegationModule } from '../delegation/delegation.module';
import { AuditModule } from '../audit/audit.module';
import { BdService } from './bd.service';

@Module({
  imports: [DelegationModule, AuditModule],
  providers: [BdService],
  exports: [BdService],
})
export class BdModule {}
