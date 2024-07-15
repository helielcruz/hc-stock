import { Router } from 'express'
import { makeCreateAccount, makeGetOneAccountController, makeUpdateAccount } from '../factories/controllers/accounts'
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
    routerInstance.get('/accounts/:email', authMiddleware, adaptExpressRoute(makeGetOneAccountController()))
    routerInstance.post('/accounts', authMiddleware, adaptExpressRoute(makeCreateAccount()))
    routerInstance.patch('/accounts', authMiddleware, adaptExpressRoute(makeUpdateAccount()))

}