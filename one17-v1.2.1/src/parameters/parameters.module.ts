import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { ParameterService } from './parameters.service';
import { ProspectusSheetService } from './prospectus-sheet.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [ParameterService, ProspectusSheetService],
  exports: [ParameterService, ProspectusSheetService],
})
export class ParametersModule {}
