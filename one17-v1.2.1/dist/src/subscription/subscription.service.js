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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ledger_service_1 = require("../ledger/ledger.service");
const nd_mandate_engine_service_1 = require("../engine-nd-mandate/nd-mandate-engine.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const certificate_service_1 = require("../certificate/certificate.service");
const delegation_service_1 = require("../delegation/delegation.service");
const subscription_types_1 = require("./subscription.types");
let SubscriptionService = class SubscriptionService {
    prisma;
    audit;
    workflow;
    ledger;
    ndMandate;
    eventJournal;
    certificate;
    delegation;
    constructor(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.workflow = workflow;
        this.ledger = ledger;
        this.ndMandate = ndMandate;
        this.eventJournal = eventJournal;
        this.certificate = certificate;
        this.delegation = delegation;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'subscription_request', entityId: activity, after: { functionCode, level } });
            throw new subscription_types_1.SubscriptionServiceError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
    async assertInvestorAndProductEligible(investorId, productCode) {
        const investor = await this.prisma.investor.findUniqueOrThrow({ where: { investorId } });
        if (investor.kycStatus !== 'KYC_COMPLETE' && investor.onboardingStage !== 'STAGE_1_EXPRESS') {
            throw new subscription_types_1.SubscriptionServiceError(`Investor ${investorId} is not eligible for subscription: kycStatus=${investor.kycStatus}, onboardingStage=${investor.onboardingStage} -- must be KYC_COMPLETE, or STAGE_1_EXPRESS within its deposit cap (invariant 27a; the cap itself is enforced downstream in LedgerService.createTxn at approval time).`);
        }
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: productCode } });
        if (product.status !== 'ACTIVE') {
            throw new subscription_types_1.SubscriptionServiceError(`Product ${productCode} is not ACTIVE (status=${product.status}) -- cannot subscribe.`);
        }
        if (!product.shariahApprovedAt) {
            throw new subscription_types_1.SubscriptionServiceError(`Product ${productCode} has no recorded Shariah approval (invariant 42a/44b) -- SubscriptionService refuses to originate a new holding against an unapproved product. This is a hard governance gate, not a bug: no transaction requiring Shariah approval deploys unapproved (invariant 12).`);
        }
        return { investor, product };
    }
    async getInForceSheet(productCode, asOf) {
        return this.prisma.productParameters.findFirst({
            where: { productCode, approvedByUserId: { not: null }, effectiveFrom: { lte: asOf } },
            orderBy: { effectiveFrom: 'desc' },
        });
    }
    async initiateSubscription(input) {
        if (input.amountKobo <= 0n)
            throw new subscription_types_1.SubscriptionServiceError('amountKobo must be positive.');
        await this.assertInvestorAndProductEligible(input.investorId, input.productCode);
        const sheet = await this.getInForceSheet(input.productCode, input.effectiveDate);
        if (sheet) {
            const hasExistingHolding = await this.prisma.productAccount.findFirst({ where: { investorId: input.investorId, productCode: input.productCode, status: 'ACTIVE' } });
            const floorKobo = hasExistingHolding ? (sheet.minimumAdditionalInvestmentKobo ?? sheet.minimumSubscriptionKobo) : sheet.minimumSubscriptionKobo;
            if (floorKobo != null && input.amountKobo < floorKobo) {
                throw new subscription_types_1.SubscriptionServiceError(`Subscription amount ${input.amountKobo} kobo is below the governed minimum (${floorKobo} kobo) on ${input.productCode}'s approved prospectus sheet (invariant 70b).`);
            }
        }
        const request = await this.prisma.subscriptionRequest.create({
            data: {
                requestType: 'SUBSCRIPTION',
                investorId: input.investorId,
                productCode: input.productCode,
                amountKobo: input.amountKobo,
                effectiveDate: input.effectiveDate,
                initiatedByUserId: input.initiatedByUserId,
                status: 'PENDING',
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'SUBSCRIPTION_APPROVAL',
                entityType: 'subscription_request',
                entityId: request.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
                amountKobo: input.amountKobo,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'subscription_request',
                entityId: request.id,
                after: { workflowTypeCode: 'SUBSCRIPTION_APPROVAL', reason: err.message },
            });
            await this.prisma.subscriptionRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.subscriptionRequest.update({
            where: { id: request.id },
            data: { workflowInstanceId: instance.id },
        });
    }
    async initiateRedemption(input) {
        if (input.amountKobo <= 0n)
            throw new subscription_types_1.SubscriptionServiceError('amountKobo must be positive.');
        await this.prisma.investor.findUniqueOrThrow({ where: { investorId: input.investorId } });
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: input.productCode } });
        if (product.status !== 'ACTIVE') {
            throw new subscription_types_1.SubscriptionServiceError(`Product ${input.productCode} is not ACTIVE (status=${product.status}) -- cannot redeem.`);
        }
        const sheet = await this.getInForceSheet(input.productCode, input.effectiveDate);
        if (sheet) {
            if (sheet.minimumRedemptionKobo != null && input.amountKobo < sheet.minimumRedemptionKobo) {
                throw new subscription_types_1.SubscriptionServiceError(`Redemption amount ${input.amountKobo} kobo is below the governed minimum (${sheet.minimumRedemptionKobo} kobo) on ${input.productCode}'s approved prospectus sheet (invariant 70b).`);
            }
            if (product.engineType === 'PSR_WATERFALL' && sheet.poolTenorMonths != null) {
                const account = await this.prisma.productAccount.findFirst({ where: { investorId: input.investorId, productCode: input.productCode, status: 'ACTIVE' } });
                if (account) {
                    const elapsedMonths = (input.effectiveDate.getTime() - account.startDate.getTime()) / (30.4375 * 24 * 60 * 60 * 1000);
                    if (elapsedMonths < sheet.poolTenorMonths) {
                        throw new subscription_types_1.SubscriptionServiceError(`Redemption refused: this holding is within its ${sheet.poolTenorMonths}-month lock-in (started ${account.startDate.toISOString().slice(0, 10)}, ${elapsedMonths.toFixed(1)} months elapsed). Early exit requires the early-exit/penalty-to-charity process -- PARKED pending a specified penalty rate (see QUESTIONS_FOR_REVIEW.md), never a silent bypass through the standard redemption path (invariant 70b).`);
                    }
                }
            }
        }
        const request = await this.prisma.subscriptionRequest.create({
            data: {
                requestType: 'REDEMPTION',
                investorId: input.investorId,
                productCode: input.productCode,
                amountKobo: input.amountKobo,
                effectiveDate: input.effectiveDate,
                initiatedByUserId: input.initiatedByUserId,
                status: 'PENDING',
            },
        });
        let instance;
        try {
            instance = await this.workflow.initiate({
                workflowTypeCode: 'REDEMPTION_APPROVAL',
                entityType: 'subscription_request',
                entityId: request.id,
                initiatedByUserId: input.initiatedByUserId,
                scenario: 'STANDARD',
                amountKobo: input.amountKobo,
            });
        }
        catch (err) {
            await this.audit.record({
                actorUserId: input.initiatedByUserId,
                action: 'INITIATE_FAILED_COMPENSATED',
                entityType: 'subscription_request',
                entityId: request.id,
                after: { workflowTypeCode: 'REDEMPTION_APPROVAL', reason: err.message },
            });
            await this.prisma.subscriptionRequest.delete({ where: { id: request.id } });
            throw err;
        }
        return this.prisma.subscriptionRequest.update({
            where: { id: request.id },
            data: { workflowInstanceId: instance.id },
        });
    }
    async approveSubscription(input) {
        const request = await this.prisma.subscriptionRequest.findFirstOrThrow({
            where: { workflowInstanceId: input.workflowInstanceId },
        });
        if (request.status !== 'PENDING') {
            throw new subscription_types_1.SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not PENDING -- already decided.`);
        }
        const { product } = await this.assertInvestorAndProductEligible(request.investorId, request.productCode);
        if (product.engineType === 'PSR_WATERFALL' && request.computedUnits != null) {
            throw new subscription_types_1.SubscriptionServiceError('PSR_WATERFALL (pool) products never carry a unit computation -- AMD-01.');
        }
        let computedUnits = null;
        let navPerUnitUsed = null;
        let ledgerEntityCode;
        if (product.engineType === 'UNIT_NAV') {
            const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
            ledgerEntityCode = entity.code;
            const navRecord = await this.prisma.navRecord.findUnique({
                where: { ledgerEntityCode_valuationDate: { ledgerEntityCode, valuationDate: request.effectiveDate } },
            });
            if (!navRecord) {
                throw new subscription_types_1.SubscriptionServiceError(`No published NAV for ${ledgerEntityCode} on ${request.effectiveDate.toISOString().slice(0, 10)} -- forward-pricing rule (invariant 42a): publish NAV for that date first, then approve. Never falls back to a stale NAV.`);
            }
            navPerUnitUsed = Number(navRecord.navPerUnit);
            computedUnits = (Number(request.amountKobo) / 100) / navPerUnitUsed;
            const sheet = await this.getInForceSheet(product.code, request.effectiveDate);
            if (sheet?.authorizedUnits != null) {
                const issued = await this.prisma.productAccount.aggregate({
                    where: { productCode: product.code, status: 'ACTIVE' },
                    _sum: { unitsHeld: true },
                });
                const issuedSoFar = Number(issued._sum.unitsHeld ?? 0);
                const authorized = Number(sheet.authorizedUnits);
                if (issuedSoFar + computedUnits > authorized) {
                    throw new subscription_types_1.SubscriptionServiceError(`Subscription refused: issuing ${computedUnits.toFixed(6)} units would bring total units in issue to ${(issuedSoFar + computedUnits).toFixed(6)}, exceeding ${product.code}'s authorized units cap (${authorized}) on its approved prospectus sheet (invariant 70b).`);
                }
            }
        }
        else if (product.engineType === 'PSR_WATERFALL') {
            const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
            ledgerEntityCode = entity.code;
        }
        else {
            const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: product.code } });
            ledgerEntityCode = entity.code;
        }
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED') {
            return this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: request.id } });
        }
        if (product.engineType === 'MANDATE') {
            const mandate = await this.ndMandate.createMandate({
                mandateRef: `SUB-${request.id}`,
                ledgerEntityCode: ledgerEntityCode,
                participantType: 'INVESTOR',
                investorId: request.investorId,
                sharingMode: 'MUDARABAH_PSR',
                investorRatio: 0.7,
                mudaribRatio: 0.3,
                startDate: request.effectiveDate,
                createdByUserId: request.initiatedByUserId,
                committedCapitalKobo: request.amountKobo,
            });
            await this.ndMandate.activateMandate({ ndMandateAccountId: mandate.id, activatedByUserId: input.approverUserId });
            const finalRequest = await this.prisma.subscriptionRequest.update({
                where: { id: request.id },
                data: { status: 'APPROVED', resultNdMandateAccountId: mandate.id, decidedAt: new Date() },
            });
            await this.audit.record({ actorUserId: input.approverUserId, action: 'CREATE', entityType: 'subscription_request', entityId: request.id, after: { resultNdMandateAccountId: mandate.id } });
            const productClass = mandate.sharingMode === 'WAKALAH' ? 'ND_WAKALAH' : 'POOL_ND_PSR';
            const tenorLabel = mandate.maturityDate ? `${mandate.startDate.toISOString().slice(0, 10)} – ${mandate.maturityDate.toISOString().slice(0, 10)}` : 'Open-ended (per mandate terms)';
            const snapshot = productClass === 'ND_WAKALAH'
                ? { principalKobo: mandate.committedCapitalKobo.toString(), tenorLabel, wakalahFeeRatePa: mandate.wakalahFeeRatePa ? Number(mandate.wakalahFeeRatePa) : null, expectedProfitPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null }
                : { principalKobo: mandate.committedCapitalKobo.toString(), tenorLabel, investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null, mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null, targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null };
            await this.certificate.issueOrQueueCertificate({
                investorId: request.investorId, productClass, ndMandateAccountId: mandate.id, dataSnapshot: snapshot, triggeredByUserId: input.approverUserId,
            });
            return finalRequest;
        }
        const account = await this.prisma.productAccount.create({
            data: {
                investorId: request.investorId,
                productCode: request.productCode,
                startDate: request.effectiveDate,
                principalOrCommittedKobo: request.amountKobo,
                unitsHeld: computedUnits,
            },
        });
        await this.ledger.createTxn({
            txnType: 'SUBSCRIPTION',
            ledgerEntityCode: ledgerEntityCode,
            productAccountId: account.id,
            valueDate: request.effectiveDate,
            amountKobo: request.amountKobo,
            makerUserId: request.initiatedByUserId,
            payerBankAccountId: input.payerBankAccountId,
            thirdPartyPayer: input.thirdPartyPayer,
        });
        await this.eventJournal.generateAndRequestPosting({
            eventType: 'CAPITAL_PLACEMENT_RECEIVED',
            ledgerEntityCode: ledgerEntityCode,
            entryDate: request.effectiveDate,
            amountKobo: request.amountKobo,
            referenceTokens: { investor_id: request.investorId, date: request.effectiveDate.toISOString().slice(0, 10) },
            createdByUserId: input.journalInitiatorUserId,
        });
        const finalRequest = await this.prisma.subscriptionRequest.update({
            where: { id: request.id },
            data: {
                status: 'APPROVED',
                resultProductAccountId: account.id,
                computedUnits,
                navPerUnitUsed,
                decidedAt: new Date(),
            },
        });
        await this.audit.record({ actorUserId: input.approverUserId, action: 'CREATE', entityType: 'subscription_request', entityId: request.id, after: { resultProductAccountId: account.id } });
        if (product.engineType === 'UNIT_NAV') {
            const hfSnapshot = { unitsAllotted: computedUnits, navPerUnitAtAllotment: navPerUnitUsed, allotmentDate: request.effectiveDate.toISOString().slice(0, 10) };
            await this.certificate.issueOrQueueCertificate({
                investorId: request.investorId, productClass: 'HF_UNIT_NAV', productAccountId: account.id, dataSnapshot: hfSnapshot, triggeredByUserId: input.approverUserId,
            });
        }
        else {
            const tenorLabel = account.maturityDate ? `${account.startDate.toISOString().slice(0, 10)} – ${account.maturityDate.toISOString().slice(0, 10)}` : 'Open-ended (per product terms)';
            const poolSnapshot = {
                principalKobo: account.principalOrCommittedKobo.toString(), tenorLabel,
                investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
                mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
                targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null,
            };
            await this.certificate.issueOrQueueCertificate({
                investorId: request.investorId, productClass: 'POOL_ND_PSR', productAccountId: account.id, dataSnapshot: poolSnapshot, triggeredByUserId: input.approverUserId,
            });
        }
        return finalRequest;
    }
    async approveRedemption(input) {
        const request = await this.prisma.subscriptionRequest.findFirstOrThrow({
            where: { workflowInstanceId: input.workflowInstanceId },
        });
        if (request.status !== 'PENDING') {
            throw new subscription_types_1.SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not PENDING -- already decided.`);
        }
        const account = await this.prisma.productAccount.findFirstOrThrow({
            where: { investorId: request.investorId, productCode: request.productCode, status: 'ACTIVE' },
        });
        const entity = await this.prisma.ledgerEntity.findFirstOrThrow({ where: { productCode: request.productCode } });
        const updated = await this.workflow.approveNextStep(input.workflowInstanceId, input.approverUserId);
        if (updated.status !== 'APPROVED') {
            return this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: request.id } });
        }
        await this.ledger.createTxn({
            txnType: 'REDEMPTION',
            ledgerEntityCode: entity.code,
            productAccountId: account.id,
            valueDate: request.effectiveDate,
            amountKobo: request.amountKobo,
            makerUserId: request.initiatedByUserId,
            payoutBankAccountId: input.payoutBankAccountId,
        });
        const finalRequest = await this.prisma.subscriptionRequest.update({
            where: { id: request.id },
            data: { status: 'APPROVED', resultProductAccountId: account.id, decidedAt: new Date() },
        });
        await this.audit.record({ actorUserId: input.approverUserId, action: 'UPDATE', entityType: 'subscription_request', entityId: request.id, after: { redeemedKobo: request.amountKobo.toString() } });
        return finalRequest;
    }
    async confirmDepositAndSetTarget(input) {
        if (input.targetReturnPct <= 0 || input.targetReturnPct > 100) {
            throw new subscription_types_1.SubscriptionServiceError('targetReturnPct must be a percentage between 0 and 100 (exclusive of 0).');
        }
        const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: input.subscriptionRequestId } });
        if (request.status !== 'APPROVED') {
            throw new subscription_types_1.SubscriptionServiceError(`subscription_request ${request.id} is ${request.status}, not APPROVED — the account must exist before deposit/target confirmation.`);
        }
        if (request.requestType !== 'SUBSCRIPTION') {
            throw new subscription_types_1.SubscriptionServiceError('Deposit/target confirmation only applies to SUBSCRIPTION requests, never REDEMPTION.');
        }
        const product = await this.prisma.product.findUniqueOrThrow({ where: { code: request.productCode } });
        if (product.engineType !== 'PSR_WATERFALL' && product.engineType !== 'MANDATE') {
            throw new subscription_types_1.SubscriptionServiceError(`${product.code} is engineType ${product.engineType} — targeted return at subscription applies only to POOL (PSR_WATERFALL) and MANDATE classes, never UNIT_NAV (invariant 44a).`);
        }
        await this.assertCapability(input.confirmedByUserId, 'SUBSCRIPTION_TARGET_CONFIRMATION', 'INITIATE', 'confirm deposit and set target return / maturity');
        if (input.confirmedByUserId === request.initiatedByUserId) {
            throw new subscription_types_1.SubscriptionServiceError('The Fund Accountant confirming deposit/target cannot be the same user who initiated this subscription request (maker≠checker).');
        }
        if (product.engineType === 'MANDATE') {
            if (!request.resultNdMandateAccountId)
                throw new subscription_types_1.SubscriptionServiceError(`subscription_request ${request.id} has no resultNdMandateAccountId — cannot confirm.`);
            const existing = await this.prisma.ndMandateAccount.findUniqueOrThrow({ where: { id: request.resultNdMandateAccountId } });
            if (existing.targetReturnPct != null) {
                throw new subscription_types_1.SubscriptionServiceError(`Target return is already confirmed for mandate ${existing.id} (${existing.targetReturnPct}%) — this step is one-time, not an amendment (use the Mandate Amendment flow for a later change).`);
            }
            const mandate = await this.prisma.ndMandateAccount.update({
                where: { id: request.resultNdMandateAccountId },
                data: { targetReturnPct: input.targetReturnPct, maturityDate: input.maturityDate, profitPaymentInterval: input.profitPaymentInterval },
            });
            await this.audit.record({
                actorUserId: input.confirmedByUserId, action: 'UPDATE', entityType: 'nd_mandate_account', entityId: mandate.id,
                after: { targetReturnPct: input.targetReturnPct, maturityDate: input.maturityDate.toISOString(), profitPaymentInterval: input.profitPaymentInterval ?? null, confirmedDeposit: true },
            });
            const tenorLabel = `${mandate.startDate.toISOString().slice(0, 10)} – ${input.maturityDate.toISOString().slice(0, 10)}`;
            const productClass = mandate.sharingMode === 'WAKALAH' ? 'ND_WAKALAH' : 'POOL_ND_PSR';
            const snapshot = productClass === 'ND_WAKALAH'
                ? { principalKobo: mandate.committedCapitalKobo.toString(), tenorLabel, wakalahFeeRatePa: mandate.wakalahFeeRatePa ? Number(mandate.wakalahFeeRatePa) : null, expectedProfitPct: input.targetReturnPct }
                : { principalKobo: mandate.committedCapitalKobo.toString(), tenorLabel, investorRatioPct: mandate.investorRatio ? Number(mandate.investorRatio) : null, mudaribRatioPct: mandate.mudaribRatio ? Number(mandate.mudaribRatio) : null, targetReturnPct: input.targetReturnPct };
            await this.certificate.issueOrQueueCertificate({
                investorId: request.investorId, productClass, ndMandateAccountId: mandate.id, dataSnapshot: snapshot, triggeredByUserId: input.confirmedByUserId,
            });
            return mandate;
        }
        if (!request.resultProductAccountId)
            throw new subscription_types_1.SubscriptionServiceError(`subscription_request ${request.id} has no resultProductAccountId — cannot confirm.`);
        const existingAccount = await this.prisma.productAccount.findUniqueOrThrow({ where: { id: request.resultProductAccountId } });
        if (existingAccount.targetReturnPctBenchmark != null) {
            throw new subscription_types_1.SubscriptionServiceError(`Target return is already confirmed for account ${existingAccount.id} (${existingAccount.targetReturnPctBenchmark}%) — this step is one-time, not an amendment.`);
        }
        const account = await this.prisma.productAccount.update({
            where: { id: request.resultProductAccountId },
            data: { targetReturnPctBenchmark: input.targetReturnPct, maturityDate: input.maturityDate, profitPaymentInterval: input.profitPaymentInterval },
        });
        await this.audit.record({
            actorUserId: input.confirmedByUserId, action: 'UPDATE', entityType: 'product_account', entityId: account.id,
            after: { targetReturnPctBenchmark: input.targetReturnPct, maturityDate: input.maturityDate.toISOString(), profitPaymentInterval: input.profitPaymentInterval ?? null, confirmedDeposit: true },
        });
        const tenorLabel = `${account.startDate.toISOString().slice(0, 10)} – ${input.maturityDate.toISOString().slice(0, 10)}`;
        const poolSnapshot = {
            principalKobo: account.principalOrCommittedKobo.toString(), tenorLabel,
            investorRatioPct: account.psrInvestorPct ? Number(account.psrInvestorPct) : null,
            mudaribRatioPct: account.psrMudaribPct ? Number(account.psrMudaribPct) : null,
            targetReturnPct: input.targetReturnPct,
        };
        await this.certificate.issueOrQueueCertificate({
            investorId: request.investorId, productClass: 'POOL_ND_PSR', productAccountId: account.id, dataSnapshot: poolSnapshot, triggeredByUserId: input.confirmedByUserId,
        });
        return account;
    }
    async rejectRequest(workflowInstanceId, approverUserId, notes) {
        const request = await this.prisma.subscriptionRequest.findFirstOrThrow({ where: { workflowInstanceId } });
        await this.workflow.reject(workflowInstanceId, approverUserId, notes);
        return this.prisma.subscriptionRequest.update({
            where: { id: request.id },
            data: { status: 'REJECTED', rejectionReason: notes, decidedAt: new Date() },
        });
    }
    async listRequests(filter = {}) {
        return this.prisma.subscriptionRequest.findMany({
            where: {
                productCode: filter.productCode,
                investorId: filter.investorId,
                requestType: filter.requestType,
                status: filter.status,
            },
            include: {
                investor: { select: { investorId: true, fullLegalName: true } },
                product: { select: { code: true, name: true, engineType: true } },
                initiator: { select: { id: true, displayName: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getRequest(id) {
        const request = await this.prisma.subscriptionRequest.findUniqueOrThrow({
            where: { id },
            include: {
                investor: { select: { investorId: true, fullLegalName: true, contactEmail: true } },
                product: { select: { code: true, name: true, engineType: true } },
                initiator: { select: { id: true, displayName: true, email: true } },
            },
        });
        let targetConfirmation = null;
        if (request.resultProductAccountId) {
            const account = await this.prisma.productAccount.findUnique({ where: { id: request.resultProductAccountId } });
            if (account)
                targetConfirmation = { targetReturnPct: account.targetReturnPctBenchmark ? Number(account.targetReturnPctBenchmark) : null, maturityDate: account.maturityDate?.toISOString() ?? null };
        }
        else if (request.resultNdMandateAccountId) {
            const mandate = await this.prisma.ndMandateAccount.findUnique({ where: { id: request.resultNdMandateAccountId } });
            if (mandate)
                targetConfirmation = { targetReturnPct: mandate.targetReturnPct ? Number(mandate.targetReturnPct) : null, maturityDate: mandate.maturityDate?.toISOString() ?? null };
        }
        return { ...request, targetConfirmation };
    }
    async initiatePortalRedemption(investorId, productAccountId, amountKobo) {
        const account = await this.prisma.productAccount.findUniqueOrThrow({ where: { id: productAccountId } });
        if (account.investorId !== investorId) {
            throw new subscription_types_1.SubscriptionServiceError('This holding does not belong to the requesting investor.');
        }
        const systemUserId = await this.systemPortalClientUserId();
        return this.initiateRedemption({
            investorId,
            productCode: account.productCode,
            amountKobo,
            effectiveDate: new Date(),
            initiatedByUserId: systemUserId,
        });
    }
    async systemPortalClientUserId() {
        const email = 'system-portal-client@one17.test';
        let user = await this.prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            user = await this.prisma.appUser.create({ data: { email, displayName: 'System Portal Client' } });
        }
        const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
        if (!hasRole) {
            await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PORTAL_CLIENT' } });
        }
        return user.id;
    }
    async initiatePortalSubscription(investorId, productCode, amountKobo) {
        const systemUserId = await this.systemPaymentGatewayUserId();
        return this.initiateSubscription({
            investorId,
            productCode,
            amountKobo,
            effectiveDate: new Date(),
            initiatedByUserId: systemUserId,
        });
    }
    async systemPaymentGatewayUserId() {
        const email = 'system-payment-gateway@one17.test';
        let user = await this.prisma.appUser.findUnique({ where: { email } });
        if (!user) {
            user = await this.prisma.appUser.create({ data: { email, displayName: 'System Payment Gateway' } });
        }
        const hasRole = await this.prisma.userRole.findFirst({ where: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
        if (!hasRole) {
            await this.prisma.userRole.create({ data: { userId: user.id, roleCode: 'SYSTEM_PAYMENT_GATEWAY' } });
        }
        return user.id;
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        workflow_service_1.WorkflowEngineService,
        ledger_service_1.LedgerService,
        nd_mandate_engine_service_1.NdMandateEngineService,
        event_journal_service_1.EventJournalService,
        certificate_service_1.CertificateService,
        delegation_service_1.DelegationService])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map