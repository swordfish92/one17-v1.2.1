import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { PartialJobFailure } from '../scheduler/scheduler.types';
import {
  ConfigureCustodianAccountInput,
  ConfigureGatewayProviderInput,
  GatewayWebhookPayload,
  ManualMatchInput,
  PaymentGatewayError,
} from './payment-gateway.types';
import { ADAPTER_REGISTRY, VendorCode, detectVendorCode } from './adapters/registry';
import { hasPendingSecret, maskJsonConfigKeys, maskSecret } from '../common/gateway-secret-masking';
import { decryptJsonSecret, decryptSecret, decryptSecretNullable, encryptJsonSecret, encryptSecret } from '../common/gateway-secret-crypto';
import { CanonicalSettlementEvent } from './adapters/types';
import { Prisma, PaymentGatewayProvider } from '../../generated/prisma/client';

const SYSTEM_PAYMENT_GATEWAY_EMAIL = 'system-payment-gateway@one17.test';

// Invariant 55(a) (CHECK12, CEO directive 8-Jul-2026): "product-specific
// CUSTODIAN ACCOUNTS configured per product ... clients deposit DIRECTLY
// into the target fund's custodian account -- deliberately bypassing any
// CLIENT_MONEY wallet stage." Flow: webhook confirms settlement -> inflow
// logged+matched (investor+product) -> auto-creates a SubscriptionRequest
// through the governed SubscriptionService -> checker approval books the
// holding (certificate auto-issues there already, unchanged). This service
// NEVER writes SubscriptionRequest/Txn/ProductAccount directly -- every
// consequential write is delegated to SubscriptionService, which already
// carries the Stage-1 KYC-tier deposit cap (LedgerService.createTxn) and
// certificate auto-issue (CertificateService) for free.
//
// CEO ruling (9-Jul-2026): provider/custodian config changes are
// MD-approved (propose/approve, same shape as the AI capability flag
// toggle); suspense-desk reject/reversal decisions require a SECOND
// Finance officer's approval before they take effect. manualMatch stays
// single-actor -- attributing a real inflow to its rightful owner is
// clerical, not a decision to destroy or reverse money.
@Injectable()
export class PaymentGatewayService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService,
    private readonly delegation: DelegationService,
    private readonly workflow: WorkflowEngineService,
    private readonly subscription: SubscriptionService,
  ) {}

  // ==========================================================================
  // Provider slots + custodian accounts -- Finance-owned (PAYMENT_GATEWAY_
  // POLICY), same propose/MD_CEO-approve shape as BureauProvider, now at
  // <=4 vendor slots (invariant 73b/CHECK27 added the 4th, Paymish). FIN_ADMIN
  // proposes, MD_CEO approves -- the proposed values are staged on pending*
  // columns and only copied onto the live fields once the workflow
  // resolves APPROVED.
  // ==========================================================================
  async listProviders() {
    const rows = await this.prisma.paymentGatewayProvider.findMany({ orderBy: { providerSlot: 'asc' } });
    return rows.map((p) => this.serializeProvider(p));
  }

  async proposeProviderConfig(input: ConfigureGatewayProviderInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_POLICY', 'INITIATE', 'propose a payment gateway provider config change');
    // Invariant 73(b) (CHECK27): bumped from 3 to 4 -- Paymish is the 4th
    // named PAYMENTS vendor (Paystack/Flutterwave/Monnify/Paymish). This is
    // an app-level guard, not a DB constraint (providerSlot is @unique, not
    // range-checked), so no schema change is needed to add the 4th slot.
    if (input.providerSlot < 1 || input.providerSlot > 4) {
      throw new PaymentGatewayError('PaymentGateway supports at most 4 provider slots (1-4).');
    }
    let provider = await this.prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: input.providerSlot } });
    if (!provider && !input.webhookSecret) {
      throw new PaymentGatewayError('A webhookSecret is required when proposing a provider slot for the first time.');
    }
    if (provider?.configWorkflowInstanceId) {
      throw new PaymentGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
    }
    // A brand-new slot needs a row to attach the pending proposal to, but
    // must never be reachable by the webhook before MD_CEO approves --
    // isActive:false + an empty placeholder secret (never used for
    // signature verification while isActive is false) achieves that.
    if (!provider) {
      provider = await this.prisma.paymentGatewayProvider.create({
        data: { providerSlot: input.providerSlot, name: input.name, webhookSecret: '', isActive: false, configuredByUserId: actorUserId },
      });
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PAYMENT_GATEWAY_CONFIG',
      entityType: 'payment_gateway_provider',
      entityId: provider.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.paymentGatewayProvider.update({
      where: { id: provider.id },
      data: {
        pendingName: input.name,
        // Omitting webhookSecret/apiConfig leaves the pending value unset --
        // on approval the live secret/apiConfig stays exactly as it was
        // (the write-only-masked guarantee: the ops-UI never has the real
        // value to send back, so a save with no freshly-typed secret
        // can't accidentally blank it out). Invariant 75(a) (CHECK28,
        // v1.2.1 audit remediation): encrypted at rest the moment it's
        // staged as pending, not only once approved -- a pending secret
        // sitting unapproved is exactly as sensitive as a live one.
        ...(input.webhookSecret ? { pendingWebhookSecret: encryptSecret(input.webhookSecret) } : {}),
        ...(input.apiConfig ? { pendingApiConfig: encryptJsonSecret(input.apiConfig) as unknown as Prisma.InputJsonValue } : {}),
        pendingIsActive: input.isActive,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payment_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.webhookSecret, apiConfigChangeProposed: !!input.apiConfig } });
    return this.serializeProvider(updated);
  }

  async approveProviderConfig(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updatedInstance.status !== 'APPROVED') return this.serializeProvider(await this.prisma.paymentGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } }));
    const provider = await this.prisma.paymentGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    const updated = await this.prisma.paymentGatewayProvider.update({
      where: { id: provider.id },
      data: {
        name: provider.pendingName ?? provider.name,
        ...(provider.pendingWebhookSecret ? { webhookSecret: provider.pendingWebhookSecret } : {}),
        ...(provider.pendingApiConfig != null ? { apiConfig: provider.pendingApiConfig as Prisma.InputJsonValue } : {}),
        isActive: provider.pendingIsActive ?? provider.isActive,
        configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
        pendingName: null,
        pendingWebhookSecret: null,
        pendingApiConfig: Prisma.DbNull,
        pendingIsActive: null,
        pendingProposedByUserId: null,
        configWorkflowInstanceId: null,
      },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payment_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, name: updated.name, isActive: updated.isActive } });
    return this.serializeProvider(updated);
  }

  async listCustodianAccounts() {
    return this.prisma.productCustodianAccount.findMany({ orderBy: { productCode: 'asc' }, include: { provider: { select: { name: true, providerSlot: true } } } });
  }

  async proposeCustodianAccount(input: ConfigureCustodianAccountInput, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_POLICY', 'INITIATE', 'propose a product custodian account config change');
    await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
    await this.prisma.paymentGatewayProvider.findUniqueOrThrow({ where: { id: input.providerId } });
    let account = await this.prisma.productCustodianAccount.findUnique({ where: { providerId_productCode: { providerId: input.providerId, productCode: input.productCode } } });
    if (account?.configWorkflowInstanceId) {
      throw new PaymentGatewayError(`The custodian account for ${input.productCode} already has a config change pending approval.`);
    }
    if (!account) {
      account = await this.prisma.productCustodianAccount.create({
        data: {
          providerId: input.providerId, productCode: input.productCode,
          custodianBankName: '', custodianAccountNumber: '', referenceCodePrefix: '',
          isActive: false, createdByUserId: actorUserId,
        },
      });
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PAYMENT_GATEWAY_CONFIG',
      entityType: 'product_custodian_account',
      entityId: account.id,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.productCustodianAccount.update({
      where: { id: account.id },
      data: {
        pendingCustodianBankName: input.custodianBankName,
        pendingCustodianAccountNumber: input.custodianAccountNumber,
        pendingReferenceCodePrefix: input.referenceCodePrefix,
        pendingIsActive: input.isActive,
        pendingProposedByUserId: actorUserId,
        configWorkflowInstanceId: workflowInstance.id,
      },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'product_custodian_account', entityId: updated.id, after: { productCode: updated.productCode, pendingCustodianAccountNumber: input.custodianAccountNumber } });
    return updated;
  }

  async approveCustodianAccount(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    if (updatedInstance.status !== 'APPROVED') return this.prisma.productCustodianAccount.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    const account = await this.prisma.productCustodianAccount.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
    const updated = await this.prisma.productCustodianAccount.update({
      where: { id: account.id },
      data: {
        custodianBankName: account.pendingCustodianBankName ?? account.custodianBankName,
        custodianAccountNumber: account.pendingCustodianAccountNumber ?? account.custodianAccountNumber,
        referenceCodePrefix: account.pendingReferenceCodePrefix ?? account.referenceCodePrefix,
        isActive: account.pendingIsActive ?? account.isActive,
        pendingCustodianBankName: null,
        pendingCustodianAccountNumber: null,
        pendingReferenceCodePrefix: null,
        pendingIsActive: null,
        pendingProposedByUserId: null,
        configWorkflowInstanceId: null,
      },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'product_custodian_account', entityId: updated.id, after: { productCode: updated.productCode, custodianAccountNumber: updated.custodianAccountNumber, isActive: updated.isActive } });
    return updated;
  }

  // Portal-facing: "client initiates deposit (portal or reference-coded
  // transfer)" -- no live gateway checkout SDK exists (no vendor
  // contracted, invariant 55a PARK), so the portal's role is to show the
  // investor exactly where and how to pay: the custodian account, and
  // their own reference code, which the webhook matcher parses back.
  async getDepositInstructions(investorId: string, productCode: string) {
    const account = await this.prisma.productCustodianAccount.findFirst({
      where: { productCode, isActive: true, provider: { isActive: true } },
      include: { provider: { select: { name: true } } },
    });
    if (!account) {
      throw new PaymentGatewayError(`No active custodian account is configured for product ${productCode} -- deposits cannot be matched automatically yet.`);
    }
    return {
      gatewayName: account.provider.name,
      custodianBankName: account.custodianBankName,
      custodianAccountNumber: account.custodianAccountNumber,
      depositReference: `${account.referenceCodePrefix}-${investorId}`,
    };
  }

  // ==========================================================================
  // Webhook intake (LEGACY/synthetic path -- see receiveVendorWebhook below
  // for the real Paystack/Flutterwave/Monnify/Paymish adapters added under
  // invariant 73b/CHECK27). Idempotent on gatewayEventRef (a retried
  // delivery is a no-op, never a double-booked deposit). Verifies an
  // HMAC-SHA256 signature over the payload against the ACTIVE provider's
  // webhookSecret -- see QUESTIONS_FOR_REVIEW.md for the honest limitation
  // (computed over the parsed DTO, not the exact wire bytes). Kept
  // UNCHANGED (still reachable via the original POST /payment-gateway/webhook
  // route) for back-compat with the manual/synthetic-payload flow this
  // codebase already ships and tests (payment-gateway.smoke.ts, CHECK12).
  // ==========================================================================
  async receiveWebhook(payload: GatewayWebhookPayload) {
    const provider = await this.prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: payload.providerSlot } });
    if (!provider || !provider.isActive) {
      throw new PaymentGatewayError(`No ACTIVE payment gateway provider in slot ${payload.providerSlot}.`);
    }
    const { signature, ...toVerify } = payload;
    const expected = crypto.createHmac('sha256', decryptSecret(provider.webhookSecret)).update(JSON.stringify(toVerify)).digest('hex');
    if (!crypto.timingSafeEqual(Buffer.from(signature.padEnd(64, '0').slice(0, 64), 'hex'), Buffer.from(expected, 'hex'))) {
      await this.audit.record({ actorUserId: undefined, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook', entityId: payload.gatewayEventRef, after: { providerSlot: payload.providerSlot, reason: 'signature verification failed' } });
      throw new PaymentGatewayError('Webhook signature verification failed.');
    }
    return this.ingestSettlementEvent(provider, {
      gatewayEventRef: payload.gatewayEventRef,
      amountKobo: BigInt(payload.amountKobo),
      settledAt: new Date(payload.settledAt),
      custodianAccountNumber: payload.custodianAccountNumber,
      narration: payload.narration ?? null,
      rawPayload: payload,
    });
  }

  // ==========================================================================
  // Invariant 73(b) (CHECK27): the REAL vendor webhook intake -- one route
  // per vendor (see payment-gateway-webhook.controller.ts), each verifying
  // against that vendor's actual documented signature scheme via the
  // matching PaymentGatewayAdapter (src/payment-gateway/adapters/), then
  // parsing the vendor's real payload shape into the same canonical
  // PaymentGatewayInflow fields the legacy path above produces --
  // ingestSettlementEvent is the SINGLE shared place either path creates a
  // row, so suspense-matching/promotion behaves identically regardless of
  // which vendor sent the event. Returns null when the vendor sent a real
  // event that isn't a settlement (e.g. a dispute/transfer webhook) --
  // the controller still acks 200, nothing gets booked.
  // ==========================================================================
  async receiveVendorWebhook(vendorCode: VendorCode, headers: Record<string, string | string[] | undefined>, parsedBody: unknown, rawBody?: Buffer) {
    const adapter = ADAPTER_REGISTRY[vendorCode];
    const provider = await this.findActiveProviderForVendor(vendorCode);
    if (!provider) {
      throw new PaymentGatewayError(`No ACTIVE ${adapter.vendorLabel} provider slot is configured -- cannot accept this webhook yet.`);
    }
    try {
      adapter.verifyWebhookSignature(headers, parsedBody, { webhookSecret: decryptSecret(provider.webhookSecret), apiConfig: decryptJsonSecret(provider.apiConfig) }, rawBody);
    } catch (err) {
      await this.audit.record({ actorUserId: undefined, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook', entityId: `${vendorCode}:${provider.id}`, after: { providerId: provider.id, vendorCode, reason: (err as Error).message } });
      throw err;
    }
    const event = adapter.parseWebhookEvent(parsedBody);
    if (!event) {
      return null; // a real, verified, but non-settlement event -- nothing to book
    }
    return this.ingestSettlementEvent(provider, event);
  }

  // Officer-triggered outbound confirmation (mirrors BureauGatewayService's
  // "officer-triggered pull via BUTTON only" pattern) -- the second half of
  // invariant 73(b)'s "webhook signature verification + settlement-
  // confirmation parse": an FIN_ADMIN/TREASURY_OFF can ask the vendor's own
  // verify-transaction API to confirm a suspense-queue inflow directly,
  // independent of trusting the webhook alone. Ships CALLABLE; throws a
  // clear PaymentGatewayError if the provider's apiConfig/webhookSecret
  // don't yet carry a real credential (invariant 73d: adapters ship inert).
  async verifyInflowWithVendor(inflowId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'call a vendor verify-transaction API for a suspense inflow');
    const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId }, include: { provider: true } });
    const vendorCode = detectVendorCode(inflow.provider.name);
    if (!vendorCode) {
      throw new PaymentGatewayError(`Provider "${inflow.provider.name}" does not match a known adapter vendor (Paystack/Flutterwave/Monnify/Paymish) -- no verify-transaction API is wired for it.`);
    }
    const adapter = ADAPTER_REGISTRY[vendorCode];
    // parseWebhookEvent prefixes gatewayEventRef with "vendor:" -- strip it
    // back to the vendor's own reference for the outbound call.
    const prefix = `${vendorCode.toLowerCase()}:`;
    const reference = inflow.gatewayEventRef.startsWith(prefix) ? inflow.gatewayEventRef.slice(prefix.length) : inflow.gatewayEventRef;
    const result = await adapter.verifyTransaction(reference, { webhookSecret: decryptSecret(inflow.provider.webhookSecret), apiConfig: decryptJsonSecret(inflow.provider.apiConfig) });
    // EXECUTE, not VIEW (not in the AuditAction enum) -- this action
    // triggers a real outbound call against the vendor's API, closer in
    // kind to an EXECUTE than a passive read.
    await this.audit.record({ actorUserId, action: 'EXECUTE', entityType: 'payment_gateway_inflow', entityId: inflowId, after: { vendorCode, verified: result.verified, status: result.status } });
    return result;
  }

  private async findActiveProviderForVendor(vendorCode: VendorCode): Promise<PaymentGatewayProvider | null> {
    const providers = await this.prisma.paymentGatewayProvider.findMany({ where: { isActive: true } });
    return providers.find((p) => detectVendorCode(p.name) === vendorCode) ?? null;
  }

  // ==========================================================================
  // The SINGLE place a PaymentGatewayInflow row is ever created, whichever
  // path produced the canonical event (legacy synthetic receiveWebhook, or
  // a real vendor adapter via receiveVendorWebhook) -- identical idempotency
  // + suspense-matching behaviour either way.
  // ==========================================================================
  private async ingestSettlementEvent(provider: PaymentGatewayProvider, event: CanonicalSettlementEvent) {
    const existing = await this.prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: event.gatewayEventRef } });
    if (existing) {
      return existing; // idempotent replay -- not an error, not a duplicate booking
    }

    const custodianAccount = event.custodianAccountNumber
      ? await this.prisma.productCustodianAccount.findFirst({ where: { providerId: provider.id, custodianAccountNumber: event.custodianAccountNumber } })
      : null;

    const inflow = await this.prisma.paymentGatewayInflow.create({
      data: {
        providerId: provider.id,
        custodianAccountId: custodianAccount?.id ?? null,
        gatewayEventRef: event.gatewayEventRef,
        amountKobo: event.amountKobo,
        settledAt: event.settledAt,
        narration: event.narration ?? null,
        rawPayload: event.rawPayload as any,
        status: 'UNMATCHED',
      },
    });
    await this.audit.record({ actorUserId: undefined, action: 'CREATE', entityType: 'payment_gateway_inflow', entityId: inflow.id, after: { gatewayEventRef: inflow.gatewayEventRef, amountKobo: inflow.amountKobo.toString(), custodianAccountId: inflow.custodianAccountId } });

    if (!custodianAccount) {
      return inflow; // unknown/absent custodian account -- straight to suspense, nothing to match against
    }

    // Reference-coded-transfer matching: the investor's own reference for
    // this product is `${prefix}-${investorId}` (surfaced via
    // getDepositInstructions above) -- parse the narration for it.
    const match = event.narration?.match(new RegExp(`${custodianAccount.referenceCodePrefix}-(\\S+)`));
    if (match) {
      const investor = await this.prisma.investor.findUnique({ where: { investorId: match[1] } });
      if (investor) {
        return this.promoteInflow(inflow.id, investor.investorId, custodianAccount.productCode, null);
      }
    }
    return inflow; // no parseable/valid reference -- stays UNMATCHED, suspense queue
  }

  // ==========================================================================
  // Suspense queue -- UNMATCHED/MATCHED rows ARE the queue (no separate
  // table). Never silently dropped: every row stays queryable by status.
  // ==========================================================================
  async listSuspenseQueue(actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'VIEW', 'view the payment gateway suspense queue');
    const rows = await this.prisma.paymentGatewayInflow.findMany({
      where: { status: { in: ['UNMATCHED', 'MATCHED'] } },
      orderBy: { createdAt: 'asc' },
      include: { custodianAccount: { select: { productCode: true, custodianAccountNumber: true } }, provider: { select: { name: true } } },
    });
    return rows.map((r) => this.serializeInflow(r));
  }

  async listAllInflows(actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'VIEW', 'view the payment gateway inflow log');
    const rows = await this.prisma.paymentGatewayInflow.findMany({
      orderBy: { createdAt: 'desc' },
      take: 200,
      include: { custodianAccount: { select: { productCode: true, custodianAccountNumber: true } }, provider: { select: { name: true } } },
    });
    return rows.map((r) => this.serializeInflow(r));
  }

  // Clerical attribution, not a money-destroying decision -- stays
  // single-actor per the CEO ruling ("manualMatch ... stays the same
  // standing as the third-party-payer declaration").
  async manualMatch(input: ManualMatchInput) {
    await this.assertCapability(input.actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'manually match a suspended gateway inflow');
    const result = await this.promoteInflow(input.inflowId, input.investorId, input.productCode, input.actorUserId);
    return this.serializeInflow(result);
  }

  // CEO ruling (9-Jul-2026): "rejections/refunds require a second officer."
  // Proposing a REJECT or REVERSAL decision does NOT change the inflow's
  // status yet -- only approveInflowDecision(), called by a DIFFERENT
  // PAYMENT_GATEWAY_SUSPENSE holder, executes it.
  async proposeRejectInflow(inflowId: string, actorUserId: string, reason: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'propose rejecting a suspended gateway inflow');
    const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
    if (inflow.status !== 'UNMATCHED' && inflow.status !== 'MATCHED') {
      throw new PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only propose rejecting an UNMATCHED/MATCHED item.`);
    }
    if (inflow.decisionWorkflowInstanceId) {
      throw new PaymentGatewayError(`Inflow ${inflowId} already has a decision pending approval.`);
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PAYMENT_GATEWAY_INFLOW_DECISION',
      entityType: 'payment_gateway_inflow',
      entityId: inflowId,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.paymentGatewayInflow.update({
      where: { id: inflowId },
      data: { pendingDecisionType: 'REJECT', pendingRejectionReason: reason, decisionProposedByUserId: actorUserId, decisionWorkflowInstanceId: workflowInstance.id },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payment_gateway_inflow', entityId: inflowId, after: { pendingDecisionType: 'REJECT', reason } });
    return this.serializeInflow(updated);
  }

  // Chargeback/reversal -- ALWAYS through the governed redemption path,
  // never a raw delete/update of the booked holding. Proposing does NOT
  // touch the holding; only approveInflowDecision (a second officer)
  // triggers initiateRedemption, and THAT still requires its own separate
  // PORT_MGR checker before the holding is actually reversed -- three
  // humans total for a chargeback: proposer, suspense-approver, redemption-approver.
  async proposeReverseInflow(inflowId: string, actorUserId: string) {
    await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'propose reversing a promoted gateway inflow (chargeback)');
    const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
    if (inflow.status !== 'PROMOTED' || !inflow.subscriptionRequestId) {
      throw new PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only propose reversing a PROMOTED inflow with a booked subscription request.`);
    }
    if (inflow.decisionWorkflowInstanceId) {
      throw new PaymentGatewayError(`Inflow ${inflowId} already has a decision pending approval.`);
    }
    const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: inflow.subscriptionRequestId } });
    if (request.status !== 'APPROVED') {
      throw new PaymentGatewayError(`SubscriptionRequest ${request.id} is ${request.status}, not APPROVED -- nothing was actually booked yet. Propose rejecting the still-pending request instead of reversing.`);
    }
    const workflowInstance = await this.workflow.initiate({
      workflowTypeCode: 'PAYMENT_GATEWAY_INFLOW_DECISION',
      entityType: 'payment_gateway_inflow',
      entityId: inflowId,
      initiatedByUserId: actorUserId,
      scenario: 'STANDARD',
    });
    const updated = await this.prisma.paymentGatewayInflow.update({
      where: { id: inflowId },
      data: { pendingDecisionType: 'REVERSAL', decisionProposedByUserId: actorUserId, decisionWorkflowInstanceId: workflowInstance.id },
    });
    await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payment_gateway_inflow', entityId: inflowId, after: { pendingDecisionType: 'REVERSAL' } });
    return this.serializeInflow(updated);
  }

  // The SINGLE second-officer approval entry point for both REJECT and
  // REVERSAL proposals -- decisionType on the inflow row (set at propose
  // time) tells this which branch to execute.
  async approveInflowDecision(workflowInstanceId: string, approverUserId: string) {
    const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
    const inflow = await this.prisma.paymentGatewayInflow.findFirstOrThrow({ where: { decisionWorkflowInstanceId: workflowInstanceId } });
    if (updatedInstance.status !== 'APPROVED') return this.serializeInflow(inflow);

    if (inflow.pendingDecisionType === 'REJECT') {
      const updated = await this.prisma.paymentGatewayInflow.update({
        where: { id: inflow.id },
        data: {
          status: 'REJECTED',
          rejectionReason: inflow.pendingRejectionReason,
          matchedByUserId: inflow.decisionProposedByUserId,
          matchedAt: new Date(),
          pendingDecisionType: null,
          pendingRejectionReason: null,
          decisionProposedByUserId: null,
          decisionWorkflowInstanceId: null,
        },
      });
      await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payment_gateway_inflow', entityId: updated.id, after: { status: 'REJECTED' } });
      return this.serializeInflow(updated);
    }

    // REVERSAL: re-verify the underlying subscription is still APPROVED
    // (defensive -- state could theoretically have moved between propose
    // and approve) before touching the ledger via a real redemption.
    const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: inflow.subscriptionRequestId! } });
    if (request.status !== 'APPROVED') {
      throw new PaymentGatewayError(`SubscriptionRequest ${request.id} is no longer APPROVED (now ${request.status}) -- cannot execute the reversal decision.`);
    }
    const systemUserId = await this.systemPaymentGatewayUserId();
    const redemption = await this.subscription.initiateRedemption({
      investorId: request.investorId,
      productCode: request.productCode,
      amountKobo: request.amountKobo,
      effectiveDate: new Date(),
      initiatedByUserId: systemUserId,
    });
    const updated = await this.prisma.paymentGatewayInflow.update({
      where: { id: inflow.id },
      data: {
        status: 'REVERSED',
        reversalRedemptionRequestId: redemption.id,
        pendingDecisionType: null,
        decisionProposedByUserId: null,
        decisionWorkflowInstanceId: null,
      },
    });
    await this.audit.record({ actorUserId: approverUserId, action: 'APPROVE', entityType: 'payment_gateway_inflow', entityId: updated.id, after: { status: 'REVERSED', reversalRedemptionRequestId: redemption.id } });
    return this.serializeInflow(updated);
  }

  // ==========================================================================
  // Internal: the ONLY place a SubscriptionRequest gets auto-created from
  // an inflow, called either from the webhook's own auto-match or from
  // manualMatch(). matcherUserId is null for a genuine auto-match (nobody
  // decided anything -- the reference code alone was authoritative).
  // ==========================================================================
  private async promoteInflow(inflowId: string, investorId: string, productCode: string, matcherUserId: string | null) {
    const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
    if (inflow.status !== 'UNMATCHED' && inflow.status !== 'MATCHED') {
      throw new PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only promote an UNMATCHED/MATCHED item.`);
    }
    const systemUserId = await this.systemPaymentGatewayUserId();
    try {
      const request = await this.subscription.initiateSubscription({
        investorId,
        productCode,
        amountKobo: inflow.amountKobo,
        effectiveDate: inflow.settledAt,
        initiatedByUserId: systemUserId,
      });
      return this.prisma.paymentGatewayInflow.update({
        where: { id: inflowId },
        data: {
          status: 'PROMOTED',
          matchedInvestorId: investorId,
          matchedByUserId: matcherUserId,
          matchedAt: new Date(),
          subscriptionRequestId: request.id,
          lastAttemptError: null,
        },
      });
    } catch (err) {
      // Invariant 43(e)/49(b2) doctrine: a failed auto-promotion (e.g. the
      // investor isn't eligible, or the product isn't ACTIVE) must never
      // silently vanish -- it stays visible in the suspense queue with the
      // failure reason attached, never a swallowed exception.
      return this.prisma.paymentGatewayInflow.update({
        where: { id: inflowId },
        data: {
          status: 'MATCHED',
          matchedInvestorId: investorId,
          matchedByUserId: matcherUserId,
          matchedAt: new Date(),
          lastAttemptError: (err as Error).message,
        },
      });
    }
  }

  // Mirrors SchedulerService.systemSchedulerUserId()'s exact idempotent
  // find-or-create shape, deliberately duplicated rather than shared —
  // matches the established per-service convention (see also
  // ProcurementService's own copy).
  private async systemPaymentGatewayUserId(): Promise<string> {
    let user = await this.prisma.appUser.findUnique({ where: { email: SYSTEM_PAYMENT_GATEWAY_EMAIL } });
    if (!user) {
      user = await this.prisma.appUser.create({ data: { email: SYSTEM_PAYMENT_GATEWAY_EMAIL, displayName: 'System Payment Gateway' } });
    }
    const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
    if (!hasRole) {
      await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
    }
    return user.id;
  }

  // Invariant 73(b)/(d) (CHECK27): apiConfig carries vendor-specific
  // outbound API credentials (Flutterwave's secretKey, Monnify's apiKey,
  // etc) that are just as sensitive as webhookSecret -- masked the same
  // write-only way: only the CONFIGURED KEY NAMES come back over the API,
  // never any value.
  private serializeProvider<T extends { webhookSecret: string; pendingWebhookSecret: string | null; apiConfig: unknown; pendingApiConfig: unknown }>(p: T) {
    const { webhookSecret, pendingWebhookSecret, apiConfig, pendingApiConfig, ...rest } = p;
    // Invariant 75(a) (CHECK28): the columns hold ciphertext now -- decrypt
    // JUST for this in-memory preview computation (never returned raw)
    // so maskSecret's "last 4 real characters" UX is unchanged from before
    // encryption landed.
    return {
      ...rest,
      ...maskSecret(decryptSecretNullable(webhookSecret)),
      hasPendingSecretRotation: hasPendingSecret(pendingWebhookSecret),
      apiConfigKeys: maskJsonConfigKeys(decryptJsonSecret(apiConfig)).configuredKeys,
      hasPendingApiConfigChange: pendingApiConfig != null,
    };
  }

  private serializeInflow<T extends { amountKobo: bigint }>(i: T) {
    return { ...i, amountKobo: i.amountKobo.toString() };
  }

  private async assertCapability(userId: string, functionCode: string, level: 'INITIATE' | 'APPROVE' | 'VIEW', activity: string) {
    const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
    if (!eligible) {
      await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_activity', entityId: activity, after: { functionCode, level } });
      throw new PaymentGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
    }
  }

  // ==========================================================================
  // Daily reconciliation. Honest scope: "gateway settlement reports" and a
  // "custodian bank line" are both external feeds no vendor is contracted
  // to supply yet (invariant 55a PARK) -- this job reconciles what the
  // platform actually HAS (the webhook-fed inflow log) against its own
  // downstream booking outcomes, surfacing exactly the operational risk
  // that's real today: inflows sitting unattended. It is the seam a real
  // settlement-report/bank-line feed plugs a genuine 3-way tie-out into
  // later, same disclosure doctrine as BureauGatewayService's placeholder
  // pulls -- never a fabricated reconciliation against data that doesn't
  // exist.
  // ==========================================================================
  async runDailyReconciliation(): Promise<Record<string, unknown>> {
    const STALE_UNMATCHED_HOURS = 24;
    const STALE_AWAITING_APPROVAL_HOURS = 48;
    const now = Date.now();

    const unresolved = await this.prisma.paymentGatewayInflow.findMany({ where: { status: { in: ['UNMATCHED', 'MATCHED'] } } });
    const staleUnmatched = unresolved.filter((i) => (now - i.createdAt.getTime()) / 3_600_000 > STALE_UNMATCHED_HOURS);

    const promotedPending = await this.prisma.paymentGatewayInflow.findMany({
      where: { status: 'PROMOTED' },
      include: { subscriptionRequest: { select: { status: true, createdAt: true } } },
    });
    const staleAwaitingApproval = promotedPending.filter(
      (i) => i.subscriptionRequest?.status === 'PENDING' && (now - i.subscriptionRequest.createdAt.getTime()) / 3_600_000 > STALE_AWAITING_APPROVAL_HOURS,
    );

    const summary = {
      staleUnmatchedCount: staleUnmatched.length,
      staleUnmatched: staleUnmatched.map((i) => ({ id: i.id, gatewayEventRef: i.gatewayEventRef, amountKobo: i.amountKobo.toString(), ageHours: Math.round((now - i.createdAt.getTime()) / 3_600_000) })),
      staleAwaitingApprovalCount: staleAwaitingApproval.length,
      staleAwaitingApproval: staleAwaitingApproval.map((i) => ({ id: i.id, gatewayEventRef: i.gatewayEventRef, subscriptionRequestId: i.subscriptionRequestId })),
    };

    if (staleUnmatched.length > 0 || staleAwaitingApproval.length > 0) {
      throw new PartialJobFailure(
        `${staleUnmatched.length} inflow(s) unresolved past ${STALE_UNMATCHED_HOURS}h, ${staleAwaitingApproval.length} promoted inflow(s) awaiting checker approval past ${STALE_AWAITING_APPROVAL_HOURS}h`,
        summary,
      );
    }
    return summary;
  }
}
