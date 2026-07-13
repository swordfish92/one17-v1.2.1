"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationValidationError = exports.TPL_CODES = void 0;
exports.TPL_CODES = [
    'TPL_01', 'TPL_02', 'TPL_03', 'TPL_04', 'TPL_05', 'TPL_06', 'TPL_07',
    'TPL_08', 'TPL_09', 'TPL_10', 'TPL_13',
];
class MigrationValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MigrationValidationError';
    }
}
exports.MigrationValidationError = MigrationValidationError;
//# sourceMappingURL=migration.types.js.map