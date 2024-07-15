import { IUpdateCategories } from "@/domain/usecases/categories";
import { CategoriesRepositoryProtocol } from "../../../data/protocols/db";

export class UpdateCategories implements IUpdateCategories {
    
    constructor(protected readonly categoriesRepositoryProtocol: CategoriesRepositoryProtocol){}
    
    async update(params: IUpdateCategories.Params): Promise<IUpdateCategories.Result> {
        return (await this.categoriesRepositoryProtocol.update(params) ? true : false)
    }

}