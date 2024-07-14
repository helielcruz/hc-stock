import { Router } from 'express'
import { makeCreateItemController, makeGetOneItemController, makeUpdateItemController } from '../factories/controllers/items'
import { adaptExpressRoute } from '../adapters/express-routes'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

export default (routerInstance: Router) => {

    routerInstance.get('/item/:id', authMiddleware, adaptExpressRoute(makeGetOneItemController()))
    routerInstance.post('/item', authMiddleware, adaptExpressRoute(makeCreateItemController()))
    routerInstance.patch('/item', authMiddleware, adaptExpressRoute(makeUpdateItemController()))

}