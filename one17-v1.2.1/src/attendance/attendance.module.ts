import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { NotificationModule } from '../notification/notification.module';
import { AttendanceService } from './attendance.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, NotificationModule],
  providers: [AttendanceService],
  exports: [AttendanceService],
})
export class AttendanceModule {}
