import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { OrgStructureService } from './org-structure.service';
import { DepartmentHeadService } from './department-head.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [OrgStructureService, DepartmentHeadService],
  exports: [OrgStructureService, DepartmentHeadService],
})
export class OrgStructureModule {}
