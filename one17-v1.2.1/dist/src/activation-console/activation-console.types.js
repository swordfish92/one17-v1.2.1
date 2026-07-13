"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIVATION_STEP_CODES = exports.ActivationConsoleError = void 0;
class ActivationConsoleError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ActivationConsoleError';
    }
}
exports.ActivationConsoleError = ActivationConsoleError;
exports.ACTIVATION_STEP_CODES = [
    'IDENTITY',
    'PEOPLE',
    'BOOKS',
    'TAXES',
    'PRODUCTS',
    'RISK',
    'RAILS',
    'DATA',
    'PROOF',
];
//# sourceMappingURL=activation-console.types.js.map