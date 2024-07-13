export interface IUpdateAccount {
    update(params: IUpdateAccount.Params): Promise<IUpdateAccount.Result>
}

export namespace IUpdateAccount {
    export type Params = {
        name?: string
        lastname?: string
        email: string
        password?: string
        role_id?: number
    }
    export type Result = boolean
}