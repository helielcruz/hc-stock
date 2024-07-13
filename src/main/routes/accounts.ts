import { Router } from 'express'
import { makeCreateAccount, makeUpdateAccount } from '../factories/controllers/accounts'
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
    routerInstance.patch('/account', authMiddleware, adaptExpressRoute(makeUpdateAccount()))

}