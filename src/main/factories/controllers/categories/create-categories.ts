import { CategoriesRepository } from "@/infra/db/typeorm/repositories/categories"
import { ItemRegister } from "../../../../data/usecases/items"
import { ItemsRepository } from "../../../../infra/db/typeorm/repositories/items/items"
import { CreateItemController } from "../../../../presentation/controllers/items"
import { CategoriesRegister } from "../../../../data/usecases/categories"
import { CreateCategoriesController } from "../../../../presentation/controllers/categories"

export const makeCreateCategorieController = () => {
    const categoriesRepository = new CategoriesRepository()
    const categoriesResgister = new CategoriesRegister(categoriesRepository)

    return new CreateCategoriesController(categoriesResgister)
}