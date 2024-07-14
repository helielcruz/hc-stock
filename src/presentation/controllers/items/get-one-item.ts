import { IGetOneItem } from "../../../domain/usecases/items";
import { Controller } from "../../../data/protocols/http";
import { paramsVerify } from "../../../presentation/validators/params-verify";

export class GetOneItemController implements Controller {
    constructor(private readonly iGetOneItem: IGetOneItem){}
    async handle(request?: any): Promise<any> {
        paramsVerify(request.id)
        return await this.iGetOneItem.get(request)
    }
}