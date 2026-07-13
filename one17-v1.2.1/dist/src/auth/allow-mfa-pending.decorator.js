"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowMfaPending = exports.ALLOW_MFA_PENDING_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ALLOW_MFA_PENDING_KEY = 'allowMfaPending';
const AllowMfaPending = () => (0, common_1.SetMetadata)(exports.ALLOW_MFA_PENDING_KEY, true);
exports.AllowMfaPending = AllowMfaPending;
//# sourceMappingURL=allow-mfa-pending.decorator.js.map