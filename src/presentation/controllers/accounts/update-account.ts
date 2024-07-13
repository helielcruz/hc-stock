import { IUpdateAccount } from "@/domain/usecases/accounts";
import { Controller } from "../../../data/protocols/http";

export class UpdateAccountController implements Controller {

    constructor(private readonly accountRegistration: IUpdateAccount){}

    async handle(request: IUpdateAccount.Params): Promise<Controller.Result> {
        const account = await this.accountRegistration.update(request)
        return { body: account }
    }
}