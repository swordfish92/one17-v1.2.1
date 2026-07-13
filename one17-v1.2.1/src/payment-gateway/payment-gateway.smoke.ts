// One-off manual smoke test, not part of the Nest app or the test suite.
// Run with: npx tsx src/payment-gateway/payment-gateway.smoke.ts
// Invariant 55(a) (CHECK12): the 4th gateway on the standing adapter
// pattern. Adversarial set: masked secret never comes back over the API;
// bad signature rejected; idempotent webhook replay; reference-coded
// auto-match promotes straight through to a real SubscriptionRequest;
// unmatched stays in suspense until manually matched or rejected; a
// chargeback reverses through the GOVERNED redemption path (never a raw
// delete) and cannot be reversed twice; daily reconciliation surfaces a
// stale suspense item as a real PartialJobFailure. CEO ruling (9-Jul-2026):
// provider/custodian config changes are MD-approved (propose/approve);
// suspense-desk reject/reversal decisions require a SECOND Finance officer.
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
import { PartialJobFailure } from '../scheduler/scheduler.types';

const RUN = Date.now();
let failed = false;
function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string, detail?: unknown) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function expectReject(label: string, fn: () => unknown | Promise<unknown>) {
  try { await fn(); fail(`expected rejection: ${label}`); }
  catch (err) { ok(`rejected as expected: ${label} — ${(err as Error).message.split('\n')[0]}`); }
}

function sign(secret: string, payloadWithoutSignature: unknown): string {
  return crypto.createHmac('sha256', secret).update(JSON.stringify(payloadWithoutSignature)).digest('hex');
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

  const finadmin = await prisma.appUser.create({ data: { email: `pg-finadmin-${RUN}@one17.test`, displayName: 'pg-finadmin' } });
  await rbac.assignRole({ userId: finadmin.id, roleCode: 'FIN_ADMIN' });
  const treasuryoff = await prisma.appUser.create({ data: { email: `pg-treasuryoff-${RUN}@one17.test`, displayName: 'pg-treasuryoff' } });
  await rbac.assignRole({ userId: treasuryoff.id, roleCode: 'TREASURY_OFF' });
  const mdceo = await prisma.appUser.create({ data: { email: `pg-mdceo-${RUN}@one17.test`, displayName: 'pg-mdceo' } });
  await rbac.assignRole({ userId: mdceo.id, roleCode: 'MD_CEO' });
  const portmgr = await prisma.appUser.create({ data: { email: `pg-portmgr-${RUN}@one17.test`, displayName: 'pg-portmgr' } });
  await rbac.assignRole({ userId: portmgr.id, roleCode: 'PORT_MGR' });
  const outsider = await prisma.appUser.create({ data: { email: `pg-outsider-${RUN}@one17.test`, displayName: 'pg-outsider' } });

  const poolCode = `SMOKE-PG-POOL-${RUN}`;
  const poolProduct = await prisma.product.create({
    data: { code: `SMOKE-PG-POOL-PROD-${RUN}`, name: 'Smoke PG Pool Product', engineType: 'PSR_WATERFALL', status: 'ACTIVE', shariahApprovedAt: new Date(), shariahApprovalRef: 'SMOKE-FIXTURE-NOT-REAL' },
  });
  await prisma.ledgerEntity.create({ data: { code: poolCode, name: 'Smoke PG Pool', entityType: 'POOL', primaryBasis: 'AAOIFI', productCode: poolProduct.code } });
  await prisma.chartOfAccount.createMany({ data: [
    { ledgerEntityCode: poolCode, accountCode: '1000', accountName: 'Cash', accountType: 'ASSET', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 7' },
    { ledgerEntityCode: poolCode, accountCode: '3010', accountName: 'Investor Capital', accountType: 'EQUITY', aaoifiRef: 'FAS 1', ifrsRef: 'IAS 1' },
  ] });

  const investor = await prisma.investor.create({
    data: {
      investorId: `SMOKE-PG-INV-${RUN}`, fullLegalName: 'Smoke PG Investor', entityType: 'HNWI_INDIVIDUAL',
      nationality: 'NG', taxIdentificationNumber: `TIN-PG-${RUN}`, contactEmail: `pg-inv-${RUN}@one17.test`,
      contactPhone: '+2340000000030', registeredAddress: 'Test address', sourceOfFunds: 'Business income',
      onboardedByUserId: finadmin.id, kycStatus: 'KYC_COMPLETE', amlStatus: 'CLEARED', fundStatus: 'ACTIVE', onboardingStage: 'STAGE_2_COMPLETE',
    },
  });
  await prisma.investorBankAccount.create({ data: { investorId: investor.investorId, bankName: 'Test Bank', accountNumber: '9998887776', accountName: 'Smoke PG Investor', isPrimary: true } });

  // providerSlot 1 is a fixed 1-3 global resource (not RUN-scoped), so a
  // PRIOR run that crashed between proposeProviderConfig and
  // approveProviderConfig leaves it permanently stuck "pending approval"
  // -- this run's own proposeProviderConfig() call below would then throw
  // before the exercise even starts. Clear any stale pending state up
  // front (never touches an already-approved live name/secret) so this
  // class of residue can never permanently block the suite.
  const clearStalePendingProviderConfig = async () => {
    const p = await prisma.paymentGatewayProvider.findUnique({ where: { providerSlot: 1 } });
    if (p?.configWorkflowInstanceId) {
      await prisma.paymentGatewayProvider.update({
        where: { id: p.id },
        data: { pendingName: null, pendingWebhookSecret: null, pendingIsActive: null, pendingProposedByUserId: null, configWorkflowInstanceId: null },
      });
    }
  };
  await clearStalePendingProviderConfig();

  try {
  // ---- 1. Provider config: FIN_ADMIN proposes, MD_CEO approves, write-only masking ----
  await expectReject('outsider cannot propose a gateway provider config', () =>
    gateway.proposeProviderConfig({ providerSlot: 1, name: 'Smoke Gateway', webhookSecret: 'secret-abc', isActive: true }, outsider.id));

  const proposed = await gateway.proposeProviderConfig({ providerSlot: 1, name: 'Smoke Gateway', webhookSecret: 'super-secret-webhook-key', isActive: true }, finadmin.id);
  // hasSecret can already be true here if a PRIOR run of this smoke test
  // already approved slot 1 (providerSlot is a fixed 1-3 global resource,
  // not RUN-scoped -- state legitimately carries across runs). What must
  // hold regardless: the raw secret is never returned, and the proposal
  // is staged pending approval, not applied immediately.
  if ((proposed as any).webhookSecret === undefined && proposed.configWorkflowInstanceId && proposed.pendingName === 'Smoke Gateway') {
    ok('proposeProviderConfig stages the change pending approval -- never returns the raw secret value over the API');
  } else {
    fail('provider proposal did not stage correctly', proposed);
  }
  await expectReject('outsider cannot approve a provider config change', () => gateway.approveProviderConfig(proposed.configWorkflowInstanceId!, outsider.id));
  await expectReject('the SAME proposer cannot approve their own provider config change (maker != checker)', () => gateway.approveProviderConfig(proposed.configWorkflowInstanceId!, finadmin.id));
  const approvedProvider = await gateway.approveProviderConfig(proposed.configWorkflowInstanceId!, mdceo.id);
  if (approvedProvider.isActive && approvedProvider.hasSecret && approvedProvider.secretPreview?.endsWith('-key') && !approvedProvider.configWorkflowInstanceId) {
    ok('MD_CEO approval flips the provider live -- secret now set (still masked in the read response, only hasSecret + a preview)');
  } else {
    fail('provider approval did not go live as expected', approvedProvider);
  }

  // Rotate name only (omit webhookSecret) -- the original secret must survive approval.
  const rename = await gateway.proposeProviderConfig({ providerSlot: 1, name: 'Smoke Gateway Renamed', webhookSecret: undefined, isActive: true }, finadmin.id);
  await gateway.approveProviderConfig(rename.configWorkflowInstanceId!, mdceo.id);
  const renamedProvider = (await gateway.listProviders()).find((p) => p.providerSlot === 1)!;
  if (renamedProvider.name === 'Smoke Gateway Renamed' && renamedProvider.hasSecret) {
    ok('a rename-only proposal (no webhookSecret) leaves the previously-approved secret intact on approval -- the write-only-masked guarantee holds through a second round-trip');
  } else {
    fail('rename-only approval unexpectedly touched the secret', renamedProvider);
  }

  // ---- 2. Custodian account: same propose/MD_CEO-approve shape ----
  const providerRow = await prisma.paymentGatewayProvider.findUniqueOrThrow({ where: { providerSlot: 1 } });
  const proposedCustodian = await gateway.proposeCustodianAccount({
    providerId: providerRow.id, productCode: poolProduct.code, custodianBankName: 'Custodian Bank', custodianAccountNumber: `1122334455-${RUN}`, referenceCodePrefix: `SMOKEPG${RUN}`, isActive: true,
  }, finadmin.id);
  if (!proposedCustodian.isActive && proposedCustodian.configWorkflowInstanceId) {
    ok('custodian account proposal stages pending values -- NOT active until MD_CEO approves (deposits cannot land against an unapproved account)');
  } else {
    fail('custodian account proposal went live without approval', proposedCustodian);
  }
  const custodian = await gateway.approveCustodianAccount(proposedCustodian.configWorkflowInstanceId!, mdceo.id);
  if (custodian.isActive && custodian.custodianAccountNumber === `1122334455-${RUN}`) {
    ok(`MD_CEO approval activates the custodian account for ${poolProduct.code} (invariant 55a: deposits go directly here, no CLIENT_MONEY wallet stage)`);
  } else {
    fail('custodian account approval did not activate as expected', custodian);
  }

  const depositInstructions = await gateway.getDepositInstructions(investor.investorId, poolProduct.code);
  if (depositInstructions.depositReference === `${custodian.referenceCodePrefix}-${investor.investorId}`) {
    ok('getDepositInstructions returns the exact reference the webhook matcher will parse back');
  } else {
    fail('deposit instructions reference mismatch', depositInstructions);
  }

  // ---- 3. Webhook: bad signature rejected ----
  const REAL_SECRET = 'super-secret-webhook-key';
  const badPayloadBase = { providerSlot: 1, gatewayEventRef: `SMOKE-EVT-BAD-${RUN}`, amountKobo: '500000', settledAt: new Date().toISOString(), custodianAccountNumber: `1122334455-${RUN}`, narration: 'no reference here' };
  await expectReject('webhook with a wrong signature is rejected', () =>
    gateway.receiveWebhook({ ...badPayloadBase, signature: sign('wrong-secret', badPayloadBase) }));

  // ---- 4. Webhook: correct signature, unparseable narration -> UNMATCHED suspense ----
  const unmatchedPayloadBase = { providerSlot: 1, gatewayEventRef: `SMOKE-EVT-UNMATCHED-${RUN}`, amountKobo: '750000', settledAt: new Date().toISOString(), custodianAccountNumber: `1122334455-${RUN}`, narration: 'transfer with no reference code' };
  const unmatchedInflow = await gateway.receiveWebhook({ ...unmatchedPayloadBase, signature: sign(REAL_SECRET, unmatchedPayloadBase) });
  if (unmatchedInflow.status === 'UNMATCHED') {
    ok('webhook with an unparseable reference lands UNMATCHED -- the suspense queue, never silently dropped');
  } else {
    fail('expected UNMATCHED', unmatchedInflow);
  }

  // ---- 5. Idempotent replay: same gatewayEventRef is a no-op ----
  await gateway.receiveWebhook({ ...unmatchedPayloadBase, signature: sign(REAL_SECRET, unmatchedPayloadBase) });
  const replayCount = await prisma.paymentGatewayInflow.count({ where: { gatewayEventRef: unmatchedPayloadBase.gatewayEventRef } });
  if (replayCount === 1) {
    ok('a retried webhook delivery with the same gatewayEventRef is idempotent -- exactly one inflow row, never a double booking');
  } else {
    fail(`expected exactly 1 inflow row for a replayed event, got ${replayCount}`);
  }

  // ---- 6. Suspense queue visibility + capability gates ----
  await expectReject('outsider cannot view the suspense queue', () => gateway.listSuspenseQueue(outsider.id));
  const suspenseQueue = await gateway.listSuspenseQueue(finadmin.id);
  if (suspenseQueue.some((i) => i.id === unmatchedInflow.id)) {
    ok('the unmatched inflow is visible in the suspense queue to a PAYMENT_GATEWAY_SUSPENSE holder');
  } else {
    fail('unmatched inflow missing from suspense queue', suspenseQueue.map((i) => i.id));
  }

  // ---- 7. Manual match (single-actor, clerical attribution) -> promotes to a real SubscriptionRequest ----
  await expectReject('outsider cannot manually match a suspense item', () =>
    gateway.manualMatch({ inflowId: unmatchedInflow.id, investorId: investor.investorId, productCode: poolProduct.code, actorUserId: outsider.id }));
  const matched = await gateway.manualMatch({ inflowId: unmatchedInflow.id, investorId: investor.investorId, productCode: poolProduct.code, actorUserId: treasuryoff.id });
  if (matched.status === 'PROMOTED' && matched.subscriptionRequestId) {
    ok(`manual match (TREASURY_OFF, clerical attribution) promotes the inflow -- subscriptionRequestId=${matched.subscriptionRequestId}, auto-created through the governed SubscriptionService (still PENDING checker approval)`);
  } else {
    fail('manual match did not promote as expected', matched);
  }
  const pendingRequest = await prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: matched.subscriptionRequestId! } });
  if (pendingRequest.status === 'PENDING' && pendingRequest.amountKobo === 750000n) {
    ok('the auto-created SubscriptionRequest carries the exact inflow amount and is still PENDING -- a human checker must still approve it (maker=system, checker=human)');
  } else {
    fail('auto-created subscription request mismatch', pendingRequest);
  }

  // ---- 8. Webhook with a VALID reference auto-promotes with no manual step ----
  const matchedPayloadBase = { providerSlot: 1, gatewayEventRef: `SMOKE-EVT-AUTOMATCH-${RUN}`, amountKobo: '1200000', settledAt: new Date().toISOString(), custodianAccountNumber: `1122334455-${RUN}`, narration: `Transfer ref ${custodian.referenceCodePrefix}-${investor.investorId} for subscription` };
  const autoPromoted = await gateway.receiveWebhook({ ...matchedPayloadBase, signature: sign(REAL_SECRET, matchedPayloadBase) });
  if ('status' in autoPromoted && (autoPromoted as any).status === 'PROMOTED' && (autoPromoted as any).subscriptionRequestId) {
    ok('a webhook carrying a valid reference-coded narration auto-promotes to a SubscriptionRequest with ZERO manual staff action -- the reference-coded-transfer path works end-to-end');
  } else {
    fail('reference-coded webhook did not auto-promote', autoPromoted);
  }

  // ---- 9. Reject a still-suspended item -- propose (TREASURY_OFF) + second-officer approve (FIN_ADMIN) ----
  const rejectPayloadBase = { providerSlot: 1, gatewayEventRef: `SMOKE-EVT-REJECT-${RUN}`, amountKobo: '100', settledAt: new Date().toISOString(), custodianAccountNumber: `1122334455-${RUN}`, narration: 'unrecognized' };
  const toReject = await gateway.receiveWebhook({ ...rejectPayloadBase, signature: sign(REAL_SECRET, rejectPayloadBase) });
  const rejectProposed = await gateway.proposeRejectInflow(toReject.id, treasuryoff.id, 'Amount too small to be a real subscription, likely a test transfer.');
  if (rejectProposed.status !== 'REJECTED' && rejectProposed.decisionWorkflowInstanceId) {
    ok('proposing a rejection does NOT change status yet -- stays UNMATCHED/MATCHED pending a second officer');
  } else {
    fail('reject proposal unexpectedly changed status immediately', rejectProposed);
  }
  await expectReject('a second REJECT/REVERSAL proposal cannot be made while one is already pending', () => gateway.proposeRejectInflow(toReject.id, finadmin.id, 'duplicate proposal'));
  await expectReject('the SAME officer who proposed the rejection cannot approve it (second-officer rule)', () => gateway.approveInflowDecision(rejectProposed.decisionWorkflowInstanceId!, treasuryoff.id));
  const rejected = await gateway.approveInflowDecision(rejectProposed.decisionWorkflowInstanceId!, finadmin.id);
  if (rejected.status === 'REJECTED' && rejected.rejectionReason) {
    ok('a SECOND Finance officer (FIN_ADMIN) approving the decision is what actually rejects the inflow -- no SubscriptionRequest is ever created for it');
  } else {
    fail('approveInflowDecision did not reject as expected', rejected);
  }
  const suspenseAfterReject = await gateway.listSuspenseQueue(finadmin.id);
  if (!suspenseAfterReject.some((i) => i.id === toReject.id)) {
    ok('a REJECTED inflow drops out of the suspense queue');
  } else {
    fail('rejected inflow still showing in the suspense queue');
  }

  // ---- 10. Chargeback: propose+second-officer-approve a reversal of a PROMOTED+APPROVED inflow, through the governed redemption path ----
  const requestWithWorkflow = await prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: matched.subscriptionRequestId! } });
  await expectReject('a chargeback cannot be proposed for an inflow whose subscription is still PENDING (nothing booked yet)', () => gateway.proposeReverseInflow(matched.id, treasuryoff.id));
  const approvedSub = await subs.approveSubscription({ workflowInstanceId: requestWithWorkflow.workflowInstanceId!, approverUserId: portmgr.id, journalInitiatorUserId: finadmin.id, thirdPartyPayer: { payerName: 'Smoke PG Investor', payerBankName: 'Test Bank', payerAccountNumber: '9998887776', declaredRelationship: 'SELF' } });
  ok(`checker (PORT_MGR) approves the auto-created subscription request -- status ${approvedSub.status}, holding booked exactly as any staff-initiated subscription`);

  await expectReject('outsider cannot propose reversing a promoted inflow', () => gateway.proposeReverseInflow(matched.id, outsider.id));
  const reverseProposed = await gateway.proposeReverseInflow(matched.id, treasuryoff.id);
  if (reverseProposed.status === 'PROMOTED' && reverseProposed.decisionWorkflowInstanceId) {
    ok('proposing a reversal does NOT touch the booked holding yet -- stays PROMOTED pending a second officer');
  } else {
    fail('reversal proposal unexpectedly changed status immediately', reverseProposed);
  }
  await expectReject('the SAME officer who proposed the reversal cannot approve it (second-officer rule)', () => gateway.approveInflowDecision(reverseProposed.decisionWorkflowInstanceId!, treasuryoff.id));
  const reversed = await gateway.approveInflowDecision(reverseProposed.decisionWorkflowInstanceId!, finadmin.id);
  if (reversed.status === 'REVERSED' && reversed.reversalRedemptionRequestId) {
    ok(`a SECOND officer's approval executes the reversal through initiateRedemption -- a NEW governed RedemptionRequest (${reversed.reversalRedemptionRequestId}) was created, never a raw delete of the booked holding`);
  } else {
    fail('approveInflowDecision did not create a redemption request as expected', reversed);
  }
  const redemptionRequest = await prisma.subscriptionRequest.findUniqueOrThrow({ where: { id: reversed.reversalRedemptionRequestId! } });
  if (redemptionRequest.requestType === 'REDEMPTION' && redemptionRequest.status === 'PENDING') {
    ok('the reversal redemption request is a real REDEMPTION-type request, still PENDING its OWN separate PORT_MGR checker approval -- THREE humans total for a chargeback (proposer, suspense-approver, redemption-approver), the reversal is not self-approving at any step');
  } else {
    fail('redemption request shape unexpected', redemptionRequest);
  }
  await expectReject('an already-REVERSED inflow cannot have a reversal proposed again', () => gateway.proposeReverseInflow(matched.id, treasuryoff.id));

  // ---- 11. Daily reconciliation surfaces a stale suspense item ----
  const stalePayloadBase = { providerSlot: 1, gatewayEventRef: `SMOKE-EVT-STALE-${RUN}`, amountKobo: '999', settledAt: new Date().toISOString(), custodianAccountNumber: `1122334455-${RUN}`, narration: 'stale test item' };
  const staleInflow = await gateway.receiveWebhook({ ...stalePayloadBase, signature: sign(REAL_SECRET, stalePayloadBase) });
  await prisma.paymentGatewayInflow.update({ where: { id: staleInflow.id }, data: { createdAt: new Date(Date.now() - 30 * 3_600_000) } });
  try {
    await gateway.runDailyReconciliation();
    fail('expected runDailyReconciliation to report the stale item as a PartialJobFailure');
  } catch (err) {
    if (err instanceof PartialJobFailure && (err.summary as any).staleUnmatchedCount >= 1) {
      ok(`daily reconciliation surfaces the 30h-old unresolved suspense item as a real PartialJobFailure (staleUnmatchedCount=${(err.summary as any).staleUnmatchedCount}) -- queryable, never silently lost`);
    } else {
      fail('runDailyReconciliation threw an unexpected error', err);
    }
  }
  const staleRejectProposed = await gateway.proposeRejectInflow(staleInflow.id, treasuryoff.id, 'cleanup after reconciliation adversarial proof');
  await gateway.approveInflowDecision(staleRejectProposed.decisionWorkflowInstanceId!, finadmin.id);
  const cleanRun = await gateway.runDailyReconciliation();
  if ((cleanRun as any).staleUnmatchedCount === 0) {
    ok('once the stale item is resolved, the same job runs clean with zero breaks');
  } else {
    fail('expected a clean reconciliation run after resolving the stale item', cleanRun);
  }
  } finally {
    // If this run itself got interrupted mid-way (an assertion above
    // threw), providerSlot 1 may now be the one left stuck pending --
    // clear it so the NEXT run isn't the one that has to recover from it.
    await clearStalePendingProviderConfig();
  }

  console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Payment Gateway Adapter (invariant 55a, CHECK12) against the real live DB.`);
  process.exitCode = failed ? 1 : 0;
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
