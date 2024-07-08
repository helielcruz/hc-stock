import { Router } from 'express'
import { makeCreateAccount } from '../factories/controllers/accounts/create-account'
import { adaptExpressRoute } from '../adapters/express-routes'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

export default (routerInstance: Router) => {
    routerInstance.post('/account', authMiddleware, adaptExpressRoute(makeCreateAccount()))
}