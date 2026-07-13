"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptToken = encryptToken;
exports.decryptToken = decryptToken;
exports.signOAuthState = signOAuthState;
exports.verifyOAuthState = verifyOAuthState;
const crypto_1 = require("crypto");
const ENV_KEY = process.env.CALENDAR_TOKEN_ENCRYPTION_KEY;
if (!ENV_KEY && process.env.NODE_ENV === 'production') {
    throw new Error('CALENDAR_TOKEN_ENCRYPTION_KEY must be set in production -- ExternalCalendarConnection.accessTokenEncrypted/refreshTokenEncrypted are encrypted at rest per the schema doc comment, and there is no safe default key for a live environment.');
}
const DEV_FALLBACK_KEY = 'one17-dev-only-INSECURE-calendar-token-key-do-not-use-in-production';
const ENCRYPTION_KEY = (0, crypto_1.scryptSync)(ENV_KEY ?? DEV_FALLBACK_KEY, 'one17-calendar-token-crypto-salt-v1', 32);
const GCM_IV_BYTES = 12;
function encryptToken(plaintext) {
    const iv = (0, crypto_1.randomBytes)(GCM_IV_BYTES);
    const cipher = (0, crypto_1.createCipheriv)('aes-256-gcm', ENCRYPTION_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();
    return [iv.toString('base64'), authTag.toString('base64'), encrypted.toString('base64')].join('.');
}
function decryptToken(ciphertext) {
    const parts = ciphertext.split('.');
    if (parts.length !== 3) {
        throw new Error('Malformed encrypted calendar token payload (expected iv.authTag.ciphertext).');
    }
    const [ivB64, tagB64, dataB64] = parts;
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-gcm', ENCRYPTION_KEY, Buffer.from(ivB64, 'base64'));
    decipher.setAuthTag(Buffer.from(tagB64, 'base64'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(dataB64, 'base64')), decipher.final()]);
    return decrypted.toString('utf8');
}
function signOAuthState(payload) {
    const body = { ...payload, nonce: (0, crypto_1.randomBytes)(8).toString('hex'), iat: Date.now() };
    const encoded = Buffer.from(JSON.stringify(body)).toString('base64url');
    const signature = (0, crypto_1.createHmac)('sha256', ENCRYPTION_KEY).update(encoded).digest('base64url');
    return `${encoded}.${signature}`;
}
const OAUTH_STATE_MAX_AGE_MS = 10 * 60_000;
function verifyOAuthState(state) {
    const parts = state.split('.');
    if (parts.length !== 2) {
        throw new Error('Malformed OAuth state parameter.');
    }
    const [encoded, signature] = parts;
    const expected = (0, crypto_1.createHmac)('sha256', ENCRYPTION_KEY).update(encoded).digest('base64url');
    if (signature !== expected) {
        throw new Error('OAuth state signature mismatch -- possible CSRF or a tampered redirect.');
    }
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8'));
    if (Date.now() - payload.iat > OAUTH_STATE_MAX_AGE_MS) {
        throw new Error('OAuth state expired -- restart the calendar connect flow.');
    }
    return payload;
}
//# sourceMappingURL=calendar-token-crypto.js.map