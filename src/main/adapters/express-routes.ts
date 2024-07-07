import { type Controller } from "@/data/protocols/http";
import { type Request, type Response } from "express";

export const adaptExpressRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {}),
            body: req.body,
            headers: req.headers
        }
        const httpResponse = await controller.handle(request)
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            })
        }
    }
}