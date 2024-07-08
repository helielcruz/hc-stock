import dotenv from "dotenv";

const path = process.env.NODE_ENV === 'dev' ? 'env.local' : '.env'

const data = dotenv.config({path: path })

export default {
    hstockApiPort: parseInt(`${process.env.HSTOCK_API_PORT}`) ?? '',
    postgresUser: process.env.POSTGRES_USER ?? '',
    postgresPassword: process.env.POSTGRES_PASSWORD ?? '',
    postgresDB: process.env.POSTGRES_DB ?? '',
    secretKey: process.env.SECRET_KEY ?? '',
}