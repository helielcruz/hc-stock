import { CategoriesRepositoryProtocol, CreateCategoriesRepository, UpdateCategoriesRepository, FindCategoriesRepository } from "../../../../../data/protocols/db";
import { AppDataSource } from "../../config/data-source";
import { Categories, Items } from "../../models";
import { BadRequestError } from "../../../../../presentation/helpers/api-errors";

export class CategoriesRepository implements CategoriesRepositoryProtocol {
    async create(params: CreateCategoriesRepository.Params): Promise<CreateCategoriesRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const categoriesRepository = AppDataSource.getRepository(Categories)
        
        return (categoriesRepository.save(params) ? true : false)

    }

    async update(params: UpdateCategoriesRepository.Params): Promise<UpdateCategoriesRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const categoriesRepository = AppDataSource.getRepository(Categories)
        return (await categoriesRepository.update({ id: params.id }, {...params})).affected ? true : false

    }

    async find(): Promise<FindCategoriesRepository.Result[]> {
        const categoriesRepository = AppDataSource.getRepository(Categories)
        const result = await categoriesRepository.find()

        return result

    }
}