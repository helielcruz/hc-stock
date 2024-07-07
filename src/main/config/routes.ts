import { type Express, Router } from 'express'
import { readdirSync } from "fs";
import path from 'path';

export default (http: Express) => {
    const router = Router()
    http.use('/v1', router)
    readdirSync(path.join(__dirname, '/../routes')).map(async (file) => {
        if (!file.endsWith('map') && !file.endsWith('test.ts') && !file.endsWith('.spec.ts')) {
            ;(await import(`../routes/${file}`)).default(router)
        }
    })
}