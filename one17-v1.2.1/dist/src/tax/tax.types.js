"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxError = void 0;
class TaxError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TaxError';
    }
}
exports.TaxError = TaxError;
//# sourceMappingURL=tax.types.js.map