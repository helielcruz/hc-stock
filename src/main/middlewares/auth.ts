import { Request, Response, NextFunction } from "express";
import { jwtVerifyToken } from "../adapters/jwt-adapter";
import { UnauthorizedError } from "../../presentation/helpers/api-errors";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token: string | string[] = req.headers['x-access-token']

    if(!token) throw new UnauthorizedError()
    
    const tokenVerified = jwtVerifyToken(Array.isArray(token) ? token[0] : token)
    if(tokenVerified) return next()
}