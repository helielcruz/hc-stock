import { Router } from 'express'
import { makeCreateAccount } from '../factories/controllers/accounts/create-account'
import { adaptExpressRoute } from '../adapters/express-routes'

const router = Router()

export default (routerInstance: Router) => {
    routerInstance.post('/account', adaptExpressRoute(makeCreateAccount()))
}