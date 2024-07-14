import { ItemsRepository } from "../../../../infra/db/typeorm/repositories/items/items"
import { UpdateItem } from "../../../../data/usecases/items"
import { UpdateItemController } from "../../../../presentation/controllers/items"

export const makeUpdateAccount = () => {
    const itemsRepository = new ItemsRepository()
    const updateItem = new UpdateItem(itemsRepository)

    return new UpdateItemController(updateItem)
}