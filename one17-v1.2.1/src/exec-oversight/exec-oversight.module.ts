import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { ExecOversightService } from './exec-oversight.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [ExecOversightService],
  exports: [ExecOversightService],
})
export class ExecOversightModule {}
