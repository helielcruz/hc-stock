// swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';

const options: any = {
  swaggerDefinition: {
    info: {
      title: 'Minha API',
      description: 'Documentação da API',
      version: '1.0.0',
    }
  },
  apis: []
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
