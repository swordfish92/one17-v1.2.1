import type { Request, Response, NextFunction } from 'express';
export declare function originCheckMiddleware(getAllowedOrigins: () => string[]): (req: Request, res: Response, next: NextFunction) => void;
