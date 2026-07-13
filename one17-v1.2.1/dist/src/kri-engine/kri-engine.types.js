"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KriEngineError = void 0;
class KriEngineError extends Error {
    constructor(message) {
        super(message);
        this.name = 'KriEngineError';
    }
}
exports.KriEngineError = KriEngineError;
//# sourceMappingURL=kri-engine.types.js.map