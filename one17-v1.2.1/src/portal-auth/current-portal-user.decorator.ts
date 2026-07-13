import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { AuthenticatedPortalUser } from './portal-auth.types';

export const CurrentPortalUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): AuthenticatedPortalUser => {
    const req = ctx.switchToHttp().getRequest();
    return req.portalUser;
  },
);
