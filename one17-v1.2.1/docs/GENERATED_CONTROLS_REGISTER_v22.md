# One17 Enterprise Platform — Generated Governance Controls Register v22

Generated 2026-07-13T08:40:30.046Z from git revision `d53e478` by `scripts/generate-controls-register.ts` (invariant 45b). Every table below is a direct read of the live RBAC/workflow seed and the migration set on disk — nothing here is hand-typed.

> **Status markings are not self-assigned by this generator (invariant 45d).** This document states structural fact only: which roles/grants/chains/triggers exist. Whether a given row is VERIFIED, BUILT-PENDING, or DECLARED is a certification act reserved for the CEO's advisor review and witnessed UAT — see `One17_Governance_Controls_Register_v1.doc` for the authoritative human-issued status table, and §4 below for which signed evidence-pack files currently exist in this repo.

## 1. Role Catalogue

| Role code | Name | Description | Exclusive | Read-only |
|---|---|---|---|---|
| AUDITOR | Auditor (External / Internal) | Read-only access to all records, journals, audit trail. Cannot modify any data. |  | Yes |
| BD | Business Development | Investor Onboarding Template Step 1: initiates KYC/investor information capture; owns the lead register and BD marketing distribution. |  |  |
| CBGO | Chief Business & Growth Officer | Invariant 46(d): BD division head — revenue/AUM growth strategy; BD-register and pipeline approve/view tiers. |  |  |
| CFO | Chief Finance Officer | Invariant 46(b): Financial Control division head. Inherits FIN_ADMIN's approval seats on emolument structure, payment batches, period close, budget pack; holds JOURNAL_ENTRIES APPROVE. |  |  |
| CIO | Chief Investment Officer | Invariant 36(f): approves the Portfolio Officer's investment memo before a facility application enters the Risk->BD->Finance->Compliance review chain. |  |  |
| COMP_ACCT | Company Accountant | Invariant 46(b): initiates company-entity journals, statutory reporting. |  |  |
| COMPLIANCE | Compliance Officer | Reviews and approves onboarding, KYC, counterparty limits; escalates Shariah flags. |  |  |
| CORP_SERVICES | Corporate Services Officer | Admin/Procurement: vendor register, purchase orders, goods receipt, invoice entry, 3-way match, payment batch creation, asset register (Budget Spec §4). |  |  |
| CRAO | Chief Risk & Audit Officer | Invariant 46(e): Enterprise Risk Management + Audit oversight — RISK_REGISTER APPROVE + risk-module head views. Appetite-matrix approval STAYS with MD_CEO per AMD-12. |  |  |
| CS | Company Secretary | Invariant 37(c)(ii): issues Board/Committee directives, tracks acknowledgment/reported-back status, administers the Board Calendar/Papers/Minutes (Section F). |  |  |
| DEPT_CHIEF | Department Chief | PMS/Payroll SDS §3.2: signs off validated scores before CEO cycle approval. |  |  |
| EXEC_ASSISTANT | Executive Assistant | Invariant 46(a): executive support, scheduling, correspondence for the Office of the MD/CEO. VIEW-tier only -- no initiate/approve authority anywhere. |  |  |
| FIN_ADMIN | Finance / Administrator | Investor transactions, fee processing, cashbook, journal entries. Cannot approve own journals. |  |  |
| FUND_ACCT | Fund Accountant | Invariant 46(b): initiates fund-entity journals, fee processing, fund receivables. |  |  |
| HEAD_SAU | Head, Strategy & Accountability Unit | Invariant 46(e): enterprise strategy execution, governance oversight, institutional accountability — takes STRATEGY_LAYER INITIATE (from SAU_INTERNAL_CONTROL) + SAU oversight views. |  |  |
| HR_ADMIN | HR Administrator | PMS/Payroll SDS: manages appraisal/incentive cycles, employee register, behavioural gate checks. |  |  |
| ICT | ICT | Scheduler console operator — monitors job health, manually re-runs failed jobs, requests pause/resume (KRA: platform stability). Cannot approve pausing a consequential job unilaterally. |  |  |
| INV_COMMITTEE | Investment Committee Member | Invariant 46(c): mandatory IC step in the DoA-tiered investment memo chain (PO -> PM validation -> CIO -> [IC -> MD/CEO] at/above the governed threshold) — approval records an icResolutionRef. |  |  |
| INVESTOR | Investor / Client | Read-only access to own capital account, statements, schedule. |  |  |
| LEGAL | Legal / Company Secretariat | Invariant 27(b)/36(e): VIEW access to counterparty facility applications, agreements, and restructuring-legal steps. No approval authority. |  |  |
| MD_CEO | MD / CEO | Strategic oversight; approves distributions above threshold; sees all reports. |  |  |
| MGR_BD | Manager, Business Development | Invariant 46(d): BD team supervision, pipeline management; BD-register approve/view tiers. |  |  |
| MGR_FINCON | Manager, Financial Control | Invariant 46(b): operational finance management. Holds JOURNAL_ENTRIES APPROVE (different-user rule still applies) and the three-hand payroll chain's Finance review/request step (invariant 46g-ii). |  |  |
| MKT_OFF | Marketing Officer | Invariant 46(d): marketing campaigns, events, digital channels — MARKETING (resource/send) INITIATE (Compliance approval unchanged). |  |  |
| PMS_SUPERVISOR | Line Supervisor | PMS/Payroll SDS §3.2: validates direct reports' self-scores. |  |  |
| PORT_MGR | Portfolio Manager | Manages investment portfolio; books investments; initiates distributions; cannot approve own initiations. |  |  |
| PORT_OFF | Portfolio Officer | Day-to-day investment operations; runs daily accrual batch; prepares distribution workings. Cannot approve. |  |  |
| REL_OFF | Relationship Officer | Invariant 46(d): client servicing, retention, investor communication — CLIENT_MESSAGING INITIATE, complaint/enquiry case handling, REDEMPTION_PROCESSING INITIATE (client-servicing initiation; PORT_MGR approval + Stage-1 DB block unchanged). |  |  |
| RISK_DEPT | Risk Department | Investor/Investee Onboarding Template Step 5: EDD (High Risk) or periodic-review recommendation (Low/Medium-Low); sets investee exposure limits. |  |  |
| SAU_INTERNAL_CONTROL | SAU — Internal Control Officer | Reviews expenditure requisitions for budget/SOP/policy conformity (Budget Spec §3). |  |  |
| SHARIAH_REV | Shariah Reviewer | Reviews Shariah compliance; SSB resolutions; purification approvals; veto power. |  |  |
| SUPER_ADMIN | Super Administrator | Full system access incl. user accounts, config, migrations. Cannot approve financial transactions. | Yes |  |
| SYSTEM_PAYMENT_GATEWAY | System Payment Gateway | Auto-creates SubscriptionRequests from matched gateway inflows — not a human actor, cannot approve, initiator-only. |  |  |
| SYSTEM_PORTAL_CLIENT | System Portal Client | Auto-creates redemption SubscriptionRequests from investor-initiated portal actions — not a human actor, cannot approve, initiator-only. |  |  |
| SYSTEM_SCHEDULER | System Scheduler | Automated platform batch jobs (KRI daily batch, stress-test sweeps) — not a human actor, cannot approve. |  |  |
| TREASURY_OFF | Finance Officer (Treasury) | Invariant 46(b): initiates cashbook and settlement entries. |  |  |
| WM_ADVISOR | Wealth Management Advisor | Wealth Management: declares/verifies client assets, sets allocation/risk/growth plans, advisory records, sandbox risk assessments (invariant 23). |  |  |

37 roles, as seeded.

## 2. Approval Chains (workflow type → rule → ordered steps)

### ACCOUNTING_FRAMEWORK_MAP_APPROVAL
AMD-11: accounting_framework_map version approval, FINCON proposes -> CEO/Board per DoA

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ACCOUNTING_FRAMEWORK_MAP_STANDARD | STANDARD | — | ACCOUNTING_FRAMEWORK_MAP | 1. ACCOUNTING_FRAMEWORK_MAP APPROVE |
| 0c00ef42 | STANDARD | — | ACCOUNTING_FRAMEWORK_MAP | 1. ACCOUNTING_FRAMEWORK_MAP APPROVE |

### ACCOUNTING_PERIOD_CLOSE
Phase 2: accounting_period close approval — OPEN->CLOSED only from APPROVED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ACCOUNTING_PERIOD_CLOSE_STANDARD | STANDARD | — | ACCOUNTING_PERIOD_CLOSE | 1. ACCOUNTING_PERIOD_CLOSE APPROVE |

### AI_CAPABILITY_FLAG_TOGGLE
Invariant 33(f) gate 1: DoA-governed flip of a global AI capability flag — ICT initiates, MD_CEO approves

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| AI_CAPABILITY_FLAG_TOGGLE_STANDARD | STANDARD | — | AI_CAPABILITY_FLAG_MANAGEMENT | 1. AI_CAPABILITY_FLAG_MANAGEMENT APPROVE |

### AI_PROVIDER_CREDENTIAL_CONFIG
Invariant 73(b) (CHECK27): AiProviderCredential config change -- ICT proposes, MD_CEO approves, same shape as AI_CAPABILITY_FLAG_TOGGLE

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| AI_PROVIDER_CREDENTIAL_CONFIG_STANDARD | STANDARD | — | AI_CAPABILITY_FLAG_MANAGEMENT | 1. AI_CAPABILITY_FLAG_MANAGEMENT APPROVE |

### ATTENDANCE_GATEWAY_CONFIG
Invariant 40/63(b) (CHECK17): AttendanceProvider config change -- HR_ADMIN/ICT proposes, MD_CEO approves, same shape as PAYMENT_GATEWAY_CONFIG

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ATTENDANCE_GATEWAY_CONFIG_STANDARD | STANDARD | — | ATTENDANCE_GATEWAY_POLICY | 1. ATTENDANCE_GATEWAY_POLICY APPROVE |

### BUDGET_ACTIVATION
Phase 4 §3 / invariant 20: flips a BOARD_APPROVED budget_version to ACTIVE — the "deployment != activation" gate that unlocks live variance reporting, F-BZ KRIs, and expenditure encumbrance checks

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| BUDGET_ACTIVATION_STANDARD | STANDARD | — | BUDGET_MANAGEMENT | 1. BUDGET_MANAGEMENT APPROVE |

### BUDGET_REVIEW_PACK_CIRCULATION
Budget Spec §5b: maker generates a report_run pack, reviewer approves it for circulation

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| BUDGET_REVIEW_PACK_CIRCULATION_STANDARD | STANDARD | — | BUDGET_REVIEW_PACK | 1. BUDGET_REVIEW_PACK APPROVE |

### CALENDAR_GATEWAY_CONFIG
Invariant 73(b) (CHECK27): CalendarGatewayProvider config change -- ICT proposes, MD_CEO approves, same shape as ATTENDANCE_GATEWAY_CONFIG

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| CALENDAR_GATEWAY_CONFIG_STANDARD | STANDARD | — | CALENDAR_GATEWAY_POLICY | 1. CALENDAR_GATEWAY_POLICY APPROVE |

### CERTIFICATE_TEMPLATE_APPROVAL
Invariant 52(b): Compliance proposes a certificate template version (per product class) -> MD_CEO approves activation

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| CERTIFICATE_TEMPLATE_APPROVAL_STANDARD | STANDARD | — | CERTIFICATE_TEMPLATE_MANAGEMENT | 1. CERTIFICATE_TEMPLATE_MANAGEMENT APPROVE |

### COUNTERPARTY_FACILITY_APPLICATION_REVIEW
Invariant 28(e)(ii): a NEW facility request on an already-onboarded counterparty, feeding the SAME IC1->Risk->IC2 governance chain under a distinct type code so the inbox tells it apart from a first-time onboarding case

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| COUNTERPARTY_FACILITY_APPLICATION_REVIEW_STANDARD | STANDARD | — | COUNTERPARTY_ONBOARDING | 1. FACILITY_APPLICATION_RISK_REVIEW APPROVE<br>2. FACILITY_APPLICATION_BD_REVIEW APPROVE<br>3. FACILITY_APPLICATION_FINANCE_REVIEW APPROVE<br>4. FACILITY_APPLICATION_COMPLIANCE_APPROVAL APPROVE |

### COUNTERPARTY_ONBOARDING_CASE_REVIEW
Invariant 27(b): the digitized 7-step Investee Onboarding Template's Step 3(IC1)->5(Risk)->[6(MD)]->7(IC2) chain

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| COUNTERPARTY_ONBOARDING_CASE_REVIEW_HIGH | HIGH_RISK | — | COUNTERPARTY_ONBOARDING | 1. ONBOARDING_IC_REVIEW APPROVE<br>2. ONBOARDING_RISK_REVIEW APPROVE<br>3. ONBOARDING_MD_APPROVAL APPROVE<br>4. ONBOARDING_IC_REVIEW APPROVE |
| COUNTERPARTY_ONBOARDING_CASE_REVIEW_LOW_MEDIUM | LOW_MEDIUM_RISK | — | COUNTERPARTY_ONBOARDING | 1. ONBOARDING_IC_REVIEW APPROVE<br>2. ONBOARDING_RISK_REVIEW APPROVE<br>3. ONBOARDING_IC_REVIEW APPROVE |

### COUNTERPARTY_RESTRUCTURE_EXCEPTION
Invariant 25(4): a restructure request exceeding the DB-enforced 1-restructure/1-month limit -> MD_CEO approves as a named exception, never a unilateral override

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| COUNTERPARTY_RESTRUCTURE_EXCEPTION_STANDARD | STANDARD | — | COUNTERPARTY_RESTRUCTURE_REQUEST | 1. COUNTERPARTY_RESTRUCTURE_EXCEPTION APPROVE |

### COUNTERPARTY_WRITE_OFF
Invariant 51(b-vi) (CHECK13): counterparty write-off -- Portfolio proposes, FIN_ADMIN approves and fires the IMPAIRMENT_CHARGE event journal

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| COUNTERPARTY_WRITE_OFF_STANDARD | STANDARD | — | COUNTERPARTY_WRITE_OFF_INITIATION | 1. COUNTERPARTY_WRITE_OFF_APPROVAL APPROVE |

### DELEGATION_GRANT
Delegation of Authority grant approval, CLAUDE.md 9a

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| DELEGATION_GRANT_STANDARD | STANDARD | — | DELEGATION_GRANT_INITIATION | 1. DELEGATION_GRANT_APPROVAL APPROVE |
| e3af2a0f | STANDARD | — | DELEGATION_GRANT_INITIATION | 1. DELEGATION_GRANT_APPROVAL APPROVE |

### DEPARTMENT_HEAD_DESIGNATION_APPROVAL
Invariant 74(b) (CHECK27, v1.2): department_head_designation approval — flips DRAFT to ACTIVE, supersedes the prior head of the same org unit

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| DEPARTMENT_HEAD_DESIGNATION_STANDARD | STANDARD | — | DEPARTMENT_HEAD_DESIGNATION | 1. DEPARTMENT_HEAD_DESIGNATION APPROVE |

### DISTRIBUTION
Profit distribution approval chain, SRS §6.2

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| DISTRIBUTION_LOSS | LOSS | — | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked)<br>2. SHARIAH_SIGNOFF APPROVE |
| DISTRIBUTION_PENALTY_TO_CHARITY | PENALTY_TO_CHARITY | — | PENALTY_TO_CHARITY_INITIATION | 1. PENALTY_TO_CHARITY_APPROVAL APPROVE<br>2. SHARIAH_SIGNOFF APPROVE |
| DISTRIBUTION_TIER_1 | — | 0 – 100000000 | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked) |
| DISTRIBUTION_TIER_2 | — | 100000000 – 1000000000 | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked) |
| DISTRIBUTION_TIER_3 | — | 1000000000 – +∞ | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked)<br>2. SHARIAH_SIGNOFF APPROVE |
| db1d372f | — | 1000000000 – +∞ | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked)<br>2. SHARIAH_SIGNOFF APPROVE |
| 80c7a8b7 | PENALTY_TO_CHARITY | — | PENALTY_TO_CHARITY_INITIATION | 1. PENALTY_TO_CHARITY_APPROVAL APPROVE<br>2. SHARIAH_SIGNOFF APPROVE |
| 6c5723bf | — | 0 – 100000000 | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked) |
| 3c6a13f2 | — | 100000000 – 1000000000 | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked) |
| e24550b4 | LOSS | — | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE (amount-limit checked)<br>2. SHARIAH_SIGNOFF APPROVE |

### EMOLUMENT_STRUCTURE_APPROVAL
Invariant 37(e): emolument_structure component approval — flips DRAFT to ACTIVE, supersedes the prior ACTIVE row for that (cadre, notch, component)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EMOLUMENT_STRUCTURE_APPROVAL_STANDARD | STANDARD | — | EMOLUMENT_STRUCTURE_MANAGEMENT | 1. EMOLUMENT_STRUCTURE_MANAGEMENT APPROVE |

### EMPLOYEE_INCENTIVE_PCT_CHANGE
Invariant 50(b) addendum (CEO, 8-Jul-2026): HR proposes a new Employee.performanceIncentivePct -- approval applies it UNLESS the employee has an in-flight (not yet INCENTIVE_COMPUTED) PMS cycle, in which case the approval itself is refused (never retroactive)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EMPLOYEE_INCENTIVE_PCT_CHANGE_STANDARD | STANDARD | — | EMPLOYEE_LIFECYCLE_INITIATION | 1. EMPLOYEE_INCENTIVE_PCT_APPROVAL APPROVE |

### EMPLOYEE_OFFBOARDING
Invariant 50(b): HR proposes an offboarding -- approval flips Employee.status TERMINATED and deactivates (SUSPENDED) the linked AppUser login

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EMPLOYEE_OFFBOARDING_STANDARD | STANDARD | — | EMPLOYEE_LIFECYCLE_INITIATION | 1. EMPLOYEE_LIFECYCLE_APPROVAL APPROVE |

### EMPLOYEE_ONBOARDING
Invariant 50(b): HR proposes a new hire -- approval creates the Employee row

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EMPLOYEE_ONBOARDING_STANDARD | STANDARD | — | EMPLOYEE_LIFECYCLE_INITIATION | 1. EMPLOYEE_LIFECYCLE_APPROVAL APPROVE |

### EMPLOYEE_PERSONAL_RECORD_CHANGE
Invariant 29(a): employee requests a gated marital-status/address/next-of-kin change -> HR acknowledges (payroll/benefits implications)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EMPLOYEE_PERSONAL_RECORD_CHANGE_STANDARD | STANDARD | — | PMS_SELF_SCORE | 1. EMPLOYEE_PERSONAL_RECORDS APPROVE |

### EXPENDITURE_REQUISITION
Budget Spec §3: expenditure control — encumber at requisition -> SAU Internal Control review -> CEO approval per DoA

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| EXPENDITURE_REQUISITION_STANDARD | — | 0 – +∞ | BUDGET_MANAGEMENT | 1. BUDGET_CONTROL_REVIEW APPROVE<br>2. BUDGET_MANAGEMENT APPROVE (amount-limit checked) |

### INVESTMENT_MEMO_CIO_APPROVAL
Invariant 36(f): Portfolio Officer submits an investment memo -> CIO approves -> only then does the facility application enter the Risk/BD/Finance/Compliance chain

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTMENT_MEMO_CIO_APPROVAL_AT_OR_ABOVE_THRESHOLD | AT_OR_ABOVE_THRESHOLD | — | COUNTERPARTY_ONBOARDING | 1. INVESTMENT_MEMO_PM_VALIDATION APPROVE<br>2. INVESTMENT_MEMO_CIO_APPROVAL APPROVE<br>3. INVESTMENT_COMMITTEE_APPROVAL APPROVE<br>4. INVESTMENT_MEMO_MD_APPROVAL APPROVE |
| INVESTMENT_MEMO_CIO_APPROVAL_STANDARD | BELOW_THRESHOLD | — | COUNTERPARTY_ONBOARDING | 1. INVESTMENT_MEMO_PM_VALIDATION APPROVE<br>2. INVESTMENT_MEMO_CIO_APPROVAL APPROVE |

### INVESTMENT_MEMO_THRESHOLD_APPROVAL
Invariant 46(c)/46(g)(i): CIO proposes a new investment memo DoA threshold -> MD_CEO approves -> DRAFT->ACTIVE flip, same shape as ACCOUNTING_FRAMEWORK_MAP_APPROVAL

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTMENT_MEMO_THRESHOLD_APPROVAL_STANDARD | STANDARD | — | INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | 1. INVESTMENT_MEMO_THRESHOLD_MANAGEMENT APPROVE |

### INVESTOR_BANK_ACCOUNT_CHANGE
Invariant 51(a-i): staff-mediated, document-evidenced change of WHERE an investor's redemption proceeds get paid -- APPROVAL then independent REVERIFICATION, cooling-off window starts on final APPROVED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_BANK_ACCOUNT_CHANGE_STANDARD | STANDARD | — | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | 1. BANK_ACCOUNT_CHANGE_APPROVAL APPROVE<br>2. BANK_ACCOUNT_CHANGE_REVERIFICATION APPROVE |

### INVESTOR_CONTACT_KYC_AMENDMENT
Invariant 51(a-ii): governed post-onboarding update of an investor's contact/KYC data -- BD proposes, Compliance acknowledges, same shape as EMPLOYEE_PERSONAL_RECORD_CHANGE

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_CONTACT_KYC_AMENDMENT_STANDARD | STANDARD | — | INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | 1. INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL APPROVE |

### INVESTOR_EXIT
Invariant 51(b-v) (CHECK13): investor maturity-transition or final-exit -- BD proposes, Compliance approves, flips Investor.fundStatus (MATURED or EXITED)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_EXIT_STANDARD | STANDARD | — | INVESTOR_EXIT_INITIATION | 1. INVESTOR_EXIT_APPROVAL APPROVE |

### INVESTOR_MANDATE_AMENDMENT
Invariant 51(c) (CHECK13): post-setup change to an investor mandate's targetReturnRate/rolloverDefault/earlyExitWaiver -- BD proposes, Portfolio Management approves

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_MANDATE_AMENDMENT_STANDARD | STANDARD | — | INVESTOR_MANDATE_AMENDMENT_INITIATION | 1. INVESTOR_MANDATE_AMENDMENT_APPROVAL APPROVE |

### INVESTOR_MANDATE_SHARIAH_REVIEW
Restricted-mandate Shariah review, SRS §6.1 step 6

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| MANDATE_SHARIAH_REVIEW_STANDARD | STANDARD | — | SHARIAH_RECORDS | 1. SHARIAH_RECORDS APPROVE |
| 1d787fa0 | STANDARD | — | SHARIAH_RECORDS | 1. SHARIAH_RECORDS APPROVE |

### INVESTOR_ONBOARDING
Investor onboarding KYC approval, SRS §6.1 steps 2-4

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_ONBOARDING_STANDARD | STANDARD | — | INVESTOR_ONBOARDING | 1. INVESTOR_ONBOARDING APPROVE |
| ecbc8967 | STANDARD | — | INVESTOR_ONBOARDING | 1. INVESTOR_ONBOARDING APPROVE |

### INVESTOR_ONBOARDING_CASE_REVIEW
Invariant 27(a): the digitized 7-step Investor Onboarding Template's Step 3(IC1)->5(Risk)->[6(MD)]->7(IC2) chain, scenario-selected by the accumulative risk profile

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| INVESTOR_ONBOARDING_CASE_REVIEW_HIGH | HIGH_RISK | — | INVESTOR_ONBOARDING | 1. ONBOARDING_IC_REVIEW APPROVE<br>2. ONBOARDING_RISK_REVIEW APPROVE<br>3. ONBOARDING_MD_APPROVAL APPROVE<br>4. ONBOARDING_IC_REVIEW APPROVE |
| INVESTOR_ONBOARDING_CASE_REVIEW_LOW_MEDIUM | LOW_MEDIUM_RISK | — | INVESTOR_ONBOARDING | 1. ONBOARDING_IC_REVIEW APPROVE<br>2. ONBOARDING_RISK_REVIEW APPROVE<br>3. ONBOARDING_IC_REVIEW APPROVE |

### JOURNAL_POSTING
Phase 2: journal entry posting approval — maker drafts, checker approves, DRAFT->POSTED only from APPROVED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| JOURNAL_POSTING_PAYROLL_THREE_HAND | PAYROLL_THREE_HAND | — | PAYROLL_PREPARATION | 1. PAYROLL_FINANCE_REVIEW APPROVE<br>2. PAYROLL_CEO_APPROVAL APPROVE |
| JOURNAL_POSTING_STANDARD | STANDARD | — | JOURNAL_ENTRIES | 1. JOURNAL_ENTRIES APPROVE |

### KPI_DEFINITION_APPROVAL
Invariant 51(c2): HR proposes a kpi_definition row -> MD_CEO approves

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| KPI_DEFINITION_APPROVAL_STANDARD | STANDARD | — | KPI_DEFINITION_MANAGEMENT | 1. KPI_DEFINITION_MANAGEMENT APPROVE |

### KPI_WEIGHT_MATRIX_APPROVAL
Invariant 51(c2) KPI class-weighting addendum: HR proposes a kpi_weight_matrix version -> MD_CEO approves, no exceptions

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| KPI_WEIGHT_MATRIX_APPROVAL_STANDARD | STANDARD | — | KPI_WEIGHT_MATRIX | 1. KPI_WEIGHT_MATRIX APPROVE |

### LETTER_ISSUANCE_APPROVAL
Invariant 52(c): CS/Compliance/Portfolio generates a merge-filled letter instance -> a different Compliance/MD_CEO user approves -> client-facing dispatch

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| LETTER_ISSUANCE_APPROVAL_STANDARD | STANDARD | — | LETTER_ISSUANCE | 1. LETTER_ISSUANCE APPROVE |

### LETTER_TEMPLATE_APPROVAL
Invariant 52(c): Compliance proposes a letter template version (per letter type) -> MD_CEO approves activation

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| LETTER_TEMPLATE_APPROVAL_STANDARD | STANDARD | — | LETTER_TEMPLATE_MANAGEMENT | 1. LETTER_TEMPLATE_MANAGEMENT APPROVE |

### LETTERHEAD_TEMPLATE_APPROVAL
Invariant 52(a): CS proposes a letterhead template version -> MD_CEO approves activation

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| LETTERHEAD_TEMPLATE_APPROVAL_STANDARD | STANDARD | — | LETTERHEAD_TEMPLATE_MANAGEMENT | 1. LETTERHEAD_TEMPLATE_MANAGEMENT APPROVE |

### MARKETING_RESOURCE_APPROVAL
Invariant 28(b): BD uploads a marketing_resource -> Compliance approves it for external use

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| MARKETING_RESOURCE_APPROVAL_STANDARD | STANDARD | — | MARKETING_RESOURCE | 1. MARKETING_RESOURCE APPROVE |

### MARKETING_SEND_APPROVAL
Invariant 28(b): BD initiates a marketing_send -> Compliance approval IS the dispatch trigger

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| MARKETING_SEND_APPROVAL_STANDARD | STANDARD | — | MARKETING_SEND | 1. MARKETING_SEND APPROVE |

### ND_MANDATE_ACTIVATION
Invariant 42(c): NdMandateEngineService.activateMandate -- separate approver from createMandate, no same-user create+activate

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ND_MANDATE_ACTIVATION_STANDARD | STANDARD | — | ND_MANDATE_INITIATION | 1. ND_MANDATE_ACTIVATION APPROVE |

### PAYMENT_GATEWAY_CONFIG
Invariant 55(a) (CEO ruling, 9-Jul-2026): provider/custodian-account config change -- FIN_ADMIN proposes, MD_CEO approves, same shape as AI_CAPABILITY_FLAG_TOGGLE

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PAYMENT_GATEWAY_CONFIG_STANDARD | STANDARD | — | PAYMENT_GATEWAY_POLICY | 1. PAYMENT_GATEWAY_POLICY APPROVE |

### PAYMENT_GATEWAY_INFLOW_DECISION
Invariant 55(a) (CEO ruling, 9-Jul-2026): a suspense-queue reject/reversal decision -- one Finance officer proposes, a SECOND Finance officer approves before it takes effect

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PAYMENT_GATEWAY_INFLOW_DECISION_STANDARD | STANDARD | — | PAYMENT_GATEWAY_SUSPENSE | 1. PAYMENT_GATEWAY_SUSPENSE APPROVE |

### PAYOUT_BATCH_APPROVAL
Invariant 65(b): FA compiles a payout batch from the Fund Obligations Schedule -> MD_CEO approves (amount-tiered via the batch total) -> approval auto-generates the bank instruction letter

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PAYOUT_BATCH_APPROVAL_STANDARD | STANDARD | — | PAYOUT_COMPILATION | 1. PAYOUT_COMPILATION APPROVE (amount-limit checked) |

### PAYROLL_APPROVAL
Invariant 46(f): three-hand payroll chain — HR_ADMIN prepares -> Finance reviews -> MD/CEO approves; only MD/CEO approval releases posting/payment

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PAYROLL_APPROVAL_STANDARD | STANDARD | — | PAYROLL_PREPARATION | 1. PAYROLL_FINANCE_REVIEW APPROVE<br>2. PAYROLL_CEO_APPROVAL APPROVE |

### PETTY_CASH_REPLENISHMENT_APPROVAL
Invariant 50(a): Admin/custodian initiates a replenishment claim -> SAU Internal Control verifies -> DoA approval -> Finance disburses

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PETTY_CASH_REPLENISHMENT_APPROVAL_STANDARD | STANDARD | — | PETTY_CASH_MANAGEMENT | 1. BUDGET_CONTROL_REVIEW APPROVE<br>2. BUDGET_MANAGEMENT APPROVE (amount-limit checked)<br>3. PETTY_CASH_DISBURSEMENT APPROVE |

### PMS_CYCLE_APPROVAL
SDS §3.2: CEO approves the whole cycle (final link) once every submission is VALIDATED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PMS_CYCLE_APPROVAL_STANDARD | STANDARD | — | PMS_CYCLE_MANAGEMENT | 1. PMS_CYCLE_APPROVAL APPROVE |

### PMS_SCORE_VALIDATION
SDS §3.2 scoring chain: supervisor -> SAU QA -> Chief signoff on a self-scored employee_score_submission

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PMS_SCORE_VALIDATION_STANDARD | STANDARD | — | PMS_SELF_SCORE | 1. PMS_SUPERVISOR_VALIDATION APPROVE<br>2. PMS_SAU_QA APPROVE<br>3. PMS_CHIEF_SIGNOFF APPROVE |

### PMS_SCORECARD_OVERRIDE
SDS §1: CEO approves an individual role_scorecard_override

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PMS_SCORECARD_OVERRIDE_STANDARD | STANDARD | — | PMS_CYCLE_MANAGEMENT | 1. PMS_CYCLE_APPROVAL APPROVE |

### PMS_STRATEGY_SPINE_APPROVAL
Invariant 51(c2): SAU proposes a pillar or objective row -> MD_CEO approves with a mandatory Board resolution ref, same shape as STRATEGY_LAYER_APPROVAL

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PMS_STRATEGY_SPINE_APPROVAL_STANDARD | STANDARD | — | STRATEGY_LAYER | 1. STRATEGY_LAYER APPROVE |

### PROCUREMENT_PAYMENT_BATCH
Budget Spec §4: maker!=checker approval of a payment batch — Corporate Services drafts, FIN_ADMIN/MD_CEO approves, approval posts the payment journal

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PROCUREMENT_PAYMENT_BATCH_STANDARD | STANDARD | — | PROCUREMENT_OPERATIONS | 1. PROCUREMENT_PAYMENT_APPROVAL APPROVE |

### PRODUCT_SETUP
Invariant 44(b): the product-factory create step -- maker creates a DRAFT product, checker approves -- only APPROVED auto-provisions the ledger entity + CoA template. Shariah approval and governed-parameters approval remain separate, later gates checked before ACTIVE.

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PRODUCT_SETUP_STANDARD | STANDARD | — | PRODUCT_SETUP_INITIATION | 1. PRODUCT_SETUP_REVIEW APPROVE<br>2. PRODUCT_SETUP_APPROVAL APPROVE |

### PROSPECTUS_SHEET_AMENDMENT
Invariant 70(g): CIO proposes an amendment to a LIVE product's approved prospectus sheet -> SSB sign-off -> Compliance sign-off -> MD_CEO approval -> new version effective FORWARD from approval date only

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PROSPECTUS_SHEET_AMENDMENT_STANDARD | STANDARD | — | PROSPECTUS_AMENDMENT_PROPOSAL | 1. PROSPECTUS_AMENDMENT_SSB_SIGNOFF APPROVE<br>2. PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF APPROVE<br>3. PROSPECTUS_AMENDMENT_APPROVAL APPROVE |

### PROSPECTUS_SHEET_APPROVAL
Invariant 70(b): Unified Prospectus Parameter Sheet propose (DRAFT, freely re-editable) -> CIO review -> MD_CEO approve -> LOCKED immutably, provisioning accounting spine + access map

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| PROSPECTUS_SHEET_APPROVAL_STANDARD | STANDARD | — | PROSPECTUS_SHEET_INITIATION | 1. PROSPECTUS_SHEET_REVIEW APPROVE<br>2. PROSPECTUS_SHEET_APPROVAL APPROVE |

### REDEMPTION_APPROVAL
Invariant 42(a): SubscriptionService.initiateRedemption -- mirrors SUBSCRIPTION_APPROVAL

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| REDEMPTION_APPROVAL_STANDARD | STANDARD | — | REDEMPTION_PROCESSING | 1. REDEMPTION_PROCESSING APPROVE |

### REGULATORY_FILING_CERTIFICATION
Invariant 22 spec §2: CO prepares -> MD certifies a regulatory_filing_run — the certification IS the approval

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| REGULATORY_FILING_CERTIFICATION_STANDARD | STANDARD | — | REGULATORY_REPORTING | 1. REGULATORY_REPORTING APPROVE |

### RISK_APPETITE_MATRIX_APPROVAL
AMD-12: risk_appetite_matrix_version approval — flips DRAFT to ACTIVE

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| RISK_APPETITE_MATRIX_STANDARD | STANDARD | — | RISK_APPETITE_MATRIX | 1. RISK_APPETITE_MATRIX APPROVE |
| 6e639ed2 | STANDARD | — | RISK_APPETITE_MATRIX | 1. RISK_APPETITE_MATRIX APPROVE |

### SCHEDULER_JOB_PAUSE
Invariant 32: DoA-gated pause of a financially/regulatorily consequential scheduled job — ICT initiates, MD_CEO approves, SchedulerService.approvePauseRequest() flips the flag

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SCHEDULER_JOB_PAUSE_STANDARD | STANDARD | — | SCHEDULER_OPERATIONS | 1. SCHEDULER_PAUSE_APPROVAL APPROVE |

### SCHEDULER_JOB_RETIREMENT
Invariant 37(f): retiring a CONSEQUENTIAL scheduled job from the catalog — same DoA gate as SCHEDULER_JOB_PAUSE (ICT initiates, MD_CEO approves)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SCHEDULER_JOB_RETIREMENT_STANDARD | STANDARD | — | SCHEDULER_OPERATIONS | 1. SCHEDULER_PAUSE_APPROVAL APPROVE |

### SCREENING_COMMERCIAL_PROVIDER_CONFIG
Invariant 72(c) (CHECK26): CommercialScreeningProvider slot config change -- same shape as SCREENING_LIST_SOURCE_CONFIG

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SCREENING_COMMERCIAL_PROVIDER_CONFIG_STANDARD | STANDARD | — | SCREENING_GATEWAY_POLICY | 1. SCREENING_GATEWAY_POLICY APPROVE |

### SCREENING_HIT_ADJUDICATION
Invariant 72(b)/(e) (CHECK26): a Compliance/IC officer proposes TRUE_MATCH/FALSE_POSITIVE for a screening hit with mandatory written rationale; a DIFFERENT officer approves -- adjudicator != initiator

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SCREENING_HIT_ADJUDICATION_STANDARD | STANDARD | — | SCREENING_PERFORM | 1. SCREENING_PERFORM APPROVE |

### SCREENING_LIST_SOURCE_CONFIG
Invariant 72(a)/(c) (CHECK26): ScreeningListSource config change -- RISK_DEPT/COMPLIANCE/ICT proposes, MD_CEO approves

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SCREENING_LIST_SOURCE_CONFIG_STANDARD | STANDARD | — | SCREENING_GATEWAY_POLICY | 1. SCREENING_GATEWAY_POLICY APPROVE |

### SMOKE_CHAIN_1783726916352
Invariant 54(e)(v) substrate smoke fixture

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| 987c723e | — | 0 – +∞ | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE |
| 4aff5400 | — | 0 – +∞ | DISTRIBUTION_INITIATION | 1. DISTRIBUTION_APPROVAL APPROVE |

### STAKEHOLDER_REPORT_APPROVAL
Invariant 24: maker generates a stakeholder_report_run, a DIFFERENT authority approves it for circulation before it can be distributed

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| STAKEHOLDER_REPORT_APPROVAL_STANDARD | STANDARD | — | STAKEHOLDER_REPORT_MANAGEMENT | 1. STAKEHOLDER_REPORT_MANAGEMENT APPROVE |

### STRATEGY_LAYER_APPROVAL
Invariant 28(c): SAU proposes a strategy_statement -> MD_CEO approves with a mandatory Board resolution ref

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| STRATEGY_LAYER_APPROVAL_STANDARD | STANDARD | — | STRATEGY_LAYER | 1. STRATEGY_LAYER APPROVE |

### STRESS_BASELINE_PUBLICATION
Phase 4 §2 / amendment 27: publishing a stress_test_run as the new approved BASELINE (never required for SANDBOX runs)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| STRESS_BASELINE_PUBLICATION_STANDARD | STANDARD | — | STRESS_TESTING | 1. STRESS_TESTING APPROVE |

### SUBSCRIPTION_APPROVAL
Invariant 42(a): SubscriptionService.initiateSubscription -- maker drafts a subscription_request, checker approves -- only the approval writes the live ProductAccount + cash-leg Txn

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| SUBSCRIPTION_APPROVAL_STANDARD | STANDARD | — | CAPITAL_PLACEMENT | 1. CAPITAL_PLACEMENT APPROVE |

### TALENT_RECOMMENDATION_APPROVAL
Invariant 37(e): a welfare/reward recommendation for an employee — HR recommends, MD_CEO approves -> talent_recommendation.status PENDING->APPROVED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| TALENT_RECOMMENDATION_APPROVAL_STANDARD | STANDARD | — | TALENT_MANAGEMENT | 1. TALENT_MANAGEMENT APPROVE |

### TAX_RATE_VERSION_APPROVAL
Invariant 65(c): Finance proposes a per-tax (WHT/VAT/Stamp Duty) rate version -> MD_CEO approves -- never retroactive on already-approved batches/invoices

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| TAX_RATE_VERSION_APPROVAL_STANDARD | STANDARD | — | TAX_CONFIGURATION_MANAGEMENT | 1. TAX_CONFIGURATION_MANAGEMENT APPROVE |

### TAX_REMITTANCE_BATCH_APPROVAL
Invariant 65(c)(iii): Finance proposes a tax remittance batch (per tax type/authority) -> MD_CEO approves -> approval auto-generates the tax remittance instruction letter

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| TAX_REMITTANCE_BATCH_APPROVAL_STANDARD | STANDARD | — | TAX_REMITTANCE_MANAGEMENT | 1. TAX_REMITTANCE_MANAGEMENT APPROVE |

### USER_ROLE_ASSIGNMENT
AMD-09 §4b: RBAC change (assigning a role to a user) as a maker-checker workflow

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| USER_ROLE_ASSIGNMENT_STANDARD | STANDARD | — | RBAC_CONFIG | 1. RBAC_CONFIG APPROVE |
| 88e6a1be | STANDARD | — | RBAC_CONFIG | 1. RBAC_CONFIG APPROVE |

### WM_CLAIM_VALIDATION
Invariant 23 spec §7.3: client declares an external asset -> a DIFFERENT authorized verifier approves -> tag flips DECLARED->VERIFIED

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| WM_CLAIM_VALIDATION_STANDARD | STANDARD | — | WM_ADVISORY | 1. WM_ADVISORY APPROVE |

### ZAKAT_ASSESSMENT_CERTIFICATION
Invariant 26(c): a Zakat assessment run submitted for SSB certification -> Shariah reviewer certifies -> CERTIFIED, immutable thereafter

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ZAKAT_ASSESSMENT_CERTIFICATION_STANDARD | STANDARD | — | ZAKAT_ADVISORY | 1. ZAKAT_CERTIFICATION APPROVE |

### ZAKAT_ITEM_VALIDATION
Invariant 26(c): a client-declared EXTERNAL zakat schedule item -> a DIFFERENT authorized verifier approves -> DECLARED->VERIFIED flip (same shape as WM_CLAIM_VALIDATION)

| Rule | Scenario | Amount range (kobo) | Initiator capability | Steps (in order) |
|---|---|---|---|---|
| ZAKAT_ITEM_VALIDATION_STANDARD | STANDARD | — | ZAKAT_ADVISORY | 1. ZAKAT_ADVISORY APPROVE |

## 3. Capability Grant Matrix (as seeded)

759 grant rows across 169 platform functions. INITIATE = may start; APPROVE = may authorise; VIEW = read access.

| Function | Level | Roles | Approval limit (kobo) |
|---|---|---|---|
| ACCOUNTING_FRAMEWORK_MAP | VIEW | AUDITOR | — |
| ACCOUNTING_FRAMEWORK_MAP | INITIATE | FIN_ADMIN | — |
| ACCOUNTING_FRAMEWORK_MAP | APPROVE | MD_CEO | — |
| ACCOUNTING_PERIOD_CLOSE | VIEW | AUDITOR | — |
| ACCOUNTING_PERIOD_CLOSE | APPROVE | CFO | — |
| ACCOUNTING_PERIOD_CLOSE | INITIATE | CFO | — |
| ACCOUNTING_PERIOD_CLOSE | APPROVE | FIN_ADMIN | — |
| ACCOUNTING_PERIOD_CLOSE | INITIATE | FIN_ADMIN | — |
| ACCOUNTING_PERIOD_CLOSE | APPROVE | MD_CEO | — |
| ACCOUNTING_PERIOD_CLOSE | VIEW | MD_CEO | — |
| ACTIVATION_CONSOLE | VIEW | AUDITOR | — |
| ACTIVATION_CONSOLE | APPROVE | MD_CEO | — |
| ACTIVATION_CONSOLE | INITIATE | MD_CEO | — |
| ACTIVATION_CONSOLE | VIEW | MD_CEO | — |
| ACTIVATION_CONSOLE | APPROVE | SUPER_ADMIN | — |
| ACTIVATION_CONSOLE | VIEW | SUPER_ADMIN | — |
| ACTIVATION_CONSOLE | INITIATE | SUPER_ADMIN | — |
| AI_ANSWER_RBAC | VIEW | AUDITOR | — |
| AI_ANSWER_RBAC | VIEW | COMPLIANCE | — |
| AI_ANSWER_RBAC | VIEW | CORP_SERVICES | — |
| AI_ANSWER_RBAC | VIEW | FIN_ADMIN | — |
| AI_ANSWER_RBAC | VIEW | ICT | — |
| AI_ANSWER_RBAC | VIEW | MD_CEO | — |
| AI_ANSWER_RBAC | VIEW | PORT_MGR | — |
| AI_ANSWER_RBAC | VIEW | PORT_OFF | — |
| AI_ANSWER_RBAC | VIEW | SAU_INTERNAL_CONTROL | — |
| AI_ANSWER_RBAC | VIEW | SHARIAH_REV | — |
| AI_ANSWER_RBAC | VIEW | SUPER_ADMIN | — |
| AI_AUDITLOG_QUERY | VIEW | AUDITOR | — |
| AI_AUDITLOG_QUERY | VIEW | MD_CEO | — |
| AI_AUDITLOG_QUERY | VIEW | SAU_INTERNAL_CONTROL | — |
| AI_CAPABILITY_FLAG_MANAGEMENT | INITIATE | ICT | — |
| AI_CAPABILITY_FLAG_MANAGEMENT | VIEW | ICT | — |
| AI_CAPABILITY_FLAG_MANAGEMENT | VIEW | MD_CEO | — |
| AI_CAPABILITY_FLAG_MANAGEMENT | APPROVE | MD_CEO | — |
| AI_CHAT | VIEW | COMPLIANCE | — |
| AI_CHAT | VIEW | CORP_SERVICES | — |
| AI_CHAT | VIEW | FIN_ADMIN | — |
| AI_CHAT | VIEW | ICT | — |
| AI_CHAT | VIEW | MD_CEO | — |
| AI_CHAT | VIEW | PORT_MGR | — |
| AI_CHAT | VIEW | SAU_INTERNAL_CONTROL | — |
| AI_CHAT | VIEW | SUPER_ADMIN | — |
| AI_KILL_SWITCH | INITIATE | ICT | — |
| AI_KPI_EXPLAIN | VIEW | DEPT_CHIEF | — |
| AI_KPI_EXPLAIN | VIEW | HR_ADMIN | — |
| AI_KPI_EXPLAIN | VIEW | MD_CEO | — |
| AI_KPI_EXPLAIN | VIEW | PMS_SUPERVISOR | — |
| AI_PERF_COMMENTARY | VIEW | MD_CEO | — |
| AI_PERF_COMMENTARY | VIEW | PORT_MGR | — |
| AI_PERF_COMMENTARY | VIEW | PORT_OFF | — |
| AI_REPORT_DRAFT | VIEW | BD | — |
| AI_REPORT_DRAFT | VIEW | FIN_ADMIN | — |
| AI_REPORT_DRAFT | VIEW | PORT_MGR | — |
| AI_RISK_INTERPRET | VIEW | MD_CEO | — |
| AI_RISK_INTERPRET | VIEW | RISK_DEPT | — |
| AI_RISK_INTERPRET | VIEW | SAU_INTERNAL_CONTROL | — |
| AI_SHARIAH_ASSIST | VIEW | SHARIAH_REV | — |
| AI_SUMMARIZE | VIEW | COMPLIANCE | — |
| AI_SUMMARIZE | VIEW | FIN_ADMIN | — |
| AI_SUMMARIZE | VIEW | MD_CEO | — |
| AI_WORKFLOW_SUGGEST | VIEW | MD_CEO | — |
| AI_WORKFLOW_SUGGEST | VIEW | SAU_INTERNAL_CONTROL | — |
| ASSET_DISPOSAL | VIEW | AUDITOR | — |
| ASSET_DISPOSAL | INITIATE | CORP_SERVICES | — |
| ASSET_DISPOSAL | INITIATE | FIN_ADMIN | — |
| ASSET_DISPOSAL | VIEW | MD_CEO | — |
| ATTENDANCE_EXCEPTION_ADJUDICATION | VIEW | AUDITOR | — |
| ATTENDANCE_EXCEPTION_ADJUDICATION | VIEW | COMPLIANCE | — |
| ATTENDANCE_EXCEPTION_ADJUDICATION | VIEW | HR_ADMIN | — |
| ATTENDANCE_GATEWAY_POLICY | VIEW | AUDITOR | — |
| ATTENDANCE_GATEWAY_POLICY | VIEW | COMPLIANCE | — |
| ATTENDANCE_GATEWAY_POLICY | INITIATE | HR_ADMIN | — |
| ATTENDANCE_GATEWAY_POLICY | VIEW | HR_ADMIN | — |
| ATTENDANCE_GATEWAY_POLICY | VIEW | ICT | — |
| ATTENDANCE_GATEWAY_POLICY | INITIATE | ICT | — |
| ATTENDANCE_GATEWAY_POLICY | APPROVE | MD_CEO | — |
| ATTENDANCE_GATEWAY_POLICY | VIEW | MD_CEO | — |
| AUDIT_TRAIL_VIEW | VIEW | AUDITOR | — |
| AUDIT_TRAIL_VIEW | VIEW | COMPLIANCE | — |
| AUDIT_TRAIL_VIEW | VIEW | CRAO | — |
| AUDIT_TRAIL_VIEW | VIEW | FIN_ADMIN | — |
| AUDIT_TRAIL_VIEW | VIEW | HEAD_SAU | — |
| AUDIT_TRAIL_VIEW | VIEW | MD_CEO | — |
| AUDIT_TRAIL_VIEW | VIEW | PORT_MGR | — |
| AUDIT_TRAIL_VIEW | VIEW | PORT_OFF | — |
| AUDIT_TRAIL_VIEW | VIEW | SHARIAH_REV | — |
| AUDIT_TRAIL_VIEW | VIEW | SUPER_ADMIN | — |
| BANK_ACCOUNT_CHANGE_APPROVAL | APPROVE | FIN_ADMIN | — |
| BANK_ACCOUNT_CHANGE_REVERIFICATION | APPROVE | COMPLIANCE | — |
| BANK_RECONCILIATION | VIEW | AUDITOR | — |
| BANK_RECONCILIATION | INITIATE | CORP_SERVICES | — |
| BANK_RECONCILIATION | VIEW | CORP_SERVICES | — |
| BANK_RECONCILIATION | VIEW | FIN_ADMIN | — |
| BANK_RECONCILIATION | INITIATE | FIN_ADMIN | — |
| BANK_RECONCILIATION | VIEW | FUND_ACCT | — |
| BANK_RECONCILIATION | INITIATE | FUND_ACCT | — |
| BANK_RECONCILIATION | VIEW | MD_CEO | — |
| BD_DASHBOARD | VIEW | BD | — |
| BD_DASHBOARD | VIEW | CBGO | — |
| BD_DASHBOARD | VIEW | MGR_BD | — |
| BD_DASHBOARD | VIEW | MKT_OFF | — |
| BD_DASHBOARD | VIEW | REL_OFF | — |
| BD_REGISTER | VIEW | AUDITOR | — |
| BD_REGISTER | VIEW | BD | — |
| BD_REGISTER | VIEW | CBGO | — |
| BD_REGISTER | VIEW | MD_CEO | — |
| BD_REGISTER | VIEW | MGR_BD | — |
| BOARD_CALENDAR_MANAGEMENT | VIEW | AUDITOR | — |
| BOARD_CALENDAR_MANAGEMENT | INITIATE | CS | — |
| BOARD_CALENDAR_MANAGEMENT | VIEW | CS | — |
| BOARD_CALENDAR_MANAGEMENT | VIEW | MD_CEO | — |
| BOARD_CALENDAR_MANAGEMENT | INITIATE | MD_CEO | — |
| BOARD_CALENDAR_MANAGEMENT | VIEW | SAU_INTERNAL_CONTROL | — |
| BOARD_DIRECTIVE_MANAGEMENT | VIEW | AUDITOR | — |
| BOARD_DIRECTIVE_MANAGEMENT | INITIATE | CS | — |
| BOARD_DIRECTIVE_MANAGEMENT | VIEW | CS | — |
| BOARD_DIRECTIVE_MANAGEMENT | VIEW | MD_CEO | — |
| BOARD_DIRECTIVE_MANAGEMENT | VIEW | SAU_INTERNAL_CONTROL | — |
| BOARD_MINUTES_MANAGEMENT | INITIATE | CS | — |
| BOARD_MINUTES_MANAGEMENT | VIEW | CS | — |
| BOARD_MINUTES_MANAGEMENT | VIEW | MD_CEO | — |
| BUDGET_CONTROL_REVIEW | VIEW | AUDITOR | — |
| BUDGET_CONTROL_REVIEW | VIEW | MD_CEO | — |
| BUDGET_CONTROL_REVIEW | APPROVE | SAU_INTERNAL_CONTROL | — |
| BUDGET_MANAGEMENT | VIEW | AUDITOR | — |
| BUDGET_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| BUDGET_MANAGEMENT | VIEW | FIN_ADMIN | — |
| BUDGET_MANAGEMENT | APPROVE | MD_CEO | — |
| BUDGET_MANAGEMENT | VIEW | MD_CEO | — |
| BUDGET_REVIEW_PACK | VIEW | AUDITOR | — |
| BUDGET_REVIEW_PACK | APPROVE | CFO | — |
| BUDGET_REVIEW_PACK | VIEW | CFO | — |
| BUDGET_REVIEW_PACK | INITIATE | CFO | — |
| BUDGET_REVIEW_PACK | APPROVE | FIN_ADMIN | — |
| BUDGET_REVIEW_PACK | VIEW | FIN_ADMIN | — |
| BUDGET_REVIEW_PACK | INITIATE | FIN_ADMIN | — |
| BUDGET_REVIEW_PACK | APPROVE | MD_CEO | — |
| BUDGET_REVIEW_PACK | VIEW | MD_CEO | — |
| BUREAU_GATEWAY_POLICY | VIEW | AUDITOR | — |
| BUREAU_GATEWAY_POLICY | INITIATE | ICT | — |
| BUREAU_GATEWAY_POLICY | VIEW | ICT | — |
| BUREAU_GATEWAY_POLICY | VIEW | MD_CEO | — |
| BUREAU_GATEWAY_POLICY | INITIATE | RISK_DEPT | — |
| BUREAU_GATEWAY_POLICY | VIEW | RISK_DEPT | — |
| BUREAU_GATEWAY_PULL | VIEW | AUDITOR | — |
| BUREAU_GATEWAY_PULL | VIEW | MD_CEO | — |
| BUREAU_GATEWAY_PULL | INITIATE | PORT_MGR | — |
| BUREAU_GATEWAY_PULL | VIEW | PORT_MGR | — |
| BUREAU_GATEWAY_PULL | VIEW | PORT_OFF | — |
| BUREAU_GATEWAY_PULL | INITIATE | PORT_OFF | — |
| CALENDAR_GATEWAY_POLICY | VIEW | AUDITOR | — |
| CALENDAR_GATEWAY_POLICY | VIEW | COMPLIANCE | — |
| CALENDAR_GATEWAY_POLICY | VIEW | ICT | — |
| CALENDAR_GATEWAY_POLICY | INITIATE | ICT | — |
| CALENDAR_GATEWAY_POLICY | VIEW | MD_CEO | — |
| CALENDAR_GATEWAY_POLICY | APPROVE | MD_CEO | — |
| CAPITAL_PLACEMENT | VIEW | AUDITOR | — |
| CAPITAL_PLACEMENT | VIEW | FIN_ADMIN | — |
| CAPITAL_PLACEMENT | INITIATE | FIN_ADMIN | — |
| CAPITAL_PLACEMENT | VIEW | INVESTOR | — |
| CAPITAL_PLACEMENT | VIEW | MD_CEO | — |
| CAPITAL_PLACEMENT | APPROVE | PORT_MGR | — |
| CAPITAL_PLACEMENT | VIEW | PORT_MGR | — |
| CAPITAL_PLACEMENT | VIEW | PORT_OFF | — |
| CAPITAL_PLACEMENT | INITIATE | PORT_OFF | — |
| CAPITAL_PLACEMENT | INITIATE | SYSTEM_PAYMENT_GATEWAY | — |
| CERTIFICATE_TEMPLATE_MANAGEMENT | VIEW | AUDITOR | — |
| CERTIFICATE_TEMPLATE_MANAGEMENT | INITIATE | COMPLIANCE | — |
| CERTIFICATE_TEMPLATE_MANAGEMENT | VIEW | COMPLIANCE | — |
| CERTIFICATE_TEMPLATE_MANAGEMENT | APPROVE | MD_CEO | — |
| CERTIFICATE_TEMPLATE_MANAGEMENT | VIEW | MD_CEO | — |
| CLIENT_MESSAGING | VIEW | AUDITOR | — |
| CLIENT_MESSAGING | VIEW | FIN_ADMIN | — |
| CLIENT_MESSAGING | INITIATE | FIN_ADMIN | — |
| CLIENT_MESSAGING | VIEW | MD_CEO | — |
| CLIENT_MESSAGING | INITIATE | REL_OFF | — |
| CLIENT_MESSAGING | VIEW | REL_OFF | — |
| CLIENT_MESSAGING | INITIATE | WM_ADVISOR | — |
| CLIENT_MESSAGING | VIEW | WM_ADVISOR | — |
| COMPANY_ACCOUNTING_DASHBOARD | VIEW | CFO | — |
| COMPANY_ACCOUNTING_DASHBOARD | VIEW | COMP_ACCT | — |
| COMPANY_ACCOUNTING_DASHBOARD | VIEW | MGR_FINCON | — |
| COMPLAINT_MANAGEMENT | VIEW | AUDITOR | — |
| COMPLAINT_MANAGEMENT | VIEW | COMPLIANCE | — |
| COMPLAINT_MANAGEMENT | INITIATE | COMPLIANCE | — |
| COMPLAINT_MANAGEMENT | VIEW | MD_CEO | — |
| COMPLAINT_MANAGEMENT | VIEW | REL_OFF | — |
| COMPLAINT_MANAGEMENT | INITIATE | REL_OFF | — |
| CONTROLS_DASHBOARD | VIEW | AUDITOR | — |
| CONTROLS_DASHBOARD | VIEW | MD_CEO | — |
| CONTROLS_DASHBOARD | VIEW | SUPER_ADMIN | — |
| COUNTERPARTY_ONBOARDING | VIEW | AUDITOR | — |
| COUNTERPARTY_ONBOARDING | VIEW | MD_CEO | — |
| COUNTERPARTY_ONBOARDING | VIEW | PORT_MGR | — |
| COUNTERPARTY_ONBOARDING | INITIATE | PORT_MGR | — |
| COUNTERPARTY_ONBOARDING | INITIATE | PORT_OFF | — |
| COUNTERPARTY_ONBOARDING | VIEW | PORT_OFF | — |
| COUNTERPARTY_RESTRUCTURE_EXCEPTION | VIEW | AUDITOR | — |
| COUNTERPARTY_RESTRUCTURE_EXCEPTION | APPROVE | MD_CEO | — |
| COUNTERPARTY_RESTRUCTURE_EXCEPTION | VIEW | MD_CEO | — |
| COUNTERPARTY_RESTRUCTURE_REQUEST | VIEW | AUDITOR | — |
| COUNTERPARTY_RESTRUCTURE_REQUEST | VIEW | MD_CEO | — |
| COUNTERPARTY_RESTRUCTURE_REQUEST | INITIATE | PORT_MGR | — |
| COUNTERPARTY_RESTRUCTURE_REQUEST | APPROVE | PORT_MGR | — |
| COUNTERPARTY_WRITE_OFF_APPROVAL | APPROVE | FIN_ADMIN | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | VIEW | AUDITOR | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | VIEW | FIN_ADMIN | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | VIEW | MD_CEO | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | VIEW | PORT_MGR | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | INITIATE | PORT_MGR | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | INITIATE | PORT_OFF | — |
| COUNTERPARTY_WRITE_OFF_INITIATION | VIEW | PORT_OFF | — |
| DAILY_ACCRUAL_BATCH | VIEW | AUDITOR | — |
| DAILY_ACCRUAL_BATCH | INITIATE | PORT_OFF | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | CBGO | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | CFO | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | CIO | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | CRAO | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | DEPT_CHIEF | — |
| DASHBOARD_COMPOSER_PUBLISH | INITIATE | MD_CEO | — |
| DATA_MIGRATION | VIEW | AUDITOR | — |
| DATA_MIGRATION | INITIATE | FIN_ADMIN | — |
| DATA_MIGRATION | VIEW | MD_CEO | — |
| DATA_MIGRATION | INITIATE | SUPER_ADMIN | — |
| DATA_PROTECTION_COMPLIANCE | VIEW | AUDITOR | — |
| DATA_PROTECTION_COMPLIANCE | VIEW | COMPLIANCE | — |
| DATA_PROTECTION_COMPLIANCE | APPROVE | COMPLIANCE | — |
| DATA_PROTECTION_COMPLIANCE | INITIATE | COMPLIANCE | — |
| DATA_PROTECTION_COMPLIANCE | VIEW | CRAO | — |
| DATA_PROTECTION_COMPLIANCE | VIEW | HEAD_SAU | — |
| DATA_PROTECTION_COMPLIANCE | VIEW | MD_CEO | — |
| DELEGATION_GRANT_APPROVAL | APPROVE | MD_CEO | — |
| DELEGATION_GRANT_INITIATION | INITIATE | COMPLIANCE | — |
| DELEGATION_GRANT_INITIATION | INITIATE | FIN_ADMIN | — |
| DELEGATION_GRANT_INITIATION | INITIATE | MD_CEO | — |
| DELEGATION_GRANT_INITIATION | VIEW | MD_CEO | — |
| DELEGATION_GRANT_INITIATION | INITIATE | PORT_MGR | — |
| DELEGATION_GRANT_INITIATION | INITIATE | PORT_OFF | — |
| DELEGATION_GRANT_INITIATION | INITIATE | SHARIAH_REV | — |
| DEPARTMENT_HEAD_DESIGNATION | VIEW | AUDITOR | — |
| DEPARTMENT_HEAD_DESIGNATION | VIEW | HR_ADMIN | — |
| DEPARTMENT_HEAD_DESIGNATION | INITIATE | HR_ADMIN | — |
| DEPARTMENT_HEAD_DESIGNATION | APPROVE | MD_CEO | — |
| DEPARTMENT_HEAD_DESIGNATION | VIEW | MD_CEO | — |
| DEPARTMENT_HEAD_DESIGNATION | VIEW | SUPER_ADMIN | — |
| DISTRIBUTION_APPROVAL | VIEW | AUDITOR | — |
| DISTRIBUTION_APPROVAL | VIEW | MD_CEO | — |
| DISTRIBUTION_APPROVAL | APPROVE | MD_CEO | — |
| DISTRIBUTION_APPROVAL | APPROVE | PORT_MGR | 100000000 |
| DISTRIBUTION_INITIATION | VIEW | AUDITOR | — |
| DISTRIBUTION_INITIATION | VIEW | MD_CEO | — |
| DISTRIBUTION_INITIATION | INITIATE | PORT_MGR | — |
| DISTRIBUTION_INITIATION | INITIATE | PORT_OFF | — |
| DOCUMENT_REGISTER | VIEW | AUDITOR | — |
| DOCUMENT_REGISTER | INITIATE | BD | — |
| DOCUMENT_REGISTER | VIEW | BD | — |
| DOCUMENT_REGISTER | INITIATE | COMPLIANCE | — |
| DOCUMENT_REGISTER | VIEW | COMPLIANCE | — |
| DOCUMENT_REGISTER | VIEW | FIN_ADMIN | — |
| DOCUMENT_REGISTER | INITIATE | FIN_ADMIN | — |
| DOCUMENT_REGISTER | INITIATE | HR_ADMIN | — |
| DOCUMENT_REGISTER | VIEW | HR_ADMIN | — |
| DOCUMENT_REGISTER | VIEW | MD_CEO | — |
| DOCUMENT_REGISTER | VIEW | SHARIAH_REV | — |
| DOCUMENT_REGISTER | INITIATE | SHARIAH_REV | — |
| DOCUMENT_REGISTER | INITIATE | SUPER_ADMIN | — |
| DOCUMENT_REGISTER | VIEW | SUPER_ADMIN | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | VIEW | AUDITOR | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | APPROVE | CFO | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | VIEW | CFO | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | INITIATE | CFO | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | APPROVE | FIN_ADMIN | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | VIEW | FIN_ADMIN | — |
| EMOLUMENT_STRUCTURE_MANAGEMENT | VIEW | MD_CEO | — |
| EMPLOYEE_INCENTIVE_PCT_APPROVAL | APPROVE | MD_CEO | — |
| EMPLOYEE_LIFECYCLE_APPROVAL | APPROVE | MD_CEO | — |
| EMPLOYEE_LIFECYCLE_INITIATION | VIEW | HR_ADMIN | — |
| EMPLOYEE_LIFECYCLE_INITIATION | INITIATE | HR_ADMIN | — |
| EMPLOYEE_LIFECYCLE_INITIATION | VIEW | MD_CEO | — |
| EMPLOYEE_PERSONAL_RECORDS | VIEW | HR_ADMIN | — |
| EMPLOYEE_PERSONAL_RECORDS | APPROVE | HR_ADMIN | — |
| EMPLOYEE_PERSONAL_RECORDS | VIEW | MD_CEO | — |
| EXEC_OVERSIGHT | VIEW | AUDITOR | — |
| EXEC_OVERSIGHT | VIEW | COMPLIANCE | — |
| EXEC_OVERSIGHT | INITIATE | COMPLIANCE | — |
| EXEC_OVERSIGHT | VIEW | CRAO | — |
| EXEC_OVERSIGHT | VIEW | MD_CEO | — |
| EXEC_OVERSIGHT | INITIATE | MD_CEO | — |
| EXEC_OVERSIGHT | APPROVE | MD_CEO | — |
| FACILITY_APPLICATION_BD_REVIEW | APPROVE | BD | — |
| FACILITY_APPLICATION_COMPLIANCE_APPROVAL | APPROVE | COMPLIANCE | — |
| FACILITY_APPLICATION_FINANCE_REVIEW | APPROVE | FIN_ADMIN | — |
| FACILITY_APPLICATION_LEGAL_VIEW | VIEW | AUDITOR | — |
| FACILITY_APPLICATION_LEGAL_VIEW | VIEW | LEGAL | — |
| FACILITY_APPLICATION_LEGAL_VIEW | VIEW | MD_CEO | — |
| FACILITY_APPLICATION_RISK_REVIEW | APPROVE | RISK_DEPT | — |
| FEE_INVOICE_MANAGEMENT | VIEW | AUDITOR | — |
| FEE_INVOICE_MANAGEMENT | VIEW | FIN_ADMIN | — |
| FEE_INVOICE_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| FEE_INVOICE_MANAGEMENT | VIEW | MD_CEO | — |
| FEE_PROCESSING | VIEW | AUDITOR | — |
| FEE_PROCESSING | INITIATE | FIN_ADMIN | — |
| FEE_PROCESSING | INITIATE | FUND_ACCT | — |
| FINANCIAL_STATEMENTS | VIEW | AUDITOR | — |
| FINANCIAL_STATEMENTS | VIEW | COMPLIANCE | — |
| FINANCIAL_STATEMENTS | VIEW | FIN_ADMIN | — |
| FINANCIAL_STATEMENTS | INITIATE | FIN_ADMIN | — |
| FINANCIAL_STATEMENTS | VIEW | MD_CEO | — |
| FINANCIAL_STATEMENTS | VIEW | PORT_MGR | — |
| FINANCIAL_STATEMENTS | VIEW | PORT_OFF | — |
| FINANCIAL_STATEMENTS | VIEW | SHARIAH_REV | — |
| FINANCIAL_STATEMENTS | VIEW | SUPER_ADMIN | — |
| FUND_ACCOUNTING_DASHBOARD | VIEW | CFO | — |
| FUND_ACCOUNTING_DASHBOARD | VIEW | FUND_ACCT | — |
| FUND_ACCOUNTING_DASHBOARD | VIEW | MGR_FINCON | — |
| FUND_ACCOUNTING_RECEIVABLES | VIEW | AUDITOR | — |
| FUND_ACCOUNTING_RECEIVABLES | VIEW | FIN_ADMIN | — |
| FUND_ACCOUNTING_RECEIVABLES | INITIATE | FIN_ADMIN | — |
| FUND_ACCOUNTING_RECEIVABLES | VIEW | FUND_ACCT | — |
| FUND_ACCOUNTING_RECEIVABLES | INITIATE | FUND_ACCT | — |
| FUND_ACCOUNTING_RECEIVABLES | VIEW | MD_CEO | — |
| FUND_ACCOUNTING_RECEIVABLES | VIEW | PORT_MGR | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | AUDITOR | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | CIO | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | FIN_ADMIN | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | MD_CEO | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | PORT_MGR | — |
| FUND_OBLIGATIONS_SCHEDULE | VIEW | PORT_OFF | — |
| INVESTMENT_BOOKING | VIEW | AUDITOR | — |
| INVESTMENT_BOOKING | APPROVE | PORT_MGR | — |
| INVESTMENT_BOOKING | INITIATE | PORT_OFF | — |
| INVESTMENT_COMMITTEE_APPROVAL | VIEW | AUDITOR | — |
| INVESTMENT_COMMITTEE_APPROVAL | APPROVE | INV_COMMITTEE | — |
| INVESTMENT_COMMITTEE_APPROVAL | VIEW | MD_CEO | — |
| INVESTMENT_MEMO_CIO_APPROVAL | VIEW | AUDITOR | — |
| INVESTMENT_MEMO_CIO_APPROVAL | APPROVE | CIO | — |
| INVESTMENT_MEMO_CIO_APPROVAL | VIEW | CIO | — |
| INVESTMENT_MEMO_MD_APPROVAL | VIEW | AUDITOR | — |
| INVESTMENT_MEMO_MD_APPROVAL | APPROVE | MD_CEO | — |
| INVESTMENT_MEMO_PM_VALIDATION | VIEW | AUDITOR | — |
| INVESTMENT_MEMO_PM_VALIDATION | APPROVE | PORT_MGR | — |
| INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | VIEW | AUDITOR | — |
| INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | INITIATE | CIO | — |
| INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | VIEW | CIO | — |
| INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | VIEW | MD_CEO | — |
| INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | APPROVE | MD_CEO | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | VIEW | AUDITOR | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | INITIATE | BD | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | VIEW | BD | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | VIEW | COMPLIANCE | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | VIEW | FIN_ADMIN | — |
| INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | VIEW | MD_CEO | — |
| INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL | APPROVE | COMPLIANCE | — |
| INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | INITIATE | BD | — |
| INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | VIEW | BD | — |
| INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | VIEW | COMPLIANCE | — |
| INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | VIEW | MD_CEO | — |
| INVESTOR_EXIT_APPROVAL | APPROVE | COMPLIANCE | — |
| INVESTOR_EXIT_INITIATION | INITIATE | BD | — |
| INVESTOR_EXIT_INITIATION | VIEW | BD | — |
| INVESTOR_EXIT_INITIATION | VIEW | COMPLIANCE | — |
| INVESTOR_EXIT_INITIATION | VIEW | MD_CEO | — |
| INVESTOR_MANDATE_AMENDMENT_APPROVAL | APPROVE | PORT_MGR | — |
| INVESTOR_MANDATE_AMENDMENT_INITIATION | VIEW | BD | — |
| INVESTOR_MANDATE_AMENDMENT_INITIATION | INITIATE | BD | — |
| INVESTOR_MANDATE_AMENDMENT_INITIATION | VIEW | MD_CEO | — |
| INVESTOR_MANDATE_AMENDMENT_INITIATION | VIEW | PORT_MGR | — |
| INVESTOR_ONBOARDING | VIEW | AUDITOR | — |
| INVESTOR_ONBOARDING | VIEW | BD | — |
| INVESTOR_ONBOARDING | INITIATE | BD | — |
| INVESTOR_ONBOARDING | APPROVE | COMPLIANCE | — |
| INVESTOR_ONBOARDING | VIEW | COMPLIANCE | — |
| INVESTOR_ONBOARDING | INITIATE | FIN_ADMIN | — |
| INVESTOR_ONBOARDING | VIEW | FIN_ADMIN | — |
| INVESTOR_ONBOARDING | VIEW | INVESTOR | — |
| INVESTOR_ONBOARDING | VIEW | MD_CEO | — |
| INVESTOR_ONBOARDING | INITIATE | SUPER_ADMIN | — |
| INVESTOR_ONBOARDING | VIEW | SUPER_ADMIN | — |
| INVESTOR_STATEMENTS | VIEW | AUDITOR | — |
| INVESTOR_STATEMENTS | VIEW | COMPLIANCE | — |
| INVESTOR_STATEMENTS | VIEW | FIN_ADMIN | — |
| INVESTOR_STATEMENTS | VIEW | INVESTOR | — |
| INVESTOR_STATEMENTS | VIEW | MD_CEO | — |
| INVESTOR_STATEMENTS | VIEW | PORT_MGR | — |
| INVESTOR_STATEMENTS | VIEW | PORT_OFF | — |
| INVESTOR_STATEMENTS | VIEW | SUPER_ADMIN | — |
| JOURNAL_ENTRIES | VIEW | AUDITOR | — |
| JOURNAL_ENTRIES | APPROVE | CFO | — |
| JOURNAL_ENTRIES | INITIATE | COMP_ACCT | — |
| JOURNAL_ENTRIES | INITIATE | CORP_SERVICES | — |
| JOURNAL_ENTRIES | INITIATE | FIN_ADMIN | — |
| JOURNAL_ENTRIES | APPROVE | FIN_ADMIN | — |
| JOURNAL_ENTRIES | INITIATE | FUND_ACCT | — |
| JOURNAL_ENTRIES | INITIATE | HR_ADMIN | — |
| JOURNAL_ENTRIES | APPROVE | MD_CEO | — |
| JOURNAL_ENTRIES | VIEW | MD_CEO | — |
| JOURNAL_ENTRIES | APPROVE | MGR_FINCON | — |
| JOURNAL_ENTRIES | INITIATE | SYSTEM_SCHEDULER | — |
| JOURNAL_ENTRIES | INITIATE | TREASURY_OFF | — |
| KPI_DEFINITION_MANAGEMENT | VIEW | AUDITOR | — |
| KPI_DEFINITION_MANAGEMENT | INITIATE | HR_ADMIN | — |
| KPI_DEFINITION_MANAGEMENT | VIEW | HR_ADMIN | — |
| KPI_DEFINITION_MANAGEMENT | VIEW | MD_CEO | — |
| KPI_DEFINITION_MANAGEMENT | APPROVE | MD_CEO | — |
| KPI_WEIGHT_MATRIX | VIEW | AUDITOR | — |
| KPI_WEIGHT_MATRIX | VIEW | HR_ADMIN | — |
| KPI_WEIGHT_MATRIX | INITIATE | HR_ADMIN | — |
| KPI_WEIGHT_MATRIX | APPROVE | MD_CEO | — |
| KPI_WEIGHT_MATRIX | VIEW | MD_CEO | — |
| KYC_MANDATE | VIEW | AUDITOR | — |
| KYC_MANDATE | APPROVE | COMPLIANCE | — |
| KYC_MANDATE | VIEW | COMPLIANCE | — |
| KYC_MANDATE | INITIATE | FIN_ADMIN | — |
| KYC_MANDATE | VIEW | FIN_ADMIN | — |
| KYC_MANDATE | VIEW | INVESTOR | — |
| KYC_MANDATE | VIEW | MD_CEO | — |
| KYC_MANDATE | VIEW | PORT_MGR | — |
| KYC_MANDATE | VIEW | SHARIAH_REV | — |
| KYC_MANDATE | VIEW | SUPER_ADMIN | — |
| KYC_MANDATE | INITIATE | SUPER_ADMIN | — |
| LEAVE_MANAGEMENT | VIEW | AUDITOR | — |
| LEAVE_MANAGEMENT | INITIATE | HR_ADMIN | — |
| LEAVE_MANAGEMENT | VIEW | HR_ADMIN | — |
| LEAVE_MANAGEMENT | VIEW | MD_CEO | — |
| LEDGER_ENTITY_SETUP | VIEW | AUDITOR | — |
| LEDGER_ENTITY_SETUP | APPROVE | MD_CEO | — |
| LEDGER_ENTITY_SETUP | VIEW | MD_CEO | — |
| LEDGER_ENTITY_SETUP | INITIATE | PORT_MGR | — |
| LEDGER_ENTITY_SETUP | INITIATE | SUPER_ADMIN | — |
| LETTER_ISSUANCE | VIEW | AUDITOR | — |
| LETTER_ISSUANCE | INITIATE | COMPLIANCE | — |
| LETTER_ISSUANCE | APPROVE | COMPLIANCE | — |
| LETTER_ISSUANCE | VIEW | COMPLIANCE | — |
| LETTER_ISSUANCE | VIEW | CS | — |
| LETTER_ISSUANCE | INITIATE | CS | — |
| LETTER_ISSUANCE | APPROVE | MD_CEO | — |
| LETTER_ISSUANCE | VIEW | MD_CEO | — |
| LETTER_ISSUANCE | VIEW | PORT_OFF | — |
| LETTER_ISSUANCE | INITIATE | PORT_OFF | — |
| LETTER_TEMPLATE_MANAGEMENT | VIEW | AUDITOR | — |
| LETTER_TEMPLATE_MANAGEMENT | VIEW | COMPLIANCE | — |
| LETTER_TEMPLATE_MANAGEMENT | INITIATE | COMPLIANCE | — |
| LETTER_TEMPLATE_MANAGEMENT | VIEW | MD_CEO | — |
| LETTER_TEMPLATE_MANAGEMENT | APPROVE | MD_CEO | — |
| LETTERHEAD_TEMPLATE_MANAGEMENT | VIEW | AUDITOR | — |
| LETTERHEAD_TEMPLATE_MANAGEMENT | INITIATE | CS | — |
| LETTERHEAD_TEMPLATE_MANAGEMENT | VIEW | CS | — |
| LETTERHEAD_TEMPLATE_MANAGEMENT | VIEW | MD_CEO | — |
| LETTERHEAD_TEMPLATE_MANAGEMENT | APPROVE | MD_CEO | — |
| MANDATE_SETUP | APPROVE | MD_CEO | — |
| MANDATE_SETUP | VIEW | MD_CEO | — |
| MANDATE_SETUP | APPROVE | PORT_MGR | — |
| MARKETING_RESOURCE | VIEW | AUDITOR | — |
| MARKETING_RESOURCE | VIEW | BD | — |
| MARKETING_RESOURCE | INITIATE | BD | — |
| MARKETING_RESOURCE | VIEW | COMPLIANCE | — |
| MARKETING_RESOURCE | APPROVE | COMPLIANCE | — |
| MARKETING_RESOURCE | VIEW | MD_CEO | — |
| MARKETING_RESOURCE | INITIATE | MKT_OFF | — |
| MARKETING_RESOURCE | VIEW | MKT_OFF | — |
| MARKETING_SEND | VIEW | AUDITOR | — |
| MARKETING_SEND | VIEW | BD | — |
| MARKETING_SEND | INITIATE | BD | — |
| MARKETING_SEND | APPROVE | COMPLIANCE | — |
| MARKETING_SEND | VIEW | COMPLIANCE | — |
| MARKETING_SEND | VIEW | MD_CEO | — |
| MARKETING_SEND | INITIATE | MKT_OFF | — |
| MARKETING_SEND | VIEW | MKT_OFF | — |
| MD_DOCUMENT_TRANSMISSION | VIEW | AUDITOR | — |
| MD_DOCUMENT_TRANSMISSION | VIEW | CS | — |
| MD_DOCUMENT_TRANSMISSION | INITIATE | MD_CEO | — |
| MD_DOCUMENT_TRANSMISSION | VIEW | MD_CEO | — |
| MFA_ENFORCEMENT_CONFIG | VIEW | AUDITOR | — |
| MFA_ENFORCEMENT_CONFIG | VIEW | COMPLIANCE | — |
| MFA_ENFORCEMENT_CONFIG | INITIATE | SUPER_ADMIN | — |
| MFA_ENFORCEMENT_CONFIG | VIEW | SUPER_ADMIN | — |
| NAV_MARKET_VALUE_ENTRY | VIEW | AUDITOR | — |
| NAV_MARKET_VALUE_ENTRY | APPROVE | FUND_ACCT | — |
| NAV_MARKET_VALUE_ENTRY | VIEW | FUND_ACCT | — |
| NAV_MARKET_VALUE_ENTRY | INITIATE | FUND_ACCT | — |
| NAV_MARKET_VALUE_ENTRY | VIEW | MD_CEO | — |
| ND_MANDATE_ACTIVATION | APPROVE | PORT_MGR | — |
| ND_MANDATE_INITIATION | INITIATE | PORT_OFF | — |
| ONBOARDING_IC_REVIEW | APPROVE | SAU_INTERNAL_CONTROL | — |
| ONBOARDING_MD_APPROVAL | APPROVE | MD_CEO | — |
| ONBOARDING_RISK_REVIEW | APPROVE | RISK_DEPT | — |
| ORG_STRUCTURE_MANAGEMENT | INITIATE | HR_ADMIN | — |
| ORG_STRUCTURE_MANAGEMENT | VIEW | HR_ADMIN | — |
| ORG_STRUCTURE_MANAGEMENT | VIEW | MD_CEO | — |
| ORG_STRUCTURE_MANAGEMENT | INITIATE | SUPER_ADMIN | — |
| ORG_STRUCTURE_MANAGEMENT | VIEW | SUPER_ADMIN | — |
| PARAMETERS | VIEW | AUDITOR | — |
| PARAMETERS | APPROVE | MD_CEO | — |
| PARAMETERS | VIEW | MD_CEO | — |
| PARAMETERS | INITIATE | SUPER_ADMIN | — |
| PAYMENT_GATEWAY_POLICY | VIEW | AUDITOR | — |
| PAYMENT_GATEWAY_POLICY | VIEW | COMPLIANCE | — |
| PAYMENT_GATEWAY_POLICY | INITIATE | FIN_ADMIN | — |
| PAYMENT_GATEWAY_POLICY | VIEW | FIN_ADMIN | — |
| PAYMENT_GATEWAY_POLICY | INITIATE | ICT | — |
| PAYMENT_GATEWAY_POLICY | VIEW | ICT | — |
| PAYMENT_GATEWAY_POLICY | VIEW | MD_CEO | — |
| PAYMENT_GATEWAY_POLICY | APPROVE | MD_CEO | — |
| PAYMENT_GATEWAY_SUSPENSE | VIEW | AUDITOR | — |
| PAYMENT_GATEWAY_SUSPENSE | VIEW | COMPLIANCE | — |
| PAYMENT_GATEWAY_SUSPENSE | APPROVE | FIN_ADMIN | — |
| PAYMENT_GATEWAY_SUSPENSE | INITIATE | FIN_ADMIN | — |
| PAYMENT_GATEWAY_SUSPENSE | VIEW | FIN_ADMIN | — |
| PAYMENT_GATEWAY_SUSPENSE | VIEW | MD_CEO | — |
| PAYMENT_GATEWAY_SUSPENSE | VIEW | TREASURY_OFF | — |
| PAYMENT_GATEWAY_SUSPENSE | INITIATE | TREASURY_OFF | — |
| PAYMENT_REMINDER_DISPATCH | VIEW | AUDITOR | — |
| PAYMENT_REMINDER_DISPATCH | VIEW | MD_CEO | — |
| PAYMENT_REMINDER_DISPATCH | APPROVE | PORT_MGR | — |
| PAYMENT_REMINDER_DISPATCH | APPROVE | PORT_OFF | — |
| PAYMENT_REMINDER_LADDER_SETTINGS | VIEW | AUDITOR | — |
| PAYMENT_REMINDER_LADDER_SETTINGS | VIEW | MD_CEO | — |
| PAYMENT_REMINDER_LADDER_SETTINGS | INITIATE | PORT_MGR | — |
| PAYOUT_COMPILATION | VIEW | AUDITOR | — |
| PAYOUT_COMPILATION | INITIATE | FIN_ADMIN | — |
| PAYOUT_COMPILATION | VIEW | FIN_ADMIN | — |
| PAYOUT_COMPILATION | APPROVE | MD_CEO | — |
| PAYOUT_COMPILATION | VIEW | MD_CEO | — |
| PAYROLL_CEO_APPROVAL | VIEW | AUDITOR | — |
| PAYROLL_CEO_APPROVAL | APPROVE | MD_CEO | — |
| PAYROLL_FINANCE_REVIEW | VIEW | AUDITOR | — |
| PAYROLL_FINANCE_REVIEW | APPROVE | CFO | — |
| PAYROLL_FINANCE_REVIEW | APPROVE | FIN_ADMIN | — |
| PAYROLL_PREPARATION | VIEW | AUDITOR | — |
| PAYROLL_PREPARATION | INITIATE | HR_ADMIN | — |
| PAYROLL_PREPARATION | VIEW | MD_CEO | — |
| PENALTY_TO_CHARITY_APPROVAL | APPROVE | COMPLIANCE | — |
| PENALTY_TO_CHARITY_INITIATION | INITIATE | FIN_ADMIN | — |
| PETTY_CASH_DISBURSEMENT | VIEW | AUDITOR | — |
| PETTY_CASH_DISBURSEMENT | APPROVE | FIN_ADMIN | — |
| PETTY_CASH_MANAGEMENT | VIEW | AUDITOR | — |
| PETTY_CASH_MANAGEMENT | VIEW | CORP_SERVICES | — |
| PETTY_CASH_MANAGEMENT | INITIATE | CORP_SERVICES | — |
| PETTY_CASH_MANAGEMENT | VIEW | MD_CEO | — |
| PMS_BEHAVIOURAL_GATE | INITIATE | HR_ADMIN | — |
| PMS_BEHAVIOURAL_GATE | VIEW | MD_CEO | — |
| PMS_CHIEF_SIGNOFF | APPROVE | DEPT_CHIEF | — |
| PMS_CYCLE_APPROVAL | APPROVE | MD_CEO | — |
| PMS_CYCLE_MANAGEMENT | VIEW | AUDITOR | — |
| PMS_CYCLE_MANAGEMENT | VIEW | HR_ADMIN | — |
| PMS_CYCLE_MANAGEMENT | INITIATE | HR_ADMIN | — |
| PMS_CYCLE_MANAGEMENT | VIEW | MD_CEO | — |
| PMS_PAYROLL | VIEW | AUDITOR | — |
| PMS_PAYROLL | VIEW | CFO | — |
| PMS_PAYROLL | APPROVE | FIN_ADMIN | — |
| PMS_PAYROLL | VIEW | FIN_ADMIN | — |
| PMS_PAYROLL | VIEW | HR_ADMIN | — |
| PMS_PAYROLL | VIEW | MD_CEO | — |
| PMS_SAU_QA | APPROVE | SAU_INTERNAL_CONTROL | — |
| PMS_SELF_SCORE | INITIATE | COMPLIANCE | — |
| PMS_SELF_SCORE | INITIATE | DEPT_CHIEF | — |
| PMS_SELF_SCORE | INITIATE | FIN_ADMIN | — |
| PMS_SELF_SCORE | INITIATE | HR_ADMIN | — |
| PMS_SELF_SCORE | INITIATE | MD_CEO | — |
| PMS_SELF_SCORE | VIEW | MD_CEO | — |
| PMS_SELF_SCORE | INITIATE | PMS_SUPERVISOR | — |
| PMS_SELF_SCORE | INITIATE | PORT_MGR | — |
| PMS_SELF_SCORE | INITIATE | PORT_OFF | — |
| PMS_SELF_SCORE | INITIATE | SAU_INTERNAL_CONTROL | — |
| PMS_SELF_SCORE | INITIATE | SHARIAH_REV | — |
| PMS_SELF_SCORE | INITIATE | WM_ADVISOR | — |
| PMS_SUPERVISOR_VALIDATION | VIEW | MD_CEO | — |
| PMS_SUPERVISOR_VALIDATION | APPROVE | PMS_SUPERVISOR | — |
| PMS_SUPERVISOR_VALIDATION | INITIATE | PMS_SUPERVISOR | — |
| PROCUREMENT_OPERATIONS | VIEW | AUDITOR | — |
| PROCUREMENT_OPERATIONS | VIEW | CORP_SERVICES | — |
| PROCUREMENT_OPERATIONS | INITIATE | CORP_SERVICES | — |
| PROCUREMENT_OPERATIONS | VIEW | MD_CEO | — |
| PROCUREMENT_PAYMENT_APPROVAL | APPROVE | CFO | — |
| PROCUREMENT_PAYMENT_APPROVAL | APPROVE | FIN_ADMIN | — |
| PROCUREMENT_PAYMENT_APPROVAL | APPROVE | MD_CEO | — |
| PRODUCT_SETUP_APPROVAL | VIEW | AUDITOR | — |
| PRODUCT_SETUP_APPROVAL | APPROVE | MD_CEO | — |
| PRODUCT_SETUP_APPROVAL | VIEW | MD_CEO | — |
| PRODUCT_SETUP_INITIATION | VIEW | AUDITOR | — |
| PRODUCT_SETUP_INITIATION | VIEW | MD_CEO | — |
| PRODUCT_SETUP_INITIATION | INITIATE | PORT_MGR | — |
| PRODUCT_SETUP_INITIATION | VIEW | PORT_MGR | — |
| PRODUCT_SETUP_REVIEW | VIEW | AUDITOR | — |
| PRODUCT_SETUP_REVIEW | APPROVE | CIO | — |
| PRODUCT_SETUP_REVIEW | VIEW | CIO | — |
| PRODUCT_SETUP_REVIEW | VIEW | MD_CEO | — |
| PROSPECTUS_AMENDMENT_APPROVAL | VIEW | AUDITOR | — |
| PROSPECTUS_AMENDMENT_APPROVAL | APPROVE | MD_CEO | — |
| PROSPECTUS_AMENDMENT_APPROVAL | VIEW | MD_CEO | — |
| PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF | VIEW | AUDITOR | — |
| PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF | VIEW | COMPLIANCE | — |
| PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF | APPROVE | COMPLIANCE | — |
| PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF | VIEW | MD_CEO | — |
| PROSPECTUS_AMENDMENT_PROPOSAL | VIEW | AUDITOR | — |
| PROSPECTUS_AMENDMENT_PROPOSAL | INITIATE | CIO | — |
| PROSPECTUS_AMENDMENT_PROPOSAL | VIEW | CIO | — |
| PROSPECTUS_AMENDMENT_PROPOSAL | VIEW | MD_CEO | — |
| PROSPECTUS_AMENDMENT_SSB_SIGNOFF | VIEW | AUDITOR | — |
| PROSPECTUS_AMENDMENT_SSB_SIGNOFF | VIEW | MD_CEO | — |
| PROSPECTUS_AMENDMENT_SSB_SIGNOFF | APPROVE | SHARIAH_REV | — |
| PROSPECTUS_AMENDMENT_SSB_SIGNOFF | VIEW | SHARIAH_REV | — |
| PROSPECTUS_SHEET_APPROVAL | VIEW | AUDITOR | — |
| PROSPECTUS_SHEET_APPROVAL | VIEW | MD_CEO | — |
| PROSPECTUS_SHEET_APPROVAL | APPROVE | MD_CEO | — |
| PROSPECTUS_SHEET_INITIATION | VIEW | AUDITOR | — |
| PROSPECTUS_SHEET_INITIATION | VIEW | MD_CEO | — |
| PROSPECTUS_SHEET_INITIATION | INITIATE | PORT_MGR | — |
| PROSPECTUS_SHEET_INITIATION | VIEW | PORT_MGR | — |
| PROSPECTUS_SHEET_REVIEW | VIEW | AUDITOR | — |
| PROSPECTUS_SHEET_REVIEW | VIEW | CIO | — |
| PROSPECTUS_SHEET_REVIEW | APPROVE | CIO | — |
| PROSPECTUS_SHEET_REVIEW | VIEW | MD_CEO | — |
| RBAC_CONFIG | VIEW | AUDITOR | — |
| RBAC_CONFIG | VIEW | MD_CEO | — |
| RBAC_CONFIG | APPROVE | SUPER_ADMIN | — |
| RBAC_CONFIG | INITIATE | SUPER_ADMIN | — |
| REDEMPTION_PROCESSING | INITIATE | BD | — |
| REDEMPTION_PROCESSING | APPROVE | PORT_MGR | — |
| REDEMPTION_PROCESSING | INITIATE | PORT_OFF | — |
| REDEMPTION_PROCESSING | INITIATE | REL_OFF | — |
| REDEMPTION_PROCESSING | INITIATE | SYSTEM_PAYMENT_GATEWAY | — |
| REDEMPTION_PROCESSING | INITIATE | SYSTEM_PORTAL_CLIENT | — |
| REGULATOR_TEMPLATE_REGISTRY | VIEW | AUDITOR | — |
| REGULATOR_TEMPLATE_REGISTRY | INITIATE | COMPLIANCE | — |
| REGULATOR_TEMPLATE_REGISTRY | INITIATE | SUPER_ADMIN | — |
| REGULATORY_REPORTING | VIEW | AUDITOR | — |
| REGULATORY_REPORTING | INITIATE | COMP_ACCT | — |
| REGULATORY_REPORTING | VIEW | COMP_ACCT | — |
| REGULATORY_REPORTING | VIEW | COMPLIANCE | — |
| REGULATORY_REPORTING | INITIATE | COMPLIANCE | — |
| REGULATORY_REPORTING | APPROVE | MD_CEO | — |
| REGULATORY_REPORTING | VIEW | MD_CEO | — |
| REPLAY_HARNESS | VIEW | AUDITOR | — |
| REPLAY_HARNESS | INITIATE | FIN_ADMIN | — |
| REPLAY_HARNESS | VIEW | MD_CEO | — |
| REPLAY_HARNESS | INITIATE | SUPER_ADMIN | — |
| RISK_APPETITE_MATRIX | VIEW | AUDITOR | — |
| RISK_APPETITE_MATRIX | VIEW | CRAO | — |
| RISK_APPETITE_MATRIX | APPROVE | MD_CEO | — |
| RISK_APPETITE_MATRIX | VIEW | MD_CEO | — |
| RISK_APPETITE_MATRIX | INITIATE | SUPER_ADMIN | — |
| RISK_APPETITE_MATRIX | VIEW | SUPER_ADMIN | — |
| RISK_REGISTER | VIEW | AUDITOR | — |
| RISK_REGISTER | APPROVE | CRAO | — |
| RISK_REGISTER | VIEW | CRAO | — |
| RISK_REGISTER | VIEW | HEAD_SAU | — |
| RISK_REGISTER | APPROVE | MD_CEO | — |
| RISK_REGISTER | VIEW | MD_CEO | — |
| RISK_REGISTER | INITIATE | SUPER_ADMIN | — |
| RISK_REGISTER | VIEW | SUPER_ADMIN | — |
| SCHEDULER_OPERATIONS | INITIATE | ICT | — |
| SCHEDULER_OPERATIONS | VIEW | ICT | — |
| SCHEDULER_OVERSIGHT | VIEW | MD_CEO | — |
| SCHEDULER_OVERSIGHT | VIEW | SAU_INTERNAL_CONTROL | — |
| SCHEDULER_PAUSE_APPROVAL | APPROVE | MD_CEO | — |
| SCREENING_COUNTERSIGN | APPROVE | MD_CEO | — |
| SCREENING_GATEWAY_POLICY | VIEW | AUDITOR | — |
| SCREENING_GATEWAY_POLICY | VIEW | COMPLIANCE | — |
| SCREENING_GATEWAY_POLICY | INITIATE | COMPLIANCE | — |
| SCREENING_GATEWAY_POLICY | VIEW | ICT | — |
| SCREENING_GATEWAY_POLICY | INITIATE | ICT | — |
| SCREENING_GATEWAY_POLICY | APPROVE | MD_CEO | — |
| SCREENING_GATEWAY_POLICY | VIEW | MD_CEO | — |
| SCREENING_GATEWAY_POLICY | INITIATE | RISK_DEPT | — |
| SCREENING_GATEWAY_POLICY | VIEW | RISK_DEPT | — |
| SCREENING_PERFORM | APPROVE | COMPLIANCE | — |
| SCREENING_PERFORM | INITIATE | COMPLIANCE | — |
| SCREENING_PERFORM | VIEW | COMPLIANCE | — |
| SCREENING_PERFORM | VIEW | FIN_ADMIN | — |
| SCREENING_PERFORM | INITIATE | FIN_ADMIN | — |
| SCREENING_PERFORM | VIEW | MD_CEO | — |
| SHARIAH_RECORDS | VIEW | AUDITOR | — |
| SHARIAH_RECORDS | VIEW | CIO | — |
| SHARIAH_RECORDS | VIEW | COMPLIANCE | — |
| SHARIAH_RECORDS | VIEW | FIN_ADMIN | — |
| SHARIAH_RECORDS | INITIATE | FIN_ADMIN | — |
| SHARIAH_RECORDS | VIEW | MD_CEO | — |
| SHARIAH_RECORDS | VIEW | PORT_MGR | — |
| SHARIAH_RECORDS | VIEW | PORT_OFF | — |
| SHARIAH_RECORDS | APPROVE | SHARIAH_REV | — |
| SHARIAH_RECORDS | VIEW | SHARIAH_REV | — |
| SHARIAH_RECORDS | INITIATE | SHARIAH_REV | — |
| SHARIAH_RECORDS | VIEW | SUPER_ADMIN | — |
| SHARIAH_SIGNOFF | APPROVE | SHARIAH_REV | — |
| STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF | APPROVE | MD_CEO | — |
| STAKEHOLDER_REPORT_MANAGEMENT | INITIATE | BD | — |
| STAKEHOLDER_REPORT_MANAGEMENT | INITIATE | CS | — |
| STAKEHOLDER_REPORT_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| STAKEHOLDER_REPORT_MANAGEMENT | INITIATE | MD_CEO | — |
| STAKEHOLDER_REPORT_MANAGEMENT | APPROVE | MD_CEO | — |
| STAKEHOLDER_REPORT_MANAGEMENT | VIEW | MD_CEO | — |
| STAKEHOLDER_REPORT_MANAGEMENT | INITIATE | PORT_MGR | — |
| STRATEGY_LAYER | VIEW | AUDITOR | — |
| STRATEGY_LAYER | INITIATE | HEAD_SAU | — |
| STRATEGY_LAYER | APPROVE | MD_CEO | — |
| STRATEGY_LAYER | VIEW | MD_CEO | — |
| STRESS_TESTING | VIEW | AUDITOR | — |
| STRESS_TESTING | VIEW | CRAO | — |
| STRESS_TESTING | APPROVE | MD_CEO | — |
| STRESS_TESTING | VIEW | MD_CEO | — |
| STRESS_TESTING | VIEW | SUPER_ADMIN | — |
| STRESS_TESTING | INITIATE | SUPER_ADMIN | — |
| STRESS_TESTING | INITIATE | SYSTEM_SCHEDULER | — |
| SUBSCRIPTION_TARGET_CONFIRMATION | VIEW | AUDITOR | — |
| SUBSCRIPTION_TARGET_CONFIRMATION | VIEW | FUND_ACCT | — |
| SUBSCRIPTION_TARGET_CONFIRMATION | INITIATE | FUND_ACCT | — |
| SUBSCRIPTION_TARGET_CONFIRMATION | VIEW | MD_CEO | — |
| TALENT_MANAGEMENT | VIEW | AUDITOR | — |
| TALENT_MANAGEMENT | VIEW | HR_ADMIN | — |
| TALENT_MANAGEMENT | INITIATE | HR_ADMIN | — |
| TALENT_MANAGEMENT | APPROVE | MD_CEO | — |
| TALENT_MANAGEMENT | VIEW | MD_CEO | — |
| TAX_CONFIGURATION_MANAGEMENT | VIEW | AUDITOR | — |
| TAX_CONFIGURATION_MANAGEMENT | VIEW | FIN_ADMIN | — |
| TAX_CONFIGURATION_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| TAX_CONFIGURATION_MANAGEMENT | APPROVE | MD_CEO | — |
| TAX_CONFIGURATION_MANAGEMENT | VIEW | MD_CEO | — |
| TAX_REMITTANCE_MANAGEMENT | VIEW | AUDITOR | — |
| TAX_REMITTANCE_MANAGEMENT | INITIATE | FIN_ADMIN | — |
| TAX_REMITTANCE_MANAGEMENT | VIEW | FIN_ADMIN | — |
| TAX_REMITTANCE_MANAGEMENT | VIEW | MD_CEO | — |
| TAX_REMITTANCE_MANAGEMENT | APPROVE | MD_CEO | — |
| TXN_ENTRY | VIEW | AUDITOR | — |
| TXN_ENTRY | INITIATE | FIN_ADMIN | — |
| TXN_ENTRY | VIEW | MD_CEO | — |
| TXN_ENTRY | INITIATE | PORT_OFF | — |
| TXN_ENTRY | INITIATE | SYSTEM_PAYMENT_GATEWAY | — |
| TXN_ENTRY | INITIATE | SYSTEM_PORTAL_CLIENT | — |
| TXN_ENTRY | INITIATE | TREASURY_OFF | — |
| USER_MANAGEMENT | VIEW | AUDITOR | — |
| WM_ADVISORY | VIEW | AUDITOR | — |
| WM_ADVISORY | VIEW | MD_CEO | — |
| WM_ADVISORY | INITIATE | WM_ADVISOR | — |
| WM_ADVISORY | APPROVE | WM_ADVISOR | — |
| WM_ADVISORY | VIEW | WM_ADVISOR | — |
| ZAKAT_ADVISORY | VIEW | AUDITOR | — |
| ZAKAT_ADVISORY | APPROVE | BD | — |
| ZAKAT_ADVISORY | INITIATE | BD | — |
| ZAKAT_ADVISORY | VIEW | BD | — |
| ZAKAT_ADVISORY | VIEW | MD_CEO | — |
| ZAKAT_ADVISORY | INITIATE | REL_OFF | — |
| ZAKAT_ADVISORY | APPROVE | REL_OFF | — |
| ZAKAT_ADVISORY | VIEW | REL_OFF | — |
| ZAKAT_ADVISORY | INITIATE | SYSTEM_PORTAL_CLIENT | — |
| ZAKAT_ADVISORY | INITIATE | WM_ADVISOR | — |
| ZAKAT_ADVISORY | VIEW | WM_ADVISOR | — |
| ZAKAT_ADVISORY | APPROVE | WM_ADVISOR | — |
| ZAKAT_CERTIFICATION | VIEW | AUDITOR | — |
| ZAKAT_CERTIFICATION | VIEW | MD_CEO | — |
| ZAKAT_CERTIFICATION | APPROVE | SHARIAH_REV | — |
| ZAKAT_CERTIFICATION | VIEW | SHARIAH_REV | — |
| ZAKAT_PORTFOLIO_ADVISORY_FEED | VIEW | AUDITOR | — |
| ZAKAT_PORTFOLIO_ADVISORY_FEED | VIEW | CIO | — |
| ZAKAT_PORTFOLIO_ADVISORY_FEED | VIEW | MD_CEO | — |
| ZAKAT_PORTFOLIO_ADVISORY_FEED | VIEW | PORT_MGR | — |
| ZAKAT_PORTFOLIO_ADVISORY_FEED | VIEW | PORT_OFF | — |

## 4. DB Trigger Inventory (mechanically scanned from prisma/migrations/*/migration.sql)

| Trigger | Table | Function | Enforcement message (from RAISE EXCEPTION, if present) | Introduced in |
|---|---|---|---|---|
| audit_trail_no_update | audit_trail | audit_trail_block_mutation | audit_trail is insert-only: % is not permitted on % | 20260704000000_init_audit_trail |
| audit_trail_no_delete | audit_trail | audit_trail_block_mutation | audit_trail is insert-only: % is not permitted on % | 20260704000000_init_audit_trail |
| journal_entry_line_entity_match | journal_entry_line | enforce_journal_line_entity_match | journal_entry_line % references an account in ledger entity % but its journal_entry belongs to ledger entity % — no journal can span ledger entities | 20260704103700_journal_entity_separation_trigger |
| report_run_no_update | report_run | report_run_block_mutation | report_run is insert-only: % is not permitted on % | 20260704111900_amd11_checks_and_report_run_immutability |
| report_run_no_delete | report_run | report_run_block_mutation | report_run is insert-only: % is not permitted on % | 20260704111900_amd11_checks_and_report_run_immutability |
| role_permission_readonly_check | role_permission | enforce_readonly_role_permission | role % is structurally read-only (AMD-09 §4d) — cannot hold % permission on %, only VIEW | 20260704130200_amd09_readonly_role_permission_trigger |
| journal_entry_no_posting_into_closed_period | journal_entry | enforce_no_posting_into_closed_period | journal_entry % cannot post: entry_date % falls within a CLOSED accounting period (%) for ledger entity % — post-lock entries only in the next open period | 20260704150100_closed_period_posting_trigger |
| journal_entry_posting_requires_approval | journal_entry | enforce_journal_posting_requires_approved_workflow | journal_entry % cannot post: no posting_workflow_instance_id set — posting requires an APPROVED JOURNAL_POSTING workflow instance | 20260704150200_journal_posting_requires_approval_trigger |
| fee_accrual_no_pool | fee_accrual | enforce_no_fee_accrual_on_pool | fee_accrual: ledger_entity % is a POOL — AMD-03 prohibits any fee accrual on a Mudarabah pool (the Mudarib | 20260704183400_amd03_pool_no_fees_and_nav_lock_triggers |
| nav_record_locked_immutable | nav_record | enforce_nav_record_locked_immutable | nav_record % is locked (published) — cannot delete a published NAV record | 20260704183400_amd03_pool_no_fees_and_nav_lock_triggers |
| txn_no_express_stage_redemption | txn | enforce_no_express_stage_redemption | txn % is a REDEMPTION against product_account % whose investor is still STAGE_1_EXPRESS — no redemption/outward transfer is permitted until full KYC (invariant 27a) | 20260705113503_express_stage_redemption_block_trigger |
| txn_counterparty_onboarding_complete | txn | enforce_counterparty_onboarding_complete | txn % references counterparty % whose onboarding_status is % — no new deployment is permitted until onboarding is COMPLETE_APPROVED (invariant 27b) | 20260705120545_counterparty_deployment_gate_trigger |
| counterparty_restructure_request_limit | counterparty_restructure_request | enforce_counterparty_restructure_limit | counterparty % already has an APPROVED restructure request — max 1 restructure (invariant 28e); beyond this cap requires a future exception-workflow process, not yet built | 20260705140000_counterparty_portal_and_complaints |
| ai_interaction_log_no_update | ai_interaction_log | ai_interaction_log_block_mutation | ai_interaction_log is insert-only: % is not permitted on % | 20260706065722_ai_log_and_distribution_log_immutability |
| ai_interaction_log_no_delete | ai_interaction_log | ai_interaction_log_block_mutation | ai_interaction_log is insert-only: % is not permitted on % | 20260706065722_ai_log_and_distribution_log_immutability |
| stakeholder_distribution_log_no_update | stakeholder_distribution_log | stakeholder_distribution_log_block_mutation | stakeholder_distribution_log is insert-only: % is not permitted on % | 20260706065722_ai_log_and_distribution_log_immutability |
| stakeholder_distribution_log_no_delete | stakeholder_distribution_log | stakeholder_distribution_log_block_mutation | stakeholder_distribution_log is insert-only: % is not permitted on % | 20260706065722_ai_log_and_distribution_log_immutability |

17 triggers found.

## 5. Named CHECK / Unique-Index Constraint Inventory (mechanically scanned)

| Constraint | Table | Kind | Expression | Introduced in |
|---|---|---|---|---|
| audit_chain_state_singleton | (inline) | CHECK | `"id" = 1` | 20260704000000_init_audit_trail |
| app_user_email_key | app_user | UNIQUE INDEX | `("email")` | 20260704080530_init_users_rbac |
| user_role_user_id_role_code_key | user_role | UNIQUE INDEX | `("user_id", "role_code")` | 20260704080530_init_users_rbac |
| approval_rule_step_approval_rule_id_step_order_key | approval_rule_step | UNIQUE INDEX | `("approval_rule_id", "step_order")` | 20260704082705_reconcile_srs_roles_and_workflow_engine |
| workflow_step_approval_workflow_instance_id_approval_rule_s_key | workflow_step_approval | UNIQUE INDEX | `("workflow_instance_id", "approval_rule_step_id")` | 20260704082705_reconcile_srs_roles_and_workflow_engine |
| product_parameters_product_code_version_key | product_parameters | UNIQUE INDEX | `("product_code", "version")` | 20260704084811_delegation_of_authority_and_product_parameters |
| surplus_shares_sum_to_one | product_parameters | CHECK | `"surplus_investor_share" IS NULL OR "surplus_mudarib_share" IS NULL OR ("surplus_investor_share" + "surplus_mudarib_share" = 1.0` | 20260704084900_product_parameters_check_constraints |
| delegation_of_authority_workflow_instance_id_key | delegation_of_authority | UNIQUE INDEX | `("workflow_instance_id")` | 20260704090500_delegation_grant_workflow_and_governance_refs |
| investor_contact_email_key | investor | UNIQUE INDEX | `("contact_email")` | 20260704093350_investor_master_onboarding |
| investor_mandate_investor_id_key | investor_mandate | UNIQUE INDEX | `("investor_id")` | 20260704093350_investor_master_onboarding |
| mandate_ratios_sum_to_one | investor_mandate | CHECK | `"investor_base_ratio" IS NULL OR "mudarib_base_ratio" IS NULL OR ("investor_base_ratio" + "mudarib_base_ratio" = 1.0` | 20260704093500_investor_mandate_check_constraints |
| mandate_ratios_only_for_direct_deal | investor_mandate | CHECK | `"mandate_type" IN ('DIRECT_DEAL', 'RESTRICTED_PLUS_DIRECT'` | 20260704093700_mandate_ratio_scope_constraint |
| chart_of_account_ledger_entity_code_account_code_key | chart_of_account | UNIQUE INDEX | `("ledger_entity_code", "account_code")` | 20260704103655_ledger_skeletons |
| journal_line_debit_credit_shape | journal_entry_line | CHECK | `"debit_kobo" >= 0 AND "credit_kobo" >= 0 AND NOT ("debit_kobo" > 0 AND "credit_kobo" > 0` | 20260704103800_journal_line_debit_credit_check |
| accounting_framework_map_version_key | accounting_framework_map | UNIQUE INDEX | `("version")` | 20260704111845_amd11_dual_framework_reporting |
| accounting_framework_map_workflow_instance_id_key | accounting_framework_map | UNIQUE INDEX | `("workflow_instance_id")` | 20260704111845_amd11_dual_framework_reporting |
| statement_template_basis_statement_code_version_key | statement_template | UNIQUE INDEX | `("basis", "statement_code", "version")` | 20260704111845_amd11_dual_framework_reporting |
| statement_line_statement_template_id_line_code_key | statement_line | UNIQUE INDEX | `("statement_template_id", "line_code")` | 20260704111845_amd11_dual_framework_reporting |
| statement_line_mapping_framework_map_id_chart_of_account_id_key | statement_line_mapping | UNIQUE INDEX | `("framework_map_id", "chart_of_account_id", "statement_line_id")` | 20260704111845_amd11_dual_framework_reporting |
| regulator_template_regulator_code_template_code_version_key | regulator_template | UNIQUE INDEX | `("regulator_code", "template_code", "version")` | 20260704111845_amd11_dual_framework_reporting |
| regulator_template_line_regulator_template_id_line_code_key | regulator_template_line | UNIQUE INDEX | `("regulator_template_id", "line_code")` | 20260704111845_amd11_dual_framework_reporting |
| ledger_entity_primary_basis_by_type | ledger_entity | CHECK | `("entity_type" <> 'COMPANY' OR "primary_basis" = 'IFRS'` | 20260704111900_amd11_checks_and_report_run_immutability |
| journal_entry_basis_adjustment_tags | journal_entry | CHECK | `("journal_class" = 'BASE' AND "divergence_type" IS NULL AND "adjustment_for_basis" IS NULL` | 20260704111900_amd11_checks_and_report_run_immutability |
| screening_checklist_item_item_code_key | screening_checklist_item | UNIQUE INDEX | `("item_code")` | 20260704120938_screening_checklist_config |
| risk_appetite_matrix_version_version_key | risk_appetite_matrix_version | UNIQUE INDEX | `("version")` | 20260704134004_amd12_risk_appetite_matrix_and_register |
| risk_appetite_matrix_version_workflow_instance_id_key | risk_appetite_matrix_version | UNIQUE INDEX | `("workflow_instance_id")` | 20260704134004_amd12_risk_appetite_matrix_and_register |
| risk_appetite_category_matrix_version_id_sort_order_key | risk_appetite_category | UNIQUE INDEX | `("matrix_version_id", "sort_order")` | 20260704134004_amd12_risk_appetite_matrix_and_register |
| risk_appetite_category_threshold_monotonic | risk_appetite_category | CHECK | `"green_threshold" IS NULL OR "amber_threshold" IS NULL OR "red_threshold" IS NULL OR "is_zero_tolerance" OR ("direction" = 'HIGHER_BETTER' AND "green_threshold" > "amber_threshold" AND "amber_threshol` | 20260704134100_amd06_risk_appetite_threshold_check |
| approval_rule_rule_key_key | approval_rule | UNIQUE INDEX | `("rule_key")` | 20260704145700_approval_rule_key |
| accounting_period_close_workflow_instance_id_key | accounting_period | UNIQUE INDEX | `("close_workflow_instance_id")` | 20260704150000_phase2_posting_periods_event_config |
| accounting_period_ledger_entity_code_period_start_period_en_key | accounting_period | UNIQUE INDEX | `("ledger_entity_code", "period_start", "period_end")` | 20260704150000_phase2_posting_periods_event_config |
| event_journal_config_event_type_key | event_journal_config | UNIQUE INDEX | `("event_type")` | 20260704150000_phase2_posting_periods_event_config |
| journal_entry_posting_workflow_instance_id_key | journal_entry | UNIQUE INDEX | `("posting_workflow_instance_id")` | 20260704150000_phase2_posting_periods_event_config |
| counterparty_migration_source_ref_key | counterparty | UNIQUE INDEX | `("migration_source_ref")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| product_account_migration_source_ref_key | product_account | UNIQUE INDEX | `("migration_source_ref")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| migration_staging_row_batch_id_row_number_key | migration_staging_row | UNIQUE INDEX | `("batch_id", "row_number")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| kpi_definition_kra_code_tier_key | kpi_definition | UNIQUE INDEX | `("kra_code", "tier")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| kpi_weight_matrix_org_unit_code_tier_kpi_class_version_key | kpi_weight_matrix | UNIQUE INDEX | `("org_unit_code", "tier", "kpi_class", "version")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| position_title_org_unit_code_key | position | UNIQUE INDEX | `("title", "org_unit_code")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| employee_app_user_id_key | employee | UNIQUE INDEX | `("app_user_id")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| employee_migration_source_ref_key | employee | UNIQUE INDEX | `("migration_source_ref")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| emolument_structure_cadre_notch_component_version_key | emolument_structure | UNIQUE INDEX | `("cadre", "notch", "component", "version")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| investor_bvn_key | investor | UNIQUE INDEX | `("bvn")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| investor_rc_number_key | investor | UNIQUE INDEX | `("rc_number")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| investor_migration_source_ref_key | investor | UNIQUE INDEX | `("migration_source_ref")` | 20260704171422_phase3_migration_tpl_and_pms_schema |
| replay_source_row_batch_id_row_number_key | replay_source_row | UNIQUE INDEX | `("batch_id", "row_number")` | 20260704174813_replay_harness_staging |
| fee_accrual_ledger_entity_code_fee_type_accrual_date_key | fee_accrual | UNIQUE INDEX | `("ledger_entity_code", "fee_type", "accrual_date")` | 20260704183303_phase3_engine_schema |
| nav_record_ledger_entity_code_valuation_date_key | nav_record | UNIQUE INDEX | `("ledger_entity_code", "valuation_date")` | 20260704183303_phase3_engine_schema |
| distribution_workflow_instance_id_key | distribution | UNIQUE INDEX | `("workflow_instance_id")` | 20260704183303_phase3_engine_schema |
| distribution_line_item_distribution_id_product_account_id_key | distribution_line_item | UNIQUE INDEX | `("distribution_id", "product_account_id")` | 20260704183303_phase3_engine_schema |
| budget_version_workflow_instance_id_key | budget_version | UNIQUE INDEX | `("workflow_instance_id")` | 20260704204340_budget_management_schema |
| budget_version_fiscal_year_scenario_label_key | budget_version | UNIQUE INDEX | `("fiscal_year", "scenario_label")` | 20260704204340_budget_management_schema |
| budget_line_monthly_amount_budget_line_id_month_key | budget_line_monthly_amount | UNIQUE INDEX | `("budget_line_id", "month")` | 20260704204340_budget_management_schema |
| budget_variance_rag_threshold_version_key | budget_variance_rag_threshold | UNIQUE INDEX | `("version")` | 20260704210938_budget_variance_rag_threshold |
| nd_mandate_account_mandate_ref_key | nd_mandate_account | UNIQUE INDEX | `("mandate_ref")` | 20260704211928_nd_mandate_engine_schema |
| nd_mandate_provisional_accrual_nd_mandate_account_id_accrua_key | nd_mandate_provisional_accrual | UNIQUE INDEX | `("nd_mandate_account_id", "accrual_date")` | 20260704211928_nd_mandate_engine_schema |
| ssb_member_member_ref_key | ssb_member | UNIQUE INDEX | `("member_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| ssb_member_migration_source_ref_key | ssb_member | UNIQUE INDEX | `("migration_source_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| ssb_resolution_resolution_ref_key | ssb_resolution | UNIQUE INDEX | `("resolution_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| ssb_resolution_migration_source_ref_key | ssb_resolution | UNIQUE INDEX | `("migration_source_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| purification_record_purification_ref_key | purification_record | UNIQUE INDEX | `("purification_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| purification_record_migration_source_ref_key | purification_record | UNIQUE INDEX | `("migration_source_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| compliance_check_check_code_key | compliance_check | UNIQUE INDEX | `("check_code")` | 20260704215727_tpl04_06_13_shariah_governance |
| compliance_check_migration_source_ref_key | compliance_check | UNIQUE INDEX | `("migration_source_ref")` | 20260704215727_tpl04_06_13_shariah_governance |
| user_session_token_hash_key | user_session | UNIQUE INDEX | `("token_hash")` | 20260704222755_auth_layer_sessions_policy |
| kri_reading_unique_row | kri_reading | UNIQUE INDEX | `("kri_code", COALESCE("ledger_entity_code", '')` | 20260705053433_kri_engine_schema |
| stress_scenario_config_model_type_scenario_code_version_key | stress_scenario_config | UNIQUE INDEX | `("model_type", "scenario_code", "version")` | 20260705055544_stress_models_schema |
| stress_test_run_approval_workflow_instance_id_key | stress_test_run | UNIQUE INDEX | `("approval_workflow_instance_id")` | 20260705055544_stress_models_schema |
| enterprise_risk_profile_entry_riskCategory_key | enterprise_risk_profile_entry | UNIQUE INDEX | `("riskCategory")` | 20260705064440_dashboard_reconciliation_part2 |
| template_cell_map_regulator_template_id_sheet_name_cell_add_key | template_cell_map | UNIQUE INDEX | `("regulator_template_id", "sheet_name", "cell_address", "map_version")` | 20260705065742_regulatory_reporting_module |
| template_field_map_regulator_template_id_page_field_name_ma_key | template_field_map | UNIQUE INDEX | `("regulator_template_id", "page", "field_name", "map_version")` | 20260705065742_regulatory_reporting_module |
| regulatory_filing_run_workflow_instance_id_key | regulatory_filing_run | UNIQUE INDEX | `("workflow_instance_id")` | 20260705065742_regulatory_reporting_module |
| wm_client_asset_workflow_instance_id_key | wm_client_asset | UNIQUE INDEX | `("workflow_instance_id")` | 20260705075013_wealth_management_v1_1 |
| wm_allocation_policy_wm_client_profile_id_version_key | wm_allocation_policy | UNIQUE INDEX | `("wm_client_profile_id", "version")` | 20260705075013_wealth_management_v1_1 |
| wm_risk_profile_wm_client_profile_id_version_key | wm_risk_profile | UNIQUE INDEX | `("wm_client_profile_id", "version")` | 20260705075013_wealth_management_v1_1 |
| wm_growth_plan_wm_client_profile_id_version_key | wm_growth_plan | UNIQUE INDEX | `("wm_client_profile_id", "version")` | 20260705075013_wealth_management_v1_1 |
| wm_stress_scenario_config_scenarioCode_version_key | wm_stress_scenario_config | UNIQUE INDEX | `("scenarioCode", "version")` | 20260705075013_wealth_management_v1_1 |
| portal_client_user_wm_client_profile_id_key | portal_client_user | UNIQUE INDEX | `("wm_client_profile_id")` | 20260705075013_wealth_management_v1_1 |
| portal_client_session_token_hash_key | portal_client_session | UNIQUE INDEX | `("token_hash")` | 20260705075013_wealth_management_v1_1 |
| role_scorecard_override_workflow_instance_id_key | role_scorecard_override | UNIQUE INDEX | `("workflow_instance_id")` | 20260705090125_pms_slot_b |
| employee_score_submission_workflow_instance_id_key | employee_score_submission | UNIQUE INDEX | `("workflow_instance_id")` | 20260705090125_pms_slot_b |
| employee_score_submission_appraisal_cycle_id_employee_id_key | employee_score_submission | UNIQUE INDEX | `("appraisal_cycle_id", "employee_id")` | 20260705090125_pms_slot_b |
| employee_kpi_score_employee_score_submission_id_kpi_definit_key | employee_kpi_score | UNIQUE INDEX | `("employee_score_submission_id", "kpi_definition_id")` | 20260705090125_pms_slot_b |
| pms_gate_severity_config_severity_key | pms_gate_severity_config | UNIQUE INDEX | `("severity")` | 20260705090125_pms_slot_b |
| behavioural_gate_check_appraisal_cycle_id_employee_id_key | behavioural_gate_check | UNIQUE INDEX | `("appraisal_cycle_id", "employee_id")` | 20260705090125_pms_slot_b |
| employee_incentive_result_appraisal_cycle_id_employee_id_key | employee_incentive_result | UNIQUE INDEX | `("appraisal_cycle_id", "employee_id")` | 20260705090125_pms_slot_b |
| tax_rule_config_version_key | tax_rule_config | UNIQUE INDEX | `("version")` | 20260705090125_pms_slot_b |
| payroll_run_workflow_instance_id_key | payroll_run | UNIQUE INDEX | `("workflow_instance_id")` | 20260705090125_pms_slot_b |
| payroll_run_period_month_period_year_ledger_entity_code_key | payroll_run | UNIQUE INDEX | `("period_month", "period_year", "ledger_entity_code")` | 20260705090125_pms_slot_b |
| payroll_run_line_payroll_run_id_employee_id_key | payroll_run_line | UNIQUE INDEX | `("payroll_run_id", "employee_id")` | 20260705090125_pms_slot_b |
| lead_converted_investor_id_key | lead | UNIQUE INDEX | `("converted_investor_id")` | 20260705113435_graduated_onboarding_bd_register |
| investor_onboarding_case_investor_id_key | investor_onboarding_case | UNIQUE INDEX | `("investor_id")` | 20260705113435_graduated_onboarding_bd_register |
| investor_onboarding_case_workflow_instance_id_key | investor_onboarding_case | UNIQUE INDEX | `("workflow_instance_id")` | 20260705113435_graduated_onboarding_bd_register |
| payment_inflow_log_txn_id_key | payment_inflow_log | UNIQUE INDEX | `("txn_id")` | 20260705113435_graduated_onboarding_bd_register |
| counterparty_onboarding_case_counterparty_id_key | counterparty_onboarding_case | UNIQUE INDEX | `("counterparty_id")` | 20260705120525_counterparty_onboarding_case_review |
| counterparty_onboarding_case_workflow_instance_id_key | counterparty_onboarding_case | UNIQUE INDEX | `("workflow_instance_id")` | 20260705120525_counterparty_onboarding_case_review |
| strategy_statement_workflow_instance_id_key | strategy_statement | UNIQUE INDEX | `("workflow_instance_id")` | 20260705125346_strategy_layer |
| strategy_acknowledgment_publication_id_app_user_id_key | strategy_acknowledgment | UNIQUE INDEX | `("publication_id", "app_user_id")` | 20260705125346_strategy_layer |
| marketing_resource_workflow_instance_id_key | marketing_resource | UNIQUE INDEX | `("workflow_instance_id")` | 20260705132646_bd_marketing_suite |
| marketing_subscriber_email_key | marketing_subscriber | UNIQUE INDEX | `("email")` | 20260705132646_bd_marketing_suite |
| marketing_subscriber_unsubscribe_token_key | marketing_subscriber | UNIQUE INDEX | `("unsubscribe_token")` | 20260705132646_bd_marketing_suite |
| marketing_send_workflow_instance_id_key | marketing_send | UNIQUE INDEX | `("workflow_instance_id")` | 20260705132646_bd_marketing_suite |
| extension_max_one_month | counterparty_restructure_request | CHECK | `"request_type" != 'EXTENSION' OR ("extension_months" IS NOT NULL AND "extension_months" <= 1` | 20260705140000_counterparty_portal_and_complaints |
| portal_counterparty_user_counterparty_id_key | portal_counterparty_user | UNIQUE INDEX | `("counterparty_id")` | 20260705140000_counterparty_portal_and_complaints |
| portal_counterparty_session_token_hash_key | portal_counterparty_session | UNIQUE INDEX | `("token_hash")` | 20260705140000_counterparty_portal_and_complaints |
| counterparty_contact_email_key | counterparty | UNIQUE INDEX | `("contact_email")` | 20260705140000_counterparty_portal_and_complaints |
| halal_fund_launch_config_ledger_entity_code_version_key | halal_fund_launch_config | UNIQUE INDEX | `("ledger_entity_code", "version")` | 20260705212649_check6a_hf_accrual_config_and_scheduler_console |
| vendor_vendor_code_key | vendor | UNIQUE INDEX | `("vendor_code")` | 20260705221743_check6b_procurement_suite |
| purchase_order_po_number_key | purchase_order | UNIQUE INDEX | `("po_number")` | 20260705221743_check6b_procurement_suite |
| purchase_order_encumbrance_id_key | purchase_order | UNIQUE INDEX | `("encumbrance_id")` | 20260705221743_check6b_procurement_suite |
| vendor_invoice_vendor_id_invoice_number_key | vendor_invoice | UNIQUE INDEX | `("vendor_id", "invoice_number")` | 20260705221743_check6b_procurement_suite |
| payment_batch_batch_number_key | payment_batch | UNIQUE INDEX | `("batch_number")` | 20260705221743_check6b_procurement_suite |
| payment_batch_workflow_instance_id_key | payment_batch | UNIQUE INDEX | `("workflow_instance_id")` | 20260705221743_check6b_procurement_suite |
| asset_register_entry_asset_code_key | asset_register_entry | UNIQUE INDEX | `("asset_code")` | 20260705221743_check6b_procurement_suite |
| asset_depreciation_run_asset_register_entry_id_period_month_key | asset_depreciation_run | UNIQUE INDEX | `("asset_register_entry_id", "period_month", "period_year")` | 20260705221743_check6b_procurement_suite |
| ai_token_budget_org_unit_code_period_year_period_month_key | ai_token_budget | UNIQUE INDEX | `("org_unit_code", "period_year", "period_month")` | 20260706065721_check6b2_ai_gateway_and_stakeholder_reporting |
| stakeholder_report_run_workflow_instance_id_key | stakeholder_report_run | UNIQUE INDEX | `("workflow_instance_id")` | 20260706065721_check6b2_ai_gateway_and_stakeholder_reporting |
| employee_personal_record_change_request_workflow_instance_i_key | employee_personal_record_change_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260706092529_check6b2_tranche2_profile_hub |
| counterparty_facility_application_workflow_instance_id_key | counterparty_facility_application | UNIQUE INDEX | `("workflow_instance_id")` | 20260706105105_check6c_facility_application |
| zakat_assessment_run_workflow_instance_id_key | zakat_assessment_run | UNIQUE INDEX | `("workflow_instance_id")` | 20260706130000_check6e_zakat_engine |
| zakat_declared_item_workflow_instance_id_key | zakat_declared_item | UNIQUE INDEX | `("workflow_instance_id")` | 20260706130000_check6e_zakat_engine |
| task_default_gate_policy_min_default_count_key | task_default_gate_policy | UNIQUE INDEX | `("min_default_count")` | 20260706140000_check6f_reminder_ladder |
| payment_reminder_ladder_config_day_offset_key | payment_reminder_ladder_config | UNIQUE INDEX | `("day_offset")` | 20260706140000_check6f_reminder_ladder |
| payment_reminder_notice_log_obligation_id_day_offset_key | payment_reminder_notice_log | UNIQUE INDEX | `("obligation_id", "day_offset")` | 20260706140000_check6f_reminder_ladder |
| counterparty_restructure_request_workflow_instance_id_key | counterparty_restructure_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260706140000_check6f_reminder_ladder |
| counterparty_restructure_request_one_approved_per_obligation | counterparty_restructure_request | UNIQUE INDEX | `("obligation_id")` | 20260706140000_check6f_reminder_ladder |
| payment_reminder_dispatch_queue_obligation_id_day_offset_key | payment_reminder_dispatch_queue | UNIQUE INDEX | `("obligation_id", "day_offset")` | 20260706150000_check6g_counterparty_elaboration |
| bureau_provider_provider_slot_key | bureau_provider | UNIQUE INDEX | `("provider_slot")` | 20260707100000_check6h_bureau_gateway |
| investment_memo_workflow_instance_id_key | investment_memo | UNIQUE INDEX | `("workflow_instance_id")` | 20260707120000_check7_investment_memo |
| investment_memo_facility_application_id_version_key | investment_memo | UNIQUE INDEX | `("facility_application_id", "version")` | 20260707120000_check7_investment_memo |
| board_directive_task_id_key | board_directive | UNIQUE INDEX | `("task_id")` | 20260707130000_check7_board_directives |
| board_minutes_transmission_minutes_id_recipient_user_id_key | board_minutes_transmission | UNIQUE INDEX | `("minutes_id", "recipient_user_id")` | 20260707160000_check7_board_minutes |
| welfare_scheme_name_key | welfare_scheme | UNIQUE INDEX | `("name")` | 20260707170000_check7_talent_reward |
| reward_type_name_key | reward_type | UNIQUE INDEX | `("name")` | 20260707170000_check7_talent_reward |
| talent_recommendation_workflow_instance_id_key | talent_recommendation | UNIQUE INDEX | `("workflow_instance_id")` | 20260707170000_check7_talent_reward |
| portal_client_user_investor_id_key | portal_client_user | UNIQUE INDEX | `("investor_id")` | 20260707190000_check8_portal_widening |
| subscription_request_workflow_instance_id_key | subscription_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260707194828_check9_subscription_lifecycle |
| nd_mandate_account_activation_workflow_instance_id_key | nd_mandate_account | UNIQUE INDEX | `("activation_workflow_instance_id")` | 20260707200500_check9_nd_mandate_gating |
| metric_definition_metric_code_version_key | metric_definition | UNIQUE INDEX | `("metric_code", "version")` | 20260707214625_check10_metric_definition |
| ledger_reconciliation_config_metric_code_version_key | ledger_reconciliation_config | UNIQUE INDEX | `("metric_code", "version")` | 20260707220212_check10_ledger_reconciliation_config |
| product_setup_workflow_instance_id_key | product | UNIQUE INDEX | `("setup_workflow_instance_id")` | 20260707234004_check10_product_factory |
| required_document_config_application_type_document_type_key | required_document_config | UNIQUE INDEX | `("application_type", "document_type")` | 20260708003000_check10_document_uploads |
| investment_memo_threshold_config_workflow_instance_id_key | investment_memo_threshold_config | UNIQUE INDEX | `("workflow_instance_id")` | 20260708010000_check46_investment_memo_chain |
| investment_memo_threshold_config_version_key | investment_memo_threshold_config | UNIQUE INDEX | `("version")` | 20260708010000_check46_investment_memo_chain |
| investor_bank_account_change_request_workflow_instance_id_key | investor_bank_account_change_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260708191816_investor_bank_account_change_flow |
| investor_bank_account_change_request_resulting_bank_account_key | investor_bank_account_change_request | UNIQUE INDEX | `("resulting_bank_account_id")` | 20260708191816_investor_bank_account_change_flow |
| employee_onboarding_request_workflow_instance_id_key | employee_onboarding_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260708200243_employee_lifecycle_flow |
| employee_onboarding_request_resulting_employee_id_key | employee_onboarding_request | UNIQUE INDEX | `("resulting_employee_id")` | 20260708200243_employee_lifecycle_flow |
| employee_offboarding_request_workflow_instance_id_key | employee_offboarding_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260708200243_employee_lifecycle_flow |
| employee_incentive_pct_change_request_workflow_instance_id_key | employee_incentive_pct_change_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260708200243_employee_lifecycle_flow |
| investor_contact_amendment_request_workflow_instance_id_key | investor_contact_amendment_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260708202841_investor_contact_amendment_flow |
| strategic_pillar_workflow_instance_id_key | strategic_pillar | UNIQUE INDEX | `("workflow_instance_id")` | 20260708212524_pms_strategy_spine_governance |
| strategic_objective_workflow_instance_id_key | strategic_objective | UNIQUE INDEX | `("workflow_instance_id")` | 20260708212524_pms_strategy_spine_governance |
| kpi_definition_workflow_instance_id_key | kpi_definition | UNIQUE INDEX | `("workflow_instance_id")` | 20260708212524_pms_strategy_spine_governance |
| petty_cash_float_float_code_key | petty_cash_float | UNIQUE INDEX | `("float_code")` | 20260708215027_petty_cash_imprest_module |
| petty_cash_replenishment_claim_workflow_instance_id_key | petty_cash_replenishment_claim | UNIQUE INDEX | `("workflow_instance_id")` | 20260708215027_petty_cash_imprest_module |
| letterhead_template_version_key | letterhead_template | UNIQUE INDEX | `("version")` | 20260708221640_letterhead_template |
| letterhead_template_workflow_instance_id_key | letterhead_template | UNIQUE INDEX | `("workflow_instance_id")` | 20260708221640_letterhead_template |
| document_template_workflow_instance_id_key | document_template | UNIQUE INDEX | `("workflow_instance_id")` | 20260708224126_certificate_document_template |
| document_template_template_type_template_key_version_key | document_template | UNIQUE INDEX | `("template_type", "template_key", "version")` | 20260708224126_certificate_document_template |
| certificate_certificate_number_key | certificate | UNIQUE INDEX | `("certificate_number")` | 20260708224126_certificate_document_template |
| letter_instance_workflow_instance_id_key | letter_instance | UNIQUE INDEX | `("workflow_instance_id")` | 20260708231423_letter_engine |
| payment_gateway_provider_provider_slot_key | payment_gateway_provider | UNIQUE INDEX | `("provider_slot")` | 20260709061200_payment_gateway_adapter |
| product_custodian_account_provider_id_product_code_key | product_custodian_account | UNIQUE INDEX | `("provider_id", "product_code")` | 20260709061200_payment_gateway_adapter |
| payment_gateway_inflow_gateway_event_ref_key | payment_gateway_inflow | UNIQUE INDEX | `("gateway_event_ref")` | 20260709061200_payment_gateway_adapter |
| payment_gateway_inflow_subscription_request_id_key | payment_gateway_inflow | UNIQUE INDEX | `("subscription_request_id")` | 20260709061200_payment_gateway_adapter |
| payment_gateway_inflow_reversal_redemption_request_id_key | payment_gateway_inflow | UNIQUE INDEX | `("reversal_redemption_request_id")` | 20260709061200_payment_gateway_adapter |
| payment_gateway_provider_config_workflow_instance_id_key | payment_gateway_provider | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260709070000_payment_gateway_maker_checker |
| product_custodian_account_config_workflow_instance_id_key | product_custodian_account | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260709070000_payment_gateway_maker_checker |
| payment_gateway_inflow_decision_workflow_instance_id_key | payment_gateway_inflow | UNIQUE INDEX | `("decision_workflow_instance_id")` | 20260709070000_payment_gateway_maker_checker |
| transmitted_document_recipient_document_id_recipient_user_id_key | transmitted_document_recipient | UNIQUE INDEX | `("document_id", "recipient_user_id")` | 20260709080000_board_suite_and_task_completion |
| calendar_entry_owner_user_id_source_type_source_id_key | calendar_entry | UNIQUE INDEX | `("owner_user_id", "source_type", "source_id")` | 20260709080905_staff_calendar |
| calendar_meeting_attendee_calendar_entry_id_attendee_user_i_key | calendar_meeting_attendee | UNIQUE INDEX | `("calendar_entry_id", "attendee_user_id")` | 20260709080905_staff_calendar |
| calendar_feed_token_user_id_key | calendar_feed_token | UNIQUE INDEX | `("user_id")` | 20260709080905_staff_calendar |
| calendar_feed_token_token_key | calendar_feed_token | UNIQUE INDEX | `("token")` | 20260709080905_staff_calendar |
| approval_chain_version_workflow_instance_id_key | approval_chain_version | UNIQUE INDEX | `("workflow_instance_id")` | 20260709090000_approval_chain_versioning |
| approval_chain_version_workflow_type_code_version_key | approval_chain_version | UNIQUE INDEX | `("workflow_type_code", "version")` | 20260709090000_approval_chain_versioning |
| investor_mandate_amendment_request_workflow_instance_id_key | investor_mandate_amendment_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260709101453_check13_tier2_tier3 |
| investor_exit_request_workflow_instance_id_key | investor_exit_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260709101453_check13_tier2_tier3 |
| bank_statement_line_matched_journal_entry_line_id_key | bank_statement_line | UNIQUE INDEX | `("matched_journal_entry_line_id")` | 20260709101453_check13_tier2_tier3 |
| counterparty_write_off_request_workflow_instance_id_key | counterparty_write_off_request | UNIQUE INDEX | `("workflow_instance_id")` | 20260709101453_check13_tier2_tier3 |
| privacy_notice_config_version_key | privacy_notice_config | UNIQUE INDEX | `("version")` | 20260709161326_ndpa_compliance_pack |
| exec_oversight_policy_version_key | exec_oversight_policy | UNIQUE INDEX | `("version")` | 20260709190000_exec_oversight_mode |
| portfolio_market_value_entry_ledger_entity_code_valuation_d_key | portfolio_market_value_entry | UNIQUE INDEX | `("ledger_entity_code", "valuation_date", "version")` | 20260710120000_portfolio_market_value_entry |
| notification_exactly_one_recipient_check | notification | CHECK | `(recipient_user_id IS NOT NULL AND recipient_investor_id IS NULL` | 20260710150000_portal_notifications |
| task_submission_accepted_task_id_key | task_submission | UNIQUE INDEX | `("accepted_task_id")` | 20260710190000_check17_attendance_leave_task_kpi |
| leave_type_code_key | leave_type | UNIQUE INDEX | `("code")` | 20260710190000_check17_attendance_leave_task_kpi |
| leave_entitlement_employee_id_leave_type_code_year_key | leave_entitlement | UNIQUE INDEX | `("employee_id", "leave_type_code", "year")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_provider_provider_slot_key | attendance_provider | UNIQUE INDEX | `("provider_slot")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_provider_config_workflow_instance_id_key | attendance_provider | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_event_provider_id_raw_ref_key | attendance_event | UNIQUE INDEX | `("provider_id", "raw_ref")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_lock_user_mapping_provider_id_device_user_ref_key | attendance_lock_user_mapping | UNIQUE INDEX | `("provider_id", "device_user_ref")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_clock_in_policy_org_unit_code_cadre_key | attendance_clock_in_policy | UNIQUE INDEX | `("org_unit_code", "cadre")` | 20260710190000_check17_attendance_leave_task_kpi |
| attendance_lateness_gate_policy_min_late_count_key | attendance_lateness_gate_policy | UNIQUE INDEX | `("min_late_count")` | 20260710190000_check17_attendance_leave_task_kpi |
| payout_compilation_batch_batch_number_key | payout_compilation_batch | UNIQUE INDEX | `("batch_number")` | 20260710200000_check18_obligations_payout_tax_framework |
| payout_compilation_batch_workflow_instance_id_key | payout_compilation_batch | UNIQUE INDEX | `("workflow_instance_id")` | 20260710200000_check18_obligations_payout_tax_framework |
| payout_compilation_batch_bank_instruction_letter_instance_i_key | payout_compilation_batch | UNIQUE INDEX | `("bank_instruction_letter_instance_id")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_rate_version_workflow_instance_id_key | tax_rate_version | UNIQUE INDEX | `("workflow_instance_id")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_rate_version_tax_type_version_key | tax_rate_version | UNIQUE INDEX | `("tax_type", "version")` | 20260710200000_check18_obligations_payout_tax_framework |
| investor_tax_exemption_investor_id_tax_type_key | investor_tax_exemption | UNIQUE INDEX | `("investor_id", "tax_type")` | 20260710200000_check18_obligations_payout_tax_framework |
| fee_invoice_invoice_number_key | fee_invoice | UNIQUE INDEX | `("invoice_number")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_gl_mapping_tax_type_key | tax_gl_mapping | UNIQUE INDEX | `("tax_type")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_remittance_due_date_config_tax_type_authority_key | tax_remittance_due_date_config | UNIQUE INDEX | `("tax_type", "authority")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_remittance_batch_workflow_instance_id_key | tax_remittance_batch | UNIQUE INDEX | `("workflow_instance_id")` | 20260710200000_check18_obligations_payout_tax_framework |
| tax_remittance_batch_letter_instance_id_key | tax_remittance_batch | UNIQUE INDEX | `("letter_instance_id")` | 20260710200000_check18_obligations_payout_tax_framework |
| activation_step_skip_step_code_key | activation_step_skip | UNIQUE INDEX | `("step_code")` | 20260710210000_check20_activation_console |
| product_parameters_sheet_workflow_instance_id_key | product_parameters | UNIQUE INDEX | `("sheet_workflow_instance_id")` | 20260712150000_check24_prospectus_sheet_fields |
| screening_list_source_source_code_key | screening_list_source | UNIQUE INDEX | `("source_code")` | 20260713100000_check26_screening_gateway_schema |
| screening_list_source_config_workflow_instance_id_key | screening_list_source | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260713100000_check26_screening_gateway_schema |
| screening_list_entry_source_code_source_record_id_key | screening_list_entry | UNIQUE INDEX | `("source_code", "source_record_id")` | 20260713100000_check26_screening_gateway_schema |
| commercial_screening_provider_provider_slot_key | commercial_screening_provider | UNIQUE INDEX | `("provider_slot")` | 20260713100000_check26_screening_gateway_schema |
| commercial_screening_provider_config_workflow_instance_id_key | commercial_screening_provider | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260713100000_check26_screening_gateway_schema |
| screening_hit_decision_workflow_instance_id_key | screening_hit | UNIQUE INDEX | `("decision_workflow_instance_id")` | 20260713100000_check26_screening_gateway_schema |
| calendar_gateway_provider_provider_slot_key | calendar_gateway_provider | UNIQUE INDEX | `("provider_slot")` | 20260713160000_check27_connector_pack_schema |
| calendar_gateway_provider_config_workflow_instance_id_key | calendar_gateway_provider | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260713160000_check27_connector_pack_schema |
| external_calendar_connection_user_id_provider_id_key | external_calendar_connection | UNIQUE INDEX | `("user_id", "provider_id")` | 20260713160000_check27_connector_pack_schema |
| ai_provider_credential_provider_slot_key | ai_provider_credential | UNIQUE INDEX | `("provider_slot")` | 20260713163000_check27_ai_credential_schema |
| ai_provider_credential_config_workflow_instance_id_key | ai_provider_credential | UNIQUE INDEX | `("config_workflow_instance_id")` | 20260713163000_check27_ai_credential_schema |
| department_head_designation_workflow_instance_id_key | department_head_designation | UNIQUE INDEX | `("workflow_instance_id")` | 20260713170000_inv74_department_head_designation |
| department_head_designation_one_active_per_org_unit | department_head_designation | UNIQUE INDEX | `("org_unit_code")` | 20260713180000_inv75c_department_head_partial_unique_index |

220 named constraints/partial-unique-indexes found.

## 6. Evidence Packs On File (fact, not certification)

- `CHECK10_EVIDENCE.md`
- `CHECK11_EVIDENCE.md`
- `CHECK12_EVIDENCE.md`
- `CHECK13_EVIDENCE.md`
- `CHECK14_EVIDENCE.md`
- `CHECK15_EVIDENCE.md`
- `CHECK16_EVIDENCE.md`
- `CHECK17_EVIDENCE.md`
- `CHECK18_EVIDENCE.md`
- `CHECK20_EVIDENCE.md`
- `CHECK21_EVIDENCE.md`
- `CHECK22_EVIDENCE.md`
- `CHECK23_EVIDENCE.md`
- `CHECK24_EVIDENCE.md`
- `CHECK25_EVIDENCE.md`
- `CHECK26_EVIDENCE.md`
- `CHECK27_EVIDENCE.md`
- `CHECK28_EVIDENCE.md`
- `CHECK2_EVIDENCE.md`
- `CHECK3_EVIDENCE.md`
- `CHECK4_EVIDENCE.md`
- `CHECK5B_EVIDENCE.md`
- `CHECK5_EVIDENCE.md`
- `CHECK6A_EVIDENCE.md`
- `CHECK6B2_EVIDENCE.md`
- `CHECK6B_EVIDENCE.md`
- `CHECK6C1_EVIDENCE.md`
- `CHECK6C2_EVIDENCE.md`
- `CHECK6D_EVIDENCE.md`
- `CHECK6E_EVIDENCE.md`
- `CHECK6F_EVIDENCE.md`
- `CHECK7_EVIDENCE.md`
- `CHECK8_EVIDENCE.md`
- `CHECK9_EVIDENCE.md`
- `M1_EVIDENCE.md`

Cross-reference these against the rows above and against `One17_Governance_Controls_Register_v1.doc`'s status table to determine VERIFIED / BUILT-PENDING / DECLARED for any given control — that determination is the CEO's advisor's to make (invariant 45d), never this script's.

## 7. API Route Inventory (mechanically scanned from src/**/*.controller.ts — RES-001 CH-03)

Every `@Get`/`@Post`/`@Put`/`@Patch`/`@Delete` decorator found, with the controller file and the nearest preceding `@RequiresCapability` (if any — routes with none are either public by design or gated by a session guard only, per the controller's own header comment).

| Verb | Path | Capability gate | Controller file |
|---|---|---|---|
| GET | `/` | _(none — see controller comment)_ | src/app.controller.ts |
| GET | `/health` | _(none — see controller comment)_ | src/app.controller.ts |
| GET | `/ready` | _(none — see controller comment)_ | src/app.controller.ts |
| GET | `/version` | _(none — see controller comment)_ | src/app.controller.ts |
| POST | `/auth/login` | _(none — see controller comment)_ | src/auth/auth.controller.ts |
| POST | `/auth/logout` | _(none — see controller comment)_ | src/auth/auth.controller.ts |
| GET | `/auth/me` | _(none — see controller comment)_ | src/auth/auth.controller.ts |
| GET | `/mfa/admin/financial-capabilities` | MFA_ENFORCEMENT_CONFIG | src/mfa/mfa.controller.ts |
| POST | `/mfa/admin/financial-capabilities` | MFA_ENFORCEMENT_CONFIG | src/mfa/mfa.controller.ts |
| DELETE | `/mfa/admin/financial-capabilities/:functionCode` | MFA_ENFORCEMENT_CONFIG | src/mfa/mfa.controller.ts |
| POST | `/mfa/admin/global-enforcement` | MFA_ENFORCEMENT_CONFIG | src/mfa/mfa.controller.ts |
| POST | `/mfa/admin/reset/:userId` | MFA_ENFORCEMENT_CONFIG | src/mfa/mfa.controller.ts |
| POST | `/mfa/enroll/begin` | _(none — see controller comment)_ | src/mfa/mfa.controller.ts |
| POST | `/mfa/enroll/confirm` | _(none — see controller comment)_ | src/mfa/mfa.controller.ts |
| GET | `/mfa/status` | _(none — see controller comment)_ | src/mfa/mfa.controller.ts |
| POST | `/mfa/verify` | _(none — see controller comment)_ | src/mfa/mfa.controller.ts |
| POST | `/activation-console/activate` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| POST | `/activation-console/proof-battery/run` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| GET | `/activation-console/status` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| POST | `/activation-console/steps/:stepCode/skip` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| POST | `/activation-console/steps/:stepCode/unskip` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| POST | `/activation-console/tasks` | ACTIVATION_CONSOLE | src/ops-api/activation-console.controller.ts |
| GET | `/ai-provider-credentials` | AI_CAPABILITY_FLAG_MANAGEMENT | src/ops-api/ai-provider-credential.controller.ts |
| POST | `/ai-provider-credentials` | AI_CAPABILITY_FLAG_MANAGEMENT | src/ops-api/ai-provider-credential.controller.ts |
| POST | `/ai-provider-credentials/:workflowInstanceId/approve` | AI_CAPABILITY_FLAG_MANAGEMENT | src/ops-api/ai-provider-credential.controller.ts |
| GET | `/ai/capability-flags` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| POST | `/ai/capability-flags/:code/request-toggle` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| GET | `/ai/interaction-log` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| POST | `/ai/invoke` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| GET | `/ai/kill-switch` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| POST | `/ai/kill-switch/activate` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| POST | `/ai/kill-switch/deactivate` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| GET | `/ai/token-budgets` | _(none — see controller comment)_ | src/ops-api/ai.controller.ts |
| POST | `/attendance/exceptions` | _(none — see controller comment)_ | src/ops-api/attendance.controller.ts |
| POST | `/attendance/exceptions/:id/decide` | _(none — see controller comment)_ | src/ops-api/attendance.controller.ts |
| GET | `/attendance/exceptions/mine` | _(none — see controller comment)_ | src/ops-api/attendance.controller.ts |
| GET | `/attendance/exceptions/subordinates` | _(none — see controller comment)_ | src/ops-api/attendance.controller.ts |
| POST | `/attendance/lock-user-mappings` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| GET | `/attendance/providers` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| POST | `/attendance/providers` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| POST | `/attendance/providers/:id/connect-ttlock` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| POST | `/attendance/providers/:id/import` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| POST | `/attendance/providers/:workflowInstanceId/approve` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| GET | `/attendance/unmapped-events` | ATTENDANCE_GATEWAY_POLICY | src/ops-api/attendance.controller.ts |
| GET | `/audit-trail/entity-history/:entityType/:entityId` | AUDIT_TRAIL_VIEW | src/ops-api/audit-trail-viewer.controller.ts |
| GET | `/audit-trail/events` | AUDIT_TRAIL_VIEW | src/ops-api/audit-trail-viewer.controller.ts |
| POST | `/audit-trail/export` | AUDIT_TRAIL_VIEW | src/ops-api/audit-trail-viewer.controller.ts |
| GET | `/audit-trail/integrity` | AUDIT_TRAIL_VIEW | src/ops-api/audit-trail-viewer.controller.ts |
| POST | `/ops/backup-runs/report` | _(none — see controller comment)_ | src/ops-api/backup-run-report.controller.ts |
| GET | `/ops/backup-runs` | _(none — see controller comment)_ | src/ops-api/backup.controller.ts |
| GET | `/bd/register` | BD_REGISTER | src/ops-api/bd.controller.ts |
| GET | `/board-calendar/events` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| POST | `/board-calendar/events` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| GET | `/board-calendar/events/:id/submissions` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| GET | `/board-calendar/reminder-config` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| POST | `/board-calendar/reminder-config` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| POST | `/board-calendar/submissions` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| POST | `/board-calendar/submissions/:id/receive` | BOARD_CALENDAR_MANAGEMENT | src/ops-api/board-calendar.controller.ts |
| GET | `/board-directives` | BOARD_DIRECTIVE_MANAGEMENT | src/ops-api/board-directive.controller.ts |
| POST | `/board-directives` | BOARD_DIRECTIVE_MANAGEMENT | src/ops-api/board-directive.controller.ts |
| POST | `/board-directives/:id/acknowledge` | _(none — see controller comment)_ | src/ops-api/board-directive.controller.ts |
| POST | `/board-directives/:id/report-back` | BOARD_DIRECTIVE_MANAGEMENT | src/ops-api/board-directive.controller.ts |
| GET | `/board-minutes` | _(none — see controller comment)_ | src/ops-api/board-minutes.controller.ts |
| POST | `/board-minutes` | _(none — see controller comment)_ | src/ops-api/board-minutes.controller.ts |
| GET | `/board-minutes/:id` | _(none — see controller comment)_ | src/ops-api/board-minutes.controller.ts |
| POST | `/board-minutes/:id/acknowledge` | _(none — see controller comment)_ | src/ops-api/board-minutes.controller.ts |
| POST | `/board-minutes/:id/transmit` | _(none — see controller comment)_ | src/ops-api/board-minutes.controller.ts |
| POST | `/budget-review-pack/:workflowInstanceId/approve` | BUDGET_REVIEW_PACK | src/ops-api/budget-review-pack.controller.ts |
| POST | `/budget-review-pack/generate` | BUDGET_REVIEW_PACK | src/ops-api/budget-review-pack.controller.ts |
| GET | `/budget-review-pack/history` | BUDGET_REVIEW_PACK | src/ops-api/budget-review-pack.controller.ts |
| GET | `/budget-review-pack/variance-preview` | BUDGET_REVIEW_PACK | src/ops-api/budget-review-pack.controller.ts |
| GET | `/budget/encumbrances` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| POST | `/budget/encumbrances` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| POST | `/budget/encumbrances/:id/release` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| GET | `/budget/encumbrances/active-lines` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| GET | `/budget/versions` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| POST | `/budget/versions` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| GET | `/budget/versions/:id/lines` | BUDGET_MANAGEMENT | src/ops-api/budget.controller.ts |
| GET | `/calendar-feed/:token.ics` | _(none — see controller comment)_ | src/ops-api/calendar-feed.controller.ts |
| GET | `/calendar-gateway/connect/:providerId/authorize-url` | _(none — see controller comment)_ | src/ops-api/calendar-gateway.controller.ts |
| GET | `/calendar-gateway/connect/:providerId/callback` | _(none — see controller comment)_ | src/ops-api/calendar-gateway.controller.ts |
| POST | `/calendar-gateway/connections/:id/revoke` | _(none — see controller comment)_ | src/ops-api/calendar-gateway.controller.ts |
| GET | `/calendar-gateway/connections/mine` | _(none — see controller comment)_ | src/ops-api/calendar-gateway.controller.ts |
| GET | `/calendar-gateway/providers` | CALENDAR_GATEWAY_POLICY | src/ops-api/calendar-gateway.controller.ts |
| POST | `/calendar-gateway/providers` | CALENDAR_GATEWAY_POLICY | src/ops-api/calendar-gateway.controller.ts |
| POST | `/calendar-gateway/providers/:workflowInstanceId/approve` | CALENDAR_GATEWAY_POLICY | src/ops-api/calendar-gateway.controller.ts |
| GET | `/calendar/:id` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/:id/delete` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/busy` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| GET | `/calendar/feed-token/mine` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/feed-token/revoke` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/meetings` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/meetings/:id/respond` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| GET | `/calendar/mine` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/personal` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| POST | `/calendar/personal/:id` | _(none — see controller comment)_ | src/ops-api/calendar.controller.ts |
| GET | `/certificates` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| GET | `/certificates/:id` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| GET | `/certificates/:id/pdf` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| POST | `/certificates/:id/reissue` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| GET | `/certificates/templates` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| POST | `/certificates/templates` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| POST | `/certificates/templates/:workflowInstanceId/approve` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| GET | `/certificates/templates/pending` | CERTIFICATE_TEMPLATE_MANAGEMENT | src/ops-api/certificate.controller.ts |
| GET | `/company-accounting/inter-entity-reconciliation` | FINANCIAL_STATEMENTS | src/ops-api/company-accounting.controller.ts |
| GET | `/complaints` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| POST | `/complaints` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| POST | `/complaints/:id/assign` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| POST | `/complaints/:id/close` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| POST | `/complaints/:id/escalate` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| POST | `/complaints/:id/resolve` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| GET | `/complaints/dsr-queue` | COMPLAINT_MANAGEMENT | src/ops-api/complaint.controller.ts |
| GET | `/compliance/queue` | SCREENING_PERFORM | src/ops-api/compliance-sweep.controller.ts |
| GET | `/counterparties` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/bureau-pull` | BUREAU_GATEWAY_PULL | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id/bureau-pulls` | BUREAU_GATEWAY_PULL | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/file-managing-officer` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/record-periodic-review` | SCREENING_PERFORM | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id/repayment-obligations` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/repayment-obligations` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/restructuring-feature` | COUNTERPARTY_RESTRUCTURE_REQUEST | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/risk-assessment` | SCREENING_PERFORM | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/submit-for-review` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id/write-off-requests` | COUNTERPARTY_WRITE_OFF_INITIATION | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/write-off-requests` | COUNTERPARTY_WRITE_OFF_INITIATION | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/:id/write-off-requests/:requestId` | COUNTERPARTY_WRITE_OFF_INITIATION | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/:id/write-off-requests/:requestId/decide` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/facility-applications/:id/checklist` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/facility-applications/:id/disburse` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/facility-applications/:id/investment-memos` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/facility-applications/:id/investment-memos` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/facility-applications/:id/review-and-submit` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/facility-applications/all` | FACILITY_APPLICATION_LEGAL_VIEW | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/facility-applications/pending` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/investment-memo-threshold` | INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/investment-memo-threshold` | INVESTMENT_MEMO_THRESHOLD_MANAGEMENT | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/investment-memos/:id/submit-for-cio-approval` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/investment-memos/committee-approve/:workflowInstanceId` | INVESTMENT_COMMITTEE_APPROVAL | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/officers/file-managing` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/payment-reminders/dispatch-queue` | PAYMENT_REMINDER_DISPATCH | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/payment-reminders/dispatch-queue/:id/approve` | PAYMENT_REMINDER_DISPATCH | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/payment-reminders/dispatch-queue/:id/reject` | PAYMENT_REMINDER_DISPATCH | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/payment-reminders/ladder-config` | PAYMENT_REMINDER_LADDER_SETTINGS | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/payment-reminders/ladder-config/:dayOffset` | PAYMENT_REMINDER_LADDER_SETTINGS | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/repayment-obligations/:id/mark-paid` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/repayment-obligations/pending` | COUNTERPARTY_ONBOARDING | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/restructure-requests/:id/decide` | COUNTERPARTY_RESTRUCTURE_REQUEST | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/restructure-requests/:id/initiate-exception` | COUNTERPARTY_RESTRUCTURE_REQUEST | src/ops-api/counterparty.controller.ts |
| GET | `/counterparties/restructure-requests/pending` | COUNTERPARTY_RESTRUCTURE_REQUEST | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/review/:workflowInstanceId/ic1` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/review/:workflowInstanceId/ic2` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/review/:workflowInstanceId/md-decision` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| POST | `/counterparties/review/:workflowInstanceId/risk` | _(none — see controller comment)_ | src/ops-api/counterparty.controller.ts |
| GET | `/dashboard-composer/composable-metrics` | _(none — see controller comment)_ | src/ops-api/dashboard-composer.controller.ts |
| GET | `/dashboard-composer/dashboards` | _(none — see controller comment)_ | src/ops-api/dashboard-composer.controller.ts |
| POST | `/dashboard-composer/dashboards` | _(none — see controller comment)_ | src/ops-api/dashboard-composer.controller.ts |
| GET | `/dashboard-composer/dashboards/:id` | _(none — see controller comment)_ | src/ops-api/dashboard-composer.controller.ts |
| POST | `/dashboard-composer/dashboards/:id/delete` | _(none — see controller comment)_ | src/ops-api/dashboard-composer.controller.ts |
| GET | `/dashboards/bd` | BD_DASHBOARD | src/ops-api/dashboard.controller.ts |
| GET | `/dashboards/board` | CONTROLS_DASHBOARD | src/ops-api/dashboard.controller.ts |
| GET | `/dashboards/ceo` | CONTROLS_DASHBOARD | src/ops-api/dashboard.controller.ts |
| GET | `/dashboards/company-accounting` | COMPANY_ACCOUNTING_DASHBOARD | src/ops-api/dashboard.controller.ts |
| POST | `/dashboards/company-accounting/export` | COMPANY_ACCOUNTING_DASHBOARD | src/ops-api/dashboard.controller.ts |
| GET | `/dashboards/fund-accounting` | FUND_ACCOUNTING_DASHBOARD | src/ops-api/dashboard.controller.ts |
| GET | `/data-protection/breach-register` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/breach-register` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/breach-register/:id/assess` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/breach-register/:id/close` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/breach-register/:id/notify-data-subjects` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/breach-register/:id/notify-ndpc` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| GET | `/data-protection/retention-schedule` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| POST | `/data-protection/retention-schedule/:id/confirm` | DATA_PROTECTION_COMPLIANCE | src/ops-api/data-protection.controller.ts |
| GET | `/delegations` | _(none — see controller comment)_ | src/ops-api/delegation.controller.ts |
| POST | `/delegations` | DELEGATION_GRANT_INITIATION | src/ops-api/delegation.controller.ts |
| POST | `/delegations/:id/revoke` | DELEGATION_GRANT_INITIATION | src/ops-api/delegation.controller.ts |
| GET | `/delegations/functions` | DELEGATION_GRANT_INITIATION | src/ops-api/delegation.controller.ts |
| GET | `/delegations/users` | DELEGATION_GRANT_INITIATION | src/ops-api/delegation.controller.ts |
| GET | `/distributions` | _(none — see controller comment)_ | src/ops-api/distribution.controller.ts |
| POST | `/distributions/:id/pay` | DISTRIBUTION_APPROVAL | src/ops-api/distribution.controller.ts |
| GET | `/distributions/fund-entities` | _(none — see controller comment)_ | src/ops-api/distribution.controller.ts |
| POST | `/distributions/halal-fund/run` | DISTRIBUTION_INITIATION | src/ops-api/distribution.controller.ts |
| GET | `/distributions/product-accounts` | _(none — see controller comment)_ | src/ops-api/distribution.controller.ts |
| POST | `/document-transmission/documents` | MD_DOCUMENT_TRANSMISSION | src/ops-api/document-transmission.controller.ts |
| GET | `/document-transmission/documents` | _(none — see controller comment)_ | src/ops-api/document-transmission.controller.ts |
| POST | `/document-transmission/documents/:id/acknowledge` | _(none — see controller comment)_ | src/ops-api/document-transmission.controller.ts |
| GET | `/documents` | _(none — see controller comment)_ | src/ops-api/document.controller.ts |
| POST | `/documents` | DOCUMENT_REGISTER | src/ops-api/document.controller.ts |
| GET | `/documents/browse` | DOCUMENT_REGISTER | src/ops-api/document.controller.ts |
| GET | `/documents/required-document-config` | DOCUMENT_REGISTER | src/ops-api/document.controller.ts |
| POST | `/documents/required-document-config` | DOCUMENT_REGISTER | src/ops-api/document.controller.ts |
| POST | `/documents/required-document-config/:id/retire` | DOCUMENT_REGISTER | src/ops-api/document.controller.ts |
| GET | `/employees` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/employees/incentive-pct-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/incentive-pct-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/incentive-pct-requests/:workflowInstanceId/decide` | _(none — see controller comment)_ | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/employees/offboarding-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/offboarding-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/offboarding-requests/:workflowInstanceId/decide` | _(none — see controller comment)_ | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/employees/onboarding-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/onboarding-requests` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| POST | `/employees/onboarding-requests/:workflowInstanceId/decide` | _(none — see controller comment)_ | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/employees/org-units` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/employees/positions` | EMPLOYEE_LIFECYCLE_INITIATION | src/ops-api/employee-lifecycle.controller.ts |
| GET | `/erm/bureau-policy` | BUREAU_GATEWAY_POLICY | src/ops-api/erm.controller.ts |
| POST | `/erm/bureau-policy` | BUREAU_GATEWAY_POLICY | src/ops-api/erm.controller.ts |
| GET | `/erm/bureau-providers` | BUREAU_GATEWAY_POLICY | src/ops-api/erm.controller.ts |
| POST | `/erm/bureau-providers` | BUREAU_GATEWAY_POLICY | src/ops-api/erm.controller.ts |
| GET | `/erm/bureau-pull-register` | BUREAU_GATEWAY_POLICY | src/ops-api/erm.controller.ts |
| GET | `/erm/kri-escalations` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| GET | `/erm/kri-readings` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| GET | `/erm/risk-matrix` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| POST | `/erm/risk-matrix/:workflowInstanceId/approve` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| POST | `/erm/risk-matrix/categories/:categoryId/thresholds` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| GET | `/erm/risk-matrix/pending` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| POST | `/erm/risk-matrix/propose` | RISK_APPETITE_MATRIX | src/ops-api/erm.controller.ts |
| GET | `/erm/risk-register` | RISK_REGISTER | src/ops-api/erm.controller.ts |
| POST | `/erm/risk-register/:id/approve` | RISK_REGISTER | src/ops-api/erm.controller.ts |
| GET | `/erm/stress-runs` | STRESS_TESTING | src/ops-api/erm.controller.ts |
| GET | `/erm/stress-scenarios` | STRESS_TESTING | src/ops-api/erm.controller.ts |
| POST | `/erm/stress/:runId/request-baseline` | STRESS_TESTING | src/ops-api/erm.controller.ts |
| POST | `/erm/stress/run` | STRESS_TESTING | src/ops-api/erm.controller.ts |
| GET | `/exec-oversight/log` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/policies` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| POST | `/exec-oversight/policies` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| POST | `/exec-oversight/policies/:id/approve` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| POST | `/exec-oversight/sessions` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/bureau-pulls` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/certificates` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/dashboard` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| POST | `/exec-oversight/sessions/:id/end` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/letters` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/messages` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/exec-oversight/sessions/:id/statements` | EXEC_OVERSIGHT | src/ops-api/exec-oversight.controller.ts |
| GET | `/fund-accounting/:ledgerEntityCode/balance-sheet` | FINANCIAL_STATEMENTS | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/:ledgerEntityCode/income-statement` | FINANCIAL_STATEMENTS | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/:ledgerEntityCode/journals` | FINANCIAL_STATEMENTS | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/disbursed-facilities` | FUND_ACCOUNTING_RECEIVABLES | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/entities` | FINANCIAL_STATEMENTS | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/facility-terms/:id` | FUND_ACCOUNTING_RECEIVABLES | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/market-value-entries/:entryId/approve` | NAV_MARKET_VALUE_ENTRY | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/market-value-entries/:ledgerEntityCode` | NAV_MARKET_VALUE_ENTRY | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/market-value-entries/:ledgerEntityCode` | NAV_MARKET_VALUE_ENTRY | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/products` | FINANCIAL_STATEMENTS | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/products` | PRODUCT_SETUP_INITIATION | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/products/:code/activate` | PARAMETERS | src/ops-api/fund-accounting.controller.ts |
| POST | `/fund-accounting/products/:code/approve-setup` | PRODUCT_SETUP_REVIEW OR PRODUCT_SETUP_APPROVAL | src/ops-api/fund-accounting.controller.ts |
| GET | `/fund-accounting/receivables` | FUND_ACCOUNTING_RECEIVABLES | src/ops-api/fund-accounting.controller.ts |
| GET | `/investors` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/aml-risk-rating` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/bank-account-changes` | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/bank-account-changes` | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/bank-account-changes/:requestId` | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/bank-account-changes/:requestId/checklist` | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/bank-account-changes/:requestId/decide` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/bank-account-changes/:requestId/evidence` | INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/bank-account-changes/:requestId/submit` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/contact-amendments` | INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/contact-amendments` | INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/contact-amendments/:requestId` | INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/contact-amendments/:requestId/decide` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/exit-requests` | INVESTOR_EXIT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/exit-requests` | INVESTOR_EXIT_INITIATION | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/exit-requests/:requestId` | INVESTOR_EXIT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/exit-requests/:requestId/decide` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/mandate` | MANDATE_SETUP | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/mandate` | MANDATE_SETUP | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/mandate-amendments` | INVESTOR_MANDATE_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/mandate-amendments` | INVESTOR_MANDATE_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/mandate-amendments/:requestId` | INVESTOR_MANDATE_AMENDMENT_INITIATION | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/mandate-amendments/:requestId/decide` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/mandate/request-shariah-review` | SHARIAH_RECORDS | src/ops-api/investors.controller.ts |
| GET | `/investors/:investorId/messages` | CLIENT_MESSAGING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/messages` | CLIENT_MESSAGING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/record-periodic-review` | SCREENING_PERFORM | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/relationship-manager` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/risk-assessment` | SCREENING_PERFORM | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/screening` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/submit-for-kyc-approval` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors/:investorId/submit-for-review` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| GET | `/investors/case-review` | INVESTOR_ONBOARDING | src/ops-api/investors.controller.ts |
| POST | `/investors/review/:workflowInstanceId/ic1` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/investors/review/:workflowInstanceId/ic2` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/investors/review/:workflowInstanceId/md-decision` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/investors/review/:workflowInstanceId/risk` | _(none — see controller comment)_ | src/ops-api/investors.controller.ts |
| POST | `/leave/applications` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/leave/applications` | LEAVE_MANAGEMENT | src/ops-api/leave.controller.ts |
| POST | `/leave/applications/:id/hr-acknowledge` | LEAVE_MANAGEMENT | src/ops-api/leave.controller.ts |
| POST | `/leave/applications/:id/supervisor-decide` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/leave/applications/mine` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/leave/applications/subordinates` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/leave/balances` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/leave/types` | _(none — see controller comment)_ | src/ops-api/leave.controller.ts |
| GET | `/ledger/chart-of-accounts` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| POST | `/ledger/chart-of-accounts` | LEDGER_ENTITY_SETUP | src/ops-api/ledger.controller.ts |
| GET | `/ledger/entities` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| POST | `/ledger/entities` | LEDGER_ENTITY_SETUP | src/ops-api/ledger.controller.ts |
| GET | `/ledger/journal-entries` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| POST | `/ledger/journal-entries` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| POST | `/ledger/journal-entries/request-posting` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| GET | `/ledger/products` | JOURNAL_ENTRIES | src/ops-api/ledger.controller.ts |
| GET | `/ledger/txns` | TXN_ENTRY | src/ops-api/ledger.controller.ts |
| POST | `/ledger/txns` | TXN_ENTRY | src/ops-api/ledger.controller.ts |
| GET | `/letters/instances` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| POST | `/letters/instances` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| GET | `/letters/instances/:id` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| GET | `/letters/instances/:id/pdf` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| POST | `/letters/instances/:workflowInstanceId/approve` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| POST | `/letters/instances/:workflowInstanceId/reject` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| GET | `/letters/instances/pending` | LETTER_ISSUANCE | src/ops-api/letter.controller.ts |
| GET | `/letters/templates` | LETTER_TEMPLATE_MANAGEMENT | src/ops-api/letter.controller.ts |
| POST | `/letters/templates` | LETTER_TEMPLATE_MANAGEMENT | src/ops-api/letter.controller.ts |
| POST | `/letters/templates/:workflowInstanceId/approve` | LETTER_TEMPLATE_MANAGEMENT | src/ops-api/letter.controller.ts |
| GET | `/letters/templates/pending` | LETTER_TEMPLATE_MANAGEMENT | src/ops-api/letter.controller.ts |
| GET | `/letterhead/active` | LETTERHEAD_TEMPLATE_MANAGEMENT | src/ops-api/letterhead.controller.ts |
| GET | `/letterhead/versions` | LETTERHEAD_TEMPLATE_MANAGEMENT | src/ops-api/letterhead.controller.ts |
| POST | `/letterhead/versions` | LETTERHEAD_TEMPLATE_MANAGEMENT | src/ops-api/letterhead.controller.ts |
| POST | `/letterhead/versions/:workflowInstanceId/approve` | LETTERHEAD_TEMPLATE_MANAGEMENT | src/ops-api/letterhead.controller.ts |
| GET | `/letterhead/versions/pending` | LETTERHEAD_TEMPLATE_MANAGEMENT | src/ops-api/letterhead.controller.ts |
| POST | `/marketing/resources` | MARKETING_RESOURCE | src/ops-api/marketing.controller.ts |
| GET | `/marketing/resources` | MARKETING_RESOURCE | src/ops-api/marketing.controller.ts |
| POST | `/marketing/sends` | MARKETING_SEND | src/ops-api/marketing.controller.ts |
| GET | `/marketing/sends` | MARKETING_SEND | src/ops-api/marketing.controller.ts |
| POST | `/marketing/subscribe` | _(none — see controller comment)_ | src/ops-api/marketing.controller.ts |
| GET | `/marketing/subscriber-stats` | MARKETING_SEND | src/ops-api/marketing.controller.ts |
| POST | `/marketing/unsubscribe` | _(none — see controller comment)_ | src/ops-api/marketing.controller.ts |
| GET | `/migration/batches` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| POST | `/migration/batches` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| POST | `/migration/batches/:id/promote` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| GET | `/migration/batches/:id/report` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| POST | `/migration/batches/:id/validate` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| GET | `/migration/reconciliation-gates` | DATA_MIGRATION | src/ops-api/migration.controller.ts |
| GET | `/nd-mandate/accounts` | KYC_MANDATE | src/ops-api/nd-mandate.controller.ts |
| GET | `/nd-mandate/provisional-accruals/aging` | KYC_MANDATE | src/ops-api/nd-mandate.controller.ts |
| GET | `/obligations/payout-batches` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| POST | `/obligations/payout-batches` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| GET | `/obligations/payout-batches/:id` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| POST | `/obligations/payout-batches/:id/mark-letter-issued` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| POST | `/obligations/payout-batches/:id/mark-paid` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| POST | `/obligations/payout-batches/:id/retry-letter` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| POST | `/obligations/payout-batches/:id/submit-for-approval` | PAYOUT_COMPILATION | src/ops-api/obligations.controller.ts |
| GET | `/obligations/schedule` | FUND_OBLIGATIONS_SCHEDULE | src/ops-api/obligations.controller.ts |
| GET | `/obligations/variance` | FUND_OBLIGATIONS_SCHEDULE | src/ops-api/obligations.controller.ts |
| GET | `/org-structure/cadres` | ORG_STRUCTURE_MANAGEMENT | src/ops-api/org-structure.controller.ts |
| GET | `/org-structure/department-heads` | DEPARTMENT_HEAD_DESIGNATION | src/ops-api/org-structure.controller.ts |
| POST | `/org-structure/department-heads` | DEPARTMENT_HEAD_DESIGNATION | src/ops-api/org-structure.controller.ts |
| POST | `/org-structure/department-heads/:workflowInstanceId/approve` | DEPARTMENT_HEAD_DESIGNATION | src/ops-api/org-structure.controller.ts |
| GET | `/org-structure/org-units` | ORG_STRUCTURE_MANAGEMENT | src/ops-api/org-structure.controller.ts |
| POST | `/org-structure/org-units` | ORG_STRUCTURE_MANAGEMENT | src/ops-api/org-structure.controller.ts |
| GET | `/org-structure/positions` | ORG_STRUCTURE_MANAGEMENT | src/ops-api/org-structure.controller.ts |
| POST | `/org-structure/positions` | ORG_STRUCTURE_MANAGEMENT | src/ops-api/org-structure.controller.ts |
| POST | `/payment-gateway/webhook` | _(none — see controller comment)_ | src/ops-api/payment-gateway-webhook.controller.ts |
| POST | `/payment-gateway/webhook/flutterwave` | _(none — see controller comment)_ | src/ops-api/payment-gateway-webhook.controller.ts |
| POST | `/payment-gateway/webhook/monnify` | _(none — see controller comment)_ | src/ops-api/payment-gateway-webhook.controller.ts |
| POST | `/payment-gateway/webhook/paymish` | _(none — see controller comment)_ | src/ops-api/payment-gateway-webhook.controller.ts |
| POST | `/payment-gateway/webhook/paystack` | _(none — see controller comment)_ | src/ops-api/payment-gateway-webhook.controller.ts |
| GET | `/payment-gateway/custodian-accounts` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/custodian-accounts` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/custodian-accounts/:workflowInstanceId/approve` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/inflow-decisions/:workflowInstanceId/approve` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| GET | `/payment-gateway/inflows` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/inflows/:id/match` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/inflows/:id/propose-reject` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/inflows/:id/propose-reverse` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/inflows/:id/verify-with-vendor` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| GET | `/payment-gateway/providers` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/providers` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| POST | `/payment-gateway/providers/:workflowInstanceId/approve` | PAYMENT_GATEWAY_POLICY | src/ops-api/payment-gateway.controller.ts |
| GET | `/payment-gateway/suspense-queue` | PAYMENT_GATEWAY_SUSPENSE | src/ops-api/payment-gateway.controller.ts |
| GET | `/performance/:ledgerEntityCode/accounts` | FINANCIAL_STATEMENTS | src/ops-api/performance.controller.ts |
| GET | `/performance/:ledgerEntityCode/distributions` | FINANCIAL_STATEMENTS | src/ops-api/performance.controller.ts |
| GET | `/performance/:ledgerEntityCode/nav-history` | FINANCIAL_STATEMENTS | src/ops-api/performance.controller.ts |
| GET | `/performance/entities` | FINANCIAL_STATEMENTS | src/ops-api/performance.controller.ts |
| GET | `/periods` | ACCOUNTING_PERIOD_CLOSE | src/ops-api/period.controller.ts |
| POST | `/periods` | ACCOUNTING_PERIOD_CLOSE | src/ops-api/period.controller.ts |
| POST | `/periods/:id/request-close` | ACCOUNTING_PERIOD_CLOSE | src/ops-api/period.controller.ts |
| GET | `/periods/bank-reconciliation/lines` | BANK_RECONCILIATION | src/ops-api/period.controller.ts |
| POST | `/periods/bank-reconciliation/lines/:lineId/match` | BANK_RECONCILIATION | src/ops-api/period.controller.ts |
| POST | `/periods/bank-reconciliation/lines/:lineId/unmatch` | BANK_RECONCILIATION | src/ops-api/period.controller.ts |
| GET | `/periods/bank-reconciliation/summary` | BANK_RECONCILIATION | src/ops-api/period.controller.ts |
| POST | `/periods/bank-reconciliation/upload` | BANK_RECONCILIATION | src/ops-api/period.controller.ts |
| GET | `/petty-cash/claims` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/claims` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| GET | `/petty-cash/floats` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/floats` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/floats/:id/adjust-caps` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| GET | `/petty-cash/floats/:id/balance` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/floats/:id/close` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| GET | `/petty-cash/spot-checks` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/spot-checks` | BUDGET_CONTROL_REVIEW | src/ops-api/petty-cash.controller.ts |
| GET | `/petty-cash/vouchers` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/petty-cash/vouchers` | PETTY_CASH_MANAGEMENT | src/ops-api/petty-cash.controller.ts |
| POST | `/pms/activity` | _(none — see controller comment)_ | src/ops-api/pms.controller.ts |
| GET | `/pms/cycles` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/cycles/:id` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles/:id/compute-incentive` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles/:id/gate` | PMS_BEHAVIOURAL_GATE | src/ops-api/pms.controller.ts |
| GET | `/pms/cycles/:id/my-status` | PMS_SELF_SCORE | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles/:id/open-for-scoring` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles/:id/self-score` | PMS_SELF_SCORE | src/ops-api/pms.controller.ts |
| POST | `/pms/cycles/:id/submit-for-approval` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/emolument-structure` | EMOLUMENT_STRUCTURE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/emolument-structure` | EMOLUMENT_STRUCTURE_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/employees` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/employees/:employeeId/scorecard` | PMS_SELF_SCORE | src/ops-api/pms.controller.ts |
| GET | `/pms/kpi-definitions` | KPI_DEFINITION_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/kpi-definitions` | KPI_DEFINITION_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/pms/kpi-definitions/:workflowInstanceId/approve` | KPI_DEFINITION_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/kpi-definitions/pending` | KPI_DEFINITION_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/kpi-weight-matrix` | KPI_WEIGHT_MATRIX | src/ops-api/pms.controller.ts |
| POST | `/pms/kpi-weight-matrix` | KPI_WEIGHT_MATRIX | src/ops-api/pms.controller.ts |
| POST | `/pms/kpi-weight-matrix/:workflowInstanceId/approve` | KPI_WEIGHT_MATRIX | src/ops-api/pms.controller.ts |
| GET | `/pms/kpi-weight-matrix/pending` | KPI_WEIGHT_MATRIX | src/ops-api/pms.controller.ts |
| GET | `/pms/kras` | KPI_DEFINITION_MANAGEMENT | src/ops-api/pms.controller.ts |
| GET | `/pms/payroll` | PMS_PAYROLL | src/ops-api/pms.controller.ts |
| POST | `/pms/payroll` | PAYROLL_PREPARATION | src/ops-api/pms.controller.ts |
| POST | `/pms/score-submissions/:id/adjust` | PMS_SUPERVISOR_VALIDATION | src/ops-api/pms.controller.ts |
| POST | `/pms/scorecard-overrides` | PMS_CYCLE_MANAGEMENT | src/ops-api/pms.controller.ts |
| POST | `/privacy-notice/acknowledge` | _(none — see controller comment)_ | src/ops-api/privacy-notice.controller.ts |
| GET | `/privacy-notice/active` | _(none — see controller comment)_ | src/ops-api/privacy-notice.controller.ts |
| GET | `/privacy-notice/log` | DATA_PROTECTION_COMPLIANCE | src/ops-api/privacy-notice.controller.ts |
| GET | `/procurement/asset-register` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/asset-register/:id/dispose` | ASSET_DISPOSAL | src/ops-api/procurement.controller.ts |
| POST | `/procurement/invoices/:id/match` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/payment-batches` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| GET | `/procurement/purchase-orders` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/purchase-orders` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/purchase-orders/:id/goods-receipt` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/purchase-orders/:id/invoices` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/purchase-orders/:id/issue` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| GET | `/procurement/vendors` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| POST | `/procurement/vendors` | PROCUREMENT_OPERATIONS | src/ops-api/procurement.controller.ts |
| GET | `/profile/employees/:employeeId/personal-record` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| GET | `/profile/me` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/free-fields` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/notifications/:id/read` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/request-change` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/sop-library` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/tasks` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/tasks/:id/complete` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/profile/me/tasks/:id/start` | _(none — see controller comment)_ | src/ops-api/profile.controller.ts |
| POST | `/prospectus-sheets` | PROSPECTUS_SHEET_INITIATION | src/ops-api/prospectus-sheet.controller.ts |
| GET | `/prospectus-sheets/:sheetId` | PROSPECTUS_SHEET_INITIATION | src/ops-api/prospectus-sheet.controller.ts |
| POST | `/prospectus-sheets/:sheetId/edit` | PROSPECTUS_SHEET_INITIATION | src/ops-api/prospectus-sheet.controller.ts |
| POST | `/prospectus-sheets/amendments/:workflowInstanceId/approve` | PROSPECTUS_AMENDMENT_SSB_SIGNOFF OR PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF OR PROSPECTUS_AMENDMENT_APPROVAL | src/ops-api/prospectus-sheet.controller.ts |
| POST | `/prospectus-sheets/products/:productCode/amendments` | PROSPECTUS_AMENDMENT_PROPOSAL | src/ops-api/prospectus-sheet.controller.ts |
| GET | `/prospectus-sheets/products/:productCode/versions` | PROSPECTUS_SHEET_INITIATION | src/ops-api/prospectus-sheet.controller.ts |
| POST | `/prospectus-sheets/workflow/:workflowInstanceId/approve` | PROSPECTUS_SHEET_REVIEW OR PROSPECTUS_SHEET_APPROVAL | src/ops-api/prospectus-sheet.controller.ts |
| POST | `/public/intake/:id/promote-counterparty` | COUNTERPARTY_ONBOARDING | src/ops-api/public-intake.controller.ts |
| POST | `/public/intake/:id/promote-investor` | INVESTOR_ONBOARDING | src/ops-api/public-intake.controller.ts |
| POST | `/public/intake/:id/reject` | _(none — see controller comment)_ | src/ops-api/public-intake.controller.ts |
| POST | `/public/intake/counterparty` | _(none — see controller comment)_ | src/ops-api/public-intake.controller.ts |
| POST | `/public/intake/investor-express` | _(none — see controller comment)_ | src/ops-api/public-intake.controller.ts |
| GET | `/public/intake/pending` | _(none — see controller comment)_ | src/ops-api/public-intake.controller.ts |
| GET | `/rbac/approval-rules` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/rbac/capability-matrix` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/rbac/proposals` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| POST | `/rbac/propose-assignment` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/rbac/roles` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/rbac/user-roles` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/rbac/users` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| POST | `/rbac/users` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| POST | `/rbac/users/:id/deactivate` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| POST | `/rbac/users/:id/reactivate` | RBAC_CONFIG | src/ops-api/rbac.controller.ts |
| GET | `/regulatory-reporting/filing-calendar` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/filing-runs` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/filing-runs` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/filing-runs/:id` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/filing-runs/:id/certify` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/filing-runs/:id/entries/:mapId` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/filing-runs/:id/export.pdf` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/filing-runs/:id/export.xlsx` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/filing-runs/:id/sec-ack` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/filing-runs/:id/submit` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/templates` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/templates/:id/calibrate-cell` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| POST | `/regulatory-reporting/templates/:id/calibrate-field` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/regulatory-reporting/templates/:id/file` | REGULATORY_REPORTING | src/ops-api/regulatory-reporting.controller.ts |
| GET | `/replay/batches` | REPLAY_HARNESS | src/ops-api/replay.controller.ts |
| POST | `/replay/batches` | REPLAY_HARNESS | src/ops-api/replay.controller.ts |
| GET | `/replay/reconciliation-counts/:sourceCode` | REPLAY_HARNESS | src/ops-api/replay.controller.ts |
| GET | `/scheduler/failures` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| GET | `/scheduler/job-catalog` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| GET | `/scheduler/jobs` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/pause-direct` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/register` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/request-pause` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/request-retirement` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/rerun` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/resume` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| POST | `/scheduler/jobs/:jobCode/retire` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| GET | `/scheduler/runs` | _(none — see controller comment)_ | src/ops-api/scheduler.controller.ts |
| GET | `/screening-gateway/commercial-providers` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/commercial-providers` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/commercial-providers/:workflowInstanceId/approve` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| GET | `/screening-gateway/config` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/config` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| GET | `/screening-gateway/freshness` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/hits/:hitId/propose-adjudication` | SCREENING_PERFORM | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/hits/:workflowInstanceId/approve-adjudication` | SCREENING_PERFORM | src/ops-api/screening-gateway.controller.ts |
| GET | `/screening-gateway/hits/open` | SCREENING_PERFORM | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/manual-attestation` | SCREENING_PERFORM | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/screen` | SCREENING_PERFORM | src/ops-api/screening-gateway.controller.ts |
| GET | `/screening-gateway/sources` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/sources` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| POST | `/screening-gateway/sources/:workflowInstanceId/approve` | SCREENING_GATEWAY_POLICY | src/ops-api/screening-gateway.controller.ts |
| GET | `/settings-registry` | _(none — see controller comment)_ | src/ops-api/settings-registry.controller.ts |
| GET | `/settings-registry/export` | _(none — see controller comment)_ | src/ops-api/settings-registry.controller.ts |
| GET | `/shariah-governance/compliance-checks` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| GET | `/shariah-governance/members` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| GET | `/shariah-governance/products-pending-shariah` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| POST | `/shariah-governance/products/:code/approve-shariah` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| GET | `/shariah-governance/purification-records` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| GET | `/shariah-governance/resolutions` | SHARIAH_RECORDS | src/ops-api/shariah-governance.controller.ts |
| GET | `/stakeholder-reporting/reports` | STAKEHOLDER_REPORT_MANAGEMENT | src/ops-api/stakeholder-reporting.controller.ts |
| POST | `/stakeholder-reporting/reports` | STAKEHOLDER_REPORT_MANAGEMENT | src/ops-api/stakeholder-reporting.controller.ts |
| POST | `/stakeholder-reporting/reports/:id/ai-draft-narrative` | STAKEHOLDER_REPORT_MANAGEMENT | src/ops-api/stakeholder-reporting.controller.ts |
| POST | `/stakeholder-reporting/reports/:id/distribute` | STAKEHOLDER_REPORT_MANAGEMENT | src/ops-api/stakeholder-reporting.controller.ts |
| POST | `/stakeholder-reporting/reports/:id/submit-for-approval` | STAKEHOLDER_REPORT_MANAGEMENT | src/ops-api/stakeholder-reporting.controller.ts |
| POST | `/strategy/acknowledge/:publicationId` | _(none — see controller comment)_ | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/acknowledgment-status` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/active` | _(none — see controller comment)_ | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/kra-objective-map` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/kra-objective-map` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/kra-objective-map/:kraCode/:objectiveCode/remove` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/objectives` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/objectives/:code/governance` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/objectives/:workflowInstanceId/approve` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/objectives/pending` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/pillars` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/pillars/:code/governance` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/pillars/:workflowInstanceId/approve` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/pillars/pending` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/publish` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/statement-types` | _(none — see controller comment)_ | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/statement-types` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/statements` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| POST | `/strategy/statements/:workflowInstanceId/approve` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/strategy/statements/pending` | STRATEGY_LAYER | src/ops-api/strategy-layer.controller.ts |
| GET | `/subscription-requests` | CAPITAL_PLACEMENT | src/ops-api/subscription.controller.ts |
| POST | `/subscription-requests` | CAPITAL_PLACEMENT | src/ops-api/subscription.controller.ts |
| GET | `/subscription-requests/:id` | CAPITAL_PLACEMENT | src/ops-api/subscription.controller.ts |
| POST | `/subscription-requests/:id/approve` | CAPITAL_PLACEMENT | src/ops-api/subscription.controller.ts |
| POST | `/subscription-requests/:id/confirm-target` | SUBSCRIPTION_TARGET_CONFIRMATION | src/ops-api/subscription.controller.ts |
| POST | `/subscription-requests/:id/reject` | CAPITAL_PLACEMENT | src/ops-api/subscription.controller.ts |
| GET | `/talent/recommendations` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| POST | `/talent/recommendations` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| GET | `/talent/reward-types` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| POST | `/talent/reward-types` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| GET | `/talent/welfare-schemes` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| POST | `/talent/welfare-schemes` | TALENT_MANAGEMENT | src/ops-api/talent.controller.ts |
| GET | `/tasks` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/:id/complete` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/:id/deliverable-url` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/:id/start` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tasks/assignable-employees` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tasks/kpi/:kpiDefinitionId/employee/:employeeId` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tasks/my-day-vs-scorecard` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/submissions` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/submissions/:id/accept` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| POST | `/tasks/submissions/:id/decline` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tasks/submissions/mine` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tasks/submissions/to-decide` | _(none — see controller comment)_ | src/ops-api/task.controller.ts |
| GET | `/tax/exemptions` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/exemptions` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/exemptions/:investorId/:taxType/revoke` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/fee-invoices` | FEE_INVOICE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/fee-invoices` | FEE_INVOICE_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/gl-mappings` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/gl-mappings` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/rate-versions` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/rate-versions` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/remittance-batches` | TAX_REMITTANCE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/remittance-batches/:id/mark-remitted` | TAX_REMITTANCE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/remittance-batches/:id/retry-letter` | TAX_REMITTANCE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/remittance-batches/:id/submit-for-approval` | TAX_REMITTANCE_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/remittance-due-date-configs` | TAX_REMITTANCE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/remittance-due-date-configs` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/tax/stamp-duty-assessments` | TAX_CONFIGURATION_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/stamp-duty-assessments` | FEE_INVOICE_MANAGEMENT | src/ops-api/tax.controller.ts |
| POST | `/tax/vendor-invoices/:id/recognize-vat` | FEE_INVOICE_MANAGEMENT | src/ops-api/tax.controller.ts |
| GET | `/wm/asset-classes` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/assets/:assetId/holding-detail/:investorId` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/assets/:assetId/shariah-screen` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/clients` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/advisory-fee` | JOURNAL_ENTRIES | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/advisory-records` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/allocation-policy` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/assets` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/clients/:investorId/dashboard` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/growth-plan` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/clients/:investorId/nwcs-pyramid` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/onboard` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/recompute-tier` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/risk-assessments` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/clients/:investorId/risk-profile` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/fx-config` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/fx-config` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/holding-action-requests/:id/action` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/holding-action-requests/pending` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/prospects` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/prospects/:investorId/pyramid` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/wm/risk-assessments/:runId/publish` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| GET | `/wm/stress-scenarios` | WM_ADVISORY | src/ops-api/wm.controller.ts |
| POST | `/workflow/:workflowInstanceId/approve` | _(none — see controller comment)_ | src/ops-api/workflow-inbox.controller.ts |
| POST | `/workflow/:workflowInstanceId/reject` | _(none — see controller comment)_ | src/ops-api/workflow-inbox.controller.ts |
| GET | `/workflow/inbox` | _(none — see controller comment)_ | src/ops-api/workflow-inbox.controller.ts |
| GET | `/zakat/assessments/:runId` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/assessments/:runId/compute` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/assessments/:runId/items` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/assessments/:runId/submit-for-certification` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/certifications/pending` | ZAKAT_CERTIFICATION | src/ops-api/zakat.controller.ts |
| POST | `/zakat/clients/:investorId/activate` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/clients/:investorId/assessments` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/clients/:investorId/assessments` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/clients/:investorId/deactivate` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/clients/:investorId/nisab-status` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/clients/:investorId/portfolio-advisory-feed` | ZAKAT_PORTFOLIO_ADVISORY_FEED | src/ops-api/zakat.controller.ts |
| GET | `/zakat/nisab-config` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/nisab-config` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/zakat/subscription-requests/:requestId/approve` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/subscription-requests/pending` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| GET | `/zakat/subscriptions` | ZAKAT_ADVISORY | src/ops-api/zakat.controller.ts |
| POST | `/portal/auth/acknowledge-privacy-notice` | _(none — see controller comment)_ | src/portal-auth/portal-auth.controller.ts |
| POST | `/portal/auth/login` | _(none — see controller comment)_ | src/portal-auth/portal-auth.controller.ts |
| POST | `/portal/auth/logout` | _(none — see controller comment)_ | src/portal-auth/portal-auth.controller.ts |
| GET | `/portal/auth/me` | _(none — see controller comment)_ | src/portal-auth/portal-auth.controller.ts |
| GET | `/portal/counterparty/bureau-pulls` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/counterparty/complaints` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| GET | `/portal/counterparty/dashboard` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/counterparty/enquiries` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/counterparty/facility-applications` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| GET | `/portal/counterparty/facility-applications/:id/checklist` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/counterparty/facility-applications/:id/documents` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| GET | `/portal/counterparty/facility-applications/:id/documents` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| GET | `/portal/counterparty/letters` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| GET | `/portal/counterparty/letters/:id/pdf` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/counterparty/restructure-requests` | _(none — see controller comment)_ | src/portal-counterparty/portal-counterparty.controller.ts |
| POST | `/portal/wm/advisory-records/:id/respond` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/allocation-policy/:id/acknowledge` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/assets/:assetId/detail` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/assets/:assetId/redemption` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/assets/:assetId/top-up` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/certificates` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/certificates/:id/pdf` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/complaints` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/dashboard` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/deposit-instructions` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/growth-plan/:id/acknowledge` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/letters` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/letters/:id/pdf` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/notifications` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/notifications/:id/read` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/nwcs-pyramid` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/offer-publications` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/offers` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/offers/:productCode` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/offers/:productCode/subscribe` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/principal-profit-breakdown` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/product-accounts/:productAccountId/redemption` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| POST | `/portal/wm/risk-profile/:id/acknowledge` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/statement-accounts` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/wm/statement-accounts/:kind/:id/pdf` | _(none — see controller comment)_ | src/portal-wm/portal-wm.controller.ts |
| GET | `/portal/zakat/assessments` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| GET | `/portal/zakat/assessments/:runId` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| POST | `/portal/zakat/assessments/:runId/agree` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| POST | `/portal/zakat/assessments/:runId/items` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| GET | `/portal/zakat/position` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| POST | `/portal/zakat/rate-basis` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| GET | `/portal/zakat/subscription` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |
| POST | `/portal/zakat/subscription-request` | _(none — see controller comment)_ | src/portal-zakat/portal-zakat.controller.ts |

677 routes across 76 controller files. This is a raw inventory, not a reachability classification — see CHECK22_EVIDENCE.md's five-bin endpoint triage (RES-001 CH-01) for which of these are UI-reachable, dynamic, feature-flagged, deprecated, or a known defect.
