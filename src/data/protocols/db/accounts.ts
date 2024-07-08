export interface AccountRepositoryProtocol {
    create(params: CreateAccountRepository.Params): Promise<CreateAccountRepository.Result>
    findOne(email: findOneAccountRepository.Params): Promise<findOneAccountRepository.Result>
}

export namespace CreateAccountRepository {
    export type Params = {
        name: string
        lastname: string
        email: string
        password: string
        role_id: number
    }
    export type Result = boolean
}

export namespace findOneAccountRepository {
    export type Params = {
        email: string
    }

    export type Result = {
        id: number
        name: string
        lastname: string
        email: string
        password: string
        role_id: number
    } | null
}

