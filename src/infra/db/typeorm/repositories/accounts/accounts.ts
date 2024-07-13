import { AccountRepositoryProtocol, CreateAccountRepository, findOneAccountRepository, UpdateAccountRepository } from "../../../../../data/protocols/db";
import { AppDataSource } from "../../config/data-source";
import { Accounts } from "../../models";
import { ApiError, BadRequestError, UnauthorizedError } from "../../../../../presentation/helpers/api-errors";

export class AccountsRepository implements AccountRepositoryProtocol {
    async create(params: CreateAccountRepository.Params): Promise<CreateAccountRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const accountRepository = AppDataSource.getRepository(Accounts)
        if(await accountRepository.findOne({where: {email: params.email}})) return false
        return (await accountRepository.save(params) ? true : false)

    }

    async update(params: UpdateAccountRepository.Params): Promise<UpdateAccountRepository.Result> {
        
        Object.values(params).some((value, index) => {
            if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
        })
        
        const accountRepository = AppDataSource.getRepository(Accounts)
        return (await accountRepository.update({ email: params.email }, {...params})).affected ? true : false

    }

    async findOne(params: findOneAccountRepository.Params): Promise<findOneAccountRepository.Result> {
        const accountRepository = AppDataSource.getRepository(Accounts)
        return await accountRepository.findOne({ where: { email: params.email } })
    }
}