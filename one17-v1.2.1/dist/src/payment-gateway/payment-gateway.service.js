"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayService = void 0;
const common_1 = require("@nestjs/common");
const crypto = __importStar(require("crypto"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const subscription_service_1 = require("../subscription/subscription.service");
const scheduler_types_1 = require("../scheduler/scheduler.types");
const payment_gateway_types_1 = require("./payment-gateway.types");
const registry_1 = require("./adapters/registry");
const gateway_secret_masking_1 = require("../common/gateway-secret-masking");
const gateway_secret_crypto_1 = require("../common/gateway-secret-crypto");
const client_1 = require("../../generated/prisma/client");
const SYSTEM_PAYMENT_GATEWAY_EMAIL = 'system-payment-gateway@one17.test';
let PaymentGatewayService = class PaymentGatewayService {
    prisma;
    audit;
    delegation;
    workflow;
    subscription;
    constructor(prisma, audit, delegation, workflow, subscription) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.workflow = workflow;
        this.subscription = subscription;
    }
    async listProviders() {
        const rows = await this.prisma.paymentGatewayProvider.findMany({ orderBy: { providerSlot: 'asc' } });
        return rows.map((p) => this.serializeProvider(p));
    }
    async proposeProviderConfig(input, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_POLICY', 'INITIATE', 'propose a payment gateway provider config change');
        if (input.providerSlot < 1 || input.providerSlot > 4) {
            throw new payment_gateway_types_1.PaymentGatewayError('PaymentGateway supports at most 4 provider slots (1-4).');
        }
        let provider = await this.prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: input.providerSlot } });
        if (!provider && !input.webhookSecret) {
            throw new payment_gateway_types_1.PaymentGatewayError('A webhookSecret is required when proposing a provider slot for the first time.');
        }
        if (provider?.configWorkflowInstanceId) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Provider slot ${input.providerSlot} already has a config change pending approval.`);
        }
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
                ...(input.webhookSecret ? { pendingWebhookSecret: (0, gateway_secret_crypto_1.encryptSecret)(input.webhookSecret) } : {}),
                ...(input.apiConfig ? { pendingApiConfig: (0, gateway_secret_crypto_1.encryptJsonSecret)(input.apiConfig) } : {}),
                pendingIsActive: input.isActive,
                pendingProposedByUserId: actorUserId,
                configWorkflowInstanceId: workflowInstance.id,
            },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'payment_gateway_provider', entityId: updated.id, after: { providerSlot: updated.providerSlot, pendingName: input.name, secretRotationProposed: !!input.webhookSecret, apiConfigChangeProposed: !!input.apiConfig } });
        return this.serializeProvider(updated);
    }
    async approveProviderConfig(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeProvider(await this.prisma.paymentGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } }));
        const provider = await this.prisma.paymentGatewayProvider.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
        const updated = await this.prisma.paymentGatewayProvider.update({
            where: { id: provider.id },
            data: {
                name: provider.pendingName ?? provider.name,
                ...(provider.pendingWebhookSecret ? { webhookSecret: provider.pendingWebhookSecret } : {}),
                ...(provider.pendingApiConfig != null ? { apiConfig: provider.pendingApiConfig } : {}),
                isActive: provider.pendingIsActive ?? provider.isActive,
                configuredByUserId: provider.pendingProposedByUserId ?? provider.configuredByUserId,
                pendingName: null,
                pendingWebhookSecret: null,
                pendingApiConfig: client_1.Prisma.DbNull,
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
    async proposeCustodianAccount(input, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_POLICY', 'INITIATE', 'propose a product custodian account config change');
        await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
        await this.prisma.paymentGatewayProvider.findUniqueOrThrow({ where: { id: input.providerId } });
        let account = await this.prisma.productCustodianAccount.findUnique({ where: { providerId_productCode: { providerId: input.providerId, productCode: input.productCode } } });
        if (account?.configWorkflowInstanceId) {
            throw new payment_gateway_types_1.PaymentGatewayError(`The custodian account for ${input.productCode} already has a config change pending approval.`);
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
    async approveCustodianAccount(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        if (updatedInstance.status !== 'APPROVED')
            return this.prisma.productCustodianAccount.findFirstOrThrow({ where: { configWorkflowInstanceId: workflowInstanceId } });
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
    async getDepositInstructions(investorId, productCode) {
        const account = await this.prisma.productCustodianAccount.findFirst({
            where: { productCode, isActive: true, provider: { isActive: true } },
            include: { provider: { select: { name: true } } },
        });
        if (!account) {
            throw new payment_gateway_types_1.PaymentGatewayError(`No active custodian account is configured for product ${productCode} -- deposits cannot be matched automatically yet.`);
        }
        return {
            gatewayName: account.provider.name,
            custodianBankName: account.custodianBankName,
            custodianAccountNumber: account.custodianAccountNumber,
            depositReference: `${account.referenceCodePrefix}-${investorId}`,
        };
    }
    async receiveWebhook(payload) {
        const provider = await this.prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: payload.providerSlot } });
        if (!provider || !provider.isActive) {
            throw new payment_gateway_types_1.PaymentGatewayError(`No ACTIVE payment gateway provider in slot ${payload.providerSlot}.`);
        }
        const { signature, ...toVerify } = payload;
        const expected = crypto.createHmac('sha256', (0, gateway_secret_crypto_1.decryptSecret)(provider.webhookSecret)).update(JSON.stringify(toVerify)).digest('hex');
        if (!crypto.timingSafeEqual(Buffer.from(signature.padEnd(64, '0').slice(0, 64), 'hex'), Buffer.from(expected, 'hex'))) {
            await this.audit.record({ actorUserId: undefined, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook', entityId: payload.gatewayEventRef, after: { providerSlot: payload.providerSlot, reason: 'signature verification failed' } });
            throw new payment_gateway_types_1.PaymentGatewayError('Webhook signature verification failed.');
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
    async receiveVendorWebhook(vendorCode, headers, parsedBody, rawBody) {
        const adapter = registry_1.ADAPTER_REGISTRY[vendorCode];
        const provider = await this.findActiveProviderForVendor(vendorCode);
        if (!provider) {
            throw new payment_gateway_types_1.PaymentGatewayError(`No ACTIVE ${adapter.vendorLabel} provider slot is configured -- cannot accept this webhook yet.`);
        }
        try {
            adapter.verifyWebhookSignature(headers, parsedBody, { webhookSecret: (0, gateway_secret_crypto_1.decryptSecret)(provider.webhookSecret), apiConfig: (0, gateway_secret_crypto_1.decryptJsonSecret)(provider.apiConfig) }, rawBody);
        }
        catch (err) {
            await this.audit.record({ actorUserId: undefined, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook', entityId: `${vendorCode}:${provider.id}`, after: { providerId: provider.id, vendorCode, reason: err.message } });
            throw err;
        }
        const event = adapter.parseWebhookEvent(parsedBody);
        if (!event) {
            return null;
        }
        return this.ingestSettlementEvent(provider, event);
    }
    async verifyInflowWithVendor(inflowId, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'call a vendor verify-transaction API for a suspense inflow');
        const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId }, include: { provider: true } });
        const vendorCode = (0, registry_1.detectVendorCode)(inflow.provider.name);
        if (!vendorCode) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Provider "${inflow.provider.name}" does not match a known adapter vendor (Paystack/Flutterwave/Monnify/Paymish) -- no verify-transaction API is wired for it.`);
        }
        const adapter = registry_1.ADAPTER_REGISTRY[vendorCode];
        const prefix = `${vendorCode.toLowerCase()}:`;
        const reference = inflow.gatewayEventRef.startsWith(prefix) ? inflow.gatewayEventRef.slice(prefix.length) : inflow.gatewayEventRef;
        const result = await adapter.verifyTransaction(reference, { webhookSecret: (0, gateway_secret_crypto_1.decryptSecret)(inflow.provider.webhookSecret), apiConfig: (0, gateway_secret_crypto_1.decryptJsonSecret)(inflow.provider.apiConfig) });
        await this.audit.record({ actorUserId, action: 'EXECUTE', entityType: 'payment_gateway_inflow', entityId: inflowId, after: { vendorCode, verified: result.verified, status: result.status } });
        return result;
    }
    async findActiveProviderForVendor(vendorCode) {
        const providers = await this.prisma.paymentGatewayProvider.findMany({ where: { isActive: true } });
        return providers.find((p) => (0, registry_1.detectVendorCode)(p.name) === vendorCode) ?? null;
    }
    async ingestSettlementEvent(provider, event) {
        const existing = await this.prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: event.gatewayEventRef } });
        if (existing) {
            return existing;
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
                rawPayload: event.rawPayload,
                status: 'UNMATCHED',
            },
        });
        await this.audit.record({ actorUserId: undefined, action: 'CREATE', entityType: 'payment_gateway_inflow', entityId: inflow.id, after: { gatewayEventRef: inflow.gatewayEventRef, amountKobo: inflow.amountKobo.toString(), custodianAccountId: inflow.custodianAccountId } });
        if (!custodianAccount) {
            return inflow;
        }
        const match = event.narration?.match(new RegExp(`${custodianAccount.referenceCodePrefix}-(\\S+)`));
        if (match) {
            const investor = await this.prisma.investor.findUnique({ where: { investorId: match[1] } });
            if (investor) {
                return this.promoteInflow(inflow.id, investor.investorId, custodianAccount.productCode, null);
            }
        }
        return inflow;
    }
    async listSuspenseQueue(actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'VIEW', 'view the payment gateway suspense queue');
        const rows = await this.prisma.paymentGatewayInflow.findMany({
            where: { status: { in: ['UNMATCHED', 'MATCHED'] } },
            orderBy: { createdAt: 'asc' },
            include: { custodianAccount: { select: { productCode: true, custodianAccountNumber: true } }, provider: { select: { name: true } } },
        });
        return rows.map((r) => this.serializeInflow(r));
    }
    async listAllInflows(actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'VIEW', 'view the payment gateway inflow log');
        const rows = await this.prisma.paymentGatewayInflow.findMany({
            orderBy: { createdAt: 'desc' },
            take: 200,
            include: { custodianAccount: { select: { productCode: true, custodianAccountNumber: true } }, provider: { select: { name: true } } },
        });
        return rows.map((r) => this.serializeInflow(r));
    }
    async manualMatch(input) {
        await this.assertCapability(input.actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'manually match a suspended gateway inflow');
        const result = await this.promoteInflow(input.inflowId, input.investorId, input.productCode, input.actorUserId);
        return this.serializeInflow(result);
    }
    async proposeRejectInflow(inflowId, actorUserId, reason) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'propose rejecting a suspended gateway inflow');
        const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
        if (inflow.status !== 'UNMATCHED' && inflow.status !== 'MATCHED') {
            throw new payment_gateway_types_1.PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only propose rejecting an UNMATCHED/MATCHED item.`);
        }
        if (inflow.decisionWorkflowInstanceId) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Inflow ${inflowId} already has a decision pending approval.`);
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
    async proposeReverseInflow(inflowId, actorUserId) {
        await this.assertCapability(actorUserId, 'PAYMENT_GATEWAY_SUSPENSE', 'INITIATE', 'propose reversing a promoted gateway inflow (chargeback)');
        const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
        if (inflow.status !== 'PROMOTED' || !inflow.subscriptionRequestId) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only propose reversing a PROMOTED inflow with a booked subscription request.`);
        }
        if (inflow.decisionWorkflowInstanceId) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Inflow ${inflowId} already has a decision pending approval.`);
        }
        const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: inflow.subscriptionRequestId } });
        if (request.status !== 'APPROVED') {
            throw new payment_gateway_types_1.PaymentGatewayError(`SubscriptionRequest ${request.id} is ${request.status}, not APPROVED -- nothing was actually booked yet. Propose rejecting the still-pending request instead of reversing.`);
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
    async approveInflowDecision(workflowInstanceId, approverUserId) {
        const updatedInstance = await this.workflow.approveNextStep(workflowInstanceId, approverUserId);
        const inflow = await this.prisma.paymentGatewayInflow.findFirstOrThrow({ where: { decisionWorkflowInstanceId: workflowInstanceId } });
        if (updatedInstance.status !== 'APPROVED')
            return this.serializeInflow(inflow);
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
        const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: inflow.subscriptionRequestId } });
        if (request.status !== 'APPROVED') {
            throw new payment_gateway_types_1.PaymentGatewayError(`SubscriptionRequest ${request.id} is no longer APPROVED (now ${request.status}) -- cannot execute the reversal decision.`);
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
    async promoteInflow(inflowId, investorId, productCode, matcherUserId) {
        const inflow = await this.prisma.paymentGatewayInflow.findUniqueOrThrow({ where: { id: inflowId } });
        if (inflow.status !== 'UNMATCHED' && inflow.status !== 'MATCHED') {
            throw new payment_gateway_types_1.PaymentGatewayError(`Inflow ${inflowId} is ${inflow.status} -- can only promote an UNMATCHED/MATCHED item.`);
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
        }
        catch (err) {
            return this.prisma.paymentGatewayInflow.update({
                where: { id: inflowId },
                data: {
                    status: 'MATCHED',
                    matchedInvestorId: investorId,
                    matchedByUserId: matcherUserId,
                    matchedAt: new Date(),
                    lastAttemptError: err.message,
                },
            });
        }
    }
    async systemPaymentGatewayUserId() {
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
    serializeProvider(p) {
        const { webhookSecret, pendingWebhookSecret, apiConfig, pendingApiConfig, ...rest } = p;
        return {
            ...rest,
            ...(0, gateway_secret_masking_1.maskSecret)((0, gateway_secret_crypto_1.decryptSecretNullable)(webhookSecret)),
            hasPendingSecretRotation: (0, gateway_secret_masking_1.hasPendingSecret)(pendingWebhookSecret),
            apiConfigKeys: (0, gateway_secret_masking_1.maskJsonConfigKeys)((0, gateway_secret_crypto_1.decryptJsonSecret)(apiConfig)).configuredKeys,
            hasPendingApiConfigChange: pendingApiConfig != null,
        };
    }
    serializeInflow(i) {
        return { ...i, amountKobo: i.amountKobo.toString() };
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'payment_gateway_activity', entityId: activity, after: { functionCode, level } });
            throw new payment_gateway_types_1.PaymentGatewayError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async runDailyReconciliation() {
        const STALE_UNMATCHED_HOURS = 24;
        const STALE_AWAITING_APPROVAL_HOURS = 48;
        const now = Date.now();
        const unresolved = await this.prisma.paymentGatewayInflow.findMany({ where: { status: { in: ['UNMATCHED', 'MATCHED'] } } });
        const staleUnmatched = unresolved.filter((i) => (now - i.createdAt.getTime()) / 3_600_000 > STALE_UNMATCHED_HOURS);
        const promotedPending = await this.prisma.paymentGatewayInflow.findMany({
            where: { status: 'PROMOTED' },
            include: { subscriptionRequest: { select: { status: true, createdAt: true } } },
        });
        const staleAwaitingApproval = promotedPending.filter((i) => i.subscriptionRequest?.status === 'PENDING' && (now - i.subscriptionRequest.createdAt.getTime()) / 3_600_000 > STALE_AWAITING_APPROVAL_HOURS);
        const summary = {
            staleUnmatchedCount: staleUnmatched.length,
            staleUnmatched: staleUnmatched.map((i) => ({ id: i.id, gatewayEventRef: i.gatewayEventRef, amountKobo: i.amountKobo.toString(), ageHours: Math.round((now - i.createdAt.getTime()) / 3_600_000) })),
            staleAwaitingApprovalCount: staleAwaitingApproval.length,
            staleAwaitingApproval: staleAwaitingApproval.map((i) => ({ id: i.id, gatewayEventRef: i.gatewayEventRef, subscriptionRequestId: i.subscriptionRequestId })),
        };
        if (staleUnmatched.length > 0 || staleAwaitingApproval.length > 0) {
            throw new scheduler_types_1.PartialJobFailure(`${staleUnmatched.length} inflow(s) unresolved past ${STALE_UNMATCHED_HOURS}h, ${staleAwaitingApproval.length} promoted inflow(s) awaiting checker approval past ${STALE_AWAITING_APPROVAL_HOURS}h`, summary);
        }
        return summary;
    }
};
exports.PaymentGatewayService = PaymentGatewayService;
exports.PaymentGatewayService = PaymentGatewayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        workflow_service_1.WorkflowEngineService,
        subscription_service_1.SubscriptionService])
], PaymentGatewayService);
//# sourceMappingURL=payment-gateway.service.js.map