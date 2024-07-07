import { AccountRegistration } from "../../../../data/usecases/accounts/register"
import { AccountsRepository } from "../../../../infra/db/typeorm/repositories/accounts/accounts"
import { CreateAccountController } from "../../../../presentation/controllers/accounts/create-account"

export const makeCreateAccount = () => {
    const accountsRepository = new AccountsRepository()
    const accountRegistration = new AccountRegistration(accountsRepository)

    return new CreateAccountController(accountRegistration)
}