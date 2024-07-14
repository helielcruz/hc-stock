export interface IUpdateItem {
    update(params: IUpdateItem.Params): Promise<IUpdateItem.Result>
}

export namespace IUpdateItem {
    export type Params = {
        id: number
        title?: string
        description?: string
        category: {
            label: string
        }
        account: {
            name: string
            lastname: string
            email: string
        }
        password?: string
        role_id?: number
    }
    export type Result = boolean
}