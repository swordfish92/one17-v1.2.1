"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarError = void 0;
class CalendarError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CalendarError';
    }
}
exports.CalendarError = CalendarError;
//# sourceMappingURL=calendar.types.js.map