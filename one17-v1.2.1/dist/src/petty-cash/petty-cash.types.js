"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PettyCashError = void 0;
class PettyCashError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PettyCashError';
    }
}
exports.PettyCashError = PettyCashError;
//# sourceMappingURL=petty-cash.types.js.map