import { Controller } from "../../../data/protocols/http";
import { CreateCategoriesDomain } from "../../../domain/usecases/categories";

export class CreateCategoriesController implements Controller {

    constructor(private readonly categorieRegister: CreateCategoriesDomain){}

    async handle(request: CreateCategoriesDomain.Params): Promise<Controller.Result> {
        const account = await this.categorieRegister.create(request)
        return { body: account }
    }
}