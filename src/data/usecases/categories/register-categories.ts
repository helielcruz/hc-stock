import { CategoriesRepositoryProtocol } from "../../../data/protocols/db";
import { CreateCategoriesDomain } from "../../../domain/usecases/categories";

export class CategoriesRegister implements CreateCategoriesDomain {

    constructor(protected readonly categoriesRepositoryProtocol: CategoriesRepositoryProtocol){}

    async create(params: CreateCategoriesDomain.Params): Promise<CreateCategoriesDomain.Result> {
        return (await this.categoriesRepositoryProtocol.create(params) ? true : false)
    }
}