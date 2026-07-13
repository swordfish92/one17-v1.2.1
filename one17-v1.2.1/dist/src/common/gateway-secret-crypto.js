"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptSecret = encryptSecret;
exports.decryptSecret = decryptSecret;
exports.encryptSecretNullable = encryptSecretNullable;
exports.decryptSecretNullable = decryptSecretNullable;
exports.encryptJsonSecret = encryptJsonSecret;
exports.decryptJsonSecret = decryptJsonSecret;
const crypto_1 = require("crypto");
const CURRENT_KEY_VERSION = 1;
const GCM_IV_BYTES = 12;
const SALT = 'one17-gateway-secret-crypto-salt-v1';
function resolveKey(version) {
    const envVar = `GATEWAY_SECRET_ENCRYPTION_KEY_V${version}`;
    const raw = process.env[envVar];
    if (!raw) {
        if (process.env.NODE_ENV === 'production') {
            throw new Error(`${envVar} must be set in production -- gateway credential columns are encrypted at rest per invariant 75(a) (CHECK28), and there is no safe default key for a live environment.`);
        }
        return (0, crypto_1.scryptSync)(`one17-dev-only-INSECURE-gateway-secret-key-v${version}-do-not-use-in-production`, SALT, 32);
    }
    return (0, crypto_1.scryptSync)(raw, SALT, 32);
}
function encryptSecret(plaintext) {
    const key = resolveKey(CURRENT_KEY_VERSION);
    const iv = (0, crypto_1.randomBytes)(GCM_IV_BYTES);
    const cipher = (0, crypto_1.createCipheriv)('aes-256-gcm', key, iv);
    const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();
    return [`v${CURRENT_KEY_VERSION}`, iv.toString('base64'), authTag.toString('base64'), encrypted.toString('base64')].join('.');
}
function decryptSecret(value) {
    const parts = value.split('.');
    if (parts.length !== 4 || !/^v\d+$/.test(parts[0])) {
        return value;
    }
    const [versionTag, ivB64, tagB64, dataB64] = parts;
    const version = parseInt(versionTag.slice(1), 10);
    const key = resolveKey(version);
    const decipher = (0, crypto_1.createDecipheriv)('aes-256-gcm', key, Buffer.from(ivB64, 'base64'));
    decipher.setAuthTag(Buffer.from(tagB64, 'base64'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(dataB64, 'base64')), decipher.final()]);
    return decrypted.toString('utf8');
}
function encryptSecretNullable(value) {
    if (value == null || value === '')
        return value ?? null;
    return encryptSecret(value);
}
function decryptSecretNullable(value) {
    if (value == null || value === '')
        return value ?? null;
    return decryptSecret(value);
}
function isEncryptedJsonEnvelope(value) {
    return !!value && typeof value === 'object' && value.__one17Enc === true && typeof value.v === 'string';
}
function encryptJsonSecret(obj) {
    if (obj == null)
        return null;
    return { __one17Enc: true, v: encryptSecret(JSON.stringify(obj)) };
}
function decryptJsonSecret(value) {
    if (value == null)
        return null;
    if (isEncryptedJsonEnvelope(value)) {
        return JSON.parse(decryptSecret(value.v));
    }
    return value;
}
//# sourceMappingURL=gateway-secret-crypto.js.map