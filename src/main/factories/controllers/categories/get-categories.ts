import { CategoriesRepository } from "../../../../infra/db/typeorm/repositories/categories"
import { GetCategories } from "../../../../data/usecases/categories"
import { GetCategoriesController } from "../../../../presentation/controllers/categories"

export const makeGetCategoriesController = () => {
    const categoriesRepository = new CategoriesRepository()
    const getCategories = new GetCategories(categoriesRepository)

    return new GetCategoriesController(getCategories)
}