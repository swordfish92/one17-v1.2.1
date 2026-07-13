import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { AuthModule } from '../auth/auth.module';
import { DelegationModule } from '../delegation/delegation.module';
import { RbacService } from './rbac.service';
import { UserDeactivationService } from './user-deactivation.service';

@Module({
  imports: [AuditModule, WorkflowModule, AuthModule, DelegationModule],
  providers: [RbacService, UserDeactivationService],
  exports: [RbacService, UserDeactivationService],
})
export class RbacModule {}
