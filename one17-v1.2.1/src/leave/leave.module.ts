import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { LeaveService } from './leave.service';

@Module({
  imports: [AuditModule, DelegationModule],
  providers: [LeaveService],
  exports: [LeaveService],
})
export class LeaveModule {}
