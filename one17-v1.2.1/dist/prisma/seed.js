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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../generated/prisma/client");
const kri_roster_1 = require("../src/kri-engine/kri-roster");
const stress_scenario_roster_1 = require("../src/stress-engine/stress-scenario-roster");
const wm_types_1 = require("../src/wm/wm.types");
const pms_types_1 = require("../src/pms/pms.types");
const prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
const NAIRA = 100n;
const kobo = (naira) => BigInt(naira) * NAIRA;
const ROLES = [
    { code: 'SUPER_ADMIN', name: 'Super Administrator', description: 'Full system access incl. user accounts, config, migrations. Cannot approve financial transactions.', isExclusive: true },
    { code: 'MD_CEO', name: 'MD / CEO', description: 'Strategic oversight; approves distributions above threshold; sees all reports.', isExclusive: false },
    { code: 'PORT_MGR', name: 'Portfolio Manager', description: 'Manages investment portfolio; books investments; initiates distributions; cannot approve own initiations.', isExclusive: false },
    { code: 'PORT_OFF', name: 'Portfolio Officer', description: 'Day-to-day investment operations; runs daily accrual batch; prepares distribution workings. Cannot approve.', isExclusive: false },
    { code: 'FIN_ADMIN', name: 'Finance / Administrator', description: 'Investor transactions, fee processing, cashbook, journal entries. Cannot approve own journals.', isExclusive: false },
    { code: 'COMPLIANCE', name: 'Compliance Officer', description: 'Reviews and approves onboarding, KYC, counterparty limits; escalates Shariah flags.', isExclusive: false },
    { code: 'SHARIAH_REV', name: 'Shariah Reviewer', description: 'Reviews Shariah compliance; SSB resolutions; purification approvals; veto power.', isExclusive: false },
    { code: 'INVESTOR', name: 'Investor / Client', description: 'Read-only access to own capital account, statements, schedule.', isExclusive: false },
    { code: 'AUDITOR', name: 'Auditor (External / Internal)', description: 'Read-only access to all records, journals, audit trail. Cannot modify any data.', isExclusive: false, isReadOnly: true },
    { code: 'SAU_INTERNAL_CONTROL', name: 'SAU — Internal Control Officer', description: 'Reviews expenditure requisitions for budget/SOP/policy conformity (Budget Spec §3).', isExclusive: false },
    { code: 'WM_ADVISOR', name: 'Wealth Management Advisor', description: 'Wealth Management: declares/verifies client assets, sets allocation/risk/growth plans, advisory records, sandbox risk assessments (invariant 23).', isExclusive: false },
    { code: 'HR_ADMIN', name: 'HR Administrator', description: 'PMS/Payroll SDS: manages appraisal/incentive cycles, employee register, behavioural gate checks.', isExclusive: false },
    { code: 'PMS_SUPERVISOR', name: 'Line Supervisor', description: 'PMS/Payroll SDS §3.2: validates direct reports\' self-scores.', isExclusive: false },
    { code: 'DEPT_CHIEF', name: 'Department Chief', description: 'PMS/Payroll SDS §3.2: signs off validated scores before CEO cycle approval.', isExclusive: false },
    { code: 'BD', name: 'Business Development', description: 'Investor Onboarding Template Step 1: initiates KYC/investor information capture; owns the lead register and BD marketing distribution.', isExclusive: false },
    { code: 'RISK_DEPT', name: 'Risk Department', description: 'Investor/Investee Onboarding Template Step 5: EDD (High Risk) or periodic-review recommendation (Low/Medium-Low); sets investee exposure limits.', isExclusive: false },
    { code: 'LEGAL', name: 'Legal / Company Secretariat', description: 'Invariant 27(b)/36(e): VIEW access to counterparty facility applications, agreements, and restructuring-legal steps. No approval authority.', isExclusive: false },
    { code: 'CIO', name: 'Chief Investment Officer', description: 'Invariant 36(f): approves the Portfolio Officer\'s investment memo before a facility application enters the Risk->BD->Finance->Compliance review chain.', isExclusive: false },
    { code: 'SYSTEM_SCHEDULER', name: 'System Scheduler', description: 'Automated platform batch jobs (KRI daily batch, stress-test sweeps) — not a human actor, cannot approve.', isExclusive: false },
    { code: 'SYSTEM_PAYMENT_GATEWAY', name: 'System Payment Gateway', description: 'Auto-creates SubscriptionRequests from matched gateway inflows — not a human actor, cannot approve, initiator-only.', isExclusive: false },
    { code: 'SYSTEM_PORTAL_CLIENT', name: 'System Portal Client', description: 'Auto-creates redemption SubscriptionRequests from investor-initiated portal actions — not a human actor, cannot approve, initiator-only.', isExclusive: false },
    { code: 'ICT', name: 'ICT', description: 'Scheduler console operator — monitors job health, manually re-runs failed jobs, requests pause/resume (KRA: platform stability). Cannot approve pausing a consequential job unilaterally.', isExclusive: false },
    { code: 'CORP_SERVICES', name: 'Corporate Services Officer', description: 'Admin/Procurement: vendor register, purchase orders, goods receipt, invoice entry, 3-way match, payment batch creation, asset register (Budget Spec §4).', isExclusive: false },
    { code: 'CS', name: 'Company Secretary', description: 'Invariant 37(c)(ii): issues Board/Committee directives, tracks acknowledgment/reported-back status, administers the Board Calendar/Papers/Minutes (Section F).', isExclusive: false },
    { code: 'CFO', name: 'Chief Finance Officer', description: 'Invariant 46(b): Financial Control division head. Inherits FIN_ADMIN\'s approval seats on emolument structure, payment batches, period close, budget pack; holds JOURNAL_ENTRIES APPROVE.', isExclusive: false },
    { code: 'MGR_FINCON', name: 'Manager, Financial Control', description: 'Invariant 46(b): operational finance management. Holds JOURNAL_ENTRIES APPROVE (different-user rule still applies) and the three-hand payroll chain\'s Finance review/request step (invariant 46g-ii).', isExclusive: false },
    { code: 'FUND_ACCT', name: 'Fund Accountant', description: 'Invariant 46(b): initiates fund-entity journals, fee processing, fund receivables.', isExclusive: false },
    { code: 'COMP_ACCT', name: 'Company Accountant', description: 'Invariant 46(b): initiates company-entity journals, statutory reporting.', isExclusive: false },
    { code: 'TREASURY_OFF', name: 'Finance Officer (Treasury)', description: 'Invariant 46(b): initiates cashbook and settlement entries.', isExclusive: false },
    { code: 'CBGO', name: 'Chief Business & Growth Officer', description: 'Invariant 46(d): BD division head — revenue/AUM growth strategy; BD-register and pipeline approve/view tiers.', isExclusive: false },
    { code: 'MGR_BD', name: 'Manager, Business Development', description: 'Invariant 46(d): BD team supervision, pipeline management; BD-register approve/view tiers.', isExclusive: false },
    { code: 'REL_OFF', name: 'Relationship Officer', description: 'Invariant 46(d): client servicing, retention, investor communication — CLIENT_MESSAGING INITIATE, complaint/enquiry case handling, REDEMPTION_PROCESSING INITIATE (client-servicing initiation; PORT_MGR approval + Stage-1 DB block unchanged).', isExclusive: false },
    { code: 'MKT_OFF', name: 'Marketing Officer', description: 'Invariant 46(d): marketing campaigns, events, digital channels — MARKETING (resource/send) INITIATE (Compliance approval unchanged).', isExclusive: false },
    { code: 'CRAO', name: 'Chief Risk & Audit Officer', description: 'Invariant 46(e): Enterprise Risk Management + Audit oversight — RISK_REGISTER APPROVE + risk-module head views. Appetite-matrix approval STAYS with MD_CEO per AMD-12.', isExclusive: false },
    { code: 'HEAD_SAU', name: 'Head, Strategy & Accountability Unit', description: 'Invariant 46(e): enterprise strategy execution, governance oversight, institutional accountability — takes STRATEGY_LAYER INITIATE (from SAU_INTERNAL_CONTROL) + SAU oversight views.', isExclusive: false },
    { code: 'INV_COMMITTEE', name: 'Investment Committee Member', description: 'Invariant 46(c): mandatory IC step in the DoA-tiered investment memo chain (PO -> PM validation -> CIO -> [IC -> MD/CEO] at/above the governed threshold) — approval records an icResolutionRef.', isExclusive: false },
    { code: 'EXEC_ASSISTANT', name: 'Executive Assistant', description: 'Invariant 46(a): executive support, scheduling, correspondence for the Office of the MD/CEO. VIEW-tier only -- no initiate/approve authority anywhere.', isExclusive: false },
];
const FUNCTIONS = [
    { code: 'INVESTOR_ONBOARDING', description: 'Investor onboarding' },
    { code: 'KYC_MANDATE', description: 'KYC / Mandate' },
    { code: 'CAPITAL_PLACEMENT', description: 'Capital placement' },
    { code: 'SUBSCRIPTION_TARGET_CONFIRMATION', description: 'Invariant 62(h): FA confirms deposit + records targetReturnPct/maturityDate on a POOL or MANDATE subscription account, maker≠checker against the request initiator.' },
    { code: 'INVESTMENT_BOOKING', description: 'Investment booking' },
    { code: 'DAILY_ACCRUAL_BATCH', description: 'Daily accrual (batch)' },
    { code: 'NAV_MARKET_VALUE_ENTRY', description: 'Invariant 62(c): Fund Accountant enters/corrects a per-date portfolio market value feeding computeDailyNav — price inputs move NAV, maker≠checker.' },
    { code: 'DISTRIBUTION_INITIATION', description: 'Distribution (initiate)' },
    { code: 'DISTRIBUTION_APPROVAL', description: 'Distribution (approve) — standard financial approval, tiered by approvalLimitKobo per SRS §6.2' },
    { code: 'PENALTY_TO_CHARITY_INITIATION', description: 'Penalty-to-charity distribution (initiate) — SRS §6.2 scenario row' },
    { code: 'PENALTY_TO_CHARITY_APPROVAL', description: 'Penalty-to-charity distribution (approve, Level 1) — SRS §6.2 scenario row' },
    { code: 'SHARIAH_SIGNOFF', description: 'Shariah Reviewer sign-off — Level 2 approver for >₦10M, Loss Scenario, and Penalty-to-Charity per SRS §6.2' },
    { code: 'FEE_PROCESSING', description: 'Fee processing' },
    { code: 'JOURNAL_ENTRIES', description: 'Journal entries' },
    { code: 'FINANCIAL_STATEMENTS', description: 'Financial statements' },
    { code: 'INVESTOR_STATEMENTS', description: 'Investor statements' },
    { code: 'SHARIAH_RECORDS', description: 'Shariah records' },
    { code: 'AUDIT_TRAIL_VIEW', description: 'Audit trail (view — the table itself is insert-only at the DB engine, see AuditService)' },
    { code: 'CONTROLS_DASHBOARD', description: 'Controls dashboard (invariant 74a: "Enterprise Dashboard" staff-facing)' },
    { code: 'DEPARTMENT_HEAD_DESIGNATION', description: 'Invariant 74(b) (CHECK27, v1.2): governed "who leads this org unit" designation -- HR_ADMIN proposes, MD_CEO approves; ACTIVE holder gains dynamic CONTROLS_DASHBOARD VIEW (see DelegationService.hasCapability).' },
    { code: 'USER_MANAGEMENT', description: 'User management' },
    { code: 'PARAMETERS', description: 'Parameters' },
    { code: 'PRODUCT_SETUP_INITIATION', description: 'Invariant 60(b): senior Portfolio officer proposes a new product (any of the three factory classes) -- creates the DRAFT row and opens the PRODUCT_SETUP workflow' },
    { code: 'PRODUCT_SETUP_REVIEW', description: 'Invariant 60(b): CIO review step -- second pair of eyes before MD_CEO final approval, maker!=checker vs the original initiator' },
    { code: 'PRODUCT_SETUP_APPROVAL', description: 'Invariant 60(b): MD_CEO final approval -- reaching APPROVED here auto-provisions the ledger entity + CoA template (unchanged from the prior single-step shape)' },
    { code: 'PROSPECTUS_SHEET_INITIATION', description: 'Invariant 70(a)/(b): Portfolio seat proposes/edits a prospectus parameter sheet version while DRAFT -- freely re-editable until locked' },
    { code: 'PROSPECTUS_SHEET_REVIEW', description: 'Invariant 70(b): CIO review step before MD_CEO final approval, maker!=checker vs the original initiator' },
    { code: 'PROSPECTUS_SHEET_APPROVAL', description: 'Invariant 70(b): MD_CEO final approval -- reaching APPROVED LOCKS the sheet version immutably and provisions the accounting spine + access map' },
    { code: 'PROSPECTUS_AMENDMENT_PROPOSAL', description: 'Invariant 70(g): CIO proposes an amendment to a live product\'s approved prospectus sheet' },
    { code: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', description: 'Invariant 70(g): Shariah Reviewer sign-off (resolution ref) on a proposed prospectus amendment' },
    { code: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', description: 'Invariant 70(g): Compliance sign-off on a proposed prospectus amendment' },
    { code: 'PROSPECTUS_AMENDMENT_APPROVAL', description: 'Invariant 70(g): MD_CEO final approval -- new sheet version becomes effective FORWARD from this approval date only, never retroactive' },
    { code: 'EXEC_OVERSIGHT', description: 'Invariant 61(b)/(c): Executive Oversight Mode -- read-only "view portal as this client" sessions, and the governed policy controlling who may hold this capability' },
    { code: 'DELEGATION_GRANT_INITIATION', description: 'Request a Delegation of Authority grant (the grantor delegating their own authority)' },
    { code: 'DELEGATION_GRANT_APPROVAL', description: 'Second-authority approval of a Delegation of Authority grant' },
    { code: 'SCREENING_COUNTERSIGN', description: 'Countersignature for same-person onboarding/screening (Manual Screening Procedure §2)' },
    { code: 'SCREENING_PERFORM', description: 'Perform AML/sanctions/PEP screening (Manual Screening Procedure §1) — distinct from SCREENING_COUNTERSIGN' },
    { code: 'MANDATE_SETUP', description: 'Approve investor mandate setup (SRS §5.3: "approved_by ... PORT_MGR or above")' },
    { code: 'ONBOARDING_IC_REVIEW', description: 'Internal Control review, points 1 and 2 (Investor/Investee Onboarding Template Steps 3/7)' },
    { code: 'ONBOARDING_RISK_REVIEW', description: 'Risk Department EDD (High Risk) or periodic-review recommendation (Investor/Investee Onboarding Template Step 5)' },
    { code: 'ONBOARDING_MD_APPROVAL', description: 'MD approval/declination for a High-Risk onboarding file (Investor/Investee Onboarding Template Step 6)' },
    { code: 'COUNTERPARTY_ONBOARDING', description: 'Investee Onboarding Template Step 1: initiate counterparty KYC/financing-request capture, and the DB-enforced deployment gate it feeds' },
    { code: 'BD_REGISTER', description: 'Invariant 27(c): read-only BD register (lead skeleton + LEAD->EXPRESS->FULL_KYC->FUNDED funnel states)' },
    { code: 'STRATEGY_LAYER', description: 'Invariant 28(c): propose/approve strategy_statement rows, pillar/objective governance text, and publish-to-staff events' },
    { code: 'KPI_DEFINITION_MANAGEMENT', description: 'Invariant 51(c2): propose/approve kpi_definition rows (KRA x tier, class-tagged) -- was seed-only' },
    { code: 'KPI_WEIGHT_MATRIX', description: 'Invariant 51(c2) KPI class-weighting addendum: propose/approve kpi_weight_matrix versions (org unit x tier x class, Σ=100% per tier) -- MD_CEO approval only, no exceptions' },
    { code: 'MARKETING_RESOURCE', description: 'Invariant 28(b): propose/approve a marketing_resource (branded material, newsletter, publication) for external use' },
    { code: 'MARKETING_SEND', description: 'Invariant 28(b): initiate/approve a mass-mail marketing_send — approval IS the dispatch trigger' },
    { code: 'COUNTERPARTY_RESTRUCTURE_REQUEST', description: 'Invariant 28(e): decide a portal-submitted extension/restructuring request, and toggle the feature per counterparty' },
    { code: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', description: 'Invariant 25(4): approve a restructure that exceeds the DB-enforced 1-restructure/1-month limit — an exception, never a unilateral override' },
    { code: 'PAYMENT_REMINDER_DISPATCH', description: 'Invariant 36(a): approve/reject a generated payment-reminder message before it dispatches to the client' },
    { code: 'PAYMENT_REMINDER_LADDER_SETTINGS', description: 'Invariant 36(b): edit the payment-reminder ladder\'s rung offsets, channels, and templates' },
    { code: 'BUREAU_GATEWAY_POLICY', description: 'Invariant 36(c): configure BureauGateway provider slots and the pull frequency/interval policy (Risk-owned)' },
    { code: 'BUREAU_GATEWAY_PULL', description: 'Invariant 36(c): officer-triggered credit-bureau assessment pull (button only, no auto-generation)' },
    { code: 'PAYMENT_GATEWAY_POLICY', description: 'Invariant 55(a): configure payment gateway provider slots and per-product custodian accounts (Finance-owned)' },
    { code: 'PAYMENT_GATEWAY_SUSPENSE', description: 'Invariant 55(a): triage the suspense queue -- manually match, reject, or reverse an unattributed gateway inflow' },
    { code: 'MFA_ENFORCEMENT_CONFIG', description: 'Invariant 68(c): govern MFA enforcement tiers (financial-capability list, all-staff switch) and reset a user\'s MFA enrollment' },
    { code: 'ATTENDANCE_GATEWAY_POLICY', description: 'Invariant 40/63(b): configure AttendanceGateway provider slots (TTLock/FileImport adapters) and clock-in derivation policy' },
    { code: 'CALENDAR_GATEWAY_POLICY', description: 'Invariant 73(b): configure CalendarGateway provider slots (Microsoft Graph/Google OAuth2 app registrations) -- ICT-owned, MD_CEO-approved' },
    { code: 'SCREENING_GATEWAY_POLICY', description: 'Invariant 72(a)/(c): configure Screening Gateway list sources, commercial provider slots, and the active provider mode (LOCAL_LISTS/COMMERCIAL/MANUAL) -- Risk/Compliance-owned' },
    { code: 'ATTENDANCE_EXCEPTION_ADJUDICATION', description: 'Invariant 40(b): HR-side oversight of the attendance exception-request register (adjudication itself is a reports-to check, not a capability grant -- see AttendanceService.decideExceptionRequest)' },
    { code: 'LEAVE_MANAGEMENT', description: 'Invariant 64(e): leave-type/entitlement policy config, balances register, HR acknowledgment of approved leave, People-hub oversight' },
    { code: 'FUND_ACCOUNTING_RECEIVABLES', description: 'Invariant 36(d): record a disbursed facility\'s targeted return + view the fund-account receivables dashboard (single source, no dual entry)' },
    { code: 'FACILITY_APPLICATION_RISK_REVIEW', description: 'Invariant 36(e): Risk\'s review step in the counterparty facility application multi-officer chain' },
    { code: 'FACILITY_APPLICATION_BD_REVIEW', description: 'Invariant 36(e): Business Development\'s review step in the counterparty facility application multi-officer chain' },
    { code: 'FACILITY_APPLICATION_FINANCE_REVIEW', description: 'Invariant 36(e): Finance\'s review step in the counterparty facility application multi-officer chain' },
    { code: 'FACILITY_APPLICATION_COMPLIANCE_APPROVAL', description: 'Invariant 36(e): Compliance\'s final approval step in the counterparty facility application multi-officer chain' },
    { code: 'FACILITY_APPLICATION_LEGAL_VIEW', description: 'Invariant 27(b)/36(e): Legal\'s VIEW-only access to counterparty facility applications (no approval authority)' },
    { code: 'INVESTMENT_MEMO_CIO_APPROVAL', description: 'Invariant 36(f): CIO approval of a Portfolio Officer\'s investment memo, gating a facility application\'s entry into the multi-officer review chain' },
    { code: 'INVESTMENT_MEMO_PM_VALIDATION', description: 'Invariant 46(c): Portfolio Manager validation step, immediately after the PO drafts the memo and before it reaches the CIO' },
    { code: 'INVESTMENT_COMMITTEE_APPROVAL', description: 'Invariant 46(c): Investment Committee approval step, mandatory only at/above the governed DoA threshold -- records an icResolutionRef, same pattern as strategy-layer\'s boardResolutionRef' },
    { code: 'INVESTMENT_MEMO_MD_APPROVAL', description: 'Invariant 46(c): MD/CEO final approval step, mandatory only at/above the governed DoA threshold' },
    { code: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', description: 'Invariant 46(c)/46(g)(i): propose/approve the governed kobo threshold that decides whether the investment memo chain needs Investment Committee + MD/CEO' },
    { code: 'BOARD_DIRECTIVE_MANAGEMENT', description: 'Invariant 37(c)(ii): CS issues Board/Committee directives, tracks the ISSUED->ACKNOWLEDGED->IN_PROGRESS->COMPLETED->REPORTED_BACK lifecycle; feeds SAU tracking (KRA-3) + CEO dashboard exceptions' },
    { code: 'LETTERHEAD_TEMPLATE_MANAGEMENT', description: 'Invariant 52(a): propose/approve corporate letterhead template versions -- CS proposes, MD_CEO approves activation' },
    { code: 'CERTIFICATE_TEMPLATE_MANAGEMENT', description: 'Invariant 52(b): propose/approve investment certificate template versions per product class -- Compliance proposes, MD_CEO approves activation' },
    { code: 'LETTER_TEMPLATE_MANAGEMENT', description: 'Invariant 52(c): propose/approve letter template versions per letter type -- Compliance proposes, MD_CEO approves activation' },
    { code: 'LETTER_ISSUANCE', description: 'Invariant 52(c): generate a merge-filled letter instance (CS/Compliance/Portfolio) -> a DIFFERENT user (Compliance/MD_CEO) approves before client-facing dispatch' },
    { code: 'BOARD_CALENDAR_MANAGEMENT', description: 'Invariant 37(c)(iii): CS creates/administers Board Calendar events (meetings, committee cycles); governed reminder lead time' },
    { code: 'BOARD_MINUTES_MANAGEMENT', description: 'Invariant 37(c)(v): CS uploads/transmits Board Minutes; restricted ACL (Board/CS/MD only, widened per-transmission)' },
    { code: 'MD_DOCUMENT_TRANSMISSION', description: 'Invariant 55(b): MD transmits documents to named officers with acknowledgment tracking (document register + notification + task)' },
    { code: 'COMPLAINT_MANAGEMENT', description: 'Invariant 28(f): log a complaint on a client\'s behalf, assign/escalate/resolve/close a complaint ticket' },
    { code: 'LEDGER_ENTITY_SETUP', description: 'Create ledger entities and load chart-of-accounts templates' },
    { code: 'TXN_ENTRY', description: 'Create a transaction-spine row (maker side only — checker/posting is Phase 2)' },
    { code: 'DOCUMENT_REGISTER', description: 'Attach a document to any entity via the polymorphic document register' },
    { code: 'ACCOUNTING_FRAMEWORK_MAP', description: 'Propose/approve a versioned accounting_framework_map (AMD-11.4)' },
    { code: 'REGULATOR_TEMPLATE_REGISTRY', description: 'Register/configure regulator_template + regulator_template_line rows (Reporting Spec §6)' },
    { code: 'RBAC_CONFIG', description: 'AMD-09 §4b: propose/approve a user-role assignment as a governed RBAC change' },
    { code: 'RISK_APPETITE_MATRIX', description: 'AMD-12: propose/approve a risk_appetite_matrix_version' },
    { code: 'RISK_REGISTER', description: 'AMD-12: seed/approve risk_register_entry rows' },
    { code: 'STRESS_TESTING', description: 'Phase 4 §2: propose/run stress scenarios; approve publication of a BASELINE stress_test_run' },
    { code: 'REGULATORY_REPORTING', description: 'CHECK5 item 2 / invariant 22: PREPARE (INITIATE) a filing, CERTIFY (APPROVE), EXPORT (VIEW)' },
    { code: 'ACCOUNTING_PERIOD_CLOSE', description: 'Phase 2: propose/approve closing an accounting_period' },
    { code: 'DATA_MIGRATION', description: 'Phase 3: stage/validate/promote a TPL_01-10 migration batch' },
    { code: 'REPLAY_HARNESS', description: 'Phase 3: ingest workbook CSV history into replay staging' },
    { code: 'BUDGET_MANAGEMENT', description: 'Budget: propose/load a budget_version and its budget_line detail' },
    { code: 'BUDGET_CONTROL_REVIEW', description: 'Budget: SAU Internal Control review of a requisition against budget/SOP conformity' },
    { code: 'BUDGET_REVIEW_PACK', description: 'Budget Spec §5b: generate/approve-for-circulation a Budget Review Pack report_run' },
    { code: 'WM_ADVISORY', description: 'CHECK5 item 3 / invariant 23: declare/verify client assets, allocation/risk/growth plans, advisory records, sandbox risk assessments, WM advisory fee' },
    { code: 'ZAKAT_ADVISORY', description: 'Invariant 26: Zakat subscription activate/deactivate, nisab config governance, sandbox assessment + schedule-item declare/verify, submit for Shariah certification' },
    { code: 'ZAKAT_CERTIFICATION', description: 'Invariant 26(c): SSB certifies a Zakat assessment run (the approval record IS the certificate)' },
    { code: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', description: 'Invariant 70(h)(iv): Portfolio seats\' read-only view of a client\'s declared+verified zakat asset SIZE and MIX (aggregate only, never raw item detail) — the advisory-targeting signal' },
    { code: 'PMS_SELF_SCORE', description: 'SDS §3.2: staff self-score submission — the first link of the scoring chain, granted broadly to every staff-facing role' },
    { code: 'PMS_CYCLE_MANAGEMENT', description: 'SDS §3.1: start/open/submit-for-approval an appraisal_cycle, propose scorecard overrides, compute incentive results' },
    { code: 'PMS_SUPERVISOR_VALIDATION', description: 'SDS §3.2: supervisor (reports_to) validates a direct report\'s self-score' },
    { code: 'PMS_SAU_QA', description: 'SDS §3.2: SAU quality-assures framework integrity (their own KRA)' },
    { code: 'PMS_CHIEF_SIGNOFF', description: 'SDS §3.2: dept Chief signs off a validated score submission' },
    { code: 'PMS_CYCLE_APPROVAL', description: 'SDS §3.2: CEO approves the cycle (scoring chain\'s final link) and role-scorecard overrides' },
    { code: 'PMS_BEHAVIOURAL_GATE', description: 'SDS §3.4: record a behavioural_gate_check per employee per cycle' },
    { code: 'PMS_PAYROLL', description: 'SDS §4 P-A: FINCON validates a tax_rule_config version (APPROVE) — running/posting a payroll run itself moved to the invariant 46(f) three-hand chain (PAYROLL_PREPARATION/PAYROLL_FINANCE_REVIEW/PAYROLL_CEO_APPROVAL)' },
    { code: 'PAYROLL_PREPARATION', description: 'Invariant 46(f): HR_ADMIN prepares (runs) a monthly payroll run — the maker step of the three-hand chain' },
    { code: 'PAYROLL_FINANCE_REVIEW', description: 'Invariant 46(f): Finance reviews a prepared payroll run before it can reach MD/CEO' },
    { code: 'PAYROLL_CEO_APPROVAL', description: 'Invariant 46(f): MD/CEO gives the final approval — the ONLY approval that releases posting/payment' },
    { code: 'EMPLOYEE_PERSONAL_RECORDS', description: 'Invariant 29(a): VIEW personal records (PII, HR + payroll only) and APPROVE (acknowledge) a gated marital-status/address/next-of-kin change request' },
    { code: 'SCHEDULER_OPERATIONS', description: 'Invariant 32: ICT operates the scheduler console — monitor, manual re-run, request pause/resume' },
    { code: 'SCHEDULER_OVERSIGHT', description: 'Invariant 32: SAU/Internal Control execution-discipline view + exception escalation; CEO dashboard visibility' },
    { code: 'SCHEDULER_PAUSE_APPROVAL', description: 'Invariant 32: DoA-gated approval to pause/disable a financially or regulatorily consequential scheduled job' },
    { code: 'PROCUREMENT_OPERATIONS', description: 'Budget Spec §4: vendor register, PO issuance, goods receipt, invoice entry, 3-way match, asset register — Corporate Services' },
    { code: 'PROCUREMENT_PAYMENT_APPROVAL', description: 'Budget Spec §4: maker!=checker approval of a payment batch before it posts and pays' },
    { code: 'DASHBOARD_COMPOSER_PUBLISH', description: 'Invariant 73(a): publish a Dashboard Composer view to DEPARTMENT scope (own org unit only) -- HoD/chief seats' },
    { code: 'PETTY_CASH_MANAGEMENT', description: 'Invariant 50(a): petty cash float register, voucher capture, replenishment claim initiation — Corporate Services custodian/Admin' },
    { code: 'PETTY_CASH_DISBURSEMENT', description: 'Invariant 50(a): Finance disburses a DoA-approved petty cash replenishment claim — the final step of the 3-actor approval chain' },
    { code: 'AI_CHAT', description: 'Invariant 33: AI chat assistant — assisted intelligence only, never replaces business rules/approvals' },
    { code: 'AI_SUMMARIZE', description: 'Invariant 33: AI document summarisation' },
    { code: 'AI_REPORT_DRAFT', description: 'Invariant 33/24: AI narrative-only report drafting — numbers locked from report_runs, AI never computes a figure' },
    { code: 'AI_KPI_EXPLAIN', description: 'Invariant 33: AI KPI explanation' },
    { code: 'AI_RISK_INTERPRET', description: 'Invariant 33: AI risk-alert interpretation' },
    { code: 'AI_SHARIAH_ASSIST', description: 'Invariant 33: AI Shariah review ASSISTANCE — drafts analysis for the SSB reviewer, NEVER issues a Shariah opinion (hard label); SSB-facing roles only' },
    { code: 'AI_PERF_COMMENTARY', description: 'Invariant 33: AI portfolio performance commentary' },
    { code: 'AI_WORKFLOW_SUGGEST', description: 'Invariant 33: AI workflow recommendation support — suggests, never approves/advances' },
    { code: 'AI_AUDITLOG_QUERY', description: 'Invariant 33: AI audit-log-aware responses' },
    { code: 'AI_ANSWER_RBAC', description: 'Invariant 33: the base capability enforcing RBAC-scoped answering — granted alongside any of the other nine AI capabilities, never standalone' },
    { code: 'AI_CAPABILITY_FLAG_MANAGEMENT', description: 'Invariant 33(f) gate 1: initiate/approve a global per-capability AI flag flip (DoA-governed, maker!=checker)' },
    { code: 'AI_KILL_SWITCH', description: 'Invariant 33(f): unilateral, ICT-executable emergency stop overriding every AI capability flag instantly' },
    { code: 'STAKEHOLDER_REPORT_MANAGEMENT', description: 'Invariant 24: generate/approve a stakeholder_report_run for circulation (maker!=checker)' },
    { code: 'STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF', description: 'Invariant 24: MD/delegated sign-off required before CLIENT or REGULATOR audience distribution' },
    { code: 'EMOLUMENT_STRUCTURE_MANAGEMENT', description: 'Invariant 37(e): propose/approve a versioned emolument_structure component (cadre x notch x component) — maker!=checker, same shape as RISK_APPETITE_MATRIX_APPROVAL' },
    { code: 'TALENT_MANAGEMENT', description: 'Invariant 37(e): Talent Management + Reward & Welfare spec-lite — manage welfare_scheme/reward_type catalogs; recommend a welfare/reward action for an employee (maker!=checker on the recommendation itself)' },
    { code: 'CLIENT_MESSAGING', description: 'Invariant 39(d)/35(a): read/send a client<->RM portal message thread (client_communication, channel=PORTAL_MESSAGE)' },
    { code: 'REDEMPTION_PROCESSING', description: 'Invariant 42(a): SubscriptionService.initiateRedemption -- mirrors CAPITAL_PLACEMENT (PORT_OFF initiates, PORT_MGR approves), separate capability so redemption and placement are independently auditable/SoD-able' },
    { code: 'ND_MANDATE_INITIATION', description: 'Invariant 42(c): NdMandateEngineService.createMandate -- creates a DRAFT NdMandateAccount for a specific product subscription' },
    { code: 'ND_MANDATE_ACTIVATION', description: 'Invariant 42(c): NdMandateEngineService.activateMandate -- separate approver capability, no same-user create+activate' },
    { code: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', description: 'Invariant 51(a-i): staff captures a client-requested bank-account change with document evidence (signed instruction) -- never a portal self-service action, the classic account-takeover vector' },
    { code: 'BANK_ACCOUNT_CHANGE_APPROVAL', description: 'Invariant 51(a-i): checker sign-off on the change request\'s paperwork/evidence -- maker!=checker, generic engine' },
    { code: 'BANK_ACCOUNT_CHANGE_REVERIFICATION', description: 'Invariant 51(a-i): independent confirmation the client actually requested the change (e.g. outbound call to the number already on file, never one supplied with the request) -- the final approval step; reaching APPROVED here starts the cooling-off window' },
    { code: 'EMPLOYEE_LIFECYCLE_INITIATION', description: 'Invariant 50(b): HR proposes a new hire (EMPLOYEE_ONBOARDING) or an offboarding (EMPLOYEE_OFFBOARDING) -- maker!=checker, generic engine' },
    { code: 'EMPLOYEE_LIFECYCLE_APPROVAL', description: 'Invariant 50(b): sign-off that actually creates the Employee row (onboarding) or flips status TERMINATED + deactivates the linked login (offboarding)' },
    { code: 'EMPLOYEE_INCENTIVE_PCT_APPROVAL', description: 'Invariant 50(b) addendum (CEO, 8-Jul-2026): approval of a proposed Employee.performanceIncentivePct change -- refused outright at approval time if the employee has an in-flight (not yet INCENTIVE_COMPUTED) PMS cycle, never retroactive' },
    { code: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', description: 'Invariant 51(a-ii): BD proposes a post-onboarding contact/KYC-data update (email/phone/address/TIN/source of funds/occupation) -- maker!=checker, generic engine' },
    { code: 'INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL', description: 'Invariant 51(a-ii): Compliance acknowledgment applies only the fields actually proposed -- same truthy-patch shape as ProfileService.acknowledgeChange' },
    { code: 'ORG_STRUCTURE_MANAGEMENT', description: 'Invariant 51(a-iii): create OrgUnit/Position rows -- was seed/smoke-only, blocking invariant 50(b) hiring against any org unit/position not already seeded' },
    { code: 'INVESTOR_EXIT_INITIATION', description: 'Invariant 51(b-v): propose an investor maturity-transition or final-exit -- gated on zero open product/mandate holdings for FINAL_EXIT' },
    { code: 'INVESTOR_EXIT_APPROVAL', description: 'Invariant 51(b-v): approve an investor maturity-transition or final-exit, flipping Investor.fundStatus' },
    { code: 'COUNTERPARTY_WRITE_OFF_INITIATION', description: 'Invariant 51(b-vi): propose a counterparty write-off (relationship-owning Portfolio function) -- gated on the counterparty account still being OPEN' },
    { code: 'COUNTERPARTY_WRITE_OFF_APPROVAL', description: 'Invariant 51(b-vi): approve a counterparty write-off -- fires the IMPAIRMENT_CHARGE event journal and closes the account, held by FIN_ADMIN (the only MD/Fin seat with JOURNAL_ENTRIES INITIATE)' },
    { code: 'BANK_RECONCILIATION', description: 'Invariant 51(b-ix): upload bank statement lines and match/unmatch them against posted journal entry lines -- the hard gate PeriodService.requestPeriodClose checks before allowing a period close request' },
    { code: 'ASSET_DISPOSAL', description: 'Invariant 51(b-x): dispose/derecognise a fixed asset -- multi-line journal (Dr Cash + Dr Accumulated Depreciation = Cr Asset at cost +/- Gain/Loss)' },
    { code: 'INVESTOR_MANDATE_AMENDMENT_INITIATION', description: 'Invariant 51(c): BD proposes a post-setup change to an investor mandate\'s targetReturnRate/rolloverDefault/earlyExitWaiver' },
    { code: 'INVESTOR_MANDATE_AMENDMENT_APPROVAL', description: 'Invariant 51(c): Portfolio Management approves a mandate amendment -- the same seat that approves the original mandate setup (MANDATE_SETUP)' },
    { code: 'COMPANY_ACCOUNTING_DASHBOARD', description: 'Invariant 58(a): Company Accounting operational dashboard -- income/expense/budget variance, AR/AP ageing, pending postings, period-close status' },
    { code: 'FUND_ACCOUNTING_DASHBOARD', description: 'Invariant 58(b): Fund Accounting operational dashboard -- per-fund NAV, subscription/redemption pipeline, accruals vs fees, distribution lifecycle' },
    { code: 'BD_DASHBOARD', description: 'Invariant 58(c): Business Development operational dashboard -- mobilization, lead funnel, AUM growth attribution, marketing performance, retention worklist' },
    { code: 'DATA_PROTECTION_COMPLIANCE', description: 'Invariant 57 (CHECK15): retention schedule registry + data breach register + privacy-notice acknowledgment log' },
    { code: 'TAX_CONFIGURATION_MANAGEMENT', description: 'Invariant 65(c): per-tax rate-version propose/approve, investor exemptions, GL account mapping, remittance due-date config -- Finance proposes, MD_CEO approves' },
    { code: 'FEE_INVOICE_MANAGEMENT', description: 'Invariant 65(c)(ii): fee invoice creation (VAT on One17 fee/advisory), vendor-invoice input-VAT recognition, stamp-duty assessment' },
    { code: 'TAX_REMITTANCE_MANAGEMENT', description: 'Invariant 65(c)(iii): tax remittance batch propose/approve/mark-remitted, per tax type and authority, through the letter pipeline' },
    { code: 'FUND_OBLIGATIONS_SCHEDULE', description: 'Invariant 65(a): projected profit-payout schedule + investor-level drill-down, VIEW-only for Fund Accounting AND Portfolio team' },
    { code: 'PAYOUT_COMPILATION', description: 'Invariant 65(b): FA compiles a payout batch from the schedule -> memo request through DoA -> approval auto-generates the bank instruction letter -> mark paid' },
    { code: 'ACTIVATION_CONSOLE', description: 'Invariant 66: the first-run Activation Console -- 9-step go-live journey, skip/proof-battery/task-assignment actions, and the platform-wide ACTIVATE control' },
];
const PERMISSIONS = [
    { function: 'INVESTOR_ONBOARDING', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'INVESTOR_ONBOARDING', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'INVESTOR_ONBOARDING', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_ONBOARDING', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'INVESTOR_ONBOARDING', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'INVESTOR_ONBOARDING', role: 'INVESTOR', level: 'VIEW', condition: 'Own records only' },
    { function: 'INVESTOR_ONBOARDING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTOR_ONBOARDING', role: 'BD', level: 'INITIATE' },
    { function: 'INVESTOR_ONBOARDING', role: 'BD', level: 'VIEW' },
    { function: 'ONBOARDING_IC_REVIEW', role: 'SAU_INTERNAL_CONTROL', level: 'APPROVE' },
    { function: 'ONBOARDING_RISK_REVIEW', role: 'RISK_DEPT', level: 'APPROVE' },
    { function: 'ONBOARDING_MD_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BD_REGISTER', role: 'BD', level: 'VIEW' },
    { function: 'BD_REGISTER', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BD_REGISTER', role: 'AUDITOR', level: 'VIEW' },
    { function: 'STRATEGY_LAYER', role: 'HEAD_SAU', level: 'INITIATE' },
    { function: 'STRATEGY_LAYER', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'STRATEGY_LAYER', role: 'AUDITOR', level: 'VIEW' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'AUDITOR', level: 'VIEW' },
    { function: 'MARKETING_RESOURCE', role: 'BD', level: 'INITIATE' },
    { function: 'MARKETING_RESOURCE', role: 'BD', level: 'VIEW' },
    { function: 'MARKETING_RESOURCE', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'MARKETING_RESOURCE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'MARKETING_RESOURCE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'COUNTERPARTY_RESTRUCTURE_REQUEST', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'COUNTERPARTY_RESTRUCTURE_REQUEST', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'COUNTERPARTY_RESTRUCTURE_REQUEST', role: 'AUDITOR', level: 'VIEW' },
    { function: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYMENT_REMINDER_DISPATCH', role: 'PORT_OFF', level: 'APPROVE' },
    { function: 'PAYMENT_REMINDER_DISPATCH', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'PAYMENT_REMINDER_DISPATCH', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYMENT_REMINDER_LADDER_SETTINGS', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'PAYMENT_REMINDER_LADDER_SETTINGS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'RISK_DEPT', level: 'INITIATE' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'RISK_DEPT', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'TREASURY_OFF', level: 'INITIATE' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'TREASURY_OFF', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'MFA_ENFORCEMENT_CONFIG', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'MFA_ENFORCEMENT_CONFIG', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'MFA_ENFORCEMENT_CONFIG', role: 'AUDITOR', level: 'VIEW' },
    { function: 'MFA_ENFORCEMENT_CONFIG', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'ICT', level: 'INITIATE' },
    { function: 'PAYMENT_GATEWAY_POLICY', role: 'ICT', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'ICT', level: 'INITIATE' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'ICT', level: 'VIEW' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'RISK_DEPT', level: 'INITIATE' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'RISK_DEPT', level: 'VIEW' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'ICT', level: 'INITIATE' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'ICT', level: 'VIEW' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'SCREENING_GATEWAY_POLICY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'ICT', level: 'INITIATE' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'ICT', level: 'VIEW' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'ATTENDANCE_GATEWAY_POLICY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'ICT', level: 'INITIATE' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'ICT', level: 'VIEW' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'CALENDAR_GATEWAY_POLICY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ATTENDANCE_EXCEPTION_ADJUDICATION', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'ATTENDANCE_EXCEPTION_ADJUDICATION', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'ATTENDANCE_EXCEPTION_ADJUDICATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'LEAVE_MANAGEMENT', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'LEAVE_MANAGEMENT', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'LEAVE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'LEAVE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'SYSTEM_PAYMENT_GATEWAY', level: 'INITIATE' },
    { function: 'REDEMPTION_PROCESSING', role: 'SYSTEM_PAYMENT_GATEWAY', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'SYSTEM_PAYMENT_GATEWAY', level: 'INITIATE' },
    { function: 'REDEMPTION_PROCESSING', role: 'SYSTEM_PORTAL_CLIENT', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'SYSTEM_PORTAL_CLIENT', level: 'INITIATE' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'AUDITOR', level: 'VIEW' },
    { function: 'FACILITY_APPLICATION_RISK_REVIEW', role: 'RISK_DEPT', level: 'APPROVE' },
    { function: 'FACILITY_APPLICATION_BD_REVIEW', role: 'BD', level: 'APPROVE' },
    { function: 'FACILITY_APPLICATION_FINANCE_REVIEW', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'FACILITY_APPLICATION_COMPLIANCE_APPROVAL', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'FACILITY_APPLICATION_LEGAL_VIEW', role: 'LEGAL', level: 'VIEW' },
    { function: 'FACILITY_APPLICATION_LEGAL_VIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_CIO_APPROVAL', role: 'CIO', level: 'APPROVE' },
    { function: 'INVESTMENT_MEMO_CIO_APPROVAL', role: 'CIO', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_CIO_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_PM_VALIDATION', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'INVESTMENT_MEMO_PM_VALIDATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTMENT_COMMITTEE_APPROVAL', role: 'INV_COMMITTEE', level: 'APPROVE' },
    { function: 'INVESTMENT_COMMITTEE_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_MD_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'INVESTMENT_MEMO_MD_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', role: 'CIO', level: 'INITIATE' },
    { function: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', role: 'CIO', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BOARD_DIRECTIVE_MANAGEMENT', role: 'CS', level: 'INITIATE' },
    { function: 'BOARD_DIRECTIVE_MANAGEMENT', role: 'CS', level: 'VIEW' },
    { function: 'LETTERHEAD_TEMPLATE_MANAGEMENT', role: 'CS', level: 'INITIATE' },
    { function: 'LETTERHEAD_TEMPLATE_MANAGEMENT', role: 'CS', level: 'VIEW' },
    { function: 'LETTERHEAD_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'LETTERHEAD_TEMPLATE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CERTIFICATE_TEMPLATE_MANAGEMENT', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'CERTIFICATE_TEMPLATE_MANAGEMENT', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'CERTIFICATE_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'CERTIFICATE_TEMPLATE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'LETTER_TEMPLATE_MANAGEMENT', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'LETTER_TEMPLATE_MANAGEMENT', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'LETTER_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'LETTER_TEMPLATE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'LETTER_ISSUANCE', role: 'CS', level: 'INITIATE' },
    { function: 'LETTER_ISSUANCE', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'LETTER_ISSUANCE', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'LETTER_ISSUANCE', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'LETTER_ISSUANCE', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'LETTER_ISSUANCE', role: 'CS', level: 'VIEW' },
    { function: 'LETTER_ISSUANCE', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'LETTER_ISSUANCE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BOARD_DIRECTIVE_MANAGEMENT', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'BOARD_DIRECTIVE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BOARD_DIRECTIVE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'CS', level: 'INITIATE' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'CS', level: 'VIEW' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'BOARD_CALENDAR_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BOARD_MINUTES_MANAGEMENT', role: 'CS', level: 'INITIATE' },
    { function: 'BOARD_MINUTES_MANAGEMENT', role: 'CS', level: 'VIEW' },
    { function: 'BOARD_MINUTES_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'MD_DOCUMENT_TRANSMISSION', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'MD_DOCUMENT_TRANSMISSION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'MD_DOCUMENT_TRANSMISSION', role: 'CS', level: 'VIEW' },
    { function: 'MD_DOCUMENT_TRANSMISSION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'MARKETING_SEND', role: 'BD', level: 'INITIATE' },
    { function: 'MARKETING_SEND', role: 'BD', level: 'VIEW' },
    { function: 'MARKETING_SEND', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'MARKETING_SEND', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'MARKETING_SEND', role: 'AUDITOR', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'KYC_MANDATE', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'KYC_MANDATE', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'KYC_MANDATE', role: 'INVESTOR', level: 'VIEW', condition: 'Own records only' },
    { function: 'KYC_MANDATE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'CAPITAL_PLACEMENT', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'CAPITAL_PLACEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'CAPITAL_PLACEMENT', role: 'INVESTOR', level: 'VIEW', condition: 'Own records only' },
    { function: 'CAPITAL_PLACEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'SUBSCRIPTION_TARGET_CONFIRMATION', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'SUBSCRIPTION_TARGET_CONFIRMATION', role: 'FUND_ACCT', level: 'VIEW' },
    { function: 'SUBSCRIPTION_TARGET_CONFIRMATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'SUBSCRIPTION_TARGET_CONFIRMATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'NAV_MARKET_VALUE_ENTRY', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'NAV_MARKET_VALUE_ENTRY', role: 'FUND_ACCT', level: 'APPROVE' },
    { function: 'NAV_MARKET_VALUE_ENTRY', role: 'FUND_ACCT', level: 'VIEW' },
    { function: 'NAV_MARKET_VALUE_ENTRY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'NAV_MARKET_VALUE_ENTRY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTMENT_BOOKING', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'INVESTMENT_BOOKING', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'INVESTMENT_BOOKING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DAILY_ACCRUAL_BATCH', role: 'PORT_OFF', level: 'INITIATE', condition: 'System-triggered daily batch' },
    { function: 'DAILY_ACCRUAL_BATCH', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DISTRIBUTION_INITIATION', role: 'PORT_OFF', level: 'INITIATE', condition: 'SRS §6.2: initiator for <₦1,000,000 tier' },
    { function: 'DISTRIBUTION_INITIATION', role: 'PORT_MGR', level: 'INITIATE', condition: 'SRS §6.2: initiator for ₦1M+ tiers and Loss Scenario' },
    { function: 'DISTRIBUTION_INITIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DISTRIBUTION_APPROVAL', role: 'PORT_MGR', level: 'APPROVE', approvalLimitKobo: kobo(1_000_000) },
    { function: 'DISTRIBUTION_APPROVAL', role: 'MD_CEO', level: 'APPROVE', approvalLimitKobo: undefined },
    { function: 'DISTRIBUTION_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PENALTY_TO_CHARITY_INITIATION', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'PENALTY_TO_CHARITY_APPROVAL', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'SHARIAH_SIGNOFF', role: 'SHARIAH_REV', level: 'APPROVE' },
    { function: 'FEE_PROCESSING', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'FEE_PROCESSING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'JOURNAL_ENTRIES', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'JOURNAL_ENTRIES', role: 'CORP_SERVICES', level: 'INITIATE' },
    { function: 'JOURNAL_ENTRIES', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'JOURNAL_ENTRIES', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'JOURNAL_ENTRIES', role: 'AUDITOR', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'FINANCIAL_STATEMENTS', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'FINANCIAL_STATEMENTS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'INVESTOR_STATEMENTS', role: 'INVESTOR', level: 'VIEW', condition: 'Own records only' },
    { function: 'INVESTOR_STATEMENTS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'SHARIAH_REV', level: 'INITIATE' },
    { function: 'SHARIAH_RECORDS', role: 'SHARIAH_REV', level: 'APPROVE' },
    { function: 'SHARIAH_RECORDS', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'SHARIAH_RECORDS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'CIO', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CONTROLS_DASHBOARD', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'CONTROLS_DASHBOARD', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CONTROLS_DASHBOARD', role: 'AUDITOR', level: 'VIEW' },
    { function: 'USER_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PARAMETERS', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'PARAMETERS', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PARAMETERS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_INITIATION', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'PRODUCT_SETUP_INITIATION', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_INITIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_REVIEW', role: 'CIO', level: 'APPROVE' },
    { function: 'PRODUCT_SETUP_REVIEW', role: 'CIO', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_REVIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PRODUCT_SETUP_APPROVAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_INITIATION', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'PROSPECTUS_SHEET_INITIATION', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_INITIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_REVIEW', role: 'CIO', level: 'APPROVE' },
    { function: 'PROSPECTUS_SHEET_REVIEW', role: 'CIO', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_REVIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PROSPECTUS_SHEET_APPROVAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_PROPOSAL', role: 'CIO', level: 'INITIATE' },
    { function: 'PROSPECTUS_AMENDMENT_PROPOSAL', role: 'CIO', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_PROPOSAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', role: 'SHARIAH_REV', level: 'APPROVE' },
    { function: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PROSPECTUS_AMENDMENT_APPROVAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'EXEC_OVERSIGHT', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'EXEC_OVERSIGHT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'EXEC_OVERSIGHT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'EXEC_OVERSIGHT', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'EXEC_OVERSIGHT', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'EXEC_OVERSIGHT', role: 'CRAO', level: 'VIEW' },
    { function: 'EXEC_OVERSIGHT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'SHARIAH_REV', level: 'INITIATE' },
    { function: 'DELEGATION_GRANT_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'SCREENING_COUNTERSIGN', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'SCREENING_PERFORM', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'SCREENING_PERFORM', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'SCREENING_PERFORM', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'MANDATE_SETUP', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'MANDATE_SETUP', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'LEDGER_ENTITY_SETUP', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'LEDGER_ENTITY_SETUP', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'LEDGER_ENTITY_SETUP', role: 'AUDITOR', level: 'VIEW' },
    { function: 'LEDGER_ENTITY_SETUP', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'DOCUMENT_REGISTER', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'DOCUMENT_REGISTER', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'DOCUMENT_REGISTER', role: 'SHARIAH_REV', level: 'INITIATE' },
    { function: 'DOCUMENT_REGISTER', role: 'BD', level: 'INITIATE' },
    { function: 'DOCUMENT_REGISTER', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ACCOUNTING_FRAMEWORK_MAP', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'ACCOUNTING_FRAMEWORK_MAP', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'ACCOUNTING_FRAMEWORK_MAP', role: 'AUDITOR', level: 'VIEW' },
    { function: 'REGULATOR_TEMPLATE_REGISTRY', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'REGULATOR_TEMPLATE_REGISTRY', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'REGULATOR_TEMPLATE_REGISTRY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'RISK_APPETITE_MATRIX', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'RISK_APPETITE_MATRIX', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'RISK_APPETITE_MATRIX', role: 'AUDITOR', level: 'VIEW' },
    { function: 'RISK_APPETITE_MATRIX', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'RISK_APPETITE_MATRIX', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'DEPARTMENT_HEAD_DESIGNATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'STRESS_TESTING', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'STRESS_TESTING', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'STRESS_TESTING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'STRESS_TESTING', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'STRESS_TESTING', role: 'MD_CEO', level: 'VIEW' },
    { function: 'STRESS_TESTING', role: 'SYSTEM_SCHEDULER', level: 'INITIATE' },
    { function: 'JOURNAL_ENTRIES', role: 'SYSTEM_SCHEDULER', level: 'INITIATE' },
    { function: 'REGULATORY_REPORTING', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'REGULATORY_REPORTING', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'REGULATORY_REPORTING', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'REGULATORY_REPORTING', role: 'MD_CEO', level: 'VIEW' },
    { function: 'REGULATORY_REPORTING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'RISK_REGISTER', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'RISK_REGISTER', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'RISK_REGISTER', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'RISK_REGISTER', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DATA_MIGRATION', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'DATA_MIGRATION', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'DATA_MIGRATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'REPLAY_HARNESS', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'REPLAY_HARNESS', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'REPLAY_HARNESS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BUDGET_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'BUDGET_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'BUDGET_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BUDGET_MANAGEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'BUDGET_CONTROL_REVIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BUDGET_CONTROL_REVIEW', role: 'SAU_INTERNAL_CONTROL', level: 'APPROVE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BUDGET_REVIEW_PACK', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'BUDGET_REVIEW_PACK', role: 'MD_CEO', level: 'VIEW' },
    { function: 'RBAC_CONFIG', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'RBAC_CONFIG', role: 'SUPER_ADMIN', level: 'APPROVE' },
    { function: 'RBAC_CONFIG', role: 'AUDITOR', level: 'VIEW' },
    { function: 'WM_ADVISORY', role: 'WM_ADVISOR', level: 'INITIATE' },
    { function: 'WM_ADVISORY', role: 'WM_ADVISOR', level: 'APPROVE' },
    { function: 'WM_ADVISORY', role: 'WM_ADVISOR', level: 'VIEW' },
    { function: 'WM_ADVISORY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'WM_ADVISORY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'WM_ADVISOR', level: 'INITIATE' },
    { function: 'ZAKAT_ADVISORY', role: 'WM_ADVISOR', level: 'APPROVE' },
    { function: 'ZAKAT_ADVISORY', role: 'WM_ADVISOR', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'BD', level: 'INITIATE' },
    { function: 'ZAKAT_ADVISORY', role: 'BD', level: 'APPROVE' },
    { function: 'ZAKAT_ADVISORY', role: 'BD', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'REL_OFF', level: 'INITIATE' },
    { function: 'ZAKAT_ADVISORY', role: 'REL_OFF', level: 'APPROVE' },
    { function: 'ZAKAT_ADVISORY', role: 'REL_OFF', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ZAKAT_ADVISORY', role: 'SYSTEM_PORTAL_CLIENT', level: 'INITIATE' },
    { function: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', role: 'CIO', level: 'VIEW' },
    { function: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ZAKAT_PORTFOLIO_ADVISORY_FEED', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ZAKAT_CERTIFICATION', role: 'SHARIAH_REV', level: 'APPROVE' },
    { function: 'ZAKAT_CERTIFICATION', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'ZAKAT_CERTIFICATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ZAKAT_CERTIFICATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PMS_SELF_SCORE', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'SHARIAH_REV', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'WM_ADVISOR', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'SAU_INTERNAL_CONTROL', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'PMS_SUPERVISOR', level: 'INITIATE' },
    { function: 'PMS_SELF_SCORE', role: 'DEPT_CHIEF', level: 'INITIATE' },
    { function: 'PMS_CYCLE_MANAGEMENT', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'PMS_CYCLE_MANAGEMENT', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'PMS_CYCLE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PMS_SUPERVISOR_VALIDATION', role: 'PMS_SUPERVISOR', level: 'APPROVE' },
    { function: 'PMS_SUPERVISOR_VALIDATION', role: 'PMS_SUPERVISOR', level: 'INITIATE' },
    { function: 'PMS_SAU_QA', role: 'SAU_INTERNAL_CONTROL', level: 'APPROVE' },
    { function: 'PMS_CHIEF_SIGNOFF', role: 'DEPT_CHIEF', level: 'APPROVE' },
    { function: 'PMS_CYCLE_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PMS_BEHAVIOURAL_GATE', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'PMS_PAYROLL', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'PMS_PAYROLL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PMS_PAYROLL', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'PMS_PAYROLL', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'PMS_PAYROLL', role: 'CFO', level: 'VIEW' },
    { function: 'PMS_PAYROLL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYROLL_PREPARATION', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'PAYROLL_PREPARATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'JOURNAL_ENTRIES', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'PAYROLL_FINANCE_REVIEW', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'PAYROLL_FINANCE_REVIEW', role: 'CFO', level: 'APPROVE' },
    { function: 'PAYROLL_FINANCE_REVIEW', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYROLL_CEO_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PAYROLL_CEO_APPROVAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'EMPLOYEE_PERSONAL_RECORDS', role: 'HR_ADMIN', level: 'APPROVE' },
    { function: 'EMPLOYEE_PERSONAL_RECORDS', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'SCHEDULER_OPERATIONS', role: 'ICT', level: 'INITIATE' },
    { function: 'SCHEDULER_OPERATIONS', role: 'ICT', level: 'VIEW' },
    { function: 'SCHEDULER_OVERSIGHT', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'SCHEDULER_OVERSIGHT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'SCHEDULER_PAUSE_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'DEPT_CHIEF', level: 'INITIATE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'CFO', level: 'INITIATE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'CBGO', level: 'INITIATE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'CRAO', level: 'INITIATE' },
    { function: 'DASHBOARD_COMPOSER_PUBLISH', role: 'CIO', level: 'INITIATE' },
    { function: 'PROCUREMENT_OPERATIONS', role: 'CORP_SERVICES', level: 'INITIATE' },
    { function: 'PROCUREMENT_OPERATIONS', role: 'CORP_SERVICES', level: 'VIEW' },
    { function: 'PETTY_CASH_MANAGEMENT', role: 'CORP_SERVICES', level: 'INITIATE' },
    { function: 'PETTY_CASH_MANAGEMENT', role: 'CORP_SERVICES', level: 'VIEW' },
    { function: 'PETTY_CASH_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PETTY_CASH_DISBURSEMENT', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'PETTY_CASH_DISBURSEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROCUREMENT_OPERATIONS', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PROCUREMENT_OPERATIONS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROCUREMENT_PAYMENT_APPROVAL', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'PROCUREMENT_PAYMENT_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'AI_CHAT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'CORP_SERVICES', level: 'VIEW' },
    { function: 'AI_CHAT', role: 'ICT', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'CORP_SERVICES', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'ICT', level: 'VIEW' },
    { function: 'AI_SUMMARIZE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'AI_SUMMARIZE', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'AI_SUMMARIZE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_REPORT_DRAFT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'AI_REPORT_DRAFT', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'AI_REPORT_DRAFT', role: 'BD', level: 'VIEW' },
    { function: 'AI_KPI_EXPLAIN', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'AI_KPI_EXPLAIN', role: 'PMS_SUPERVISOR', level: 'VIEW' },
    { function: 'AI_KPI_EXPLAIN', role: 'DEPT_CHIEF', level: 'VIEW' },
    { function: 'AI_KPI_EXPLAIN', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_RISK_INTERPRET', role: 'RISK_DEPT', level: 'VIEW' },
    { function: 'AI_RISK_INTERPRET', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'AI_RISK_INTERPRET', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_SHARIAH_ASSIST', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'AI_PERF_COMMENTARY', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'AI_PERF_COMMENTARY', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'AI_PERF_COMMENTARY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'AI_WORKFLOW_SUGGEST', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'AI_WORKFLOW_SUGGEST', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_AUDITLOG_QUERY', role: 'AUDITOR', level: 'VIEW' },
    { function: 'AI_AUDITLOG_QUERY', role: 'SAU_INTERNAL_CONTROL', level: 'VIEW' },
    { function: 'AI_AUDITLOG_QUERY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_ANSWER_RBAC', role: 'AUDITOR', level: 'VIEW' },
    { function: 'AI_CAPABILITY_FLAG_MANAGEMENT', role: 'ICT', level: 'INITIATE' },
    { function: 'AI_CAPABILITY_FLAG_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'AI_CAPABILITY_FLAG_MANAGEMENT', role: 'ICT', level: 'VIEW' },
    { function: 'AI_CAPABILITY_FLAG_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'AI_KILL_SWITCH', role: 'ICT', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'BD', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'CS', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'STAKEHOLDER_REPORT_DISTRIBUTION_SIGNOFF', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'TALENT_MANAGEMENT', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'TALENT_MANAGEMENT', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'TALENT_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'TALENT_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'TALENT_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'CLIENT_MESSAGING', role: 'WM_ADVISOR', level: 'INITIATE' },
    { function: 'CLIENT_MESSAGING', role: 'WM_ADVISOR', level: 'VIEW' },
    { function: 'CLIENT_MESSAGING', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'CLIENT_MESSAGING', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'CLIENT_MESSAGING', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CLIENT_MESSAGING', role: 'AUDITOR', level: 'VIEW' },
    { function: 'REDEMPTION_PROCESSING', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'REDEMPTION_PROCESSING', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'ND_MANDATE_INITIATION', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'ND_MANDATE_ACTIVATION', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'JOURNAL_ENTRIES', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'FEE_PROCESSING', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'FUND_ACCT', level: 'VIEW' },
    { function: 'JOURNAL_ENTRIES', role: 'COMP_ACCT', level: 'INITIATE' },
    { function: 'REGULATORY_REPORTING', role: 'COMP_ACCT', level: 'INITIATE' },
    { function: 'REGULATORY_REPORTING', role: 'COMP_ACCT', level: 'VIEW' },
    { function: 'JOURNAL_ENTRIES', role: 'TREASURY_OFF', level: 'INITIATE' },
    { function: 'TXN_ENTRY', role: 'TREASURY_OFF', level: 'INITIATE' },
    { function: 'JOURNAL_ENTRIES', role: 'MGR_FINCON', level: 'APPROVE' },
    { function: 'JOURNAL_ENTRIES', role: 'CFO', level: 'APPROVE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'CFO', level: 'INITIATE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'CFO', level: 'APPROVE' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'CFO', level: 'VIEW' },
    { function: 'PROCUREMENT_PAYMENT_APPROVAL', role: 'CFO', level: 'APPROVE' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'CFO', level: 'INITIATE' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'CFO', level: 'APPROVE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'CFO', level: 'INITIATE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'CFO', level: 'APPROVE' },
    { function: 'BUDGET_REVIEW_PACK', role: 'CFO', level: 'VIEW' },
    { function: 'MARKETING_RESOURCE', role: 'MKT_OFF', level: 'INITIATE' },
    { function: 'MARKETING_RESOURCE', role: 'MKT_OFF', level: 'VIEW' },
    { function: 'MARKETING_SEND', role: 'MKT_OFF', level: 'INITIATE' },
    { function: 'MARKETING_SEND', role: 'MKT_OFF', level: 'VIEW' },
    { function: 'CLIENT_MESSAGING', role: 'REL_OFF', level: 'INITIATE' },
    { function: 'CLIENT_MESSAGING', role: 'REL_OFF', level: 'VIEW' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'REL_OFF', level: 'INITIATE' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'REL_OFF', level: 'VIEW' },
    { function: 'REDEMPTION_PROCESSING', role: 'REL_OFF', level: 'INITIATE' },
    { function: 'REDEMPTION_PROCESSING', role: 'BD', level: 'INITIATE' },
    { function: 'BD_REGISTER', role: 'CBGO', level: 'VIEW' },
    { function: 'BD_REGISTER', role: 'MGR_BD', level: 'VIEW' },
    { function: 'RISK_REGISTER', role: 'CRAO', level: 'APPROVE' },
    { function: 'RISK_REGISTER', role: 'CRAO', level: 'VIEW' },
    { function: 'RISK_APPETITE_MATRIX', role: 'CRAO', level: 'VIEW' },
    { function: 'STRESS_TESTING', role: 'CRAO', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'CRAO', level: 'VIEW' },
    { function: 'AUDIT_TRAIL_VIEW', role: 'HEAD_SAU', level: 'VIEW' },
    { function: 'RISK_REGISTER', role: 'HEAD_SAU', level: 'VIEW' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'BD', level: 'INITIATE' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'BANK_ACCOUNT_CHANGE_APPROVAL', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'BANK_ACCOUNT_CHANGE_REVERIFICATION', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'EMPLOYEE_LIFECYCLE_INITIATION', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'EMPLOYEE_LIFECYCLE_INITIATION', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'EMPLOYEE_LIFECYCLE_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'EMPLOYEE_INCENTIVE_PCT_APPROVAL', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', role: 'BD', level: 'INITIATE' },
    { function: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', role: 'BD', level: 'VIEW' },
    { function: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'ORG_STRUCTURE_MANAGEMENT', role: 'HR_ADMIN', level: 'INITIATE' },
    { function: 'ORG_STRUCTURE_MANAGEMENT', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'ORG_STRUCTURE_MANAGEMENT', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'ORG_STRUCTURE_MANAGEMENT', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_EXIT_INITIATION', role: 'BD', level: 'INITIATE' },
    { function: 'INVESTOR_EXIT_INITIATION', role: 'BD', level: 'VIEW' },
    { function: 'INVESTOR_EXIT_INITIATION', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'INVESTOR_EXIT_APPROVAL', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'PORT_MGR', level: 'INITIATE' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'PORT_OFF', level: 'INITIATE' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'COUNTERPARTY_WRITE_OFF_APPROVAL', role: 'FIN_ADMIN', level: 'APPROVE' },
    { function: 'BANK_RECONCILIATION', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'BANK_RECONCILIATION', role: 'FUND_ACCT', level: 'INITIATE' },
    { function: 'BANK_RECONCILIATION', role: 'CORP_SERVICES', level: 'INITIATE' },
    { function: 'BANK_RECONCILIATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ASSET_DISPOSAL', role: 'CORP_SERVICES', level: 'INITIATE' },
    { function: 'ASSET_DISPOSAL', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'ASSET_DISPOSAL', role: 'AUDITOR', level: 'VIEW' },
    { function: 'INVESTOR_MANDATE_AMENDMENT_INITIATION', role: 'BD', level: 'INITIATE' },
    { function: 'INVESTOR_MANDATE_AMENDMENT_INITIATION', role: 'BD', level: 'VIEW' },
    { function: 'INVESTOR_MANDATE_AMENDMENT_INITIATION', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'INVESTOR_MANDATE_AMENDMENT_APPROVAL', role: 'PORT_MGR', level: 'APPROVE' },
    { function: 'COMPANY_ACCOUNTING_DASHBOARD', role: 'COMP_ACCT', level: 'VIEW' },
    { function: 'COMPANY_ACCOUNTING_DASHBOARD', role: 'MGR_FINCON', level: 'VIEW' },
    { function: 'COMPANY_ACCOUNTING_DASHBOARD', role: 'CFO', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_DASHBOARD', role: 'FUND_ACCT', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_DASHBOARD', role: 'MGR_FINCON', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_DASHBOARD', role: 'CFO', level: 'VIEW' },
    { function: 'BD_DASHBOARD', role: 'BD', level: 'VIEW' },
    { function: 'BD_DASHBOARD', role: 'MGR_BD', level: 'VIEW' },
    { function: 'BD_DASHBOARD', role: 'CBGO', level: 'VIEW' },
    { function: 'BD_DASHBOARD', role: 'REL_OFF', level: 'VIEW' },
    { function: 'BD_DASHBOARD', role: 'MKT_OFF', level: 'VIEW' },
    { function: 'BANK_RECONCILIATION', role: 'CORP_SERVICES', level: 'VIEW' },
    { function: 'BANK_RECONCILIATION', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'BANK_RECONCILIATION', role: 'FUND_ACCT', level: 'VIEW' },
    { function: 'BUDGET_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CERTIFICATE_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'BD', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'SHARIAH_REV', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'BD', level: 'VIEW' },
    { function: 'INVESTOR_ONBOARDING', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'HR_ADMIN', level: 'VIEW' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'MD_CEO', level: 'VIEW' },
    { function: 'KYC_MANDATE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'LETTER_ISSUANCE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'LETTER_ISSUANCE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'LETTER_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'LETTERHEAD_TEMPLATE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'RISK_REGISTER', role: 'MD_CEO', level: 'VIEW' },
    { function: 'SCREENING_PERFORM', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'SCREENING_PERFORM', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'SHARIAH_RECORDS', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'COMPLIANCE', level: 'INITIATE' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'COMPLIANCE', level: 'APPROVE' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'COMPLIANCE', level: 'VIEW' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'CRAO', level: 'VIEW' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'HEAD_SAU', level: 'VIEW' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'DATA_PROTECTION_COMPLIANCE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COMPLAINT_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'SCREENING_PERFORM', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COUNTERPARTY_ONBOARDING', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COUNTERPARTY_RESTRUCTURE_REQUEST', role: 'MD_CEO', level: 'VIEW' },
    { function: 'FACILITY_APPLICATION_LEGAL_VIEW', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTMENT_COMMITTEE_APPROVAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYMENT_REMINDER_DISPATCH', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYMENT_REMINDER_LADDER_SETTINGS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_PULL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'COUNTERPARTY_WRITE_OFF_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DELEGATION_GRANT_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DISTRIBUTION_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DISTRIBUTION_APPROVAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DOCUMENT_REGISTER', role: 'MD_CEO', level: 'VIEW' },
    { function: 'EMPLOYEE_LIFECYCLE_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BUREAU_GATEWAY_POLICY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'FUND_ACCOUNTING_RECEIVABLES', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PRODUCT_SETUP_REVIEW', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_SHEET_REVIEW', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_PROPOSAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PARAMETERS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_ONBOARDING', role: 'MD_CEO', level: 'VIEW' },
    { function: 'MANDATE_SETUP', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_EXIT_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'INVESTOR_MANDATE_AMENDMENT_INITIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'JOURNAL_ENTRIES', role: 'MD_CEO', level: 'VIEW' },
    { function: 'LEDGER_ENTITY_SETUP', role: 'MD_CEO', level: 'VIEW' },
    { function: 'TXN_ENTRY', role: 'MD_CEO', level: 'VIEW' },
    { function: 'MARKETING_RESOURCE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'MARKETING_SEND', role: 'MD_CEO', level: 'VIEW' },
    { function: 'DATA_MIGRATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ORG_STRUCTURE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYMENT_GATEWAY_SUSPENSE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ACCOUNTING_PERIOD_CLOSE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BANK_RECONCILIATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PETTY_CASH_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'BUDGET_CONTROL_REVIEW', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PMS_CYCLE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PMS_SELF_SCORE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PMS_SUPERVISOR_VALIDATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PMS_BEHAVIOURAL_GATE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYROLL_PREPARATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'EMOLUMENT_STRUCTURE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ASSET_DISPOSAL', role: 'MD_CEO', level: 'VIEW' },
    { function: 'RBAC_CONFIG', role: 'MD_CEO', level: 'VIEW' },
    { function: 'REPLAY_HARNESS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'STAKEHOLDER_REPORT_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'STRATEGY_LAYER', role: 'MD_CEO', level: 'VIEW' },
    { function: 'CAPITAL_PLACEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'EMPLOYEE_PERSONAL_RECORDS', role: 'MD_CEO', level: 'VIEW' },
    { function: 'KPI_DEFINITION_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'KPI_WEIGHT_MATRIX', role: 'MD_CEO', level: 'VIEW' },
    { function: 'TAX_CONFIGURATION_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'TAX_CONFIGURATION_MANAGEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'TAX_CONFIGURATION_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'TAX_CONFIGURATION_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'TAX_CONFIGURATION_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'FEE_INVOICE_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'FEE_INVOICE_MANAGEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'FEE_INVOICE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'FEE_INVOICE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'TAX_REMITTANCE_MANAGEMENT', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'TAX_REMITTANCE_MANAGEMENT', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'TAX_REMITTANCE_MANAGEMENT', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'TAX_REMITTANCE_MANAGEMENT', role: 'MD_CEO', level: 'VIEW' },
    { function: 'TAX_REMITTANCE_MANAGEMENT', role: 'AUDITOR', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'PORT_MGR', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'PORT_OFF', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'CIO', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'FUND_OBLIGATIONS_SCHEDULE', role: 'AUDITOR', level: 'VIEW' },
    { function: 'PAYOUT_COMPILATION', role: 'FIN_ADMIN', level: 'INITIATE' },
    { function: 'PAYOUT_COMPILATION', role: 'FIN_ADMIN', level: 'VIEW' },
    { function: 'PAYOUT_COMPILATION', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'PAYOUT_COMPILATION', role: 'MD_CEO', level: 'VIEW' },
    { function: 'PAYOUT_COMPILATION', role: 'AUDITOR', level: 'VIEW' },
    { function: 'ACTIVATION_CONSOLE', role: 'SUPER_ADMIN', level: 'VIEW' },
    { function: 'ACTIVATION_CONSOLE', role: 'SUPER_ADMIN', level: 'INITIATE' },
    { function: 'ACTIVATION_CONSOLE', role: 'SUPER_ADMIN', level: 'APPROVE' },
    { function: 'ACTIVATION_CONSOLE', role: 'MD_CEO', level: 'VIEW' },
    { function: 'ACTIVATION_CONSOLE', role: 'MD_CEO', level: 'INITIATE' },
    { function: 'ACTIVATION_CONSOLE', role: 'MD_CEO', level: 'APPROVE' },
    { function: 'ACTIVATION_CONSOLE', role: 'AUDITOR', level: 'VIEW' },
];
const SCREENING_CHECKLIST_ITEMS = [
    { itemCode: 'UN_SC_CONSOLIDATED', description: 'UN Security Council Consolidated List', sortOrder: 1 },
    { itemCode: 'NG_SANCTIONS_LIST', description: 'Nigerian Sanctions List (NSA/ONSA designations under the Terrorism (Prevention and Prohibition) Act)', sortOrder: 2 },
    { itemCode: 'OFAC_SDN', description: 'OFAC SDN List', sortOrder: 3 },
    { itemCode: 'EFCC_NFIU_ADVISORIES', description: 'EFCC/NFIU advisories in force', sortOrder: 4 },
    { itemCode: 'PEP_DETERMINATION', description: 'PEP determination: self-declaration + reasonable open-source check', sortOrder: 5 },
    { itemCode: 'ADVERSE_MEDIA', description: 'Adverse media: name search; record search terms used', sortOrder: 6 },
];
const SCREENING_LIST_SOURCES = [
    {
        sourceCode: 'OFAC',
        name: 'OFAC Specially Designated Nationals (SDN) List',
        fileFormat: 'CSV',
        downloadUrl: 'https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.CSV',
        isActive: false,
        isParked: false,
    },
    {
        sourceCode: 'UN_SC',
        name: 'UN Security Council Consolidated List',
        fileFormat: 'XML',
        downloadUrl: 'https://scsanctions.un.org/resources/xml/en/consolidated.xml',
        isActive: false,
        isParked: false,
    },
    {
        sourceCode: 'UK_SANCTIONS',
        name: 'UK Sanctions List (FCDO -- absorbed the retired OFSI Consolidated List, 28-Jan-2026)',
        fileFormat: 'CSV',
        downloadUrl: 'https://assets.publishing.service.gov.uk/media/uk-sanctions-list.csv',
        isActive: false,
        isParked: false,
    },
    {
        sourceCode: 'EU_FSF',
        name: 'EU Financial Sanctions Files (FSF) -- Consolidated List',
        fileFormat: 'XML',
        downloadUrl: 'https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content',
        isActive: false,
        isParked: false,
    },
    {
        sourceCode: 'NG_NFIU',
        name: 'Nigerian NFIU/NSC Sanctions List',
        fileFormat: 'CSV',
        downloadUrl: '',
        isActive: false,
        isParked: true,
        parkedReason: 'Live-verified 13-Jul-2026: nigsac.gov.ng (the NFIU secretariat\'s own sanctions page) publishes designations as HTML accordion narrative panels plus occasional per-designation dated PDF circulars -- NOT a single consolidated machine-readable file. Invariant 72(a)\'s own instruction: "park any source whose access model differs from expectation -- never scrape as a workaround." Un-parking requires the publisher to ship a real consolidated CSV/XML file, or a commercial provider slot to cover Nigerian designations instead.',
    },
];
const ROLE_CONFLICTS = [];
const WORKFLOW_TYPES = [
    { code: 'DISTRIBUTION', description: 'Profit distribution approval chain, SRS §6.2' },
    { code: 'DELEGATION_GRANT', description: 'Delegation of Authority grant approval, CLAUDE.md 9a' },
    { code: 'INVESTOR_ONBOARDING', description: 'Investor onboarding KYC approval, SRS §6.1 steps 2-4' },
    { code: 'INVESTOR_MANDATE_SHARIAH_REVIEW', description: 'Restricted-mandate Shariah review, SRS §6.1 step 6' },
    { code: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL', description: 'AMD-11: accounting_framework_map version approval, FINCON proposes -> CEO/Board per DoA' },
    { code: 'USER_ROLE_ASSIGNMENT', description: 'AMD-09 §4b: RBAC change (assigning a role to a user) as a maker-checker workflow' },
    { code: 'RISK_APPETITE_MATRIX_APPROVAL', description: 'AMD-12: risk_appetite_matrix_version approval — flips DRAFT to ACTIVE' },
    { code: 'DEPARTMENT_HEAD_DESIGNATION_APPROVAL', description: 'Invariant 74(b) (CHECK27, v1.2): department_head_designation approval — flips DRAFT to ACTIVE, supersedes the prior head of the same org unit' },
    { code: 'JOURNAL_POSTING', description: 'Phase 2: journal entry posting approval — maker drafts, checker approves, DRAFT->POSTED only from APPROVED' },
    { code: 'ACCOUNTING_PERIOD_CLOSE', description: 'Phase 2: accounting_period close approval — OPEN->CLOSED only from APPROVED' },
    { code: 'BUDGET_REVIEW_PACK_CIRCULATION', description: 'Budget Spec §5b: maker generates a report_run pack, reviewer approves it for circulation' },
    { code: 'STRESS_BASELINE_PUBLICATION', description: 'Phase 4 §2 / amendment 27: publishing a stress_test_run as the new approved BASELINE (never required for SANDBOX runs)' },
    { code: 'BUDGET_ACTIVATION', description: 'Phase 4 §3 / invariant 20: flips a BOARD_APPROVED budget_version to ACTIVE — the "deployment != activation" gate that unlocks live variance reporting, F-BZ KRIs, and expenditure encumbrance checks' },
    { code: 'EXPENDITURE_REQUISITION', description: 'Budget Spec §3: expenditure control — encumber at requisition -> SAU Internal Control review -> CEO approval per DoA' },
    { code: 'REGULATORY_FILING_CERTIFICATION', description: 'Invariant 22 spec §2: CO prepares -> MD certifies a regulatory_filing_run — the certification IS the approval' },
    { code: 'WM_CLAIM_VALIDATION', description: 'Invariant 23 spec §7.3: client declares an external asset -> a DIFFERENT authorized verifier approves -> tag flips DECLARED->VERIFIED' },
    { code: 'PMS_SCORE_VALIDATION', description: 'SDS §3.2 scoring chain: supervisor -> SAU QA -> Chief signoff on a self-scored employee_score_submission' },
    { code: 'PMS_CYCLE_APPROVAL', description: 'SDS §3.2: CEO approves the whole cycle (final link) once every submission is VALIDATED' },
    { code: 'PMS_SCORECARD_OVERRIDE', description: 'SDS §1: CEO approves an individual role_scorecard_override' },
    { code: 'INVESTOR_ONBOARDING_CASE_REVIEW', description: 'Invariant 27(a): the digitized 7-step Investor Onboarding Template\'s Step 3(IC1)->5(Risk)->[6(MD)]->7(IC2) chain, scenario-selected by the accumulative risk profile' },
    { code: 'COUNTERPARTY_ONBOARDING_CASE_REVIEW', description: 'Invariant 27(b): the digitized 7-step Investee Onboarding Template\'s Step 3(IC1)->5(Risk)->[6(MD)]->7(IC2) chain' },
    { code: 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW', description: 'Invariant 28(e)(ii): a NEW facility request on an already-onboarded counterparty, feeding the SAME IC1->Risk->IC2 governance chain under a distinct type code so the inbox tells it apart from a first-time onboarding case' },
    { code: 'INVESTMENT_MEMO_CIO_APPROVAL', description: 'Invariant 46(c) (supersedes 36f): PO -> PM validation -> CIO -> [Investment Committee -> MD/CEO, at/above the governed DoA threshold] -- gating a facility application\'s entry into the multi-officer review chain' },
    { code: 'STRATEGY_LAYER_APPROVAL', description: 'Invariant 28(c): SAU proposes a strategy_statement -> MD_CEO approves with a mandatory Board resolution ref' },
    { code: 'PETTY_CASH_REPLENISHMENT_APPROVAL', description: 'Invariant 50(a): Admin/custodian initiates a replenishment claim -> SAU Internal Control verifies -> DoA approval -> Finance disburses' },
    { code: 'LETTERHEAD_TEMPLATE_APPROVAL', description: 'Invariant 52(a): CS proposes a letterhead template version -> MD_CEO approves activation' },
    { code: 'CERTIFICATE_TEMPLATE_APPROVAL', description: 'Invariant 52(b): Compliance proposes a certificate template version (per product class) -> MD_CEO approves activation' },
    { code: 'LETTER_TEMPLATE_APPROVAL', description: 'Invariant 52(c): Compliance proposes a letter template version (per letter type) -> MD_CEO approves activation' },
    { code: 'LETTER_ISSUANCE_APPROVAL', description: 'Invariant 52(c): CS/Compliance/Portfolio generates a merge-filled letter instance -> a different Compliance/MD_CEO user approves -> client-facing dispatch' },
    { code: 'PMS_STRATEGY_SPINE_APPROVAL', description: 'Invariant 51(c2): SAU proposes a pillar or objective row -> MD_CEO approves with a mandatory Board resolution ref, same shape as STRATEGY_LAYER_APPROVAL' },
    { code: 'KPI_DEFINITION_APPROVAL', description: 'Invariant 51(c2): HR proposes a kpi_definition row -> MD_CEO approves' },
    { code: 'KPI_WEIGHT_MATRIX_APPROVAL', description: 'Invariant 51(c2) KPI class-weighting addendum: HR proposes a kpi_weight_matrix version -> MD_CEO approves, no exceptions' },
    { code: 'MARKETING_RESOURCE_APPROVAL', description: 'Invariant 28(b): BD uploads a marketing_resource -> Compliance approves it for external use' },
    { code: 'MARKETING_SEND_APPROVAL', description: 'Invariant 28(b): BD initiates a marketing_send -> Compliance approval IS the dispatch trigger' },
    { code: 'SCHEDULER_JOB_PAUSE', description: 'Invariant 32: DoA-gated pause of a financially/regulatorily consequential scheduled job — ICT initiates, MD_CEO approves, SchedulerService.approvePauseRequest() flips the flag' },
    { code: 'PROCUREMENT_PAYMENT_BATCH', description: 'Budget Spec §4: maker!=checker approval of a payment batch — Corporate Services drafts, FIN_ADMIN/MD_CEO approves, approval posts the payment journal' },
    { code: 'AI_CAPABILITY_FLAG_TOGGLE', description: 'Invariant 33(f) gate 1: DoA-governed flip of a global AI capability flag — ICT initiates, MD_CEO approves' },
    { code: 'AI_PROVIDER_CREDENTIAL_CONFIG', description: 'Invariant 73(b) (CHECK27): AiProviderCredential config change -- ICT proposes, MD_CEO approves, same shape as AI_CAPABILITY_FLAG_TOGGLE' },
    { code: 'STAKEHOLDER_REPORT_APPROVAL', description: 'Invariant 24: maker generates a stakeholder_report_run, a DIFFERENT authority approves it for circulation before it can be distributed' },
    { code: 'EMPLOYEE_PERSONAL_RECORD_CHANGE', description: 'Invariant 29(a): employee requests a gated marital-status/address/next-of-kin change -> HR acknowledges (payroll/benefits implications)' },
    { code: 'ZAKAT_ITEM_VALIDATION', description: 'Invariant 26(c): a client-declared EXTERNAL zakat schedule item -> a DIFFERENT authorized verifier approves -> DECLARED->VERIFIED flip (same shape as WM_CLAIM_VALIDATION)' },
    { code: 'ZAKAT_ASSESSMENT_CERTIFICATION', description: 'Invariant 26(c): a Zakat assessment run submitted for SSB certification -> Shariah reviewer certifies -> CERTIFIED, immutable thereafter' },
    { code: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', description: 'Invariant 25(4): a restructure request exceeding the DB-enforced 1-restructure/1-month limit -> MD_CEO approves as a named exception, never a unilateral override' },
    { code: 'INVESTMENT_MEMO_CIO_APPROVAL', description: 'Invariant 36(f): Portfolio Officer submits an investment memo -> CIO approves -> only then does the facility application enter the Risk/BD/Finance/Compliance chain' },
    { code: 'INVESTMENT_MEMO_THRESHOLD_APPROVAL', description: 'Invariant 46(c)/46(g)(i): CIO proposes a new investment memo DoA threshold -> MD_CEO approves -> DRAFT->ACTIVE flip, same shape as ACCOUNTING_FRAMEWORK_MAP_APPROVAL' },
    { code: 'EMOLUMENT_STRUCTURE_APPROVAL', description: 'Invariant 37(e): emolument_structure component approval — flips DRAFT to ACTIVE, supersedes the prior ACTIVE row for that (cadre, notch, component)' },
    { code: 'TALENT_RECOMMENDATION_APPROVAL', description: 'Invariant 37(e): a welfare/reward recommendation for an employee — HR recommends, MD_CEO approves -> talent_recommendation.status PENDING->APPROVED' },
    { code: 'SCHEDULER_JOB_RETIREMENT', description: 'Invariant 37(f): retiring a CONSEQUENTIAL scheduled job from the catalog — same DoA gate as SCHEDULER_JOB_PAUSE (ICT initiates, MD_CEO approves)' },
    { code: 'SUBSCRIPTION_APPROVAL', description: 'Invariant 42(a): SubscriptionService.initiateSubscription -- maker drafts a subscription_request, checker approves -- only the approval writes the live ProductAccount + cash-leg Txn' },
    { code: 'REDEMPTION_APPROVAL', description: 'Invariant 42(a): SubscriptionService.initiateRedemption -- mirrors SUBSCRIPTION_APPROVAL' },
    { code: 'PAYMENT_GATEWAY_CONFIG', description: 'Invariant 55(a) (CEO ruling, 9-Jul-2026): provider/custodian-account config change -- FIN_ADMIN proposes, MD_CEO approves, same shape as AI_CAPABILITY_FLAG_TOGGLE' },
    { code: 'PAYMENT_GATEWAY_INFLOW_DECISION', description: 'Invariant 55(a) (CEO ruling, 9-Jul-2026): a suspense-queue reject/reversal decision -- one Finance officer proposes, a SECOND Finance officer approves before it takes effect' },
    { code: 'ATTENDANCE_GATEWAY_CONFIG', description: 'Invariant 40/63(b) (CHECK17): AttendanceProvider config change -- HR_ADMIN/ICT proposes, MD_CEO approves, same shape as PAYMENT_GATEWAY_CONFIG' },
    { code: 'CALENDAR_GATEWAY_CONFIG', description: 'Invariant 73(b) (CHECK27): CalendarGatewayProvider config change -- ICT proposes, MD_CEO approves, same shape as ATTENDANCE_GATEWAY_CONFIG' },
    { code: 'SCREENING_LIST_SOURCE_CONFIG', description: 'Invariant 72(a)/(c) (CHECK26): ScreeningListSource config change -- RISK_DEPT/COMPLIANCE/ICT proposes, MD_CEO approves' },
    { code: 'SCREENING_COMMERCIAL_PROVIDER_CONFIG', description: 'Invariant 72(c) (CHECK26): CommercialScreeningProvider slot config change -- same shape as SCREENING_LIST_SOURCE_CONFIG' },
    { code: 'SCREENING_HIT_ADJUDICATION', description: 'Invariant 72(b)/(e) (CHECK26): a Compliance/IC officer proposes TRUE_MATCH/FALSE_POSITIVE for a screening hit with mandatory written rationale; a DIFFERENT officer approves -- adjudicator != initiator' },
    { code: 'ND_MANDATE_ACTIVATION', description: 'Invariant 42(c): NdMandateEngineService.activateMandate -- separate approver from createMandate, no same-user create+activate' },
    { code: 'PRODUCT_SETUP', description: 'Invariant 44(b): the product-factory create step -- maker creates a DRAFT product, checker approves -- only APPROVED auto-provisions the ledger entity + CoA template. Shariah approval and governed-parameters approval remain separate, later gates checked before ACTIVE.' },
    { code: 'INVESTOR_BANK_ACCOUNT_CHANGE', description: 'Invariant 51(a-i): staff-mediated, document-evidenced change of WHERE an investor\'s redemption proceeds get paid -- APPROVAL then independent REVERIFICATION, cooling-off window starts on final APPROVED' },
    { code: 'EMPLOYEE_ONBOARDING', description: 'Invariant 50(b): HR proposes a new hire -- approval creates the Employee row' },
    { code: 'EMPLOYEE_OFFBOARDING', description: 'Invariant 50(b): HR proposes an offboarding -- approval flips Employee.status TERMINATED and deactivates (SUSPENDED) the linked AppUser login' },
    { code: 'EMPLOYEE_INCENTIVE_PCT_CHANGE', description: 'Invariant 50(b) addendum (CEO, 8-Jul-2026): HR proposes a new Employee.performanceIncentivePct -- approval applies it UNLESS the employee has an in-flight (not yet INCENTIVE_COMPUTED) PMS cycle, in which case the approval itself is refused (never retroactive)' },
    { code: 'INVESTOR_CONTACT_KYC_AMENDMENT', description: 'Invariant 51(a-ii): governed post-onboarding update of an investor\'s contact/KYC data -- BD proposes, Compliance acknowledges, same shape as EMPLOYEE_PERSONAL_RECORD_CHANGE' },
    { code: 'INVESTOR_EXIT', description: 'Invariant 51(b-v) (CHECK13): investor maturity-transition or final-exit -- BD proposes, Compliance approves, flips Investor.fundStatus (MATURED or EXITED)' },
    { code: 'COUNTERPARTY_WRITE_OFF', description: 'Invariant 51(b-vi) (CHECK13): counterparty write-off -- Portfolio proposes, FIN_ADMIN approves and fires the IMPAIRMENT_CHARGE event journal' },
    { code: 'INVESTOR_MANDATE_AMENDMENT', description: 'Invariant 51(c) (CHECK13): post-setup change to an investor mandate\'s targetReturnRate/rolloverDefault/earlyExitWaiver -- BD proposes, Portfolio Management approves' },
    { code: 'TAX_RATE_VERSION_APPROVAL', description: 'Invariant 65(c): Finance proposes a per-tax (WHT/VAT/Stamp Duty) rate version -> MD_CEO approves -- never retroactive on already-approved batches/invoices' },
    { code: 'TAX_REMITTANCE_BATCH_APPROVAL', description: 'Invariant 65(c)(iii): Finance proposes a tax remittance batch (per tax type/authority) -> MD_CEO approves -> approval auto-generates the tax remittance instruction letter' },
    { code: 'PAYOUT_BATCH_APPROVAL', description: 'Invariant 65(b): FA compiles a payout batch from the Fund Obligations Schedule -> MD_CEO approves (amount-tiered via the batch total) -> approval auto-generates the bank instruction letter' },
    { code: 'PROSPECTUS_SHEET_APPROVAL', description: 'Invariant 70(b): Unified Prospectus Parameter Sheet propose (DRAFT, freely re-editable) -> CIO review -> MD_CEO approve -> LOCKED immutably, provisioning accounting spine + access map' },
    { code: 'PROSPECTUS_SHEET_AMENDMENT', description: 'Invariant 70(g): CIO proposes an amendment to a LIVE product\'s approved prospectus sheet -> SSB sign-off -> Compliance sign-off -> MD_CEO approval -> new version effective FORWARD from approval date only' },
];
async function main() {
    for (const role of ROLES) {
        await prisma.role.upsert({ where: { code: role.code }, create: role, update: role });
    }
    for (const fn of FUNCTIONS) {
        await prisma.platformFunction.upsert({ where: { code: fn.code }, create: fn, update: fn });
    }
    const desiredGrantKeys = new Set(PERMISSIONS.map((p) => `${p.role}::${p.function}::${p.level}`));
    const existingGrants = await prisma.rolePermission.findMany({ select: { roleCode: true, functionCode: true, level: true } });
    const staleGrants = existingGrants.filter((g) => !desiredGrantKeys.has(`${g.roleCode}::${g.functionCode}::${g.level}`));
    for (const p of PERMISSIONS) {
        await prisma.rolePermission.upsert({
            where: { roleCode_functionCode_level: { roleCode: p.role, functionCode: p.function, level: p.level } },
            create: { roleCode: p.role, functionCode: p.function, level: p.level, condition: p.condition, approvalLimitKobo: p.approvalLimitKobo },
            update: { condition: p.condition, approvalLimitKobo: p.approvalLimitKobo },
        });
    }
    for (const g of staleGrants) {
        await prisma.rolePermission.delete({
            where: { roleCode_functionCode_level: { roleCode: g.roleCode, functionCode: g.functionCode, level: g.level } },
        });
    }
    console.log(`RolePermission reconciliation: ${PERMISSIONS.length} desired grant(s) upserted; ${staleGrants.length} stale grant(s) pruned` +
        (staleGrants.length > 0
            ? ` -- REMOVED: ${staleGrants.map((g) => `${g.roleCode}/${g.functionCode}/${g.level}`).join(', ')}`
            : ''));
    {
        const opsApiDir = path.join(__dirname, '..', 'src', 'ops-api');
        const controllerFiles = fs.readdirSync(opsApiDir).filter((f) => f.endsWith('.controller.ts'));
        const realViewGatedFunctions = new Set();
        for (const file of controllerFiles) {
            const content = fs.readFileSync(path.join(opsApiDir, file), 'utf8');
            for (const m of content.matchAll(/@RequiresCapability\(\s*'([A-Z_]+)'\s*,\s*'VIEW'\s*\)/g))
                realViewGatedFunctions.add(m[1]);
        }
        const byRoleFunction = new Map();
        for (const p of PERMISSIONS) {
            const key = `${p.role}::${p.function}`;
            if (!byRoleFunction.has(key))
                byRoleFunction.set(key, new Set());
            byRoleFunction.get(key).add(p.level);
        }
        const gaps = [];
        for (const [key, levels] of byRoleFunction) {
            const [role, func] = key.split('::');
            if (role.startsWith('SYSTEM_'))
                continue;
            if (!realViewGatedFunctions.has(func))
                continue;
            if ((levels.has('INITIATE') || levels.has('APPROVE')) && !levels.has('VIEW')) {
                gaps.push(`${func} :: ${role} :: has [${[...levels].join(',')}] but no VIEW`);
            }
        }
        if (gaps.length > 0) {
            throw new Error(`APPROVE⇒VIEW assertion failed (invariant 58d, CHECK15 permanent check): ${gaps.length} role(s) hold INITIATE/APPROVE on a function with a real VIEW-gated screen (src/ops-api/*.controller.ts) but no VIEW grant -- that screen would be invisible to them (CapabilityGuard checks one exact level per route, no hierarchy). Fix: add the missing VIEW row(s) to PERMISSIONS in prisma/seed.ts.\n  ${gaps.join('\n  ')}`);
        }
        console.log(`APPROVE⇒VIEW assertion: ${realViewGatedFunctions.size} VIEW-gated function(s) checked across ${byRoleFunction.size} role+function grant pair(s) -- 0 gaps.`);
    }
    for (const c of ROLE_CONFLICTS) {
        await prisma.roleConflict.upsert({
            where: { roleACode_roleBCode: { roleACode: c.roleACode, roleBCode: c.roleBCode } },
            create: c,
            update: c,
        });
    }
    for (const wt of WORKFLOW_TYPES) {
        await prisma.workflowType.upsert({ where: { code: wt.code }, create: wt, update: wt });
    }
    for (const item of SCREENING_CHECKLIST_ITEMS) {
        await prisma.screeningChecklistItem.upsert({
            where: { itemCode: item.itemCode },
            create: item,
            update: item,
        });
    }
    for (const source of SCREENING_LIST_SOURCES) {
        await prisma.screeningListSource.upsert({ where: { sourceCode: source.sourceCode }, create: source, update: {} });
    }
    async function upsertApprovalRule(ruleKey, data, steps) {
        const chainVersion = await prisma.approvalChainVersion.upsert({
            where: { workflowTypeCode_version: { workflowTypeCode: data.workflowTypeCode, version: 1 } },
            create: { workflowTypeCode: data.workflowTypeCode, version: 1, status: 'ACTIVE', effectiveFrom: new Date() },
            update: {},
        });
        const rule = await prisma.approvalRule.upsert({
            where: { ruleKey },
            create: { ruleKey, chainVersionId: chainVersion.id, ...data },
            update: { ...data },
        });
        for (const step of steps) {
            await prisma.approvalRuleStep.upsert({
                where: {
                    approvalRuleId_stepOrder: {
                        approvalRuleId: rule.id,
                        stepOrder: step.stepOrder,
                    },
                },
                create: { approvalRuleId: rule.id, ...step },
                update: { ...step },
            });
        }
        return rule;
    }
    await upsertApprovalRule('DISTRIBUTION_TIER_1', {
        workflowTypeCode: 'DISTRIBUTION',
        minAmountKobo: 0n,
        maxAmountKobo: kobo(1_000_000),
        initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
        requiredChecksNote: 'All 8 DC checks (SRS §4.5.2) must pass.',
        description: 'SRS §6.2: < ₦1,000,000',
    }, [{ stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: true }]);
    await upsertApprovalRule('DISTRIBUTION_TIER_2', {
        workflowTypeCode: 'DISTRIBUTION',
        minAmountKobo: kobo(1_000_000),
        maxAmountKobo: kobo(10_000_000),
        initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
        requiredChecksNote: 'All 8 DC checks + Shariah flag review.',
        description: 'SRS §6.2: ₦1M – ₦10M',
    }, [{ stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: true }]);
    await upsertApprovalRule('DISTRIBUTION_TIER_3', {
        workflowTypeCode: 'DISTRIBUTION',
        minAmountKobo: kobo(10_000_000),
        maxAmountKobo: null,
        initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
        requiredChecksNote: 'All checks + board resolution reference. SHARIAH_REV must confirm no flags.',
        description: 'SRS §6.2: > ₦10M',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: true },
        { stepOrder: 2, requiredFunctionCode: 'SHARIAH_SIGNOFF', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('DISTRIBUTION_LOSS', {
        workflowTypeCode: 'DISTRIBUTION',
        scenario: 'LOSS',
        initiatorFunctionCode: 'DISTRIBUTION_INITIATION',
        requiredChecksNote: 'Loss allocation review + SSB sign-off. Board Resolution required (not yet modeled as a capability — tracked as a manual gate).',
        description: 'SRS §6.2: Loss Scenario Distribution',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'DISTRIBUTION_APPROVAL', requiresAmountLimitCheck: true },
        { stepOrder: 2, requiredFunctionCode: 'SHARIAH_SIGNOFF', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('DISTRIBUTION_PENALTY_TO_CHARITY', {
        workflowTypeCode: 'DISTRIBUTION',
        scenario: 'PENALTY_TO_CHARITY',
        initiatorFunctionCode: 'PENALTY_TO_CHARITY_INITIATION',
        requiredChecksNote: 'Charity payable account confirmed. Never to Mudarib.',
        description: 'SRS §6.2: Penalty to Charity',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PENALTY_TO_CHARITY_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'SHARIAH_SIGNOFF', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('DELEGATION_GRANT_STANDARD', {
        workflowTypeCode: 'DELEGATION_GRANT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'DELEGATION_GRANT_INITIATION',
        requiredChecksNote: 'Grantor effective-authority check (or boardInstrumentRef override) performed in DelegationService before this workflow is initiated.',
        description: 'CLAUDE.md 9a: Delegation of Authority grant approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'DELEGATION_GRANT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('INVESTOR_ONBOARDING_STANDARD', {
        workflowTypeCode: 'INVESTOR_ONBOARDING',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTOR_ONBOARDING',
        requiredChecksNote: 'A screening record (NO_MATCH or resolved POTENTIAL_MATCH) must exist — enforced in InvestorService before this workflow is initiated, per the Manual Screening Procedure §4 gate.',
        description: 'SRS §6.1: Investor onboarding KYC approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'INVESTOR_ONBOARDING', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('MANDATE_SHARIAH_REVIEW_STANDARD', {
        workflowTypeCode: 'INVESTOR_MANDATE_SHARIAH_REVIEW',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SHARIAH_RECORDS',
        requiredChecksNote: 'Only required for restricted mandates (mandateType RESTRICTED or RESTRICTED_PLUS_DIRECT) — enforced in InvestorService, which decides whether to request this workflow at all.',
        description: 'SRS §6.1 step 6: Shariah review of restricted mandate',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SHARIAH_RECORDS', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ACCOUNTING_FRAMEWORK_MAP_STANDARD', {
        workflowTypeCode: 'ACCOUNTING_FRAMEWORK_MAP_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ACCOUNTING_FRAMEWORK_MAP',
        requiredChecksNote: 'AMD-11.4: new FRC/harmonization pronouncements are absorbed as new mapping versions through this workflow — never a migration.',
        description: 'AMD-11 / Reporting Spec §2: accounting framework map version approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ACCOUNTING_FRAMEWORK_MAP', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('USER_ROLE_ASSIGNMENT_STANDARD', {
        workflowTypeCode: 'USER_ROLE_ASSIGNMENT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'RBAC_CONFIG',
        requiredChecksNote: 'AMD-09 §4b: a different SUPER_ADMIN must approve — self-approval rejected by the generic WorkflowEngineService initiator check.',
        description: 'AMD-09 §4b: user-role assignment as a governed RBAC change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'RBAC_CONFIG', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('RISK_APPETITE_MATRIX_STANDARD', {
        workflowTypeCode: 'RISK_APPETITE_MATRIX_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'RISK_APPETITE_MATRIX',
        requiredChecksNote: 'AMD-12 rule 2: the ERM module cannot arm live RAG statuses without an approved appetite matrix version — this workflow is that gate.',
        description: 'AMD-12: risk appetite matrix version approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'RISK_APPETITE_MATRIX', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('DEPARTMENT_HEAD_DESIGNATION_STANDARD', {
        workflowTypeCode: 'DEPARTMENT_HEAD_DESIGNATION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'DEPARTMENT_HEAD_DESIGNATION',
        requiredChecksNote: 'One active head per org unit, enforced transactionally in DepartmentHeadService.approveDesignation — the new ACTIVE designation supersedes the prior one atomically.',
        description: 'Invariant 74(b): department head designation approval — grants dynamic CONTROLS_DASHBOARD VIEW to the holder',
    }, [{ stepOrder: 1, requiredFunctionCode: 'DEPARTMENT_HEAD_DESIGNATION', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('STRESS_BASELINE_PUBLICATION_STANDARD', {
        workflowTypeCode: 'STRESS_BASELINE_PUBLICATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'STRESS_TESTING',
        requiredChecksNote: 'Amendment 27: publishing a stress_test_run as BASELINE requires Board-level approval — SANDBOX runs never touch this gate.',
        description: 'Phase 4 §2: stress baseline publication approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'STRESS_TESTING', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('BUDGET_ACTIVATION_STANDARD', {
        workflowTypeCode: 'BUDGET_ACTIVATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'BUDGET_MANAGEMENT',
        requiredChecksNote: 'Invariant 20: BOARD_APPROVED -> ACTIVE is the deployment != activation gate. Requires boardResolutionRef populated before the workflow will even initiate.',
        description: 'Phase 4 §3: budget-core activation',
    }, [{ stepOrder: 1, requiredFunctionCode: 'BUDGET_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('EXPENDITURE_REQUISITION_STANDARD', {
        workflowTypeCode: 'EXPENDITURE_REQUISITION',
        initiatorFunctionCode: 'BUDGET_MANAGEMENT',
        minAmountKobo: 0n,
        maxAmountKobo: null,
        requiredChecksNote: 'Budget Spec §3: encumber at requisition -> system budget check (service-level, not a workflow step) -> SAU Internal Control review -> CEO approval per DoA (amount-tiered).',
        description: 'Expenditure requisition: SAU review then CEO approval per DoA',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'BUDGET_CONTROL_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'BUDGET_MANAGEMENT', requiresAmountLimitCheck: true },
    ]);
    await upsertApprovalRule('REGULATORY_FILING_CERTIFICATION_STANDARD', {
        workflowTypeCode: 'REGULATORY_FILING_CERTIFICATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'REGULATORY_REPORTING',
        requiredChecksNote: 'Spec §2 item 3: MD certifies — the approval record IS the certification signature block.',
        description: 'Regulatory filing certification: CO prepares, MD certifies',
    }, [{ stepOrder: 1, requiredFunctionCode: 'REGULATORY_REPORTING', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('WM_CLAIM_VALIDATION_STANDARD', {
        workflowTypeCode: 'WM_CLAIM_VALIDATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'WM_ADVISORY',
        requiredChecksNote: 'Spec §7.3: a DIFFERENT authorized verifier approves — the approval record IS the DECLARED->VERIFIED flip.',
        description: 'WM claim validation: advisor declares, a different advisor verifies',
    }, [{ stepOrder: 1, requiredFunctionCode: 'WM_ADVISORY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PMS_SCORE_VALIDATION_STANDARD', {
        workflowTypeCode: 'PMS_SCORE_VALIDATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PMS_SELF_SCORE',
        requiredChecksNote: 'SDS §3.2: supervisor validates -> SAU quality-assures framework integrity -> dept Chief signs.',
        description: 'PMS scoring chain: self-score -> supervisor -> SAU QA -> Chief signoff',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PMS_SUPERVISOR_VALIDATION', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'PMS_SAU_QA', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'PMS_CHIEF_SIGNOFF', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('JOURNAL_POSTING_PAYROLL_THREE_HAND', {
        workflowTypeCode: 'JOURNAL_POSTING',
        scenario: 'PAYROLL_THREE_HAND',
        initiatorFunctionCode: 'PAYROLL_PREPARATION',
        requiredChecksNote: 'Invariant 46(f): HR_ADMIN prepares -> Finance reviews -> MD/CEO approves; only MD/CEO approval releases posting/payment.',
        description: 'Three-hand payroll chain: HR_ADMIN prepares -> Finance reviews -> MD/CEO approves',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PAYROLL_FINANCE_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'PAYROLL_CEO_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('PMS_CYCLE_APPROVAL_STANDARD', {
        workflowTypeCode: 'PMS_CYCLE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PMS_CYCLE_MANAGEMENT',
        requiredChecksNote: 'SDS §3.2: CEO approves the cycle — the scoring chain\'s final link, applied once per cycle.',
        description: 'PMS cycle approval: HR submits, CEO approves the whole cycle',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PMS_CYCLE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PMS_SCORECARD_OVERRIDE_STANDARD', {
        workflowTypeCode: 'PMS_SCORECARD_OVERRIDE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PMS_CYCLE_MANAGEMENT',
        requiredChecksNote: 'SDS §1: "individual overrides allowed with approval" — CEO approves, same authority as cycle approval.',
        description: 'PMS role scorecard override: HR proposes, CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PMS_CYCLE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('INVESTOR_ONBOARDING_CASE_REVIEW_LOW_MEDIUM', {
        workflowTypeCode: 'INVESTOR_ONBOARDING_CASE_REVIEW',
        scenario: 'LOW_MEDIUM_RISK',
        initiatorFunctionCode: 'INVESTOR_ONBOARDING',
        requiredChecksNote: 'Investor Onboarding Template Steps 3/5/7 — no EDD, no MD approval for Low/Medium-Low.',
        description: 'Graduated onboarding case review (Low/Medium-Low): IC1 -> Risk periodic review -> IC2',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'ONBOARDING_RISK_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('INVESTOR_ONBOARDING_CASE_REVIEW_HIGH', {
        workflowTypeCode: 'INVESTOR_ONBOARDING_CASE_REVIEW',
        scenario: 'HIGH_RISK',
        initiatorFunctionCode: 'INVESTOR_ONBOARDING',
        requiredChecksNote: 'Investor Onboarding Template Steps 3/5/6/7 — EDD and MD approval mandatory for High Risk (Policy s3.3/s3.4).',
        description: 'Graduated onboarding case review (High Risk): IC1 -> Risk EDD -> MD -> IC2',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'ONBOARDING_RISK_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'ONBOARDING_MD_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 4, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('COUNTERPARTY_ONBOARDING_CASE_REVIEW_LOW_MEDIUM', {
        workflowTypeCode: 'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
        scenario: 'LOW_MEDIUM_RISK',
        initiatorFunctionCode: 'COUNTERPARTY_ONBOARDING',
        requiredChecksNote: 'Investee Onboarding Template Steps 3/5/7 — no EDD, no MD approval for Low/Medium-Low.',
        description: 'Counterparty onboarding case review (Low/Medium-Low): IC1 -> Risk periodic review -> IC2',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'ONBOARDING_RISK_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('COUNTERPARTY_ONBOARDING_CASE_REVIEW_HIGH', {
        workflowTypeCode: 'COUNTERPARTY_ONBOARDING_CASE_REVIEW',
        scenario: 'HIGH_RISK',
        initiatorFunctionCode: 'COUNTERPARTY_ONBOARDING',
        requiredChecksNote: 'Investee Onboarding Template Steps 3/5/6/7 — EDD and MD approval mandatory for High Risk (Policy s3.3/s3.4).',
        description: 'Counterparty onboarding case review (High Risk): IC1 -> Risk EDD -> MD -> IC2',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'ONBOARDING_RISK_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'ONBOARDING_MD_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 4, requiredFunctionCode: 'ONBOARDING_IC_REVIEW', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('COUNTERPARTY_FACILITY_APPLICATION_REVIEW_STANDARD', {
        workflowTypeCode: 'COUNTERPARTY_FACILITY_APPLICATION_REVIEW',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'COUNTERPARTY_ONBOARDING',
        requiredChecksNote: 'Invariant 36(e): multi-officer approval access — Risk -> BD -> Finance -> Compliance, each a distinct capability; Legal holds VIEW-only access (no step).',
        description: 'Counterparty facility application review: Risk -> BD -> Finance -> Compliance',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'FACILITY_APPLICATION_RISK_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'FACILITY_APPLICATION_BD_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'FACILITY_APPLICATION_FINANCE_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 4, requiredFunctionCode: 'FACILITY_APPLICATION_COMPLIANCE_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('INVESTMENT_MEMO_CIO_APPROVAL_STANDARD', {
        workflowTypeCode: 'INVESTMENT_MEMO_CIO_APPROVAL',
        scenario: 'BELOW_THRESHOLD',
        initiatorFunctionCode: 'COUNTERPARTY_ONBOARDING',
        requiredChecksNote: 'Invariant 46(c): below the governed DoA threshold, the chain completes at CIO -- PM validation then CIO approval.',
        description: 'Investment memo approval, below the governed DoA threshold',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'INVESTMENT_MEMO_PM_VALIDATION', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'INVESTMENT_MEMO_CIO_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('INVESTMENT_MEMO_CIO_APPROVAL_AT_OR_ABOVE_THRESHOLD', {
        workflowTypeCode: 'INVESTMENT_MEMO_CIO_APPROVAL',
        scenario: 'AT_OR_ABOVE_THRESHOLD',
        initiatorFunctionCode: 'COUNTERPARTY_ONBOARDING',
        requiredChecksNote: 'Invariant 46(c): at/above the governed DoA threshold, Investment Committee (icResolutionRef required) and MD/CEO are mandatory in addition to PM validation and CIO.',
        description: 'Investment memo approval, at/above the governed DoA threshold',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'INVESTMENT_MEMO_PM_VALIDATION', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'INVESTMENT_MEMO_CIO_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'INVESTMENT_COMMITTEE_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 4, requiredFunctionCode: 'INVESTMENT_MEMO_MD_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('INVESTMENT_MEMO_THRESHOLD_APPROVAL_STANDARD', {
        workflowTypeCode: 'INVESTMENT_MEMO_THRESHOLD_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT',
        requiredChecksNote: 'Invariant 46(g)(i): thresholds are governed config, adjustable through the standing approval workflow.',
        description: 'Investment memo DoA threshold approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'INVESTMENT_MEMO_THRESHOLD_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('STRATEGY_LAYER_APPROVAL_STANDARD', {
        workflowTypeCode: 'STRATEGY_LAYER_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'STRATEGY_LAYER',
        requiredChecksNote: 'Invariant 28(c): MD_CEO approval requires a boardResolutionRef (StrategyLayerService.approveStatement).',
        description: 'Strategy layer statement approval: SAU proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'STRATEGY_LAYER', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PETTY_CASH_REPLENISHMENT_APPROVAL_STANDARD', {
        workflowTypeCode: 'PETTY_CASH_REPLENISHMENT_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PETTY_CASH_MANAGEMENT',
        requiredChecksNote: 'Invariant 50(a): no journal at claim approval -- only at replenishment disbursement (step 3), mirroring the requisition/encumbrance principle.',
        description: 'Petty cash replenishment claim: SAU IC verifies, DoA approves, Finance disburses',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'BUDGET_CONTROL_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'BUDGET_MANAGEMENT', requiresAmountLimitCheck: true },
        { stepOrder: 3, requiredFunctionCode: 'PETTY_CASH_DISBURSEMENT', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('LETTERHEAD_TEMPLATE_APPROVAL_STANDARD', {
        workflowTypeCode: 'LETTERHEAD_TEMPLATE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'LETTERHEAD_TEMPLATE_MANAGEMENT',
        description: 'Corporate letterhead template version approval: CS proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'LETTERHEAD_TEMPLATE_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('CERTIFICATE_TEMPLATE_APPROVAL_STANDARD', {
        workflowTypeCode: 'CERTIFICATE_TEMPLATE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'CERTIFICATE_TEMPLATE_MANAGEMENT',
        description: 'Investment certificate template version approval: Compliance proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'CERTIFICATE_TEMPLATE_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('LETTER_TEMPLATE_APPROVAL_STANDARD', {
        workflowTypeCode: 'LETTER_TEMPLATE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'LETTER_TEMPLATE_MANAGEMENT',
        description: 'Letter template version approval: Compliance proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'LETTER_TEMPLATE_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('LETTER_ISSUANCE_APPROVAL_STANDARD', {
        workflowTypeCode: 'LETTER_ISSUANCE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'LETTER_ISSUANCE',
        description: 'Letter instance issuance approval: generator proposes the merge-filled letter, a different Compliance/MD_CEO user approves client-facing dispatch',
    }, [{ stepOrder: 1, requiredFunctionCode: 'LETTER_ISSUANCE', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PMS_STRATEGY_SPINE_APPROVAL_STANDARD', {
        workflowTypeCode: 'PMS_STRATEGY_SPINE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'STRATEGY_LAYER',
        requiredChecksNote: 'Invariant 51(c2): MD_CEO approval requires a boardResolutionRef, same gate as STRATEGY_LAYER_APPROVAL.',
        description: 'PMS strategy-spine pillar/objective approval: SAU proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'STRATEGY_LAYER', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('KPI_DEFINITION_APPROVAL_STANDARD', {
        workflowTypeCode: 'KPI_DEFINITION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'KPI_DEFINITION_MANAGEMENT',
        description: 'KPI definition approval: HR proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'KPI_DEFINITION_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('KPI_WEIGHT_MATRIX_APPROVAL_STANDARD', {
        workflowTypeCode: 'KPI_WEIGHT_MATRIX_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'KPI_WEIGHT_MATRIX',
        requiredChecksNote: 'CEO ruling 8-Jul-2026: MD_CEO approves KPI class-weighting matrix changes, no exceptions -- enforced structurally via KPI_WEIGHT_MATRIX APPROVE being MD_CEO-only.',
        description: 'KPI class-weighting matrix version approval: HR proposes, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'KPI_WEIGHT_MATRIX', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('EMOLUMENT_STRUCTURE_APPROVAL_STANDARD', {
        workflowTypeCode: 'EMOLUMENT_STRUCTURE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'EMOLUMENT_STRUCTURE_MANAGEMENT',
        requiredChecksNote: 'Invariant 37(e): maker!=checker on the FIN_ADMIN role — a different user must approve.',
        description: 'Emolument structure component approval: FIN_ADMIN proposes, a different FIN_ADMIN (or delegate) approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'EMOLUMENT_STRUCTURE_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('TALENT_RECOMMENDATION_APPROVAL_STANDARD', {
        workflowTypeCode: 'TALENT_RECOMMENDATION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'TALENT_MANAGEMENT',
        requiredChecksNote: 'Invariant 37(e): a welfare/reward recommendation for an employee — MD_CEO approval required.',
        description: 'Talent Management welfare/reward recommendation: HR recommends, MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'TALENT_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('MARKETING_RESOURCE_APPROVAL_STANDARD', {
        workflowTypeCode: 'MARKETING_RESOURCE_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'MARKETING_RESOURCE',
        requiredChecksNote: 'Invariant 28(b): a resource must be ACTIVE (approved) before MarketingService.initiateSend can reference it.',
        description: 'Marketing resource approval: BD uploads, Compliance approves for external use',
    }, [{ stepOrder: 1, requiredFunctionCode: 'MARKETING_RESOURCE', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('MARKETING_SEND_APPROVAL_STANDARD', {
        workflowTypeCode: 'MARKETING_SEND_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'MARKETING_SEND',
        requiredChecksNote: 'Invariant 28(b): approval IS the dispatch trigger — MarketingService.approveSend logs one client_communication row per subscribed recipient in the SAME transaction as the SENT flip.',
        description: 'Marketing mass-mail send approval: BD initiates, Compliance approves (= dispatches)',
    }, [{ stepOrder: 1, requiredFunctionCode: 'MARKETING_SEND', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('JOURNAL_POSTING_STANDARD', {
        workflowTypeCode: 'JOURNAL_POSTING',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'JOURNAL_ENTRIES',
        requiredChecksNote: 'Balance check (Σdebits=Σcredits) performed in LedgerService.requestJournalPosting before this workflow is initiated; the closed-period check fires as a DB trigger on the POSTED transition itself.',
        description: 'Phase 2: journal entry posting approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'JOURNAL_ENTRIES', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SUBSCRIPTION_APPROVAL_STANDARD', {
        workflowTypeCode: 'SUBSCRIPTION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'CAPITAL_PLACEMENT',
        requiredChecksNote: 'KYC/product-active/Shariah-approved/PSR-on-pool checks performed in SubscriptionService.initiateSubscription before this workflow is initiated; Stage-1 deposit cap enforced downstream in LedgerService.createTxn at approval time.',
        description: 'Invariant 42(a): investor capital becomes a live ProductAccount holding -- maker drafts, checker approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'CAPITAL_PLACEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('REDEMPTION_APPROVAL_STANDARD', {
        workflowTypeCode: 'REDEMPTION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'REDEMPTION_PROCESSING',
        requiredChecksNote: 'Stage-1 Express no-redemption gate enforced in LedgerService.createTxn (invariant 27a) -- authoritative, checked again at approval time.',
        description: 'Invariant 42(a): mirrors SUBSCRIPTION_APPROVAL_STANDARD for the redemption side',
    }, [{ stepOrder: 1, requiredFunctionCode: 'REDEMPTION_PROCESSING', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ND_MANDATE_ACTIVATION_STANDARD', {
        workflowTypeCode: 'ND_MANDATE_ACTIVATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ND_MANDATE_INITIATION',
        requiredChecksNote: 'Wakalah surplus_treatment election validated in NdMandateEngineService.activateMandate itself (§E4) before this step can succeed.',
        description: 'Invariant 42(c): createMandate (DRAFT) then activateMandate (ACTIVE) -- separate initiator/approver capabilities, no same-user create+activate',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ND_MANDATE_ACTIVATION', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PRODUCT_SETUP_STANDARD', {
        workflowTypeCode: 'PRODUCT_SETUP',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PRODUCT_SETUP_INITIATION',
        requiredChecksNote: 'Invariant 60(b) (CHECK15): three-step chain supersedes the prior single-step PARAMETERS-gated shape -- PORT_MGR initiates, CIO reviews (step 1), MD_CEO gives final approval (step 2). Auto-provisioning (ledger entity + CoA template) runs only once BOTH steps are APPROVED, using the ORIGINAL INITIATOR\'s own LEDGER_ENTITY_SETUP INITIATE grant -- not either approver\'s.',
        description: 'Invariant 60(b): product-factory create (DRAFT) -> CIO review -> MD_CEO approve, applying to ALL THREE factory classes (UNIT_NAV/PSR_WATERFALL/MANDATE per invariant 60c). Shariah approval (ProductService.approveProductShariah) and governed-parameters approval (ParameterService.setPoolParameters) remain SEPARATE, later gates -- both checked at activateProduct before DRAFT->ACTIVE.',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PRODUCT_SETUP_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'PRODUCT_SETUP_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('PROSPECTUS_SHEET_APPROVAL_STANDARD', {
        workflowTypeCode: 'PROSPECTUS_SHEET_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PROSPECTUS_SHEET_INITIATION',
        requiredChecksNote: 'Invariant 70(a)/(b) (CHECK24): three-step chain, exact shape of PRODUCT_SETUP_STANDARD -- PORT_MGR proposes (DRAFT, freely re-editable), CIO reviews (step 1), MD_CEO gives final approval (step 2). Reaching APPROVED on step 2 LOCKS the sheet version immutably (ProspectusSheetService) and provisions the accounting spine + access map -- any change thereafter is a NEW version through this same chain, never an edit.',
        description: 'Invariant 70(b): Unified Prospectus Parameter Sheet propose -> CIO review -> MD_CEO approve -> LOCKED. Engine enforcement (min sub/redemption, authorized-units cap, lock-in, distributable-% floor, surplus-tier election) reads only the LOCKED APPROVED version.',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PROSPECTUS_SHEET_REVIEW', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'PROSPECTUS_SHEET_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('PROSPECTUS_SHEET_AMENDMENT_STANDARD', {
        workflowTypeCode: 'PROSPECTUS_SHEET_AMENDMENT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PROSPECTUS_AMENDMENT_PROPOSAL',
        requiredChecksNote: 'Invariant 70(g) (CHECK24): FOUR-hand chain for amending an EXISTING, already-approved product\'s prospectus sheet -- deliberately heavier than the new-sheet chain (PROSPECTUS_SHEET_APPROVAL_STANDARD) above. CIO proposes -> SSB sign-off (step 1) -> Compliance sign-off (step 2) -> MD_CEO approval (step 3). On MD approval the new sheet version becomes the product\'s approved structure EFFECTIVE FROM THAT APPROVAL DATE FORWARD ONLY -- prior transactions, issued certificates, and completed distributions remain governed by the version in force at their date (never retroactive, same effective-dating discipline as the tax tables).',
        description: 'Invariant 70(g): CIO proposal -> SSB resolution -> Compliance resolution -> MD_CEO approval, each recorded as a resolution on the amendment; amendment history renders on the product record and in the generated register.',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'PROSPECTUS_AMENDMENT_SSB_SIGNOFF', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'PROSPECTUS_AMENDMENT_COMPLIANCE_SIGNOFF', requiresAmountLimitCheck: false },
        { stepOrder: 3, requiredFunctionCode: 'PROSPECTUS_AMENDMENT_APPROVAL', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('INVESTOR_BANK_ACCOUNT_CHANGE_STANDARD', {
        workflowTypeCode: 'INVESTOR_BANK_ACCOUNT_CHANGE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTOR_BANK_ACCOUNT_CHANGE_INITIATION',
        requiredChecksNote: 'Document-evidence checklist (RequiredDocumentConfig, applicationType INVESTOR_BANK_ACCOUNT_CHANGE) is enforced in InvestorBankAccountChangeService.submitChange before this workflow is initiated at all.',
        description: 'Invariant 51(a-i): step 1 (BANK_ACCOUNT_CHANGE_APPROVAL) checks the paperwork; step 2 (BANK_ACCOUNT_CHANGE_REVERIFICATION) independently confirms with the client -- APPROVED at step 2 starts the cooling-off window.',
    }, [
        { stepOrder: 1, requiredFunctionCode: 'BANK_ACCOUNT_CHANGE_APPROVAL', requiresAmountLimitCheck: false },
        { stepOrder: 2, requiredFunctionCode: 'BANK_ACCOUNT_CHANGE_REVERIFICATION', requiresAmountLimitCheck: false },
    ]);
    await upsertApprovalRule('EMPLOYEE_ONBOARDING_STANDARD', {
        workflowTypeCode: 'EMPLOYEE_ONBOARDING',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'EMPLOYEE_LIFECYCLE_INITIATION',
        description: 'Invariant 50(b): HR proposes a new hire -- MD_CEO approval creates the Employee row.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'EMPLOYEE_LIFECYCLE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('EMPLOYEE_OFFBOARDING_STANDARD', {
        workflowTypeCode: 'EMPLOYEE_OFFBOARDING',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'EMPLOYEE_LIFECYCLE_INITIATION',
        description: 'Invariant 50(b): HR proposes an offboarding -- MD_CEO approval flips Employee.status TERMINATED and deactivates the linked login.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'EMPLOYEE_LIFECYCLE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('EMPLOYEE_INCENTIVE_PCT_CHANGE_STANDARD', {
        workflowTypeCode: 'EMPLOYEE_INCENTIVE_PCT_CHANGE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'EMPLOYEE_LIFECYCLE_INITIATION',
        requiredChecksNote: 'EmployeeLifecycleService.decideIncentivePctChange refuses the approval outright if the employee has an in-flight (not yet INCENTIVE_COMPUTED) PMS cycle -- invariant 50(b) addendum, "never retroactive."',
        description: 'Invariant 50(b) addendum (CEO, 8-Jul-2026): HR proposes a new performanceIncentivePct -- MD_CEO approval applies it, or the approval fails loud if a cycle is already in flight.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'EMPLOYEE_INCENTIVE_PCT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('INVESTOR_CONTACT_KYC_AMENDMENT_STANDARD', {
        workflowTypeCode: 'INVESTOR_CONTACT_KYC_AMENDMENT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTOR_CONTACT_KYC_AMENDMENT_INITIATION',
        description: 'Invariant 51(a-ii): BD proposes a post-onboarding contact/KYC update -- Compliance acknowledgment applies only the fields actually proposed.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'INVESTOR_CONTACT_KYC_AMENDMENT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('INVESTOR_EXIT_STANDARD', {
        workflowTypeCode: 'INVESTOR_EXIT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTOR_EXIT_INITIATION',
        description: 'Invariant 51(b-v) (CHECK13): BD proposes a maturity-transition or final-exit -- Compliance approves, flipping Investor.fundStatus.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'INVESTOR_EXIT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('COUNTERPARTY_WRITE_OFF_STANDARD', {
        workflowTypeCode: 'COUNTERPARTY_WRITE_OFF',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'COUNTERPARTY_WRITE_OFF_INITIATION',
        description: 'Invariant 51(b-vi) (CHECK13): Portfolio proposes a counterparty write-off -- FIN_ADMIN approves, firing the IMPAIRMENT_CHARGE event journal.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'COUNTERPARTY_WRITE_OFF_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('INVESTOR_MANDATE_AMENDMENT_STANDARD', {
        workflowTypeCode: 'INVESTOR_MANDATE_AMENDMENT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'INVESTOR_MANDATE_AMENDMENT_INITIATION',
        description: 'Invariant 51(c) (CHECK13): BD proposes a mandate amendment -- Portfolio Management approves.',
    }, [{ stepOrder: 1, requiredFunctionCode: 'INVESTOR_MANDATE_AMENDMENT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ACCOUNTING_PERIOD_CLOSE_STANDARD', {
        workflowTypeCode: 'ACCOUNTING_PERIOD_CLOSE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ACCOUNTING_PERIOD_CLOSE',
        requiredChecksNote: 'The substantive monthly checklist (engine runs, bank rec, inter-entity reconciliation, receivables aging, TB/P&L/BS) is Phase 3+ engine-dependent and not gated here — this is the close/lock mechanism only.',
        description: 'Phase 2: accounting period close approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ACCOUNTING_PERIOD_CLOSE', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('BUDGET_REVIEW_PACK_CIRCULATION_STANDARD', {
        workflowTypeCode: 'BUDGET_REVIEW_PACK_CIRCULATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'BUDGET_REVIEW_PACK',
        requiredChecksNote: 'Maker generates the pack (report_run, immutable); a different reviewer approves it for circulation.',
        description: 'Budget Spec §5b: Budget Review Pack circulation approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'BUDGET_REVIEW_PACK', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SCHEDULER_JOB_PAUSE_STANDARD', {
        workflowTypeCode: 'SCHEDULER_JOB_PAUSE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SCHEDULER_OPERATIONS',
        requiredChecksNote: 'Only applies to consequential jobs (HF_DAILY_ACCRUAL, KRI_DAILY_BATCH, AUDIT_INTEGRITY_NIGHTLY) — non-consequential jobs pause unilaterally via SchedulerService.pauseDirect and never reach this workflow.',
        description: 'Invariant 32: DoA-gated pause of a consequential scheduled job',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SCHEDULER_PAUSE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SCHEDULER_JOB_RETIREMENT_STANDARD', {
        workflowTypeCode: 'SCHEDULER_JOB_RETIREMENT',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SCHEDULER_OPERATIONS',
        requiredChecksNote: 'Only applies to consequential jobs — non-consequential jobs retire directly via SchedulerService.retireJob and never reach this workflow.',
        description: 'Invariant 37(f): DoA-gated retirement of a consequential scheduled job',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SCHEDULER_PAUSE_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PROCUREMENT_PAYMENT_BATCH_STANDARD', {
        workflowTypeCode: 'PROCUREMENT_PAYMENT_BATCH',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PROCUREMENT_OPERATIONS',
        requiredChecksNote: 'Batch total must equal the sum of its MATCHED vendor_invoice lines; each invoice must already be MATCHED (3-way match passed) before it can join a batch.',
        description: 'Budget Spec §4: payment batch approval — Corporate Services drafts, FIN_ADMIN/MD_CEO approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PROCUREMENT_PAYMENT_APPROVAL', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('AI_CAPABILITY_FLAG_TOGGLE_STANDARD', {
        workflowTypeCode: 'AI_CAPABILITY_FLAG_TOGGLE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'AI_CAPABILITY_FLAG_MANAGEMENT',
        requiredChecksNote: 'Flips exactly one ai_capability_flag row; the separate ai_kill_switch is unilateral/ICT-executable and does NOT go through this workflow.',
        description: 'Invariant 33(f): DoA-governed AI capability flag flip',
    }, [{ stepOrder: 1, requiredFunctionCode: 'AI_CAPABILITY_FLAG_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('AI_PROVIDER_CREDENTIAL_CONFIG_STANDARD', {
        workflowTypeCode: 'AI_PROVIDER_CREDENTIAL_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'AI_CAPABILITY_FLAG_MANAGEMENT',
        requiredChecksNote: 'Applies pending* staged values onto the live AiProviderCredential row on approval -- isActive only ever flips here, never on propose (invariant 33e/73b: flags stay OFF until explicitly activated).',
        description: 'Invariant 73(b) (CHECK27): DoA-governed AI provider credential config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'AI_CAPABILITY_FLAG_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PAYMENT_GATEWAY_CONFIG_STANDARD', {
        workflowTypeCode: 'PAYMENT_GATEWAY_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PAYMENT_GATEWAY_POLICY',
        requiredChecksNote: 'Applies pending* staged values onto the live PaymentGatewayProvider/ProductCustodianAccount row on approval -- names the bank account real client money settles into.',
        description: 'Invariant 55(a): DoA-governed payment gateway provider/custodian-account config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PAYMENT_GATEWAY_POLICY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PAYMENT_GATEWAY_INFLOW_DECISION_STANDARD', {
        workflowTypeCode: 'PAYMENT_GATEWAY_INFLOW_DECISION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PAYMENT_GATEWAY_SUSPENSE',
        requiredChecksNote: 'REJECT flips the inflow to REJECTED; REVERSAL initiates a governed redemption request (still requires its OWN separate PORT_MGR checker before the holding is actually reversed) -- decisionType on the inflow row tells approveInflowDecision() which branch to execute.',
        description: 'Invariant 55(a): second-officer approval for a suspense-queue reject/reversal decision',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PAYMENT_GATEWAY_SUSPENSE', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ATTENDANCE_GATEWAY_CONFIG_STANDARD', {
        workflowTypeCode: 'ATTENDANCE_GATEWAY_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ATTENDANCE_GATEWAY_POLICY',
        requiredChecksNote: 'Applies pending* staged values onto the live AttendanceProvider row on approval -- names the OAuth2 connection the whole attendance pipeline trusts.',
        description: 'Invariant 40/63(b): DoA-governed AttendanceGateway provider config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ATTENDANCE_GATEWAY_POLICY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('CALENDAR_GATEWAY_CONFIG_STANDARD', {
        workflowTypeCode: 'CALENDAR_GATEWAY_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'CALENDAR_GATEWAY_POLICY',
        requiredChecksNote: 'Applies pending* staged values onto the live CalendarGatewayProvider row on approval -- names the Microsoft Graph/Google OAuth2 app registration every staff member\'s per-user calendar consent trusts.',
        description: 'Invariant 73(b): DoA-governed CalendarGateway provider config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'CALENDAR_GATEWAY_POLICY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SCREENING_LIST_SOURCE_CONFIG_STANDARD', {
        workflowTypeCode: 'SCREENING_LIST_SOURCE_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SCREENING_GATEWAY_POLICY',
        requiredChecksNote: 'Applies pending* staged values onto the live ScreeningListSource row on approval -- names the download URL/token/active flag the sanctions stage gate trusts.',
        description: 'Invariant 72(a)/(c): DoA-governed Screening Gateway list-source config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SCREENING_GATEWAY_POLICY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SCREENING_COMMERCIAL_PROVIDER_CONFIG_STANDARD', {
        workflowTypeCode: 'SCREENING_COMMERCIAL_PROVIDER_CONFIG',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SCREENING_GATEWAY_POLICY',
        requiredChecksNote: 'Applies pending* staged values onto the live CommercialScreeningProvider row on approval.',
        description: 'Invariant 72(c): DoA-governed commercial screening provider slot config change',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SCREENING_GATEWAY_POLICY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('SCREENING_HIT_ADJUDICATION_STANDARD', {
        workflowTypeCode: 'SCREENING_HIT_ADJUDICATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'SCREENING_PERFORM',
        requiredChecksNote: 'Approval copies the proposed outcome + mandatory written rationale onto the live ScreeningHit row -- TRUE_MATCH keeps the subject blocked, FALSE_POSITIVE clears this hit only (never the whole gate silently).',
        description: 'Invariant 72(b)/(e): DoA-governed sanctions screening hit adjudication, adjudicator != initiator',
    }, [{ stepOrder: 1, requiredFunctionCode: 'SCREENING_PERFORM', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('STAKEHOLDER_REPORT_APPROVAL_STANDARD', {
        workflowTypeCode: 'STAKEHOLDER_REPORT_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'STAKEHOLDER_REPORT_MANAGEMENT',
        requiredChecksNote: 'Any ai_drafted_narrative is AI_DRAFTED-tagged and reviewed as part of this same approval — no separate AI-specific sign-off step.',
        description: 'Invariant 24: stakeholder report approval for circulation — maker generates, a different authority approves',
    }, [{ stepOrder: 1, requiredFunctionCode: 'STAKEHOLDER_REPORT_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('EMPLOYEE_PERSONAL_RECORD_CHANGE_STANDARD', {
        workflowTypeCode: 'EMPLOYEE_PERSONAL_RECORD_CHANGE',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PMS_SELF_SCORE',
        requiredChecksNote: 'Invariant 29(a): marital status/address/next-of-kin changes carry payroll/benefits implications — HR acknowledgment is the control, not a rubber stamp.',
        description: 'Invariant 29(a): gated personal-record change — employee requests, HR acknowledges',
    }, [{ stepOrder: 1, requiredFunctionCode: 'EMPLOYEE_PERSONAL_RECORDS', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ZAKAT_ITEM_VALIDATION_STANDARD', {
        workflowTypeCode: 'ZAKAT_ITEM_VALIDATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ZAKAT_ADVISORY',
        requiredChecksNote: 'Invariant 26(c), same shape as WM_CLAIM_VALIDATION: a DIFFERENT authorized advisor verifies — the approval record IS the DECLARED->VERIFIED flip.',
        description: 'Zakat schedule item claim validation: advisor declares an EXTERNAL item, a different advisor verifies',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ZAKAT_ADVISORY', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('ZAKAT_ASSESSMENT_CERTIFICATION_STANDARD', {
        workflowTypeCode: 'ZAKAT_ASSESSMENT_CERTIFICATION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'ZAKAT_ADVISORY',
        requiredChecksNote: 'Invariant 26(c): "transmission to Shariah review + certification (SSB workflow, certificate on the assessment report_run)" — the approval record IS the certificate.',
        description: 'Zakat assessment certification: advisor submits the completed assessment, SSB certifies',
    }, [{ stepOrder: 1, requiredFunctionCode: 'ZAKAT_CERTIFICATION', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('COUNTERPARTY_RESTRUCTURE_EXCEPTION_STANDARD', {
        workflowTypeCode: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'COUNTERPARTY_RESTRUCTURE_REQUEST',
        requiredChecksNote: 'Invariant 25(4): "exceeding requires the exception workflow, not an override" — a DB-enforced partial unique index blocks a second APPROVED restructure per obligation; this is the only path past it.',
        description: 'Counterparty restructure exception: exceeding the 1-restructure/1-month cap requires MD_CEO approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'COUNTERPARTY_RESTRUCTURE_EXCEPTION', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('TAX_RATE_VERSION_APPROVAL_STANDARD', {
        workflowTypeCode: 'TAX_RATE_VERSION_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'TAX_CONFIGURATION_MANAGEMENT',
        requiredChecksNote: 'Never retroactive: approving supersedes the prior ACTIVE version of the same taxType in a transaction, but every already-approved batch/invoice keeps resolving against the version effective on ITS OWN transaction date.',
        description: 'Invariant 65(c): per-tax (WHT/VAT/Stamp Duty) rate version approval',
    }, [{ stepOrder: 1, requiredFunctionCode: 'TAX_CONFIGURATION_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('TAX_REMITTANCE_BATCH_APPROVAL_STANDARD', {
        workflowTypeCode: 'TAX_REMITTANCE_BATCH_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'TAX_REMITTANCE_MANAGEMENT',
        requiredChecksNote: 'Approval auto-generates the TAX_REMITTANCE_INSTRUCTION letter (honest park if the [PENDING WORDING] template is not yet ACTIVE -- batch stays APPROVED, Finance retries once wording is approved).',
        description: 'Invariant 65(c)(iii): tax remittance batch approval, per tax type and authority',
    }, [{ stepOrder: 1, requiredFunctionCode: 'TAX_REMITTANCE_MANAGEMENT', requiresAmountLimitCheck: false }]);
    await upsertApprovalRule('PAYOUT_BATCH_APPROVAL_STANDARD', {
        workflowTypeCode: 'PAYOUT_BATCH_APPROVAL',
        scenario: 'STANDARD',
        initiatorFunctionCode: 'PAYOUT_COMPILATION',
        requiredChecksNote: 'The approved line list is immutable -- any change is a new compilation, never an edit to an approved batch. Approval auto-generates the BANK_INSTRUCTION letter (honest park if the [PENDING WORDING] template is not yet ACTIVE).',
        description: 'Invariant 65(b): payout compilation batch approval -- amount-tiered by batch total',
    }, [{ stepOrder: 1, requiredFunctionCode: 'PAYOUT_COMPILATION', requiresAmountLimitCheck: true }]);
    const existingMatrixV1 = await prisma.riskAppetiteMatrixVersion.findUnique({
        where: { version: 1 },
    });
    if (!existingMatrixV1) {
        const RISK_APPETITE_CATEGORIES = [
            { riskCategory: 'Strategic Risk', appetiteStatement: 'Strategic priorities shall be based on rigorous macro-economic analysis', appetiteLevel: 'Medium', direction: 'HIGHER_BETTER', escalationOwner: 'CEO' },
            { riskCategory: 'Credit — Single Counterparty', appetiteStatement: 'Credit exposures managed through diversification', appetiteLevel: 'Low', direction: 'LOWER_BETTER', escalationOwner: 'Head of Risk' },
            { riskCategory: 'Credit — Overdue', appetiteStatement: 'Zero appetite for unmanaged defaults', appetiteLevel: 'Low', direction: 'LOWER_BETTER', escalationOwner: 'CEO' },
            { riskCategory: 'Treasury — Capital Adequacy', appetiteStatement: 'Sufficient capital maintained at all times — zero breach tolerance', appetiteLevel: 'Zero Breach', direction: 'HIGHER_BETTER', escalationOwner: 'CEO + Board' },
            { riskCategory: 'Treasury — Liquidity Runway', appetiteStatement: 'Sufficient liquidity to maintain operations at all times', appetiteLevel: 'Low', direction: 'HIGHER_BETTER', escalationOwner: 'CEO' },
            { riskCategory: 'Treasury — LCR', appetiteStatement: 'Liquid assets must cover 30-day stressed outflows', appetiteLevel: 'Low', direction: 'HIGHER_BETTER', escalationOwner: 'CFO' },
            { riskCategory: 'Compliance — Regulatory', appetiteStatement: 'Zero appetite for regulatory breaches', appetiteLevel: 'Zero', direction: 'LOWER_BETTER', isZeroTolerance: true, escalationOwner: 'CEO + RAC' },
            { riskCategory: 'Compliance — Shariah', appetiteStatement: 'Zero appetite for Shariah non-compliance', appetiteLevel: 'Zero', direction: 'LOWER_BETTER', isZeroTolerance: true, escalationOwner: 'CEO + SSB' },
            { riskCategory: 'Operational Risk', appetiteStatement: 'Losses controlled to avoid material damage', appetiteLevel: 'Low', direction: 'LOWER_BETTER', escalationOwner: 'Head of Risk' },
            { riskCategory: 'Investment — Concentration', appetiteStatement: 'Portfolio concentration managed through diversification', appetiteLevel: 'Low', direction: 'LOWER_BETTER', escalationOwner: 'Portfolio Manager' },
            { riskCategory: 'Revenue', appetiteStatement: 'Revenue growth shall not compromise risk appetite', appetiteLevel: 'Medium', direction: 'HIGHER_BETTER', escalationOwner: 'CEO + CFO' },
            { riskCategory: 'Investment — Severe Stress Loss', appetiteStatement: 'Portfolio losses under severe stress scenario shall not threaten capital adequacy', appetiteLevel: 'Low', direction: 'LOWER_BETTER', escalationOwner: 'Portfolio Manager' },
            { riskCategory: 'Credit — DPD Escalation', direction: 'LOWER_BETTER', escalationOwner: 'Head of Risk' },
        ];
        const matrixV1 = await prisma.riskAppetiteMatrixVersion.create({
            data: { version: 1, status: 'DRAFT' },
        });
        for (const [i, cat] of RISK_APPETITE_CATEGORIES.entries()) {
            await prisma.riskAppetiteCategory.create({
                data: {
                    matrixVersionId: matrixV1.id,
                    sortOrder: i + 1,
                    riskCategory: cat.riskCategory,
                    appetiteStatement: cat.appetiteStatement,
                    appetiteLevel: cat.appetiteLevel,
                    direction: cat.direction,
                    isZeroTolerance: cat.isZeroTolerance ?? false,
                    escalationOwner: cat.escalationOwner,
                },
            });
        }
        console.log(`Seeded risk_appetite_matrix_version 1 (DRAFT) with ${RISK_APPETITE_CATEGORIES.length} categories — numeric thresholds NULL, awaiting Board activation (AMD-12).`);
    }
    const existingRiskRegister = await prisma.riskRegisterEntry.findFirst();
    if (!existingRiskRegister) {
        const RISK_REGISTER_ENTRIES = [
            { riskCategory: 'Strategic', description: 'Current and prospective risk to earnings or net worth arising from adverse business decisions, improper implementation of decisions', riskAppetiteStatement: 'Business strategic initiatives and priorities must be based on rigorous and credible macro-economic analysis and stakeholder engagement.' },
            { riskCategory: 'Strategic', subCategory: 'Shariah Compliance Risk (non-flexibility of Islamic Finance contracts to respond to market conditions such as hyper-inflation, currency devaluation)', inherentRiskRating: 'High', residualRiskRating: 'Low' },
            { riskCategory: 'Strategic', subCategory: 'Market Risk (unemployment, inadequate infrastructure, restricted market access, security, reduced labor productivity, suboptimal capacity utilization, petrol subsidy removal, hyper inflation, currency devaluation)', inherentRiskRating: 'High', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Strategic', subCategory: 'Competition Risk (diversified products and services from competitors that captures a comprehensive value chain service provision)', inherentRiskRating: 'Medium', residualRiskRating: 'Low' },
            { riskCategory: 'Credit Risk', description: 'Potential for loss due to failure of a counterparty to meet its obligations to pay the company.', riskAppetiteStatement: 'Credit exposures and limits must be managed through the principle of diversification across sectors, industries, client segments and products.' },
            { riskCategory: 'Credit Risk', subCategory: 'Credit Concentration (risk of material loss arising from sub-optimally diversified exposures; sizeable single name exposure, high correlation across sectors, products, segments)', inherentRiskRating: 'High', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Credit Risk', subCategory: 'Counterparty', residualRiskRating: 'Medium (to be tabled at Board Risk Committee for approval)' },
            { riskCategory: 'Credit Risk', subCategory: 'Collateral', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Credit Risk', subCategory: 'Credit Approval', residualRiskRating: 'Low' },
            { riskCategory: 'Treasury', description: 'Potential for insufficient Capital, liquidity, or funding to support our operations, the risk of reductions in earnings or value from movements in interest rates impacting banking book items.', riskAppetiteStatement: 'Sufficient Capital, Liquidity and Funding must be held to maintain operations at all times.' },
            { riskCategory: 'Treasury', subCategory: 'Capital (insufficient level, composition or distribution of capital, own funds and eligible liabilities to support business activities under normal environments as well as stressed conditions)', inherentRiskRating: 'High', residualRiskRating: 'Low' },
            { riskCategory: 'Treasury', subCategory: 'Liquidity & Funding (insufficient stable or diverse sources of funding to meet contractual and contingent obligations as they fall due)' },
            { riskCategory: 'Treasury', subCategory: 'Interest Rate Risk in the Banking Book (reduction in earnings or economic value due to movements in interest rates on banking book non-traded assets/liabilities)' },
            { riskCategory: 'Compliance', description: 'Potential for penalties/loss to the company and an adverse impact to clients, stakeholders or the market, through a failure on our part to comply with laws and regulations', riskAppetiteStatement: 'We maintain zero appetite for breaches in laws and regulations whilst recognizing that whilst incidents are unwanted it should not be due to negligence or misconduct.' },
            { riskCategory: 'Compliance', subCategory: 'Regulatory Non-Compliance', inherentRiskRating: 'Medium', residualRiskRating: 'Low' },
            { riskCategory: 'Compliance', subCategory: 'Financial Crime Compliance (potential for legal or regulatory penalties, financial loss or reputational damage from failure to comply with laws on international sanctions, AML and anti-bribery & corruption/fraud)', inherentRiskRating: 'High' },
            { riskCategory: 'Operational', description: 'Potential for loss due to inadequate or failed internal processes, technology events, human error or from the impact of external events (including legal risks)', riskAppetiteStatement: 'Operational Risks must be controlled to ensure that losses do not cause material damage to the organization.' },
            { riskCategory: 'Operational', subCategory: 'Execution Capability (Transaction Processing / Product Management)', inherentRiskRating: 'Medium', residualRiskRating: 'Low' },
            { riskCategory: 'Operational', subCategory: 'People Management', inherentRiskRating: 'Medium', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Operational', subCategory: 'Governance (delegation of authority from the board; corporate administration)', inherentRiskRating: 'Medium', residualRiskRating: 'Low' },
            { riskCategory: 'Operational', subCategory: 'Legal (difficulty in enforcing the company\'s contractual rights)', inherentRiskRating: 'High', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Operational', subCategory: 'Technology Risk (software, hardware, network failure)', inherentRiskRating: 'Medium', residualRiskRating: 'Medium (Board approval required)' },
            { riskCategory: 'Operational', subCategory: 'Reporting Obligations (financial books and records, financial regulatory reporting, tax)', inherentRiskRating: 'Medium' },
            { riskCategory: 'Information & Cyber Security', description: 'Risk to assets, operations, and individuals due to the potential for unauthorised access, use, disclosure, disruption, modification, or destruction of information assets and/or information systems.' },
            { riskCategory: 'Information & Cyber Security', subCategory: 'Data Privacy and Data Management', inherentRiskRating: 'Medium' },
        ];
        for (const [i, entry] of RISK_REGISTER_ENTRIES.entries()) {
            await prisma.riskRegisterEntry.create({
                data: { sortOrder: i + 1, status: 'DRAFT', ...entry },
            });
        }
        console.log(`Seeded ${RISK_REGISTER_ENTRIES.length} risk_register_entry rows (DRAFT) from the Corporate Strategy — Top Risk Review workbook.`);
    }
    const EVENT_JOURNAL_CONFIG = [
        { eventType: 'CAPITAL_PLACEMENT_RECEIVED', jeReferencePattern: 'JE-PLC-{investor_id}-{date}', drAccountCode: '1000', drAccountName: 'Cash', crAccountCode: '3010', crAccountName: 'Investor Capital', triggerDescription: 'placement_status -> FUNDS_RECEIVED' },
        { eventType: 'INVESTMENT_DEPLOYMENT', jeReferencePattern: 'JE-INV-{inv_id}-{date}', drAccountCode: '1100-1150', drAccountName: 'Investment Account', crAccountCode: '1000', crAccountName: 'Cash', triggerDescription: 'investment_status -> ACTIVE' },
        { eventType: 'DAILY_ACCRUAL_FIXED', jeReferencePattern: 'JE-ACC-{date}-{inv_id}', drAccountCode: '1200', drAccountName: 'Accrued Income', crAccountCode: '4000-4030', crAccountName: 'Income', triggerDescription: 'daily_batch completion' },
        { eventType: 'PROFIT_RECEIVED', jeReferencePattern: 'JE-RCPT-{inv_id}-{date}', drAccountCode: '1000', drAccountName: 'Cash + reverse 1200', crAccountCode: '4000-4030', crAccountName: 'Income', triggerDescription: 'income_received event' },
        { eventType: 'DISTRIBUTION_DECLARED', jeReferencePattern: 'JE-DIST-{dist_id}-{date}', drAccountCode: '3020', drAccountName: 'Retained Earnings', crAccountCode: '2060', crAccountName: 'Distribution Payable', triggerDescription: 'distribution_approved' },
        { eventType: 'DISTRIBUTION_PAID', jeReferencePattern: 'JE-PAY-{dist_id}-{investor_id}', drAccountCode: '2060', drAccountName: 'Distribution Payable', crAccountCode: '1000', crAccountName: 'Cash', triggerDescription: 'payment_processed' },
        { eventType: 'FEE_ACCRUAL', jeReferencePattern: 'JE-FEE-{fee_type}-{date}', drAccountCode: '5020-5060', drAccountName: 'Fee Expense', crAccountCode: '2010-2050', crAccountName: 'Fee Payable', triggerDescription: 'daily_batch completion' },
        { eventType: 'PRINCIPAL_RETURNED_AT_MATURITY', jeReferencePattern: 'JE-MAT-{placement_id}-{date}', drAccountCode: '3010', drAccountName: 'Investor Capital', crAccountCode: '2000', crAccountName: 'Redemption Payable', triggerDescription: 'maturity_date reached' },
        { eventType: 'EARLY_EXIT_PENALTY_TO_CHARITY', jeReferencePattern: 'JE-PEN-{placement_id}-{date}', drAccountCode: '1000', drAccountName: 'Cash (penalty portion)', crAccountCode: '2070', crAccountName: 'Charity Payable', triggerDescription: 'early_exit_approved' },
        { eventType: 'IMPAIRMENT_CHARGE', jeReferencePattern: 'JE-IMP-{inv_id}-{date}', drAccountCode: '6000', drAccountName: 'Impairment Expense', crAccountCode: '1100-1150', crAccountName: 'Investment Account', triggerDescription: 'impairment_assessment' },
        { eventType: 'LOSS_ALLOCATION', jeReferencePattern: 'JE-LOSS-{period}-{investor_id}', drAccountCode: '6000', drAccountName: 'Loss Expense', crAccountCode: '3010', crAccountName: 'Investor Capital', triggerDescription: 'loss_allocation_run' },
        { eventType: 'PURIFICATION_TO_CHARITY', jeReferencePattern: 'JE-PURIF-{date}', drAccountCode: '4000-4030', drAccountName: 'Income (reverse)', crAccountCode: '2070', crAccountName: 'Charity Payable', triggerDescription: 'purification_event' },
        { eventType: 'WM_ADVISORY_FEE', jeReferencePattern: 'JE-WMFEE-{investor_id}-{date}', drAccountCode: '1000-1999', drAccountName: 'Cash / Fee Receivable', crAccountCode: '4000-4030', crAccountName: 'Advisory Fee Income', triggerDescription: 'wm_advisory_fee_charged' },
        { eventType: 'PROCUREMENT_INVOICE_MATCHED', jeReferencePattern: 'JE-PO-{po_number}-{date}', drAccountCode: '5070-5099', drAccountName: 'Opex/Fixed Asset (per budget_line.class)', crAccountCode: '2080-2099', crAccountName: 'Accounts Payable', triggerDescription: '3-way match passed -> encumbrance CONVERTED' },
        { eventType: 'PROCUREMENT_PAYMENT_MADE', jeReferencePattern: 'JE-PAYBATCH-{batch_number}', drAccountCode: '2080-2099', drAccountName: 'Accounts Payable', crAccountCode: '1000', crAccountName: 'Cash', triggerDescription: 'payment_batch APPROVED' },
        { eventType: 'ASSET_DEPRECIATION_MONTHLY', jeReferencePattern: 'JE-DEPR-{asset_code}-{period}', drAccountCode: '6010-6020', drAccountName: 'Depreciation Expense', crAccountCode: '1160-1180', crAccountName: 'Accumulated Depreciation (contra-asset)', triggerDescription: 'ASSET_DEPRECIATION_MONTHLY scheduled job' },
    ];
    for (const [i, cfg] of EVENT_JOURNAL_CONFIG.entries()) {
        await prisma.eventJournalConfig.upsert({
            where: { eventType: cfg.eventType },
            create: { sortOrder: i + 1, ...cfg },
            update: { sortOrder: i + 1, ...cfg },
        });
    }
    console.log(`Seeded ${EVENT_JOURNAL_CONFIG.length} event_journal_config rows (SRS §4.7.1 event -> journal map).`);
    await prisma.strategyStatementTypeConfig.createMany({
        data: [
            { code: 'VISION', label: 'Vision', description: 'What the institution aims to become.', allowsMultipleActive: false, sortOrder: 1 },
            { code: 'MISSION', label: 'Mission', description: 'How the institution pursues its vision, day to day.', allowsMultipleActive: false, sortOrder: 2 },
            { code: 'THREE_YEAR_OUTLOOK', label: '3-Year Outlook', description: 'The Board-approved medium-term direction.', allowsMultipleActive: false, sortOrder: 3 },
            { code: 'CORE_VALUE', label: 'Core Value', description: 'A list of values (multiple concurrently-ACTIVE rows), not a single replaced statement.', allowsMultipleActive: true, sortOrder: 4 },
        ],
        skipDuplicates: true,
    });
    await prisma.strategicPillar.createMany({
        data: [
            { code: 'GROWTH', name: 'Growth', description: 'Expand AUM, revenue base, and market presence in a disciplined manner' },
            { code: 'DIVERSIFICATION', name: 'Diversification', description: 'Develop multiple revenue streams, products, and partnerships to reduce dependence on narrow income lines' },
            { code: 'SUSTAINABILITY', name: 'Sustainability', description: 'Build a resilient institution with sound governance, prudent risk management, and long-term viability' },
            { code: 'INNOVATION', name: 'Innovation', description: 'Encourage structured adaptation, ethical product development, and process improvement' },
            { code: 'OPERATIONAL_EXCELLENCE', name: 'Operational Excellence', description: 'Ensure all strategic pillars are delivered through discipline, coordination, timeliness, and process integrity' },
        ],
        skipDuplicates: true,
    });
    await prisma.strategicObjective.createMany({
        data: [
            { code: 'IMPROVING_PROFITABILITY', name: 'Improving Profitability' },
            { code: 'HIGH_BRAND_EQUITY', name: 'Achieving High Brand Equity' },
            { code: 'CUSTOMER_SATISFACTION', name: 'Achieving Customer Satisfaction' },
            { code: 'EXECUTION_EXCELLENCE', name: 'Driving Execution Excellence' },
        ],
        skipDuplicates: true,
    });
    const PILLAR_OBJECTIVE_MAP = [
        ['GROWTH', 'IMPROVING_PROFITABILITY'],
        ['DIVERSIFICATION', 'HIGH_BRAND_EQUITY'],
        ['DIVERSIFICATION', 'IMPROVING_PROFITABILITY'],
        ['SUSTAINABILITY', 'CUSTOMER_SATISFACTION'],
        ['SUSTAINABILITY', 'EXECUTION_EXCELLENCE'],
        ['INNOVATION', 'HIGH_BRAND_EQUITY'],
        ['INNOVATION', 'EXECUTION_EXCELLENCE'],
        ['OPERATIONAL_EXCELLENCE', 'EXECUTION_EXCELLENCE'],
    ];
    for (const [pillarCode, objectiveCode] of PILLAR_OBJECTIVE_MAP) {
        await prisma.pillarObjectiveMap.upsert({
            where: { pillarCode_objectiveCode: { pillarCode, objectiveCode } },
            create: { pillarCode, objectiveCode },
            update: {},
        });
    }
    const ORG_UNITS = [
        { code: 'BOARD', name: 'Board of Directors' },
        { code: 'EXEC_OFFICE', name: 'Office of the MD/CEO' },
        { code: 'PORTFOLIO', name: 'Portfolio' },
        { code: 'BD', name: 'Business Development' },
        { code: 'FINCON', name: 'Financial Control' },
        { code: 'CORP_SERVICES', name: 'Corporate Services' },
        { code: 'RISK', name: 'Risk & Audit Department', secondaryReportingLine: 'BOARD' },
        { code: 'TECHNOLOGY', name: 'ICT' },
        { code: 'SAU', name: 'Strategy & Accountability Unit' },
        { code: 'COSEC', name: 'Company Secretary & Legal', secondaryReportingLine: 'BOARD' },
        { code: 'SHARIAH', name: 'Shariah Advisory Unit' },
    ];
    for (const unit of ORG_UNITS) {
        await prisma.orgUnit.upsert({ where: { code: unit.code }, create: unit, update: unit });
    }
    await prisma.position.upsert({
        where: { title_orgUnitCode: { title: 'Internal Control Officer', orgUnitCode: 'SAU' } },
        create: { title: 'Internal Control Officer', orgUnitCode: 'SAU', cadre: 'Snr Associate 1', notch: 1 },
        update: {},
    });
    await prisma.position.upsert({
        where: { title_orgUnitCode: { title: 'Compliance Officer', orgUnitCode: 'SAU' } },
        create: { title: 'Compliance Officer', orgUnitCode: 'SAU', cadre: 'Snr Associate 1', notch: 1 },
        update: {},
    });
    const KRAS = [
        { code: 'PORT-KRA1', name: 'Risk-Adjusted Portfolio Yield Performance', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Asset-level yield vs approved projection', kpiClass: 'CORE', objectiveText: 'Ensure assigned assets deliver returns in line with approved risk-return assumptions', exampleActivity: 'Reviewed weekly income vs projection for Asset A' },
                { tier: 'SENIOR', kpiText: 'Segment yield stability & volatility', kpiClass: 'STRATEGIC', objectiveText: 'Reduce earnings volatility and improve predictability', exampleActivity: 'Analysed yield variance across portfolio segment' },
                { tier: 'CHIEF', kpiText: 'Portfolio-wide risk-adjusted yield', kpiClass: 'STRATEGIC', objectiveText: 'Achieve sustainable earnings without compromising capital or risk appetite', exampleActivity: 'Reviewed portfolio yield vs risk appetite and benchmark' },
            ] },
        { code: 'PORT-KRA2', name: 'Resolution & Recovery of Non-Performing Transactions', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Recovery follow-ups executed', kpiClass: 'CORE', objectiveText: 'Maintain consistent recovery engagement', exampleActivity: 'Followed up on agreed repayment milestone for NPT-03' },
                { tier: 'SENIOR', kpiText: 'Cash recovery vs book value', kpiClass: 'CORE', objectiveText: 'Improve cash realisation from NPTs', exampleActivity: 'Reviewed recovery cash inflows vs plan' },
                { tier: 'CHIEF', kpiText: 'NPT ratio reduction', kpiClass: 'STRATEGIC', objectiveText: 'Restore portfolio health and investor confidence', exampleActivity: 'Reviewed NPT reduction trend and escalation needs' },
            ] },
        { code: 'PORT-KRA3', name: 'Capital Preservation & Asset Quality', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Early-warning flags identified', kpiClass: 'CORE', objectiveText: 'Detect deterioration early', exampleActivity: 'Flagged declining DSCR for Asset B' },
                { tier: 'SENIOR', kpiText: 'Asset migration (performing -> stressed)', kpiClass: 'STRATEGIC', objectiveText: 'Prevent capital impairment', exampleActivity: 'Reviewed asset quality migration dashboard' },
                { tier: 'CHIEF', kpiText: 'Portfolio capital at risk', kpiClass: 'STRATEGIC', objectiveText: 'Protect principal across the portfolio', exampleActivity: 'Reviewed capital-at-risk exposure and mitigants' },
            ] },
        { code: 'PORT-KRA4', name: 'Turnaround Time for Deployment of Approved Funds', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Conditions precedent cleared', kpiClass: 'CORE', objectiveText: 'Remove operational bottlenecks post-approval', exampleActivity: 'Tracked outstanding CPs for approved Deal X' },
                { tier: 'SENIOR', kpiText: 'Approval-to-deployment cycle time', kpiClass: 'CORE', objectiveText: 'Reduce idle funds and income leakage', exampleActivity: 'Reviewed deployment pipeline delays' },
                { tier: 'CHIEF', kpiText: 'Deployment efficiency vs budget needs', kpiClass: 'STRATEGIC', objectiveText: 'Support liquidity and revenue targets', exampleActivity: 'Reviewed deployable pipeline vs budgeted needs' },
            ] },
        { code: 'PORT-KRA5', name: 'Accuracy & Robustness of Deal Structuring & Documentation', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Documentation completeness rate', kpiClass: 'CORE', objectiveText: 'Ensure enforceability and audit readiness', exampleActivity: 'Verified completeness of transaction documentation' },
                { tier: 'SENIOR', kpiText: 'Post-execution documentation exceptions', kpiClass: 'CORE', objectiveText: 'Minimise recovery and legal risks', exampleActivity: 'Resolved documentation gaps with advisers' },
                { tier: 'CHIEF', kpiText: 'Structural robustness of portfolio', kpiClass: 'STRATEGIC', objectiveText: 'Ensure all deals are enforceable under stress', exampleActivity: 'Reviewed structural resilience of portfolio deals' },
            ] },
        { code: 'PORT-KRA6', name: 'Adherence to Shariah-Compliant Structuring Protocols', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Pre-execution Shariah approvals obtained', kpiClass: 'CORE', objectiveText: 'Prevent Shariah non-compliance', exampleActivity: 'Prepared Shariah submission memo' },
                { tier: 'SENIOR', kpiText: 'Post-execution Shariah deviations', kpiClass: 'STRATEGIC', objectiveText: 'Maintain zero tolerance for breaches', exampleActivity: 'Reviewed compliance with Shariah rulings' },
                { tier: 'CHIEF', kpiText: 'Portfolio-wide Shariah integrity', kpiClass: 'STRATEGIC', objectiveText: 'Preserve credibility of Shariah mandate', exampleActivity: 'Reviewed Shariah compliance status with advisers' },
            ] },
        { code: 'PORT-KRA7', name: 'Portfolio Monitoring, Reporting & Early-Warning Effectiveness', orgUnit: 'PORTFOLIO', kpis: [
                { tier: 'JUNIOR', kpiText: 'Monitoring reports delivered on time', kpiClass: 'CORE', objectiveText: 'Maintain visibility on asset performance', exampleActivity: 'Prepared weekly asset monitoring report' },
                { tier: 'SENIOR', kpiText: 'Timeliness of intervention on red flags', kpiClass: 'STRATEGIC', objectiveText: 'Reduce surprise deteriorations', exampleActivity: 'Triggered engagement on early-warning indicator' },
                { tier: 'CHIEF', kpiText: 'Portfolio resilience & stress preparedness', kpiClass: 'STRATEGIC', objectiveText: 'Ensure portfolio can absorb shocks', exampleActivity: 'Reviewed early-warning trends and escalation actions' },
            ] },
        { code: 'BD-KRA1', name: 'Quality-Adjusted AUM Growth & Client Retention', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Qualified AUM mobilised', kpiClass: 'CORE', objectiveText: 'Mobilise funds that fit approved products and deployment capacity', exampleActivity: 'Engaged prospective client on Halal Fund mandate aligned to approved structure' },
                { tier: 'SENIOR', kpiText: 'Net AUM growth (new + repeat)', kpiClass: 'STRATEGIC', objectiveText: 'Drive sustainable AUM growth without increasing idle funds', exampleActivity: 'Reviewed repeat mandate opportunities with existing clients' },
                { tier: 'CHIEF', kpiText: 'Retained AUM ratio & growth mix', kpiClass: 'STRATEGIC', objectiveText: 'Build stable, long-term AUM base', exampleActivity: 'Reviewed AUM retention trends and escalation risks' },
            ] },
        { code: 'BD-KRA2', name: 'Mandate Suitability & AUM Quality Assurance', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Pre-onboarding mandate screening completed', kpiClass: 'CORE', objectiveText: 'Filter misaligned mandates early', exampleActivity: 'Completed mandate suitability checklist for Client X' },
                { tier: 'SENIOR', kpiText: '% of AUM passing Portfolio & Risk screening', kpiClass: 'CORE', objectiveText: 'Reduce onboarding of undeployable funds', exampleActivity: 'Reviewed mandate fit with Portfolio & Risk teams' },
                { tier: 'CHIEF', kpiText: 'Quality-adjusted AUM ratio', kpiClass: 'STRATEGIC', objectiveText: 'Align mobilisation with execution reality', exampleActivity: 'Reviewed AUM quality indicators vs deployment constraints' },
            ] },
        { code: 'BD-KRA3', name: 'Market Visibility, Thought Leadership & Brand Positioning', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Market engagements supported', kpiClass: 'SECONDARY', objectiveText: 'Support brand presence through field activities', exampleActivity: 'Supported industry event engagement logistics' },
                { tier: 'SENIOR', kpiText: 'Strategic visibility initiatives executed', kpiClass: 'STRATEGIC', objectiveText: 'Strengthen institutional credibility', exampleActivity: 'Coordinated speaking opportunity on Islamic finance' },
                { tier: 'CHIEF', kpiText: 'Brand positioning effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Position One17 as a trusted sector leader', exampleActivity: 'Reviewed thought-leadership pipeline and impact' },
            ] },
        { code: 'BD-KRA4', name: 'Strategic Stakeholder & Relationship Development', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Relationship follow-ups completed', kpiClass: 'CORE', objectiveText: 'Maintain continuity in stakeholder engagement', exampleActivity: 'Followed up with ecosystem partner post-meeting' },
                { tier: 'SENIOR', kpiText: 'Active strategic relationships', kpiClass: 'STRATEGIC', objectiveText: 'Convert relationships into long-term opportunity', exampleActivity: 'Reviewed stakeholder engagement map' },
                { tier: 'CHIEF', kpiText: 'Institutional relationship depth', kpiClass: 'STRATEGIC', objectiveText: 'Build long-cycle referral and partnership channels', exampleActivity: 'Reviewed strategic stakeholder conversion outcomes' },
            ] },
        { code: 'BD-KRA5', name: 'Qualified Lead Management & Conversion Effectiveness', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Qualified leads progressed', kpiClass: 'CORE', objectiveText: 'Focus effort on high-probability leads', exampleActivity: 'Updated CRM with lead qualification outcome' },
                { tier: 'SENIOR', kpiText: 'Lead-to-mandate conversion rate', kpiClass: 'CORE', objectiveText: 'Improve efficiency of BD funnel', exampleActivity: 'Reviewed conversion pipeline bottlenecks' },
                { tier: 'CHIEF', kpiText: 'Conversion efficiency vs cost', kpiClass: 'STRATEGIC', objectiveText: 'Ensure BD effort delivers value', exampleActivity: 'Reviewed cost-to-conversion metrics' },
            ] },
        { code: 'BD-KRA6', name: 'Client Expectation Management & Experience Coordination', orgUnit: 'BD', kpis: [
                { tier: 'JUNIOR', kpiText: 'Proper disclosure & expectation notes documented', kpiClass: 'CORE', objectiveText: 'Prevent expectation mismatch', exampleActivity: 'Documented return and risk disclosures for Client Y' },
                { tier: 'SENIOR', kpiText: 'Expectation-related escalations', kpiClass: 'STRATEGIC', objectiveText: 'Reduce future complaints and friction', exampleActivity: 'Reviewed expectation alignment for new mandates' },
                { tier: 'CHIEF', kpiText: 'Client satisfaction & complaint trends', kpiClass: 'STRATEGIC', objectiveText: 'Preserve trust and institutional reputation', exampleActivity: 'Reviewed client feedback and expectation gaps' },
            ] },
        { code: 'FIN-KRA1', name: 'Budget Discipline & Cost Control', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Expense posting accuracy vs budget', kpiClass: 'CORE', objectiveText: 'Prevent misclassification and budget leakage', exampleActivity: 'Reviewed expense posting against approved budget line' },
                { tier: 'SENIOR', kpiText: 'Budget variance monitoring & control', kpiClass: 'CORE', objectiveText: 'Identify and correct overspending early', exampleActivity: 'Analysed monthly budget vs actual variance' },
                { tier: 'CHIEF', kpiText: 'Cost discipline vs approved budget', kpiClass: 'STRATEGIC', objectiveText: 'Preserve liquidity and protect Scenario 2 assumptions', exampleActivity: 'Reviewed cost trend vs approved budget thresholds' },
            ] },
        { code: 'FIN-KRA2', name: 'Revenue Recognition, Tracking & Collection Effectiveness', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Accurate revenue posting & classification', kpiClass: 'CORE', objectiveText: 'Ensure revenue integrity and traceability', exampleActivity: 'Posted advisory income with correct recognition treatment' },
                { tier: 'SENIOR', kpiText: 'Revenue realised vs billed', kpiClass: 'CORE', objectiveText: 'Improve collection effectiveness', exampleActivity: 'Reviewed outstanding receivables and follow-ups' },
                { tier: 'CHIEF', kpiText: 'Revenue quality & predictability', kpiClass: 'STRATEGIC', objectiveText: 'Improve earnings reliability for management decisions', exampleActivity: 'Reviewed revenue mix and sustainability' },
            ] },
        { code: 'FIN-KRA3', name: 'Fund Accounting & Fiduciary Reporting', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Portfolio NAV & ledger accuracy', kpiClass: 'CORE', objectiveText: 'Protect investor records and trust', exampleActivity: 'Updated fund ledger and verified NAV inputs' },
                { tier: 'SENIOR', kpiText: 'Timeliness & accuracy of fund reports', kpiClass: 'STRATEGIC', objectiveText: 'Support investor confidence and compliance', exampleActivity: 'Reviewed fund statements prior to issuance' },
                { tier: 'CHIEF', kpiText: 'Fiduciary reporting integrity', kpiClass: 'STRATEGIC', objectiveText: 'Preserve institutional credibility', exampleActivity: 'Reviewed fiduciary reporting framework adequacy' },
            ] },
        { code: 'FIN-KRA4', name: 'Timely, Accurate & Decision-Grade Financial Reporting', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Report preparation accuracy', kpiClass: 'CORE', objectiveText: 'Provide reliable base data', exampleActivity: 'Prepared monthly financial schedules' },
                { tier: 'SENIOR', kpiText: 'Report turnaround time & insight quality', kpiClass: 'CORE', objectiveText: 'Support timely decision-making', exampleActivity: 'Reviewed management accounts and commentary' },
                { tier: 'CHIEF', kpiText: 'Financial insight & decision relevance', kpiClass: 'STRATEGIC', objectiveText: 'Enable strategic and Board decisions', exampleActivity: 'Presented financial implications to MD/Board' },
            ] },
        { code: 'FIN-KRA5', name: 'Treasury, Liquidity & Cashflow Management', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Daily cash position accuracy', kpiClass: 'CORE', objectiveText: 'Prevent cash visibility gaps', exampleActivity: 'Updated daily cash position tracker' },
                { tier: 'SENIOR', kpiText: 'Liquidity coverage monitoring', kpiClass: 'STRATEGIC', objectiveText: 'Ensure obligations are met when due', exampleActivity: 'Reviewed liquidity buffer and near-term obligations' },
                { tier: 'CHIEF', kpiText: 'Liquidity sufficiency vs risk appetite', kpiClass: 'STRATEGIC', objectiveText: 'Protect operational continuity', exampleActivity: 'Reviewed liquidity headroom and stress indicators' },
            ] },
        { code: 'FIN-KRA6', name: 'Statutory & Regulatory Financial Compliance', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Compliance schedules maintained', kpiClass: 'CORE', objectiveText: 'Prevent missed filings', exampleActivity: 'Updated statutory filing checklist' },
                { tier: 'SENIOR', kpiText: 'Timely statutory submissions', kpiClass: 'STRATEGIC', objectiveText: 'Avoid sanctions and reputational risk', exampleActivity: 'Coordinated statutory submission with regulators' },
                { tier: 'CHIEF', kpiText: 'Regulatory confidence & audit outcomes', kpiClass: 'STRATEGIC', objectiveText: 'Maintain regulator trust', exampleActivity: 'Reviewed audit findings and remediation plan' },
            ] },
        { code: 'FIN-KRA7', name: 'Cashflow Forecasting, Stress Testing & Variance Management', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'Forecast input accuracy', kpiClass: 'CORE', objectiveText: 'Build reliable cashflow projections', exampleActivity: 'Updated cashflow assumptions from Portfolio inputs' },
                { tier: 'SENIOR', kpiText: 'Forecast accuracy & variance explanation', kpiClass: 'STRATEGIC', objectiveText: 'Improve planning reliability', exampleActivity: 'Analysed forecast variance and drivers' },
                { tier: 'CHIEF', kpiText: 'Stress resilience of cashflow', kpiClass: 'STRATEGIC', objectiveText: 'Anticipate liquidity shocks', exampleActivity: 'Reviewed stress test outcomes and mitigation actions' },
            ] },
        { code: 'FIN-ENT', name: 'Process Integrity, SOP Compliance & Audit Readiness (FinCon)', orgUnit: 'FINCON', kpis: [
                { tier: 'JUNIOR', kpiText: 'SOP adherence in postings & controls', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Prevent control breaches', exampleActivity: 'Executed process per accounting SOP' },
                { tier: 'SENIOR', kpiText: 'Control effectiveness & exception handling', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen control environment', exampleActivity: 'Reviewed control exceptions and remediation' },
                { tier: 'CHIEF', kpiText: 'Audit readiness & control culture', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect institution & Board', exampleActivity: 'Reviewed audit readiness status and gaps' },
            ] },
        { code: 'CORP-KRA1', name: 'Operational Logistics & Office Administration Effectiveness', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Office services uptime (utilities, workspace readiness)', kpiClass: 'CORE', objectiveText: 'Ensure uninterrupted daily operations', exampleActivity: 'Resolved workspace logistics issue for Operations team' },
                { tier: 'SENIOR', kpiText: 'Administrative issue resolution time', kpiClass: 'CORE', objectiveText: 'Reduce operational friction across departments', exampleActivity: 'Reviewed admin issue log and resolution SLAs' },
                { tier: 'CHIEF', kpiText: 'Operational continuity & support reliability', kpiClass: 'STRATEGIC', objectiveText: 'Keep business operations running without disruption', exampleActivity: 'Reviewed operational continuity risks and mitigations' },
            ] },
        { code: 'CORP-KRA2', name: 'Procurement, Vendor Performance & Cost Efficiency', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Procurement process compliance', kpiClass: 'CORE', objectiveText: 'Prevent unauthorised or non-compliant purchases', exampleActivity: 'Processed procurement request per SOP' },
                { tier: 'SENIOR', kpiText: 'Vendor performance & cost efficiency', kpiClass: 'STRATEGIC', objectiveText: 'Achieve value for money and service reliability', exampleActivity: 'Reviewed vendor performance and cost variance' },
                { tier: 'CHIEF', kpiText: 'Strategic vendor & cost optimisation outcomes', kpiClass: 'STRATEGIC', objectiveText: 'Support cost discipline under Scenario 2', exampleActivity: 'Reviewed vendor consolidation and savings opportunities' },
            ] },
        { code: 'CORP-KRA3', name: 'Internal Service Delivery & Departmental Support Effectiveness', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Service requests handled within SLA', kpiClass: 'CORE', objectiveText: 'Ensure timely internal support', exampleActivity: 'Responded to departmental service request' },
                { tier: 'SENIOR', kpiText: 'Internal service satisfaction score', kpiClass: 'STRATEGIC', objectiveText: 'Improve service quality and responsiveness', exampleActivity: 'Reviewed inter-department service feedback' },
                { tier: 'CHIEF', kpiText: 'Enterprise service effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Position Corporate Services as a value enabler', exampleActivity: 'Reviewed service delivery metrics across departments' },
            ] },
        { code: 'CORP-KRA4', name: 'HR Operations, Responsiveness & Employee Lifecycle Management', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Timely HR request processing', kpiClass: 'CORE', objectiveText: 'Ensure smooth employee lifecycle administration', exampleActivity: 'Processed onboarding documentation for new hire' },
                { tier: 'SENIOR', kpiText: 'HR turnaround time & compliance', kpiClass: 'STRATEGIC', objectiveText: 'Reduce employee friction and risk', exampleActivity: 'Reviewed HR issue turnaround metrics' },
                { tier: 'CHIEF', kpiText: 'HR operational reliability', kpiClass: 'STRATEGIC', objectiveText: 'Maintain institutional stability', exampleActivity: 'Reviewed HR operational risks and gaps' },
            ] },
        { code: 'CORP-KRA5', name: 'Staff Engagement, Ethical Culture & Talent Development', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Participation in engagement initiatives', kpiClass: 'SECONDARY', objectiveText: 'Support positive workplace culture', exampleActivity: 'Coordinated staff engagement session' },
                { tier: 'SENIOR', kpiText: 'Engagement & ethics compliance indicators', kpiClass: 'STRATEGIC', objectiveText: 'Strengthen ethical and performance culture', exampleActivity: 'Reviewed staff engagement and ethics feedback' },
                { tier: 'CHIEF', kpiText: 'Culture health & talent sustainability', kpiClass: 'STRATEGIC', objectiveText: 'Build long-term institutional resilience', exampleActivity: 'Reviewed culture pulse survey and talent risks' },
            ] },
        { code: 'CORP-KRA6', name: 'Workforce Discipline, Performance Management & Accountability', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Timely completion of performance documentation', kpiClass: 'CORE', objectiveText: 'Enforce performance discipline', exampleActivity: 'Updated performance records for assigned staff' },
                { tier: 'SENIOR', kpiText: 'Performance review effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Link performance to accountability', exampleActivity: 'Reviewed performance outcomes and improvement plans' },
                { tier: 'CHIEF', kpiText: 'Workforce discipline & accountability culture', kpiClass: 'STRATEGIC', objectiveText: 'Ensure organisation executes strategy', exampleActivity: 'Reviewed enterprise performance discipline trends' },
            ] },
        { code: 'CORP-KRA7', name: 'Process Integrity, SOP Adoption & Policy Compliance', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'SOP adherence in admin & HR processes', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Eliminate informal practices', exampleActivity: 'Executed HR process per SOP' },
                { tier: 'SENIOR', kpiText: 'SOP compliance monitoring & exceptions', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen internal controls', exampleActivity: 'Reviewed SOP deviations and corrective actions' },
                { tier: 'CHIEF', kpiText: 'Audit readiness & control culture', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect institution and Board', exampleActivity: 'Reviewed audit readiness and control gaps' },
            ] },
        { code: 'CORP-KRA8', name: 'Organisational Structure, Role Clarity & Capacity Alignment', orgUnit: 'CORP_SERVICES', kpis: [
                { tier: 'JUNIOR', kpiText: 'Accuracy of staff records & role data', kpiClass: 'CORE', objectiveText: 'Maintain clarity of roles and reporting', exampleActivity: 'Updated staff role and designation records' },
                { tier: 'SENIOR', kpiText: 'Role clarity & capacity alignment reviews', kpiClass: 'STRATEGIC', objectiveText: 'Prevent role confusion and overload', exampleActivity: 'Reviewed role clarity feedback with departments' },
                { tier: 'CHIEF', kpiText: 'Organisational structure fitness', kpiClass: 'STRATEGIC', objectiveText: 'Align structure to strategy and budget', exampleActivity: 'Reviewed structure vs execution capacity' },
            ] },
        { code: 'RISK-KRA1', name: 'Portfolio Risk Exposure & Concentration Oversight', orgUnit: 'RISK', kpis: [
                { tier: 'JUNIOR', kpiText: 'Risk exposure metrics updated on schedule', kpiClass: 'CORE', objectiveText: 'Maintain up-to-date visibility of portfolio risk', exampleActivity: 'Updated exposure tracker by asset class and counterparty' },
                { tier: 'SENIOR', kpiText: 'Concentration limits compliance', kpiClass: 'STRATEGIC', objectiveText: 'Prevent excessive exposure to single risks', exampleActivity: 'Reviewed concentration limits and flagged breach risk' },
                { tier: 'CHIEF', kpiText: 'Portfolio risk profile vs risk appetite', kpiClass: 'STRATEGIC', objectiveText: 'Ensure portfolio risk remains within Board-approved appetite', exampleActivity: 'Reviewed aggregate portfolio risk profile for Board reporting' },
            ] },
        { code: 'RISK-KRA2', name: 'Transaction Risk Assessment, Mitigation & Approval Assurance', orgUnit: 'RISK', kpis: [
                { tier: 'JUNIOR', kpiText: 'Timely completion of risk assessment memos', kpiClass: 'CORE', objectiveText: 'Ensure no transaction proceeds without risk review', exampleActivity: 'Prepared transaction risk assessment for Deal X' },
                { tier: 'SENIOR', kpiText: 'Effectiveness of risk mitigation measures', kpiClass: 'STRATEGIC', objectiveText: 'Reduce post-investment downside surprises', exampleActivity: 'Reviewed adequacy of mitigants for approved transaction' },
                { tier: 'CHIEF', kpiText: 'Risk approval integrity & independence', kpiClass: 'STRATEGIC', objectiveText: 'Protect institution from compromised approvals', exampleActivity: 'Reviewed risk approval exceptions and escalation trends' },
            ] },
        { code: 'RISK-KRA3', name: 'Enterprise Risk Management (ERM) Framework Implementation', orgUnit: 'RISK', kpis: [
                { tier: 'JUNIOR', kpiText: 'Risk register updates & documentation', kpiClass: 'CORE', objectiveText: 'Maintain a current risk universe', exampleActivity: 'Updated operational risk register entries' },
                { tier: 'SENIOR', kpiText: 'ERM process effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Embed risk awareness across departments', exampleActivity: 'Reviewed ERM cycle and department participation' },
                { tier: 'CHIEF', kpiText: 'ERM maturity & Board relevance', kpiClass: 'STRATEGIC', objectiveText: 'Make ERM decision-useful, not theoretical', exampleActivity: 'Reviewed ERM maturity and Board reporting relevance' },
            ] },
        { code: 'RISK-KRA4', name: 'Risk Governance, Statutory & Regulatory Compliance Oversight', orgUnit: 'RISK', kpis: [
                { tier: 'JUNIOR', kpiText: 'Compliance monitoring activities completed', kpiClass: 'CORE', objectiveText: 'Prevent overlooked regulatory risks', exampleActivity: 'Reviewed compliance checklist for portfolio transactions' },
                { tier: 'SENIOR', kpiText: 'Timely escalation of risk & compliance breaches', kpiClass: 'STRATEGIC', objectiveText: 'Prevent small issues from becoming institutional risks', exampleActivity: 'Escalated identified risk breach to CRO and MD' },
                { tier: 'CHIEF', kpiText: 'Regulatory confidence & risk governance effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Maintain regulator and Board trust', exampleActivity: 'Reviewed regulatory risk exposure and governance gaps' },
            ] },
        { code: 'RISK-ENT', name: 'Process Integrity, SOP Compliance & Audit Readiness (Risk)', orgUnit: 'RISK', kpis: [
                { tier: 'JUNIOR', kpiText: 'Adherence to risk review SOPs', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Ensure consistency and traceability', exampleActivity: 'Applied approved risk review checklist' },
                { tier: 'SENIOR', kpiText: 'Control challenge & documentation quality', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen audit defensibility', exampleActivity: 'Reviewed risk documentation for completeness' },
                { tier: 'CHIEF', kpiText: 'Risk audit readiness & assurance confidence', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect institution and Board', exampleActivity: 'Reviewed audit findings and remediation status' },
            ] },
        { code: 'TECH-KRA1', name: 'System Availability, Reliability & Digital Platform Stability', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'System uptime monitoring accuracy', kpiClass: 'CORE', objectiveText: 'Detect outages early and maintain uptime', exampleActivity: 'Monitored system uptime and logged anomaly' },
                { tier: 'SENIOR', kpiText: 'Platform uptime vs SLA', kpiClass: 'STRATEGIC', objectiveText: 'Ensure operational continuity for all departments', exampleActivity: 'Reviewed uptime metrics and resolved recurring issues' },
                { tier: 'CHIEF', kpiText: 'Enterprise platform stability', kpiClass: 'STRATEGIC', objectiveText: 'Prevent technology-driven business disruption', exampleActivity: 'Reviewed system reliability risks and mitigations' },
            ] },
        { code: 'TECH-KRA2', name: 'Data Security, Backup Integrity & Cyber Risk Controls', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Backup execution & verification', kpiClass: 'CORE', objectiveText: 'Prevent data loss', exampleActivity: 'Executed daily backup and verified integrity' },
                { tier: 'SENIOR', kpiText: 'Security control effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Reduce cyber and data breach risk', exampleActivity: 'Reviewed access controls and incident logs' },
                { tier: 'CHIEF', kpiText: 'Cyber risk posture vs appetite', kpiClass: 'STRATEGIC', objectiveText: 'Protect institutional data and reputation', exampleActivity: 'Reviewed cyber risk posture and remediation plan' },
            ] },
        { code: 'TECH-KRA3', name: 'Digital Enablement of Internal Processes & Performance Systems', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Workflow digitisation tasks completed', kpiClass: 'SECONDARY', objectiveText: 'Support automation initiatives', exampleActivity: 'Configured workflow for departmental KPI tracking' },
                { tier: 'SENIOR', kpiText: 'Adoption rate of digital tools', kpiClass: 'STRATEGIC', objectiveText: 'Improve operational efficiency', exampleActivity: 'Reviewed adoption metrics for performance system' },
                { tier: 'CHIEF', kpiText: 'Digital enablement impact on execution', kpiClass: 'STRATEGIC', objectiveText: 'Ensure technology delivers business value', exampleActivity: 'Reviewed impact of digitisation on execution discipline' },
            ] },
        { code: 'TECH-KRA4', name: 'Digital Client Interface Enablement & Platform Support', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Client platform issues resolved', kpiClass: 'CORE', objectiveText: 'Maintain client-facing system functionality', exampleActivity: 'Resolved client login issue' },
                { tier: 'SENIOR', kpiText: 'Stability of client digital channels', kpiClass: 'STRATEGIC', objectiveText: 'Protect client experience', exampleActivity: 'Reviewed client platform performance metrics' },
                { tier: 'CHIEF', kpiText: 'Client digital experience reliability', kpiClass: 'STRATEGIC', objectiveText: 'Support trust and retention', exampleActivity: 'Reviewed digital client channel risks' },
            ] },
        { code: 'TECH-KRA5', name: 'User Support, SLA Management & Issue Resolution Effectiveness', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Tickets resolved within SLA', kpiClass: 'CORE', objectiveText: 'Minimise disruption to staff productivity', exampleActivity: 'Resolved helpdesk ticket within SLA' },
                { tier: 'SENIOR', kpiText: 'Average resolution time & backlog', kpiClass: 'CORE', objectiveText: 'Improve internal service efficiency', exampleActivity: 'Reviewed support backlog and escalation trends' },
                { tier: 'CHIEF', kpiText: 'IT support effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Ensure IT is a reliable enabler', exampleActivity: 'Reviewed support performance and resourcing adequacy' },
            ] },
        { code: 'TECH-KRA6', name: 'Business Continuity, Disaster Recovery & Platform Resilience', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'DR test execution', kpiClass: 'CORE', objectiveText: 'Ensure readiness for disruptions', exampleActivity: 'Participated in disaster recovery test' },
                { tier: 'SENIOR', kpiText: 'BCP/DR readiness score', kpiClass: 'STRATEGIC', objectiveText: 'Maintain operational resilience', exampleActivity: 'Reviewed DR test results and gaps' },
                { tier: 'CHIEF', kpiText: 'Business continuity assurance', kpiClass: 'STRATEGIC', objectiveText: 'Protect enterprise operations', exampleActivity: 'Reviewed business continuity risks and readiness' },
            ] },
        { code: 'TECH-KRA7', name: 'Technology Governance, Architecture & Change Control', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Change requests logged & documented', kpiClass: 'CORE', objectiveText: 'Prevent unauthorised system changes', exampleActivity: 'Logged approved system change request' },
                { tier: 'SENIOR', kpiText: 'Change success rate', kpiClass: 'STRATEGIC', objectiveText: 'Reduce disruptions from changes', exampleActivity: 'Reviewed change outcomes and rollbacks' },
                { tier: 'CHIEF', kpiText: 'Architecture integrity & governance', kpiClass: 'STRATEGIC', objectiveText: 'Ensure scalable and controlled IT environment', exampleActivity: 'Reviewed architecture alignment with business needs' },
            ] },
        { code: 'TECH-KRA8', name: 'IT Statutory, Data Protection & Regulatory Compliance', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'Compliance checklist completion', kpiClass: 'CORE', objectiveText: 'Prevent missed IT obligations', exampleActivity: 'Updated IT compliance checklist' },
                { tier: 'SENIOR', kpiText: 'Data protection compliance adherence', kpiClass: 'STRATEGIC', objectiveText: 'Reduce regulatory exposure', exampleActivity: 'Reviewed NDPR/GDPR compliance status' },
                { tier: 'CHIEF', kpiText: 'Regulatory confidence & IT compliance', kpiClass: 'STRATEGIC', objectiveText: 'Maintain regulator and Board confidence', exampleActivity: 'Reviewed IT compliance risks and remediation plans' },
            ] },
        { code: 'TECH-ENT', name: 'Process Integrity, SOP Compliance & Audit Readiness (Technology)', orgUnit: 'TECHNOLOGY', kpis: [
                { tier: 'JUNIOR', kpiText: 'SOP adherence in IT operations', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Maintain consistency & traceability', exampleActivity: 'Executed system task per SOP' },
                { tier: 'SENIOR', kpiText: 'Control effectiveness & documentation', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen audit defensibility', exampleActivity: 'Reviewed IT controls and exceptions' },
                { tier: 'CHIEF', kpiText: 'Audit readiness & assurance posture', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect institution and Board', exampleActivity: 'Reviewed IT audit readiness status' },
            ] },
        { code: 'SAU-KRA1', name: 'Enterprise Performance Monitoring & Management Reporting', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Timely data collation from departments', kpiClass: 'CORE', objectiveText: 'Ensure performance visibility inputs are complete', exampleActivity: 'Collected monthly performance inputs from Portfolio & BD' },
                { tier: 'SENIOR', kpiText: 'Accuracy & consistency of performance reports', kpiClass: 'STRATEGIC', objectiveText: 'Provide decision-grade management reporting', exampleActivity: 'Reviewed enterprise performance dashboard for accuracy' },
                { tier: 'CHIEF', kpiText: 'Enterprise performance insight quality', kpiClass: 'STRATEGIC', objectiveText: 'Support MD and Board decision-making', exampleActivity: 'Presented enterprise performance insights to MD' },
            ] },
        { code: 'SAU-KRA2', name: 'Departmental KPI Framework Integrity & Tracking', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'KPI tracking updates completed', kpiClass: 'CORE', objectiveText: 'Maintain live visibility of KPI performance', exampleActivity: 'Updated departmental KPI tracker' },
                { tier: 'SENIOR', kpiText: 'KPI framework consistency & discipline', kpiClass: 'STRATEGIC', objectiveText: 'Prevent metric drift and gaming', exampleActivity: 'Reviewed KPI alignment with approved framework' },
                { tier: 'CHIEF', kpiText: 'KPI system credibility', kpiClass: 'STRATEGIC', objectiveText: 'Preserve trust in the performance system', exampleActivity: 'Reviewed KPI framework integrity across departments' },
            ] },
        { code: 'SAU-KRA3', name: 'Task, Board Resolution & Executive Directive Tracking', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Tasks and resolutions logged', kpiClass: 'CORE', objectiveText: 'Ensure no directive goes untracked', exampleActivity: 'Logged Board resolution into action tracker' },
                { tier: 'SENIOR', kpiText: 'Timeliness of task status updates', kpiClass: 'STRATEGIC', objectiveText: 'Improve execution accountability', exampleActivity: 'Reviewed overdue tasks and escalated delays' },
                { tier: 'CHIEF', kpiText: 'Execution discipline of leadership directives', kpiClass: 'STRATEGIC', objectiveText: 'Reinforce authority and accountability', exampleActivity: 'Reported execution status of Board directives to MD' },
            ] },
        { code: 'SAU-KRA4', name: 'SOP, Policy & Control Compliance Monitoring', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'SOP compliance checks completed', kpiClass: 'CORE', objectiveText: 'Detect deviations early', exampleActivity: 'Reviewed departmental SOP adherence checklist' },
                { tier: 'SENIOR', kpiText: 'SOP deviation trend analysis', kpiClass: 'STRATEGIC', objectiveText: 'Strengthen control environment', exampleActivity: 'Analysed SOP deviation patterns across units' },
                { tier: 'CHIEF', kpiText: 'Enterprise control discipline', kpiClass: 'STRATEGIC', objectiveText: 'Preserve audit and governance integrity', exampleActivity: 'Reviewed enterprise SOP compliance posture' },
            ] },
        { code: 'SAU-KRA5', name: 'Internal Control Breach Identification & Escalation', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Control breaches identified & logged', kpiClass: 'CORE', objectiveText: 'Ensure visibility of weaknesses', exampleActivity: 'Logged identified internal control breach' },
                { tier: 'SENIOR', kpiText: 'Timeliness of breach escalation', kpiClass: 'STRATEGIC', objectiveText: 'Prevent risk accumulation', exampleActivity: 'Escalated control breach to CRO & MD' },
                { tier: 'CHIEF', kpiText: 'Control remediation effectiveness', kpiClass: 'STRATEGIC', objectiveText: 'Protect institution and Board', exampleActivity: 'Reviewed remediation status of control breaches' },
            ] },
        { code: 'SAU-KRA6', name: 'Ethical, Regulatory & Conduct Compliance Assurance', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Ethics & conduct checks supported', kpiClass: 'CORE', objectiveText: 'Maintain ethical baseline', exampleActivity: 'Reviewed ethics compliance checklist' },
                { tier: 'SENIOR', kpiText: 'Ethical breach trend monitoring', kpiClass: 'STRATEGIC', objectiveText: 'Preserve organisational culture', exampleActivity: 'Reviewed conduct incidents and escalation patterns' },
                { tier: 'CHIEF', kpiText: 'Ethical culture assurance', kpiClass: 'STRATEGIC', objectiveText: 'Protect institutional reputation', exampleActivity: 'Reported ethical risk posture to MD' },
            ] },
        { code: 'SAU-KRA7', name: 'Regulatory Obligation Tracking & Reporting Assurance', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Regulatory obligations tracker updated', kpiClass: 'CORE', objectiveText: 'Prevent missed deadlines', exampleActivity: 'Updated regulatory obligation tracker' },
                { tier: 'SENIOR', kpiText: 'Reporting completeness & timeliness', kpiClass: 'STRATEGIC', objectiveText: 'Support regulatory confidence', exampleActivity: 'Reviewed regulatory reporting status' },
                { tier: 'CHIEF', kpiText: 'Regulatory assurance credibility', kpiClass: 'STRATEGIC', objectiveText: 'Protect licence and Board', exampleActivity: 'Reviewed regulatory exposure status' },
            ] },
        { code: 'SAU-ENT', name: 'Process Integrity, SOP Compliance & Audit Readiness (SAU — natural home)', orgUnit: 'SAU', kpis: [
                { tier: 'JUNIOR', kpiText: 'Evidence of process adherence', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Maintain audit trail integrity', exampleActivity: 'Verified documentation completeness' },
                { tier: 'SENIOR', kpiText: 'Control assurance effectiveness', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen audit outcomes', exampleActivity: 'Reviewed audit readiness gaps' },
                { tier: 'CHIEF', kpiText: 'Audit & governance confidence', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect institution & Board', exampleActivity: 'Reviewed audit preparedness and assurance posture' },
            ] },
        { code: 'COSEC-KRA1', name: 'Corporate Governance Framework & Board Effectiveness Support', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Governance calendar & framework updates', kpiClass: 'CORE', objectiveText: 'Ensure governance requirements are current and visible', exampleActivity: 'Updated governance calendar with committee timelines' },
                { tier: 'SENIOR', kpiText: 'Governance framework adequacy & alignment', kpiClass: 'STRATEGIC', objectiveText: 'Ensure governance structure supports effective oversight', exampleActivity: 'Reviewed governance framework against regulatory requirements' },
                { tier: 'CHIEF', kpiText: 'Board effectiveness & governance quality', kpiClass: 'STRATEGIC', objectiveText: 'Strengthen Board oversight and decision quality', exampleActivity: 'Reviewed Board effectiveness indicators and gaps' },
            ] },
        { code: 'COSEC-KRA2', name: 'Board, Committee & Shareholder Meeting Coordination', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Timely issuance of notices & agendas', kpiClass: 'CORE', objectiveText: 'Ensure meetings are convened properly', exampleActivity: 'Issued Board meeting notice and draft agenda' },
                { tier: 'SENIOR', kpiText: 'Meeting readiness & documentation completeness', kpiClass: 'CORE', objectiveText: 'Support effective deliberations', exampleActivity: 'Reviewed Board pack completeness and circulation' },
                { tier: 'CHIEF', kpiText: 'Quality of Board & Committee engagements', kpiClass: 'STRATEGIC', objectiveText: 'Enable structured, productive meetings', exampleActivity: 'Reviewed Board meeting flow and engagement effectiveness' },
            ] },
        { code: 'COSEC-KRA3', name: 'Board Resolution, Action & Decision Register Management', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Resolution & action register accuracy', kpiClass: 'CORE', objectiveText: 'Preserve accurate governance records', exampleActivity: 'Updated Board resolution and action register' },
                { tier: 'SENIOR', kpiText: 'Timeliness of resolution documentation', kpiClass: 'STRATEGIC', objectiveText: 'Prevent governance gaps', exampleActivity: 'Reviewed completeness of signed resolutions' },
                { tier: 'CHIEF', kpiText: 'Governance decision traceability', kpiClass: 'STRATEGIC', objectiveText: 'Protect the Board and institution', exampleActivity: 'Reviewed governance decision traceability for audit readiness' },
            ] },
        { code: 'COSEC-KRA4', name: 'Statutory Filings, Corporate Records & Disclosure Management', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Statutory filing schedules maintained', kpiClass: 'CORE', objectiveText: 'Prevent missed filings', exampleActivity: 'Updated statutory filing tracker' },
                { tier: 'SENIOR', kpiText: 'Timeliness & accuracy of statutory submissions', kpiClass: 'STRATEGIC', objectiveText: 'Avoid regulatory sanctions', exampleActivity: 'Coordinated submission of statutory return' },
                { tier: 'CHIEF', kpiText: 'Regulatory confidence & record integrity', kpiClass: 'STRATEGIC', objectiveText: 'Maintain licence and credibility', exampleActivity: 'Reviewed statutory compliance posture' },
            ] },
        { code: 'COSEC-KRA5', name: 'Governance Advisory & Board Support Interface', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Governance support requests handled', kpiClass: 'SECONDARY', objectiveText: 'Support smooth governance operations', exampleActivity: 'Responded to governance document request' },
                { tier: 'SENIOR', kpiText: 'Quality of governance advisory inputs', kpiClass: 'STRATEGIC', objectiveText: 'Support informed Board decisions', exampleActivity: 'Prepared governance advisory note for Board Committee' },
                { tier: 'CHIEF', kpiText: 'Board confidence in governance counsel', kpiClass: 'STRATEGIC', objectiveText: 'Position Company Secretary as trusted advisor', exampleActivity: 'Advised Chairman on governance implications of decision' },
            ] },
        { code: 'COSEC-ENT', name: 'Process Integrity, SOP Compliance & Audit Readiness (Company Secretary)', orgUnit: 'COSEC', kpis: [
                { tier: 'JUNIOR', kpiText: 'Adherence to governance SOPs', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Maintain procedural consistency', exampleActivity: 'Applied Board documentation SOP' },
                { tier: 'SENIOR', kpiText: 'Governance control effectiveness', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Strengthen audit defensibility', exampleActivity: 'Reviewed governance process gaps' },
                { tier: 'CHIEF', kpiText: 'Governance audit readiness & assurance', kpiClass: 'PROCESS_INTEGRITY', objectiveText: 'Protect Board & institution', exampleActivity: 'Reviewed governance audit readiness status' },
            ] },
    ];
    let kpiCount = 0;
    for (const kra of KRAS) {
        await prisma.enterpriseKra.upsert({
            where: { code: kra.code },
            create: { code: kra.code, name: kra.name, orgUnitCode: kra.orgUnit, status: 'DRAFT' },
            update: {},
        });
        for (const kpi of kra.kpis) {
            await prisma.kpiDefinition.upsert({
                where: { kraCode_tier: { kraCode: kra.code, tier: kpi.tier } },
                create: {
                    kraCode: kra.code,
                    tier: kpi.tier,
                    kpiText: kpi.kpiText,
                    kpiClass: kpi.kpiClass,
                    objectiveText: kpi.objectiveText,
                    exampleActivity: kpi.exampleActivity,
                    measurementBasis: 'MANUAL',
                    status: 'DRAFT',
                },
                update: {},
            });
            kpiCount++;
        }
    }
    const WEIGHT_MATRICES = {
        COSEC: { JUNIOR: [45, 35, 10, 10], SENIOR: [30, 55, 5, 10], CHIEF: [20, 65, 5, 10] },
        SAU: { JUNIOR: [40, 40, 5, 15], SENIOR: [25, 60, 5, 10], CHIEF: [15, 75, 0, 10] },
        FINCON: { JUNIOR: [50, 30, 5, 15], SENIOR: [35, 45, 5, 15], CHIEF: [25, 60, 5, 10] },
        RISK: { JUNIOR: [40, 40, 5, 15], SENIOR: [25, 60, 5, 10], CHIEF: [15, 75, 0, 10] },
        PORTFOLIO: { JUNIOR: [55, 30, 5, 10], SENIOR: [40, 45, 5, 10], CHIEF: [25, 65, 0, 10] },
        BD: { JUNIOR: [50, 35, 5, 10], SENIOR: [35, 55, 5, 5], CHIEF: [25, 65, 5, 5] },
        CORP_SERVICES: { JUNIOR: [45, 30, 10, 15], SENIOR: [30, 45, 10, 15], CHIEF: [20, 60, 10, 10] },
        TECHNOLOGY: { JUNIOR: [50, 30, 5, 15], SENIOR: [35, 45, 5, 15], CHIEF: [25, 60, 5, 10] },
    };
    const CLASS_ORDER = ['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY'];
    let weightRowCount = 0;
    for (const [orgUnitCode, tiers] of Object.entries(WEIGHT_MATRICES)) {
        for (const tier of ['JUNIOR', 'SENIOR', 'CHIEF']) {
            const weights = tiers[tier];
            for (const [i, kpiClass] of CLASS_ORDER.entries()) {
                await prisma.kpiWeightMatrix.upsert({
                    where: { orgUnitCode_tier_kpiClass_version: { orgUnitCode, tier, kpiClass, version: 1 } },
                    create: { orgUnitCode, tier, kpiClass, weightPct: weights[i], version: 1, status: 'DRAFT' },
                    update: {},
                });
                weightRowCount++;
            }
        }
    }
    const CADRE_TIER_MAP = [
        { cadre: 'CEO', tier: 'CHIEF' },
        { cadre: 'Director', tier: 'CHIEF' },
        { cadre: 'Senior VP', tier: 'CHIEF' },
        { cadre: 'VP', tier: 'SENIOR' },
        { cadre: 'Asst VP', tier: 'SENIOR' },
        { cadre: 'Snr Associate 1', tier: 'SENIOR' },
        { cadre: 'Snr Associate 2', tier: 'SENIOR' },
        { cadre: 'Associate 1', tier: 'JUNIOR' },
        { cadre: 'Associate 2', tier: 'JUNIOR' },
        { cadre: 'Snr Analyst 1', tier: 'SENIOR' },
        { cadre: 'Snr Analyst 2', tier: 'SENIOR' },
        { cadre: 'Analyst 1', tier: 'JUNIOR' },
        { cadre: 'Analyst 2', tier: 'JUNIOR' },
        { cadre: 'Admin Officer', tier: 'JUNIOR' },
        { cadre: 'Driver', tier: 'JUNIOR' },
        { cadre: 'Cleaner', tier: 'JUNIOR' },
    ];
    for (const row of CADRE_TIER_MAP) {
        await prisma.cadreTierMap.upsert({ where: { cadre: row.cadre }, create: row, update: {} });
    }
    console.log(`Seeded PMS strategy spine: ${ORG_UNITS.length} org units, 5 strategic pillars, 4 strategic objectives, ${KRAS.length} enterprise KRAs, ${kpiCount} kpi_definition rows (DRAFT), ${weightRowCount} kpi_weight_matrix rows across 8 departments incl. the Technology/FinCon-profile gap-fill (DRAFT), ${CADRE_TIER_MAP.length} cadre_tier_map rows.`);
    await prisma.budgetVarianceRagThreshold.upsert({
        where: { version: 1 },
        create: { version: 1, amberPct: 5, redPct: 10 },
        update: {},
    });
    console.log('Seeded budget_variance_rag_threshold v1 (amber=5%, red=10%).');
    const CAPITAL_REQUIREMENTS = [
        { requirementNaira: 150_000_000, effectiveFrom: '2026-01-01', notes: 'Current SEC minimum capital requirement (CEO-confirmed, invariant 13).' },
        { requirementNaira: 2_000_000_000, effectiveFrom: '2027-06-01', notes: 'Funding-plan target per amendment 26b (rights issue + private placement + retained earnings).' },
    ];
    for (const r of CAPITAL_REQUIREMENTS) {
        const existing = await prisma.regulatoryCapitalRequirement.findFirst({ where: { effectiveFrom: new Date(r.effectiveFrom) } });
        if (!existing) {
            await prisma.regulatoryCapitalRequirement.create({
                data: { requirementKobo: BigInt(r.requirementNaira) * 100n, effectiveFrom: new Date(r.effectiveFrom), notes: r.notes },
            });
        }
    }
    console.log(`Seeded ${CAPITAL_REQUIREMENTS.length} regulatory_capital_requirement rows (₦150m now, ₦2bn from 2027-06-01).`);
    let instrumentedCount = 0;
    for (const entry of kri_roster_1.KRI_ROSTER) {
        await prisma.kriDefinition.upsert({
            where: { code: entry.code },
            create: {
                code: entry.code,
                name: entry.name,
                category: entry.category,
                direction: entry.direction,
                isZeroTolerance: entry.isZeroTolerance ?? false,
                riskAppetiteCategoryRef: entry.riskAppetiteCategoryRef ?? null,
                computeStatus: entry.computeStatus,
                notes: entry.notes ?? null,
            },
            update: { name: entry.name, computeStatus: entry.computeStatus, notes: entry.notes ?? null },
        });
        if (entry.computeStatus === 'INSTRUMENTED')
            instrumentedCount++;
    }
    console.log(`Seeded ${kri_roster_1.KRI_ROSTER.length} kri_definition rows (${instrumentedCount} INSTRUMENTED, rest NOT_YET_INSTRUMENTED/RESERVED — honest N/A per invariant 16).`);
    for (const s of stress_scenario_roster_1.STRESS_SCENARIO_ROSTER) {
        await prisma.stressScenarioConfig.upsert({
            where: { modelType_scenarioCode_version: { modelType: s.modelType, scenarioCode: s.scenarioCode, version: 1 } },
            create: { modelType: s.modelType, scenarioCode: s.scenarioCode, scenarioLabel: s.scenarioLabel, version: 1, status: 'ACTIVE', parameters: s.parameters, effectiveFrom: new Date() },
            update: { scenarioLabel: s.scenarioLabel, parameters: s.parameters },
        });
    }
    console.log(`Seeded ${stress_scenario_roster_1.STRESS_SCENARIO_ROSTER.length} stress_scenario_config rows across 6 models (8 liquidity + 1 capital + 10 revenue + 1 DPD ladder + 1 shock matrix + 8 reverse-stress events).`);
    const ENTERPRISE_RISK_PROFILE = [
        { riskCategory: 'Strategic', inherentScore: 3, sortOrder: 1 },
        { riskCategory: 'Credit', inherentScore: 4, sortOrder: 2 },
        { riskCategory: 'Treasury', inherentScore: 4, sortOrder: 3 },
        { riskCategory: 'Compliance', inherentScore: 3, sortOrder: 4 },
        { riskCategory: 'Operational', inherentScore: 3, sortOrder: 5 },
        { riskCategory: 'Investment Mgmt', inherentScore: 3, sortOrder: 6 },
        { riskCategory: 'Reputational', inherentScore: 2, sortOrder: 7 },
    ];
    for (const r of ENTERPRISE_RISK_PROFILE) {
        await prisma.enterpriseRiskProfileEntry.upsert({ where: { riskCategory: r.riskCategory }, create: r, update: r });
    }
    await prisma.dashboardManualStatus.upsert({ where: { id: 1 }, create: { id: 1 }, update: {} });
    const CEO_ACTION_ITEMS = [
        { title: 'Legal action — SunPower', detail: 'Legal action — SunPower', owner: 'URGENT — Legal Counsel', dueLabel: '' },
        { title: 'Chase GreenFields payment', detail: 'Chase GreenFields payment', owner: 'High — Portfolio Mgr', dueLabel: '' },
        { title: 'SEC monthly report', detail: 'SEC monthly report', owner: 'Compliance', dueLabel: 'Due Jul 15' },
        { title: 'Board Risk Report', detail: 'Board Risk Report', owner: 'Head of Risk', dueLabel: 'Due Jul 5' },
        { title: 'Counterparty review — Metro', detail: 'Counterparty review — Metro', owner: 'High — Head of Risk', dueLabel: '' },
    ];
    const BOARD_ACTION_ITEMS = [
        { title: 'Annual ERMF Review', detail: 'Approve updated ERMF Version 2', owner: 'Head of Risk', dueLabel: 'Jul 2026' },
        { title: 'Regulatory Capital', detail: 'Approve capital adequacy report', owner: 'CFO', dueLabel: 'Monthly' },
        { title: 'Stress Test Results', detail: 'Review Q2 2026 stress test outcomes', owner: 'Head of Risk', dueLabel: 'Quarterly' },
        { title: 'Counterparty Limits', detail: 'Approve increased BrightStore limit', owner: 'CEO', dueLabel: 'Immediate' },
    ];
    const existingActionItems = await prisma.dashboardActionItem.count();
    if (existingActionItems === 0) {
        for (const item of CEO_ACTION_ITEMS)
            await prisma.dashboardActionItem.create({ data: { audience: 'CEO', ...item } });
        for (const item of BOARD_ACTION_ITEMS)
            await prisma.dashboardActionItem.create({ data: { audience: 'BOARD', ...item } });
    }
    console.log(`Seeded ${ENTERPRISE_RISK_PROFILE.length} enterprise_risk_profile_entry rows, dashboard_manual_status singleton, ${CEO_ACTION_ITEMS.length + BOARD_ACTION_ITEMS.length} dashboard_action_item demo rows (source-confirmed manual content).`);
    for (const c of wm_types_1.ASSET_CLASSES) {
        await prisma.assetClassRegistry.upsert({
            where: { code: c.code },
            create: { code: c.code, label: c.label, custodyDefault: 'EXTERNAL', shariahScreeningRule: c.shariahScreeningRule },
            update: { label: c.label, shariahScreeningRule: c.shariahScreeningRule },
        });
    }
    for (const b of wm_types_1.TIER_BANDS) {
        const existingBand = await prisma.wmClientTierConfig.findFirst({ where: { tier: b.tier, isActive: true } });
        if (!existingBand) {
            await prisma.wmClientTierConfig.create({ data: { tier: b.tier, minTotalWealthUsd: b.minTotalWealthUsd, sortOrder: b.sortOrder } });
        }
    }
    for (const s of wm_types_1.STRESS_SCENARIOS) {
        await prisma.wmStressScenarioConfig.upsert({
            where: { scenarioCode_version: { scenarioCode: s.scenarioCode, version: 1 } },
            create: { scenarioCode: s.scenarioCode, label: s.label, shockPctByAssetClass: s.shockPctByAssetClass, version: 1, status: 'ACTIVE' },
            update: { label: s.label, shockPctByAssetClass: s.shockPctByAssetClass },
        });
    }
    console.log(`Seeded ${wm_types_1.ASSET_CLASSES.length} asset_class_registry rows, ${wm_types_1.TIER_BANDS.length} wm_client_tier_config bands, ${wm_types_1.STRESS_SCENARIOS.length} wm_stress_scenario_config rows.`);
    for (const b of pms_types_1.INCENTIVE_BANDS) {
        const existingBand = await prisma.incentiveBandConfig.findFirst({ where: { minScorePct: b.minScorePct, isActive: true } });
        if (!existingBand)
            await prisma.incentiveBandConfig.create({ data: b });
    }
    for (const g of pms_types_1.GATE_SEVERITY_CONFIG) {
        await prisma.pmsGateSeverityConfig.upsert({
            where: { severity: g.severity },
            create: { severity: g.severity, outcome: g.outcome, cappedPct: g.cappedPct },
            update: { outcome: g.outcome, cappedPct: g.cappedPct },
        });
    }
    const existingTaxConfig = await prisma.taxRuleConfig.findUnique({ where: { version: pms_types_1.TAX_RULE_CONFIG_V1.version } });
    if (!existingTaxConfig) {
        await prisma.taxRuleConfig.create({
            data: {
                version: pms_types_1.TAX_RULE_CONFIG_V1.version,
                consolidatedReliefFlatKobo: pms_types_1.TAX_RULE_CONFIG_V1.consolidatedReliefFlatKobo,
                consolidatedReliefPctOfGross: pms_types_1.TAX_RULE_CONFIG_V1.consolidatedReliefPctOfGross,
                bands: pms_types_1.TAX_RULE_CONFIG_V1.bands,
                pensionEmployeePct: pms_types_1.TAX_RULE_CONFIG_V1.pensionEmployeePct,
                nhfPct: pms_types_1.TAX_RULE_CONFIG_V1.nhfPct,
                status: 'DRAFT',
                effectiveFrom: new Date(),
            },
        });
    }
    console.log(`Seeded ${pms_types_1.INCENTIVE_BANDS.length} incentive_band_config rows, ${pms_types_1.GATE_SEVERITY_CONFIG.length} pms_gate_severity_config rows, tax_rule_config v${pms_types_1.TAX_RULE_CONFIG_V1.version} (DRAFT — FINCON validation required before activation).`);
    const TAX_GL_MAPPING_SEEDS = ['WHT', 'VAT', 'STAMP_DUTY'];
    for (const taxType of TAX_GL_MAPPING_SEEDS) {
        await prisma.taxGlMapping.upsert({
            where: { taxType },
            create: { taxType, payableAccountCode: null },
            update: {},
        });
    }
    console.log('Seeded tax_gl_mapping x3 (WHT/VAT/STAMP_DUTY, payableAccountCode: null -- parked pending FinCon Mapping-7 sign-off).');
    const existingOnboardingConfig = await prisma.investorOnboardingConfig.findFirst({ where: { status: 'ACTIVE' } });
    if (!existingOnboardingConfig) {
        await prisma.investorOnboardingConfig.create({
            data: {
                version: 1,
                status: 'ACTIVE',
                expressDepositCapKobo: kobo(1_000_000),
                stage2CompletionDeadlineDays: 30,
            },
        });
    }
    console.log('Seeded investor_onboarding_config v1 ACTIVE (₦1,000,000 Stage-1 Express deposit cap, 30-day Stage-2 deadline).');
    const existingComplaintSlaConfig = await prisma.complaintSlaConfig.findFirst({ where: { status: 'ACTIVE' } });
    if (!existingComplaintSlaConfig) {
        await prisma.complaintSlaConfig.create({
            data: { id: 1, version: 1, status: 'ACTIVE', slaDays: 10, amberThresholdPct: 70 },
        });
    }
    console.log('Seeded complaint_sla_config v1 ACTIVE (10-day resolution window, 70%-elapsed AMBER threshold).');
    const existingMatchTolerance = await prisma.procurementMatchToleranceConfig.findFirst({ where: { status: 'ACTIVE' } });
    if (!existingMatchTolerance) {
        await prisma.procurementMatchToleranceConfig.create({
            data: { version: 1, status: 'ACTIVE', tolerancePct: 2.0 },
        });
    }
    console.log('Seeded procurement_match_tolerance_config v1 ACTIVE (2% 3-way match tolerance, pending Finance/CEO ratification).');
    const AI_CAPABILITIES = [
        'AI_CHAT', 'AI_SUMMARIZE', 'AI_REPORT_DRAFT', 'AI_KPI_EXPLAIN', 'AI_RISK_INTERPRET',
        'AI_SHARIAH_ASSIST', 'AI_PERF_COMMENTARY', 'AI_WORKFLOW_SUGGEST', 'AI_AUDITLOG_QUERY', 'AI_ANSWER_RBAC',
    ];
    for (const capabilityCode of AI_CAPABILITIES) {
        await prisma.aiCapabilityFlag.upsert({
            where: { capabilityCode },
            create: { capabilityCode, isEnabled: false },
            update: {},
        });
    }
    console.log(`Seeded ${AI_CAPABILITIES.length} ai_capability_flag rows, ALL isEnabled=false (invariant 33e: "all flags ship OFF").`);
    await prisma.aiKillSwitch.upsert({ where: { id: 1 }, create: { id: 1, isActive: false }, update: {} });
    console.log('Seeded ai_kill_switch singleton, isActive=false.');
    const FRONTIER_CAPABILITIES = new Set(['AI_SHARIAH_ASSIST', 'AI_REPORT_DRAFT']);
    for (const capabilityCode of AI_CAPABILITIES) {
        await prisma.aiTieredModelPolicy.upsert({
            where: { capabilityCode },
            create: { capabilityCode, tier: FRONTIER_CAPABILITIES.has(capabilityCode) ? 'FRONTIER_TIER' : 'MID_TIER', providerName: null, modelName: null },
            update: {},
        });
    }
    console.log(`Seeded ${AI_CAPABILITIES.length} ai_tiered_model_policy rows (2 FRONTIER_TIER: AI_SHARIAH_ASSIST/AI_REPORT_DRAFT, ${AI_CAPABILITIES.length - 2} MID_TIER) — provider/model slots NULL pending FinCon contracting.`);
    const CONTEXT_RULES = [
        { capabilityCode: 'AI_SHARIAH_ASSIST', contextType: 'WORKFLOW_STEP', requiredWorkflowTypeCode: 'INVESTOR_MANDATE_SHARIAH_REVIEW' },
        { capabilityCode: 'AI_REPORT_DRAFT', contextType: 'REPORT_WORKSPACE' },
        { capabilityCode: 'AI_KPI_EXPLAIN', contextType: 'ORG_UNIT_SCOPED' },
        { capabilityCode: 'AI_CHAT', contextType: 'NONE' },
        { capabilityCode: 'AI_SUMMARIZE', contextType: 'NONE' },
        { capabilityCode: 'AI_RISK_INTERPRET', contextType: 'NONE' },
        { capabilityCode: 'AI_PERF_COMMENTARY', contextType: 'NONE' },
        { capabilityCode: 'AI_WORKFLOW_SUGGEST', contextType: 'NONE' },
        { capabilityCode: 'AI_AUDITLOG_QUERY', contextType: 'NONE' },
        { capabilityCode: 'AI_ANSWER_RBAC', contextType: 'NONE' },
    ];
    for (const rule of CONTEXT_RULES) {
        await prisma.aiCapabilityContextRule.upsert({
            where: { capabilityCode: rule.capabilityCode },
            create: rule,
            update: rule,
        });
    }
    console.log(`Seeded ${CONTEXT_RULES.length} ai_capability_context_rule rows (gate 3).`);
    const DATA_POINTS = [
        { code: 'VENDOR_COUNT', label: 'Registered vendor count', description: 'Total vendor register rows (Budget Spec §4).', requiredFunctionCode: 'PROCUREMENT_OPERATIONS', requiredLevel: 'VIEW', sourceType: 'LIVE_QUERY', sourceRef: 'vendor_count' },
        { code: 'SCHEDULED_JOB_COUNT', label: 'Scheduled job roster size', description: 'Number of jobs on the platform scheduler roster (invariant 32).', requiredFunctionCode: 'SCHEDULER_OPERATIONS', requiredLevel: 'VIEW', sourceType: 'LIVE_QUERY', sourceRef: 'scheduled_job_count' },
        { code: 'OPEN_ENCUMBRANCE_COUNT', label: 'Open expenditure encumbrances', description: 'Count of OPEN commitment-accounting rows (Budget Spec §3).', requiredFunctionCode: 'BUDGET_MANAGEMENT', requiredLevel: 'VIEW', sourceType: 'LIVE_QUERY', sourceRef: 'open_encumbrance_count' },
    ];
    for (const dp of DATA_POINTS) {
        await prisma.dataPointCatalog.upsert({ where: { code: dp.code }, create: dp, update: dp });
    }
    console.log(`Seeded ${DATA_POINTS.length} data_point_catalog rows (invariant 22/33 AI vocabulary, LIVE_QUERY-sourced).`);
    const now = new Date();
    const AI_TOKEN_BUDGET_ORG_UNITS = ['FINCON', 'PORTFOLIO', 'BD', 'CORP_SERVICES'];
    for (const orgUnitCode of AI_TOKEN_BUDGET_ORG_UNITS) {
        await prisma.aiTokenBudget.upsert({
            where: { orgUnitCode_periodYear_periodMonth: { orgUnitCode, periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1 } },
            create: { orgUnitCode, periodYear: now.getFullYear(), periodMonth: now.getMonth() + 1, tokenLimit: 10_000 },
            update: {},
        });
    }
    console.log(`Seeded ${AI_TOKEN_BUDGET_ORG_UNITS.length} ai_token_budget rows for the current period (10,000 tokens/month default).`);
    await prisma.taskEscalationConfig.upsert({ where: { id: 1 }, create: { id: 1, amberThresholdPct: 70 }, update: {} });
    const TASK_DEFAULT_GATE_POLICY = [
        { minDefaultCount: 1, severityCode: 'MINOR' },
        { minDefaultCount: 3, severityCode: 'MAJOR' },
        { minDefaultCount: 5, severityCode: 'SEVERE' },
    ];
    let systemSeedUser = await prisma.appUser.findFirst({ where: { email: 'system-scheduler@one17.test' } });
    if (!systemSeedUser) {
        systemSeedUser = await prisma.appUser.create({ data: { email: 'system-scheduler@one17.test', displayName: 'System Scheduler' } });
    }
    const systemSeedUserHasRole = await prisma.userRole.findFirst({ where: { userId: systemSeedUser.id, roleCode: 'SYSTEM_SCHEDULER' } });
    if (!systemSeedUserHasRole) {
        await prisma.userRole.create({ data: { userId: systemSeedUser.id, roleCode: 'SYSTEM_SCHEDULER' } });
    }
    if (systemSeedUser) {
        for (const p of TASK_DEFAULT_GATE_POLICY) {
            await prisma.taskDefaultGatePolicy.upsert({
                where: { minDefaultCount: p.minDefaultCount },
                create: { ...p, createdByUserId: systemSeedUser.id },
                update: { severityCode: p.severityCode },
            });
        }
    }
    console.log(`Seeded task_escalation_config (70% AMBER threshold)${systemSeedUser ? ` + ${TASK_DEFAULT_GATE_POLICY.length} task_default_gate_policy rows` : ' (task_default_gate_policy rows skipped — system-scheduler user not yet provisioned; SchedulerService creates it on first job run)'}.`);
    if (systemSeedUser) {
        await prisma.requiredDocumentConfig.upsert({
            where: { applicationType_documentType: { applicationType: 'INVESTOR_BANK_ACCOUNT_CHANGE', documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION' } },
            create: { applicationType: 'INVESTOR_BANK_ACCOUNT_CHANGE', documentType: 'CLIENT_SIGNED_CHANGE_INSTRUCTION', status: 'ACTIVE', createdByUserId: systemSeedUser.id },
            update: {},
        });
    }
    const existingBankChangeConfig = await prisma.investorBankAccountChangeConfig.findFirst({ where: { status: 'ACTIVE' } });
    if (!existingBankChangeConfig) {
        await prisma.investorBankAccountChangeConfig.create({
            data: { version: 1, status: 'ACTIVE', coolingOffDays: 3 },
        });
    }
    console.log('Seeded investor_bank_account_change_config v1 ACTIVE (3-day cooling-off)' + (systemSeedUser ? ' + required_document_config (CLIENT_SIGNED_CHANGE_INSTRUCTION).' : ' (required_document_config skipped — system-scheduler user not yet provisioned).'));
    const existingDsrResponseConfig = await prisma.dsrResponseConfig.findFirst({ where: { status: 'ACTIVE' } });
    if (!existingDsrResponseConfig) {
        await prisma.dsrResponseConfig.create({ data: { id: 1, version: 1, status: 'ACTIVE', responseDays: 30 } });
    }
    console.log('Seeded dsr_response_config v1 ACTIVE (30-day statutory response window per GAID Schedule 9).');
    if (systemSeedUser) {
        const existingPrivacyNotice = await prisma.privacyNoticeConfig.findFirst({ where: { status: 'ACTIVE' } });
        if (!existingPrivacyNotice) {
            await prisma.privacyNoticeConfig.create({
                data: {
                    version: 1,
                    status: 'ACTIVE',
                    effectiveFrom: new Date(),
                    createdByUserId: systemSeedUser.id,
                    noticeText: '[PLACEHOLDER — Compliance/DPO to supply final privacy notice text per NDP Act GAID Article 7(j)/(l)/(m). ' +
                        'One17 processes your personal data to provide investment, wealth-management, and financing services under a ' +
                        'lawful basis recognised by the Nigeria Data Protection Act 2023 (typically consent or contractual necessity). ' +
                        'You have the right to access, rectify, request erasure of, object to, or request portability of your personal ' +
                        'data by lodging a request through our Enquiries channel, and the right to lodge a complaint with the Nigeria ' +
                        'Data Protection Commission. This placeholder is not final legal text.]',
                },
            });
        }
    }
    console.log('Seeded privacy_notice_config v1 ACTIVE (PLACEHOLDER text — Compliance/DPO to supply final copy)' + (systemSeedUser ? '.' : ' (skipped — system-scheduler user not yet provisioned).'));
    const RETENTION_SCHEDULE_ROWS = [
        { dataClass: 'Investor KYC records (identity documents, screening records)', description: 'AML/CFT and SEC recordkeeping obligations typically require multi-year retention post-relationship; exact period and statutory basis pending Compliance/DPO confirmation.' },
        { dataClass: 'Investor financial/transaction records', description: 'Financial-records retention law (Companies and Allied Matters Act, tax law) governs; exact period pending Compliance/DPO confirmation.' },
        { dataClass: 'Complaint records (including DSR-tagged entries)', description: 'NDPC/consumer-protection recordkeeping expectations; exact period pending Compliance/DPO confirmation.' },
        { dataClass: 'Marketing subscriber consent records', description: 'Retained for as long as the subscription is active plus an evidentiary period after unsubscribe; exact period pending Compliance/DPO confirmation.' },
        { dataClass: 'Employee personnel records', description: 'Labour law and pension recordkeeping obligations; exact period pending Compliance/DPO confirmation.' },
        { dataClass: 'Payroll and tax records', description: 'Tax law recordkeeping obligations (FIRS/PAYE); exact period pending Compliance/DPO confirmation.' },
        { dataClass: 'Application/server logs (api-stdout.log, api-stderr.log)', description: 'Structured JSON logs (RES-001 F-01) rotate by size (NSSM AppRotateFiles, 10MB) but have no age-based disposal policy yet; exact retention period pending Technology/Compliance confirmation.' },
    ];
    for (const row of RETENTION_SCHEDULE_ROWS) {
        const existing = await prisma.retentionScheduleEntry.findFirst({ where: { dataClass: row.dataClass } });
        if (!existing) {
            await prisma.retentionScheduleEntry.create({ data: { dataClass: row.dataClass, description: row.description, status: 'DRAFT' } });
        }
    }
    const existingAuditTrailRetention = await prisma.retentionScheduleEntry.findFirst({ where: { dataClass: 'Audit trail (audit_trail table)' } });
    if (!existingAuditTrailRetention && systemSeedUser) {
        await prisma.retentionScheduleEntry.create({
            data: {
                dataClass: 'Audit trail (audit_trail table)',
                description: 'Structural platform fact, not a business policy choice.',
                retentionPeriodMonths: null,
                statutoryBasis: 'N/A — retained permanently as the platform\'s own evidence-of-controls record.',
                disposalTreatment: 'N/A — insert-only, DB-trigger-enforced (AMD-11 immutability trigger); no row is ever deleted or updated.',
                status: 'ACTIVE',
                confirmedByUserId: systemSeedUser.id,
                confirmedAt: new Date(),
            },
        });
    }
    console.log(`Seeded retention_schedule_entry: ${RETENTION_SCHEDULE_ROWS.length} DRAFT rows pending Compliance/DPO confirmation` + (systemSeedUser ? ' + 1 ACTIVE row (audit trail, structural fact).' : ' (audit-trail row skipped — system-scheduler user not yet provisioned).'));
    if (systemSeedUser) {
        const existingOversightPolicy = await prisma.execOversightPolicy.findFirst({ where: { version: 1 } });
        if (!existingOversightPolicy) {
            await prisma.execOversightPolicy.create({
                data: {
                    version: 1,
                    status: 'ACTIVE',
                    grantedRoleCodes: ['MD_CEO'],
                    proposedByUserId: systemSeedUser.id,
                    approvedByUserId: systemSeedUser.id,
                    approvedAt: new Date(),
                },
            });
        }
    }
    console.log('Seeded exec_oversight_policy v1 ACTIVE (grantedRoleCodes: MD_CEO only, per invariant 61b\'s own default)' + (systemSeedUser ? '.' : ' (skipped — system-scheduler user not yet provisioned).'));
    const existingLetterhead = await prisma.letterheadTemplate.findFirst({ where: { version: 1 } });
    if (!existingLetterhead) {
        await prisma.letterheadTemplate.create({
            data: {
                version: 1,
                status: 'DRAFT',
                companyName: 'One17 Capital Limited',
                addressLine1: '[CoSec to provide: registered office address line 1]',
                addressLine2: '[CoSec to provide: registered office address line 2, if any]',
                rcNumber: '[CoSec to provide: RC number]',
                secRegistrationLine: '[CoSec to provide: SEC registration line]',
                brandPrimaryColorHex: '#545255',
                brandAccentColorHex: '#A1C34F',
                brandDeepColorHex: '#7D9C33',
                footerDisclaimer: '[Compliance to provide: standard footer disclaimer wording]',
            },
        });
    }
    console.log('Seeded letterhead_template v1 DRAFT (CoSec content pending -- see QUESTIONS_FOR_REVIEW.md; NOT auto-activated).');
    const certificateTemplateSeeds = [
        { templateKey: 'HF_UNIT_NAV', label: 'Halal Fund (units/NAV)' },
        { templateKey: 'POOL_ND_PSR', label: 'Pool / ND Mandate (capital/PSR)' },
        { templateKey: 'ND_WAKALAH', label: 'ND Mandate Wakalah (fee/expected-profit)' },
    ];
    for (const c of certificateTemplateSeeds) {
        const existing = await prisma.documentTemplate.findFirst({ where: { templateType: 'CERTIFICATE', templateKey: c.templateKey, version: 1 } });
        if (!existing) {
            await prisma.documentTemplate.create({
                data: {
                    templateType: 'CERTIFICATE',
                    templateKey: c.templateKey,
                    version: 1,
                    status: 'DRAFT',
                    disclaimerText: `[Compliance to provide: standard disclaimer wording for the ${c.label} certificate]`,
                    secRuleDisclaimer: '[Compliance to provide: SEC-rule disclaimer text for this certificate class]',
                },
            });
        }
    }
    console.log('Seeded document_template v1 DRAFT x3 (CERTIFICATE, one per product class -- Compliance content pending, see QUESTIONS_FOR_REVIEW.md; NOT auto-activated).');
    const letterTemplateSeeds = [
        { templateKey: 'WELCOME', label: 'Welcome letter (new investor onboarding)' },
        { templateKey: 'MATURITY_NOTICE', label: 'Maturity notice (product account approaching maturity)' },
        { templateKey: 'ROLLOVER_CONFIRMATION', label: 'Rollover confirmation (product account rolled over)' },
        { templateKey: 'AD_HOC', label: 'Ad-hoc official letter (general correspondence)' },
        { templateKey: 'BANK_INSTRUCTION', label: 'Bank instruction letter (payout batch remittance to bank)', mergeFields: '{{batchNumber}}, {{periodLabel}}, {{totalGrossKobo}}, {{totalWhtKobo}}, {{totalNetKobo}}, {{beneficiarySchedule}}, {{date}}' },
        { templateKey: 'TAX_REMITTANCE_INSTRUCTION', label: 'Tax remittance instruction letter (WHT/VAT/Stamp Duty payment to authority)', mergeFields: '{{taxType}}, {{authority}}, {{periodLabel}}, {{totalKobo}}, {{dueDate}}, {{date}}' },
    ];
    for (const l of letterTemplateSeeds) {
        const existing = await prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: l.templateKey, version: 1 } });
        if (!existing) {
            await prisma.documentTemplate.create({
                data: {
                    templateType: 'LETTER',
                    templateKey: l.templateKey,
                    version: 1,
                    status: 'DRAFT',
                    bodyTemplate: l.mergeFields
                        ? `[PENDING WORDING -- CEO/Finance to provide: ${l.label} body text. Available merge fields: ${l.mergeFields}]`
                        : `[Compliance to provide: ${l.label} body text. Available merge fields: {{investor.fullLegalName}}, {{investor.investorId}}, {{counterparty.legalName}}, {{product.name}}, {{account.reference}}, {{date}}]`,
                },
            });
        }
    }
    console.log('Seeded document_template v1 DRAFT x6 (LETTER, one per letter type -- Compliance/CEO/Finance content pending, see QUESTIONS_FOR_REVIEW.md; NOT auto-activated).');
    const PAYMENT_REMINDER_LADDER = [
        { dayOffset: -7, channels: ['EMAIL'] },
        { dayOffset: -3, channels: ['EMAIL', 'SMS'], createsFollowUpCallTask: true },
        { dayOffset: 0, channels: ['EMAIL', 'SMS'] },
        { dayOffset: 1, channels: ['EMAIL', 'SMS'] },
        { dayOffset: 2, channels: ['EMAIL', 'SMS'] },
        { dayOffset: 3, channels: ['EMAIL', 'SMS'], notifyManagement: true, createsFollowUpCallTask: true },
        { dayOffset: 4, channels: ['EMAIL', 'SMS'] },
        { dayOffset: 5, channels: ['EMAIL', 'SMS'] },
        { dayOffset: 6, channels: ['EMAIL', 'SMS'], notifyManagement: true, isPostGraceDefault: true },
    ];
    for (const r of PAYMENT_REMINDER_LADDER) {
        await prisma.paymentReminderLadderConfig.upsert({
            where: { dayOffset: r.dayOffset },
            create: { dayOffset: r.dayOffset, channels: r.channels, notifyManagement: r.notifyManagement ?? false, createsFollowUpCallTask: r.createsFollowUpCallTask ?? false, isPostGraceDefault: r.isPostGraceDefault ?? false },
            update: { channels: r.channels, notifyManagement: r.notifyManagement ?? false, createsFollowUpCallTask: r.createsFollowUpCallTask ?? false, isPostGraceDefault: r.isPostGraceDefault ?? false },
        });
    }
    console.log(`Seeded ${PAYMENT_REMINDER_LADDER.length} payment_reminder_ladder_config rows (T-7 through T+6 post-grace default).`);
    await prisma.bureauPolicyConfig.upsert({
        where: { id: 1 },
        create: { id: 1, minIntervalDays: 30 },
        update: {},
    });
    console.log('Seeded bureau_policy_config (minIntervalDays=30, Risk-editable).');
    if (systemSeedUser) {
        const DASHBOARD_METRIC_DEFINITIONS = [
            { metricCode: 'COMPANY_ACCT_DASHBOARD.INCOME_CURRENT', displayLabel: 'Income — Current Period', screenCode: 'DASHBOARD_COMPANY_ACCOUNTING', businessMeaning: 'Sum of INCOME-account journal-line net credit balance for the COMPANY ledger entity, from the 1st of the current calendar month to today.', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE account_type=INCOME AND ledger_entity_code=COMPANY entity, entry_date in [month-start, today]', inclusionExclusionRules: 'Posted and DRAFT journal lines both included (no status filter) — matches invariant 43b\'s existing CEO-dashboard convention for this same underlying query shape.', ownerRoleCode: 'MGR_FINCON', ledgerReconcilable: true },
            { metricCode: 'COMPANY_ACCT_DASHBOARD.EXPENSE_CURRENT', displayLabel: 'Expenses — Current Period', screenCode: 'DASHBOARD_COMPANY_ACCOUNTING', businessMeaning: 'Sum of EXPENSE-account journal-line net debit balance for the COMPANY ledger entity, from the 1st of the current calendar month to today.', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE account_type=EXPENSE AND ledger_entity_code=COMPANY entity, entry_date in [month-start, today]', inclusionExclusionRules: 'Posted and DRAFT journal lines both included (no status filter).', ownerRoleCode: 'MGR_FINCON', ledgerReconcilable: true },
            { metricCode: 'COMPANY_ACCT_DASHBOARD.INCOME_YTD', displayLabel: 'Income — Year to Date', screenCode: 'DASHBOARD_COMPANY_ACCOUNTING', businessMeaning: 'Same as INCOME_CURRENT but from 1 January of the current fiscal year.', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE account_type=INCOME AND ledger_entity_code=COMPANY entity, entry_date in [Jan 1, today]', inclusionExclusionRules: 'Posted and DRAFT journal lines both included.', ownerRoleCode: 'CFO', ledgerReconcilable: true },
            { metricCode: 'COMPANY_ACCT_DASHBOARD.EXPENSE_YTD', displayLabel: 'Expenses — Year to Date', screenCode: 'DASHBOARD_COMPANY_ACCOUNTING', businessMeaning: 'Same as EXPENSE_CURRENT but from 1 January of the current fiscal year.', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE account_type=EXPENSE AND ledger_entity_code=COMPANY entity, entry_date in [Jan 1, today]', inclusionExclusionRules: 'Posted and DRAFT journal lines both included.', ownerRoleCode: 'CFO', ledgerReconcilable: true },
            { metricCode: 'FUND_ACCT_DASHBOARD.FEES_ACCRUED', displayLabel: 'Fees Accrued — Cumulative', screenCode: 'DASHBOARD_FUND_ACCOUNTING', businessMeaning: 'Sum, across every distinct fee_type, of that fee\'s latest cumulative_amount_kobo row in fee_accrual for the fund\'s ledger entity.', sourceTablesAndJoins: 'fee_accrual WHERE ledger_entity_code=<fund entity>, latest row per fee_type by accrual_date', inclusionExclusionRules: 'Only the single most-recent accrual_date row per fee_type is summed (cumulative_amount_kobo is already a running total, not a per-day delta).', ownerRoleCode: 'FUND_ACCT', ledgerReconcilable: true },
            { metricCode: 'BD_DASHBOARD.TOTAL_MOBILIZED', displayLabel: 'Total Mobilized (90d)', screenCode: 'DASHBOARD_BD', businessMeaning: 'Sum of amount_kobo across APPROVED SUBSCRIPTION requests decided in the trailing 90 days, scoped to the viewing officer\'s own requests unless scope=enterprise.', sourceTablesAndJoins: 'subscription_request WHERE request_type=SUBSCRIPTION AND status=APPROVED AND decided_at >= now-90d', inclusionExclusionRules: 'REJECTED and PENDING requests excluded. Not routed through ReconciliationService — this is a flow-attribution sum over the subscription pipeline, not itself a GL account balance.', ownerRoleCode: 'MGR_BD', ledgerReconcilable: false },
            { metricCode: 'CEO_DASHBOARD.AUM_BY_PRODUCT_CLASS', displayLabel: 'AUM by Product Class', screenCode: 'DASHBOARD_CEO', businessMeaning: 'ACTIVE ProductAccount.principal_or_committed_kobo grouped by the owning product\'s engine_type (UNIT_NAV, PSR_WATERFALL), plus ACTIVE NdMandateAccount.committed_capital_kobo as its own MANDATE slice.', sourceTablesAndJoins: 'product_account JOIN product WHERE status=ACTIVE, grouped by product.engine_type; nd_mandate_account WHERE status=ACTIVE summed separately as MANDATE', inclusionExclusionRules: 'Only ACTIVE accounts/mandates. Not routed through ReconciliationService — a portfolio-composition breakdown, not a single GL account balance.', ownerRoleCode: 'MD_CEO', ledgerReconcilable: false },
            { metricCode: 'CEO_DASHBOARD.INCOME_MIX', displayLabel: 'Income Mix (YTD)', screenCode: 'DASHBOARD_CEO', businessMeaning: 'COMPANY entity INCOME-account journal-line net credit balances, year to date, one slice per account.', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE account_type=INCOME AND ledger_entity_code=COMPANY entity, entry_date in [Jan 1, today]', inclusionExclusionRules: 'Posted and DRAFT journal lines both included (matches invariant 43b\'s existing dashboard convention). Zero-balance accounts excluded from the slice list.', ownerRoleCode: 'MD_CEO', ledgerReconcilable: false },
            { metricCode: 'CEO_DASHBOARD.INCOME_EXPENSE_TREND', displayLabel: 'Income vs Expense Trend (6mo)', screenCode: 'DASHBOARD_CEO', businessMeaning: 'COMPANY entity INCOME vs EXPENSE journal-line net balances, one bar-pair per trailing calendar month (current month + 5 prior).', sourceTablesAndJoins: 'journal_entry_line JOIN journal_entry JOIN chart_of_account WHERE ledger_entity_code=COMPANY entity, grouped by calendar month of entry_date', inclusionExclusionRules: 'Posted and DRAFT journal lines both included.', ownerRoleCode: 'MD_CEO', ledgerReconcilable: false },
            { metricCode: 'CEO_DASHBOARD.MOBILIZATION_BY_MONTH', displayLabel: 'Mobilization by Month (6mo)', screenCode: 'DASHBOARD_CEO', businessMeaning: 'Sum of amount_kobo across SUBSCRIPTION txn rows, platform-wide across every ledger entity, one bar per trailing calendar month (current month + 5 prior).', sourceTablesAndJoins: 'txn WHERE txn_type=SUBSCRIPTION, grouped by calendar month of value_date', inclusionExclusionRules: 'All ledger entities included (not one fund) — platform-wide mobilization, the CEO\'s own view of the same flow BD_DASHBOARD.TOTAL_MOBILIZED scopes per-officer.', ownerRoleCode: 'MD_CEO', ledgerReconcilable: false },
        ];
        for (const m of DASHBOARD_METRIC_DEFINITIONS) {
            const existing = await prisma.metricDefinition.findFirst({ where: { metricCode: m.metricCode } });
            if (!existing) {
                await prisma.metricDefinition.create({
                    data: { ...m, version: 1, status: 'ACTIVE', createdByUserId: systemSeedUser.id },
                });
            }
        }
        console.log(`Seeded ${DASHBOARD_METRIC_DEFINITIONS.length} metric_definition rows (CHECK14 — the first rows this table has ever carried).`);
    }
    else {
        console.log('Skipped CHECK14 metric_definition seeding — system-scheduler user not yet provisioned.');
    }
    const LEAVE_TYPES = [
        { code: 'ANNUAL', name: 'Annual Leave', defaultAnnualDays: 21 },
        { code: 'SICK', name: 'Sick Leave', defaultAnnualDays: 12 },
        { code: 'MATERNITY', name: 'Maternity Leave', defaultAnnualDays: 84 },
        { code: 'PATERNITY', name: 'Paternity Leave', defaultAnnualDays: 5 },
        { code: 'COMPASSIONATE', name: 'Compassionate Leave', defaultAnnualDays: 5 },
    ];
    for (const lt of LEAVE_TYPES) {
        await prisma.leaveType.upsert({
            where: { code: lt.code },
            create: { code: lt.code, name: lt.name, defaultAnnualDays: lt.defaultAnnualDays },
            update: { name: lt.name },
        });
    }
    const existingClockInPolicy = await prisma.attendanceClockInPolicy.findFirst({ where: { orgUnitCode: null, cadre: null } });
    if (!existingClockInPolicy) {
        await prisma.attendanceClockInPolicy.create({
            data: { orgUnitCode: null, cadre: null, expectedStartTime: '08:00', graceWindowMinutes: 15, expectedHoursPerDay: 8, status: 'ACTIVE' },
        });
    }
    const ATTENDANCE_LATENESS_GATE_POLICY = [
        { minLateCount: 1, severityCode: 'MINOR' },
        { minLateCount: 3, severityCode: 'MAJOR' },
        { minLateCount: 5, severityCode: 'SEVERE' },
    ];
    if (systemSeedUser) {
        for (const p of ATTENDANCE_LATENESS_GATE_POLICY) {
            await prisma.attendanceLatenessGatePolicy.upsert({
                where: { minLateCount: p.minLateCount },
                create: { ...p, createdByUserId: systemSeedUser.id },
                update: { severityCode: p.severityCode },
            });
        }
    }
    console.log(`Seeded ${LEAVE_TYPES.length} leave_type rows, 1 attendance_clock_in_policy default row${systemSeedUser ? `, ${ATTENDANCE_LATENESS_GATE_POLICY.length} attendance_lateness_gate_policy rows` : ' (attendance_lateness_gate_policy rows skipped — system-scheduler user not yet provisioned)'}.`);
    if (systemSeedUser) {
        const MFA_FINANCIAL_CAPABILITIES = [
            'JOURNAL_ENTRIES', 'JOURNAL_POSTING', 'ACCOUNTING_PERIOD_CLOSE',
            'EXPENDITURE_REQUISITION', 'PAYROLL_CEO_APPROVAL', 'PAYROLL_FINANCE_REVIEW',
            'PETTY_CASH_DISBURSEMENT', 'PETTY_CASH_REPLENISHMENT_APPROVAL',
            'PAYMENT_GATEWAY_POLICY', 'PAYMENT_GATEWAY_SUSPENSE',
        ];
        for (const functionCode of MFA_FINANCIAL_CAPABILITIES) {
            await prisma.mfaFinancialCapability.upsert({
                where: { functionCode },
                create: { functionCode, addedByUserId: systemSeedUser.id },
                update: {},
            });
        }
        await prisma.mfaGlobalEnforcement.upsert({
            where: { id: 1 },
            create: { id: 1, allStaffMandatory: false },
            update: {},
        });
        console.log(`Seeded ${MFA_FINANCIAL_CAPABILITIES.length} mfa_financial_capability rows (MFA-mandatory floor extension) + mfa_global_enforcement singleton (allStaffMandatory=false).`);
    }
    else {
        console.log('Skipped MFA financial-capability + global-enforcement seeding — system-scheduler user not yet provisioned.');
    }
    console.log(`Seeded ${ROLES.length} roles, ${FUNCTIONS.length} functions, ${PERMISSIONS.length} permission rows, ${WORKFLOW_TYPES.length} workflow type(s), 32 approval rules (5 SRS §6.2 Distribution + 1 Delegation grant + 1 investor onboarding + 1 mandate Shariah review + 1 AMD-11 framework map + 1 AMD-09 user-role assignment + 1 AMD-12 risk appetite matrix + 1 journal posting + 1 accounting period close + 1 budget review pack circulation + 1 stress baseline publication + 1 budget activation + 1 expenditure requisition + 1 regulatory filing certification + 1 WM claim validation + 1 PMS score validation + 1 PMS cycle approval + 1 PMS scorecard override + 2 graduated investor onboarding case review + 2 counterparty onboarding case review + 1 counterparty facility application review + 1 strategy layer approval + 1 marketing resource approval + 1 marketing send approval + 1 AI capability flag toggle + 1 stakeholder report approval + 1 employee personal record change — counterparty restructure decisions and complaint resolution are direct capability checks, not WorkflowEngineService entries, see invariant 28e/f), ${SCREENING_CHECKLIST_ITEMS.length} screening checklist items.`);
}
main()
    .catch((err) => {
    console.error(err);
    process.exitCode = 1;
})
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map