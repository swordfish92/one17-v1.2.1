"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialJobFailure = void 0;
class PartialJobFailure extends Error {
    summary;
    constructor(message, summary) {
        super(message);
        this.summary = summary;
        this.name = 'PartialJobFailure';
    }
}
exports.PartialJobFailure = PartialJobFailure;
//# sourceMappingURL=scheduler.types.js.map