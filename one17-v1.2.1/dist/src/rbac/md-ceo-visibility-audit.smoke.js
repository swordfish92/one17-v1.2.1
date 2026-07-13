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
const prisma_service_1 = require("../prisma/prisma.service");
let failed = false;
function ok(label) { console.log(`OK: ${label}`); }
function fail(label, detail) { console.error(`FAIL: ${label}`, detail ?? ''); failed = true; }
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    const opsApiDir = path.join(__dirname, '..', 'ops-api');
    const controllerFiles = fs.readdirSync(opsApiDir).filter((f) => f.endsWith('.controller.ts'));
    const allGatedFunctions = new Set();
    for (const file of controllerFiles) {
        const content = fs.readFileSync(path.join(opsApiDir, file), 'utf8');
        for (const m of content.matchAll(/@RequiresCapability\(\s*'([A-Z_]+)'\s*,\s*'(VIEW|INITIATE|APPROVE)'\s*\)/g)) {
            allGatedFunctions.add(m[1]);
        }
    }
    ok(`Found ${allGatedFunctions.size} distinct function code(s) gated by @RequiresCapability across ${controllerFiles.length} ops-api controller file(s)`);
    const mdCeoGrants = await prisma.rolePermission.findMany({ where: { roleCode: 'MD_CEO' }, select: { functionCode: true, level: true } });
    const mdCeoByFunction = new Map();
    for (const g of mdCeoGrants) {
        if (!mdCeoByFunction.has(g.functionCode))
            mdCeoByFunction.set(g.functionCode, new Set());
        mdCeoByFunction.get(g.functionCode).add(g.level);
    }
    const DELIBERATE_EXCEPTIONS = new Set([
        'COMPANY_ACCOUNTING_DASHBOARD',
        'FUND_ACCOUNTING_DASHBOARD',
        'BD_DASHBOARD',
    ]);
    const capabilityGaps = [];
    for (const func of allGatedFunctions) {
        if (DELIBERATE_EXCEPTIONS.has(func))
            continue;
        const levels = mdCeoByFunction.get(func);
        if (!levels || !levels.has('VIEW')) {
            capabilityGaps.push(func);
        }
    }
    if (capabilityGaps.length === 0) {
        ok(`0 capability-level visibility gaps for MD_CEO across ${allGatedFunctions.size} gated function(s) (${DELIBERATE_EXCEPTIONS.size} deliberate, documented exception(s) excluded)`);
    }
    else {
        fail(`${capabilityGaps.length} function(s) with a real route but NO MD_CEO VIEW grant`, capabilityGaps);
    }
    const layoutPath = path.join(__dirname, '..', '..', 'ops-ui', 'src', 'components', 'Layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const navItemRe = /\{\s*to:\s*'([^']+)',\s*label:\s*'([^']+)',\s*visible:\s*(.+?)\s*\}\s*,?\s*$/gm;
    const navItems = [];
    for (const m of layoutContent.matchAll(navItemRe)) {
        navItems.push({ to: m[1], label: m[2], visible: m[3] });
    }
    ok(`Found ${navItems.length} nav entries in ops-ui/src/components/Layout.tsx`);
    function mdCeoCan(functionCode, level) {
        return mdCeoByFunction.get(functionCode)?.has(level) ?? false;
    }
    function evaluateVisible(expr) {
        if (expr.trim() === 'true')
            return true;
        const terms = [...expr.matchAll(/can\(\s*'([A-Z_]+)'\s*,\s*'(VIEW|INITIATE|APPROVE)'\s*\)/g)];
        if (terms.length === 0)
            return null;
        return terms.some((t) => mdCeoCan(t[1], t[2]));
    }
    const navGaps = [];
    const unrecognized = [];
    let deliberateNavExceptions = 0;
    for (const item of navItems) {
        const result = evaluateVisible(item.visible);
        if (result === null) {
            unrecognized.push(item);
            continue;
        }
        if (!result) {
            const isDeliberateException = [...DELIBERATE_EXCEPTIONS].some((f) => item.visible.includes(`'${f}'`));
            if (isDeliberateException) {
                deliberateNavExceptions++;
                continue;
            }
            navGaps.push(item);
        }
    }
    if (deliberateNavExceptions > 0) {
        ok(`${deliberateNavExceptions} nav entr(y/ies) correctly excluded as the CHECK14 landing-page-ambiguity guard (deliberate, documented)`);
    }
    if (unrecognized.length > 0) {
        ok(`${unrecognized.length} nav entr(y/ies) use a visibility expression this script's regex doesn't parse -- listed for manual review, not counted as gaps or passes`);
        for (const u of unrecognized)
            console.log(`  UNRECOGNIZED: ${u.to} (${u.label}) -- visible: ${u.visible}`);
    }
    if (navGaps.length === 0) {
        ok(`0 nav-reachability gaps for MD_CEO across ${navItems.length - unrecognized.length} parseable nav entries`);
    }
    else {
        fail(`${navGaps.length} nav entr(y/ies) NOT visible to MD_CEO`, navGaps.map((g) => `${g.to} (${g.label}): ${g.visible}`));
    }
    console.log(`\n${failed ? 'AUDIT FAILED -- see FAIL lines above' : 'AUDIT OK'} — invariant 61(a) MD_CEO total-visibility audit against the real live DB + Layout.tsx.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=md-ceo-visibility-audit.smoke.js.map