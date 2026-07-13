"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maskSecret = maskSecret;
exports.hasPendingSecret = hasPendingSecret;
exports.maskJsonConfigKeys = maskJsonConfigKeys;
exports.maskJsonConfigAllowlist = maskJsonConfigAllowlist;
const SENSITIVE_KEY_PATTERN = /password|secret|apikey|api_key|token|privatekey|private_key|clientsecret|client_secret/i;
function maskSecret(value) {
    return { hasSecret: !!value, secretPreview: value ? `••••${value.slice(-4)}` : null };
}
function hasPendingSecret(value) {
    return value != null && value !== '';
}
function maskJsonConfigKeys(json) {
    if (!json || typeof json !== 'object')
        return { configuredKeys: [], sensitiveKeys: [] };
    const keys = Object.keys(json);
    return { configuredKeys: keys, sensitiveKeys: keys.filter((k) => SENSITIVE_KEY_PATTERN.test(k)) };
}
function maskJsonConfigAllowlist(json, safeKeys) {
    if (!json || typeof json !== 'object')
        return {};
    const src = json;
    const out = {};
    for (const k of safeKeys)
        if (k in src)
            out[k] = src[k];
    return out;
}
//# sourceMappingURL=gateway-secret-masking.js.map