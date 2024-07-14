import { ItemRegister } from "../../../../data/usecases/items"
import { ItemsRepository } from "../../../../infra/db/typeorm/repositories/items/items"
import { CreateItemController } from "../../../../presentation/controllers/items"

export const makeCreateItem = () => {
    const itemsRepository = new ItemsRepository()
    const itemResgister = new ItemRegister(itemsRepository)

    return new CreateItemController(itemResgister)
}