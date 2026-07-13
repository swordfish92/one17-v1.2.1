"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowAuthorizationError = void 0;
class WorkflowAuthorizationError extends Error {
    workflowInstanceId;
    constructor(message, workflowInstanceId) {
        super(message);
        this.workflowInstanceId = workflowInstanceId;
        this.name = 'WorkflowAuthorizationError';
    }
}
exports.WorkflowAuthorizationError = WorkflowAuthorizationError;
//# sourceMappingURL=workflow.types.js.map