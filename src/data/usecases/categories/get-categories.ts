import { NotFoundError } from "../../../presentation/helpers/api-errors";
import { IGetCategories } from "../../../domain/usecases/categories";
import { CategoriesRepositoryProtocol } from "../../../data/protocols/db";

export class GetCategories implements IGetCategories {

    constructor(private readonly categoriesRepository: CategoriesRepositoryProtocol){}

    async get(): Promise<IGetCategories.Result[]> {
        const result = await this.categoriesRepository.find()
        if(!result) throw new NotFoundError()
        return result
    }
}