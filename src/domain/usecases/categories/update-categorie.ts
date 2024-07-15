export interface IUpdateCategories {
    update(params: IUpdateCategories.Params): Promise<IUpdateCategories.Result>
}

export namespace IUpdateCategories {
    export type Params = {
        id: number
        label: string
    }
    export type Result = boolean
}