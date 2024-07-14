import { ItemsRepositoryProtocol, CreateItemsRepository, UpdateItemsRepository, FindOneItemsRepository } from "../../../../../data/protocols/db";
import { AppDataSource } from "../../config/data-source";
import { Items } from "../../models";
import { ApiError, BadRequestError, UnauthorizedError } from "../../../../../presentation/helpers/api-errors";

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
        return await itemsRepository.findOne({ where: { id: parseInt(params.id) } })
    }
}