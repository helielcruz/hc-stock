import { Router } from 'express'
import { makeGetCategoriesController, makeCreateCategorieController, makeUpdateCategorieController } from '../factories/controllers/categories'
import { adaptExpressRoute } from '../adapters/express-routes'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

export default (routerInstance: Router) => {

    routerInstance.get('/categories/:id', authMiddleware, adaptExpressRoute(makeGetCategoriesController()))
    routerInstance.post('/categories', authMiddleware, adaptExpressRoute(makeCreateCategorieController()))
    routerInstance.patch('/categories', authMiddleware, adaptExpressRoute(makeUpdateCategorieController()))

}