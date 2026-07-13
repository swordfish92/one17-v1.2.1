"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LedgerLifecycleError = void 0;
class LedgerLifecycleError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LedgerLifecycleError';
    }
}
exports.LedgerLifecycleError = LedgerLifecycleError;
//# sourceMappingURL=ledger.types.js.map