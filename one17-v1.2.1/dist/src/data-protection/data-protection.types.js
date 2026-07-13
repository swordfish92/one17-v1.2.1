"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProtectionError = exports.BreachSeverity = exports.PrivacyNoticeContext = void 0;
const client_1 = require("../../generated/prisma/client");
Object.defineProperty(exports, "PrivacyNoticeContext", { enumerable: true, get: function () { return client_1.PrivacyNoticeContext; } });
Object.defineProperty(exports, "BreachSeverity", { enumerable: true, get: function () { return client_1.BreachSeverity; } });
class DataProtectionError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataProtectionError';
    }
}
exports.DataProtectionError = DataProtectionError;
//# sourceMappingURL=data-protection.types.js.map