import { IGetOneAccount } from "../../../domain/usecases/accounts/get-one-account";
import { AccountsRepository } from "../../../infra/db/typeorm/repositories/accounts/accounts";
import { NotFoundError } from "../../../presentation/helpers/api-errors";

export class GetOneAccount implements IGetOneAccount {

    constructor(private readonly accountsRepository: AccountsRepository){}

    async get(params: IGetOneAccount.Params): Promise<IGetOneAccount.Result> {
        const result = await this.accountsRepository.findOne(params)
        if(!result) throw new NotFoundError()
        delete result.password
        return result
    }
}