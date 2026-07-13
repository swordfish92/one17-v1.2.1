import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { TaskModule } from '../task/task.module';
import { BoardDirectiveService } from './board-directive.service';

@Module({
  imports: [AuditModule, DelegationModule, TaskModule],
  providers: [BoardDirectiveService],
  exports: [BoardDirectiveService],
})
export class BoardDirectiveModule {}
