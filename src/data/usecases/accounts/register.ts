import { AccountRepositoryProtocol } from "@/data/protocols/db";
import { CreateAccountDomain } from "@/domain/usecases/accounts/register";

export class AccountRegistration implements CreateAccountDomain {

    constructor(protected readonly accountRepositoryProtocol: AccountRepositoryProtocol){}

    async create(params: CreateAccountDomain.Params): Promise<CreateAccountDomain.Result> {
        return (await this.accountRepositoryProtocol.create(params) ? true : false)
    }
}