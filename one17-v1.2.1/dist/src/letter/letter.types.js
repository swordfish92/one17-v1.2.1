"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterError = void 0;
class LetterError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LetterError';
    }
}
exports.LetterError = LetterError;
//# sourceMappingURL=letter.types.js.map