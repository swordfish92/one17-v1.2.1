"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const argon2_1 = require("@node-rs/argon2");
function ok(label) { console.log(`OK: ${label}`); }
function fail(label) { console.error(`FAIL: ${label}`); process.exit(1); }
function requirePassword() {
    const value = process.env.WALKTHROUGH_PORTAL_PASSWORD;
    if (!value || value.length < 12) {
        fail('WALKTHROUGH_PORTAL_PASSWORD must be set in the environment (min 12 chars). See .env.example.');
    }
    return value;
}
const INVESTOR_EMAILS = [
    'chief.adaeze.nwankwo@example.com',
    'info@lagostradingventures.example.com',
    'kunle.adewusi@example.com',
    'ifeoma.nnamdi@example.com',
    'musa.danlami@example.com',
    'invest@highgaterealestate.example.com',
    'treasury@meridianshipping.example.com',
    'folake.ogundipe@example.com',
];
const COUNTERPARTY_LEGAL_NAMES = [
    'Sahel AgroProcessing Ltd',
    'Coastal Foods & Logistics Ltd',
    'Northbridge Construction Ltd',
    'Zenith Textile Mills Ltd',
    'Savanna Energy Solutions Ltd',
    'Pinnacle Healthcare Supplies Ltd',
    'Everline Commodities Trading Ltd',
];
async function main() {
    const password = requirePassword();
    const passwordHash = await (0, argon2_1.hash)(password);
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    let investorCount = 0;
    for (const email of INVESTOR_EMAILS) {
        const investor = await prisma.investor.findUnique({ where: { contactEmail: email } });
        if (!investor) {
            console.log(`SKIPPED: investor ${email} not found — run walkthrough-seed.ts / walkthrough-seed-expansion-v2.ts first.`);
            continue;
        }
        const clientUser = await prisma.portalClientUser.upsert({
            where: { investorId: investor.investorId },
            create: { investorId: investor.investorId, passwordHash },
            update: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
        });
        ok(`Client portal password set for ${investor.fullLegalName} <${email}> (portalClientUser ${clientUser.id})`);
        investorCount++;
    }
    let counterpartyCount = 0;
    for (const legalName of COUNTERPARTY_LEGAL_NAMES) {
        const counterparty = await prisma.counterparty.findFirst({ where: { legalName } });
        if (!counterparty) {
            console.log(`SKIPPED: counterparty ${legalName} not found — run walkthrough-seed.ts / walkthrough-seed-expansion-v2.ts first.`);
            continue;
        }
        const cpUser = await prisma.portalCounterpartyUser.upsert({
            where: { counterpartyId: counterparty.id },
            create: { counterpartyId: counterparty.id, passwordHash },
            update: { passwordHash, failedLoginAttempts: 0, lockedUntil: null },
        });
        ok(`Counterparty portal password set for ${counterparty.legalName} (portalCounterpartyUser ${cpUser.id})`);
        counterpartyCount++;
    }
    ok(`Done: ${investorCount}/${INVESTOR_EMAILS.length} investor portal logins, ${counterpartyCount}/${COUNTERPARTY_LEGAL_NAMES.length} counterparty portal logins set.`);
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});
//# sourceMappingURL=reset-walkthrough-portal-passwords.js.map