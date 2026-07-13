"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskError = void 0;
class TaskError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TaskError';
    }
}
exports.TaskError = TaskError;
//# sourceMappingURL=task.types.js.map