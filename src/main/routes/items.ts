import { Router } from 'express'
import { makeCreateItemController, makeGetOneItemController, makeUpdateItemController } from '../factories/controllers/items'
import { adaptExpressRoute } from '../adapters/express-routes'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

export default (routerInstance: Router) => {

    routerInstance.get('/items/:id', authMiddleware, adaptExpressRoute(makeGetOneItemController()))
    routerInstance.post('/items', authMiddleware, adaptExpressRoute(makeCreateItemController()))
    routerInstance.patch('/items', authMiddleware, adaptExpressRoute(makeUpdateItemController()))

}