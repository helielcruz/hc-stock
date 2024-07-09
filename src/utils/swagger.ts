import {Express, Request, Response} from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import SwaggerUi from 'swagger-ui-express'
import {version} from '../../package.json'

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
      version,
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "x-access-token",
          bearerFormat: "JWT"
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      }
    ]
  },
  apis: ['../main/routes/*', './schemas.json']
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app: Express, port: string | number) {
  // Swagger Page

  app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get("docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec)

  })

}

export default swaggerDocs
