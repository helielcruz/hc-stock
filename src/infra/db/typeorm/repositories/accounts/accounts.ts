import { AccountRepositoryProtocol, CreateAccountRepository } from "@/data/protocols/db";
import { AppDataSource } from "../../config/data-source";
import { Accounts } from "../../models";

export class AccountsRepository implements AccountRepositoryProtocol {
    async create(params: CreateAccountRepository.Params): Promise<CreateAccountRepository.Result> {
        const accountRepository = AppDataSource.getRepository(Accounts)
        return (await accountRepository.save(params) ? true : false)
    }
}