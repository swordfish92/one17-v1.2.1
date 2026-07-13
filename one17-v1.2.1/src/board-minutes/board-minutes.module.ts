import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { NotificationModule } from '../notification/notification.module';
import { BoardMinutesService } from './board-minutes.service';

@Module({
  imports: [AuditModule, DelegationModule, NotificationModule],
  providers: [BoardMinutesService],
  exports: [BoardMinutesService],
})
export class BoardMinutesModule {}
