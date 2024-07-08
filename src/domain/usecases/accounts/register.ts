export interface CreateAccountDomain {
    create(params: CreateAccountDomain.Params): Promise<CreateAccountDomain.Result>
}

export namespace CreateAccountDomain {
    export type Params = {
        name: string
        lastname: string
        email: string
        password: string
        role_id: number
    }

    export type Result = boolean
}