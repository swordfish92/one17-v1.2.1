import { Module } from '@nestjs/common';
import { AuditModule } from '../audit/audit.module';
import { DelegationModule } from '../delegation/delegation.module';
import { WorkflowModule } from '../workflow/workflow.module';
import { One17AIService } from './one17-ai.service';
import { AiProviderCredentialService } from './ai-provider-credential.service';

@Module({
  imports: [AuditModule, DelegationModule, WorkflowModule],
  providers: [One17AIService, AiProviderCredentialService],
  exports: [One17AIService, AiProviderCredentialService],
})
export class AiModule {}
