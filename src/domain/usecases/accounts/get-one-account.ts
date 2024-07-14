export interface IGetOneAccount {
    get(params: IGetOneAccount.Params): Promise<IGetOneAccount.Result>
}

export namespace IGetOneAccount {
    export type Params = { email: string }
    export type Result = {
        id: number
        name: string
        lastname: string
        email: string
        role_id: number
    }
}