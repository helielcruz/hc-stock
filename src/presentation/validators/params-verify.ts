import { BadRequestError } from "../helpers/api-errors"

export const paramsVerify = (params: any): void | BadRequestError => {

    if(((typeof params) === "string" || (typeof params) === "number") && !params) new BadRequestError("Missing param "+Object.keys(params))

    Object.values(params).some((value, index) => {
        if(!value) throw new BadRequestError("Missing param "+Object.keys(params)[index])
    })

    return
}