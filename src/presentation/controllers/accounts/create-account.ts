import { Controller } from "../../../data/protocols/http";
import { CreateAccountDomain } from "../../../domain/usecases/accounts/register";

export class CreateAccountController implements Controller {

    constructor(private readonly accountRegistration: CreateAccountDomain){}

    async handle(request: CreateAccountDomain.Params): Promise<Controller.Result> {
        const account = await this.accountRegistration.create(request)
        return { statusCode: 200, body: account}
    }
}