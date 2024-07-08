export interface AccountAuthentication {
    login(params: AccountAuthentication.Params): Promise<AccountAuthentication.Result>
}

export namespace AccountAuthentication {
    export type Params = {
        email: string
        password: string
    }

    export type Result = {
        id: number
        token: string
    } | boolean
}