export interface IGetOneItem {
    get(params: IGetOneItem.Params): Promise<IGetOneItem.Result>
}

export namespace IGetOneItem {
    export type Params = { id: string }
    
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