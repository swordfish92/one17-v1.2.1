"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZAKAT_RATE_THOUSANDTHS_OF_PERCENT = exports.ZakatError = void 0;
class ZakatError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ZakatError';
    }
}
exports.ZakatError = ZakatError;
exports.ZAKAT_RATE_THOUSANDTHS_OF_PERCENT = {
    LUNAR: 2500,
    GREGORIAN: 2577,
};
//# sourceMappingURL=zakat.types.js.map