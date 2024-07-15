import { Controller } from "../../../data/protocols/http";
import { IUpdateCategories } from "../../../domain/usecases/categories";

export class UpdateCategorieController implements Controller {

    constructor(private readonly categorieRegister: IUpdateCategories){}

    async handle(request: IUpdateCategories.Params): Promise<Controller.Result> {
        const account = await this.categorieRegister.update(request)
        return { body: account }
    }
}