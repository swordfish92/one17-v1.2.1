import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { NotificationModule } from '../notification/notification.module';
import { RbacModule } from '../rbac/rbac.module';
import { ProfileService } from './profile.service';
import { EmployeeLifecycleService } from './employee-lifecycle.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule, NotificationModule, RbacModule],
  providers: [ProfileService, EmployeeLifecycleService],
  exports: [ProfileService, EmployeeLifecycleService],
})
export class ProfileModule {}
