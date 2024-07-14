import { IUpdateAccount } from "@/domain/usecases/accounts";
import { Controller } from "../../../data/protocols/http";
import { IUpdateItem } from "@/domain/usecases/items";

export class UpdateItemController implements Controller {

    constructor(private readonly itemRegister: IUpdateItem){}

    async handle(request: IUpdateItem.Params): Promise<Controller.Result> {
        const account = await this.itemRegister.update(request)
        return { body: account }
    }
}