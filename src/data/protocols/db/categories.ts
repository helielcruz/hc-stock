export interface CategoriesRepositoryProtocol {
    create(params: CreateCategoriesRepository.Params): Promise<CreateCategoriesRepository.Result>
    update(params: UpdateCategoriesRepository.Params): Promise<UpdateCategoriesRepository.Result>
    find(): Promise<FindCategoriesRepository.Result[]>
}

export namespace CreateCategoriesRepository {
    export type Params = {
        label: string
    }
    export type Result = boolean
}

export namespace UpdateCategoriesRepository {
    export type Params = {
        id: number
        label: string
    }
    export type Result = boolean
}

export namespace FindCategoriesRepository {

    export type Result = {
        id: number
        label: string
    } | null
}

