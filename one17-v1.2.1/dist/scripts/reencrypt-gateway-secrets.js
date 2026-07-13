"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const prisma_service_1 = require("../src/prisma/prisma.service");
const gateway_secret_crypto_1 = require("../src/common/gateway-secret-crypto");
function isEncryptedString(v) {
    if (!v)
        return true;
    return /^v\d+\.[^.]+\.[^.]+\.[^.]*$/.test(v);
}
function isEncryptedJson(v) {
    if (v == null)
        return true;
    return typeof v === 'object' && v.__one17Enc === true;
}
async function main() {
    const prisma = new prisma_service_1.PrismaService();
    await prisma.onModuleInit();
    let rowsTouched = 0;
    for (const p of await prisma.paymentGatewayProvider.findMany()) {
        const data = {};
        if (!isEncryptedString(p.webhookSecret))
            data.webhookSecret = (0, gateway_secret_crypto_1.encryptSecret)(p.webhookSecret);
        if (!isEncryptedString(p.pendingWebhookSecret))
            data.pendingWebhookSecret = (0, gateway_secret_crypto_1.encryptSecret)(p.pendingWebhookSecret);
        if (!isEncryptedJson(p.apiConfig))
            data.apiConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(p.apiConfig);
        if (!isEncryptedJson(p.pendingApiConfig))
            data.pendingApiConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(p.pendingApiConfig);
        if (Object.keys(data).length > 0) {
            await prisma.paymentGatewayProvider.update({ where: { id: p.id }, data: data });
            console.log(`PaymentGatewayProvider slot ${p.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
            rowsTouched++;
        }
    }
    for (const c of await prisma.aiProviderCredential.findMany()) {
        const data = {};
        if (!isEncryptedString(c.apiKey))
            data.apiKey = (0, gateway_secret_crypto_1.encryptSecret)(c.apiKey);
        if (!isEncryptedString(c.pendingApiKey))
            data.pendingApiKey = (0, gateway_secret_crypto_1.encryptSecret)(c.pendingApiKey);
        if (Object.keys(data).length > 0) {
            await prisma.aiProviderCredential.update({ where: { id: c.id }, data: data });
            console.log(`AiProviderCredential slot ${c.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
            rowsTouched++;
        }
    }
    for (const a of await prisma.attendanceProvider.findMany()) {
        const data = {};
        if (!isEncryptedString(a.clientSecret))
            data.clientSecret = (0, gateway_secret_crypto_1.encryptSecret)(a.clientSecret);
        if (!isEncryptedString(a.pendingClientSecret))
            data.pendingClientSecret = (0, gateway_secret_crypto_1.encryptSecret)(a.pendingClientSecret);
        if (!isEncryptedString(a.accessToken))
            data.accessToken = (0, gateway_secret_crypto_1.encryptSecret)(a.accessToken);
        if (!isEncryptedString(a.refreshToken))
            data.refreshToken = (0, gateway_secret_crypto_1.encryptSecret)(a.refreshToken);
        if (!isEncryptedJson(a.credentialConfig))
            data.credentialConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(a.credentialConfig);
        if (!isEncryptedJson(a.pendingCredentialConfig))
            data.pendingCredentialConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(a.pendingCredentialConfig);
        if (Object.keys(data).length > 0) {
            await prisma.attendanceProvider.update({ where: { id: a.id }, data: data });
            console.log(`AttendanceProvider slot ${a.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
            rowsTouched++;
        }
    }
    for (const c of await prisma.calendarGatewayProvider.findMany()) {
        const data = {};
        if (!isEncryptedString(c.clientSecret))
            data.clientSecret = (0, gateway_secret_crypto_1.encryptSecret)(c.clientSecret);
        if (!isEncryptedString(c.pendingClientSecret))
            data.pendingClientSecret = (0, gateway_secret_crypto_1.encryptSecret)(c.pendingClientSecret);
        if (Object.keys(data).length > 0) {
            await prisma.calendarGatewayProvider.update({ where: { id: c.id }, data: data });
            console.log(`CalendarGatewayProvider slot ${c.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
            rowsTouched++;
        }
    }
    for (const b of await prisma.bureauProvider.findMany()) {
        if (!isEncryptedJson(b.apiConfig)) {
            await prisma.bureauProvider.update({ where: { id: b.id }, data: { apiConfig: (0, gateway_secret_crypto_1.encryptJsonSecret)(b.apiConfig) } });
            console.log(`BureauProvider slot ${b.providerSlot}: re-encrypted [apiConfig]`);
            rowsTouched++;
        }
    }
    for (const s of await prisma.commercialScreeningProvider.findMany()) {
        const data = {};
        if (!isEncryptedString(s.apiKey))
            data.apiKey = (0, gateway_secret_crypto_1.encryptSecret)(s.apiKey);
        if (!isEncryptedString(s.pendingApiKey))
            data.pendingApiKey = (0, gateway_secret_crypto_1.encryptSecret)(s.pendingApiKey);
        if (Object.keys(data).length > 0) {
            await prisma.commercialScreeningProvider.update({ where: { id: s.id }, data: data });
            console.log(`CommercialScreeningProvider slot ${s.providerSlot}: re-encrypted [${Object.keys(data).join(', ')}]`);
            rowsTouched++;
        }
    }
    for (const s of await prisma.screeningListSource.findMany()) {
        const data = {};
        if (!isEncryptedJson(s.extraConfig))
            data.extraConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(s.extraConfig);
        if (!isEncryptedJson(s.pendingExtraConfig))
            data.pendingExtraConfig = (0, gateway_secret_crypto_1.encryptJsonSecret)(s.pendingExtraConfig);
        if (Object.keys(data).length > 0) {
            await prisma.screeningListSource.update({ where: { id: s.id }, data: data });
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
//# sourceMappingURL=reencrypt-gateway-secrets.js.map