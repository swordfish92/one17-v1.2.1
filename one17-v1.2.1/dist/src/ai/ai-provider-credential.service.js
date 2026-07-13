"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiProviderCredentialService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ai_provider_credential_types_1 = require("./ai-provider-credential.types");
const gateway_secret_masking_1 = require("../common/gateway-secret-masking");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
let AiProviderCredentialService = class AiProviderCredentialService {
    prisma;
    audit;
    delegation;
    workflow;
    constructor(prisma, audit, delegation, workflow) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
    }
    async listCredentials(actorUserId) {
        await this.assertCapability(actorUserId, 'AI_CAPABILITY_FLAG_MANAGEMENT', 'VIEW', 'view AI provider credentials');
        const rows = await this.prisma.aiProviderCredential.findMany({ orderBy: { providerSlot: 'asc' } });
        return rows.map((r) => this.serialize(r));
    }
    async proposeCredential(input, actorUserId) {
        await this.assertCapability(actorUserId, 'AI_CAPABILITY_FLAG_MANAGEMENT', 'INITIATE', 'propose an AI provider credential config change');
        if (input.providerSlot < 1 || input.providerSlot > 3) {
            throw new ai_provider_credential_types_1.AiProviderCredentialError('AI provider credentials support at most 3 slots (1=Anthropic Claude, 2=OpenAI, 3=config-defined third), per invariant 73(b).');
        }
        let existing = await this.prisma.aiProviderCredential.findUnique({ where: { providerSlot: input.providerSlot } });
        if (input.providerSlot === 3 && !existing && !input.baseUrl) {
            throw new ai_provider_credential_types_1.AiProviderCredentialError('baseUrl is required when proposing provider slot 3 (the config-defined third vendor) for the first time.');
        }
        if (existing?.configWorkflowInstanceId) {
            throw new ai_provider_credential_types_1.AiProviderCredentialError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
        }
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
                ...(input.apiKey ? { pendingApiKey: (0, gateway_secret_crypto_1.encryptSecret)(input.apiKey) } : {}),
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
    async approveCredential(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const credential = await this.prisma.aiProviderCredential.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serialize(credential);
        const updated = await this.prisma.aiProviderCredential.update({
            where: { id: credential.id },
            data: {
                providerName: credential.pendingProviderName ?? credential.providerName,
                ...(credential.pendingApiKey ? { apiKey: credential.pendingApiKey } : {}),
                ...(credential.pendingBaseUrl !== null ? { baseUrl: credential.pendingBaseUrl } : {}),
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
    serialize(c) {
        const { apiKey, pendingApiKey, ...rest } = c;
        const { hasSecret, secretPreview } = (0, gateway_secret_masking_1.maskSecret)((0, gateway_secret_crypto_1.decryptSecretNullable)(apiKey));
        return { ...rest, hasApiKey: hasSecret, apiKeyPreview: secretPreview, hasPendingApiKeyRotation: (0, gateway_secret_masking_1.hasPendingSecret)(pendingApiKey) };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'ai_provider_credential_activity', entityId: activity, after: { functionCode, level } });
            throw new ai_provider_credential_types_1.AiProviderCredentialError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.AiProviderCredentialService = AiProviderCredentialService;
exports.AiProviderCredentialService = AiProviderCredentialService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService])
], AiProviderCredentialService);
//# sourceMappingURL=ai-provider-credential.service.js.map