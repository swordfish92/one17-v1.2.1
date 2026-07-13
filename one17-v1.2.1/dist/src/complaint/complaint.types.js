"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintError = exports.DsrCategory = void 0;
const client_1 = require("../../generated/prisma/client");
Object.defineProperty(exports, "DsrCategory", { enumerable: true, get: function () { return client_1.DsrCategory; } });
class ComplaintError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ComplaintError';
    }
}
exports.ComplaintError = ComplaintError;
//# sourceMappingURL=complaint.types.js.map