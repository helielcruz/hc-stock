export interface CreateItemDomain {
    create(params: CreateItemDomain.Params): Promise<CreateItemDomain.Result>
}

export namespace CreateItemDomain {
    export type Params = {
        title: string
        description: string
        category: {
            label: string
        }
        account: {
            name: string
            lastname: string
            email: string
        }
        password: string
        role_id: number
    }
    export type Result = boolean
}