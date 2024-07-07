export interface AccountRepositoryProtocol {
    create(params: CreateAccountRepository.Params): Promise<CreateAccountRepository.Result>
}

export namespace CreateAccountRepository {
    export type Params = {
        name: string
        lastname: string
        email: string
        role_id: number
    }
    export type Result = boolean
}

