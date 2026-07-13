"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplayError = void 0;
class ReplayError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ReplayError';
    }
}
exports.ReplayError = ReplayError;
//# sourceMappingURL=replay.types.js.map