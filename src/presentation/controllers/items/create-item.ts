import { CreateItemDomain } from "../../../domain/usecases/items";
import { Controller } from "../../../data/protocols/http";

export class CreateItemController implements Controller {

    constructor(private readonly itemRegister: CreateItemDomain){}

    async handle(request: CreateItemDomain.Params): Promise<Controller.Result> {
        const account = await this.itemRegister.create(request)
        return { body: account }
    }
}