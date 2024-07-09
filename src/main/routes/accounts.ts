import { Router } from 'express'
import { makeCreateAccount } from '../factories/controllers/accounts/create-account'
import { adaptExpressRoute } from '../adapters/express-routes'
import { authMiddleware } from '../middlewares/auth'

const router = Router()

export default (routerInstance: Router) => {
    /**
     * @openapi
     * /account:
     * post:
     *  tag:
     *      - Accounts
     *      description: Accounts routes
     *      responses:
     *          200:
     *              description: Request Ok
     * 
     */
    routerInstance.post('/account', authMiddleware, adaptExpressRoute(makeCreateAccount()))
}