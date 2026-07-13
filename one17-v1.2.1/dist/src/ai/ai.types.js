"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiGatewayError = void 0;
class AiGatewayError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AiGatewayError';
    }
}
exports.AiGatewayError = AiGatewayError;
//# sourceMappingURL=ai.types.js.map