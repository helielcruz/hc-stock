import { type Controller } from "../../data/protocols/http";
import { type Request, type Response } from "express";

export const adaptExpressRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {})
        }
        const { body } = await controller.handle(request)
        
        res.json(body)
    }
}

export const adaptExpressAuthRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...(req.body || {}),
            ...(req.params || {}),
            ...(req.query || {}),
            headers: req.headers
        }
        const { body } = await controller.handle(request)
        
        res.json(body)
    }
}