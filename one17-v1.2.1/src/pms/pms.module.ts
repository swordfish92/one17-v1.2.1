import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { LedgerModule } from '../ledger/ledger.module';
import { AttendanceModule } from '../attendance/attendance.module';
import { PmsService } from './pms.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, LedgerModule, AttendanceModule],
  providers: [PmsService],
  exports: [PmsService],
})
export class PmsModule {}
