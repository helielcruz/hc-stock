export class ApiError extends Error {
    constructor(message: string, public readonly statusCode: number) {
        super(message)
    }
}

export class BadRequestError extends ApiError {
    constructor(message?: string){
        super(message ?? 'Bad Request!', 400)
    }
}

export class NotFoundError extends ApiError {
    constructor(message?: string){
        super(message ?? 'Not Found!', 404)
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message?: string){
        super(message ?? 'Unauthorized!', 401)
    }
}