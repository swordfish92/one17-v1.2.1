"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicIntakeError = void 0;
class PublicIntakeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PublicIntakeError';
    }
}
exports.PublicIntakeError = PublicIntakeError;
//# sourceMappingURL=public-intake.types.js.map