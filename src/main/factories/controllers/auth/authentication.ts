import { Authentication } from "../../../../data/usecases/auth/auth"
import { AccountsRepository } from "../../../../infra/db/typeorm/repositories/accounts/accounts"
import { AuthenticationController } from "../../../../presentation/controllers/auth/authentication-controller"

export const makeAuthentication = () =>  {
    const accountsRepository = new AccountsRepository()
    const authentication = new Authentication(accountsRepository)

    return new AuthenticationController(authentication)
}