"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrcAdapter = void 0;
class CrcAdapter {
    automationLevel = 'MANUAL_PENDING_API';
    async pull(request, apiConfig) {
        void apiConfig;
        return {
            status: 'PARKED',
            summary: `[BUREAU PROVIDER "${request.providerName}" NOT CONTRACTED — placeholder pull, no live vendor call made]`,
        };
    }
}
exports.CrcAdapter = CrcAdapter;
//# sourceMappingURL=crc.adapter.js.map