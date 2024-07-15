import { ItemsRepositoryProtocol, CreateItemsRepository, UpdateItemsRepository, FindOneItemsRepository } from "../../../../../data/protocols/db";
import { AppDataSource } from "../../config/data-source";
import { Items } from "../../models";
import { BadRequestError } from "../../../../../presentation/helpers/api-errors";

export class ItemsRepository implements ItemsRepositoryProtocol {
    async create(params: CreateItemsRepository.Params): Promise<CreateItemsRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const itemsRepository = AppDataSource.getRepository(Items)
        
        return (await itemsRepository.save(params) ? true : false)

    }

    async update(params: UpdateItemsRepository.Params): Promise<UpdateItemsRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const itemsRepository = AppDataSource.getRepository(Items)
        return (await itemsRepository.update({ id: params.id }, {...params})).affected ? true : false

    }

    async findOne(params: FindOneItemsRepository.Params): Promise<FindOneItemsRepository.Result> {
        const itemsRepository = AppDataSource.getRepository(Items)
        const result = await itemsRepository.query(`
            SELECT i.id, i.title, i.description, i.created_at,
            JSON_BUILD_OBJECT( 'id', a.id, 'name', a.name, 'lastname', a.lastname, 'email', a.email ) AS account,
            JSON_BUILD_OBJECT( 'id', c.id, 'label', c.label ) AS categorie
            FROM hcstock.items as i
            INNER JOIN hcstock.categories as c ON c.id = i.category_id
            INNER JOIN hcstock.accounts as a ON a.id = i.account_id
            WHERE i.id = ${params.id}`)

        return result

    }
}