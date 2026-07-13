import { Module } from '@nestjs/common';
import { NotificationModule } from '../notification/notification.module';
import { TaskService } from './task.service';

@Module({
  imports: [NotificationModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
