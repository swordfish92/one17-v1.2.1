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
exports.SettingsRegistryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const delegation_service_1 = require("../delegation/delegation.service");
const REGISTRY = [
    { domain: 'Onboarding', label: 'Investor Onboarding Config', capability: 'INVESTOR_ONBOARDING', screenPath: '/onboarding', table: 'investorOnboardingConfig' },
    { domain: 'Risk & Compliance', label: 'Complaint SLA Config', capability: 'COMPLAINT_MANAGEMENT', screenPath: '/complaints', table: 'complaintSlaConfig' },
    { domain: 'Wealth Management', label: 'WM Client Tier Bands (NWCS)', capability: 'WM_ADVISORY', screenPath: '/wm', table: 'wmClientTierConfig' },
    { domain: 'Wealth Management', label: 'WM FX Config', capability: 'WM_ADVISORY', screenPath: '/wm', table: 'wmFxConfig' },
    { domain: 'Wealth Management', label: 'WM Sandbox Stress Scenarios', capability: 'WM_ADVISORY', screenPath: '/wm', table: 'wmStressScenarioConfig' },
    { domain: 'Zakat', label: 'Zakat Nisab Config', capability: 'ZAKAT_ADVISORY', screenPath: '/zakat', table: 'zakatNisabConfig' },
    { domain: 'Products & Portfolio', label: 'Halal Fund Launch Config', capability: 'DISTRIBUTION_INITIATION', screenPath: '/distributions', table: 'halalFundLaunchConfig' },
    { domain: 'Risk & Compliance', label: 'Risk Appetite Matrix Versions', capability: 'RISK_APPETITE_MATRIX', screenPath: '/erm', table: 'riskAppetiteMatrixVersion' },
    { domain: 'Risk & Compliance', label: 'Enterprise Stress Scenario Config', capability: 'STRESS_TESTING', screenPath: '/erm', table: 'stressScenarioConfig' },
    { domain: 'Risk & Compliance', label: 'KRI Engine Config', capability: 'RISK_REGISTER', screenPath: '/erm', table: 'kriEngineConfig' },
    { domain: 'Finance & Accounting', label: 'Regulatory Capital Requirement', capability: 'FINANCIAL_STATEMENTS', screenPath: '/fund-accounting', table: 'regulatoryCapitalRequirement' },
    { domain: 'Finance & Accounting', label: 'Budget Variance RAG Threshold', capability: 'FINANCIAL_STATEMENTS', screenPath: '/company-accounting', table: 'budgetVarianceRagThreshold' },
    { domain: 'Finance & Accounting', label: 'Event -> Journal Auto-Posting Map', capability: 'JOURNAL_ENTRIES', screenPath: '/journal-entries', table: 'eventJournalConfig' },
    { domain: 'Administration', label: 'Procurement 3-Way Match Tolerance', capability: 'PROCUREMENT_OPERATIONS', screenPath: '/procurement', table: 'procurementMatchToleranceConfig' },
    { domain: 'HR & Payroll', label: 'Incentive Band Config', capability: 'PMS_PAYROLL', screenPath: '/payroll', table: 'incentiveBandConfig' },
    { domain: 'HR & Payroll', label: 'Tax Rule Config', capability: 'PMS_PAYROLL', screenPath: '/payroll', table: 'taxRuleConfig' },
    { domain: 'HR & Payroll', label: 'PMS Behavioural Gate Severity', capability: 'PMS_BEHAVIOURAL_GATE', screenPath: '/pms', table: 'pmsGateSeverityConfig' },
    { domain: 'Risk & Compliance', label: 'Payment Reminder Ladder Config', capability: 'PAYMENT_REMINDER_LADDER_SETTINGS', screenPath: '/erm', table: 'paymentReminderLadderConfig' },
    { domain: 'Risk & Compliance', label: 'Bureau Gateway Policy', capability: 'BUREAU_GATEWAY_POLICY', screenPath: '/erm', table: 'bureauPolicyConfig' },
    { domain: 'Governance & Strategy', label: 'Board Calendar Reminder Config', capability: 'BOARD_CALENDAR_MANAGEMENT', screenPath: '/governance/board-calendar', table: 'boardCalendarReminderConfig' },
    { domain: 'Governance & Strategy', label: 'Strategy Statement Type Config', capability: 'STRATEGY_LAYER', screenPath: '/strategy', table: 'strategyStatementTypeConfig' },
    { domain: 'Governance & Strategy', label: 'Strategic Pillars & Objectives', capability: 'STRATEGY_LAYER', screenPath: '/pms-strategy-spine', table: 'strategicPillar' },
    { domain: 'HR & Payroll', label: 'KPI Definitions', capability: 'KPI_DEFINITION_MANAGEMENT', screenPath: '/pms-strategy-spine', table: 'kpiDefinition' },
    { domain: 'HR & Payroll', label: 'KPI Class-Weighting Matrix', capability: 'KPI_WEIGHT_MATRIX', screenPath: '/pms-strategy-spine', table: 'kpiWeightMatrix' },
    { domain: 'Administration', label: 'Petty Cash Floats', capability: 'PETTY_CASH_MANAGEMENT', screenPath: '/petty-cash', table: 'pettyCashFloat' },
    { domain: 'Administration', label: 'Corporate Letterhead Template', capability: 'LETTERHEAD_TEMPLATE_MANAGEMENT', screenPath: '/letterhead', table: 'letterheadTemplate' },
    { domain: 'Administration', label: 'Certificate Templates', capability: 'CERTIFICATE_TEMPLATE_MANAGEMENT', screenPath: '/certificate-templates', table: 'documentTemplate' },
    { domain: 'Administration', label: 'Letter Templates', capability: 'LETTER_TEMPLATE_MANAGEMENT', screenPath: '/letter-templates', table: 'documentTemplate' },
    { domain: 'Administration', label: 'AI Capability Flags', capability: 'AI_CAPABILITY_FLAG_MANAGEMENT', screenPath: '/ai-console', table: 'aiCapabilityFlag' },
    { domain: 'Administration', label: 'AI Kill Switch', capability: 'AI_CAPABILITY_FLAG_MANAGEMENT', screenPath: '/ai-console', table: 'aiKillSwitch' },
    { domain: 'Administration', label: 'AI Tiered Model Policy', capability: 'AI_CAPABILITY_FLAG_MANAGEMENT', screenPath: '/ai-console', table: 'aiTieredModelPolicy' },
    { domain: 'Administration', label: 'AI Token Budget', capability: 'AI_CAPABILITY_FLAG_MANAGEMENT', screenPath: '/ai-console', table: 'aiTokenBudget' },
    { domain: 'Administration', label: 'Scheduled Job Catalog', capability: 'SCHEDULER_OPERATIONS', screenPath: '/scheduler', table: 'scheduledJobRegistration' },
    { domain: 'Finance & Accounting', label: 'Tax Rate Versions (WHT/VAT/Stamp Duty)', capability: 'TAX_CONFIGURATION_MANAGEMENT', screenPath: '/tax-configuration', table: 'taxRateVersion' },
    { domain: 'Finance & Accounting', label: 'Investor Tax Exemptions', capability: 'TAX_CONFIGURATION_MANAGEMENT', screenPath: '/tax-configuration', table: 'investorTaxExemption' },
    { domain: 'Finance & Accounting', label: 'Tax GL Account Mapping', capability: 'TAX_CONFIGURATION_MANAGEMENT', screenPath: '/tax-configuration', table: 'taxGlMapping' },
    { domain: 'Finance & Accounting', label: 'Tax Remittance Due-Date Config', capability: 'TAX_CONFIGURATION_MANAGEMENT', screenPath: '/tax-configuration', table: 'taxRemittanceDueDateConfig' },
];
let SettingsRegistryService = class SettingsRegistryService {
    prisma;
    delegation;
    constructor(prisma, delegation) {
        this.prisma = prisma;
        this.delegation = delegation;
    }
    async visibleEntries(userId) {
        const checks = await Promise.all(REGISTRY.map(async (entry) => {
            const [view, initiate, approve] = await Promise.all([
                this.delegation.hasCapability(userId, entry.capability, 'VIEW'),
                this.delegation.hasCapability(userId, entry.capability, 'INITIATE'),
                this.delegation.hasCapability(userId, entry.capability, 'APPROVE'),
            ]);
            return view.eligible || initiate.eligible || approve.eligible;
        }));
        return REGISTRY.filter((_, i) => checks[i]);
    }
    async getRegistry(userId) {
        const entries = await this.visibleEntries(userId);
        const withCounts = await Promise.all(entries.map(async (entry) => {
            const count = await this.prisma[entry.table].count();
            return { ...entry, rowCount: count };
        }));
        return withCounts;
    }
    async exportForAuditor(userId) {
        const entries = await this.visibleEntries(userId);
        const snapshot = await Promise.all(entries.map(async (entry) => {
            const rows = await this.prisma[entry.table].findMany({ take: 500 });
            return { domain: entry.domain, label: entry.label, table: entry.table, rows };
        }));
        return { exportedAt: new Date().toISOString(), exportedByUserId: userId, sections: snapshot };
    }
};
exports.SettingsRegistryService = SettingsRegistryService;
exports.SettingsRegistryService = SettingsRegistryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        delegation_service_1.DelegationService])
], SettingsRegistryService);
//# sourceMappingURL=settings-registry.service.js.map