import { bcryptHashGenerate } from "../../../main/adapters/bcrypt-adapter";
import { IUpdateAccount } from "../../../domain/usecases/accounts/update-account";
import { AccountRepositoryProtocol } from "../../../data/protocols/db";

export class UpdateAccount implements IUpdateAccount {
    
    constructor(protected readonly accountRepositoryProtocol: AccountRepositoryProtocol){}
    
    async update(params: IUpdateAccount.Params): Promise<IUpdateAccount.Result> {
       if(params.password) params.password = bcryptHashGenerate(params.password)
        return (await this.accountRepositoryProtocol.update(params) ? true : false)
    }

}