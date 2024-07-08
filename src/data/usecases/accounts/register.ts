import { AccountRepositoryProtocol } from "../../../data/protocols/db";
import { CreateAccountDomain } from "../../../domain/usecases/accounts/register";
import { bcryptHashGenerate } from "../../../main/adapters/bcrypt-adapter";

export class AccountRegistration implements CreateAccountDomain {

    constructor(protected readonly accountRepositoryProtocol: AccountRepositoryProtocol){}

    async create(params: CreateAccountDomain.Params): Promise<CreateAccountDomain.Result> {
        params.password = bcryptHashGenerate(params.password)
        return (await this.accountRepositoryProtocol.create(params) ? true : false)
    }
}