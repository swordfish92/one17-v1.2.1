# Wiring Manifest — every parked posting/wiring, one execution script

**Purpose.** This is the consolidated list of every GL-posting or ledger-wiring action in the
platform that exists in code but is deliberately **not yet firing**, because it is waiting on a
FinCon-confirmed account mapping, a CEO/advisor design ruling, or a downstream feature that
doesn't exist yet. It is the execution script for **CHECK19 (the FinCon Activation Tranche)** —
the tranche that runs the day the signed mapping sheet arrives: wire every row below, activate the
CHECK10 reconciliation configs, run full regression, regenerate the Governance Controls Register +
Screen Map, one evidence pack.

Do not treat this as a to-do list to start early. Every row here was deliberately parked because
wiring it blind would mean guessing on money logic (invariant 38's absolute line) or building
against a downstream feature that doesn't exist yet. CHECK19 starts when the CEO's hand delivers
the signed FinCon mapping sheet, not from a chat instruction.

**Format.** One row per posting/wiring gap. **Fires on** = the event/action that should trigger
the posting. **Depends on** = the specific FinCon confirmation, ruling, or prerequisite feature
still outstanding. **Code seam** = the exact file:line/method where the wiring goes. **Test plan**
= what proves it's correctly wired once built.

---

## A note on "Mapping N" numbering

Only **Mapping 6** (petty cash) and **Mapping 7** (WHT/VAT/Stamp Duty) are named with explicit
numbers anywhere in this codebase's comments or evidence docs. The five CHECK9/CHECK11 parked
journal wirings (rows 1–5 below) are referred to collectively as "the five parked wirings"
throughout `QUESTIONS_FOR_REVIEW.md` and `CHECK9_EVIDENCE.md`/`CHECK11_EVIDENCE.md`, but are never
individually numbered "Mapping 1" through "Mapping 5" in any source document. **The "1–5" labels
below are this manifest's own inferred ordering** (matching the order they're listed in
`QUESTIONS_FOR_REVIEW.md:269-292`), not a numbering the advisor's actual sheet is known to use —
cross-check against the real FinCon event-journal sheet when it arrives rather than assuming these
numbers correspond.

---

## 1 — Redemption journal posting

- **Fires on:** an approved on-demand redemption (`SubscriptionService.approveSubscription`,
  `REDEMPTION` request type).
- **Depends on:** a FinCon-confirmed Dr/Cr account treatment for on-demand redemption specifically.
  `PRINCIPAL_RETURNED_AT_MATURITY` (the only existing `event_journal_config` row that looks
  adjacent) is semantically maturity-specific ("`maturity_date` reached"), not a general on-demand
  trigger — reusing it would misrepresent what fired the entry. A new `event_journal_config` row is
  needed, Formula-Library-sourced.
- **Code seam:** `src/subscription/subscription.service.ts` — `approveSubscription`'s
  `REDEMPTION` branch (mirrors the `CAPITAL_PLACEMENT_RECEIVED` call already wired in the
  `SUBSCRIPTION` branch, `subscription.service.ts:318`). New `event_journal_config` row +
  `this.eventJournal.generateAndRequestPosting({ eventType: '<new code>', ... })` call.
- **Test plan:** extend `subscription.smoke.ts` with a redemption-approval case asserting a
  `JournalEntry` is created, requested for posting, and (after a different-user approval) posts to
  the correct GL accounts with the redeemed amount.

## 2 — Halal Fund fee accrual journal posting

- **Fires on:** `HalalFundEngineService.accrueFees` (currently scheduler-driven, no journal call).
- **Depends on:** FinCon confirmation that the existing `FEE_ACCRUAL` `event_journal_config` row's
  account range (Dr 5020-5060 / Cr 2010-2050) is correct per fee type, plus a design decision on
  firing cadence — `accrueFees()` computes potentially several fee types per run with no
  per-fee-type actor context suited to firing one journal per accrued fee type per day.
- **Code seam:** `src/engine-halal-fund/halal-fund-engine.service.ts:281` (`accrueFees`) **and**
  `src/scheduler/scheduler.service.ts` (`runHfDailyAccrualSweep`, the job that calls `accrueFees`)
  — per `QUESTIONS_FOR_REVIEW.md:277-280`, wiring this correctly touches both files, not just the
  engine method.
- **Test plan:** extend `halal-fund-engine.smoke.ts` / the scheduler smoke suite to assert one
  `JournalEntry` per accrued fee type per run, correctly reference-tokened to the accrual date.

## 3 — Halal Fund distribution declared + paid journal postings

- **Fires on:** `HalalFundEngineService.approveDistributionDeclaration` (line 431, `DECLARED`) and
  `HalalFundEngineService.payDistribution` (line 449, `PAID`) — confirmed by direct read: neither
  method references `EventJournalService`/`LedgerService` anywhere in the file (whole-file grep for
  `journal`/`Journal` returns zero matches).
- **Depends on:** the `DISTRIBUTION_DECLARED` (Dr 3020 / Cr 2060) and `DISTRIBUTION_PAID`
  (Dr 2060 / Cr 1000) `event_journal_config` rows already exist and look plausible, but
  `runDistribution`/`approveDistributionDeclaration`/`payDistribution` each touch multiple
  `DistributionLineItem` rows across potentially many `ProductAccount`s per run — getting the
  reference-token substitution and per-line amounts right needs the same Formula-Library-literate
  care the original engine got. FinCon should confirm whether the posting is one aggregate journal
  per run or one per line item.
- **Code seam:**
  `src/engine-halal-fund/halal-fund-engine.service.ts:431` (`approveDistributionDeclaration`) and
  `:449` (`payDistribution`, the exact seam `ObligationsService.markPaid` — see row 7 below — would
  also need to drive once this is wired).
- **Test plan:** extend `halal-fund-engine.smoke.ts` with a full declare→approve→pay cycle
  asserting `DISTRIBUTION_DECLARED` and `DISTRIBUTION_PAID` journals post correctly, amounts sum to
  the total distribution, and per-line-item reference tokens resolve.

## 4 — PSR-waterfall (Mudarabah pool) profit allocation journal posting

- **Fires on:** `PsrWaterfallEngineService.runWaterfallDistribution` (or its successor once the
  distribution-initiation UI parked at `QUESTIONS_FOR_REVIEW.md:224-247` is built).
- **Depends on:** no existing `event_journal_config` row obviously fits a POOL profit distribution
  — every row is Halal-Fund-flavored. AMD-01/02's pool accounting differs enough from unit-NAV fund
  accounting that a new row, Formula-Library-sourced, is required. Genuinely open — not a
  reuse-an-existing-row case.
- **Code seam:** `src/engine-psr-waterfall/psr-waterfall-engine.service.ts` — confirmed zero
  `eventJournal`/`journal` references anywhere in the file (no partial implementation exists).
- **Test plan:** new smoke coverage once the engine's own distribution-initiation UI ships (see
  `QUESTIONS_FOR_REVIEW.md` task #158) — assert the waterfall's PSR investor/mudarib split posts as
  two correctly-proportioned journal lines.

## 5 — ND Mandate F-ND-03 provisional accrual journal posting

- **Fires on:** the ND Mandate engine's provisional-accrual step (`NdMandateProvisionalAccrual`
  lifecycle — provisional booking, later reversed and trued-up).
- **Depends on:** genuinely new event semantics — no existing `event_journal_config` row captures
  a "provisional vs. trued-up are different moments" lifecycle. Needs its own pair of rows
  (provisional booking / reversal-and-true-up), Formula-Library-sourced (Part E, F-ND-03).
- **Code seam:** `src/engine-nd-mandate/nd-mandate-engine.service.ts` — the provisional-accrual
  computation method (not yet cross-referenced against `EventJournalService` in this manifest's
  research pass; re-confirm exact line at CHECK19 kickoff).
- **Test plan:** new smoke coverage asserting a provisional accrual posts as PROVISIONAL, a
  subsequent true-up posts a correcting entry, and the two net to the Formula-Library-specified
  final figure.

---

## 6 — Petty cash replenishment journal posting (Mapping 6)

- **Fires on:** `PettyCashService.decideReplenishmentClaim`'s disbursement step (the `APPROVED`
  branch), immediately before the `$transaction` that flips vouchers to `REIMBURSED` and the claim
  to `DISBURSED`.
- **Depends on:** FinCon confirmation of the Dr-expense-accounts/Cr-Bank mapping (**Mapping 6** on
  the advisor's event-journal sheet) — per-voucher expense-account coding, since a replenishment
  claim bundles vouchers across potentially several distinct expense categories. **Also depends on
  an `EventJournalService` capability gap**: `generateAndRequestPosting` only supports a single
  Dr line + single Cr line (confirmed: no multi-line variant exists in
  `src/event-journal/event-journal.service.ts`), but invariant 50(a) calls for a genuinely
  multi-line journal (one Dr line per distinct expense account in the voucher bundle, one Cr Bank
  line). Two ways to close this: (a) add a multi-line variant to `EventJournalService`, or
  (b) call `LedgerService.createJournalEntry`/`requestJournalPosting` directly with a multi-line
  `lines` array — the same primitives `EventJournalService` itself uses internally (this is the
  pattern `ProcurementService.disposeAsset` already uses for its own multi-line
  depreciation-disposal journal, so it's a proven in-codebase shape, not a new one).
- **Also depends on:** at least one real ASSET "Petty Cash Float" account being added to the
  production `COMPANY` chart of accounts — none exists yet (the current 4-row production CoA has
  no petty-cash line; `PettyCashFloat.ledgerEntityCode` FKs to a real `LedgerEntity`, so this must
  exist before `establishFloat` is used for real). FinCon's account-naming/coding call, not
  invented here.
- **Code seam:** `src/petty-cash/petty-cash.service.ts:211-219` — the exact insertion point is
  pre-drafted in a comment at those lines:
  ```
  const { journal } = await this.eventJournal.generateAndRequestPosting({
    eventType: 'PETTY_CASH_REPLENISHMENT', ledgerEntityCode: float.ledgerEntityCode,
    entryDate: new Date(), amountKobo: claim.totalVoucherKobo,
    referenceTokens: { float_code: float.floatCode }, createdByUserId: actorUserId,
  });
  ```
  (this draft assumes single-line; revise once the multi-line question above is resolved). The
  claim's audit record at line 230 currently stamps
  `journalWiring: 'PARKED pending FinCon PETTY_CASH_REPLENISHMENT mapping (invariant 50a)'` —
  update that literal once wired.
- **Test plan:** extend the petty-cash smoke suite with a replenishment claim spanning ≥2 distinct
  expense-account vouchers, asserting one multi-line journal posts with one Dr line per expense
  account and one Cr Bank line summing to the claim total.

---

## 7 — Tax payable journal postings: WHT, VAT, Stamp Duty (Mapping 7 + extensions)

- **Fires on:** three separate events, one per tax type —
  - **WHT**: `ObligationsService.compilePayoutBatch` computes WHT per payout line
    (`src/obligations/obligations.service.ts`) — a payable posting would fire once the batch is
    `APPROVED` (mirroring how the bank-instruction letter auto-generates on approval today).
  - **VAT**: `TaxService.createFeeInvoice` (output VAT, One17 fee/advisory invoices) and
    `TaxService.recognizeVendorInvoiceVat` (input VAT, procurement vendor invoices) —
    `src/tax/tax.service.ts`.
  - **Stamp Duty**: `TaxService.assessStampDuty` (`src/tax/tax.service.ts`) — fires at the
    configured instrument type's creation/execution event.
- **Depends on:** FinCon signing **Mapping 7** — WHT payable is GL **2085**; VAT and Stamp Duty
  payable accounts are **Mapping 7 extensions**, numbers still to be added to the sheet. Until
  signed, `TaxGlMapping.payableAccountCode` stays `null` for all three tax types (seeded that way,
  `prisma/seed.ts` — `TAX_GL_MAPPING_SEEDS`) and `TaxService.configureGlMapping` — the write path
  that fills the real code in — exists (`src/tax/tax.service.ts:263-272`,
  `src/ops-api/tax.controller.ts` `POST /tax/gl-mappings`) but has zero callers today; nothing
  posts against it.
- **Code seam:** once `TaxGlMapping.payableAccountCode` is non-null for a tax type, add the
  posting call at each fire point above — either via a new `event_journal_config` row +
  `EventJournalService.generateAndRequestPosting` per tax type, or a direct
  `LedgerService.createJournalEntry` call reading `TaxGlMapping.payableAccountCode` for the Cr
  side (Dr side is the same account the underlying invoice/payout already posts against). Also
  wire the remittance leg: `TaxService.approveRemittanceBatch`
  (`src/tax/tax.service.ts:348-378`, already auto-generates the remittance instruction letter on
  approval) needs a **Dr tax payable / Cr Bank** posting added at `markRemitted`
  (`src/tax/tax.service.ts`, after the `INSTRUCTION_ISSUED` status check) once Mapping 7 signs.
- **Test plan:** extend `tax.smoke.ts` / `obligations.smoke.ts` (CHECK18's smoke coverage) with
  three cases — WHT batch approval posts Dr investor-payout-clearing / Cr 2085; a fee invoice posts
  output VAT; a vendor-invoice VAT recognition posts input VAT — each asserting the correct GL
  account resolves from `TaxGlMapping` and the remittance leg correctly clears the payable on
  `markRemitted`.

---

## 8 — Payout batch `markPaid` → Halal Fund distribution-paid posting wiring

- **Fires on:** `ObligationsService.markPaid` (`src/obligations/obligations.service.ts`) — the
  final step of the payout compilation pipeline (invariant 65b: "actual payment marking then
  drives the standing distribution-paid postings").
- **Depends on:** row 3 above (`DISTRIBUTION_PAID` journal wiring) being closed first —
  `markPaid` should call into `HalalFundEngineService.payDistribution`
  (`src/engine-halal-fund/halal-fund-engine.service.ts:449`) once that method itself posts a
  journal, rather than `ObligationsService` inventing its own parallel posting logic. This was a
  disclosed, deliberate CHECK18 scope decision (not attempted blind): tracing and correctly
  invoking a sealed financial engine's internal posting mechanics under time pressure risks a
  Shariah/regulatory-grade bug per invariant 10's own standard.
- **Code seam:** `src/obligations/obligations.service.ts` — `markPaid` method (currently only
  flips `PayoutCompilationBatch.status` to `PAID` and writes an audit record — no engine call).
  The wiring point is a call to `this.halalFundEngine.payDistribution(...)` per affected
  `Distribution`/`ProductAccount`, once row 3's posting logic exists to invoke.
- **Test plan:** extend the CHECK18 obligations smoke suite with a full compile→approve→
  letter-issue→mark-paid cycle, asserting `markPaid` triggers the corresponding
  `HalalFundEngineService.payDistribution` call(s) and the resulting `DISTRIBUTION_PAID` journals
  (once row 3 exists) tie out to the payout batch's `totalNetKobo`.

---

## 9 — CHECK10 reconciliation configs (activation, not posting — but gated on rows 1–8)

- **What:** `LedgerReconciliationConfig` — the governed control exists and works
  (`ReconciliationService.reconcile`, `src/reconciliation/reconciliation.service.ts:18-63`) but has
  **zero ACTIVE rows seeded**, deliberately. Absent a config row, `DashboardService`/
  `CompanyAccountingDashboardService` render the honest "UNRECONCILED TO LEDGER" badge rather than
  a fabricated comparison.
- **Why gated on rows 1–8 above:** the recon compares operational figures (Total AUM, Largest
  Exposure, Total EL) to GL account balances. With most of rows 1–5's postings never having fired
  historically, activating a recon today would show a near-total, permanent breach — not a genuine
  control catching real drift, just a restatement of the known gap, training people to ignore a
  perpetual RED.
- **Action at CHECK19:** once rows 1–5 (and ideally 6–8) are wired and have accumulated enough
  posted history that a breach would mean something real, FinCon/CEO activate the first
  `LedgerReconciliationConfig` row(s) and set the tolerance — deliberately, with a real basis, not
  inherited from any prior pass.
- **Code seam:** no code change needed — only a data activation
  (`prisma.ledgerReconciliationConfig.create({ status: 'ACTIVE', ... })` via whatever governed
  config-entry path CHECK19 builds, or direct seed if CEO rules that's acceptable for this one).
- **Test plan:** `role-dashboards.smoke.ts` already asserts both the un-activated ("UNRECONCILED")
  and activated (real comparison) behavior — re-run it post-activation and confirm the badge
  flips and the comparison is materially non-zero-drift (i.e., the postings that back it are real).

---

## Undocumented dangling `event_journal_config` rows — found during this manifest's research, not previously flagged

Beyond the five named wirings (rows 1–5) and the wired six (`CAPITAL_PLACEMENT_RECEIVED`,
`IMPAIRMENT_CHARGE`, `WM_ADVISORY_FEE`, `PROCUREMENT_INVOICE_MATCHED`, `PROCUREMENT_PAYMENT_MADE`,
`ASSET_DEPRECIATION_MONTHLY`), four more rows in `EVENT_JOURNAL_CONFIG`
(`prisma/seed.ts:3384-3420`) have **zero code references anywhere in `src/**`** and were not
previously named in any evidence document as a disclosed gap:

| Event code | Dr / Cr | Trigger description (from seed) |
|---|---|---|
| `INVESTMENT_DEPLOYMENT` | 1100-1150 / 1000 | `investment_status -> ACTIVE` |
| `DAILY_ACCRUAL_FIXED` | 1200 / 4000-4030 | `daily_batch completion` |
| `PROFIT_RECEIVED` | 1000 / 4000-4030 | `income_received event` |
| `LOSS_ALLOCATION` | 6000 / 3010 | `loss_allocation_run` |
| `PURIFICATION_TO_CHARITY` | 4000-4030 / 2070 | `purification_event` |
| `EARLY_EXIT_PENALTY_TO_CHARITY` | 1000 / 2070 | `early_exit_approved` |

These are not on the "five parked wirings" list and have no CEO ruling or advisor context on
record explaining what should fire them — flagging here so CHECK19 doesn't silently skip them.
Recommend a CEO/FinCon confirmation at CHECK19 kickoff on which of these are: (a) genuinely
still-needed and should join this manifest with their own numbered row, or (b) dead scaffolding
from the original SRS §4.7.1 map that should be formally retired (documented removal, not silent
deletion, per the same discipline `REGULATOR_TEMPLATE_REGISTRY` was flagged for in
`QUESTIONS_FOR_REVIEW.md` task #170).

---

## CHECK19 execution checklist (run in this order, the day the sheet arrives)

1. Confirm the signed FinCon mapping sheet covers rows 1–7 above (redemption, HF fee accrual, HF
   distribution declared/paid, PSR-waterfall allocation, ND F-ND-03, petty cash Mapping 6, tax
   Mapping 7 + extensions) — and get a ruling on the six undocumented dangling rows.
2. Wire rows 1–5 in order (each is its own `event_journal_config` row + call-site wiring +
   smoke-test extension per that row's Test Plan above).
3. Wire row 6 (petty cash) — resolve the multi-line `EventJournalService` question first (add a
   multi-line variant, or call `LedgerService` primitives directly per the `ProcurementService.
   disposeAsset` precedent).
4. Wire row 7 (tax payable postings, all three types) via `TaxService.configureGlMapping`, then
   add the posting call sites named above.
5. Wire row 8 (`ObligationsService.markPaid` → `HalalFundEngineService.payDistribution`), which
   depends on row 3 being complete first.
6. Activate row 9's `LedgerReconciliationConfig` rows once 1–8 have posted real history.
7. Full regression: `tsc --noEmit` across backend/ops-ui/portal-ui, every `*.smoke.ts` suite,
   production builds.
8. Regenerate the Governance Controls Register + Screen Map.
9. Write `CHECK19_EVIDENCE.md` — one pack covering every row above, each with its adversarial
   proof (rate/mapping immutability where applicable, correct GL account resolution, no double
   posting, reconciliation badge flips from UNRECONCILED to a real comparison).
