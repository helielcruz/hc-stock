import { CategoriesRepository } from "../../../../infra/db/typeorm/repositories/categories"
import { UpdateCategories } from "../../../../data/usecases/categories"
import { UpdateCategorieController } from "../../../../presentation/controllers/categories"

export const makeUpdateCategorieController = () => {
    const categoriesRepository = new CategoriesRepository()
    const updateCategories = new UpdateCategories(categoriesRepository)

    return new UpdateCategorieController(updateCategories)
}