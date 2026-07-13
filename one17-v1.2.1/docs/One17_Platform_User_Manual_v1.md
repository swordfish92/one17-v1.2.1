# One17 Enterprise Platform — User Manual v1.0
**For: One17 Capital Limited staff · Covers: Super Level (Administrator) onboarding and Basic User onboarding**
*Companion documents: DEPLOYMENT_WINDOWS.md (installing the platform) · ONBOARDING.md (developers). Screenshots: insert from the Playwright walkthrough captures in `board-footage/` at each ⬜ marker before circulating to staff.*

---

## 1. WHAT THIS PLATFORM IS (read this first, everyone)

The One17 Enterprise Platform runs the entire company on one system: investor and client records, the Halal Fund, the Mudarabah Pool, Non-Discretionary Mandates, Wealth Management, company and fund accounting, budgets, procurement, risk management, Shariah governance, regulatory reporting, HR and performance management.

Five rules explain almost everything you will ever see on screen:

1. **You only see what your role permits.** Menus, pages, and buttons appear or disappear based on your access rights. If you cannot find something, you most likely do not have the right to it — ask your supervisor, not IT.
2. **Nobody approves their own work.** Every consequential action needs a second person (the "maker-checker" rule). The system enforces this — you cannot approve an item you initiated, and your own items never appear in your approval inbox.
3. **Everything is remembered, permanently.** Every action, login, and change is written to a tamper-proof audit log that nobody — including administrators — can edit or delete.
4. **Settings, not code.** Rates, thresholds, timings, and templates are changed through governed Settings screens with approvals — never by a programmer.
5. **Clients request; staff execute.** Client and counterparty portals can submit requests (top-ups, redemptions, extensions, complaints), but money only ever moves after staff approval inside this system.

---

## 2. GETTING IN (all users)

**⬜ [screenshot: login page]**

1. Open your browser to **app.one17capital.com** (staff) — clients and counterparties use **portal.one17capital.com** and are handled separately.
2. Enter your **work email** and password. Your first-login password is handed to you personally by Compliance/ICT — you will be asked to change it.
3. Three wrong attempts locks the account for a period; contact ICT to unlock.
4. **Never share your password.** Every action is recorded against your name; a shared password makes someone else's actions yours.

**The screen after login:** most staff land on the **Workflow Inbox**. Four roles land somewhere more useful instead (CHECK14, invariant 58): **Company Accountant/Manager FinCon/CFO** land on the **Company Accounting Dashboard**; **Fund Accountant** lands on the **Fund Accounting Dashboard** (Manager FinCon/CFO land on Company first if they hold both); **BD/Manager BD/CBGO/Relationship Officer/Marketing Officer** land on the **BD Dashboard**. CEO and Board still land on the Inbox by default — their dashboards stay one click away, unchanged. The top bar always shows — **Workflow Inbox** (items waiting for YOUR approval, with a number badge), the **notification bell**, **search (Ctrl+K)** — type any page or record name to jump to it — and your **profile**.

---

## 3. THE SEVEN SECTIONS (what lives where)

| Section | What's in it | Who sees it |
|---|---|---|
| **A. My Workspace** | Your home: tasks, daily schedule, leave requests, training, YOUR KRAs/KPIs and appraisals, payslips, your client message threads, department SOPs, personal records | **Everyone** |
| B. Clients & Onboarding | Investors, leads/BD pipeline, onboarding queues, WM clients, complaints | BD, Compliance, PM, RM staff |
| C. Products & Portfolio | Halal Fund, Mudarabah Pool, Investment Mandates, Product Setup & Parameters, counterparties & facilities, investment memos | Portfolio, Risk, Finance |
| D. Finance & Accounting | Company + fund accounting, journals, budget workspace, obligations dashboards, procurement, payroll | FinCon, Corporate Services |
| E. Risk & Compliance | ERM/KRIs, stress testing, Shariah governance, regulatory reporting, scheduler oversight | Risk, Compliance, SAU; Audit (read-only) |
| F. Governance & Strategy | Enterprise Dashboard, Board Escalations & Directives, Board calendar/papers/minutes, Executive Oversight (view-as-client, read-only), strategy layer, DoA | Executive, Company Secretary |
| G. Administration | Scheduler console, roles & permissions, AI console, Settings (all configs, vendor credentials), branding | ICT, Super Admin, SAU views |

Empty sections are hidden — a clean menu is normal.

---

# PART A — SUPER LEVEL (ADMINISTRATOR) ONBOARDING

*You are the Super Admin/ICT administrator. Your job is to make the platform ready for everyone else — and, day to day, to operate it WITHOUT touching business transactions. Note: the SUPER_ADMIN role is exclusive — it cannot be combined with any business role, and administrators cannot approve business transactions. This is deliberate.*

## A1. First-run sequence (a new or freshly-installed platform)

Work top-to-bottom; each step has its screen under **Administration** unless stated.

1. **Confirm the system is alive:** Administration → Scheduler Console — the job list should show the standard jobs (KRI daily batch, nightly audit-integrity check, accrual jobs, sweeps) with their next-run times. A red/failed job on day one means installation review — see DEPLOYMENT_WINDOWS.md.
2. **Set company Settings:** Administration → Settings — work through each panel: branding (should already carry One17's identity), FX anchor (₦/$ used by wealth tiers — enter the current market-reflective rate), filing calendar, escalation timings, screening checklist. Every save routes to an approver — have your second administrator or the MD ready to approve in their Workflow Inbox.
3. **Create the organisation:** org units and positions (department, title, cadre, notch, reports-to). Do this BEFORE creating users, so every user lands in the right seat. ⬜
4. **Create staff users:** Administration → Roles & Permissions → propose each user (email, name, position) and their role(s). **Every role assignment is itself approved by a second admin** — propose, then have it approved; the role only takes effect after approval. Hand each person their first-login password *in person or by phone — never email the password with the email address together*.
5. **Check role coverage for maker-checker:** every daily chain needs at least two capable people (e.g., two FinCon-capable users for journal posting; two admins for role changes). One person alone on a chain = that chain cannot operate. The Delegation of Authority system covers absences (A4).
6. **Enter vendor credentials (when contracted):** Settings → the relevant gateway panel (Credit Bureau, AI Provider, Attendance/TTLock, SMS/WhatsApp) → enter API keys → **Test Connection** → enable. Keys display masked forever after saving; you replace them, you never re-read them.
7. **Activation gates — understand these before anyone asks you "why can't I…":** products, the risk dashboard, budgets, and several modules deliberately refuse to activate until their governed content is entered and approved (fund parameters with Board+SSB references; the Board-approved risk appetite matrix; the Board-approved budget). The system saying "AWAITING APPROVED MATRIX" or "missing governed parameters" is **correct behaviour**, not a fault. The named missing item tells you exactly what to chase.
8. **Verify backups:** confirm the scheduled backup task runs (Task Scheduler on the server) and that dump files appear at the configured path AND the off-machine copy. Do a test restore once per quarter. A backup you have never restored is a hope, not a backup.

## A2. Daily/weekly administrator duties

- **Scheduler Console (daily glance):** all jobs green? A failed job shows with its error; use **Re-run** after fixing the cause. Pausing any financially-consequential job (accruals, KRI batch, integrity check) requires an approval — expect the workflow, don't fight it. A paused job burns as an exception on SAU's view until resumed.
- **Roles & Permissions (as requested):** new joiners, leavers (disable, never delete — history must survive), role changes — all via propose-and-approve.
- **Settings changes (as requested):** business owners will ask for threshold/timing/template changes; you enter, an authorized approver approves.
- **AI Console (if AI is enabled):** flags per capability, department token budgets, the interaction log, and the kill switch. The kill switch stops all AI instantly and notifies the CEO — use it without hesitation if something looks wrong.
- **What you never do:** post journals, approve distributions, touch investor records, or override a business approval. If a business user asks you to "just fix it in the database" — the answer is no; that is what governed screens and, in extremis, the CEO's own approval chains are for.

## A3. User support playbook (the questions you will get)

| They say | You check / answer |
|---|---|
| "I can't see page X" | Their role lacks the capability. If they should have it: propose the grant, get it approved. |
| "I can't approve this item" | Either they initiated it themselves (by design), it exceeds their approval limit (DoA needed), or they lack the APPROVE capability for that step. The error message names which. |
| "The button is greyed / missing" | Same as above — capability-driven. Never a bug until proven with a second user who HAS the capability. |
| "I'm locked out" | Unlock via user admin; if forgotten password, issue a reset — new password handed over personally. |
| "The system rejected my entry" | Read them the validation message — it names the rule (e.g., ratios must sum to 100, date in closed period). The system rejecting bad input is it working. |
| "A client says the portal shows nothing" | Portal accounts only exist after Stage-2 KYC (investors) or completed onboarding (counterparties). Check provisioning status on their record. |

## A4. Delegation of Authority (absences)

When an approver travels: the delegator (or you, on instruction) proposes a **Delegation of Authority grant** — from person, to person, which function, limit, start/end dates. A *second* authority approves the grant (nobody self-approves a delegation; nobody delegates to themselves; nobody delegates more authority than they hold unless a Board instrument reference is attached). The grant activates on approval, expires automatically on its end date, and every action taken under it is logged as delegated. Revocation is immediate and one-click — an emergency stop is not gated.

---

# PART B — BASIC USER ONBOARDING (all staff)

## B1. Your first day

1. Receive your login from ICT personally; sign in; change your password.
2. Open **My Workspace** — this is home. ⬜ You'll find: your **tasks** (with due dates and status), your **schedule**, **leave requests**, **training**, **My Performance** (your KRAs, KPIs, appraisal status), **payslips**, and your **department SOPs**.
3. Fill your **personal records**: next of kin, address, marital status, emergency contact. Some changes (next of kin, address, marital status) route to HR for acknowledgment because they affect payroll and benefits; hobbies you may edit freely. Only you, HR, and payroll can see these — colleagues cannot.
4. Find the **Workflow Inbox** in the top bar. Anything with a badge number is waiting for YOUR decision. This inbox is where the whole company's approvals happen — journal postings, KYC sign-offs, distributions, delegations, everything routed to you personally.

## B2. The habits that make the platform work for you

- **Work from tasks, not memory.** Anything assigned to you (a payment-reminder call, a document to verify, a Board directive delegated down) appears as a task with a deadline. At **70% of the allotted time**, an amber warning goes to you *and* Compliance; at breach, a default notice goes to HR and Compliance and it feeds your performance record. The task list is not decoration.
- **Approve with your eyes open.** When an item reaches your Inbox: open it, read the details and attachments, then Approve or Reject *with a comment*. Your approval is a permanent signature. If you don't understand an item, reject it with a question — a rejected item can be re-submitted; a wrong approval is forever.
- **Attach evidence.** Wherever you see an attachment option (approvals, memos, resolutions, screenings), use it — documents in the register are versioned and permanently linked to the record. Evidence attached today is an audit answered in one click next year.
- **Expect refusals — they're protection.** "Approver cannot be the same user who initiated" · "falls within a CLOSED accounting period" · "exceeds your approval limit" · "requires both Board and SSB references" — every one of these is the system keeping you personally safe. None of them is negotiable, including for the CEO.
- **Search first (Ctrl+K).** Any page, investor, counterparty, or record — type a few letters.

## B3. Quick task guides by common role

**Business Development:** Section B → Leads (record and progress prospects — stages beyond "Qualified" update themselves from real onboarding events; you cannot drag a lead to "Funded"); start investor onboarding (choose Individual or Corporate — the form cascades accordingly); your **BD Dashboard** (CHECK14, your default landing page) shows mobilization vs target by product/officer, the live lead funnel with conversion rates, AUM growth attribution, marketing send performance, and an upcoming-maturities retention worklist — toggle Own book/Enterprise if you're a manager.

**Compliance:** onboarding queues (screening with full checklist — the system blocks KYC submission without it), risk grading with documented observations, sanctions/PEP results, complaint tickets (auto-feeding the SEC register), regulatory reporting (prepare → validate → CEO endorses → export/dispatch), reminder-dispatch validation queue (client-bound emails/SMS wait for your approval), **Compliance Queue** (Section B — the single landing page for periodic KYC reviews, sanctions re-screening, and document-expiry Tasks the scheduler raises against you; each row's action button records the real result against the real investor/counterparty record — the queue itself decides nothing).

**Portfolio:** counterparty files (you may be the *file-managing officer* — reminder-call tasks land on your profile with a link to the file), facility applications with the investment memo (your request to the CIO), deployments (blocked until client consent and approvals exist — by design), extension requests from the counterparty portal, investor exit/closure and counterparty write-off requests (both maker-checker, both irreversible once approved — closure/write-off is a last resort, not a shortcut for a slow-paying account), **Mandate Amendments** (Section B — propose a change to an investor's mandate terms; an early-exit waiver amendment is refused by the system until an SSB waiver resolution reference is already on file against that mandate — obtain it through the Shariah-review chain first, the amendment screen will not create one for you).

**Finance/FinCon:** your **Company Accounting Dashboard** or **Fund Accounting Dashboard** (CHECK14, your default landing page depending on seat) opens on income/expense vs budget, variance by cost centre, receivables/payables ageing, pending postings, and period-close status (Company) or per-fund NAV/pipeline/accruals/distribution status (Fund) — both link out to the full statement viewers and Budget Management/Journal Entries for drill-down. Journal entry (draft with lines → request posting → a *different* FinCon approves in their Inbox), period close (propose → approval — **blocked while any bank statement line in the period window is unmatched**; reconcile first under Accounting Periods → Bank Reconciliation), statements per entity and basis (IFRS/AAOIFI), budget workspace (variance vs Board-approved budget), obligations dashboards (projected receivables/payables — planning views, clearly marked, never books), procurement (requisition → Internal Control → CEO → PO → 3-way match; **asset disposal** posts its own multi-line journal — cash/trade-in received, accumulated depreciation cleared, asset removed at cost, gain or loss on disposal booked automatically), petty cash (custodian float register → voucher capture → replenishment claim → Internal Control verifies → approval per DoA → Finance disburses; the journal posts automatically at replenishment, never at voucher approval).

**The operating rule, stated plainly:** every category of spend has exactly one governed posting channel — procurement purchases post automatically at 3-way match + payment, petty cash posts automatically at replenishment, asset disposal posts automatically at disposal approval. The manual Journal Entries page is for adjustments, accruals, and corrections **only**. Never re-enter spend that already flowed (or will flow) through requisition, petty cash, or disposal on the manual page — that is a double-posting risk, and the audit trail will show two postings for one real event.

**Risk:** appetite matrix versions (propose thresholds — three distinct levels per category; Board reference required to approve), risk register, the six stress models (ad-hoc runs are SANDBOX-labelled and never touch the approved baseline), KRI dashboard, bureau policy settings.

**Everyone:** leave requests (My Workspace → routes to your supervisor), training, messages from your assigned clients (reply promptly — unanswered messages escalate), your appraisal at cycle end (self-score with evidence → supervisor → SAU → final).

## B4. When something goes wrong

1. **Read the message on screen** — this platform's errors are written in English and name the rule or the missing item.
2. **Check your role** — can a colleague with the right role see/do it? Then it's access, not a fault: ask your supervisor to request the capability.
3. **Report properly** — tell ICT *what you clicked, what you expected, what happened*, and the time (the audit log finds the exact moment).
4. **Never work around** — no side spreadsheets, no "I'll just do it in Excel and enter it later," no sharing logins to get past an approval. Every workaround you invent is a control you've disabled and an audit finding with your name on it.

---

## 4. CLIENT & COUNTERPARTY PORTALS (what staff should know)

Clients (investors) receive portal access automatically once Stage-2 KYC completes; counterparties on onboarding approval. First-login credentials are relayed personally by staff (Compliance) for now. Clients see only their own world: holdings with the One17/External split, the wealth pyramid with their position, statements and shared reports, message thread to their RM, complaints, and request buttons (top-up, redemption — which arrive as staff work items, never self-executing). Counterparties see facilities, repayment schedules and amounts due, agreement copies (approved versions only), application progress bars, and can upload documents against their applications. **If a client claims they saw another client's data, treat it as a severity-one security incident and escalate to ICT + Compliance immediately** — the system is adversarially tested against exactly this, so any such report is either a misunderstanding or an emergency.

## 5. FREQUENTLY ASKED QUESTIONS

**Why are there two approvals for everything?** Because a regulator, an auditor, and your own defence in any dispute all need proof that no single person moved money alone. The friction is the feature.
**Can an admin recover my deleted entry?** Nothing is deleted — records are disabled/superseded and history is permanent. Corrections happen by reversal, never by erasure.
**Why can't I edit a posted journal / published NAV / sent report?** Posted, published, and dispatched artifacts are immutable. The correction path is a new reversing entry or a new version — with its own approval.
**Who can see my personal records / salary?** You, HR, and payroll where relevant. Not your colleagues, not your supervisor beyond what appraisal requires.
**What is the "Benchmark — not guaranteed" label?** A Shariah requirement: target returns are aspirations, never promises. It must appear wherever targets show; do not paraphrase it away in client conversations either.
**The dashboard shows "NOT INSTRUMENTED" or "AWAITING APPROVED MATRIX"?** Honest placeholders: the measurement exists but its governed inputs haven't been approved yet. Never treat them as zero or green.

---

*Manual version 1.0 — reflects the platform at build-completion (CHECK8), updated for Finance-operating-rule additions through CHECK12 (invariant 50c), CHECK13 (invariant 51(b-vii)–(b-x), 51(c)), and CHECK14 (invariant 58 role operational dashboards + default-landing routing). Owner: Corporate Services (HR) with ICT. Update cadence: at every release that changes a screen; the walkthrough recordings in `board-footage/` double as training videos for each module.*
