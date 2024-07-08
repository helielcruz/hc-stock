import { Controller } from "../../../data/protocols/http";
import { AccountAuthentication } from "../../../domain/usecases/auth/auth";

export class AuthenticationController implements Controller {

    constructor(private readonly accountAuthentication: AccountAuthentication){}

    async handle(request: AccountAuthentication.Params): Promise<Controller.Result> {
        return { body: await this.accountAuthentication.login(request) }
    }

}