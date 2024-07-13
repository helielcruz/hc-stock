import { UpdateAccount } from "../../../../data/usecases/accounts"
import { AccountsRepository } from "../../../../infra/db/typeorm/repositories/accounts/accounts"
import { UpdateAccountController } from "../../../../presentation/controllers/accounts"

export const makeUpdateAccount = () => {
    const accountsRepository = new AccountsRepository()
    const updateAccount = new UpdateAccount(accountsRepository)

    return new UpdateAccountController(updateAccount)
}