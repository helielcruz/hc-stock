import bcrypt from "bcryptjs";

export const bcryptHashGenerate = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export const bcryptCompare = (password: string, hash: string = '') => {
    return bcrypt.compareSync(password, hash);
}