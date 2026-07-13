"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiresCapability = exports.CAPABILITY_KEY = void 0;
exports.CAPABILITY_KEY = 'requiresCapability';
const RequiresCapability = (functionCode, level) => (target, propertyKey, descriptor) => {
    const existing = Reflect.getMetadata(exports.CAPABILITY_KEY, descriptor.value) ?? [];
    Reflect.defineMetadata(exports.CAPABILITY_KEY, [...existing, { functionCode, level }], descriptor.value);
    return descriptor;
};
exports.RequiresCapability = RequiresCapability;
//# sourceMappingURL=requires-capability.decorator.js.map