"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventJournalError = void 0;
class EventJournalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EventJournalError';
    }
}
exports.EventJournalError = EventJournalError;
//# sourceMappingURL=event-journal.types.js.map