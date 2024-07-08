export interface Controller {
    handle(request?: any): Promise<any>
}

export namespace Controller {
    export type Result = {
        body: any
    }
}