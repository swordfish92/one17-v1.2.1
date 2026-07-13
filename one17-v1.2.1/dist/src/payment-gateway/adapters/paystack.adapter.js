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
exports.PaystackAdapter = void 0;
const crypto = __importStar(require("crypto"));
const payment_gateway_types_1 = require("../payment-gateway.types");
const types_1 = require("./types");
class PaystackAdapter {
    vendorCode = 'PAYSTACK';
    vendorLabel = 'Paystack';
    docUrl = 'https://paystack.com/docs/payments/webhooks/';
    verifyWebhookSignature(headers, parsedBody, secrets) {
        const signature = (0, types_1.firstHeader)(headers['x-paystack-signature']);
        if (!signature)
            throw new payment_gateway_types_1.PaymentGatewayError('Paystack webhook missing the x-paystack-signature header.');
        if (!secrets.webhookSecret)
            throw new payment_gateway_types_1.PaymentGatewayError('No Paystack secret key is configured on this provider slot -- cannot verify.');
        const expected = crypto.createHmac('sha512', secrets.webhookSecret).update(JSON.stringify(parsedBody)).digest('hex');
        if (!(0, types_1.timingSafeEqualString)(signature, expected)) {
            throw new payment_gateway_types_1.PaymentGatewayError('Paystack webhook signature verification failed.');
        }
    }
    parseWebhookEvent(parsedBody) {
        if (parsedBody?.event !== 'charge.success')
            return null;
        const data = parsedBody.data ?? {};
        if (data.status !== 'success')
            return null;
        if (!data.reference || data.amount == null) {
            throw new payment_gateway_types_1.PaymentGatewayError('Paystack charge.success payload is missing data.reference/data.amount -- cannot book a settlement from it.');
        }
        const meta = data.metadata && typeof data.metadata === 'object' ? data.metadata : {};
        return {
            gatewayEventRef: `paystack:${data.reference}`,
            amountKobo: BigInt(Math.round(Number(data.amount))),
            settledAt: new Date(data.paid_at ?? data.created_at ?? Date.now()),
            custodianAccountNumber: meta.custodianAccountNumber ?? null,
            narration: meta.narration ?? data.customer?.email ?? null,
            rawPayload: parsedBody,
        };
    }
    async verifyTransaction(reference, secrets) {
        if (!secrets.webhookSecret) {
            throw new payment_gateway_types_1.PaymentGatewayError('Paystack secret key is not configured (provider.webhookSecret doubles as the API Bearer key per Paystack convention) -- cannot call the verify-transaction API. Invariant 73(d): adapters ship inert until a tenant enters real keys.');
        }
        const res = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
            headers: { Authorization: `Bearer ${secrets.webhookSecret}` },
        });
        const body = await res.json().catch(() => null);
        if (!res.ok || !body?.status) {
            throw new payment_gateway_types_1.PaymentGatewayError(`Paystack verify-transaction call failed: HTTP ${res.status}${body?.message ? ` -- ${body.message}` : ''}`);
        }
        return {
            verified: body.data?.status === 'success',
            status: body.data?.status ?? 'unknown',
            amountKobo: body.data?.amount != null ? BigInt(Math.round(Number(body.data.amount))) : null,
            reference: body.data?.reference ?? reference,
            raw: body,
        };
    }
}
exports.PaystackAdapter = PaystackAdapter;
//# sourceMappingURL=paystack.adapter.js.map