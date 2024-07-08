import "express-async-errors";
import bodyParser from 'body-parser';
import cors from "cors";
import express, { type Express } from 'express'
import setupRoutes from "../config/routes";
import env from "../config/env";
import { errorMiddlwere } from "../middlewares/error";

export const setupApp = async (): Promise<Express> => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    setupRoutes(app)

    app.use(errorMiddlwere)

    app.listen(env.hstockApiPort, () => {
        console.log(`Running in port ${env.hstockApiPort}!`);
    })
    return app
}

