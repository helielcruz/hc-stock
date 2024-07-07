import bodyParser from 'body-parser';
import cors from "cors";
import express, { type Express } from 'express'
import setupRoutes from "../config/routes";

export const setupApp = async (): Promise<Express> => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    setupRoutes(app)
    return app
}

