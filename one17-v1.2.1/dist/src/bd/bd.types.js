"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BdLifecycleError = void 0;
class BdLifecycleError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BdLifecycleError';
    }
}
exports.BdLifecycleError = BdLifecycleError;
//# sourceMappingURL=bd.types.js.map