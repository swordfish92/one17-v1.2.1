import { Body, Controller, Param, Post, Get, UseGuards } from '@nestjs/common';
import { SessionAuthGuard } from '../auth/session-auth.guard';
import { CapabilityGuard } from '../auth/capability.guard';
import { RequiresCapability } from '../auth/requires-capability.decorator';
import { CurrentUser } from '../auth/current-user.decorator';
import type { AuthenticatedUser } from '../auth/auth.types';
import { AiProviderCredentialService } from '../ai/ai-provider-credential.service';
import { ConfigureAiProviderCredentialDto } from './ops-api.types';

// Invariant 73(b) (CHECK27): AI provider credential admin surface -- a
// DIFFERENT, properly capability-gated controller from AiController
// (ai.controller.ts), which deliberately carries NO @RequiresCapability
// decorators because every authorization decision for an AI ANSWER lives
// inside One17AIService's own four-gate pipeline. Credential management is
// a distinct admin action (same class as PaymentGatewayController/
// AttendanceController's provider-config routes) and belongs behind the
// standard CapabilityGuard, same as those two.
@Controller('ai-provider-credentials')
@UseGuards(SessionAuthGuard, CapabilityGuard)
export class AiProviderCredentialController {
  constructor(private readonly credentials: AiProviderCredentialService) {}

  @Get()
  @RequiresCapability('AI_CAPABILITY_FLAG_MANAGEMENT', 'VIEW')
  async listCredentials(@CurrentUser() user: AuthenticatedUser) {
    return this.credentials.listCredentials(user.userId);
  }

  @Post()
  @RequiresCapability('AI_CAPABILITY_FLAG_MANAGEMENT', 'INITIATE')
  async proposeCredential(@Body() dto: ConfigureAiProviderCredentialDto, @CurrentUser() user: AuthenticatedUser) {
    return this.credentials.proposeCredential(dto, user.userId);
  }

  @Post(':workflowInstanceId/approve')
  @RequiresCapability('AI_CAPABILITY_FLAG_MANAGEMENT', 'APPROVE')
  async approveCredential(@Param('workflowInstanceId') workflowInstanceId: string, @CurrentUser() user: AuthenticatedUser) {
    return this.credentials.approveCredential(workflowInstanceId, user.userId);
  }
}
