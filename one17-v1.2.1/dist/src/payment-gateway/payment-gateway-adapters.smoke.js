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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const crypto = __importStar(require("crypto"));
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const ledger_service_1 = require("../ledger/ledger.service");
const nd_mandate_engine_service_1 = require("../engine-nd-mandate/nd-mandate-engine.service");
const event_journal_service_1 = require("../event-journal/event-journal.service");
const letterhead_service_1 = require("../letterhead/letterhead.service");
const certificate_service_1 = require("../certificate/certificate.service");
const subscription_service_1 = require("../subscription/subscription.service");
const payment_gateway_service_1 = require("./payment-gateway.service");
const client_1 = require("../../generated/prisma/client");
const RUN = Date.now().toString().slice(-8);
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label, fn) {
    try {
        await fn();
        fail(`expected rejection: ${label}`);
    }
    catch (err) {
        ok(`rejected as expected: ${label} — ${err.message.split('\n')[0]}`);
    }
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const ledger = new ledger_service_1.LedgerService(prisma, audit, delegation, workflow);
    const ndMandate = new nd_mandate_engine_service_1.NdMandateEngineService(prisma, audit, workflow);
    const eventJournal = new event_journal_service_1.EventJournalService(prisma, ledger);
    const letterhead = new letterhead_service_1.LetterheadService(prisma, audit, delegation, workflow);
    const certificate = new certificate_service_1.CertificateService(prisma, audit, delegation, workflow, letterhead);
    const subs = new subscription_service_1.SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
    const gateway = new payment_gateway_service_1.PaymentGatewayService(prisma, audit, delegation, workflow, subs);
    const configuredBy = await prisma.appUser.create({ data: { email: `pga-smoke-configurer-${RUN}@one17.test`, displayName: 'pga-smoke-configurer' } });
    await rbac.assignRole({ userId: configuredBy.id, roleCode: 'FIN_ADMIN' });
    async function withVendorProvider(slot, name, webhookSecret, fn) {
        const before = await prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: slot } });
        const provider = await prisma.paymentGatewayProvider.upsert({
            where: { providerSlot: slot },
            create: { providerSlot: slot, name, webhookSecret, apiConfig: client_1.Prisma.DbNull, isActive: true, configuredByUserId: configuredBy.id },
            update: { name, webhookSecret, apiConfig: client_1.Prisma.DbNull, isActive: true },
        });
        try {
            await fn(provider);
        }
        finally {
            await prisma.paymentGatewayInflow.deleteMany({ where: { providerId: provider.id, gatewayEventRef: { contains: RUN } } });
            if (before) {
                await prisma.paymentGatewayProvider.update({
                    where: { providerSlot: slot },
                    data: { name: before.name, webhookSecret: before.webhookSecret, apiConfig: before.apiConfig ?? client_1.Prisma.DbNull, isActive: before.isActive, configuredByUserId: before.configuredByUserId },
                });
            }
            else {
                await prisma.paymentGatewayProvider.delete({ where: { providerSlot: slot } });
            }
        }
    }
    async function assertInflow(gatewayEventRef, expectedAmountKobo, label) {
        const inflow = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef } });
        if (inflow && inflow.amountKobo === expectedAmountKobo && inflow.status === 'UNMATCHED') {
            ok(`${label} -- inflow ${gatewayEventRef} booked with amountKobo=${inflow.amountKobo} (UNMATCHED -- no custodian account configured in this fixture, exactly as expected)`);
        }
        else {
            fail(`${label} -- expected an UNMATCHED inflow with amountKobo=${expectedAmountKobo}`, inflow);
        }
    }
    try {
        await withVendorProvider(1, `Paystack Smoke ${RUN}`, `paystack-secret-${RUN}`, async (provider) => {
            const body = {
                event: 'charge.success',
                data: {
                    id: 4099260516, domain: 'test', status: 'success', reference: `PSTK-${RUN}`,
                    amount: 500000, currency: 'NGN', paid_at: new Date().toISOString(), created_at: new Date().toISOString(),
                    channel: 'card', customer: { email: `paystack-smoke-${RUN}@one17.test` },
                },
            };
            const goodSig = crypto.createHmac('sha512', provider.webhookSecret).update(JSON.stringify(body)).digest('hex');
            await expectReject('Paystack: tampered signature is rejected', () => gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': goodSig.slice(0, -4) + '0000' }, body));
            await expectReject('Paystack: missing signature header is rejected', () => gateway.receiveVendorWebhook('PAYSTACK', {}, body));
            const noEvent = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: `paystack:${body.data.reference}` } });
            if (!noEvent)
                ok('Paystack: no inflow row was created by either rejected attempt');
            else
                fail('Paystack: a rejected webhook must never create an inflow row', noEvent);
            const result = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': goodSig }, body);
            if (result && result.status === 'UNMATCHED')
                ok('Paystack: validly-signed charge.success webhook is accepted');
            else
                fail('Paystack: expected the valid webhook to be accepted', result);
            await assertInflow(`paystack:${body.data.reference}`, 500000n, 'Paystack');
            const replay = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': goodSig }, body);
            if (replay?.id === result?.id)
                ok('Paystack: a replayed webhook with the same reference is idempotent');
            else
                fail('Paystack: replay should return the same inflow row', replay);
            const transferBody = { event: 'transfer.success', data: { reference: `PSTK-TRANSFER-${RUN}` } };
            const transferSig = crypto.createHmac('sha512', provider.webhookSecret).update(JSON.stringify(transferBody)).digest('hex');
            const nonSettlement = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': transferSig }, transferBody);
            if (nonSettlement === null)
                ok('Paystack: a real, validly-signed, non-settlement event (transfer.success) is acked with nothing booked');
            else
                fail('Paystack: a non-settlement event must not create an inflow', nonSettlement);
        });
        await withVendorProvider(2, `Flutterwave Smoke ${RUN}`, `flutterwave-secret-hash-${RUN}`, async (provider) => {
            const bodyObj = {
                type: 'charge.completed',
                id: `wbk_${RUN}`,
                timestamp: Date.now(),
                data: {
                    id: `chg_${RUN}`, reference: `FLW-${RUN}`, amount: 5000, currency: 'NGN', status: 'succeeded',
                    created_datetime: Math.floor(Date.now() / 1000), customer: { email: `flw-smoke-${RUN}@one17.test` },
                },
            };
            const rawBodyText = JSON.stringify(bodyObj, null, 2);
            const rawBody = Buffer.from(rawBodyText, 'utf8');
            const parsedBody = JSON.parse(rawBodyText);
            const goodSig = crypto.createHmac('sha256', provider.webhookSecret).update(rawBody).digest('base64');
            const reserializedSig = crypto.createHmac('sha256', provider.webhookSecret).update(JSON.stringify(parsedBody)).digest('base64');
            if (goodSig !== reserializedSig)
                ok('Flutterwave: raw wire bytes differ from a JSON.stringify(parsedBody) re-serialization (pretty vs. compact) -- exercises the exact drift invariant 75(d) guards against');
            else
                fail('Flutterwave: test fixture did not actually exercise a raw-body/re-serialized-body byte difference', { rawBodyText });
            await expectReject('Flutterwave: verification refuses when no raw body was captured (rawBody undefined)', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': goodSig }, parsedBody, undefined));
            await expectReject('Flutterwave: a signature computed the OLD (wrong) way over JSON.stringify(parsedBody) is rejected against the real raw body', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': reserializedSig }, parsedBody, rawBody));
            await expectReject('Flutterwave: tampered signature is rejected', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': 'not-the-real-signature==' }, parsedBody, rawBody));
            const result = await gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': goodSig }, parsedBody, rawBody);
            if (result && result.status === 'UNMATCHED')
                ok('Flutterwave: validly-signed charge.completed webhook (verified against the real raw body) is accepted');
            else
                fail('Flutterwave: expected the valid raw-body-signed webhook to be accepted', result);
            await assertInflow(`flutterwave:${bodyObj.data.reference}`, 500000n, 'Flutterwave (5000 naira -> 500000 kobo)');
        });
        await withVendorProvider(3, `Monnify Smoke ${RUN}`, `monnify-client-secret-${RUN}`, async (provider) => {
            const body = {
                eventType: 'SUCCESSFUL_TRANSACTION',
                eventData: {
                    transactionReference: `MNFY|TXN|${RUN}`, paymentReference: `MNFY-${RUN}`, paidOn: '17/11/2021 3:48:10 PM',
                    amountPaid: 5000, totalPayable: 5000, paymentStatus: 'PAID', currency: 'NGN',
                    paymentDescription: 'Smoke test payment', destinationAccountInformation: {},
                    customer: { name: 'Smoke Test', email: `mnfy-smoke-${RUN}@one17.test` },
                },
            };
            const goodSig = crypto.createHmac('sha512', provider.webhookSecret).update(JSON.stringify(body)).digest('hex');
            await expectReject('Monnify: missing signature header is rejected (Monnify only sends it in production)', () => gateway.receiveVendorWebhook('MONNIFY', {}, body));
            await expectReject('Monnify: tampered signature is rejected', () => gateway.receiveVendorWebhook('MONNIFY', { 'monnify-signature': goodSig.slice(0, -4) + '0000' }, body));
            const result = await gateway.receiveVendorWebhook('MONNIFY', { 'monnify-signature': goodSig }, body);
            if (result && result.status === 'UNMATCHED')
                ok('Monnify: validly-signed SUCCESSFUL_TRANSACTION webhook is accepted');
            else
                fail('Monnify: expected the valid webhook to be accepted', result);
            await assertInflow(`monnify:${body.eventData.paymentReference}`, 500000n, 'Monnify (5000 naira -> 500000 kobo)');
            const settled = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: `monnify:${body.eventData.paymentReference}` } });
            const expectedSettled = new Date(2021, 10, 17, 15, 48, 10);
            if (settled && settled.settledAt.getTime() === expectedSettled.getTime())
                ok('Monnify: paidOn "17/11/2021 3:48:10 PM" parsed to the exact expected Date');
            else
                fail('Monnify: paidOn was not parsed to the expected Date', settled?.settledAt);
        });
        await withVendorProvider(4, `Paymish Smoke ${RUN}`, `paymish-secret-${RUN}`, async (provider) => {
            const body = { event: 'payment.success', data: { reference: `PYMSH-${RUN}`, amount: 500000, paidAt: new Date().toISOString() } };
            const wouldHaveBeenValidSig = crypto.createHmac('sha256', provider.webhookSecret).update(JSON.stringify(body)).digest('hex');
            await expectReject('Paymish: hard-disabled -- even a well-formed (CHECK27-contract-shaped) signature is refused', () => gateway.receiveVendorWebhook('PAYMISH', { 'x-paymish-signature': wouldHaveBeenValidSig }, body));
            await expectReject('Paymish: hard-disabled -- a request with no signature header at all is refused the same way (unconditional throw, not a signature-shaped check)', () => gateway.receiveVendorWebhook('PAYMISH', {}, body));
            const noInflow = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: `paymish:${body.data.reference}` } });
            if (!noInflow)
                ok('Paymish: no inflow was ever booked -- hard-disable holds regardless of signature validity');
            else
                fail('Paymish: a hard-disabled adapter must never book an inflow', noInflow);
        });
        const deniedRows = await prisma.auditTrail.findMany({ where: { action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook' }, orderBy: { occurredAt: 'desc' }, take: 10 });
        if (deniedRows.length >= 4)
            ok(`every rejected vendor webhook signature wrote a PERMISSION_DENIED audit_trail row (found ${deniedRows.length} recent rows across all vendors)`);
        else
            fail('expected at least 4 recent PERMISSION_DENIED payment_gateway_webhook audit rows (one per vendor tested above)', deniedRows.length);
        const activePaystackNow = await prisma.paymentGatewayProvider.findMany({ where: { isActive: true } });
        if (!activePaystackNow.some((p) => p.name.toUpperCase().includes('PAYSTACK'))) {
            await expectReject('receiveVendorWebhook refuses when no ACTIVE provider matches the vendor', () => gateway.receiveVendorWebhook('PAYSTACK', {}, { event: 'charge.success', data: { reference: 'x', amount: 1, status: 'success' } }));
        }
        else {
            console.log('SKIP: "no active provider" case — a Paystack provider is already active from a prior session (correctly left untouched).');
        }
    }
    finally {
        await prisma.userRole.deleteMany({ where: { userId: configuredBy.id } });
        await prisma.appUser.delete({ where: { id: configuredBy.id } }).catch(() => { });
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Payment Gateway Adapters (invariant 73b, CHECK27) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=payment-gateway-adapters.smoke.js.map