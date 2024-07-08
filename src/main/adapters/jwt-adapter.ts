import jwt from "jsonwebtoken";
import env from "../config/env";
import { UnauthorizedError } from "../../presentation/helpers/api-errors";

export const jwtGenerateToken = (id: number, email: string) => {
    return jwt.sign({
        data: {id, email}
    }, env.secretKey, { expiresIn: 20000 });
}

export const jwtVerifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, env.secretKey);
        return decoded;
    } catch (err) {
        throw new UnauthorizedError();
    }
}