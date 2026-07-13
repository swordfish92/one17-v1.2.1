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
exports.MonnifyAdapter = void 0;
const crypto = __importStar(require("crypto"));
const payment_gateway_types_1 = require("../payment-gateway.types");
const types_1 = require("./types");
class MonnifyAdapter {
    vendorCode = 'MONNIFY';
    vendorLabel = 'Monnify';
    docUrl = 'https://developers.monnify.com/docs/webhooks';
    verifyWebhookSignature(headers, parsedBody, secrets) {
        const signature = (0, types_1.firstHeader)(headers['monnify-signature']);
        if (!signature)
            throw new payment_gateway_types_1.PaymentGatewayError('Monnify webhook missing the monnify-signature header (only sent in production per Monnify\'s own docs).');
        if (!secrets.webhookSecret)
            throw new payment_gateway_types_1.PaymentGatewayError('No Monnify client secret is configured on this provider slot -- cannot verify.');
        const expected = crypto.createHmac('sha512', secrets.webhookSecret).update(JSON.stringify(parsedBody)).digest('hex');
        if (!(0, types_1.timingSafeEqualString)(signature, expected)) {
            throw new payment_gateway_types_1.PaymentGatewayError('Monnify webhook signature verification failed.');
        }
    }
    parseWebhookEvent(parsedBody) {
        if (parsedBody?.eventType !== 'SUCCESSFUL_TRANSACTION')
            return null;
        const data = parsedBody.eventData ?? {};
        if (data.paymentStatus !== 'PAID')
            return null;
        if (!data.paymentReference || data.amountPaid == null) {
            throw new payment_gateway_types_1.PaymentGatewayError('Monnify SUCCESSFUL_TRANSACTION payload is missing eventData.paymentReference/amountPaid -- cannot book a settlement from it.');
        }
        return {
            gatewayEventRef: `monnify:${data.paymentReference}`,
            amountKobo: BigInt(Math.round(Number(data.amountPaid) * 100)),
            settledAt: parseMonnifyPaidOn(data.paidOn),
            custodianAccountNumber: data.destinationAccountInformation?.accountNumber ?? null,
            narration: data.paymentDescription ?? data.customer?.name ?? null,
            rawPayload: parsedBody,
        };
    }
    async verifyTransaction(reference, secrets) {
        const apiKey = secrets.apiConfig?.apiKey;
        const clientSecret = secrets.webhookSecret;
        const baseUrl = secrets.apiConfig?.baseUrl ?? 'https://api.monnify.com';
        if (!apiKey || !clientSecret) {
            throw new payment_gateway_types_1.PaymentGatewayError('Monnify apiConfig.apiKey and the client secret (provider.webhookSecret, doubling as Monnify\'s clientSecret) must both be configured -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.');
        }
        const loginRes = await fetch(`${baseUrl}/api/v1/auth/login`, {
            method: 'POST',
            headers: { Authorization: `Basic ${Buffer.from(`${apiKey}:${clientSecret}`).toString('base64')}` },
        });
        const loginBody = await loginRes.json().catch(() => null);
        const accessToken = loginBody?.responseBody?.accessToken;
        if (!loginRes.ok || !accessToken) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Monnify OAuth2 login failed: HTTP ${loginRes.status}${loginBody?.responseMessage ? ` -- ${loginBody.responseMessage}` : ''}`);
        }
        const res = await fetch(`${baseUrl}/api/v2/merchant/transactions/query?paymentReference=${encodeURIComponent(reference)}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const body = await res.json().catch(() => null);
        if (!res.ok) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Monnify transaction query failed: HTTP ${res.status}${body?.responseMessage ? ` -- ${body.responseMessage}` : ''}`);
        }
        const data = body?.responseBody ?? {};
        return {
            verified: data?.paymentStatus === 'PAID',
            status: data?.paymentStatus ?? 'unknown',
            amountKobo: data?.amountPaid != null ? BigInt(Math.round(Number(data.amountPaid) * 100)) : null,
            reference: data?.paymentReference ?? reference,
            raw: body,
        };
    }
}
exports.MonnifyAdapter = MonnifyAdapter;
function parseMonnifyPaidOn(paidOn) {
    if (typeof paidOn !== 'string')
        return new Date();
    const m = paidOn.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2}):(\d{2})\s*(AM|PM)$/i);
    if (!m) {
        const fallback = new Date(paidOn);
        return Number.isNaN(fallback.getTime()) ? new Date() : fallback;
    }
    const [, dd, mm, yyyy, hh, min, ss, ampm] = m;
    let hour = Number(hh) % 12;
    if (ampm.toUpperCase() === 'PM')
        hour += 12;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd), hour, Number(min), Number(ss));
}
//# sourceMappingURL=monnify.adapter.js.map