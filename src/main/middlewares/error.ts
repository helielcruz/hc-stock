import { ApiError } from '../../presentation/helpers/api-errors';
import { NextFunction, Request, Response } from 'express'

export const errorMiddlwere = (error: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.statusCode ?? 500
    const message = statusCode ? error.message : 'Internal Server Error'
    return res.status(statusCode).json({ message })
}