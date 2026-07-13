import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { NotificationModule } from '../notification/notification.module';
import { BoardCalendarService } from './board-calendar.service';

@Module({
  imports: [AuditModule, DelegationModule, NotificationModule],
  providers: [BoardCalendarService],
  exports: [BoardCalendarService],
})
export class BoardCalendarModule {}
