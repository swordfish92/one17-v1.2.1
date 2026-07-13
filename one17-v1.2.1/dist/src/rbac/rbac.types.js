"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SodConflictError = void 0;
class SodConflictError extends Error {
    userId;
    attemptedRoleCode;
    constructor(message, userId, attemptedRoleCode) {
        super(message);
        this.userId = userId;
        this.attemptedRoleCode = attemptedRoleCode;
        this.name = 'SodConflictError';
    }
}
exports.SodConflictError = SodConflictError;
//# sourceMappingURL=rbac.types.js.map