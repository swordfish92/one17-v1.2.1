import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { AiProviderCredentialError, ConfigureAiProviderCredentialInput } from './ai-provider-credential.types';
import { hasPendingSecret, maskSecret } from '../common/gateway-secret-masking';
import { decryptSecretNullable, encryptSecret } from '../common/gateway-secret-crypto';

// Invariant 73(b) (CHECK27): "AI: Anthropic Claude + OpenAI + one config-
// defined third -- the AI tab flips from placeholder to a real credential
// form; flags stay OFF until a tenant activates (per-tenant, not
// One17-blocked)." Same standing adapter pattern as
// Payment/Bureau/Attendance (write-only masked apiKey, propose/approve
// maker!=checker, inactive-until-approved slots) -- see
// PaymentGatewayService.proposeProviderConfig/approveProviderConfig for
// the exact shape this mirrors.
//
// Capability: reuses AI_CAPABILITY_FLAG_MANAGEMENT (ICT INITIATE, MD_CEO
// APPROVE) rather than inventing a new code -- invariant 63(a)'s own
// ruling is "AI flags = ICT-propose/MD-approve", and
// settings-registry.service.ts already treats AI_CAPABILITY_FLAG_
// MANAGEMENT as the umbrella capability governing AiTieredModelPolicy/
// AiTokenBudget/AiKillSwitch administration -- an AI provider credential
// is the same class of AI-gateway admin config, not a materially
// different maker/checker pair, so the house style ("don't invent new
// capability codes when an existing one already covers the exact same
// maker/checker pair") points at reuse.
//
// CRITICAL: this service governs CREDENTIALS ONLY. A credentialed,
// ACTIVE provider is NECESSARY but NOT SUFFICIENT to make a live AI call
// -- One17AIService's four gates (kill switch, capability flag, RBAC
// grant, task/context) plus the token budget still apply on top,
// unconditionally, and this service never touches any of them. See the
// TODO below on why the live-answer path is NOT rewired to use these
// credentials yet.
@Injectable()
export class AiProviderCredentialService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
  ) {}

  async listCredentials(actorUserId: string) {
    await this.assertCapability(actorUserId, 'AI_CAPABILITY_FLAG_MANAGEMENT', 'VIEW', 'view AI provider credentials');
    const rows = await this.prisma.aiProviderCredential.findMany({ orderBy: { providerSlot: 'asc' } });
    return rows.map((r) => this.serialize(r));
  }

  async proposeCredential(input: ConfigureAiProviderCredentialInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'AI_CAPABILITY_FLAG_MANAGEMENT', 'INITIATE', 'propose an AI provider credential config change');
    if (input.providerSlot < 1 || input.providerSlot > 3) {
      throw new AiProviderCredentialError('AI provider credentials support at most 3 slots (1=Anthropic Claude, 2=OpenAI, 3=config-defined third), per invariant 73(b).');
    }
    // Slot 3 is explicitly the "config-defined third" -- an OpenAI-
    // compatible or self-hosted endpoint has no default URL to fall back
    // to, so baseUrl is mandatory the first time this slot is proposed
    // (mirrors PaymentGatewayService requiring webhookSecret on a
    // brand-new slot).
    let existing = await this.prisma.aiProviderCredential.findUnique({ where: { providerSlot: input.providerSlot } });
    if (input.providerSlot === 3 && !existing && !input.baseUrl) {
      throw new AiProviderCredentialError('baseUrl is required when proposing provider slot 3 (the config-defined third vendor) for the first time.');
    }
    if (existing?.configWorkflowInstanceId) {
      throw new AiProviderCredentialError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
    }
    // A brand-new slot needs a row to attach the pending proposal to, but
    // must never be reachable (isActive stays false) before MD_CEO
    // approves -- invariant 33(e)/73(b): "flags stay OFF until a tenant
    // activates."
    if (!existing) {
      existing = await this.prisma.aiProviderCredential.create({
        data: { providerSlot: input.providerSlot, providerName: input.providerName, apiKey: null, baseUrl: null, isActive: false, configuredByUserId: actorUserId },
      });
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'AI_PROVIDER_CREDENTIAL_CONFIG',
      entityType: 'ai_provider_credential',
      entityId: existing.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.aiProviderCredential.update({
      where: { id: existing.id },
      data: {
        pendingProviderName: input.providerName,
        // Omitting apiKey leaves the pending value unset -- on approval
        // the live key stays exactly as it was (write-only-masked
        // guarantee: the ops-UI never has the real value to send back, so
        // a save with no freshly-typed key can't accidentally blank it
        // out).
        // Invariant 75(a) (CHECK28): encrypted at rest the moment it's
        // staged as pending -- see PaymentGatewayService.proposeProviderConfig.
        ...(input.apiKey ? { pendingApiKey: encryptSecret(input.apiKey) } : {}),
        ...(input.baseUrl !== undefined ? { pendingBaseUrl: input.baseUrl } : {}),
        pendingIsActive: input.isActive,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    await this.audit.record({
      actorUserId,
      action: 'UPDATE',
      entityType: 'ai_provider_credential',
      entityId: updated.id,
      after: { providerSlot: updated.providerSlot, pendingProviderName: input.providerName, apiKeyRotationProposed: !!input.apiKey, pendingIsActive: input.isActive },
    });
    return this.serialize(updated);
  }

  async approveCredential(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const credential = await this.prisma.aiProviderCredential.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serialize(credential);
    const updated = await this.prisma.aiProviderCredential.update({
      where: { id: credential.id },
      data: {
        providerName: credential.pendingProviderName ?? credential.providerName,
        ...(credential.pendingApiKey ? { apiKey: credential.pendingApiKey } : {}),
        ...(credential.pendingBaseUrl !== null ? { baseUrl: credential.pendingBaseUrl } : {}),
        // isActive only ever flips here, on a DIFFERENT user's (MD_CEO)
        // approval -- proposeCredential() above never touches the live
        // isActive column, so credentialing alone can never accidentally
        // activate a slot (invariant 33e/73b).
        isActive: credential.pendingIsActive ?? credential.isActive,
        configuredByUserId: credential.pendingProposedByUserId ?? credential.configuredByUserId,
        pendingProviderName: null,
        pendingApiKey: null,
        pendingBaseUrl: null,
        pendingIsActive: null,
        pendingProposedByUserId: null,
        configWorkflowInstanceId: null,
      },
    });
    await this.audit.record({
      actorUserId: approverUserId,
      action: 'APPROVE',
      entityType: 'ai_provider_credential',
      entityId: updated.id,
      after: { providerSlot: updated.providerSlot, providerName: updated.providerName, isActive: updated.isActive },
    });
    return this.serialize(updated);
  }

  // ==========================================================================
  // TODO (deliberately NOT built in this task): rewiring One17AIService's
  // buildResponse()/invoke() to actually CALL a credentialed provider
  // (via callAnthropic/callOpenAi/callGenericOpenAiCompatible in
  // ai-provider-clients.ts) once AiTieredModelPolicy.providerName for a
  // capability matches an ACTIVE AiProviderCredential.providerName here.
  // Judgment call: the four-gate pipeline (kill switch -> flag -> RBAC ->
  // context -> budget -> cache) in One17AIService is complex and load-
  // bearing (invariant 33's entire RAG-leak-precluded, audit-logged
  // posture); splicing a real provider call into it safely -- deciding
  // exactly where the budget charge/cache write happens relative to a
  // real (fallible, slow) network call, how a provider HTTP error
  // surfaces as an ai_interaction_log outcome, and how MID_TIER vs
  // FRONTIER_TIER selects model+client -- is a materially different task
  // than making the credential layer real. This task builds a credential
  // layer that is genuinely real (proposable, approvable, masked,
  // inert-by-default) and adapters that genuinely build correct requests;
  // actually flipping the switch on the live-answer path is left for a
  // follow-up so it can get its own focused adversarial proof rather than
  // riding along here half-tested.
  // ==========================================================================

  private serialize<T extends { apiKey: string | null; pendingApiKey: string | null }>(c: T) {
    const { apiKey, pendingApiKey, ...rest } = c;
    // Invariant 75(a) (CHECK28): decrypt JUST for this in-memory preview
    // computation (never returned raw) -- see
    // PaymentGatewayService.serializeProvider's identical rationale.
    const { hasSecret, secretPreview } = maskSecret(decryptSecretNullable(apiKey));
    return { ...rest, hasApiKey: hasSecret, apiKeyPreview: secretPreview, hasPendingApiKeyRotation: hasPendingSecret(pendingApiKey) };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'ai_provider_credential_activity', entityId: activity, after: { functionCode, level } });
      throw new AiProviderCredentialError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
