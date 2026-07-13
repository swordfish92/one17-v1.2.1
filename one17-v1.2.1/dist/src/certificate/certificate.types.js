"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateError = void 0;
class CertificateError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CertificateError';
    }
}
exports.CertificateError = CertificateError;
//# sourceMappingURL=certificate.types.js.map