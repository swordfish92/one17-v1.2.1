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
exports.BureauGatewayService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const bureau_gateway_types_1 = require("./bureau-gateway.types");
const gateway_secret_masking_1 = require("../common/gateway-secret-masking");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
const first_central_adapter_1 = require("./adapters/first-central.adapter");
const crc_adapter_1 = require("./adapters/crc.adapter");
let BureauGatewayService = class BureauGatewayService {
    prisma;
    audit;
    delegation;
    BUREAU_ADAPTERS = [
        { match: (name) => name.toLowerCase().includes('first central'), adapter: new first_central_adapter_1.FirstCentralAdapter() },
        { match: (name) => name.toLowerCase().includes('crc'), adapter: new crc_adapter_1.CrcAdapter() },
    ];
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    resolveBureauAdapter(providerName) {
        const hit = this.BUREAU_ADAPTERS.find((entry) => entry.match(providerName));
        return hit ? hit.adapter : null;
    }
    async listProviders() {
        const providers = await this.prisma.bureauProvider.findMany({ orderBy: { providerSlot: 'asc' } });
        return providers.map((p) => this.serializeProvider(p));
    }
    async configureProvider(input, actorUserId) {
        await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_POLICY', 'INITIATE', 'configure a credit-bureau provider slot');
        if (input.providerSlot < 1 || input.providerSlot > 3) {
            throw new bureau_gateway_types_1.BureauGatewayError('BureauGateway supports at most 3 provider slots (1-3).');
        }
        const encryptedApiConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(input.apiConfig);
        const updated = await this.prisma.bureauProvider.upsert({
            where: { providerSlot: input.providerSlot },
            create: {
                providerSlot: input.providerSlot,
                name: input.name,
                apiConfig: encryptedApiConfig,
                costPerPullKobo: input.costPerPullKobo,
                isActive: input.isActive,
                updatedByUserId: actorUserId,
            },
            update: {
                name: input.name,
                apiConfig: encryptedApiConfig,
                costPerPullKobo: input.costPerPullKobo,
                isActive: input.isActive,
                updatedByUserId: actorUserId,
            },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bureau_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, name: updated.name, isActive: updated.isActive, costPerPullKobo: updated.costPerPullKobo.toString() } });
        return this.serializeProvider(updated);
    }
    async getPolicy() {
        const policy = await this.prisma.bureauPolicyConfig.findUnique({ where: { id: 1 } });
        return policy ?? { id: 1, minIntervalDays: null, updatedByUserId: null, updatedAt: null };
    }
    async updatePolicy(input, actorUserId) {
        await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_POLICY', 'INITIATE', 'update the credit-bureau frequency/interval policy');
        if (input.minIntervalDays < 1) {
            throw new bureau_gateway_types_1.BureauGatewayError('minIntervalDays must be at least 1.');
        }
        const before = await this.prisma.bureauPolicyConfig.findUnique({ where: { id: 1 } });
        const updated = await this.prisma.bureauPolicyConfig.upsert({
            where: { id: 1 },
            create: { id: 1, minIntervalDays: input.minIntervalDays, updatedByUserId: actorUserId },
            update: { minIntervalDays: input.minIntervalDays, updatedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'bureau_policy_config', entityId: '1', before: before ? { minIntervalDays: before.minIntervalDays } : undefined, after: { minIntervalDays: updated.minIntervalDays } });
        return updated;
    }
    async triggerPull(counterpartyId, actorUserId) {
        await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_PULL', 'INITIATE', 'trigger a credit-bureau assessment pull');
        const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: counterpartyId } });
        if (!counterparty.creditBureauConsentAt) {
            throw new bureau_gateway_types_1.BureauGatewayError(`Counterparty ${counterpartyId} has no credit-bureau consent on file — cannot pull.`);
        }
        const policy = await this.prisma.bureauPolicyConfig.findUnique({ where: { id: 1 } });
        if (!policy) {
            throw new bureau_gateway_types_1.BureauGatewayError('No bureau_policy_config row exists — Risk must set the frequency/interval policy before any pull can run.');
        }
        const lastPull = await this.prisma.bureauPullLog.findFirst({ where: { counterpartyId }, orderBy: { pulledAt: 'desc' } });
        if (lastPull) {
            const daysSinceLastPull = (Date.now() - lastPull.pulledAt.getTime()) / (24 * 60 * 60 * 1000);
            if (daysSinceLastPull < policy.minIntervalDays) {
                throw new bureau_gateway_types_1.BureauGatewayError(`Last pull for this counterparty was ${daysSinceLastPull.toFixed(1)} days ago — the Risk-owned policy requires at least ${policy.minIntervalDays} days between pulls.`);
            }
        }
        const provider = await this.prisma.bureauProvider.findFirst({ where: { isActive: true } });
        if (!provider) {
            throw new bureau_gateway_types_1.BureauGatewayError('No active credit-bureau provider slot is configured — Risk must activate one before any pull can run.');
        }
        const adapter = this.resolveBureauAdapter(provider.name);
        let resultSummary;
        if (adapter) {
            const pullResult = await adapter.pull({ counterpartyId, legalName: counterparty.legalName, rcNumber: counterparty.rcNumber ?? null, providerName: provider.name }, (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.apiConfig) ?? {});
            resultSummary = pullResult.summary;
        }
        else {
            resultSummary = `[BUREAU PROVIDER "${provider.name}" NOT CONTRACTED — placeholder pull, no live vendor call made]`;
        }
        const log = await this.prisma.bureauPullLog.create({
            data: {
                counterpartyId,
                providerId: provider.id,
                pulledByUserId: actorUserId,
                costKobo: provider.costPerPullKobo,
                resultSummary,
            },
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'bureau_pull_log', entityId: log.id, after: { counterpartyId, providerId: provider.id, costKobo: log.costKobo.toString() } });
        return this.serializePullLog(log);
    }
    async listPullHistory(counterpartyId) {
        const rows = await this.prisma.bureauPullLog.findMany({
            where: { counterpartyId },
            orderBy: { pulledAt: 'desc' },
            include: { provider: { select: { name: true } } },
        });
        return rows.map((r) => this.serializePullLog(r));
    }
    async listAllPullHistory(actorUserId) {
        await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_POLICY', 'VIEW', 'view the bureau pull register');
        const rows = await this.prisma.bureauPullLog.findMany({
            orderBy: { pulledAt: 'desc' },
            include: {
                provider: { select: { name: true } },
                pulledBy: { select: { displayName: true, email: true } },
                counterparty: { select: { legalName: true } },
            },
        });
        return rows.map((r) => this.serializePullLog(r));
    }
    serializeProvider(p) {
        const { apiConfig, costPerPullKobo, ...rest } = p;
        const { configuredKeys, sensitiveKeys } = (0, gateway_secret_masking_1.maskJsonConfigKeys)((0, gateway_secret_crypto_1.decryptJsonSecret)(apiConfig));
        const adapter = this.resolveBureauAdapter(p.name);
        const automationStatus = adapter ? adapter.automationLevel : 'NOT_CONTRACTED';
        return { ...rest, costPerPullKobo: costPerPullKobo.toString(), apiConfigKeys: configuredKeys, apiConfigSensitiveKeys: sensitiveKeys, automationStatus };
    }
    serializePullLog(p) {
        return { ...p, costKobo: p.costKobo.toString() };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'bureau_gateway_activity', entityId: activity, after: { functionCode, level } });
            throw new bureau_gateway_types_1.BureauGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.BureauGatewayService = BureauGatewayService;
exports.BureauGatewayService = BureauGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], BureauGatewayService);
//# sourceMappingURL=bureau-gateway.service.js.map