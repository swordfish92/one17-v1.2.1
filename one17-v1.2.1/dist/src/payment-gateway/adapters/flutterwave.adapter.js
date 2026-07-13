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
exports.FlutterwaveAdapter = void 0;
const crypto = __importStar(require("crypto"));
const payment_gateway_types_1 = require("../payment-gateway.types");
const types_1 = require("./types");
class FlutterwaveAdapter {
    vendorCode = 'FLUTTERWAVE';
    vendorLabel = 'Flutterwave';
    docUrl = 'https://developer.flutterwave.com/docs/webhooks';
    verifyWebhookSignature(headers, parsedBody, secrets, rawBody) {
        const signature = (0, types_1.firstHeader)(headers['flutterwave-signature']);
        if (!signature)
            throw new payment_gateway_types_1.PaymentGatewayError('Flutterwave webhook missing the flutterwave-signature header.');
        if (!secrets.webhookSecret)
            throw new payment_gateway_types_1.PaymentGatewayError('No Flutterwave secret hash is configured on this provider slot -- cannot verify.');
        if (!rawBody) {
            throw new payment_gateway_types_1.PaymentGatewayError('Flutterwave webhook verification requires the raw request body (main.ts rawBody:true); none was captured -- refusing to fall back to a re-serialized JSON.stringify(parsedBody) comparison.');
        }
        const expected = crypto.createHmac('sha256', secrets.webhookSecret).update(rawBody).digest('base64');
        if (!(0, types_1.timingSafeEqualString)(signature, expected)) {
            throw new payment_gateway_types_1.PaymentGatewayError('Flutterwave webhook signature verification failed.');
        }
    }
    parseWebhookEvent(parsedBody) {
        if (parsedBody?.type !== 'charge.completed')
            return null;
        const data = parsedBody.data ?? {};
        if (data.status !== 'succeeded')
            return null;
        if (!data.reference || data.amount == null) {
            throw new payment_gateway_types_1.PaymentGatewayError('Flutterwave charge.completed payload is missing data.reference/data.amount -- cannot book a settlement from it.');
        }
        const meta = data.meta && typeof data.meta === 'object' ? data.meta : {};
        return {
            gatewayEventRef: `flutterwave:${data.reference}`,
            amountKobo: BigInt(Math.round(Number(data.amount) * 100)),
            settledAt: new Date(typeof data.created_datetime === 'number' ? data.created_datetime * 1000 : Date.now()),
            custodianAccountNumber: meta.custodianAccountNumber ?? null,
            narration: data.description ?? data.customer?.email ?? null,
            rawPayload: parsedBody,
        };
    }
    async verifyTransaction(reference, secrets) {
        const secretKey = secrets.apiConfig?.secretKey;
        if (!secretKey) {
            throw new payment_gateway_types_1.PaymentGatewayError('Flutterwave apiConfig.secretKey (the API Secret Key, distinct from the webhook secret hash) is not configured -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.');
        }
        const res = await fetch(`https://api.flutterwave.com/v3/transactions/verify_by_reference?tx_ref=${encodeURIComponent(reference)}`, {
            headers: { Authorization: `Bearer ${secretKey}` },
        });
        const body = await res.json().catch(() => null);
        if (!res.ok) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Flutterwave verify-transaction call failed: HTTP ${res.status}${body?.message ? ` -- ${body.message}` : ''}`);
        }
        const status = body?.data?.status;
        return {
            verified: status === 'successful' || status === 'succeeded',
            status: status ?? 'unknown',
            amountKobo: body?.data?.amount != null ? BigInt(Math.round(Number(body.data.amount) * 100)) : null,
            reference: body?.data?.tx_ref ?? reference,
            raw: body,
        };
    }
}
exports.FlutterwaveAdapter = FlutterwaveAdapter;
//# sourceMappingURL=flutterwave.adapter.js.map