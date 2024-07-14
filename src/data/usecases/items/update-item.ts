import { ItemsRepositoryProtocol } from "../../../data/protocols/db";
import { IUpdateItem } from "../../../domain/usecases/items";

export class UpdateItem implements IUpdateItem {
    
    constructor(protected readonly itemsRepositoryProtocol: ItemsRepositoryProtocol){}
    
    async update(params: IUpdateItem.Params): Promise<IUpdateItem.Result> {
        return (await this.itemsRepositoryProtocol.update(params) ? true : false)
    }

}