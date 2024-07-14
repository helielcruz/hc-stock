import { IGetOneItem } from "../../../domain/usecases/items";
import { NotFoundError } from "../../../presentation/helpers/api-errors";
import { ItemsRepository } from "../../../infra/db/typeorm/repositories/items/items";

export class GetOneItem implements IGetOneItem {

    constructor(private readonly itemsRepository: ItemsRepository){}

    async get(params: IGetOneItem.Params): Promise<IGetOneItem.Result> {
        const result = await this.itemsRepository.findOne(params)
        if(!result) throw new NotFoundError()
        return result
    }
}