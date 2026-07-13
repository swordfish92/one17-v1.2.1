"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardError = void 0;
class DashboardError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DashboardError';
    }
}
exports.DashboardError = DashboardError;
//# sourceMappingURL=dashboard.types.js.map