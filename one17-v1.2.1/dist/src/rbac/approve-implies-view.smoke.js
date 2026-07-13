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
    const realViewGatedFunctions = new Set();
    for (const file of controllerFiles) {
        const content = fs.readFileSync(path.join(opsApiDir, file), 'utf8');
        for (const m of content.matchAll(/@RequiresCapability\(\s*'([A-Z_]+)'\s*,\s*'VIEW'\s*\)/g))
            realViewGatedFunctions.add(m[1]);
    }
    if (realViewGatedFunctions.size > 0) {
        ok(`Found ${realViewGatedFunctions.size} VIEW-gated function(s) across ${controllerFiles.length} ops-api controller file(s)`);
    }
    else {
        fail('Found zero VIEW-gated functions -- the controller scan itself is broken (regex or directory path), not a real "nothing uses VIEW" state');
    }
    const grants = await prisma.rolePermission.findMany({ select: { roleCode: true, functionCode: true, level: true } });
    const byRoleFunction = new Map();
    for (const g of grants) {
        const key = `${g.roleCode}::${g.functionCode}`;
        if (!byRoleFunction.has(key))
            byRoleFunction.set(key, new Set());
        byRoleFunction.get(key).add(g.level);
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
    if (gaps.length === 0) {
        ok(`0 APPROVE⇒VIEW gaps across ${byRoleFunction.size} live role+function grant pair(s) (${grants.length} total grant rows) -- the live DB matches what the seed's own assertion checked`);
    }
    else {
        fail(`${gaps.length} APPROVE⇒VIEW gap(s) found in the LIVE database (not just the seed script)`, gaps);
    }
    console.log(`\n${failed ? 'SMOKE FAILED' : 'SMOKE OK'} — APPROVE⇒VIEW class sweep (invariant 58d, CHECK15) re-verified against the live DB.`);
    process.exitCode = failed ? 1 : 0;
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=approve-implies-view.smoke.js.map