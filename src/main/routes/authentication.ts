import { Router } from 'express'
import { adaptExpressAuthRoute } from '../adapters/express-routes'
import { makeAuthentication } from '../factories/controllers/auth/authentication'

const router = Router()

export default (routerInstance: Router) => {
    routerInstance.post('/login', adaptExpressAuthRoute(makeAuthentication()))
}

