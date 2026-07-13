"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestContext = void 0;
exports.getCurrentRequestId = getCurrentRequestId;
const node_async_hooks_1 = require("node:async_hooks");
exports.requestContext = new node_async_hooks_1.AsyncLocalStorage();
function getCurrentRequestId() {
    return exports.requestContext.getStore()?.requestId;
}
//# sourceMappingURL=request-context.js.map