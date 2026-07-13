"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const rbac_service_1 = require("../rbac/rbac.service");
const auth_service_1 = require("../auth/auth.service");
const mfa_service_1 = require("../mfa/mfa.service");
const delegation_service_1 = require("../delegation/delegation.service");
const workflow_service_1 = require("../workflow/workflow.service");
const settings_registry_service_1 = require("./settings-registry.service");
const RUN = Date.now();
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const audit = new audit_service_1.AuditService(prisma);
    const delegation = new delegation_service_1.DelegationService(prisma, audit);
    const workflow = new workflow_service_1.WorkflowEngineService(prisma, audit, delegation);
    const rbac = new rbac_service_1.RbacService(prisma, audit, workflow, new auth_service_1.AuthService(prisma, audit, new mfa_service_1.MfaService(prisma, audit)));
    const registry = new settings_registry_service_1.SettingsRegistryService(prisma, delegation);
    const outsider = await prisma.appUser.create({ data: { email: `settings-outsider-${RUN}@one17.test`, displayName: 'settings-outsider' } });
    const wmAdvisor = await prisma.appUser.create({ data: { email: `settings-wm-${RUN}@one17.test`, displayName: 'settings-wm-advisor' } });
    await rbac.assignRole({ userId: wmAdvisor.id, roleCode: 'WM_ADVISOR' });
    const superAdmin = await prisma.appUser.create({ data: { email: `settings-super-${RUN}@one17.test`, displayName: 'settings-super-admin' } });
    await rbac.assignRole({ userId: superAdmin.id, roleCode: 'SUPER_ADMIN' });
    const outsiderRegistry = await registry.getRegistry(outsider.id);
    if (Array.isArray(outsiderRegistry) && outsiderRegistry.length === 0) {
        ok(`outsider (zero capabilities) sees an empty registry, not an error or the full list`);
    }
    else {
        fail(`expected an empty registry for an outsider`, outsiderRegistry);
    }
    const wmRegistry = await registry.getRegistry(wmAdvisor.id);
    const hasWmEntries = wmRegistry.some((e) => e.capability === 'WM_ADVISORY');
    const hasProcurementEntry = wmRegistry.some((e) => e.capability === 'PROCUREMENT_OPERATIONS');
    if (hasWmEntries && !hasProcurementEntry) {
        ok(`WM_ADVISOR sees WM_ADVISORY-gated configs (${wmRegistry.filter((e) => e.capability === 'WM_ADVISORY').length} entries) but not PROCUREMENT_OPERATIONS-gated ones — per-entry capability filtering holds, same as every nav item's own visible: can(...) check`);
    }
    else {
        fail(`expected WM-domain visibility without procurement visibility`, { hasWmEntries, hasProcurementEntry });
    }
    const wmTierEntry = wmRegistry.find((e) => e.table === 'wmClientTierConfig');
    const actualTierCount = await prisma.wmClientTierConfig.count();
    if (wmTierEntry && wmTierEntry.rowCount === actualTierCount && actualTierCount > 0) {
        ok(`registry rowCount for WM Client Tier Bands (${wmTierEntry.rowCount}) matches the real table count — not a fabricated summary`);
    }
    else {
        fail(`expected rowCount to match the real table count`, { wmTierEntry, actualTierCount });
    }
    const superRegistry = await registry.getRegistry(superAdmin.id);
    if (superRegistry.length > wmRegistry.length) {
        ok(`SUPER_ADMIN (broad capability grants) sees a strictly larger registry (${superRegistry.length} entries) than WM_ADVISOR (${wmRegistry.length}) — visibility genuinely scales with capability, not a hardcoded role check`);
    }
    else {
        fail(`expected SUPER_ADMIN to see more entries than a single-capability role`, { superCount: superRegistry.length, wmCount: wmRegistry.length });
    }
    const exportSnapshot = await registry.exportForAuditor(wmAdvisor.id);
    const exportedTables = exportSnapshot.sections.map((s) => s.table).sort();
    const registryTables = wmRegistry.map((e) => e.table).sort();
    if (JSON.stringify(exportedTables) === JSON.stringify(registryTables)) {
        ok(`auditor export for WM_ADVISOR covers exactly the same tables the registry view shows (${exportedTables.length}) — never a privilege-escalation path to see more via export than via the view`);
    }
    else {
        fail(`export/registry visibility mismatch`, { exportedTables, registryTables });
    }
    const wmTierSection = exportSnapshot.sections.find((s) => s.table === 'wmClientTierConfig');
    if (wmTierSection && wmTierSection.rows.length === actualTierCount) {
        ok(`export section for WM Client Tier Bands contains ${wmTierSection.rows.length} real rows, not a summary or placeholder`);
    }
    else {
        fail(`expected the export section to contain the real rows`, wmTierSection);
    }
    if (exportSnapshot.exportedByUserId === wmAdvisor.id && typeof exportSnapshot.exportedAt === 'string') {
        ok(`export is attributed (exportedByUserId, exportedAt) for audit-trail purposes`);
    }
    else {
        fail(`expected export attribution fields`, { exportedByUserId: exportSnapshot.exportedByUserId, exportedAt: exportSnapshot.exportedAt });
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — Unified Settings area (invariant 39e) against the real live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=settings-registry.smoke.js.map