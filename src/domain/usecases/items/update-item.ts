export interface IUpdateItem {
    update(params: IUpdateItem.Params): Promise<IUpdateItem.Result>
}

export namespace IUpdateItem {
    export type Params = {
        id: number
        title?: string
        description?: string
        category_id?: number
        account_id: number
    }
    export type Result = boolean
}