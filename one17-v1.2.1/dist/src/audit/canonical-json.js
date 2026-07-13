"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canonicalStringify = canonicalStringify;
function canonicalStringify(value) {
    return JSON.stringify(sortKeysDeep(value));
}
function sortKeysDeep(value) {
    if (Array.isArray(value)) {
        return value.map(sortKeysDeep);
    }
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (value !== null && typeof value === 'object') {
        return Object.keys(value)
            .sort()
            .reduce((sorted, key) => {
            sorted[key] = sortKeysDeep(value[key]);
            return sorted;
        }, {});
    }
    return value;
}
//# sourceMappingURL=canonical-json.js.map