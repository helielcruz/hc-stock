import { Controller } from "../../../data/protocols/http";
import { IGetCategories } from "../../../domain/usecases/categories";

export class GetCategoriesController implements Controller {
    constructor(private readonly iGetCategories: IGetCategories){}
    async handle(): Promise<any> {
        return await this.iGetCategories.get()
    }
}