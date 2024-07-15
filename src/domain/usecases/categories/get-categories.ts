export interface IGetCategories {
    get(): Promise<IGetCategories.Result>
}

export namespace IGetCategories {
    
    export type Result = {
        id: number
        label: string
    } | null
}