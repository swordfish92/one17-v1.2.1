"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentPortalUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentPortalUser = (0, common_1.createParamDecorator)((_, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.portalUser;
});
//# sourceMappingURL=current-portal-user.decorator.js.map