import { CreateItemDomain } from "../../../domain/usecases/items";
import { ItemsRepositoryProtocol } from "../../../data/protocols/db";
import { bcryptHashGenerate } from "../../../main/adapters/bcrypt-adapter";

export class ItemRegister implements CreateItemDomain {

    constructor(protected readonly itemsRepositoryProtocol: ItemsRepositoryProtocol){}

    async create(params: CreateItemDomain.Params): Promise<CreateItemDomain.Result> {
        return (await this.itemsRepositoryProtocol.create(params) ? true : false)
    }
}