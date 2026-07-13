"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADAPTER_REGISTRY = void 0;
exports.detectVendorCode = detectVendorCode;
const paystack_adapter_1 = require("./paystack.adapter");
const flutterwave_adapter_1 = require("./flutterwave.adapter");
const monnify_adapter_1 = require("./monnify.adapter");
const paymish_adapter_1 = require("./paymish.adapter");
exports.ADAPTER_REGISTRY = {
    PAYSTACK: new paystack_adapter_1.PaystackAdapter(),
    FLUTTERWAVE: new flutterwave_adapter_1.FlutterwaveAdapter(),
    MONNIFY: new monnify_adapter_1.MonnifyAdapter(),
    PAYMISH: new paymish_adapter_1.PaymishAdapter(),
};
function detectVendorCode(providerName) {
    const upper = providerName.toUpperCase();
    const codes = Object.keys(exports.ADAPTER_REGISTRY);
    return codes.find((code) => upper.includes(code)) ?? null;
}
//# sourceMappingURL=registry.js.map