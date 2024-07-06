import "reflect-metadata"
import { DataSource } from "typeorm";
import { Accounts, Actions, Categories, Items, Logs, Roles } from "../models";
import env from '../../../../main/config/env'


const entities = [
    Accounts,
    Roles,
    Items,
    Categories,
    Logs,
    Actions
]

const migrations: any = []

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    schema: "hcstock",
    username: env.postgresUser,
    password: env.postgresPassword,
    database: env.postgresDB,
    synchronize: true,
    logging: true,
    entities: entities,
    subscribers: [],
    migrations: migrations,
})