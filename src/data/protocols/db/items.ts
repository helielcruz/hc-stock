export interface ItemsRepositoryProtocol {
    create(params: CreateItemsRepository.Params): Promise<CreateItemsRepository.Result>
    update(params: UpdateItemsRepository.Params): Promise<UpdateItemsRepository.Result>
    findOne(email: FindOneItemsRepository.Params): Promise<FindOneItemsRepository.Result>
}

export namespace CreateItemsRepository {
    export type Params = {
        title: string
        description: string
        category_id: number
        account_id: number
    }
    export type Result = boolean
}

export namespace UpdateItemsRepository {
    export type Params = {
        id: number
        title?: string
        description?: string
        category_id?: number
        account_id: number
    }
    export type Result = boolean
}

export namespace FindOneItemsRepository {
    export type Params = {
        id: string
    }

    export type Result = {
        id: number
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
        created_at: Date
        updated_at: Date
    } | null
}

