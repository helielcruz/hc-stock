import { Controller } from "../../../data/protocols/http";
import { IGetOneAccount } from "../../../domain/usecases/accounts/get-one-account";
import { paramsVerify } from "../../../presentation/validators/params-verify";

export class GetOneAccountController implements Controller {
    constructor(private readonly iGetOneAccount: IGetOneAccount){}
    async handle(request?: any): Promise<any> {
        paramsVerify(request.email)
        const data = await this.iGetOneAccount.get(request)
        return data
    }
}