import { Router } from 'express'
import { adaptExpressRoute } from '../adapters/express-routes'
import { makeAuthentication } from '../factories/controllers/auth/authentication'

const router = Router()

export default (routerInstance: Router) => {
    routerInstance.post('/login', adaptExpressRoute(makeAuthentication()))
}

