export interface CreateItemDomain {
    create(params: CreateItemDomain.Params): Promise<CreateItemDomain.Result>
}

export namespace CreateItemDomain {
    export type Params = {
        title: string
        description: string
        category_id: number
        account_id: number
    }
    export type Result = boolean
}