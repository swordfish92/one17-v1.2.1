"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installBigIntJsonSupport = installBigIntJsonSupport;
function installBigIntJsonSupport() {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
}
//# sourceMappingURL=bigint-json.js.map