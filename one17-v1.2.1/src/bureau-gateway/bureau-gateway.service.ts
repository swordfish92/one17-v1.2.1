import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { BureauGatewayError, ConfigureBureauProviderInput, UpdateBureauPolicyInput } from './bureau-gateway.types';
import { maskJsonConfigKeys } from '../common/gateway-secret-masking';
import { decryptJsonSecret, encryptJsonSecret } from '../common/gateway-secret-crypto';
import { CreditBureauAdapter } from './adapters/bureau-adapter.types';
import { FirstCentralAdapter } from './adapters/first-central.adapter';
import { CrcAdapter } from './adapters/crc.adapter';

// Invariant 36(c): "Credit-bureau integration = gateway pattern (like the AI
// layer)." Mirrors One17AIService's structure at BureauGateway's much
// smaller scope: every pull executes the FULL authorization/frequency-
// limit/audit pipeline for real; First Central and CRC (invariant 73b,
// CHECK27) resolve to real adapters, any other provider slot keeps the
// original honest-placeholder result — never a fabricated bureau score
// (same disclosure doctrine as One17AIService.buildResponse).
@Injectable()
export class BureauGatewayService {
  private readonly BUREAU_ADAPTERS: { match: (name: string) => boolean; adapter: CreditBureauAdapter }[] = [
    { match: (name) => name.toLowerCase().includes('first central'), adapter: new FirstCentralAdapter() },
    { match: (name) => name.toLowerCase().includes('crc'), adapter: new CrcAdapter() },
  ];

  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
  ) {}

  private resolveBureauAdapter(providerName: string): CreditBureauAdapter | null {
    const hit = this.BUREAU_ADAPTERS.find((entry) => entry.match(providerName));
    return hit ? hit.adapter : null;
  }

  // ==========================================================================
  // Provider slots + policy — "Risk owns bureau policy." Both live under the
  // BUREAU_GATEWAY_POLICY capability (RISK_DEPT INITIATE per invariant
  // 36c's explicit ownership).
  // ==========================================================================
  async listProviders() {
    const providers = await this.prisma.bureauProvider.findMany({ orderBy: { providerSlot: 'asc' } });
    return providers.map((p) => this.serializeProvider(p));
  }

  async configureProvider(input: ConfigureBureauProviderInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_POLICY', 'INITIATE', 'configure a credit-bureau provider slot');
    if (input.providerSlot < 1 || input.providerSlot > 3) {
      throw new BureauGatewayError('BureauGateway supports at most 3 provider slots (1-3).');
    }
    // Invariant 75(a) (CHECK28): apiConfig is BureauProvider's ENTIRE
    // credential surface (no separate typed secret column, per
    // serializeProvider's own header comment) -- encrypted at rest the
    // same way every other gateway's config JSON is, even though this
    // model (unlike the others) is single-actor configure, not propose/
    // approve, so there's no separate "pending" leg to also encrypt.
    const encryptedApiConfig = encryptJsonSecret(input.apiConfig as Record<string, unknown>) as unknown as any;
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

  async updatePolicy(input: UpdateBureauPolicyInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_POLICY', 'INITIATE', 'update the credit-bureau frequency/interval policy');
    if (input.minIntervalDays < 1) {
      throw new BureauGatewayError('minIntervalDays must be at least 1.');
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

  // ==========================================================================
  // Officer-triggered pull — "officer-triggered assessment via BUTTON only —
  // NO auto-generation of bureau pulls." Consent verified at onboarding
  // (Counterparty.creditBureauConsentAt), frequency-limited per the Risk-
  // owned policy, cost-per-pull visible, every pull logged.
  // ==========================================================================
  async triggerPull(counterpartyId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'BUREAU_GATEWAY_PULL', 'INITIATE', 'trigger a credit-bureau assessment pull');

    const counterparty = await this.prisma.counterparty.findUniqueOrThrow({ where: { id: counterpartyId } });
    if (!counterparty.creditBureauConsentAt) {
      throw new BureauGatewayError(`Counterparty ${counterpartyId} has no credit-bureau consent on file — cannot pull.`);
    }

    const policy = await this.prisma.bureauPolicyConfig.findUnique({ where: { id: 1 } });
    if (!policy) {
      throw new BureauGatewayError('No bureau_policy_config row exists — Risk must set the frequency/interval policy before any pull can run.');
    }
    const lastPull = await this.prisma.bureauPullLog.findFirst({ where: { counterpartyId }, orderBy: { pulledAt: 'desc' } });
    if (lastPull) {
      const daysSinceLastPull = (Date.now() - lastPull.pulledAt.getTime()) / (24 * 60 * 60 * 1000);
      if (daysSinceLastPull < policy.minIntervalDays) {
        throw new BureauGatewayError(`Last pull for this counterparty was ${daysSinceLastPull.toFixed(1)} days ago — the Risk-owned policy requires at least ${policy.minIntervalDays} days between pulls.`);
      }
    }

    const provider = await this.prisma.bureauProvider.findFirst({ where: { isActive: true } });
    if (!provider) {
      throw new BureauGatewayError('No active credit-bureau provider slot is configured — Risk must activate one before any pull can run.');
    }

    // Invariant 73(b): First Central and CRC resolve to real adapters; any
    // other provider slot keeps the original honest-stub doctrine (same as
    // One17AIService.buildResponse) — the full pipeline above runs for
    // real either way, only the actual vendor call differs.
    const adapter = this.resolveBureauAdapter(provider.name);
    let resultSummary: string;
    if (adapter) {
      const pullResult = await adapter.pull(
        { counterpartyId, legalName: counterparty.legalName, rcNumber: counterparty.rcNumber ?? null, providerName: provider.name },
        decryptJsonSecret(provider.apiConfig) ?? {},
      );
      resultSummary = pullResult.summary;
    } else {
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

  // Read for BOTH surfaces — "result renders on BOTH counterparty portal
  // and staff view (with pull date + provider)."
  async listPullHistory(counterpartyId: string) {
    const rows = await this.prisma.bureauPullLog.findMany({
      where: { counterpartyId },
      orderBy: { pulledAt: 'desc' },
      include: { provider: { select: { name: true } } },
    });
    return rows.map((r) => this.serializePullLog(r));
  }

  // CHECK16 62(e): the standalone register — "every pull: who, whom,
  // provider, when." Platform-wide (not one counterparty at a time, unlike
  // listPullHistory above), so gated on the same VIEW capability that
  // already governs the bureau provider/policy config screens (Risk-owned)
  // rather than a new function code.
  async listAllPullHistory(actorUserId: string) {
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

  // Invariant 73(b)/(d) (CHECK27): apiConfig is the ENTIRE credential
  // surface for a bureau provider (no separate typed secret column exists
  // on BureauProvider) -- it may carry a plaintext username/password/apiKey
  // per First Central/CRC's own integration shape, so it must never come
  // back over the API in full. Same write-only-masked doctrine as every
  // other gateway's secret field, via the shared helper.
  //
  // Invariant 74 (CHECK27, v1.2): "the CRC manual-fallback should be
  // visible to Compliance, not just parked in a code comment." Resolves the
  // SAME adapter triggerPull() would use and surfaces its honest
  // automationLevel, so the ops-ui Bureau tab can plainly show which
  // provider slots are live vendor calls vs. a manual pull outside the
  // system today -- zero guessing from source code required.
  private serializeProvider<T extends { name: string; apiConfig: unknown; costPerPullKobo: bigint }>(p: T) {
    const { apiConfig, costPerPullKobo, ...rest } = p;
    // Invariant 75(a) (CHECK28): decrypt JUST for this in-memory preview
    // computation (never returned raw).
    const { configuredKeys, sensitiveKeys } = maskJsonConfigKeys(decryptJsonSecret(apiConfig));
    const adapter = this.resolveBureauAdapter(p.name);
    const automationStatus: 'AUTOMATED' | 'MANUAL_PENDING_API' | 'NOT_CONTRACTED' = adapter ? adapter.automationLevel : 'NOT_CONTRACTED';
    return { ...rest, costPerPullKobo: costPerPullKobo.toString(), apiConfigKeys: configuredKeys, apiConfigSensitiveKeys: sensitiveKeys, automationStatus };
  }

  private serializePullLog<T extends { costKobo: bigint }>(p: T) {
    return { ...p, costKobo: p.costKobo.toString() };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'bureau_gateway_activity', entityId: activity, after: { functionCode, level } });
      throw new BureauGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }
}
