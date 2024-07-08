import "express-async-errors";
import bodyParser from 'body-parser';
import cors from "cors";
import express, { type Express } from 'express'
import setupRoutes from "../config/routes";
import env from "../config/env";
import { errorMiddlwere } from "../middlewares/error";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../__docs/swagger'; // Importe o arquivo de configuração

export const setupApp = async (): Promise<Express> => {
    const app = express()
    app.use(cors())
    app.use(bodyParser.json())
    setupRoutes(app)
    
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.use(errorMiddlwere)

    app.listen(env.hstockApiPort, () => {
        console.log(`Running in port ${env.hstockApiPort}!`);
    })
    return app
}

