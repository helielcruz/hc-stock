import { GetOneAccountController } from "../../../../presentation/controllers/accounts"
import { GetOneAccount } from "../../../../data/usecases/accounts"
import { AccountsRepository } from "../../../../infra/db/typeorm/repositories/accounts/accounts"

export const makeGetOneAccountController = () => {
    const accountsRepository = new AccountsRepository()
    const getOneAccount = new GetOneAccount(accountsRepository)

    return new GetOneAccountController(getOneAccount)
}