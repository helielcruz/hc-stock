export interface CreateCategoriesDomain {
    create(params: CreateCategoriesDomain.Params): Promise<CreateCategoriesDomain.Result>
}

export namespace CreateCategoriesDomain {
    export type Params = {
        label: string
    }
    export type Result = boolean
}