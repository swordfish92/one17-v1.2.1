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
exports.ActivationConsoleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const ledger_service_1 = require("../ledger/ledger.service");
const period_service_1 = require("../period/period.service");
const task_service_1 = require("../task/task.service");
const activation_console_types_1 = require("./activation-console.types");
const STEP_LABELS = {
    IDENTITY: '1. Identity',
    PEOPLE: '2. People',
    BOOKS: '3. Books',
    TAXES: '4. Taxes',
    PRODUCTS: '5. Products',
    RISK: '6. Risk',
    RAILS: '7. Rails / Gateways',
    DATA: '8. Data',
    PROOF: '9. Proof',
};
const REQUIRED_STEPS = new Set(['IDENTITY', 'PEOPLE', 'BOOKS', 'TAXES', 'PRODUCTS', 'RISK', 'DATA', 'PROOF']);
const SKIPPABLE_STEPS = new Set(['RAILS']);
let ActivationConsoleService = class ActivationConsoleService {
    prisma;
    audit;
    delegation;
    ledger;
    period;
    task;
    constructor(prisma, audit, delegation, ledger, period, task) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
        this.ledger = ledger;
        this.period = period;
        this.task = task;
    }
    async getStatus() {
        const skips = await this.prisma.activationStepSkip.findMany();
        const skipByCode = new Map(skips.map((s) => [s.stepCode, s]));
        const state = await this.prisma.activationState.findUnique({ where: { id: 1 } });
        const probes = {
            IDENTITY: () => this.probeIdentity(),
            PEOPLE: () => this.probePeople(),
            BOOKS: () => this.probeBooks(),
            TAXES: () => this.probeTaxes(),
            PRODUCTS: () => this.probeProducts(),
            RISK: () => this.probeRisk(),
            RAILS: () => this.probeRails(),
            DATA: () => this.probeData(),
            PROOF: () => this.probeProof(),
        };
        const steps = [];
        for (const code of activation_console_types_1.ACTIVATION_STEP_CODES) {
            const skip = skipByCode.get(code);
            let computed;
            try {
                computed = await probes[code]();
            }
            catch (err) {
                computed = { status: 'RED', detail: `Probe failed: ${err.message}`, deepLink: '/settings', subSteps: [] };
            }
            steps.push({
                code,
                label: STEP_LABELS[code],
                required: REQUIRED_STEPS.has(code),
                skippable: SKIPPABLE_STEPS.has(code),
                skipped: !!skip,
                skippedAt: skip?.skippedAt.toISOString() ?? null,
                skippedByUserId: skip?.skippedByUserId ?? null,
                ...computed,
            });
        }
        const requiredSteps = steps.filter((s) => s.required);
        const greenRequired = requiredSteps.filter((s) => s.status === 'GREEN').length;
        const readinessScorePct = requiredSteps.length === 0 ? 100 : Math.round((greenRequired / requiredSteps.length) * 100);
        const canActivate = requiredSteps.every((s) => s.status === 'GREEN');
        return {
            steps,
            readinessScorePct,
            canActivate,
            activatedAt: state?.activatedAt?.toISOString() ?? null,
            activatedByUserId: state?.activatedByUserId ?? null,
        };
    }
    async probeIdentity() {
        const active = await this.prisma.letterheadTemplate.findFirst({ where: { status: 'ACTIVE' } });
        const subSteps = [
            {
                code: 'LETTERHEAD',
                label: 'Corporate letterhead (company profile, brand, RC/SEC lines)',
                status: active ? 'GREEN' : 'RED',
                detail: active ? `ACTIVE v${active.version}: ${active.companyName}` : 'No ACTIVE letterhead template -- company profile/brand not recorded.',
                deepLink: '/letterhead',
            },
        ];
        return this.rollUp(subSteps, '/letterhead');
    }
    async probePeople() {
        const [orgUnitCount, positionCount, superAdminCount, rolePermissionCount] = await Promise.all([
            this.prisma.orgUnit.count(),
            this.prisma.position.count(),
            this.prisma.userRole.count({ where: { roleCode: 'SUPER_ADMIN', user: { status: 'ACTIVE' } } }),
            this.prisma.rolePermission.count(),
        ]);
        const subSteps = [
            {
                code: 'ORG_STRUCTURE',
                label: 'Org units + positions (minimum viable seats)',
                status: orgUnitCount > 0 && positionCount > 0 ? 'GREEN' : 'RED',
                detail: `${orgUnitCount} org unit(s), ${positionCount} position(s).`,
                deepLink: '/org-structure',
            },
            {
                code: 'SUPER_ADMINS',
                label: '≥2 active Super Admins (no single point of lockout)',
                status: superAdminCount >= 2 ? 'GREEN' : 'RED',
                detail: `${superAdminCount} active SUPER_ADMIN user(s).`,
                deepLink: '/staff-users',
            },
            {
                code: 'DOA_LIMITS',
                label: 'Delegation of Authority limits (starter-pack role permissions)',
                status: rolePermissionCount > 0 ? 'GREEN' : 'RED',
                detail: `${rolePermissionCount} governed role-permission row(s) (approval limits live per role x function).`,
                deepLink: '/access-control',
            },
        ];
        return this.rollUp(subSteps, '/org-structure');
    }
    async probeBooks() {
        const entities = await this.prisma.ledgerEntity.findMany({ where: { status: 'ACTIVE' } });
        if (entities.length === 0) {
            return {
                status: 'RED',
                detail: 'No ACTIVE ledger entities exist yet.',
                deepLink: '/journal-entries',
                subSteps: [],
            };
        }
        const subSteps = [];
        for (const entity of entities) {
            const [coaCount, periodCount] = await Promise.all([
                this.prisma.chartOfAccount.count({ where: { ledgerEntityCode: entity.code } }),
                this.prisma.accountingPeriod.count({ where: { ledgerEntityCode: entity.code } }),
            ]);
            const ok = coaCount > 0 && periodCount > 0;
            subSteps.push({
                code: entity.code,
                label: `${entity.name} (${entity.code})`,
                status: ok ? 'GREEN' : 'RED',
                detail: `${coaCount} CoA row(s), ${periodCount} accounting period(s).`,
                deepLink: '/accounting-periods',
            });
        }
        return this.rollUp(subSteps, '/journal-entries');
    }
    async probeTaxes() {
        const types = ['WHT', 'VAT', 'STAMP_DUTY'];
        const subSteps = [];
        for (const taxType of types) {
            const active = await this.prisma.taxRateVersion.findFirst({ where: { taxType, status: 'ACTIVE' } });
            subSteps.push({
                code: taxType,
                label: `${taxType} rate table`,
                status: active ? 'GREEN' : 'RED',
                detail: active ? `ACTIVE v${active.version}, effective ${active.effectiveFrom.toISOString().slice(0, 10)}.` : 'No ACTIVE rate version -- not configured (absence never counts as zero-rated).',
                deepLink: '/tax-configuration',
            });
        }
        return this.rollUp(subSteps, '/tax-configuration');
    }
    async probeProducts() {
        const products = await this.prisma.product.findMany({ where: { status: { not: 'RETIRED' } } });
        if (products.length === 0) {
            return {
                status: 'RED',
                detail: 'No products configured yet.',
                deepLink: '/hub/products-fund-ops',
                subSteps: [],
            };
        }
        const subSteps = [];
        for (const product of products) {
            const latestParams = await this.prisma.productParameters.findFirst({ where: { productCode: product.code }, orderBy: { version: 'desc' } });
            const hasSsbRef = !!product.shariahApprovedAt && !!product.shariahApprovalRef;
            const hasApprovedParams = !!latestParams?.approvedByUserId;
            const ok = hasSsbRef && hasApprovedParams;
            subSteps.push({
                code: product.code,
                label: `${product.name} (${product.code})`,
                status: ok ? 'GREEN' : 'RED',
                detail: hasSsbRef
                    ? `SSB ref: "${product.shariahApprovalRef}". Parameters ${hasApprovedParams ? 'approved' : 'NOT yet approved'}.`
                    : 'No SSB resolution reference recorded -- Shariah gate never waived.',
                deepLink: '/shariah-governance',
            });
        }
        return this.rollUp(subSteps, '/shariah-governance');
    }
    async probeRisk() {
        const active = await this.prisma.riskAppetiteMatrixVersion.findFirst({ where: { status: 'ACTIVE' } });
        const ok = !!active && !!active.boardResolutionRef;
        const subSteps = [
            {
                code: 'RISK_APPETITE_MATRIX',
                label: 'Risk appetite matrix, Board-resolution-approved',
                status: ok ? 'GREEN' : 'RED',
                detail: active
                    ? active.boardResolutionRef
                        ? `ACTIVE v${active.version}, Board resolution ${active.boardResolutionRef}.`
                        : `ACTIVE v${active.version} but no Board resolution reference recorded.`
                    : 'No ACTIVE risk appetite matrix version.',
                deepLink: '/erm',
            },
        ];
        return this.rollUp(subSteps, '/erm');
    }
    async probeRails() {
        const [payment, bureau, attendance, bankInstructionLetter] = await Promise.all([
            this.prisma.paymentGatewayProvider.findFirst({ where: { isActive: true } }),
            this.prisma.bureauProvider.findFirst({ where: { isActive: true } }),
            this.prisma.attendanceProvider.findFirst({ where: { isActive: true } }),
            this.prisma.documentTemplate.findFirst({ where: { templateType: 'LETTER', templateKey: 'BANK_INSTRUCTION', status: 'ACTIVE' } }),
        ]);
        const aiEnabledCount = await this.prisma.aiCapabilityFlag.count({ where: { isEnabled: true } });
        const subSteps = [
            { code: 'PAYMENT_GATEWAY', label: 'Payment gateway provider', status: payment ? 'GREEN' : 'AMBER', detail: payment ? `Active: ${payment.id}` : 'No active provider -- deposits recorded manually until configured.', deepLink: '/payment-gateway' },
            { code: 'BUREAU_GATEWAY', label: 'Credit bureau provider', status: bureau ? 'GREEN' : 'AMBER', detail: bureau ? `Active: ${bureau.id}` : 'No active provider -- no bureau pulls until configured.', deepLink: '/vendor-gateways' },
            { code: 'ATTENDANCE_GATEWAY', label: 'Attendance provider', status: attendance ? 'GREEN' : 'AMBER', detail: attendance ? `Active: ${attendance.id}` : 'No active provider -- attendance by file import or not at all.', deepLink: '/attendance' },
            { code: 'AI_CAPABILITIES', label: 'AI capabilities', status: aiEnabledCount > 0 ? 'GREEN' : 'AMBER', detail: aiEnabledCount > 0 ? `${aiEnabledCount} capability flag(s) enabled.` : 'AI off (deliberate default) until vendor-contracted and flags enabled.', deepLink: '/ai-console' },
            { code: 'BANK_INSTRUCTION_TEMPLATE', label: 'Bank instruction letter template', status: bankInstructionLetter ? 'GREEN' : 'AMBER', detail: bankInstructionLetter ? `ACTIVE v${bankInstructionLetter.version}.` : 'No ACTIVE template -- payout batches queue until wording is approved.', deepLink: '/letter-templates' },
        ];
        return this.rollUp(subSteps, '/vendor-gateways');
    }
    async probeData() {
        const [migrationBatches, entities] = await Promise.all([
            this.prisma.migrationBatch.count({ where: { status: 'PROMOTED' } }),
            this.prisma.ledgerEntity.findMany({ where: { status: 'ACTIVE' } }),
        ]);
        let hasPostedData = false;
        for (const entity of entities) {
            const line = await this.prisma.journalEntryLine.findFirst({ where: { account: { ledgerEntityCode: entity.code }, journalEntry: { status: 'POSTED' } } });
            if (line) {
                hasPostedData = true;
                break;
            }
        }
        const ok = migrationBatches > 0 || hasPostedData;
        const subSteps = [
            {
                code: 'OPENING_DATA',
                label: 'Migration run or opening balances posted',
                status: ok ? 'GREEN' : 'AMBER',
                detail: ok
                    ? `${migrationBatches} promoted migration batch(es); posted journal data ${hasPostedData ? 'present' : 'absent'}.`
                    : 'No promoted migration and no posted journal data yet -- confirm migration is not applicable, or run one.',
                deepLink: '/migration',
            },
        ];
        return this.rollUp(subSteps, '/migration');
    }
    async probeProof() {
        const bootCheck = { code: 'BOOT_CHECK', label: 'Boot check', status: 'GREEN', detail: 'API responded to this request.', deepLink: '/inbox' };
        const proofRecord = await this.prisma.auditTrail.findFirst({
            where: { entityType: 'activation_proof_battery' },
            orderBy: { occurredAt: 'desc' },
        });
        const after = proofRecord?.after;
        const makerCheckerProven = !!after?.initiatedByUserId && !!after?.approvedByUserId && after.initiatedByUserId !== after.approvedByUserId;
        const transactionRoundTrip = {
            code: 'TRANSACTION_ROUND_TRIP',
            label: 'Scratch-entity test-transaction round-trip (maker≠checker)',
            status: makerCheckerProven ? 'GREEN' : 'RED',
            detail: makerCheckerProven ? `Proven: journal ${after.journalReference} posted via a different-user approval.` : 'Not yet run -- use "Run Proof Battery" to prove a real maker≠checker posting round-trip.',
            deepLink: '/journal-entries',
        };
        const activeReconCount = await this.prisma.ledgerReconciliationConfig.count({ where: { status: 'ACTIVE' } });
        const reconciliationStatus = {
            code: 'RECONCILIATION_STATUS',
            label: 'Ledger reconciliation controls',
            status: activeReconCount > 0 ? 'GREEN' : 'AMBER',
            detail: activeReconCount > 0 ? `${activeReconCount} ACTIVE reconciliation config(s).` : 'No ACTIVE reconciliation config yet -- informational only, gated on the separate FinCon Activation Tranche (see docs/WIRING_MANIFEST.md); does not block go-live.',
            deepLink: '/company-accounting',
        };
        const subSteps = [bootCheck, transactionRoundTrip, reconciliationStatus];
        const requiredOk = bootCheck.status === 'GREEN' && transactionRoundTrip.status === 'GREEN';
        return { status: (requiredOk ? 'GREEN' : 'RED'), detail: requiredOk ? 'Proof battery passed.' : 'Proof battery has not yet passed.', deepLink: '/journal-entries', subSteps };
    }
    rollUp(subSteps, deepLink) {
        const reds = subSteps.filter((s) => s.status === 'RED').length;
        const ambers = subSteps.filter((s) => s.status === 'AMBER').length;
        const status = reds > 0 ? 'RED' : ambers > 0 ? 'AMBER' : 'GREEN';
        const detail = status === 'GREEN' ? 'All checks pass.' : `${reds} failing, ${ambers} pending of ${subSteps.length} check(s).`;
        return { status, detail, deepLink, subSteps };
    }
    async skipStep(stepCode, actorUserId) {
        await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'skip an activation step');
        const code = stepCode;
        if (!SKIPPABLE_STEPS.has(code)) {
            throw new activation_console_types_1.ActivationConsoleError(`Step "${stepCode}" is not skippable -- invariant 66(c) only permits skipping RAILS (gateways/templates).`);
        }
        const skip = await this.prisma.activationStepSkip.upsert({
            where: { stepCode: code },
            create: { stepCode: code, skippedByUserId: actorUserId },
            update: {},
        });
        await this.audit.record({ actorUserId, action: 'CREATE', entityType: 'activation_step_skip', entityId: code, after: { stepCode: code } });
        return skip;
    }
    async unskipStep(stepCode, actorUserId) {
        await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'un-skip an activation step');
        const existing = await this.prisma.activationStepSkip.findUnique({ where: { stepCode } });
        if (!existing)
            return null;
        await this.prisma.activationStepSkip.delete({ where: { stepCode } });
        await this.audit.record({ actorUserId, action: 'DELETE', entityType: 'activation_step_skip', entityId: stepCode, after: {} });
        return existing;
    }
    async activate(actorUserId) {
        await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'APPROVE', 'activate the platform');
        const status = await this.getStatus();
        if (!status.canActivate) {
            const failing = status.steps.filter((s) => s.required && s.status !== 'GREEN').map((s) => s.code);
            throw new activation_console_types_1.ActivationConsoleError(`Cannot activate -- required step(s) not GREEN: ${failing.join(', ')}.`);
        }
        const state = await this.prisma.activationState.upsert({
            where: { id: 1 },
            create: { id: 1, activatedAt: new Date(), activatedByUserId: actorUserId },
            update: { activatedAt: new Date(), activatedByUserId: actorUserId },
        });
        await this.audit.record({ actorUserId, action: 'UPDATE', entityType: 'activation_state', entityId: '1', after: { activatedAt: state.activatedAt.toISOString() } });
        return state;
    }
    async assignSubStepTask(input) {
        return this.task.assignTask({
            title: `Activation: ${input.stepCode} / ${input.subStepCode}`,
            description: `Sub-step of the Activation Console's "${STEP_LABELS[input.stepCode] ?? input.stepCode}" step.`,
            assigneeEmployeeId: input.assigneeEmployeeId,
            dueAt: input.dueAt,
            assignedByUserId: input.assignedByUserId,
        });
    }
    async runProofBattery(actorUserId) {
        await this.assertCapability(actorUserId, 'ACTIVATION_CONSOLE', 'INITIATE', 'run the activation proof battery');
        const setupUserId = await this.findEligibleUser('LEDGER_ENTITY_SETUP', 'INITIATE');
        if (!setupUserId) {
            return { passed: false, reason: 'No active user holds LEDGER_ENTITY_SETUP INITIATE (standing or delegated) -- the scratch entity cannot be created. Grant this to at least one seat (SUPER_ADMIN by default), then retry.' };
        }
        const periodUserId = await this.findEligibleUser('ACCOUNTING_PERIOD_CLOSE', 'INITIATE');
        if (!periodUserId) {
            return { passed: false, reason: 'No active user holds ACCOUNTING_PERIOD_CLOSE INITIATE (standing or delegated) -- the scratch period cannot be opened. Grant this to at least one Finance seat, then retry.' };
        }
        const makerUserId = await this.findEligibleUser('JOURNAL_ENTRIES', 'INITIATE');
        if (!makerUserId) {
            return { passed: false, reason: 'No active user holds JOURNAL_ENTRIES INITIATE (standing or delegated) -- the scratch journal cannot be drafted. Grant this to at least one Finance seat, then retry.' };
        }
        const approverUserId = await this.findEligibleUser('JOURNAL_ENTRIES', 'APPROVE', makerUserId);
        if (!approverUserId) {
            return {
                passed: false,
                reason: `No second active user holds JOURNAL_ENTRIES APPROVE besides the maker (${makerUserId}) -- a genuine maker≠checker demonstration needs two real, distinct users. Add a second Finance/ICT seat with posting-approval authority, then retry.`,
            };
        }
        const stamp = Date.now();
        const entityCode = `ACTIVATION-PROOF-${stamp}`;
        const ref = `ACTIVATION-PROOF-${stamp}`;
        const entity = await this.ledger.createLedgerEntity({
            code: entityCode,
            name: `Activation Proof Scratch Entity (${new Date(stamp).toISOString()})`,
            entityType: 'COMPANY',
            primaryBasis: 'IFRS',
            createdByUserId: setupUserId,
        });
        await this.ledger.loadChartOfAccountsTemplate({
            ledgerEntityCode: entity.code,
            createdByUserId: setupUserId,
            accounts: [
                { accountCode: '9001', accountName: 'Activation Proof Scratch Asset', accountType: 'ASSET', aaoifiRef: 'N/A -- scratch proof account', ifrsRef: 'N/A -- scratch proof account' },
                { accountCode: '9002', accountName: 'Activation Proof Scratch Clearing', accountType: 'LIABILITY', aaoifiRef: 'N/A -- scratch proof account', ifrsRef: 'N/A -- scratch proof account' },
            ],
        });
        const now = new Date();
        await this.period.openPeriod({
            ledgerEntityCode: entity.code,
            periodStart: new Date(now.getFullYear(), now.getMonth(), 1),
            periodEnd: new Date(now.getFullYear(), now.getMonth() + 1, 0),
            openedByUserId: periodUserId,
        });
        const journal = await this.ledger.createJournalEntry({
            ledgerEntityCode: entity.code,
            journalReference: ref,
            entryDate: now,
            description: 'Activation Console proof battery: scratch-entity test-transaction round-trip.',
            createdByUserId: makerUserId,
            lines: [
                { accountCode: '9001', debitKobo: 100n, description: 'Proof debit' },
                { accountCode: '9002', creditKobo: 100n, description: 'Proof credit' },
            ],
        });
        const instance = await this.ledger.requestJournalPosting({ journalEntryId: journal.id, initiatedByUserId: makerUserId });
        const posted = await this.ledger.approveJournalPosting({ workflowInstanceId: instance.id, approverUserId });
        if (!posted) {
            return {
                passed: false,
                reason: `Journal ${ref} did not reach POSTED after a single approval -- the JOURNAL_POSTING STANDARD rule may require more than one step. Check the workflow trail for instance ${instance.id}.`,
                ledgerEntityCode: entity.code,
                journalEntryId: journal.id,
            };
        }
        await this.audit.record({
            actorUserId,
            action: 'CREATE',
            entityType: 'activation_proof_battery',
            entityId: journal.id,
            after: { triggeredByUserId: actorUserId, entityCode: entity.code, journalReference: ref, setupByUserId: setupUserId, periodOpenedByUserId: periodUserId, initiatedByUserId: makerUserId, approvedByUserId: approverUserId },
        });
        return { passed: true, ledgerEntityCode: entity.code, journalEntryId: journal.id, journalReference: ref, initiatedByUserId: makerUserId, approvedByUserId: approverUserId, postedStatus: posted.status };
    }
    async findEligibleUser(functionCode, level, excludeUserId) {
        const roles = await this.prisma.rolePermission.findMany({ where: { functionCode, level }, select: { roleCode: true } });
        const roleCodes = [...new Set(roles.map((r) => r.roleCode))];
        if (roleCodes.length === 0)
            return null;
        const candidate = await this.prisma.userRole.findFirst({
            where: { roleCode: { in: roleCodes }, ...(excludeUserId ? { userId: { not: excludeUserId } } : {}), user: { status: 'ACTIVE' } },
            select: { userId: true },
        });
        return candidate?.userId ?? null;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({ actorUserId: userId, action: 'PERMISSION_DENIED', entityType: 'activation_console_activity', entityId: activity, after: { functionCode, level } });
            throw new activation_console_types_1.ActivationConsoleError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.ActivationConsoleService = ActivationConsoleService;
exports.ActivationConsoleService = ActivationConsoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService,
        ledger_service_1.LedgerService,
        period_service_1.PeriodService,
        task_service_1.TaskService])
], ActivationConsoleService);
//# sourceMappingURL=activation-console.service.js.map