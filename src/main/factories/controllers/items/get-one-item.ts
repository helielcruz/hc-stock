import { ItemsRepository } from "../../../../infra/db/typeorm/repositories/items/items"
import { GetOneItem } from "../../../../data/usecases/items"
import { GetOneItemController } from "../../../../presentation/controllers/items"

export const makeGetOneItemController = () => {
    const itemsRepository = new ItemsRepository()
    const getOneItem = new GetOneItem(itemsRepository)

    return new GetOneItemController(getOneItem)
}