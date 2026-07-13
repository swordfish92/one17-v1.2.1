import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { NotificationModule } from '../notification/notification.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { CalendarService } from './calendar.service';
import { CalendarGatewayService } from './calendar-gateway.service';

@Module({
  imports: [AuditModule, NotificationModule, DelegationModule, WorkflowModule],
  providers: [CalendarService, CalendarGatewayService],
  exports: [CalendarService, CalendarGatewayService],
})
export class CalendarModule {}
