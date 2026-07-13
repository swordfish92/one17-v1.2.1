import 'dotenv/config';
// Walkthrough-only utility: sets/resets the login password for every demo
// portal persona (investor-portal + counterparty-portal accounts) against
// the DEDICATED one17_walkthrough database (never the dev DB — same
// discipline as scripts/walkthrough-seed.ts). Creates the PortalClientUser/
// PortalCounterpartyUser row if it doesn't exist yet, resets the hash if it
// does. Never hardcoded — password comes from the environment only.
//
// Extended (post-CHECK23, walkthrough portfolio-diversity expansion) from
// the original 2-persona version to cover the FULL roster: the 2 originally
// curated investors (Chief Adaeze Nwankwo, Lagos Trading Ventures Ltd), the
// 6 new named investors from walkthrough-seed-expansion-v2.ts, the original
// counterparty (Sahel AgroProcessing Ltd), and the 6 new counterparties
// from the same expansion script -- 15 portal logins total, all driven off
// explicit email/legalName lists below rather than "every row in the table"
// (the 500 anonymous bulk-client investors from walkthrough-seed-bulk-
// clients.ts deliberately do NOT get portal access here -- they exist for
// dashboard/scale testing, not named walkthrough personas a reviewer would
// actually log in as).
import { PrismaService } from '../src/prisma/prisma.service';
import { hash as argon2Hash } from '@node-rs/argon2';

function ok(label: string) { console.log(`OK: ${label}`); }
function fail(label: string): never { console.error(`FAIL: ${label}`); process.exit(1); }

function requirePassword(): string {
  const value = process.env.WALKTHROUGH_PORTAL_PASSWORD;
  if (!value || value.length < 12) {
    fail('WALKTHROUGH_PORTAL_PASSWORD must be set in the environment (min 12 chars). See .env.example.');
  }
  return value;
}

const INVESTOR_EMAILS = [
  'chief.adaeze.nwankwo@example.com',       // HNWI individual, LOW risk (Session 1-3)
  'info@lagostradingventures.example.com',  // Corporate, HIGH risk EDD+MD (Session 1-3)
  'kunle.adewusi@example.com',              // HNWI individual, LOW risk, Halal Fund
  'ifeoma.nnamdi@example.com',              // HNWI individual, LOW risk, ND Mandate
  'musa.danlami@example.com',               // HNWI individual, LOW risk, Mudarabah Pool
  'invest@highgaterealestate.example.com',  // Corporate, HIGH risk, Halal Fund
  'treasury@meridianshipping.example.com',  // Corporate, HIGH risk, Mudarabah Pool
  'folake.ogundipe@example.com',            // HNWI individual, LOW risk, ND Mandate
];

const COUNTERPARTY_LEGAL_NAMES = [
  'Sahel AgroProcessing Ltd',              // original, 9mo Murabaha, disbursed
  'Coastal Foods & Logistics Ltd',         // 6mo Murabaha, disbursed, mixed paid/overdue
  'Northbridge Construction Ltd',          // 24mo Ijarah, disbursed, mixed paid/overdue
  'Zenith Textile Mills Ltd',              // 12mo Musharakah, disbursed, healthy mid-life
  'Savanna Energy Solutions Ltd',          // 18mo Murabaha, disbursed, early-stage overdue
  'Pinnacle Healthcare Supplies Ltd',      // 3mo Ijarah, disbursed, fully repaid
  'Everline Commodities Trading Ltd',      // 9mo Murabaha, still SUBMITTED (in review queue)
];

async function main() {
  const password = requirePassword();
  const passwordHash = await argon2Hash(password);

  const prisma = new PrismaService();
  await prisma.onModuleInit();

  let investorCount = 0;
  for (const email of INVESTOR_EMAILS) {
    const investor = await prisma.investor.findUnique({ where: { contactEmail: email } });
    if (!investor) { console.log(`SKIPPED: investor ${email} not found — run walkthrough-seed.ts / walkthrough-seed-expansion-v2.ts first.`); continue; }
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
    if (!counterparty) { console.log(`SKIPPED: counterparty ${legalName} not found — run walkthrough-seed.ts / walkthrough-seed-expansion-v2.ts first.`); continue; }
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
