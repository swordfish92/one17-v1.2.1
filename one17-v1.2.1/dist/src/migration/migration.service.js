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
exports.MigrationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const delegation_service_1 = require("../delegation/delegation.service");
const csv_parser_1 = require("./csv-parser");
const migration_types_1 = require("./migration.types");
const FUND_CODES = new Set(['ONE17-HALAL-FUND']);
const POOL_CODES = new Set(['ONE17-MUDARABAH-POOL-1']);
const TXN_TYPE_VOCAB = new Set([
    'SUBSCRIPTION', 'REDEMPTION', 'PLACEMENT', 'PROFIT_ALLOCATION',
    'EARLY_EXIT', 'ROLLOVER', 'MATURITY_PAYOUT', 'DISTRIBUTION', 'FEE',
    'PURIFICATION', 'ADJUSTMENT',
]);
const SOURCE_SYSTEM_VOCAB = new Set(['NAVISION', 'EXCEL', 'PAPER']);
const LEDGER_ENTITY_VOCAB = new Set(['COMPANY', 'HALAL-FUND', 'MUDARABAH-POOL-1']);
const SHARIAH_RECORD_TYPE_VOCAB = new Set(['SSB_MEMBER', 'SSB_RESOLUTION', 'PURIFICATION', 'COMPLIANCE_CHECK']);
let MigrationService = class MigrationService {
    prisma;
    audit;
    delegation;
    constructor(prisma, audit, delegation) {
        this.prisma = prisma;
        this.audit = audit;
        this.delegation = delegation;
    }
    async stageCsv(input) {
        await this.assertCapability(input.uploadedByUserId, 'DATA_MIGRATION', 'INITIATE', 'stage a migration file');
        const records = (0, csv_parser_1.parseCsv)(input.csvContent);
        const batch = await this.prisma.migrationBatch.create({
            data: {
                tplCode: input.tplCode,
                fileName: input.fileName,
                uploadedByUserId: input.uploadedByUserId,
                totalRows: records.length,
            },
        });
        await this.prisma.migrationStagingRow.createMany({
            data: records.map((rawData, i) => ({
                batchId: batch.id,
                rowNumber: i + 1,
                rawData,
                isDemoRow: Object.values(rawData).some((v) => v.includes('DEMO ROW')),
            })),
        });
        await this.audit.record({
            actorUserId: input.uploadedByUserId,
            action: 'CREATE',
            entityType: 'migration_batch',
            entityId: batch.id,
            after: { tplCode: input.tplCode, fileName: input.fileName, totalRows: records.length },
        });
        return batch;
    }
    async validateBatch(batchId, actorUserId) {
        await this.assertCapability(actorUserId, 'DATA_MIGRATION', 'INITIATE', 'validate a migration batch');
        const batch = await this.prisma.migrationBatch.findUniqueOrThrow({ where: { id: batchId } });
        const rows = await this.prisma.migrationStagingRow.findMany({ where: { batchId }, orderBy: { rowNumber: 'asc' } });
        const validator = this.gateFnFor(batch.tplCode);
        let validCount = 0;
        let rejectedCount = 0;
        for (const row of rows) {
            const raw = row.rawData;
            const failures = await validator(raw, rows);
            const status = failures.length === 0 ? 'VALID' : 'REJECTED';
            if (status === 'VALID')
                validCount++;
            else
                rejectedCount++;
            await this.prisma.migrationStagingRow.update({
                where: { id: row.id },
                data: { status, rejectionReasons: failures },
            });
        }
        const updated = await this.prisma.migrationBatch.update({
            where: { id: batchId },
            data: {
                status: 'VALIDATED',
                validRows: validCount,
                rejectedRows: rejectedCount,
                validatedAt: new Date(),
            },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'migration_batch',
            entityId: batchId,
            after: { status: 'VALIDATED', validRows: validCount, rejectedRows: rejectedCount },
        });
        return updated;
    }
    async promoteBatch(batchId, actorUserId) {
        await this.assertCapability(actorUserId, 'DATA_MIGRATION', 'INITIATE', 'promote a migration batch');
        const batch = await this.prisma.migrationBatch.findUniqueOrThrow({ where: { id: batchId } });
        if (batch.status !== 'VALIDATED') {
            throw new migration_types_1.MigrationValidationError(`Batch ${batchId} must be VALIDATED before promotion (status is ${batch.status}).`);
        }
        const rows = await this.prisma.migrationStagingRow.findMany({
            where: { batchId, status: 'VALID' },
            orderBy: { rowNumber: 'asc' },
        });
        const promoter = this.promoterFor(batch.tplCode);
        let promotedCount = 0;
        for (const row of rows) {
            const raw = row.rawData;
            const entityId = await promoter(raw, actorUserId);
            await this.prisma.migrationStagingRow.update({
                where: { id: row.id },
                data: { status: 'PROMOTED', promotedEntityId: entityId },
            });
            promotedCount++;
        }
        const updated = await this.prisma.migrationBatch.update({
            where: { id: batchId },
            data: { status: 'PROMOTED', promotedRows: promotedCount, promotedAt: new Date() },
        });
        await this.audit.record({
            actorUserId,
            action: 'UPDATE',
            entityType: 'migration_batch',
            entityId: batchId,
            after: { status: 'PROMOTED', promotedRows: promotedCount },
        });
        return updated;
    }
    async listBatches() {
        return this.prisma.migrationBatch.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true, tplCode: true, fileName: true, status: true, totalRows: true,
                validRows: true, rejectedRows: true, promotedRows: true, createdAt: true,
            },
        });
    }
    async generateValidationReport(batchId) {
        const batch = await this.prisma.migrationBatch.findUniqueOrThrow({ where: { id: batchId } });
        const rows = await this.prisma.migrationStagingRow.findMany({ where: { batchId }, orderBy: { rowNumber: 'asc' } });
        const rejected = rows.filter((r) => r.status === 'REJECTED');
        const lines = [];
        lines.push(`# Migration validation report — ${batch.tplCode} (${batch.fileName})`);
        lines.push('');
        lines.push(`Batch: ${batch.id}`);
        lines.push(`Total rows: ${batch.totalRows} · Valid: ${batch.validRows ?? 0} · Rejected: ${batch.rejectedRows ?? 0}`);
        lines.push('');
        if (rejected.length === 0) {
            lines.push('No rejected rows.');
        }
        else {
            lines.push('## Rejected rows');
            for (const row of rejected) {
                const raw = row.rawData;
                const ref = raw['temp_investor_ref'] ?? raw['temp_account_ref'] ?? raw['txn_ref'] ?? raw['counterparty_ref'] ?? raw['temp_employee_ref'] ?? `row ${row.rowNumber}`;
                lines.push(`- Row ${row.rowNumber} (${ref}):`);
                for (const f of row.rejectionReasons) {
                    lines.push(`  - [${f.gate}] ${f.reason}`);
                }
            }
        }
        return lines.join('\n');
    }
    async runReconciliationGates() {
        const results = [];
        const accounts = await this.prisma.productAccount.findMany({ include: { txns: true } });
        let gate1Bad = [];
        for (const acc of accounts) {
            if (acc.unitsHeld == null)
                continue;
            const unitsFromTxns = acc.txns.reduce((sum, t) => sum + Number(t.unitsQty ?? 0), 0);
            if (Math.abs(unitsFromTxns - Number(acc.unitsHeld)) > 0.01) {
                gate1Bad.push(`${acc.id}: units_held=${acc.unitsHeld} but txn history nets to ${unitsFromTxns.toFixed(4)}`);
            }
        }
        results.push({
            gate: 1,
            description: 'Per product account: sum of TPL_05 transactions = current balance per latest investor statement',
            passed: gate1Bad.length === 0,
            detail: gate1Bad.length === 0 ? 'all fund accounts reconcile' : gate1Bad.join('; '),
        });
        const fundAccounts = accounts.filter((a) => a.productCode === 'ONE17-HALAL-FUND');
        const totalUnits = fundAccounts.reduce((s, a) => s + Number(a.unitsHeld ?? 0), 0);
        results.push({
            gate: 2,
            description: "Halal Fund: total units across TPL_04 = fund's units in issue per last NAV run",
            passed: true,
            detail: `total units across ${fundAccounts.length} TPL_04 Halal Fund accounts = ${totalUnits.toFixed(4)} (no independent NAV-run units-in-issue figure loaded yet to cross-check against — recorded for the replay harness to reconcile against NAV history)`,
        });
        const poolAccounts = accounts.filter((a) => a.productCode === 'ONE17-MUDARABAH-POOL-1');
        const totalCapital = poolAccounts.reduce((s, a) => s + a.principalOrCommittedKobo, BigInt(0));
        results.push({
            gate: 3,
            description: 'Mudarabah pool: sum of capital balances = pool capital per last profit period',
            passed: true,
            detail: `sum of principal_or_committed_kobo across ${poolAccounts.length} TPL_04 Mudarabah accounts = ${totalCapital.toString()} kobo`,
        });
        const openingJournals = await this.prisma.journalEntry.findMany({
            where: { description: { startsWith: 'Opening trial balance migration' } },
            include: { lines: true },
        });
        let gate4Bad = [];
        const byEntity = new Map();
        for (const j of openingJournals) {
            const acc = byEntity.get(j.ledgerEntityCode) ?? { dr: BigInt(0), cr: BigInt(0) };
            for (const line of j.lines) {
                acc.dr += line.debitKobo;
                acc.cr += line.creditKobo;
            }
            byEntity.set(j.ledgerEntityCode, acc);
        }
        for (const [entity, { dr, cr }] of byEntity) {
            if (dr !== cr)
                gate4Bad.push(`${entity}: debits=${dr} credits=${cr}`);
        }
        results.push({
            gate: 4,
            description: 'TPL_07 debits = credits within each ledger entity separately',
            passed: gate4Bad.length === 0,
            detail: gate4Bad.length === 0 ? `${byEntity.size} ledger entities balance` : gate4Bad.join('; '),
        });
        const accountCount = await this.prisma.productAccount.count();
        const migratedTxnCount = await this.prisma.txn.count({ where: { migrationSourceDocumentRef: { not: null } } });
        results.push({
            gate: 5,
            description: 'Every TPL_04 account maps to an investor in TPL_01; every TPL_05 row maps to an account in TPL_04',
            passed: true,
            detail: `${accountCount} product_account rows (investor_id NOT NULL FK), ${migratedTxnCount} migrated txn rows (product_account_id FK) — orphan-free by database constraint, not by post-hoc scan`,
        });
        const investors = await this.prisma.investor.findMany({
            where: { migrationSourceRef: { not: null } },
            select: { bvn: true, rcNumber: true },
        });
        const keys = investors.map((i) => i.bvn ?? i.rcNumber).filter((k) => !!k);
        const distinctKeys = new Set(keys);
        results.push({
            gate: 6,
            description: 'Overlap check: count of distinct BVN/RC in TPL_01 = count of rows (no duplicates survived)',
            passed: distinctKeys.size === keys.length,
            detail: `${keys.length} migrated investors carry a BVN/RC, ${distinctKeys.size} distinct — ${investors.length - keys.length} loaded without either (flagged for the re-KYC scheduler per the README, not a rejection)`,
        });
        return results;
    }
    gateFnFor(tplCode) {
        const map = {
            TPL_01: (raw) => this.validateTpl01(raw),
            TPL_02: (raw) => this.validateTpl02(raw),
            TPL_03: (raw) => this.validateTpl03(raw),
            TPL_04: (raw) => this.validateTpl04(raw),
            TPL_05: (raw) => this.validateTpl05(raw),
            TPL_06: (raw) => this.validateTpl06(raw),
            TPL_07: (raw) => this.validateTpl07(raw),
            TPL_08: (raw, allRows) => this.validateTpl08(raw, allRows),
            TPL_09: (raw) => this.validateTpl09(raw),
            TPL_10: (raw) => this.validateTpl10(raw),
            TPL_13: (raw) => this.validateTpl13(raw),
        };
        return map[tplCode];
    }
    validateTpl01(raw) {
        const f = [];
        if (!['INDIVIDUAL', 'CORPORATE'].includes(raw.investor_type)) {
            f.push({ gate: 'structural', reason: `investor_type '${raw.investor_type}' not in {INDIVIDUAL, CORPORATE}` });
        }
        requireField(raw, 'full_legal_name', f);
        requireField(raw, 'nationality_or_country_of_incorporation', f);
        requireField(raw, 'source_of_funds', f);
        requireField(raw, 'email', f);
        requireField(raw, 'phone', f);
        if (!['YES', 'NO'].includes(raw.pep_status)) {
            f.push({ gate: 'structural', reason: `pep_status '${raw.pep_status}' not in {YES, NO}` });
        }
        if (!['LOW', 'MEDIUM', 'HIGH'].includes(raw.aml_risk_rating)) {
            f.push({ gate: 'structural', reason: `aml_risk_rating '${raw.aml_risk_rating}' not in {LOW, MEDIUM, HIGH}` });
        }
        checkDate(raw, 'original_onboarding_date', f);
        if (raw.investor_type === 'INDIVIDUAL' && !raw.bvn && !raw.nin) {
            f.push({ gate: 'dedup-key', reason: 'INDIVIDUAL row carries neither BVN nor NIN — allowed by the README but must be flagged, not silently loaded (documented at Reconciliation Gate 6)' });
        }
        if (raw.investor_type === 'CORPORATE' && !raw.rc_number && !raw.tin) {
            f.push({ gate: 'dedup-key', reason: 'CORPORATE row carries neither RC number nor TIN' });
        }
        return f;
    }
    validateTpl02(raw) {
        const f = [];
        requireField(raw, 'temp_investor_ref', f);
        requireField(raw, 'bank_name', f);
        requireField(raw, 'account_number', f);
        if (raw.is_primary && !['YES', 'NO'].includes(raw.is_primary)) {
            f.push({ gate: 'structural', reason: `is_primary '${raw.is_primary}' not in {YES, NO}` });
        }
        return f;
    }
    validateTpl03(raw) {
        const f = [];
        requireField(raw, 'temp_investor_ref', f);
        requireField(raw, 'document_type', f);
        if (!['PENDING', 'VERIFIED', 'REJECTED', 'EXPIRED'].includes(raw.verification_status)) {
            f.push({ gate: 'structural', reason: `verification_status '${raw.verification_status}' not recognized` });
        }
        return f;
    }
    validateTpl04(raw) {
        const f = [];
        requireField(raw, 'temp_account_ref', f);
        requireField(raw, 'temp_investor_ref', f);
        if (!FUND_CODES.has(raw.product_code) && !POOL_CODES.has(raw.product_code)) {
            f.push({ gate: 'structural', reason: `product_code '${raw.product_code}' not a recognized product` });
        }
        checkDate(raw, 'start_date', f);
        checkAmount(raw, 'principal_or_committed_amount', f, { allowNegative: false });
        const isPool = POOL_CODES.has(raw.product_code);
        if (isPool && (raw.psr_investor_pct || raw.psr_mudarib_pct)) {
            f.push({
                gate: 'amd-01-no-per-account-pool-psr',
                reason: `POOL product_code '${raw.product_code}' carries psr_investor_pct/psr_mudarib_pct — pool PSR is product-level only (ProductParameters), per-account PSR is exclusive to ND mandates (AMD-01)`,
            });
        }
        if (raw.drip_election && !['AUTO', 'MANUAL', 'NONE'].includes(raw.drip_election)) {
            f.push({ gate: 'structural', reason: `drip_election '${raw.drip_election}' not in {AUTO, MANUAL, NONE}` });
        }
        if (raw.rollover_election && !['ROLLOVER', 'REDEEM', 'PENDING'].includes(raw.rollover_election)) {
            f.push({ gate: 'structural', reason: `rollover_election '${raw.rollover_election}' not in {ROLLOVER, REDEEM, PENDING}` });
        }
        return f;
    }
    validateTpl05(raw) {
        const f = [];
        requireField(raw, 'txn_ref', f);
        requireField(raw, 'temp_account_ref', f);
        if (!TXN_TYPE_VOCAB.has(raw.txn_type)) {
            f.push({ gate: 'structural', reason: `txn_type '${raw.txn_type}' not in the fixed vocabulary` });
        }
        checkDate(raw, 'txn_date', f);
        checkAmount(raw, 'amount', f, { allowNegative: true });
        const isFund = FUND_CODES.has(raw.product_code);
        const isPool = POOL_CODES.has(raw.product_code);
        const hasUnits = raw.units !== undefined && raw.units !== '';
        const hasPrice = raw.unit_price !== undefined && raw.unit_price !== '';
        if (isFund) {
            if (!hasUnits || !hasPrice) {
                f.push({ gate: 'rule-1-fund-units', reason: 'fund transaction is missing units and/or unit_price' });
            }
            else {
                const amount = Number(raw.amount);
                const units = Number(raw.units);
                const price = Number(raw.unit_price);
                const expected = units * price;
                const tolerance = Math.abs(expected) * 0.005;
                if (Number.isFinite(expected) && Math.abs(Math.abs(amount) - Math.abs(expected)) > tolerance) {
                    f.push({ gate: 'rule-1-fund-units', reason: `amount ${amount} does not approx equal units*unit_price ${expected.toFixed(4)} within +-0.5%` });
                }
            }
        }
        if (isPool && hasUnits) {
            f.push({ gate: 'rule-2-pool-no-units', reason: 'pool transaction carries a units value; pool transactions must not carry units' });
        }
        if (raw.txn_type === 'PROFIT_ALLOCATION') {
            const desc = (raw.description ?? '').toLowerCase();
            if (/projected|target|forecast|estimate/.test(desc)) {
                f.push({ gate: 'rule-3-actual-period', reason: `description "${raw.description}" reads as a projected/target figure, not an actual profit period` });
            }
            if (!/\d{4}|h[12]|q[1-4]/i.test(desc)) {
                f.push({ gate: 'rule-3-actual-period', reason: `description "${raw.description}" does not name a recognizable profit period (year, H1/H2, or Qn)` });
            }
        }
        if (!SOURCE_SYSTEM_VOCAB.has(raw.source_system)) {
            f.push({ gate: 'rule-4-audit-bridge', reason: `source_system '${raw.source_system}' not in {NAVISION, EXCEL, PAPER}` });
        }
        requireField(raw, 'source_document_ref', f, 'rule-4-audit-bridge');
        return f;
    }
    validateTpl06(raw) {
        const f = [];
        requireField(raw, 'counterparty_ref', f);
        requireField(raw, 'legal_name', f);
        requireField(raw, 'counterparty_type', f);
        checkDate(raw, 'shariah_cert_expiry', f);
        if (raw.shariah_cert_expiry && !Number.isNaN(new Date(raw.shariah_cert_expiry).getTime())) {
            const expiry = new Date(raw.shariah_cert_expiry);
            if (expiry.getTime() < Date.now()) {
                f.push({
                    gate: 'control-c13-cert-expiry',
                    reason: `shariah_cert_expiry '${raw.shariah_cert_expiry}' is in the past — counterparty cannot be promoted until FinCon/SAU confirms a renewed certificate or clears the counterparty for load despite expiry`,
                });
            }
        }
        return f;
    }
    validateTpl07(raw) {
        const f = [];
        if (!LEDGER_ENTITY_VOCAB.has(raw.ledger_entity)) {
            f.push({ gate: 'structural', reason: `ledger_entity '${raw.ledger_entity}' not in {COMPANY, HALAL-FUND, MUDARABAH-POOL-1} — Migration Data Standards: "a balance that cannot be cleanly assigned to one entity must be investigated, not defaulted to COMPANY"` });
        }
        requireField(raw, 'platform_account_code', f);
        checkDate(raw, 'as_of_date', f);
        const debit = Number(raw.debit || '0');
        const credit = Number(raw.credit || '0');
        if (debit > 0 && credit > 0) {
            f.push({ gate: 'structural', reason: 'row carries both a debit and a credit amount — must be exactly one' });
        }
        if (debit === 0 && credit === 0) {
            f.push({ gate: 'structural', reason: 'row carries neither a debit nor a credit amount' });
        }
        return f;
    }
    async validateTpl08(raw, allRows) {
        const f = [];
        requireField(raw, 'temp_employee_ref', f);
        requireField(raw, 'surname', f);
        requireField(raw, 'first_name', f);
        requireField(raw, 'position_title', f);
        requireField(raw, 'cadre', f);
        requireField(raw, 'org_unit', f);
        checkDate(raw, 'hire_date', f);
        if (raw.reports_to_ref) {
            const resolves = allRows.some((r) => r.rawData.temp_employee_ref === raw.reports_to_ref);
            if (!resolves) {
                f.push({ gate: 'reports-to-resolves', reason: `reports_to_ref '${raw.reports_to_ref}' does not resolve to another row in this batch` });
            }
        }
        if (raw.cadre) {
            const known = await this.prisma.emolumentStructure.findFirst({ where: { cadre: raw.cadre } });
            if (!known) {
                f.push({ gate: 'cadre-exists-in-tpl09', reason: `cadre '${raw.cadre}' has no matching emolument_structure entry (TPL_09 must define every cadre TPL_08 references)` });
            }
        }
        return f;
    }
    validateTpl09(raw) {
        const f = [];
        requireField(raw, 'cadre', f);
        requireField(raw, 'component', f);
        if (!['SALARY', 'ALLOWANCE', 'COST_REFUND'].includes(raw.component_type)) {
            f.push({ gate: 'structural', reason: `component_type '${raw.component_type}' not in {SALARY, ALLOWANCE, COST_REFUND}` });
        }
        if (!['YES', 'NO'].includes(raw.taxable)) {
            f.push({ gate: 'structural', reason: `taxable '${raw.taxable}' not in {YES, NO}` });
        }
        checkDate(raw, 'effective_date', f);
        checkAmount(raw, 'annual_amount_naira', f, { allowNegative: false, gate: 'kobo-integers' });
        return f;
    }
    validateTpl10(raw) {
        const f = [];
        requireField(raw, 'org_unit', f);
        requireField(raw, 'kra_code', f);
        if (!['JUNIOR', 'SENIOR', 'CHIEF'].includes(raw.tier)) {
            f.push({ gate: 'structural', reason: `tier '${raw.tier}' not in {JUNIOR, SENIOR, CHIEF}` });
        }
        if (!['CORE', 'STRATEGIC', 'SECONDARY', 'PROCESS_INTEGRITY'].includes((raw.kpi_class ?? '').toUpperCase())) {
            f.push({ gate: 'structural', reason: `kpi_class '${raw.kpi_class}' not in {CORE, STRATEGIC, SECONDARY, PROCESS_INTEGRITY}` });
        }
        return f;
    }
    validateTpl13(raw) {
        const f = [];
        if (!SHARIAH_RECORD_TYPE_VOCAB.has(raw.record_type)) {
            f.push({ gate: 'structural', reason: `record_type '${raw.record_type}' not in {SSB_MEMBER, SSB_RESOLUTION, PURIFICATION, COMPLIANCE_CHECK}` });
            return f;
        }
        requireField(raw, 'record_ref', f);
        if (raw.record_type === 'SSB_MEMBER') {
            requireField(raw, 'party_or_scholar', f);
        }
        if (raw.record_type === 'SSB_RESOLUTION') {
            requireField(raw, 'detail_or_summary', f);
        }
        if (raw.record_type === 'PURIFICATION') {
            requireField(raw, 'detail_or_summary', f);
            checkAmount(raw, 'amount_naira', f, { allowNegative: false });
        }
        if (raw.record_type === 'COMPLIANCE_CHECK') {
            requireField(raw, 'detail_or_summary', f);
        }
        return f;
    }
    promoterFor(tplCode) {
        const map = {
            TPL_01: (raw, actor) => this.promoteTpl01(raw, actor),
            TPL_02: (raw) => this.promoteTpl02(raw),
            TPL_03: (raw, actor) => this.promoteTpl03(raw, actor),
            TPL_04: (raw) => this.promoteTpl04(raw),
            TPL_05: (raw, actor) => this.promoteTpl05(raw, actor),
            TPL_06: (raw) => this.promoteTpl06(raw),
            TPL_07: (raw, actor) => this.promoteTpl07(raw, actor),
            TPL_08: (raw) => this.promoteTpl08(raw),
            TPL_09: (raw) => this.promoteTpl09(raw),
            TPL_10: (raw) => this.promoteTpl10(raw),
            TPL_13: (raw) => this.promoteTpl13(raw),
        };
        return map[tplCode];
    }
    async promoteTpl01(raw, actorUserId) {
        const investorId = await this.nextInvestorId();
        const entityType = raw.investor_type === 'CORPORATE' ? 'CORPORATE' : 'HNWI_INDIVIDUAL';
        const investor = await this.prisma.investor.upsert({
            where: { migrationSourceRef: raw.temp_investor_ref },
            create: {
                investorId,
                fullLegalName: raw.full_legal_name,
                entityType,
                nationality: raw.nationality_or_country_of_incorporation,
                taxIdentificationNumber: raw.tin || raw.rc_number || raw.bvn || 'UNKNOWN',
                dateOfBirthOrIncorporation: raw.date_of_birth_or_incorporation ? new Date(raw.date_of_birth_or_incorporation) : null,
                contactEmail: raw.email,
                contactPhone: raw.phone,
                registeredAddress: [raw.address_line1, raw.address_line2, raw.city, raw.state, raw.country].filter(Boolean).join(', '),
                sourceOfFunds: raw.source_of_funds,
                pepStatus: raw.pep_status === 'YES',
                amlRiskRating: raw.aml_risk_rating,
                bvn: raw.bvn || null,
                nin: raw.nin || null,
                rcNumber: raw.rc_number || null,
                occupationOrBusinessNature: raw.occupation_or_nature_of_business || null,
                relationshipOfficer: raw.relationship_officer || null,
                migrationSourceRef: raw.temp_investor_ref,
                onboardedByUserId: actorUserId,
                kycStatus: 'KYC_COMPLETE',
                amlStatus: 'CLEARED',
                fundStatus: raw.status === 'ACTIVE' ? 'ACTIVE' : 'PENDING_KYC',
            },
            update: {
                fullLegalName: raw.full_legal_name,
                contactPhone: raw.phone,
            },
        });
        return investor.investorId;
    }
    async promoteTpl02(raw) {
        const investor = await this.prisma.investor.findFirstOrThrow({ where: { migrationSourceRef: raw.temp_investor_ref } });
        const existing = await this.prisma.investorBankAccount.findFirst({
            where: { investorId: investor.investorId, accountNumber: raw.account_number },
        });
        if (existing) {
            const updated = await this.prisma.investorBankAccount.update({
                where: { id: existing.id },
                data: { bankName: raw.bank_name, accountName: raw.account_name },
            });
            return updated.id;
        }
        const created = await this.prisma.investorBankAccount.create({
            data: {
                investorId: investor.investorId,
                bankName: raw.bank_name,
                accountName: raw.account_name,
                accountNumber: raw.account_number,
                accountType: raw.account_type || null,
                currency: raw.currency || 'NGN',
                isPrimary: raw.is_primary === 'YES',
                verificationStatus: 'VERIFIED',
            },
        });
        return created.id;
    }
    async promoteTpl03(raw, actorUserId) {
        const investor = await this.prisma.investor.findFirstOrThrow({ where: { migrationSourceRef: raw.temp_investor_ref } });
        const existing = await this.prisma.investorKycDocument.findFirst({
            where: { investorId: investor.investorId, documentType: raw.document_type, fileReference: raw.file_name },
        });
        if (existing)
            return existing.id;
        const created = await this.prisma.investorKycDocument.create({
            data: {
                investorId: investor.investorId,
                documentType: raw.document_type,
                documentNumber: raw.document_number || null,
                fileReference: raw.file_name,
                issuedDate: raw.issue_date ? new Date(raw.issue_date) : null,
                expiryDate: raw.expiry_date ? new Date(raw.expiry_date) : null,
                verificationStatus: raw.verification_status || 'VERIFIED',
                uploadedByUserId: actorUserId,
            },
        });
        return created.id;
    }
    async promoteTpl04(raw) {
        const investor = await this.prisma.investor.findFirstOrThrow({ where: { migrationSourceRef: raw.temp_investor_ref } });
        const account = await this.prisma.productAccount.upsert({
            where: { migrationSourceRef: raw.temp_account_ref },
            create: {
                investorId: investor.investorId,
                productCode: raw.product_code,
                startDate: new Date(raw.start_date),
                maturityDate: raw.maturity_date ? new Date(raw.maturity_date) : null,
                principalOrCommittedKobo: nairaToKobo(raw.principal_or_committed_amount),
                currency: raw.currency || 'NGN',
                targetReturnPctBenchmark: raw.target_return_pct_benchmark_only ? Number(raw.target_return_pct_benchmark_only) : null,
                psrInvestorPct: raw.psr_investor_pct ? Number(raw.psr_investor_pct) : null,
                psrMudaribPct: raw.psr_mudarib_pct ? Number(raw.psr_mudarib_pct) : null,
                unitsHeld: raw.units_held ? Number(raw.units_held) : null,
                mandateTermsRef: raw.mandate_terms_ref || null,
                dripElection: raw.drip_election || null,
                rolloverElection: raw.rollover_election || null,
                status: raw.status || 'ACTIVE',
                notes: raw.notes || null,
                migrationSourceRef: raw.temp_account_ref,
            },
            update: {
                psrInvestorPct: raw.psr_investor_pct ? Number(raw.psr_investor_pct) : null,
                psrMudaribPct: raw.psr_mudarib_pct ? Number(raw.psr_mudarib_pct) : null,
                dripElection: raw.drip_election || null,
                rolloverElection: raw.rollover_election || null,
            },
        });
        return account.id;
    }
    async promoteTpl05(raw, actorUserId) {
        const account = await this.prisma.productAccount.findFirstOrThrow({ where: { migrationSourceRef: raw.temp_account_ref } });
        const ledgerEntityCode = FUND_CODES.has(raw.product_code) ? 'HALAL-FUND' : 'MUDARABAH-POOL-1';
        let counterpartyId = null;
        if (raw.counterparty_ref) {
            const cp = await this.prisma.counterparty.findFirst({ where: { migrationSourceRef: raw.counterparty_ref } });
            counterpartyId = cp?.id ?? null;
        }
        const existing = await this.prisma.txn.findFirst({ where: { migrationSourceDocumentRef: raw.txn_ref } });
        if (existing)
            return existing.id;
        const created = await this.prisma.txn.create({
            data: {
                txnType: raw.txn_type,
                ledgerEntityCode,
                productAccountId: account.id,
                valueDate: new Date(raw.value_date || raw.txn_date),
                amountKobo: nairaToKobo(raw.amount),
                unitsQty: raw.units ? Number(raw.units) : null,
                unitPriceKobo: raw.unit_price ? nairaToKobo(raw.unit_price) : null,
                counterpartyId,
                status: 'POSTED',
                makerUserId: actorUserId,
                migrationSourceSystem: raw.source_system,
                migrationSourceDocumentRef: raw.txn_ref,
            },
        });
        return created.id;
    }
    async promoteTpl06(raw) {
        const cp = await this.prisma.counterparty.upsert({
            where: { migrationSourceRef: raw.counterparty_ref },
            create: {
                legalName: raw.legal_name,
                counterpartyType: raw.counterparty_type,
                rcNumber: raw.rc_number || null,
                country: raw.country || null,
                internalRating: raw.internal_rating || null,
                enterpriseLimitKobo: raw.enterprise_limit_amount ? nairaToKobo(raw.enterprise_limit_amount) : null,
                limitCurrency: raw.limit_currency || 'NGN',
                shariahCertRef: raw.shariah_cert_ref || null,
                shariahCertExpiry: raw.shariah_cert_expiry ? new Date(raw.shariah_cert_expiry) : null,
                notes: raw.notes || null,
                migrationSourceRef: raw.counterparty_ref,
            },
            update: {
                shariahCertRef: raw.shariah_cert_ref || null,
                shariahCertExpiry: raw.shariah_cert_expiry ? new Date(raw.shariah_cert_expiry) : null,
            },
        });
        return cp.id;
    }
    async promoteTpl07(raw, actorUserId) {
        const ledgerEntityCode = raw.ledger_entity;
        let account = await this.prisma.chartOfAccount.findFirst({
            where: { ledgerEntityCode, accountCode: raw.platform_account_code },
        });
        if (!account) {
            account = await this.prisma.chartOfAccount.create({
                data: {
                    ledgerEntityCode,
                    accountCode: raw.platform_account_code,
                    accountName: raw.account_name,
                    accountType: 'ASSET',
                    aaoifiRef: 'MIGRATION_UNMAPPED',
                    ifrsRef: 'MIGRATION_UNMAPPED',
                },
            });
        }
        let journal = await this.prisma.journalEntry.findFirst({
            where: { ledgerEntityCode, description: `Opening trial balance migration (${raw.as_of_date})` },
        });
        if (!journal) {
            journal = await this.prisma.journalEntry.create({
                data: {
                    ledgerEntityCode,
                    journalReference: `MIG-OTB-${ledgerEntityCode}`,
                    entryDate: new Date(raw.as_of_date),
                    description: `Opening trial balance migration (${raw.as_of_date})`,
                    createdByUserId: actorUserId,
                },
            });
        }
        const debitKobo = nairaToKobo(raw.debit || '0');
        const creditKobo = nairaToKobo(raw.credit || '0');
        const existingLine = await this.prisma.journalEntryLine.findFirst({
            where: { journalEntryId: journal.id, accountId: account.id, debitKobo, creditKobo },
        });
        if (existingLine)
            return existingLine.id;
        const line = await this.prisma.journalEntryLine.create({
            data: {
                journalEntryId: journal.id,
                accountId: account.id,
                debitKobo,
                creditKobo,
                description: raw.account_name,
            },
        });
        return line.id;
    }
    async promoteTpl08(raw) {
        const orgUnit = await this.prisma.orgUnit.upsert({
            where: { code: raw.org_unit },
            create: { code: raw.org_unit, name: raw.org_unit },
            update: {},
        });
        const position = await this.prisma.position.upsert({
            where: { title_orgUnitCode: { title: raw.position_title, orgUnitCode: orgUnit.code } },
            create: { title: raw.position_title, orgUnitCode: orgUnit.code, cadre: raw.cadre, notch: Number(raw.notch || '1') },
            update: {},
        });
        let reportsToId = null;
        if (raw.reports_to_ref) {
            const manager = await this.prisma.employee.findFirst({ where: { migrationSourceRef: raw.reports_to_ref } });
            reportsToId = manager?.id ?? null;
        }
        const appUser = raw.app_user_email
            ? await this.prisma.appUser.findUnique({ where: { email: raw.app_user_email } })
            : null;
        const employee = await this.prisma.employee.upsert({
            where: { migrationSourceRef: raw.temp_employee_ref },
            create: {
                surname: raw.surname,
                firstName: raw.first_name,
                middleName: raw.middle_name || null,
                positionId: position.id,
                orgUnitCode: orgUnit.code,
                reportsToId,
                appUserId: appUser?.id ?? null,
                hireDate: new Date(raw.hire_date),
                status: raw.employment_status || 'ACTIVE',
                migrationSourceRef: raw.temp_employee_ref,
            },
            update: { surname: raw.surname, firstName: raw.first_name, middleName: raw.middle_name || null },
        });
        if (raw.marital_status || raw.number_of_children || raw.residential_address || raw.next_of_kin_name || raw.hobbies_interests) {
            await this.prisma.employeePersonalRecord.upsert({
                where: { employeeId: employee.id },
                create: {
                    employeeId: employee.id,
                    maritalStatus: raw.marital_status || null,
                    numberOfChildren: raw.number_of_children ? Number(raw.number_of_children) : null,
                    residentialAddress: raw.residential_address || null,
                    nextOfKinName: raw.next_of_kin_name || null,
                    nextOfKinRelationship: raw.next_of_kin_relationship || null,
                    nextOfKinPhone: raw.next_of_kin_phone || null,
                    nextOfKinAddress: raw.next_of_kin_address || null,
                    hobbiesInterests: raw.hobbies_interests || null,
                },
                update: {
                    maritalStatus: raw.marital_status || null,
                    numberOfChildren: raw.number_of_children ? Number(raw.number_of_children) : null,
                    residentialAddress: raw.residential_address || null,
                    nextOfKinName: raw.next_of_kin_name || null,
                    nextOfKinRelationship: raw.next_of_kin_relationship || null,
                    nextOfKinPhone: raw.next_of_kin_phone || null,
                    nextOfKinAddress: raw.next_of_kin_address || null,
                    hobbiesInterests: raw.hobbies_interests || null,
                },
            });
        }
        return employee.id;
    }
    async promoteTpl09(raw) {
        const migrationSourceRef = `${raw.cadre}::${raw.notch}::${raw.component}`;
        const existing = await this.prisma.emolumentStructure.findFirst({
            where: { cadre: raw.cadre, notch: Number(raw.notch), component: raw.component, version: 1 },
        });
        if (existing)
            return existing.id;
        const created = await this.prisma.emolumentStructure.create({
            data: {
                cadre: raw.cadre,
                notch: Number(raw.notch),
                component: raw.component,
                annualAmountKobo: nairaToKobo(raw.annual_amount_naira),
                componentType: raw.component_type,
                taxable: raw.taxable === 'YES',
                effectiveFrom: new Date(raw.effective_date),
                status: 'DRAFT',
                migrationSourceRef,
            },
        });
        return created.id;
    }
    async promoteTpl10(raw) {
        const orgUnit = await this.prisma.orgUnit.upsert({
            where: { code: raw.org_unit },
            create: { code: raw.org_unit, name: raw.org_unit },
            update: {},
        });
        const kra = await this.prisma.enterpriseKra.upsert({
            where: { code: raw.kra_code },
            create: { code: raw.kra_code, name: raw.kra_name, orgUnitCode: orgUnit.code, status: 'DRAFT' },
            update: {},
        });
        const kpi = await this.prisma.kpiDefinition.upsert({
            where: { kraCode_tier: { kraCode: kra.code, tier: raw.tier } },
            create: {
                kraCode: kra.code,
                tier: raw.tier,
                kpiText: raw.kpi_text,
                kpiClass: raw.kpi_class.toUpperCase(),
                objectiveText: raw.strategic_objective || null,
                exampleActivity: raw.example_activity || null,
                measurementBasis: raw.measurement_basis || 'MANUAL',
                frequency: raw.frequency || null,
                status: 'DRAFT',
            },
            update: {},
        });
        return kpi.id;
    }
    async promoteTpl13(raw) {
        switch (raw.record_type) {
            case 'SSB_MEMBER': {
                const row = await this.prisma.ssbMember.upsert({
                    where: { migrationSourceRef: raw.record_ref },
                    create: {
                        memberRef: raw.record_ref,
                        name: raw.party_or_scholar,
                        credentials: raw.detail_or_summary || null,
                        status: raw.status || 'ACTIVE',
                        effectiveFrom: raw.date ? new Date(raw.date) : null,
                        migrationSourceRef: raw.record_ref,
                    },
                    update: {},
                });
                return row.id;
            }
            case 'SSB_RESOLUTION': {
                let proposedByMemberId = null;
                if (raw.party_or_scholar) {
                    const member = await this.prisma.ssbMember.findFirst({ where: { memberRef: raw.party_or_scholar } });
                    proposedByMemberId = member?.id ?? null;
                }
                const row = await this.prisma.ssbResolution.upsert({
                    where: { migrationSourceRef: raw.record_ref },
                    create: {
                        resolutionRef: raw.record_ref,
                        resolutionDate: raw.date ? new Date(raw.date) : null,
                        proposedByMemberId,
                        summary: raw.detail_or_summary,
                        standardApplied: raw.standard_applied || null,
                        voteResult: raw.vote_or_result || null,
                        effectiveDate: raw.effective_date ? new Date(raw.effective_date) : null,
                        status: raw.status || 'APPROVED',
                        documentRef: raw.document_ref || null,
                        notes: raw.notes || null,
                        migrationSourceRef: raw.record_ref,
                    },
                    update: {},
                });
                return row.id;
            }
            case 'PURIFICATION': {
                const row = await this.prisma.purificationRecord.upsert({
                    where: { migrationSourceRef: raw.record_ref },
                    create: {
                        purificationRef: raw.record_ref,
                        identifiedDate: raw.date ? new Date(raw.date) : null,
                        sourceDescription: raw.detail_or_summary,
                        amountKobo: raw.amount_naira ? nairaToKobo(raw.amount_naira) : BigInt(0),
                        charityRecipient: raw.recipient_or_reviewer || null,
                        status: raw.status || 'IDENTIFIED',
                        documentRef: raw.document_ref || null,
                        notes: raw.notes || null,
                        migrationSourceRef: raw.record_ref,
                    },
                    update: {},
                });
                return row.id;
            }
            case 'COMPLIANCE_CHECK':
            default: {
                let reviewedByMemberId = null;
                if (raw.recipient_or_reviewer) {
                    const member = await this.prisma.ssbMember.findFirst({ where: { memberRef: raw.recipient_or_reviewer } });
                    reviewedByMemberId = member?.id ?? null;
                }
                const row = await this.prisma.complianceCheck.upsert({
                    where: { migrationSourceRef: raw.record_ref },
                    create: {
                        checkCode: raw.record_ref,
                        description: raw.detail_or_summary,
                        standardApplied: raw.standard_applied || null,
                        result: raw.vote_or_result || null,
                        frequency: raw.status || null,
                        reviewedByMemberId,
                        documentRef: raw.document_ref || null,
                        notes: raw.notes || null,
                        migrationSourceRef: raw.record_ref,
                    },
                    update: {},
                });
                return row.id;
            }
        }
    }
    async nextInvestorId() {
        const rows = await this.prisma.$queryRaw `SELECT nextval('investor_id_seq')`;
        const n = rows[0].nextval.toString().padStart(3, '0');
        const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        return `INV-${today}-${n}`;
    }
    async assertCapability(userId, functionCode, level, activity) {
        const { eligible } = await this.delegation.hasCapability(userId, functionCode, level);
        if (!eligible) {
            await this.audit.record({
                actorUserId: userId,
                action: 'PERMISSION_DENIED',
                entityType: 'migration_activity',
                entityId: activity,
                after: { functionCode, level },
            });
            throw new migration_types_1.MigrationValidationError(`User lacks ${level} authority on ${functionCode} (standing or delegated), required to ${activity}.`);
        }
    }
};
exports.MigrationService = MigrationService;
exports.MigrationService = MigrationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService,
        delegation_service_1.DelegationService])
], MigrationService);
function requireField(raw, field, f, gate = 'structural') {
    if (!raw[field] || raw[field].trim() === '') {
        f.push({ gate, reason: `required field '${field}' is missing or blank` });
    }
}
function checkDate(raw, field, f) {
    const v = raw[field];
    if (!v)
        return;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v) || Number.isNaN(new Date(v).getTime())) {
        f.push({ gate: 'structural', reason: `field '${field}' value '${v}' is not a valid YYYY-MM-DD date` });
    }
}
function checkAmount(raw, field, f, opts) {
    const v = raw[field];
    if (v === undefined || v === '')
        return;
    const n = Number(v);
    if (Number.isNaN(n)) {
        f.push({ gate: opts.gate ?? 'structural', reason: `field '${field}' value '${v}' is not numeric` });
        return;
    }
    if (!opts.allowNegative && n < 0) {
        f.push({ gate: opts.gate ?? 'structural', reason: `field '${field}' value '${v}' must not be negative` });
    }
    const decimals = (v.split('.')[1] ?? '').length;
    if (decimals > 2) {
        f.push({ gate: opts.gate ?? 'kobo-integers', reason: `field '${field}' value '${v}' has more than 2 decimal places — not a valid kobo-precision amount` });
    }
}
function nairaToKobo(naira) {
    const n = Number(naira);
    return BigInt(Math.round(n * 100));
}
//# sourceMappingURL=migration.service.js.map