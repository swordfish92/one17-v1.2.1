// Run with: npx tsx scripts/reencrypt-gateway-secrets.ts
//
// Invariant 75(a) (CHECK28, v1.2.1 audit remediation): the one-time
// migration pass that converts every existing plaintext gateway-credential
// value to the AES-256-GCM envelope format (src/common/gateway-secret-
// crypto.ts) -- "migrate/re-encrypt existing values" per the CEO's own
// directive. Idempotent and safe to re-run any number of times (including
// after a future key-rotation bump to CURRENT_KEY_VERSION): a value
// already in the v<N>.iv.authTag.ciphertext / {__one17Enc:true,...} shape
// is left untouched, only genuine plaintext gets encrypted. Covers every
// column named in invariant 75(a): payment webhook secrets + apiConfig, AI
// keys, attendance client-secret/tokens, calendar client-secrets, bureau
// apiConfig, commercial-screening keys, plus the screening list source's
// own registered-download-token JSON blob (structurally identical to the
// other Json-config-holds-a-credential columns already covered).
import 'dotenv/config';
import { PrismaService } from '../src/prisma/prisma.service';
import { encryptJsonSecret, encryptSecret } from '../src/common/gateway-secret-crypto';

function isEncryptedString(v: string | null | undefined): boolean {
  if (!v) return true; // null/empty -- nothing to encrypt, and '' is the documented "placeholder row" sentinel
  return /^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(v);
}
function isEncryptedJson(v: unknown): boolean {
  if (v == null) return true;
  return typeof v === 'object' && (v as any).__one17Enc === true;
}

async function main() {
  const prisma = new PrismaService();
  await prisma.onModuleInit();
  let rowsTouched = 0;

  // ============================== PaymentGatewayProvider ==============================
  for (const p of await prisma.paymentGatewayProvider.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedString(p.webhookSecret)) data.webhookSecret = encryptSecret(p.webhookSecret);
    if (!isEncryptedString(p.pendingWebhookSecret)) data.pendingWebhookSecret = encryptSecret(p.pendingWebhookSecret!);
    if (!isEncryptedJson(p.apiConfig)) data.apiConfig = encryptJsonSecret(p.apiConfig as Record<string, unknown>);
    if (!isEncryptedJson(p.pendingApiConfig)) data.pendingApiConfig = encryptJsonSecret(p.pendingApiConfig as Record<string, unknown>);
    if (Object.keys(data).length > 0) {
      await prisma.paymentGatewayProvider.update({ where: { id: p.id }, data: data as any });
      console.log(`PaymentGatewayProvider slot ${p.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }

  // ============================== AiProviderCredential ==============================
  for (const c of await prisma.aiProviderCredential.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedString(c.apiKey)) data.apiKey = encryptSecret(c.apiKey!);
    if (!isEncryptedString(c.pendingApiKey)) data.pendingApiKey = encryptSecret(c.pendingApiKey!);
    if (Object.keys(data).length > 0) {
      await prisma.aiProviderCredential.update({ where: { id: c.id }, data: data as any });
      console.log(`AiProviderCredential slot ${c.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }

  // ============================== AttendanceProvider ==============================
  for (const a of await prisma.attendanceProvider.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedString(a.clientSecret)) data.clientSecret = encryptSecret(a.clientSecret!);
    if (!isEncryptedString(a.pendingClientSecret)) data.pendingClientSecret = encryptSecret(a.pendingClientSecret!);
    if (!isEncryptedString(a.accessToken)) data.accessToken = encryptSecret(a.accessToken!);
    if (!isEncryptedString(a.refreshToken)) data.refreshToken = encryptSecret(a.refreshToken!);
    if (!isEncryptedJson(a.credentialConfig)) data.credentialConfig = encryptJsonSecret(a.credentialConfig as Record<string, unknown>);
    if (!isEncryptedJson(a.pendingCredentialConfig)) data.pendingCredentialConfig = encryptJsonSecret(a.pendingCredentialConfig as Record<string, unknown>);
    if (Object.keys(data).length > 0) {
      await prisma.attendanceProvider.update({ where: { id: a.id }, data: data as any });
      console.log(`AttendanceProvider slot ${a.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }

  // ============================== CalendarGatewayProvider ==============================
  for (const c of await prisma.calendarGatewayProvider.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedString(c.clientSecret)) data.clientSecret = encryptSecret(c.clientSecret!);
    if (!isEncryptedString(c.pendingClientSecret)) data.pendingClientSecret = encryptSecret(c.pendingClientSecret!);
    if (Object.keys(data).length > 0) {
      await prisma.calendarGatewayProvider.update({ where: { id: c.id }, data: data as any });
      console.log(`CalendarGatewayProvider slot ${c.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }
  // NOTE: ExternalCalendarConnection.accessTokenEncrypted/refreshTokenEncrypted
  // is NOT touched here -- it was already encrypted at rest via
  // calendar-token-crypto.ts BEFORE invariant 75(a) existed (the precedent
  // this whole invariant generalizes from), so there is nothing to migrate.

  // ============================== BureauProvider ==============================
  for (const b of await prisma.bureauProvider.findMany()) {
    if (!isEncryptedJson(b.apiConfig)) {
      await prisma.bureauProvider.update({ where: { id: b.id }, data: { apiConfig: encryptJsonSecret(b.apiConfig as Record<string, unknown>) as any } });
      console.log(`BureauProvider slot ${b.providerSlot}: re-encrypted [apiConfig]`);
      rowsTouched++;
    }
  }

  // ============================== CommercialScreeningProvider ==============================
  for (const s of await prisma.commercialScreeningProvider.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedString(s.apiKey)) data.apiKey = encryptSecret(s.apiKey!);
    if (!isEncryptedString(s.pendingApiKey)) data.pendingApiKey = encryptSecret(s.pendingApiKey!);
    if (Object.keys(data).length > 0) {
      await prisma.commercialScreeningProvider.update({ where: { id: s.id }, data: data as any });
      console.log(`CommercialScreeningProvider slot ${s.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }

  // ============================== ScreeningListSource ==============================
  for (const s of await prisma.screeningListSource.findMany()) {
    const data: Record<string, unknown> = {};
    if (!isEncryptedJson(s.extraConfig)) data.extraConfig = encryptJsonSecret(s.extraConfig as Record<string, unknown>);
    if (!isEncryptedJson(s.pendingExtraConfig)) data.pendingExtraConfig = encryptJsonSecret(s.pendingExtraConfig as Record<string, unknown>);
    if (Object.keys(data).length > 0) {
      await prisma.screeningListSource.update({ where: { id: s.id }, data: data as any });
      console.log(`ScreeningListSource ${s.sourceCode}: re-encrypted [${Object.keys(data).join(', ')}]`);
      rowsTouched++;
    }
  }

  console.log(`\nDone -- ${rowsTouched} row(s) re-encrypted (0 means every value was already in the encrypted envelope format, or null/empty -- safe to re-run any time).`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
