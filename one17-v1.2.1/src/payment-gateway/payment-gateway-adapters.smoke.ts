// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/payment-gateway/payment-gateway-adapters.smoke.ts
//
// Invariant 73(b) (CHECK27): unit-proves the REAL vendor adapters
// (Paystack/Flutterwave/Monnify/Paymish, src/payment-gateway/adapters/)
// added on top of the CHECK12 payment-gateway.smoke.ts baseline. For EACH
// vendor: (a) a validly-signed webhook -- signature computed HERE with a
// KNOWN test secret + KNOWN test payload, using the EXACT algorithm each
// adapter's own header comment cites the vendor's real docs for -- is
// accepted and parsed into a real PaymentGatewayInflow row with the
// correct canonical fields (amountKobo unit-converted per vendor,
// gatewayEventRef, settledAt); (b) a tampered signature is REJECTED
// (PaymentGatewayService.receiveVendorWebhook throws, a PERMISSION_DENIED
// audit_trail row is written, no inflow row is created). Per invariant
// 75(d) (CHECK28, v1.2.1 audit remediation): Flutterwave is now verified
// against the RAW request body, not JSON.stringify(parsedBody) (see the
// FLUTTERWAVE block's rawBody-vs-reserialized sandbox-test proof below);
// Paymish is HARD-DISABLED (see paymish.adapter.ts and
// QUESTIONS_FOR_REVIEW.md -- no real vendor spec was ever found) and its
// block below proves the disabled state instead of exercising a contract.
//
// Deliberately does NOT exercise verifyTransaction() (the outbound
// vendor-API call) -- that needs a real network call against a live
// vendor with a real credential, which is exactly what invariant 73(d)
// says an adapter ships WITHOUT ("adapters ship inert"). Deliberately does
// NOT re-prove custodian-matching/promotion/suspense-queue/reject/reversal
// -- payment-gateway.smoke.ts (CHECK12) already proves that machinery
// end-to-end via the legacy synthetic payload; this file's job is proving
// the NEW adapters' signature verification + parsing only.
//
// Provider rows for slots 1-4 are a SHARED, NOT RUN-scoped, global
// resource (same caveat payment-gateway.smoke.ts documents for slot 1) --
// this file writes directly via prisma (bypassing the propose/approve
// workflow entirely, since that workflow is already proven by
// payment-gateway.smoke.ts) and restores each slot's prior state in a
// finally block, exactly mirroring bureau-gateway.smoke.ts's
// slot1Before/restore discipline.
import 'dotenv/config';
import * as crypto from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { AuditService } from '../audit/audit.service';
import { RbacService } from '../rbac/rbac.service';
import { AuthService } from '../auth/auth.service';
import { MfaService } from '../mfa/mfa.service';
import { DelegationService } from '../delegation/delegation.service';
import { WorkflowEngineService } from '../workflow/workflow.service';
import { LedgerService } from '../ledger/ledger.service';
import { NdMandateEngineService } from '../engine-nd-mandate/nd-mandate-engine.service';
import { EventJournalService } from '../event-journal/event-journal.service';
import { LetterheadService } from '../letterhead/letterhead.service';
import { CertificateService } from '../certificate/certificate.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { PaymentGatewayService } from './payment-gateway.service';
import { Prisma, PaymentGatewayProvider } from '../../generated/prisma/client';

const RUN = Date.now().toString().slice(-8);
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  const audit = new AuditService(prisma);
  const delegation = new DelegationService(prisma, audit);
  const workflow = new WorkflowEngineService(prisma, audit, delegation);
  const rbac = new RbacService(prisma, audit, workflow, new AuthService(prisma, audit, new MfaService(prisma, audit)));
  const ledger = new LedgerService(prisma, audit, delegation, workflow);
  const ndMandate = new NdMandateEngineService(prisma, audit, workflow);
  const eventJournal = new EventJournalService(prisma, ledger);
  const letterhead = new LetterheadService(prisma, audit, delegation, workflow);
  const certificate = new CertificateService(prisma, audit, delegation, workflow, letterhead);
  const subs = new SubscriptionService(prisma, audit, workflow, ledger, ndMandate, eventJournal, certificate, delegation);
  const gateway = new PaymentGatewayService(prisma, audit, delegation, workflow, subs);

  const configuredBy = await prisma.appUser.create({ data: { email: `pga-smoke-configurer-${RUN}@one17.test`, displayName: 'pga-smoke-configurer' } });
  await rbac.assignRole({ userId: configuredBy.id, roleCode: 'FIN_ADMIN' });

  // Directly upserts provider slot N to a known fixture, runs `fn`, then
  // ALWAYS restores the slot's prior state (or deletes it if it didn't
  // exist before) -- never leaves test data sitting in a real config slot,
  // same discipline as bureau-gateway.smoke.ts's slot1Before restoration.
  async function withVendorProvider(slot: number, name: string, webhookSecret: string, fn: (provider: PaymentGatewayProvider) => Promise<void>) {
    const before = await prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: slot } });
    const provider = await prisma.paymentGatewayProvider.upsert({
      where: { providerSlot: slot },
      create: { providerSlot: slot, name, webhookSecret, apiConfig: Prisma.DbNull, isActive: true, configuredByUserId: configuredBy.id },
      update: { name, webhookSecret, apiConfig: Prisma.DbNull, isActive: true },
    });
    try {
      await fn(provider);
    } finally {
      // Every gatewayEventRef this file ever creates contains RUN -- clean
      // those up specifically (never a blanket delete-by-providerId, which
      // would also nuke genuine inflows if `before` was a real, pre-
      // existing provider row).
      await prisma.paymentGatewayInflow.deleteMany({ where: { providerId: provider.id, gatewayEventRef: { contains: RUN } } });
      if (before) {
        await prisma.paymentGatewayProvider.update({
          where: { providerSlot: slot },
          data: { name: before.name, webhookSecret: before.webhookSecret, apiConfig: before.apiConfig ?? Prisma.DbNull, isActive: before.isActive, configuredByUserId: before.configuredByUserId },
        });
      } else {
        await prisma.paymentGatewayProvider.delete({ where: { providerSlot: slot } });
      }
    }
  }

  async function assertInflow(gatewayEventRef: string, expectedAmountKobo: bigint, label: string) {
    const inflow = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef } });
    if (inflow && inflow.amountKobo === expectedAmountKobo && inflow.status === 'UNMATCHED') {
      ok(`${label} -- inflow ${gatewayEventRef} booked with amountKobo=${inflow.amountKobo} (UNMATCHED -- no custodian account configured in this fixture, exactly as expected)`);
    } else {
      fail(`${label} -- expected an UNMATCHED inflow with amountKobo=${expectedAmountKobo}`, inflow);
    }
  }

  try {
    // ================= PAYSTACK =================
    // https://paystack.com/docs/payments/webhooks/ -- HMAC-SHA512 hex over
    // JSON.stringify(body), header x-paystack-signature. Amount already in
    // kobo (Paystack's own subunit convention) -- no *100 conversion.
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
      if (!noEvent) ok('Paystack: no inflow row was created by either rejected attempt');
      else fail('Paystack: a rejected webhook must never create an inflow row', noEvent);

      const result = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': goodSig }, body);
      if (result && result.status === 'UNMATCHED') ok('Paystack: validly-signed charge.success webhook is accepted');
      else fail('Paystack: expected the valid webhook to be accepted', result);
      await assertInflow(`paystack:${body.data.reference}`, 500000n, 'Paystack');

      // Idempotent replay + non-settlement event type -> no new booking.
      const replay = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': goodSig }, body);
      if (replay?.id === result?.id) ok('Paystack: a replayed webhook with the same reference is idempotent');
      else fail('Paystack: replay should return the same inflow row', replay);
      const transferBody = { event: 'transfer.success', data: { reference: `PSTK-TRANSFER-${RUN}` } };
      const transferSig = crypto.createHmac('sha512', provider.webhookSecret).update(JSON.stringify(transferBody)).digest('hex');
      const nonSettlement = await gateway.receiveVendorWebhook('PAYSTACK', { 'x-paystack-signature': transferSig }, transferBody);
      if (nonSettlement === null) ok('Paystack: a real, validly-signed, non-settlement event (transfer.success) is acked with nothing booked');
      else fail('Paystack: a non-settlement event must not create an inflow', nonSettlement);
    });

    // ================= FLUTTERWAVE =================
    // https://developer.flutterwave.com/docs/webhooks -- HMAC-SHA256
    // base64 over the RAW request body (invariant 75(d), CHECK28 v1.2.1
    // audit remediation -- NOT JSON.stringify(parsedBody), which the
    // CHECK27 version of this adapter used and the independent v1.2.0
    // audit correctly flagged as not guaranteed to byte-match what
    // Flutterwave actually signed). Header flutterwave-signature. Amount
    // in NAIRA (major unit) -- *100 conversion to kobo.
    //
    // "Sandbox-test" proof (CEO directive): rawBodyText below is
    // PRETTY-PRINTED (2-space indent) -- deliberately byte-different from
    // what a compact JSON.stringify(parsedBody) re-serialization would
    // produce, exactly the drift a real HTTP body vs. a parse/re-stringify
    // round-trip can exhibit (key order, whitespace, number formatting).
    // This proves the adapter verifies against the ACTUAL wire bytes, not
    // a re-serialized approximation of them.
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
      const rawBodyText = JSON.stringify(bodyObj, null, 2); // pretty-printed -- simulates real wire bytes
      const rawBody = Buffer.from(rawBodyText, 'utf8');
      const parsedBody = JSON.parse(rawBodyText); // what Nest's body-parser would hand the adapter as parsedBody
      const goodSig = crypto.createHmac('sha256', provider.webhookSecret).update(rawBody).digest('base64');
      const reserializedSig = crypto.createHmac('sha256', provider.webhookSecret).update(JSON.stringify(parsedBody)).digest('base64');
      if (goodSig !== reserializedSig) ok('Flutterwave: raw wire bytes differ from a JSON.stringify(parsedBody) re-serialization (pretty vs. compact) -- exercises the exact drift invariant 75(d) guards against');
      else fail('Flutterwave: test fixture did not actually exercise a raw-body/re-serialized-body byte difference', { rawBodyText });

      await expectReject('Flutterwave: verification refuses when no raw body was captured (rawBody undefined)', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': goodSig }, parsedBody, undefined));
      await expectReject('Flutterwave: a signature computed the OLD (wrong) way over JSON.stringify(parsedBody) is rejected against the real raw body', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': reserializedSig }, parsedBody, rawBody));
      await expectReject('Flutterwave: tampered signature is rejected', () => gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': 'not-the-real-signature==' }, parsedBody, rawBody));

      const result = await gateway.receiveVendorWebhook('FLUTTERWAVE', { 'flutterwave-signature': goodSig }, parsedBody, rawBody);
      if (result && result.status === 'UNMATCHED') ok('Flutterwave: validly-signed charge.completed webhook (verified against the real raw body) is accepted');
      else fail('Flutterwave: expected the valid raw-body-signed webhook to be accepted', result);
      await assertInflow(`flutterwave:${bodyObj.data.reference}`, 500000n, 'Flutterwave (5000 naira -> 500000 kobo)');
    });

    // ================= MONNIFY =================
    // https://developers.monnify.com/docs/webhooks -- HMAC-SHA512 hex over
    // JSON.stringify(body) using the client secret, header monnify-signature.
    // Amount in NAIRA (major unit) -- *100 conversion to kobo. paidOn in
    // Monnify's own dd/mm/yyyy h:mm:ss AM/PM sample format.
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
      if (result && result.status === 'UNMATCHED') ok('Monnify: validly-signed SUCCESSFUL_TRANSACTION webhook is accepted');
      else fail('Monnify: expected the valid webhook to be accepted', result);
      await assertInflow(`monnify:${body.eventData.paymentReference}`, 500000n, 'Monnify (5000 naira -> 500000 kobo)');
      const settled = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: `monnify:${body.eventData.paymentReference}` } });
      const expectedSettled = new Date(2021, 10, 17, 15, 48, 10);
      if (settled && settled.settledAt.getTime() === expectedSettled.getTime()) ok('Monnify: paidOn "17/11/2021 3:48:10 PM" parsed to the exact expected Date');
      else fail('Monnify: paidOn was not parsed to the expected Date', settled?.settledAt);
    });

    // ================= PAYMISH (HARD-DISABLED, invariant 75(d)) =================
    // No real vendor documentation was ever found (see
    // QUESTIONS_FOR_REVIEW.md). The CHECK27 version of this adapter shipped
    // a GUESSED generic HMAC contract, clearly labelled as a placeholder;
    // the independent v1.2.0 audit correctly flagged that a guessed
    // financial-integrity contract is a live risk the moment it is
    // reachable at all, label or not. CHECK28 hard-disables it: the
    // adapter's own verifyWebhookSignature/parseWebhookEvent now throw
    // unconditionally with the guessed logic deleted outright (not merely
    // an early throw guarding dead code), and the controller's
    // @Post('paymish') route is deleted entirely (see
    // payment-gateway-webhook.controller.ts -- a genuine 404, not exercised
    // by this file since it calls the service directly). This block proves
    // the service-level surface is closed regardless of signature validity;
    // CHECK28_EVIDENCE.md separately documents the route-absence proof.
    await withVendorProvider(4, `Paymish Smoke ${RUN}`, `paymish-secret-${RUN}`, async (provider) => {
      const body = { event: 'payment.success', data: { reference: `PYMSH-${RUN}`, amount: 500000, paidAt: new Date().toISOString() } };
      const wouldHaveBeenValidSig = crypto.createHmac('sha256', provider.webhookSecret).update(JSON.stringify(body)).digest('hex');
      await expectReject('Paymish: hard-disabled -- even a well-formed (CHECK27-contract-shaped) signature is refused', () => gateway.receiveVendorWebhook('PAYMISH', { 'x-paymish-signature': wouldHaveBeenValidSig }, body));
      await expectReject('Paymish: hard-disabled -- a request with no signature header at all is refused the same way (unconditional throw, not a signature-shaped check)', () => gateway.receiveVendorWebhook('PAYMISH', {}, body));

      const noInflow = await prisma.paymentGatewayInflow.findUnique({ where: { gatewayEventRef: `paymish:${body.data.reference}` } });
      if (!noInflow) ok('Paymish: no inflow was ever booked -- hard-disable holds regardless of signature validity');
      else fail('Paymish: a hard-disabled adapter must never book an inflow', noInflow);
    });

    // ================= Audit trail proof for a rejected signature =================
    const deniedRows = await prisma.auditTrail.findMany({ where: { action: 'PERMISSION_DENIED', entityType: 'payment_gateway_webhook' }, orderBy: { occurredAt: 'desc' }, take: 10 });
    if (deniedRows.length >= 4) ok(`every rejected vendor webhook signature wrote a PERMISSION_DENIED audit_trail row (found ${deniedRows.length} recent rows across all vendors)`);
    else fail('expected at least 4 recent PERMISSION_DENIED payment_gateway_webhook audit rows (one per vendor tested above)', deniedRows.length);

    // ================= No active provider configured -> refused =================
    // By this point every withVendorProvider() block above has already
    // restored its slot in its own finally -- if that leaves genuinely no
    // ACTIVE provider whose name matches "PAYSTACK" (the expected state in
    // a fresh dev DB per invariant 73d: adapters ship inert, no vendor
    // contracted), receiveVendorWebhook must refuse cleanly. If a REAL
    // Paystack provider from a prior/other session is active, skip this
    // one assertion rather than touch it (same tolerance
    // bureau-gateway.smoke.ts applies to its own "no active provider" case).
    const activePaystackNow = await prisma.paymentGatewayProvider.findMany({ where: { isActive: true } });
    if (!activePaystackNow.some((p) => p.name.toUpperCase().includes('PAYSTACK'))) {
      await expectReject('receiveVendorWebhook refuses when no ACTIVE provider matches the vendor', () =>
        gateway.receiveVendorWebhook('PAYSTACK', {}, { event: 'charge.success', data: { reference: 'x', amount: 1, status: 'success' } }));
    } else {
      console.log('SKIP: "no active provider" case — a Paystack provider is already active from a prior session (correctly left untouched).');
    }
  } finally {
    await prisma.userRole.deleteMany({ where: { userId: configuredBy.id } });
    await prisma.appUser.delete({ where: { id: configuredBy.id } }).catch(() => {});
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Payment Gateway Adapters (invariant 73b, CHECK27) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
